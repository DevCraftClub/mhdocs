import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Помощь в разработке`,description:`Skills, MCP и Cursor-rules для разработки сателлитов на DevCraft Admin.`,version:`200.4.0`},i=new Date(1789634365e3),a=`

Раздел для авторов сателлитов и самой панели: что поставить в Cursor, когда звать граф/память, какие \`.mdc\` скопировать к себе.

Полный каталог в одном месте: [Справочник: ИИ-инструменты](../guides/ai_tools).

## Порядок агента [#порядок-агента]

1. Skills (\`using-superpowers\`, при новом модуле — \`create-devcraft-plugin\` / \`grill-with-docs\`).
2. Sequential Thinking — если задача большая.
3. Code Review Graph + Codebase Memory (+ Caveman/Cavemem при длинном контексте / прошлых сессиях).
4. graphify query/path — если есть \`graphify-out/\`.
5. Код по reuse-first и [PHP DevCraft Standards](../guides/php_devcraft_standards).
6. После правок DLE / \`devcraft/src\` — update graphify / CRG / Codebase Memory.
7. Устойчивые предпочтения команды — mem0 **после** auth (\`MEM0_API_KEY\`).

<Cards>
  <Card title="Skills" href="/dev/dle/devcraft_admin/200.4.0/development_help/skills">
    SKILL.md для агента: superpowers, grill, создание модуля
  </Card>

  <Card title="MCP-серверы" href="/dev/dle/devcraft_admin/200.4.0/development_help/mcp">
    Graphify, CRG, Codebase Memory, Caveman, Cavemem, Sequential Thinking, mem0
  </Card>

  <Card title="Правила" href="/dev/dle/devcraft_admin/200.4.0/development_help/rules">
    Файлы \`.cursor/rules\` — что положить в свой проект
  </Card>

  <Card title="Справочник ИИ" href="/dev/dle/devcraft_admin/200.4.0/guides/ai_tools">
    Сводные таблицы + промпт модуля + чеклист
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:"Раздел для авторов сателлитов и самой панели: что поставить в Cursor, когда звать граф/память, какие `.mdc` скопировать к себе."},{heading:void 0,content:`Полный каталог в одном месте: Справочник: ИИ-инструменты.`},{heading:`порядок-агента`,content:"Skills (`using-superpowers`, при новом модуле — `create-devcraft-plugin` / `grill-with-docs`)."},{heading:`порядок-агента`,content:`Sequential Thinking — если задача большая.`},{heading:`порядок-агента`,content:`Code Review Graph + Codebase Memory (+ Caveman/Cavemem при длинном контексте / прошлых сессиях).`},{heading:`порядок-агента`,content:"graphify query/path — если есть `graphify-out/`."},{heading:`порядок-агента`,content:`Код по reuse-first и PHP DevCraft Standards.`},{heading:`порядок-агента`,content:"После правок DLE / `devcraft/src` — update graphify / CRG / Codebase Memory."},{heading:`порядок-агента`,content:"Устойчивые предпочтения команды — mem0 **после** auth (`MEM0_API_KEY`)."},{heading:`порядок-агента`,content:`SKILL.md для агента: superpowers, grill, создание модуля`},{heading:`порядок-агента`,content:`Graphify, CRG, Codebase Memory, Caveman, Cavemem, Sequential Thinking, mem0`},{heading:`порядок-агента`,content:"Файлы `.cursor/rules` — что положить в свой проект"},{heading:`порядок-агента`,content:`Сводные таблицы + промпт модуля + чеклист`}],headings:[{id:`порядок-агента`,content:`Порядок агента`}]},s=[{depth:2,url:`#порядок-агента`,title:(0,n.jsx)(n.Fragment,{children:`Порядок агента`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Раздел для авторов сателлитов и самой панели: что поставить в Cursor, когда звать граф/память, какие `,(0,n.jsx)(t.code,{children:`.mdc`}),` скопировать к себе.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный каталог в одном месте: `,(0,n.jsx)(t.a,{href:`../guides/ai_tools`,children:`Справочник: ИИ-инструменты`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`порядок-агента`,children:`Порядок агента`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Skills (`,(0,n.jsx)(t.code,{children:`using-superpowers`}),`, при новом модуле — `,(0,n.jsx)(t.code,{children:`create-devcraft-plugin`}),` / `,(0,n.jsx)(t.code,{children:`grill-with-docs`}),`).`]}),`
`,(0,n.jsx)(t.li,{children:`Sequential Thinking — если задача большая.`}),`
`,(0,n.jsx)(t.li,{children:`Code Review Graph + Codebase Memory (+ Caveman/Cavemem при длинном контексте / прошлых сессиях).`}),`
`,(0,n.jsxs)(t.li,{children:[`graphify query/path — если есть `,(0,n.jsx)(t.code,{children:`graphify-out/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Код по reuse-first и `,(0,n.jsx)(t.a,{href:`../guides/php_devcraft_standards`,children:`PHP DevCraft Standards`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`После правок DLE / `,(0,n.jsx)(t.code,{children:`devcraft/src`}),` — update graphify / CRG / Codebase Memory.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Устойчивые предпочтения команды — mem0 `,(0,n.jsx)(t.strong,{children:`после`}),` auth (`,(0,n.jsx)(t.code,{children:`MEM0_API_KEY`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Skills`,href:`/dev/dle/devcraft_admin/200.4.0/development_help/skills`,children:(0,n.jsx)(t.p,{children:`SKILL.md для агента: superpowers, grill, создание модуля`})}),(0,n.jsx)(r,{title:`MCP-серверы`,href:`/dev/dle/devcraft_admin/200.4.0/development_help/mcp`,children:(0,n.jsx)(t.p,{children:`Graphify, CRG, Codebase Memory, Caveman, Cavemem, Sequential Thinking, mem0`})}),(0,n.jsx)(r,{title:`Правила`,href:`/dev/dle/devcraft_admin/200.4.0/development_help/rules`,children:(0,n.jsxs)(t.p,{children:[`Файлы `,(0,n.jsx)(t.code,{children:`.cursor/rules`}),` — что положить в свой проект`]})}),(0,n.jsx)(r,{title:`Справочник ИИ`,href:`/dev/dle/devcraft_admin/200.4.0/guides/ai_tools`,children:(0,n.jsx)(t.p,{children:`Сводные таблицы + промпт модуля + чеклист`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};