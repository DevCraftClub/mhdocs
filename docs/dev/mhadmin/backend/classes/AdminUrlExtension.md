# Класс: [\Default](../../packages/Default.md)\AdminUrlExtension

## Краткое содержание:

Класс предоставляет функции и глобальные переменные для использования в Twig-шаблонах.

## Описание:

Реализует интерфейс `GlobalsInterface` для предоставления глобальных переменных и
наследует `AbstractExtension` для добавления пользовательских функций.

Основная функциональность:
- Генерация URL для статических ресурсов и модулей.
- Работа с параметрами запросов (`GET` и `POST`).
- Обработка и преобразование URL.
- Предоставление глобальных переменных для настройки окружения.


---

### Методы

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

### Подробности

* File: [engine/inc/maharder/_includes/twigExtensions/AdminUrlExtension.php](../../engine/inc/maharder/_includes/twigExtensions/AdminUrlExtension.php)

---

## Методы

<a id="method_getFunctions"></a>
### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```

---

<a id="method_getGlobals"></a>
### getGlobals

```
public getGlobals() : array
```

##### Возвращает:

```
array
```

---

<a id="method_parseUrl"></a>
### parseUrl

```
public parseUrl(string  url) : string
```

##### Краткое содержание

Парсит и преобразует URL в стандартный формат.

##### Описание

Преобразует символы в URL, удаляя лишние пробелы, табуляции и символы перевода строки,
и создаёт корректную строку URL с обновленными параметрами запроса.

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$url** | string |  |

##### Возвращает:

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

##### Краткое содержание

Получает URL для статических ресурсов на основе данных текущего сервера.

##### Описание

Метод формирует URL-адрес, используя протокол (`http` или `https`), исходя из значения
`HTTPS` в массиве данных сервера, а также хост (`HTTP_HOST`). Формируемый URL
ведет к каталогу `/engine/inc` приложения.

##### Смотри так-же:

 * [\AdminUrlExtension::getServerData()](../../classes/AdminUrlExtension.md#method_getServerData)
 * [\AdminUrlExtension::getThisHost()](../../classes/AdminUrlExtension.md#method_getThisHost)

##### Возвращает:

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

##### Возвращает:

```
array
```

---

<a id="method_getGetParams"></a>
### getGetParams

```
static protected getGetParams() : ?array
```

##### Возвращает:

```
?array
```

---

<a id="method_getModulesUrl"></a>
### getModulesUrl

```
static protected getModulesUrl() : string
```

##### Краткое содержание

Получает URL модуля, основываясь на данных сервера.

##### Описание

Возвращает реферальный URL из `HTTP_REFERER`, если он установлен.
Если `HTTP_REFERER` отсутствует, возвращает `REQUEST_URI` или
текущий скрипт вместе с параметрами запроса (`QUERY_STRING`), если другие данные недоступны.

##### Смотри так-же:

 * [\AdminUrlExtension::getServerData()](../../classes/AdminUrlExtension.md#method_getServerData)
 * [\AdminUrlExtension::getThisSelf()](../../classes/AdminUrlExtension.md#method_getThisSelf)

##### Возвращает:

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

##### Возвращает:

```
?array
```

---

<a id="method_getServerData"></a>
### getServerData

```
static protected getServerData() : array
```

##### Возвращает:

```
array
```

---

<a id="method_getThisHost"></a>
### getThisHost

```
static protected getThisHost() : mixed
```

##### Возвращает:

```
mixed
```

---

<a id="method_getThisRoot"></a>
### getThisRoot

```
static protected getThisRoot() : mixed
```

##### Возвращает:

```
mixed
```

---

<a id="method_getThisSelf"></a>
### getThisSelf

```
static protected getThisSelf() : mixed
```

##### Возвращает:

```
mixed
```

---

<a id="method_getUserHash"></a>
### getUserHash

```
static protected getUserHash() : string
```

##### Возвращает:

```
string
```
