---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Application - DevCraft Admin"
description: "Документация по плагину класс: application для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: application, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Application"
og:description: "Документация по плагину класс: application для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Application"
twitter:description: "Документация по плагину класс: application для DLE."
---

# Класс: Application

## Краткое содержание:

Главный контейнер приложения DevCraft (Singleton).

---

### Свойства

* private $[instance](#property_instance)
* private $[registry](#property_registry)
* private $[twig](#property_twig)
* private $[database](#property_database)
* private $[dataLoader](#property_dataLoader)
* private $[dleData](#property_dleData)
* private $[assetsChecker](#property_assetsChecker)

---

### Методы

* private [__construct()](#method___construct)
* public [instance()](#method_instance)
* public [boot()](#method_boot)
* public [registry()](#method_registry)
* public [twig()](#method_twig)
* public [database()](#method_database)
* public [runAdmin()](#method_runAdmin)
* public [dataLoader()](#method_dataLoader)
* public [dleData()](#method_dleData)
* public [assetsChecker()](#method_assetsChecker)
* public [public_asset_url()](#method_public_asset_url)
* public [modulePublicAssetUrl()](#method_modulePublicAssetUrl)

---

### Подробности

* Путь: `devcraft/src/classes/Application.php`

---

## Детали

### Свойства

[](){#property_instance}

#### $instance

Главный контейнер приложения DevCraft (Singleton).

[](){#property_registry}

#### $registry

Признак завершённой инициализации ядра.

[](){#property_twig}

#### $twig

Экземпляр Twig для рендеринга шаблонов.

[](){#property_database}

#### $database

Шлюз доступа к базе данных через Cycle ORM.

[](){#property_dataLoader}

#### $dataLoader

Сервис загрузки данных из таблиц DLE с кешированием.

[](){#property_dleData}

#### $dleData

Сервис агрегированных данных DLE (пользователи, категории и т.д.).

[](){#property_assetsChecker}

#### $assetsChecker

Сервис проверки целостности публичных ассетов.

### Методы

[](){#method___construct}

### __construct()

Закрывает прямое создание экземпляра; используйте {@see instance()}.

**С версии:** 200.4.0

[](){#method_instance}

### instance()

Возвращает единственный экземпляр приложения DevCraft.

**С версии:** 200.4.0

**Возвращает:** `self` — Экземпляр приложения.

[](){#method_boot}

### boot()

Выполняет однократную инициализацию путей, реестра модулей и Twig.

**С версии:** 200.4.0

[](){#method_registry}

### registry()

Возвращает реестр модулей после автоматической инициализации ядра.

**С версии:** 200.4.0

**Возвращает:** `Registry` — Реестр активных модулей.

[](){#method_twig}

### twig()

Возвращает окружение Twig с подключённым расширением перевода.

**С версии:** 200.4.0

**Возвращает:** `Environment` — Настроенный экземпляр Twig.

[](){#method_database}

### database()

Возвращает шлюз базы данных, создавая его при первом обращении.

**С версии:** 200.4.0

**Возвращает:** `DatabaseGateway` — Шлюз Cycle ORM для DevCraft.

[](){#method_runAdmin}

### runAdmin()

Запускает обработку запроса админ-модуля DevCraft.

**С версии:** 200.4.0

**Параметры:**

- `$moduleDir` — Имя каталога модуля относительно DEVCRAFT_MODULES.
- 
- `$mod` — Переопределение идентификатора модуля в URL (необязательно).

[](){#method_dataLoader}

### dataLoader()

Возвращает сервис загрузки данных с учётом таймера кеша из настроек.

**С версии:** 200.4.0

**Возвращает:** `DataLoaderService` — Сервис выборки данных DLE.

[](){#method_dleData}

### dleData()

Возвращает сервис агрегированных данных DLE с кешированием.

**С версии:** 200.4.0

**Возвращает:** `DleDataService` — Сервис высокоуровневых данных DLE.

[](){#method_assetsChecker}

### assetsChecker()

Возвращает сервис проверки публичных ассетов DevCraft.

**С версии:** 200.4.0

**Возвращает:** `AssetsCheckerService` — Сервис AssetsChecker.

[](){#method_public_asset_url}

### public_asset_url()

Возвращает публичный URL каталога core/assets шаблонов DevCraft.

**С версии:** 200.4.0

**Возвращает:** `string` — URL с завершающим слэшем.

[](){#method_modulePublicAssetUrl}

### modulePublicAssetUrl()

Возвращает базовый URL каталога Public модуля (JS/CSS из manifest assets).

**С версии:** 200.4.0

**Параметры:**

- `$modulePath` — Абсолютный путь к корню модуля.

**Возвращает:** `string` — URL каталога Public с завершающим слэшем.

