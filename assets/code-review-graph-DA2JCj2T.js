import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Code Review Graph`,description:`Установка и использование code-review-graph — структурный граф кода через MCP.`},i=new Date(1787834766e3),a=`

**code-review-graph** (CRG) разбирает репозиторий через Tree-sitter и отдаёт ИИ-агенту узкий контекст: кто кого вызывает, радиус влияния правки, сообщества модулей. Работает локально через MCP.

## Ссылки [#ссылки]

* Сайт: [code-review-graph.com](https://code-review-graph.com/)
* Репозиторий: [tirth8205/code-review-graph](https://github.com/tirth8205/code-review-graph)

## Установка [#установка]

\`\`\`bash
pip install code-review-graph
code-review-graph install
code-review-graph build
\`\`\`

\`install\` подключает MCP к поддерживаемым редакторам (Cursor, Claude Code и др.). После установки перезапустите редактор.

## Использование [#использование]

В агенте начинайте с минимального контекста, например инструментов вроде \`get_minimal_context\` / \`detail_level=minimal\`, затем при необходимости \`get_impact_radius\`, \`query_graph\`.

**Когда полезно:** review, поиск callers/callees, оценка влияния диффа.

**Не нужно:** широкий grep по всему репо вместо одного-двух запросов к графу.

## См. также [#см-также]

* [Graphify](graphify)
* [Codebase Memory MCP](codebase-memory-mcp)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:`**code-review-graph** (CRG) разбирает репозиторий через Tree-sitter и отдаёт ИИ-агенту узкий контекст: кто кого вызывает, радиус влияния правки, сообщества модулей. Работает локально через MCP.`},{heading:`ссылки`,content:`Сайт: code-review-graph.com`},{heading:`ссылки`,content:`Репозиторий: tirth8205/code-review-graph`},{heading:`установка`,content:"`install` подключает MCP к поддерживаемым редакторам (Cursor, Claude Code и др.). После установки перезапустите редактор."},{heading:`использование`,content:"В агенте начинайте с минимального контекста, например инструментов вроде `get_minimal_context` / `detail_level=minimal`, затем при необходимости `get_impact_radius`, `query_graph`."},{heading:`использование`,content:`**Когда полезно:** review, поиск callers/callees, оценка влияния диффа.`},{heading:`использование`,content:`**Не нужно:** широкий grep по всему репо вместо одного-двух запросов к графу.`},{heading:`см-также`,content:`Graphify`},{heading:`см-также`,content:`Codebase Memory MCP`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`code-review-graph`}),` (CRG) разбирает репозиторий через Tree-sitter и отдаёт ИИ-агенту узкий контекст: кто кого вызывает, радиус влияния правки, сообщества модулей. Работает локально через MCP.`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Сайт: `,(0,n.jsx)(t.a,{href:`https://code-review-graph.com/`,children:`code-review-graph.com`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/tirth8205/code-review-graph`,children:`tirth8205/code-review-graph`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pip`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` code-review-graph`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`code-review-graph`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`code-review-graph`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` build`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`install`}),` подключает MCP к поддерживаемым редакторам (Cursor, Claude Code и др.). После установки перезапустите редактор.`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.p,{children:[`В агенте начинайте с минимального контекста, например инструментов вроде `,(0,n.jsx)(t.code,{children:`get_minimal_context`}),` / `,(0,n.jsx)(t.code,{children:`detail_level=minimal`}),`, затем при необходимости `,(0,n.jsx)(t.code,{children:`get_impact_radius`}),`, `,(0,n.jsx)(t.code,{children:`query_graph`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` review, поиск callers/callees, оценка влияния диффа.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` широкий grep по всему репо вместо одного-двух запросов к графу.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`graphify`,children:`Graphify`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`Codebase Memory MCP`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};