import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Grill with docs`,description:`Полный текст grill-with-docs: интервью, grilling и модель предметной области.`,version:`200.4.1`},i=new Date(1789554716e3),a=`

Канон upstream: [mattpocock/skills — grill-with-docs](https://github.com/mattpocock/skills/blob/main/docs/engineering/grill-with-docs.md). Ниже — полный порядок: оболочка, grilling и domain-modeling.

Файл агента: \`grill-with-docs\`. В YAML стоит \`disable-model-invocation: true\` — **не** вызывать сам на каждую мелочь. Подключать, когда план/дизайн нужно прожать вопросами **и** зафиксировать термины.

Содержимое \`SKILL.md\` целиком:

\`\`\`text
Call the Skill tool twice, for "grilling" and "domain-modeling".
\`\`\`

Дальше — полный порядок двух вложенных skills.

## grilling [#grilling]

Интервью до **общего понимания**. Дерево решений: каждый выбор открывает следующие. Работа **раундами**.

**Граница** — все вопросы, на которые уже можно ответить (предпосылки закрыты). В одном раунде задать **всю** границу: пронумеровать вопросы и дать **свою рекомендуемую** формулировку. Ждать ответы человека, потом следующий раунд.

Формат раунда:

\`\`\`text
**Q1** — **<заголовок>**: тело вопроса (можно варианты).

Рекомендую: <ответ агента>

---

**Q2** — …
\`\`\`

Ответы сдвигают дерево: закрытые ветки открывают новые вопросы. Вопрос, который зависит от ещё открытого в **этом** раунде, уходит в **следующий**.

**Факты** ищет агент (файлы, инструменты, дочерние агенты). Человека не спрашивать то, что можно посмотреть самому. Пока идёт поиск — это незакрытая предпосылка: ждать только вопросы **ниже** по дереву; остальную границу задавать сейчас.

**Решения** — за человеком: каждый выбор положить ему и ждать.

Сессия grilla кончена, когда граница пуста: молчаливых допущений нет. **Не** писать код, пока человек не подтвердил общее понимание.

В DevCraft внутри \`create-devcraft-plugin\` гриль ужимают: **1–2 вопроса за раунд**, простым языком. Типовые пробелы: режим (создание / перенос / обновление); \`{Name}\` / \`{code}\` / \`{mod}\`; админка vs публичный сайт; настройки и права групп; фильтры; \`install.xml\`; миграция legacy; патчи ядра DLE; журналы.

## domain-modeling [#domain-modeling]

Активно точить **модель предметной области**: спорить с терминами, придумывать крайние случаи, писать словарь и решения **в момент**, когда они затвердели. Просто прочитать \`CONTEXT.md\` — это не этот skill. Skill — когда модель **меняют**.

### Файлы [#файлы]

Обычный репозиторий:

\`\`\`text
/
├── CONTEXT.md
├── docs/adr/          ← решения
└── src/
\`\`\`

Если в корне есть \`CONTEXT-MAP.md\` — контекстов несколько, карта указывает, где какой \`CONTEXT.md\` и локальные ADR.

Файлы создавать **лениво**: \`CONTEXT.md\` — когда зафиксирован первый термин; \`docs/adr/\` — когда нужно первое решение.

В DevCraft **не** плодить \`CONTEXT.md\` / ADR без нужды (Constitution XI). ADR — только если grilling/domain-modeling сами этого требуют.

### В сессии [#в-сессии]

* Термин человека **бьётся** со словарём — сразу спросить, какой смысл верный.
* Размытое слово — предложить канон («аккаунт» — посетитель сайта или запись \`users\`?).
* Связи сущностей — проверить конкретным сценарием и границей понятий.
* Человек говорит «как работает» — сверить с кодом; расхождение вынести явно.
* Термин закрыт — сразу дописать \`CONTEXT.md\`. Это **только словарь**, не спека и не место для деталей реализации.
* ADR предлагать, **если одновременно**: решение дорого менять; без контекста будущий читатель не поймёт «почему так»; был реальный выбор между вариантами. Иначе ADR не писать.

## См. также [#см-также]

* [using-superpowers](using-superpowers)
* [create-devcraft-plugin](create-devcraft-plugin)
* [Справочник ИИ](../../guides/ai_tools)
`,o={contents:[{heading:void 0,content:`Канон upstream: mattpocock/skills — grill-with-docs. Ниже — полный порядок: оболочка, grilling и domain-modeling.`},{heading:void 0,content:"Файл агента: `grill-with-docs`. В YAML стоит `disable-model-invocation: true` — **не** вызывать сам на каждую мелочь. Подключать, когда план/дизайн нужно прожать вопросами **и** зафиксировать термины."},{heading:void 0,content:"Содержимое `SKILL.md` целиком:"},{heading:void 0,content:`Дальше — полный порядок двух вложенных skills.`},{heading:`grilling`,content:`Интервью до **общего понимания**. Дерево решений: каждый выбор открывает следующие. Работа **раундами**.`},{heading:`grilling`,content:`**Граница** — все вопросы, на которые уже можно ответить (предпосылки закрыты). В одном раунде задать **всю** границу: пронумеровать вопросы и дать **свою рекомендуемую** формулировку. Ждать ответы человека, потом следующий раунд.`},{heading:`grilling`,content:`Формат раунда:`},{heading:`grilling`,content:`Ответы сдвигают дерево: закрытые ветки открывают новые вопросы. Вопрос, который зависит от ещё открытого в **этом** раунде, уходит в **следующий**.`},{heading:`grilling`,content:`**Факты** ищет агент (файлы, инструменты, дочерние агенты). Человека не спрашивать то, что можно посмотреть самому. Пока идёт поиск — это незакрытая предпосылка: ждать только вопросы **ниже** по дереву; остальную границу задавать сейчас.`},{heading:`grilling`,content:`**Решения** — за человеком: каждый выбор положить ему и ждать.`},{heading:`grilling`,content:`Сессия grilla кончена, когда граница пуста: молчаливых допущений нет. **Не** писать код, пока человек не подтвердил общее понимание.`},{heading:`grilling`,content:"В DevCraft внутри `create-devcraft-plugin` гриль ужимают: **1–2 вопроса за раунд**, простым языком. Типовые пробелы: режим (создание / перенос / обновление); `{Name}` / `{code}` / `{mod}`; админка vs публичный сайт; настройки и права групп; фильтры; `install.xml`; миграция legacy; патчи ядра DLE; журналы."},{heading:`domain-modeling`,content:"Активно точить **модель предметной области**: спорить с терминами, придумывать крайние случаи, писать словарь и решения **в момент**, когда они затвердели. Просто прочитать `CONTEXT.md` — это не этот skill. Skill — когда модель **меняют**."},{heading:`файлы`,content:`Обычный репозиторий:`},{heading:`файлы`,content:"Если в корне есть `CONTEXT-MAP.md` — контекстов несколько, карта указывает, где какой `CONTEXT.md` и локальные ADR."},{heading:`файлы`,content:"Файлы создавать **лениво**: `CONTEXT.md` — когда зафиксирован первый термин; `docs/adr/` — когда нужно первое решение."},{heading:`файлы`,content:"В DevCraft **не** плодить `CONTEXT.md` / ADR без нужды (Constitution XI). ADR — только если grilling/domain-modeling сами этого требуют."},{heading:`в-сессии`,content:`Термин человека **бьётся** со словарём — сразу спросить, какой смысл верный.`},{heading:`в-сессии`,content:"Размытое слово — предложить канон («аккаунт» — посетитель сайта или запись `users`?)."},{heading:`в-сессии`,content:`Связи сущностей — проверить конкретным сценарием и границей понятий.`},{heading:`в-сессии`,content:`Человек говорит «как работает» — сверить с кодом; расхождение вынести явно.`},{heading:`в-сессии`,content:"Термин закрыт — сразу дописать `CONTEXT.md`. Это **только словарь**, не спека и не место для деталей реализации."},{heading:`в-сессии`,content:`ADR предлагать, **если одновременно**: решение дорого менять; без контекста будущий читатель не поймёт «почему так»; был реальный выбор между вариантами. Иначе ADR не писать.`},{heading:`см-также`,content:`using-superpowers`},{heading:`см-также`,content:`create-devcraft-plugin`},{heading:`см-также`,content:`Справочник ИИ`}],headings:[{id:`grilling`,content:`grilling`},{id:`domain-modeling`,content:`domain-modeling`},{id:`файлы`,content:`Файлы`},{id:`в-сессии`,content:`В сессии`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#grilling`,title:(0,n.jsx)(n.Fragment,{children:`grilling`})},{depth:2,url:`#domain-modeling`,title:(0,n.jsx)(n.Fragment,{children:`domain-modeling`})},{depth:3,url:`#файлы`,title:(0,n.jsx)(n.Fragment,{children:`Файлы`})},{depth:3,url:`#в-сессии`,title:(0,n.jsx)(n.Fragment,{children:`В сессии`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Канон upstream: `,(0,n.jsx)(t.a,{href:`https://github.com/mattpocock/skills/blob/main/docs/engineering/grill-with-docs.md`,children:`mattpocock/skills — grill-with-docs`}),`. Ниже — полный порядок: оболочка, grilling и domain-modeling.`]}),`
`,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Файл агента: `,(0,n.jsx)(t.code,{children:`grill-with-docs`}),`. В YAML стоит `,(0,n.jsx)(t.code,{children:`disable-model-invocation: true`}),` — `,(0,n.jsx)(t.strong,{children:`не`}),` вызывать сам на каждую мелочь. Подключать, когда план/дизайн нужно прожать вопросами `,(0,n.jsx)(t.strong,{children:`и`}),` зафиксировать термины.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Содержимое `,(0,n.jsx)(t.code,{children:`SKILL.md`}),` целиком:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Call the Skill tool twice, for "grilling" and "domain-modeling".`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Дальше — полный порядок двух вложенных skills.`}),`
`,(0,n.jsx)(t.h2,{id:`grilling`,children:`grilling`}),`
`,(0,n.jsxs)(t.p,{children:[`Интервью до `,(0,n.jsx)(t.strong,{children:`общего понимания`}),`. Дерево решений: каждый выбор открывает следующие. Работа `,(0,n.jsx)(t.strong,{children:`раундами`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Граница`}),` — все вопросы, на которые уже можно ответить (предпосылки закрыты). В одном раунде задать `,(0,n.jsx)(t.strong,{children:`всю`}),` границу: пронумеровать вопросы и дать `,(0,n.jsx)(t.strong,{children:`свою рекомендуемую`}),` формулировку. Ждать ответы человека, потом следующий раунд.`]}),`
`,(0,n.jsx)(t.p,{children:`Формат раунда:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`**Q1** — **<заголовок>**: тело вопроса (можно варианты).`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Рекомендую: <ответ агента>`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`---`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`**Q2** — …`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ответы сдвигают дерево: закрытые ветки открывают новые вопросы. Вопрос, который зависит от ещё открытого в `,(0,n.jsx)(t.strong,{children:`этом`}),` раунде, уходит в `,(0,n.jsx)(t.strong,{children:`следующий`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Факты`}),` ищет агент (файлы, инструменты, дочерние агенты). Человека не спрашивать то, что можно посмотреть самому. Пока идёт поиск — это незакрытая предпосылка: ждать только вопросы `,(0,n.jsx)(t.strong,{children:`ниже`}),` по дереву; остальную границу задавать сейчас.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Решения`}),` — за человеком: каждый выбор положить ему и ждать.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Сессия grilla кончена, когда граница пуста: молчаливых допущений нет. `,(0,n.jsx)(t.strong,{children:`Не`}),` писать код, пока человек не подтвердил общее понимание.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В DevCraft внутри `,(0,n.jsx)(t.code,{children:`create-devcraft-plugin`}),` гриль ужимают: `,(0,n.jsx)(t.strong,{children:`1–2 вопроса за раунд`}),`, простым языком. Типовые пробелы: режим (создание / перенос / обновление); `,(0,n.jsx)(t.code,{children:`{Name}`}),` / `,(0,n.jsx)(t.code,{children:`{code}`}),` / `,(0,n.jsx)(t.code,{children:`{mod}`}),`; админка vs публичный сайт; настройки и права групп; фильтры; `,(0,n.jsx)(t.code,{children:`install.xml`}),`; миграция legacy; патчи ядра DLE; журналы.`]}),`
`,(0,n.jsx)(t.h2,{id:`domain-modeling`,children:`domain-modeling`}),`
`,(0,n.jsxs)(t.p,{children:[`Активно точить `,(0,n.jsx)(t.strong,{children:`модель предметной области`}),`: спорить с терминами, придумывать крайние случаи, писать словарь и решения `,(0,n.jsx)(t.strong,{children:`в момент`}),`, когда они затвердели. Просто прочитать `,(0,n.jsx)(t.code,{children:`CONTEXT.md`}),` — это не этот skill. Skill — когда модель `,(0,n.jsx)(t.strong,{children:`меняют`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`файлы`,children:`Файлы`}),`
`,(0,n.jsx)(t.p,{children:`Обычный репозиторий:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── CONTEXT.md`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── docs/adr/          ← решения`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── src/`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Если в корне есть `,(0,n.jsx)(t.code,{children:`CONTEXT-MAP.md`}),` — контекстов несколько, карта указывает, где какой `,(0,n.jsx)(t.code,{children:`CONTEXT.md`}),` и локальные ADR.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Файлы создавать `,(0,n.jsx)(t.strong,{children:`лениво`}),`: `,(0,n.jsx)(t.code,{children:`CONTEXT.md`}),` — когда зафиксирован первый термин; `,(0,n.jsx)(t.code,{children:`docs/adr/`}),` — когда нужно первое решение.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В DevCraft `,(0,n.jsx)(t.strong,{children:`не`}),` плодить `,(0,n.jsx)(t.code,{children:`CONTEXT.md`}),` / ADR без нужды (Constitution XI). ADR — только если grilling/domain-modeling сами этого требуют.`]}),`
`,(0,n.jsx)(t.h3,{id:`в-сессии`,children:`В сессии`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Термин человека `,(0,n.jsx)(t.strong,{children:`бьётся`}),` со словарём — сразу спросить, какой смысл верный.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Размытое слово — предложить канон («аккаунт» — посетитель сайта или запись `,(0,n.jsx)(t.code,{children:`users`}),`?).`]}),`
`,(0,n.jsx)(t.li,{children:`Связи сущностей — проверить конкретным сценарием и границей понятий.`}),`
`,(0,n.jsx)(t.li,{children:`Человек говорит «как работает» — сверить с кодом; расхождение вынести явно.`}),`
`,(0,n.jsxs)(t.li,{children:[`Термин закрыт — сразу дописать `,(0,n.jsx)(t.code,{children:`CONTEXT.md`}),`. Это `,(0,n.jsx)(t.strong,{children:`только словарь`}),`, не спека и не место для деталей реализации.`]}),`
`,(0,n.jsxs)(t.li,{children:[`ADR предлагать, `,(0,n.jsx)(t.strong,{children:`если одновременно`}),`: решение дорого менять; без контекста будущий читатель не поймёт «почему так»; был реальный выбор между вариантами. Иначе ADR не писать.`]}),`
`]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`using-superpowers`,children:`using-superpowers`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`create-devcraft-plugin`,children:`create-devcraft-plugin`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/ai_tools`,children:`Справочник ИИ`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};