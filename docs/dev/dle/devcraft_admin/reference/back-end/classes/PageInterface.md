---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Интерфейс: PageInterface - DevCraft Admin"
description: "Документация по плагину интерфейс: pageinterface для DLE."
keywords: "PHP, DLE, Плагин, Админка, интерфейс: pageinterface, DevCraft, документация"
author: "Maxim Harder"
og:title: "Интерфейс: PageInterface"
og:description: "Документация по плагину интерфейс: pageinterface для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Интерфейс: PageInterface"
twitter:description: "Документация по плагину интерфейс: pageinterface для DLE."
---

# Интерфейс: PageInterface

## Краткое содержание:

Контракт обработчика административной страницы модуля.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [handle()](#method_handle)

---

### Подробности

* Путь: `devcraft/src/classes/Interfaces/PageInterface.php`

---

## Детали

### Методы

[](){#method_handle}
### handle()

Обрабатывает запрос страницы и возвращает ключ представления с данными.

**С версии:** 200.4.0

**Возвращает:** `array{view: string, data: array<string, mixed>}` — Ключ Twig-шаблона и данные для рендера.
