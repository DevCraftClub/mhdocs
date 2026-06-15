---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AdminErrorRenderer - DevCraft Admin"
description: "Документация по плагину класс: adminerrorrenderer для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: adminerrorrenderer, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AdminErrorRenderer"
og:description: "Документация по плагину класс: adminerrorrenderer для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AdminErrorRenderer"
twitter:description: "Документация по плагину класс: adminerrorrenderer для DLE."
---

# Класс: AdminErrorRenderer

## Краткое содержание:

Рендерит страницы ошибок админки (404, 500, общая) через Twig.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [render()](#method_render)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/AdminErrorRenderer.php`

---

## Детали

### Методы

[](){#method_render}
### render()

Выводит HTML-страницу ошибки и устанавливает HTTP-код ответа.

**С версии:** 200.4.0

**Параметры:**
- `$kind` — Тип ошибки (404, 500 или общая).
- `$title` — Заголовок страницы.
- `$message` — Основное сообщение для пользователя.
- `$status` — HTTP-код ответа.
- `$detail` — Дополнительные технические сведения.
- `$plugin` — Контекст модуля для ссылки на dashboard.
