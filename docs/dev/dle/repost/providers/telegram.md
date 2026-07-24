---
title: "Telegram (RePost)"
tags:
    - PHP
    - DLE
    - Telegram
    - DevCraft
---
# Telegram

Встроенный провайдер RePost (входит в ядро). Эталон канала доставки.

#### Версия канала: <i class="fa-duotone fa-code-branch"></i> 200.2.0
#### Совместимость: RePost ≥ **200.1.0**

## Зависимости

- `luzrain/telegram-bot-api`
- `guzzlehttp/guzzle`

Vendor в архив плагина не входит. В манифесте RePost: `composer_required` → `luzrain/telegram-bot-api` (hard).

```bash
composer require luzrain/telegram-bot-api guzzlehttp/guzzle && composer dump-autoload
```

## Каталог

```text
devcraft/src/modules/RePost/Provider/Telegram/
├── init.php
├── settings.schema.php
├── TelegramProvider.php
├── TelegramBotFactory.php
├── TelegramTemplateTags.php
├── MediaLimits.php
└── …
```

`init.php`: `name=telegram`, `title=Telegram`, `version=200.2.0`.

## Получение токена и chat id

### 1. Токен бота (`tg_bot`)

1. В Telegram откройте [@BotFather](https://t.me/BotFather).
2. Команда `/newbot` (или `/token` / `/mybots` → бот → API Token, если бот уже есть).
3. Укажите display name и username (username обязан оканчиваться на `bot`).
4. BotFather выдаст строку вида `123456:ABC-DEF…` — это `tg_bot`.

Токен равносилен паролю: не светите его в публичных репозиториях и шаблонах. Скриншоты BotFather / канала (legacy): [Telegram Posting → настройка бота](../../../../deprecated/telegramposting/bot.md). Официально: [Telegram Bots](https://core.telegram.org/bots), [Bot API](https://core.telegram.org/bots/api).

### 2. Канал / группа и права бота

1. Создайте канал или группу (для публичных анонсов обычно **канал**).
2. Добавьте бота участником и назначьте **администратором** с правом публиковать сообщения (и при необходимости редактировать).
3. Для канала удобен публичный `@username` канала; для супергруппы чаще нужен числовой id.

### 3. Chat id (`tg_chat_id`)

Допустимые форматы:

| Формат | Пример | Когда |
|--------|--------|--------|
| `@username` | `@mychannel` | Публичный канал / группа с username |
| Числовой id | `-1001234567890` | Приватный канал / супергруппа |

Как получить числовой id в RePost:

1. Напишите боту в личку **или** перешлите в канал/группу любое сообщение (чтобы появился update).
2. В форме подключения нажмите **Получить chat id** (вызов `getUpdates`) — в списке будут chat id диалогов, где бот что-то видел.
3. Либо временно: `https://api.telegram.org/bot<ТОКЕН>/getUpdates` в браузере и найдите `"chat":{"id":…}`.

Кнопка **Тест** в форме отправляет пробный `sendMessage` в указанный chat.

### 4. Поля подключения

| Ключ | Описание |
|------|----------|
| `tg_bot` | Токен от BotFather |
| `tg_chat_id` | `@channel` или numeric id |
| `tg_send_type` | `text` / `media` / `media_*` / `photo` / `audio` / `video` / `document` |

См. также [../guides/connections.md](../guides/connections.md).

## Тип отправки (`tg_send_type`)

| Тип | Поведение |
|-----|-----------|
| `text` | Только текст |
| `photo` / `audio` / `video` / `document` | Первый файл соответствующего вида |
| `media` | Album photo/video; audio — группа (SendMediaGroup) |
| `media_video` / `media_audio` / `media_document` | Группа по виду |

- `audio` / `video` / `document` / `photo` — только первый файл
- Oversized локальные файлы отсекаются `filterMediaByLimits()`; остаётся подходящее медиа или текст

## Лимиты Bot API (`MediaLimits`)

| Тип | Ориентир |
|-----|----------|
| photo | ≈ 10 Mb |
| video / audio / document | ≈ 50 Mb |

Видео-расширения: `mp4`, `m4v`, `mkv`, `webm`, `avi`, `mov`, `mpeg`, `mpg`, `3gp`.  
`SendVideo` — для `mp4`/`m4v`; остальные форматы уходят как документ (`SendDocument` / `InputMediaDocument`), лимит тот же ≈ 50 Mb.

## Теги шаблона

`TelegramTemplateTags`: кнопки, `[repost_media_*]`, HTML-allowlist Bot API. Справочник в админке: **Теги шаблонов**.

## Связанные страницы

- Обзор провайдеров: [../providers.md](../providers.md)
- Разработка каналов: [../reference/developing_providers.md](../reference/developing_providers.md)
- Подключения: [../guides/connections.md](../guides/connections.md)
