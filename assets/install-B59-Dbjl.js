import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка и обновление плагина DevCraft Admin для DLE 20.0.`,version:`200.4.0`},i=new Date(1787750944e3),a=`

**Ссылка:** [скачать DevCraft Admin](https://devcraft.club/downloads/maharder-assets.4/)

Ставите на **DLE 20.0*&#x2A; — нужна линейка плагина &#x2A;*\`200.*\`** ([версионирование](reference/back-end/versioning)).

## Требования [#требования]

* **Версия PHP**: 8.3
* **Расширения PHP**: \`simplexml\`, \`libxml\`, \`intl\`, \`fileinfo\`, \`pdo_mysql\`, \`curl\`, \`mbstring\`, \`openssl\`
* **Рекомендуемые настройки**: выделенная память PHP не менее 128M
* **CMS**: DataLife Engine 20.0

## Установка [#установка]

### 1. Менеджер плагинов DLE [#1-менеджер-плагинов-dle]

1. Загрузите архив (\`upload/\` + \`install.xml\`).
2. **Панель → Плагины → Установить**.
3. Проверьте на диске:
   * \`engine/inc/devcraft.php\`
   * каталог \`devcraft/\`

### 2. Composer [#2-composer]

В каталоге \`devcraft/\` на сервере выполните:

\`\`\`bash
cd devcraft
composer install --no-dev
\`\`\`

Без каталога \`vendor/\` плагин выведет предупреждение в админке DLE и не загрузится.

Если модуль тянет shared DTO — в \`devcraft/composer.json\` должен быть \`devcraftclub/dev-tools\`:

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

### 3. Вручную [#3-вручную]

Скопируйте \`upload/\` в корень сайта, затем активируйте плагин в DLE.

## Как грузится админка [#как-грузится-админка]

1. \`engine/inc/devcraft.php\` — вход DLE
2. \`devcraft/init.php\` — autoload, bootstrap
3. \`Application::runAdmin()\` — страницы модуля Admin

AJAX: [точки входа](reference/back-end/entry_points).

## Структура \`devcraft/\` [#структура-devcraft]

\`\`\`
devcraft/
├── init.php, ajax.php
├── composer.json, vendor/
├── src/classes/, src/modules/Admin/
├── config/, locales/, cache/, logs/
engine/inc/devcraft.php
\`\`\`

## Первый запуск [#первый-запуск]

1. Откройте **DevCraft Admin** в админке DLE.
2. **Настройки** — язык, тема, пути ([подробнее](guides/manage)).
3. При необходимости — логи и Telegram.

## Обновление [#обновление]

1. Бэкап \`devcraft/\` и настроек.
2. Новый архив через менеджер DLE.
3. \`composer install\`, если менялся lock.
4. Проверьте [changelog](changelog) и \`composer_required\` модулей.

## См. также [#см-также]

* [Начало работы](getting_started) — обзор плагина
* [Создание модуля](guides/create_module) — первый сателлит
* [Fluent Types](guides/fluent_types)
* [Миграция с MH Admin](migration)
* [Shared-пакеты](reference/back-end/shared_packages)
`,o={contents:[{heading:void 0,content:`**Ссылка:** скачать DevCraft Admin`},{heading:void 0,content:"Ставите на **DLE 20.0*&#x2A; — нужна линейка плагина &#x2A;*`200.*`** (версионирование)."},{heading:`требования`,content:`**Версия PHP**: 8.3`},{heading:`требования`,content:"**Расширения PHP**: `simplexml`, `libxml`, `intl`, `fileinfo`, `pdo_mysql`, `curl`, `mbstring`, `openssl`"},{heading:`требования`,content:`**Рекомендуемые настройки**: выделенная память PHP не менее 128M`},{heading:`требования`,content:`**CMS**: DataLife Engine 20.0`},{heading:`1-менеджер-плагинов-dle`,content:"Загрузите архив (`upload/` + `install.xml`)."},{heading:`1-менеджер-плагинов-dle`,content:`**Панель → Плагины → Установить**.`},{heading:`1-менеджер-плагинов-dle`,content:`Проверьте на диске:`},{heading:`1-менеджер-плагинов-dle`,content:"`engine/inc/devcraft.php`"},{heading:`1-менеджер-плагинов-dle`,content:"каталог `devcraft/`"},{heading:`2-composer`,content:"В каталоге `devcraft/` на сервере выполните:"},{heading:`2-composer`,content:"Без каталога `vendor/` плагин выведет предупреждение в админке DLE и не загрузится."},{heading:`2-composer`,content:"Если модуль тянет shared DTO — в `devcraft/composer.json` должен быть `devcraftclub/dev-tools`:"},{heading:`3-вручную`,content:"Скопируйте `upload/` в корень сайта, затем активируйте плагин в DLE."},{heading:`как-грузится-админка`,content:"`engine/inc/devcraft.php` — вход DLE"},{heading:`как-грузится-админка`,content:"`devcraft/init.php` — autoload, bootstrap"},{heading:`как-грузится-админка`,content:"`Application::runAdmin()` — страницы модуля Admin"},{heading:`как-грузится-админка`,content:`AJAX: точки входа.`},{heading:`первый-запуск`,content:`Откройте **DevCraft Admin** в админке DLE.`},{heading:`первый-запуск`,content:`**Настройки** — язык, тема, пути (подробнее).`},{heading:`первый-запуск`,content:`При необходимости — логи и Telegram.`},{heading:`обновление`,content:"Бэкап `devcraft/` и настроек."},{heading:`обновление`,content:`Новый архив через менеджер DLE.`},{heading:`обновление`,content:"`composer install`, если менялся lock."},{heading:`обновление`,content:"Проверьте changelog и `composer_required` модулей."},{heading:`см-также`,content:`Начало работы — обзор плагина`},{heading:`см-также`,content:`Создание модуля — первый сателлит`},{heading:`см-также`,content:`Fluent Types`},{heading:`см-также`,content:`Миграция с MH Admin`},{heading:`см-также`,content:`Shared-пакеты`}],headings:[{id:`требования`,content:`Требования`},{id:`установка`,content:`Установка`},{id:`1-менеджер-плагинов-dle`,content:`1\\. Менеджер плагинов DLE`},{id:`2-composer`,content:`2\\. Composer`},{id:`3-вручную`,content:`3\\. Вручную`},{id:`как-грузится-админка`,content:`Как грузится админка`},{id:`структура-devcraft`,content:"Структура `devcraft/`"},{id:`первый-запуск`,content:`Первый запуск`},{id:`обновление`,content:`Обновление`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:3,url:`#1-менеджер-плагинов-dle`,title:(0,n.jsx)(n.Fragment,{children:`1. Менеджер плагинов DLE`})},{depth:3,url:`#2-composer`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer`})},{depth:3,url:`#3-вручную`,title:(0,n.jsx)(n.Fragment,{children:`3. Вручную`})},{depth:2,url:`#как-грузится-админка`,title:(0,n.jsx)(n.Fragment,{children:`Как грузится админка`})},{depth:2,url:`#структура-devcraft`,title:(0,n.jsxs)(n.Fragment,{children:[`Структура `,(0,n.jsx)(`code`,{children:`devcraft/`})]})},{depth:2,url:`#первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`Первый запуск`})},{depth:2,url:`#обновление`,title:(0,n.jsx)(n.Fragment,{children:`Обновление`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка:`}),` `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/maharder-assets.4/`,children:`скачать DevCraft Admin`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Ставите на `,(0,n.jsx)(t.strong,{children:`DLE 20.0`}),` — нужна линейка плагина `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`200.*`})}),` (`,(0,n.jsx)(t.a,{href:`reference/back-end/versioning`,children:`версионирование`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Версия PHP`}),`: 8.3`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Расширения PHP`}),`: `,(0,n.jsx)(t.code,{children:`simplexml`}),`, `,(0,n.jsx)(t.code,{children:`libxml`}),`, `,(0,n.jsx)(t.code,{children:`intl`}),`, `,(0,n.jsx)(t.code,{children:`fileinfo`}),`, `,(0,n.jsx)(t.code,{children:`pdo_mysql`}),`, `,(0,n.jsx)(t.code,{children:`curl`}),`, `,(0,n.jsx)(t.code,{children:`mbstring`}),`, `,(0,n.jsx)(t.code,{children:`openssl`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Рекомендуемые настройки`}),`: выделенная память PHP не менее 128M`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`CMS`}),`: DataLife Engine 20.0`]}),`
`]})}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(t.h3,{id:`1-менеджер-плагинов-dle`,children:`1. Менеджер плагинов DLE`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Загрузите архив (`,(0,n.jsx)(t.code,{children:`upload/`}),` + `,(0,n.jsx)(t.code,{children:`install.xml`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Панель → Плагины → Установить`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Проверьте на диске:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`})}),`
`,(0,n.jsxs)(t.li,{children:[`каталог `,(0,n.jsx)(t.code,{children:`devcraft/`})]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-composer`,children:`2. Composer`}),`
`,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),` на сервере выполните:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraft`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --no-dev`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Без каталога `,(0,n.jsx)(t.code,{children:`vendor/`}),` плагин выведет предупреждение в админке DLE и не загрузится.`]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Если модуль тянет shared DTO — в `,(0,n.jsx)(t.code,{children:`devcraft/composer.json`}),` должен быть `,(0,n.jsx)(t.code,{children:`devcraftclub/dev-tools`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`3-вручную`,children:`3. Вручную`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте `,(0,n.jsx)(t.code,{children:`upload/`}),` в корень сайта, затем активируйте плагин в DLE.`]}),`
`,(0,n.jsx)(t.h2,{id:`как-грузится-админка`,children:`Как грузится админка`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`}),` — вход DLE`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/init.php`}),` — autoload, bootstrap`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Application::runAdmin()`}),` — страницы модуля Admin`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`AJAX: `,(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`точки входа`}),`.`]}),`
`,(0,n.jsxs)(t.h2,{id:`структура-devcraft`,children:[`Структура `,(0,n.jsx)(t.code,{children:`devcraft/`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── init.php, ajax.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── composer.json, vendor/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── src/classes/, src/modules/Admin/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── config/, locales/, cache/, logs/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/inc/devcraft.php`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`первый-запуск`,children:`Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` в админке DLE.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Настройки`}),` — язык, тема, пути (`,(0,n.jsx)(t.a,{href:`guides/manage`,children:`подробнее`}),`).`]}),`
`,(0,n.jsx)(t.li,{children:`При необходимости — логи и Telegram.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`обновление`,children:`Обновление`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Бэкап `,(0,n.jsx)(t.code,{children:`devcraft/`}),` и настроек.`]}),`
`,(0,n.jsx)(t.li,{children:`Новый архив через менеджер DLE.`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`composer install`}),`, если менялся lock.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Проверьте `,(0,n.jsx)(t.a,{href:`changelog`,children:`changelog`}),` и `,(0,n.jsx)(t.code,{children:`composer_required`}),` модулей.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`}),` — обзор плагина`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`guides/create_module`,children:`Создание модуля`}),` — первый сателлит`]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/fluent_types`,children:`Fluent Types`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`migration`,children:`Миграция с MH Admin`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`reference/back-end/shared_packages`,children:`Shared-пакеты`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};