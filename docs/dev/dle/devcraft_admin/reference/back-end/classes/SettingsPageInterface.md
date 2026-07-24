---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Интерфейс: SettingsPageInterface - DevCraft Admin"
description: "Документация по плагину интерфейс: settingspageinterface для DLE."
keywords: "PHP, DLE, Плагин, Админка, интерфейс: settingspageinterface, DevCraft, документация"
author: "Maxim Harder"
og:title: "Интерфейс: SettingsPageInterface"
og:description: "Документация по плагину интерфейс: settingspageinterface для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Интерфейс: SettingsPageInterface"
twitter:description: "Документация по плагину интерфейс: settingspageinterface для DLE."
---

# Интерфейс: SettingsPageInterface

## Краткое содержание:

Контракт страницы настроек модуля с дополнительными данными формы.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [supplementFormData()](#method_supplementFormData)

---

### Подробности

* Путь: `devcraft/src/classes/Interfaces/SettingsPageInterface.php`

---

## Детали

### Методы

[](){#method_supplementFormData}
### supplementFormData()

Дополняет данные формы настроек значениями, специфичными для страницы.

**С версии:** 200.4.0

**Возвращает:** `array<string, array<string, string>>` — Карта секций и полей с дополнительными значениями.
