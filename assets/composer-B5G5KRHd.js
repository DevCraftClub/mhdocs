import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Composer — управление зависимостями`,description:`Как установить PHP-библиотеки для модулей DevCraft через Composer.`},i=new Date(1786544989e3),a=`

**Composer** — программа, которая скачивает и обновляет PHP-библиотеки (зависимости) для сайта. У модулей DevCraft они лежат в папке \`devcraft/\` в корне сайта.

Обычно зависимости ставятся сами (скриптом установки или через интерфейс DevCraft Admin). Эта страница нужна, если требуется сделать это вручную или разобраться с ошибкой про версию PHP.

## Что должно быть на сервере [#что-должно-быть-на-сервере]

1. В терминале команда \`php -v\` должна показывать PHP **8.3** или новее.
2. Нужны обычные расширения PHP (в том числе связанные с работой сайта). См. также [PHP intl](php_intl).
3. Установлен Composer:

<Tabs groupId="os" items="['Linux / macOS', 'Windows']">
  <Tab value="Linux / macOS">
    [Инструкция для Linux/Unix/macOS](https://getcomposer.org/doc/00-intro#installation-linux-unix-macos)
  </Tab>

  <Tab value="Windows">
    [Инструкция для Windows](https://getcomposer.org/doc/00-intro#installation-windows) или [composer.phar](https://getcomposer.org/download/)
  </Tab>
</Tabs>

## Установка зависимостей [#установка-зависимостей]

Перейдите в каталог \`devcraft\` в корне сайта и выполните:

\`\`\`bash
cd devcraft
composer install --no-dev
\`\`\`

Composer прочитает \`composer.json\` / \`composer.lock\` и создаст папку \`vendor/\`. Без неё DevCraft Admin и модули на его базе не заработают.

После добавления новых PHP-классов модуля иногда достаточно обновить автозагрузку:

\`\`\`bash
composer dump-autoload
\`\`\`

Подробнее об установке админки: [Установка DevCraft Admin](../dev/dle/devcraft_admin/install).

### Если версии PHP на сервере разные [#если-версии-php-на-сервере-разные]

Бывает, что панель хостинга и сайт используют разный PHP. Тогда Composer может взять «не ту» версию и остановиться с ошибкой вроде: в \`composer.json\` нужен PHP ^8.3, а в терминале — 8.1.

**Что можно сделать:**

1. Скачать готовый архив зависимостей [composer\\_data.zip](https://assets.devcraft.club/composer_data.zip) (если он актуален для вашей версии) и залить в корень сайта с сохранением структуры папок.
2. Либо запустить Composer с игнорированием проверки платформы (только если понимаете риски):

\`\`\`bash
composer install --no-dev --ignore-platform-req=php
\`\`\`

<Callout type="info" title="Важно">
  Дальнейшие команды Composer в такой ситуации тоже выполняйте с флагом \`--ignore-platform-req=php\`.
</Callout>

## См. также [#см-также]

* [Установка плагинов](install_instructions)
* [Установка DevCraft Admin](../dev/dle/devcraft_admin/install)
* [PHP intl](php_intl)
`,o={contents:[{heading:void 0,content:"**Composer** — программа, которая скачивает и обновляет PHP-библиотеки (зависимости) для сайта. У модулей DevCraft они лежат в папке `devcraft/` в корне сайта."},{heading:void 0,content:`Обычно зависимости ставятся сами (скриптом установки или через интерфейс DevCraft Admin). Эта страница нужна, если требуется сделать это вручную или разобраться с ошибкой про версию PHP.`},{heading:`что-должно-быть-на-сервере`,content:"В терминале команда `php -v` должна показывать PHP **8.3** или новее."},{heading:`что-должно-быть-на-сервере`,content:`Нужны обычные расширения PHP (в том числе связанные с работой сайта). См. также PHP intl.`},{heading:`что-должно-быть-на-сервере`,content:`Установлен Composer:`},{heading:`что-должно-быть-на-сервере`,content:`Инструкция для Linux/Unix/macOS`},{heading:`что-должно-быть-на-сервере`,content:`Инструкция для Windows или composer.phar`},{heading:`установка-зависимостей`,content:"Перейдите в каталог `devcraft` в корне сайта и выполните:"},{heading:`установка-зависимостей`,content:"Composer прочитает `composer.json` / `composer.lock` и создаст папку `vendor/`. Без неё DevCraft Admin и модули на его базе не заработают."},{heading:`установка-зависимостей`,content:`После добавления новых PHP-классов модуля иногда достаточно обновить автозагрузку:`},{heading:`установка-зависимостей`,content:`Подробнее об установке админки: Установка DevCraft Admin.`},{heading:`если-версии-php-на-сервере-разные`,content:"Бывает, что панель хостинга и сайт используют разный PHP. Тогда Composer может взять «не ту» версию и остановиться с ошибкой вроде: в `composer.json` нужен PHP ^8.3, а в терминале — 8.1."},{heading:`если-версии-php-на-сервере-разные`,content:`**Что можно сделать:**`},{heading:`если-версии-php-на-сервере-разные`,content:`Скачать готовый архив зависимостей composer\\_data.zip (если он актуален для вашей версии) и залить в корень сайта с сохранением структуры папок.`},{heading:`если-версии-php-на-сервере-разные`,content:`Либо запустить Composer с игнорированием проверки платформы (только если понимаете риски):`},{heading:`если-версии-php-на-сервере-разные`,content:"Дальнейшие команды Composer в такой ситуации тоже выполняйте с флагом `--ignore-platform-req=php`."},{heading:`см-также`,content:`Установка плагинов`},{heading:`см-также`,content:`Установка DevCraft Admin`},{heading:`см-также`,content:`PHP intl`}],headings:[{id:`что-должно-быть-на-сервере`,content:`Что должно быть на сервере`},{id:`установка-зависимостей`,content:`Установка зависимостей`},{id:`если-версии-php-на-сервере-разные`,content:`Если версии PHP на сервере разные`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#что-должно-быть-на-сервере`,title:(0,n.jsx)(n.Fragment,{children:`Что должно быть на сервере`})},{depth:2,url:`#установка-зависимостей`,title:(0,n.jsx)(n.Fragment,{children:`Установка зависимостей`})},{depth:3,url:`#если-версии-php-на-сервере-разные`,title:(0,n.jsx)(n.Fragment,{children:`Если версии PHP на сервере разные`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r,Tab:i,Tabs:a}=t;return r||u(`Callout`,!0),i||u(`Tab`,!0),a||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Composer`}),` — программа, которая скачивает и обновляет PHP-библиотеки (зависимости) для сайта. У модулей DevCraft они лежат в папке `,(0,n.jsx)(t.code,{children:`devcraft/`}),` в корне сайта.`]}),`
`,(0,n.jsx)(t.p,{children:`Обычно зависимости ставятся сами (скриптом установки или через интерфейс DevCraft Admin). Эта страница нужна, если требуется сделать это вручную или разобраться с ошибкой про версию PHP.`}),`
`,(0,n.jsx)(t.h2,{id:`что-должно-быть-на-сервере`,children:`Что должно быть на сервере`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`В терминале команда `,(0,n.jsx)(t.code,{children:`php -v`}),` должна показывать PHP `,(0,n.jsx)(t.strong,{children:`8.3`}),` или новее.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Нужны обычные расширения PHP (в том числе связанные с работой сайта). См. также `,(0,n.jsx)(t.a,{href:`php_intl`,children:`PHP intl`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Установлен Composer:`}),`
`]}),`
`,(0,n.jsxs)(a,{groupId:`os`,items:[`Linux / macOS`,`Windows`],children:[(0,n.jsx)(i,{value:`Linux / macOS`,children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:`https://getcomposer.org/doc/00-intro#installation-linux-unix-macos`,children:`Инструкция для Linux/Unix/macOS`})})}),(0,n.jsx)(i,{value:`Windows`,children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:`https://getcomposer.org/doc/00-intro#installation-windows`,children:`Инструкция для Windows`}),` или `,(0,n.jsx)(t.a,{href:`https://getcomposer.org/download/`,children:`composer.phar`})]})})]}),`
`,(0,n.jsx)(t.h2,{id:`установка-зависимостей`,children:`Установка зависимостей`}),`
`,(0,n.jsxs)(t.p,{children:[`Перейдите в каталог `,(0,n.jsx)(t.code,{children:`devcraft`}),` в корне сайта и выполните:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraft`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --no-dev`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Composer прочитает `,(0,n.jsx)(t.code,{children:`composer.json`}),` / `,(0,n.jsx)(t.code,{children:`composer.lock`}),` и создаст папку `,(0,n.jsx)(t.code,{children:`vendor/`}),`. Без неё DevCraft Admin и модули на его базе не заработают.`]}),`
`,(0,n.jsx)(t.p,{children:`После добавления новых PHP-классов модуля иногда достаточно обновить автозагрузку:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Подробнее об установке админки: `,(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/install`,children:`Установка DevCraft Admin`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`если-версии-php-на-сервере-разные`,children:`Если версии PHP на сервере разные`}),`
`,(0,n.jsxs)(t.p,{children:[`Бывает, что панель хостинга и сайт используют разный PHP. Тогда Composer может взять «не ту» версию и остановиться с ошибкой вроде: в `,(0,n.jsx)(t.code,{children:`composer.json`}),` нужен PHP ^8.3, а в терминале — 8.1.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Что можно сделать:`})}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачать готовый архив зависимостей `,(0,n.jsx)(t.a,{href:`https://assets.devcraft.club/composer_data.zip`,children:`composer_data.zip`}),` (если он актуален для вашей версии) и залить в корень сайта с сохранением структуры папок.`]}),`
`,(0,n.jsx)(t.li,{children:`Либо запустить Composer с игнорированием проверки платформы (только если понимаете риски):`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --no-dev`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --ignore-platform-req=php`})]})})})}),`
`,(0,n.jsx)(r,{type:`info`,title:`Важно`,children:(0,n.jsxs)(t.p,{children:[`Дальнейшие команды Composer в такой ситуации тоже выполняйте с флагом `,(0,n.jsx)(t.code,{children:`--ignore-platform-req=php`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`install_instructions`,children:`Установка плагинов`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/install`,children:`Установка DevCraft Admin`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`php_intl`,children:`PHP intl`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};