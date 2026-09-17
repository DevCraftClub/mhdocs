import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Caveman`,description:`Skill краткой речи и MCP compress — замена sqz для длинного stdout/JSON.`},i=new Date(1789634365e3),a=`

**Caveman** ([JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)) — два слоя для экономии токенов: **skill** (короткая речь агента) и **MCP compress** (сжатие длинного stdout/JSON перед вставкой в чат). Код, пути, команды и точные ошибки не «огрубляют» — только прозу вокруг них.

<Callout type="info">
  Длинный CLI/лог → &#x2A;*\`caveman_compress\`**, не sqz. Факты о проекте/пользователе — [cavemem](cavemem) / [memory](memory) / [mem0](mem0); граф **кода** — [codebase-memory-mcp](codebase-memory-mcp).
</Callout>

## Ссылки [#ссылки]

* Репозиторий: [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman)
* MCP compress: [tree/main/mcp](https://github.com/JuliusBrussee/caveman/tree/main/mcp)
* Установка skill: [INSTALL.md](https://github.com/JuliusBrussee/caveman/blob/main/INSTALL.md)

## Skill (речь) [#skill-речь]

\`\`\`bash
npx skills add JuliusBrussee/caveman
\`\`\`

В чате: \`/caveman\` (уровни lite / full / ultra). Цель — меньше слов в ответах при том же диагнозе и фиксе.

Полный текст skill (правила речи, уровни, когда не сжимать): [Caveman (skill)](../dev/dle/devcraft_admin/development_help/skills/caveman).

## MCP compress [#mcp-compress]

Пакет \`caveman-mcp\` (\`npx -y caveman-mcp\`). Типичные tools:

| Tool                                          | Назначение                                    |
| --------------------------------------------- | --------------------------------------------- |
| \`caveman_compress\`                            | Сжать длинный текст/JSON → короткий вид + ref |
| \`caveman_retrieve\`                            | Вернуть исходные байты по ref                 |
| \`caveman_stats\`                               | Статистика сжатия                             |
| \`caveman_toon_encode\` / \`caveman_toon_decode\` | Компактный tabular JSON (TOON)                |

Пример конфига MCP (Cursor и аналоги):

\`\`\`json
{
	"mcpServers": {
		"caveman": {
			"command": "npx",
			"args": ["-y", "caveman-mcp"]
		}
	}
}
\`\`\`

**Когда полезно:** вывод \`composer show\`, большой \`settings.schema\`, ответ \`Registry\`, логи CI — сжать перед вставкой в промпт; \`retrieve\` только если нужны точные байты.

**Не нужно:** pipe для интерактивных REPL; уже короткий вывод; выдавать \`retrieve\` «на всякий случай».

## Пример на DevCraft [#пример-на-devcraft]

Перед разбором большого \`settings.schema.php\` модуля Notifications: агент сжимает дамп схемы через \`caveman_compress\`, обсуждает поля по сжатому виду, а исходник читает точечно из репозитория (не через полный dump в чат).

## См. также [#см-также]

* [cavemem](cavemem)
* [Ponytail](ponytail)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
* [Skill: Caveman](../dev/dle/devcraft_admin/guides/skills/caveman)
`,o={contents:[{heading:void 0,content:`**Caveman** (JuliusBrussee/caveman) — два слоя для экономии токенов: **skill** (короткая речь агента) и **MCP compress** (сжатие длинного stdout/JSON перед вставкой в чат). Код, пути, команды и точные ошибки не «огрубляют» — только прозу вокруг них.`},{heading:void 0,content:"Длинный CLI/лог → &#x2A;*`caveman_compress`**, не sqz. Факты о проекте/пользователе — cavemem / memory / mem0; граф **кода** — codebase-memory-mcp."},{heading:`ссылки`,content:`Репозиторий: JuliusBrussee/caveman`},{heading:`ссылки`,content:`MCP compress: tree/main/mcp`},{heading:`ссылки`,content:`Установка skill: INSTALL.md`},{heading:`skill-речь`,content:"В чате: `/caveman` (уровни lite / full / ultra). Цель — меньше слов в ответах при том же диагнозе и фиксе."},{heading:`skill-речь`,content:`Полный текст skill (правила речи, уровни, когда не сжимать): Caveman (skill).`},{heading:`mcp-compress`,content:"Пакет `caveman-mcp` (`npx -y caveman-mcp`). Типичные tools:"},{heading:`mcp-compress`,content:`Tool`},{heading:`mcp-compress`,content:`Назначение`},{heading:`mcp-compress`,content:"`caveman_compress`"},{heading:`mcp-compress`,content:`Сжать длинный текст/JSON → короткий вид + ref`},{heading:`mcp-compress`,content:"`caveman_retrieve`"},{heading:`mcp-compress`,content:`Вернуть исходные байты по ref`},{heading:`mcp-compress`,content:"`caveman_stats`"},{heading:`mcp-compress`,content:`Статистика сжатия`},{heading:`mcp-compress`,content:"`caveman_toon_encode` / `caveman_toon_decode`"},{heading:`mcp-compress`,content:`Компактный tabular JSON (TOON)`},{heading:`mcp-compress`,content:`Пример конфига MCP (Cursor и аналоги):`},{heading:`mcp-compress`,content:"**Когда полезно:** вывод `composer show`, большой `settings.schema`, ответ `Registry`, логи CI — сжать перед вставкой в промпт; `retrieve` только если нужны точные байты."},{heading:`mcp-compress`,content:"**Не нужно:** pipe для интерактивных REPL; уже короткий вывод; выдавать `retrieve` «на всякий случай»."},{heading:`пример-на-devcraft`,content:"Перед разбором большого `settings.schema.php` модуля Notifications: агент сжимает дамп схемы через `caveman_compress`, обсуждает поля по сжатому виду, а исходник читает точечно из репозитория (не через полный dump в чат)."},{heading:`см-также`,content:`cavemem`},{heading:`см-также`,content:`Ponytail`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`},{heading:`см-также`,content:`Skill: Caveman`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`skill-речь`,content:`Skill (речь)`},{id:`mcp-compress`,content:`MCP compress`},{id:`пример-на-devcraft`,content:`Пример на DevCraft`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#skill-речь`,title:(0,n.jsx)(n.Fragment,{children:`Skill (речь)`})},{depth:2,url:`#mcp-compress`,title:(0,n.jsx)(n.Fragment,{children:`MCP compress`})},{depth:2,url:`#пример-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Пример на DevCraft`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Caveman`}),` (`,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman`,children:`JuliusBrussee/caveman`}),`) — два слоя для экономии токенов: `,(0,n.jsx)(t.strong,{children:`skill`}),` (короткая речь агента) и `,(0,n.jsx)(t.strong,{children:`MCP compress`}),` (сжатие длинного stdout/JSON перед вставкой в чат). Код, пути, команды и точные ошибки не «огрубляют» — только прозу вокруг них.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[`Длинный CLI/лог → `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`caveman_compress`})}),`, не sqz. Факты о проекте/пользователе — `,(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`}),` / `,(0,n.jsx)(t.a,{href:`memory`,children:`memory`}),` / `,(0,n.jsx)(t.a,{href:`mem0`,children:`mem0`}),`; граф `,(0,n.jsx)(t.strong,{children:`кода`}),` — `,(0,n.jsx)(t.a,{href:`codebase-memory-mcp`,children:`codebase-memory-mcp`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman`,children:`JuliusBrussee/caveman`})]}),`
`,(0,n.jsxs)(t.li,{children:[`MCP compress: `,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman/tree/main/mcp`,children:`tree/main/mcp`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Установка skill: `,(0,n.jsx)(t.a,{href:`https://github.com/JuliusBrussee/caveman/blob/main/INSTALL.md`,children:`INSTALL.md`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`skill-речь`,children:`Skill (речь)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npx`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` skills`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` JuliusBrussee/caveman`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`В чате: `,(0,n.jsx)(t.code,{children:`/caveman`}),` (уровни lite / full / ultra). Цель — меньше слов в ответах при том же диагнозе и фиксе.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный текст skill (правила речи, уровни, когда не сжимать): `,(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/development_help/skills/caveman`,children:`Caveman (skill)`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`mcp-compress`,children:`MCP compress`}),`
`,(0,n.jsxs)(t.p,{children:[`Пакет `,(0,n.jsx)(t.code,{children:`caveman-mcp`}),` (`,(0,n.jsx)(t.code,{children:`npx -y caveman-mcp`}),`). Типичные tools:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Tool`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`caveman_compress`})}),(0,n.jsx)(t.td,{children:`Сжать длинный текст/JSON → короткий вид + ref`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`caveman_retrieve`})}),(0,n.jsx)(t.td,{children:`Вернуть исходные байты по ref`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`caveman_stats`})}),(0,n.jsx)(t.td,{children:`Статистика сжатия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`caveman_toon_encode`}),` / `,(0,n.jsx)(t.code,{children:`caveman_toon_decode`})]}),(0,n.jsx)(t.td,{children:`Компактный tabular JSON (TOON)`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Пример конфига MCP (Cursor и аналоги):`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	"mcpServers"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`		"caveman"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"command"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"npx"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`			"args"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"-y"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"caveman-mcp"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` вывод `,(0,n.jsx)(t.code,{children:`composer show`}),`, большой `,(0,n.jsx)(t.code,{children:`settings.schema`}),`, ответ `,(0,n.jsx)(t.code,{children:`Registry`}),`, логи CI — сжать перед вставкой в промпт; `,(0,n.jsx)(t.code,{children:`retrieve`}),` только если нужны точные байты.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` pipe для интерактивных REPL; уже короткий вывод; выдавать `,(0,n.jsx)(t.code,{children:`retrieve`}),` «на всякий случай».`]}),`
`,(0,n.jsx)(t.h2,{id:`пример-на-devcraft`,children:`Пример на DevCraft`}),`
`,(0,n.jsxs)(t.p,{children:[`Перед разбором большого `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` модуля Notifications: агент сжимает дамп схемы через `,(0,n.jsx)(t.code,{children:`caveman_compress`}),`, обсуждает поля по сжатому виду, а исходник читает точечно из репозитория (не через полный dump в чат).`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`cavemem`,children:`cavemem`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`ponytail`,children:`Ponytail`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/skills/caveman`,children:`Skill: Caveman`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};