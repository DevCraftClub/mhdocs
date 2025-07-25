---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Абстрактный класс: ComposerAction - MH Admin"
description: "Документация по плагину абстрактный класс: composeraction для DLE."
keywords: "PHP, DLE, Плагин, Админка, абстрактный класс: composeraction, DevCraft, документация"
author: "Maxim Harder"
og:title: "Абстрактный класс: ComposerAction"
og:description: "Документация по плагину абстрактный класс: composeraction для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Абстрактный класс: ComposerAction"
twitter:description: "Документация по плагину абстрактный класс: composeraction для DLE."
---

# Абстрактный класс: ComposerAction

---

### Свойства

* private $[composerPath](#property_composerPath)
* private $[projectPath](#property_projectPath)

---

### Методы

* public [init()](#method_init)
* public [isComposerInstalled()](#method_isComposerInstalled)
* public [installTemporaryComposer()](#method_installTemporaryComposer)
* public [installDependencies()](#method_installDependencies)
* public [updateDependencies()](#method_updateDependencies)
* public [removePackage()](#method_removePackage)
* public [requirePackage()](#method_requirePackage)
* private [runCommand()](#method_runCommand)
* private [getComposerCommand()](#method_getComposerCommand)
* private [executeCommand()](#method_executeCommand)

---

### Подробности

* Путь: engine/inc/maharder/_includes/classes/ComposerAction.php

---

## Свойства

### private $composerPath[](){#property_composerPath} : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>


### private $projectPath[](){#property_projectPath} : ?string
---
**Тип:** <abbr title="?string">Текст или null</abbr>


---

## Методы

### public init[](){#method_init} : void

#### Описание

Инициализация класса

#### Свойства:

| Название          | Тип          | Описание                                            | По умолчанию                                                         |
|-------------------|--------------|-----------------------------------------------------|----------------------------------------------------------------------|
| **$projectPath**  | string\|null | Путь до папки, где находится основной composer.json | [MH_ADMIN](../index.md#constant_MH_ADMIN)                            |
| **$composerPath** | string\|null | Путь до испольняемого файла composer                | [COMPOSER_DIR](../index.md#constant_COMPOSER_DIR) . '/composer.phar' |

---

### public isComposerInstalled[](){#method_isComposerInstalled} : bool

#### Описание

Проверяет наличие установленного Composer в системе

---

### public installTemporaryComposer[](){#method_installTemporaryComposer} : void

#### Описание

Устанавливает временный Composer

---

### public installDependencies[](){#method_installDependencies} : void

#### Описание

Устанавливает зависимости

---

### public updateDependencies[](){#method_updateDependencies} : void

#### Описание

Обновляет зависимости

---

### public removePackage[](){#method_removePackage} : void

#### Описание

Обновляет зависимости

#### Свойства:

| Название     | Тип    | Описание        | По умолчанию |
|--------------|--------|-----------------|--------------|
| **$package** | string | Название пакета |              |

---

### public requirePackage[](){#method_requirePackage} : void

#### Описание

Устанавливает новый пакет

#### Свойства:

| Название        | Тип           | Описание                                                                                                                                | По умолчанию |
|-----------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------|--------------|
| **$package**    | string\|array | Название пакета, либо массив из пакетов в формате "name" => "version". В случае массива, свойство $version игнорируется                 |              |
| **$version**    | string\|null  | Версия пакета (опционально)                                                                                                             | null         |
| **$isDev**      | bool          | Добавление пакета в массив зависимостей для разработки                                                                                  | false        |
| **$lockerFile** | string\|null  | Файл блокировки от повторной установки пакета для плагина. Если свойство заполнено, то скрипт устанавливает зависимость только один раз | null         |

---

### private runCommand[](){#method_runCommand} : void

#### Описание

Выполняет команду Composer

#### Свойства:

| Название     | Тип    | Описание                     | По умолчанию |
|--------------|--------|------------------------------|--------------|
| **$command** | string | Строка команды для композера |              |

---

### private getComposerCommand()[](){#method_getComposerCommand} : void

#### Описание

Возвращает команду для вызова Composer

---

### private executeCommand[](){#method_executeCommand} : void

#### Описание

Выполняет команду в оболочке

#### Свойства:

| Название     | Тип    | Описание                     | По умолчанию |
|--------------|--------|------------------------------|--------------|
| **$command** | string | Строка команды для композера |              |

