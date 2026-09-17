import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить DevCraft Dev Tools через Composer или с диска, требования и типичные ошибки.`,version:`1.1.0`},i=new Date(1789631874e3),a=`

## Системные требования [#системные-требования]

| Что                          | Минимум                                              |
| ---------------------------- | ---------------------------------------------------- |
| PHP                          | **8.3** или новее                                    |
| Composer                     | да                                                   |
| \`psr/cache\`                  | \`^3.0\` (подтянется сам)                              |
| \`marcin-orlowski/lombok-php\` | \`^1.2\` (нужен для \`get*\` / \`set*\` на \`AbstractWith\`) |

Отдельный конфиг-файл библиотеки не нужен: после \`composer require\` пространства имён \`Devcraft\\\` подхватывает автозагрузчик из \`vendor\`.

## Способы установки [#способы-установки]

<Tabs groupId="packageManager" items="['Composer (Packagist)', 'С диска (path)']">
  <Tab value="Composer (Packagist)">
    В корне проекта:

    \`\`\`bash
    composer require devcraftclub/dev-tools:^1.1
    \`\`\`

    Composer сам поставит lombok-php и \`psr/cache\`. В сайтах с DevCraft Admin пакет уже входит в зависимости оболочки — отдельный \`require\` нужен только для **самостоятельных** PHP-проектов или если вы режете зависимости вручную.
  </Tab>

  <Tab value="С диска (path)">
    <Callout type="info" title="Только в корне проекта">
      Репозиторий типа \`path\` прописывают в **корневом** \`composer.json\` того проекта, который ставит пакет. Вложенные пакеты такие настройки не наследуют.
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

    В \`url\` укажите путь к клону репозитория Dev Tools на диске. Для локальной разработки удобен constraint \`^1.1\` или \`@dev\`. Позже path можно заменить обычным Packagist / VCS.
  </Tab>
</Tabs>

## Проверка [#проверка]

\`\`\`bash
composer show devcraftclub/dev-tools
\`\`\`

Ожидается версия \`1.1.0\` (или совместимая в ветке \`^1.1\`) и PHP \`>=8.3\`. Если нужен кэш — в списке зависимостей должен быть \`psr/cache\`.

## Типичные проблемы [#типичные-проблемы]

<Accordions type="single">
  <Accordion title="Пакет не находится / path игнорируется">
    Path-репозиторий объявляют только в корневом \`composer.json\` потребителя. Вложенный пакет его «не видит».
  </Accordion>

  <Accordion title="Слишком старая версия PHP">
    Нужен PHP 8.3+. Проверьте \`php -v\` и блок \`config.platform\` в Composer.
  </Accordion>

  <Accordion title="Нет класса FileCachePool">
    Нужна версия пакета **≥ 1.1.0**. Убедитесь, что \`composer show\` показывает 1.1.x и что \`psr/cache\` установлен.
  </Accordion>
</Accordions>

## Дальше [#дальше]

* [Начало работы](./getting_started) — выбор базового класса и примеры
* [Файловый кэш PSR-6](./guides/file_cache)
* [Атрибуты With](./guides/with_attributes)
`,o={contents:[{heading:`системные-требования`,content:`Что`},{heading:`системные-требования`,content:`Минимум`},{heading:`системные-требования`,content:`PHP`},{heading:`системные-требования`,content:`**8.3** или новее`},{heading:`системные-требования`,content:`Composer`},{heading:`системные-требования`,content:`да`},{heading:`системные-требования`,content:"`psr/cache`"},{heading:`системные-требования`,content:"`^3.0` (подтянется сам)"},{heading:`системные-требования`,content:"`marcin-orlowski/lombok-php`"},{heading:`системные-требования`,content:"`^1.2` (нужен для `get*` / `set*` на `AbstractWith`)"},{heading:`системные-требования`,content:"Отдельный конфиг-файл библиотеки не нужен: после `composer require` пространства имён `Devcraft\\` подхватывает автозагрузчик из `vendor`."},{heading:`способы-установки`,content:`В корне проекта:`},{heading:`способы-установки`,content:"Composer сам поставит lombok-php и `psr/cache`. В сайтах с DevCraft Admin пакет уже входит в зависимости оболочки — отдельный `require` нужен только для **самостоятельных** PHP-проектов или если вы режете зависимости вручную."},{heading:`способы-установки`,content:"Репозиторий типа `path` прописывают в **корневом** `composer.json` того проекта, который ставит пакет. Вложенные пакеты такие настройки не наследуют."},{heading:`способы-установки`,content:`Then:`},{heading:`способы-установки`,content:"В `url` укажите путь к клону репозитория Dev Tools на диске. Для локальной разработки удобен constraint `^1.1` или `@dev`. Позже path можно заменить обычным Packagist / VCS."},{heading:`проверка`,content:"Ожидается версия `1.1.0` (или совместимая в ветке `^1.1`) и PHP `>=8.3`. Если нужен кэш — в списке зависимостей должен быть `psr/cache`."},{heading:`типичные-проблемы`,content:"Path-репозиторий объявляют только в корневом `composer.json` потребителя. Вложенный пакет его «не видит»."},{heading:`типичные-проблемы`,content:"Нужен PHP 8.3+. Проверьте `php -v` и блок `config.platform` в Composer."},{heading:`типичные-проблемы`,content:"Нужна версия пакета **≥ 1.1.0**. Убедитесь, что `composer show` показывает 1.1.x и что `psr/cache` установлен."},{heading:`дальше`,content:`Начало работы — выбор базового класса и примеры`},{heading:`дальше`,content:`Файловый кэш PSR-6`},{heading:`дальше`,content:`Атрибуты With`}],headings:[{id:`системные-требования`,content:`Системные требования`},{id:`способы-установки`,content:`Способы установки`},{id:`проверка`,content:`Проверка`},{id:`типичные-проблемы`,content:`Типичные проблемы`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#системные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Системные требования`})},{depth:2,url:`#способы-установки`,title:(0,n.jsx)(n.Fragment,{children:`Способы установки`})},{depth:2,url:`#проверка`,title:(0,n.jsx)(n.Fragment,{children:`Проверка`})},{depth:2,url:`#типичные-проблемы`,title:(0,n.jsx)(n.Fragment,{children:`Типичные проблемы`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Accordion:r,Accordions:i,Callout:a,Tab:o,Tabs:s}=t;return r||u(`Accordion`,!0),i||u(`Accordions`,!0),a||u(`Callout`,!0),o||u(`Tab`,!0),s||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`системные-требования`,children:`Системные требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`8.3`}),` или новее`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsx)(t.td,{children:`да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`psr/cache`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^3.0`}),` (подтянется сам)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^1.2`}),` (нужен для `,(0,n.jsx)(t.code,{children:`get*`}),` / `,(0,n.jsx)(t.code,{children:`set*`}),` на `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельный конфиг-файл библиотеки не нужен: после `,(0,n.jsx)(t.code,{children:`composer require`}),` пространства имён `,(0,n.jsx)(t.code,{children:`Devcraft\\`}),` подхватывает автозагрузчик из `,(0,n.jsx)(t.code,{children:`vendor`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`способы-установки`,children:`Способы установки`}),`
`,(0,n.jsxs)(s,{groupId:`packageManager`,items:[`Composer (Packagist)`,`С диска (path)`],children:[(0,n.jsxs)(o,{value:`Composer (Packagist)`,children:[(0,n.jsx)(t.p,{children:`В корне проекта:`}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools:^1.1`})]})})})}),(0,n.jsxs)(t.p,{children:[`Composer сам поставит lombok-php и `,(0,n.jsx)(t.code,{children:`psr/cache`}),`. В сайтах с DevCraft Admin пакет уже входит в зависимости оболочки — отдельный `,(0,n.jsx)(t.code,{children:`require`}),` нужен только для `,(0,n.jsx)(t.strong,{children:`самостоятельных`}),` PHP-проектов или если вы режете зависимости вручную.`]})]}),(0,n.jsxs)(o,{value:`С диска (path)`,children:[(0,n.jsx)(a,{type:`info`,title:`Только в корне проекта`,children:(0,n.jsxs)(t.p,{children:[`Репозиторий типа `,(0,n.jsx)(t.code,{children:`path`}),` прописывают в `,(0,n.jsx)(t.strong,{children:`корневом`}),` `,(0,n.jsx)(t.code,{children:`composer.json`}),` того проекта, который ставит пакет. Вложенные пакеты такие настройки не наследуют.`]})}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
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
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` update`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})})]}),(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`url`}),` укажите путь к клону репозитория Dev Tools на диске. Для локальной разработки удобен constraint `,(0,n.jsx)(t.code,{children:`^1.1`}),` или `,(0,n.jsx)(t.code,{children:`@dev`}),`. Позже path можно заменить обычным Packagist / VCS.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`проверка`,children:`Проверка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` show`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/dev-tools`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ожидается версия `,(0,n.jsx)(t.code,{children:`1.1.0`}),` (или совместимая в ветке `,(0,n.jsx)(t.code,{children:`^1.1`}),`) и PHP `,(0,n.jsx)(t.code,{children:`>=8.3`}),`. Если нужен кэш — в списке зависимостей должен быть `,(0,n.jsx)(t.code,{children:`psr/cache`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`типичные-проблемы`,children:`Типичные проблемы`}),`
`,(0,n.jsxs)(i,{type:`single`,children:[(0,n.jsx)(r,{title:`Пакет не находится / path игнорируется`,children:(0,n.jsxs)(t.p,{children:[`Path-репозиторий объявляют только в корневом `,(0,n.jsx)(t.code,{children:`composer.json`}),` потребителя. Вложенный пакет его «не видит».`]})}),(0,n.jsx)(r,{title:`Слишком старая версия PHP`,children:(0,n.jsxs)(t.p,{children:[`Нужен PHP 8.3+. Проверьте `,(0,n.jsx)(t.code,{children:`php -v`}),` и блок `,(0,n.jsx)(t.code,{children:`config.platform`}),` в Composer.`]})}),(0,n.jsx)(r,{title:`Нет класса FileCachePool`,children:(0,n.jsxs)(t.p,{children:[`Нужна версия пакета `,(0,n.jsx)(t.strong,{children:`≥ 1.1.0`}),`. Убедитесь, что `,(0,n.jsx)(t.code,{children:`composer show`}),` показывает 1.1.x и что `,(0,n.jsx)(t.code,{children:`psr/cache`}),` установлен.`]})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./getting_started`,children:`Начало работы`}),` — выбор базового класса и примеры`]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/file_cache`,children:`Файловый кэш PSR-6`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./guides/with_attributes`,children:`Атрибуты With`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};