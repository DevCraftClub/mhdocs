import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`mem0`,description:`Setup MEM0_API_KEY, Cursor/CLI auth, onboard; add_memory / search_memories; отличие от cavemem.`},i=new Date(1789560091e3),a=`

**mem0** ([mem0ai/mem0](https://github.com/mem0ai/mem0)) — production memory layer для агентов: Python/Node SDK, cloud platform или self-host. В Cursor MCP часто фигурирует как \`user-mem0\` с tools \`add_memory\`, \`search_memories\`, \`get_memories\` и др.

<Callout type="info">
  **mem0** ≠ [cavemem](cavemem) (локальный SQLite сессий) ≠ [memory](memory) (локальный entity graph) ≠ [codebase-memory-mcp](codebase-memory-mcp) (граф **кода**).
</Callout>

## Setup / auth (MUST) [#setup--auth-must]

1. Ключ: [app.mem0.ai/dashboard/api-keys](https://app.mem0.ai/dashboard/api-keys) → \`MEM0_API_KEY\` вида \`m0-…\`.
2. **Cursor Desktop:** environment рядом с prompt → Local → gear → \`MEM0_API_KEY=m0-…\`. Либо переустановить mem0-плагин — IDE запросит ключ (keychain).
3. **CLI / shell:** \`export MEM0_API_KEY=m0-…\` в \`~/.zshrc\` / \`~/.bashrc\`.
4. После появления ключа — skill &#x2A;*\`mem0:onboard\`** (если доступен в окружении).
5. Статус хука \`auth=none\` → **не** вызывать write/search так, будто память работает; сначала setup.
6. **Не коммитить** API key в git / docs / \`.env\` репозитория.

## Ссылки [#ссылки]

* Репозиторий: [mem0ai/mem0](https://github.com/mem0ai/mem0)
* Upstream docs: [docs.mem0.ai](https://docs.mem0.ai/)
* Контекст DevCraft: [development\\_help/mcp/mem0](../dev/dle/devcraft_admin/200.4.0/development_help/mcp/mem0)

## Установка [#установка]

Hosted API + MCP-плагин IDE — типичный путь. Self-host / SDK — по README upstream (\`mem0ai\` / \`@mem0/oss\`). Без ключа tools бесполезны.

## Использование [#использование]

| Операция                         | Назначение                              |
| -------------------------------- | --------------------------------------- |
| \`add_memory\`                     | Записать предпочтение / решение команды |
| \`search_memories\`                | Найти факты перед задачей               |
| \`get_memories\` / update / delete | Жизненный цикл записей                  |

**Когда:** кросс-сессионные предпочтения (язык PHPDoc, запрет \`devcraft/bin\`, стек DLE 20 + DevCraft 200.4) на нескольких машинах через platform.

**Не нужно:** секреты; пароли; дублировать граф кода (туда — Codebase Memory / CRG / graphify).

## Пример на DevCraft [#пример-на-devcraft]

\`add_memory\`: «Команда DevCraft: UI/PHPDoc/ошибки на русском; AJAX только через \`devcraft/ajax.php\`; нет standalone CLI». Перед миграцией модуля — \`search_memories\` по «DevCraft conventions».

## См. также [#см-также]

* [cavemem](cavemem)
* [memory (MCP)](memory)
* [Справочник ИИ](../dev/dle/devcraft_admin/200.4.0/guides/ai_tools)
* Cursor-rule: \`.cursor/rules/mem0.mdc\` (host)
`,o={contents:[{heading:void 0,content:"**mem0** (mem0ai/mem0) — production memory layer для агентов: Python/Node SDK, cloud platform или self-host. В Cursor MCP часто фигурирует как `user-mem0` с tools `add_memory`, `search_memories`, `get_memories` и др."},{heading:void 0,content:`**mem0** ≠ cavemem (локальный SQLite сессий) ≠ memory (локальный entity graph) ≠ codebase-memory-mcp (граф **кода**).`},{heading:`setup--auth-must`,content:"Ключ: app.mem0.ai/dashboard/api-keys → `MEM0_API_KEY` вида `m0-…`."},{heading:`setup--auth-must`,content:"**Cursor Desktop:** environment рядом с prompt → Local → gear → `MEM0_API_KEY=m0-…`. Либо переустановить mem0-плагин — IDE запросит ключ (keychain)."},{heading:`setup--auth-must`,content:"**CLI / shell:** `export MEM0_API_KEY=m0-…` в `~/.zshrc` / `~/.bashrc`."},{heading:`setup--auth-must`,content:"После появления ключа — skill &#x2A;*`mem0:onboard`** (если доступен в окружении)."},{heading:`setup--auth-must`,content:"Статус хука `auth=none` → **не** вызывать write/search так, будто память работает; сначала setup."},{heading:`setup--auth-must`,content:"**Не коммитить** API key в git / docs / `.env` репозитория."},{heading:`ссылки`,content:`Репозиторий: mem0ai/mem0`},{heading:`ссылки`,content:`Upstream docs: docs.mem0.ai`},{heading:`ссылки`,content:`Контекст DevCraft: development\\_help/mcp/mem0`},{heading:`установка`,content:"Hosted API + MCP-плагин IDE — типичный путь. Self-host / SDK — по README upstream (`mem0ai` / `@mem0/oss`). Без ключа tools бесполезны."},{heading:`использование`,content:`Операция`},{heading:`использование`,content:`Назначение`},{heading:`использование`,content:"`add_memory`"},{heading:`использование`,content:`Записать предпочтение / решение команды`},{heading:`использование`,content:"`search_memories`"},{heading:`использование`,content:`Найти факты перед задачей`},{heading:`использование`,content:"`get_memories` / update / delete"},{heading:`использование`,content:`Жизненный цикл записей`},{heading:`использование`,content:"**Когда:** кросс-сессионные предпочтения (язык PHPDoc, запрет `devcraft/bin`, стек DLE 20 + DevCraft 200.4) на нескольких машинах через platform."},{heading:`использование`,content:`**Не нужно:** секреты; пароли; дублировать граф кода (туда — Codebase Memory / CRG / graphify).`},{heading:`пример-на-devcraft`,content:"`add_memory`: «Команда DevCraft: UI/PHPDoc/ошибки на русском; AJAX только через `devcraft/ajax.php`; нет standalone CLI». Перед миграцией модуля — `search_memories` по «DevCraft conventions»."},{heading:`см-также`,content:`cavemem`},{heading:`см-также`,content:`memory (MCP)`},{heading:`см-также`,content:`Справочник ИИ`},{heading:`см-также`,content:"Cursor-rule: `.cursor/rules/mem0.mdc` (host)"}],headings:[{id:`setup--auth-must`,content:`Setup / auth (MUST)`},{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`пример-на-devcraft`,content:`Пример на DevCraft`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#setup--auth-must`,title:(0,n.jsx)(n.Fragment,{children:`Setup / auth (MUST)`})},{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#пример-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Пример на DevCraft`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`mem0`}),` (`,(0,n.jsx)(t.a,{href:`https://github.com/mem0ai/mem0`,children:`mem0ai/mem0`}),`) — production memory layer для агентов: Python/Node SDK, cloud platform или self-host. В Cursor MCP часто фигурирует как `,(0,n.jsx)(t.code,{children:`user-mem0`}),` с tools `,(0,n.jsx)(t.code,{children:`add_memory`}),`, `,(0,n.jsx)(t.code,{children:`search_memories`}),`, `,(0,n.jsx)(t.code,{children:`get_memories`}),` и др.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`mem0`}),` ≠ `,(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`}),` (локальный SQLite сессий) ≠ `,(0,n.jsx)(t.a,{href:`memory`,children:`memory`}),` (локальный entity graph) ≠ `,(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`}),` (граф `,(0,n.jsx)(t.strong,{children:`кода`}),`).`]})}),`
`,(0,n.jsx)(t.h2,{id:`setup--auth-must`,children:`Setup / auth (MUST)`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Ключ: `,(0,n.jsx)(t.a,{href:`https://app.mem0.ai/dashboard/api-keys`,children:`app.mem0.ai/dashboard/api-keys`}),` → `,(0,n.jsx)(t.code,{children:`MEM0_API_KEY`}),` вида `,(0,n.jsx)(t.code,{children:`m0-…`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Cursor Desktop:`}),` environment рядом с prompt → Local → gear → `,(0,n.jsx)(t.code,{children:`MEM0_API_KEY=m0-…`}),`. Либо переустановить mem0-плагин — IDE запросит ключ (keychain).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`CLI / shell:`}),` `,(0,n.jsx)(t.code,{children:`export MEM0_API_KEY=m0-…`}),` в `,(0,n.jsx)(t.code,{children:`~/.zshrc`}),` / `,(0,n.jsx)(t.code,{children:`~/.bashrc`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`После появления ключа — skill `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`mem0:onboard`})}),` (если доступен в окружении).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Статус хука `,(0,n.jsx)(t.code,{children:`auth=none`}),` → `,(0,n.jsx)(t.strong,{children:`не`}),` вызывать write/search так, будто память работает; сначала setup.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Не коммитить`}),` API key в git / docs / `,(0,n.jsx)(t.code,{children:`.env`}),` репозитория.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/mem0ai/mem0`,children:`mem0ai/mem0`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Upstream docs: `,(0,n.jsx)(t.a,{href:`https://docs.mem0.ai/`,children:`docs.mem0.ai`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Контекст DevCraft: `,(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/200.4.0/development_help/mcp/mem0`,children:`development_help/mcp/mem0`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsxs)(t.p,{children:[`Hosted API + MCP-плагин IDE — типичный путь. Self-host / SDK — по README upstream (`,(0,n.jsx)(t.code,{children:`mem0ai`}),` / `,(0,n.jsx)(t.code,{children:`@mem0/oss`}),`). Без ключа tools бесполезны.`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Операция`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`add_memory`})}),(0,n.jsx)(t.td,{children:`Записать предпочтение / решение команды`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`search_memories`})}),(0,n.jsx)(t.td,{children:`Найти факты перед задачей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`get_memories`}),` / update / delete`]}),(0,n.jsx)(t.td,{children:`Жизненный цикл записей`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда:`}),` кросс-сессионные предпочтения (язык PHPDoc, запрет `,(0,n.jsx)(t.code,{children:`devcraft/bin`}),`, стек DLE 20 + DevCraft 200.4) на нескольких машинах через platform.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` секреты; пароли; дублировать граф кода (туда — Codebase Memory / CRG / graphify).`]}),`
`,(0,n.jsx)(t.h2,{id:`пример-на-devcraft`,children:`Пример на DevCraft`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`add_memory`}),`: «Команда DevCraft: UI/PHPDoc/ошибки на русском; AJAX только через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`; нет standalone CLI». Перед миграцией модуля — `,(0,n.jsx)(t.code,{children:`search_memories`}),` по «DevCraft conventions».`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`memory`,children:`memory (MCP)`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/200.4.0/guides/ai_tools`,children:`Справочник ИИ`})}),`
`,(0,n.jsxs)(t.li,{children:[`Cursor-rule: `,(0,n.jsx)(t.code,{children:`.cursor/rules/mem0.mdc`}),` (host)`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};