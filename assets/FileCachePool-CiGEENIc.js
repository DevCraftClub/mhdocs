import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`FileCachePool`,description:`Файловый PSR-6 CacheItemPoolInterface с clearNamespace и ключами-namespace.`,version:`1.1.0`},i=new Date(1788011088e3),a=`

**Описание:** Файловый PSR-6 pool. Ключ может содержать \`/\` как разделитель namespace (расширение сверх reserved-символов PSR-6). На диске: \`{baseDir}/{key}.cache\` с JSON-envelope \`{e, f, v}\`.

**Namespace:** \`Devcraft\\Cache\`

**С версии:** 1.1.0

**См. также:**

* [CacheItem](./CacheItem)
* [InvalidArgument](../exceptions/InvalidArgument)
* [Гайд: файловый PSR-6 кэш](../../guides/file_cache)

## Конструктор [#конструктор]

### \`__construct(string $baseDir, ?int $defaultTtlSeconds = null)\` [#__constructstring-basedir-int-defaultttlseconds--null]

| Параметр             | Тип         | Описание                                                               |
| -------------------- | ----------- | ---------------------------------------------------------------------- |
| \`$baseDir\`           | \`string\`    | Корневой каталог кэша                                                  |
| \`$defaultTtlSeconds\` | \`int\\|null\` | TTL по умолчанию; \`null\` или \`0\` — без истечения. По умолчанию: \`null\` |

## Методы PSR-6 [#методы-psr-6]

### \`getItem(string $key): CacheItemInterface\` [#getitemstring-key-cacheiteminterface]

**Описание:** Возвращает item (hit или miss). Просроченные и битые файлы удаляются.

### \`getItems(array $keys = []): iterable\` [#getitemsarray-keys---iterable]

**Параметры:** \`$keys\` — \`array<string>\`

**Возвращает:** \`iterable<string, CacheItemInterface>\`

### \`hasItem(string $key): bool\` [#hasitemstring-key-bool]

**Возвращает:** \`bool\` — \`true\`, если ключ есть и не истёк.

### \`clear(): bool\` [#clear-bool]

**Описание:** Очищает deferred-очередь и всё содержимое \`$baseDir\`.

### \`deleteItem(string $key): bool\` / \`deleteItems(array $keys): bool\` [#deleteitemstring-key-bool--deleteitemsarray-keys-bool]

**Описание:** Удаляет файл(ы) и пустые родительские каталоги под \`$baseDir\`.

### \`save(CacheItemInterface $item): bool\` [#savecacheiteminterface-item-bool]

**Описание:** Сохраняет только экземпляры [CacheItem](./CacheItem). Если item ещё на default expiry — применяется \`$defaultTtlSeconds\`. Уже истёкший item удаляется.

### \`saveDeferred(CacheItemInterface $item): bool\` / \`commit(): bool\` [#savedeferredcacheiteminterface-item-bool--commit-bool]

**Описание:** Отложенная запись и сброс очереди на диск.

## Расширение DevTools [#расширение-devtools]

### \`clearNamespace(string $prefix): bool\` [#clearnamespacestring-prefix-bool]

**Описание:** Удаляет все ключи с префиксом \`{prefix}/\` (и сам каталог). Пустой \`$prefix\` эквивалентен \`clear()\`. Не входит в PSR-6.

**Пример:**

\`\`\`php
$pool->clearNamespace('Translation');
\`\`\`

### \`getBaseDir(): string\` [#getbasedir-string]

**Возвращает:** \`string\` — нормализованный корневой путь.

## Примеры использования [#примеры-использования]

### Базовый пример [#базовый-пример]

\`\`\`php
use Devcraft\\Cache\\FileCachePool;

$pool = new FileCachePool('/path/to/cache', defaultTtlSeconds: 3600);

$item = $pool->getItem('Translation/dict');
$item->set(['hello' => 'world']);
$pool->save($item);

$hit = $pool->getItem('Translation/dict');
if ($hit->isHit()) {
    $value = $hit->get();
}

$pool->clearNamespace('Translation'); // DevTools extension (not in PSR-6)
\`\`\`
`,o={contents:[{heading:void 0,content:"**Описание:** Файловый PSR-6 pool. Ключ может содержать `/` как разделитель namespace (расширение сверх reserved-символов PSR-6). На диске: `{baseDir}/{key}.cache` с JSON-envelope `{e, f, v}`."},{heading:void 0,content:"**Namespace:** `Devcraft\\Cache`"},{heading:void 0,content:`**С версии:** 1.1.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`CacheItem`},{heading:void 0,content:`InvalidArgument`},{heading:void 0,content:`Гайд: файловый PSR-6 кэш`},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:`Параметр`},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:`Тип`},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:`Описание`},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:"`$baseDir`"},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:"`string`"},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:`Корневой каталог кэша`},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:"`$defaultTtlSeconds`"},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:"`int\\|null`"},{heading:`__constructstring-basedir-int-defaultttlseconds--null`,content:"TTL по умолчанию; `null` или `0` — без истечения. По умолчанию: `null`"},{heading:`getitemstring-key-cacheiteminterface`,content:`**Описание:** Возвращает item (hit или miss). Просроченные и битые файлы удаляются.`},{heading:`getitemsarray-keys---iterable`,content:"**Параметры:** `$keys` — `array<string>`"},{heading:`getitemsarray-keys---iterable`,content:"**Возвращает:** `iterable<string, CacheItemInterface>`"},{heading:`hasitemstring-key-bool`,content:"**Возвращает:** `bool` — `true`, если ключ есть и не истёк."},{heading:`clear-bool`,content:"**Описание:** Очищает deferred-очередь и всё содержимое `$baseDir`."},{heading:`deleteitemstring-key-bool--deleteitemsarray-keys-bool`,content:"**Описание:** Удаляет файл(ы) и пустые родительские каталоги под `$baseDir`."},{heading:`savecacheiteminterface-item-bool`,content:"**Описание:** Сохраняет только экземпляры CacheItem. Если item ещё на default expiry — применяется `$defaultTtlSeconds`. Уже истёкший item удаляется."},{heading:`savedeferredcacheiteminterface-item-bool--commit-bool`,content:`**Описание:** Отложенная запись и сброс очереди на диск.`},{heading:`clearnamespacestring-prefix-bool`,content:"**Описание:** Удаляет все ключи с префиксом `{prefix}/` (и сам каталог). Пустой `$prefix` эквивалентен `clear()`. Не входит в PSR-6."},{heading:`clearnamespacestring-prefix-bool`,content:`**Пример:**`},{heading:`getbasedir-string`,content:"**Возвращает:** `string` — нормализованный корневой путь."}],headings:[{id:`конструктор`,content:`Конструктор`},{id:`__constructstring-basedir-int-defaultttlseconds--null`,content:"`__construct(string $baseDir, ?int $defaultTtlSeconds = null)`"},{id:`методы-psr-6`,content:`Методы PSR-6`},{id:`getitemstring-key-cacheiteminterface`,content:"`getItem(string $key): CacheItemInterface`"},{id:`getitemsarray-keys---iterable`,content:"`getItems(array $keys = []): iterable`"},{id:`hasitemstring-key-bool`,content:"`hasItem(string $key): bool`"},{id:`clear-bool`,content:"`clear(): bool`"},{id:`deleteitemstring-key-bool--deleteitemsarray-keys-bool`,content:"`deleteItem(string $key): bool` / `deleteItems(array $keys): bool`"},{id:`savecacheiteminterface-item-bool`,content:"`save(CacheItemInterface $item): bool`"},{id:`savedeferredcacheiteminterface-item-bool--commit-bool`,content:"`saveDeferred(CacheItemInterface $item): bool` / `commit(): bool`"},{id:`расширение-devtools`,content:`Расширение DevTools`},{id:`clearnamespacestring-prefix-bool`,content:"`clearNamespace(string $prefix): bool`"},{id:`getbasedir-string`,content:"`getBaseDir(): string`"},{id:`примеры-использования`,content:`Примеры использования`},{id:`базовый-пример`,content:`Базовый пример`}]},s=[{depth:2,url:`#конструктор`,title:(0,n.jsx)(n.Fragment,{children:`Конструктор`})},{depth:3,url:`#__constructstring-basedir-int-defaultttlseconds--null`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(string $baseDir, ?int $defaultTtlSeconds = null)`})})},{depth:2,url:`#методы-psr-6`,title:(0,n.jsx)(n.Fragment,{children:`Методы PSR-6`})},{depth:3,url:`#getitemstring-key-cacheiteminterface`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getItem(string $key): CacheItemInterface`})})},{depth:3,url:`#getitemsarray-keys---iterable`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getItems(array $keys = []): iterable`})})},{depth:3,url:`#hasitemstring-key-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasItem(string $key): bool`})})},{depth:3,url:`#clear-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`clear(): bool`})})},{depth:3,url:`#deleteitemstring-key-bool--deleteitemsarray-keys-bool`,title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(`code`,{children:`deleteItem(string $key): bool`}),` / `,(0,n.jsx)(`code`,{children:`deleteItems(array $keys): bool`})]})},{depth:3,url:`#savecacheiteminterface-item-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`save(CacheItemInterface $item): bool`})})},{depth:3,url:`#savedeferredcacheiteminterface-item-bool--commit-bool`,title:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(`code`,{children:`saveDeferred(CacheItemInterface $item): bool`}),` / `,(0,n.jsx)(`code`,{children:`commit(): bool`})]})},{depth:2,url:`#расширение-devtools`,title:(0,n.jsx)(n.Fragment,{children:`Расширение DevTools`})},{depth:3,url:`#clearnamespacestring-prefix-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`clearNamespace(string $prefix): bool`})})},{depth:3,url:`#getbasedir-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBaseDir(): string`})})},{depth:2,url:`#примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`Примеры использования`})},{depth:3,url:`#базовый-пример`,title:(0,n.jsx)(n.Fragment,{children:`Базовый пример`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Файловый PSR-6 pool. Ключ может содержать `,(0,n.jsx)(t.code,{children:`/`}),` как разделитель namespace (расширение сверх reserved-символов PSR-6). На диске: `,(0,n.jsx)(t.code,{children:`{baseDir}/{key}.cache`}),` с JSON-envelope `,(0,n.jsx)(t.code,{children:`{e, f, v}`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Cache`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.1.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheItem`,children:`CacheItem`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../exceptions/InvalidArgument`,children:`InvalidArgument`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/file_cache`,children:`Гайд: файловый PSR-6 кэш`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`конструктор`,children:`Конструктор`}),`
`,(0,n.jsx)(t.h3,{id:`__constructstring-basedir-int-defaultttlseconds--null`,children:(0,n.jsx)(t.code,{children:`__construct(string $baseDir, ?int $defaultTtlSeconds = null)`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$baseDir`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Корневой каталог кэша`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$defaultTtlSeconds`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int|null`})}),(0,n.jsxs)(t.td,{children:[`TTL по умолчанию; `,(0,n.jsx)(t.code,{children:`null`}),` или `,(0,n.jsx)(t.code,{children:`0`}),` — без истечения. По умолчанию: `,(0,n.jsx)(t.code,{children:`null`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`методы-psr-6`,children:`Методы PSR-6`}),`
`,(0,n.jsx)(t.h3,{id:`getitemstring-key-cacheiteminterface`,children:(0,n.jsx)(t.code,{children:`getItem(string $key): CacheItemInterface`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает item (hit или miss). Просроченные и битые файлы удаляются.`]}),`
`,(0,n.jsx)(t.h3,{id:`getitemsarray-keys---iterable`,children:(0,n.jsx)(t.code,{children:`getItems(array $keys = []): iterable`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры:`}),` `,(0,n.jsx)(t.code,{children:`$keys`}),` — `,(0,n.jsx)(t.code,{children:`array<string>`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`iterable<string, CacheItemInterface>`})]}),`
`,(0,n.jsx)(t.h3,{id:`hasitemstring-key-bool`,children:(0,n.jsx)(t.code,{children:`hasItem(string $key): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — `,(0,n.jsx)(t.code,{children:`true`}),`, если ключ есть и не истёк.`]}),`
`,(0,n.jsx)(t.h3,{id:`clear-bool`,children:(0,n.jsx)(t.code,{children:`clear(): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Очищает deferred-очередь и всё содержимое `,(0,n.jsx)(t.code,{children:`$baseDir`}),`.`]}),`
`,(0,n.jsxs)(t.h3,{id:`deleteitemstring-key-bool--deleteitemsarray-keys-bool`,children:[(0,n.jsx)(t.code,{children:`deleteItem(string $key): bool`}),` / `,(0,n.jsx)(t.code,{children:`deleteItems(array $keys): bool`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет файл(ы) и пустые родительские каталоги под `,(0,n.jsx)(t.code,{children:`$baseDir`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`savecacheiteminterface-item-bool`,children:(0,n.jsx)(t.code,{children:`save(CacheItemInterface $item): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сохраняет только экземпляры `,(0,n.jsx)(t.a,{href:`./CacheItem`,children:`CacheItem`}),`. Если item ещё на default expiry — применяется `,(0,n.jsx)(t.code,{children:`$defaultTtlSeconds`}),`. Уже истёкший item удаляется.`]}),`
`,(0,n.jsxs)(t.h3,{id:`savedeferredcacheiteminterface-item-bool--commit-bool`,children:[(0,n.jsx)(t.code,{children:`saveDeferred(CacheItemInterface $item): bool`}),` / `,(0,n.jsx)(t.code,{children:`commit(): bool`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Отложенная запись и сброс очереди на диск.`]}),`
`,(0,n.jsx)(t.h2,{id:`расширение-devtools`,children:`Расширение DevTools`}),`
`,(0,n.jsx)(t.h3,{id:`clearnamespacestring-prefix-bool`,children:(0,n.jsx)(t.code,{children:`clearNamespace(string $prefix): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет все ключи с префиксом `,(0,n.jsx)(t.code,{children:`{prefix}/`}),` (и сам каталог). Пустой `,(0,n.jsx)(t.code,{children:`$prefix`}),` эквивалентен `,(0,n.jsx)(t.code,{children:`clear()`}),`. Не входит в PSR-6.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearNamespace`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`getbasedir-string`,children:(0,n.jsx)(t.code,{children:`getBaseDir(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — нормализованный корневой путь.`]}),`
`,(0,n.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,n.jsx)(t.h3,{id:`базовый-пример`,children:`Базовый пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Cache\\FileCachePool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FileCachePool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/path/to/cache'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`defaultTtlSeconds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`3600`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation/dict'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`set`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'hello'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'world'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`save`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($item);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$hit `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation/dict'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($hit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isHit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $value `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $hit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearNamespace`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// DevTools extension (not in PSR-6)`})]})]})})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};