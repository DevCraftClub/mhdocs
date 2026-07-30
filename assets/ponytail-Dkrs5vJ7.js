import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Ponytail`,description:`Установка и идея Ponytail — режим «ленивого сеньора» для ИИ-агента: минимум кода.`},i=new Date(1785400635e3),a=`

**Ponytail** — skill/правила для ИИ-агента: перед написанием кода пройти «лестницу» от YAGNI и reuse до одной строки. Цель — меньше лишнего кода и диффа, без халатности в безопасности и валидации.

## Ссылки [#ссылки]

* Сайт: [ponytail.dev](https://ponytail.dev/)
* Репозиторий автора: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) (актуальный способ установки — в README сайта/репо)

## Установка [#установка]

Зависит от агента (Claude Code, Cursor, Codex и др.):

* Cursor / Windsurf и подобные: скопировать rules-файл в проект (например \`.cursor/rules/ponytail.mdc\`) — как указано в документации Ponytail;
* агенты со skills/plugins — установка через их каталог skills.

## Использование [#использование]

Перед кодом агент останавливается на первой подходящей ступени: не нужно ли это вовсе → уже есть в проекте → stdlib → нативная фича → уже установленная зависимость → одна строка → минимум кода.

В DevCraft это часто значит: переиспользовать \`JsonResponse\`, \`AdminLink\`, \`DleDataService\`, готовые виджеты Metro, а не писать параллельный XHR или свой слой форм.

**Когда полезно:** любая реализация и рефакторинг «не раздувать».

**Не нужно:** абстракции «на будущее»; чинить только один caller, если баг в общей функции.

## См. также [#см-также]

* [sqz](sqz)
* [Конституция PHP](constitution)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:`**Ponytail** — skill/правила для ИИ-агента: перед написанием кода пройти «лестницу» от YAGNI и reuse до одной строки. Цель — меньше лишнего кода и диффа, без халатности в безопасности и валидации.`},{heading:`ссылки`,content:`Сайт: ponytail.dev`},{heading:`ссылки`,content:`Репозиторий автора: DietrichGebert/ponytail (актуальный способ установки — в README сайта/репо)`},{heading:`установка`,content:`Зависит от агента (Claude Code, Cursor, Codex и др.):`},{heading:`установка`,content:"Cursor / Windsurf и подобные: скопировать rules-файл в проект (например `.cursor/rules/ponytail.mdc`) — как указано в документации Ponytail;"},{heading:`установка`,content:`агенты со skills/plugins — установка через их каталог skills.`},{heading:`использование`,content:`Перед кодом агент останавливается на первой подходящей ступени: не нужно ли это вовсе → уже есть в проекте → stdlib → нативная фича → уже установленная зависимость → одна строка → минимум кода.`},{heading:`использование`,content:"В DevCraft это часто значит: переиспользовать `JsonResponse`, `AdminLink`, `DleDataService`, готовые виджеты Metro, а не писать параллельный XHR или свой слой форм."},{heading:`использование`,content:`**Когда полезно:** любая реализация и рефакторинг «не раздувать».`},{heading:`использование`,content:`**Не нужно:** абстракции «на будущее»; чинить только один caller, если баг в общей функции.`},{heading:`см-также`,content:`sqz`},{heading:`см-также`,content:`Конституция PHP`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ponytail`}),` — skill/правила для ИИ-агента: перед написанием кода пройти «лестницу» от YAGNI и reuse до одной строки. Цель — меньше лишнего кода и диффа, без халатности в безопасности и валидации.`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Сайт: `,(0,n.jsx)(t.a,{href:`https://ponytail.dev/`,children:`ponytail.dev`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий автора: `,(0,n.jsx)(t.a,{href:`https://github.com/DietrichGebert/ponytail`,children:`DietrichGebert/ponytail`}),` (актуальный способ установки — в README сайта/репо)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(t.p,{children:`Зависит от агента (Claude Code, Cursor, Codex и др.):`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Cursor / Windsurf и подобные: скопировать rules-файл в проект (например `,(0,n.jsx)(t.code,{children:`.cursor/rules/ponytail.mdc`}),`) — как указано в документации Ponytail;`]}),`
`,(0,n.jsx)(t.li,{children:`агенты со skills/plugins — установка через их каталог skills.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsx)(t.p,{children:`Перед кодом агент останавливается на первой подходящей ступени: не нужно ли это вовсе → уже есть в проекте → stdlib → нативная фича → уже установленная зависимость → одна строка → минимум кода.`}),`
`,(0,n.jsxs)(t.p,{children:[`В DevCraft это часто значит: переиспользовать `,(0,n.jsx)(t.code,{children:`JsonResponse`}),`, `,(0,n.jsx)(t.code,{children:`AdminLink`}),`, `,(0,n.jsx)(t.code,{children:`DleDataService`}),`, готовые виджеты Metro, а не писать параллельный XHR или свой слой форм.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` любая реализация и рефакторинг «не раздувать».`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` абстракции «на будущее»; чинить только один caller, если баг в общей функции.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`sqz`,children:`sqz`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`constitution`,children:`Конституция PHP`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};