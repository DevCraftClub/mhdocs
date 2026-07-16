---
tags:
  - PHP
  - DLE
  - Composer
  - DevCraft
title: "Composer-пакеты модулей - DevCraft Admin"
description: "Manifest composer_required, синхронизация json/lock и использование Core-API."
author: "Maxim Harder"
---

# Composer-пакеты модулей

DevCraft предоставляет общие сервисы в `DevCraft\Core\Composer` для установки пакетов, синхронизации с БД и проверки политик. Admin-UI использует те же классы, что и пользовательские модули.

## Manifest: `composer_required`

В `manifest.php` модуля:

```php
'composer_required' => [
    [
        'name'         => 'vendor/example-package',
        'minVersion'   => '^1.0',
        'hardRequired' => true,
    ],
],
```

- `hardRequired: true` — пакет учитывается в метрике Dashboard и колонке «Обязательный».
- При дубликате имени пакета в нескольких модулях атрибуция берётся от **первого** модуля в порядке реестра; `required=true`, если **хотя бы один** модуль объявил `hardRequired: true`.

Подробнее: [Манифест модуля — composer_required](manifest.md#composer_required).

## Синхронизация json → lock → БД

1. `ComposerDbSyncService::syncFromRuntimeSnapshot()` — полный sync:
   - union из `devcraft/composer.json` `require` (без `php`/`ext-*`) и manifest-only пакетов;
   - `installed` / `version` из `composer.lock` через `ComposerStateReader`.
2. После успешного AJAX-действия — `applySuccessfulAction()` с повторным чтением lock.

Ручной sync: **DevCraft Admin → Composer → Синхронизировать с composer.lock**.

## Использование в модуле (AJAX)

```php
use DevCraft\Core\Composer\ComposerDbSyncService;
use DevCraft\Core\Composer\ComposerRuntimeAdapter;
use DevCraft\Core\Composer\PackagePolicyService;
use DevCraft\Core\Http\AjaxRequest;
use DevCraft\Core\Http\JsonResponse;
use DevCraft\Core\Interfaces\AjaxHandlerInterface;

final class ExampleInstallHandler implements AjaxHandlerInterface
{
    public function handle(AjaxRequest $request): JsonResponse
    {
        $package = (string) ($request->data['package'] ?? '');
        $blocked = (new PackagePolicyService())->validateAction('install', $package);
        if ($blocked !== null) {
            return JsonResponse::fail(__('Ошибка'), $blocked->toArray()['message'], 'policy_violation', 409);
        }

        $result = (new ComposerRuntimeAdapter())->install($package);
        if ($result->toArray()['status'] === 'ok') {
            (new ComposerDbSyncService())->applySuccessfulAction('install', $package);
        }

        return JsonResponse::ok($result->toArray(), __('Операция Composer выполнена'));
    }
}
```

**Важно:** не импортировать `DevCraft\Modules\Admin\*`; защита только через DLE `admin_sections` в manifest.

## Классы Core

| Класс | Назначение |
|-------|------------|
| [ComposerActionResult](classes/ComposerActionResult.md) | DTO результата |
| [ComposerRuntimeAdapter](classes/ComposerRuntimeAdapter.md) | CLI Composer |
| [ComposerStateReader](classes/ComposerStateReader.md) | Чтение lock |
| [ManifestPackageReader](classes/ManifestPackageReader.md) | Агрегация manifest |
| [ComposerDbSyncService](classes/ComposerDbSyncService.md) | Sync с БД |
| [PackagePolicyService](classes/PackagePolicyService.md) | Политики |
| [DefaultPackagePolicyStore](classes/DefaultPackagePolicyStore.md) | JSON-политики |
| [ComposerData](classes/ComposerData.md) | ORM-сущность |

## См. также

- [ComposerActionHandler](../backend/classes/ComposerActionHandler.md) — эталон в Admin (если документирован)
- [Registry](classes/Registry.md) — порядок модулей для атрибуции
