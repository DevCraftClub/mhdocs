import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DataManager`,description:`Документация по плагину класс: datamanager для DLE.`},i=new Date(1787217967e3),a=`

## Краткое содержание: [#краткое-содержание]

Утилиты работы с файлами, конфигурацией JSON и санитизацией ввода DLE.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [abbr()](#method_abbr)
* public [dirToArray()](#method_dirToArray)
* public [createDir()](#method_createDir)
* public [setPermission()](#method_setPermission)
* public [joinPaths()](#method_joinPaths)
* public [deleteDir()](#method_deleteDir)
* public [nameArgs()](#method_nameArgs)
* public [defType()](#method_defType)
* public [getComparer()](#method_getComparer)
* public [saveConfig()](#method_saveConfig)
* public [getConfig()](#method_getConfig)
* public [normalizePath()](#method_normalizePath)
* public [getPrefix()](#method_getPrefix)
* public [getUserPrefix()](#method_getUserPrefix)
* public [toTranslit()](#method_toTranslit)
* public [sanitizeArrayInput()](#method_sanitizeArrayInput)
* public [sanitizeInput()](#method_sanitizeInput)
* public [createLockFile()](#method_createLockFile)
* public [normalizeUrl()](#method_normalizeUrl)
* private [loadJsonConfig()](#method_loadJsonConfig)
* private [migrateOldConfig()](#method_migrateOldConfig)
* private [scanDirectory()](#method_scanDirectory)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Support/DataManager.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_abbr" />

### abbr() [#abbr]

Формирует аббревиатуру из слов строки с суффиксом длины.

**С версии:** 173.3.0

**Параметры:**

* \`$string\` — Исходная строка.
* \`$sep\` — Разделитель слов.

**Возвращает:** \`string\` — Аббревиатура вида «Abbr\\_0008».

<span id="method_dirToArray" />

### dirToArray() [#dirtoarray]

Рекурсивно преобразует каталог в массив файлов и подкаталогов.

**С версии:** 173.3.0

**Параметры:**

* \`$dir\` — Путь к каталогу.

**Возвращает:** \`array<mixed>\` — Дерево каталога.

<span id="method_createDir" />

### createDir() [#createdir]

Создаёт каталоги с правами 0755, если они ещё не существуют.

**С версии:** 173.3.0

**Возвращает:** \`bool\` — true при успехе для всех путей.

<span id="method_setPermission" />

### setPermission() [#setpermission]

Создаёт каталоги с указанными правами доступа.

**С версии:** 200.4.0

**Параметры:**

* \`$permission\` — Права в восьмеричном виде.

**Возвращает:** \`bool\` — true при успехе для всех путей.

<span id="method_joinPaths" />

### joinPaths() [#joinpaths]

Объединяет несколько сегментов пути в один нормализованный путь.

**С версии:** 173.3.0

**Возвращает:** \`string\` — Объединённый путь.

<span id="method_deleteDir" />

### deleteDir() [#deletedir]

Рекурсивно удаляет каталог, кроме защищённых vendor и var/cache.

**С версии:** 173.3.0

**Параметры:**

* \`$path\` — Абсолютный путь к каталогу.

<span id="method_nameArgs" />

### nameArgs() [#nameargs]

Преобразует вложенный массив аргументов в плоский ассоциативный массив.

**С версии:** 173.3.0

**Параметры:**

* \`$args\` — Исходные аргументы или null.

**Возвращает:** \`array<mixed>\` — Именованные аргументы без пустых значений.

<span id="method_defType" />

### defType() [#deftype]

Приводит значение к типу через filter\\_var по имени SQL/PHP-типа.

**С версии:** 173.3.0

**Параметры:**

* \`$value\` — Исходное значение.
* \`$type\` — Имя типа (int, string, bool и т.д.).

**Возвращает:** \`float|bool|int|string\` — Приведённое значение.

<span id="method_getComparer" />

### getComparer() [#getcomparer]

Формирует SQL-фрагмент сравнения с оператором из префикса значения.

**С версии:** 173.3.0

**Параметры:**

* \`$value\` — Значение с опциональным префиксом оператора (!, \\<, >, %).

**Возвращает:** \`string\` — Фрагмент « OP value» для SQL.

<span id="method_saveConfig" />

### saveConfig() [#saveconfig]

Сохраняет конфигурацию модуля в JSON-файл.

**С версии:** 180.3.5

**Параметры:**

* \`$codename\` — Имя конфигурации (имя файла без .json).
* \`$configPath\` — Каталог конфигурации или null для Paths::config().

<span id="method_getConfig" />

### getConfig() [#getconfig]

Загружает конфигурацию из JSON или мигрирует legacy PHP-конфиг DLE.

**С версии:** 173.3.0

**Параметры:**

* \`$codename\` — Имя конфигурации.
* \`$path\` — Каталог JSON или null.
* \`$confName\` — Имя legacy PHP-конфига для миграции.

**Возвращает:** \`array<string,\` — mixed> Ассоциативный массив настроек.

<span id="method_normalizePath" />

### normalizePath() [#normalizepath]

Нормализует путь относительно ROOT\\_DIR и realpath.

**С версии:** 173.3.0

**Параметры:**

* \`$path\` — Исходный путь.

**Возвращает:** \`string\` — Абсолютный нормализованный путь или пустая строка при ошибке.

<span id="method_getPrefix" />

### getPrefix() [#getprefix]

Возвращает префикс таблиц DLE (константа PREFIX).

**С версии:** 173.3.0

**Возвращает:** \`string\` — Значение PREFIX или пустая строка.

<span id="method_getUserPrefix" />

### getUserPrefix() [#getuserprefix]

Возвращает префикс пользовательских таблиц DLE (USERPREFIX).

**С версии:** 173.3.0

**Возвращает:** \`string\` — Значение USERPREFIX или пустая строка.

<span id="method_toTranslit" />

### toTranslit() [#totranslit]

Транслитерирует строку в латинский идентификатор с подчёркиваниями.

**С версии:** 173.3.0

**Параметры:**

* \`$input\` — Исходная строка.
* \`$lowercase\` — Приводить результат к нижнему регистру.

**Возвращает:** \`string\` — Транслитерированная строка.

<span id="method_sanitizeArrayInput" />

### sanitizeArrayInput() [#sanitizearrayinput]

Рекурсивно санитизирует массив ввода через filter\\_var.

**С версии:** 173.3.0

**Параметры:**

* \`$input\` — Входные данные.
* \`$flags\` — Флаги filter\\_var или null.

**Возвращает:** \`mixed\` — Санитизированный массив или скаляр, null при пустом вводе.

<span id="method_sanitizeInput" />

### sanitizeInput() [#sanitizeinput]

Санитизирует скалярное значение через один или несколько filter\\_var.

**С версии:** 173.3.0

**Параметры:**

* \`$value\` — Сырое значение.
* \`$flags\` — Цепочка флагов filter\\_var.

**Возвращает:** \`string|null\` — Строка или null при неудачной фильтрации.

<span id="method_createLockFile" />

### createLockFile() [#createlockfile]

Создаёт lock-файл обновлений с меткой времени.

**С версии:** 173.3.0

**Параметры:**

* \`$path\` — Путь к lock-файлу.

<span id="method_normalizeUrl" />

### normalizeUrl() [#normalizeurl]

Нормализует относительный URL админки DLE с дополнительными query-параметрами.

**С версии:** 173.3.0

**Параметры:**

* \`$url\` — Исходный URL или query.

**Возвращает:** \`string\` — Полный URL админки с query.

<span id="method_loadJsonConfig" />

### loadJsonConfig() [#loadjsonconfig]

Загружает и санитизирует JSON-конфигурацию из файла.

**С версии:** 173.3.0

**Параметры:**

* \`$filePath\` — Путь к .json файлу.

**Возвращает:** \`array<string,\` — mixed> Декодированный массив.

<span id="method_migrateOldConfig" />

### migrateOldConfig() [#migrateoldconfig]

Мигрирует legacy PHP-конфиг DLE в JSON и удаляет старый файл.

**С версии:** 173.3.0

**Параметры:**

* \`$codename\` — Имя конфигурации DevCraft.
* \`$confName\` — Имя переменной legacy-конфига.
* \`$configPath\` — Каталог для JSON.

**Возвращает:** \`array<string,\` — mixed> Загруженные настройки.

<span id="method_scanDirectory" />

### scanDirectory() [#scandirectory]

Рекурсивно сканирует каталог в массив (внутренний метод dirToArray).

**С версии:** 173.3.0

**Параметры:**

* \`$dir\` — Путь к каталогу.
* \`$ignoredExtensions\` — Игнорируемые имена и расширения.

**Возвращает:** \`array<mixed>\` — Дерево каталога.
`,o={contents:[{heading:`краткое-содержание`,content:`Утилиты работы с файлами, конфигурацией JSON и санитизацией ввода DLE.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public abbr()`},{heading:`методы`,content:`public dirToArray()`},{heading:`методы`,content:`public createDir()`},{heading:`методы`,content:`public setPermission()`},{heading:`методы`,content:`public joinPaths()`},{heading:`методы`,content:`public deleteDir()`},{heading:`методы`,content:`public nameArgs()`},{heading:`методы`,content:`public defType()`},{heading:`методы`,content:`public getComparer()`},{heading:`методы`,content:`public saveConfig()`},{heading:`методы`,content:`public getConfig()`},{heading:`методы`,content:`public normalizePath()`},{heading:`методы`,content:`public getPrefix()`},{heading:`методы`,content:`public getUserPrefix()`},{heading:`методы`,content:`public toTranslit()`},{heading:`методы`,content:`public sanitizeArrayInput()`},{heading:`методы`,content:`public sanitizeInput()`},{heading:`методы`,content:`public createLockFile()`},{heading:`методы`,content:`public normalizeUrl()`},{heading:`методы`,content:`private loadJsonConfig()`},{heading:`методы`,content:`private migrateOldConfig()`},{heading:`методы`,content:`private scanDirectory()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Support/DataManager.php`"},{heading:`abbr`,content:`Формирует аббревиатуру из слов строки с суффиксом длины.`},{heading:`abbr`,content:`**С версии:** 173.3.0`},{heading:`abbr`,content:`**Параметры:**`},{heading:`abbr`,content:"`$string` — Исходная строка."},{heading:`abbr`,content:"`$sep` — Разделитель слов."},{heading:`abbr`,content:"**Возвращает:** `string` — Аббревиатура вида «Abbr\\_0008»."},{heading:`dirtoarray`,content:`Рекурсивно преобразует каталог в массив файлов и подкаталогов.`},{heading:`dirtoarray`,content:`**С версии:** 173.3.0`},{heading:`dirtoarray`,content:`**Параметры:**`},{heading:`dirtoarray`,content:"`$dir` — Путь к каталогу."},{heading:`dirtoarray`,content:"**Возвращает:** `array<mixed>` — Дерево каталога."},{heading:`createdir`,content:`Создаёт каталоги с правами 0755, если они ещё не существуют.`},{heading:`createdir`,content:`**С версии:** 173.3.0`},{heading:`createdir`,content:"**Возвращает:** `bool` — true при успехе для всех путей."},{heading:`setpermission`,content:`Создаёт каталоги с указанными правами доступа.`},{heading:`setpermission`,content:`**С версии:** 200.4.0`},{heading:`setpermission`,content:`**Параметры:**`},{heading:`setpermission`,content:"`$permission` — Права в восьмеричном виде."},{heading:`setpermission`,content:"**Возвращает:** `bool` — true при успехе для всех путей."},{heading:`joinpaths`,content:`Объединяет несколько сегментов пути в один нормализованный путь.`},{heading:`joinpaths`,content:`**С версии:** 173.3.0`},{heading:`joinpaths`,content:"**Возвращает:** `string` — Объединённый путь."},{heading:`deletedir`,content:`Рекурсивно удаляет каталог, кроме защищённых vendor и var/cache.`},{heading:`deletedir`,content:`**С версии:** 173.3.0`},{heading:`deletedir`,content:`**Параметры:**`},{heading:`deletedir`,content:"`$path` — Абсолютный путь к каталогу."},{heading:`nameargs`,content:`Преобразует вложенный массив аргументов в плоский ассоциативный массив.`},{heading:`nameargs`,content:`**С версии:** 173.3.0`},{heading:`nameargs`,content:`**Параметры:**`},{heading:`nameargs`,content:"`$args` — Исходные аргументы или null."},{heading:`nameargs`,content:"**Возвращает:** `array<mixed>` — Именованные аргументы без пустых значений."},{heading:`deftype`,content:`Приводит значение к типу через filter\\_var по имени SQL/PHP-типа.`},{heading:`deftype`,content:`**С версии:** 173.3.0`},{heading:`deftype`,content:`**Параметры:**`},{heading:`deftype`,content:"`$value` — Исходное значение."},{heading:`deftype`,content:"`$type` — Имя типа (int, string, bool и т.д.)."},{heading:`deftype`,content:"**Возвращает:** `float|bool|int|string` — Приведённое значение."},{heading:`getcomparer`,content:`Формирует SQL-фрагмент сравнения с оператором из префикса значения.`},{heading:`getcomparer`,content:`**С версии:** 173.3.0`},{heading:`getcomparer`,content:`**Параметры:**`},{heading:`getcomparer`,content:"`$value` — Значение с опциональным префиксом оператора (!, \\<, >, %)."},{heading:`getcomparer`,content:"**Возвращает:** `string` — Фрагмент « OP value» для SQL."},{heading:`saveconfig`,content:`Сохраняет конфигурацию модуля в JSON-файл.`},{heading:`saveconfig`,content:`**С версии:** 180.3.5`},{heading:`saveconfig`,content:`**Параметры:**`},{heading:`saveconfig`,content:"`$codename` — Имя конфигурации (имя файла без .json)."},{heading:`saveconfig`,content:"`$configPath` — Каталог конфигурации или null для Paths::config()."},{heading:`getconfig`,content:`Загружает конфигурацию из JSON или мигрирует legacy PHP-конфиг DLE.`},{heading:`getconfig`,content:`**С версии:** 173.3.0`},{heading:`getconfig`,content:`**Параметры:**`},{heading:`getconfig`,content:"`$codename` — Имя конфигурации."},{heading:`getconfig`,content:"`$path` — Каталог JSON или null."},{heading:`getconfig`,content:"`$confName` — Имя legacy PHP-конфига для миграции."},{heading:`getconfig`,content:"**Возвращает:** `array<string,` — mixed> Ассоциативный массив настроек."},{heading:`normalizepath`,content:`Нормализует путь относительно ROOT\\_DIR и realpath.`},{heading:`normalizepath`,content:`**С версии:** 173.3.0`},{heading:`normalizepath`,content:`**Параметры:**`},{heading:`normalizepath`,content:"`$path` — Исходный путь."},{heading:`normalizepath`,content:"**Возвращает:** `string` — Абсолютный нормализованный путь или пустая строка при ошибке."},{heading:`getprefix`,content:`Возвращает префикс таблиц DLE (константа PREFIX).`},{heading:`getprefix`,content:`**С версии:** 173.3.0`},{heading:`getprefix`,content:"**Возвращает:** `string` — Значение PREFIX или пустая строка."},{heading:`getuserprefix`,content:`Возвращает префикс пользовательских таблиц DLE (USERPREFIX).`},{heading:`getuserprefix`,content:`**С версии:** 173.3.0`},{heading:`getuserprefix`,content:"**Возвращает:** `string` — Значение USERPREFIX или пустая строка."},{heading:`totranslit`,content:`Транслитерирует строку в латинский идентификатор с подчёркиваниями.`},{heading:`totranslit`,content:`**С версии:** 173.3.0`},{heading:`totranslit`,content:`**Параметры:**`},{heading:`totranslit`,content:"`$input` — Исходная строка."},{heading:`totranslit`,content:"`$lowercase` — Приводить результат к нижнему регистру."},{heading:`totranslit`,content:"**Возвращает:** `string` — Транслитерированная строка."},{heading:`sanitizearrayinput`,content:`Рекурсивно санитизирует массив ввода через filter\\_var.`},{heading:`sanitizearrayinput`,content:`**С версии:** 173.3.0`},{heading:`sanitizearrayinput`,content:`**Параметры:**`},{heading:`sanitizearrayinput`,content:"`$input` — Входные данные."},{heading:`sanitizearrayinput`,content:"`$flags` — Флаги filter\\_var или null."},{heading:`sanitizearrayinput`,content:"**Возвращает:** `mixed` — Санитизированный массив или скаляр, null при пустом вводе."},{heading:`sanitizeinput`,content:`Санитизирует скалярное значение через один или несколько filter\\_var.`},{heading:`sanitizeinput`,content:`**С версии:** 173.3.0`},{heading:`sanitizeinput`,content:`**Параметры:**`},{heading:`sanitizeinput`,content:"`$value` — Сырое значение."},{heading:`sanitizeinput`,content:"`$flags` — Цепочка флагов filter\\_var."},{heading:`sanitizeinput`,content:"**Возвращает:** `string|null` — Строка или null при неудачной фильтрации."},{heading:`createlockfile`,content:`Создаёт lock-файл обновлений с меткой времени.`},{heading:`createlockfile`,content:`**С версии:** 173.3.0`},{heading:`createlockfile`,content:`**Параметры:**`},{heading:`createlockfile`,content:"`$path` — Путь к lock-файлу."},{heading:`normalizeurl`,content:`Нормализует относительный URL админки DLE с дополнительными query-параметрами.`},{heading:`normalizeurl`,content:`**С версии:** 173.3.0`},{heading:`normalizeurl`,content:`**Параметры:**`},{heading:`normalizeurl`,content:"`$url` — Исходный URL или query."},{heading:`normalizeurl`,content:"**Возвращает:** `string` — Полный URL админки с query."},{heading:`loadjsonconfig`,content:`Загружает и санитизирует JSON-конфигурацию из файла.`},{heading:`loadjsonconfig`,content:`**С версии:** 173.3.0`},{heading:`loadjsonconfig`,content:`**Параметры:**`},{heading:`loadjsonconfig`,content:"`$filePath` — Путь к .json файлу."},{heading:`loadjsonconfig`,content:"**Возвращает:** `array<string,` — mixed> Декодированный массив."},{heading:`migrateoldconfig`,content:`Мигрирует legacy PHP-конфиг DLE в JSON и удаляет старый файл.`},{heading:`migrateoldconfig`,content:`**С версии:** 173.3.0`},{heading:`migrateoldconfig`,content:`**Параметры:**`},{heading:`migrateoldconfig`,content:"`$codename` — Имя конфигурации DevCraft."},{heading:`migrateoldconfig`,content:"`$confName` — Имя переменной legacy-конфига."},{heading:`migrateoldconfig`,content:"`$configPath` — Каталог для JSON."},{heading:`migrateoldconfig`,content:"**Возвращает:** `array<string,` — mixed> Загруженные настройки."},{heading:`scandirectory`,content:`Рекурсивно сканирует каталог в массив (внутренний метод dirToArray).`},{heading:`scandirectory`,content:`**С версии:** 173.3.0`},{heading:`scandirectory`,content:`**Параметры:**`},{heading:`scandirectory`,content:"`$dir` — Путь к каталогу."},{heading:`scandirectory`,content:"`$ignoredExtensions` — Игнорируемые имена и расширения."},{heading:`scandirectory`,content:"**Возвращает:** `array<mixed>` — Дерево каталога."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`abbr`,content:`abbr()`},{id:`dirtoarray`,content:`dirToArray()`},{id:`createdir`,content:`createDir()`},{id:`setpermission`,content:`setPermission()`},{id:`joinpaths`,content:`joinPaths()`},{id:`deletedir`,content:`deleteDir()`},{id:`nameargs`,content:`nameArgs()`},{id:`deftype`,content:`defType()`},{id:`getcomparer`,content:`getComparer()`},{id:`saveconfig`,content:`saveConfig()`},{id:`getconfig`,content:`getConfig()`},{id:`normalizepath`,content:`normalizePath()`},{id:`getprefix`,content:`getPrefix()`},{id:`getuserprefix`,content:`getUserPrefix()`},{id:`totranslit`,content:`toTranslit()`},{id:`sanitizearrayinput`,content:`sanitizeArrayInput()`},{id:`sanitizeinput`,content:`sanitizeInput()`},{id:`createlockfile`,content:`createLockFile()`},{id:`normalizeurl`,content:`normalizeUrl()`},{id:`loadjsonconfig`,content:`loadJsonConfig()`},{id:`migrateoldconfig`,content:`migrateOldConfig()`},{id:`scandirectory`,content:`scanDirectory()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#abbr`,title:(0,n.jsx)(n.Fragment,{children:`abbr()`})},{depth:3,url:`#dirtoarray`,title:(0,n.jsx)(n.Fragment,{children:`dirToArray()`})},{depth:3,url:`#createdir`,title:(0,n.jsx)(n.Fragment,{children:`createDir()`})},{depth:3,url:`#setpermission`,title:(0,n.jsx)(n.Fragment,{children:`setPermission()`})},{depth:3,url:`#joinpaths`,title:(0,n.jsx)(n.Fragment,{children:`joinPaths()`})},{depth:3,url:`#deletedir`,title:(0,n.jsx)(n.Fragment,{children:`deleteDir()`})},{depth:3,url:`#nameargs`,title:(0,n.jsx)(n.Fragment,{children:`nameArgs()`})},{depth:3,url:`#deftype`,title:(0,n.jsx)(n.Fragment,{children:`defType()`})},{depth:3,url:`#getcomparer`,title:(0,n.jsx)(n.Fragment,{children:`getComparer()`})},{depth:3,url:`#saveconfig`,title:(0,n.jsx)(n.Fragment,{children:`saveConfig()`})},{depth:3,url:`#getconfig`,title:(0,n.jsx)(n.Fragment,{children:`getConfig()`})},{depth:3,url:`#normalizepath`,title:(0,n.jsx)(n.Fragment,{children:`normalizePath()`})},{depth:3,url:`#getprefix`,title:(0,n.jsx)(n.Fragment,{children:`getPrefix()`})},{depth:3,url:`#getuserprefix`,title:(0,n.jsx)(n.Fragment,{children:`getUserPrefix()`})},{depth:3,url:`#totranslit`,title:(0,n.jsx)(n.Fragment,{children:`toTranslit()`})},{depth:3,url:`#sanitizearrayinput`,title:(0,n.jsx)(n.Fragment,{children:`sanitizeArrayInput()`})},{depth:3,url:`#sanitizeinput`,title:(0,n.jsx)(n.Fragment,{children:`sanitizeInput()`})},{depth:3,url:`#createlockfile`,title:(0,n.jsx)(n.Fragment,{children:`createLockFile()`})},{depth:3,url:`#normalizeurl`,title:(0,n.jsx)(n.Fragment,{children:`normalizeUrl()`})},{depth:3,url:`#loadjsonconfig`,title:(0,n.jsx)(n.Fragment,{children:`loadJsonConfig()`})},{depth:3,url:`#migrateoldconfig`,title:(0,n.jsx)(n.Fragment,{children:`migrateOldConfig()`})},{depth:3,url:`#scandirectory`,title:(0,n.jsx)(n.Fragment,{children:`scanDirectory()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Утилиты работы с файлами, конфигурацией JSON и санитизацией ввода DLE.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_abbr`,children:`abbr()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_dirToArray`,children:`dirToArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createDir`,children:`createDir()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setPermission`,children:`setPermission()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_joinPaths`,children:`joinPaths()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_deleteDir`,children:`deleteDir()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_nameArgs`,children:`nameArgs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_defType`,children:`defType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getComparer`,children:`getComparer()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_saveConfig`,children:`saveConfig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getConfig`,children:`getConfig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_normalizePath`,children:`normalizePath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getPrefix`,children:`getPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUserPrefix`,children:`getUserPrefix()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toTranslit`,children:`toTranslit()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_sanitizeArrayInput`,children:`sanitizeArrayInput()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_sanitizeInput`,children:`sanitizeInput()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_createLockFile`,children:`createLockFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_normalizeUrl`,children:`normalizeUrl()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadJsonConfig`,children:`loadJsonConfig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_migrateOldConfig`,children:`migrateOldConfig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_scanDirectory`,children:`scanDirectory()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/DataManager.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_abbr`}),`
`,(0,n.jsx)(t.h3,{id:`abbr`,children:`abbr()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует аббревиатуру из слов строки с суффиксом длины.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$string`}),` — Исходная строка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sep`}),` — Разделитель слов.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Аббревиатура вида «Abbr_0008».`]}),`
`,(0,n.jsx)(`span`,{id:`method_dirToArray`}),`
`,(0,n.jsx)(t.h3,{id:`dirtoarray`,children:`dirToArray()`}),`
`,(0,n.jsx)(t.p,{children:`Рекурсивно преобразует каталог в массив файлов и подкаталогов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$dir`}),` — Путь к каталогу.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<mixed>`}),` — Дерево каталога.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createDir`}),`
`,(0,n.jsx)(t.h3,{id:`createdir`,children:`createDir()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт каталоги с правами 0755, если они ещё не существуют.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при успехе для всех путей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setPermission`}),`
`,(0,n.jsx)(t.h3,{id:`setpermission`,children:`setPermission()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт каталоги с указанными правами доступа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$permission`}),` — Права в восьмеричном виде.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при успехе для всех путей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_joinPaths`}),`
`,(0,n.jsx)(t.h3,{id:`joinpaths`,children:`joinPaths()`}),`
`,(0,n.jsx)(t.p,{children:`Объединяет несколько сегментов пути в один нормализованный путь.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Объединённый путь.`]}),`
`,(0,n.jsx)(`span`,{id:`method_deleteDir`}),`
`,(0,n.jsx)(t.h3,{id:`deletedir`,children:`deleteDir()`}),`
`,(0,n.jsx)(t.p,{children:`Рекурсивно удаляет каталог, кроме защищённых vendor и var/cache.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Абсолютный путь к каталогу.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_nameArgs`}),`
`,(0,n.jsx)(t.h3,{id:`nameargs`,children:`nameArgs()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует вложенный массив аргументов в плоский ассоциативный массив.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$args`}),` — Исходные аргументы или null.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<mixed>`}),` — Именованные аргументы без пустых значений.`]}),`
`,(0,n.jsx)(`span`,{id:`method_defType`}),`
`,(0,n.jsx)(t.h3,{id:`deftype`,children:`defType()`}),`
`,(0,n.jsx)(t.p,{children:`Приводит значение к типу через filter_var по имени SQL/PHP-типа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Исходное значение.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` — Имя типа (int, string, bool и т.д.).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|bool|int|string`}),` — Приведённое значение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getComparer`}),`
`,(0,n.jsx)(t.h3,{id:`getcomparer`,children:`getComparer()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует SQL-фрагмент сравнения с оператором из префикса значения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Значение с опциональным префиксом оператора (!, <, >, %).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Фрагмент « OP value» для SQL.`]}),`
`,(0,n.jsx)(`span`,{id:`method_saveConfig`}),`
`,(0,n.jsx)(t.h3,{id:`saveconfig`,children:`saveConfig()`}),`
`,(0,n.jsx)(t.p,{children:`Сохраняет конфигурацию модуля в JSON-файл.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 180.3.5`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$codename`}),` — Имя конфигурации (имя файла без .json).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$configPath`}),` — Каталог конфигурации или null для Paths::config().`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getConfig`}),`
`,(0,n.jsx)(t.h3,{id:`getconfig`,children:`getConfig()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает конфигурацию из JSON или мигрирует legacy PHP-конфиг DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$codename`}),` — Имя конфигурации.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Каталог JSON или null.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$confName`}),` — Имя legacy PHP-конфига для миграции.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Ассоциативный массив настроек.`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizePath`}),`
`,(0,n.jsx)(t.h3,{id:`normalizepath`,children:`normalizePath()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует путь относительно ROOT_DIR и realpath.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Исходный путь.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Абсолютный нормализованный путь или пустая строка при ошибке.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getprefix`,children:`getPrefix()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс таблиц DLE (константа PREFIX).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение PREFIX или пустая строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getUserPrefix`}),`
`,(0,n.jsx)(t.h3,{id:`getuserprefix`,children:`getUserPrefix()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает префикс пользовательских таблиц DLE (USERPREFIX).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Значение USERPREFIX или пустая строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_toTranslit`}),`
`,(0,n.jsx)(t.h3,{id:`totranslit`,children:`toTranslit()`}),`
`,(0,n.jsx)(t.p,{children:`Транслитерирует строку в латинский идентификатор с подчёркиваниями.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$input`}),` — Исходная строка.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$lowercase`}),` — Приводить результат к нижнему регистру.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Транслитерированная строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_sanitizeArrayInput`}),`
`,(0,n.jsx)(t.h3,{id:`sanitizearrayinput`,children:`sanitizeArrayInput()`}),`
`,(0,n.jsx)(t.p,{children:`Рекурсивно санитизирует массив ввода через filter_var.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$input`}),` — Входные данные.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$flags`}),` — Флаги filter_var или null.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` — Санитизированный массив или скаляр, null при пустом вводе.`]}),`
`,(0,n.jsx)(`span`,{id:`method_sanitizeInput`}),`
`,(0,n.jsx)(t.h3,{id:`sanitizeinput`,children:`sanitizeInput()`}),`
`,(0,n.jsx)(t.p,{children:`Санитизирует скалярное значение через один или несколько filter_var.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` — Сырое значение.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$flags`}),` — Цепочка флагов filter_var.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — Строка или null при неудачной фильтрации.`]}),`
`,(0,n.jsx)(`span`,{id:`method_createLockFile`}),`
`,(0,n.jsx)(t.h3,{id:`createlockfile`,children:`createLockFile()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт lock-файл обновлений с меткой времени.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Путь к lock-файлу.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeUrl`}),`
`,(0,n.jsx)(t.h3,{id:`normalizeurl`,children:`normalizeUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует относительный URL админки DLE с дополнительными query-параметрами.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` — Исходный URL или query.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Полный URL админки с query.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadJsonConfig`}),`
`,(0,n.jsx)(t.h3,{id:`loadjsonconfig`,children:`loadJsonConfig()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает и санитизирует JSON-конфигурацию из файла.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filePath`}),` — Путь к .json файлу.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Декодированный массив.`]}),`
`,(0,n.jsx)(`span`,{id:`method_migrateOldConfig`}),`
`,(0,n.jsx)(t.h3,{id:`migrateoldconfig`,children:`migrateOldConfig()`}),`
`,(0,n.jsx)(t.p,{children:`Мигрирует legacy PHP-конфиг DLE в JSON и удаляет старый файл.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$codename`}),` — Имя конфигурации DevCraft.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$confName`}),` — Имя переменной legacy-конфига.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$configPath`}),` — Каталог для JSON.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Загруженные настройки.`]}),`
`,(0,n.jsx)(`span`,{id:`method_scanDirectory`}),`
`,(0,n.jsx)(t.h3,{id:`scandirectory`,children:`scanDirectory()`}),`
`,(0,n.jsx)(t.p,{children:`Рекурсивно сканирует каталог в массив (внутренний метод dirToArray).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$dir`}),` — Путь к каталогу.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ignoredExtensions`}),` — Игнорируемые имена и расширения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<mixed>`}),` — Дерево каталога.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};