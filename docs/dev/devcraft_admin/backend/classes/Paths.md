---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Paths - DevCraft Admin"
description: "Документация по плагину класс: paths для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: paths, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Paths"
og:description: "Документация по плагину класс: paths для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Paths"
twitter:description: "Документация по плагину класс: paths для DLE."
---

# Класс: Paths

## Краткое содержание:

Регистрация и доступ к путям и URL-адресам DevCraft.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [register()](#method_register)
* public [root()](#method_root)
* public [src()](#method_src)
* public [templates()](#method_templates)
* public [locales()](#method_locales)
* public [config()](#method_config)
* public [modules()](#method_modules)
* public [classes()](#method_classes)
* public [logs()](#method_logs)
* public [cache()](#method_cache)
* public [publicAssets()](#method_publicAssets)
* public [base()](#method_base)
* public [ajaxBase()](#method_ajaxBase)
* public [ajaxUrl()](#method_ajaxUrl)

---

### Подробности

* Путь: `devcraft/src/classes/Config/Paths.php`

---

## Детали

### Методы

[](){#method_register}
### register()

Регистрирует константы путей DevCraft, если они ещё не определены.

**С версии:** 200.4.0

[](){#method_root}
### root()

Возвращает абсолютный путь к корню каталога devcraft/.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_ROOT.

[](){#method_src}
### src()

Возвращает абсолютный путь к каталогу devcraft/src/.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_SRC.

[](){#method_templates}
### templates()

Возвращает абсолютный путь к каталогу шаблонов Twig.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_TEMPLATES.

[](){#method_locales}
### locales()

Возвращает абсолютный путь к каталогу локалей XLIFF.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_LOCALES.

[](){#method_config}
### config()

Возвращает абсолютный путь к каталогу конфигурации плагина.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_CONFIG.

[](){#method_modules}
### modules()

Возвращает абсолютный путь к каталогу модулей DevCraft.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_MODULES.

[](){#method_classes}
### classes()

Возвращает абсолютный путь к каталогу PHP-классов DevCraft.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_CLASSES.

[](){#method_logs}
### logs()

Возвращает абсолютный путь к каталогу логов плагина.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_LOGS.

[](){#method_cache}
### cache()

Возвращает абсолютный путь к каталогу кеша плагина.

**С версии:** 200.4.0

**Возвращает:** `string` — Значение DEVCRAFT_CACHE.

[](){#method_publicAssets}
### publicAssets()

Возвращает файловый каталог публичных DevCraft-ресурсов (css/js для AssetsChecker).

**С версии:** 200.4.0

**Возвращает:** `string` — Абсолютный путь к devcraft/src/templates/core/assets/.

[](){#method_base}
### base()

Возвращает базовый URL сайта DLE без завершающего слэша.

**С версии:** 200.4.0

**Возвращает:** `string` — URL из $config['http_home_url'] или «/».

[](){#method_ajaxBase}
### ajaxBase()

Возвращает базовый URL AJAX-входа DevCraft (`/devcraft/ajax.php`).

**С версии:** 200.4.0

**Возвращает:** `string` — Полный URL точки входа ajax.php.

[](){#method_ajaxUrl}
### ajaxUrl()

Формирует полный URL AJAX-запроса с параметрами controller и method.

**С версии:** 200.4.0

**Параметры:**
- `$method` — Имя AJAX-метода.
- `$controller` — Идентификатор контроллера (по умолчанию «admin»).

**Возвращает:** `string` — URL с query-параметрами controller и method.
