---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: UpdatesChecker - MH Admin"
description: "Документация по плагину класс: updateschecker для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: updateschecker, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: UpdatesChecker"
og:description: "Документация по плагину класс: updateschecker для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: UpdatesChecker"
twitter:description: "Документация по плагину класс: updateschecker для DLE."
---

# Класс: UpdatesChecker

## Краткое содержание:

Трейт UpdatesChecker предоставляет функции для работы с информацией об обновлениях ресурсов.

## Описание:

Основной функционал включает методы для установки и получения параметров API, таких как URL для запросов,
ключ API и идентификатор ресурса, а также метод для проверки обновлений ресурса через API.


---

### Свойства

* public $[api_key](#property_api_key)
* public $[recource_id](#property_recource_id)
* public $[update_url](#property_update_url)
* private $[api_key](#property_api_key)
* private $[recource_id](#property_recource_id)
* private $[update_url](#property_update_url)

---

### Методы

* public [checkUpdate()](#method_checkUpdate)
* public [getApiKey()](#method_getApiKey)
* public [getRecourceId()](#method_getRecourceId)
* public [getUpdateUrl()](#method_getUpdateUrl)
* public [setApiKey()](#method_setApiKey)
* public [setRecourceId()](#method_setRecourceId)
* public [setUpdateUrl()](#method_setUpdateUrl)

---

### Подробности

* Путь: engine/inc/maharder/_includes/traits/UpdatesChecker.php

---

## Свойства

[](){#property_api_key}
#### public $api_key : string
---
***Описание***

Гостевой ключ с доступом к информации о ресурсе.

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_recource_id}
#### public $recource_id : int|null
---
***Описание***

Идентификатор ресурса, для которого проверяются обновления.

**Тип:** <abbr title="int|null">Целое число или null</abbr>

[](){#property_update_url}
#### public $update_url : string
---
***Описание***

URL API, используемый для проверки обновлений.

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_api_key}
#### private $api_key : string
---
**Краткое содержание**

Гостевой ключ с доступом на просмотр информации ресурса на сайте

**Тип:** <abbr title="string">Текст</abbr>

[](){#property_recource_id}
#### private $recource_id : ?int
---
**Тип:** <abbr title="?int">Целое число или null</abbr>

[](){#property_update_url}
#### private $update_url : string
---
**Тип:** <abbr title="string">Текст</abbr>

**Подробности:**



---

## Методы

[](){#method_checkUpdate}

### checkUpdate

```
public checkUpdate(int|null  res = null) : array
```

##### Краткое содержание

Проверяет наличие и обновления ресурса, используя указанный или текущий идентификатор ресурса.

##### Смотри так-же:

* [\LogGenerator::generateLog()](./LogGenerator.md#method_generateLog)

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|--------------|
| **$res** | int | null         | null |

##### Ошибки:

| Тип                        | Описание                                                                                               |
|----------------------------|--------------------------------------------------------------------------------------------------------|
| \JsonException\|\Throwable | Исключение, связанное с ошибками в JSON-конверсии (может быть выброшено при выполнении Telegram-лога). |

##### Возвращает:

```
array
```

Возвращает массив с данными об обновлении ресурса или список ошибок.

---

[](){#method_getApiKey}

### getApiKey

```
public getApiKey() : string
```

##### Возвращает:

```
string
```

---

[](){#method_getRecourceId}

### getRecourceId

```
public getRecourceId() : int|null
```

##### Возвращает:

```
int|null
```

---

[](){#method_getUpdateUrl}

### getUpdateUrl

```
public getUpdateUrl() : string
```

##### Возвращает:

```
string
```

---

[](){#method_setApiKey}

### setApiKey

```
public setApiKey(string  api_key) : void
```

##### Свойства:

| Название     | Тип    | По умолчанию |
|--------------|--------|--------------|
| **$api_key** | string |              |

##### Возвращает:

```
void
```

---

[](){#method_setRecourceId}

### setRecourceId

```
public setRecourceId(int  recource_id) : void
```

##### Свойства:

| Название         | Тип | По умолчанию |
|------------------|-----|--------------|
| **$recource_id** | int |              |

##### Возвращает:

```
void
```

---

[](){#method_setUpdateUrl}

### setUpdateUrl

```
public setUpdateUrl(string  update_url) : void
```

##### Свойства:

| Название        | Тип    | По умолчанию |
|-----------------|--------|--------------|
| **$update_url** | string |              |

##### Возвращает:

```
void
```
