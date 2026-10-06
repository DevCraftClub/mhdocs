import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Getting started`,description:`Overview of the MyShows JSON-RPC PHP client.`,version:`1.0.0`},i=new Date(1791275402e3),a=`

PHP library for the official MyShows JSON-RPC API (\`https://api.myshows.me/v2/rpc/\`). The package \`devcraftclub/myshows-api-php\` calls methods by API section and returns typed objects.

The package \`composer.json\` does not set a version field yet. This documentation treats the first documented release as \`1.0.0\`.

## What it does [#what-it-does]

* PHP 8.3 and newer
* \`MyShowsClient\` facade and repositories for each API section
* Public methods without sign-in and private methods through OAuth2
* File cache for responses by default
* Token file storage and access token refresh
* Request rate limiting
* Separate exceptions for network, JSON-RPC, sign-in, and rate limit

## Sections [#sections]

<Cards>
  <Card title="Install" href="/dev/api_wrappers/myshows-api/1.0.0/en/install">
    Composer and environment variables
  </Card>

  <Card title="Shows" href="/dev/api_wrappers/myshows-api/1.0.0/en/guides/shows">
    Show card, search, and episodes
  </Card>

  <Card title="Sign-in" href="/dev/api_wrappers/myshows-api/1.0.0/en/guides/oauth">
    Authorization code, profile, and episode check-in
  </Card>

  <Card title="Cache" href="/dev/api_wrappers/myshows-api/1.0.0/en/guides/cache">
    Reuse without the network and force refresh
  </Card>

  <Card title="Reference" href="/dev/api_wrappers/myshows-api/1.0.0/en/reference">
    Package classes
  </Card>

  <Card title="Русский" href="/dev/api_wrappers/myshows-api/1.0.0/getting_started">
    Russian documentation
  </Card>
</Cards>

## Short example [#short-example]

\`\`\`php
use DevCraftClub\\MyShows\\MyShowsClient;

$client = MyShowsClient::fromEnv();
$show = $client->shows()->getById(showId: 1, withEpisodes: true);

echo $show->title;
\`\`\`
`,o={contents:[{heading:void 0,content:"PHP library for the official MyShows JSON-RPC API (`https://api.myshows.me/v2/rpc/`). The package `devcraftclub/myshows-api-php` calls methods by API section and returns typed objects."},{heading:void 0,content:"The package `composer.json` does not set a version field yet. This documentation treats the first documented release as `1.0.0`."},{heading:`what-it-does`,content:`PHP 8.3 and newer`},{heading:`what-it-does`,content:"`MyShowsClient` facade and repositories for each API section"},{heading:`what-it-does`,content:`Public methods without sign-in and private methods through OAuth2`},{heading:`what-it-does`,content:`File cache for responses by default`},{heading:`what-it-does`,content:`Token file storage and access token refresh`},{heading:`what-it-does`,content:`Request rate limiting`},{heading:`what-it-does`,content:`Separate exceptions for network, JSON-RPC, sign-in, and rate limit`},{heading:`sections`,content:`Composer and environment variables`},{heading:`sections`,content:`Show card, search, and episodes`},{heading:`sections`,content:`Authorization code, profile, and episode check-in`},{heading:`sections`,content:`Reuse without the network and force refresh`},{heading:`sections`,content:`Package classes`},{heading:`sections`,content:`Russian documentation`}],headings:[{id:`what-it-does`,content:`What it does`},{id:`sections`,content:`Sections`},{id:`short-example`,content:`Short example`}]},s=[{depth:2,url:`#what-it-does`,title:(0,n.jsx)(n.Fragment,{children:`What it does`})},{depth:2,url:`#sections`,title:(0,n.jsx)(n.Fragment,{children:`Sections`})},{depth:2,url:`#short-example`,title:(0,n.jsx)(n.Fragment,{children:`Short example`})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`PHP library for the official MyShows JSON-RPC API (`,(0,n.jsx)(t.code,{children:`https://api.myshows.me/v2/rpc/`}),`). The package `,(0,n.jsx)(t.code,{children:`devcraftclub/myshows-api-php`}),` calls methods by API section and returns typed objects.`]}),`
`,(0,n.jsxs)(t.p,{children:[`The package `,(0,n.jsx)(t.code,{children:`composer.json`}),` does not set a version field yet. This documentation treats the first documented release as `,(0,n.jsx)(t.code,{children:`1.0.0`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`what-it-does`,children:`What it does`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP 8.3 and newer`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MyShowsClient`}),` facade and repositories for each API section`]}),`
`,(0,n.jsx)(t.li,{children:`Public methods without sign-in and private methods through OAuth2`}),`
`,(0,n.jsx)(t.li,{children:`File cache for responses by default`}),`
`,(0,n.jsx)(t.li,{children:`Token file storage and access token refresh`}),`
`,(0,n.jsx)(t.li,{children:`Request rate limiting`}),`
`,(0,n.jsx)(t.li,{children:`Separate exceptions for network, JSON-RPC, sign-in, and rate limit`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sections`,children:`Sections`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Install`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/install`,children:(0,n.jsx)(t.p,{children:`Composer and environment variables`})}),(0,n.jsx)(r,{title:`Shows`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/guides/shows`,children:(0,n.jsx)(t.p,{children:`Show card, search, and episodes`})}),(0,n.jsx)(r,{title:`Sign-in`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/guides/oauth`,children:(0,n.jsx)(t.p,{children:`Authorization code, profile, and episode check-in`})}),(0,n.jsx)(r,{title:`Cache`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/guides/cache`,children:(0,n.jsx)(t.p,{children:`Reuse without the network and force refresh`})}),(0,n.jsx)(r,{title:`Reference`,href:`/dev/api_wrappers/myshows-api/1.0.0/en/reference`,children:(0,n.jsx)(t.p,{children:`Package classes`})}),(0,n.jsx)(r,{title:`Русский`,href:`/dev/api_wrappers/myshows-api/1.0.0/getting_started`,children:(0,n.jsx)(t.p,{children:`Russian documentation`})})]}),`
`,(0,n.jsx)(t.h2,{id:`short-example`,children:`Short example`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraftClub\\MyShows\\MyShowsClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MyShowsClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromEnv`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$show `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`shows`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`showId`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withEpisodes`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`title;`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};