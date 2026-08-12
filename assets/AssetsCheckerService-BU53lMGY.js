import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AssetsCheckerService`,description:`Документация по плагину класс: assetscheckerservice для DLE.`},i=new Date(1786541452e3),a=`

## Краткое содержание: [#краткое-содержание]

Сканирует публичные ассеты, сравнивает с удалённым манифестом и загружает недостающие файлы.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [scan()](#method_scan)
* public [compare()](#method_compare)
* public [compareReport()](#method_compareReport)
* public [downloadAll()](#method_downloadAll)
* public [downloadMissing()](#method_downloadMissing)
* public [run()](#method_run)
* public [fileMetadata()](#method_fileMetadata)
* private [deployAbsolutePath()](#method_deployAbsolutePath)
* private [normalizeManifestFiles()](#method_normalizeManifestFiles)
* private [writeManifest()](#method_writeManifest)
* private [readManifest()](#method_readManifest)
* private [fetchRemoteManifest()](#method_fetchRemoteManifest)
* private [downloadAssetFile()](#method_downloadAssetFile)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Support/AssetsCheckerService.php\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

Принимает \`$manifestPath\`: Путь к assets.json или null для Paths::config()..

**С версии:** 173.3.0

**Параметры:**

* \`$manifestPath\` — Путь к assets.json или null для Paths::config().

<span id="method_scan" />

### scan() [#scan]

Сканирует локальные файлы по ключам удалённого манифеста и записывает локальный MD5-манифест.

**С версии:** 173.3.0

**Возвращает:** \`array<string, array<string, mixed>>\` — Манифест file => metadata.

<span id="method_compare" />

### compare() [#compare]

Сравнивает локальный манифест с удалённым по hash.

**С версии:** 173.3.0

**Параметры:**

* \`$remoteUrl\` — URL удалённого assets.json.

**Возвращает:** \`array{missing: string[], outdated: string[], ok: string[]}\` — Списки путей.

<span id="method_compareReport" />

### compareReport() [#comparereport]

Формирует расширенный отчёт сравнения с метаданными файлов.

**С версии:** 173.3.0

**Параметры:**

* \`$remoteUrl\` — URL удалённого assets.json.

**Возвращает:** \`array{\` —

<span id="method_downloadAll" />

### downloadAll() [#downloadall]

Загружает все файлы из удалённого манифеста.

**С версии:** 173.3.0

**Параметры:**

* \`$remoteUrl\` — URL удалённого assets.json.

**Возвращает:** \`int\` — Число успешно загруженных файлов.

<span id="method_downloadMissing" />

### downloadMissing() [#downloadmissing]

Загружает только missing и outdated файлы из diff.

**С версии:** 173.3.0

**Возвращает:** \`int\` — Число успешно загруженных файлов.

<span id="method_run" />

### run() [#run]

Выполняет полный цикл: scan → compare → downloadMissing.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — mixed> Ключи scan, compare, downloaded.

<span id="method_fileMetadata" />

### fileMetadata() [#filemetadata]

Формирует метаданные одного файла для манифеста.

**С версии:** 173.3.0

**Параметры:**

* \`$absolutePath\` — Абсолютный путь к файлу на диске.

**Возвращает:** \`array{path: string, file: string, link: string, hash: string, alt: string, alt_name: string, required: bool}\` — |null Метаданные или null.

<span id="method_deployAbsolutePath" />

### deployAbsolutePath() [#deployabsolutepath]

Возвращает абсолютный путь развёртывания из поля file манифеста (от ROOT\\_DIR).

**С версии:** 200.4.0

<span id="method_normalizeManifestFiles" />

### normalizeManifestFiles() [#normalizemanifestfiles]

Извлекает секцию files из манифеста или фильтрует плоский массив.

**С версии:** 173.3.0

**Возвращает:** \`array<string, array<string, mixed>>\` — Карта path => metadata.

<span id="method_writeManifest" />

### writeManifest() [#writemanifest]

Записывает локальный JSON-манифест на диск.

**С версии:** 173.3.0

<span id="method_readManifest" />

### readManifest() [#readmanifest]

Читает локальный JSON-манифест assets.json.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — mixed> Декодированный манифест или пустой массив.

<span id="method_fetchRemoteManifest" />

### fetchRemoteManifest() [#fetchremotemanifest]

Загружает и декодирует удалённый JSON-манифест.

**С версии:** 173.3.0

**Параметры:**

* \`$remoteUrl\` — URL assets.json.

**Возвращает:** \`array<string,\` — mixed>|null Манифест или null при ошибке.

<span id="method_downloadAssetFile" />

### downloadAssetFile() [#downloadassetfile]

Скачивает один файл ассета по link/alt из метаданных.

**С версии:** 173.3.0

**Параметры:**

* \`$manifestKey\` — Ключ /assets/... .

**Возвращает:** \`bool\` — true при успешной записи файла.
`,o={contents:[{heading:`краткое-содержание`,content:`Сканирует публичные ассеты, сравнивает с удалённым манифестом и загружает недостающие файлы.`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public scan()`},{heading:`методы`,content:`public compare()`},{heading:`методы`,content:`public compareReport()`},{heading:`методы`,content:`public downloadAll()`},{heading:`методы`,content:`public downloadMissing()`},{heading:`методы`,content:`public run()`},{heading:`методы`,content:`public fileMetadata()`},{heading:`методы`,content:`private deployAbsolutePath()`},{heading:`методы`,content:`private normalizeManifestFiles()`},{heading:`методы`,content:`private writeManifest()`},{heading:`методы`,content:`private readManifest()`},{heading:`методы`,content:`private fetchRemoteManifest()`},{heading:`методы`,content:`private downloadAssetFile()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Support/AssetsCheckerService.php`"},{heading:`__construct`,content:"Принимает `$manifestPath`: Путь к assets.json или null для Paths::config().."},{heading:`__construct`,content:`**С версии:** 173.3.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$manifestPath` — Путь к assets.json или null для Paths::config()."},{heading:`scan`,content:`Сканирует локальные файлы по ключам удалённого манифеста и записывает локальный MD5-манифест.`},{heading:`scan`,content:`**С версии:** 173.3.0`},{heading:`scan`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Манифест file => metadata."},{heading:`compare`,content:`Сравнивает локальный манифест с удалённым по hash.`},{heading:`compare`,content:`**С версии:** 173.3.0`},{heading:`compare`,content:`**Параметры:**`},{heading:`compare`,content:"`$remoteUrl` — URL удалённого assets.json."},{heading:`compare`,content:"**Возвращает:** `array{missing: string[], outdated: string[], ok: string[]}` — Списки путей."},{heading:`comparereport`,content:`Формирует расширенный отчёт сравнения с метаданными файлов.`},{heading:`comparereport`,content:`**С версии:** 173.3.0`},{heading:`comparereport`,content:`**Параметры:**`},{heading:`comparereport`,content:"`$remoteUrl` — URL удалённого assets.json."},{heading:`comparereport`,content:"**Возвращает:** `array{` —"},{heading:`downloadall`,content:`Загружает все файлы из удалённого манифеста.`},{heading:`downloadall`,content:`**С версии:** 173.3.0`},{heading:`downloadall`,content:`**Параметры:**`},{heading:`downloadall`,content:"`$remoteUrl` — URL удалённого assets.json."},{heading:`downloadall`,content:"**Возвращает:** `int` — Число успешно загруженных файлов."},{heading:`downloadmissing`,content:`Загружает только missing и outdated файлы из diff.`},{heading:`downloadmissing`,content:`**С версии:** 173.3.0`},{heading:`downloadmissing`,content:"**Возвращает:** `int` — Число успешно загруженных файлов."},{heading:`run`,content:`Выполняет полный цикл: scan → compare → downloadMissing.`},{heading:`run`,content:`**С версии:** 173.3.0`},{heading:`run`,content:"**Возвращает:** `array<string,` — mixed> Ключи scan, compare, downloaded."},{heading:`filemetadata`,content:`Формирует метаданные одного файла для манифеста.`},{heading:`filemetadata`,content:`**С версии:** 173.3.0`},{heading:`filemetadata`,content:`**Параметры:**`},{heading:`filemetadata`,content:"`$absolutePath` — Абсолютный путь к файлу на диске."},{heading:`filemetadata`,content:"**Возвращает:** `array{path: string, file: string, link: string, hash: string, alt: string, alt_name: string, required: bool}` — |null Метаданные или null."},{heading:`deployabsolutepath`,content:`Возвращает абсолютный путь развёртывания из поля file манифеста (от ROOT\\_DIR).`},{heading:`deployabsolutepath`,content:`**С версии:** 200.4.0`},{heading:`normalizemanifestfiles`,content:`Извлекает секцию files из манифеста или фильтрует плоский массив.`},{heading:`normalizemanifestfiles`,content:`**С версии:** 173.3.0`},{heading:`normalizemanifestfiles`,content:"**Возвращает:** `array<string, array<string, mixed>>` — Карта path => metadata."},{heading:`writemanifest`,content:`Записывает локальный JSON-манифест на диск.`},{heading:`writemanifest`,content:`**С версии:** 173.3.0`},{heading:`readmanifest`,content:`Читает локальный JSON-манифест assets.json.`},{heading:`readmanifest`,content:`**С версии:** 173.3.0`},{heading:`readmanifest`,content:"**Возвращает:** `array<string,` — mixed> Декодированный манифест или пустой массив."},{heading:`fetchremotemanifest`,content:`Загружает и декодирует удалённый JSON-манифест.`},{heading:`fetchremotemanifest`,content:`**С версии:** 173.3.0`},{heading:`fetchremotemanifest`,content:`**Параметры:**`},{heading:`fetchremotemanifest`,content:"`$remoteUrl` — URL assets.json."},{heading:`fetchremotemanifest`,content:"**Возвращает:** `array<string,` — mixed>|null Манифест или null при ошибке."},{heading:`downloadassetfile`,content:`Скачивает один файл ассета по link/alt из метаданных.`},{heading:`downloadassetfile`,content:`**С версии:** 173.3.0`},{heading:`downloadassetfile`,content:`**Параметры:**`},{heading:`downloadassetfile`,content:"`$manifestKey` — Ключ /assets/... ."},{heading:`downloadassetfile`,content:"**Возвращает:** `bool` — true при успешной записи файла."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`scan`,content:`scan()`},{id:`compare`,content:`compare()`},{id:`comparereport`,content:`compareReport()`},{id:`downloadall`,content:`downloadAll()`},{id:`downloadmissing`,content:`downloadMissing()`},{id:`run`,content:`run()`},{id:`filemetadata`,content:`fileMetadata()`},{id:`deployabsolutepath`,content:`deployAbsolutePath()`},{id:`normalizemanifestfiles`,content:`normalizeManifestFiles()`},{id:`writemanifest`,content:`writeManifest()`},{id:`readmanifest`,content:`readManifest()`},{id:`fetchremotemanifest`,content:`fetchRemoteManifest()`},{id:`downloadassetfile`,content:`downloadAssetFile()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#scan`,title:(0,n.jsx)(n.Fragment,{children:`scan()`})},{depth:3,url:`#compare`,title:(0,n.jsx)(n.Fragment,{children:`compare()`})},{depth:3,url:`#comparereport`,title:(0,n.jsx)(n.Fragment,{children:`compareReport()`})},{depth:3,url:`#downloadall`,title:(0,n.jsx)(n.Fragment,{children:`downloadAll()`})},{depth:3,url:`#downloadmissing`,title:(0,n.jsx)(n.Fragment,{children:`downloadMissing()`})},{depth:3,url:`#run`,title:(0,n.jsx)(n.Fragment,{children:`run()`})},{depth:3,url:`#filemetadata`,title:(0,n.jsx)(n.Fragment,{children:`fileMetadata()`})},{depth:3,url:`#deployabsolutepath`,title:(0,n.jsx)(n.Fragment,{children:`deployAbsolutePath()`})},{depth:3,url:`#normalizemanifestfiles`,title:(0,n.jsx)(n.Fragment,{children:`normalizeManifestFiles()`})},{depth:3,url:`#writemanifest`,title:(0,n.jsx)(n.Fragment,{children:`writeManifest()`})},{depth:3,url:`#readmanifest`,title:(0,n.jsx)(n.Fragment,{children:`readManifest()`})},{depth:3,url:`#fetchremotemanifest`,title:(0,n.jsx)(n.Fragment,{children:`fetchRemoteManifest()`})},{depth:3,url:`#downloadassetfile`,title:(0,n.jsx)(n.Fragment,{children:`downloadAssetFile()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Сканирует публичные ассеты, сравнивает с удалённым манифестом и загружает недостающие файлы.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_scan`,children:`scan()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_compare`,children:`compare()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_compareReport`,children:`compareReport()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_downloadAll`,children:`downloadAll()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_downloadMissing`,children:`downloadMissing()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_run`,children:`run()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fileMetadata`,children:`fileMetadata()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_deployAbsolutePath`,children:`deployAbsolutePath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalizeManifestFiles`,children:`normalizeManifestFiles()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeManifest`,children:`writeManifest()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_readManifest`,children:`readManifest()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_fetchRemoteManifest`,children:`fetchRemoteManifest()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_downloadAssetFile`,children:`downloadAssetFile()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/AssetsCheckerService.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsxs)(t.p,{children:[`Принимает `,(0,n.jsx)(t.code,{children:`$manifestPath`}),`: Путь к assets.json или null для Paths::config()..`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$manifestPath`}),` — Путь к assets.json или null для Paths::config().`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_scan`}),`
`,(0,n.jsx)(t.h3,{id:`scan`,children:`scan()`}),`
`,(0,n.jsx)(t.p,{children:`Сканирует локальные файлы по ключам удалённого манифеста и записывает локальный MD5-манифест.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Манифест file => metadata.`]}),`
`,(0,n.jsx)(`span`,{id:`method_compare`}),`
`,(0,n.jsx)(t.h3,{id:`compare`,children:`compare()`}),`
`,(0,n.jsx)(t.p,{children:`Сравнивает локальный манифест с удалённым по hash.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$remoteUrl`}),` — URL удалённого assets.json.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{missing: string[], outdated: string[], ok: string[]}`}),` — Списки путей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_compareReport`}),`
`,(0,n.jsx)(t.h3,{id:`comparereport`,children:`compareReport()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует расширенный отчёт сравнения с метаданными файлов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$remoteUrl`}),` — URL удалённого assets.json.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{`}),` —`]}),`
`,(0,n.jsx)(`span`,{id:`method_downloadAll`}),`
`,(0,n.jsx)(t.h3,{id:`downloadall`,children:`downloadAll()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает все файлы из удалённого манифеста.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$remoteUrl`}),` — URL удалённого assets.json.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Число успешно загруженных файлов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_downloadMissing`}),`
`,(0,n.jsx)(t.h3,{id:`downloadmissing`,children:`downloadMissing()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает только missing и outdated файлы из diff.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Число успешно загруженных файлов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_run`}),`
`,(0,n.jsx)(t.h3,{id:`run`,children:`run()`}),`
`,(0,n.jsx)(t.p,{children:`Выполняет полный цикл: scan → compare → downloadMissing.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Ключи scan, compare, downloaded.`]}),`
`,(0,n.jsx)(`span`,{id:`method_fileMetadata`}),`
`,(0,n.jsx)(t.h3,{id:`filemetadata`,children:`fileMetadata()`}),`
`,(0,n.jsx)(t.p,{children:`Формирует метаданные одного файла для манифеста.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$absolutePath`}),` — Абсолютный путь к файлу на диске.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{path: string, file: string, link: string, hash: string, alt: string, alt_name: string, required: bool}`}),` — |null Метаданные или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_deployAbsolutePath`}),`
`,(0,n.jsx)(t.h3,{id:`deployabsolutepath`,children:`deployAbsolutePath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь развёртывания из поля file манифеста (от ROOT_DIR).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeManifestFiles`}),`
`,(0,n.jsx)(t.h3,{id:`normalizemanifestfiles`,children:`normalizeManifestFiles()`}),`
`,(0,n.jsx)(t.p,{children:`Извлекает секцию files из манифеста или фильтрует плоский массив.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, array<string, mixed>>`}),` — Карта path => metadata.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeManifest`}),`
`,(0,n.jsx)(t.h3,{id:`writemanifest`,children:`writeManifest()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает локальный JSON-манифест на диск.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_readManifest`}),`
`,(0,n.jsx)(t.h3,{id:`readmanifest`,children:`readManifest()`}),`
`,(0,n.jsx)(t.p,{children:`Читает локальный JSON-манифест assets.json.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Декодированный манифест или пустой массив.`]}),`
`,(0,n.jsx)(`span`,{id:`method_fetchRemoteManifest`}),`
`,(0,n.jsx)(t.h3,{id:`fetchremotemanifest`,children:`fetchRemoteManifest()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает и декодирует удалённый JSON-манифест.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$remoteUrl`}),` — URL assets.json.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed>|null Манифест или null при ошибке.`]}),`
`,(0,n.jsx)(`span`,{id:`method_downloadAssetFile`}),`
`,(0,n.jsx)(t.h3,{id:`downloadassetfile`,children:`downloadAssetFile()`}),`
`,(0,n.jsx)(t.p,{children:`Скачивает один файл ассета по link/alt из метаданных.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$manifestKey`}),` — Ключ /assets/... .`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при успешной записи файла.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};