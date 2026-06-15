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

- **slug** — сегмент URL (`sites=dashboard`);
- **класс страницы** — реализация `PageInterface`;
- **иконка** — Metro UI.

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

Имя контроллера передаётся в `devcraft/ajax.php` как `controller=admin`; метод — как `method=settings`. Каждый handler реализует `AjaxHandlerInterface`.

## Блок `assets`

Подключаемые JS/CSS относительно каталога модуля, например:

```php
'assets' => ['js' => ['admin.js']],
```

## Блок `changelog`

Подключает `changelog.data.php` — массив изменений для страницы «История изменений».

## Регистрация модуля

`Registry` сканирует `devcraft/src/modules/*/manifest.php` и строит меню DLE через `DleMenuBuilder`. Подробнее: [Registry](classes/Registry.md), [PluginContext](classes/PluginContext.md).

## См. также

- [Генератор модулей](../new_module.md)
- [Точки входа](entry_points.md)
