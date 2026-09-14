import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое DevCraft Admin: описание для пользователей и разработчиков, возможности, структура, быстрый старт панели.`,version:`200.4.1`},i=new Date(1789411935e3),a=`

## Описание плагина [#описание-плагина]

**DevCraft Admin** — это общая админ-панель для ваших плагинов на **DataLife Engine**. Вместо того чтобы каждый модуль тащил свой каркас (меню, формы, AJAX, логи), вы ставите одну оболочку и подключаете к ней сателлиты: уведомления, репосты, связи новостей и любые свои модули в том же стиле.

Оболочка даёт единый вход в админку DLE (\`?mod=devcraft\` и отдельные \`mod\` у сателлитов), общие настройки сайта DevCraft, оформление на Metro UI, единую точку AJAX (\`devcraft/ajax.php\`) и шаблоны Twig для экранов админки. Публичная часть сайта по-прежнему живёт в теме DLE (\`.tpl\`), а логика модулей — в \`devcraft/src/modules/…\`.

Линейка версий \`200.*\` рассчитана на **DLE 20 и новее** (в т.ч. сайты на 21.0). Версия **200.4.1** — текущая документация этой ветки: генератор модулей, Composer в панели, логи, Fluent-манифесты, слои доступа к данным DLE и расширения публичных условий шаблонов (\`[if]\`/\`[else]\`, \`[has]\`).

## Возможности [#возможности]

* Отдельный раздел **DevCraft** в админке DLE и боковое меню модулей.
* Сателлиты в \`devcraft/src/modules/{Имя}/\` с \`manifest.php\`, страницами, AJAX и своими шаблонами.
* Настройки модулей через схемы форм → JSON в \`devcraft/config/\`.
* Единый AJAX: \`devcraft/ajax.php\` (режим админки и публичный, когда нужно).
* Экран **Composer**: зависимости PHP без консоли на сервере (с оговорками — см. быстрый старт).
* **Логи** работы модулей с фильтрами и просмотром записей.
* **Генератор модулей** — каркас нового сателлита из панели.
* Fluent Types: манифест, changelog и схемы можно писать билдерами или массивами.
* DataLoader / QueryBuilder и встроенный **DLE SDK** (\`DcApi\`) — чтение и запись таблиц DLE без сырого \`$db->super_query\` там, где хватает API.
* Локали (XLIFF), проверка и синхронизация ресурсов (assets) с сервера разработчика.
* Патчи ядра DLE через \`install.xml\` плагина (например условия в \`templates.class.php\`).
* Общие типы и утилиты из пакета [\`devcraftclub/dev-tools\`](/dev/dev-tools/1.0.1/getting_started).

## Для кого [#для-кого]

### Пользователи панели (владельцы сайта, админы) [#пользователи-панели-владельцы-сайта-админы]

Вы ставите DevCraft Admin как обычный плагин DLE, включаете его и дальше работаете **из браузера**: настройки языка и путей, просмотр логов, обновление пакетов Composer (если сервер позволяет), проверка обновлений оболочки, запуск генератора, если автор отдал вам такую роль. Сателлиты появляются отдельными пунктами меню — их экраны уже «вшиты» в ту же оболочку, без второй админки «с нуля».

Вам важно: права групп DLE на раздел, чтобы Composer и генератор были доступны только тем, кому можно менять код/зависимости; бэкап перед обновлением плагина; понимание, что отключение Admin снимает и патчи ядра, которые шли с ним через \`install.xml\`.

### Разработчики модулей [#разработчики-модулей]

Вы пишете **бизнес-логику** сателлита: сущности, сервисы, страницы админки, публичные контроллеры и \`.tpl\` темы. Каркас уже на месте: маршруты экранов, Twig для админки, обработчики AJAX, схемы форм и фильтров, журналы. Держитесь слоёв Service / Repository / Controller и подключайте файлы сайта через \`DLEPlugins::Check()\`. Запросы админки и сателлитов идут через общую точку \`devcraft/ajax.php\` — отдельные скрипты в \`engine/ajax/\` для новых модулей не нужны. Старый процедурный стиль MH Admin не копируйте: в DevCraft те же задачи решаются классами и схемами оболочки.

**Почему не обычная админка DLE «как в учебнике».** Штатный путь (\`engine/inc/ваш_mod.php\` + свои куски разметки и разрозненные AJAX-файлы) подходит для одного простого экрана. Как только модулей несколько, вы снова и снова собираете меню, права, формы, ответы JSON и обновления — каждый ZIP со своим каркасом. DevCraft Admin даёт **одну** оболочку на все сателлиты: единый вид (Metro), общие настройки и логи, готовые формы/фильтры, Composer и генератор из панели, патчи ядра через \`install.xml\`. Вы тратите время на продукт, а не на пятую копию «своей мини-админки».

Документация для кода: [Руководства](./guides), [справочник](./reference), [PHP DevCraft Standards](guides/php_devcraft_standards), [конституция](../../../../instructions/constitution).

## Требования [#требования]

| Что            | Минимум                                                                               |
| -------------- | ------------------------------------------------------------------------------------- |
| CMS            | DataLife Engine &#x2A;*20.0+** (ветка \`200.*\`)                                        |
| PHP            | **8.3+**                                                                              |
| Версия плагина | **200.4.0+** ([почему major = 200](reference/back-end/versioning))                    |
| Composer       | зависимости в каталоге \`devcraft/\`                                                    |
| PHP-расширения | \`simplexml\`, \`libxml\`, \`intl\`, \`fileinfo\`, \`pdo_mysql\`, \`curl\`, \`mbstring\`, \`openssl\` |

Память PHP — лучше от 128M. Полный чеклист: [Установка](./install).

## Дерево структуры [#дерево-структуры]

Корень сайта DLE после установки. В скобках — зачем папка; у модуля Admin перечислены основные экраны. Каркас своего сателлита — [создать модуль](guides/create_module).

<Files>
  <Folder name="корень сайта DLE">
    <Folder name="devcraft">
      <Folder name="src">
        <Folder name="bootstrap — служебные функции и сессия AJAX" />

        <Folder name="classes — ядро оболочки (Application, Http, Form, Types…)" />

        <Folder name="sdk/dle — DcApi и схемы таблиц DLE" />

        <Folder name="database — миграции Cycle ORM" />

        <Folder name="modules">
          <Folder name="Admin — сама панель">
            <File name="manifest.php — меню, версия, AJAX" />

            <File name="settings.schema.php — форма настроек" />

            <File name="changelog.data.php — история для экрана Changelog" />

            <Folder name="Pages — Главная, Настройки, Логи, Composer, Генератор…" />

            <Folder name="Ajax — обработчики запросов панели" />

            <Folder name="Services / Models / Repositories" />

            <Folder name="templates — Twig экранов Admin" />

            <Folder name="Public — admin.js, иконка" />
          </Folder>

          <Folder name="{Имя} — сателлит (Notifications, Connections…)" />
        </Folder>

        <Folder name="templates — общие Twig админки (layout, формы)" />
      </Folder>

      <Folder name="config — JSON настроек модулей" />

      <Folder name="locales — переводы XLIFF" />

      <Folder name="cache / logs / vendor" />

      <File name="init.php — вход админки" />

      <File name="ajax.php — единая точка AJAX" />

      <File name="composer.json" />
    </Folder>

    <Folder name="engine">
      <Folder name="inc">
        <File name="devcraft.php — glue → runAdmin(Admin)" />

        <File name="{mod}.php — glue сателлита" />
      </Folder>
    </Folder>

    <Folder name="templates/{skin}/devcraft/ — публичные .tpl сайта" />
  </Folder>
</Files>

Кратко:

* **\`devcraft/\`** — всё ядро, модули, Composer и конфиги.
* **\`engine/inc/{mod}.php\`** — тонкий вход DLE в оболочку.
* **\`templates/{skin}/devcraft/\`** — HTML публичного сайта; админский HTML — Twig внутри \`devcraft/src/\`.

## Быстрый старт для тех, кто пользуется панелью [#быстрый-старт-для-тех-кто-пользуется-панелью]

<Steps>
  <Step>
    ### Установите и включите плагин [#установите-и-включите-плагин]

    Поставьте пакет DevCraft Admin через менеджер плагинов DLE, включите его. Откройте раздел **DevCraft** в админке. Подробности — [Установка](./install).
  </Step>

  <Step>
    ### Загляните на «Главную» [#загляните-на-главную]

    Здесь сводка по оболочке и установленным пакетам. Если чего-то не хватает после обновления — сначала сюда и в логи.
  </Step>

  <Step>
    ### Настройки [#настройки]

    Язык интерфейса, тема Metro, пути (кэш, экспорты плагинов и т.п.). Сохраняйте только после проверки полей — оболочка умеет сохранять корректные значения по вкладкам. См. [Управление панелью](guides/manage).
  </Step>

  <Step>
    ### На что обратить внимание [#на-что-обратить-внимание]

    * **Автор / права** — генератор модулей и Composer меняют файлы на диске. Давайте доступ только доверенным группам.
    * **Composer** — удобен, когда на хостинге нет SSH. Нужны права на запись в \`devcraft/vendor\` и достаточный лимит времени PHP. Ошибки смотрите в логах DevCraft и в ответе экрана Composer.
    * **Логи** — первое место при «не сохранилось» / «AJAX упал».
    * **Ресурсы (assets)** — проверка и подтягивание скриптов/стилей с CDN разработчика; не путать с обновлением самого ZIP плагина.
    * **Сателлиты** — ставятся отдельными плагинами с зависимостью от Admin; без включённого Admin их админка не поднимется как задумано.
    * **Отключение Admin** — снимает вставки в файлы ядра DLE из \`install.xml\` (например расширения \`[if]\`/\`[has]\`). Планируйте отключение осознанно.
  </Step>

  <Step>
    ### Дальше по задаче [#дальше-по-задаче]

    Нужен свой модуль — [генератор](guides/new_module) или ручной каркас [создать модуль](guides/create_module). Переезд со старого MH Admin — [миграция](./migration).
  </Step>
</Steps>

## Руководства (подробнее) [#руководства-подробнее]

Раздел в меню документации называется **Руководства**. Ниже — зачем открывать каждое.

| Руководство                                             | О чём                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Условия в шаблонах DLE](guides/template_conditionals)  | \`[if]\` с \`[else]\`, блок \`[has]\`, когда нужен \`compile(..., true)\`                  |
| [Создать модуль](guides/create_module)                  | Каркас сателлита: manifest, страницы, AJAX, \`install.xml\`, публичный \`Controller/\` |
| [PHP DevCraft Standards](guides/php_devcraft_standards) | Язык PHPDoc, \`DLEPlugins::Check()\`, куда класть публичный фронт                    |
| [Генератор модулей](guides/new_module)                  | Тот же каркас, но из экрана админки                                                |
| [Идентичность модуля](guides/module_identity)           | \`mod\`, код, имена констант Identity                                                |
| [Fluent Types](guides/fluent_types)                     | Билдеры манифеста / changelog / AJAX-конфига                                       |
| [DataLoader](guides/data_loader)                        | SELECT/INSERT без сырого SQL для простых случаев                                   |
| [Слои данных](guides/data_layers)                       | Когда DataLoader, когда Cycle, когда DcApi                                         |
| [Примеры форм](guides/form_examples)                    | Схемы форм Metro в админке                                                         |
| [CRUD-страницы](guides/crud_pages)                      | Типовые списки и карточки                                                          |
| [Управление панелью](guides/manage)                     | Настройки Admin на практике                                                        |
| [Языки](guides/generate_languages)                      | Локали и выгрузка строк                                                            |
| [Справочник ИИ](guides/ai_tools)                        | Skills, MCP и правила для агентов                                                  |
| [Публичные ресурсы оболочки](guides/public_assets)      | Теги \`{devcraft*}\`, \`siteAssets\`, страницы стилей/скриптов/заголовков              |

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="./install">
    ZIP, Composer, первый запуск
  </Card>

  <Card title="Руководства" href="./guides">
    Практические сценарии по модулям и панели
  </Card>

  <Card title="Справочник API" href="./reference">
    Классы, манифест, точки входа
  </Card>

  <Card title="Помощь в разработке" href="./development_help">
    Skills, MCP, Cursor-rules для агентов
  </Card>

  <Card title="Миграция" href="./migration">
    С MH Admin на DevCraft
  </Card>

  <Card title="История изменений" href="./changelog">
    Что появилось в 200.4.1
  </Card>
</Cards>

## Как устроен вход в админку [#как-устроен-вход-в-админку]

<Mermaid
  chart="sequenceDiagram
    participant DLE as Админка DLE
    participant Inc as engine/inc/devcraft.php
    participant Init as devcraft/init.php
    participant App as Application
    participant Router as Router

    DLE->>Inc: mod=devcraft
    Inc->>Init: подключение
    Init->>App: runAdmin(Admin)
    App->>Router: страница из меню"
/>

AJAX идёт в \`devcraft/ajax.php\` → обработчик модуля. Сателлиты — свои \`mod\`, тот же каркас. Подробнее: [точки входа](reference/back-end/entry_points).

## Дальше [#дальше]

1. [Установить](./install) плагин на сайт.
2. Пройти [быстрый старт панели](#быстрый-старт-для-тех-кто-пользуется-панелью) выше.
3. [Создать модуль](guides/create_module) или [генератор](guides/new_module).
4. Правила кода — [конституция PHP](../../../../instructions/constitution) и [PHP DevCraft Standards](guides/php_devcraft_standards).
5. ИИ-агенты — [Помощь в разработке](development_help) и [Справочник ИИ](guides/ai_tools).
`,o={contents:[{heading:`описание-плагина`,content:`**DevCraft Admin** — это общая админ-панель для ваших плагинов на **DataLife Engine**. Вместо того чтобы каждый модуль тащил свой каркас (меню, формы, AJAX, логи), вы ставите одну оболочку и подключаете к ней сателлиты: уведомления, репосты, связи новостей и любые свои модули в том же стиле.`},{heading:`описание-плагина`,content:"Оболочка даёт единый вход в админку DLE (`?mod=devcraft` и отдельные `mod` у сателлитов), общие настройки сайта DevCraft, оформление на Metro UI, единую точку AJAX (`devcraft/ajax.php`) и шаблоны Twig для экранов админки. Публичная часть сайта по-прежнему живёт в теме DLE (`.tpl`), а логика модулей — в `devcraft/src/modules/…`."},{heading:`описание-плагина`,content:"Линейка версий `200.*` рассчитана на **DLE 20 и новее** (в т.ч. сайты на 21.0). Версия **200.4.1** — текущая документация этой ветки: генератор модулей, Composer в панели, логи, Fluent-манифесты, слои доступа к данным DLE и расширения публичных условий шаблонов (`[if]`/`[else]`, `[has]`)."},{heading:`возможности`,content:`Отдельный раздел **DevCraft** в админке DLE и боковое меню модулей.`},{heading:`возможности`,content:"Сателлиты в `devcraft/src/modules/{Имя}/` с `manifest.php`, страницами, AJAX и своими шаблонами."},{heading:`возможности`,content:"Настройки модулей через схемы форм → JSON в `devcraft/config/`."},{heading:`возможности`,content:"Единый AJAX: `devcraft/ajax.php` (режим админки и публичный, когда нужно)."},{heading:`возможности`,content:`Экран **Composer**: зависимости PHP без консоли на сервере (с оговорками — см. быстрый старт).`},{heading:`возможности`,content:`**Логи** работы модулей с фильтрами и просмотром записей.`},{heading:`возможности`,content:`**Генератор модулей** — каркас нового сателлита из панели.`},{heading:`возможности`,content:`Fluent Types: манифест, changelog и схемы можно писать билдерами или массивами.`},{heading:`возможности`,content:"DataLoader / QueryBuilder и встроенный **DLE SDK** (`DcApi`) — чтение и запись таблиц DLE без сырого `$db->super_query` там, где хватает API."},{heading:`возможности`,content:`Локали (XLIFF), проверка и синхронизация ресурсов (assets) с сервера разработчика.`},{heading:`возможности`,content:"Патчи ядра DLE через `install.xml` плагина (например условия в `templates.class.php`)."},{heading:`возможности`,content:"Общие типы и утилиты из пакета `devcraftclub/dev-tools`."},{heading:`пользователи-панели-владельцы-сайта-админы`,content:`Вы ставите DevCraft Admin как обычный плагин DLE, включаете его и дальше работаете **из браузера**: настройки языка и путей, просмотр логов, обновление пакетов Composer (если сервер позволяет), проверка обновлений оболочки, запуск генератора, если автор отдал вам такую роль. Сателлиты появляются отдельными пунктами меню — их экраны уже «вшиты» в ту же оболочку, без второй админки «с нуля».`},{heading:`пользователи-панели-владельцы-сайта-админы`,content:"Вам важно: права групп DLE на раздел, чтобы Composer и генератор были доступны только тем, кому можно менять код/зависимости; бэкап перед обновлением плагина; понимание, что отключение Admin снимает и патчи ядра, которые шли с ним через `install.xml`."},{heading:`разработчики-модулей`,content:"Вы пишете **бизнес-логику** сателлита: сущности, сервисы, страницы админки, публичные контроллеры и `.tpl` темы. Каркас уже на месте: маршруты экранов, Twig для админки, обработчики AJAX, схемы форм и фильтров, журналы. Держитесь слоёв Service / Repository / Controller и подключайте файлы сайта через `DLEPlugins::Check()`. Запросы админки и сателлитов идут через общую точку `devcraft/ajax.php` — отдельные скрипты в `engine/ajax/` для новых модулей не нужны. Старый процедурный стиль MH Admin не копируйте: в DevCraft те же задачи решаются классами и схемами оболочки."},{heading:`разработчики-модулей`,content:"**Почему не обычная админка DLE «как в учебнике».** Штатный путь (`engine/inc/ваш_mod.php` + свои куски разметки и разрозненные AJAX-файлы) подходит для одного простого экрана. Как только модулей несколько, вы снова и снова собираете меню, права, формы, ответы JSON и обновления — каждый ZIP со своим каркасом. DevCraft Admin даёт **одну** оболочку на все сателлиты: единый вид (Metro), общие настройки и логи, готовые формы/фильтры, Composer и генератор из панели, патчи ядра через `install.xml`. Вы тратите время на продукт, а не на пятую копию «своей мини-админки»."},{heading:`разработчики-модулей`,content:`Документация для кода: Руководства, справочник, PHP DevCraft Standards, конституция.`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`CMS`},{heading:`требования`,content:"DataLife Engine &#x2A;*20.0+** (ветка `200.*`)"},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`Версия плагина`},{heading:`требования`,content:`**200.4.0+** (почему major = 200)`},{heading:`требования`,content:`Composer`},{heading:`требования`,content:"зависимости в каталоге `devcraft/`"},{heading:`требования`,content:`PHP-расширения`},{heading:`требования`,content:"`simplexml`, `libxml`, `intl`, `fileinfo`, `pdo_mysql`, `curl`, `mbstring`, `openssl`"},{heading:`требования`,content:`Память PHP — лучше от 128M. Полный чеклист: Установка.`},{heading:`дерево-структуры`,content:`Корень сайта DLE после установки. В скобках — зачем папка; у модуля Admin перечислены основные экраны. Каркас своего сателлита — создать модуль.`},{heading:`дерево-структуры`,content:`<File name="manifest.php — меню, версия, AJAX" />`},{heading:`дерево-структуры`,content:`<File name="settings.schema.php — форма настроек" />`},{heading:`дерево-структуры`,content:`<File name="changelog.data.php — история для экрана Changelog" />`},{heading:`дерево-структуры`,content:`<File name="init.php — вход админки" />`},{heading:`дерево-структуры`,content:`<File name="ajax.php — единая точка AJAX" />`},{heading:`дерево-структуры`,content:`<File name="composer.json" />`},{heading:`дерево-структуры`,content:`<File name="devcraft.php — glue → runAdmin(Admin)" />`},{heading:`дерево-структуры`,content:`<File name="{mod}.php — glue сателлита" />`},{heading:`дерево-структуры`,content:`Кратко:`},{heading:`дерево-структуры`,content:"**`devcraft/`** — всё ядро, модули, Composer и конфиги."},{heading:`дерево-структуры`,content:"**`engine/inc/{mod}.php`** — тонкий вход DLE в оболочку."},{heading:`дерево-структуры`,content:"**`templates/{skin}/devcraft/`** — HTML публичного сайта; админский HTML — Twig внутри `devcraft/src/`."},{heading:`установите-и-включите-плагин`,content:`Поставьте пакет DevCraft Admin через менеджер плагинов DLE, включите его. Откройте раздел **DevCraft** в админке. Подробности — Установка.`},{heading:`загляните-на-главную`,content:`Здесь сводка по оболочке и установленным пакетам. Если чего-то не хватает после обновления — сначала сюда и в логи.`},{heading:`настройки`,content:`Язык интерфейса, тема Metro, пути (кэш, экспорты плагинов и т.п.). Сохраняйте только после проверки полей — оболочка умеет сохранять корректные значения по вкладкам. См. Управление панелью.`},{heading:`на-что-обратить-внимание`,content:`**Автор / права** — генератор модулей и Composer меняют файлы на диске. Давайте доступ только доверенным группам.`},{heading:`на-что-обратить-внимание`,content:"**Composer** — удобен, когда на хостинге нет SSH. Нужны права на запись в `devcraft/vendor` и достаточный лимит времени PHP. Ошибки смотрите в логах DevCraft и в ответе экрана Composer."},{heading:`на-что-обратить-внимание`,content:`**Логи** — первое место при «не сохранилось» / «AJAX упал».`},{heading:`на-что-обратить-внимание`,content:`**Ресурсы (assets)** — проверка и подтягивание скриптов/стилей с CDN разработчика; не путать с обновлением самого ZIP плагина.`},{heading:`на-что-обратить-внимание`,content:`**Сателлиты** — ставятся отдельными плагинами с зависимостью от Admin; без включённого Admin их админка не поднимется как задумано.`},{heading:`на-что-обратить-внимание`,content:"**Отключение Admin** — снимает вставки в файлы ядра DLE из `install.xml` (например расширения `[if]`/`[has]`). Планируйте отключение осознанно."},{heading:`дальше-по-задаче`,content:`Нужен свой модуль — генератор или ручной каркас создать модуль. Переезд со старого MH Admin — миграция.`},{heading:`руководства-подробнее`,content:`Раздел в меню документации называется **Руководства**. Ниже — зачем открывать каждое.`},{heading:`руководства-подробнее`,content:`Руководство`},{heading:`руководства-подробнее`,content:`О чём`},{heading:`руководства-подробнее`,content:`Условия в шаблонах DLE`},{heading:`руководства-подробнее`,content:"`[if]` с `[else]`, блок `[has]`, когда нужен `compile(..., true)`"},{heading:`руководства-подробнее`,content:`Создать модуль`},{heading:`руководства-подробнее`,content:"Каркас сателлита: manifest, страницы, AJAX, `install.xml`, публичный `Controller/`"},{heading:`руководства-подробнее`,content:`PHP DevCraft Standards`},{heading:`руководства-подробнее`,content:"Язык PHPDoc, `DLEPlugins::Check()`, куда класть публичный фронт"},{heading:`руководства-подробнее`,content:`Генератор модулей`},{heading:`руководства-подробнее`,content:`Тот же каркас, но из экрана админки`},{heading:`руководства-подробнее`,content:`Идентичность модуля`},{heading:`руководства-подробнее`,content:"`mod`, код, имена констант Identity"},{heading:`руководства-подробнее`,content:`Fluent Types`},{heading:`руководства-подробнее`,content:`Билдеры манифеста / changelog / AJAX-конфига`},{heading:`руководства-подробнее`,content:`DataLoader`},{heading:`руководства-подробнее`,content:`SELECT/INSERT без сырого SQL для простых случаев`},{heading:`руководства-подробнее`,content:`Слои данных`},{heading:`руководства-подробнее`,content:`Когда DataLoader, когда Cycle, когда DcApi`},{heading:`руководства-подробнее`,content:`Примеры форм`},{heading:`руководства-подробнее`,content:`Схемы форм Metro в админке`},{heading:`руководства-подробнее`,content:`CRUD-страницы`},{heading:`руководства-подробнее`,content:`Типовые списки и карточки`},{heading:`руководства-подробнее`,content:`Управление панелью`},{heading:`руководства-подробнее`,content:`Настройки Admin на практике`},{heading:`руководства-подробнее`,content:`Языки`},{heading:`руководства-подробнее`,content:`Локали и выгрузка строк`},{heading:`руководства-подробнее`,content:`Справочник ИИ`},{heading:`руководства-подробнее`,content:`Skills, MCP и правила для агентов`},{heading:`руководства-подробнее`,content:`Публичные ресурсы оболочки`},{heading:`руководства-подробнее`,content:"Теги `{devcraft*}`, `siteAssets`, страницы стилей/скриптов/заголовков"},{heading:`разделы-документации`,content:`ZIP, Composer, первый запуск`},{heading:`разделы-документации`,content:`Практические сценарии по модулям и панели`},{heading:`разделы-документации`,content:`Классы, манифест, точки входа`},{heading:`разделы-документации`,content:`Skills, MCP, Cursor-rules для агентов`},{heading:`разделы-документации`,content:`С MH Admin на DevCraft`},{heading:`разделы-документации`,content:`Что появилось в 200.4.1`},{heading:`как-устроен-вход-в-админку`,content:"AJAX идёт в `devcraft/ajax.php` → обработчик модуля. Сателлиты — свои `mod`, тот же каркас. Подробнее: точки входа."},{heading:`дальше`,content:`Установить плагин на сайт.`},{heading:`дальше`,content:`Пройти быстрый старт панели выше.`},{heading:`дальше`,content:`Создать модуль или генератор.`},{heading:`дальше`,content:`Правила кода — конституция PHP и PHP DevCraft Standards.`},{heading:`дальше`,content:`ИИ-агенты — Помощь в разработке и Справочник ИИ.`}],headings:[{id:`описание-плагина`,content:`Описание плагина`},{id:`возможности`,content:`Возможности`},{id:`для-кого`,content:`Для кого`},{id:`пользователи-панели-владельцы-сайта-админы`,content:`Пользователи панели (владельцы сайта, админы)`},{id:`разработчики-модулей`,content:`Разработчики модулей`},{id:`требования`,content:`Требования`},{id:`дерево-структуры`,content:`Дерево структуры`},{id:`быстрый-старт-для-тех-кто-пользуется-панелью`,content:`Быстрый старт для тех, кто пользуется панелью`},{id:`установите-и-включите-плагин`,content:`Установите и включите плагин`},{id:`загляните-на-главную`,content:`Загляните на «Главную»`},{id:`настройки`,content:`Настройки`},{id:`на-что-обратить-внимание`,content:`На что обратить внимание`},{id:`дальше-по-задаче`,content:`Дальше по задаче`},{id:`руководства-подробнее`,content:`Руководства (подробнее)`},{id:`разделы-документации`,content:`Разделы документации`},{id:`как-устроен-вход-в-админку`,content:`Как устроен вход в админку`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#описание-плагина`,title:(0,n.jsx)(n.Fragment,{children:`Описание плагина`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:3,url:`#пользователи-панели-владельцы-сайта-админы`,title:(0,n.jsx)(n.Fragment,{children:`Пользователи панели (владельцы сайта, админы)`})},{depth:3,url:`#разработчики-модулей`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики модулей`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дерево-структуры`,title:(0,n.jsx)(n.Fragment,{children:`Дерево структуры`})},{depth:2,url:`#быстрый-старт-для-тех-кто-пользуется-панелью`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт для тех, кто пользуется панелью`})},{depth:3,url:`#установите-и-включите-плагин`,title:(0,n.jsx)(n.Fragment,{children:`Установите и включите плагин`})},{depth:3,url:`#загляните-на-главную`,title:(0,n.jsx)(n.Fragment,{children:`Загляните на «Главную»`})},{depth:3,url:`#настройки`,title:(0,n.jsx)(n.Fragment,{children:`Настройки`})},{depth:3,url:`#на-что-обратить-внимание`,title:(0,n.jsx)(n.Fragment,{children:`На что обратить внимание`})},{depth:3,url:`#дальше-по-задаче`,title:(0,n.jsx)(n.Fragment,{children:`Дальше по задаче`})},{depth:2,url:`#руководства-подробнее`,title:(0,n.jsx)(n.Fragment,{children:`Руководства (подробнее)`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#как-устроен-вход-в-админку`,title:(0,n.jsx)(n.Fragment,{children:`Как устроен вход в админку`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Mermaid:c,Step:l,Steps:d}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Mermaid`,!0),l||u(`Step`,!0),d||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`описание-плагина`,children:`Описание плагина`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` — это общая админ-панель для ваших плагинов на `,(0,n.jsx)(t.strong,{children:`DataLife Engine`}),`. Вместо того чтобы каждый модуль тащил свой каркас (меню, формы, AJAX, логи), вы ставите одну оболочку и подключаете к ней сателлиты: уведомления, репосты, связи новостей и любые свои модули в том же стиле.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Оболочка даёт единый вход в админку DLE (`,(0,n.jsx)(t.code,{children:`?mod=devcraft`}),` и отдельные `,(0,n.jsx)(t.code,{children:`mod`}),` у сателлитов), общие настройки сайта DevCraft, оформление на Metro UI, единую точку AJAX (`,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`) и шаблоны Twig для экранов админки. Публичная часть сайта по-прежнему живёт в теме DLE (`,(0,n.jsx)(t.code,{children:`.tpl`}),`), а логика модулей — в `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/…`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Линейка версий `,(0,n.jsx)(t.code,{children:`200.*`}),` рассчитана на `,(0,n.jsx)(t.strong,{children:`DLE 20 и новее`}),` (в т.ч. сайты на 21.0). Версия `,(0,n.jsx)(t.strong,{children:`200.4.1`}),` — текущая документация этой ветки: генератор модулей, Composer в панели, логи, Fluent-манифесты, слои доступа к данным DLE и расширения публичных условий шаблонов (`,(0,n.jsx)(t.code,{children:`[if]`}),`/`,(0,n.jsx)(t.code,{children:`[else]`}),`, `,(0,n.jsx)(t.code,{children:`[has]`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Отдельный раздел `,(0,n.jsx)(t.strong,{children:`DevCraft`}),` в админке DLE и боковое меню модулей.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сателлиты в `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/{Имя}/`}),` с `,(0,n.jsx)(t.code,{children:`manifest.php`}),`, страницами, AJAX и своими шаблонами.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настройки модулей через схемы форм → JSON в `,(0,n.jsx)(t.code,{children:`devcraft/config/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Единый AJAX: `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` (режим админки и публичный, когда нужно).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Экран `,(0,n.jsx)(t.strong,{children:`Composer`}),`: зависимости PHP без консоли на сервере (с оговорками — см. быстрый старт).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Логи`}),` работы модулей с фильтрами и просмотром записей.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Генератор модулей`}),` — каркас нового сателлита из панели.`]}),`
`,(0,n.jsx)(t.li,{children:`Fluent Types: манифест, changelog и схемы можно писать билдерами или массивами.`}),`
`,(0,n.jsxs)(t.li,{children:[`DataLoader / QueryBuilder и встроенный `,(0,n.jsx)(t.strong,{children:`DLE SDK`}),` (`,(0,n.jsx)(t.code,{children:`DcApi`}),`) — чтение и запись таблиц DLE без сырого `,(0,n.jsx)(t.code,{children:`$db->super_query`}),` там, где хватает API.`]}),`
`,(0,n.jsx)(t.li,{children:`Локали (XLIFF), проверка и синхронизация ресурсов (assets) с сервера разработчика.`}),`
`,(0,n.jsxs)(t.li,{children:[`Патчи ядра DLE через `,(0,n.jsx)(t.code,{children:`install.xml`}),` плагина (например условия в `,(0,n.jsx)(t.code,{children:`templates.class.php`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Общие типы и утилиты из пакета `,(0,n.jsx)(t.a,{href:`/dev/dev-tools/1.0.1/getting_started`,children:(0,n.jsx)(t.code,{children:`devcraftclub/dev-tools`})}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsx)(t.h3,{id:`пользователи-панели-владельцы-сайта-админы`,children:`Пользователи панели (владельцы сайта, админы)`}),`
`,(0,n.jsxs)(t.p,{children:[`Вы ставите DevCraft Admin как обычный плагин DLE, включаете его и дальше работаете `,(0,n.jsx)(t.strong,{children:`из браузера`}),`: настройки языка и путей, просмотр логов, обновление пакетов Composer (если сервер позволяет), проверка обновлений оболочки, запуск генератора, если автор отдал вам такую роль. Сателлиты появляются отдельными пунктами меню — их экраны уже «вшиты» в ту же оболочку, без второй админки «с нуля».`]}),`
`,(0,n.jsxs)(t.p,{children:[`Вам важно: права групп DLE на раздел, чтобы Composer и генератор были доступны только тем, кому можно менять код/зависимости; бэкап перед обновлением плагина; понимание, что отключение Admin снимает и патчи ядра, которые шли с ним через `,(0,n.jsx)(t.code,{children:`install.xml`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-модулей`,children:`Разработчики модулей`}),`
`,(0,n.jsxs)(t.p,{children:[`Вы пишете `,(0,n.jsx)(t.strong,{children:`бизнес-логику`}),` сателлита: сущности, сервисы, страницы админки, публичные контроллеры и `,(0,n.jsx)(t.code,{children:`.tpl`}),` темы. Каркас уже на месте: маршруты экранов, Twig для админки, обработчики AJAX, схемы форм и фильтров, журналы. Держитесь слоёв Service / Repository / Controller и подключайте файлы сайта через `,(0,n.jsx)(t.code,{children:`DLEPlugins::Check()`}),`. Запросы админки и сателлитов идут через общую точку `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` — отдельные скрипты в `,(0,n.jsx)(t.code,{children:`engine/ajax/`}),` для новых модулей не нужны. Старый процедурный стиль MH Admin не копируйте: в DevCraft те же задачи решаются классами и схемами оболочки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Почему не обычная админка DLE «как в учебнике».`}),` Штатный путь (`,(0,n.jsx)(t.code,{children:`engine/inc/ваш_mod.php`}),` + свои куски разметки и разрозненные AJAX-файлы) подходит для одного простого экрана. Как только модулей несколько, вы снова и снова собираете меню, права, формы, ответы JSON и обновления — каждый ZIP со своим каркасом. DevCraft Admin даёт `,(0,n.jsx)(t.strong,{children:`одну`}),` оболочку на все сателлиты: единый вид (Metro), общие настройки и логи, готовые формы/фильтры, Composer и генератор из панели, патчи ядра через `,(0,n.jsx)(t.code,{children:`install.xml`}),`. Вы тратите время на продукт, а не на пятую копию «своей мини-админки».`]}),`
`,(0,n.jsxs)(t.p,{children:[`Документация для кода: `,(0,n.jsx)(t.a,{href:`./guides`,children:`Руководства`}),`, `,(0,n.jsx)(t.a,{href:`./reference`,children:`справочник`}),`, `,(0,n.jsx)(t.a,{href:`guides/php_devcraft_standards`,children:`PHP DevCraft Standards`}),`, `,(0,n.jsx)(t.a,{href:`../../../../instructions/constitution`,children:`конституция`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CMS`}),(0,n.jsxs)(t.td,{children:[`DataLife Engine `,(0,n.jsx)(t.strong,{children:`20.0+`}),` (ветка `,(0,n.jsx)(t.code,{children:`200.*`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия плагина`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`200.4.0+`}),` (`,(0,n.jsx)(t.a,{href:`reference/back-end/versioning`,children:`почему major = 200`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsxs)(t.td,{children:[`зависимости в каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP-расширения`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`simplexml`}),`, `,(0,n.jsx)(t.code,{children:`libxml`}),`, `,(0,n.jsx)(t.code,{children:`intl`}),`, `,(0,n.jsx)(t.code,{children:`fileinfo`}),`, `,(0,n.jsx)(t.code,{children:`pdo_mysql`}),`, `,(0,n.jsx)(t.code,{children:`curl`}),`, `,(0,n.jsx)(t.code,{children:`mbstring`}),`, `,(0,n.jsx)(t.code,{children:`openssl`})]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Память PHP — лучше от 128M. Полный чеклист: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дерево-структуры`,children:`Дерево структуры`}),`
`,(0,n.jsxs)(t.p,{children:[`Корень сайта DLE после установки. В скобках — зачем папка; у модуля Admin перечислены основные экраны. Каркас своего сателлита — `,(0,n.jsx)(t.a,{href:`guides/create_module`,children:`создать модуль`}),`.`]}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`корень сайта DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`bootstrap — служебные функции и сессия AJAX`}),(0,n.jsx)(s,{name:`classes — ядро оболочки (Application, Http, Form, Types…)`}),(0,n.jsx)(s,{name:`sdk/dle — DcApi и схемы таблиц DLE`}),(0,n.jsx)(s,{name:`database — миграции Cycle ORM`}),(0,n.jsxs)(s,{name:`modules`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`Admin — сама панель`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php — меню, версия, AJAX`}),(0,n.jsx)(a,{name:`settings.schema.php — форма настроек`}),(0,n.jsx)(a,{name:`changelog.data.php — история для экрана Changelog`}),(0,n.jsx)(s,{name:`Pages — Главная, Настройки, Логи, Composer, Генератор…`}),(0,n.jsx)(s,{name:`Ajax — обработчики запросов панели`}),(0,n.jsx)(s,{name:`Services / Models / Repositories`}),(0,n.jsx)(s,{name:`templates — Twig экранов Admin`}),(0,n.jsx)(s,{name:`Public — admin.js, иконка`})]}),(0,n.jsx)(s,{name:`{Имя} — сателлит (Notifications, Connections…)`})]}),(0,n.jsx)(s,{name:`templates — общие Twig админки (layout, формы)`})]}),(0,n.jsx)(s,{name:`config — JSON настроек модулей`}),(0,n.jsx)(s,{name:`locales — переводы XLIFF`}),(0,n.jsx)(s,{name:`cache / logs / vendor`}),(0,n.jsx)(a,{name:`init.php — вход админки`}),(0,n.jsx)(a,{name:`ajax.php — единая точка AJAX`}),(0,n.jsx)(a,{name:`composer.json`})]}),(0,n.jsx)(s,{name:`engine`,defaultOpen:!0,children:(0,n.jsxs)(s,{name:`inc`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`devcraft.php — glue → runAdmin(Admin)`}),(0,n.jsx)(a,{name:`{mod}.php — glue сателлита`})]})}),(0,n.jsx)(s,{name:`templates/{skin}/devcraft/ — публичные .tpl сайта`})]})}),`
`,(0,n.jsx)(t.p,{children:`Кратко:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`devcraft/`})}),` — всё ядро, модули, Composer и конфиги.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`engine/inc/{mod}.php`})}),` — тонкий вход DLE в оболочку.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`templates/{skin}/devcraft/`})}),` — HTML публичного сайта; админский HTML — Twig внутри `,(0,n.jsx)(t.code,{children:`devcraft/src/`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт-для-тех-кто-пользуется-панелью`,children:`Быстрый старт для тех, кто пользуется панелью`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsxs)(l,{children:[(0,n.jsx)(t.h3,{id:`установите-и-включите-плагин`,children:`Установите и включите плагин`}),(0,n.jsxs)(t.p,{children:[`Поставьте пакет DevCraft Admin через менеджер плагинов DLE, включите его. Откройте раздел `,(0,n.jsx)(t.strong,{children:`DevCraft`}),` в админке. Подробности — `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(t.h3,{id:`загляните-на-главную`,children:`Загляните на «Главную»`}),(0,n.jsx)(t.p,{children:`Здесь сводка по оболочке и установленным пакетам. Если чего-то не хватает после обновления — сначала сюда и в логи.`})]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(t.h3,{id:`настройки`,children:`Настройки`}),(0,n.jsxs)(t.p,{children:[`Язык интерфейса, тема Metro, пути (кэш, экспорты плагинов и т.п.). Сохраняйте только после проверки полей — оболочка умеет сохранять корректные значения по вкладкам. См. `,(0,n.jsx)(t.a,{href:`guides/manage`,children:`Управление панелью`}),`.`]})]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(t.h3,{id:`на-что-обратить-внимание`,children:`На что обратить внимание`}),(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Автор / права`}),` — генератор модулей и Composer меняют файлы на диске. Давайте доступ только доверенным группам.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Composer`}),` — удобен, когда на хостинге нет SSH. Нужны права на запись в `,(0,n.jsx)(t.code,{children:`devcraft/vendor`}),` и достаточный лимит времени PHP. Ошибки смотрите в логах DevCraft и в ответе экрана Composer.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Логи`}),` — первое место при «не сохранилось» / «AJAX упал».`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Ресурсы (assets)`}),` — проверка и подтягивание скриптов/стилей с CDN разработчика; не путать с обновлением самого ZIP плагина.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Сателлиты`}),` — ставятся отдельными плагинами с зависимостью от Admin; без включённого Admin их админка не поднимется как задумано.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Отключение Admin`}),` — снимает вставки в файлы ядра DLE из `,(0,n.jsx)(t.code,{children:`install.xml`}),` (например расширения `,(0,n.jsx)(t.code,{children:`[if]`}),`/`,(0,n.jsx)(t.code,{children:`[has]`}),`). Планируйте отключение осознанно.`]}),`
`]})]}),(0,n.jsxs)(l,{children:[(0,n.jsx)(t.h3,{id:`дальше-по-задаче`,children:`Дальше по задаче`}),(0,n.jsxs)(t.p,{children:[`Нужен свой модуль — `,(0,n.jsx)(t.a,{href:`guides/new_module`,children:`генератор`}),` или ручной каркас `,(0,n.jsx)(t.a,{href:`guides/create_module`,children:`создать модуль`}),`. Переезд со старого MH Admin — `,(0,n.jsx)(t.a,{href:`./migration`,children:`миграция`}),`.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`руководства-подробнее`,children:`Руководства (подробнее)`}),`
`,(0,n.jsxs)(t.p,{children:[`Раздел в меню документации называется `,(0,n.jsx)(t.strong,{children:`Руководства`}),`. Ниже — зачем открывать каждое.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Руководство`}),(0,n.jsx)(t.th,{children:`О чём`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/template_conditionals`,children:`Условия в шаблонах DLE`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`[if]`}),` с `,(0,n.jsx)(t.code,{children:`[else]`}),`, блок `,(0,n.jsx)(t.code,{children:`[has]`}),`, когда нужен `,(0,n.jsx)(t.code,{children:`compile(..., true)`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/create_module`,children:`Создать модуль`})}),(0,n.jsxs)(t.td,{children:[`Каркас сателлита: manifest, страницы, AJAX, `,(0,n.jsx)(t.code,{children:`install.xml`}),`, публичный `,(0,n.jsx)(t.code,{children:`Controller/`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/php_devcraft_standards`,children:`PHP DevCraft Standards`})}),(0,n.jsxs)(t.td,{children:[`Язык PHPDoc, `,(0,n.jsx)(t.code,{children:`DLEPlugins::Check()`}),`, куда класть публичный фронт`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/new_module`,children:`Генератор модулей`})}),(0,n.jsx)(t.td,{children:`Тот же каркас, но из экрана админки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/module_identity`,children:`Идентичность модуля`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`mod`}),`, код, имена констант Identity`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/fluent_types`,children:`Fluent Types`})}),(0,n.jsx)(t.td,{children:`Билдеры манифеста / changelog / AJAX-конфига`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/data_loader`,children:`DataLoader`})}),(0,n.jsx)(t.td,{children:`SELECT/INSERT без сырого SQL для простых случаев`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/data_layers`,children:`Слои данных`})}),(0,n.jsx)(t.td,{children:`Когда DataLoader, когда Cycle, когда DcApi`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/form_examples`,children:`Примеры форм`})}),(0,n.jsx)(t.td,{children:`Схемы форм Metro в админке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/crud_pages`,children:`CRUD-страницы`})}),(0,n.jsx)(t.td,{children:`Типовые списки и карточки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/manage`,children:`Управление панелью`})}),(0,n.jsx)(t.td,{children:`Настройки Admin на практике`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/generate_languages`,children:`Языки`})}),(0,n.jsx)(t.td,{children:`Локали и выгрузка строк`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/ai_tools`,children:`Справочник ИИ`})}),(0,n.jsx)(t.td,{children:`Skills, MCP и правила для агентов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/public_assets`,children:`Публичные ресурсы оболочки`})}),(0,n.jsxs)(t.td,{children:[`Теги `,(0,n.jsx)(t.code,{children:`{devcraft*}`}),`, `,(0,n.jsx)(t.code,{children:`siteAssets`}),`, страницы стилей/скриптов/заголовков`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`ZIP, Composer, первый запуск`})}),(0,n.jsx)(r,{title:`Руководства`,href:`./guides`,children:(0,n.jsx)(t.p,{children:`Практические сценарии по модулям и панели`})}),(0,n.jsx)(r,{title:`Справочник API`,href:`./reference`,children:(0,n.jsx)(t.p,{children:`Классы, манифест, точки входа`})}),(0,n.jsx)(r,{title:`Помощь в разработке`,href:`./development_help`,children:(0,n.jsx)(t.p,{children:`Skills, MCP, Cursor-rules для агентов`})}),(0,n.jsx)(r,{title:`Миграция`,href:`./migration`,children:(0,n.jsx)(t.p,{children:`С MH Admin на DevCraft`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что появилось в 200.4.1`})})]}),`
`,(0,n.jsx)(t.h2,{id:`как-устроен-вход-в-админку`,children:`Как устроен вход в админку`}),`
`,(0,n.jsx)(c,{chart:`sequenceDiagram
    participant DLE as Админка DLE
    participant Inc as engine/inc/devcraft.php
    participant Init as devcraft/init.php
    participant App as Application
    participant Router as Router

    DLE->>Inc: mod=devcraft
    Inc->>Init: подключение
    Init->>App: runAdmin(Admin)
    App->>Router: страница из меню`}),`
`,(0,n.jsxs)(t.p,{children:[`AJAX идёт в `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),` → обработчик модуля. Сателлиты — свои `,(0,n.jsx)(t.code,{children:`mod`}),`, тот же каркас. Подробнее: `,(0,n.jsx)(t.a,{href:`reference/back-end/entry_points`,children:`точки входа`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` плагин на сайт.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пройти `,(0,n.jsx)(t.a,{href:`#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82-%D0%B4%D0%BB%D1%8F-%D1%82%D0%B5%D1%85-%D0%BA%D1%82%D0%BE-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D1%83%D0%B5%D1%82%D1%81%D1%8F-%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C%D1%8E`,children:`быстрый старт панели`}),` выше.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`guides/create_module`,children:`Создать модуль`}),` или `,(0,n.jsx)(t.a,{href:`guides/new_module`,children:`генератор`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Правила кода — `,(0,n.jsx)(t.a,{href:`../../../../instructions/constitution`,children:`конституция PHP`}),` и `,(0,n.jsx)(t.a,{href:`guides/php_devcraft_standards`,children:`PHP DevCraft Standards`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`ИИ-агенты — `,(0,n.jsx)(t.a,{href:`development_help`,children:`Помощь в разработке`}),` и `,(0,n.jsx)(t.a,{href:`guides/ai_tools`,children:`Справочник ИИ`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};