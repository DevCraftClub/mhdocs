---
tags:
  - API
  - OAuth2
  - DLE
title: "Авторизация - DLE API"
description: "AuthToken-only на ресурсах; credential_type; /me; DEMO_MODE."
author: "Maxim Harder"
---

# Авторизация

## Ресурсы — только AuthToken

```http
Authorization: Bearer <AuthToken>
```

`<AuthToken>` — `access_token` из `POST /oauth/token`. **Сырой API-ключ на `/table/…` и прочих ресурсах не принимается.**

Исключения без Bearer: `GET /health`, `GET /.well-known/oauth-authorization-server`.

Trailing slash опционален: `/me` и `/me/` одинаковы.

---

## Выдача токена: `credential_type`

```bash
curl -sS -X POST 'https://ВАШ_САЙТ/api/v2/oauth/token' \
  -H 'Content-Type: application/json' \
  -d '{"credential_type":"api_key","api_key":"…"}'
```

| credential_type | Поля | Резолв |
| --- | --- | --- |
| `api_key` | `api_key` | активный ключ |
| `auth` | `username`, `password` | DLE verify → ключ юзера → гость → `access_denied` |
| `oauth_client` | `client_id`, `client_secret` | client_credentials → ключ клиента |

Рядом поддерживаются `grant_type`: `authorization_code`, `refresh_token`, `client_credentials`, `password`.

---

## Identity: `/me` и `/oauth/userinfo`

`GET /api/v2/me` и `GET /api/v2/oauth/userinfo` с Bearer отдают субъект токена: `sub`/`user_id`, `name`, `email`, `user_group`, `api_key_id`, `access_level`.

Secure-маски ПДн применяются к CRUD `/table`, **не** к identity `/me`/`userinfo`. Пароли, hash, сырой ключ и `client_secret` никогда не отдаются.

---

## OAuth Authorization Server

Discovery (без Bearer):

`GET /api/v2/.well-known/oauth-authorization-server`

Поля: `issuer`, `authorization_endpoint`, `token_endpoint`, `revocation_endpoint`, `userinfo_endpoint`, grants/PKCE/`credential_types_supported`.

`/oauth/authorize` — сессия DLE (редирект на логин, если гость) → code + redirect на зарегистрированный `redirect_uri` (+ PKCE). В админке OAuth — копируемые URL.

---

## DEMO_MODE / DLEAPI_SECURE

В `ROOT_DIR/.env`:

```env
DEMO_MODE=false
DLEAPI_SECURE=false
```

При `DEMO_MODE=true`: secure принудительно; успешная проверка credentials **не** выдаёт токен:

```json
{
  "demo_mode": true,
  "authorized": true,
  "access_token": null,
  "message": "Авторизация пройдена, но сброшена в демо-режиме"
}
```

`/oauth/authorize` в демо — redirect с `error=demo_mode` без code.

---

## Уровни доступа

Ключ → `access_level_id`. Уровень: scopes read/write/edit/delete, `own_only`, `cheater`, премодерация, маски. Default — `default_access_level_id` в настройках. Map группа↔уровень — страница «Синхронизация с группами».
