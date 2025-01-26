# Class: [\Default](../../packages/Default.md)\AdminUrlExtension


---

### Methods

* public [getFunctions()](#method_getFunctions)
* public [getGlobals()](#method_getGlobals)
* public [parseUrl()](#method_parseUrl)
* protected [getAssetsUrl()](#method_getAssetsUrl)
* protected [getDleConfig()](#method_getDleConfig)
* protected [getGetParams()](#method_getGetParams)
* protected [getModulesUrl()](#method_getModulesUrl)
* protected [getPostParams()](#method_getPostParams)
* protected [getServerData()](#method_getServerData)
* protected [getThisHost()](#method_getThisHost)
* protected [getThisRoot()](#method_getThisRoot)
* protected [getThisSelf()](#method_getThisSelf)
* protected [getUserHash()](#method_getUserHash)

---

### Details

* File: [engine/inc/maharder/_includes/twigExtensions/AdminUrlExtension.php](../../engine/inc/maharder/_includes/twigExtensions/AdminUrlExtension.php)

---

## Methods

<a id="method_getFunctions"></a>
### getFunctions

```
public getFunctions() : array
```

##### Returns:

```
array
```

---

<a id="method_getGlobals"></a>
### getGlobals

```
public getGlobals() : array
```

##### Returns:

```
array
```

---

<a id="method_parseUrl"></a>
### parseUrl

```
public parseUrl(string  url) : string
```

##### Summary

Парсит и преобразует URL в стандартный формат.

##### Description

Преобразует символы в URL, удаляя лишние пробелы, табуляции и символы перевода строки,
и создаёт корректную строку URL с обновленными параметрами запроса.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$url** | string |  |

##### Returns:

```
string
```
Обработанный URL.

---

<a id="method_getAssetsUrl"></a>
### getAssetsUrl

```
static protected getAssetsUrl() : string
```

##### Summary

Получает URL для статических ресурсов на основе данных текущего сервера.

##### Description

Метод формирует URL-адрес, используя протокол (`http` или `https`), исходя из значения
`HTTPS` в массиве данных сервера, а также хост (`HTTP_HOST`). Формируемый URL
ведет к каталогу `/engine/inc` приложения.

##### See Also:

 * [\AdminUrlExtension::getServerData()](../../classes/AdminUrlExtension.md#method_getServerData)
 * [\AdminUrlExtension::getThisHost()](../../classes/AdminUrlExtension.md#method_getThisHost)

##### Returns:

```
string
```
URL для статических ресурсов.

---

<a id="method_getDleConfig"></a>
### getDleConfig

```
static protected getDleConfig() : array
```

##### Returns:

```
array
```

---

<a id="method_getGetParams"></a>
### getGetParams

```
static protected getGetParams() : ?array
```

##### Returns:

```
?array
```

---

<a id="method_getModulesUrl"></a>
### getModulesUrl

```
static protected getModulesUrl() : string
```

##### Summary

Получает URL модуля, основываясь на данных сервера.

##### Description

Возвращает реферальный URL из `HTTP_REFERER`, если он установлен.
Если `HTTP_REFERER` отсутствует, возвращает `REQUEST_URI` или
текущий скрипт вместе с параметрами запроса (`QUERY_STRING`), если другие данные недоступны.

##### See Also:

 * [\AdminUrlExtension::getServerData()](../../classes/AdminUrlExtension.md#method_getServerData)
 * [\AdminUrlExtension::getThisSelf()](../../classes/AdminUrlExtension.md#method_getThisSelf)

##### Returns:

```
string
```
URL модуля.

---

<a id="method_getPostParams"></a>
### getPostParams

```
static protected getPostParams() : ?array
```

##### Returns:

```
?array
```

---

<a id="method_getServerData"></a>
### getServerData

```
static protected getServerData() : array
```

##### Returns:

```
array
```

---

<a id="method_getThisHost"></a>
### getThisHost

```
static protected getThisHost() : mixed
```

##### Returns:

```
mixed
```

---

<a id="method_getThisRoot"></a>
### getThisRoot

```
static protected getThisRoot() : mixed
```

##### Returns:

```
mixed
```

---

<a id="method_getThisSelf"></a>
### getThisSelf

```
static protected getThisSelf() : mixed
```

##### Returns:

```
mixed
```

---

<a id="method_getUserHash"></a>
### getUserHash

```
static protected getUserHash() : string
```

##### Returns:

```
string
```
