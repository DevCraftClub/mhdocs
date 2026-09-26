import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`История изменений`,description:`История изменений DLE Faker: 200.1.5 и раньше.`,version:`200.1.4`},i=new Date(1790413881e3),a=`

Список в коде: \`changelog.data.php\`. В панели: \`?mod=dle_faker&action=changelog\`.

## 200.1.5 — 2026-09-20 [#20015--2026-09-20]

### Изменено [#изменено]

* Генерация новостей, категорий и пользователей — через \`DcApi\` в DevCraft Admin (подготовленные запросы, без ручного экранирования SQL).
* Новость: один вызов \`DcApi::news()->create()\` (post, extras и категории вместе); журнал админки — схема \`admin_logs\`.
* Нужен DevCraft Admin **≥ 200.4.1**.
* \`install.xml\`: иконка \`Public/icon.png\`, группы \`1,2\`, notice — страница плагина и документация.
* Фильтр шаблонов через \`FilterSchemaBuilder\`.

### Удалено [#удалено]

* Хвост \`engine/inc/maharder/\` из пакета.

### Исправлено [#исправлено]

* Текст новости больше не экранируется дважды (\`safesql\` убран с пути записи).

## 200.1.4 (2026-07-16) [#20014-2026-07-16]

* Миграция на DevCraft Admin / DLE 20.0
* Медиа-библиотека, плейлисты video/audio, multi-random для галерей
* INSERT \`post_extras\` без \`allow_rss_turbo\`; SQL-ошибки → JSON
* Multipart upload через ядро DevCraft

## 180.1.3 [#18013]

Последний legacy-релиз MHAdmin.
`,o={contents:[{heading:void 0,content:"Список в коде: `changelog.data.php`. В панели: `?mod=dle_faker&action=changelog`."},{heading:`изменено`,content:"Генерация новостей, категорий и пользователей — через `DcApi` в DevCraft Admin (подготовленные запросы, без ручного экранирования SQL)."},{heading:`изменено`,content:"Новость: один вызов `DcApi::news()->create()` (post, extras и категории вместе); журнал админки — схема `admin_logs`."},{heading:`изменено`,content:`Нужен DevCraft Admin **≥ 200.4.1**.`},{heading:`изменено`,content:"`install.xml`: иконка `Public/icon.png`, группы `1,2`, notice — страница плагина и документация."},{heading:`изменено`,content:"Фильтр шаблонов через `FilterSchemaBuilder`."},{heading:`удалено`,content:"Хвост `engine/inc/maharder/` из пакета."},{heading:`исправлено`,content:"Текст новости больше не экранируется дважды (`safesql` убран с пути записи)."},{heading:`20014-2026-07-16`,content:`Миграция на DevCraft Admin / DLE 20.0`},{heading:`20014-2026-07-16`,content:`Медиа-библиотека, плейлисты video/audio, multi-random для галерей`},{heading:`20014-2026-07-16`,content:"INSERT `post_extras` без `allow_rss_turbo`; SQL-ошибки → JSON"},{heading:`20014-2026-07-16`,content:`Multipart upload через ядро DevCraft`},{heading:`18013`,content:`Последний legacy-релиз MHAdmin.`}],headings:[{id:`20015--2026-09-20`,content:`200.1.5 — 2026-09-20`},{id:`изменено`,content:`Изменено`},{id:`удалено`,content:`Удалено`},{id:`исправлено`,content:`Исправлено`},{id:`20014-2026-07-16`,content:`200.1.4 (2026-07-16)`},{id:`18013`,content:`180.1.3`}]},s=[{depth:2,url:`#20015--2026-09-20`,title:(0,n.jsx)(n.Fragment,{children:`200.1.5 — 2026-09-20`})},{depth:3,url:`#изменено`,title:(0,n.jsx)(n.Fragment,{children:`Изменено`})},{depth:3,url:`#удалено`,title:(0,n.jsx)(n.Fragment,{children:`Удалено`})},{depth:3,url:`#исправлено`,title:(0,n.jsx)(n.Fragment,{children:`Исправлено`})},{depth:2,url:`#20014-2026-07-16`,title:(0,n.jsx)(n.Fragment,{children:`200.1.4 (2026-07-16)`})},{depth:2,url:`#18013`,title:(0,n.jsx)(n.Fragment,{children:`180.1.3`})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Список в коде: `,(0,n.jsx)(t.code,{children:`changelog.data.php`}),`. В панели: `,(0,n.jsx)(t.code,{children:`?mod=dle_faker&action=changelog`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`20015--2026-09-20`,children:`200.1.5 — 2026-09-20`}),`
`,(0,n.jsx)(t.h3,{id:`изменено`,children:`Изменено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Генерация новостей, категорий и пользователей — через `,(0,n.jsx)(t.code,{children:`DcApi`}),` в DevCraft Admin (подготовленные запросы, без ручного экранирования SQL).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Новость: один вызов `,(0,n.jsx)(t.code,{children:`DcApi::news()->create()`}),` (post, extras и категории вместе); журнал админки — схема `,(0,n.jsx)(t.code,{children:`admin_logs`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Нужен DevCraft Admin `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`install.xml`}),`: иконка `,(0,n.jsx)(t.code,{children:`Public/icon.png`}),`, группы `,(0,n.jsx)(t.code,{children:`1,2`}),`, notice — страница плагина и документация.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Фильтр шаблонов через `,(0,n.jsx)(t.code,{children:`FilterSchemaBuilder`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`удалено`,children:`Удалено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Хвост `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),` из пакета.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`исправлено`,children:`Исправлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Текст новости больше не экранируется дважды (`,(0,n.jsx)(t.code,{children:`safesql`}),` убран с пути записи).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`20014-2026-07-16`,children:`200.1.4 (2026-07-16)`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Миграция на DevCraft Admin / DLE 20.0`}),`
`,(0,n.jsx)(t.li,{children:`Медиа-библиотека, плейлисты video/audio, multi-random для галерей`}),`
`,(0,n.jsxs)(t.li,{children:[`INSERT `,(0,n.jsx)(t.code,{children:`post_extras`}),` без `,(0,n.jsx)(t.code,{children:`allow_rss_turbo`}),`; SQL-ошибки → JSON`]}),`
`,(0,n.jsx)(t.li,{children:`Multipart upload через ядро DevCraft`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`18013`,children:`180.1.3`}),`
`,(0,n.jsx)(t.p,{children:`Последний legacy-релиз MHAdmin.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};