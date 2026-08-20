import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Точки входа`,description:`Точки входа DevCraft Admin: DLE, bootstrap, AJAX.`},i=new Date(1787213191e3),a=`

DevCraft Admin использует четыре основных входа в код плагина.

## 1. \`engine/inc/devcraft.php\` [#1-engineincdevcraftphp]

Тонкая обёртка для DLE 20.0 Admin:

* проверяет константы \`DATALIFEENGINE\` и \`LOGGED_IN\`;
* подключает \`devcraft/init.php\`;
* вызывает \`Application::instance()->runAdmin(moduleDir: 'Admin')\`.

Это файл, который регистрируется в менеджере плагинов DLE как модуль админки.

## 2. \`devcraft/init.php\` [#2-devcraftinitphp]

Bootstrap плагина:

* определяет \`DEVCRAFT_BOOTSTRAPPED\`;
* подключает \`vendor/autoload.php\` (Composer);
* при отсутствии \`vendor/\` выводит предупреждение в админке;
* регистрирует пути через \`Paths::register()\` и запускает ядро.

Используется и для админ-страниц, и как зависимость для AJAX.

## 3. \`devcraft/ajax.php\` [#3-devcraftajaxphp]

Тонкая точка входа для JSON/AJAX:

* эмулирует минимальное окружение DLE (\`DATALIFEENGINE\`, \`ROOT_DIR\`, \`ENGINE_DIR\`);
* подключает \`devcraft/src/bootstrap/ajax-session.php\` для сессии админки;
* загружает \`init.php\` и делегирует запрос \`AjaxController\`.

Типичный URL ядра: \`/devcraft/ajax.php?controller=admin&method=settings\`.

Для **сателлитных*&#x2A; модулей параметр **\`mod\` обязателен**, иначе реестр ищет метод в \`devcraft\` и отвечает \`unknown_method\`:

\`\`\`text
/devcraft/ajax.php?mod=tags_add&controller=admin&method=save_suggestion
\`\`\`

Клиент \`DevCraft.Ajax.post(method, data)\` подставляет \`mod\` из \`body[data-mod]\` (layout админки). Не вызывайте AJAX без \`mod\` для сателлитов.

## 4. \`devcraft/src/bootstrap/\` [#4-devcraftsrcbootstrap]

| Файл               | Назначение                                                          |
| ------------------ | ------------------------------------------------------------------- |
| \`functions.php\`    | Глобальные функции \`__()\`, \`translate()\`, \`dirToArray()\`, \`br2nl()\` |
| \`ajax-session.php\` | Минимальная авторизация админ-сессии до полного bootstrap           |

## Поток запроса (админ-страница) [#поток-запроса-админ-страница]

\`\`\`mermaid
sequenceDiagram
    participant DLE as DLE Admin
    participant Inc as engine/inc/devcraft.php
    participant Init as devcraft/init.php
    participant App as Application
    participant Router as Router

    DLE->>Inc: mod=devcraft
    Inc->>Init: require
    Init->>App: runAdmin(Admin)
    App->>Router: dispatch page
\`\`\`

## Поток запроса (AJAX) [#поток-запроса-ajax]

\`\`\`mermaid
sequenceDiagram
    participant Browser
    participant Ajax as devcraft/ajax.php
    participant Session as ajax-session.php
    participant Ctrl as AjaxController

    Browser->>Ajax: POST controller/method
    Ajax->>Session: admin session
    Ajax->>Ctrl: handle JSON
\`\`\`

## См. также [#см-также]

* [Манифест модуля](manifest)
* [Класс Router](classes/Router)
* [Класс AjaxController](classes/AjaxController)
`,o={contents:[{heading:void 0,content:`DevCraft Admin использует четыре основных входа в код плагина.`},{heading:`1-engineincdevcraftphp`,content:`Тонкая обёртка для DLE 20.0 Admin:`},{heading:`1-engineincdevcraftphp`,content:"проверяет константы `DATALIFEENGINE` и `LOGGED_IN`;"},{heading:`1-engineincdevcraftphp`,content:"подключает `devcraft/init.php`;"},{heading:`1-engineincdevcraftphp`,content:"вызывает `Application::instance()->runAdmin(moduleDir: 'Admin')`."},{heading:`1-engineincdevcraftphp`,content:`Это файл, который регистрируется в менеджере плагинов DLE как модуль админки.`},{heading:`2-devcraftinitphp`,content:`Bootstrap плагина:`},{heading:`2-devcraftinitphp`,content:"определяет `DEVCRAFT_BOOTSTRAPPED`;"},{heading:`2-devcraftinitphp`,content:"подключает `vendor/autoload.php` (Composer);"},{heading:`2-devcraftinitphp`,content:"при отсутствии `vendor/` выводит предупреждение в админке;"},{heading:`2-devcraftinitphp`,content:"регистрирует пути через `Paths::register()` и запускает ядро."},{heading:`2-devcraftinitphp`,content:`Используется и для админ-страниц, и как зависимость для AJAX.`},{heading:`3-devcraftajaxphp`,content:`Тонкая точка входа для JSON/AJAX:`},{heading:`3-devcraftajaxphp`,content:"эмулирует минимальное окружение DLE (`DATALIFEENGINE`, `ROOT_DIR`, `ENGINE_DIR`);"},{heading:`3-devcraftajaxphp`,content:"подключает `devcraft/src/bootstrap/ajax-session.php` для сессии админки;"},{heading:`3-devcraftajaxphp`,content:"загружает `init.php` и делегирует запрос `AjaxController`."},{heading:`3-devcraftajaxphp`,content:"Типичный URL ядра: `/devcraft/ajax.php?controller=admin&method=settings`."},{heading:`3-devcraftajaxphp`,content:"Для **сателлитных*&#x2A; модулей параметр **`mod` обязателен**, иначе реестр ищет метод в `devcraft` и отвечает `unknown_method`:"},{heading:`3-devcraftajaxphp`,content:"Клиент `DevCraft.Ajax.post(method, data)` подставляет `mod` из `body[data-mod]` (layout админки). Не вызывайте AJAX без `mod` для сателлитов."},{heading:`4-devcraftsrcbootstrap`,content:`Файл`},{heading:`4-devcraftsrcbootstrap`,content:`Назначение`},{heading:`4-devcraftsrcbootstrap`,content:"`functions.php`"},{heading:`4-devcraftsrcbootstrap`,content:"Глобальные функции `__()`, `translate()`, `dirToArray()`, `br2nl()`"},{heading:`4-devcraftsrcbootstrap`,content:"`ajax-session.php`"},{heading:`4-devcraftsrcbootstrap`,content:`Минимальная авторизация админ-сессии до полного bootstrap`},{heading:`см-также`,content:`Манифест модуля`},{heading:`см-также`,content:`Класс Router`},{heading:`см-также`,content:`Класс AjaxController`}],headings:[{id:`1-engineincdevcraftphp`,content:"1\\. `engine/inc/devcraft.php`"},{id:`2-devcraftinitphp`,content:"2\\. `devcraft/init.php`"},{id:`3-devcraftajaxphp`,content:"3\\. `devcraft/ajax.php`"},{id:`4-devcraftsrcbootstrap`,content:"4\\. `devcraft/src/bootstrap/`"},{id:`поток-запроса-админ-страница`,content:`Поток запроса (админ-страница)`},{id:`поток-запроса-ajax`,content:`Поток запроса (AJAX)`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#1-engineincdevcraftphp`,title:(0,n.jsxs)(n.Fragment,{children:[`1. `,(0,n.jsx)(`code`,{children:`engine/inc/devcraft.php`})]})},{depth:2,url:`#2-devcraftinitphp`,title:(0,n.jsxs)(n.Fragment,{children:[`2. `,(0,n.jsx)(`code`,{children:`devcraft/init.php`})]})},{depth:2,url:`#3-devcraftajaxphp`,title:(0,n.jsxs)(n.Fragment,{children:[`3. `,(0,n.jsx)(`code`,{children:`devcraft/ajax.php`})]})},{depth:2,url:`#4-devcraftsrcbootstrap`,title:(0,n.jsxs)(n.Fragment,{children:[`4. `,(0,n.jsx)(`code`,{children:`devcraft/src/bootstrap/`})]})},{depth:2,url:`#поток-запроса-админ-страница`,title:(0,n.jsx)(n.Fragment,{children:`Поток запроса (админ-страница)`})},{depth:2,url:`#поток-запроса-ajax`,title:(0,n.jsx)(n.Fragment,{children:`Поток запроса (AJAX)`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`DevCraft Admin использует четыре основных входа в код плагина.`}),`
`,(0,n.jsxs)(t.h2,{id:`1-engineincdevcraftphp`,children:[`1. `,(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`})]}),`
`,(0,n.jsx)(t.p,{children:`Тонкая обёртка для DLE 20.0 Admin:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`проверяет константы `,(0,n.jsx)(t.code,{children:`DATALIFEENGINE`}),` и `,(0,n.jsx)(t.code,{children:`LOGGED_IN`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`подключает `,(0,n.jsx)(t.code,{children:`devcraft/init.php`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`вызывает `,(0,n.jsx)(t.code,{children:`Application::instance()->runAdmin(moduleDir: 'Admin')`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Это файл, который регистрируется в менеджере плагинов DLE как модуль админки.`}),`
`,(0,n.jsxs)(t.h2,{id:`2-devcraftinitphp`,children:[`2. `,(0,n.jsx)(t.code,{children:`devcraft/init.php`})]}),`
`,(0,n.jsx)(t.p,{children:`Bootstrap плагина:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`определяет `,(0,n.jsx)(t.code,{children:`DEVCRAFT_BOOTSTRAPPED`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`подключает `,(0,n.jsx)(t.code,{children:`vendor/autoload.php`}),` (Composer);`]}),`
`,(0,n.jsxs)(t.li,{children:[`при отсутствии `,(0,n.jsx)(t.code,{children:`vendor/`}),` выводит предупреждение в админке;`]}),`
`,(0,n.jsxs)(t.li,{children:[`регистрирует пути через `,(0,n.jsx)(t.code,{children:`Paths::register()`}),` и запускает ядро.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Используется и для админ-страниц, и как зависимость для AJAX.`}),`
`,(0,n.jsxs)(t.h2,{id:`3-devcraftajaxphp`,children:[`3. `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`})]}),`
`,(0,n.jsx)(t.p,{children:`Тонкая точка входа для JSON/AJAX:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`эмулирует минимальное окружение DLE (`,(0,n.jsx)(t.code,{children:`DATALIFEENGINE`}),`, `,(0,n.jsx)(t.code,{children:`ROOT_DIR`}),`, `,(0,n.jsx)(t.code,{children:`ENGINE_DIR`}),`);`]}),`
`,(0,n.jsxs)(t.li,{children:[`подключает `,(0,n.jsx)(t.code,{children:`devcraft/src/bootstrap/ajax-session.php`}),` для сессии админки;`]}),`
`,(0,n.jsxs)(t.li,{children:[`загружает `,(0,n.jsx)(t.code,{children:`init.php`}),` и делегирует запрос `,(0,n.jsx)(t.code,{children:`AjaxController`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Типичный URL ядра: `,(0,n.jsx)(t.code,{children:`/devcraft/ajax.php?controller=admin&method=settings`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Для `,(0,n.jsx)(t.strong,{children:`сателлитных`}),` модулей параметр `,(0,n.jsxs)(t.strong,{children:[(0,n.jsx)(t.code,{children:`mod`}),` обязателен`]}),`, иначе реестр ищет метод в `,(0,n.jsx)(t.code,{children:`devcraft`}),` и отвечает `,(0,n.jsx)(t.code,{children:`unknown_method`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`/devcraft/ajax.php?mod=tags_add&controller=admin&method=save_suggestion`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Клиент `,(0,n.jsx)(t.code,{children:`DevCraft.Ajax.post(method, data)`}),` подставляет `,(0,n.jsx)(t.code,{children:`mod`}),` из `,(0,n.jsx)(t.code,{children:`body[data-mod]`}),` (layout админки). Не вызывайте AJAX без `,(0,n.jsx)(t.code,{children:`mod`}),` для сателлитов.`]}),`
`,(0,n.jsxs)(t.h2,{id:`4-devcraftsrcbootstrap`,children:[`4. `,(0,n.jsx)(t.code,{children:`devcraft/src/bootstrap/`})]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Файл`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`functions.php`})}),(0,n.jsxs)(t.td,{children:[`Глобальные функции `,(0,n.jsx)(t.code,{children:`__()`}),`, `,(0,n.jsx)(t.code,{children:`translate()`}),`, `,(0,n.jsx)(t.code,{children:`dirToArray()`}),`, `,(0,n.jsx)(t.code,{children:`br2nl()`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ajax-session.php`})}),(0,n.jsx)(t.td,{children:`Минимальная авторизация админ-сессии до полного bootstrap`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`поток-запроса-админ-страница`,children:`Поток запроса (админ-страница)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`sequenceDiagram`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant DLE as DLE Admin`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Inc as engine/inc/devcraft.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Init as devcraft/init.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant App as Application`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Router as Router`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    DLE->>Inc: mod=devcraft`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    Inc->>Init: require`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    Init->>App: runAdmin(Admin)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    App->>Router: dispatch page`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`поток-запроса-ajax`,children:`Поток запроса (AJAX)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`sequenceDiagram`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Browser`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Ajax as devcraft/ajax.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Session as ajax-session.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    participant Ctrl as AjaxController`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    Browser->>Ajax: POST controller/method`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    Ajax->>Session: admin session`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    Ajax->>Ctrl: handle JSON`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`manifest`,children:`Манифест модуля`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`classes/Router`,children:`Класс Router`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`classes/AjaxController`,children:`Класс AjaxController`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};