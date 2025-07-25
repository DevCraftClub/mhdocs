---
tags:
  - PHP
  - Инструмент
  - Инструкция
  - composer
title: "Composer - Инструкция по использованию Composer"
description: "Инструкция по использованию Composer для управления зависимостями в проектах DevCraft."
keywords: "Composer, PHP, зависимости, DevCraft"
author: "Maxim Harder"
og:title: "Composer - управление зависимостями"
og:description: "Инструкция по использованию Composer для проектов DevCraft"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Composer - управление зависимостями"
twitter:description: "Инструкция по использованию Composer для проектов DevCraft"
---

# Работа с композером (Composer)

Начиная с ~~_...не помню..._~~ версии как в DLE, так и у меня в админке я начал использовать композер для получения данных. А так-как многие жаловались на то, что вспомогательные файлы "очень" тяжёлые и их очень много, то я и решил устанавливать их уже по мере установки самой MH Admin. Но, не всегда это работает, к сожалению. Поэтому и решил добавить инстркуцию сюда. Начнём с азов.

## Установка

### PHP

Для начала вам нужно иметь исполнительный файл php. Если в консоли / терминале при вводе `php -v` Вы получаете ошибку, то значит PHP не прописан в Ваши пути, либо не установлен вовсе. Для начала сделайте это!

Как только он будет установлен, то всё пройдёт как надо.

Не забудьте установить все нужные дополнения, типа ionCube.

### Composer

Для композера есть ряд инструкций: [для линукса и мака](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) и [для винды](https://getcomposer.org/doc/00-intro.md#installation-windows). На винде часто может не распознавать композер в терминале. Обойтись можно и файлом [composer.phar](https://getcomposer.org/download/).

## Установка зависимостей

Переходим по пути `engine/inc/maharder/admin`. И в терминале запускаем `composer update`. Благодаря файлу **composer.json**, скрипт сам установит что и куда нужно.

### Несоответствие версий PHP

Случается такое, что система управления сервером работает на одной версии PHP, а сам сайт уже на другой. И установленный композер, который используется [админкой](./mhadmin/install.md), берёт серверную версию PHP. Из-за этого могут сыпаться ошибки, что минимальная версия не соответствует текущей и установка прекращается.

Пример ошибки:

```
Fatal error: Uncaught RuntimeException: Ошибка (2): No composer.lock file present. Updating dependencies to latest instead of installing from lock file. See https://getcomposer.org/install for more information. Loading composer repositories with package information Updating dependencies Your requirements could not be resolved to an installable set of packages. Problem 1 - Root composer.json requires php ^8.3 but your php version (8.1.2) does not satisfy that requirement. in /engine/inc/maharder/_includes/classes/ComposerAction.php:253 Stack trace: #0 /engine/inc/maharder/_includes/classes/ComposerAction.php(172): ComposerAction::executeCommand() #1 /engine/inc/maharder/_includes/classes/ComposerAction.php(93): ComposerAction::runCommand() #2 /engine/inc/maharder/_includes/extras/paths.php(186): ComposerAction::installDependencies() #3 /engine/cache/system/plugins/810218232b59be06bc0ee89ba413d932.php(25): require_once('...') #4 /index.php(19): require_once('...') #5 {main} thrown in /engine/inc/maharder/_includes/classes/ComposerAction.php on line 253
```

Решение такое, нужно загрузить уже готовый архив с зависимостями и залить его на сервер.

1. Закачиваем архив с зависимостями [composer.zip](https://assets.devcraft.club/composer_data.zip).
2. Загружаем его в корень сайта (структура папок сохранена).

!!! info "Внимание!"
Все дальнейшие действия с композером выполняются при помощи флажка `--ignore-platform-req=php`.

    Пример:

    ```bash
    composer update --ignore-platform-req=php
    ```
