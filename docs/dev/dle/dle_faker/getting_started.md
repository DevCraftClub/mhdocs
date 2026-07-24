---
tags:
  - Faker
  - PHP
  - DLE
  - Генератор
title: "Начало работы - DLE Faker"
description: "Обзор DLE Faker 200.1.4: требования и структура модуля."
keywords: "PHP, DLE, Faker, генератор, DevCraft, документация"
author: "Maxim Harder"
og:title: "DLE Faker"
og:description: "Генератор тестовых данных для DLE 20.0 с DevCraft Admin."
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

## Дальше

- [Установка](install.md)
- [Настройки](settings.md)
- [Генерация новостей](guides/gen_news.md)
- [Changelog](changelog.md)
