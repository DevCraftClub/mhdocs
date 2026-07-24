---
title: "Класс: ComposerStateReader"
description: "Чтение установленных пакетов из composer.lock."
---

# Класс: ComposerStateReader

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/ComposerStateReader.php`

## Методы

- `installedPackages(): array` — map `vendor/package` → `{ name, installedVersion, isInstalled, source }`

Отсутствующий или пустой lock → пустой массив (без исключения).

## См. также

- [ComposerDbSyncService](ComposerDbSyncService.md)
