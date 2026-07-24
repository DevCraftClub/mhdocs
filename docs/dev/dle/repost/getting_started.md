---
title: 'DLE Re: Post'
tags:
  - PHP
  - DLE
  - Плагин
  - DevCraft
  - Соц. сети
  - Sharing
  - Telegram
---

# DLE Re: Post

Публикация новостей DLE в каналы доставки (соцсети, webhook, API…). Преемник [Telegram Posting](../../../deprecated/telegramposting/install.md): несколько шаблонов, несколько API-подключений, pluggable-провайдеры. Эталон — **Telegram**.

#### Версия: <i class="fa-duotone fa-code-branch"></i> 200.1.0

#### Скачать: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/repost.30/)

## Возможности

- Несколько шаблонов с условиями (категории, поля, xfields)
- Несколько подключений API (разные боты / каналы)
- Провайдеры в `Provider/{Name}/` (Telegram в комплекте)
- Очередь cron, прокси (в т.ч. случайный), копирование сущностей
- Автопостинг при add/edit; логи Admin (модуль RePost)
- DLE-теги через `ParseTemplateTags` + `TemplateTagsInterface` канала; xfields audio/video; подтипы `media_*`
- Справочник тегов в админке (**Теги шаблонов**)

## Документация

| Раздел             | Ссылка                                             |
| ------------------ | -------------------------------------------------- |
| Установка          | [install.md](install.md)                           |
| Провайдеры         | [providers.md](providers.md)                       |
| Telegram           | [providers/telegram.md](providers/telegram.md)     |
| VK (платное)       | [providers/vk.md](providers/vk.md)                 |
| Разработка каналов | [developing_providers.md](reference/developing_providers.md) |
| Подключения        | [connections.md](guides/connections.md)                   |
| Шаблоны            | [templates.md](guides/templates.md)                       |
| Теги               | [template_tags.md](reference/template_tags.md)               |
| Cron               | [cron.md](guides/cron.md)                                 |
| API для парсеров   | [custom_add.md](guides/custom_add.md)                     |
| Changelog          | [changelog.md](changelog.md)                       |

## Каналы

- [Telegram](providers/telegram.md) (встроенный)
- **VK.com** — платное [RePost Provider: VK](providers/vk.md)
- Свой канал: [developing_providers.md](reference/developing_providers.md)
