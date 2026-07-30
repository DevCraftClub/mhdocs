import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: ModuleGeneratorService`,description:`Документация по плагину класс: modulegeneratorservice для DLE.`},i=new Date(1785404498e3),a=`

## Краткое содержание: [#краткое-содержание]

Сервис генерации каркаса нового DevCraft-модуля из шаблонов.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [defaultVersion()](#method_defaultVersion)
* public [generate()](#method_generate)
* private [normalize()](#method_normalize)
* private [replacements()](#method_replacements)
* private [writeFromStub()](#method_writeFromStub)
* private [writeLocales()](#method_writeLocales)
* private [registerPlugin()](#method_registerPlugin)
* private [stubPath()](#method_stubPath)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/modules/Admin/Services/ModuleGeneratorService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_defaultVersion" />

### defaultVersion() [#defaultversion]

Возвращает версию по умолчанию для нового модуля на основе VERSIONID DLE.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Строка версии вида \`200.40.1.0\` или \`200.1.0\`.

<span id="method_generate" />

### generate() [#generate]

Создаёт каталоги, файлы и при необходимости регистрирует плагин DLE.

**С версии:** 200.4.0

**Параметры:**

* \`$input\` — Нормализованные данные формы генератора.

**Возвращает:** \`array{\` —

<span id="method_normalize" />

### normalize() [#normalize]

Нормализует и дополняет входные данные генератора модулей.

**С версии:** 200.4.0

**Параметры:**

* \`$input\` — Исходные данные формы.

**Возвращает:** \`array{\` —

<span id="method_replacements" />

### replacements() [#replacements]

Формирует карту плейсхолдеров для подстановки в stub-файлы.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — string> Карта \`%ключ%\` → значение.

<span id="method_writeFromStub" />

### writeFromStub() [#writefromstub]

Записывает целевой файл из stub-шаблона с подстановкой плейсхолдеров.

**С версии:** 200.4.0

**Параметры:**

* \`$stubFile\` — Имя stub-файла в каталоге шаблонов.
* \`$targetFile\` — Абсолютный путь создаваемого файла.
* \`$override\` — Перезаписывать существующие файлы.

<span id="method_writeLocales" />

### writeLocales() [#writelocales]

Создаёт XLIFF-файлы локализации для нового модуля.

**С версии:** 200.4.0

**Параметры:**

* \`$latin\` — Латинский код модуля (имя каталога локали).
* \`$override\` — Перезаписывать существующие файлы локали.

<span id="method_registerPlugin" />

### registerPlugin() [#registerplugin]

Регистрирует модуль как плагин DLE в таблице \`_plugins\`.

**С версии:** 200.4.0

<span id="method_stubPath" />

### stubPath() [#stubpath]

Возвращает абсолютный путь к stub-файлу генератора модулей.

**С версии:** 200.4.0

**Параметры:**

* \`$file\` — Имя stub-файла в каталоге \`scaffold/module\`.

**Возвращает:** \`string\` — Нормализованный абсолютный путь к шаблону.
`,o={contents:[{heading:`краткое-содержание`,content:`Сервис генерации каркаса нового DevCraft-модуля из шаблонов.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public defaultVersion()`},{heading:`методы`,content:`public generate()`},{heading:`методы`,content:`private normalize()`},{heading:`методы`,content:`private replacements()`},{heading:`методы`,content:`private writeFromStub()`},{heading:`методы`,content:`private writeLocales()`},{heading:`методы`,content:`private registerPlugin()`},{heading:`методы`,content:`private stubPath()`},{heading:`подробности`,content:"Путь: `devcraft/src/modules/Admin/Services/ModuleGeneratorService.php`"},{heading:`defaultversion`,content:`Возвращает версию по умолчанию для нового модуля на основе VERSIONID DLE.`},{heading:`defaultversion`,content:`**С версии:** 200.4.0`},{heading:`defaultversion`,content:"**Возвращает:** `string` — Строка версии вида `200.40.1.0` или `200.1.0`."},{heading:`generate`,content:`Создаёт каталоги, файлы и при необходимости регистрирует плагин DLE.`},{heading:`generate`,content:`**С версии:** 200.4.0`},{heading:`generate`,content:`**Параметры:**`},{heading:`generate`,content:"`$input` — Нормализованные данные формы генератора."},{heading:`generate`,content:"**Возвращает:** `array{` —"},{heading:`normalize`,content:`Нормализует и дополняет входные данные генератора модулей.`},{heading:`normalize`,content:`**С версии:** 200.4.0`},{heading:`normalize`,content:`**Параметры:**`},{heading:`normalize`,content:"`$input` — Исходные данные формы."},{heading:`normalize`,content:"**Возвращает:** `array{` —"},{heading:`replacements`,content:`Формирует карту плейсхолдеров для подстановки в stub-файлы.`},{heading:`replacements`,content:`**С версии:** 200.4.0`},{heading:`replacements`,content:"**Возвращает:** `array<string,` — string> Карта `%ключ%` → значение."},{heading:`writefromstub`,content:`Записывает целевой файл из stub-шаблона с подстановкой плейсхолдеров.`},{heading:`writefromstub`,content:`**С версии:** 200.4.0`},{heading:`writefromstub`,content:`**Параметры:**`},{heading:`writefromstub`,content:"`$stubFile` — Имя stub-файла в каталоге шаблонов."},{heading:`writefromstub`,content:"`$targetFile` — Абсолютный путь создаваемого файла."},{heading:`writefromstub`,content:"`$override` — Перезаписывать существующие файлы."},{heading:`writelocales`,content:`Создаёт XLIFF-файлы локализации для нового модуля.`},{heading:`writelocales`,content:`**С версии:** 200.4.0`},{heading:`writelocales`,content:`**Параметры:**`},{heading:`writelocales`,content:"`$latin` — Латинский код модуля (имя каталога локали)."},{heading:`writelocales`,content:"`$override` — Перезаписывать существующие файлы локали."},{heading:`registerplugin`,content:"Регистрирует модуль как плагин DLE в таблице `_plugins`."},{heading:`registerplugin`,content:`**С версии:** 200.4.0`},{heading:`stubpath`,content:`Возвращает абсолютный путь к stub-файлу генератора модулей.`},{heading:`stubpath`,content:`**С версии:** 200.4.0`},{heading:`stubpath`,content:`**Параметры:**`},{heading:`stubpath`,content:"`$file` — Имя stub-файла в каталоге `scaffold/module`."},{heading:`stubpath`,content:"**Возвращает:** `string` — Нормализованный абсолютный путь к шаблону."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`defaultversion`,content:`defaultVersion()`},{id:`generate`,content:`generate()`},{id:`normalize`,content:`normalize()`},{id:`replacements`,content:`replacements()`},{id:`writefromstub`,content:`writeFromStub()`},{id:`writelocales`,content:`writeLocales()`},{id:`registerplugin`,content:`registerPlugin()`},{id:`stubpath`,content:`stubPath()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#defaultversion`,title:(0,n.jsx)(n.Fragment,{children:`defaultVersion()`})},{depth:3,url:`#generate`,title:(0,n.jsx)(n.Fragment,{children:`generate()`})},{depth:3,url:`#normalize`,title:(0,n.jsx)(n.Fragment,{children:`normalize()`})},{depth:3,url:`#replacements`,title:(0,n.jsx)(n.Fragment,{children:`replacements()`})},{depth:3,url:`#writefromstub`,title:(0,n.jsx)(n.Fragment,{children:`writeFromStub()`})},{depth:3,url:`#writelocales`,title:(0,n.jsx)(n.Fragment,{children:`writeLocales()`})},{depth:3,url:`#registerplugin`,title:(0,n.jsx)(n.Fragment,{children:`registerPlugin()`})},{depth:3,url:`#stubpath`,title:(0,n.jsx)(n.Fragment,{children:`stubPath()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Сервис генерации каркаса нового DevCraft-модуля из шаблонов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_defaultVersion`,children:`defaultVersion()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_generate`,children:`generate()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalize`,children:`normalize()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_replacements`,children:`replacements()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeFromStub`,children:`writeFromStub()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeLocales`,children:`writeLocales()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_registerPlugin`,children:`registerPlugin()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_stubPath`,children:`stubPath()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Admin/Services/ModuleGeneratorService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_defaultVersion`}),`
`,(0,n.jsx)(t.h3,{id:`defaultversion`,children:`defaultVersion()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает версию по умолчанию для нового модуля на основе VERSIONID DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строка версии вида `,(0,n.jsx)(t.code,{children:`200.40.1.0`}),` или `,(0,n.jsx)(t.code,{children:`200.1.0`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_generate`}),`
`,(0,n.jsx)(t.h3,{id:`generate`,children:`generate()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт каталоги, файлы и при необходимости регистрирует плагин DLE.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$input`}),` — Нормализованные данные формы генератора.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{`}),` —`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalize`}),`
`,(0,n.jsx)(t.h3,{id:`normalize`,children:`normalize()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует и дополняет входные данные генератора модулей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$input`}),` — Исходные данные формы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{`}),` —`]}),`
`,(0,n.jsx)(`span`,{id:`method_replacements`}),`
`,(0,n.jsx)(t.h3,{id:`replacements`,children:`replacements()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует карту плейсхолдеров для подстановки в stub-файлы.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Карта `,(0,n.jsx)(t.code,{children:`%ключ%`}),` → значение.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeFromStub`}),`
`,(0,n.jsx)(t.h3,{id:`writefromstub`,children:`writeFromStub()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает целевой файл из stub-шаблона с подстановкой плейсхолдеров.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$stubFile`}),` — Имя stub-файла в каталоге шаблонов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$targetFile`}),` — Абсолютный путь создаваемого файла.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$override`}),` — Перезаписывать существующие файлы.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeLocales`}),`
`,(0,n.jsx)(t.h3,{id:`writelocales`,children:`writeLocales()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт XLIFF-файлы локализации для нового модуля.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$latin`}),` — Латинский код модуля (имя каталога локали).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$override`}),` — Перезаписывать существующие файлы локали.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_registerPlugin`}),`
`,(0,n.jsx)(t.h3,{id:`registerplugin`,children:`registerPlugin()`}),`
`,(0,n.jsxs)(t.p,{children:[`Регистрирует модуль как плагин DLE в таблице `,(0,n.jsx)(t.code,{children:`_plugins`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_stubPath`}),`
`,(0,n.jsx)(t.h3,{id:`stubpath`,children:`stubPath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к stub-файлу генератора модулей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$file`}),` — Имя stub-файла в каталоге `,(0,n.jsx)(t.code,{children:`scaffold/module`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Нормализованный абсолютный путь к шаблону.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};