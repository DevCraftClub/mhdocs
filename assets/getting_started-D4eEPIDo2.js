import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое DLE API: REST /api/v2, ключи и OAuth, для кого, быстрый старт и карта документации.`,version:`200.1.1`},i=new Date(178938851e4),a=`

## Описание плагина [#описание-плагина]

**DLE API** — HTTP-слой для **DataLife Engine**: внешние приложения, мобильные клиенты, Postman и другие сайты ходят на \`https://ваш-сайт/api/v2/…\` с пропуском Bearer. В админке DevCraft вы заводите ключи, OAuth-клиенты и уровни доступа; сам обмен данными идёт через REST.

Пакет ставится как сателлит к [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started&#x29; (нужна оболочка **≥ 200.4.1**). В каталоге \`api/\` живут Slim, OAuth2 и OpenAPI. Таблицы \`api_*\` создаёт Cycle ORM Admin при первом заходе в модуль.

Версия **200.1.1** — текущая ветка \`200.*\` для DLE 20+. Важно: in-process SDK (\`DcApi\`) с этой версии лежит в **DevCraft Admin** (\`devcraft/src/sdk/dle/\`), а не в ZIP API. HTTP-контракт \`/api/v2\` от этого не меняется; \`DcApi\` можно вызывать из PHP сайта даже без установленного DLE API.

Исходники: [GitHub](https://github.com/DevCraftClub/dle_api).

## Возможности [#возможности]

* REST &#x2A;*\`/api/v2\`**: новости, пользователи, плагины, универсальный CRUD \`/table/{имя}/\`, загрузка файлов, переписки, доп. поля.
* Доступ к ресурсам только с &#x2A;*\`Authorization: Bearer <access_token>\`** (сырой ключ на \`/table\` не принимают).
* Выдача токена: по API-ключу, логину DLE, OAuth-клиенту или классическим \`grant_type\` (код, refresh, client credentials, password).
* **Уровни доступа** и синхронизация с группами DLE; заявки на ключ с публичного профиля.
* Настройки в DevCraft: TTL, HMAC, письма, блок в профиле; флаги \`DEMO_MODE\` / \`DLEAPI_SECURE\` в корневом \`.env\`.
* OpenAPI / Swagger и проверка в Postman; связка с XenForo (DLE как сервер или клиент).
* На том же PHP, что сайт: &#x2A;*\`DcApi\`** из Admin — без HTTP и без Bearer (модули, хуки, сателлиты).

## Для кого [#для-кого]

### Владельцы сайта и админы [#владельцы-сайта-и-админы]

Ставите Admin, затем DLE API, в панели заводите ключи и уровни, при необходимости блок «запросить ключ» в профиле. Следите за \`.env\` (\`DEMO_MODE=false\`, если нужны настоящие токены) и за правами групп. Сами URL \`/api/v2\` «железят» разработчики интеграций.

### Разработчики интеграций (HTTP) [#разработчики-интеграций-http]

Пишете клиент к чужому или своему сайту DLE: получаете Bearer, вызываете sugar-эндпоинты (\`POST /post/\`) или \`/table/…\`. Смотрите [авторизацию](guides/auth), [эндпоинты](guides/endpoints) и [OpenAPI](reference/openapi).

### Разработчики модулей на этом сайте (SDK) [#разработчики-модулей-на-этом-сайте-sdk]

Нужны новости/пользователи из PHP без HTTP — берите [SDK / \`DcApi\`](guides/sdk) из Admin. DLE API как плагин для этого не обязателен; он нужен, когда снаружи должен быть именно REST.

**Почему не «свой» ajax и не API v1.** Один стабильный \`/api/v2\` с OAuth и уровнями проще сопровождать, чем набор скриптов с разными ключами. v1 снят; переезд: [миграция v1 → v2](guides/migrate-v1-v2).

## Требования [#требования]

| Что             | Минимум                                |
| --------------- | -------------------------------------- |
| DataLife Engine | **20.0+**                              |
| PHP             | **8.3+**                               |
| DevCraft Admin  | **≥ 200.4.1**                          |
| MySQL / MariaDB | InnoDB (внешние ключи)                 |
| Composer        | в каталоге \`api/\` (\`composer install\`) |

Полный чеклист: [Установка](./install).

## Дерево структуры [#дерево-структуры]

Корень сайта DLE после установки пакета. В скобках — зачем папка. SDK (\`DcApi\`) лежит в Admin, не в ZIP API.

<Files>
  <Folder name="корень сайта DLE">
    <Folder name="api — HTTP /api/v2">
      <File name="composer.json — Slim, OAuth2, OpenAPI" />

      <File name=".htaccess — Apache: /api → /api/v2" />

      <Folder name="v2">
        <File name="index.php — точка входа REST" />

        <File name="routes.php — маршруты v2" />
      </Folder>

      <Folder name="src">
        <Folder name="Http/V2 — контроллеры, OAuth, /table, upload" />

        <Folder name="OpenApi — аннотации спецификации" />
      </Folder>

      <Folder name="vendor — зависимости Composer" />

      <Folder name="var/logs — логи runtime" />
    </Folder>

    <Folder name="devcraft">
      <Folder name="src">
        <Folder name="sdk/dle — DcApi, Schema, Fluent (из DevCraft Admin)" />

        <Folder name="modules/DleApi — сателлит админки">
          <File name="manifest.php — меню, версия, AJAX" />

          <File name="settings.schema.php — форма настроек" />

          <Folder name="Pages — ключи, OAuth, уровни, заявки…" />

          <Folder name="Ajax — обработчики панели" />

          <Folder name="Services / Models / Repositories" />

          <Folder name="templates — Twig экранов модуля" />

          <Folder name="Public — иконка / ресурсы админки" />
        </Folder>
      </Folder>

      <Folder name="locales — dleapi.xliff (ru, en, …)" />

      <Folder name="config — dleapi.json после сохранения настроек" />
    </Folder>

    <Folder name="engine">
      <Folder name="inc">
        <File name="dleapi.php — glue → админка модуля" />
      </Folder>

      <Folder name="modules/devcraft">
        <File name="dleapi_profile.php — блок «запросить ключ» в профиле" />
      </Folder>
    </Folder>

    <Folder name="templates/{skin}/devcraft/dleapi — profile.tpl, JS/CSS" />

    <File name=".env — DEMO_MODE, DLEAPI_SECURE (корень сайта)" />
  </Folder>
</Files>

Кратко:

* **\`api/\`** — публичный REST и Composer HTTP-слоя.
* **\`devcraft/src/modules/DleApi/\`** — экраны ключей и OAuth в админке.
* **\`devcraft/src/sdk/dle/\`** — \`DcApi\` (поставляется Admin, не пакетом API).
* **\`engine/inc/dleapi.php\`** + шаблоны профиля — вход DLE и публичный блок заявки.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Поставьте Admin и DLE API [#поставьте-admin-и-dle-api]

    Сначала [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install), затем этот плагин. В \`api/\` выполните \`composer install\`. Откройте модуль **DLE API** в админке — создадутся таблицы \`api_*\`. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Проверьте \`.env\` [#проверьте-env]

    В корне сайта для рабочих токенов: \`DEMO_MODE=false\`. Иначе \`access_token\` будет \`null\`. См. [Инструкция .env](guides/env).
  </Step>

  <Step>
    ### Ключ и токен [#ключ-и-токен]

    В DevCraft создайте API-ключ (и при необходимости [OAuth-клиент](guides/oauth-client)). Обменяйте credentials на Bearer — [Авторизация](guides/auth).
  </Step>

  <Step>
    ### Первый запрос [#первый-запрос]

    Например \`GET /api/v2/me\` или список через \`/table/…\`. Как думать про адреса: [Эндпоинты](guides/endpoints). Сценарии: [создание новости](guides/posts-create), [пользователь](guides/users-create).
  </Step>
</Steps>

## Руководства (подробнее) [#руководства-подробнее]

| Руководство                                                                | О чём                                 |
| -------------------------------------------------------------------------- | ------------------------------------- |
| [Авторизация](guides/auth)                                                 | Bearer, \`/me\`, обмен ключа на токен   |
| [OAuth-клиенты](guides/oauth-client) / [OAuth-сервер](guides/oauth-server) | Приложения и grant’ы                  |
| [Эндпоинты](guides/endpoints)                                              | Sugar vs \`/table/\`, ответы и ошибки   |
| [Инструкция .env](guides/env)                                              | \`DEMO_MODE\`, \`DLEAPI_SECURE\`          |
| [Новости / пользователи / плагины](guides/posts-create)                    | Практические HTTP-сценарии            |
| [SDK](guides/sdk)                                                          | \`DcApi\` в процессе PHP (Admin)        |
| [Настройки / уровни / шаблоны](guides/settings)                            | Панель и публичный профиль            |
| [Безопасность](guides/security)                                            | Что закрыто и как не прострелить ногу |
| [Postman](guides/postman) / [XenForo](guides/xenforo)                      | Проверки и соседние CMS               |
| [Миграция v1 → v2](guides/migrate-v1-v2)                                   | Если ещё тянется старый клиент        |

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="./install">
    Admin, Composer в api/, таблицы, nginx
  </Card>

  <Card title="Руководства" href="./guides">
    Auth, CRUD, настройки, SDK
  </Card>

  <Card title="HTTP /api/v2" href="./reference/http">
    Сводка путей и фильтров
  </Card>

  <Card title="SDK (DcApi)" href="./reference/sdk">
    Фасады in-process API
  </Card>

  <Card title="OpenAPI" href="./reference/openapi">
    Спецификация для клиентов
  </Card>

  <Card title="История изменений" href="./changelog">
    Что изменилось в 200.1.1
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) плагин и зависимости \`api/\`.
2. Пройти [быстрый старт](#быстрый-старт) выше.
3. Для внешнего клиента — [auth](guides/auth) → [endpoints](guides/endpoints); для кода на сайте — [SDK](guides/sdk).
`,o={contents:[{heading:`описание-плагина`,content:"**DLE API** — HTTP-слой для **DataLife Engine**: внешние приложения, мобильные клиенты, Postman и другие сайты ходят на `https://ваш-сайт/api/v2/…` с пропуском Bearer. В админке DevCraft вы заводите ключи, OAuth-клиенты и уровни доступа; сам обмен данными идёт через REST."},{heading:`описание-плагина`,content:"Пакет ставится как сателлит к DevCraft Admi&#x6E; (нужна оболочка **≥ 200.4.1**). В каталоге `api/` живут Slim, OAuth2 и OpenAPI. Таблицы `api_*` создаёт Cycle ORM Admin при первом заходе в модуль."},{heading:`описание-плагина`,content:"Версия **200.1.1** — текущая ветка `200.*` для DLE 20+. Важно: in-process SDK (`DcApi`) с этой версии лежит в **DevCraft Admin** (`devcraft/src/sdk/dle/`), а не в ZIP API. HTTP-контракт `/api/v2` от этого не меняется; `DcApi` можно вызывать из PHP сайта даже без установленного DLE API."},{heading:`описание-плагина`,content:`Исходники: GitHub.`},{heading:`возможности`,content:"REST &#x2A;*`/api/v2`**: новости, пользователи, плагины, универсальный CRUD `/table/{имя}/`, загрузка файлов, переписки, доп. поля."},{heading:`возможности`,content:"Доступ к ресурсам только с &#x2A;*`Authorization: Bearer <access_token>`** (сырой ключ на `/table` не принимают)."},{heading:`возможности`,content:"Выдача токена: по API-ключу, логину DLE, OAuth-клиенту или классическим `grant_type` (код, refresh, client credentials, password)."},{heading:`возможности`,content:`**Уровни доступа** и синхронизация с группами DLE; заявки на ключ с публичного профиля.`},{heading:`возможности`,content:"Настройки в DevCraft: TTL, HMAC, письма, блок в профиле; флаги `DEMO_MODE` / `DLEAPI_SECURE` в корневом `.env`."},{heading:`возможности`,content:`OpenAPI / Swagger и проверка в Postman; связка с XenForo (DLE как сервер или клиент).`},{heading:`возможности`,content:"На том же PHP, что сайт: &#x2A;*`DcApi`** из Admin — без HTTP и без Bearer (модули, хуки, сателлиты)."},{heading:`владельцы-сайта-и-админы`,content:"Ставите Admin, затем DLE API, в панели заводите ключи и уровни, при необходимости блок «запросить ключ» в профиле. Следите за `.env` (`DEMO_MODE=false`, если нужны настоящие токены) и за правами групп. Сами URL `/api/v2` «железят» разработчики интеграций."},{heading:`разработчики-интеграций-http`,content:"Пишете клиент к чужому или своему сайту DLE: получаете Bearer, вызываете sugar-эндпоинты (`POST /post/`) или `/table/…`. Смотрите авторизацию, эндпоинты и OpenAPI."},{heading:`разработчики-модулей-на-этом-сайте-sdk`,content:"Нужны новости/пользователи из PHP без HTTP — берите SDK / `DcApi` из Admin. DLE API как плагин для этого не обязателен; он нужен, когда снаружи должен быть именно REST."},{heading:`разработчики-модулей-на-этом-сайте-sdk`,content:"**Почему не «свой» ajax и не API v1.** Один стабильный `/api/v2` с OAuth и уровнями проще сопровождать, чем набор скриптов с разными ключами. v1 снят; переезд: миграция v1 → v2."},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`требования`,content:`MySQL / MariaDB`},{heading:`требования`,content:`InnoDB (внешние ключи)`},{heading:`требования`,content:`Composer`},{heading:`требования`,content:"в каталоге `api/` (`composer install`)"},{heading:`требования`,content:`Полный чеклист: Установка.`},{heading:`дерево-структуры`,content:"Корень сайта DLE после установки пакета. В скобках — зачем папка. SDK (`DcApi`) лежит в Admin, не в ZIP API."},{heading:`дерево-структуры`,content:`<File name="composer.json — Slim, OAuth2, OpenAPI" />`},{heading:`дерево-структуры`,content:`<File name=".htaccess — Apache: /api → /api/v2" />`},{heading:`дерево-структуры`,content:`<File name="index.php — точка входа REST" />`},{heading:`дерево-структуры`,content:`<File name="routes.php — маршруты v2" />`},{heading:`дерево-структуры`,content:`<File name="manifest.php — меню, версия, AJAX" />`},{heading:`дерево-структуры`,content:`<File name="settings.schema.php — форма настроек" />`},{heading:`дерево-структуры`,content:`<File name="dleapi.php — glue → админка модуля" />`},{heading:`дерево-структуры`,content:`<File name="dleapi_profile.php — блок «запросить ключ» в профиле" />`},{heading:`дерево-структуры`,content:`<File name=".env — DEMO_MODE, DLEAPI_SECURE (корень сайта)" />`},{heading:`дерево-структуры`,content:`Кратко:`},{heading:`дерево-структуры`,content:"**`api/`** — публичный REST и Composer HTTP-слоя."},{heading:`дерево-структуры`,content:"**`devcraft/src/modules/DleApi/`** — экраны ключей и OAuth в админке."},{heading:`дерево-структуры`,content:"**`devcraft/src/sdk/dle/`** — `DcApi` (поставляется Admin, не пакетом API)."},{heading:`дерево-структуры`,content:"**`engine/inc/dleapi.php`** + шаблоны профиля — вход DLE и публичный блок заявки."},{heading:`поставьте-admin-и-dle-api`,content:"Сначала DevCraft Admin, затем этот плагин. В `api/` выполните `composer install`. Откройте модуль **DLE API** в админке — создадутся таблицы `api_*`. Подробности: Установка."},{heading:`проверьте-env`,content:"В корне сайта для рабочих токенов: `DEMO_MODE=false`. Иначе `access_token` будет `null`. См. Инструкция .env."},{heading:`ключ-и-токен`,content:`В DevCraft создайте API-ключ (и при необходимости OAuth-клиент). Обменяйте credentials на Bearer — Авторизация.`},{heading:`первый-запрос`,content:"Например `GET /api/v2/me` или список через `/table/…`. Как думать про адреса: Эндпоинты. Сценарии: создание новости, пользователь."},{heading:`руководства-подробнее`,content:`Руководство`},{heading:`руководства-подробнее`,content:`О чём`},{heading:`руководства-подробнее`,content:`Авторизация`},{heading:`руководства-подробнее`,content:"Bearer, `/me`, обмен ключа на токен"},{heading:`руководства-подробнее`,content:`OAuth-клиенты / OAuth-сервер`},{heading:`руководства-подробнее`,content:`Приложения и grant’ы`},{heading:`руководства-подробнее`,content:`Эндпоинты`},{heading:`руководства-подробнее`,content:"Sugar vs `/table/`, ответы и ошибки"},{heading:`руководства-подробнее`,content:`Инструкция .env`},{heading:`руководства-подробнее`,content:"`DEMO_MODE`, `DLEAPI_SECURE`"},{heading:`руководства-подробнее`,content:`Новости / пользователи / плагины`},{heading:`руководства-подробнее`,content:`Практические HTTP-сценарии`},{heading:`руководства-подробнее`,content:`SDK`},{heading:`руководства-подробнее`,content:"`DcApi` в процессе PHP (Admin)"},{heading:`руководства-подробнее`,content:`Настройки / уровни / шаблоны`},{heading:`руководства-подробнее`,content:`Панель и публичный профиль`},{heading:`руководства-подробнее`,content:`Безопасность`},{heading:`руководства-подробнее`,content:`Что закрыто и как не прострелить ногу`},{heading:`руководства-подробнее`,content:`Postman / XenForo`},{heading:`руководства-подробнее`,content:`Проверки и соседние CMS`},{heading:`руководства-подробнее`,content:`Миграция v1 → v2`},{heading:`руководства-подробнее`,content:`Если ещё тянется старый клиент`},{heading:`разделы-документации`,content:`Admin, Composer в api/, таблицы, nginx`},{heading:`разделы-документации`,content:`Auth, CRUD, настройки, SDK`},{heading:`разделы-документации`,content:`Сводка путей и фильтров`},{heading:`разделы-документации`,content:`Фасады in-process API`},{heading:`разделы-документации`,content:`Спецификация для клиентов`},{heading:`разделы-документации`,content:`Что изменилось в 200.1.1`},{heading:`дальше`,content:"Установить плагин и зависимости `api/`."},{heading:`дальше`,content:`Пройти быстрый старт выше.`},{heading:`дальше`,content:`Для внешнего клиента — auth → endpoints; для кода на сайте — SDK.`}],headings:[{id:`описание-плагина`,content:`Описание плагина`},{id:`возможности`,content:`Возможности`},{id:`для-кого`,content:`Для кого`},{id:`владельцы-сайта-и-админы`,content:`Владельцы сайта и админы`},{id:`разработчики-интеграций-http`,content:`Разработчики интеграций (HTTP)`},{id:`разработчики-модулей-на-этом-сайте-sdk`,content:`Разработчики модулей на этом сайте (SDK)`},{id:`требования`,content:`Требования`},{id:`дерево-структуры`,content:`Дерево структуры`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`поставьте-admin-и-dle-api`,content:`Поставьте Admin и DLE API`},{id:`проверьте-env`,content:"Проверьте `.env`"},{id:`ключ-и-токен`,content:`Ключ и токен`},{id:`первый-запрос`,content:`Первый запрос`},{id:`руководства-подробнее`,content:`Руководства (подробнее)`},{id:`разделы-документации`,content:`Разделы документации`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#описание-плагина`,title:(0,n.jsx)(n.Fragment,{children:`Описание плагина`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:3,url:`#владельцы-сайта-и-админы`,title:(0,n.jsx)(n.Fragment,{children:`Владельцы сайта и админы`})},{depth:3,url:`#разработчики-интеграций-http`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики интеграций (HTTP)`})},{depth:3,url:`#разработчики-модулей-на-этом-сайте-sdk`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики модулей на этом сайте (SDK)`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дерево-структуры`,title:(0,n.jsx)(n.Fragment,{children:`Дерево структуры`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#поставьте-admin-и-dle-api`,title:(0,n.jsx)(n.Fragment,{children:`Поставьте Admin и DLE API`})},{depth:3,url:`#проверьте-env`,title:(0,n.jsxs)(n.Fragment,{children:[`Проверьте `,(0,n.jsx)(`code`,{children:`.env`})]})},{depth:3,url:`#ключ-и-токен`,title:(0,n.jsx)(n.Fragment,{children:`Ключ и токен`})},{depth:3,url:`#первый-запрос`,title:(0,n.jsx)(n.Fragment,{children:`Первый запрос`})},{depth:2,url:`#руководства-подробнее`,title:(0,n.jsx)(n.Fragment,{children:`Руководства (подробнее)`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Step:c,Steps:l}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Step`,!0),l||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`описание-плагина`,children:`Описание плагина`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE API`}),` — HTTP-слой для `,(0,n.jsx)(t.strong,{children:`DataLife Engine`}),`: внешние приложения, мобильные клиенты, Postman и другие сайты ходят на `,(0,n.jsx)(t.code,{children:`https://ваш-сайт/api/v2/…`}),` с пропуском Bearer. В админке DevCraft вы заводите ключи, OAuth-клиенты и уровни доступа; сам обмен данными идёт через REST.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пакет ставится как сателлит к `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`}),` (нужна оболочка `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`). В каталоге `,(0,n.jsx)(t.code,{children:`api/`}),` живут Slim, OAuth2 и OpenAPI. Таблицы `,(0,n.jsx)(t.code,{children:`api_*`}),` создаёт Cycle ORM Admin при первом заходе в модуль.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Версия `,(0,n.jsx)(t.strong,{children:`200.1.1`}),` — текущая ветка `,(0,n.jsx)(t.code,{children:`200.*`}),` для DLE 20+. Важно: in-process SDK (`,(0,n.jsx)(t.code,{children:`DcApi`}),`) с этой версии лежит в `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` (`,(0,n.jsx)(t.code,{children:`devcraft/src/sdk/dle/`}),`), а не в ZIP API. HTTP-контракт `,(0,n.jsx)(t.code,{children:`/api/v2`}),` от этого не меняется; `,(0,n.jsx)(t.code,{children:`DcApi`}),` можно вызывать из PHP сайта даже без установленного DLE API.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Исходники: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/dle_api`,children:`GitHub`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`REST `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`/api/v2`})}),`: новости, пользователи, плагины, универсальный CRUD `,(0,n.jsx)(t.code,{children:`/table/{имя}/`}),`, загрузка файлов, переписки, доп. поля.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Доступ к ресурсам только с `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`Authorization: Bearer <access_token>`})}),` (сырой ключ на `,(0,n.jsx)(t.code,{children:`/table`}),` не принимают).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Выдача токена: по API-ключу, логину DLE, OAuth-клиенту или классическим `,(0,n.jsx)(t.code,{children:`grant_type`}),` (код, refresh, client credentials, password).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Уровни доступа`}),` и синхронизация с группами DLE; заявки на ключ с публичного профиля.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настройки в DevCraft: TTL, HMAC, письма, блок в профиле; флаги `,(0,n.jsx)(t.code,{children:`DEMO_MODE`}),` / `,(0,n.jsx)(t.code,{children:`DLEAPI_SECURE`}),` в корневом `,(0,n.jsx)(t.code,{children:`.env`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`OpenAPI / Swagger и проверка в Postman; связка с XenForo (DLE как сервер или клиент).`}),`
`,(0,n.jsxs)(t.li,{children:[`На том же PHP, что сайт: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`DcApi`})}),` из Admin — без HTTP и без Bearer (модули, хуки, сателлиты).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsx)(t.h3,{id:`владельцы-сайта-и-админы`,children:`Владельцы сайта и админы`}),`
`,(0,n.jsxs)(t.p,{children:[`Ставите Admin, затем DLE API, в панели заводите ключи и уровни, при необходимости блок «запросить ключ» в профиле. Следите за `,(0,n.jsx)(t.code,{children:`.env`}),` (`,(0,n.jsx)(t.code,{children:`DEMO_MODE=false`}),`, если нужны настоящие токены) и за правами групп. Сами URL `,(0,n.jsx)(t.code,{children:`/api/v2`}),` «железят» разработчики интеграций.`]}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-интеграций-http`,children:`Разработчики интеграций (HTTP)`}),`
`,(0,n.jsxs)(t.p,{children:[`Пишете клиент к чужому или своему сайту DLE: получаете Bearer, вызываете sugar-эндпоинты (`,(0,n.jsx)(t.code,{children:`POST /post/`}),`) или `,(0,n.jsx)(t.code,{children:`/table/…`}),`. Смотрите `,(0,n.jsx)(t.a,{href:`guides/auth`,children:`авторизацию`}),`, `,(0,n.jsx)(t.a,{href:`guides/endpoints`,children:`эндпоинты`}),` и `,(0,n.jsx)(t.a,{href:`reference/openapi`,children:`OpenAPI`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-модулей-на-этом-сайте-sdk`,children:`Разработчики модулей на этом сайте (SDK)`}),`
`,(0,n.jsxs)(t.p,{children:[`Нужны новости/пользователи из PHP без HTTP — берите `,(0,n.jsxs)(t.a,{href:`guides/sdk`,children:[`SDK / `,(0,n.jsx)(t.code,{children:`DcApi`})]}),` из Admin. DLE API как плагин для этого не обязателен; он нужен, когда снаружи должен быть именно REST.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Почему не «свой» ajax и не API v1.`}),` Один стабильный `,(0,n.jsx)(t.code,{children:`/api/v2`}),` с OAuth и уровнями проще сопровождать, чем набор скриптов с разными ключами. v1 снят; переезд: `,(0,n.jsx)(t.a,{href:`guides/migrate-v1-v2`,children:`миграция v1 → v2`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MySQL / MariaDB`}),(0,n.jsx)(t.td,{children:`InnoDB (внешние ключи)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsxs)(t.td,{children:[`в каталоге `,(0,n.jsx)(t.code,{children:`api/`}),` (`,(0,n.jsx)(t.code,{children:`composer install`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный чеклист: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дерево-структуры`,children:`Дерево структуры`}),`
`,(0,n.jsxs)(t.p,{children:[`Корень сайта DLE после установки пакета. В скобках — зачем папка. SDK (`,(0,n.jsx)(t.code,{children:`DcApi`}),`) лежит в Admin, не в ZIP API.`]}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`корень сайта DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`api — HTTP /api/v2`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`composer.json — Slim, OAuth2, OpenAPI`}),(0,n.jsx)(a,{name:`.htaccess — Apache: /api → /api/v2`}),(0,n.jsxs)(s,{name:`v2`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`index.php — точка входа REST`}),(0,n.jsx)(a,{name:`routes.php — маршруты v2`})]}),(0,n.jsxs)(s,{name:`src`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`Http/V2 — контроллеры, OAuth, /table, upload`}),(0,n.jsx)(s,{name:`OpenApi — аннотации спецификации`})]}),(0,n.jsx)(s,{name:`vendor — зависимости Composer`}),(0,n.jsx)(s,{name:`var/logs — логи runtime`})]}),(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`sdk/dle — DcApi, Schema, Fluent (из DevCraft Admin)`}),(0,n.jsxs)(s,{name:`modules/DleApi — сателлит админки`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php — меню, версия, AJAX`}),(0,n.jsx)(a,{name:`settings.schema.php — форма настроек`}),(0,n.jsx)(s,{name:`Pages — ключи, OAuth, уровни, заявки…`}),(0,n.jsx)(s,{name:`Ajax — обработчики панели`}),(0,n.jsx)(s,{name:`Services / Models / Repositories`}),(0,n.jsx)(s,{name:`templates — Twig экранов модуля`}),(0,n.jsx)(s,{name:`Public — иконка / ресурсы админки`})]})]}),(0,n.jsx)(s,{name:`locales — dleapi.xliff (ru, en, …)`}),(0,n.jsx)(s,{name:`config — dleapi.json после сохранения настроек`})]}),(0,n.jsxs)(s,{name:`engine`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`inc`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`dleapi.php — glue → админка модуля`})}),(0,n.jsx)(s,{name:`modules/devcraft`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`dleapi_profile.php — блок «запросить ключ» в профиле`})})]}),(0,n.jsx)(s,{name:`templates/{skin}/devcraft/dleapi — profile.tpl, JS/CSS`}),(0,n.jsx)(a,{name:`.env — DEMO_MODE, DLEAPI_SECURE (корень сайта)`})]})}),`
`,(0,n.jsx)(t.p,{children:`Кратко:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`api/`})}),` — публичный REST и Composer HTTP-слоя.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/DleApi/`})}),` — экраны ключей и OAuth в админке.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`devcraft/src/sdk/dle/`})}),` — `,(0,n.jsx)(t.code,{children:`DcApi`}),` (поставляется Admin, не пакетом API).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`engine/inc/dleapi.php`})}),` + шаблоны профиля — вход DLE и публичный блок заявки.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`поставьте-admin-и-dle-api`,children:`Поставьте Admin и DLE API`}),(0,n.jsxs)(t.p,{children:[`Сначала `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),`, затем этот плагин. В `,(0,n.jsx)(t.code,{children:`api/`}),` выполните `,(0,n.jsx)(t.code,{children:`composer install`}),`. Откройте модуль `,(0,n.jsx)(t.strong,{children:`DLE API`}),` в админке — создадутся таблицы `,(0,n.jsx)(t.code,{children:`api_*`}),`. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsxs)(t.h3,{id:`проверьте-env`,children:[`Проверьте `,(0,n.jsx)(t.code,{children:`.env`})]}),(0,n.jsxs)(t.p,{children:[`В корне сайта для рабочих токенов: `,(0,n.jsx)(t.code,{children:`DEMO_MODE=false`}),`. Иначе `,(0,n.jsx)(t.code,{children:`access_token`}),` будет `,(0,n.jsx)(t.code,{children:`null`}),`. См. `,(0,n.jsx)(t.a,{href:`guides/env`,children:`Инструкция .env`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`ключ-и-токен`,children:`Ключ и токен`}),(0,n.jsxs)(t.p,{children:[`В DevCraft создайте API-ключ (и при необходимости `,(0,n.jsx)(t.a,{href:`guides/oauth-client`,children:`OAuth-клиент`}),`). Обменяйте credentials на Bearer — `,(0,n.jsx)(t.a,{href:`guides/auth`,children:`Авторизация`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`первый-запрос`,children:`Первый запрос`}),(0,n.jsxs)(t.p,{children:[`Например `,(0,n.jsx)(t.code,{children:`GET /api/v2/me`}),` или список через `,(0,n.jsx)(t.code,{children:`/table/…`}),`. Как думать про адреса: `,(0,n.jsx)(t.a,{href:`guides/endpoints`,children:`Эндпоинты`}),`. Сценарии: `,(0,n.jsx)(t.a,{href:`guides/posts-create`,children:`создание новости`}),`, `,(0,n.jsx)(t.a,{href:`guides/users-create`,children:`пользователь`}),`.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`руководства-подробнее`,children:`Руководства (подробнее)`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Руководство`}),(0,n.jsx)(t.th,{children:`О чём`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/auth`,children:`Авторизация`})}),(0,n.jsxs)(t.td,{children:[`Bearer, `,(0,n.jsx)(t.code,{children:`/me`}),`, обмен ключа на токен`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`guides/oauth-client`,children:`OAuth-клиенты`}),` / `,(0,n.jsx)(t.a,{href:`guides/oauth-server`,children:`OAuth-сервер`})]}),(0,n.jsx)(t.td,{children:`Приложения и grant’ы`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/endpoints`,children:`Эндпоинты`})}),(0,n.jsxs)(t.td,{children:[`Sugar vs `,(0,n.jsx)(t.code,{children:`/table/`}),`, ответы и ошибки`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/env`,children:`Инструкция .env`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DEMO_MODE`}),`, `,(0,n.jsx)(t.code,{children:`DLEAPI_SECURE`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/posts-create`,children:`Новости / пользователи / плагины`})}),(0,n.jsx)(t.td,{children:`Практические HTTP-сценарии`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/sdk`,children:`SDK`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DcApi`}),` в процессе PHP (Admin)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/settings`,children:`Настройки / уровни / шаблоны`})}),(0,n.jsx)(t.td,{children:`Панель и публичный профиль`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/security`,children:`Безопасность`})}),(0,n.jsx)(t.td,{children:`Что закрыто и как не прострелить ногу`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`guides/postman`,children:`Postman`}),` / `,(0,n.jsx)(t.a,{href:`guides/xenforo`,children:`XenForo`})]}),(0,n.jsx)(t.td,{children:`Проверки и соседние CMS`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/migrate-v1-v2`,children:`Миграция v1 → v2`})}),(0,n.jsx)(t.td,{children:`Если ещё тянется старый клиент`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Admin, Composer в api/, таблицы, nginx`})}),(0,n.jsx)(r,{title:`Руководства`,href:`./guides`,children:(0,n.jsx)(t.p,{children:`Auth, CRUD, настройки, SDK`})}),(0,n.jsx)(r,{title:`HTTP /api/v2`,href:`./reference/http`,children:(0,n.jsx)(t.p,{children:`Сводка путей и фильтров`})}),(0,n.jsx)(r,{title:`SDK (DcApi)`,href:`./reference/sdk`,children:(0,n.jsx)(t.p,{children:`Фасады in-process API`})}),(0,n.jsx)(r,{title:`OpenAPI`,href:`./reference/openapi`,children:(0,n.jsx)(t.p,{children:`Спецификация для клиентов`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что изменилось в 200.1.1`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` плагин и зависимости `,(0,n.jsx)(t.code,{children:`api/`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пройти `,(0,n.jsx)(t.a,{href:`#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82`,children:`быстрый старт`}),` выше.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Для внешнего клиента — `,(0,n.jsx)(t.a,{href:`guides/auth`,children:`auth`}),` → `,(0,n.jsx)(t.a,{href:`guides/endpoints`,children:`endpoints`}),`; для кода на сайте — `,(0,n.jsx)(t.a,{href:`guides/sdk`,children:`SDK`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};