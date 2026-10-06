import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор PHP-обёртки JSON-RPC API MyShows.`,version:`1.0.0`},i=new Date(1791275402e3),a=`

PHP-библиотека для официального JSON-RPC API MyShows (\`https://api.myshows.me/v2/rpc/\`). Пакет \`devcraftclub/myshows-api-php\` вызывает методы по разделам документации сайта и возвращает типизированные объекты.

В \`composer.json\` пакета поле версии пока не задано. Эта документация описывает первую собранную версию как \`1.0.0\`.

## Что умеет [#что-умеет]

* PHP 8.3 и новее
* Фасад \`MyShowsClient\` и репозитории по меткам API
* Публичные методы без входа и приватные через OAuth2
* Файловый кэш ответов по умолчанию
* Хранение токена в файле и обновление access token
* Ограничение частоты запросов
* Отдельные исключения для сети, JSON-RPC, входа и лимита

## Разделы [#разделы]

<Cards>
  <Card title="Установка" href="/dev/api_wrappers/myshows-api/1.0.0/install">
    Composer и переменные окружения
  </Card>

  <Card title="Сериалы" href="/dev/api_wrappers/myshows-api/1.0.0/guides/shows">
    Карточка, поиск и серии
  </Card>

  <Card title="Вход" href="/dev/api_wrappers/myshows-api/1.0.0/guides/oauth">
    Код разрешения, профиль и отметка серии
  </Card>

  <Card title="Кэш" href="/dev/api_wrappers/myshows-api/1.0.0/guides/cache">
    Повтор без сети и принудительное обновление
  </Card>

  <Card title="Справочник" href="/dev/api_wrappers/myshows-api/1.0.0/reference">
    Классы пакета
  </Card>

  <Card title="English" href="/dev/api_wrappers/myshows-api/1.0.0/en/getting_started">
    English documentation
  </Card>
</Cards>

## Короткий пример [#короткий-пример]

\`\`\`php
use DevCraftClub\\MyShows\\MyShowsClient;

$client = MyShowsClient::fromEnv();
$show = $client->shows()->getById(showId: 1, withEpisodes: true);

echo $show->title;
\`\`\`
`,o={contents:[{heading:void 0,content:"PHP-библиотека для официального JSON-RPC API MyShows (`https://api.myshows.me/v2/rpc/`). Пакет `devcraftclub/myshows-api-php` вызывает методы по разделам документации сайта и возвращает типизированные объекты."},{heading:void 0,content:"В `composer.json` пакета поле версии пока не задано. Эта документация описывает первую собранную версию как `1.0.0`."},{heading:`что-умеет`,content:`PHP 8.3 и новее`},{heading:`что-умеет`,content:"Фасад `MyShowsClient` и репозитории по меткам API"},{heading:`что-умеет`,content:`Публичные методы без входа и приватные через OAuth2`},{heading:`что-умеет`,content:`Файловый кэш ответов по умолчанию`},{heading:`что-умеет`,content:`Хранение токена в файле и обновление access token`},{heading:`что-умеет`,content:`Ограничение частоты запросов`},{heading:`что-умеет`,content:`Отдельные исключения для сети, JSON-RPC, входа и лимита`},{heading:`разделы`,content:`Composer и переменные окружения`},{heading:`разделы`,content:`Карточка, поиск и серии`},{heading:`разделы`,content:`Код разрешения, профиль и отметка серии`},{heading:`разделы`,content:`Повтор без сети и принудительное обновление`},{heading:`разделы`,content:`Классы пакета`},{heading:`разделы`,content:`English documentation`}],headings:[{id:`что-умеет`,content:`Что умеет`},{id:`разделы`,content:`Разделы`},{id:`короткий-пример`,content:`Короткий пример`}]},s=[{depth:2,url:`#что-умеет`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет`})},{depth:2,url:`#разделы`,title:(0,n.jsx)(n.Fragment,{children:`Разделы`})},{depth:2,url:`#короткий-пример`,title:(0,n.jsx)(n.Fragment,{children:`Короткий пример`})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`PHP-библиотека для официального JSON-RPC API MyShows (`,(0,n.jsx)(t.code,{children:`https://api.myshows.me/v2/rpc/`}),`). Пакет `,(0,n.jsx)(t.code,{children:`devcraftclub/myshows-api-php`}),` вызывает методы по разделам документации сайта и возвращает типизированные объекты.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`composer.json`}),` пакета поле версии пока не задано. Эта документация описывает первую собранную версию как `,(0,n.jsx)(t.code,{children:`1.0.0`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет`,children:`Что умеет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP 8.3 и новее`}),`
`,(0,n.jsxs)(t.li,{children:[`Фасад `,(0,n.jsx)(t.code,{children:`MyShowsClient`}),` и репозитории по меткам API`]}),`
`,(0,n.jsx)(t.li,{children:`Публичные методы без входа и приватные через OAuth2`}),`
`,(0,n.jsx)(t.li,{children:`Файловый кэш ответов по умолчанию`}),`
`,(0,n.jsx)(t.li,{children:`Хранение токена в файле и обновление access token`}),`
`,(0,n.jsx)(t.li,{children:`Ограничение частоты запросов`}),`
`,(0,n.jsx)(t.li,{children:`Отдельные исключения для сети, JSON-RPC, входа и лимита`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы`,children:`Разделы`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/api_wrappers/myshows-api/1.0.0/install`,children:(0,n.jsx)(t.p,{children:`Composer и переменные окружения`})}),(0,n.jsx)(r,{title:`Сериалы`,href:`/dev/api_wrappers/myshows-api/1.0.0/guides/shows`,children:(0,n.jsx)(t.p,{children:`Карточка, поиск и серии`})}),(0,n.jsx)(r,{title:`Вход`,href:`/dev/api_wrappers/myshows-api/1.0.0/guides/oauth`,children:(0,n.jsx)(t.p,{children:`Код разрешения, профиль и отметка серии`})}),(0,n.jsx)(r,{title:`Кэш`,href:`/dev/api_wrappers/myshows-api/1.0.0/guides/cache`,children:(0,n.jsx)(t.p,{children:`Повтор без сети и принудительное обновление`})}),(0,n.jsx)(r,{title:`Справочник`,href:`/dev/api_wrappers/myshows-api/1.0.0/reference`,children:(0,n.jsx)(t.p,{children:`Классы пакета`})}),(0,n.jsx)(r,{title:`English`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/getting_started`,children:(0,n.jsx)(t.p,{children:`English documentation`})})]}),`
`,(0,n.jsx)(t.h2,{id:`короткий-пример`,children:`Короткий пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraftClub\\MyShows\\MyShowsClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MyShowsClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromEnv`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$show `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`shows`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`showId`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withEpisodes`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`title;`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};