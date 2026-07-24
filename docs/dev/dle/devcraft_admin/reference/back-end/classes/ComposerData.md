---
title: "Класс: ComposerData"
description: "ORM-сущность пакета Composer (таблица devcraft_composer_data)."
---

# Класс: ComposerData

**Namespace:** `DevCraft\Core\Composer\Models`  
**Путь:** `devcraft/src/classes/Composer/Models/ComposerData.php`

## Поля

| Поле | Описание |
|------|----------|
| package | Имя пакета |
| version | Версия / constraint |
| installed | Установлен по lock |
| required | hardRequired из manifest |
| plugin | Каталог модуля-источника |
| appCode | Код модуля |

## Методы

- `fromArray(array $payload): self`
- `toArray(): array`
- `getColumnVal(string $name): mixed`

## Репозиторий

[ComposerDataRepository](ComposerDataRepository.md) — `devcraft/src/classes/Composer/Repositories/ComposerDataRepository.php`

- `findByPackage(string $package): ?ComposerData`
- `upsertByPackage(array $payload): ComposerData`
- `replaceFromSnapshot(array $snapshot): void`

## См. также

- [ComposerDbSyncService](ComposerDbSyncService.md)
