---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
  - разработка
title: 'Создание CRUD-страницы - DevCraft Admin'
description: 'Сквозной сценарий CRUD-страницы DevCraft: Entity, Repository, список с фильтром, форма создания/редактирования, Ajax, манифест, Twig.'
keywords: 'PHP, DLE, DevCraft, CRUD, AbstractEntity, AbstractRepository, FilterSchema, AjaxHandlerInterface, Twig, документация'
author: 'Maxim Harder'
og:title: 'Создание CRUD-страницы — DevCraft Admin'
og:description: 'Entity → Repository → список + фильтр → форма → Ajax save/delete → manifest → Twig.'
og:image: 'https://devcraft.club/data/assets/logo_default/devcraftx2.png'
---

# Создание CRUD-страницы

Сквозной сценарий CRUD (список + создание/редактирование + удаление) на примере сущности `Note` в гипотетическом модуле `MyModule`. Живой рабочий пример с тем же набором слоёв — страница «Шаблоны» модуля `dle_faker` ([TemplatesPage.php](../reference/back-end/classes/PageInterface.md), `Ajax/CreateTemplateHandler.php`, `Ajax/DeleteTemplateHandler.php`).

## 1. Entity → `AbstractEntity`

```php
<?php

declare(strict_types=1);

namespace DevCraft\Modules\MyModule\Models;

use Cycle\Annotated\Annotation\Column;
use Cycle\Annotated\Annotation\Entity;
use DevCraft\Core\Abstracts\AbstractEntity;
use DevCraft\Modules\MyModule\Repositories\NoteRepository;

#[Entity(role: 'note', repository: NoteRepository::class, table: 'my_module_notes')]
class Note extends AbstractEntity {

    #[Column(type: 'string')]
    public string $title = '';

    #[Column(type: 'text')]
    public string $body = '';

    public function getColumnVal(string $name): mixed {
        return match ($name) {
            'id'    => $this->id(),
            'title' => $this->title,
            'body'  => $this->body,
            default => NULL,
        };
    }

}
```

`AbstractEntity` уже даёт `$id`, `createdAt`/`updatedAt`/`creator`/`lastEditor` с автозаполнением через `beforeSave()` — свои модели не должны дублировать эти поля/геттеры (см. [AbstractEntity](../reference/back-end/classes/AbstractEntity.md)).

## 2. Repository → `AbstractRepository`

```php
<?php

declare(strict_types=1);

namespace DevCraft\Modules\MyModule\Repositories;

use DevCraft\Core\Abstracts\AbstractRepository;

final class NoteRepository extends AbstractRepository {

    public function findOneById(int $id): ?\DevCraft\Modules\MyModule\Models\Note {
        return $this->findOne(['id' => $id]);
    }

}
```

`AbstractRepository` уже даёт `findFiltered()` (фильтр + пагинация + сортировка), `saveEntity()`, `deleteEntity()`, `distinctColumnValues()`/`columnBounds()` для фильтров (см. [AbstractRepository](../reference/back-end/classes/AbstractRepository.md)).

## 3. List Page + `filter.schema.php`

Схема фильтра — `MyModule/Filter/filter.schema.php` (актуальное размещение фильтров — см. `{Plugin}/Filter/...`):

```php
declare(strict_types=1);

return [
    'sort'     => [
        'default' => 'created_at',
        'columns' => [
            'id'         => '#',
            'title'      => __('Заголовок'),
            'created_at' => __('Дата создания'),
        ],
    ],
    'sections' => [
        [
            'title'  => __('Фильтр'),
            'fields' => [
                [
                    'id'    => 'title',
                    'type'  => 'text',
                    'label' => __('Заголовок'),
                    'metro' => ['db_column' => 'title'],
                ],
            ],
        ],
    ],
];
```

Страница списка:

```php
<?php

declare(strict_types=1);

namespace DevCraft\Modules\MyModule\Pages;

use DLEPlugins;
use DevCraft\Core\Application;
use DevCraft\Types\FilterSchema;
use DevCraft\Core\Abstracts\AbstractPage;
use DevCraft\Core\Admin\FilterFormService;
use DevCraft\Modules\MyModule\Models\Note;
use DevCraft\Modules\MyModule\Repositories\NoteRepository;

final class NotesPage extends AbstractPage {

    public function handle(): array {
        $mode = trim((string) ($_GET['mode'] ?? ''));

        if($mode === 'create' || $mode === 'edit') {
            return $this->formPage($mode);
        }

        return $this->listPage();
    }

    private function listPage(): array {
        $this->addBreadcrumb(__('Заметки'));

        $filterService = new FilterFormService();
        $query         = $filterService->parseRequestQuery();
        $raw           = require DLEPlugins::Check(DEVCRAFT_MODULES . '/MyModule/Filter/filter.schema.php');
        $schema        = FilterSchema::fromArray($raw);
        $order         = FilterFormService::normalizeOrder((string) ($query['order'] ?? $schema->defaultOrder), $schema);
        $sort          = strtoupper((string) ($query['sort'] ?? 'DESC'));
        $criteria      = [];

        if(($query['title'] ?? '') !== '') {
            $criteria[] = ['column' => 'title', 'op' => 'like', 'value' => (string) $query['title']];
        }

        /** @var NoteRepository $repository */
        $repository = Application::instance()->database()->repository(Note::class);
        $result     = $repository->findFiltered(
            $criteria,
            max(1, (int) ($query['page'] ?? 1)),
            50,
            $order,
            $sort,
            $schema->sortColumnKeys(),
            $schema->defaultOrder,
        );

        return [
            'view' => '@MyModule/notes_list.twig',
            'data' => [
                'page_title' => __('Заметки'),
                'notes'      => $result['items'],
                'total'      => $result['total'],
                'query'      => $query,
            ],
        ];
    }

    private function formPage(string $mode): array {
        $this->addBreadcrumb(__('Заметки'), '?mod=my_module&action=notes');

        $id   = (int) ($_GET['id'] ?? 0);
        $note = NULL;

        if($mode === 'edit' && $id > 0) {
            /** @var NoteRepository $repository */
            $repository = Application::instance()->database()->repository(Note::class);
            $note       = $repository->findOneById($id);
        }

        $title = $mode === 'edit' ? __('Редактирование заметки') : __('Создание заметки');
        $this->addBreadcrumb($title);

        return [
            'view' => 'MyModule/notes_form.twig',
            'data' => [
                'page_title' => $title,
                'note'       => $note,
            ],
        ];
    }

}
```

## 4. Ajax: сохранение и удаление

```php
<?php

declare(strict_types=1);

namespace DevCraft\Modules\MyModule\Ajax;

use DevCraft\Core\Application;
use DevCraft\Core\Http\AjaxRequest;
use DevCraft\Core\Http\JsonResponse;
use DevCraft\Core\Interfaces\AjaxHandlerInterface;
use DevCraft\Core\Interfaces\ResponseInterface;
use DevCraft\Modules\MyModule\Models\Note;
use DevCraft\Modules\MyModule\Repositories\NoteRepository;

final class SaveNoteHandler implements AjaxHandlerInterface {

    public function handle(AjaxRequest $request): ResponseInterface {
        $data = $request->data;

        if(trim((string) ($data['title'] ?? '')) === '') {
            return JsonResponse::fail(__('Ошибка'), __('Заголовок не может быть пустым'), 'validation', 422, [
                'fields' => ['title' => __('Поле обязательно')],
            ]);
        }

        $database = Application::instance()->database();
        $id       = (int) ($data['id'] ?? 0);

        /** @var NoteRepository $repository */
        $repository = $database->repository(Note::class);
        $note       = $id > 0 ? $repository->findOneById($id) : NULL;
        $note     ??= new Note();

        $note->title = trim((string) $data['title']);
        $note->body  = (string) ($data['body'] ?? '');

        $id > 0 ? $database->update($note) : $database->create($note);

        return JsonResponse::toast(__('Заметка сохранена'), [
            'saved'    => true,
            'id'       => $note->id(),
            'redirect' => '?mod=my_module&action=notes',
        ]);
    }

}
```

```php
<?php

declare(strict_types=1);

namespace DevCraft\Modules\MyModule\Ajax;

use DevCraft\Core\Application;
use DevCraft\Core\Http\AjaxRequest;
use DevCraft\Core\Http\JsonResponse;
use DevCraft\Core\Interfaces\AjaxHandlerInterface;
use DevCraft\Core\Interfaces\ResponseInterface;
use DevCraft\Modules\MyModule\Models\Note;

final class DeleteNoteHandler implements AjaxHandlerInterface {

    public function handle(AjaxRequest $request): ResponseInterface {
        $id = (int) ($request->data['id'] ?? 0);

        if($id <= 0) {
            return JsonResponse::fail(__('Ошибка'), __('Некорректный идентификатор заметки'), 'validation', 422);
        }

        Application::instance()->database()->delete(Note::class, $id);

        return JsonResponse::toast(__('Заметка удалена'), ['deleted' => true]);
    }

}
```

## 5. Пункт в manifest: `pages`/`menu`/`ajax`

```php
'menu' => [
    // ...
    AdminLink::page(__('Заметки'), 'notes', NotesPage::class, 'mif-note', 'my_module'),
],
'ajax' => [
    'controller' => 'admin',
    'methods'    => [
        'save_note'   => SaveNoteHandler::class,
        'delete_note' => DeleteNoteHandler::class,
    ],
],
```

`AdminLink::page()` регистрирует и пункт меню, и маршрут `action=notes` → `NotesPage`; `ajax.methods` — карту `method => Handler` для `devcraft/ajax.php` (единая точка входа AJAX, см. [манифест модуля](../reference/back-end/manifest.md)).

## 6. Twig-шаблоны списка и формы

```twig
{# templates/notes_list.twig #}
{% extends 'core/layout.twig' %}

{% block content %}
    <table class="table striped">
        {% for note in notes %}
            <tr>
                <td>{{ note.title }}</td>
                <td>
                    <a href="?mod=my_module&action=notes&mode=edit&id={{ note.id }}">{{ __('Редактировать') }}</a>
                </td>
            </tr>
        {% endfor %}
    </table>
{% endblock %}
```

```twig
{# templates/notes_form.twig #}
{% extends 'core/layout.twig' %}

{% block content %}
    <form data-role="form" data-ajax-method="save_note">
        <input type="hidden" name="id" value="{{ note ? note.id : 0 }}">
        <input type="text" name="title" value="{{ note ? note.title : '' }}">
        <textarea name="body">{{ note ? note.body : '' }}</textarea>
        <button type="submit">{{ __('Сохранить') }}</button>
    </form>
{% endblock %}
```

Отправка формы — через `DevCraft.Ajax.post('save_note', data)` (см. [frontend/templates.md](../reference/front-end/templates.md)), обработчик ответа читает `JsonResponse` (`toast`/`fail`) и делает `redirect`, если он присутствует в `data`.

## См. также

- [Начало работы с модулями](getting_started.md)
- [Примеры Form](form_examples.md)
- [AbstractEntity](../reference/back-end/classes/AbstractEntity.md), [AbstractRepository](../reference/back-end/classes/AbstractRepository.md)
- [FilterSchema](../reference/back-end/classes/FilterSchema.md), [FilterFormService](../reference/back-end/classes/FilterFormService.md)
- [AjaxHandlerInterface](../reference/back-end/classes/AjaxHandlerInterface.md), [JsonResponse](../reference/back-end/classes/JsonResponse.md)
- [Манифест модуля](../reference/back-end/manifest.md)
