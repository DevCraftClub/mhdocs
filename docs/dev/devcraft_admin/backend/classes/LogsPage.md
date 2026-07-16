---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: LogsPage - DevCraft Admin"
description: "Страница журнала событий и readonly-деталь записи."
author: "Maxim Harder"
---

# Класс: LogsPage

## Краткое содержание

Страница просмотра и фильтрации журнала событий DevCraft; детальный просмотр записи по query-параметру `uuid`.

**Путь:** `devcraft/src/modules/Admin/Pages/LogsPage.php`

## Маршрутизация

| URL | Поведение |
|-----|-----------|
| `?mod=devcraft&action=logs` | Список с фильтрами (`listPage`) |
| `?mod=devcraft&action=logs&uuid={uuid}` | Readonly-деталь (`viewPage`) |

`handle()` dispatch по наличию непустого `uuid` в GET.

## viewPage

- **Шаблон:** `admin/logs_view.twig`
- **Данные:** `record`, `presentation` (из [LogMessagePresenter](LogMessagePresenter.md)), `back_url`, `page_title`
- **Ошибки:** неверный/отсутствующий UUID — сообщение и ссылка «Назад» на список с сохранёнными filter/order/sort/page

## listPage

Список с `FilterFormService`, AJAX-таблица через [LogsTableHandler](LogsTableHandler.md). Кнопка «Просмотр» ведёт на `viewPage`.

## Методы

- `handle(): array` — dispatch list/view
- `listPage(): array` — таблица журнала
- `viewPage(string $uuid): array` — деталь readonly
- `buildBackUrl(): string` — список с текущими query-параметрами (без `uuid`)

## См. также

- [LogMessagePresenter](LogMessagePresenter.md)
- [LogRecordRepository](LogRecordRepository.md)
