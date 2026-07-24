---
tags:
  - PHP
  - DLE
  - Плагин
  - Генератор
title: "Генератор новостей - DLE Faker"
description: "Генерация новостей по шаблонам DLE Faker."
keywords: "PHP, DLE, Faker, новости, DevCraft"
author: "Maxim Harder"
og:title: "Генератор новостей"
og:description: "Генерация новостей по шаблонам DLE Faker."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Генератор новостей

1. Создайте шаблон: `?mod=dle_faker&action=templates&mode=create`
2. Заполните заголовок, текст, категории, флаги, доп. поля
3. Откройте `?mod=dle_faker&action=generator-news`, выберите шаблон и число итераций
4. Batch-запросы идут на `generate_posts` через `devcraft/ajax.php`

## Шаблон

- **Автор / категория**: фиксированные ID или «Случайно» (пул из настроек)
- **Категорий на новость**: сколько категорий прикрепить при случайном выборе (не больше размера пула)
- **Даты**: `date_from` / `date_to` (строки Faker/`now`)
- **Медиа-xfields**: источник «библиотека», «файл шаблона» или теги Faker
  - `imagegalery` / `video` / `audio`: при «Случайный из пула» задайте **количество**; сервер ограничивает максимумом схемы DLE (`max_images` / `max_files`) и числом файлов в библиотеке
  - `video` / `audio` публикуются как **плейлист** DLE (значения через запятую, URL + размер)

Также: генерация категорий — `?mod=dle_faker&action=generator-categories`.
