---
title: "Класс: LogMessagePresenter"
description: "Представление сообщения журнала для readonly-страницы."
---

# Класс: LogMessagePresenter

**Namespace:** `DevCraft\Modules\Admin\Services`  
**Путь:** `devcraft/src/modules/Admin/Services/LogMessagePresenter.php`

## Методы

- `present(string $rawMessage): array` — `{ display_html, copy_text, is_structured }`

- `display_html` — HTML из БД (без `unserialize()`)
- `copy_text` — plain text (`strip_tags` + `html_entity_decode`); JSON pretty-print при распознавании
- `is_structured` — флаг JSON-структуры

## См. также

- [LogsPage](LogsPage.md)
