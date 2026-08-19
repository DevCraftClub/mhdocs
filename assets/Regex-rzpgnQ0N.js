import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Regex`,description:`ValidationRule: совпадение строки с регулярным выражением.`,version:`1.0.1`},i=new Date(1787141927e3),a=`

**Описание:** Атрибут валидации строки по PCRE-паттерну. Реализует \`ValidationRule\`. Repeatable.

**Namespace:** \`Devcraft\\Attributes\`

**Target:** \`Attribute::TARGET_PROPERTY | Attribute::IS_REPEATABLE\`

**Implements:** [ValidationRule](../interfaces/ValidationRule)

**С версии:** 1.0.0

**См. также:**

* [Гайд: валидация](../../guides/validation)

## Методы [#методы]

### \`__construct(string $pattern)\` [#__constructstring-pattern]

**Параметры:**

| Параметр   | Тип      | Описание       |
| ---------- | -------- | -------------- |
| \`$pattern\` | \`string\` | PCRE-выражение |

**Исключения:**

* \`InvalidArgumentException\` — паттерн невалиден (\`preg_match\` вернул \`false\`)

### \`validate(mixed $value): ?string\` [#validatemixed-value-string]

**Описание:** \`null\` проходит. Не string → \`must be a string\`. Нет совпадения → \`must match <pattern>\`.

**Параметры:**

| Параметр | Тип     | Описание             |
| -------- | ------- | -------------------- |
| \`$value\` | \`mixed\` | Проверяемое значение |

**Возвращает:** \`string\\|null\`

\`\`\`php
#[Regex('/^[0-9a-f-]{36}$/i')]
public string $id;
\`\`\`
`,o={contents:[{heading:void 0,content:"**Описание:** Атрибут валидации строки по PCRE-паттерну. Реализует `ValidationRule`. Repeatable."},{heading:void 0,content:"**Namespace:** `Devcraft\\Attributes`"},{heading:void 0,content:"**Target:** `Attribute::TARGET_PROPERTY | Attribute::IS_REPEATABLE`"},{heading:void 0,content:`**Implements:** ValidationRule`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`Гайд: валидация`},{heading:`__constructstring-pattern`,content:`**Параметры:**`},{heading:`__constructstring-pattern`,content:`Параметр`},{heading:`__constructstring-pattern`,content:`Тип`},{heading:`__constructstring-pattern`,content:`Описание`},{heading:`__constructstring-pattern`,content:"`$pattern`"},{heading:`__constructstring-pattern`,content:"`string`"},{heading:`__constructstring-pattern`,content:`PCRE-выражение`},{heading:`__constructstring-pattern`,content:`**Исключения:**`},{heading:`__constructstring-pattern`,content:"`InvalidArgumentException` — паттерн невалиден (`preg_match` вернул `false`)"},{heading:`validatemixed-value-string`,content:"**Описание:** `null` проходит. Не string → `must be a string`. Нет совпадения → `must match <pattern>`."},{heading:`validatemixed-value-string`,content:`**Параметры:**`},{heading:`validatemixed-value-string`,content:`Параметр`},{heading:`validatemixed-value-string`,content:`Тип`},{heading:`validatemixed-value-string`,content:`Описание`},{heading:`validatemixed-value-string`,content:"`$value`"},{heading:`validatemixed-value-string`,content:"`mixed`"},{heading:`validatemixed-value-string`,content:`Проверяемое значение`},{heading:`validatemixed-value-string`,content:"**Возвращает:** `string\\|null`"}],headings:[{id:`методы`,content:`Методы`},{id:`__constructstring-pattern`,content:"`__construct(string $pattern)`"},{id:`validatemixed-value-string`,content:"`validate(mixed $value): ?string`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__constructstring-pattern`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(string $pattern)`})})},{depth:3,url:`#validatemixed-value-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate(mixed $value): ?string`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Атрибут валидации строки по PCRE-паттерну. Реализует `,(0,n.jsx)(t.code,{children:`ValidationRule`}),`. Repeatable.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Attributes`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Target:`}),` `,(0,n.jsx)(t.code,{children:`Attribute::TARGET_PROPERTY | Attribute::IS_REPEATABLE`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Implements:`}),` `,(0,n.jsx)(t.a,{href:`../interfaces/ValidationRule`,children:`ValidationRule`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/validation`,children:`Гайд: валидация`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__constructstring-pattern`,children:(0,n.jsx)(t.code,{children:`__construct(string $pattern)`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$pattern`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`PCRE-выражение`})]})})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`InvalidArgumentException`}),` — паттерн невалиден (`,(0,n.jsx)(t.code,{children:`preg_match`}),` вернул `,(0,n.jsx)(t.code,{children:`false`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`validatemixed-value-string`,children:(0,n.jsx)(t.code,{children:`validate(mixed $value): ?string`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` `,(0,n.jsx)(t.code,{children:`null`}),` проходит. Не string → `,(0,n.jsx)(t.code,{children:`must be a string`}),`. Нет совпадения → `,(0,n.jsx)(t.code,{children:`must match <pattern>`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$value`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`mixed`})}),(0,n.jsx)(t.td,{children:`Проверяемое значение`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string\\|null`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Regex`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`^`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:`[0-9a-f-]{36}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`$`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`/i'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $id;`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};