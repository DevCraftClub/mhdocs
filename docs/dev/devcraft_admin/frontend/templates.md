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

## См. также

- [Генератор модулей](../new_module.md)
- [EnvironmentFactory](../backend/classes/EnvironmentFactory.md)
