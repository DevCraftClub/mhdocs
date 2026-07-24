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
├── Telegram/
└── VK/          # платное дополнение, не в ядре
```

`ProviderRegistry` сканирует `init.php` и регистрирует провайдер по ключу `name`.

## Каналы

| Канал | Статус | Документация |
|-------|--------|--------------|
| Telegram | в ядре | [providers/telegram.md](providers/telegram.md) |
| VK.com | платное | [providers/vk.md](providers/vk.md) |

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

Класс реализует `ProviderInterface` через **`extends AbstractProvider`**:

- `settingsSchema()` — поля формы подключения
- `mediaByteLimits()` — обязательные лимиты размера (байты) по типам медиа
- `send(…)` — до аплоада вызывает `filterMediaByLimits()`
- `SendResult` через `ok()` / `fail()`

Локальные файлы сверх лимита отсекаются контрактом AbstractProvider и не роняют всю отправку сырым HTTP 413. Подробности: [developing_providers.md](reference/developing_providers.md).

## Новый провайдер

См. [developing_providers.md](reference/developing_providers.md). Платные каналы — отдельный ZIP в `Provider/{Code}/` + composer deps.
