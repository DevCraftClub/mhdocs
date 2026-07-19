---
title: "Подключения RePost"
tags:
    - PHP
    - DLE
---
# Подключения

Подключение = именованный набор credentials канала доставки (например один бот + один канал). Их может быть несколько.

## Поля сущности

| Поле | Описание |
|------|----------|
| name | Отображаемое имя (unique) |
| provider | Код провайдера (`telegram`, …) |
| config | JSON настроек провайдера |
| active | Вкл/выкл |

## Копирование

**Действия** → **Копировать**: имя `… (копия)`, тот же provider/config/active.

## Telegram (config)

| Ключ | Описание |
|------|----------|
| `tg_bot` | Токен бота |
| `tg_chat_id` | `@channel` или numeric id |
| `tg_send_type` | `text` / `media` / `media_video` / `media_audio` / `media_document` / `photo` / `audio` / `video` / `document` |
| | Одиночные — первый файл; `media` — album photo/video + audio-группа; `media_*` — группа по виду |

В форме подключения доступны кнопки **Получить chat id** (`getUpdates`) и **Тест** (`sendMessage`).

Пошагово: токен BotFather, права бота в канале, chat id — [providers/telegram.md](providers/telegram.md#получение-токена-и-chat-id).

Медиа для `audio`/`video`/`media`/`media_*` берётся из шаблона и xfields (тип поля `audio` / `video`, формат `url|id|size,…`). Фильтр по `tg_send_type` отсекает лишние типы.

## VKontakte (config)

| Ключ | Описание |
|------|----------|
| `vk_token` | Ключ доступа **сообщества** (`wall`, `docs`) |
| `vk_user_token` | Ключ **пользователя** (`photos`, `video`) — для фото/видео |
| `vk_group_id` | Положительный ID группы/паблика |
| `vk_from_group` | Пост от имени сообщества |
| `vk_send_type` | `text` / `photo` / `video` / `media` / `media_video` / `media_document` / `document` |

Глобально в настройках модуля RePost (секция VK): `vk_api_host` — домен API (`vk.com` / `vk.ru`).

На форме подключения под полями токенов — пошаговые подсказки. Подробно (community / user, vkhost, `invalid scope`): [providers/vk.md — Получение ключей и ID](providers/vk.md#получение-ключей-и-id).

Смена провайдера на форме перезагружает поля schema. Тип отправки — `vk_send_type`.
