---
tags:
  - API
  - DLE
title: "API v2 - DLE API"
description: "Обзор /api/v2: универсальный Fluent, RelationMap, Cycle."
author: "Maxim Harder"
---

# API v2

Базовый путь: `/api/v2`. Запись — **Cycle** (`dle_api_db()`). Админка DevCraft только конфигурирует ключи/OAuth.

## Fluent / SDK facades

```php
require_once DLEPlugins::Check(ROOT_DIR . '/api/sdk/bootstrap.php');

DcApi::news()
    ->withTitle('…')
    ->withCategory([1, 2])          // sync post.category + post_extras_cats
    ->withExtras('allow_rate', 1)
    ->withPass('password', '…')
    ->withXfield('foo', 'bar')
    ->create();

DcApi::user()->withName('admin')->withEmail('a@b.c')->create();
DcApi::comment()->withPostId(1)->withText('…')->create();
DcApi::staticPage()->withName('about')->withTemplate('…')->create();
DcApi::file();                      // files
DcApi::file('images');
DcApi::schema('banners')->with('approve', 1)->create();
DcApi::query('post')->where('category', '1')->fetchAll(); // GET кэш CacheControl
DcApi::xfield('bio', 'О себе')->asText()->create();
DcApi::modifyXfield('post');
```

Nested: доменные `with*Entity` или `attachChildEntity('images', …)`. Глобальные `prepare($table)` / `query($table)` — только TableBuilder (HTTP hydrate), не SDK-фасады.

## OAuth / токен

Bearer принимает **API-ключ** или **access_token**. Подробно: [Авторизация](../guides/auth.md).

`POST /oauth/token` — опционально, если нужен OAuth (`client_credentials` | `password` | `authorization_code` | `refresh_token`; только POST).

Password grant: `username` = `users.name` или email, `password` = пароль DLE (+ `client_id` / `client_secret`).

В OpenAPI server variable `apiBase` — подставьте свой URL до `/api/v2`.

## Поиск и фильтры

Канон: **`GET /table/{name}/`** — SchemaRegistry **или** интроспекция `SHOW COLUMNS` (таблицы без `*Schema.php`). Deny-list: `api_keys`, `api_scope`, `oauth_*` / `api_oauth_*`, `devcraft_*`. Права: `api_scope` (`read`/`write`/`delete`; `is_admin` без ограничений). Фильтры — query-параметры колонок. Virtual FK (RelationMap, без MySQL FK): `csv`/`csv_or_all` → `FIND_IN_SET`, `one` → `=`. Операторы значения: `!` negate, `%` LIKE. Доп. поля: `xf[name]=value` (pad-LIKE по `xfields`).

```http
GET /api/v2/table/banners/?category=1&approve=1&limit=20
GET /api/v2/table/banners/?grouplevel=2
GET /api/v2/table/post/?category=1&xf[linked_data]=сдасдл
```

In-process: `DcApi::query('banners')->where('category', '1')->fetchAll()` или `dle_api_query('banners')`.

`GET /post/` — sugar над `TableQuery('post')` + legacy header-фильтры (BC). Для `post.category` дополнительно `OR EXISTS post_extras_cats` (issue #12).

## Доп. поля (xfields)

Каталог: `GET/POST/PUT/PATCH/DELETE /xfields/{scope}/…` с typed validation (`details.fields` при 422).

Сериализация значений в `post.xfields`:

```http
POST /api/v2/xfields/post/encode
{ "fields": { "linked_data": "…", "note": "a|b" } }
```

→ `{ "raw": "linked_data|…||note|a&#124;b", "parsed": {…} }`.

SDK: `DcApi::xfield('bio', 'О себе')->asText()->create()`, `->forPost($value)`.

## Эндпоинты

| Метод | Путь | Описание |
|-------|------|----------|
| GET | `/table/{name}/` | Список + фильтры |
| POST | `/table/{name}/` | Универсальный create |
| GET/POST | `/post/` … | Новости (+ sugar create) |
| POST | `/user/`, `/usergroup/`, `/plugin/` | Sugar |
| POST | `/upload/` | multipart |
| GET | `/conversations/`, `/health/` | Служебные |

Полная спецификация: [OpenAPI](openapi.md).
