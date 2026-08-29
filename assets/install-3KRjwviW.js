import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Особые шаги DLE API после общей установки плагина DevCraft.`,version:`200.1.0`},i=new Date(1788011088e3),a=`

Как поставить zip через менеджер плагинов DLE, скрипт архива или копирование \`upload/&#x60; — в общей инструкции: &#x2A;*[Установка плагинов](/instructions/install_instructions)**.

Ниже — только то, что **специфично для DLE API**.

## Требования модуля [#требования-модуля]

| Компонент       | Версия                |
| --------------- | --------------------- |
| DataLife Engine | ≥ 20.0                |
| PHP             | ≥ 8.3                 |
| DevCraft Admin  | ≥ 200.4.0             |
| MySQL / MariaDB | InnoDB (Foreign Keys) |

<Callout type="warn" title="Сначала DevCraft Admin">
  Установите и настройте [DevCraft Admin](../../devcraft_admin/install), затем DLE API.
</Callout>

## После установки плагина [#после-установки-плагина]

Проверьте, что на сайте появились:

* \`engine/inc/dleapi.php\` — stub админки DLE
* \`devcraft/src/modules/DleApi/\` — модуль DevCraft
* \`api/\` — runtime \`/api/v2\`, Fluent, Schemas, SDK
* локаль \`devcraft/locales/ru_RU/dleapi.xliff\`

### Composer в \`api/\` [#composer-в-api]

Зависимости API лежат в каталоге &#x2A;*\`api/\`** (не только в \`devcraft/\`):

\`\`\`bash
cd api && composer install
\`\`\`

Общий Composer для DevCraft: [Установка плагинов](/instructions/install_instructions) и [Composer](/instructions/composer).

### Таблицы API [#таблицы-api]

Откройте модуль **DLE API** в DevCraft. При первом обращении Cycle создаст таблицы \`{prefix}_api_keys\`, \`{prefix}_api_scope\`, \`{prefix}_api_oauth_*\` (миграции в \`devcraft/src/database/migrations/\`). В \`install.xml\` DDL этих таблиц нет.

### Дальше [#дальше]

1. Создайте API-ключ и [OAuth-клиент](guides/oauth-client)
2. Проверьте [\`.env\`](guides/env) (\`DEMO_MODE=false\`, если нужны токены)
3. [Авторизация](guides/auth) → [эндпоинты](guides/endpoints)

## Профиль на сайте (опционально) [#профиль-на-сайте-опционально]

Кнопка «Запросить ключ» сама не появляется. Нужны include в скине и флаги в [Настройках](guides/settings). Теги шаблона: [Шаблоны](guides/templates).

1. Включите **Показывать блок** / **Разрешить генерировать** и задайте [уровень](guides/access-levels) или [синхронизацию групп](guides/access-sync).
2. В \`userinfo.tpl\` (без \`[own-profile]\`):

\`\`\`html
{include file="engine/modules/devcraft/dleapi_profile.php"}
\`\`\`

3. В \`main.tpl\` перед \`</body>\`:

\`\`\`html
[available=userinfo]
{include file="engine/modules/devcraft/dleapi_profile.php?focus=js"}
[/available]
\`\`\`

4. Очистите кеш шаблонов. Переопределить вид: скопируйте \`templates/Default/devcraft/dleapi/\` в свою тему.

Без шага с JS в блоке будет «DevCraftPublic недоступен». Гость чужой ключ не видит; админ на чужом профиле может одобрять заявки.

## Редирект \`/api\` → \`/api/v2\` [#редирект-api--apiv2]

**Apache:** правила уже в \`api/.htaccess\`.

**nginx** (фрагмент \`server\`):

\`\`\`nginx
location = /api {
    return 308 /api/v2/;
}
location /api/v1 {
    rewrite ^/api/v1/?(.*)$ /api/v2/$1 permanent;
}
location /api/v2/ {
    try_files $uri /api/v2/index.php?$query_string;
}
\`\`\`

## См. также [#см-также]

* [Установка плагинов](/instructions/install_instructions)
* [Начало работы](getting_started)
* [Инструкция .env](guides/env)
`,o={contents:[{heading:void 0,content:"Как поставить zip через менеджер плагинов DLE, скрипт архива или копирование `upload/` — в общей инструкции: **Установка плагинов**."},{heading:void 0,content:`Ниже — только то, что **специфично для DLE API**.`},{heading:`требования-модуля`,content:`Компонент`},{heading:`требования-модуля`,content:`Версия`},{heading:`требования-модуля`,content:`DataLife Engine`},{heading:`требования-модуля`,content:`≥ 20.0`},{heading:`требования-модуля`,content:`PHP`},{heading:`требования-модуля`,content:`≥ 8.3`},{heading:`требования-модуля`,content:`DevCraft Admin`},{heading:`требования-модуля`,content:`≥ 200.4.0`},{heading:`требования-модуля`,content:`MySQL / MariaDB`},{heading:`требования-модуля`,content:`InnoDB (Foreign Keys)`},{heading:`требования-модуля`,content:`Установите и настройте DevCraft Admin, затем DLE API.`},{heading:`после-установки-плагина`,content:`Проверьте, что на сайте появились:`},{heading:`после-установки-плагина`,content:"`engine/inc/dleapi.php` — stub админки DLE"},{heading:`после-установки-плагина`,content:"`devcraft/src/modules/DleApi/` — модуль DevCraft"},{heading:`после-установки-плагина`,content:"`api/` — runtime `/api/v2`, Fluent, Schemas, SDK"},{heading:`после-установки-плагина`,content:"локаль `devcraft/locales/ru_RU/dleapi.xliff`"},{heading:`composer-в-api`,content:"Зависимости API лежат в каталоге &#x2A;*`api/`** (не только в `devcraft/`):"},{heading:`composer-в-api`,content:`Общий Composer для DevCraft: Установка плагинов и Composer.`},{heading:`таблицы-api`,content:"Откройте модуль **DLE API** в DevCraft. При первом обращении Cycle создаст таблицы `{prefix}_api_keys`, `{prefix}_api_scope`, `{prefix}_api_oauth_*` (миграции в `devcraft/src/database/migrations/`). В `install.xml` DDL этих таблиц нет."},{heading:`дальше`,content:`Создайте API-ключ и OAuth-клиент`},{heading:`дальше`,content:"Проверьте `.env` (`DEMO_MODE=false`, если нужны токены)"},{heading:`дальше`,content:`Авторизация → эндпоинты`},{heading:`профиль-на-сайте-опционально`,content:`Кнопка «Запросить ключ» сама не появляется. Нужны include в скине и флаги в Настройках. Теги шаблона: Шаблоны.`},{heading:`профиль-на-сайте-опционально`,content:`Включите **Показывать блок** / **Разрешить генерировать** и задайте уровень или синхронизацию групп.`},{heading:`профиль-на-сайте-опционально`,content:"В `userinfo.tpl` (без `[own-profile]`):"},{heading:`профиль-на-сайте-опционально`,content:"В `main.tpl` перед `</body>`:"},{heading:`профиль-на-сайте-опционально`,content:"Очистите кеш шаблонов. Переопределить вид: скопируйте `templates/Default/devcraft/dleapi/` в свою тему."},{heading:`профиль-на-сайте-опционально`,content:`Без шага с JS в блоке будет «DevCraftPublic недоступен». Гость чужой ключ не видит; админ на чужом профиле может одобрять заявки.`},{heading:`редирект-api--apiv2`,content:"**Apache:** правила уже в `api/.htaccess`."},{heading:`редирект-api--apiv2`,content:"**nginx** (фрагмент `server`):"},{heading:`см-также`,content:`Установка плагинов`},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Инструкция .env`}],headings:[{id:`требования-модуля`,content:`Требования модуля`},{id:`после-установки-плагина`,content:`После установки плагина`},{id:`composer-в-api`,content:"Composer в `api/`"},{id:`таблицы-api`,content:`Таблицы API`},{id:`дальше`,content:`Дальше`},{id:`профиль-на-сайте-опционально`,content:`Профиль на сайте (опционально)`},{id:`редирект-api--apiv2`,content:"Редирект `/api` → `/api/v2`"},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Требования модуля`})},{depth:2,url:`#после-установки-плагина`,title:(0,n.jsx)(n.Fragment,{children:`После установки плагина`})},{depth:3,url:`#composer-в-api`,title:(0,n.jsxs)(n.Fragment,{children:[`Composer в `,(0,n.jsx)(`code`,{children:`api/`})]})},{depth:3,url:`#таблицы-api`,title:(0,n.jsx)(n.Fragment,{children:`Таблицы API`})},{depth:3,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})},{depth:2,url:`#профиль-на-сайте-опционально`,title:(0,n.jsx)(n.Fragment,{children:`Профиль на сайте (опционально)`})},{depth:2,url:`#редирект-api--apiv2`,title:(0,n.jsxs)(n.Fragment,{children:[`Редирект `,(0,n.jsx)(`code`,{children:`/api`}),` → `,(0,n.jsx)(`code`,{children:`/api/v2`})]})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Как поставить zip через менеджер плагинов DLE, скрипт архива или копирование `,(0,n.jsx)(t.code,{children:`upload/`}),` — в общей инструкции: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ниже — только то, что `,(0,n.jsx)(t.strong,{children:`специфично для DLE API`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования-модуля`,children:`Требования модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:`≥ 20.0`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:`≥ 8.3`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:`≥ 200.4.0`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MySQL / MariaDB`}),(0,n.jsx)(t.td,{children:`InnoDB (Foreign Keys)`})]})]})]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала DevCraft Admin`,children:(0,n.jsxs)(t.p,{children:[`Установите и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`, затем DLE API.`]})}),`
`,(0,n.jsx)(t.h2,{id:`после-установки-плагина`,children:`После установки плагина`}),`
`,(0,n.jsx)(t.p,{children:`Проверьте, что на сайте появились:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/dleapi.php`}),` — stub админки DLE`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/src/modules/DleApi/`}),` — модуль DevCraft`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`api/`}),` — runtime `,(0,n.jsx)(t.code,{children:`/api/v2`}),`, Fluent, Schemas, SDK`]}),`
`,(0,n.jsxs)(t.li,{children:[`локаль `,(0,n.jsx)(t.code,{children:`devcraft/locales/ru_RU/dleapi.xliff`})]}),`
`]}),`
`,(0,n.jsxs)(t.h3,{id:`composer-в-api`,children:[`Composer в `,(0,n.jsx)(t.code,{children:`api/`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Зависимости API лежат в каталоге `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`api/`})}),` (не только в `,(0,n.jsx)(t.code,{children:`devcraft/`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` api`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` && `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Общий Composer для DevCraft: `,(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`}),` и `,(0,n.jsx)(t.a,{href:`/instructions/composer`,children:`Composer`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`таблицы-api`,children:`Таблицы API`}),`
`,(0,n.jsxs)(t.p,{children:[`Откройте модуль `,(0,n.jsx)(t.strong,{children:`DLE API`}),` в DevCraft. При первом обращении Cycle создаст таблицы `,(0,n.jsx)(t.code,{children:`{prefix}_api_keys`}),`, `,(0,n.jsx)(t.code,{children:`{prefix}_api_scope`}),`, `,(0,n.jsx)(t.code,{children:`{prefix}_api_oauth_*`}),` (миграции в `,(0,n.jsx)(t.code,{children:`devcraft/src/database/migrations/`}),`). В `,(0,n.jsx)(t.code,{children:`install.xml`}),` DDL этих таблиц нет.`]}),`
`,(0,n.jsx)(t.h3,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Создайте API-ключ и `,(0,n.jsx)(t.a,{href:`guides/oauth-client`,children:`OAuth-клиент`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Проверьте `,(0,n.jsx)(t.a,{href:`guides/env`,children:(0,n.jsx)(t.code,{children:`.env`})}),` (`,(0,n.jsx)(t.code,{children:`DEMO_MODE=false`}),`, если нужны токены)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`guides/auth`,children:`Авторизация`}),` → `,(0,n.jsx)(t.a,{href:`guides/endpoints`,children:`эндпоинты`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`профиль-на-сайте-опционально`,children:`Профиль на сайте (опционально)`}),`
`,(0,n.jsxs)(t.p,{children:[`Кнопка «Запросить ключ» сама не появляется. Нужны include в скине и флаги в `,(0,n.jsx)(t.a,{href:`guides/settings`,children:`Настройках`}),`. Теги шаблона: `,(0,n.jsx)(t.a,{href:`guides/templates`,children:`Шаблоны`}),`.`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Включите `,(0,n.jsx)(t.strong,{children:`Показывать блок`}),` / `,(0,n.jsx)(t.strong,{children:`Разрешить генерировать`}),` и задайте `,(0,n.jsx)(t.a,{href:`guides/access-levels`,children:`уровень`}),` или `,(0,n.jsx)(t.a,{href:`guides/access-sync`,children:`синхронизацию групп`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`userinfo.tpl`}),` (без `,(0,n.jsx)(t.code,{children:`[own-profile]`}),`):`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/dleapi_profile.php"}`})})})})}),`
`,(0,n.jsxs)(t.ol,{start:`3`,children:[`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.code,{children:`main.tpl`}),` перед `,(0,n.jsx)(t.code,{children:`</body>`}),`:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[available=userinfo]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/dleapi_profile.php?focus=js"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[/available]`})})]})})}),`
`,(0,n.jsxs)(t.ol,{start:`4`,children:[`
`,(0,n.jsxs)(t.li,{children:[`Очистите кеш шаблонов. Переопределить вид: скопируйте `,(0,n.jsx)(t.code,{children:`templates/Default/devcraft/dleapi/`}),` в свою тему.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Без шага с JS в блоке будет «DevCraftPublic недоступен». Гость чужой ключ не видит; админ на чужом профиле может одобрять заявки.`}),`
`,(0,n.jsxs)(t.h2,{id:`редирект-api--apiv2`,children:[`Редирект `,(0,n.jsx)(t.code,{children:`/api`}),` → `,(0,n.jsx)(t.code,{children:`/api/v2`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Apache:`}),` правила уже в `,(0,n.jsx)(t.code,{children:`api/.htaccess`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`nginx`}),` (фрагмент `,(0,n.jsx)(t.code,{children:`server`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:` /api `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 308`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` /api/v2/;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` /api/v1 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    rewrite`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:` ^/api/v1/?(.*)$`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` /api/v2/$1 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`permanent`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` /api/v2/ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    try_files `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uri /api/v2/index.php?$query_string;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/env`,children:`Инструкция .env`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};