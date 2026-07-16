---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
  - разработка
  title: "Начало работы - DevCraft Admin"
  description: "Создание и структура модулей DevCraft Admin для DLE 20.0."
  keywords: "PHP, DLE, DevCraft, модуль, manifest, settings.schema, документация"
  author: "Maxim Harder"
  og:title: "Начало работы с модулями DevCraft"
  og:description: "Manifest, settings.schema.php, страницы, AJAX и install.xml."
  og:image: "<https://devcraft.club/data/assets/logo_default/devcraftx2.png>"
---

# Начало работы с модулями DevCraft

Руководство для разработчиков плагинов на базе **DevCraft Admin**.

Для быстрого каркаса можно использовать [генератор модулей](new_module.md); ниже — ручная сборка и обязательные артефакты.

## 1. Предварительные требования

- DLE **20.0**, PHP **8.3**
- Установленный DevCraft Admin **≥ 200.4.0**
- PSR-4 autoload: `DevCraft\Modules\{Name}\` → `devcraft/src/modules/{Name}/`
- После добавления файлов: `composer dump-autoload` в `devcraft/`

## 2. Создание модуля

### Вариант A: генератор

**DevCraft Admin → Генератор модулей** — создаёт каркас под `devcraft/src/modules/{Name}/`.

### Вариант B: вручную

```text
devcraft/src/modules/MyModule/
├── manifest.php
├── settings.schema.php      # если есть настройки
├── changelog.data.php
├── Pages/
├── Ajax/
├── Services/                  # по необходимости
├── templates/
│   └── *.twig
└── Public/
    ├── .htaccess
    └── icon.png
```

Точка входа DLE (отдельный плагин или общий архив):

```php
require_once DLEPlugins::Check(ROOT_DIR . '/devcraft/init.php');
DevCraft\Core\Application::instance()->runAdmin(moduleDir: 'MyModule');
```

Файл: `engine/inc/{mod}.php`.

## 3. manifest.php

Обязательные блоки:

| Ключ        | Назначение                                                                         |
| ----------- | ---------------------------------------------------------------------------------- |
| `mod`       | Код в URL DLE (`?mod=...`)                                                         |
| `code`      | Код конфигурации JSON (`devcraft/config/{code}.json`)                              |
| `meta`      | `name`, `version`, `description`, `icon`, ссылки                                   |
| `menu`      | Пункты меню через `AdminLink::page()`; для сателлитов — **5-й аргумент** **`mod`** |
| `ajax`      | `controller` + `methods` → классы обработчиков (`controller` обычно `admin`)       |
| `changelog` | `require changelog.data.php`                                                       |
| `assets`    | JS/CSS модуля (опционально)                                                        |

Пример AJAX (все запросы идут на `devcraft/ajax.php`):

```php
'ajax' => [
    'controller' => 'admin',
    'methods'    => [
        'settings' => SettingsHandler::class,
    ],
],
```

Параметры запроса: `mod`, `controller`, `method`, `user_hash`, `data`.

## 4. settings.schema.php

Схема настроек через `FormSchemaBuilder`:

```php
return FormSchemaBuilder::create('my_module')  // code = имя JSON-файла
    ->layout(FormLayout::TABS)
    ->section(__('Основные'))
        ->text('export_path', __('Путь'))
            ->default('devcraft/backup')
    ->build();
```

- Файл конфигурации: `devcraft/config/{code}.json`
- Страница: класс `SettingsPage` + шаблон `settings.twig` с `{% include 'core/includes/form/settings_page.twig' %}`
- Сохранение: `SettingsHandler` или кастомный обработчик с `SettingsFormService`
- `supplementFormData()` — дополнительные данные для Twig

Кастомный `SettingsHandler` — для логики после сохранения (создание каталогов, `.htaccess`, внешние API).

## 5. changelog.data.php

Массив версий для страницы «История изменений»:

```php
return [
    [
        'version' => '200.1.0',
        'date'    => '2026-01-01',
        'changes' => [
            'added'   => [__('Новая возможность')],
            'changed' => [],
            'fixed'   => [],
            'removed' => [],
        ],
    ],
];
```

## 6. Фильтры (опционально)

Для таблиц с фильтрацией — `filter.schema.php` и `FilterFormService` (см. модуль Admin → логи).

## 7. Страницы, AJAX, install.xml

### Pages

Наследуйте `AbstractPage`, метод `handle()` возвращает `['view' => 'my_module/page.twig', 'data' => [...]]`.

### AJAX

- Реализуйте `AjaxHandlerInterface`
- Возвращайте `JsonResponse` или `FileResponse` (скачивание файлов, DevCraft ≥ 200.4.0)
- **Не создавайте** отдельные `engine/ajax/{mod}.php`

### install.xml

- `version`, `dleversion` 20.0
- `needplugin`: имя плагина-зависимости (`DevCraft Admin`)
- Без патча `paths.php` — autoload через Composer
- `<notice>`: `composer dump-autoload`, требования к DevCraft

### Локализация

XLIFF: `devcraft/locales/{locale}/{code}.xliff` (Crowdin-совместимый путь).

## См. также

- [Генератор модулей](new_module.md)
- [Composer-пакеты модулей](backend/composer_packages.md)
- [Манифест модуля](backend/manifest.md)
- [Точки входа](backend/entry_points.md)
- [ИИ-инструменты](ai_tools.md)

