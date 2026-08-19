import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`WebShare Proxy PHP Wrapper: обзор, конфигурация и первые запросы.`,version:`1.0.0`},i=new Date(1787141927e3),a=`

PHP-библиотека для [WebShare Proxy API](https://apidocs.webshare.io): типизированные запросы, фильтры, итерация страниц, кэш GET-ответов и повтор при \`429\` / \`5xx\`.

Пакет: \`devcraftclub/webshare-io-api-wrapper\`.

## Возможности [#возможности]

* PHP &#x2A;*8.3+**, строгая типизация
* Фасад \`App\` или явная работа через \`Client\` / Request-классы
* \`QueryBuilder\` с операторами \`EQUAL\`, \`IN\`, \`GT\`, \`LT\`, \`CONTAINS\`
* \`PageIterator\` / \`iterate()\` с лимитом страниц
* Кэш успешных GET и инвалидация по тегам
* \`X-Subuser\` через \`masqueradeAs()\`

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="/dev/api_wrappers/webshare-proxy/1.0.0/install">
    Composer и конфигурация API\\_KEY
  </Card>

  <Card title="Прокси" href="/dev/api_wrappers/webshare-proxy/1.0.0/guides/proxies">
    List, iterate, download, connection strings
  </Card>

  <Card title="Auth и токены" href="/dev/api_wrappers/webshare-proxy/1.0.0/guides/auth_and_tokens">
    Profile, IP auth, ApiKey, DownloadToken
  </Card>

  <Card title="SubUser" href="/dev/api_wrappers/webshare-proxy/1.0.0/guides/subusers">
    CRUD и masqueradeAs
  </Card>

  <Card title="Stats и config" href="/dev/api_wrappers/webshare-proxy/1.0.0/guides/stats_and_config">
    ProxyStats, ProxyConfig, кэш, ошибки
  </Card>

  <Card title="Справочник" href="/dev/api_wrappers/webshare-proxy/1.0.0/reference">
    Все классы пакета
  </Card>

  <Card title="English" href="/dev/api_wrappers/webshare-proxy/1.0.0/en/getting_started">
    Full English documentation
  </Card>
</Cards>

## Быстрый пример [#быстрый-пример]

\`\`\`php
<?php

require_once 'vendor/autoload.php';

use Devcraft\\Webshare\\Classes\\App;
use Devcraft\\Webshare\\Enums\\FilterOperator;

App::init();

/** @var \\Devcraft\\Webshare\\Requests\\ProxyRequest $proxies */
$proxies = App::Requests('Proxy');
$proxies->query()
    ->withFilter('mode', 'direct')
    ->withPageSize(25)
    ->withFilter('country_code', ['US', 'DE'], FilterOperator::IN);

$list = $proxies->getList();

foreach ($proxies->iterate() as $proxy) {
    echo $proxy->getConnectionString(backbone: true), "\\n";
}
\`\`\`

## Поверхность Requests [#поверхность-requests]

| App::Requests key  | Coverage                                     |
| ------------------ | -------------------------------------------- |
| \`Proxy\`            | list, iterate, download, refresh             |
| \`Profile\`          | profile + preferences                        |
| \`Notification\`     | list/retrieve/dismiss/restore                |
| \`ProxyReplacement\` | list/retrieve/create (v3)                    |
| \`ReplacedProxy\`    | list/download                                |
| \`ProxyConfig\`      | config/status/listStats/update (v3)          |
| \`IpAuthorization\`  | list/iterate/CRUD + whatsMyIp                |
| \`ProxyStats\`       | list/aggregate/activities/download           |
| \`DownloadToken\`    | get/reset token by scope                     |
| \`ApiKey\`           | list/iterate/CRUD                            |
| \`SubUser\`          | list/iterate/CRUD/refresh + \`masqueradeAs()\` |

## Глоссарий [#глоссарий]

| Термин                                | Значение                                 |
| ------------------------------------- | ---------------------------------------- |
| Proxy                                 | Один endpoint из списка прокси           |
| ProxyList                             | Пагинированная коллекция Proxy           |
| ProxyConfig                           | Plan-level конфигурация прокси           |
| IpAuthorization                       | Allowlisted source IP                    |
| SubUser                               | Дочерний аккаунт под родительским планом |
| X-Subuser                             | Заголовок маскировки под SubUser         |
| DownloadToken                         | Временный ключ скачивания                |
| PageIterator                          | Обход страниц до \`next == null\`          |
| BackboneConnection / DirectConnection | Режимы \`getConnectionString()\`           |
`,o={contents:[{heading:void 0,content:"PHP-библиотека для WebShare Proxy API: типизированные запросы, фильтры, итерация страниц, кэш GET-ответов и повтор при `429` / `5xx`."},{heading:void 0,content:"Пакет: `devcraftclub/webshare-io-api-wrapper`."},{heading:`возможности`,content:`PHP &#x2A;*8.3+**, строгая типизация`},{heading:`возможности`,content:"Фасад `App` или явная работа через `Client` / Request-классы"},{heading:`возможности`,content:"`QueryBuilder` с операторами `EQUAL`, `IN`, `GT`, `LT`, `CONTAINS`"},{heading:`возможности`,content:"`PageIterator` / `iterate()` с лимитом страниц"},{heading:`возможности`,content:`Кэш успешных GET и инвалидация по тегам`},{heading:`возможности`,content:"`X-Subuser` через `masqueradeAs()`"},{heading:`разделы-документации`,content:`Composer и конфигурация API\\_KEY`},{heading:`разделы-документации`,content:`List, iterate, download, connection strings`},{heading:`разделы-документации`,content:`Profile, IP auth, ApiKey, DownloadToken`},{heading:`разделы-документации`,content:`CRUD и masqueradeAs`},{heading:`разделы-документации`,content:`ProxyStats, ProxyConfig, кэш, ошибки`},{heading:`разделы-документации`,content:`Все классы пакета`},{heading:`разделы-документации`,content:`Full English documentation`},{heading:`поверхность-requests`,content:`App::Requests key`},{heading:`поверхность-requests`,content:`Coverage`},{heading:`поверхность-requests`,content:"`Proxy`"},{heading:`поверхность-requests`,content:`list, iterate, download, refresh`},{heading:`поверхность-requests`,content:"`Profile`"},{heading:`поверхность-requests`,content:`profile + preferences`},{heading:`поверхность-requests`,content:"`Notification`"},{heading:`поверхность-requests`,content:`list/retrieve/dismiss/restore`},{heading:`поверхность-requests`,content:"`ProxyReplacement`"},{heading:`поверхность-requests`,content:`list/retrieve/create (v3)`},{heading:`поверхность-requests`,content:"`ReplacedProxy`"},{heading:`поверхность-requests`,content:`list/download`},{heading:`поверхность-requests`,content:"`ProxyConfig`"},{heading:`поверхность-requests`,content:`config/status/listStats/update (v3)`},{heading:`поверхность-requests`,content:"`IpAuthorization`"},{heading:`поверхность-requests`,content:`list/iterate/CRUD + whatsMyIp`},{heading:`поверхность-requests`,content:"`ProxyStats`"},{heading:`поверхность-requests`,content:`list/aggregate/activities/download`},{heading:`поверхность-requests`,content:"`DownloadToken`"},{heading:`поверхность-requests`,content:`get/reset token by scope`},{heading:`поверхность-requests`,content:"`ApiKey`"},{heading:`поверхность-requests`,content:`list/iterate/CRUD`},{heading:`поверхность-requests`,content:"`SubUser`"},{heading:`поверхность-requests`,content:"list/iterate/CRUD/refresh + `masqueradeAs()`"},{heading:`глоссарий`,content:`Термин`},{heading:`глоссарий`,content:`Значение`},{heading:`глоссарий`,content:`Proxy`},{heading:`глоссарий`,content:`Один endpoint из списка прокси`},{heading:`глоссарий`,content:`ProxyList`},{heading:`глоссарий`,content:`Пагинированная коллекция Proxy`},{heading:`глоссарий`,content:`ProxyConfig`},{heading:`глоссарий`,content:`Plan-level конфигурация прокси`},{heading:`глоссарий`,content:`IpAuthorization`},{heading:`глоссарий`,content:`Allowlisted source IP`},{heading:`глоссарий`,content:`SubUser`},{heading:`глоссарий`,content:`Дочерний аккаунт под родительским планом`},{heading:`глоссарий`,content:`X-Subuser`},{heading:`глоссарий`,content:`Заголовок маскировки под SubUser`},{heading:`глоссарий`,content:`DownloadToken`},{heading:`глоссарий`,content:`Временный ключ скачивания`},{heading:`глоссарий`,content:`PageIterator`},{heading:`глоссарий`,content:"Обход страниц до `next == null`"},{heading:`глоссарий`,content:`BackboneConnection / DirectConnection`},{heading:`глоссарий`,content:"Режимы `getConnectionString()`"}],headings:[{id:`возможности`,content:`Возможности`},{id:`разделы-документации`,content:`Разделы документации`},{id:`быстрый-пример`,content:`Быстрый пример`},{id:`поверхность-requests`,content:`Поверхность Requests`},{id:`глоссарий`,content:`Глоссарий`}]},s=[{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#быстрый-пример`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый пример`})},{depth:2,url:`#поверхность-requests`,title:(0,n.jsx)(n.Fragment,{children:`Поверхность Requests`})},{depth:2,url:`#глоссарий`,title:(0,n.jsx)(n.Fragment,{children:`Глоссарий`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`PHP-библиотека для `,(0,n.jsx)(t.a,{href:`https://apidocs.webshare.io`,children:`WebShare Proxy API`}),`: типизированные запросы, фильтры, итерация страниц, кэш GET-ответов и повтор при `,(0,n.jsx)(t.code,{children:`429`}),` / `,(0,n.jsx)(t.code,{children:`5xx`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Пакет: `,(0,n.jsx)(t.code,{children:`devcraftclub/webshare-io-api-wrapper`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`PHP `,(0,n.jsx)(t.strong,{children:`8.3+`}),`, строгая типизация`]}),`
`,(0,n.jsxs)(t.li,{children:[`Фасад `,(0,n.jsx)(t.code,{children:`App`}),` или явная работа через `,(0,n.jsx)(t.code,{children:`Client`}),` / Request-классы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`QueryBuilder`}),` с операторами `,(0,n.jsx)(t.code,{children:`EQUAL`}),`, `,(0,n.jsx)(t.code,{children:`IN`}),`, `,(0,n.jsx)(t.code,{children:`GT`}),`, `,(0,n.jsx)(t.code,{children:`LT`}),`, `,(0,n.jsx)(t.code,{children:`CONTAINS`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PageIterator`}),` / `,(0,n.jsx)(t.code,{children:`iterate()`}),` с лимитом страниц`]}),`
`,(0,n.jsx)(t.li,{children:`Кэш успешных GET и инвалидация по тегам`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`X-Subuser`}),` через `,(0,n.jsx)(t.code,{children:`masqueradeAs()`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/install`,children:(0,n.jsx)(t.p,{children:`Composer и конфигурация API_KEY`})}),(0,n.jsx)(r,{title:`Прокси`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/guides/proxies`,children:(0,n.jsx)(t.p,{children:`List, iterate, download, connection strings`})}),(0,n.jsx)(r,{title:`Auth и токены`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/guides/auth_and_tokens`,children:(0,n.jsx)(t.p,{children:`Profile, IP auth, ApiKey, DownloadToken`})}),(0,n.jsx)(r,{title:`SubUser`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/guides/subusers`,children:(0,n.jsx)(t.p,{children:`CRUD и masqueradeAs`})}),(0,n.jsx)(r,{title:`Stats и config`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/guides/stats_and_config`,children:(0,n.jsx)(t.p,{children:`ProxyStats, ProxyConfig, кэш, ошибки`})}),(0,n.jsx)(r,{title:`Справочник`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/reference`,children:(0,n.jsx)(t.p,{children:`Все классы пакета`})}),(0,n.jsx)(r,{title:`English`,href:`/dev/api_wrappers/webshare-proxy/1.0.0/en/getting_started`,children:(0,n.jsx)(t.p,{children:`Full English documentation`})})]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-пример`,children:`Быстрый пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`require_once`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'vendor/autoload.php'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Webshare\\Classes\\App`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Webshare\\Enums\\FilterOperator`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`App`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`init`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`/** `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`@var`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\Devcraft\\Webshare\\Requests\\ProxyRequest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:` $proxies */`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` App`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Requests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Proxy'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'mode'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'direct'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withPageSize`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`25`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'country_code'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'US'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'DE'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`], `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`FilterOperator`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`IN`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$list `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $proxies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getList`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`foreach`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($proxies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`iterate`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`as`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $proxy) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getConnectionString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`backbone`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`), `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`поверхность-requests`,children:`Поверхность Requests`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`App::Requests key`}),(0,n.jsx)(t.th,{children:`Coverage`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Proxy`})}),(0,n.jsx)(t.td,{children:`list, iterate, download, refresh`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Profile`})}),(0,n.jsx)(t.td,{children:`profile + preferences`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Notification`})}),(0,n.jsx)(t.td,{children:`list/retrieve/dismiss/restore`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyReplacement`})}),(0,n.jsx)(t.td,{children:`list/retrieve/create (v3)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ReplacedProxy`})}),(0,n.jsx)(t.td,{children:`list/download`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyConfig`})}),(0,n.jsx)(t.td,{children:`config/status/listStats/update (v3)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`IpAuthorization`})}),(0,n.jsx)(t.td,{children:`list/iterate/CRUD + whatsMyIp`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyStats`})}),(0,n.jsx)(t.td,{children:`list/aggregate/activities/download`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`DownloadToken`})}),(0,n.jsx)(t.td,{children:`get/reset token by scope`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ApiKey`})}),(0,n.jsx)(t.td,{children:`list/iterate/CRUD`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`SubUser`})}),(0,n.jsxs)(t.td,{children:[`list/iterate/CRUD/refresh + `,(0,n.jsx)(t.code,{children:`masqueradeAs()`})]})]})]})]})}),`
`,(0,n.jsx)(t.h2,{id:`глоссарий`,children:`Глоссарий`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Термин`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Proxy`}),(0,n.jsx)(t.td,{children:`Один endpoint из списка прокси`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ProxyList`}),(0,n.jsx)(t.td,{children:`Пагинированная коллекция Proxy`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ProxyConfig`}),(0,n.jsx)(t.td,{children:`Plan-level конфигурация прокси`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IpAuthorization`}),(0,n.jsx)(t.td,{children:`Allowlisted source IP`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SubUser`}),(0,n.jsx)(t.td,{children:`Дочерний аккаунт под родительским планом`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`X-Subuser`}),(0,n.jsx)(t.td,{children:`Заголовок маскировки под SubUser`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DownloadToken`}),(0,n.jsx)(t.td,{children:`Временный ключ скачивания`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PageIterator`}),(0,n.jsxs)(t.td,{children:[`Обход страниц до `,(0,n.jsx)(t.code,{children:`next == null`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BackboneConnection / DirectConnection`}),(0,n.jsxs)(t.td,{children:[`Режимы `,(0,n.jsx)(t.code,{children:`getConnectionString()`})]})]})]})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};