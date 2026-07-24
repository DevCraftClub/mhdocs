---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: TwigTranslatorBridge - DevCraft Admin"
description: "Документация по плагину класс: twigtranslatorbridge для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: twigtranslatorbridge, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: TwigTranslatorBridge"
og:description: "Документация по плагину класс: twigtranslatorbridge для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: TwigTranslatorBridge"
twitter:description: "Документация по плагину класс: twigtranslatorbridge для DLE."
---

# Класс: TwigTranslatorBridge

## Краткое содержание:

Прокси для Symfony TranslationExtension: всегда использует актуальный Translator после reset().

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [trans()](#method_trans)
* public [getLocale()](#method_getLocale)

---

### Подробности

* Путь: `devcraft/src/classes/I18n/TwigTranslatorBridge.php`

---

## Детали

### Методы

[](){#method_trans}
### trans()

Переводит строку через актуальный экземпляр Translation::getTranslator().

**С версии:** 200.4.0

**Параметры:**
- `$id` — Идентификатор перевода.
- `$domain` — Домен перевода.
- `$locale` — Локаль.

**Возвращает:** `string` — Переведённая строка или исходный id.

[](){#method_getLocale}
### getLocale()

Возвращает текущую локаль приложения.

**С версии:** 200.4.0

**Возвращает:** `string` — Тег локали.
