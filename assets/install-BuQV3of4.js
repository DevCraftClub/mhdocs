import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Installation`,description:`Install DevCraft Dev Tools with Composer or a path repository, requirements, and common issues.`,version:`1.1.0`},i=new Date(1789555699e3),a=`

## System requirements [#system-requirements]

| Item                         | Minimum                                        |
| ---------------------------- | ---------------------------------------------- |
| PHP                          | **8.3+**                                       |
| Composer                     | yes                                            |
| \`psr/cache\`                  | \`^3.0\` (pulled in automatically)               |
| \`marcin-orlowski/lombok-php\` | \`^1.2\` (for \`get*\` / \`set*\` on \`AbstractWith\`) |

No separate config file: after \`composer require\`, the \`Devcraft\\\` namespaces come from \`vendor\` autoload.

## Installation methods [#installation-methods]

<Tabs groupId="packageManager" items="['Composer (Packagist)', 'Path repository']">
  <Tab value="Composer (Packagist)">
    \`\`\`bash
    composer require devcraftclub/dev-tools:^1.1
    \`\`\`

    Composer also installs lombok-php and \`psr/cache\`. On sites with DevCraft Admin the package is already a dependency of the shell — add it yourself only for standalone PHP projects.
  </Tab>

  <Tab value="Path repository">
    <Callout type="info" title="Root consumer only">
      Path repositories belong in the consuming project's **root** \`composer.json\`. Nested packages do not inherit them.
    </Callout>

    \`\`\`json
    {
      "repositories": [
        {
          "type": "path",
          "url": "../DevTool",
          "options": { "symlink": true }
        }
      ],
      "require": {
        "devcraftclub/dev-tools": "@dev"
      }
    }
    \`\`\`

    Then:

    \`\`\`bash
    composer update devcraftclub/dev-tools
    \`\`\`

    Point \`url\` at a local clone. Use \`^1.1\` or \`@dev\` while developing; switch to Packagist/VCS later.
  </Tab>
</Tabs>

## Verify [#verify]

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

Expect \`1.1.0\` (or compatible \`^1.1\`) and PHP \`>=8.3\`. For cache usage, \`psr/cache\` must appear in the dependency tree.

## Troubleshooting [#troubleshooting]

<Accordions type="single">
  <Accordion title="Package not found / path ignored">
    Declare path repositories only in the consumer root \`composer.json\`.
  </Accordion>

  <Accordion title="PHP too old">
    Requires PHP 8.3+. Check \`php -v\` and Composer \`config.platform\`.
  </Accordion>

  <Accordion title="Missing FileCachePool">
    Need package version **≥ 1.1.0** and an installed \`psr/cache\`.
  </Accordion>
</Accordions>

## Next [#next]

* [Getting started](./getting_started)
* [PSR-6 file cache](./guides/file_cache)
* [With attributes](./guides/with_attributes)
`,o={contents:[{heading:`system-requirements`,content:`Item`},{heading:`system-requirements`,content:`Minimum`},{heading:`system-requirements`,content:`PHP`},{heading:`system-requirements`,content:`**8.3+**`},{heading:`system-requirements`,content:`Composer`},{heading:`system-requirements`,content:`yes`},{heading:`system-requirements`,content:"`psr/cache`"},{heading:`system-requirements`,content:"`^3.0` (pulled in automatically)"},{heading:`system-requirements`,content:"`marcin-orlowski/lombok-php`"},{heading:`system-requirements`,content:"`^1.2` (for `get*` / `set*` on `AbstractWith`)"},{heading:`system-requirements`,content:"No separate config file: after `composer require`, the `Devcraft\\` namespaces come from `vendor` autoload."},{heading:`installation-methods`,content:"Composer also installs lombok-php and `psr/cache`. On sites with DevCraft Admin the package is already a dependency of the shell — add it yourself only for standalone PHP projects."},{heading:`installation-methods`,content:"Path repositories belong in the consuming project's **root** `composer.json`. Nested packages do not inherit them."},{heading:`installation-methods`,content:`Then:`},{heading:`installation-methods`,content:"Point `url` at a local clone. Use `^1.1` or `@dev` while developing; switch to Packagist/VCS later."},{heading:`verify`,content:"Expect `1.1.0` (or compatible `^1.1`) and PHP `>=8.3`. For cache usage, `psr/cache` must appear in the dependency tree."},{heading:`troubleshooting`,content:"Declare path repositories only in the consumer root `composer.json`."},{heading:`troubleshooting`,content:"Requires PHP 8.3+. Check `php -v` and Composer `config.platform`."},{heading:`troubleshooting`,content:"Need package version **≥ 1.1.0** and an installed `psr/cache`."},{heading:`next`,content:`Getting started`},{heading:`next`,content:`PSR-6 file cache`},{heading:`next`,content:`With attributes`}],headings:[{id:`system-requirements`,content:`System requirements`},{id:`installation-methods`,content:`Installation methods`},{id:`verify`,content:`Verify`},{id:`troubleshooting`,content:`Troubleshooting`},{id:`next`,content:`Next`}]},s=[{depth:2,url:`#system-requirements`,title:(0,n.jsx)(n.Fragment,{children:`System requirements`})},{depth:2,url:`#installation-methods`,title:(0,n.jsx)(n.Fragment,{children:`Installation methods`})},{depth:2,url:`#verify`,title:(0,n.jsx)(n.Fragment,{children:`Verify`})},{depth:2,url:`#troubleshooting`,title:(0,n.jsx)(n.Fragment,{children:`Troubleshooting`})},{depth:2,url:`#next`,title:(0,n.jsx)(n.Fragment,{children:`Next`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Accordion:r,Accordions:i,Callout:a,Tab:o,Tabs:s}=t;return r||u(`Accordion`,!0),i||u(`Accordions`,!0),a||u(`Callout`,!0),o||u(`Tab`,!0),s||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`system-requirements`,children:`System requirements`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Item`}),(0,n.jsx)(t.th,{children:`Minimum`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsx)(t.td,{children:`yes`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`psr/cache`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^3.0`}),` (pulled in automatically)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^1.2`}),` (for `,(0,n.jsx)(t.code,{children:`get*`}),` / `,(0,n.jsx)(t.code,{children:`set*`}),` on `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`No separate config file: after `,(0,n.jsx)(t.code,{children:`composer require`}),`, the `,(0,n.jsx)(t.code,{children:`Devcraft\\`}),` namespaces come from `,(0,n.jsx)(t.code,{children:`vendor`}),` autoload.`]}),`
`,(0,n.jsx)(t.h2,{id:`installation-methods`,children:`Installation methods`}),`
`,(0,n.jsxs)(s,{groupId:`packageManager`,items:[`Composer (Packagist)`,`Path repository`],children:[(0,n.jsxs)(o,{value:`Composer (Packagist)`,children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools:^1.1`})]})})})}),(0,n.jsxs)(t.p,{children:[`Composer also installs lombok-php and `,(0,n.jsx)(t.code,{children:`psr/cache`}),`. On sites with DevCraft Admin the package is already a dependency of the shell — add it yourself only for standalone PHP projects.`]})]}),(0,n.jsxs)(o,{value:`Path repository`,children:[(0,n.jsx)(a,{type:`info`,title:`Root consumer only`,children:(0,n.jsxs)(t.p,{children:[`Path repositories belong in the consuming project's `,(0,n.jsx)(t.strong,{children:`root`}),` `,(0,n.jsx)(t.code,{children:`composer.json`}),`. Nested packages do not inherit them.`]})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "repositories"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`      "type"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"path"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`      "url"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"../DevTool"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`      "options"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: { `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`"symlink"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` }`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  ],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "require"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    "devcraftclub/dev-tools"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"@dev"`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Then:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})})]}),(0,n.jsxs)(t.p,{children:[`Point `,(0,n.jsx)(t.code,{children:`url`}),` at a local clone. Use `,(0,n.jsx)(t.code,{children:`^1.1`}),` or `,(0,n.jsx)(t.code,{children:`@dev`}),` while developing; switch to Packagist/VCS later.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`verify`,children:`Verify`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Expect `,(0,n.jsx)(t.code,{children:`1.1.0`}),` (or compatible `,(0,n.jsx)(t.code,{children:`^1.1`}),`) and PHP `,(0,n.jsx)(t.code,{children:`>=8.3`}),`. For cache usage, `,(0,n.jsx)(t.code,{children:`psr/cache`}),` must appear in the dependency tree.`]}),`
`,(0,n.jsx)(t.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,n.jsxs)(i,{type:`single`,children:[(0,n.jsx)(r,{title:`Package not found / path ignored`,children:(0,n.jsxs)(t.p,{children:[`Declare path repositories only in the consumer root `,(0,n.jsx)(t.code,{children:`composer.json`}),`.`]})}),(0,n.jsx)(r,{title:`PHP too old`,children:(0,n.jsxs)(t.p,{children:[`Requires PHP 8.3+. Check `,(0,n.jsx)(t.code,{children:`php -v`}),` and Composer `,(0,n.jsx)(t.code,{children:`config.platform`}),`.`]})}),(0,n.jsx)(r,{title:`Missing FileCachePool`,children:(0,n.jsxs)(t.p,{children:[`Need package version `,(0,n.jsx)(t.strong,{children:`≥ 1.1.0`}),` and an installed `,(0,n.jsx)(t.code,{children:`psr/cache`}),`.`]})})]}),`
`,(0,n.jsx)(t.h2,{id:`next`,children:`Next`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./getting_started`,children:`Getting started`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/file_cache`,children:`PSR-6 file cache`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/with_attributes`,children:`With attributes`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};