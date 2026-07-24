---
tags:
  - DLE
  - PHP
  - Плагин
  - Теги
title: "Начало работы - TagsAdd"
description: "Обзор TagsAdd 200.3.1: требования и структура модуля."
keywords: "PHP, DLE, TagsAdd, пользовательские теги, DevCraft, документация"
author: "Maxim Harder"
og:title: "TagsAdd"
og:description: "Предложение тегов к новостям DLE с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# TagsAdd (Пользовательские теги)

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/polzovatelskie-tegi.12/)

**Репозиторий**: [<i class="fa-brands fa-github"></i> DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> **200.3.1**

Сателлитный модуль [DevCraft Admin](../devcraft_admin/install.md): посетители предлагают теги к новости, модератор одобряет или отклоняет очередь в админке.

## Минимальные требования

| Компонент | Версия |
| --------- | ------ |
| DataLife Engine | **20.0** |
| PHP | **8.3+** |
| DevCraft Admin | **≥ 200.4.1** (`dc_public.js`, `controller=public`) |

## Структура (канон)

```
engine/inc/tags_add.php                    # glue → Application::runAdmin('tags_add')
engine/modules/devcraft/tags_add.php         # include для fullstory
devcraft/
  config/tags_add.json
  src/modules/TagsAdd/
templates/THEME/devcraft/tags_add/
```

## Дальше

- [Установка](install.md)
- [Настройки](settings.md)
- [Подключение в теме](guides/theme.md)
- [Changelog](changelog.md)
