---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: MenuComposer - DevCraft Admin"
description: "Документация по плагину класс: menucomposer для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: menucomposer, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: MenuComposer"
og:description: "Документация по плагину класс: menucomposer для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: MenuComposer"
twitter:description: "Документация по плагину класс: menucomposer для DLE."
---

# Класс: MenuComposer

## Краткое содержание:

Объединяет меню DLE и пункты манифеста плагина в единую структуру.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [compose()](#method_compose)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/MenuComposer.php`

---

## Детали

### Методы

[](){#method_compose}
### compose()

Формирует итоговое меню админки DevCraft.

**С версии:** 200.4.0

**Параметры:**
- `$dle` — Построитель меню DLE.
- `$plugin` — Контекст модуля.

**Возвращает:** `AdminLink[]` — Список корневых пунктов меню.
