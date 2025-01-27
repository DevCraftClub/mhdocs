# Класс: [\Default](../../packages/Default.md)\DataLoader

## Краткое содержание:

Трейт для загрузки данных с использованием кеша или базы данных.

## Описание:

Обеспечивает базовые операции с данными, такие как загрузка, сохранение или обновление
с интеграцией в систему кеширования и базу данных.
Использование:
Подключите этот трейт к классу для получения базовой функциональности
работы с данными.


---

### Свойства
* private $[cache_folder](#property_cache_folder)
* private $[prefix](#property_prefix)

---

### Методы

* public [clear_cache()](#method_clear_cache)
* public [get_cache()](#method_get_cache)
* public [getCacheFolder()](#method_getCacheFolder)
* public [getPrefix()](#method_getPrefix)
* public [load_data()](#method_load_data)
* public [setCacheFolder()](#method_setCacheFolder)
* public [setPrefix()](#method_setPrefix)
* private [set_cache()](#method_set_cache)

---

### Подробности

* File: [engine/inc/maharder/_includes/traits/DataLoader.php](../../engine/inc/maharder/_includes/traits/DataLoader.php)

---

## Свойства
<a id="property_cache_folder"></a>
#### private $cache_folder : string
---
**Краткое содержание**

Папка кеша

**Тип:** <a href="../string"><abbr title="string">string</abbr></a>

**Подробности:**


<a id="property_prefix"></a>
#### private $prefix : ?string
---
**Тип:** <a href="../?string"><abbr title="?string">?string</abbr></a>

**Подробности:**



---

## Методы

<a id="method_clear_cache"></a>
### clear_cache

```
public clear_cache(string  type = &#039;all&#039;) : void
```

##### Краткое содержание

Очищает кеш указанного типа.

##### Описание

Метод позволяет очистить кеш для переданного типа или полностью, если тип &quot;all&quot;.
Использует внутренний метод CacheControl::clearCache для выполнения операции очистки.

##### Смотри так-же:

 * [\CacheControl::clearCache()](../../classes/CacheControl.md#method_clearCache)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string | &#039;all&#039; |

##### Возвращает:

```
void
```

---

<a id="method_get_cache"></a>
### get_cache

```
public get_cache(string  type, string  name) : array|false
```

##### Краткое содержание

Получает кешированные данные для заданного типа и имени.

##### Описание

Метод использует статический метод `CacheControl::getCache()`, чтобы получить данные из файловой системы.

##### Смотри так-же:

 * [\DataManager::toTranslit()](../../classes/DataManager.md#method_toTranslit)
 * [\DataManager::normalizePath()](../../classes/DataManager.md#method_normalizePath)
 * [\CacheControl::getCache()](../../classes/CacheControl.md#method_getCache)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

##### Возвращает:

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

##### Возвращает:

```
string
```

---

<a id="method_getPrefix"></a>
### getPrefix

```
public getPrefix() : string
```

##### Краткое содержание

Возвращает префикс для использования в SQL-запросах.

##### Описание

Метод проверяет, установлен ли префикс. Если префикс не задан, он вызывает метод `setPrefix()`,
чтобы установить его значение. Затем возвращает установившийся префикс.

##### Смотри так-же:

 * [\DataLoader::$prefix](../../classes/DataLoader.md#property_prefix)
 * [\DataLoader::setPrefix()](../../classes/DataLoader.md#method_setPrefix)

##### Возвращает:

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

##### Краткое содержание

Метод загружает данные из базы данных с использованием механизма кеширования.

##### Описание

Если данные уже закешированы, то они возвращаются из кеша, иначе выполняется запрос
к базе данных, формируется кеш и результат сохраняется на диск.

##### Смотри так-же:

 * [\DataManager::getDb()](../../classes/DataManager.md#method_getDb)
 * [\DataManager::nameArgs()](../../classes/DataManager.md#method_nameArgs)
 * [\DataManager::getComparer()](../../classes/DataManager.md#method_getComparer)
 * [\DataManager::getConfig()](../../classes/DataManager.md#method_getConfig)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string |  |
| **$_vars** | mixed |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException | В случае JSON-ошибок при работе с кешем. |

##### Возвращает:

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

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$cache_folder** | string |  |

##### Возвращает:

```
void
```

---

<a id="method_setPrefix"></a>
### setPrefix

```
public setPrefix(string|null  name = null) : void
```

##### Краткое содержание

Устанавливает префикс для использования в загрузке данных.

##### Описание

Если переданное имя соответствует значениям &quot;users&quot; или &quot;usergroup&quot;,
то префикс устанавливается в значение константы `USERPREFIX`.
В противном случае используется значение по умолчанию из константы `PREFIX`.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$name** | string|null | null |

##### Возвращает:

```
void
```

---

<a id="method_set_cache"></a>
### set_cache

```
private set_cache(string  type, string  name, mixed  data) : void
```

##### Краткое содержание

Сохраняет данные в кеш.

##### Описание

Метод записывает данные в кеш, используя указанный тип и имя.
Для сохранения данных вызывается метод `CacheControl::setCache`, который
обрабатывает директорию и имя файла, записывает данные в формате JSON
и устанавливает необходимые права доступа к файлу.

##### Смотри так-же:

 * [\CacheControl::setCache()](../../classes/CacheControl.md#method_setCache)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$type** | string |  |
| **$name** | string |  |
| **$data** | mixed |  |

##### Ошибки:

| Тип | Описание |
|-----|----------|
| \JsonException |  |

##### Возвращает:

```
void
```
