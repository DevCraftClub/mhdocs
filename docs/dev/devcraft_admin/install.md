---
tags:
  - DLE
  - PHP
  - Плагин
  - Админка
title: "Установка - DevCraft Admin"
description: "Установка и обновление плагина DevCraft Admin для DLE 20.0."
keywords: "PHP, DLE, Плагин, Админка, установка, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка"
og:description: "Установка и обновление плагина DevCraft Admin для DLE 20.0."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Установка"
twitter:description: "Установка и обновление плагина DevCraft Admin для DLE 20.0."
---

# Установка DevCraft Admin

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/maharder-assets.4/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> 200.4.0

## Минимальные требования

- **Версия PHP**: 8.3
- **Расширения PHP**: `simplexml`, `libxml`, `intl`, `fileinfo`, `pdo_mysql`, `curl`, `mbstring`, `openssl`
- **Рекомендуемые настройки**: выделенная память PHP не менее 128M
- **CMS**: DataLife Engine 20.0

## Установка / обновление

### 1. Установка через менеджер плагинов DLE

1. Скачайте архив плагина DevCraft Admin (формат `upload/` с `install.xml` в корне).
2. Загрузите архив в **Панель управления → Плагины → Установить плагин**.
3. Убедитесь, что на сайте появились файлы:
   - `engine/inc/devcraft.php` — точка входа админ-модуля DLE
   - каталог `devcraft/` в корне сайта

### 2. Зависимости Composer

В каталоге `devcraft/` на сервере выполните:

```bash
cd devcraft
composer install --no-dev
```

Без каталога `vendor/` плагин выведет предупреждение в админке DLE и не загрузится.

### 3. Ручная загрузка (альтернатива)

Скопируйте содержимое `upload/` в корень сайта (сохраняя структуру `engine/` и `devcraft/`), затем установите плагин через менеджер плагинов.

## Цепочка загрузки

После установки запросы в админку проходят через:

1. `engine/inc/devcraft.php` — тонкая обёртка DLE (проверка `DATALIFEENGINE`, `LOGGED_IN`)
2. `devcraft/init.php` — автозагрузка Composer, регистрация путей, bootstrap ядра
3. `DevCraft\Core\Application::runAdmin()` — маршрутизация страниц модуля Admin

AJAX-запросы обрабатываются через `devcraft/ajax.php` (см. [Точки входа](backend/entry_points.md)).

## Структура каталогов

```
devcraft/
├── init.php              # Bootstrap плагина
├── ajax.php              # AJAX-точка входа
├── composer.json
├── vendor/               # После composer install
├── src/
│   ├── bootstrap/        # functions.php, ajax-session.php
│   ├── classes/          # Ядро DevCraft
│   ├── modules/Admin/    # Модуль админки
│   └── templates/        # Twig-шаблоны
├── config/
├── locales/
├── cache/
└── logs/
engine/inc/
└── devcraft.php          # Регистрация в DLE Admin
```

## Первый запуск

1. Откройте в админке DLE модуль **DevCraft Admin**.
2. Перейдите в **Настройки** и задайте язык (`ru_RU`), тему (светлая/тёмная), пути к кешу и локалям.
3. При необходимости включите логирование и Telegram-уведомления (см. [Настройка](frontend/manage.md)).

## Обновление

1. Создайте резервную копию каталога `devcraft/` и настроек в БД.
2. Установите новый архив плагина через менеджер DLE.
3. Выполните `composer install` в `devcraft/`, если изменился `composer.lock`.
4. Проверьте [историю изменений](changelog.md).

## См. также

- [Настройка](frontend/manage.md)
- [Точки входа для разработчиков](backend/entry_points.md)
- [Composer](../composer.md)
