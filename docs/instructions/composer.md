---
tags:
  - Инструкция
  - Composer
  - PHP
  - DevCraft
title: "Composer — управление зависимостями"
description: "Как установить PHP-библиотеки для модулей DevCraft через Composer."
keywords: "Composer, PHP, зависимости, DevCraft"
author: "Maxim Harder"
og:title: "Composer — управление зависимостями"
og:description: "Инструкция по Composer для проектов DevCraft"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Composer — управление зависимостями"
twitter:description: "Инструкция по Composer для проектов DevCraft"
---

# Работа с Composer

**Composer** — программа, которая скачивает и обновляет PHP-библиотеки (зависимости) для сайта. У модулей DevCraft они лежат в папке `devcraft/` в корне сайта.

Обычно зависимости ставятся сами (скриптом установки или через интерфейс DevCraft Admin). Эта страница нужна, если нужно сделать это вручную или понять ошибку про версию PHP.

## Что должно быть на сервере

1. В терминале команда `php -v` должна показывать PHP **8.3** или новее.
2. Нужны обычные расширения PHP (в том числе связанные с работой сайта). См. также [PHP intl](php_intl.md).
3. Установлен [Composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) (Linux/macOS) или [для Windows](https://getcomposer.org/doc/00-intro.md#installation-windows). На Windows иногда удобнее файл [composer.phar](https://getcomposer.org/download/).

## Установка зависимостей

Перейдите в каталог `devcraft` в корне сайта и выполните:

```bash
cd devcraft
composer install --no-dev
```

Composer прочитает `composer.json` / `composer.lock` и создаст папку `vendor/`. Без неё DevCraft Admin и модули на его базе не заработают.

После добавления новых PHP-классов модуля иногда достаточно обновить автозагрузку:

```bash
composer dump-autoload
```

Подробнее об установке админки: [Установка DevCraft Admin](../dev/dle/devcraft_admin/install.md).

### Если версии PHP на сервере разные

Бывает, что панель хостинга и сайт используют разный PHP. Тогда Composer может взять «не ту» версию и остановиться с ошибкой вроде: в `composer.json` нужен PHP ^8.3, а в терминале — 8.1.

**Что можно сделать:**

1. Скачать готовый архив зависимостей [composer_data.zip](https://assets.devcraft.club/composer_data.zip) (если он актуален для вашей версии) и залить в корень сайта с сохранением структуры папок.
2. Либо запустить Composer с игнорированием проверки платформы (только если понимаете риски):

```bash
composer install --no-dev --ignore-platform-req=php
```

!!! info "Важно"
    Дальнейшие команды Composer в такой ситуации тоже выполняйте с флагом `--ignore-platform-req=php`.

## См. также

- [Установка плагинов](install_instructions.md)
- [Установка DevCraft Admin](../dev/dle/devcraft_admin/install.md)
- [PHP intl](php_intl.md)
