import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Особые шаги установки плагина «Связи» после общей инструкции DevCraft.`,version:`210.1.0`},i=new Date(1789411081e3),a=`

Как собрать архив, залить содержимое \`upload/&#x60; или поставить zip через менеджер плагинов — в общей инструкции: &#x2A;*[Установка плагинов](/instructions/install_instructions)**.

Ниже — только то, что &#x2A;*специфично для «Связи»**.

## Требования модуля [#требования-модуля]

| Компонент       | Минимум                                           |
| --------------- | ------------------------------------------------- |
| DataLife Engine | **21.0**                                          |
| PHP             | **8.3**                                           |
| DevCraft Admin  | **200.4.1** (\`needplugin\`)                        |
| Права на запись | каталог \`devcraft/cache\` (создание таблиц модуля) |

<Callout type="warn" title="Сначала DevCraft Admin">
  Установите и включите [DevCraft Admin](../../devcraft_admin/install), затем плагин **Connections** (\`Связи\`).
</Callout>

## После установки [#после-установки]

1. В менеджере плагинов DLE должен появиться **Connections** с зависимостью от DevCraft Admin.
2. Откройте раздел **Связи** в админке (\`?mod=dle_connections\`). При первом заходе создадутся таблицы модуля (полный список — в [Начале работы](./getting_started#таблицы-в-базе)).
3. Создайте нужные [типы связей](./guides/relation-types) и при необходимости [категории сборок](./guides/collection-types). Они не появляются сами.
4. Чтобы выключить модуль, отключите плагин в менеджере плагинов DLE (отдельного флажка «Включено» в настройках нет).

После правок PHP в \`devcraft/\` обновите автозагрузку Composer — см. общую инструкцию и [Composer](/instructions/composer).

## Что делает плагин в ядре DLE [#что-делает-плагин-в-ядре-dle]

Установщик подключает вкладку «Связи» к формам добавления и правки новости в админке и тег \`{dc-connections}\` на публичной форме добавления. Правки идут через систему плагинов DLE — вручную править файлы ядра не нужно.

В шаблоне публичной формы добавления новости должен быть тег \`{dc-connections}\` **внутри формы**, чтобы черновик сборок ушёл вместе с сохранением.

## Публичный вывод на полной новости [#публичный-вывод-на-полной-новости]

В шаблон полной новости добавляется вставка модуля. Разбор параметров, фильтров и шаблонов темы — в руководстве [Публичный вывод](./guides/public-include).

## Права доступа [#права-доступа]

Группы, которым открыта админка «Связи», задаются при установке плагина (поле групп раздела; на практике обычно группы администраторов). Группа с id \`1\` всегда допускается оболочкой DevCraft.
`,o={contents:[{heading:void 0,content:"Как собрать архив, залить содержимое `upload/` или поставить zip через менеджер плагинов — в общей инструкции: **Установка плагинов**."},{heading:void 0,content:`Ниже — только то, что &#x2A;*специфично для «Связи»**.`},{heading:`требования-модуля`,content:`Компонент`},{heading:`требования-модуля`,content:`Минимум`},{heading:`требования-модуля`,content:`DataLife Engine`},{heading:`требования-модуля`,content:`**21.0**`},{heading:`требования-модуля`,content:`PHP`},{heading:`требования-модуля`,content:`**8.3**`},{heading:`требования-модуля`,content:`DevCraft Admin`},{heading:`требования-модуля`,content:"**200.4.1** (`needplugin`)"},{heading:`требования-модуля`,content:`Права на запись`},{heading:`требования-модуля`,content:"каталог `devcraft/cache` (создание таблиц модуля)"},{heading:`требования-модуля`,content:"Установите и включите DevCraft Admin, затем плагин **Connections** (`Связи`)."},{heading:`после-установки`,content:`В менеджере плагинов DLE должен появиться **Connections** с зависимостью от DevCraft Admin.`},{heading:`после-установки`,content:"Откройте раздел **Связи** в админке (`?mod=dle_connections`). При первом заходе создадутся таблицы модуля (полный список — в Начале работы)."},{heading:`после-установки`,content:`Создайте нужные типы связей и при необходимости категории сборок. Они не появляются сами.`},{heading:`после-установки`,content:`Чтобы выключить модуль, отключите плагин в менеджере плагинов DLE (отдельного флажка «Включено» в настройках нет).`},{heading:`после-установки`,content:"После правок PHP в `devcraft/` обновите автозагрузку Composer — см. общую инструкцию и Composer."},{heading:`что-делает-плагин-в-ядре-dle`,content:"Установщик подключает вкладку «Связи» к формам добавления и правки новости в админке и тег `{dc-connections}` на публичной форме добавления. Правки идут через систему плагинов DLE — вручную править файлы ядра не нужно."},{heading:`что-делает-плагин-в-ядре-dle`,content:"В шаблоне публичной формы добавления новости должен быть тег `{dc-connections}` **внутри формы**, чтобы черновик сборок ушёл вместе с сохранением."},{heading:`публичный-вывод-на-полной-новости`,content:`В шаблон полной новости добавляется вставка модуля. Разбор параметров, фильтров и шаблонов темы — в руководстве Публичный вывод.`},{heading:`права-доступа`,content:"Группы, которым открыта админка «Связи», задаются при установке плагина (поле групп раздела; на практике обычно группы администраторов). Группа с id `1` всегда допускается оболочкой DevCraft."}],headings:[{id:`требования-модуля`,content:`Требования модуля`},{id:`после-установки`,content:`После установки`},{id:`что-делает-плагин-в-ядре-dle`,content:`Что делает плагин в ядре DLE`},{id:`публичный-вывод-на-полной-новости`,content:`Публичный вывод на полной новости`},{id:`права-доступа`,content:`Права доступа`}]},s=[{depth:2,url:`#требования-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Требования модуля`})},{depth:2,url:`#после-установки`,title:(0,n.jsx)(n.Fragment,{children:`После установки`})},{depth:2,url:`#что-делает-плагин-в-ядре-dle`,title:(0,n.jsx)(n.Fragment,{children:`Что делает плагин в ядре DLE`})},{depth:2,url:`#публичный-вывод-на-полной-новости`,title:(0,n.jsx)(n.Fragment,{children:`Публичный вывод на полной новости`})},{depth:2,url:`#права-доступа`,title:(0,n.jsx)(n.Fragment,{children:`Права доступа`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Как собрать архив, залить содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` или поставить zip через менеджер плагинов — в общей инструкции: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ниже — только то, что `,(0,n.jsx)(t.strong,{children:`специфично для «Связи»`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования-модуля`,children:`Требования модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`200.4.1`}),` (`,(0,n.jsx)(t.code,{children:`needplugin`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Права на запись`}),(0,n.jsxs)(t.td,{children:[`каталог `,(0,n.jsx)(t.code,{children:`devcraft/cache`}),` (создание таблиц модуля)`]})]})]})]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала DevCraft Admin`,children:(0,n.jsxs)(t.p,{children:[`Установите и включите `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`, затем плагин `,(0,n.jsx)(t.strong,{children:`Connections`}),` (`,(0,n.jsx)(t.code,{children:`Связи`}),`).`]})}),`
`,(0,n.jsx)(t.h2,{id:`после-установки`,children:`После установки`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`В менеджере плагинов DLE должен появиться `,(0,n.jsx)(t.strong,{children:`Connections`}),` с зависимостью от DevCraft Admin.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Откройте раздел `,(0,n.jsx)(t.strong,{children:`Связи`}),` в админке (`,(0,n.jsx)(t.code,{children:`?mod=dle_connections`}),`). При первом заходе создадутся таблицы модуля (полный список — в `,(0,n.jsx)(t.a,{href:`./getting_started#%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B2-%D0%B1%D0%B0%D0%B7%D0%B5`,children:`Начале работы`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Создайте нужные `,(0,n.jsx)(t.a,{href:`./guides/relation-types`,children:`типы связей`}),` и при необходимости `,(0,n.jsx)(t.a,{href:`./guides/collection-types`,children:`категории сборок`}),`. Они не появляются сами.`]}),`
`,(0,n.jsx)(t.li,{children:`Чтобы выключить модуль, отключите плагин в менеджере плагинов DLE (отдельного флажка «Включено» в настройках нет).`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`После правок PHP в `,(0,n.jsx)(t.code,{children:`devcraft/`}),` обновите автозагрузку Composer — см. общую инструкцию и `,(0,n.jsx)(t.a,{href:`/instructions/composer`,children:`Composer`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-делает-плагин-в-ядре-dle`,children:`Что делает плагин в ядре DLE`}),`
`,(0,n.jsxs)(t.p,{children:[`Установщик подключает вкладку «Связи» к формам добавления и правки новости в админке и тег `,(0,n.jsx)(t.code,{children:`{dc-connections}`}),` на публичной форме добавления. Правки идут через систему плагинов DLE — вручную править файлы ядра не нужно.`]}),`
`,(0,n.jsxs)(t.p,{children:[`В шаблоне публичной формы добавления новости должен быть тег `,(0,n.jsx)(t.code,{children:`{dc-connections}`}),` `,(0,n.jsx)(t.strong,{children:`внутри формы`}),`, чтобы черновик сборок ушёл вместе с сохранением.`]}),`
`,(0,n.jsx)(t.h2,{id:`публичный-вывод-на-полной-новости`,children:`Публичный вывод на полной новости`}),`
`,(0,n.jsxs)(t.p,{children:[`В шаблон полной новости добавляется вставка модуля. Разбор параметров, фильтров и шаблонов темы — в руководстве `,(0,n.jsx)(t.a,{href:`./guides/public-include`,children:`Публичный вывод`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`права-доступа`,children:`Права доступа`}),`
`,(0,n.jsxs)(t.p,{children:[`Группы, которым открыта админка «Связи», задаются при установке плагина (поле групп раздела; на практике обычно группы администраторов). Группа с id `,(0,n.jsx)(t.code,{children:`1`}),` всегда допускается оболочкой DevCraft.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};