---
title: "DLE Re: Post"
tags:
    - PHP
    - DLE
    - Плагин
    - DevCraft
---
# DLE Re: Post

Публикация новостей DLE в каналы доставки (соцсети, webhook, API…). Преемник [Telegram Posting](../telegramposting/install.md): несколько шаблонов, несколько API-подключений, pluggable-провайдеры. Эталон — **Telegram**.

#### Версия: <i class="fa-duotone fa-code-branch"></i> 200.1.0
#### Скачать: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/repost.30/)

## Возможности

- Несколько шаблонов с условиями (категории, поля, xfields)
- Несколько подключений API (разные боты / каналы)
- Провайдеры в `Provider/{Name}/` (Telegram в комплекте)
- Очередь cron, прокси (в т.ч. случайный), копирование сущностей
- Автопостинг при add/edit; логи Admin (модуль RePost)
- DLE-теги через `ParseTemplateTags` + RePost-теги; xfields audio/video

## Документация

| Раздел | Ссылка |
|--------|--------|
| Установка | [install.md](install.md) |
| Провайдеры | [providers.md](providers.md) |
| Разработка каналов | [developing_providers.md](developing_providers.md) |
| Подключения | [connections.md](connections.md) |
| Шаблоны | [templates.md](templates.md) |
| Теги | [template_tags.md](template_tags.md) |
| Cron | [cron.md](cron.md) |
| API для парсеров | [custom_add.md](custom_add.md) |
| Changelog | [changelog.md](changelog.md) |

## Каналы

- Telegram (встроенный провайдер)
- Свой канал: [developing_providers.md](developing_providers.md)
