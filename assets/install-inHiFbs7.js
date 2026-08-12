import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка DLE API 200.1.0 для DLE 20.0 с DevCraft Admin.`},i=new Date(1786533408e3),a=`

## Минимальные требования [#минимальные-требования]

| Компонент       | Версия                |
| --------------- | --------------------- |
| DataLife Engine | **≥ 20.0**            |
| PHP             | **≥ 8.3**             |
| DevCraft Admin  | **≥ 200.4.0**         |
| MySQL / MariaDB | InnoDB (Foreign Keys) |

<Callout type="warn" title="Порядок установки">
  Сначала установите и настройте [DevCraft Admin](../../devcraft_admin/install). Затем устанавливайте DLE API.
</Callout>

## Установка [#установка]

1. Скачайте \`install.zip\` релиза (содержимое папки \`upload/\`).
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   * \`engine/inc/dleapi.php\` (тонкий stub админки)
   * \`devcraft/src/modules/DleApi/\` (Models, Pages, Ajax — конфигурация модуля)
   * \`api/\` (\`api/v2/\`, Fluent, Schemas, SDK)
   * локаль \`devcraft/locales/ru_RU/dleapi.xliff\`
4. В каталоге \`api/\` выполните \`composer install\`.
5. Откройте модуль **DLE API** в админке DevCraft: при первом обращении к ORM Cycle создаст таблицы \`{prefix}_api_keys\`, \`{prefix}_api_scope\`, \`{prefix}_api_oauth_*\` (миграции в \`devcraft/src/database/migrations/\`). DDL в \`install.xml\` плагина для этих таблиц не используется.
6. (Опционально) Блок «API-ключ» в профиле — см. [ниже](#профиль-на-сайте).
7. Создайте API-ключ и [OAuth-клиент](guides/oauth-client). Дальше — [авторизация](guides/auth) и [HTTP](reference/http).

## Профиль на сайте [#профиль-на-сайте]

Кнопка «Запросить / сгенерировать ключ» **не появляется из коробки**: плагин кладёт \`engine/modules/devcraft/dleapi_profile.php\`. Нужны **два** include в шаблоне скина.

1. В DevCraft → **DLE API** → [Настройки](guides/settings#профиль-пользователя) включите **Разрешить пользователям генерировать ключ** (и при необходимости **Показывать блок API-ключа**).
2. Задайте [уровень по умолчанию](guides/settings#уровни-доступа) или [привязку групп](guides/access-sync) — без уровня запрос вернёт ошибку.
3. В шаблоне профиля (\`templates/<Skin>/userinfo.tpl&#x60;) внутри &#x2A;*\`[own-profile]\`** добавьте HTML-блок:

\`\`\`html
[own-profile]
{include file="engine/modules/devcraft/dleapi_profile.php"}
[/own-profile]
\`\`\`

Не используйте \`[not-logged]\`: у администратора этот блок открыт и на **чужих** профилях (доступ к редактированию).

Пример места: вкладка просмотра профиля, после \`{info}\` / «О себе».

4. В &#x2A;*\`templates/<Skin>/main.tpl\`** перед \`</body>\` подключите публичный JS (\`dc_public.js\` + UI профиля). Чтобы скрипт грузился только на странице профиля, оберните include в \`[available=userinfo]\`:

\`\`\`html
[available=userinfo]
{include file="engine/modules/devcraft/dleapi_profile.php?focus=js"}
[/available]
\`\`\`

Без этого шага в блоке будет «DevCraftPublic недоступен».

5. Очистите кеш шаблонов DLE и откройте **свой** профиль на сайте.

Ключ хранится только в таблице \`{prefix}_api_keys\` (без доп. полей профиля).

Поведение кнопки:

* у уровня **без** премодерации — ключ создаётся сразу;
* с **премодерацией** — создаётся заявка (админка → **Заявки на ключ**), пользователю уйдёт уведомление после решения.

<Callout type="warn" title="Чужой профиль">
  Блок относится только к **текущей сессии** и показывается лишь на **своей** странице (\`[own-profile]\` + проверка \`$row['user_id']\` в PHP). На чужом профиле, даже у админа, ключ не выводится.
</Callout>

## Редирект \`/api\` → \`/api/v2\` [#редирект-api--apiv2]

**Apache:** правила уже в \`api/.htaccess\` — \`/api\` и \`/api/v1\` → \`/api/v2\` (308), запросы \`/api/v2/\` уходят в \`v2/index.php\`.

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
`,o={contents:[{heading:`минимальные-требования`,content:`Компонент`},{heading:`минимальные-требования`,content:`Версия`},{heading:`минимальные-требования`,content:`DataLife Engine`},{heading:`минимальные-требования`,content:`**≥ 20.0**`},{heading:`минимальные-требования`,content:`PHP`},{heading:`минимальные-требования`,content:`**≥ 8.3**`},{heading:`минимальные-требования`,content:`DevCraft Admin`},{heading:`минимальные-требования`,content:`**≥ 200.4.0**`},{heading:`минимальные-требования`,content:`MySQL / MariaDB`},{heading:`минимальные-требования`,content:`InnoDB (Foreign Keys)`},{heading:`минимальные-требования`,content:`Сначала установите и настройте DevCraft Admin. Затем устанавливайте DLE API.`},{heading:`установка`,content:"Скачайте `install.zip` релиза (содержимое папки `upload/`)."},{heading:`установка`,content:`Загрузите в **Панель управления DLE → Плагины → Установить плагин**.`},{heading:`установка`,content:`Убедитесь, что появились:`},{heading:`установка`,content:"`engine/inc/dleapi.php` (тонкий stub админки)"},{heading:`установка`,content:"`devcraft/src/modules/DleApi/` (Models, Pages, Ajax — конфигурация модуля)"},{heading:`установка`,content:"`api/` (`api/v2/`, Fluent, Schemas, SDK)"},{heading:`установка`,content:"локаль `devcraft/locales/ru_RU/dleapi.xliff`"},{heading:`установка`,content:"В каталоге `api/` выполните `composer install`."},{heading:`установка`,content:"Откройте модуль **DLE API** в админке DevCraft: при первом обращении к ORM Cycle создаст таблицы `{prefix}_api_keys`, `{prefix}_api_scope`, `{prefix}_api_oauth_*` (миграции в `devcraft/src/database/migrations/`). DDL в `install.xml` плагина для этих таблиц не используется."},{heading:`установка`,content:`(Опционально) Блок «API-ключ» в профиле — см. ниже.`},{heading:`установка`,content:`Создайте API-ключ и OAuth-клиент. Дальше — авторизация и HTTP.`},{heading:`профиль-на-сайте`,content:"Кнопка «Запросить / сгенерировать ключ» **не появляется из коробки**: плагин кладёт `engine/modules/devcraft/dleapi_profile.php`. Нужны **два** include в шаблоне скина."},{heading:`профиль-на-сайте`,content:`В DevCraft → **DLE API** → Настройки включите **Разрешить пользователям генерировать ключ** (и при необходимости **Показывать блок API-ключа**).`},{heading:`профиль-на-сайте`,content:`Задайте уровень по умолчанию или привязку групп — без уровня запрос вернёт ошибку.`},{heading:`профиль-на-сайте`,content:"В шаблоне профиля (`templates/<Skin>/userinfo.tpl&#x60;) внутри &#x2A;*`[own-profile]`** добавьте HTML-блок:"},{heading:`профиль-на-сайте`,content:"Не используйте `[not-logged]`: у администратора этот блок открыт и на **чужих** профилях (доступ к редактированию)."},{heading:`профиль-на-сайте`,content:"Пример места: вкладка просмотра профиля, после `{info}` / «О себе»."},{heading:`профиль-на-сайте`,content:"В &#x2A;*`templates/<Skin>/main.tpl`** перед `</body>` подключите публичный JS (`dc_public.js` + UI профиля). Чтобы скрипт грузился только на странице профиля, оберните include в `[available=userinfo]`:"},{heading:`профиль-на-сайте`,content:`Без этого шага в блоке будет «DevCraftPublic недоступен».`},{heading:`профиль-на-сайте`,content:`Очистите кеш шаблонов DLE и откройте **свой** профиль на сайте.`},{heading:`профиль-на-сайте`,content:"Ключ хранится только в таблице `{prefix}_api_keys` (без доп. полей профиля)."},{heading:`профиль-на-сайте`,content:`Поведение кнопки:`},{heading:`профиль-на-сайте`,content:`у уровня **без** премодерации — ключ создаётся сразу;`},{heading:`профиль-на-сайте`,content:`с **премодерацией** — создаётся заявка (админка → **Заявки на ключ**), пользователю уйдёт уведомление после решения.`},{heading:`профиль-на-сайте`,content:"Блок относится только к **текущей сессии** и показывается лишь на **своей** странице (`[own-profile]` + проверка `$row['user_id']` в PHP). На чужом профиле, даже у админа, ключ не выводится."},{heading:`редирект-api--apiv2`,content:"**Apache:** правила уже в `api/.htaccess` — `/api` и `/api/v1` → `/api/v2` (308), запросы `/api/v2/` уходят в `v2/index.php`."},{heading:`редирект-api--apiv2`,content:"**nginx** (фрагмент `server`):"}],headings:[{id:`минимальные-требования`,content:`Минимальные требования`},{id:`установка`,content:`Установка`},{id:`профиль-на-сайте`,content:`Профиль на сайте`},{id:`редирект-api--apiv2`,content:"Редирект `/api` → `/api/v2`"}]},s=[{depth:2,url:`#минимальные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Минимальные требования`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#профиль-на-сайте`,title:(0,n.jsx)(n.Fragment,{children:`Профиль на сайте`})},{depth:2,url:`#редирект-api--apiv2`,title:(0,n.jsxs)(n.Fragment,{children:[`Редирект `,(0,n.jsx)(`code`,{children:`/api`}),` → `,(0,n.jsx)(`code`,{children:`/api/v2`})]})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`минимальные-требования`,children:`Минимальные требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 20.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MySQL / MariaDB`}),(0,n.jsx)(t.td,{children:`InnoDB (Foreign Keys)`})]})]})]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Порядок установки`,children:(0,n.jsxs)(t.p,{children:[`Сначала установите и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`. Затем устанавливайте DLE API.`]})}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте `,(0,n.jsx)(t.code,{children:`install.zip`}),` релиза (содержимое папки `,(0,n.jsx)(t.code,{children:`upload/`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите в `,(0,n.jsx)(t.strong,{children:`Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что появились:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/dleapi.php`}),` (тонкий stub админки)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/src/modules/DleApi/`}),` (Models, Pages, Ajax — конфигурация модуля)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`api/`}),` (`,(0,n.jsx)(t.code,{children:`api/v2/`}),`, Fluent, Schemas, SDK)`]}),`
`,(0,n.jsxs)(t.li,{children:[`локаль `,(0,n.jsx)(t.code,{children:`devcraft/locales/ru_RU/dleapi.xliff`})]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`api/`}),` выполните `,(0,n.jsx)(t.code,{children:`composer install`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Откройте модуль `,(0,n.jsx)(t.strong,{children:`DLE API`}),` в админке DevCraft: при первом обращении к ORM Cycle создаст таблицы `,(0,n.jsx)(t.code,{children:`{prefix}_api_keys`}),`, `,(0,n.jsx)(t.code,{children:`{prefix}_api_scope`}),`, `,(0,n.jsx)(t.code,{children:`{prefix}_api_oauth_*`}),` (миграции в `,(0,n.jsx)(t.code,{children:`devcraft/src/database/migrations/`}),`). DDL в `,(0,n.jsx)(t.code,{children:`install.xml`}),` плагина для этих таблиц не используется.`]}),`
`,(0,n.jsxs)(t.li,{children:[`(Опционально) Блок «API-ключ» в профиле — см. `,(0,n.jsx)(t.a,{href:`#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BD%D0%B0-%D1%81%D0%B0%D0%B9%D1%82%D0%B5`,children:`ниже`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Создайте API-ключ и `,(0,n.jsx)(t.a,{href:`guides/oauth-client`,children:`OAuth-клиент`}),`. Дальше — `,(0,n.jsx)(t.a,{href:`guides/auth`,children:`авторизация`}),` и `,(0,n.jsx)(t.a,{href:`reference/http`,children:`HTTP`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`профиль-на-сайте`,children:`Профиль на сайте`}),`
`,(0,n.jsxs)(t.p,{children:[`Кнопка «Запросить / сгенерировать ключ» `,(0,n.jsx)(t.strong,{children:`не появляется из коробки`}),`: плагин кладёт `,(0,n.jsx)(t.code,{children:`engine/modules/devcraft/dleapi_profile.php`}),`. Нужны `,(0,n.jsx)(t.strong,{children:`два`}),` include в шаблоне скина.`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`В DevCraft → `,(0,n.jsx)(t.strong,{children:`DLE API`}),` → `,(0,n.jsx)(t.a,{href:`guides/settings#%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F`,children:`Настройки`}),` включите `,(0,n.jsx)(t.strong,{children:`Разрешить пользователям генерировать ключ`}),` (и при необходимости `,(0,n.jsx)(t.strong,{children:`Показывать блок API-ключа`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Задайте `,(0,n.jsx)(t.a,{href:`guides/settings#%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D0%B8-%D0%B4%D0%BE%D1%81%D1%82%D1%83%D0%BF%D0%B0`,children:`уровень по умолчанию`}),` или `,(0,n.jsx)(t.a,{href:`guides/access-sync`,children:`привязку групп`}),` — без уровня запрос вернёт ошибку.`]}),`
`,(0,n.jsxs)(t.li,{children:[`В шаблоне профиля (`,(0,n.jsx)(t.code,{children:`templates/<Skin>/userinfo.tpl`}),`) внутри `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`[own-profile]`})}),` добавьте HTML-блок:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[own-profile]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/dleapi_profile.php"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[/own-profile]`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Не используйте `,(0,n.jsx)(t.code,{children:`[not-logged]`}),`: у администратора этот блок открыт и на `,(0,n.jsx)(t.strong,{children:`чужих`}),` профилях (доступ к редактированию).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пример места: вкладка просмотра профиля, после `,(0,n.jsx)(t.code,{children:`{info}`}),` / «О себе».`]}),`
`,(0,n.jsxs)(t.ol,{start:`4`,children:[`
`,(0,n.jsxs)(t.li,{children:[`В `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`templates/<Skin>/main.tpl`})}),` перед `,(0,n.jsx)(t.code,{children:`</body>`}),` подключите публичный JS (`,(0,n.jsx)(t.code,{children:`dc_public.js`}),` + UI профиля). Чтобы скрипт грузился только на странице профиля, оберните include в `,(0,n.jsx)(t.code,{children:`[available=userinfo]`}),`:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[available=userinfo]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/dleapi_profile.php?focus=js"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`[/available]`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Без этого шага в блоке будет «DevCraftPublic недоступен».`}),`
`,(0,n.jsxs)(t.ol,{start:`5`,children:[`
`,(0,n.jsxs)(t.li,{children:[`Очистите кеш шаблонов DLE и откройте `,(0,n.jsx)(t.strong,{children:`свой`}),` профиль на сайте.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ключ хранится только в таблице `,(0,n.jsx)(t.code,{children:`{prefix}_api_keys`}),` (без доп. полей профиля).`]}),`
`,(0,n.jsx)(t.p,{children:`Поведение кнопки:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`у уровня `,(0,n.jsx)(t.strong,{children:`без`}),` премодерации — ключ создаётся сразу;`]}),`
`,(0,n.jsxs)(t.li,{children:[`с `,(0,n.jsx)(t.strong,{children:`премодерацией`}),` — создаётся заявка (админка → `,(0,n.jsx)(t.strong,{children:`Заявки на ключ`}),`), пользователю уйдёт уведомление после решения.`]}),`
`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Чужой профиль`,children:(0,n.jsxs)(t.p,{children:[`Блок относится только к `,(0,n.jsx)(t.strong,{children:`текущей сессии`}),` и показывается лишь на `,(0,n.jsx)(t.strong,{children:`своей`}),` странице (`,(0,n.jsx)(t.code,{children:`[own-profile]`}),` + проверка `,(0,n.jsx)(t.code,{children:`$row['user_id']`}),` в PHP). На чужом профиле, даже у админа, ключ не выводится.`]})}),`
`,(0,n.jsxs)(t.h2,{id:`редирект-api--apiv2`,children:[`Редирект `,(0,n.jsx)(t.code,{children:`/api`}),` → `,(0,n.jsx)(t.code,{children:`/api/v2`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Apache:`}),` правила уже в `,(0,n.jsx)(t.code,{children:`api/.htaccess`}),` — `,(0,n.jsx)(t.code,{children:`/api`}),` и `,(0,n.jsx)(t.code,{children:`/api/v1`}),` → `,(0,n.jsx)(t.code,{children:`/api/v2`}),` (308), запросы `,(0,n.jsx)(t.code,{children:`/api/v2/`}),` уходят в `,(0,n.jsx)(t.code,{children:`v2/index.php`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`nginx`}),` (фрагмент `,(0,n.jsx)(t.code,{children:`server`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:` /api `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 308`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` /api/v2/;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` /api/v1 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    rewrite`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:` ^/api/v1/?(.*)$`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` /api/v2/$1 `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`permanent`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`location`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` /api/v2/ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    try_files `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uri /api/v2/index.php?$query_string;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};