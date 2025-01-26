# Class: [\Default](../../packages/Default.md)\DleData


---

### Properties
* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)

---

### Methods

* public [get_used_xfields()](#method_get_used_xfields)
* public [getCats()](#method_getCats)
* public [getUser()](#method_getUser)
* public [getUserGroups()](#method_getUserGroups)
* public [getUsers()](#method_getUsers)
* public [getXfieldInfo()](#method_getXfieldInfo)
* public [loadXfields()](#method_loadXfields)

---

### Details

* File: [engine/inc/maharder/_includes/traits/DleData.php](../../engine/inc/maharder/_includes/traits/DleData.php)

---

## Properties
<a id="property_postXfieldKeys"></a>
#### protected $postXfieldKeys : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**


<a id="property_userXfieldKeys"></a>
#### protected $userXfieldKeys : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**



---

## Methods

<a id="method_get_used_xfields"></a>
### get_used_xfields

```
public get_used_xfields(int  id, string  type = &#039;post&#039;) : array|bool
```

##### Summary

Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют.

##### Description

Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.

##### See Also:

 * [\load_data()](../\load_data())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$id** | int |  |
| **$type** | string | &#039;post&#039; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Returns:

```
array|bool
```
Возвращает массив дополнительных полей объекта в формате
ключ =&gt; значение, либо `false`, если данные отсутствуют.

---

<a id="method_getCats"></a>
### getCats

```
public getCats() : array
```

##### Summary

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Description

Метод загружает данные из базы данных, используя метод `load_data`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

---

<a id="method_getUser"></a>
### getUser

```
public getUser(int|null  id = null, string|null  uname = null) : array|false
```

##### Summary

Получает данные пользователя по ID или имени пользователя.

##### Description

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.
В противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия.

##### See Also:

 * [\load_data()](../\load_data())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$id** | int|null | null |
| **$uname** | string|null | null |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array|false
```
Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает `false`, если пользователь не найден или если критерии поиска не заданы.

---

<a id="method_getUserGroups"></a>
### getUserGroups

```
public getUserGroups() : array
```

##### Summary

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Description

Метод обращается к функции `load_data` для загрузки данных о группах пользователей
из таблицы &quot;usergroups&quot; с выборкой полей `id` и `group_name`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.

---

<a id="method_getUsers"></a>
### getUsers

```
public getUsers() : array
```

##### Summary

Возвращает список пользователей из базы данных.

##### Description

Метод загружает данные о пользователях, используя метод `load_data`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### See Also:

 * [\load_data()](../\load_data())

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array
```
Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.

---

<a id="method_getXfieldInfo"></a>
### getXfieldInfo

```
public getXfieldInfo(string  name, string  type = &#039;post&#039;) : array|null
```

##### Summary

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### See Also:

 * [\loadXfields()](../\loadXfields())
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$type** | string | &#039;post&#039; |

##### Returns:

```
array|null
```
Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

---

<a id="method_loadXfields"></a>
### loadXfields

```
public loadXfields(string  type = &#039;post&#039;) : array|false
```

##### Summary

Загружает дополнительные поля для новостей или профилей пользователей.

##### Description

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их параметры.
Данные загружаются в зависимости от значения параметра `$type`:
- `&#039;post&#039;`: данные загружаются из файла `xfields.txt`.
- `&#039;user&#039;`: данные загружаются из файла `xprofile.txt`.

Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
в свойствах `userXfieldKeys` или `postXfieldKeys`.

##### See Also:

 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)
 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)
 * [\file()](../\file())
 * [\fclose()](../\fclose())

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string | &#039;post&#039; |

##### Returns:

```
array|false
```
Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его параметры.
Возвращает `false` в случае невозможности прочитать файл.
