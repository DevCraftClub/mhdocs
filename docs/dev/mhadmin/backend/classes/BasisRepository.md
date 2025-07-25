---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: BasisRepository - MH Admin"
description: "Документация по плагину класс: basisrepository для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: basisrepository, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: BasisRepository"
og:description: "Документация по плагину класс: basisrepository для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: BasisRepository"
twitter:description: "Документация по плагину класс: basisrepository для DLE."
---

# Класс: BasisRepository

## Краткое содержание:

Базовый репозиторий для работы с сущностями.

## Описание:

Предоставляет методы для получения первой, последней записей, лимитированного списка и общего количества элементов.


---

### Методы

* public [getFirst()](#method_getFirst)
* public [getLast()](#method_getLast)
* public [limit()](#method_limit)
* public [total()](#method_total)

---

### Подробности

* Путь: engine/inc/maharder/_includes/database/BasisRepository.php

---

## Методы

[](){#method_getFirst}
### getFirst

```
public getFirst() : \Entity|null
```

##### Краткое содержание

Получает первую запись из базы данных, отсортированную по колонке `created_at` по возрастанию.

##### Возвращает:

```
\Entity|null
```
Возвращает первую сущность или null, если записи отсутствуют.

---

[](){#method_getLast}
### getLast

```
public getLast() : \Entity|null
```

##### Краткое содержание

Получает последнюю запись из базы данных, отсортированную по колонке `created_at` по убыванию.

##### Возвращает:

```
\Entity|null
```
Возвращает последнюю сущность или null, если записи отсутствуют.

---

[](){#method_limit}
### limit

```
public limit(int  total, int  start) : array
```

##### Краткое содержание

Получает список записей, лимитированный заданным количеством и смещением.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$total** | int |  |
| **$start** | int | 0 |

##### Возвращает:

```
array
```
Массив сущностей, соответствующих указанным критериям.

---

[](){#method_total}
### total

```
public total() : int
```

##### Краткое содержание

Получает общее количество записей в базе данных.

##### Возвращает:

```
int
```
Количество записей.
