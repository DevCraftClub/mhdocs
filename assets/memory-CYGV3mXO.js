import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Memory (MCP)`,description:`Official MCP server-memory — локальный knowledge graph: entities, relations, observations.`},i=new Date(1789411081e3),a=`

**Memory MCP** — официальный [@modelcontextprotocol/server-memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) (npm \`@modelcontextprotocol/server-memory\`): локальный knowledge graph из entities / relations / observations. Tools вроде \`create_entities\`, \`search_nodes\`, \`read_graph\` и др. Опционально \`MEMORY_FILE_PATH\` для файла хранилища.

<Callout type="info">
  Это **не** [cavemem](cavemem) (remember/recall SQLite), **не** [mem0](mem0) (platform/SDK) и **не** [codebase-memory-mcp](codebase-memory-mcp) (граф исходников).
</Callout>

## Ссылки [#ссылки]

* Upstream: [servers/src/memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)
* Пакет: \`@modelcontextprotocol/server-memory\`

## Установка [#установка]

\`\`\`bash
npx -y @modelcontextprotocol/server-memory
\`\`\`

\`\`\`json
{
	"mcpServers": {
		"memory": {
			"command": "npx",
			"args": ["-y", "@modelcontextprotocol/server-memory"],
			"env": {
				"MEMORY_FILE_PATH": "/path/to/memory.json"
			}
		}
	}
}
\`\`\`

\`MEMORY_FILE_PATH\` необязателен — без него сервер использует путь по умолчанию upstream.

## Использование [#использование]

Сохранить соглашения команды как entities/observations; перед новым CRUD — \`search_nodes\` / \`read_graph\`, чтобы не противоречить уже зафиксированным правилам.

**Когда полезно:** устойчивые факты DevCraft (русский PHPDoc, \`DLEPlugins::Check\`, слои Service/Repository), которые должны жить между сессиями на машине разработчика.

**Не нужно:** индексировать весь репозиторий — для кода берите graphify / codebase-memory.

## Пример на DevCraft [#пример-на-devcraft]

Entity \`DevCraftConvention\` с observations: «PHPDoc на русском», «include через DLEPlugins::Check», «AJAX только \`devcraft/ajax.php\`». Перед новым модулем — \`search_nodes\` по «DevCraft» / «AJAX».

## См. также [#см-также]

* [cavemem](cavemem)
* [mem0](mem0)
* [codebase-memory-mcp](codebase-memory-mcp)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:"**Memory MCP** — официальный @modelcontextprotocol/server-memory (npm `@modelcontextprotocol/server-memory`): локальный knowledge graph из entities / relations / observations. Tools вроде `create_entities`, `search_nodes`, `read_graph` и др. Опционально `MEMORY_FILE_PATH` для файла хранилища."},{heading:void 0,content:`Это **не** cavemem (remember/recall SQLite), **не** mem0 (platform/SDK) и **не** codebase-memory-mcp (граф исходников).`},{heading:`ссылки`,content:`Upstream: servers/src/memory`},{heading:`ссылки`,content:"Пакет: `@modelcontextprotocol/server-memory`"},{heading:`установка`,content:"`MEMORY_FILE_PATH` необязателен — без него сервер использует путь по умолчанию upstream."},{heading:`использование`,content:"Сохранить соглашения команды как entities/observations; перед новым CRUD — `search_nodes` / `read_graph`, чтобы не противоречить уже зафиксированным правилам."},{heading:`использование`,content:"**Когда полезно:** устойчивые факты DevCraft (русский PHPDoc, `DLEPlugins::Check`, слои Service/Repository), которые должны жить между сессиями на машине разработчика."},{heading:`использование`,content:`**Не нужно:** индексировать весь репозиторий — для кода берите graphify / codebase-memory.`},{heading:`пример-на-devcraft`,content:"Entity `DevCraftConvention` с observations: «PHPDoc на русском», «include через DLEPlugins::Check», «AJAX только `devcraft/ajax.php`». Перед новым модулем — `search_nodes` по «DevCraft» / «AJAX»."},{heading:`см-также`,content:`cavemem`},{heading:`см-также`,content:`mem0`},{heading:`см-также`,content:`codebase-memory-mcp`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`пример-на-devcraft`,content:`Пример на DevCraft`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#пример-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Пример на DevCraft`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Memory MCP`}),` — официальный `,(0,n.jsx)(t.a,{href:`https://github.com/modelcontextprotocol/servers/tree/main/src/memory`,children:`@modelcontextprotocol/server-memory`}),` (npm `,(0,n.jsx)(t.code,{children:`@modelcontextprotocol/server-memory`}),`): локальный knowledge graph из entities / relations / observations. Tools вроде `,(0,n.jsx)(t.code,{children:`create_entities`}),`, `,(0,n.jsx)(t.code,{children:`search_nodes`}),`, `,(0,n.jsx)(t.code,{children:`read_graph`}),` и др. Опционально `,(0,n.jsx)(t.code,{children:`MEMORY_FILE_PATH`}),` для файла хранилища.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[`Это `,(0,n.jsx)(t.strong,{children:`не`}),` `,(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`}),` (remember/recall SQLite), `,(0,n.jsx)(t.strong,{children:`не`}),` `,(0,n.jsx)(t.a,{href:`mem0`,children:`mem0`}),` (platform/SDK) и `,(0,n.jsx)(t.strong,{children:`не`}),` `,(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`}),` (граф исходников).`]})}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Upstream: `,(0,n.jsx)(t.a,{href:`https://github.com/modelcontextprotocol/servers/tree/main/src/memory`,children:`servers/src/memory`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Пакет: `,(0,n.jsx)(t.code,{children:`@modelcontextprotocol/server-memory`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npx`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -y`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @modelcontextprotocol/server-memory`})]})})})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	"mcpServers"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		"memory"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"command"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"npx"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"args"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"-y"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"@modelcontextprotocol/server-memory"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"env"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`				"MEMORY_FILE_PATH"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"/path/to/memory.json"`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`MEMORY_FILE_PATH`}),` необязателен — без него сервер использует путь по умолчанию upstream.`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.p,{children:[`Сохранить соглашения команды как entities/observations; перед новым CRUD — `,(0,n.jsx)(t.code,{children:`search_nodes`}),` / `,(0,n.jsx)(t.code,{children:`read_graph`}),`, чтобы не противоречить уже зафиксированным правилам.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` устойчивые факты DevCraft (русский PHPDoc, `,(0,n.jsx)(t.code,{children:`DLEPlugins::Check`}),`, слои Service/Repository), которые должны жить между сессиями на машине разработчика.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` индексировать весь репозиторий — для кода берите graphify / codebase-memory.`]}),`
`,(0,n.jsx)(t.h2,{id:`пример-на-devcraft`,children:`Пример на DevCraft`}),`
`,(0,n.jsxs)(t.p,{children:[`Entity `,(0,n.jsx)(t.code,{children:`DevCraftConvention`}),` с observations: «PHPDoc на русском», «include через DLEPlugins::Check», «AJAX только `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`». Перед новым модулем — `,(0,n.jsx)(t.code,{children:`search_nodes`}),` по «DevCraft» / «AJAX».`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`mem0`,children:`mem0`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};