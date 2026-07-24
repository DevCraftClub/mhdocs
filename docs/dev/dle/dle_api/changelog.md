---
tags:
  - API
  - DLE
title: "Changelog - DLE API"
description: "Журнал изменений DLE API."
author: "Maxim Harder"
---

# Changelog

## Unreleased

### Added

- HTTP `/table/{name}`: интроспекция таблиц вне SchemaRegistry + `TableScopeGuard` (read/write/delete)
- SDK facades: `DcApi::news()` / `user()` / `comment()` / `conversation()` / `plugin()` / `file()` / `staticPage()` / `schema()`
- Fluent CRUD на `AbstractTableSchema` (`with` / `create` / `save` / `delete` / `filter` / `fromArray`)
- GET-кэш `TableQuery` через CacheControl (`dle_api_query`, TTL)

## 200.1.0 — 2026-07-21

### Added

- API v2 (`/api/v2`) на CycleORM из DevCraft Admin
- OAuth2 AS: authorize / token / revoke; доступ к ресурсам только через Bearer
- Fluent: `prepareNewPost` / `prepareNewUser` / `preparePlugin` / `prepareNewUsergroup`
- Каталог Schema таблиц DLE в `api/includes/Schemas/`
- OpenAPI (swagger-php) + OAD в документации
- Загрузка файлов `POST /upload/`
- Фильтр постов по одной категории при нескольких (issue #12)
- Админ-модуль DleApi для DevCraft Admin ≥ 200.4.0 (только конфигурация)

### Changed

- Совместимость с DLE 20.0 (xfields.json, dual category, conversations)

### Removed

- API v1 (Slim + Illuminate Capsule, `X-Api-Key`) полностью удалён
