---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: PageOrchestrator - DevCraft Admin"
description: "Документация по плагину класс: pageorchestrator для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: pageorchestrator, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: PageOrchestrator"
og:description: "Документация по плагину класс: pageorchestrator для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: PageOrchestrator"
twitter:description: "Документация по плагину класс: pageorchestrator для DLE."
---

# Класс: PageOrchestrator

## Краткое содержание:

Подготавливает переменные Twig для страниц настроек и changelog.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [prepare()](#method_prepare)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/PageOrchestrator.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Принимает `$formService`: Сервис формы настроек..

**С версии:** 200.4.0

**Параметры:**
- `$formService` — Сервис формы настроек.

[](){#method_prepare}
### prepare()

Собирает дополнительные переменные шаблона для текущей страницы.

**С версии:** 200.4.0

**Параметры:**
- `$page` — Обработчик страницы.
- `$plugin` — Контекст модуля.
- `$action` — Текущее действие админки.

**Возвращает:** `array<string,` — mixed> Переменные для передачи в Twig.
