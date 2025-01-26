# Class: [\Default](../../packages/Default.md)\TwigFilter


---

### Properties
* private $[repository](#property_repository)

---

### Methods

* public [__construct()](#method___construct)
* public [createFilter()](#method_createFilter)
* public [createFilterChoices()](#method_createFilterChoices)
* public [getDefaultFilters()](#method_getDefaultFilters)
* public [getRepository()](#method_getRepository)
* public [getSort()](#method_getSort)
* public [setRepository()](#method_setRepository)

---

### Details

* File: [engine/inc/maharder/_includes/classes/TwigFilter.php](../../engine/inc/maharder/_includes/classes/TwigFilter.php)

---

## Properties
<a id="property_repository"></a>
#### private $repository : \Cycle\ORM\RepositoryInterface
---
**Type:** \Cycle\ORM\RepositoryInterface

**Details:**



---

## Methods

<a id="method___construct"></a>
### __construct

```
public __construct(\RepositoryInterface  repository) : mixed
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$repository** | \RepositoryInterface |  |

##### Returns:

```
mixed
```

---

<a id="method_createFilter"></a>
### createFilter

```
public createFilter(string  column_name, string  type, string  label, string|null  select_value = null, array|null  choices = null) : array
```

##### Summary

Создает фильтр для указанного столбца с заданным типом и ярлыком.

##### See Also:

 * [\createFilterChoices()](../\createFilterChoices())
 * [\getRepository()](../\getRepository())
 * [\__()](../../namespaces/default.md#function___)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$column_name** | string |  |
| **$type** | string |  |
| **$label** | string |  |
| **$select_value** | string|null | null |
| **$choices** | array|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \InvalidArgumentException | Если значение `$type` не соответствует ожидаемым. |

##### Returns:

```
array
```
Возвращает массив конфигурации фильтра.

---

<a id="method_createFilterChoices"></a>
### createFilterChoices

```
public createFilterChoices(string  name, string  select) : array
```

##### Summary

Создает массив вариантов для фильтра на основе переданных данных.

##### See Also:

 * [\__](../\__)
 * [\translate](../\translate)
 * [\getRepository](../\getRepository)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$select** | string |  |

##### Returns:

```
array
```
Ассоциативный массив, где ключи — значения фильтров, а значения — отображаемые имена фильтров.

---

<a id="method_getDefaultFilters"></a>
### getDefaultFilters

```
static public getDefaultFilters(array  additionalFilters = []) : array
```

##### Summary

Создает и возвращает массив стандартных фильтров для входящих данных.

##### Description

Стандартные фильтры включают:
- &#039;page&#039; — валидация целого числа.
- &#039;mod&#039;, &#039;action&#039;, &#039;sites&#039;, &#039;order&#039; — очистка данных с помощью `FILTER_SANITIZE_FULL_SPECIAL_CHARS`
  и возврат `null`, если фильтрация не удалась.
- &#039;sort&#039; — очистка данных аналогично предыдущим, но с приведением к верхнему регистру.

Метод предоставляет возможность добавлять пользовательские фильтры с помощью аргумента `$additionalFilters`.
Если значение пользовательского фильтра равно `null`, используется стандартный фильтр `FILTER_SANITIZE_FULL_SPECIAL_CHARS`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$additionalFilters** | array | [] |

##### Returns:

```
array
```
Ассоциативный массив, содержащий объединенные стандартные и дополнительные фильтры.

---

<a id="method_getRepository"></a>
### getRepository

```
public getRepository() : \RepositoryInterface
```

##### Summary

Возвращает используемый репозиторий.

##### See Also:

 * [\TwigFilter::$repository](../../classes/TwigFilter.md#property_repository)
 * [\TwigFilter::setRepository()](../../classes/TwigFilter.md#method_setRepository)

##### Returns:

```
\RepositoryInterface
```
Текущий экземпляр репозитория, связанный с данным объектом.

---

<a id="method_getSort"></a>
### getSort

```
static public getSort(string  sort) : string
```

##### Summary

Определяет направление сортировки на основе переданной строки.

##### Description

Возвращает значение константы, соответствующее направлению сортировки:
- Если передана строка &#039;asc&#039; или &#039;ASC&#039;, возвращается SelectQuery::SORT_ASC.
- В остальных случаях возвращается SelectQuery::SORT_DESC.

##### See Also:

 * [\SelectQuery](../\SelectQuery)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$sort** | string |  |

##### Returns:

```
string
```
Возвращаемое значение сортировки: SelectQuery::SORT_ASC или SelectQuery::SORT_DESC.

---

<a id="method_setRepository"></a>
### setRepository

```
public setRepository(\RepositoryInterface  repository) : void
```

##### Summary

Устанавливает репозиторий для использования в текущем экземпляре класса.

##### See Also:

 * [\TwigFilter::$repository](../../classes/TwigFilter.md#property_repository)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$repository** | \RepositoryInterface |  |

##### Returns:

```
void
```
