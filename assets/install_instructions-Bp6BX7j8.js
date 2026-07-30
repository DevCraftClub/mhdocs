import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка плагинов`,description:`Как установить почти любой плагин DevCraft для DLE 20.`},i=new Date(1785404498e3),a=`

Большинство плагинов DevCraft ставятся одинаково. Ниже — общая схема. Если у модуля есть своя страница «Установка», смотрите её: там могут быть особые шаги.

## Требования [#требования]

* **DLE** 20.0
* **PHP** 8.3 или новее
* Для модулей на базе DevCraft сначала установите [DevCraft Admin](../dev/dle/devcraft_admin/install)

## Три способа поставить плагин [#три-способа-поставить-плагин]

### 1. Скрипт сборки архива [#1-скрипт-сборки-архива]

В комплекте разработки часто есть \`install_archive.bat\` (Windows) или \`install_archive.sh\` (Linux/macOS).

<Tabs groupId="os" items="['Windows', 'Linux / macOS']">
  <Tab value="Windows">
    Установите [7-Zip](https://www.7-zip.org/download.html), запустите \`install_archive.bat\`, затем загрузите получившийся zip в менеджер плагинов DLE.
  </Tab>

  <Tab value="Linux / macOS">
    \`\`\`bash
    chmod +x install_archive.sh
    ./install_archive.sh
    \`\`\`
  </Tab>
</Tabs>

После скрипта установите собранный архив через **Панель управления → Плагины**.

### 2. Собрать zip самостоятельно [#2-собрать-zip-самостоятельно]

Упакуйте содержимое папки \`upload/\` в zip так, чтобы в **корне** архива были:

* файл \`install.xml\`
* нужные каталоги: обычно \`engine/\`, часто также \`devcraft/\` и шаблоны темы

Формат архива — **zip**. Затем установите его через менеджер плагинов DLE.

### 3. Скопировать файлы на сайт [#3-скопировать-файлы-на-сайт]

Скопируйте содержимое \`upload/\` в корень сайта (структуру папок сохраните), затем установите или включите плагин в менеджере плагинов DLE.

## Composer — библиотеки PHP [#composer--библиотеки-php]

Многие модули DevCraft используют сторонние PHP-библиотеки. Они лежат в папке \`devcraft/\` на сайте.

Обычно зависимости:

* **ставятся сами** скриптом установки, или
* **через интерфейс** DevCraft Admin (раздел работы с Composer / предупреждение в админке, если библиотек не хватает).

В терминал на сервере заходить нужно только если автоматически не получилось (нет shell, ошибка, другая версия PHP). Подробности: [Composer](composer).

## См. также [#см-также]

* [Composer](composer)
* [PHP intl](php_intl)
* [Установка DevCraft Admin](../dev/dle/devcraft_admin/install)
`,o={contents:[{heading:void 0,content:`Большинство плагинов DevCraft ставятся одинаково. Ниже — общая схема. Если у модуля есть своя страница «Установка», смотрите её: там могут быть особые шаги.`},{heading:`требования`,content:`**DLE** 20.0`},{heading:`требования`,content:`**PHP** 8.3 или новее`},{heading:`требования`,content:`Для модулей на базе DevCraft сначала установите DevCraft Admin`},{heading:`1-скрипт-сборки-архива`,content:"В комплекте разработки часто есть `install_archive.bat` (Windows) или `install_archive.sh` (Linux/macOS)."},{heading:`1-скрипт-сборки-архива`,content:"Установите 7-Zip, запустите `install_archive.bat`, затем загрузите получившийся zip в менеджер плагинов DLE."},{heading:`1-скрипт-сборки-архива`,content:`После скрипта установите собранный архив через **Панель управления → Плагины**.`},{heading:`2-собрать-zip-самостоятельно`,content:"Упакуйте содержимое папки `upload/` в zip так, чтобы в **корне** архива были:"},{heading:`2-собрать-zip-самостоятельно`,content:"файл `install.xml`"},{heading:`2-собрать-zip-самостоятельно`,content:"нужные каталоги: обычно `engine/`, часто также `devcraft/` и шаблоны темы"},{heading:`2-собрать-zip-самостоятельно`,content:`Формат архива — **zip**. Затем установите его через менеджер плагинов DLE.`},{heading:`3-скопировать-файлы-на-сайт`,content:"Скопируйте содержимое `upload/` в корень сайта (структуру папок сохраните), затем установите или включите плагин в менеджере плагинов DLE."},{heading:`composer--библиотеки-php`,content:"Многие модули DevCraft используют сторонние PHP-библиотеки. Они лежат в папке `devcraft/` на сайте."},{heading:`composer--библиотеки-php`,content:`Обычно зависимости:`},{heading:`composer--библиотеки-php`,content:`**ставятся сами** скриптом установки, или`},{heading:`composer--библиотеки-php`,content:`**через интерфейс** DevCraft Admin (раздел работы с Composer / предупреждение в админке, если библиотек не хватает).`},{heading:`composer--библиотеки-php`,content:`В терминал на сервере заходить нужно только если автоматически не получилось (нет shell, ошибка, другая версия PHP). Подробности: Composer.`},{heading:`см-также`,content:`Composer`},{heading:`см-также`,content:`PHP intl`},{heading:`см-также`,content:`Установка DevCraft Admin`}],headings:[{id:`требования`,content:`Требования`},{id:`три-способа-поставить-плагин`,content:`Три способа поставить плагин`},{id:`1-скрипт-сборки-архива`,content:`1\\. Скрипт сборки архива`},{id:`2-собрать-zip-самостоятельно`,content:`2\\. Собрать zip самостоятельно`},{id:`3-скопировать-файлы-на-сайт`,content:`3\\. Скопировать файлы на сайт`},{id:`composer--библиотеки-php`,content:`Composer — библиотеки PHP`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#три-способа-поставить-плагин`,title:(0,n.jsx)(n.Fragment,{children:`Три способа поставить плагин`})},{depth:3,url:`#1-скрипт-сборки-архива`,title:(0,n.jsx)(n.Fragment,{children:`1. Скрипт сборки архива`})},{depth:3,url:`#2-собрать-zip-самостоятельно`,title:(0,n.jsx)(n.Fragment,{children:`2. Собрать zip самостоятельно`})},{depth:3,url:`#3-скопировать-файлы-на-сайт`,title:(0,n.jsx)(n.Fragment,{children:`3. Скопировать файлы на сайт`})},{depth:2,url:`#composer--библиотеки-php`,title:(0,n.jsx)(n.Fragment,{children:`Composer — библиотеки PHP`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Tab:r,Tabs:i}=t;return r||u(`Tab`,!0),i||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Большинство плагинов DevCraft ставятся одинаково. Ниже — общая схема. Если у модуля есть своя страница «Установка», смотрите её: там могут быть особые шаги.`}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`DLE`}),` 20.0`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`PHP`}),` 8.3 или новее`]}),`
`,(0,n.jsxs)(t.li,{children:[`Для модулей на базе DevCraft сначала установите `,(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/install`,children:`DevCraft Admin`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`три-способа-поставить-плагин`,children:`Три способа поставить плагин`}),`
`,(0,n.jsx)(t.h3,{id:`1-скрипт-сборки-архива`,children:`1. Скрипт сборки архива`}),`
`,(0,n.jsxs)(t.p,{children:[`В комплекте разработки часто есть `,(0,n.jsx)(t.code,{children:`install_archive.bat`}),` (Windows) или `,(0,n.jsx)(t.code,{children:`install_archive.sh`}),` (Linux/macOS).`]}),`
`,(0,n.jsxs)(i,{groupId:`os`,items:[`Windows`,`Linux / macOS`],children:[(0,n.jsx)(r,{value:`Windows`,children:(0,n.jsxs)(t.p,{children:[`Установите `,(0,n.jsx)(t.a,{href:`https://www.7-zip.org/download.html`,children:`7-Zip`}),`, запустите `,(0,n.jsx)(t.code,{children:`install_archive.bat`}),`, затем загрузите получившийся zip в менеджер плагинов DLE.`]})}),(0,n.jsx)(r,{value:`Linux / macOS`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`chmod`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` +x`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install_archive.sh`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./install_archive.sh`})})]})})})})]}),`
`,(0,n.jsxs)(t.p,{children:[`После скрипта установите собранный архив через `,(0,n.jsx)(t.strong,{children:`Панель управления → Плагины`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`2-собрать-zip-самостоятельно`,children:`2. Собрать zip самостоятельно`}),`
`,(0,n.jsxs)(t.p,{children:[`Упакуйте содержимое папки `,(0,n.jsx)(t.code,{children:`upload/`}),` в zip так, чтобы в `,(0,n.jsx)(t.strong,{children:`корне`}),` архива были:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`файл `,(0,n.jsx)(t.code,{children:`install.xml`})]}),`
`,(0,n.jsxs)(t.li,{children:[`нужные каталоги: обычно `,(0,n.jsx)(t.code,{children:`engine/`}),`, часто также `,(0,n.jsx)(t.code,{children:`devcraft/`}),` и шаблоны темы`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Формат архива — `,(0,n.jsx)(t.strong,{children:`zip`}),`. Затем установите его через менеджер плагинов DLE.`]}),`
`,(0,n.jsx)(t.h3,{id:`3-скопировать-файлы-на-сайт`,children:`3. Скопировать файлы на сайт`}),`
`,(0,n.jsxs)(t.p,{children:[`Скопируйте содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` в корень сайта (структуру папок сохраните), затем установите или включите плагин в менеджере плагинов DLE.`]}),`
`,(0,n.jsx)(t.h2,{id:`composer--библиотеки-php`,children:`Composer — библиотеки PHP`}),`
`,(0,n.jsxs)(t.p,{children:[`Многие модули DevCraft используют сторонние PHP-библиотеки. Они лежат в папке `,(0,n.jsx)(t.code,{children:`devcraft/`}),` на сайте.`]}),`
`,(0,n.jsx)(t.p,{children:`Обычно зависимости:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`ставятся сами`}),` скриптом установки, или`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`через интерфейс`}),` DevCraft Admin (раздел работы с Composer / предупреждение в админке, если библиотек не хватает).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`В терминал на сервере заходить нужно только если автоматически не получилось (нет shell, ошибка, другая версия PHP). Подробности: `,(0,n.jsx)(t.a,{href:`composer`,children:`Composer`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`composer`,children:`Composer`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`php_intl`,children:`PHP intl`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/install`,children:`Установка DevCraft Admin`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};