import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`TagNormalizer`,description:`Разбор списка тегов: запятая, точка с запятой, без дублей.`,version:`200.3.1`},i=new Date(1789634365e3),a=`

**Описание:** Режет сырую строку, сжимает пробелы, отбрасывает повторы без учёта регистра, сохраняет исходный регистр первого вхождения.

**Namespace:** \`DevCraft\\Modules\\TagsAdd\\Services\`

**С версии:** 200.3.1

## Методы [#методы]

### \`parse(string $raw): array\` [#parsestring-raw-array]

Возвращает \`list<string>\`. Разделители: \`,\` и \`;\`.

### \`toCsv(array $tags): string\` [#tocsvarray-tags-string]

Склеивает список через запятую без пробела.

### \`missing(array $existing, array $proposed): array\` [#missingarray-existing-array-proposed-array]

Теги из \`$proposed\`, которых ещё нет в \`$existing\` (сравнение в нижнем регистре).
`,o={contents:[{heading:void 0,content:`**Описание:** Режет сырую строку, сжимает пробелы, отбрасывает повторы без учёта регистра, сохраняет исходный регистр первого вхождения.`},{heading:void 0,content:"**Namespace:** `DevCraft\\Modules\\TagsAdd\\Services`"},{heading:void 0,content:`**С версии:** 200.3.1`},{heading:`parsestring-raw-array`,content:"Возвращает `list<string>`. Разделители: `,` и `;`."},{heading:`tocsvarray-tags-string`,content:`Склеивает список через запятую без пробела.`},{heading:`missingarray-existing-array-proposed-array`,content:"Теги из `$proposed`, которых ещё нет в `$existing` (сравнение в нижнем регистре)."}],headings:[{id:`методы`,content:`Методы`},{id:`parsestring-raw-array`,content:"`parse(string $raw): array`"},{id:`tocsvarray-tags-string`,content:"`toCsv(array $tags): string`"},{id:`missingarray-existing-array-proposed-array`,content:"`missing(array $existing, array $proposed): array`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#parsestring-raw-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parse(string $raw): array`})})},{depth:3,url:`#tocsvarray-tags-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toCsv(array $tags): string`})})},{depth:3,url:`#missingarray-existing-array-proposed-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`missing(array $existing, array $proposed): array`})})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Режет сырую строку, сжимает пробелы, отбрасывает повторы без учёта регистра, сохраняет исходный регистр первого вхождения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\TagsAdd\\Services`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.3.1`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`parsestring-raw-array`,children:(0,n.jsx)(t.code,{children:`parse(string $raw): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает `,(0,n.jsx)(t.code,{children:`list<string>`}),`. Разделители: `,(0,n.jsx)(t.code,{children:`,`}),` и `,(0,n.jsx)(t.code,{children:`;`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`tocsvarray-tags-string`,children:(0,n.jsx)(t.code,{children:`toCsv(array $tags): string`})}),`
`,(0,n.jsx)(t.p,{children:`Склеивает список через запятую без пробела.`}),`
`,(0,n.jsx)(t.h3,{id:`missingarray-existing-array-proposed-array`,children:(0,n.jsx)(t.code,{children:`missing(array $existing, array $proposed): array`})}),`
`,(0,n.jsxs)(t.p,{children:[`Теги из `,(0,n.jsx)(t.code,{children:`$proposed`}),`, которых ещё нет в `,(0,n.jsx)(t.code,{children:`$existing`}),` (сравнение в нижнем регистре).`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};