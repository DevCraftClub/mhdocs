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
| `tg_send_type` | `text` / `media` / `photo` / `audio` / `video` / `document` |

В форме подключения доступны кнопки **Получить chat id** (`getUpdates`) и **Тест** (`sendMessage`).

Медиа для `audio`/`video`/`media` берётся из шаблона и xfields (тип поля `audio` / `video`, формат `url|id|size,…`). Фильтр по `tg_send_type` отсекает лишние типы.
