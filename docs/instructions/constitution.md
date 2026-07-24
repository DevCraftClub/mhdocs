---
tags:
  - Инструкция
  - PHP
  - DLE
  - DevCraft
title: "Конституция PHP"
description: "Публичный дайджест правил PHP-разработки модулей DevCraft для DLE 20."
keywords: "PHP, DLE, DevCraft, конституция, Roistat, Cycle ORM, Twig"
author: "Maxim Harder"
og:title: "Конституция PHP DevCraft"
og:description: "Семантика Roistat, стиль проекта, слои, DLE/DevCraft интеграция."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Конституция PHP-разработки

Публичный дайджест правил PHP-разработки модулей DevCraft (и совместимого legacy MH Admin).

**Иерархия при конфликте:** Конституция > [Roistat PHP Code Conventions](https://github.com/roistat/php-code-conventions) > legacy `mhadmin`.

## Scope

| Входит | Не входит (явно исключено) |
|--------|----------------------------|
| Семантика PHP (Roistat Code Conv) | Правила PR-workflow |
| Стиль форматирования (Principle VIII) | Обязательные тесты / test env |
| Стек, слои, DLE/DevCraft интеграция | Standalone CLI (`bin/`) |
| | Документация без явного запроса |

## Стек

| Слой | Технология |
|------|------------|
| Runtime | PHP **≥ 8.3** |
| Шаблоны | Twig |
| Persistence | Cycle ORM |
| Admin UI | Metro UI |
| Хост | DLE **20.0** |
| Workspace | репозиторий/проект модуля на DevCraft |
| Legacy-референс | проект `mhadmin` и его `graphify-out/` (если есть) |

## Принципы (MUST)

| # | Принцип | Кратко |
|---|---------|--------|
| I | Roistat semantics | Читаемость, без мёртвого кода, typed/IDE-refactorable; narrative comments не раздувать (`// hack:`, `@todo` — ок) |
| II | Слои | Service / Repository / Controller / Entity / DTO — без cross-layer shortcuts |
| III | PHP 8.3 typing | Типы везде; `validate*`/`check*` бросают; getters без префикса `get` |
| IV | Cycle ORM | Нет ad-hoc SQL в контроллерах/сервисах (кроме миграций) |
| V | Twig | HTML только через Twig; данные готовятся в PHP |
| VI | Metro UI | Паттерны из примеров Metro UI, без параллельных CSS-фреймворков |
| VII | DRY | Одна точка истины для повторяющейся логики |
| VIII | Code style | Tabs, margin 150, вертикальное выравнивание `=`/`=>`, braces on new line |
| IX | DLE 20 | `DLEPlugins::Check()`, prefix, topics 72–75; **DevCraft:** AJAX только через `devcraft/ajax.php` |
| X | No CLI | Нет `devcraft/bin` и shell entry points |
| XI | No unsolicited docs | README/docs только по явному запросу |

### Оверлей DevCraft

Комментарии, PHPDoc и UI/ошибки в PHP — **на русском**. Это не отменяет запрет на «воду» в комментариях (I).

## Review gates

1. Принципы I–XI
2. Roistat digest для затронутого кода
3. Style profile (VIII)
4. Cycle + Twig + Metro для новых частей
5. Нет нового CLI / unsolicited docs

## Graphify

| Граф | Роль |
|------|------|
| `graphify-out/` у legacy `mhadmin` | PRIMARY для старой раскладки модулей |
| `graphify-out/` у host DLE | Состояние хоста; `graphify update .` после правок `engine/` (не после чистого `devcraft/`) |

## См. также

- [Начало работы](../dev/dle/devcraft_admin/getting_started.md)
- [ИИ-инструменты](../dev/dle/devcraft_admin/guides/ai_tools.md)
- [Точки входа](../dev/dle/devcraft_admin/reference/back-end/entry_points.md)
