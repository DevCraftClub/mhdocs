---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: DeclineExtension - MH Admin"
description: "Документация по плагину класс: declineextension для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: declineextension, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: DeclineExtension"
og:description: "Документация по плагину класс: declineextension для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: DeclineExtension"
twitter:description: "Документация по плагину класс: declineextension для DLE."
---

# Класс: DeclineExtension

## Краткое содержание:

Склонение слова в зависимости от числа.

## Описание:

Выбирает правильную форму слова (например, яблоко, яблока, яблок)
в зависимости от числового значения.
В основе логики склонения лежат правила русского языка.


---

### Методы

* public [decline()](#method_decline)
* public [getFunctions()](#method_getFunctions)

---

### Подробности

* Путь: engine/inc/maharder/_includes/twigExtensions/DeclineExtension.php

---

## Методы

[](){#method_decline}

### decline

```
public decline(int|float  number, array  titles) : mixed
```

##### Свойства:

| Название    | Тип        | По умолчанию |
|-------------|------------|--------------|
| **$number** | int\|float |              |
| **$titles** | array      |              |

##### Возвращает:

```
mixed
```

---

[](){#method_getFunctions}

### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```
