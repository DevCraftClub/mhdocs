import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SuggestService`,description:`Создание предложения тегов с публичной страницы новости.`,version:`200.3.1`},i=new Date(1789634365e3),a=`

**Описание:** Проверяет права гостей, наличие новости и непустой список тегов, пишет [TagSuggestion](./TagSuggestion), при необходимости шлёт ЛС админу и автору.

**Namespace:** \`DevCraft\\Modules\\TagsAdd\\Services\`

**С версии:** 200.3.1

**См. также:** [ajax](./ajax), [MailTemplateService](./MailTemplateService)

Вызов с сайта: обработчик \`SuggestHandler\` (\`method=suggest\`, \`controller=public\`).

## Методы [#методы]

### \`suggest(int $newsId, string $rawTags): TagSuggestion\` [#suggestint-newsid-string-rawtags-tagsuggestion]

**Описание:** Создаёт запись очереди.

**Параметры:**

| Параметр   | Тип      | Описание                                   |
| ---------- | -------- | ------------------------------------------ |
| \`$newsId\`  | \`int\`    | ID новости                                 |
| \`$rawTags\` | \`string\` | Сырой список (запятая или точка с запятой) |

**Возвращает:** [TagSuggestion](./TagSuggestion)

**Исключения:**

* \`\\RuntimeException\` — гости запрещены, нет новости, пустые теги

Конфиг читается как \`DataManager::getConfig('tags_add', null, 'tagsadd')\` и нормализуется \`ConfigNormalizer\`.
`,o={contents:[{heading:void 0,content:`**Описание:** Проверяет права гостей, наличие новости и непустой список тегов, пишет TagSuggestion, при необходимости шлёт ЛС админу и автору.`},{heading:void 0,content:"**Namespace:** `DevCraft\\Modules\\TagsAdd\\Services`"},{heading:void 0,content:`**С версии:** 200.3.1`},{heading:void 0,content:`**См. также:** ajax, MailTemplateService`},{heading:void 0,content:"Вызов с сайта: обработчик `SuggestHandler` (`method=suggest`, `controller=public`)."},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`**Описание:** Создаёт запись очереди.`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`**Параметры:**`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`Параметр`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`Тип`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`Описание`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`$newsId`"},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`int`"},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`ID новости`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`$rawTags`"},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`string`"},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`Сырой список (запятая или точка с запятой)`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`**Возвращает:** TagSuggestion`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:`**Исключения:**`},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`\\RuntimeException` — гости запрещены, нет новости, пустые теги"},{heading:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"Конфиг читается как `DataManager::getConfig('tags_add', null, 'tagsadd')` и нормализуется `ConfigNormalizer`."}],headings:[{id:`методы`,content:`Методы`},{id:`suggestint-newsid-string-rawtags-tagsuggestion`,content:"`suggest(int $newsId, string $rawTags): TagSuggestion`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#suggestint-newsid-string-rawtags-tagsuggestion`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`suggest(int $newsId, string $rawTags): TagSuggestion`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет права гостей, наличие новости и непустой список тегов, пишет `,(0,n.jsx)(t.a,{href:`./TagSuggestion`,children:`TagSuggestion`}),`, при необходимости шлёт ЛС админу и автору.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\TagsAdd\\Services`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.3.1`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`См. также:`}),` `,(0,n.jsx)(t.a,{href:`./ajax`,children:`ajax`}),`, `,(0,n.jsx)(t.a,{href:`./MailTemplateService`,children:`MailTemplateService`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Вызов с сайта: обработчик `,(0,n.jsx)(t.code,{children:`SuggestHandler`}),` (`,(0,n.jsx)(t.code,{children:`method=suggest`}),`, `,(0,n.jsx)(t.code,{children:`controller=public`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`suggestint-newsid-string-rawtags-tagsuggestion`,children:(0,n.jsx)(t.code,{children:`suggest(int $newsId, string $rawTags): TagSuggestion`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создаёт запись очереди.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$newsId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`ID новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$rawTags`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`Сырой список (запятая или точка с запятой)`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`./TagSuggestion`,children:`TagSuggestion`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\RuntimeException`}),` — гости запрещены, нет новости, пустые теги`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Конфиг читается как `,(0,n.jsx)(t.code,{children:`DataManager::getConfig('tags_add', null, 'tagsadd')`}),` и нормализуется `,(0,n.jsx)(t.code,{children:`ConfigNormalizer`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};