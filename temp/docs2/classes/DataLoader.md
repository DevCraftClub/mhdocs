# Class: [\Default](../../packages/Default.md)\DataLoader


---

### Properties
* private $[cache_folder](#property_cache_folder)
* private $[prefix](#property_prefix)

---

### Methods

* public [clear_cache()](#method_clear_cache)
* public [get_cache()](#method_get_cache)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getPrefix()](#method_getPrefix)
* public [load_data()](#method_load_data)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setPrefix()](#method_setPrefix)
* private [set_cache()](#method_set_cache)

---

### Details

* File: [engine/inc/maharder/_includes/traits/DataLoader.php](../../engine/inc/maharder/_includes/traits/DataLoader.php)

---

## Properties
<a id="property_cache_folder"></a>
#### private $cache_folder : string
---
**Summary**

Папка кеша

**Type:** <a href="../string"><abbr title="string">string</abbr></a>

**Details:**


<a id="property_prefix"></a>
#### private $prefix : ?string
---
**Type:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Details:**



---

## Methods

<a id="method_clear_cache"></a>
### clear_cache

```
public clear_cache(string  type = &#039;all&#039;) : void
```

##### Summary

Очищает кеш указанного типа.

##### Description

Метод позволяет очистить кеш для переданного типа или полностью, если тип &quot;all&quot;.
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### See Also:

 * [\CacheControl::clearCache()](../../classes/CacheControl.md#method_clearCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string | &#039;all&#039; |

##### Returns:

```
void
```

---

<a id="method_get_cache"></a>
### get_cache

```
public get_cache(string  type, string  name) : array|false
```

##### Summary

Получает кешированные данные для заданного типа и имени.

##### Description

Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы.

##### See Also:

 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
array|false
```
Возвращает массив декодированных данных, если файл кеша успешно найден и данные корректны,
или `false`, если произошла ошибка (например, файл не найден или данные некорректны).

---

<a id="method_getCacheFolder"></a>
### getCacheFolder

```
public getCacheFolder() : string
```

##### Returns:

```
string
```

---

<a id="method_getPrefix"></a>
### getPrefix

```
public getPrefix() : string
```

##### Summary

Возвращает префикс для использования в SQL-запросах.

##### Description

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### See Also:

 * [\DataLoader::$prefix](../../classes/DataLoader.md#property_prefix)
 * [\DataLoader::setPrefix()](../../classes/DataLoader.md#method_setPrefix)

##### Returns:

```
string
```
Префикс, используемый для построения SQL-запросов.

---

<a id="method_load_data"></a>
### load_data

```
public load_data(string  name, mixed  ..._vars) : array
```

##### Summary

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Description

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### See Also:

 * [\DataManager::getDb()](../../classes/DataManager.md#method_getDb)
 * [\DataManager::nameArgs()](../../classes/DataManager.md#method_nameArgs)
 * [\DataManager::getComparer()](../../classes/DataManager.md#method_getComparer)
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string |  |
| **$_vars** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | В случае JSON-ошибок при работе с кешем. |

##### Returns:

```
array
```
Результат выборки из базы данных, либо из кеша.

---

<a id="method_setCacheFolder"></a>
### setCacheFolder

```
public setCacheFolder(string  cache_folder) : void
```

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$cache_folder** | string |  |

##### Returns:

```
void
```

---

<a id="method_setPrefix"></a>
### setPrefix

```
public setPrefix(string|null  name = null) : void
```

##### Summary

Устанавливает префикс для использования в загрузке данных.

##### Description

Если переданное имя соответствует значениям &quot;users&quot; или &quot;usergroup&quot;,
то префикс устанавливается в значение константы `USERPREFIX`.
В противном случае используется значение по умолчанию из константы `PREFIX`.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null | null |

##### Returns:

```
void
```

---

<a id="method_set_cache"></a>
### set_cache

```
private set_cache(string  type, string  name, mixed  data) : void
```

##### Summary

Сохраняет данные в кеш.

##### Description

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `CacheControl::setCache`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### See Also:

 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
void
```
