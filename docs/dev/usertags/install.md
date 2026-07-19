---
tags:
  - DLE
  - PHP
  - Плагин
  - Теги
title: "Установка - TagsAdd (Пользовательские теги)"
description: "Установка TagsAdd 200.3.0 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, TagsAdd, пользовательские теги, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка TagsAdd"
og:description: "Установка TagsAdd 200.3.0 для DLE 20.0 с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# TagsAdd (Пользовательские теги)

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/polzovatelskie-tegi.12/)

**Репозиторий**: [<i class="fa-brands fa-github"></i> DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> **200.3.0**

Сателлитный модуль [DevCraft Admin](../devcraft_admin/install.md): посетители предлагают теги к новости, модератор одобряет или отклоняет очередь в админке.

## Минимальные требования

| Компонент | Версия |
| --------- | ------ |
| DataLife Engine | **20.0** |
| PHP | **8.3+** |
| DevCraft Admin | **≥ 200.4.1** (`dc_public.js`, `controller=public`) |

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md). Затем устанавливайте TagsAdd.

## Установка

### 1. Архив плагина

1. Скачайте `install.zip` из [репозитория](https://github.com/DevCraftClub/tagsadd) (ветка `releases/200.3.0` / содержимое `upload/`) или со страницы загрузки.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/tags_add.php`
   - `engine/modules/devcraft/tags_add.php`
   - `devcraft/src/modules/TagsAdd/`
   - `templates/Default/devcraft/tags_add/` (или скопируйте в свою тему)

Legacy-пути `engine/inc/maharder/`, `engine/modules/maharder/tagsadd.php` и `install.php` в корне **не используются** и в пакет 200.x не входят.

### 2. Composer autoload

В каталоге `devcraft/`:

```bash
composer dump-autoload
```

### 3. Первый запуск

1. Откройте `?mod=tags_add` в админке DevCraft.
2. Таблица `{prefix}_tags_add` создаётся Cycle ORM по модели при первом обращении.
3. Сохраните [настройки](settings.md) (получатель PM, шаблоны ЛС, куда вставлять теги).
4. Подключите модуль в [теме](theme.md).

## Структура (канон)

```
engine/inc/tags_add.php                    # glue → Application::runAdmin('tags_add')
engine/modules/devcraft/tags_add.php         # include для fullstory (button/modal/js/css)
devcraft/
  config/tags_add.json
  src/modules/TagsAdd/
    Ajax/ Services/ Pages/ Models/ …
    Public/tags_add.js
    templates/*.twig
    manifest.php
templates/THEME/devcraft/tags_add/
  button.tpl  modal.tpl  tags_add.css  tags_add.js
```

AJAX сайта: `devcraft/ajax.php?mod=tags_add&controller=public&method=suggest`.  
Админ: `devcraft/ajax.php?mod=tags_add&controller=admin&method=…`.

## См. также

- [Настройки](settings.md)
- [Подключение в теме](theme.md)
- [История изменений](changelog.md)
