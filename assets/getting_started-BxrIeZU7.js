import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Getting started`,description:`Install and use the WebShare Proxy PHP wrapper.`,version:`1.0.0`},i=new Date(1787750944e3),a=`

PHP wrapper for the [WebShare Proxy API](https://apidocs.webshare.io) with rate-limit retries, GET response caching, filtering, pagination iterators, and typed request helpers.

## Requirements [#requirements]

* PHP >= 8.3
* [Composer](../../../../instructions/composer)
* WebShare API key

## Installation [#installation]

\`\`\`bash
composer require devcraftclub/webshare-io-api-wrapper
\`\`\`

## Configuration [#configuration]

\`\`\`bash
export API_KEY="your_webshare_api_key"
\`\`\`

Or \`.env\`:

\`\`\`ini
API_KEY=your_webshare_api_key
API_URL=https://proxy.webshare.io/api/
API_VERSION=v2
CACHE_ENABLED=1
CACHE_LIFETIME=3600
CACHE_DIRECTORY=./cache
ITERATE_MAX_PAGES=100
DEBUG=0
\`\`\`

\`\`\`php
use Devcraft\\Webshare\\Classes\\App;

App::init();
// or App::init('your_webshare_api_key');
\`\`\`

\`App::Client()\` returns the shared HTTP client. \`App::Requests('Profile'|'Notification'|…)\` auto-discovers request classes.

## Quick start [#quick-start]

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

## Request surface [#request-surface]

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

**Proxy Connection** is not a REST resource — use \`Proxy::getConnectionString()\` (backbone/direct).

## Domain glossary [#domain-glossary]

| Term                                  | Meaning                                      |
| ------------------------------------- | -------------------------------------------- |
| Proxy                                 | Single proxy endpoint from a list            |
| ProxyList                             | Paginated collection of Proxies              |
| ProxyConfig                           | Plan-level proxy configuration               |
| IpAuthorization                       | Allowlisted source IP                        |
| SubUser                               | Child account under the parent plan          |
| X-Subuser                             | Header to masquerade as a SubUser            |
| DownloadToken                         | Time-limited download key                    |
| PageIterator                          | Walks paginated pages until \`next\` is null   |
| BackboneConnection / DirectConnection | Connection modes via \`getConnectionString()\` |

## Next [#next]

* [Proxies](proxies)
* [Auth and tokens](auth_and_tokens)
* [SubUsers](subusers)
* [Stats and config](stats_and_config)
`,o={contents:[{heading:void 0,content:`PHP wrapper for the WebShare Proxy API with rate-limit retries, GET response caching, filtering, pagination iterators, and typed request helpers.`},{heading:`requirements`,content:`PHP >= 8.3`},{heading:`requirements`,content:`Composer`},{heading:`requirements`,content:`WebShare API key`},{heading:`configuration`,content:"Or `.env`:"},{heading:`configuration`,content:"`App::Client()` returns the shared HTTP client. `App::Requests('Profile'|'Notification'|…)` auto-discovers request classes."},{heading:`request-surface`,content:`App::Requests key`},{heading:`request-surface`,content:`Coverage`},{heading:`request-surface`,content:"`Proxy`"},{heading:`request-surface`,content:`list, iterate, download, refresh`},{heading:`request-surface`,content:"`Profile`"},{heading:`request-surface`,content:`profile + preferences`},{heading:`request-surface`,content:"`Notification`"},{heading:`request-surface`,content:`list/retrieve/dismiss/restore`},{heading:`request-surface`,content:"`ProxyReplacement`"},{heading:`request-surface`,content:`list/retrieve/create (v3)`},{heading:`request-surface`,content:"`ReplacedProxy`"},{heading:`request-surface`,content:`list/download`},{heading:`request-surface`,content:"`ProxyConfig`"},{heading:`request-surface`,content:`config/status/listStats/update (v3)`},{heading:`request-surface`,content:"`IpAuthorization`"},{heading:`request-surface`,content:`list/iterate/CRUD + whatsMyIp`},{heading:`request-surface`,content:"`ProxyStats`"},{heading:`request-surface`,content:`list/aggregate/activities/download`},{heading:`request-surface`,content:"`DownloadToken`"},{heading:`request-surface`,content:`get/reset token by scope`},{heading:`request-surface`,content:"`ApiKey`"},{heading:`request-surface`,content:`list/iterate/CRUD`},{heading:`request-surface`,content:"`SubUser`"},{heading:`request-surface`,content:"list/iterate/CRUD/refresh + `masqueradeAs()`"},{heading:`request-surface`,content:"**Proxy Connection** is not a REST resource — use `Proxy::getConnectionString()` (backbone/direct)."},{heading:`domain-glossary`,content:`Term`},{heading:`domain-glossary`,content:`Meaning`},{heading:`domain-glossary`,content:`Proxy`},{heading:`domain-glossary`,content:`Single proxy endpoint from a list`},{heading:`domain-glossary`,content:`ProxyList`},{heading:`domain-glossary`,content:`Paginated collection of Proxies`},{heading:`domain-glossary`,content:`ProxyConfig`},{heading:`domain-glossary`,content:`Plan-level proxy configuration`},{heading:`domain-glossary`,content:`IpAuthorization`},{heading:`domain-glossary`,content:`Allowlisted source IP`},{heading:`domain-glossary`,content:`SubUser`},{heading:`domain-glossary`,content:`Child account under the parent plan`},{heading:`domain-glossary`,content:`X-Subuser`},{heading:`domain-glossary`,content:`Header to masquerade as a SubUser`},{heading:`domain-glossary`,content:`DownloadToken`},{heading:`domain-glossary`,content:`Time-limited download key`},{heading:`domain-glossary`,content:`PageIterator`},{heading:`domain-glossary`,content:"Walks paginated pages until `next` is null"},{heading:`domain-glossary`,content:`BackboneConnection / DirectConnection`},{heading:`domain-glossary`,content:"Connection modes via `getConnectionString()`"},{heading:`next`,content:`Proxies`},{heading:`next`,content:`Auth and tokens`},{heading:`next`,content:`SubUsers`},{heading:`next`,content:`Stats and config`}],headings:[{id:`requirements`,content:`Requirements`},{id:`installation`,content:`Installation`},{id:`configuration`,content:`Configuration`},{id:`quick-start`,content:`Quick start`},{id:`request-surface`,content:`Request surface`},{id:`domain-glossary`,content:`Domain glossary`},{id:`next`,content:`Next`}]},s=[{depth:2,url:`#requirements`,title:(0,n.jsx)(n.Fragment,{children:`Requirements`})},{depth:2,url:`#installation`,title:(0,n.jsx)(n.Fragment,{children:`Installation`})},{depth:2,url:`#configuration`,title:(0,n.jsx)(n.Fragment,{children:`Configuration`})},{depth:2,url:`#quick-start`,title:(0,n.jsx)(n.Fragment,{children:`Quick start`})},{depth:2,url:`#request-surface`,title:(0,n.jsx)(n.Fragment,{children:`Request surface`})},{depth:2,url:`#domain-glossary`,title:(0,n.jsx)(n.Fragment,{children:`Domain glossary`})},{depth:2,url:`#next`,title:(0,n.jsx)(n.Fragment,{children:`Next`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`PHP wrapper for the `,(0,n.jsx)(t.a,{href:`https://apidocs.webshare.io`,children:`WebShare Proxy API`}),` with rate-limit retries, GET response caching, filtering, pagination iterators, and typed request helpers.`]}),`
`,(0,n.jsx)(t.h2,{id:`requirements`,children:`Requirements`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP >= 8.3`}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../../../instructions/composer`,children:`Composer`})}),`
`,(0,n.jsx)(t.li,{children:`WebShare API key`}),`
`]})}),`
`,(0,n.jsx)(t.h2,{id:`installation`,children:`Installation`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/webshare-io-api-wrapper`})]})})})})}),`
`,(0,n.jsx)(t.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`export`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` API_KEY`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"your_webshare_api_key"`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Or `,(0,n.jsx)(t.code,{children:`.env`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`API_KEY`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=your_webshare_api_key`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`API_URL`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=https://proxy.webshare.io/api/`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`API_VERSION`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=v2`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`CACHE_ENABLED`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=1`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`CACHE_LIFETIME`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=3600`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`CACHE_DIRECTORY`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=./cache`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`ITERATE_MAX_PAGES`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=100`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`DEBUG`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=0`})]})]})})})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Webshare\\Classes\\App`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`App`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`init`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// or App::init('your_webshare_api_key');`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`App::Client()`}),` returns the shared HTTP client. `,(0,n.jsx)(t.code,{children:`App::Requests('Profile'|'Notification'|…)`}),` auto-discovers request classes.`]}),`
`,(0,n.jsx)(t.h2,{id:`quick-start`,children:`Quick start`}),`
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
`,(0,n.jsx)(t.h2,{id:`request-surface`,children:`Request surface`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`App::Requests key`}),(0,n.jsx)(t.th,{children:`Coverage`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Proxy`})}),(0,n.jsx)(t.td,{children:`list, iterate, download, refresh`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Profile`})}),(0,n.jsx)(t.td,{children:`profile + preferences`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Notification`})}),(0,n.jsx)(t.td,{children:`list/retrieve/dismiss/restore`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyReplacement`})}),(0,n.jsx)(t.td,{children:`list/retrieve/create (v3)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ReplacedProxy`})}),(0,n.jsx)(t.td,{children:`list/download`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyConfig`})}),(0,n.jsx)(t.td,{children:`config/status/listStats/update (v3)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`IpAuthorization`})}),(0,n.jsx)(t.td,{children:`list/iterate/CRUD + whatsMyIp`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ProxyStats`})}),(0,n.jsx)(t.td,{children:`list/aggregate/activities/download`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`DownloadToken`})}),(0,n.jsx)(t.td,{children:`get/reset token by scope`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ApiKey`})}),(0,n.jsx)(t.td,{children:`list/iterate/CRUD`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`SubUser`})}),(0,n.jsxs)(t.td,{children:[`list/iterate/CRUD/refresh + `,(0,n.jsx)(t.code,{children:`masqueradeAs()`})]})]})]})]})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Proxy Connection`}),` is not a REST resource — use `,(0,n.jsx)(t.code,{children:`Proxy::getConnectionString()`}),` (backbone/direct).`]}),`
`,(0,n.jsx)(t.h2,{id:`domain-glossary`,children:`Domain glossary`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Term`}),(0,n.jsx)(t.th,{children:`Meaning`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Proxy`}),(0,n.jsx)(t.td,{children:`Single proxy endpoint from a list`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ProxyList`}),(0,n.jsx)(t.td,{children:`Paginated collection of Proxies`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ProxyConfig`}),(0,n.jsx)(t.td,{children:`Plan-level proxy configuration`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IpAuthorization`}),(0,n.jsx)(t.td,{children:`Allowlisted source IP`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SubUser`}),(0,n.jsx)(t.td,{children:`Child account under the parent plan`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`X-Subuser`}),(0,n.jsx)(t.td,{children:`Header to masquerade as a SubUser`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DownloadToken`}),(0,n.jsx)(t.td,{children:`Time-limited download key`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PageIterator`}),(0,n.jsxs)(t.td,{children:[`Walks paginated pages until `,(0,n.jsx)(t.code,{children:`next`}),` is null`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BackboneConnection / DirectConnection`}),(0,n.jsxs)(t.td,{children:[`Connection modes via `,(0,n.jsx)(t.code,{children:`getConnectionString()`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`next`,children:`Next`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`proxies`,children:`Proxies`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`auth_and_tokens`,children:`Auth and tokens`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`subusers`,children:`SubUsers`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`stats_and_config`,children:`Stats and config`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};