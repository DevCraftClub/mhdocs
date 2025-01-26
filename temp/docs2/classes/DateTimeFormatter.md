# Class: [\Default](../../packages/Default.md)\DateTimeFormatter


---

### Methods

* public [dateTimeImmutable()](#method_dateTimeImmutable)
* public [getFilters()](#method_getFilters)
* public [getFunctions()](#method_getFunctions)

---

### Details

* File: [engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php](../../engine/inc/maharder/_includes/twigExtensions/DateTimeFormatter.php)

---

## Methods

<a id="method_dateTimeImmutable"></a>
### dateTimeImmutable

```
public dateTimeImmutable(\DateTimeImmutable|string|null  dateString, string  format = &#039;Y-m-d H:i:s&#039;, string  sourceFormat = &#039;Y-m-d H:i:s&#039;) : string
```

##### Summary

Преобразует объект DateTimeImmutable или строку в строку формата даты и времени.

##### See Also:

 * [\DateTimeImmutable::createFromFormat()](../\DateTimeImmutable::createFromFormat())
 * [\DateTimeImmutable::format()](../\DateTimeImmutable::format())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$dateString** | \DateTimeImmutable|string|null |  |
| **$format** | string | &#039;Y-m-d H:i:s&#039; |
| **$sourceFormat** | string | &#039;Y-m-d H:i:s&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \ValueError | Выбрасывается, если невозможно создать объект DateTimeImmutable из строки
с помощью указанного формата. |

##### Returns:

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

##### Returns:

```
array
```

---

<a id="method_getFunctions"></a>
### getFunctions

```
public getFunctions() : array
```

##### Returns:

```
array
```
