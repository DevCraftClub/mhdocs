import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Using Superpowers`,description:`Полный текст skill using-superpowers: вызов skills до любого действия.`,version:`200.4.1`},i=new Date(1789634365e3),a=`

Канон upstream: [obra/superpowers — using-superpowers](https://github.com/obra/superpowers/tree/main/skills/using-superpowers). Ниже — полное рабочее содержимое, как его читает агент.

<Callout type="warning">
  Если агент запущен как **дочерний** (subagent) на узкую задачу — этот skill **не** применять: родитель уже выбрал порядок работы.
</Callout>

Файл агента: skill \`using-superpowers\` (obra/superpowers). Читать **до** любого ответа, в том числе до уточняющих вопросов.

## Правило [#правило]

Подходящий skill вызывать **до** любого действия: вопросов, обхода кода, чтения файлов. Если skill оказался не тем — его можно не продолжать.

Перед режимом плана: если brainstorming ещё не был, сначала skill brainstorming.

Затем сказать: «Using \\[skill] to \\[purpose]» и идти **по skill буквально**. Если в skill есть чеклист — завести todo на каждый пункт.

## Приоритет skills [#приоритет-skills]

Если подходит несколько: сначала **процесс** (как работать), потом **реализация** (как писать код). Частые процесс-skills Superpowers: brainstorming, systematic-debugging.

| Запрос       | Сначала                                       |
| ------------ | --------------------------------------------- |
| «Сделай X»   | brainstorming, затем skills реализации        |
| «Почини баг» | systematic-debugging, затем предметные skills |

## Красные флаги [#красные-флаги]

Эти мысли значат: **стоп**, идёт рационализация.

| Мысль                         | Факт                                                         |
| ----------------------------- | ------------------------------------------------------------ |
| «Это простой вопрос»          | Вопрос — тоже задача. Сначала проверка skills.               |
| «Сначала нужен контекст»      | Проверка skills **раньше** уточняющих вопросов.              |
| «Сначала посмотрю код»        | Skills говорят, **как** смотреть. Сначала skill.             |
| «Быстро гляну git/файлы»      | В файлах нет контекста разговора. Сначала skill.             |
| «Сначала соберу информацию»   | Skills говорят, **как** собирать.                            |
| «Формальный skill не нужен»   | Если skill есть — его используют.                            |
| «Я этот skill помню»          | Skills меняются. Читать текущую версию.                      |
| «Это не задача»               | Действие = задача. Проверить skills.                         |
| «Skill слишком тяжёлый»       | Простое часто раздувается. Skill всё равно.                  |
| «Сначала сделаю вот это одно» | Проверка **до** любого шага.                                 |
| «Так продуктивнее»            | Действие без дисциплины тратит время. Skills держат порядок. |
| «Я знаю, что это значит»      | Знать понятие ≠ выполнить skill.                             |

## Платформы [#платформы]

Если среда указана в skill — читать её файл: Codex → \`references/codex-tools.md\`, Pi → \`references/pi-tools.md\`, Antigravity → \`references/antigravity-tools.md\`.

## Инструкции пользователя [#инструкции-пользователя]

Файлы вроде \`AGENTS.md\` / \`CLAUDE.md\` и прямые просьбы человека **важнее** skills. Skills важнее поведения модели по умолчанию. Пропускать workflow skill можно **только** если человек это явно сказал.

## Как это ложится на DevCraft [#как-это-ложится-на-devcraft]

<Steps>
  <Step>
    ### Skill check [#skill-check]

    Перед созданием или переносом модуля: есть ли brainstorming / writing-plans / [create-devcraft-plugin](create-devcraft-plugin)? Не писать \`manifest.php\` «с нуля» без проверки.
  </Step>

  <Step>
    ### Процесс [#процесс]

    Сложный модуль → brainstorming / план → затем php-pro / [create-devcraft-plugin](create-devcraft-plugin). Простые правки — короткий skill check (YAGNI через [ponytail](../rules/ponytail)).
  </Step>

  <Step>
    ### Реализация [#реализация]

    Код по [php\\_devcraft\\_standards](../../guides/php_devcraft_standards) и [конституции](../../../../../instructions/constitution).
  </Step>
</Steps>

## См. также [#см-также]

* [grill-with-docs](grill-with-docs)
* [Справочник ИИ](../../guides/ai_tools)
* [Помощь в разработке](../)
`,o={contents:[{heading:void 0,content:`Канон upstream: obra/superpowers — using-superpowers. Ниже — полное рабочее содержимое, как его читает агент.`},{heading:void 0,content:`Если агент запущен как **дочерний** (subagent) на узкую задачу — этот skill **не** применять: родитель уже выбрал порядок работы.`},{heading:void 0,content:"Файл агента: skill `using-superpowers` (obra/superpowers). Читать **до** любого ответа, в том числе до уточняющих вопросов."},{heading:`правило`,content:`Подходящий skill вызывать **до** любого действия: вопросов, обхода кода, чтения файлов. Если skill оказался не тем — его можно не продолжать.`},{heading:`правило`,content:`Перед режимом плана: если brainstorming ещё не был, сначала skill brainstorming.`},{heading:`правило`,content:`Затем сказать: «Using \\[skill] to \\[purpose]» и идти **по skill буквально**. Если в skill есть чеклист — завести todo на каждый пункт.`},{heading:`приоритет-skills`,content:`Если подходит несколько: сначала **процесс** (как работать), потом **реализация** (как писать код). Частые процесс-skills Superpowers: brainstorming, systematic-debugging.`},{heading:`приоритет-skills`,content:`Запрос`},{heading:`приоритет-skills`,content:`Сначала`},{heading:`приоритет-skills`,content:`«Сделай X»`},{heading:`приоритет-skills`,content:`brainstorming, затем skills реализации`},{heading:`приоритет-skills`,content:`«Почини баг»`},{heading:`приоритет-skills`,content:`systematic-debugging, затем предметные skills`},{heading:`красные-флаги`,content:`Эти мысли значат: **стоп**, идёт рационализация.`},{heading:`красные-флаги`,content:`Мысль`},{heading:`красные-флаги`,content:`Факт`},{heading:`красные-флаги`,content:`«Это простой вопрос»`},{heading:`красные-флаги`,content:`Вопрос — тоже задача. Сначала проверка skills.`},{heading:`красные-флаги`,content:`«Сначала нужен контекст»`},{heading:`красные-флаги`,content:`Проверка skills **раньше** уточняющих вопросов.`},{heading:`красные-флаги`,content:`«Сначала посмотрю код»`},{heading:`красные-флаги`,content:`Skills говорят, **как** смотреть. Сначала skill.`},{heading:`красные-флаги`,content:`«Быстро гляну git/файлы»`},{heading:`красные-флаги`,content:`В файлах нет контекста разговора. Сначала skill.`},{heading:`красные-флаги`,content:`«Сначала соберу информацию»`},{heading:`красные-флаги`,content:`Skills говорят, **как** собирать.`},{heading:`красные-флаги`,content:`«Формальный skill не нужен»`},{heading:`красные-флаги`,content:`Если skill есть — его используют.`},{heading:`красные-флаги`,content:`«Я этот skill помню»`},{heading:`красные-флаги`,content:`Skills меняются. Читать текущую версию.`},{heading:`красные-флаги`,content:`«Это не задача»`},{heading:`красные-флаги`,content:`Действие = задача. Проверить skills.`},{heading:`красные-флаги`,content:`«Skill слишком тяжёлый»`},{heading:`красные-флаги`,content:`Простое часто раздувается. Skill всё равно.`},{heading:`красные-флаги`,content:`«Сначала сделаю вот это одно»`},{heading:`красные-флаги`,content:`Проверка **до** любого шага.`},{heading:`красные-флаги`,content:`«Так продуктивнее»`},{heading:`красные-флаги`,content:`Действие без дисциплины тратит время. Skills держат порядок.`},{heading:`красные-флаги`,content:`«Я знаю, что это значит»`},{heading:`красные-флаги`,content:`Знать понятие ≠ выполнить skill.`},{heading:`платформы`,content:"Если среда указана в skill — читать её файл: Codex → `references/codex-tools.md`, Pi → `references/pi-tools.md`, Antigravity → `references/antigravity-tools.md`."},{heading:`инструкции-пользователя`,content:"Файлы вроде `AGENTS.md` / `CLAUDE.md` и прямые просьбы человека **важнее** skills. Skills важнее поведения модели по умолчанию. Пропускать workflow skill можно **только** если человек это явно сказал."},{heading:`skill-check`,content:"Перед созданием или переносом модуля: есть ли brainstorming / writing-plans / create-devcraft-plugin? Не писать `manifest.php` «с нуля» без проверки."},{heading:`процесс`,content:`Сложный модуль → brainstorming / план → затем php-pro / create-devcraft-plugin. Простые правки — короткий skill check (YAGNI через ponytail).`},{heading:`реализация`,content:`Код по php\\_devcraft\\_standards и конституции.`},{heading:`см-также`,content:`grill-with-docs`},{heading:`см-также`,content:`Справочник ИИ`},{heading:`см-также`,content:`Помощь в разработке`}],headings:[{id:`правило`,content:`Правило`},{id:`приоритет-skills`,content:`Приоритет skills`},{id:`красные-флаги`,content:`Красные флаги`},{id:`платформы`,content:`Платформы`},{id:`инструкции-пользователя`,content:`Инструкции пользователя`},{id:`как-это-ложится-на-devcraft`,content:`Как это ложится на DevCraft`},{id:`skill-check`,content:`Skill check`},{id:`процесс`,content:`Процесс`},{id:`реализация`,content:`Реализация`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#правило`,title:(0,n.jsx)(n.Fragment,{children:`Правило`})},{depth:2,url:`#приоритет-skills`,title:(0,n.jsx)(n.Fragment,{children:`Приоритет skills`})},{depth:2,url:`#красные-флаги`,title:(0,n.jsx)(n.Fragment,{children:`Красные флаги`})},{depth:2,url:`#платформы`,title:(0,n.jsx)(n.Fragment,{children:`Платформы`})},{depth:2,url:`#инструкции-пользователя`,title:(0,n.jsx)(n.Fragment,{children:`Инструкции пользователя`})},{depth:2,url:`#как-это-ложится-на-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Как это ложится на DevCraft`})},{depth:3,url:`#skill-check`,title:(0,n.jsx)(n.Fragment,{children:`Skill check`})},{depth:3,url:`#процесс`,title:(0,n.jsx)(n.Fragment,{children:`Процесс`})},{depth:3,url:`#реализация`,title:(0,n.jsx)(n.Fragment,{children:`Реализация`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r,Step:i,Steps:a}=t;return r||u(`Callout`,!0),i||u(`Step`,!0),a||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Канон upstream: `,(0,n.jsx)(t.a,{href:`https://github.com/obra/superpowers/tree/main/skills/using-superpowers`,children:`obra/superpowers — using-superpowers`}),`. Ниже — полное рабочее содержимое, как его читает агент.`]}),`
`,(0,n.jsx)(r,{type:`warning`,children:(0,n.jsxs)(t.p,{children:[`Если агент запущен как `,(0,n.jsx)(t.strong,{children:`дочерний`}),` (subagent) на узкую задачу — этот skill `,(0,n.jsx)(t.strong,{children:`не`}),` применять: родитель уже выбрал порядок работы.`]})}),`
`,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Файл агента: skill `,(0,n.jsx)(t.code,{children:`using-superpowers`}),` (obra/superpowers). Читать `,(0,n.jsx)(t.strong,{children:`до`}),` любого ответа, в том числе до уточняющих вопросов.`]}),`
`,(0,n.jsx)(t.h2,{id:`правило`,children:`Правило`}),`
`,(0,n.jsxs)(t.p,{children:[`Подходящий skill вызывать `,(0,n.jsx)(t.strong,{children:`до`}),` любого действия: вопросов, обхода кода, чтения файлов. Если skill оказался не тем — его можно не продолжать.`]}),`
`,(0,n.jsx)(t.p,{children:`Перед режимом плана: если brainstorming ещё не был, сначала skill brainstorming.`}),`
`,(0,n.jsxs)(t.p,{children:[`Затем сказать: «Using [skill] to [purpose]» и идти `,(0,n.jsx)(t.strong,{children:`по skill буквально`}),`. Если в skill есть чеклист — завести todo на каждый пункт.`]}),`
`,(0,n.jsx)(t.h2,{id:`приоритет-skills`,children:`Приоритет skills`}),`
`,(0,n.jsxs)(t.p,{children:[`Если подходит несколько: сначала `,(0,n.jsx)(t.strong,{children:`процесс`}),` (как работать), потом `,(0,n.jsx)(t.strong,{children:`реализация`}),` (как писать код). Частые процесс-skills Superpowers: brainstorming, systematic-debugging.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Запрос`}),(0,n.jsx)(t.th,{children:`Сначала`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Сделай X»`}),(0,n.jsx)(t.td,{children:`brainstorming, затем skills реализации`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Почини баг»`}),(0,n.jsx)(t.td,{children:`systematic-debugging, затем предметные skills`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`красные-флаги`,children:`Красные флаги`}),`
`,(0,n.jsxs)(t.p,{children:[`Эти мысли значат: `,(0,n.jsx)(t.strong,{children:`стоп`}),`, идёт рационализация.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Мысль`}),(0,n.jsx)(t.th,{children:`Факт`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Это простой вопрос»`}),(0,n.jsx)(t.td,{children:`Вопрос — тоже задача. Сначала проверка skills.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Сначала нужен контекст»`}),(0,n.jsxs)(t.td,{children:[`Проверка skills `,(0,n.jsx)(t.strong,{children:`раньше`}),` уточняющих вопросов.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Сначала посмотрю код»`}),(0,n.jsxs)(t.td,{children:[`Skills говорят, `,(0,n.jsx)(t.strong,{children:`как`}),` смотреть. Сначала skill.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Быстро гляну git/файлы»`}),(0,n.jsx)(t.td,{children:`В файлах нет контекста разговора. Сначала skill.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Сначала соберу информацию»`}),(0,n.jsxs)(t.td,{children:[`Skills говорят, `,(0,n.jsx)(t.strong,{children:`как`}),` собирать.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Формальный skill не нужен»`}),(0,n.jsx)(t.td,{children:`Если skill есть — его используют.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Я этот skill помню»`}),(0,n.jsx)(t.td,{children:`Skills меняются. Читать текущую версию.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Это не задача»`}),(0,n.jsx)(t.td,{children:`Действие = задача. Проверить skills.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Skill слишком тяжёлый»`}),(0,n.jsx)(t.td,{children:`Простое часто раздувается. Skill всё равно.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Сначала сделаю вот это одно»`}),(0,n.jsxs)(t.td,{children:[`Проверка `,(0,n.jsx)(t.strong,{children:`до`}),` любого шага.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Так продуктивнее»`}),(0,n.jsx)(t.td,{children:`Действие без дисциплины тратит время. Skills держат порядок.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`«Я знаю, что это значит»`}),(0,n.jsx)(t.td,{children:`Знать понятие ≠ выполнить skill.`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`платформы`,children:`Платформы`}),`
`,(0,n.jsxs)(t.p,{children:[`Если среда указана в skill — читать её файл: Codex → `,(0,n.jsx)(t.code,{children:`references/codex-tools.md`}),`, Pi → `,(0,n.jsx)(t.code,{children:`references/pi-tools.md`}),`, Antigravity → `,(0,n.jsx)(t.code,{children:`references/antigravity-tools.md`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`инструкции-пользователя`,children:`Инструкции пользователя`}),`
`,(0,n.jsxs)(t.p,{children:[`Файлы вроде `,(0,n.jsx)(t.code,{children:`AGENTS.md`}),` / `,(0,n.jsx)(t.code,{children:`CLAUDE.md`}),` и прямые просьбы человека `,(0,n.jsx)(t.strong,{children:`важнее`}),` skills. Skills важнее поведения модели по умолчанию. Пропускать workflow skill можно `,(0,n.jsx)(t.strong,{children:`только`}),` если человек это явно сказал.`]})]}),`
`,(0,n.jsx)(t.h2,{id:`как-это-ложится-на-devcraft`,children:`Как это ложится на DevCraft`}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`skill-check`,children:`Skill check`}),(0,n.jsxs)(t.p,{children:[`Перед созданием или переносом модуля: есть ли brainstorming / writing-plans / `,(0,n.jsx)(t.a,{href:`create-devcraft-plugin`,children:`create-devcraft-plugin`}),`? Не писать `,(0,n.jsx)(t.code,{children:`manifest.php`}),` «с нуля» без проверки.`]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`процесс`,children:`Процесс`}),(0,n.jsxs)(t.p,{children:[`Сложный модуль → brainstorming / план → затем php-pro / `,(0,n.jsx)(t.a,{href:`create-devcraft-plugin`,children:`create-devcraft-plugin`}),`. Простые правки — короткий skill check (YAGNI через `,(0,n.jsx)(t.a,{href:`../rules/ponytail`,children:`ponytail`}),`).`]})]}),(0,n.jsxs)(i,{children:[(0,n.jsx)(t.h3,{id:`реализация`,children:`Реализация`}),(0,n.jsxs)(t.p,{children:[`Код по `,(0,n.jsx)(t.a,{href:`../../guides/php_devcraft_standards`,children:`php_devcraft_standards`}),` и `,(0,n.jsx)(t.a,{href:`../../../../../instructions/constitution`,children:`конституции`}),`.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`grill-with-docs`,children:`grill-with-docs`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/ai_tools`,children:`Справочник ИИ`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../`,children:`Помощь в разработке`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};