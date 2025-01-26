# Abstract Class: [\Default](../../packages/Default.md)\ComposerAction


---

### Properties
* private $[packages](#property_packages)

---

### Methods

* public [destroy()](#method_destroy)
* public [init()](#method_init)
* public [install()](#method_install)
* public [require()](#method_require)
* public [update()](#method_update)
* private [application()](#method_application)

---

### Details

* File: [engine/inc/maharder/_includes/classes/ComposerAction.php](../../engine/inc/maharder/_includes/classes/ComposerAction.php)
* See Also:
  * [](../)

---

## Properties
<a id="property_packages"></a>
#### private $packages : array
---
**Type:** <a href="../array"><abbr title="array">array</abbr></a>

**Details:**



---

## Methods

<a id="method_destroy"></a>
### destroy

```
static public destroy() : void
```

##### Summary

Удаляет содержащиеся в директории файлы и настройки, связанные с Composer.

##### Description

Метод проверяет, существует ли файл автозагрузчика Composer по заданному пути.
Если файл существует:
- Удаляются все файлы в указанной директории Composer с помощью функции `array_map` и `unlink`.
- Удаляется сама директория Composer с помощью функции `rmdir`.
- Устанавливается окружение Composer через `putenv`, указывая путь к исполняемому файлу Composer.

Данный метод не возвращает значения и предназначен для очистки и удаления данных Composer.

##### Returns:

```
void
```

---

<a id="method_init"></a>
### init

```
static public init() : void
```

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException |  |

##### Returns:

```
void
```

---

<a id="method_install"></a>
### install

```
static public install() : void
```

##### Summary

Устанавливает зависимости проекта через Composer.

##### Description

Метод инициализирует приложение Composer с помощью метода `application()`,
создает объект `ArrayInput` для команды `install` и выполняет её с помощью
метода `run()` экземпляра приложения.

Используется для выполнения командной строки Composer в коде PHP.

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Может быть вызвано при ошибке обработки JSON в методе `application()`. |

##### Returns:

```
void
```

---

<a id="method_require"></a>
### require

```
static public require(string|null  name = null, string  version = &quot;*&quot;) : void
```

##### Summary

Добавляет указанный пакет или все зарегистрированные пакеты в зависимости от переданных параметров.

##### Description

Если имя пакета (`$name`) не указано, метод проходит по всем зарегистрированным
в `$packages` пакетам и вызывает себя для каждого из них.

В противном случае создается экземпляр `ArrayInput`, передающий команду для
установки указанного пакета с версией `$version`. После этого команда
выполняется с помощью метода `run()` приложения Composer.

##### Parameters:

| Name | Type | Default |
|------|------|---------|
| **$name** | string|null | null |
| **$version** | string | &quot;*&quot; |

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Может выбросить исключение при ошибке обработки JSON (например, в методе `application`). |

##### Returns:

```
void
```

---

<a id="method_update"></a>
### update

```
static public update() : void
```

##### Summary

Выполняет обновление зависимостей проекта через Composer.

##### Description

Метод создает экземпляр приложения Composer, используя метод `application()`,
передает команду `update` через объект `ArrayInput` и выполняет ее с помощью `run()`.

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Может быть выброшено при обработке JSON в методе `application()`. |

##### Returns:

```
void
```

---

<a id="method_application"></a>
### application

```
static private application() : \Application
```

##### Summary

Инициализирует приложение и возвращает экземпляр класса Application.

##### Throws:

| Type | Description |
|------|-------------|
| \JsonException | Исключение может быть выброшено, если возникнет ошибка обработки JSON при инициализации. |

##### Returns:

```
\Application
```
Экземпляр инициализированного приложения.
