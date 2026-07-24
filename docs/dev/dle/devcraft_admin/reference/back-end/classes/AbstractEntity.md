---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AbstractEntity - DevCraft Admin"
description: "Документация по плагину класс: abstractentity для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: abstractentity, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AbstractEntity"
og:description: "Документация по плагину класс: abstractentity для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AbstractEntity"
twitter:description: "Документация по плагину класс: abstractentity для DLE."
---

# Класс: AbstractEntity

## Краткое содержание:

Базовая ORM-сущность с аудитом создания и изменения записи.

---

### Свойства
*Нет публичных свойств.*

---

### Методы
* public [beforeSave()](#method_beforeSave)
* public [createdAt()](#method_createdAt)
* public [creator()](#method_creator)
* public [id()](#method_id)
* public [lastEditor()](#method_lastEditor)
* public [setCreator()](#method_setCreator)
* public [setLastEditor()](#method_setLastEditor)
* public [touchUpdatedAt()](#method_touchUpdatedAt)
* public [updatedAt()](#method_updatedAt)

---

### Подробности

* Путь: `devcraft/src/classes/Abstracts/AbstractEntity.php`

---

## Детали

### Методы

[](){#method_beforeSave}
### beforeSave()

Заполняет поля аудита перед сохранением сущности в базу данных.

**С версии:** 200.4.0

[](){#method_createdAt}
### createdAt()

Возвращает дату и время создания записи.

**С версии:** 200.4.0

**Возвращает:** `DateTimeImmutable` — Момент создания.

[](){#method_creator}
### creator()

Возвращает идентификатор создателя записи.

**С версии:** 200.4.0

**Возвращает:** `int|null` — ID пользователя DLE или `null`.

[](){#method_id}
### id()

Возвращает первичный ключ записи.

**С версии:** 200.4.0

**Возвращает:** `int` — Числовой идентификатор.

[](){#method_lastEditor}
### lastEditor()

Возвращает идентификатор последнего редактора записи.

**С версии:** 200.4.0

**Возвращает:** `int|null` — ID пользователя DLE или `null`.

[](){#method_setCreator}
### setCreator()

Устанавливает идентификатор создателя записи.

**С версии:** 200.4.0

**Параметры:**
- `$user_id` — ID пользователя DLE или `null`.

[](){#method_setLastEditor}
### setLastEditor()

Устанавливает идентификатор последнего редактора записи.

**С версии:** 200.4.0

**Параметры:**
- `$user_id` — ID пользователя DLE или `null`.

[](){#method_touchUpdatedAt}
### touchUpdatedAt()

Обновляет метку времени последнего изменения записи.

**С версии:** 200.4.0

[](){#method_updatedAt}
### updatedAt()

Возвращает дату и время последнего обновления записи.

**С версии:** 200.4.0

**Возвращает:** `DateTimeImmutable|null` — Момент обновления или `null`.
