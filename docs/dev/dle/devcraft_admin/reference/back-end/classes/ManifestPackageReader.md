---
title: "Класс: ManifestPackageReader"
description: "Агрегация composer_required из всех модулей реестра."
---

# Класс: ManifestPackageReader

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/ManifestPackageReader.php`

## Методы

- `requiredPackages(): array` — map пакета → `{ name, requiredBy, minVersion, isHardRequired, plugin, appCode }`

Источник: `Application::instance()->registry()->modules()` → `ModuleData::composerRequired`.

## См. также

- [manifest.md](../manifest.md#composer_required)
- [Registry](Registry.md)
