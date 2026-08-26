import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое DevCraft Admin: описание, возможности, требования и куда идти дальше.`,version:`200.4.0`},i=new Date(1787750944e3),a=`

**DevCraft Admin** — админ-оболочка для ваших плагинов на **DLE 20.0**. Один раздел в панели DLE, общие настройки, меню, AJAX и Twig — без копипасты каркаса в каждом ZIP.

Зачем это вам: пишете бизнес-логику модуля, а вход в админку, формы настроек и маршруты уже готовы.

## Что умеет [#что-умеет]

* отдельный пункт **DevCraft** в админке DLE (\`?mod=devcraft\` и сателлиты);
* модули в \`devcraft/src/modules/{Name}/\` с \`manifest.php\`, страницами и AJAX;
* настройки через \`settings.schema.php\` → JSON в \`devcraft/config/\`;
* Fluent Types: \`manifest\` / changelog / schema как объект **или** массив ([гайд](guides/fluent_types));
* DataLoader / QueryBuilder: SELECT из таблиц DLE без \`super_query\` ([гайд](guides/data_loader));
* общий AJAX через \`devcraft/ajax.php\` (admin и public);
* Composer UI, логи, генератор модулей, локали XLIFF;
* shared DTO из [\`devcraftclub/dev-tools\`](/dev/dev-tools/1.0.1/getting_started).

## Для кого [#для-кого]

Авторы плагинов DLE, которым нужна одна оболочка под несколько модулей и линейка версий \`200.*\` под DLE 20.

## Требования [#требования]

| Что            | Минимум                                                                               |
| -------------- | ------------------------------------------------------------------------------------- |
| CMS            | DataLife Engine **20.0**                                                              |
| PHP            | **8.3+**                                                                              |
| Версия плагина | **200.4.0+** ([почему major = 200](reference/back-end/versioning))                    |
| Composer       | зависимости в \`devcraft/\`                                                             |
| PHP-расширения | \`simplexml\`, \`libxml\`, \`intl\`, \`fileinfo\`, \`pdo_mysql\`, \`curl\`, \`mbstring\`, \`openssl\` |

Память PHP — лучше от 128M. Полный чеклист установки: [Установка](./install).

## Структура файлов [#структура-файлов]

Корень сайта DLE после установки DevCraft (обзор; каркас своего модуля — [создать модуль](guides/create_module)). В скобках — назначение; у \`modules/Admin\` — полный список.

<Files>
  <Folder name="DLE ROOT">
    <Folder name="devcraft">
      <Folder name="src">
        <Folder name="bootstrap (функции, ajax-session)" />

        <Folder name="classes (ядро: Application, Http, Form, Types…)" />

        <Folder name="database (миграции Cycle)" />

        <Folder name="modules">
          <Folder name="Admin">
            <File name="manifest.php" />

            <File name="settings.schema.php" />

            <File name="changelog.data.php" />

            <Folder name="Ajax">
              <File name="CheckAssetsHandler.php" />

              <File name="CheckUpdateHandler.php" />

              <File name="ComposerActionHandler.php" />

              <File name="ComposerPolicyHandler.php" />

              <File name="ComposerSyncHandler.php" />

              <File name="ComposerTableHandler.php" />

              <File name="DeleteLogHandler.php" />

              <File name="DumpAutoloadHandler.php" />

              <File name="LogsTableHandler.php" />

              <File name="NewModuleHandler.php" />

              <File name="SaveAssetHandler.php" />

              <File name="SettingsHandler.php" />

              <File name="SyncAssetsHandler.php" />
            </Folder>

            <Folder name="Pages">
              <File name="ChangelogPage.php" />

              <File name="ComposerPage.php" />

              <File name="DashboardPage.php" />

              <File name="LogsPage.php" />

              <File name="NewModulePage.php" />

              <File name="SettingsPage.php" />
            </Folder>

            <Folder name="Services">
              <File name="BootstrapSetupService.php" />

              <File name="DashboardPackageMetricService.php" />

              <File name="DefaultPackageSeedService.php" />

              <File name="LogMessagePresenter.php" />

              <File name="ModuleGeneratorInput.php" />

              <File name="ModuleGeneratorService.php" />
            </Folder>

            <Folder name="Models">
              <File name="LogRecord.php" />
            </Folder>

            <Folder name="Repositories">
              <File name="LogRecordRepository.php" />
            </Folder>

            <Folder name="Filter">
              <File name="composer.filter.schema.php" />

              <File name="logs.filter.schema.php" />
            </Folder>

            <Folder name="templates">
              <File name="composer.twig" />

              <File name="logs.twig" />

              <File name="logs_view.twig" />

              <File name="modules.twig" />

              <File name="new_module.twig" />
            </Folder>

            <Folder name="Public">
              <File name="admin.js" />

              <File name="icon.png" />

              <File name=".htaccess" />
            </Folder>
          </Folder>

          <Folder name="{Name} (сателлит: Notifications, RePost…)" />
        </Folder>

        <Folder name="templates (Twig ядра: layout, формы, UI)" />
      </Folder>

      <Folder name="config (*.json настроек модулей)" />

      <Folder name="locales (XLIFF / переводы)" />

      <Folder name="cache" />

      <Folder name="logs" />

      <Folder name="database (seeds)" />

      <Folder name="assetschecker" />

      <Folder name="backup" />

      <Folder name="vendor (Composer)" />

      <File name="init.php (bootstrap админки)" />

      <File name="ajax.php (единая точка AJAX)" />

      <File name="bootstrap.php" />

      <File name="bootstrap.ajax.php" />

      <File name="composer.json" />

      <File name="composer.lock" />
    </Folder>

    <Folder name="engine">
      <Folder name="inc">
        <File name="devcraft.php (glue → runAdmin(Admin))" />

        <File name="{mod}.php (glue сателлита)" />
      </Folder>

      <Folder name="modules">
        <Folder name="devcraft (публичные PHP-includes)" />
      </Folder>
    </Folder>

    <Folder name="templates">
      <Folder name="{skin}">
        <Folder name="devcraft ({module}/*.tpl сайта)" />
      </Folder>
    </Folder>

    <Folder name="language (языки DLE)" />

    <File name="index.php" />
  </Folder>
</Files>

* \`devcraft/\` — ядро, модули, Composer, конфиги.
* \`engine/inc/{mod}.php\` — glue DLE → \`Application::runAdmin()\`.
* \`templates/{skin}/devcraft/\` — публичные \`.tpl\` сайта (админский Twig — в \`devcraft/src/\`).

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="/dev/dle/devcraft_admin/200.4.0/install">
    ZIP, Composer, первый запуск
  </Card>

  <Card title="Создать модуль" href="/dev/dle/devcraft_admin/200.4.0/guides/create_module">
    Каркас, manifest, страницы, AJAX, install.xml
  </Card>

  <Card title="Генератор" href="/dev/dle/devcraft_admin/200.4.0/guides/new_module">
    Модуль из админки за минуту
  </Card>

  <Card title="Fluent Types" href="/dev/dle/devcraft_admin/200.4.0/guides/fluent_types">
    Билдеры и dual accept
  </Card>

  <Card title="Версионирование" href="/dev/dle/devcraft_admin/200.4.0/reference/back-end/versioning">
    Почему 173 / 200 / 261
  </Card>

  <Card title="Справочник API" href="/dev/dle/devcraft_admin/200.4.0/reference">
    Классы, манифест, точки входа
  </Card>
</Cards>

## Архитектура в двух словах [#архитектура-в-двух-словах]

<Mermaid
  chart="sequenceDiagram
    participant DLE as DLE Admin
    participant Inc as engine/inc/devcraft.php
    participant Init as devcraft/init.php
    participant App as Application
    participant Router as Router

    DLE->>Inc: mod=devcraft
    Inc->>Init: require
    Init->>App: runAdmin(Admin)
    App->>Router: dispatch page"
/>

AJAX: \`devcraft/ajax.php\` → handlers модуля. Сателлиты (Notifications, RePost, …) — отдельные \`mod\`, тот же каркас. Подробнее: [точки входа](reference/back-end/entry_points).

## Дальше [#дальше]

1. [Установить](./install) плагин на сайт.
2. [Создать модуль](guides/create_module) или открыть [генератор](guides/new_module).
3. При миграции с MH Admin — [миграция](./migration).
4. Правила кода — [конституция PHP](../../../../instructions/constitution).
`,o={contents:[{heading:void 0,content:`**DevCraft Admin** — админ-оболочка для ваших плагинов на **DLE 20.0**. Один раздел в панели DLE, общие настройки, меню, AJAX и Twig — без копипасты каркаса в каждом ZIP.`},{heading:void 0,content:`Зачем это вам: пишете бизнес-логику модуля, а вход в админку, формы настроек и маршруты уже готовы.`},{heading:`что-умеет`,content:"отдельный пункт **DevCraft** в админке DLE (`?mod=devcraft` и сателлиты);"},{heading:`что-умеет`,content:"модули в `devcraft/src/modules/{Name}/` с `manifest.php`, страницами и AJAX;"},{heading:`что-умеет`,content:"настройки через `settings.schema.php` → JSON в `devcraft/config/`;"},{heading:`что-умеет`,content:"Fluent Types: `manifest` / changelog / schema как объект **или** массив (гайд);"},{heading:`что-умеет`,content:"DataLoader / QueryBuilder: SELECT из таблиц DLE без `super_query` (гайд);"},{heading:`что-умеет`,content:"общий AJAX через `devcraft/ajax.php` (admin и public);"},{heading:`что-умеет`,content:`Composer UI, логи, генератор модулей, локали XLIFF;`},{heading:`что-умеет`,content:"shared DTO из `devcraftclub/dev-tools`."},{heading:`для-кого`,content:"Авторы плагинов DLE, которым нужна одна оболочка под несколько модулей и линейка версий `200.*` под DLE 20."},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`CMS`},{heading:`требования`,content:`DataLife Engine **20.0**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`Версия плагина`},{heading:`требования`,content:`**200.4.0+** (почему major = 200)`},{heading:`требования`,content:`Composer`},{heading:`требования`,content:"зависимости в `devcraft/`"},{heading:`требования`,content:`PHP-расширения`},{heading:`требования`,content:"`simplexml`, `libxml`, `intl`, `fileinfo`, `pdo_mysql`, `curl`, `mbstring`, `openssl`"},{heading:`требования`,content:`Память PHP — лучше от 128M. Полный чеклист установки: Установка.`},{heading:`структура-файлов`,content:"Корень сайта DLE после установки DevCraft (обзор; каркас своего модуля — создать модуль). В скобках — назначение; у `modules/Admin` — полный список."},{heading:`структура-файлов`,content:`<File name="manifest.php" />`},{heading:`структура-файлов`,content:`<File name="settings.schema.php" />`},{heading:`структура-файлов`,content:`<File name="changelog.data.php" />`},{heading:`структура-файлов`,content:`<File name="CheckAssetsHandler.php" />`},{heading:`структура-файлов`,content:`<File name="CheckUpdateHandler.php" />`},{heading:`структура-файлов`,content:`<File name="ComposerActionHandler.php" />`},{heading:`структура-файлов`,content:`<File name="ComposerPolicyHandler.php" />`},{heading:`структура-файлов`,content:`<File name="ComposerSyncHandler.php" />`},{heading:`структура-файлов`,content:`<File name="ComposerTableHandler.php" />`},{heading:`структура-файлов`,content:`<File name="DeleteLogHandler.php" />`},{heading:`структура-файлов`,content:`<File name="DumpAutoloadHandler.php" />`},{heading:`структура-файлов`,content:`<File name="LogsTableHandler.php" />`},{heading:`структура-файлов`,content:`<File name="NewModuleHandler.php" />`},{heading:`структура-файлов`,content:`<File name="SaveAssetHandler.php" />`},{heading:`структура-файлов`,content:`<File name="SettingsHandler.php" />`},{heading:`структура-файлов`,content:`<File name="SyncAssetsHandler.php" />`},{heading:`структура-файлов`,content:`<File name="ChangelogPage.php" />`},{heading:`структура-файлов`,content:`<File name="ComposerPage.php" />`},{heading:`структура-файлов`,content:`<File name="DashboardPage.php" />`},{heading:`структура-файлов`,content:`<File name="LogsPage.php" />`},{heading:`структура-файлов`,content:`<File name="NewModulePage.php" />`},{heading:`структура-файлов`,content:`<File name="SettingsPage.php" />`},{heading:`структура-файлов`,content:`<File name="BootstrapSetupService.php" />`},{heading:`структура-файлов`,content:`<File name="DashboardPackageMetricService.php" />`},{heading:`структура-файлов`,content:`<File name="DefaultPackageSeedService.php" />`},{heading:`структура-файлов`,content:`<File name="LogMessagePresenter.php" />`},{heading:`структура-файлов`,content:`<File name="ModuleGeneratorInput.php" />`},{heading:`структура-файлов`,content:`<File name="ModuleGeneratorService.php" />`},{heading:`структура-файлов`,content:`<File name="LogRecord.php" />`},{heading:`структура-файлов`,content:`<File name="LogRecordRepository.php" />`},{heading:`структура-файлов`,content:`<File name="composer.filter.schema.php" />`},{heading:`структура-файлов`,content:`<File name="logs.filter.schema.php" />`},{heading:`структура-файлов`,content:`<File name="composer.twig" />`},{heading:`структура-файлов`,content:`<File name="logs.twig" />`},{heading:`структура-файлов`,content:`<File name="logs_view.twig" />`},{heading:`структура-файлов`,content:`<File name="modules.twig" />`},{heading:`структура-файлов`,content:`<File name="new_module.twig" />`},{heading:`структура-файлов`,content:`<File name="admin.js" />`},{heading:`структура-файлов`,content:`<File name="icon.png" />`},{heading:`структура-файлов`,content:`<File name=".htaccess" />`},{heading:`структура-файлов`,content:`<File name="init.php (bootstrap админки)" />`},{heading:`структура-файлов`,content:`<File name="ajax.php (единая точка AJAX)" />`},{heading:`структура-файлов`,content:`<File name="bootstrap.php" />`},{heading:`структура-файлов`,content:`<File name="bootstrap.ajax.php" />`},{heading:`структура-файлов`,content:`<File name="composer.json" />`},{heading:`структура-файлов`,content:`<File name="composer.lock" />`},{heading:`структура-файлов`,content:`<File name="devcraft.php (glue → runAdmin(Admin))" />`},{heading:`структура-файлов`,content:`<File name="{mod}.php (glue сателлита)" />`},{heading:`структура-файлов`,content:`<File name="index.php" />`},{heading:`структура-файлов`,content:"`devcraft/` — ядро, модули, Composer, конфиги."},{heading:`структура-файлов`,content:"`engine/inc/{mod}.php` — glue DLE → `Application::runAdmin()`."},{heading:`структура-файлов`,content:"`templates/{skin}/devcraft/` — публичные `.tpl` сайта (админский Twig — в `devcraft/src/`)."},{heading:`разделы-документации`,content:`ZIP, Composer, первый запуск`},{heading:`разделы-документации`,content:`Каркас, manifest, страницы, AJAX, install.xml`},{heading:`разделы-документации`,content:`Модуль из админки за минуту`},{heading:`разделы-документации`,content:`Билдеры и dual accept`},{heading:`разделы-документации`,content:`Почему 173 / 200 / 261`},{heading:`разделы-документации`,content:`Классы, манифест, точки входа`},{heading:`архитектура-в-двух-словах`,content:"AJAX: `devcraft/ajax.php` → handlers модуля. Сателлиты (Notifications, RePost, …) — отдельные `mod`, тот же каркас. Подробнее: точки входа."},{heading:`дальше`,content:`Установить плагин на сайт.`},{heading:`дальше`,content:`Создать модуль или открыть генератор.`},{heading:`дальше`,content:`При миграции с MH Admin — миграция.`},{heading:`дальше`,content:`Правила кода — конституция PHP.`}],headings:[{id:`что-умеет`,content:`Что умеет`},{id:`для-кого`,content:`Для кого`},{id:`требования`,content:`Требования`},{id:`структура-файлов`,content:`Структура файлов`},{id:`разделы-документации`,content:`Разделы документации`},{id:`архитектура-в-двух-словах`,content:`Архитектура в двух словах`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#что-умеет`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#структура-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Структура файлов`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#архитектура-в-двух-словах`,title:(0,n.jsx)(n.Fragment,{children:`Архитектура в двух словах`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Mermaid:c}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Mermaid`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` — админ-оболочка для ваших плагинов на `,(0,n.jsx)(t.strong,{children:`DLE 20.0`}),`. Один раздел в панели DLE, общие настройки, меню, AJAX и Twig — без копипасты каркаса в каждом ZIP.`]}),`
`,(0,n.jsx)(t.p,{children:`Зачем это вам: пишете бизнес-логику модуля, а вход в админку, формы настроек и маршруты уже готовы.`}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет`,children:`Что умеет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`отдельный пункт `,(0,n.jsx)(t.strong,{children:`DevCraft`}),` в админке DLE (`,(0,n.jsx)(t.code,{children:`?mod=devcraft`}),` и сателлиты);`]}),`
`,(0,n.jsxs)(t.li,{children:[`модули в `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/{Name}/`}),` с `,(0,n.jsx)(t.code,{children:`manifest.php`}),`, страницами и AJAX;`]}),`
`,(0,n.jsxs)(t.li,{children:[`настройки через `,(0,n.jsx)(t.code,{children:`settings.schema.php`}),` → JSON в `,(0,n.jsx)(t.code,{children:`devcraft/config/`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`Fluent Types: `,(0,n.jsx)(t.code,{children:`manifest`}),` / changelog / schema как объект `,(0,n.jsx)(t.strong,{children:`или`}),` массив (`,(0,n.jsx)(t.a,{href:`guides/fluent_types`,children:`гайд`}),`);`]}),`
`,(0,n.jsxs)(t.li,{children:[`DataLoader / QueryBuilder: SELECT из таблиц DLE без `,(0,n.jsx)(t.code,{children:`super_query`}),` (`,(0,n.jsx)(t.a,{href:`guides/data_loader`,children:`гайд`}),`);`]}),`
`,(0,n.jsxs)(t.li,{children:[`общий AJAX через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` (admin и public);`]}),`
`,(0,n.jsx)(t.li,{children:`Composer UI, логи, генератор модулей, локали XLIFF;`}),`
`,(0,n.jsxs)(t.li,{children:[`shared DTO из `,(0,n.jsx)(t.a,{href:`/dev/dev-tools/1.0.1/getting_started`,children:(0,n.jsx)(t.code,{children:`devcraftclub/dev-tools`})}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsxs)(t.p,{children:[`Авторы плагинов DLE, которым нужна одна оболочка под несколько модулей и линейка версий `,(0,n.jsx)(t.code,{children:`200.*`}),` под DLE 20.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CMS`}),(0,n.jsxs)(t.td,{children:[`DataLife Engine `,(0,n.jsx)(t.strong,{children:`20.0`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия плагина`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`200.4.0+`}),` (`,(0,n.jsx)(t.a,{href:`reference/back-end/versioning`,children:`почему major = 200`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsxs)(t.td,{children:[`зависимости в `,(0,n.jsx)(t.code,{children:`devcraft/`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP-расширения`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`simplexml`}),`, `,(0,n.jsx)(t.code,{children:`libxml`}),`, `,(0,n.jsx)(t.code,{children:`intl`}),`, `,(0,n.jsx)(t.code,{children:`fileinfo`}),`, `,(0,n.jsx)(t.code,{children:`pdo_mysql`}),`, `,(0,n.jsx)(t.code,{children:`curl`}),`, `,(0,n.jsx)(t.code,{children:`mbstring`}),`, `,(0,n.jsx)(t.code,{children:`openssl`})]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Память PHP — лучше от 128M. Полный чеклист установки: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`структура-файлов`,children:`Структура файлов`}),`
`,(0,n.jsxs)(t.p,{children:[`Корень сайта DLE после установки DevCraft (обзор; каркас своего модуля — `,(0,n.jsx)(t.a,{href:`guides/create_module`,children:`создать модуль`}),`). В скобках — назначение; у `,(0,n.jsx)(t.code,{children:`modules/Admin`}),` — полный список.`]}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`DLE ROOT`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`bootstrap (функции, ajax-session)`}),(0,n.jsx)(s,{name:`classes (ядро: Application, Http, Form, Types…)`}),(0,n.jsx)(s,{name:`database (миграции Cycle)`}),(0,n.jsxs)(s,{name:`modules`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`Admin`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(a,{name:`settings.schema.php`}),(0,n.jsx)(a,{name:`changelog.data.php`}),(0,n.jsxs)(s,{name:`Ajax`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`CheckAssetsHandler.php`}),(0,n.jsx)(a,{name:`CheckUpdateHandler.php`}),(0,n.jsx)(a,{name:`ComposerActionHandler.php`}),(0,n.jsx)(a,{name:`ComposerPolicyHandler.php`}),(0,n.jsx)(a,{name:`ComposerSyncHandler.php`}),(0,n.jsx)(a,{name:`ComposerTableHandler.php`}),(0,n.jsx)(a,{name:`DeleteLogHandler.php`}),(0,n.jsx)(a,{name:`DumpAutoloadHandler.php`}),(0,n.jsx)(a,{name:`LogsTableHandler.php`}),(0,n.jsx)(a,{name:`NewModuleHandler.php`}),(0,n.jsx)(a,{name:`SaveAssetHandler.php`}),(0,n.jsx)(a,{name:`SettingsHandler.php`}),(0,n.jsx)(a,{name:`SyncAssetsHandler.php`})]}),(0,n.jsxs)(s,{name:`Pages`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`ChangelogPage.php`}),(0,n.jsx)(a,{name:`ComposerPage.php`}),(0,n.jsx)(a,{name:`DashboardPage.php`}),(0,n.jsx)(a,{name:`LogsPage.php`}),(0,n.jsx)(a,{name:`NewModulePage.php`}),(0,n.jsx)(a,{name:`SettingsPage.php`})]}),(0,n.jsxs)(s,{name:`Services`,children:[(0,n.jsx)(a,{name:`BootstrapSetupService.php`}),(0,n.jsx)(a,{name:`DashboardPackageMetricService.php`}),(0,n.jsx)(a,{name:`DefaultPackageSeedService.php`}),(0,n.jsx)(a,{name:`LogMessagePresenter.php`}),(0,n.jsx)(a,{name:`ModuleGeneratorInput.php`}),(0,n.jsx)(a,{name:`ModuleGeneratorService.php`})]}),(0,n.jsx)(s,{name:`Models`,children:(0,n.jsx)(a,{name:`LogRecord.php`})}),(0,n.jsx)(s,{name:`Repositories`,children:(0,n.jsx)(a,{name:`LogRecordRepository.php`})}),(0,n.jsxs)(s,{name:`Filter`,children:[(0,n.jsx)(a,{name:`composer.filter.schema.php`}),(0,n.jsx)(a,{name:`logs.filter.schema.php`})]}),(0,n.jsxs)(s,{name:`templates`,children:[(0,n.jsx)(a,{name:`composer.twig`}),(0,n.jsx)(a,{name:`logs.twig`}),(0,n.jsx)(a,{name:`logs_view.twig`}),(0,n.jsx)(a,{name:`modules.twig`}),(0,n.jsx)(a,{name:`new_module.twig`})]}),(0,n.jsxs)(s,{name:`Public`,children:[(0,n.jsx)(a,{name:`admin.js`}),(0,n.jsx)(a,{name:`icon.png`}),(0,n.jsx)(a,{name:`.htaccess`})]})]}),(0,n.jsx)(s,{name:`{Name} (сателлит: Notifications, RePost…)`})]}),(0,n.jsx)(s,{name:`templates (Twig ядра: layout, формы, UI)`})]}),(0,n.jsx)(s,{name:`config (*.json настроек модулей)`}),(0,n.jsx)(s,{name:`locales (XLIFF / переводы)`}),(0,n.jsx)(s,{name:`cache`}),(0,n.jsx)(s,{name:`logs`}),(0,n.jsx)(s,{name:`database (seeds)`}),(0,n.jsx)(s,{name:`assetschecker`}),(0,n.jsx)(s,{name:`backup`}),(0,n.jsx)(s,{name:`vendor (Composer)`}),(0,n.jsx)(a,{name:`init.php (bootstrap админки)`}),(0,n.jsx)(a,{name:`ajax.php (единая точка AJAX)`}),(0,n.jsx)(a,{name:`bootstrap.php`}),(0,n.jsx)(a,{name:`bootstrap.ajax.php`}),(0,n.jsx)(a,{name:`composer.json`}),(0,n.jsx)(a,{name:`composer.lock`})]}),(0,n.jsxs)(s,{name:`engine`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`inc`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`devcraft.php (glue → runAdmin(Admin))`}),(0,n.jsx)(a,{name:`{mod}.php (glue сателлита)`})]}),(0,n.jsx)(s,{name:`modules`,children:(0,n.jsx)(s,{name:`devcraft (публичные PHP-includes)`})})]}),(0,n.jsx)(s,{name:`templates`,children:(0,n.jsx)(s,{name:`{skin}`,children:(0,n.jsx)(s,{name:`devcraft ({module}/*.tpl сайта)`})})}),(0,n.jsx)(s,{name:`language (языки DLE)`}),(0,n.jsx)(a,{name:`index.php`})]})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`devcraft/`}),` — ядро, модули, Composer, конфиги.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`engine/inc/{mod}.php`}),` — glue DLE → `,(0,n.jsx)(t.code,{children:`Application::runAdmin()`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`templates/{skin}/devcraft/`}),` — публичные `,(0,n.jsx)(t.code,{children:`.tpl`}),` сайта (админский Twig — в `,(0,n.jsx)(t.code,{children:`devcraft/src/`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/dle/devcraft_admin/200.4.0/install`,children:(0,n.jsx)(t.p,{children:`ZIP, Composer, первый запуск`})}),(0,n.jsx)(r,{title:`Создать модуль`,href:`/dev/dle/devcraft_admin/200.4.0/guides/create_module`,children:(0,n.jsx)(t.p,{children:`Каркас, manifest, страницы, AJAX, install.xml`})}),(0,n.jsx)(r,{title:`Генератор`,href:`/dev/dle/devcraft_admin/200.4.0/guides/new_module`,children:(0,n.jsx)(t.p,{children:`Модуль из админки за минуту`})}),(0,n.jsx)(r,{title:`Fluent Types`,href:`/dev/dle/devcraft_admin/200.4.0/guides/fluent_types`,children:(0,n.jsx)(t.p,{children:`Билдеры и dual accept`})}),(0,n.jsx)(r,{title:`Версионирование`,href:`/dev/dle/devcraft_admin/200.4.0/reference/back-end/versioning`,children:(0,n.jsx)(t.p,{children:`Почему 173 / 200 / 261`})}),(0,n.jsx)(r,{title:`Справочник API`,href:`/dev/dle/devcraft_admin/200.4.0/reference`,children:(0,n.jsx)(t.p,{children:`Классы, манифест, точки входа`})})]}),`
`,(0,n.jsx)(t.h2,{id:`архитектура-в-двух-словах`,children:`Архитектура в двух словах`}),`
`,(0,n.jsx)(c,{chart:`sequenceDiagram
    participant DLE as DLE Admin
    participant Inc as engine/inc/devcraft.php
    participant Init as devcraft/init.php
    participant App as Application
    participant Router as Router

    DLE->>Inc: mod=devcraft
    Inc->>Init: require
    Init->>App: runAdmin(Admin)
    App->>Router: dispatch page`}),`
`,(0,n.jsxs)(t.p,{children:[`AJAX: `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` → handlers модуля. Сателлиты (Notifications, RePost, …) — отдельные `,(0,n.jsx)(t.code,{children:`mod`}),`, тот же каркас. Подробнее: `,(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`точки входа`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` плагин на сайт.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`guides/create_module`,children:`Создать модуль`}),` или открыть `,(0,n.jsx)(t.a,{href:`guides/new_module`,children:`генератор`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`При миграции с MH Admin — `,(0,n.jsx)(t.a,{href:`./migration`,children:`миграция`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Правила кода — `,(0,n.jsx)(t.a,{href:`../../../../instructions/constitution`,children:`конституция PHP`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};