import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Application`,description:`Документация по плагину класс: application для DLE.`},i=new Date(1787213191e3),a=`

## Краткое содержание: [#краткое-содержание]

Главный контейнер приложения DevCraft (Singleton).

***

### Свойства [#свойства]

* private $[instance](#property_instance)
* private $[registry](#property_registry)
* private $[twig](#property_twig)
* private $[database](#property_database)
* private $[dataLoader](#property_dataLoader)
* private $[dleData](#property_dleData)
* private $[assetsChecker](#property_assetsChecker)

***

### Методы [#методы]

* private [\\_\\_construct()](#method___construct)
* public [instance()](#method_instance)
* public [boot()](#method_boot)
* public [registry()](#method_registry)
* public [twig()](#method_twig)
* public [database()](#method_database)
* public [runAdmin()](#method_runAdmin)
* public [dataLoader()](#method_dataLoader)
* public [dleData()](#method_dleData)
* public [assetsChecker()](#method_assetsChecker)
* public [public\\_asset\\_url()](#method_public_asset_url)
* public [modulePublicAssetUrl()](#method_modulePublicAssetUrl)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Application.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_instance" />

#### $instance [#instance]

Главный контейнер приложения DevCraft (Singleton).

<span id="property_registry" />

#### $registry [#registry]

Признак завершённой инициализации ядра.

<span id="property_twig" />

#### $twig [#twig]

Экземпляр Twig для рендеринга шаблонов.

<span id="property_database" />

#### $database [#database]

Шлюз доступа к базе данных через Cycle ORM.

<span id="property_dataLoader" />

#### $dataLoader [#dataloader]

Сервис загрузки данных из таблиц DLE с кешированием.

<span id="property_dleData" />

#### $dleData [#dledata]

Сервис агрегированных данных DLE (пользователи, категории и т.д.).

<span id="property_assetsChecker" />

#### $assetsChecker [#assetschecker]

Сервис проверки целостности публичных ассетов.

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Закрывает прямое создание экземпляра; используйте \\{@see instance()}.

**С версии:** 200.4.0

<span id="method_instance" />

### instance() [#instance-1]

Возвращает единственный экземпляр приложения DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`self\` — Экземпляр приложения.

<span id="method_boot" />

### boot() [#boot]

Выполняет однократную инициализацию путей, реестра модулей и Twig.

**С версии:** 200.4.0

<span id="method_registry" />

### registry() [#registry-1]

Возвращает реестр модулей после автоматической инициализации ядра.

**С версии:** 200.4.0

**Возвращает:** \`Registry\` — Реестр активных модулей.

<span id="method_twig" />

### twig() [#twig-1]

Возвращает окружение Twig с подключённым расширением перевода.

**С версии:** 200.4.0

**Возвращает:** \`Environment\` — Настроенный экземпляр Twig.

<span id="method_database" />

### database() [#database-1]

Возвращает шлюз базы данных, создавая его при первом обращении.

**С версии:** 200.4.0

**Возвращает:** \`DatabaseGateway\` — Шлюз Cycle ORM для DevCraft.

<span id="method_runAdmin" />

### runAdmin() [#runadmin]

Запускает обработку запроса админ-модуля DevCraft.

**С версии:** 200.4.0

**Параметры:**

* \`$moduleDir\` — Имя каталога модуля относительно DEVCRAFT\\_MODULES.
*
* \`$mod\` — Переопределение идентификатора модуля в URL (необязательно).

<span id="method_dataLoader" />

### dataLoader() [#dataloader-1]

Возвращает сервис загрузки данных с учётом таймера кеша из настроек.

**С версии:** 200.4.0

**Возвращает:** \`DataLoaderService\` — Сервис выборки данных DLE.

<span id="method_dleData" />

### dleData() [#dledata-1]

Возвращает сервис агрегированных данных DLE с кешированием.

**С версии:** 200.4.0

**Возвращает:** \`DleDataService\` — Сервис высокоуровневых данных DLE.

<span id="method_assetsChecker" />

### assetsChecker() [#assetschecker-1]

Возвращает сервис проверки публичных ассетов DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`AssetsCheckerService\` — Сервис AssetsChecker.

<span id="method_public_asset_url" />

### public\\_asset\\_url() [#public_asset_url]

Возвращает публичный URL каталога core/assets шаблонов DevCraft.

**С версии:** 200.4.0

**Возвращает:** \`string\` — URL с завершающим слэшем.

<span id="method_modulePublicAssetUrl" />

### modulePublicAssetUrl() [#modulepublicasseturl]

Возвращает базовый URL каталога Public модуля (JS/CSS из manifest assets).

**С версии:** 200.4.0

**Параметры:**

* \`$modulePath\` — Абсолютный путь к корню модуля.

**Возвращает:** \`string\` — URL каталога Public с завершающим слэшем.
`,o={contents:[{heading:`краткое-содержание`,content:`Главный контейнер приложения DevCraft (Singleton).`},{heading:`свойства`,content:`private $instance`},{heading:`свойства`,content:`private $registry`},{heading:`свойства`,content:`private $twig`},{heading:`свойства`,content:`private $database`},{heading:`свойства`,content:`private $dataLoader`},{heading:`свойства`,content:`private $dleData`},{heading:`свойства`,content:`private $assetsChecker`},{heading:`методы`,content:`private \\_\\_construct()`},{heading:`методы`,content:`public instance()`},{heading:`методы`,content:`public boot()`},{heading:`методы`,content:`public registry()`},{heading:`методы`,content:`public twig()`},{heading:`методы`,content:`public database()`},{heading:`методы`,content:`public runAdmin()`},{heading:`методы`,content:`public dataLoader()`},{heading:`методы`,content:`public dleData()`},{heading:`методы`,content:`public assetsChecker()`},{heading:`методы`,content:`public public\\_asset\\_url()`},{heading:`методы`,content:`public modulePublicAssetUrl()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Application.php`"},{heading:`instance`,content:`Главный контейнер приложения DevCraft (Singleton).`},{heading:`registry`,content:`Признак завершённой инициализации ядра.`},{heading:`twig`,content:`Экземпляр Twig для рендеринга шаблонов.`},{heading:`database`,content:`Шлюз доступа к базе данных через Cycle ORM.`},{heading:`dataloader`,content:`Сервис загрузки данных из таблиц DLE с кешированием.`},{heading:`dledata`,content:`Сервис агрегированных данных DLE (пользователи, категории и т.д.).`},{heading:`assetschecker`,content:`Сервис проверки целостности публичных ассетов.`},{heading:`__construct`,content:`Закрывает прямое создание экземпляра; используйте \\{@see instance()}.`},{heading:`__construct`,content:`**С версии:** 200.4.0`},{heading:`instance-1`,content:`Возвращает единственный экземпляр приложения DevCraft.`},{heading:`instance-1`,content:`**С версии:** 200.4.0`},{heading:`instance-1`,content:"**Возвращает:** `self` — Экземпляр приложения."},{heading:`boot`,content:`Выполняет однократную инициализацию путей, реестра модулей и Twig.`},{heading:`boot`,content:`**С версии:** 200.4.0`},{heading:`registry-1`,content:`Возвращает реестр модулей после автоматической инициализации ядра.`},{heading:`registry-1`,content:`**С версии:** 200.4.0`},{heading:`registry-1`,content:"**Возвращает:** `Registry` — Реестр активных модулей."},{heading:`twig-1`,content:`Возвращает окружение Twig с подключённым расширением перевода.`},{heading:`twig-1`,content:`**С версии:** 200.4.0`},{heading:`twig-1`,content:"**Возвращает:** `Environment` — Настроенный экземпляр Twig."},{heading:`database-1`,content:`Возвращает шлюз базы данных, создавая его при первом обращении.`},{heading:`database-1`,content:`**С версии:** 200.4.0`},{heading:`database-1`,content:"**Возвращает:** `DatabaseGateway` — Шлюз Cycle ORM для DevCraft."},{heading:`runadmin`,content:`Запускает обработку запроса админ-модуля DevCraft.`},{heading:`runadmin`,content:`**С версии:** 200.4.0`},{heading:`runadmin`,content:`**Параметры:**`},{heading:`runadmin`,content:"`$moduleDir` — Имя каталога модуля относительно DEVCRAFT\\_MODULES."},{heading:`runadmin`,content:"`$mod` — Переопределение идентификатора модуля в URL (необязательно)."},{heading:`dataloader-1`,content:`Возвращает сервис загрузки данных с учётом таймера кеша из настроек.`},{heading:`dataloader-1`,content:`**С версии:** 200.4.0`},{heading:`dataloader-1`,content:"**Возвращает:** `DataLoaderService` — Сервис выборки данных DLE."},{heading:`dledata-1`,content:`Возвращает сервис агрегированных данных DLE с кешированием.`},{heading:`dledata-1`,content:`**С версии:** 200.4.0`},{heading:`dledata-1`,content:"**Возвращает:** `DleDataService` — Сервис высокоуровневых данных DLE."},{heading:`assetschecker-1`,content:`Возвращает сервис проверки публичных ассетов DevCraft.`},{heading:`assetschecker-1`,content:`**С версии:** 200.4.0`},{heading:`assetschecker-1`,content:"**Возвращает:** `AssetsCheckerService` — Сервис AssetsChecker."},{heading:`public_asset_url`,content:`Возвращает публичный URL каталога core/assets шаблонов DevCraft.`},{heading:`public_asset_url`,content:`**С версии:** 200.4.0`},{heading:`public_asset_url`,content:"**Возвращает:** `string` — URL с завершающим слэшем."},{heading:`modulepublicasseturl`,content:`Возвращает базовый URL каталога Public модуля (JS/CSS из manifest assets).`},{heading:`modulepublicasseturl`,content:`**С версии:** 200.4.0`},{heading:`modulepublicasseturl`,content:`**Параметры:**`},{heading:`modulepublicasseturl`,content:"`$modulePath` — Абсолютный путь к корню модуля."},{heading:`modulepublicasseturl`,content:"**Возвращает:** `string` — URL каталога Public с завершающим слэшем."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`instance`,content:`$instance`},{id:`registry`,content:`$registry`},{id:`twig`,content:`$twig`},{id:`database`,content:`$database`},{id:`dataloader`,content:`$dataLoader`},{id:`dledata`,content:`$dleData`},{id:`assetschecker`,content:`$assetsChecker`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`instance-1`,content:`instance()`},{id:`boot`,content:`boot()`},{id:`registry-1`,content:`registry()`},{id:`twig-1`,content:`twig()`},{id:`database-1`,content:`database()`},{id:`runadmin`,content:`runAdmin()`},{id:`dataloader-1`,content:`dataLoader()`},{id:`dledata-1`,content:`dleData()`},{id:`assetschecker-1`,content:`assetsChecker()`},{id:`public_asset_url`,content:`public_asset_url()`},{id:`modulepublicasseturl`,content:`modulePublicAssetUrl()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#instance`,title:(0,n.jsx)(n.Fragment,{children:`$instance`})},{depth:4,url:`#registry`,title:(0,n.jsx)(n.Fragment,{children:`$registry`})},{depth:4,url:`#twig`,title:(0,n.jsx)(n.Fragment,{children:`$twig`})},{depth:4,url:`#database`,title:(0,n.jsx)(n.Fragment,{children:`$database`})},{depth:4,url:`#dataloader`,title:(0,n.jsx)(n.Fragment,{children:`$dataLoader`})},{depth:4,url:`#dledata`,title:(0,n.jsx)(n.Fragment,{children:`$dleData`})},{depth:4,url:`#assetschecker`,title:(0,n.jsx)(n.Fragment,{children:`$assetsChecker`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#instance-1`,title:(0,n.jsx)(n.Fragment,{children:`instance()`})},{depth:3,url:`#boot`,title:(0,n.jsx)(n.Fragment,{children:`boot()`})},{depth:3,url:`#registry-1`,title:(0,n.jsx)(n.Fragment,{children:`registry()`})},{depth:3,url:`#twig-1`,title:(0,n.jsx)(n.Fragment,{children:`twig()`})},{depth:3,url:`#database-1`,title:(0,n.jsx)(n.Fragment,{children:`database()`})},{depth:3,url:`#runadmin`,title:(0,n.jsx)(n.Fragment,{children:`runAdmin()`})},{depth:3,url:`#dataloader-1`,title:(0,n.jsx)(n.Fragment,{children:`dataLoader()`})},{depth:3,url:`#dledata-1`,title:(0,n.jsx)(n.Fragment,{children:`dleData()`})},{depth:3,url:`#assetschecker-1`,title:(0,n.jsx)(n.Fragment,{children:`assetsChecker()`})},{depth:3,url:`#public_asset_url`,title:(0,n.jsx)(n.Fragment,{children:`public_asset_url()`})},{depth:3,url:`#modulepublicasseturl`,title:(0,n.jsx)(n.Fragment,{children:`modulePublicAssetUrl()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Главный контейнер приложения DevCraft (Singleton).`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_instance`,children:`instance`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_registry`,children:`registry`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_twig`,children:`twig`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_database`,children:`database`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_dataLoader`,children:`dataLoader`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_dleData`,children:`dleData`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_assetsChecker`,children:`assetsChecker`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_instance`,children:`instance()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_boot`,children:`boot()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_registry`,children:`registry()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_twig`,children:`twig()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_database`,children:`database()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_runAdmin`,children:`runAdmin()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_dataLoader`,children:`dataLoader()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_dleData`,children:`dleData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_assetsChecker`,children:`assetsChecker()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_public_asset_url`,children:`public_asset_url()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_modulePublicAssetUrl`,children:`modulePublicAssetUrl()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Application.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_instance`}),`
`,(0,n.jsx)(t.h4,{id:`instance`,children:`$instance`}),`
`,(0,n.jsx)(t.p,{children:`Главный контейнер приложения DevCraft (Singleton).`}),`
`,(0,n.jsx)(`span`,{id:`property_registry`}),`
`,(0,n.jsx)(t.h4,{id:`registry`,children:`$registry`}),`
`,(0,n.jsx)(t.p,{children:`Признак завершённой инициализации ядра.`}),`
`,(0,n.jsx)(`span`,{id:`property_twig`}),`
`,(0,n.jsx)(t.h4,{id:`twig`,children:`$twig`}),`
`,(0,n.jsx)(t.p,{children:`Экземпляр Twig для рендеринга шаблонов.`}),`
`,(0,n.jsx)(`span`,{id:`property_database`}),`
`,(0,n.jsx)(t.h4,{id:`database`,children:`$database`}),`
`,(0,n.jsx)(t.p,{children:`Шлюз доступа к базе данных через Cycle ORM.`}),`
`,(0,n.jsx)(`span`,{id:`property_dataLoader`}),`
`,(0,n.jsx)(t.h4,{id:`dataloader`,children:`$dataLoader`}),`
`,(0,n.jsx)(t.p,{children:`Сервис загрузки данных из таблиц DLE с кешированием.`}),`
`,(0,n.jsx)(`span`,{id:`property_dleData`}),`
`,(0,n.jsx)(t.h4,{id:`dledata`,children:`$dleData`}),`
`,(0,n.jsx)(t.p,{children:`Сервис агрегированных данных DLE (пользователи, категории и т.д.).`}),`
`,(0,n.jsx)(`span`,{id:`property_assetsChecker`}),`
`,(0,n.jsx)(t.h4,{id:`assetschecker`,children:`$assetsChecker`}),`
`,(0,n.jsx)(t.p,{children:`Сервис проверки целостности публичных ассетов.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:`Закрывает прямое создание экземпляра; используйте {@see instance()}.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_instance`}),`
`,(0,n.jsx)(t.h3,{id:`instance-1`,children:`instance()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает единственный экземпляр приложения DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Экземпляр приложения.`]}),`
`,(0,n.jsx)(`span`,{id:`method_boot`}),`
`,(0,n.jsx)(t.h3,{id:`boot`,children:`boot()`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет однократную инициализацию путей, реестра модулей и Twig.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_registry`}),`
`,(0,n.jsx)(t.h3,{id:`registry-1`,children:`registry()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает реестр модулей после автоматической инициализации ядра.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Registry`}),` — Реестр активных модулей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_twig`}),`
`,(0,n.jsx)(t.h3,{id:`twig-1`,children:`twig()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает окружение Twig с подключённым расширением перевода.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Environment`}),` — Настроенный экземпляр Twig.`]}),`
`,(0,n.jsx)(`span`,{id:`method_database`}),`
`,(0,n.jsx)(t.h3,{id:`database-1`,children:`database()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает шлюз базы данных, создавая его при первом обращении.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DatabaseGateway`}),` — Шлюз Cycle ORM для DevCraft.`]}),`
`,(0,n.jsx)(`span`,{id:`method_runAdmin`}),`
`,(0,n.jsx)(t.h3,{id:`runadmin`,children:`runAdmin()`}),`
`,(0,n.jsx)(t.p,{children:`Запускает обработку запроса админ-модуля DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$moduleDir`}),` — Имя каталога модуля относительно DEVCRAFT_MODULES.`]}),`
`,(0,n.jsx)(t.li,{}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mod`}),` — Переопределение идентификатора модуля в URL (необязательно).`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_dataLoader`}),`
`,(0,n.jsx)(t.h3,{id:`dataloader-1`,children:`dataLoader()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает сервис загрузки данных с учётом таймера кеша из настроек.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DataLoaderService`}),` — Сервис выборки данных DLE.`]}),`
`,(0,n.jsx)(`span`,{id:`method_dleData`}),`
`,(0,n.jsx)(t.h3,{id:`dledata-1`,children:`dleData()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает сервис агрегированных данных DLE с кешированием.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`DleDataService`}),` — Сервис высокоуровневых данных DLE.`]}),`
`,(0,n.jsx)(`span`,{id:`method_assetsChecker`}),`
`,(0,n.jsx)(t.h3,{id:`assetschecker-1`,children:`assetsChecker()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает сервис проверки публичных ассетов DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`AssetsCheckerService`}),` — Сервис AssetsChecker.`]}),`
`,(0,n.jsx)(`span`,{id:`method_public_asset_url`}),`
`,(0,n.jsx)(t.h3,{id:`public_asset_url`,children:`public_asset_url()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает публичный URL каталога core/assets шаблонов DevCraft.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL с завершающим слэшем.`]}),`
`,(0,n.jsx)(`span`,{id:`method_modulePublicAssetUrl`}),`
`,(0,n.jsx)(t.h3,{id:`modulepublicasseturl`,children:`modulePublicAssetUrl()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает базовый URL каталога Public модуля (JS/CSS из manifest assets).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$modulePath`}),` — Абсолютный путь к корню модуля.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — URL каталога Public с завершающим слэшем.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};