---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: TwigFilter - MH Admin"
description: "Документация по плагину класс: twigfilter для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: twigfilter, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: TwigFilter"
og:description: "Документация по плагину класс: twigfilter для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: TwigFilter"
twitter:description: "Документация по плагину класс: twigfilter для DLE."
---

# Класс: TwigFilter

## Краткое содержание:

Класс для создания и обработки фильтров данных, а также для работы с сортировкой и стандартными фильтрами для шаблонов.


---

### Свойства

* private $[repository](#property_repository)

---

### Методы

* public [__construct()](#method___construct)
* public [createFilter()](#method_createFilter)
* public [createFilterChoices()](#method_createFilterChoices)
* public [getDefaultFilters()](#method_getDefaultFilters)
* public [getRepository()](#method_getRepository)
* public [getSort()](#method_getSort)
* public [setRepository()](#method_setRepository)

---

### Подробности

* Путь: engine/inc/maharder/_includes/classes/TwigFilter.php

---

## Свойства

[](){#property_repository}
#### private $repository : \Cycle\ORM\RepositoryInterface
---
**Тип:** \Cycle\ORM\RepositoryInterface



---

## Методы

[](){#method___construct}

### __construct

```
public __construct(\RepositoryInterface  repository) : mixed
```

##### Краткое содержание

Конструктор класса.

##### Свойства:

| Название        | Тип                  | По умолчанию |
|-----------------|----------------------|--------------|
| **$repository** | \RepositoryInterface |              |

##### Возвращает:

```
mixed
```

---

[](){#method_createFilter}

### createFilter

```
public createFilter(string  column_name, string  type, string  label, string|null  select_value = null, array|null  choices = null) : array
```

##### Краткое содержание

Создает фильтр для указанного столбца с заданным типом и ярлыком.

##### Смотри так-же:

* [\createFilterChoices()](#method_createFilterChoices)
* [\getRepository()](#method_getRepository)

##### Свойства:

| Название          | Тип          | По умолчанию |
|-------------------|--------------|--------------|
| **$column_name**  | string       |              |
| **$type**         | string       |              |
| **$label**        | string       |              |
| **$select_value** | string\|null | null         |
| **$choices**      | array\|null  | null         |

##### Ошибки:

| Тип                       | Описание                                          |
|---------------------------|---------------------------------------------------|
| \InvalidArgumentException | Если значение `$type` не соответствует ожидаемым. |

##### Возвращает:

```
array
```

Возвращает массив конфигурации фильтра.

---

[](){#method_createFilterChoices}

### createFilterChoices

```
public createFilterChoices(string  name, string  select) : array
```

##### Краткое содержание

Создает массив вариантов для фильтра на основе переданных данных.

##### Смотри так-же:

* [\translate](../index.md#function_translate)
* [\getRepository](#method_getRepository)

##### Свойства:

| Название    | Тип    | По умолчанию |
|-------------|--------|--------------|
| **$name**   | string |              |
| **$select** | string |              |

##### Ошибки:

| Тип        | Описание |
|------------|----------|
| \Throwable |          |

##### Возвращает:

```
array
```

Ассоциативный массив, где ключи — значения фильтров, а значения — отображаемые имена фильтров.

---

[](){#method_getDefaultFilters}

### getDefaultFilters

```
static public getDefaultFilters(array  additionalFilters = []) : array
```

##### Краткое содержание

Создает и возвращает массив стандартных фильтров для входящих данных.

##### Описание

Стандартные фильтры включают:

- &#039;page&#039; — валидация целого числа.
- &#039;mod&#039;, &#039;action&#039;, &#039;sites&#039;, &#039;order&#039; — очистка данных с помощью
  `FILTER_SANITIZE_FULL_SPECIAL_CHARS`
  и возврат `null`, если фильтрация не удалась.
- &#039;sort&#039; — очистка данных аналогично предыдущим, но с приведением к верхнему регистру.

Метод предоставляет возможность добавлять пользовательские фильтры с помощью аргумента `$additionalFilters`.
Если значение пользовательского фильтра равно `null`, используется стандартный фильтр
`FILTER_SANITIZE_FULL_SPECIAL_CHARS`.

##### Свойства:

| Название               | Тип   | По умолчанию |
|------------------------|-------|--------------|
| **$additionalFilters** | array | []           |

##### Возвращает:

```
array
```

Ассоциативный массив, содержащий объединенные стандартные и дополнительные фильтры.

---

[](){#method_getRepository}

### getRepository

```
public getRepository() : \RepositoryInterface
```

##### Краткое содержание

Возвращает используемый репозиторий.

##### Смотри так-же:

* [\TwigFilter::$repository](#property_repository)
* [\TwigFilter::setRepository()](#method_setRepository)

##### Возвращает:

```
\RepositoryInterface
```

Текущий экземпляр репозитория, связанный с данным объектом.

---

[](){#method_getSort}

### getSort

```
static public getSort(string  sort) : string
```

##### Краткое содержание

Определяет направление сортировки на основе переданной строки.

##### Описание

Возвращает значение константы, соответствующее направлению сортировки:

- Если передана строка &#039;asc&#039; или &#039;ASC&#039;, возвращается SelectQuery::SORT_ASC.
- В остальных случаях возвращается SelectQuery::SORT_DESC.

##### Свойства:

| Название  | Тип    | По умолчанию |
|-----------|--------|--------------|
| **$sort** | string |              |

##### Возвращает:

```
string
```

Возвращаемое значение сортировки: SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.

---

[](){#method_setRepository}

### setRepository

```
public setRepository(\RepositoryInterface  repository) : void
```

##### Краткое содержание

Устанавливает репозиторий для использования в текущем экземпляре класса.

##### Смотри так-же:

* [\TwigFilter::$repository](#property_repository)

##### Свойства:

| Название        | Тип                  | По умолчанию |
|-----------------|----------------------|--------------|
| **$repository** | \RepositoryInterface |              |

##### Возвращает:

```
void
```
