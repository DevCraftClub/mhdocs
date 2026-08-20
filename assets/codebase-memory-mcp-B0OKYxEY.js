import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Codebase Memory MCP`,description:`Установка и использование codebase-memory-mcp — граф памяти по коду для агентов.`},i=new Date(1787223655e3),a=`

**codebase-memory-mcp** индексирует проект в локальный граф и даёт агенту поиск по символам, путям вызовов и изменениям (\`search_graph\`, \`trace_path\`, \`detect_changes\`).

## Ссылки [#ссылки]

* Документация: [deusdata.github.io/codebase-memory-mcp](https://deusdata.github.io/codebase-memory-mcp/)
* Репозиторий: [DeusData/codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp)

## Установка [#установка]

Способ зависит от платформы (бинарник, npm, Homebrew и др.) — актуальные команды в [README](https://github.com/DeusData/codebase-memory-mcp). После установки подключите MCP-сервер в редакторе и проиндексируйте проект.

Пример CLI (имена проектов смотрите через \`list_projects\`):

\`\`\`bash
codebase-memory-mcp cli search_graph --project my-project --name-pattern '.*Handler.*' --label Function
\`\`\`

## Использование [#использование]

Типичный порядок: найти символ (\`search_graph\`) → посмотреть код / путь (\`get_code_snippet\`, \`trace_path\`) → при диффе — \`detect_changes\`.

**Когда полезно:** навигация по большому коду, влияние изменений.

**Не нужно:** полная переиндексация без реальных изменений в репозитории.

## См. также [#см-также]

* [Graphify](graphify)
* [Code Review Graph](code-review-graph)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:"**codebase-memory-mcp** индексирует проект в локальный граф и даёт агенту поиск по символам, путям вызовов и изменениям (`search_graph`, `trace_path`, `detect_changes`)."},{heading:`ссылки`,content:`Документация: deusdata.github.io/codebase-memory-mcp`},{heading:`ссылки`,content:`Репозиторий: DeusData/codebase-memory-mcp`},{heading:`установка`,content:`Способ зависит от платформы (бинарник, npm, Homebrew и др.) — актуальные команды в README. После установки подключите MCP-сервер в редакторе и проиндексируйте проект.`},{heading:`установка`,content:"Пример CLI (имена проектов смотрите через `list_projects`):"},{heading:`использование`,content:"Типичный порядок: найти символ (`search_graph`) → посмотреть код / путь (`get_code_snippet`, `trace_path`) → при диффе — `detect_changes`."},{heading:`использование`,content:`**Когда полезно:** навигация по большому коду, влияние изменений.`},{heading:`использование`,content:`**Не нужно:** полная переиндексация без реальных изменений в репозитории.`},{heading:`см-также`,content:`Graphify`},{heading:`см-также`,content:`Code Review Graph`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`codebase-memory-mcp`}),` индексирует проект в локальный граф и даёт агенту поиск по символам, путям вызовов и изменениям (`,(0,n.jsx)(t.code,{children:`search_graph`}),`, `,(0,n.jsx)(t.code,{children:`trace_path`}),`, `,(0,n.jsx)(t.code,{children:`detect_changes`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Документация: `,(0,n.jsx)(t.a,{href:`https://deusdata.github.io/codebase-memory-mcp/`,children:`deusdata.github.io/codebase-memory-mcp`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/DeusData/codebase-memory-mcp`,children:`DeusData/codebase-memory-mcp`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsxs)(t.p,{children:[`Способ зависит от платформы (бинарник, npm, Homebrew и др.) — актуальные команды в `,(0,n.jsx)(t.a,{href:`https://github.com/DeusData/codebase-memory-mcp`,children:`README`}),`. После установки подключите MCP-сервер в редакторе и проиндексируйте проект.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пример CLI (имена проектов смотрите через `,(0,n.jsx)(t.code,{children:`list_projects`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`codebase-memory-mcp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` cli`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` search_graph`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --project`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` my-project`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --name-pattern`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '.*Handler.*'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --label`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` Function`})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsxs)(t.p,{children:[`Типичный порядок: найти символ (`,(0,n.jsx)(t.code,{children:`search_graph`}),`) → посмотреть код / путь (`,(0,n.jsx)(t.code,{children:`get_code_snippet`}),`, `,(0,n.jsx)(t.code,{children:`trace_path`}),`) → при диффе — `,(0,n.jsx)(t.code,{children:`detect_changes`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` навигация по большому коду, влияние изменений.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` полная переиндексация без реальных изменений в репозитории.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`graphify`,children:`Graphify`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`code-review-graph`,children:`Code Review Graph`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};