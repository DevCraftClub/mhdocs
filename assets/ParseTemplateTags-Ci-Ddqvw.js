import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: ParseTemplateTags`,description:`Парсинг тегов шаблонов новости DLE для модулей DevCraft.`},i=new Date(1786544989e3),a=`

## Краткое содержание [#краткое-содержание]

Статический хелпер: подставляет **все теги шаблонов новости DLE** (short/full) в произвольную строку через \`dle_template\` + логику \`show.short\` / \`show.custom\` / \`show.full\`. URL полной новости — \`DLEUrl::BuildUrl('showfull')\`.

Модульные плейсхолдеры TagsAdd (\`{user}\`, \`{suggested_tags}\`, …) передаются в \`$extra\` и не ломают DLE-теги.

***

### Методы [#методы]

* public [fullLink()](#method_fullLink)
* public [title()](#method_title)
* public [apply()](#method_apply)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Support/ParseTemplateTags.php\`
* Fill-логика: \`devcraft/src/classes/Support/ParseTemplateTags/fill_news.php\`
* Namespace: \`DevCraft\\Core\\Support\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_fullLink" />

### fullLink() [#fulllink]

URL полной новости, как в \`engine/modules/show.full.php\`.

**Параметры:**

* \`$row\` — поля post (\`id\`, \`alt_name\`, \`category\`, \`date\`).

**Возвращает:** \`string\`

<span id="method_title" />

### title() [#title]

Экранированный заголовок как \`{title}\` в DLE.

<span id="method_apply" />

### apply() [#apply]

\`\`\`php
ParseTemplateTags::apply(
    string $template,
    array $row,
    array $extra = [],
    array $options = [] // mode: short|full, globals: bool
): string
\`\`\`

Парсит теги новости (\`{title}\`, \`{full-link}\`, \`[full-link]…[/full-link]\`, категории, даты, автор, теги, xfields, rating, \`{short-story}\` / \`{full-story}\`, …), затем подставляет \`$extra\`.

Автоматически добавляет совместимость: \`%title%\`, \`%link%\`, если их нет в \`$extra\`.

**Пример:**

\`\`\`php
use DevCraft\\Core\\Support\\ParseTemplateTags;

$body = ParseTemplateTags::apply(
    '«{title}»: <a href="{full-link}">открыть</a>. От {user}: {suggested_tags}',
    $newsRow,
    [
        '{user}'           => 'Admin',
        '{suggested_tags}' => 'a, b',
    ]
);
\`\`\`
`,o={contents:[{heading:`краткое-содержание`,content:"Статический хелпер: подставляет **все теги шаблонов новости DLE** (short/full) в произвольную строку через `dle_template` + логику `show.short` / `show.custom` / `show.full`. URL полной новости — `DLEUrl::BuildUrl('showfull')`."},{heading:`краткое-содержание`,content:"Модульные плейсхолдеры TagsAdd (`{user}`, `{suggested_tags}`, …) передаются в `$extra` и не ломают DLE-теги."},{heading:`методы`,content:`public fullLink()`},{heading:`методы`,content:`public title()`},{heading:`методы`,content:`public apply()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Support/ParseTemplateTags.php`"},{heading:`подробности`,content:"Fill-логика: `devcraft/src/classes/Support/ParseTemplateTags/fill_news.php`"},{heading:`подробности`,content:"Namespace: `DevCraft\\Core\\Support`"},{heading:`fulllink`,content:"URL полной новости, как в `engine/modules/show.full.php`."},{heading:`fulllink`,content:`**Параметры:**`},{heading:`fulllink`,content:"`$row` — поля post (`id`, `alt_name`, `category`, `date`)."},{heading:`fulllink`,content:"**Возвращает:** `string`"},{heading:`title`,content:"Экранированный заголовок как `{title}` в DLE."},{heading:`apply`,content:"Парсит теги новости (`{title}`, `{full-link}`, `[full-link]…[/full-link]`, категории, даты, автор, теги, xfields, rating, `{short-story}` / `{full-story}`, …), затем подставляет `$extra`."},{heading:`apply`,content:"Автоматически добавляет совместимость: `%title%`, `%link%`, если их нет в `$extra`."},{heading:`apply`,content:`**Пример:**`}],headings:[{id:`краткое-содержание`,content:`Краткое содержание`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`fulllink`,content:`fullLink()`},{id:`title`,content:`title()`},{id:`apply`,content:`apply()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#fulllink`,title:(0,n.jsx)(n.Fragment,{children:`fullLink()`})},{depth:3,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:`title()`})},{depth:3,url:`#apply`,title:(0,n.jsx)(n.Fragment,{children:`apply()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Статический хелпер: подставляет `,(0,n.jsx)(t.strong,{children:`все теги шаблонов новости DLE`}),` (short/full) в произвольную строку через `,(0,n.jsx)(t.code,{children:`dle_template`}),` + логику `,(0,n.jsx)(t.code,{children:`show.short`}),` / `,(0,n.jsx)(t.code,{children:`show.custom`}),` / `,(0,n.jsx)(t.code,{children:`show.full`}),`. URL полной новости — `,(0,n.jsx)(t.code,{children:`DLEUrl::BuildUrl('showfull')`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модульные плейсхолдеры TagsAdd (`,(0,n.jsx)(t.code,{children:`{user}`}),`, `,(0,n.jsx)(t.code,{children:`{suggested_tags}`}),`, …) передаются в `,(0,n.jsx)(t.code,{children:`$extra`}),` и не ломают DLE-теги.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_fullLink`,children:`fullLink()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_title`,children:`title()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_apply`,children:`apply()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/ParseTemplateTags.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Fill-логика: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Support/ParseTemplateTags/fill_news.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Namespace: `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Support`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_fullLink`}),`
`,(0,n.jsx)(t.h3,{id:`fulllink`,children:`fullLink()`}),`
`,(0,n.jsxs)(t.p,{children:[`URL полной новости, как в `,(0,n.jsx)(t.code,{children:`engine/modules/show.full.php`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$row`}),` — поля post (`,(0,n.jsx)(t.code,{children:`id`}),`, `,(0,n.jsx)(t.code,{children:`alt_name`}),`, `,(0,n.jsx)(t.code,{children:`category`}),`, `,(0,n.jsx)(t.code,{children:`date`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(`span`,{id:`method_title`}),`
`,(0,n.jsx)(t.h3,{id:`title`,children:`title()`}),`
`,(0,n.jsxs)(t.p,{children:[`Экранированный заголовок как `,(0,n.jsx)(t.code,{children:`{title}`}),` в DLE.`]}),`
`,(0,n.jsx)(`span`,{id:`method_apply`}),`
`,(0,n.jsx)(t.h3,{id:`apply`,children:`apply()`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ParseTemplateTags`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`apply`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $template,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $row,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $extra `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $options `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [] `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// mode: short|full, globals: bool`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`): `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Парсит теги новости (`,(0,n.jsx)(t.code,{children:`{title}`}),`, `,(0,n.jsx)(t.code,{children:`{full-link}`}),`, `,(0,n.jsx)(t.code,{children:`[full-link]…[/full-link]`}),`, категории, даты, автор, теги, xfields, rating, `,(0,n.jsx)(t.code,{children:`{short-story}`}),` / `,(0,n.jsx)(t.code,{children:`{full-story}`}),`, …), затем подставляет `,(0,n.jsx)(t.code,{children:`$extra`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Автоматически добавляет совместимость: `,(0,n.jsx)(t.code,{children:`%title%`}),`, `,(0,n.jsx)(t.code,{children:`%link%`}),`, если их нет в `,(0,n.jsx)(t.code,{children:`$extra`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Support\\ParseTemplateTags`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$body `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ParseTemplateTags`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`apply`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    '«{title}»: <a href="{full-link}">открыть</a>. От {user}: {suggested_tags}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $newsRow,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    [`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        '{user}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`           =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Admin'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        '{suggested_tags}'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'a, b'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    ]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};