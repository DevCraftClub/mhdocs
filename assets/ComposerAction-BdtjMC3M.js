import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактный класс: ComposerAction`,description:`Документация по плагину абстрактный класс: composeraction для DLE.`},i=new Date(1787834766e3),a=`

***

### Свойства [#свойства]

* private $[composerPath](#property_composerPath)
* private $[projectPath](#property_projectPath)

***

### Методы [#методы]

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

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/classes/ComposerAction.php

***

## Свойства [#свойства-1]

### private $composerPath<span id="property_composerPath" /> : ?string [#private-composerpath--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

### private $projectPath<span id="property_projectPath" /> : ?string [#private-projectpath--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

***

## Методы [#методы-1]

### public init<span id="method_init" /> : void [#public-init--void]

#### Описание [#описание]

Инициализация класса

#### Свойства: [#свойства-2]

| Название          | Тип          | Описание                                            | По умолчанию                                                       |
| ----------------- | ------------ | --------------------------------------------------- | ------------------------------------------------------------------ |
| **$projectPath**  | string\\|null | Путь до папки, где находится основной composer.json | [MH\\_ADMIN](../index#constant_MH_ADMIN)                            |
| **$composerPath** | string\\|null | Путь до испольняемого файла composer                | [COMPOSER\\_DIR](../index#constant_COMPOSER_DIR) . '/composer.phar' |

***

### public isComposerInstalled<span id="method_isComposerInstalled" /> : bool [#public-iscomposerinstalled--bool]

#### Описание [#описание-1]

Проверяет наличие установленного Composer в системе

***

### public installTemporaryComposer<span id="method_installTemporaryComposer" /> : void [#public-installtemporarycomposer--void]

#### Описание [#описание-2]

Устанавливает временный Composer

***

### public installDependencies<span id="method_installDependencies" /> : void [#public-installdependencies--void]

#### Описание [#описание-3]

Устанавливает зависимости

***

### public updateDependencies<span id="method_updateDependencies" /> : void [#public-updatedependencies--void]

#### Описание [#описание-4]

Обновляет зависимости

***

### public removePackage<span id="method_removePackage" /> : void [#public-removepackage--void]

#### Описание [#описание-5]

Обновляет зависимости

#### Свойства: [#свойства-3]

| Название     | Тип    | Описание        | По умолчанию |
| ------------ | ------ | --------------- | ------------ |
| **$package** | string | Название пакета |              |

***

### public requirePackage<span id="method_requirePackage" /> : void [#public-requirepackage--void]

#### Описание [#описание-6]

Устанавливает новый пакет

#### Свойства: [#свойства-4]

| Название        | Тип           | Описание                                                                                                                                | По умолчанию |
| --------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| **$package**    | string\\|array | Название пакета, либо массив из пакетов в формате "name" => "version". В случае массива, свойство $version игнорируется                 |              |
| **$version**    | string\\|null  | Версия пакета (опционально)                                                                                                             | null         |
| **$isDev**      | bool          | Добавление пакета в массив зависимостей для разработки                                                                                  | false        |
| **$lockerFile** | string\\|null  | Файл блокировки от повторной установки пакета для плагина. Если свойство заполнено, то скрипт устанавливает зависимость только один раз | null         |

***

### private runCommand<span id="method_runCommand" /> : void [#private-runcommand--void]

#### Описание [#описание-7]

Выполняет команду Composer

#### Свойства: [#свойства-5]

| Название     | Тип    | Описание                     | По умолчанию |
| ------------ | ------ | ---------------------------- | ------------ |
| **$command** | string | Строка команды для композера |              |

***

### private getComposerCommand()<span id="method_getComposerCommand" /> : void [#private-getcomposercommand--void]

#### Описание [#описание-8]

Возвращает команду для вызова Composer

***

### private executeCommand<span id="method_executeCommand" /> : void [#private-executecommand--void]

#### Описание [#описание-9]

Выполняет команду в оболочке

#### Свойства: [#свойства-6]

| Название     | Тип    | Описание                     | По умолчанию |
| ------------ | ------ | ---------------------------- | ------------ |
| **$command** | string | Строка команды для композера |              |
`,o={contents:[{heading:`свойства`,content:`private $composerPath`},{heading:`свойства`,content:`private $projectPath`},{heading:`методы`,content:`public init()`},{heading:`методы`,content:`public isComposerInstalled()`},{heading:`методы`,content:`public installTemporaryComposer()`},{heading:`методы`,content:`public installDependencies()`},{heading:`методы`,content:`public updateDependencies()`},{heading:`методы`,content:`public removePackage()`},{heading:`методы`,content:`public requirePackage()`},{heading:`методы`,content:`private runCommand()`},{heading:`методы`,content:`private getComposerCommand()`},{heading:`методы`,content:`private executeCommand()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/classes/ComposerAction.php`},{heading:`private-composerpath--string`,content:`**Тип:** Текст или null`},{heading:`private-projectpath--string`,content:`**Тип:** Текст или null`},{heading:`описание`,content:`Инициализация класса`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`Описание`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$projectPath**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`Путь до папки, где находится основной composer.json`},{heading:`свойства-2`,content:`MH\\_ADMIN`},{heading:`свойства-2`,content:`**$composerPath**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`Путь до испольняемого файла composer`},{heading:`свойства-2`,content:`COMPOSER\\_DIR . '/composer.phar'`},{heading:`описание-1`,content:`Проверяет наличие установленного Composer в системе`},{heading:`описание-2`,content:`Устанавливает временный Composer`},{heading:`описание-3`,content:`Устанавливает зависимости`},{heading:`описание-4`,content:`Обновляет зависимости`},{heading:`описание-5`,content:`Обновляет зависимости`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`Описание`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$package**`},{heading:`свойства-3`,content:`string`},{heading:`свойства-3`,content:`Название пакета`},{heading:`описание-6`,content:`Устанавливает новый пакет`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`Описание`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$package**`},{heading:`свойства-4`,content:`string\\|array`},{heading:`свойства-4`,content:`Название пакета, либо массив из пакетов в формате "name" => "version". В случае массива, свойство $version игнорируется`},{heading:`свойства-4`,content:`**$version**`},{heading:`свойства-4`,content:`string\\|null`},{heading:`свойства-4`,content:`Версия пакета (опционально)`},{heading:`свойства-4`,content:`null`},{heading:`свойства-4`,content:`**$isDev**`},{heading:`свойства-4`,content:`bool`},{heading:`свойства-4`,content:`Добавление пакета в массив зависимостей для разработки`},{heading:`свойства-4`,content:`false`},{heading:`свойства-4`,content:`**$lockerFile**`},{heading:`свойства-4`,content:`string\\|null`},{heading:`свойства-4`,content:`Файл блокировки от повторной установки пакета для плагина. Если свойство заполнено, то скрипт устанавливает зависимость только один раз`},{heading:`свойства-4`,content:`null`},{heading:`описание-7`,content:`Выполняет команду Composer`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`Описание`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$command**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`Строка команды для композера`},{heading:`описание-8`,content:`Возвращает команду для вызова Composer`},{heading:`описание-9`,content:`Выполняет команду в оболочке`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`Описание`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$command**`},{heading:`свойства-6`,content:`string`},{heading:`свойства-6`,content:`Строка команды для композера`}],headings:[{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-composerpath--string`,content:`private $composerPath : ?string`},{id:`private-projectpath--string`,content:`private $projectPath : ?string`},{id:`методы-1`,content:`Методы`},{id:`public-init--void`,content:`public init : void`},{id:`описание`,content:`Описание`},{id:`свойства-2`,content:`Свойства:`},{id:`public-iscomposerinstalled--bool`,content:`public isComposerInstalled : bool`},{id:`описание-1`,content:`Описание`},{id:`public-installtemporarycomposer--void`,content:`public installTemporaryComposer : void`},{id:`описание-2`,content:`Описание`},{id:`public-installdependencies--void`,content:`public installDependencies : void`},{id:`описание-3`,content:`Описание`},{id:`public-updatedependencies--void`,content:`public updateDependencies : void`},{id:`описание-4`,content:`Описание`},{id:`public-removepackage--void`,content:`public removePackage : void`},{id:`описание-5`,content:`Описание`},{id:`свойства-3`,content:`Свойства:`},{id:`public-requirepackage--void`,content:`public requirePackage : void`},{id:`описание-6`,content:`Описание`},{id:`свойства-4`,content:`Свойства:`},{id:`private-runcommand--void`,content:`private runCommand : void`},{id:`описание-7`,content:`Описание`},{id:`свойства-5`,content:`Свойства:`},{id:`private-getcomposercommand--void`,content:`private getComposerCommand() : void`},{id:`описание-8`,content:`Описание`},{id:`private-executecommand--void`,content:`private executeCommand : void`},{id:`описание-9`,content:`Описание`},{id:`свойства-6`,content:`Свойства:`}]},s=[{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#private-composerpath--string`,title:(0,n.jsxs)(n.Fragment,{children:[`private $composerPath`,(0,n.jsx)(`span`,{id:`property_composerPath`}),` : ?string`]})},{depth:3,url:`#private-projectpath--string`,title:(0,n.jsxs)(n.Fragment,{children:[`private $projectPath`,(0,n.jsx)(`span`,{id:`property_projectPath`}),` : ?string`]})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#public-init--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public init`,(0,n.jsx)(`span`,{id:`method_init`}),` : void`]})},{depth:4,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:3,url:`#public-iscomposerinstalled--bool`,title:(0,n.jsxs)(n.Fragment,{children:[`public isComposerInstalled`,(0,n.jsx)(`span`,{id:`method_isComposerInstalled`}),` : bool`]})},{depth:4,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#public-installtemporarycomposer--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public installTemporaryComposer`,(0,n.jsx)(`span`,{id:`method_installTemporaryComposer`}),` : void`]})},{depth:4,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#public-installdependencies--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public installDependencies`,(0,n.jsx)(`span`,{id:`method_installDependencies`}),` : void`]})},{depth:4,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#public-updatedependencies--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public updateDependencies`,(0,n.jsx)(`span`,{id:`method_updateDependencies`}),` : void`]})},{depth:4,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#public-removepackage--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public removePackage`,(0,n.jsx)(`span`,{id:`method_removePackage`}),` : void`]})},{depth:4,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:3,url:`#public-requirepackage--void`,title:(0,n.jsxs)(n.Fragment,{children:[`public requirePackage`,(0,n.jsx)(`span`,{id:`method_requirePackage`}),` : void`]})},{depth:4,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:3,url:`#private-runcommand--void`,title:(0,n.jsxs)(n.Fragment,{children:[`private runCommand`,(0,n.jsx)(`span`,{id:`method_runCommand`}),` : void`]})},{depth:4,url:`#описание-7`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:3,url:`#private-getcomposercommand--void`,title:(0,n.jsxs)(n.Fragment,{children:[`private getComposerCommand()`,(0,n.jsx)(`span`,{id:`method_getComposerCommand`}),` : void`]})},{depth:4,url:`#описание-8`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#private-executecommand--void`,title:(0,n.jsxs)(n.Fragment,{children:[`private executeCommand`,(0,n.jsx)(`span`,{id:`method_executeCommand`}),` : void`]})},{depth:4,url:`#описание-9`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:4,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})}];function c(e){let t={a:`a`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_composerPath`,children:`composerPath`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_projectPath`,children:`projectPath`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_init`,children:`init()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isComposerInstalled`,children:`isComposerInstalled()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_installTemporaryComposer`,children:`installTemporaryComposer()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_installDependencies`,children:`installDependencies()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_updateDependencies`,children:`updateDependencies()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_removePackage`,children:`removePackage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_requirePackage`,children:`requirePackage()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_runCommand`,children:`runCommand()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_getComposerCommand`,children:`getComposerCommand()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_executeCommand`,children:`executeCommand()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/classes/ComposerAction.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsxs)(t.h3,{id:`private-composerpath--string`,children:[`private $composerPath`,(0,n.jsx)(`span`,{id:`property_composerPath`}),` : ?string`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.h3,{id:`private-projectpath--string`,children:[`private $projectPath`,(0,n.jsx)(`span`,{id:`property_projectPath`}),` : ?string`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsxs)(t.h3,{id:`public-init--void`,children:[`public init`,(0,n.jsx)(`span`,{id:`method_init`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Инициализация класса`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$projectPath`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`Путь до папки, где находится основной composer.json`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../index#constant_MH_ADMIN`,children:`MH_ADMIN`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$composerPath`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`Путь до испольняемого файла composer`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`../index#constant_COMPOSER_DIR`,children:`COMPOSER_DIR`}),` . '/composer.phar'`]})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-iscomposerinstalled--bool`,children:[`public isComposerInstalled`,(0,n.jsx)(`span`,{id:`method_isComposerInstalled`}),` : bool`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет наличие установленного Composer в системе`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-installtemporarycomposer--void`,children:[`public installTemporaryComposer`,(0,n.jsx)(`span`,{id:`method_installTemporaryComposer`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает временный Composer`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-installdependencies--void`,children:[`public installDependencies`,(0,n.jsx)(`span`,{id:`method_installDependencies`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает зависимости`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-updatedependencies--void`,children:[`public updateDependencies`,(0,n.jsx)(`span`,{id:`method_updateDependencies`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет зависимости`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-removepackage--void`,children:[`public removePackage`,(0,n.jsx)(`span`,{id:`method_removePackage`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Обновляет зависимости`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$package`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`Название пакета`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`public-requirepackage--void`,children:[`public requirePackage`,(0,n.jsx)(`span`,{id:`method_requirePackage`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает новый пакет`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$package`})}),(0,n.jsx)(t.td,{children:`string|array`}),(0,n.jsx)(t.td,{children:`Название пакета, либо массив из пакетов в формате "name" => "version". В случае массива, свойство $version игнорируется`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$version`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`Версия пакета (опционально)`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$isDev`})}),(0,n.jsx)(t.td,{children:`bool`}),(0,n.jsx)(t.td,{children:`Добавление пакета в массив зависимостей для разработки`}),(0,n.jsx)(t.td,{children:`false`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$lockerFile`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`Файл блокировки от повторной установки пакета для плагина. Если свойство заполнено, то скрипт устанавливает зависимость только один раз`}),(0,n.jsx)(t.td,{children:`null`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`private-runcommand--void`,children:[`private runCommand`,(0,n.jsx)(`span`,{id:`method_runCommand`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-7`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет команду Composer`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$command`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`Строка команды для композера`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`private-getcomposercommand--void`,children:[`private getComposerCommand()`,(0,n.jsx)(`span`,{id:`method_getComposerCommand`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-8`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает команду для вызова Composer`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.h3,{id:`private-executecommand--void`,children:[`private executeCommand`,(0,n.jsx)(`span`,{id:`method_executeCommand`}),` : void`]}),`
`,(0,n.jsx)(t.h4,{id:`описание-9`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет команду в оболочке`}),`
`,(0,n.jsx)(t.h4,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$command`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`Строка команды для композера`}),(0,n.jsx)(t.td,{})]})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};