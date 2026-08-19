import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Перечисление: ChangelogChangeType`,description:`Документация по плагину перечисление: changelogchangetype для DLE.`},i=new Date(1787124777e3),a=`

## Краткое содержание: [#краткое-содержание]

Тип записи в журнале изменений (формат Keep a Changelog).

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [orderedCases()](#method_orderedCases)
* public [fromKey()](#method_fromKey)
* public [fromLegacyTag()](#method_fromLegacyTag)
* public [key()](#method_key)
* public [label()](#method_label)
* public [title()](#method_title)

***

### Значения [#значения]

* [ADDED](#case_ADDED) — Тип записи в журнале изменений (формат Keep a Changelog).
* [CHANGED](#case_CHANGED) — Изменение существующей функциональности.
* [DEPRECATED](#case_DEPRECATED) — Устаревшая функциональность.
* [REMOVED](#case_REMOVED) — Удалённая функциональность.
* [FIXED](#case_FIXED) — Исправление ошибки.
* [SECURITY](#case_SECURITY) — Исправление уязвимости безопасности.

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Enums/ChangelogChangeType.php\`

***

## Детали [#детали]

### Значения перечисления [#значения-перечисления]

<span id="case_ADDED" />

#### ADDED [#added]

Тип записи в журнале изменений (формат Keep a Changelog).

<span id="case_CHANGED" />

#### CHANGED [#changed]

Изменение существующей функциональности.

<span id="case_DEPRECATED" />

#### DEPRECATED [#deprecated]

Устаревшая функциональность.

<span id="case_REMOVED" />

#### REMOVED [#removed]

Удалённая функциональность.

<span id="case_FIXED" />

#### FIXED [#fixed]

Исправление ошибки.

<span id="case_SECURITY" />

#### SECURITY [#security]

Исправление уязвимости безопасности.

### Методы [#методы-1]

<span id="method_orderedCases" />

### orderedCases() [#orderedcases]

Возвращает все варианты перечисления в порядке отображения в UI.

**С версии:** 200.4.0

**Возвращает:** \`self[]\` —

<span id="method_fromKey" />

### fromKey() [#fromkey]

Создаёт вариант перечисления по строковому ключу.

**С версии:** 200.4.0

**Параметры:**

* \`$key\` — Ключ типа (\`added\`, \`fixed\` и т. д.).

**Возвращает:** \`self\` — Соответствующий вариант перечисления.

<span id="method_fromLegacyTag" />

### fromLegacyTag() [#fromlegacytag]

Преобразует legacy-тег из старого формата changelog в вариант перечисления.

**С версии:** 200.4.0

**Параметры:**

* \`$tag\` — Тег в формате MHAdmin (\`NEW\`, \`UPDATE\`, \`FIX\` и т. д.).

**Возвращает:** \`self\` — Соответствующий вариант перечисления.

<span id="method_key" />

### key() [#key]

Возвращает машинный ключ типа для массивов и шаблонов.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Ключ в нижнем регистре (\`added\`, \`fixed\` и т. д.).

<span id="method_label" />

### label() [#label]

Возвращает англоязычную метку типа для внутреннего использования.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Метка на английском (\`Added\`, \`Fixed\` и т. д.).

<span id="method_title" />

### title() [#title]

Возвращает локализованный заголовок секции changelog.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Переведённый заголовок для отображения в админке.
`,o={contents:[{heading:`краткое-содержание`,content:`Тип записи в журнале изменений (формат Keep a Changelog).`},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public orderedCases()`},{heading:`методы`,content:`public fromKey()`},{heading:`методы`,content:`public fromLegacyTag()`},{heading:`методы`,content:`public key()`},{heading:`методы`,content:`public label()`},{heading:`методы`,content:`public title()`},{heading:`значения`,content:`ADDED — Тип записи в журнале изменений (формат Keep a Changelog).`},{heading:`значения`,content:`CHANGED — Изменение существующей функциональности.`},{heading:`значения`,content:`DEPRECATED — Устаревшая функциональность.`},{heading:`значения`,content:`REMOVED — Удалённая функциональность.`},{heading:`значения`,content:`FIXED — Исправление ошибки.`},{heading:`значения`,content:`SECURITY — Исправление уязвимости безопасности.`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Enums/ChangelogChangeType.php`"},{heading:`added`,content:`Тип записи в журнале изменений (формат Keep a Changelog).`},{heading:`changed`,content:`Изменение существующей функциональности.`},{heading:`deprecated`,content:`Устаревшая функциональность.`},{heading:`removed`,content:`Удалённая функциональность.`},{heading:`fixed`,content:`Исправление ошибки.`},{heading:`security`,content:`Исправление уязвимости безопасности.`},{heading:`orderedcases`,content:`Возвращает все варианты перечисления в порядке отображения в UI.`},{heading:`orderedcases`,content:`**С версии:** 200.4.0`},{heading:`orderedcases`,content:"**Возвращает:** `self[]` —"},{heading:`fromkey`,content:`Создаёт вариант перечисления по строковому ключу.`},{heading:`fromkey`,content:`**С версии:** 200.4.0`},{heading:`fromkey`,content:`**Параметры:**`},{heading:`fromkey`,content:"`$key` — Ключ типа (`added`, `fixed` и т. д.)."},{heading:`fromkey`,content:"**Возвращает:** `self` — Соответствующий вариант перечисления."},{heading:`fromlegacytag`,content:`Преобразует legacy-тег из старого формата changelog в вариант перечисления.`},{heading:`fromlegacytag`,content:`**С версии:** 200.4.0`},{heading:`fromlegacytag`,content:`**Параметры:**`},{heading:`fromlegacytag`,content:"`$tag` — Тег в формате MHAdmin (`NEW`, `UPDATE`, `FIX` и т. д.)."},{heading:`fromlegacytag`,content:"**Возвращает:** `self` — Соответствующий вариант перечисления."},{heading:`key`,content:`Возвращает машинный ключ типа для массивов и шаблонов.`},{heading:`key`,content:`**С версии:** 200.4.0`},{heading:`key`,content:"**Возвращает:** `string` — Ключ в нижнем регистре (`added`, `fixed` и т. д.)."},{heading:`label`,content:`Возвращает англоязычную метку типа для внутреннего использования.`},{heading:`label`,content:`**С версии:** 200.4.0`},{heading:`label`,content:"**Возвращает:** `string` — Метка на английском (`Added`, `Fixed` и т. д.)."},{heading:`title`,content:`Возвращает локализованный заголовок секции changelog.`},{heading:`title`,content:`**С версии:** 200.4.0`},{heading:`title`,content:"**Возвращает:** `string` — Переведённый заголовок для отображения в админке."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`значения`,content:`Значения`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`значения-перечисления`,content:`Значения перечисления`},{id:`added`,content:`ADDED`},{id:`changed`,content:`CHANGED`},{id:`deprecated`,content:`DEPRECATED`},{id:`removed`,content:`REMOVED`},{id:`fixed`,content:`FIXED`},{id:`security`,content:`SECURITY`},{id:`методы-1`,content:`Методы`},{id:`orderedcases`,content:`orderedCases()`},{id:`fromkey`,content:`fromKey()`},{id:`fromlegacytag`,content:`fromLegacyTag()`},{id:`key`,content:`key()`},{id:`label`,content:`label()`},{id:`title`,content:`title()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#значения`,title:(0,n.jsx)(n.Fragment,{children:`Значения`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#значения-перечисления`,title:(0,n.jsx)(n.Fragment,{children:`Значения перечисления`})},{depth:4,url:`#added`,title:(0,n.jsx)(n.Fragment,{children:`ADDED`})},{depth:4,url:`#changed`,title:(0,n.jsx)(n.Fragment,{children:`CHANGED`})},{depth:4,url:`#deprecated`,title:(0,n.jsx)(n.Fragment,{children:`DEPRECATED`})},{depth:4,url:`#removed`,title:(0,n.jsx)(n.Fragment,{children:`REMOVED`})},{depth:4,url:`#fixed`,title:(0,n.jsx)(n.Fragment,{children:`FIXED`})},{depth:4,url:`#security`,title:(0,n.jsx)(n.Fragment,{children:`SECURITY`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#orderedcases`,title:(0,n.jsx)(n.Fragment,{children:`orderedCases()`})},{depth:3,url:`#fromkey`,title:(0,n.jsx)(n.Fragment,{children:`fromKey()`})},{depth:3,url:`#fromlegacytag`,title:(0,n.jsx)(n.Fragment,{children:`fromLegacyTag()`})},{depth:3,url:`#key`,title:(0,n.jsx)(n.Fragment,{children:`key()`})},{depth:3,url:`#label`,title:(0,n.jsx)(n.Fragment,{children:`label()`})},{depth:3,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:`title()`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Тип записи в журнале изменений (формат Keep a Changelog).`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_orderedCases`,children:`orderedCases()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fromKey`,children:`fromKey()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fromLegacyTag`,children:`fromLegacyTag()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_key`,children:`key()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_label`,children:`label()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_title`,children:`title()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`значения`,children:`Значения`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_ADDED`,children:`ADDED`}),` — Тип записи в журнале изменений (формат Keep a Changelog).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_CHANGED`,children:`CHANGED`}),` — Изменение существующей функциональности.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_DEPRECATED`,children:`DEPRECATED`}),` — Устаревшая функциональность.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_REMOVED`,children:`REMOVED`}),` — Удалённая функциональность.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_FIXED`,children:`FIXED`}),` — Исправление ошибки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`#case_SECURITY`,children:`SECURITY`}),` — Исправление уязвимости безопасности.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Enums/ChangelogChangeType.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`значения-перечисления`,children:`Значения перечисления`}),`
`,(0,n.jsx)(`span`,{id:`case_ADDED`}),`
`,(0,n.jsx)(t.h4,{id:`added`,children:`ADDED`}),`
`,(0,n.jsx)(t.p,{children:`Тип записи в журнале изменений (формат Keep a Changelog).`}),`
`,(0,n.jsx)(`span`,{id:`case_CHANGED`}),`
`,(0,n.jsx)(t.h4,{id:`changed`,children:`CHANGED`}),`
`,(0,n.jsx)(t.p,{children:`Изменение существующей функциональности.`}),`
`,(0,n.jsx)(`span`,{id:`case_DEPRECATED`}),`
`,(0,n.jsx)(t.h4,{id:`deprecated`,children:`DEPRECATED`}),`
`,(0,n.jsx)(t.p,{children:`Устаревшая функциональность.`}),`
`,(0,n.jsx)(`span`,{id:`case_REMOVED`}),`
`,(0,n.jsx)(t.h4,{id:`removed`,children:`REMOVED`}),`
`,(0,n.jsx)(t.p,{children:`Удалённая функциональность.`}),`
`,(0,n.jsx)(`span`,{id:`case_FIXED`}),`
`,(0,n.jsx)(t.h4,{id:`fixed`,children:`FIXED`}),`
`,(0,n.jsx)(t.p,{children:`Исправление ошибки.`}),`
`,(0,n.jsx)(`span`,{id:`case_SECURITY`}),`
`,(0,n.jsx)(t.h4,{id:`security`,children:`SECURITY`}),`
`,(0,n.jsx)(t.p,{children:`Исправление уязвимости безопасности.`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_orderedCases`}),`
`,(0,n.jsx)(t.h3,{id:`orderedcases`,children:`orderedCases()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает все варианты перечисления в порядке отображения в UI.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self[]`}),` —`]}),`
`,(0,n.jsx)(`span`,{id:`method_fromKey`}),`
`,(0,n.jsx)(t.h3,{id:`fromkey`,children:`fromKey()`}),`
`,(0,n.jsx)(t.p,{children:`Создаёт вариант перечисления по строковому ключу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` — Ключ типа (`,(0,n.jsx)(t.code,{children:`added`}),`, `,(0,n.jsx)(t.code,{children:`fixed`}),` и т. д.).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Соответствующий вариант перечисления.`]}),`
`,(0,n.jsx)(`span`,{id:`method_fromLegacyTag`}),`
`,(0,n.jsx)(t.h3,{id:`fromlegacytag`,children:`fromLegacyTag()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует legacy-тег из старого формата changelog в вариант перечисления.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$tag`}),` — Тег в формате MHAdmin (`,(0,n.jsx)(t.code,{children:`NEW`}),`, `,(0,n.jsx)(t.code,{children:`UPDATE`}),`, `,(0,n.jsx)(t.code,{children:`FIX`}),` и т. д.).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` — Соответствующий вариант перечисления.`]}),`
`,(0,n.jsx)(`span`,{id:`method_key`}),`
`,(0,n.jsx)(t.h3,{id:`key`,children:`key()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает машинный ключ типа для массивов и шаблонов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Ключ в нижнем регистре (`,(0,n.jsx)(t.code,{children:`added`}),`, `,(0,n.jsx)(t.code,{children:`fixed`}),` и т. д.).`]}),`
`,(0,n.jsx)(`span`,{id:`method_label`}),`
`,(0,n.jsx)(t.h3,{id:`label`,children:`label()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает англоязычную метку типа для внутреннего использования.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Метка на английском (`,(0,n.jsx)(t.code,{children:`Added`}),`, `,(0,n.jsx)(t.code,{children:`Fixed`}),` и т. д.).`]}),`
`,(0,n.jsx)(`span`,{id:`method_title`}),`
`,(0,n.jsx)(t.h3,{id:`title`,children:`title()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает локализованный заголовок секции changelog.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Переведённый заголовок для отображения в админке.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};