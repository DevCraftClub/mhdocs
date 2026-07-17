---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Шаблоны - DevCraft Admin"
description: "Структура Twig-шаблонов DevCraft Admin."
keywords: "PHP, DLE, Плагин, Админка, шаблоны, Twig, DevCraft, документация"
author: "Maxim Harder"
og:title: "Шаблоны"
og:description: "Структура Twig-шаблонов DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---
# Шаблоны

HTML админки рендерится через [Twig](https://twig.symfony.com/) с автоэкранированием. Фабрика окружения — [EnvironmentFactory](../backend/classes/EnvironmentFactory.md).

## Расположение


| Каталог                         | Назначение                                                  |
| -------------------------------------- | --------------------------------------------------------------------- |
| `devcraft/src/templates/core/`         | Общий каркас: layout, меню, формы, макросы |
| `devcraft/src/modules/{mod}/templates` | Шаблоны конкретного модуля                    |

Отдельная `.md`-страница для каждого `.twig`-файла **не создаётся** — описывается только структура каталогов.

## Структура `core/`

```
devcraft/src/templates/core/
├── layout.twig           # Базовый макет Metro UI
├── partials/
│   ├── header.twig
│   ├── sidebar.twig
│   ├── breadcrumb.twig
│   └── footer.twig
├── forms/
│   ├── field.twig
│   ├── section.twig
│   └── tabs.twig
└── macros/
    └── ui.twig
```

Точный список файлов см. в репозитории плагина; имена могут дополняться при обновлениях.

## Переменные шаблона

Страницы (`PageInterface`) передают в Twig контекст через `PageOrchestrator`:

- `module` — метаданные из manifest;
- `breadcrumbs` — цепочка `BreadCrumb`;
- `settings` — значения из конфигурации;
- `menu` — пункты навигации модуля.

## Модульные шаблоны

Генератор модулей создаёт стартовый шаблон в `templates/modules/{slug}/`. Наследуйте `core/layout.twig`:

```twig
{% extends 'core/layout.twig' %}
{% block content %}
  {# содержимое страницы модуля #}
{% endblock %}
```

## AJAX (`DevCraft.Ajax.post`)

Layout задаёт `body[data-mod="{{ mod }}"]` и `data-ajax-base`.  
`DevCraft.Ajax.post(method, data)` вызывает:

`{ajaxBase}?controller=admin&method={method}&mod={data-mod}`

Без `mod` сателлитные методы (`save_suggestion` и т.п.) не находятся в реестре.

## Multipart-загрузка файлов

Общий транспорт панели (не отдельная страница модуля Admin):

| Слой | Артефакт |
|------|----------|
| JS | `DevCraft.Ajax.postMultipart(url, formData, onProgress?)` в `devcraft.js` |
| Twig | `core/includes/upload/drop_form.twig` |
| PHP | [`UploadedFile`](../backend/classes/UploadedFile.md) |

### Контракт FormData

1. Поле файла — обычно `file` (как в `UploadedFile::fromFilesKey('file')`).
2. JSON-метаданные модуля — поле `data` (строка JSON), либо отдельные ключи.
3. `user_hash` добавляется автоматически, если его ещё нет в `FormData`.
4. `onProgress(loaded, total)` — опциональный колбэк прогресса XHR.

```javascript
const fd = new FormData();
fd.append('data', JSON.stringify({ kind: 'image' }));
fd.append('file', fileInput.files[0]);

DevCraft.Ajax.postMultipart(DevCraft.Ajax.url('upload_static_file'), fd, function (loaded, total) {
  // прогресс-бар
}).then(function (response) {
  DevCraft.Ajax.handleNotice(response);
});
```

```php
$uploaded = \DevCraft\Core\Http\UploadedFile::fromFilesKey('file');
$uploaded->assertExtension(['jpg', 'png', 'webp']);
$uploaded->moveTo($targetPath);
```

Скачивание файла клиенту — [`FileResponse`](../backend/classes/FileResponse.md), не multipart.

## См. также

- [Генератор модулей](../new_module.md)
- [EnvironmentFactory](../backend/classes/EnvironmentFactory.md)
