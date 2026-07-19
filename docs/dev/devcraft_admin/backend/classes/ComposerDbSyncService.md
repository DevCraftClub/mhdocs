---
title: "Класс: ComposerDbSyncService"
description: "Синхронизация composer.json, lock и manifest с таблицей devcraft_composer_data."
---

# Класс: ComposerDbSyncService

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/ComposerDbSyncService.php`

## Методы

- `syncFromRuntimeSnapshot(): void` — полная замена снимка в БД
- `applySuccessfulAction(string $actionType, string $packageName, ?string $targetVersion = null): void` — точечное обновление после CLI с re-read lock

## См. также

- [ComposerData](ComposerData.md)
- [composer_packages.md](../composer_packages.md)
