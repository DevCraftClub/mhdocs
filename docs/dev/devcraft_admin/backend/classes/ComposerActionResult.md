---
title: "Класс: ComposerActionResult"
description: "DTO результата действия Composer."
---

# Класс: ComposerActionResult

**Namespace:** `DevCraft\Core\Composer`  
**Путь:** `devcraft/src/classes/Composer/ComposerActionResult.php`

## Краткое содержание

Единый JSON-контракт для ответов Composer (`ok`, `error`, `requires_decision`).

## Методы

- `ok(string $message, array $details = []): self`
- `error(string $message, array $details = []): self`
- `requiresDecision(string $message, array $details = []): self`
- `toArray(): array` — `{ status, message, details }`

## См. также

- [ComposerRuntimeAdapter](ComposerRuntimeAdapter.md)
- [PackagePolicyService](PackagePolicyService.md)
- [Руководство Composer](../composer_packages.md)
