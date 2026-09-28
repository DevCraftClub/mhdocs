import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор PHP-клиента GraphQL API Shikimori.`,version:`1.0.0`},i=new Date(1790614674e3),a=`

PHP-библиотека для GraphQL API Shikimori (\`shikimori.io\`). Пакет \`devcraftclub/shikimori-api-php\` отдаёт типизированные объекты, ограничивает частоту запросов и умеет хранить ответы в файловом кэше или в базе через Cycle ORM.

## Что умеет [#что-умеет]

* PHP 8.3 и новее, строгие типы
* Фасад \`ShikimoriClient\` и репозитории по разделам каталога
* Фильтры списков цепочкой \`with*\`
* Два профиля полей GraphQL: краткий и подробный
* Файловый кэш по умолчанию, Cycle ORM по желанию
* OAuth2 для запросов от имени пользователя
* Лимит 5 запросов в секунду и 90 в минуту

## Разделы [#разделы]

<Cards>
  <Card title="Установка" href="/dev/api_wrappers/shikimori-api/1.0.0/install">
    Composer и переменные окружения
  </Card>

  <Card title="Поиск" href="/dev/api_wrappers/shikimori-api/1.0.0/guides/search">
    Аниме, манга и профиль полей
  </Card>

  <Card title="Вход" href="/dev/api_wrappers/shikimori-api/1.0.0/guides/oauth">
    Ссылка на разрешение и обмен кода
  </Card>

  <Card title="Хранение" href="/dev/api_wrappers/shikimori-api/1.0.0/guides/persistence">
    Кэш, база и повторный запрос
  </Card>

  <Card title="Справочник" href="/dev/api_wrappers/shikimori-api/1.0.0/reference">
    Классы пакета
  </Card>

  <Card title="English" href="/dev/api_wrappers/shikimori-api/1.0.0/en/getting_started">
    English documentation
  </Card>
</Cards>

## Короткий пример [#короткий-пример]

\`\`\`php
use DevCraftClub\\Shikimori\\ShikimoriClient;
use DevCraftClub\\Shikimori\\Filter\\AnimeListFilter;
use DevCraftClub\\Shikimori\\Query\\Profile;

$client = ShikimoriClient::fromEnv();

$results = $client->animes()->search(
    (new AnimeListFilter())->withSearch('One Piece')->withLimit(5),
    Profile::Summary,
);

$anime = $client->animes()->findById(21, Profile::Detail);
\`\`\`
`,o={contents:[{heading:void 0,content:"PHP-библиотека для GraphQL API Shikimori (`shikimori.io`). Пакет `devcraftclub/shikimori-api-php` отдаёт типизированные объекты, ограничивает частоту запросов и умеет хранить ответы в файловом кэше или в базе через Cycle ORM."},{heading:`что-умеет`,content:`PHP 8.3 и новее, строгие типы`},{heading:`что-умеет`,content:"Фасад `ShikimoriClient` и репозитории по разделам каталога"},{heading:`что-умеет`,content:"Фильтры списков цепочкой `with*`"},{heading:`что-умеет`,content:`Два профиля полей GraphQL: краткий и подробный`},{heading:`что-умеет`,content:`Файловый кэш по умолчанию, Cycle ORM по желанию`},{heading:`что-умеет`,content:`OAuth2 для запросов от имени пользователя`},{heading:`что-умеет`,content:`Лимит 5 запросов в секунду и 90 в минуту`},{heading:`разделы`,content:`Composer и переменные окружения`},{heading:`разделы`,content:`Аниме, манга и профиль полей`},{heading:`разделы`,content:`Ссылка на разрешение и обмен кода`},{heading:`разделы`,content:`Кэш, база и повторный запрос`},{heading:`разделы`,content:`Классы пакета`},{heading:`разделы`,content:`English documentation`}],headings:[{id:`что-умеет`,content:`Что умеет`},{id:`разделы`,content:`Разделы`},{id:`короткий-пример`,content:`Короткий пример`}]},s=[{depth:2,url:`#что-умеет`,title:(0,n.jsx)(n.Fragment,{children:`Что умеет`})},{depth:2,url:`#разделы`,title:(0,n.jsx)(n.Fragment,{children:`Разделы`})},{depth:2,url:`#короткий-пример`,title:(0,n.jsx)(n.Fragment,{children:`Короткий пример`})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`PHP-библиотека для GraphQL API Shikimori (`,(0,n.jsx)(t.code,{children:`shikimori.io`}),`). Пакет `,(0,n.jsx)(t.code,{children:`devcraftclub/shikimori-api-php`}),` отдаёт типизированные объекты, ограничивает частоту запросов и умеет хранить ответы в файловом кэше или в базе через Cycle ORM.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-умеет`,children:`Что умеет`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP 8.3 и новее, строгие типы`}),`
`,(0,n.jsxs)(t.li,{children:[`Фасад `,(0,n.jsx)(t.code,{children:`ShikimoriClient`}),` и репозитории по разделам каталога`]}),`
`,(0,n.jsxs)(t.li,{children:[`Фильтры списков цепочкой `,(0,n.jsx)(t.code,{children:`with*`})]}),`
`,(0,n.jsx)(t.li,{children:`Два профиля полей GraphQL: краткий и подробный`}),`
`,(0,n.jsx)(t.li,{children:`Файловый кэш по умолчанию, Cycle ORM по желанию`}),`
`,(0,n.jsx)(t.li,{children:`OAuth2 для запросов от имени пользователя`}),`
`,(0,n.jsx)(t.li,{children:`Лимит 5 запросов в секунду и 90 в минуту`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы`,children:`Разделы`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/api_wrappers/shikimori-api/1.0.0/install`,children:(0,n.jsx)(t.p,{children:`Composer и переменные окружения`})}),(0,n.jsx)(r,{title:`Поиск`,href:`/dev/api_wrappers/shikimori-api/1.0.0/guides/search`,children:(0,n.jsx)(t.p,{children:`Аниме, манга и профиль полей`})}),(0,n.jsx)(r,{title:`Вход`,href:`/dev/api_wrappers/shikimori-api/1.0.0/guides/oauth`,children:(0,n.jsx)(t.p,{children:`Ссылка на разрешение и обмен кода`})}),(0,n.jsx)(r,{title:`Хранение`,href:`/dev/api_wrappers/shikimori-api/1.0.0/guides/persistence`,children:(0,n.jsx)(t.p,{children:`Кэш, база и повторный запрос`})}),(0,n.jsx)(r,{title:`Справочник`,href:`/dev/api_wrappers/shikimori-api/1.0.0/reference`,children:(0,n.jsx)(t.p,{children:`Классы пакета`})}),(0,n.jsx)(r,{title:`English`,href:`/dev/api_wrappers/shikimori-api/1.0.0/en/getting_started`,children:(0,n.jsx)(t.p,{children:`English documentation`})})]}),`
`,(0,n.jsx)(t.h2,{id:`короткий-пример`,children:`Короткий пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraftClub\\Shikimori\\ShikimoriClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraftClub\\Shikimori\\Filter\\AnimeListFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraftClub\\Shikimori\\Query\\Profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ShikimoriClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromEnv`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`animes`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`search`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` AnimeListFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`())`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withSearch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'One Piece'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withLimit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`5`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`),`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Summary`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$anime `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`animes`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`findById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`21`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Detail`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};