import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Installation`,description:`Install and configure DevCraft Dev Tools via Composer or a path repository.`,version:`1.1.0`},i=new Date(1788011088e3),a=`

## System requirements [#system-requirements]

* PHP 8.3 or newer
* [Composer](/instructions/composer)
* Runtime: [\`psr/cache\`](https://packagist.org/packages/psr/cache) \`^3.0\` (PSR-6)
* Runtime: [\`marcin-orlowski/lombok-php\`](https://packagist.org/packages/marcin-orlowski/lombok-php) \`^1.2\` (installed with the package)

## Installation methods [#installation-methods]

<Tabs groupId="packageManager" items="['Composer', 'Source']">
  <Tab value="Composer">
    \`\`\`bash
    composer require devcraftclub/dev-tools:^1.1
    \`\`\`

    Composer also installs [\`marcin-orlowski/lombok-php\`](https://packagist.org/packages/marcin-orlowski/lombok-php) \`^1.2\` and [\`psr/cache\`](https://packagist.org/packages/psr/cache) \`^3.0\`. lombok-php is required by \`AbstractWith\` (\`\\Lombok\\Helper\`); \`psr/cache\` by \`FileCachePool\`.
  </Tab>

  <Tab value="Source">
    <Callout type="info" title="Root consumer only">
      Path repositories belong in the consuming project's root \`composer.json\`. Composer does not inherit them transitively.
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

    Set \`url\` to the relative or absolute path of the package on disk. For local work use \`^1.1\` or \`@dev\`. Later you can switch the path repository to a VCS/Packagist source.
  </Tab>
</Tabs>

## Configuration [#configuration]

No extra config file is required. After Composer resolves the package, autoload \`Devcraft\\\\\` namespaces from \`vendor\`.

## Verify the install [#verify-the-install]

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

Expected: version \`1.1.0\` (or a compatible \`^1.1\`) and PHP \`>=8.3\`.

## Troubleshooting [#troubleshooting]

<Accordions type="single">
  <Accordion title="Package not found / path repository ignored">
    Path repositories must be declared in the **root** consumer \`composer.json\`. Nested packages cannot inherit them.
  </Accordion>

  <Accordion title="PHP version too old">
    The package requires PHP 8.3 or newer. Check \`php -v\` and the platform config in Composer.
  </Accordion>

  <Accordion title="FileCachePool class missing">
    Confirm version \`>=1.1.0\` and that \`psr/cache\` appears in \`composer show\`.
  </Accordion>
</Accordions>
`,o={contents:[{heading:`system-requirements`,content:`PHP 8.3 or newer`},{heading:`system-requirements`,content:`Composer`},{heading:`system-requirements`,content:"Runtime: `psr/cache` `^3.0` (PSR-6)"},{heading:`system-requirements`,content:"Runtime: `marcin-orlowski/lombok-php` `^1.2` (installed with the package)"},{heading:`installation-methods`,content:"Composer also installs `marcin-orlowski/lombok-php` `^1.2` and `psr/cache` `^3.0`. lombok-php is required by `AbstractWith` (`\\Lombok\\Helper`); `psr/cache` by `FileCachePool`."},{heading:`installation-methods`,content:"Path repositories belong in the consuming project's root `composer.json`. Composer does not inherit them transitively."},{heading:`installation-methods`,content:`Then:`},{heading:`installation-methods`,content:"Set `url` to the relative or absolute path of the package on disk. For local work use `^1.1` or `@dev`. Later you can switch the path repository to a VCS/Packagist source."},{heading:`configuration`,content:"No extra config file is required. After Composer resolves the package, autoload `Devcraft\\\\` namespaces from `vendor`."},{heading:`verify-the-install`,content:"Expected: version `1.1.0` (or a compatible `^1.1`) and PHP `>=8.3`."},{heading:`troubleshooting`,content:"Path repositories must be declared in the **root** consumer `composer.json`. Nested packages cannot inherit them."},{heading:`troubleshooting`,content:"The package requires PHP 8.3 or newer. Check `php -v` and the platform config in Composer."},{heading:`troubleshooting`,content:"Confirm version `>=1.1.0` and that `psr/cache` appears in `composer show`."}],headings:[{id:`system-requirements`,content:`System requirements`},{id:`installation-methods`,content:`Installation methods`},{id:`configuration`,content:`Configuration`},{id:`verify-the-install`,content:`Verify the install`},{id:`troubleshooting`,content:`Troubleshooting`}]},s=[{depth:2,url:`#system-requirements`,title:(0,n.jsx)(n.Fragment,{children:`System requirements`})},{depth:2,url:`#installation-methods`,title:(0,n.jsx)(n.Fragment,{children:`Installation methods`})},{depth:2,url:`#configuration`,title:(0,n.jsx)(n.Fragment,{children:`Configuration`})},{depth:2,url:`#verify-the-install`,title:(0,n.jsx)(n.Fragment,{children:`Verify the install`})},{depth:2,url:`#troubleshooting`,title:(0,n.jsx)(n.Fragment,{children:`Troubleshooting`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Accordion:r,Accordions:i,Callout:a,Tab:o,Tabs:s}=t;return r||u(`Accordion`,!0),i||u(`Accordions`,!0),a||u(`Callout`,!0),o||u(`Tab`,!0),s||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`system-requirements`,children:`System requirements`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP 8.3 or newer`}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/instructions/composer`,children:`Composer`})}),`
`,(0,n.jsxs)(t.li,{children:[`Runtime: `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/psr/cache`,children:(0,n.jsx)(t.code,{children:`psr/cache`})}),` `,(0,n.jsx)(t.code,{children:`^3.0`}),` (PSR-6)`]}),`
`,(0,n.jsxs)(t.li,{children:[`Runtime: `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/marcin-orlowski/lombok-php`,children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),` `,(0,n.jsx)(t.code,{children:`^1.2`}),` (installed with the package)`]}),`
`]})}),`
`,(0,n.jsx)(t.h2,{id:`installation-methods`,children:`Installation methods`}),`
`,(0,n.jsxs)(s,{groupId:`packageManager`,items:[`Composer`,`Source`],children:[(0,n.jsxs)(o,{value:`Composer`,children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools:^1.1`})]})})})}),(0,n.jsxs)(t.p,{children:[`Composer also installs `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/marcin-orlowski/lombok-php`,children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),` `,(0,n.jsx)(t.code,{children:`^1.2`}),` and `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/psr/cache`,children:(0,n.jsx)(t.code,{children:`psr/cache`})}),` `,(0,n.jsx)(t.code,{children:`^3.0`}),`. lombok-php is required by `,(0,n.jsx)(t.code,{children:`AbstractWith`}),` (`,(0,n.jsx)(t.code,{children:`\\Lombok\\Helper`}),`); `,(0,n.jsx)(t.code,{children:`psr/cache`}),` by `,(0,n.jsx)(t.code,{children:`FileCachePool`}),`.`]})]}),(0,n.jsxs)(o,{value:`Source`,children:[(0,n.jsx)(a,{type:`info`,title:`Root consumer only`,children:(0,n.jsxs)(t.p,{children:[`Path repositories belong in the consuming project's root `,(0,n.jsx)(t.code,{children:`composer.json`}),`. Composer does not inherit them transitively.`]})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
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
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})})]}),(0,n.jsxs)(t.p,{children:[`Set `,(0,n.jsx)(t.code,{children:`url`}),` to the relative or absolute path of the package on disk. For local work use `,(0,n.jsx)(t.code,{children:`^1.1`}),` or `,(0,n.jsx)(t.code,{children:`@dev`}),`. Later you can switch the path repository to a VCS/Packagist source.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,n.jsxs)(t.p,{children:[`No extra config file is required. After Composer resolves the package, autoload `,(0,n.jsx)(t.code,{children:`Devcraft\\\\`}),` namespaces from `,(0,n.jsx)(t.code,{children:`vendor`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`verify-the-install`,children:`Verify the install`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Expected: version `,(0,n.jsx)(t.code,{children:`1.1.0`}),` (or a compatible `,(0,n.jsx)(t.code,{children:`^1.1`}),`) and PHP `,(0,n.jsx)(t.code,{children:`>=8.3`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`troubleshooting`,children:`Troubleshooting`}),`
`,(0,n.jsxs)(i,{type:`single`,children:[(0,n.jsx)(r,{title:`Package not found / path repository ignored`,children:(0,n.jsxs)(t.p,{children:[`Path repositories must be declared in the `,(0,n.jsx)(t.strong,{children:`root`}),` consumer `,(0,n.jsx)(t.code,{children:`composer.json`}),`. Nested packages cannot inherit them.`]})}),(0,n.jsx)(r,{title:`PHP version too old`,children:(0,n.jsxs)(t.p,{children:[`The package requires PHP 8.3 or newer. Check `,(0,n.jsx)(t.code,{children:`php -v`}),` and the platform config in Composer.`]})}),(0,n.jsx)(r,{title:`FileCachePool class missing`,children:(0,n.jsxs)(t.p,{children:[`Confirm version `,(0,n.jsx)(t.code,{children:`>=1.1.0`}),` and that `,(0,n.jsx)(t.code,{children:`psr/cache`}),` appears in `,(0,n.jsx)(t.code,{children:`composer show`}),`.`]})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};