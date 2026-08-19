import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Способы установки, системные требования и конфигурация DevCraft Dev Tools`,version:`1.0.1`},i=new Date(1787142659e3),a=`

## Системные требования [#системные-требования]

* PHP 8.3 или новее
* [Composer](/instructions/composer)
* Транзитивная зависимость: [\`marcin-orlowski/lombok-php\`](https://packagist.org/packages/marcin-orlowski/lombok-php) \`^1.2\` (ставится вместе с пакетом)

## Способы установки [#способы-установки]

<Tabs groupId="packageManager" items="['Composer', 'Source']">
  <Tab value="Composer">
    \`\`\`bash
    composer require devcraftclub/dev-tools
    \`\`\`

    Composer подтянет [\`marcin-orlowski/lombok-php\`](https://packagist.org/packages/marcin-orlowski/lombok-php) \`^1.2\` как транзитивную зависимость. Она нужна \`AbstractWith\`: класс наследует \`\\Lombok\\Helper\`.
  </Tab>

  <Tab value="Source">
    <Callout type="info" title="Только в root consumer">
      Path repositories настраиваются в корневом \`composer.json\` потребляющего проекта. Composer не наследует их транзитивно.
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

    Подставьте в \`url\` относительный или абсолютный путь к пакету на диске. Позже можно заменить path repository обычным VCS/Packagist и version constraint.
  </Tab>
</Tabs>

## Конфигурация [#конфигурация]

Отдельный конфиг-файл не нужен. После установки Composer автозагружает пространства имён \`Devcraft\\\\\` из \`vendor\`.

## Проверка установки [#проверка-установки]

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

Ожидается версия \`1.0.1\` и PHP \`>=8.3\`.

## Устранение проблем [#устранение-проблем]

<Accordions type="single">
  <Accordion title="Пакет не находится / path repository игнорируется">
    Path repositories объявляются только в **корневом** \`composer.json\` потребителя. Вложенные пакеты их не наследуют.
  </Accordion>

  <Accordion title="Слишком старая версия PHP">
    Пакет требует PHP 8.3 или новее. Проверьте \`php -v\` и platform-конфиг Composer.
  </Accordion>
</Accordions>
`,o={contents:[{heading:`системные-требования`,content:`PHP 8.3 или новее`},{heading:`системные-требования`,content:`Composer`},{heading:`системные-требования`,content:"Транзитивная зависимость: `marcin-orlowski/lombok-php` `^1.2` (ставится вместе с пакетом)"},{heading:`способы-установки`,content:"Composer подтянет `marcin-orlowski/lombok-php` `^1.2` как транзитивную зависимость. Она нужна `AbstractWith`: класс наследует `\\Lombok\\Helper`."},{heading:`способы-установки`,content:"Path repositories настраиваются в корневом `composer.json` потребляющего проекта. Composer не наследует их транзитивно."},{heading:`способы-установки`,content:`Then:`},{heading:`способы-установки`,content:"Подставьте в `url` относительный или абсолютный путь к пакету на диске. Позже можно заменить path repository обычным VCS/Packagist и version constraint."},{heading:`конфигурация`,content:"Отдельный конфиг-файл не нужен. После установки Composer автозагружает пространства имён `Devcraft\\\\` из `vendor`."},{heading:`проверка-установки`,content:"Ожидается версия `1.0.1` и PHP `>=8.3`."},{heading:`устранение-проблем`,content:"Path repositories объявляются только в **корневом** `composer.json` потребителя. Вложенные пакеты их не наследуют."},{heading:`устранение-проблем`,content:"Пакет требует PHP 8.3 или новее. Проверьте `php -v` и platform-конфиг Composer."}],headings:[{id:`системные-требования`,content:`Системные требования`},{id:`способы-установки`,content:`Способы установки`},{id:`конфигурация`,content:`Конфигурация`},{id:`проверка-установки`,content:`Проверка установки`},{id:`устранение-проблем`,content:`Устранение проблем`}]},s=[{depth:2,url:`#системные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Системные требования`})},{depth:2,url:`#способы-установки`,title:(0,n.jsx)(n.Fragment,{children:`Способы установки`})},{depth:2,url:`#конфигурация`,title:(0,n.jsx)(n.Fragment,{children:`Конфигурация`})},{depth:2,url:`#проверка-установки`,title:(0,n.jsx)(n.Fragment,{children:`Проверка установки`})},{depth:2,url:`#устранение-проблем`,title:(0,n.jsx)(n.Fragment,{children:`Устранение проблем`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Accordion:r,Accordions:i,Callout:a,Tab:o,Tabs:s}=t;return r||u(`Accordion`,!0),i||u(`Accordions`,!0),a||u(`Callout`,!0),o||u(`Tab`,!0),s||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`системные-требования`,children:`Системные требования`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`PHP 8.3 или новее`}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`/instructions/composer`,children:`Composer`})}),`
`,(0,n.jsxs)(t.li,{children:[`Транзитивная зависимость: `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/marcin-orlowski/lombok-php`,children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),` `,(0,n.jsx)(t.code,{children:`^1.2`}),` (ставится вместе с пакетом)`]}),`
`]})}),`
`,(0,n.jsx)(t.h2,{id:`способы-установки`,children:`Способы установки`}),`
`,(0,n.jsxs)(s,{groupId:`packageManager`,items:[`Composer`,`Source`],children:[(0,n.jsxs)(o,{value:`Composer`,children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),(0,n.jsxs)(t.p,{children:[`Composer подтянет `,(0,n.jsx)(t.a,{href:`https://packagist.org/packages/marcin-orlowski/lombok-php`,children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),` `,(0,n.jsx)(t.code,{children:`^1.2`}),` как транзитивную зависимость. Она нужна `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`: класс наследует `,(0,n.jsx)(t.code,{children:`\\Lombok\\Helper`}),`.`]})]}),(0,n.jsxs)(o,{value:`Source`,children:[(0,n.jsx)(a,{type:`info`,title:`Только в root consumer`,children:(0,n.jsxs)(t.p,{children:[`Path repositories настраиваются в корневом `,(0,n.jsx)(t.code,{children:`composer.json`}),` потребляющего проекта. Composer не наследует их транзитивно.`]})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
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
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})})]}),(0,n.jsxs)(t.p,{children:[`Подставьте в `,(0,n.jsx)(t.code,{children:`url`}),` относительный или абсолютный путь к пакету на диске. Позже можно заменить path repository обычным VCS/Packagist и version constraint.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельный конфиг-файл не нужен. После установки Composer автозагружает пространства имён `,(0,n.jsx)(t.code,{children:`Devcraft\\\\`}),` из `,(0,n.jsx)(t.code,{children:`vendor`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`проверка-установки`,children:`Проверка установки`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ожидается версия `,(0,n.jsx)(t.code,{children:`1.0.1`}),` и PHP `,(0,n.jsx)(t.code,{children:`>=8.3`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`устранение-проблем`,children:`Устранение проблем`}),`
`,(0,n.jsxs)(i,{type:`single`,children:[(0,n.jsx)(r,{title:`Пакет не находится / path repository игнорируется`,children:(0,n.jsxs)(t.p,{children:[`Path repositories объявляются только в `,(0,n.jsx)(t.strong,{children:`корневом`}),` `,(0,n.jsx)(t.code,{children:`composer.json`}),` потребителя. Вложенные пакеты их не наследуют.`]})}),(0,n.jsx)(r,{title:`Слишком старая версия PHP`,children:(0,n.jsxs)(t.p,{children:[`Пакет требует PHP 8.3 или новее. Проверьте `,(0,n.jsx)(t.code,{children:`php -v`}),` и platform-конфиг Composer.`]})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};