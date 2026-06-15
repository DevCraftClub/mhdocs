---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AssetsCheckerService - DevCraft Admin"
description: "Документация по плагину класс: assetscheckerservice для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: assetscheckerservice, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AssetsCheckerService"
og:description: "Документация по плагину класс: assetscheckerservice для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AssetsCheckerService"
twitter:description: "Документация по плагину класс: assetscheckerservice для DLE."
---

# Класс: AssetsCheckerService

## Краткое содержание:

Сканирует публичные ассеты, сравнивает с удалённым манифестом и загружает недостающие файлы.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [__construct()](#method___construct)
* public [scan()](#method_scan)
* public [compare()](#method_compare)
* public [compareReport()](#method_compareReport)
* public [downloadAll()](#method_downloadAll)
* public [downloadMissing()](#method_downloadMissing)
* public [run()](#method_run)
* public [fileMetadata()](#method_fileMetadata)
* private [deployAbsolutePath()](#method_deployAbsolutePath)
* private [normalizeManifestFiles()](#method_normalizeManifestFiles)
* private [writeManifest()](#method_writeManifest)
* private [readManifest()](#method_readManifest)
* private [fetchRemoteManifest()](#method_fetchRemoteManifest)
* private [downloadAssetFile()](#method_downloadAssetFile)

---

### Подробности

* Путь: `devcraft/src/classes/Support/AssetsCheckerService.php`

---

## Детали

### Методы

[](){#method___construct}
### __construct()

Принимает `$manifestPath`: Путь к assets.json или null для Paths::config()..

**С версии:** 173.3.0

**Параметры:**
- `$manifestPath` — Путь к assets.json или null для Paths::config().

[](){#method_scan}
### scan()

Сканирует локальные файлы по ключам удалённого манифеста и записывает локальный MD5-манифест.

**С версии:** 173.3.0

**Возвращает:** `array<string, array<string, mixed>>` — Манифест file => metadata.

[](){#method_compare}
### compare()

Сравнивает локальный манифест с удалённым по hash.

**С версии:** 173.3.0

**Параметры:**
- `$remoteUrl` — URL удалённого assets.json.

**Возвращает:** `array{missing: string[], outdated: string[], ok: string[]}` — Списки путей.

[](){#method_compareReport}
### compareReport()

Формирует расширенный отчёт сравнения с метаданными файлов.

**С версии:** 173.3.0

**Параметры:**
- `$remoteUrl` — URL удалённого assets.json.

**Возвращает:** `array{` — 

[](){#method_downloadAll}
### downloadAll()

Загружает все файлы из удалённого манифеста.

**С версии:** 173.3.0

**Параметры:**
- `$remoteUrl` — URL удалённого assets.json.

**Возвращает:** `int` — Число успешно загруженных файлов.

[](){#method_downloadMissing}
### downloadMissing()

Загружает только missing и outdated файлы из diff.

**С версии:** 173.3.0

**Возвращает:** `int` — Число успешно загруженных файлов.

[](){#method_run}
### run()

Выполняет полный цикл: scan → compare → downloadMissing.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — mixed> Ключи scan, compare, downloaded.

[](){#method_fileMetadata}
### fileMetadata()

Формирует метаданные одного файла для манифеста.

**С версии:** 173.3.0

**Параметры:**
- `$absolutePath` — Абсолютный путь к файлу на диске.

**Возвращает:** `array{path: string, file: string, link: string, hash: string, alt: string, alt_name: string, required: bool}` — |null Метаданные или null.

[](){#method_deployAbsolutePath}
### deployAbsolutePath()

Возвращает абсолютный путь развёртывания из поля file манифеста (от ROOT_DIR).

**С версии:** 200.4.0

[](){#method_normalizeManifestFiles}
### normalizeManifestFiles()

Извлекает секцию files из манифеста или фильтрует плоский массив.

**С версии:** 173.3.0

**Возвращает:** `array<string, array<string, mixed>>` — Карта path => metadata.

[](){#method_writeManifest}
### writeManifest()

Записывает локальный JSON-манифест на диск.

**С версии:** 173.3.0

[](){#method_readManifest}
### readManifest()

Читает локальный JSON-манифест assets.json.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — mixed> Декодированный манифест или пустой массив.

[](){#method_fetchRemoteManifest}
### fetchRemoteManifest()

Загружает и декодирует удалённый JSON-манифест.

**С версии:** 173.3.0

**Параметры:**
- `$remoteUrl` — URL assets.json.

**Возвращает:** `array<string,` — mixed>|null Манифест или null при ошибке.

[](){#method_downloadAssetFile}
### downloadAssetFile()

Скачивает один файл ассета по link/alt из метаданных.

**С версии:** 173.3.0

**Параметры:**
- `$manifestKey` — Ключ /assets/... .

**Возвращает:** `bool` — true при успешной записи файла.
