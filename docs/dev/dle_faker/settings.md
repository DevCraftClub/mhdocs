---
tags:
  - PHP
  - DLE
  - Плагин
  - Генератор
  - Настройки
title: "Настройки - DLE Faker"
description: "Настройки модуля DLE Faker в DevCraft Admin."
keywords: "PHP, DLE, Faker, настройки, DevCraft"
author: "Maxim Harder"
og:title: "Настройки DLE Faker"
og:description: "Настройки модуля DLE Faker в DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Настройки

Страница: `?mod=dle_faker&action=settings`.

| Поле | Назначение |
| ---- | ---------- |
| Локаль Faker | Язык/локаль пакета `fakerphp/faker` (не язык оболочки DevCraft) |
| Пользователи | Пул авторов для новостей и тега `random_user` |
| Категории | Пул категорий для новостей и тега `random_category` |
| Категорий на новость | Fallback, если в шаблоне не задано своё значение |

Значения сохраняются в `devcraft/config/dle_faker.json`.

## Файлы

Меню **Файлы** (`static-images` / `static-files` / `static-audio` / `static-video`) — библиотека для медиа-xfields и тегов `{{ static_* }}`. Загрузка идёт через общий API DevCraft (`DevCraftAjax.postMultipart`).
