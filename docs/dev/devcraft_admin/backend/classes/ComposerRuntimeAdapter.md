---
title: "Класс: ComposerRuntimeAdapter"
description: "Выполнение команд Composer CLI из веб-контекста."
---

# Класс: ComposerRuntimeAdapter

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/ComposerRuntimeAdapter.php`

## Методы

- `applyProcessEnvironment(): void` — `HOME` / `COMPOSER_HOME` под `devcraft/`
- `install(string $package, ?string $version = null): ComposerActionResult`
- `update(string $package, ?string $version = null): ComposerActionResult`
- `remove(string $package): ComposerActionResult`
- `dumpAutoload(): ComposerActionResult`
- `runInstallDefaults(): array`

## См. также

- [ComposerDbSyncService](ComposerDbSyncService.md)
- [composer_packages.md](../composer_packages.md)
