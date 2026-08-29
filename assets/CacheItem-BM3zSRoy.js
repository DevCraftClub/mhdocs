import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`CacheItem`,description:`PSR-6 CacheItemInterface для FileCachePool.`,version:`1.1.0`},i=new Date(1788011088e3),a=`

**Описание:** Элемент кэша для [FileCachePool](./FileCachePool). Реализует \`Psr\\Cache\\CacheItemInterface\`.

**Namespace:** \`Devcraft\\Cache\`

**С версии:** 1.1.0

**См. также:**

* [FileCachePool](./FileCachePool)
* [Гайд: файловый PSR-6 кэш](../../guides/file_cache)

## Методы [#методы]

### \`getKey(): string\` [#getkey-string]

**Возвращает:** \`string\` — ключ item.

### \`get(): mixed\` [#get-mixed]

**Описание:** Значение при hit; иначе \`null\`.

### \`isHit(): bool\` [#ishit-bool]

**Возвращает:** \`bool\`

### \`set(mixed $value): static\` [#setmixed-value-static]

**Описание:** Устанавливает значение; возвращает \`$this\` для fluent-цепочки.

### \`expiresAt(?DateTimeInterface $expiration): static\` [#expiresatdatetimeinterface-expiration-static]

**Описание:** Абсолютный expiry; \`null\` — без истечения. Сбрасывает «default expiry» pool.

### \`expiresAfter(int|DateInterval|null $time): static\` [#expiresafterintdateintervalnull-time-static]

**Описание:** Относительный TTL. \`null\` или \`<= 0\` — без истечения.

**Пример:**

\`\`\`php
$item = $pool->getItem('cfg/flags');
$item->set(['debug' => false])->expiresAfter(600);
$pool->save($item);
\`\`\`
`,o={contents:[{heading:void 0,content:"**Описание:** Элемент кэша для FileCachePool. Реализует `Psr\\Cache\\CacheItemInterface`."},{heading:void 0,content:"**Namespace:** `Devcraft\\Cache`"},{heading:void 0,content:`**С версии:** 1.1.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`FileCachePool`},{heading:void 0,content:`Гайд: файловый PSR-6 кэш`},{heading:`getkey-string`,content:"**Возвращает:** `string` — ключ item."},{heading:`get-mixed`,content:"**Описание:** Значение при hit; иначе `null`."},{heading:`ishit-bool`,content:"**Возвращает:** `bool`"},{heading:`setmixed-value-static`,content:"**Описание:** Устанавливает значение; возвращает `$this` для fluent-цепочки."},{heading:`expiresatdatetimeinterface-expiration-static`,content:"**Описание:** Абсолютный expiry; `null` — без истечения. Сбрасывает «default expiry» pool."},{heading:`expiresafterintdateintervalnull-time-static`,content:"**Описание:** Относительный TTL. `null` или `<= 0` — без истечения."},{heading:`expiresafterintdateintervalnull-time-static`,content:`**Пример:**`}],headings:[{id:`методы`,content:`Методы`},{id:`getkey-string`,content:"`getKey(): string`"},{id:`get-mixed`,content:"`get(): mixed`"},{id:`ishit-bool`,content:"`isHit(): bool`"},{id:`setmixed-value-static`,content:"`set(mixed $value): static`"},{id:`expiresatdatetimeinterface-expiration-static`,content:"`expiresAt(?DateTimeInterface $expiration): static`"},{id:`expiresafterintdateintervalnull-time-static`,content:"`expiresAfter(int|DateInterval|null $time): static`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getkey-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKey(): string`})})},{depth:3,url:`#get-mixed`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`get(): mixed`})})},{depth:3,url:`#ishit-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isHit(): bool`})})},{depth:3,url:`#setmixed-value-static`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`set(mixed $value): static`})})},{depth:3,url:`#expiresatdatetimeinterface-expiration-static`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`expiresAt(?DateTimeInterface $expiration): static`})})},{depth:3,url:`#expiresafterintdateintervalnull-time-static`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`expiresAfter(int|DateInterval|null $time): static`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Элемент кэша для `,(0,n.jsx)(t.a,{href:`./FileCachePool`,children:`FileCachePool`}),`. Реализует `,(0,n.jsx)(t.code,{children:`Psr\\Cache\\CacheItemInterface`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Cache`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.1.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./FileCachePool`,children:`FileCachePool`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/file_cache`,children:`Гайд: файловый PSR-6 кэш`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`getkey-string`,children:(0,n.jsx)(t.code,{children:`getKey(): string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — ключ item.`]}),`
`,(0,n.jsx)(t.h3,{id:`get-mixed`,children:(0,n.jsx)(t.code,{children:`get(): mixed`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Значение при hit; иначе `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`ishit-bool`,children:(0,n.jsx)(t.code,{children:`isHit(): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.h3,{id:`setmixed-value-static`,children:(0,n.jsx)(t.code,{children:`set(mixed $value): static`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Устанавливает значение; возвращает `,(0,n.jsx)(t.code,{children:`$this`}),` для fluent-цепочки.`]}),`
`,(0,n.jsx)(t.h3,{id:`expiresatdatetimeinterface-expiration-static`,children:(0,n.jsx)(t.code,{children:`expiresAt(?DateTimeInterface $expiration): static`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Абсолютный expiry; `,(0,n.jsx)(t.code,{children:`null`}),` — без истечения. Сбрасывает «default expiry» pool.`]}),`
`,(0,n.jsx)(t.h3,{id:`expiresafterintdateintervalnull-time-static`,children:(0,n.jsx)(t.code,{children:`expiresAfter(int|DateInterval|null $time): static`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Относительный TTL. `,(0,n.jsx)(t.code,{children:`null`}),` или `,(0,n.jsx)(t.code,{children:`<= 0`}),` — без истечения.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'cfg/flags'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`set`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'debug'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`])`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`expiresAfter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`600`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`save`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($item);`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};