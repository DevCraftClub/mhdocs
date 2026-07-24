---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: SettingsPage - DevCraft Admin"
description: "Документация по плагину класс: settingspage для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: settingspage, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: SettingsPage"
og:description: "Документация по плагину класс: settingspage для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: SettingsPage"
twitter:description: "Документация по плагину класс: settingspage для DLE."
---

# Класс: SettingsPage

## Краткое содержание:

Страница настроек модуля DevCraft Admin.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)
* public [supplementFormData()](#method_supplementFormData)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Pages/SettingsPage.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Формирует представление и данные страницы настроек.

**С версии:** 200.4.0

**Возвращает:** `array{view: string, data: array<string, mixed>}` — Ключ шаблона и данные для Twig.

[](){#method_supplementFormData}
### supplementFormData()

Дополняет данные формы настроек значениями, специфичными для страницы.

**С версии:** 200.4.0

**Возвращает:** `array<string, array<string, string>>` — Карта секций и полей с дополнительными значениями.
