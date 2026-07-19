---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: SettingsHandler - DevCraft Admin"
description: "Документация по плагину класс: settingshandler для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: settingshandler, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: SettingsHandler"
og:description: "Документация по плагину класс: settingshandler для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: SettingsHandler"
twitter:description: "Документация по плагину класс: settingshandler для DLE."
---

# Класс: SettingsHandler

## Краткое содержание:

AJAX-обработчик частичного сохранения настроек модуля по схеме.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/modules/Admin/Ajax/SettingsHandler.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Валидирует и сохраняет настройки модуля, допуская частичное обновление.

**С версии:** 200.4.0

**Параметры:**
- `$request` — AJAX-запрос с полями формы настроек.

**Возвращает:** `JsonResponse` — JSON-ответ об успехе, предупреждении или ошибке валидации.
