import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка и обновление плагина DevCraft Admin для DLE 20.0.`,version:`200.4.0`},i=new Date(1787124777e3),a=`

**Ссылка на разработку**: [Перейти к разработке](https://devcraft.club/downloads/maharder-assets.4/)

## Минимальные требования [#минимальные-требования]

* **Версия PHP**: 8.3
* **Расширения PHP**: \`simplexml\`, \`libxml\`, \`intl\`, \`fileinfo\`, \`pdo_mysql\`, \`curl\`, \`mbstring\`, \`openssl\`
* **Рекомендуемые настройки**: выделенная память PHP не менее 128M
* **CMS**: DataLife Engine 20.0

## Установка / обновление [#установка--обновление]

### 1. Установка через менеджер плагинов DLE [#1-установка-через-менеджер-плагинов-dle]

1. Скачайте архив плагина DevCraft Admin (формат \`upload/\` с \`install.xml\` в корне).
2. Загрузите архив в **Панель управления → Плагины → Установить плагин**.
3. Убедитесь, что на сайте появились файлы:
   * \`engine/inc/devcraft.php\` — точка входа админ-модуля DLE
   * каталог \`devcraft/\` в корне сайта

### 2. Зависимости Composer [#2-зависимости-composer]

В каталоге \`devcraft/\` на сервере выполните:

\`\`\`bash
cd devcraft
composer install --no-dev
\`\`\`

Без каталога \`vendor/\` плагин выведет предупреждение в админке DLE и не загрузится.

Если core-слой или модуль опирается на shared DTO / fluent-абстракции, после базовой установки проверьте наличие \`devcraftclub/dev-tools\` в \`devcraft/composer.json\`. Этот пакет содержит \`AbstractReflection\`, \`AbstractWith\`, атрибуты \`#[With]\` / \`#[WithItem]\` и related runtime-компоненты.

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

Граница между тем, что остаётся частью админ-оболочки, и тем, что выносится в shared package, описана в [Shared-пакеты и абстракции](reference/back-end/shared_packages).

### 3. Ручная загрузка (альтернатива) [#3-ручная-загрузка-альтернатива]

Скопируйте содержимое \`upload/\` в корень сайта (сохраняя структуру \`engine/\` и \`devcraft/\`), затем установите плагин через менеджер плагинов.

## Цепочка загрузки [#цепочка-загрузки]

После установки запросы в админку проходят через:

1. \`engine/inc/devcraft.php\` — тонкая обёртка DLE (проверка \`DATALIFEENGINE\`, \`LOGGED_IN\`)
2. \`devcraft/init.php\` — автозагрузка Composer, регистрация путей, bootstrap ядра
3. \`DevCraft\\Core\\Application::runAdmin()\` — маршрутизация страниц модуля Admin

AJAX-запросы обрабатываются через \`devcraft/ajax.php\` (см. [Точки входа](reference/back-end/entry_points)).

## Структура каталогов [#структура-каталогов]

\`\`\`
devcraft/
├── init.php              # Bootstrap плагина
├── ajax.php              # AJAX-точка входа
├── composer.json
├── vendor/               # После composer install
├── src/
│   ├── bootstrap/        # functions.php, ajax-session.php
│   ├── classes/          # Ядро DevCraft
│   ├── modules/Admin/    # Модуль админки
│   └── templates/        # Twig-шаблоны
├── config/
├── locales/
├── cache/
└── logs/
engine/inc/
└── devcraft.php          # Регистрация в DLE Admin
\`\`\`

## Первый запуск [#первый-запуск]

1. Откройте в админке DLE модуль **DevCraft Admin**.
2. Перейдите в **Настройки** и задайте язык (\`ru_RU\`), тему (светлая/тёмная), пути к кешу и локалям.
3. При необходимости включите логирование и Telegram-уведомления (см. [Настройка](guides/manage)).

## Обновление [#обновление]

1. Создайте резервную копию каталога \`devcraft/\` и настроек в БД.
2. Установите новый архив плагина через менеджер DLE.
3. Выполните \`composer install\` в \`devcraft/\`, если изменился \`composer.lock\`.
4. Если в changelog упомянут перенос общих DTO/utility-слоёв, проверьте \`composer.json\` и \`composer_required\` модулей на новые shared-зависимости.
5. Проверьте [историю изменений](changelog).

## См. также [#см-также]

* [Настройка](guides/manage)
* [Точки входа для разработчиков](reference/back-end/entry_points)
* [Shared-пакеты и абстракции](reference/back-end/shared_packages)
* [Composer](../../../../instructions/composer)
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**: Перейти к разработке`},{heading:`минимальные-требования`,content:`**Версия PHP**: 8.3`},{heading:`минимальные-требования`,content:"**Расширения PHP**: `simplexml`, `libxml`, `intl`, `fileinfo`, `pdo_mysql`, `curl`, `mbstring`, `openssl`"},{heading:`минимальные-требования`,content:`**Рекомендуемые настройки**: выделенная память PHP не менее 128M`},{heading:`минимальные-требования`,content:`**CMS**: DataLife Engine 20.0`},{heading:`1-установка-через-менеджер-плагинов-dle`,content:"Скачайте архив плагина DevCraft Admin (формат `upload/` с `install.xml` в корне)."},{heading:`1-установка-через-менеджер-плагинов-dle`,content:`Загрузите архив в **Панель управления → Плагины → Установить плагин**.`},{heading:`1-установка-через-менеджер-плагинов-dle`,content:`Убедитесь, что на сайте появились файлы:`},{heading:`1-установка-через-менеджер-плагинов-dle`,content:"`engine/inc/devcraft.php` — точка входа админ-модуля DLE"},{heading:`1-установка-через-менеджер-плагинов-dle`,content:"каталог `devcraft/` в корне сайта"},{heading:`2-зависимости-composer`,content:"В каталоге `devcraft/` на сервере выполните:"},{heading:`2-зависимости-composer`,content:"Без каталога `vendor/` плагин выведет предупреждение в админке DLE и не загрузится."},{heading:`2-зависимости-composer`,content:"Если core-слой или модуль опирается на shared DTO / fluent-абстракции, после базовой установки проверьте наличие `devcraftclub/dev-tools` в `devcraft/composer.json`. Этот пакет содержит `AbstractReflection`, `AbstractWith`, атрибуты `#[With]` / `#[WithItem]` и related runtime-компоненты."},{heading:`2-зависимости-composer`,content:`Граница между тем, что остаётся частью админ-оболочки, и тем, что выносится в shared package, описана в Shared-пакеты и абстракции.`},{heading:`3-ручная-загрузка-альтернатива`,content:"Скопируйте содержимое `upload/` в корень сайта (сохраняя структуру `engine/` и `devcraft/`), затем установите плагин через менеджер плагинов."},{heading:`цепочка-загрузки`,content:`После установки запросы в админку проходят через:`},{heading:`цепочка-загрузки`,content:"`engine/inc/devcraft.php` — тонкая обёртка DLE (проверка `DATALIFEENGINE`, `LOGGED_IN`)"},{heading:`цепочка-загрузки`,content:"`devcraft/init.php` — автозагрузка Composer, регистрация путей, bootstrap ядра"},{heading:`цепочка-загрузки`,content:"`DevCraft\\Core\\Application::runAdmin()` — маршрутизация страниц модуля Admin"},{heading:`цепочка-загрузки`,content:"AJAX-запросы обрабатываются через `devcraft/ajax.php` (см. Точки входа)."},{heading:`первый-запуск`,content:`Откройте в админке DLE модуль **DevCraft Admin**.`},{heading:`первый-запуск`,content:"Перейдите в **Настройки** и задайте язык (`ru_RU`), тему (светлая/тёмная), пути к кешу и локалям."},{heading:`первый-запуск`,content:`При необходимости включите логирование и Telegram-уведомления (см. Настройка).`},{heading:`обновление`,content:"Создайте резервную копию каталога `devcraft/` и настроек в БД."},{heading:`обновление`,content:`Установите новый архив плагина через менеджер DLE.`},{heading:`обновление`,content:"Выполните `composer install` в `devcraft/`, если изменился `composer.lock`."},{heading:`обновление`,content:"Если в changelog упомянут перенос общих DTO/utility-слоёв, проверьте `composer.json` и `composer_required` модулей на новые shared-зависимости."},{heading:`обновление`,content:`Проверьте историю изменений.`},{heading:`см-также`,content:`Настройка`},{heading:`см-также`,content:`Точки входа для разработчиков`},{heading:`см-также`,content:`Shared-пакеты и абстракции`},{heading:`см-также`,content:`Composer`}],headings:[{id:`минимальные-требования`,content:`Минимальные требования`},{id:`установка--обновление`,content:`Установка / обновление`},{id:`1-установка-через-менеджер-плагинов-dle`,content:`1\\. Установка через менеджер плагинов DLE`},{id:`2-зависимости-composer`,content:`2\\. Зависимости Composer`},{id:`3-ручная-загрузка-альтернатива`,content:`3\\. Ручная загрузка (альтернатива)`},{id:`цепочка-загрузки`,content:`Цепочка загрузки`},{id:`структура-каталогов`,content:`Структура каталогов`},{id:`первый-запуск`,content:`Первый запуск`},{id:`обновление`,content:`Обновление`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#минимальные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Минимальные требования`})},{depth:2,url:`#установка--обновление`,title:(0,n.jsx)(n.Fragment,{children:`Установка / обновление`})},{depth:3,url:`#1-установка-через-менеджер-плагинов-dle`,title:(0,n.jsx)(n.Fragment,{children:`1. Установка через менеджер плагинов DLE`})},{depth:3,url:`#2-зависимости-composer`,title:(0,n.jsx)(n.Fragment,{children:`2. Зависимости Composer`})},{depth:3,url:`#3-ручная-загрузка-альтернатива`,title:(0,n.jsx)(n.Fragment,{children:`3. Ручная загрузка (альтернатива)`})},{depth:2,url:`#цепочка-загрузки`,title:(0,n.jsx)(n.Fragment,{children:`Цепочка загрузки`})},{depth:2,url:`#структура-каталогов`,title:(0,n.jsx)(n.Fragment,{children:`Структура каталогов`})},{depth:2,url:`#первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`Первый запуск`})},{depth:2,url:`#обновление`,title:(0,n.jsx)(n.Fragment,{children:`Обновление`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/maharder-assets.4/`,children:`Перейти к разработке`})]}),`
`,(0,n.jsx)(t.h2,{id:`минимальные-требования`,children:`Минимальные требования`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Версия PHP`}),`: 8.3`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Расширения PHP`}),`: `,(0,n.jsx)(t.code,{children:`simplexml`}),`, `,(0,n.jsx)(t.code,{children:`libxml`}),`, `,(0,n.jsx)(t.code,{children:`intl`}),`, `,(0,n.jsx)(t.code,{children:`fileinfo`}),`, `,(0,n.jsx)(t.code,{children:`pdo_mysql`}),`, `,(0,n.jsx)(t.code,{children:`curl`}),`, `,(0,n.jsx)(t.code,{children:`mbstring`}),`, `,(0,n.jsx)(t.code,{children:`openssl`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Рекомендуемые настройки`}),`: выделенная память PHP не менее 128M`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`CMS`}),`: DataLife Engine 20.0`]}),`
`]})}),`
`,(0,n.jsx)(t.h2,{id:`установка--обновление`,children:`Установка / обновление`}),`
`,(0,n.jsx)(t.h3,{id:`1-установка-через-менеджер-плагинов-dle`,children:`1. Установка через менеджер плагинов DLE`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте архив плагина DevCraft Admin (формат `,(0,n.jsx)(t.code,{children:`upload/`}),` с `,(0,n.jsx)(t.code,{children:`install.xml`}),` в корне).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите архив в `,(0,n.jsx)(t.strong,{children:`Панель управления → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что на сайте появились файлы:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`}),` — точка входа админ-модуля DLE`]}),`
`,(0,n.jsxs)(t.li,{children:[`каталог `,(0,n.jsx)(t.code,{children:`devcraft/`}),` в корне сайта`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-зависимости-composer`,children:`2. Зависимости Composer`}),`
`,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),` на сервере выполните:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraft`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --no-dev`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Без каталога `,(0,n.jsx)(t.code,{children:`vendor/`}),` плагин выведет предупреждение в админке DLE и не загрузится.`]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Если core-слой или модуль опирается на shared DTO / fluent-абстракции, после базовой установки проверьте наличие `,(0,n.jsx)(t.code,{children:`devcraftclub/dev-tools`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/composer.json`}),`. Этот пакет содержит `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),`, `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`, атрибуты `,(0,n.jsx)(t.code,{children:`#[With]`}),` / `,(0,n.jsx)(t.code,{children:`#[WithItem]`}),` и related runtime-компоненты.`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Граница между тем, что остаётся частью админ-оболочки, и тем, что выносится в shared package, описана в `,(0,n.jsx)(t.a,{href:`reference/back-end/shared_packages`,children:`Shared-пакеты и абстракции`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-ручная-загрузка-альтернатива`,children:`3. Ручная загрузка (альтернатива)`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` в корень сайта (сохраняя структуру `,(0,n.jsx)(t.code,{children:`engine/`}),` и `,(0,n.jsx)(t.code,{children:`devcraft/`}),`), затем установите плагин через менеджер плагинов.`]}),`
`,(0,n.jsx)(t.h2,{id:`цепочка-загрузки`,children:`Цепочка загрузки`}),`
`,(0,n.jsx)(t.p,{children:`После установки запросы в админку проходят через:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/devcraft.php`}),` — тонкая обёртка DLE (проверка `,(0,n.jsx)(t.code,{children:`DATALIFEENGINE`}),`, `,(0,n.jsx)(t.code,{children:`LOGGED_IN`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/init.php`}),` — автозагрузка Composer, регистрация путей, bootstrap ядра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Application::runAdmin()`}),` — маршрутизация страниц модуля Admin`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`AJAX-запросы обрабатываются через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` (см. `,(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`Точки входа`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`структура-каталогов`,children:`Структура каталогов`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── init.php              # Bootstrap плагина`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── ajax.php              # AJAX-точка входа`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── composer.json`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── vendor/               # После composer install`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── src/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── bootstrap/        # functions.php, ajax-session.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── classes/          # Ядро DevCraft`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── modules/Admin/    # Модуль админки`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── templates/        # Twig-шаблоны`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── config/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── locales/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── cache/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── logs/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/inc/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── devcraft.php          # Регистрация в DLE Admin`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`первый-запуск`,children:`Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте в админке DLE модуль `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Перейдите в `,(0,n.jsx)(t.strong,{children:`Настройки`}),` и задайте язык (`,(0,n.jsx)(t.code,{children:`ru_RU`}),`), тему (светлая/тёмная), пути к кешу и локалям.`]}),`
`,(0,n.jsxs)(t.li,{children:[`При необходимости включите логирование и Telegram-уведомления (см. `,(0,n.jsx)(t.a,{href:`guides/manage`,children:`Настройка`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`обновление`,children:`Обновление`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Создайте резервную копию каталога `,(0,n.jsx)(t.code,{children:`devcraft/`}),` и настроек в БД.`]}),`
`,(0,n.jsx)(t.li,{children:`Установите новый архив плагина через менеджер DLE.`}),`
`,(0,n.jsxs)(t.li,{children:[`Выполните `,(0,n.jsx)(t.code,{children:`composer install`}),` в `,(0,n.jsx)(t.code,{children:`devcraft/`}),`, если изменился `,(0,n.jsx)(t.code,{children:`composer.lock`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Если в changelog упомянут перенос общих DTO/utility-слоёв, проверьте `,(0,n.jsx)(t.code,{children:`composer.json`}),` и `,(0,n.jsx)(t.code,{children:`composer_required`}),` модулей на новые shared-зависимости.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Проверьте `,(0,n.jsx)(t.a,{href:`changelog`,children:`историю изменений`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/manage`,children:`Настройка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`Точки входа для разработчиков`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`reference/back-end/shared_packages`,children:`Shared-пакеты и абстракции`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../../../instructions/composer`,children:`Composer`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};