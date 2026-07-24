---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Примеры Form - DevCraft Admin"
description: "Практические примеры декларативных форм DevCraft: layout, типы полей, filter schema."
keywords: "PHP, DLE, DevCraft, FormSchemaBuilder, FormSectionBuilder, FormFieldBuilder, FilterSchema, документация"
author: "Maxim Harder"
og:title: "Примеры Form — DevCraft Admin"
og:description: "Layout stack/tabs/accordion, все типы полей, filter schema, разница контрактов settings.schema.php и *.filter.schema.php."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Примеры Form

Практические сценарии для [Form](../../../../../../devcraft/src/classes/Form) (`FormSchemaBuilder`, `FormSectionBuilder`, `FormFieldBuilder`). Справочник по каждому классу — в разделе [I18n / Twig / Form](.nav.yml) (`FormSchemaBuilder.md`, `FormSectionBuilder.md`, `FormFieldBuilder.md`).

## Два разных контракта

`FormSchemaBuilder` используется в **двух** ролях, которые важно не путать:

| Файл                    | Возвращает                                         | Кто гидрирует                                                     |
| ------------------------ | --------------------------------------------------- | ------------------------------------------------------------------ |
| `settings.schema.php`    | `FormSchema` напрямую — результат `->build()`      | `SettingsFormService` рендерит объект как есть                    |
| `*.filter.schema.php`    | обычный PHP `array` (`sections`/`sort`)            | `FilterSchema::fromArray()` гидрирует массив в `FilterSchema`      |

То есть **`settings.schema.php`** сразу возвращает готовый объект `FormSchema` (можно использовать весь fluent-API `FormSchemaBuilder`), а **`*.filter.schema.php`** — плоский массив в форме, которую понимает `FilterSchema::fromArray()` (можно писать и через builder + `->build()->toArray()`, и просто array-литералом — на практике используется array-литерал, см. ниже).

## Layout: stack (по умолчанию)

```php
use DevCraft\Form\FormSchemaBuilder;

return FormSchemaBuilder::create('my_module')
    ->section(__('Общие'))
        ->text('site_name', __('Название сайта'))
    ->build();
```

Секции выводятся вертикальным стеком — `layout()` можно не указывать, `FormLayout::STACK` — значение по умолчанию.

## Layout: tabs

```php
use DevCraft\Core\Enums\FormLayout;
use DevCraft\Form\FormSchemaBuilder;

return FormSchemaBuilder::create('devcraft')
    ->layout(FormLayout::TABS)
    ->section(__('Общие'))
        ->number('list_count', __('Количество объектов'))
            ->filter(FILTER_VALIDATE_INT)
    ->section(__('Отладка'))
        ->checkbox('debug', __('Режим отладки'))
            ->default(false)
    ->build();
```

Каждый `->section(...)` после первого автоматически фиксирует предыдущую секцию и открывает вкладку с новым заголовком (см. живой пример: [Admin/settings.schema.php](../../../../../../devcraft/src/modules/Admin/settings.schema.php)).

## Layout: accordion

```php
use DevCraft\Core\Enums\FormLayout;
use DevCraft\Form\FormSchemaBuilder;

return FormSchemaBuilder::create('my_module')
    ->layout(FormLayout::ACCORDION)
    ->section(__('Подключение'))
        ->text('api_key', __('API-ключ'))
    ->section(__('Расширенные'))
        ->number('timeout', __('Таймаут (сек)'))
            ->default(30)
    ->build();
```

Секции сворачиваются в аккордеон Metro UI — удобно для длинных форм с редко используемыми блоками.

## Все типы полей

```php
use DevCraft\Form\FormSchemaBuilder;

return FormSchemaBuilder::create('my_module')
    ->section(__('Поля'))
        ->text('api_key', __('API-ключ'))
            ->description(__('Секретный ключ провайдера'))
        ->number('timeout', __('Таймаут (сек)'))
            ->filter(FILTER_VALIDATE_INT)
            ->default(30)
        ->select('language', __('Язык'))
            ->options(['ru_RU' => __('Русский'), 'en_US' => __('English')])
            ->default('ru_RU')
        ->multi('roles', __('Роли'))
            ->options(['admin' => __('Администратор'), 'editor' => __('Редактор')])
        ->checkbox('enabled', __('Включено'))
            ->default(true)
        ->textarea('notice', __('Текст уведомления'))
            ->description(__('Отображается на главной странице модуля'))
        ->hidden('mod', 'my_module')
    ->build();
```

- `text`/`number`/`textarea` — простые поля ввода; `number` обычно комбинируют с `->filter(FILTER_VALIDATE_INT)` для приведения типов при сохранении.
- `select` — одиночный выбор из `options()`; `multi` — множественный выбор (в фильтрах рендерится как чекбокс-список с несколькими значениями в URL).
- `checkbox` — булево значение, `->default(bool)`.
- `hidden` — служебное поле без видимого label (например, `mod` для форм, где нужно явно передать контекст).
- `->columns(int)` — ширина поля в колонках сетки Metro (1–12), `->metro([...])` — произвольные data-атрибуты Metro UI.

## Filter schema: полный пример с sort/db_column/range/daterange

`*.filter.schema.php` — простой array-контракт, гидрируемый `FilterSchema::fromArray()`. Реальный пример из [Admin/logs.filter.schema.php](../../../../../../devcraft/src/modules/Admin/logs.filter.schema.php):

```php
declare(strict_types=1);

return [
    'sort'     => [
        'default' => 'time',
        'columns' => [
            'id'       => '#',
            'log_type' => __('Тип'),
            'plugin'   => __('Плагин'),
            'time'     => __('Время'),
        ],
    ],
    'sections' => [
        [
            'title'  => __('Фильтр'),
            'fields' => [
                [
                    'id'    => 'plugin',
                    'type'  => 'multi',
                    'label' => __('Плагин'),
                    'metro' => ['db_column' => 'plugin'],
                ],
                [
                    'id'    => 'message',
                    'type'  => 'text',
                    'label' => __('Сообщение'),
                    'metro' => ['db_column' => 'message'],
                ],
                [
                    'id'    => 'time',
                    'type'  => 'daterange',
                    'label' => __('Время'),
                    'metro' => ['db_column' => 'time'],
                ],
                [
                    'id'    => 'id',
                    'type'  => 'range',
                    'label' => '#',
                    'metro' => ['db_column' => 'id'],
                ],
            ],
        ],
    ],
];
```

Особенности:

- `sort.default` — колонка сортировки по умолчанию (`FilterSchema::$defaultOrder`); `sort.columns` — карта `column => label`, из которой строится выпадающий список сортировки на списковой странице.
- `type: 'range'` — числовой диапазон «от–до» (например, `id` или любой числовой столбец).
- `type: 'daterange'` — диапазон дат с датапикером Metro.
- `type: 'multi'` — чекбокс-фильтр с несколькими значениями (`filter_rules[N][type]=multi&filter_rules[N][value][]=...` в URL).
- `metro.db_column` — реальное имя колонки в БД, если оно отличается от `id` поля (иначе `FilterSchema::filterDbColumns()`/`resolvedSortColumns()` используют сам `id`).

Схема загружается и применяется в странице через `FilterSchema::fromArray()` + `FilterFormService`:

```php
use DevCraft\Types\FilterSchema;
use DevCraft\Core\Admin\FilterFormService;

$raw    = require DLEPlugins::Check(DEVCRAFT_MODULES . '/MyModule/Filter/filter.schema.php');
$schema = FilterSchema::fromArray($raw);

$filterService = new FilterFormService();
$query         = $filterService->parseRequestQuery();
$order         = FilterFormService::normalizeOrder((string) ($query['order'] ?? $schema->defaultOrder), $schema);
```

## См. также

- [FormSchemaBuilder](classes/FormSchemaBuilder.md), [FormSectionBuilder](classes/FormSectionBuilder.md), [FormFieldBuilder](classes/FormFieldBuilder.md)
- [FormSchema](classes/FormSchema.md), [FormSection](classes/FormSection.md), [FormField](classes/FormField.md), [FilterSchema](classes/FilterSchema.md)
- [FilterFormService](classes/FilterFormService.md)
- [Создание CRUD-страницы](crud_pages.md)
