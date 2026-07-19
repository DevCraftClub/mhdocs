---
tags:
  - Faker
  - PHP
  - DLE
  - Генератор
title: "Установка - DLE Faker"
description: "Установка DLE Faker 200.1.4 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, Faker, генератор, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка DLE Faker"
og:description: "Установка DLE Faker 200.1.4 для DLE 20.0 с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# DLE Faker

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/dle-faker.29/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> **200.1.4**

Сателлитный модуль DevCraft Admin: генерация тестовых пользователей, категорий, новостей по шаблонам с тегами FakerPHP и медиа-библиотекой.

## Минимальные требования

| Компонент | Версия |
| --------- | ------ |
| DataLife Engine | **20.0** |
| PHP | **8.3** |
| DevCraft Admin | **≥ 200.4.0** |

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md). Затем устанавливайте DLE Faker.

## Установка

### 1. Архив плагина

1. Скачайте `install.zip` релиза.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/dle_faker.php`
   - `devcraft/src/modules/dle_faker/`
   - локали `devcraft/locales/*/dle_faker.xliff` (если входят в пакет)

Legacy-пути `engine/inc/maharder/` и `engine/ajax/maharder/dle_faker/` **не используются** и в релизе отсутствуют.

### 2. Composer

В каталоге `devcraft/` установите зависимость (через [Composer UI](../devcraft_admin/) модуля DevCraft или CLI):

```bash
composer require fakerphp/faker
composer dump-autoload
```

Пакет объявлен в `manifest.php` как `composer_required` (`hardRequired`).

### 3. Первый запуск

1. Откройте `?mod=dle_faker`.
2. Сохраните [настройки](settings.md) (локаль Faker, пулы пользователей и категорий).
3. При необходимости загрузите файлы в меню **Файлы** (изображения / файлы / аудио / видео).
4. Создайте [шаблон](gen_news.md) и сгенерируйте новость.

## Структура (канон)

```
engine/inc/dle_faker.php          # glue → Application::runAdmin('dle_faker')
devcraft/
  config/dle_faker.json
  src/modules/dle_faker/
    Ajax/ Services/ Pages/ Models/ …
    Public/dle_faker.js
    templates/*.twig
    manifest.php
```

AJAX только через `devcraft/ajax.php?mod=dle_faker&controller=admin&method=…`.

## Документация модуля

Публичный URL: [https://readme.devcraft.club/dev/dle_faker/install/](https://readme.devcraft.club/dev/dle_faker/install/)
