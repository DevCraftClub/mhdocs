---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: EnvironmentFactory - DevCraft Admin"
description: "Документация по плагину класс: environmentfactory для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: environmentfactory, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: EnvironmentFactory"
og:description: "Документация по плагину класс: environmentfactory для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: EnvironmentFactory"
twitter:description: "Документация по плагину класс: environmentfactory для DLE."
---

# Класс: EnvironmentFactory

## Краткое содержание:

Фабрика Twig Environment с путями модулей и расширением перевода.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [create()](#method_create)
* private [cachePath()](#method_cachePath)
* public [ensureTranslationExtension()](#method_ensureTranslationExtension)
* private [registerModuleTemplatePaths()](#method_registerModuleTemplatePaths)
* private [registerExtensions()](#method_registerExtensions)

---

### Подробности

* Путь: `devcraft/src/classes/Twig/EnvironmentFactory.php`

---

## Детали

### Методы

[](){#method_create}
### create()

Создаёт настроенный экземпляр Twig Environment.

**С версии:** 200.4.0

**Возвращает:** `Environment` — Экземпляр с загрузчиком шаблонов и i18n-расширением.

[](){#method_cachePath}
### cachePath()

Возвращает путь кеша Twig или отключает кеширование в режиме отладки.

**С версии:** 200.4.0

**Параметры:**
- `$useDebug` — Включён ли режим отладки.

**Возвращает:** `string|false` — Абсолютный путь кеша Twig или false.

[](){#method_ensureTranslationExtension}
### ensureTranslationExtension()

Подключает Symfony TranslationExtension (фильтр trans, тег {% trans %}).

**С версии:** 200.4.0

**Параметры:**
- `$twig` — Экземпляр Twig.

[](){#method_registerModuleTemplatePaths}
### registerModuleTemplatePaths()

Регистрирует namespace-пути шаблонов для каждого модуля DevCraft.

**С версии:** 200.4.0

**Параметры:**
- `$loader` — Загрузчик Twig.

[](){#method_registerExtensions}
### registerExtensions()

Подключает расширения Twig: CacheExtension и runtime для тегов кеша.
