import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Graphify`,description:`Установка и использование Graphify — граф знаний по кодовой базе для ИИ-агентов.`},i=new Date(1785402405e3),a=`

**Graphify** строит по проекту граф связей (классы, вызовы, документы) и отвечает на вопросы через \`query\` / \`path\` / \`explain\`, вместо того чтобы читать весь репозиторий целиком.

## Ссылки [#ссылки]

* Сайт: [graphify.com](https://graphify.com/)
* Репозиторий: [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify)

## Установка [#установка]

\`\`\`bash
uv tool install graphifyy
graphify install
\`\`\`

Пакет на PyPI называется \`graphifyy\`, команда в терминале — \`graphify\`.

## Использование [#использование]

В корне проекта:

\`\`\`bash
graphify .
graphify query "как устроен AJAX в DevCraft"
graphify path "ClassA" "ClassB"
graphify explain "Application"
graphify update .
\`\`\`

Результаты обычно в каталоге \`graphify-out/\`.

**Когда полезно:** разобраться в архитектуре и связях файлов.

**Не нужно:** читать целиком \`GRAPH_REPORT.md\` вместо точечных запросов; после правок только в \`devcraft/\` граф host DLE обычно **не** обновляют — \`graphify update .\` имеет смысл после изменений \`engine/\` / шаблонов хоста.

## См. также [#см-также]

* [Code Review Graph](code-review-graph)
* [Codebase Memory MCP](codebase-memory-mcp)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:"**Graphify** строит по проекту граф связей (классы, вызовы, документы) и отвечает на вопросы через `query` / `path` / `explain`, вместо того чтобы читать весь репозиторий целиком."},{heading:`ссылки`,content:`Сайт: graphify.com`},{heading:`ссылки`,content:`Репозиторий: Graphify-Labs/graphify`},{heading:`установка`,content:"Пакет на PyPI называется `graphifyy`, команда в терминале — `graphify`."},{heading:`использование`,content:`В корне проекта:`},{heading:`использование`,content:"Результаты обычно в каталоге `graphify-out/`."},{heading:`использование`,content:`**Когда полезно:** разобраться в архитектуре и связях файлов.`},{heading:`использование`,content:"**Не нужно:** читать целиком `GRAPH_REPORT.md` вместо точечных запросов; после правок только в `devcraft/` граф host DLE обычно **не** обновляют — `graphify update .` имеет смысл после изменений `engine/` / шаблонов хоста."},{heading:`см-также`,content:`Code Review Graph`},{heading:`см-также`,content:`Codebase Memory MCP`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Graphify`}),` строит по проекту граф связей (классы, вызовы, документы) и отвечает на вопросы через `,(0,n.jsx)(t.code,{children:`query`}),` / `,(0,n.jsx)(t.code,{children:`path`}),` / `,(0,n.jsx)(t.code,{children:`explain`}),`, вместо того чтобы читать весь репозиторий целиком.`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Сайт: `,(0,n.jsx)(t.a,{href:`https://graphify.com/`,children:`graphify.com`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/Graphify-Labs/graphify`,children:`Graphify-Labs/graphify`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`uv`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` tool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` graphifyy`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Пакет на PyPI называется `,(0,n.jsx)(t.code,{children:`graphifyy`}),`, команда в терминале — `,(0,n.jsx)(t.code,{children:`graphify`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsx)(t.p,{children:`В корне проекта:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` .`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "как устроен AJAX в DevCraft"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` path`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "ClassA"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "ClassB"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` explain`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Application"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`graphify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` .`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Результаты обычно в каталоге `,(0,n.jsx)(t.code,{children:`graphify-out/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` разобраться в архитектуре и связях файлов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` читать целиком `,(0,n.jsx)(t.code,{children:`GRAPH_REPORT.md`}),` вместо точечных запросов; после правок только в `,(0,n.jsx)(t.code,{children:`devcraft/`}),` граф host DLE обычно `,(0,n.jsx)(t.strong,{children:`не`}),` обновляют — `,(0,n.jsx)(t.code,{children:`graphify update .`}),` имеет смысл после изменений `,(0,n.jsx)(t.code,{children:`engine/`}),` / шаблонов хоста.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`code-review-graph`,children:`Code Review Graph`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`Codebase Memory MCP`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};