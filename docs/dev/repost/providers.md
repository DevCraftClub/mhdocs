---
title: "Провайдеры RePost"
tags:
    - PHP
    - DLE
---
# Провайдеры

Канал доставки — каталог:

```text
devcraft/src/modules/RePost/Provider/
├── ProviderInterface.php
├── AbstractProvider.php
├── ProviderRegistry.php
└── Telegram/
    ├── init.php
    ├── settings.schema.php
    ├── TelegramProvider.php
    ├── TelegramBotFactory.php
    └── MediaLimits.php
```

`ProviderRegistry` сканирует `init.php` и регистрирует провайдер по ключу `name`.

## init.php

```php
return [
    'name'    => 'telegram',
    'title'   => 'Telegram',
    'version' => '200.2.0',
    'class'   => \DevCraft\Modules\RePost\Provider\Telegram\TelegramProvider::class,
];
```

## Контракт

Класс реализует `ProviderInterface` (рекомендуется `extends AbstractProvider`):

- `settingsSchema()` — поля формы подключения (`FormSchemaBuilder`)
- `send(PostContext, RenderedMessage, connectionConfig, ?proxy): SendResult`

`connectionConfig` — произвольный JSON из схемы провайдера. Это не только «соцсеть»: webhook, БД, внешний API — тот же контракт.

Подробная инструкция: [developing_providers.md](developing_providers.md).

## Telegram

- Зависимости: `luzrain/telegram-bot-api`, `guzzlehttp/guzzle` (в `devcraft/`, vendor в архив плагина не входит).
- `tg_send_type`: `text` / `media` / `photo` / `audio` / `video` / `document`.
- `audio` / `video` — отдельный `SendAudio` / `SendVideo` на каждый файл из xfields.
- `media` — album только photo/video; audio уходит отдельными сообщениями (Telegram не смешивает типы в media group).
- Лимит Bot API на видео ≈ 50 Mb.

## Новый провайдер

См. [developing_providers.md](developing_providers.md).
