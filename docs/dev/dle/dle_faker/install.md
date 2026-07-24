---
tags:
  - Faker
  - PHP
  - DLE
  - Генератор
  - Установка
title: "Установка - DLE Faker"
description: "Установка DLE Faker 200.1.4 для DLE 20.0 с DevCraft Admin."
keywords: "PHP, DLE, Faker, генератор, DevCraft, документация"
author: "Maxim Harder"
og:title: "Установка DLE Faker"
og:description: "Установка DLE Faker 200.1.4 для DLE 20.0 с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Установка DLE Faker

!!! warning "Порядок установки"
    Сначала установите и настройте [DevCraft Admin](../devcraft_admin/install.md). Затем устанавливайте DLE Faker.

## 1. Архив плагина

1. Скачайте `install.zip` релиза.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   - `engine/inc/dle_faker.php`
   - `devcraft/src/modules/dle_faker/`
   - локали `devcraft/locales/*/dle_faker.xliff` (если входят в пакет)

Legacy-пути `engine/inc/maharder/` и `engine/ajax/maharder/dle_faker/` **не используются** и в релизе отсутствуют.

## 2. Composer

В каталоге `devcraft/` установите зависимость (через [Composer UI](../devcraft_admin/) модуля DevCraft или CLI):

```bash
composer require fakerphp/faker
composer dump-autoload
```

Пакет объявлен в `manifest.php` как `composer_required` (`hardRequired`).

## 3. Первый запуск

1. Откройте `?mod=dle_faker`.
2. Сохраните [настройки](settings.md) (локаль Faker, пулы пользователей и категорий).
3. При необходимости загрузите файлы в меню **Файлы** (изображения / файлы / аудио / видео).
4. Создайте [шаблон](guides/gen_news.md) и сгенерируйте новость.

Публичный URL документации: [https://readme.devcraft.club/dev/dle_faker/install/](https://readme.devcraft.club/dev/dle_faker/install/)
