# Класс: [\Default](../../packages/Default.md)\DateTimeFormatter

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

* File: [engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php](../../engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php)

---

## Методы

<a id="method_dateTimeImmutable"></a>
### dateTimeImmutable

```
public dateTimeImmutable(\DateTimeImmutable|string|null  dateString, string  format = &#039;Y-m-d H:i:s&#039;, string  sourceFormat = &#039;Y-m-d H:i:s&#039;) : string
```

##### Краткое содержание

Преобразует объект DateTimeImmutable или строку в строку формата даты и времени.

##### Смотри так-же:

 * [\DateTimeImmutable::createFromFormat()](../\DateTimeImmutable::createFromFormat())
 * [\DateTimeImmutable::format()](../\DateTimeImmutable::format())

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$dateString** | \DateTimeImmutable|string|null |  |
| **$format** | string | &#039;Y-m-d H:i:s&#039; |
| **$sourceFormat** | string | &#039;Y-m-d H:i:s&#039; |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \ValueError | Выбрасывается, если невозможно создать объект DateTimeImmutable из строки
с помощью указанного формата. |

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
