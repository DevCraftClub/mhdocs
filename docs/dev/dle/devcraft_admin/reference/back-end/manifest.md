---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Манифест модуля - DevCraft Admin"
description: "Структура manifest.php модуля DevCraft Admin."
keywords: "PHP, DLE, Плагин, Админка, манифест, DevCraft, документация"
author: "Maxim Harder"
og:title: "Манифест модуля"
og:description: "Структура manifest.php модуля DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Манифест модуля

Каждый модуль DevCraft описывается файлом `manifest.php` в каталоге `devcraft/src/modules/{Name}/`. Для админ-оболочки используется `devcraft/src/modules/Admin/manifest.php`.

Файл возвращает ассоциативный массив с ключами `mod`, `code`, `meta`, `menu`, `ajax`, `changelog`, `assets`.

## Блок `meta`

Метаданные модуля для UI и ссылок:

| Ключ | Описание |
|------|----------|
| `name` | Отображаемое имя («DevCraft Admin») |
| `version` | Версия SemVer плагина |
| `description` | Краткое описание |
| `icon` | Иконка Metro UI (`mif-*`) |
| `docsLink` | URL публичной документации |
| `siteLink` | Страница загрузки на devcraft.club |
| `author` | Имя, контакты, донаты |

## Блок `menu`

Массив пунктов меню, создаваемых через `AdminLink::page()`:

```php
AdminLink::page(__('Главная'), 'dashboard', DashboardPage::class, 'mif-home'),
```

- **slug** — сегмент URL (`action=dashboard`);
- **класс страницы** — реализация `PageInterface`;
- **иконка** — Metro UI.

Страница без пункта в боковом меню (роутинг сохраняется через `AdminLinkResolver`):

```php
AdminLink::hidden('edit', EditSuggestionPage::class),
```

Тип `hidden` не рендерится в `navview`, но `?action=edit` продолжает открывать страницу.

## Блок `ajax`

Регистрация AJAX-обработчиков:

```php
'ajax' => [
    'controller' => 'admin',
    'methods'    => [
        'settings' => SettingsHandler::class,
        // ...
    ],
],
```

Имя контроллера передаётся в `devcraft/ajax.php` как `controller=admin`; метод — как `method=settings`. Для сателлитов обязателен `mod={код модуля}`. Каждый handler реализует `AjaxHandlerInterface`.

## Блок `assets`

Подключаемые JS/CSS относительно каталога модуля, например:

```php
'assets' => ['js' => ['admin.js']],
```

## Блок `changelog`

Подключает `changelog.data.php` — массив изменений для страницы «История изменений».

## Блок `composer_required`

[](){#composer_required}

Обязательные пакеты Composer для модуля. Агрегируются `ManifestPackageReader` из всех модулей реестра.

```php
'composer_required' => [
    [
        'name'         => 'vendor/example-package',
        'minVersion'   => '^1.0',
        'hardRequired' => true,
    ],
],
```

| Ключ | Описание |
|------|----------|
| `name` | Имя пакета `vendor/package` |
| `minVersion` | Минимальная версия / constraint |
| `hardRequired` | `true` — пакет обязателен (Dashboard, колонка «Обязательный»); `false` — рекомендуемый |

При дубликате имени в нескольких модулях модуль-источник — первый в порядке `Registry`; `required=true`, если любой модуль указал `hardRequired: true`.

Подробнее: [Composer-пакеты модулей](composer_packages.md).

## Регистрация модуля

`Registry` сканирует `devcraft/src/modules/*/manifest.php` и строит меню DLE через `DleMenuBuilder`. Подробнее: [Registry](classes/Registry.md), [PluginContext](classes/PluginContext.md).

## См. также

- [Генератор модулей](../../guides/new_module.md)
- [Точки входа](entry_points.md)
