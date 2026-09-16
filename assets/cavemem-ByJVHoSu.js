import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`cavemem`,description:`Локальная память агента (SQLite): remember / recall / supersede / history / forget.`},i=new Date(1789554716e3),a=`

**cavemem** — слой памяти из [JuliusBrussee/caveman/mem](https://github.com/JuliusBrussee/caveman/tree/main/mem): факты живут в локальном SQLite; recall ранжирует (BM25) и сжимает ответы через движок Caveman. Каждый сжатый hit несёт \`recovery_handle\`.

<Callout type="info">
  **cavemem** — локальные факты (remember/recall). Не путать с [memory](memory) (entity graph MCP), [mem0](mem0) (platform/SDK) и [codebase-memory-mcp](codebase-memory-mcp) (граф **кода**).
</Callout>

## Ссылки [#ссылки]

* Upstream: [caveman/mem](https://github.com/JuliusBrussee/caveman/tree/main/mem)
* Skill/речь и compress: [Caveman](caveman)

## CLI [#cli]

Сборка бинарника — в README upstream (\`go build -o cavemem ./mem/cmd/cavemem\`). Команды:

\`\`\`bash
./cavemem remember "AJAX модулей DevCraft только через devcraft/ajax.php"
./cavemem recall   "куда слать AJAX DevCraft"
./cavemem recall   "контекст миграции" 5 0   # token_budget 0 = без лимита
./cavemem supersede mem_xxxxxxxx "новое значение факта"
./cavemem history   mem_yyyyyyyy
./cavemem forget   mem_xxxxxxxx
./cavemem          # MCP server over stdio
\`\`\`

По умолчанию recall пакует до \\~2000 inferred tokens; \`token_budget: 0\` снимает потолок.

## MCP [#mcp]

\`\`\`json
{
	"mcpServers": {
		"cavemem": {
			"command": "cavemem"
		}
	}
}
\`\`\`

Клиенты JS/Python (\`cavemem\` npm/py) шлют текст в бинарник через stdin; при необходимости задайте \`CAVEMEM_BIN\`.

## Пример на DevCraft [#пример-на-devcraft]

\`\`\`bash
./cavemem remember "DevCraft: AJAX только через devcraft/ajax.php (+ mod); не создавать engine/ajax/{mod}.php"
./cavemem recall "как делать AJAX в новом модуле"
\`\`\`

Перед генерацией модуля — \`recall\` по «manifest / settings.schema / слои»; после жёсткого решения команды — \`remember\` или \`supersede\`.

## См. также [#см-также]

* [Caveman](caveman)
* [memory (MCP)](memory)
* [mem0](mem0)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:"**cavemem** — слой памяти из JuliusBrussee/caveman/mem: факты живут в локальном SQLite; recall ранжирует (BM25) и сжимает ответы через движок Caveman. Каждый сжатый hit несёт `recovery_handle`."},{heading:void 0,content:`**cavemem** — локальные факты (remember/recall). Не путать с memory (entity graph MCP), mem0 (platform/SDK) и codebase-memory-mcp (граф **кода**).`},{heading:`ссылки`,content:`Upstream: caveman/mem`},{heading:`ссылки`,content:`Skill/речь и compress: Caveman`},{heading:`cli`,content:"Сборка бинарника — в README upstream (`go build -o cavemem ./mem/cmd/cavemem`). Команды:"},{heading:`cli`,content:"По умолчанию recall пакует до \\~2000 inferred tokens; `token_budget: 0` снимает потолок."},{heading:`mcp`,content:"Клиенты JS/Python (`cavemem` npm/py) шлют текст в бинарник через stdin; при необходимости задайте `CAVEMEM_BIN`."},{heading:`пример-на-devcraft`,content:"Перед генерацией модуля — `recall` по «manifest / settings.schema / слои»; после жёсткого решения команды — `remember` или `supersede`."},{heading:`см-также`,content:`Caveman`},{heading:`см-также`,content:`memory (MCP)`},{heading:`см-также`,content:`mem0`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`cli`,content:`CLI`},{id:`mcp`,content:`MCP`},{id:`пример-на-devcraft`,content:`Пример на DevCraft`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#cli`,title:(0,n.jsx)(n.Fragment,{children:`CLI`})},{depth:2,url:`#mcp`,title:(0,n.jsx)(n.Fragment,{children:`MCP`})},{depth:2,url:`#пример-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Пример на DevCraft`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`cavemem`}),` — слой памяти из `,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman/tree/main/mem`,children:`JuliusBrussee/caveman/mem`}),`: факты живут в локальном SQLite; recall ранжирует (BM25) и сжимает ответы через движок Caveman. Каждый сжатый hit несёт `,(0,n.jsx)(t.code,{children:`recovery_handle`}),`.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`cavemem`}),` — локальные факты (remember/recall). Не путать с `,(0,n.jsx)(t.a,{href:`memory`,children:`memory`}),` (entity graph MCP), `,(0,n.jsx)(t.a,{href:`mem0`,children:`mem0`}),` (platform/SDK) и `,(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`}),` (граф `,(0,n.jsx)(t.strong,{children:`кода`}),`).`]})}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Upstream: `,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman/tree/main/mem`,children:`caveman/mem`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Skill/речь и compress: `,(0,n.jsx)(t.a,{href:`caveman`,children:`Caveman`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`cli`,children:`CLI`}),`
`,(0,n.jsxs)(t.p,{children:[`Сборка бинарника — в README upstream (`,(0,n.jsx)(t.code,{children:`go build -o cavemem ./mem/cmd/cavemem`}),`). Команды:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` remember`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "AJAX модулей DevCraft только через devcraft/ajax.php"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` recall`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`   "куда слать AJAX DevCraft"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` recall`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`   "контекст миграции"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 5`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`   # token_budget 0 = без лимита`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` supersede`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` mem_xxxxxxxx`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "новое значение факта"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` history`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`   mem_yyyyyyyy`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` forget`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`   mem_xxxxxxxx`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`          # MCP server over stdio`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию recall пакует до ~2000 inferred tokens; `,(0,n.jsx)(t.code,{children:`token_budget: 0`}),` снимает потолок.`]}),`
`,(0,n.jsx)(t.h2,{id:`mcp`,children:`MCP`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	"mcpServers"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		"cavemem"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"command"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"cavemem"`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Клиенты JS/Python (`,(0,n.jsx)(t.code,{children:`cavemem`}),` npm/py) шлют текст в бинарник через stdin; при необходимости задайте `,(0,n.jsx)(t.code,{children:`CAVEMEM_BIN`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`пример-на-devcraft`,children:`Пример на DevCraft`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` remember`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "DevCraft: AJAX только через devcraft/ajax.php (+ mod); не создавать engine/ajax/{mod}.php"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./cavemem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` recall`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "как делать AJAX в новом модуле"`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Перед генерацией модуля — `,(0,n.jsx)(t.code,{children:`recall`}),` по «manifest / settings.schema / слои»; после жёсткого решения команды — `,(0,n.jsx)(t.code,{children:`remember`}),` или `,(0,n.jsx)(t.code,{children:`supersede`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`caveman`,children:`Caveman`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`memory`,children:`memory (MCP)`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`mem0`,children:`mem0`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};