import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Как поставить UserLists: общая схема плагинов, install.xml, первый запуск.`,version:`200.1.0`},i=new Date(1789913881e3),a=`

<Callout type="warn" title="Сначала DevCraft Admin">
  Установите и включите [DevCraft Admin](../../devcraft_admin/install), затем плагин **UserLists**.
</Callout>

Как собрать архив, залить содержимое \`upload/&#x60; или поставить zip через менеджер плагинов — в общей инструкции: &#x2A;*[Установка плагинов](/instructions/install_instructions)**.

Ниже — только то, что **специфично для UserLists**.

## Требования модуля [#требования-модуля]

| Компонент       | Минимум                                           |
| --------------- | ------------------------------------------------- |
| DataLife Engine | **21.0**                                          |
| PHP             | **8.3**                                           |
| DevCraft Admin  | **200.4.1** (\`needplugin\`)                        |
| Права на запись | каталог \`devcraft/cache\` (создание таблиц модуля) |

В пакете есть \`upload/install.xml\`. Отдельный \`register_plugin.sql\` **не** используется.

## После установки [#после-установки]

1. В менеджере плагинов DLE должен появиться **UserLists** с зависимостью от DevCraft Admin.
2. Откройте \`?mod=user_lists\`. При первом заходе создадутся таблицы \`dc_user_lists*\` и сиды админ-списков.
3. Настройте [права групп](guides/lists-and-visibility) и настройки (гости, текст кнопки, запрещённые слова).
4. Подключите вставки в [теме](guides/theme). В \`main.tpl\` нужны теги \`{devcraft-header}\` и \`{devcraft-scripts}\`.

После правок PHP в \`devcraft/\` обновите автозагрузку Composer — см. общую инструкцию и [Composer](/instructions/composer). Обычно библиотеки ставятся сами.

## Что делает плагин в ядре DLE [#что-делает-плагин-в-ядре-dle]

Ядро ради «Избранного» не патчится. В теме — только includes контроллера. Глобальные стили и скрипты модуля — [публичные ресурсы оболочки](../../devcraft_admin/200.4.1/guides/public_assets).

## Если на сайте ещё старые пути [#если-на-сайте-ещё-старые-пути]

1. Замените в теме \`engine/modules/devcraft/user_lists.php\` и \`user_lists_page.php\` на includes из [Подключение в теме](guides/theme).
2. Уберите include с \`focus=css\` / \`focus=js\` и файлы \`user_lists.css\` / \`user_lists.js\` из каталога темы.
3. Обновите файлы пакета (менеджер плагинов или содержимое \`upload/\`).
4. Удалите с сайта \`engine/modules/devcraft/user_lists.php\` и \`user_lists_page.php\`, если они остались.

## См. также [#см-также]

* [Начало работы](getting_started)
* [Подключение в теме](guides/theme)
* [Списки и видимость](guides/lists-and-visibility)
`,o={contents:[{heading:void 0,content:`Установите и включите DevCraft Admin, затем плагин **UserLists**.`},{heading:void 0,content:"Как собрать архив, залить содержимое `upload/` или поставить zip через менеджер плагинов — в общей инструкции: **Установка плагинов**."},{heading:void 0,content:`Ниже — только то, что **специфично для UserLists**.`},{heading:`требования-модуля`,content:`Компонент`},{heading:`требования-модуля`,content:`Минимум`},{heading:`требования-модуля`,content:`DataLife Engine`},{heading:`требования-модуля`,content:`**21.0**`},{heading:`требования-модуля`,content:`PHP`},{heading:`требования-модуля`,content:`**8.3**`},{heading:`требования-модуля`,content:`DevCraft Admin`},{heading:`требования-модуля`,content:"**200.4.1** (`needplugin`)"},{heading:`требования-модуля`,content:`Права на запись`},{heading:`требования-модуля`,content:"каталог `devcraft/cache` (создание таблиц модуля)"},{heading:`требования-модуля`,content:"В пакете есть `upload/install.xml`. Отдельный `register_plugin.sql` **не** используется."},{heading:`после-установки`,content:`В менеджере плагинов DLE должен появиться **UserLists** с зависимостью от DevCraft Admin.`},{heading:`после-установки`,content:"Откройте `?mod=user_lists`. При первом заходе создадутся таблицы `dc_user_lists*` и сиды админ-списков."},{heading:`после-установки`,content:`Настройте права групп и настройки (гости, текст кнопки, запрещённые слова).`},{heading:`после-установки`,content:"Подключите вставки в теме. В `main.tpl` нужны теги `{devcraft-header}` и `{devcraft-scripts}`."},{heading:`после-установки`,content:"После правок PHP в `devcraft/` обновите автозагрузку Composer — см. общую инструкцию и Composer. Обычно библиотеки ставятся сами."},{heading:`что-делает-плагин-в-ядре-dle`,content:`Ядро ради «Избранного» не патчится. В теме — только includes контроллера. Глобальные стили и скрипты модуля — публичные ресурсы оболочки.`},{heading:`если-на-сайте-ещё-старые-пути`,content:"Замените в теме `engine/modules/devcraft/user_lists.php` и `user_lists_page.php` на includes из Подключение в теме."},{heading:`если-на-сайте-ещё-старые-пути`,content:"Уберите include с `focus=css` / `focus=js` и файлы `user_lists.css` / `user_lists.js` из каталога темы."},{heading:`если-на-сайте-ещё-старые-пути`,content:"Обновите файлы пакета (менеджер плагинов или содержимое `upload/`)."},{heading:`если-на-сайте-ещё-старые-пути`,content:"Удалите с сайта `engine/modules/devcraft/user_lists.php` и `user_lists_page.php`, если они остались."},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`Подключение в теме`},{heading:`см-также`,content:`Списки и видимость`}],headings:[{id:`требования-модуля`,content:`Требования модуля`},{id:`после-установки`,content:`После установки`},{id:`что-делает-плагин-в-ядре-dle`,content:`Что делает плагин в ядре DLE`},{id:`если-на-сайте-ещё-старые-пути`,content:`Если на сайте ещё старые пути`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#требования-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Требования модуля`})},{depth:2,url:`#после-установки`,title:(0,n.jsx)(n.Fragment,{children:`После установки`})},{depth:2,url:`#что-делает-плагин-в-ядре-dle`,title:(0,n.jsx)(n.Fragment,{children:`Что делает плагин в ядре DLE`})},{depth:2,url:`#если-на-сайте-ещё-старые-пути`,title:(0,n.jsx)(n.Fragment,{children:`Если на сайте ещё старые пути`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Сначала DevCraft Admin`,children:(0,n.jsxs)(t.p,{children:[`Установите и включите `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`, затем плагин `,(0,n.jsx)(t.strong,{children:`UserLists`}),`.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`Как собрать архив, залить содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` или поставить zip через менеджер плагинов — в общей инструкции: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ниже — только то, что `,(0,n.jsx)(t.strong,{children:`специфично для UserLists`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования-модуля`,children:`Требования модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`200.4.1`}),` (`,(0,n.jsx)(t.code,{children:`needplugin`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Права на запись`}),(0,n.jsxs)(t.td,{children:[`каталог `,(0,n.jsx)(t.code,{children:`devcraft/cache`}),` (создание таблиц модуля)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`В пакете есть `,(0,n.jsx)(t.code,{children:`upload/install.xml`}),`. Отдельный `,(0,n.jsx)(t.code,{children:`register_plugin.sql`}),` `,(0,n.jsx)(t.strong,{children:`не`}),` используется.`]}),`
`,(0,n.jsx)(t.h2,{id:`после-установки`,children:`После установки`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`В менеджере плагинов DLE должен появиться `,(0,n.jsx)(t.strong,{children:`UserLists`}),` с зависимостью от DevCraft Admin.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=user_lists`}),`. При первом заходе создадутся таблицы `,(0,n.jsx)(t.code,{children:`dc_user_lists*`}),` и сиды админ-списков.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настройте `,(0,n.jsx)(t.a,{href:`guides/lists-and-visibility`,children:`права групп`}),` и настройки (гости, текст кнопки, запрещённые слова).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Подключите вставки в `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`теме`}),`. В `,(0,n.jsx)(t.code,{children:`main.tpl`}),` нужны теги `,(0,n.jsx)(t.code,{children:`{devcraft-header}`}),` и `,(0,n.jsx)(t.code,{children:`{devcraft-scripts}`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`После правок PHP в `,(0,n.jsx)(t.code,{children:`devcraft/`}),` обновите автозагрузку Composer — см. общую инструкцию и `,(0,n.jsx)(t.a,{href:`/instructions/composer`,children:`Composer`}),`. Обычно библиотеки ставятся сами.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-делает-плагин-в-ядре-dle`,children:`Что делает плагин в ядре DLE`}),`
`,(0,n.jsxs)(t.p,{children:[`Ядро ради «Избранного» не патчится. В теме — только includes контроллера. Глобальные стили и скрипты модуля — `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/200.4.1/guides/public_assets`,children:`публичные ресурсы оболочки`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`если-на-сайте-ещё-старые-пути`,children:`Если на сайте ещё старые пути`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Замените в теме `,(0,n.jsx)(t.code,{children:`engine/modules/devcraft/user_lists.php`}),` и `,(0,n.jsx)(t.code,{children:`user_lists_page.php`}),` на includes из `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Уберите include с `,(0,n.jsx)(t.code,{children:`focus=css`}),` / `,(0,n.jsx)(t.code,{children:`focus=js`}),` и файлы `,(0,n.jsx)(t.code,{children:`user_lists.css`}),` / `,(0,n.jsx)(t.code,{children:`user_lists.js`}),` из каталога темы.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Обновите файлы пакета (менеджер плагинов или содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Удалите с сайта `,(0,n.jsx)(t.code,{children:`engine/modules/devcraft/user_lists.php`}),` и `,(0,n.jsx)(t.code,{children:`user_lists_page.php`}),`, если они остались.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/lists-and-visibility`,children:`Списки и видимость`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};