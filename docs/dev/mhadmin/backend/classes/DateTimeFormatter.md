# Класс: DateTimeFormatter

## Краткое содержание:

Расширение Twig для работы с форматированием даты и времени.

## Описание:

Основной функционал включает преобразование объекта DateTimeImmutable
или строки в строки заданного формата для использования в фильтрах и функциях Twig.


---

### Методы

* public [dateTimeImmutable()](#method_dateTimeImmutable)
* public [getFilters()](#method_getFilters)
* public [getFunctions()](#method_getFunctions)

---

### Подробности

* Путь: engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php

---

## Методы

<a id="method_dateTimeImmutable"></a>

### dateTimeImmutable

```
public dateTimeImmutable(\DateTimeImmutable|string|null  dateString, string  format = "Y-m-d H:i:s", string  sourceFormat = "Y-m-d H:i:s") : string
```

##### Краткое содержание

Преобразует объект DateTimeImmutable или строку в строку формата даты и времени.

##### Свойства:

| Название          | Тип                              | По умолчанию  |
|-------------------|----------------------------------|---------------|
| **$dateString**   | \DateTimeImmutable\|string\|null |               |
| **$format**       | string                           | "Y-m-d H:i:s" |
| **$sourceFormat** | string                           | "Y-m-d H:i:s" |

##### Ошибки:

| Тип         | Описание                                                                                                |
|-------------|---------------------------------------------------------------------------------------------------------|
| \ValueError | Выбрасывается, если невозможно создать объект DateTimeImmutable из строки с помощью указанного формата. |

##### Возвращает:

```
string
```

Отформатированное значение даты и времени или пустая строка, если $dateString равно null.

---

<a id="method_getFilters"></a>

### getFilters

```
public getFilters() : array
```

##### Возвращает:

```
array
```

---

<a id="method_getFunctions"></a>

### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```
