import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Sequential Thinking`,description:`Official MCP server-sequential-thinking — пошаговые мысли с revision и branch.`},i=new Date(1789322808e3),a=`

**Sequential Thinking** — официальный MCP [@modelcontextprotocol/server-sequential-thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking): tool \`sequential_thinking\` с полями thought / nextThoughtNeeded / revision / branch. Нужен, когда дизайн нельзя уложить в один ответ без ветвлений.

## Ссылки [#ссылки]

* Upstream: [servers/src/sequentialthinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)
* Пакет: \`@modelcontextprotocol/server-sequential-thinking\`

## Установка [#установка]

\`\`\`bash
npx -y @modelcontextprotocol/server-sequential-thinking
\`\`\`

Пример MCP:

\`\`\`json
{
	"mcpServers": {
		"sequential-thinking": {
			"command": "npx",
			"args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
		}
	}
}
\`\`\`

## Использование [#использование]

Агент вызывает \`sequential_thinking\` итеративно: фиксирует шаг, при необходимости помечает revision или branch, пока \`nextThoughtNeeded\` не станет false.

**Когда полезно:** спроектировать \`manifest.php\` + menu + \`settings.schema\` + слои Service/Repository **до** генерации файлов модуля.

**Не нужно:** тривиальные однострочные правки; вместо графа кода — для этого [graphify](graphify) / [codebase-memory-mcp](codebase-memory-mcp).

## Пример на DevCraft [#пример-на-devcraft]

Задача «новый канал Notifications»: шаги — сущности Channel/Message → где settings (основной mod vs сателлит) → AJAX handlers → публичные tpl → чеклист файлов. Только после цепочки — писать код по [php\\_devcraft\\_standards](../dev/dle/devcraft_admin/guides/php_devcraft_standards).

## См. также [#см-также]

* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
* [Создание модуля](../dev/dle/devcraft_admin/guides/create_module)
* [Caveman](caveman)
`,o={contents:[{heading:void 0,content:"**Sequential Thinking** — официальный MCP @modelcontextprotocol/server-sequential-thinking: tool `sequential_thinking` с полями thought / nextThoughtNeeded / revision / branch. Нужен, когда дизайн нельзя уложить в один ответ без ветвлений."},{heading:`ссылки`,content:`Upstream: servers/src/sequentialthinking`},{heading:`ссылки`,content:"Пакет: `@modelcontextprotocol/server-sequential-thinking`"},{heading:`установка`,content:`Пример MCP:`},{heading:`использование`,content:"Агент вызывает `sequential_thinking` итеративно: фиксирует шаг, при необходимости помечает revision или branch, пока `nextThoughtNeeded` не станет false."},{heading:`использование`,content:"**Когда полезно:** спроектировать `manifest.php` + menu + `settings.schema` + слои Service/Repository **до** генерации файлов модуля."},{heading:`использование`,content:`**Не нужно:** тривиальные однострочные правки; вместо графа кода — для этого graphify / codebase-memory-mcp.`},{heading:`пример-на-devcraft`,content:`Задача «новый канал Notifications»: шаги — сущности Channel/Message → где settings (основной mod vs сателлит) → AJAX handlers → публичные tpl → чеклист файлов. Только после цепочки — писать код по php\\_devcraft\\_standards.`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`},{heading:`см-также`,content:`Создание модуля`},{heading:`см-также`,content:`Caveman`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`пример-на-devcraft`,content:`Пример на DevCraft`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#пример-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Пример на DevCraft`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Sequential Thinking`}),` — официальный MCP `,(0,n.jsx)(t.a,{href:`https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking`,children:`@modelcontextprotocol/server-sequential-thinking`}),`: tool `,(0,n.jsx)(t.code,{children:`sequential_thinking`}),` с полями thought / nextThoughtNeeded / revision / branch. Нужен, когда дизайн нельзя уложить в один ответ без ветвлений.`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Upstream: `,(0,n.jsx)(t.a,{href:`https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking`,children:`servers/src/sequentialthinking`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Пакет: `,(0,n.jsx)(t.code,{children:`@modelcontextprotocol/server-sequential-thinking`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npx`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -y`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` @modelcontextprotocol/server-sequential-thinking`})]})})})}),`
`,(0,n.jsx)(t.p,{children:`Пример MCP:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	"mcpServers"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		"sequential-thinking"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"command"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"npx"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"args"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"-y"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"@modelcontextprotocol/server-sequential-thinking"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.p,{children:[`Агент вызывает `,(0,n.jsx)(t.code,{children:`sequential_thinking`}),` итеративно: фиксирует шаг, при необходимости помечает revision или branch, пока `,(0,n.jsx)(t.code,{children:`nextThoughtNeeded`}),` не станет false.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` спроектировать `,(0,n.jsx)(t.code,{children:`manifest.php`}),` + menu + `,(0,n.jsx)(t.code,{children:`settings.schema`}),` + слои Service/Repository `,(0,n.jsx)(t.strong,{children:`до`}),` генерации файлов модуля.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` тривиальные однострочные правки; вместо графа кода — для этого `,(0,n.jsx)(t.a,{href:`graphify`,children:`graphify`}),` / `,(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`пример-на-devcraft`,children:`Пример на DevCraft`}),`
`,(0,n.jsxs)(t.p,{children:[`Задача «новый канал Notifications»: шаги — сущности Channel/Message → где settings (основной mod vs сателлит) → AJAX handlers → публичные tpl → чеклист файлов. Только после цепочки — писать код по `,(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/php_devcraft_standards`,children:`php_devcraft_standards`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/create_module`,children:`Создание модуля`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`caveman`,children:`Caveman`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};