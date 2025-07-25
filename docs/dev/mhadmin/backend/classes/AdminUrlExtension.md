---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AdminUrlExtension - MH Admin"
description: "Документация по плагину класс: adminurlextension для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: adminurlextension, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AdminUrlExtension"
og:description: "Документация по плагину класс: adminurlextension для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AdminUrlExtension"
twitter:description: "Документация по плагину класс: adminurlextension для DLE."
---

# Класс: AdminUrlExtension

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

* Путь: engine/inc/maharder/_includes/twigExtensions/AdminUrlExtension.php

---

## Методы

[](){#method_getFunctions}
### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```

---

[](){#method_getGlobals}
### getGlobals

```
public getGlobals() : array
```

##### Возвращает:

```
array
```

---

[](){#method_parseUrl}
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

[](){#method_getAssetsUrl}
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

 * [\AdminUrlExtension::getServerData()](#method_getServerData)
 * [\AdminUrlExtension::getThisHost()](#method_getThisHost)

##### Возвращает:

```
string
```
URL для статических ресурсов.

---

[](){#method_getDleConfig}
### getDleConfig

```
static protected getDleConfig() : array
```

##### Возвращает:

```
array
```

---

[](){#method_getGetParams}
### getGetParams

```
static protected getGetParams() : ?array
```

##### Возвращает:

```
?array
```

---

[](){#method_getModulesUrl}
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

 * [\AdminUrlExtension::getServerData()](#method_getServerData)
 * [\AdminUrlExtension::getThisSelf()](#method_getThisSelf)

##### Возвращает:

```
string
```
URL модуля.

---

[](){#method_getPostParams}
### getPostParams

```
static protected getPostParams() : ?array
```

##### Возвращает:

```
?array
```

---

[](){#method_getServerData}
### getServerData

```
static protected getServerData() : array
```

##### Возвращает:

```
array
```

---

[](){#method_getThisHost}
### getThisHost

```
static protected getThisHost() : mixed
```

##### Возвращает:

```
mixed
```

---

[](){#method_getThisRoot}
### getThisRoot

```
static protected getThisRoot() : mixed
```

##### Возвращает:

```
mixed
```

---

[](){#method_getThisSelf}
### getThisSelf

```
static protected getThisSelf() : mixed
```

##### Возвращает:

```
mixed
```

---

[](){#method_getUserHash}
### getUserHash

```
static protected getUserHash() : string
```

##### Возвращает:

```
string
```
