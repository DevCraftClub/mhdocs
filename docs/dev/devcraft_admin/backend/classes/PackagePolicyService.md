---
title: "Класс: PackagePolicyService"
description: "Проверка default-политик перед install/update/remove."
---

# Класс: PackagePolicyService

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/PackagePolicyService.php`

## Методы

- `validateAction(string $actionType, string $packageName, ?string $targetVersion = null): ?ComposerActionResult`

`null` — действие разрешено; иначе DTO ошибки.

## См. также

- [DefaultPackagePolicyStore](DefaultPackagePolicyStore.md)
