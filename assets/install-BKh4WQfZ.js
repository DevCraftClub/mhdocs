import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Особые шаги установки «Связи: Автоматизация» после общей инструкции DevCraft.`,version:`1.0.0`},i=new Date(1789554716e3),a=`

Как собрать архив и поставить zip через менеджер плагинов — в общей инструкции: &#x2A;*[Установка плагинов](/instructions/install_instructions)**.

Ниже — только то, что **специфично для автоматизации**.

## Требования модуля [#требования-модуля]

| Компонент                        | Минимум                                 |
| -------------------------------- | --------------------------------------- |
| DataLife Engine                  | **21.0**                                |
| PHP                              | **8.3**                                 |
| Плагин **Connections** («Связи») | установлен и **активен** (\`needplugin\`) |
| DevCraft Admin                   | через «Связи»                           |

<Callout type="warn" title="Сначала «Связи»">
  Без активного плагина **Connections** установка автоматизации не пройдёт. Сначала [установите «Связи»](../../connections/install).
</Callout>

## Модель поставки [#модель-поставки]

| Пакет                    | Что содержит                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------ |
| **Связи** (Connections)  | Хост-модуль и код \`ConnectionsAutomation\` на диске                                   |
| **Связи: Автоматизация** | Zip плагина DLE: \`install.xml\`, локали; **нужно** установить через менеджер плагинов |

Пока плагин автоматизации не установлен и не включён (\`active = 1\`), интерфейс запуска и правил в «Связи» остаётся выключенным.

## После установки [#после-установки]

1. Убедитесь, что **Connections** активен.
2. Установите архив **Connections Automation** через менеджер плагинов.
3. Включите плагин в списке (должен быть активен).
4. В разделе «Связи» появится пункт **Правила автоматизации** (\`?mod=dle_connections&action=rules\`) — отдельного пункта в левом меню DLE нет.
5. Таблицы и колонка ручных правок подтянутся Cycle ORM по моделям при первом заходе в админку DevCraft — список в [Начале работы](./getting_started#таблицы-в-базе).

После правок PHP в \`devcraft/\` обновите автозагрузку Composer по общей инструкции.
`,o={contents:[{heading:void 0,content:`Как собрать архив и поставить zip через менеджер плагинов — в общей инструкции: **Установка плагинов**.`},{heading:void 0,content:`Ниже — только то, что **специфично для автоматизации**.`},{heading:`требования-модуля`,content:`Компонент`},{heading:`требования-модуля`,content:`Минимум`},{heading:`требования-модуля`,content:`DataLife Engine`},{heading:`требования-модуля`,content:`**21.0**`},{heading:`требования-модуля`,content:`PHP`},{heading:`требования-модуля`,content:`**8.3**`},{heading:`требования-модуля`,content:`Плагин **Connections** («Связи»)`},{heading:`требования-модуля`,content:"установлен и **активен** (`needplugin`)"},{heading:`требования-модуля`,content:`DevCraft Admin`},{heading:`требования-модуля`,content:`через «Связи»`},{heading:`требования-модуля`,content:`Без активного плагина **Connections** установка автоматизации не пройдёт. Сначала установите «Связи».`},{heading:`модель-поставки`,content:`Пакет`},{heading:`модель-поставки`,content:`Что содержит`},{heading:`модель-поставки`,content:`**Связи** (Connections)`},{heading:`модель-поставки`,content:"Хост-модуль и код `ConnectionsAutomation` на диске"},{heading:`модель-поставки`,content:`**Связи: Автоматизация**`},{heading:`модель-поставки`,content:"Zip плагина DLE: `install.xml`, локали; **нужно** установить через менеджер плагинов"},{heading:`модель-поставки`,content:"Пока плагин автоматизации не установлен и не включён (`active = 1`), интерфейс запуска и правил в «Связи» остаётся выключенным."},{heading:`после-установки`,content:`Убедитесь, что **Connections** активен.`},{heading:`после-установки`,content:`Установите архив **Connections Automation** через менеджер плагинов.`},{heading:`после-установки`,content:`Включите плагин в списке (должен быть активен).`},{heading:`после-установки`,content:"В разделе «Связи» появится пункт **Правила автоматизации** (`?mod=dle_connections&action=rules`) — отдельного пункта в левом меню DLE нет."},{heading:`после-установки`,content:`Таблицы и колонка ручных правок подтянутся Cycle ORM по моделям при первом заходе в админку DevCraft — список в Начале работы.`},{heading:`после-установки`,content:"После правок PHP в `devcraft/` обновите автозагрузку Composer по общей инструкции."}],headings:[{id:`требования-модуля`,content:`Требования модуля`},{id:`модель-поставки`,content:`Модель поставки`},{id:`после-установки`,content:`После установки`}]},s=[{depth:2,url:`#требования-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Требования модуля`})},{depth:2,url:`#модель-поставки`,title:(0,n.jsx)(n.Fragment,{children:`Модель поставки`})},{depth:2,url:`#после-установки`,title:(0,n.jsx)(n.Fragment,{children:`После установки`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Как собрать архив и поставить zip через менеджер плагинов — в общей инструкции: `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`/instructions/install_instructions`,children:`Установка плагинов`})}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ниже — только то, что `,(0,n.jsx)(t.strong,{children:`специфично для автоматизации`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования-модуля`,children:`Требования модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Плагин `,(0,n.jsx)(t.strong,{children:`Connections`}),` («Связи»)`]}),(0,n.jsxs)(t.td,{children:[`установлен и `,(0,n.jsx)(t.strong,{children:`активен`}),` (`,(0,n.jsx)(t.code,{children:`needplugin`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:`через «Связи»`})]})]})]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`Сначала «Связи»`,children:(0,n.jsxs)(t.p,{children:[`Без активного плагина `,(0,n.jsx)(t.strong,{children:`Connections`}),` установка автоматизации не пройдёт. Сначала `,(0,n.jsx)(t.a,{href:`../../connections/install`,children:`установите «Связи»`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`модель-поставки`,children:`Модель поставки`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Пакет`}),(0,n.jsx)(t.th,{children:`Что содержит`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`Связи`}),` (Connections)`]}),(0,n.jsxs)(t.td,{children:[`Хост-модуль и код `,(0,n.jsx)(t.code,{children:`ConnectionsAutomation`}),` на диске`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Связи: Автоматизация`})}),(0,n.jsxs)(t.td,{children:[`Zip плагина DLE: `,(0,n.jsx)(t.code,{children:`install.xml`}),`, локали; `,(0,n.jsx)(t.strong,{children:`нужно`}),` установить через менеджер плагинов`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Пока плагин автоматизации не установлен и не включён (`,(0,n.jsx)(t.code,{children:`active = 1`}),`), интерфейс запуска и правил в «Связи» остаётся выключенным.`]}),`
`,(0,n.jsx)(t.h2,{id:`после-установки`,children:`После установки`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что `,(0,n.jsx)(t.strong,{children:`Connections`}),` активен.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Установите архив `,(0,n.jsx)(t.strong,{children:`Connections Automation`}),` через менеджер плагинов.`]}),`
`,(0,n.jsx)(t.li,{children:`Включите плагин в списке (должен быть активен).`}),`
`,(0,n.jsxs)(t.li,{children:[`В разделе «Связи» появится пункт `,(0,n.jsx)(t.strong,{children:`Правила автоматизации`}),` (`,(0,n.jsx)(t.code,{children:`?mod=dle_connections&action=rules`}),`) — отдельного пункта в левом меню DLE нет.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Таблицы и колонка ручных правок подтянутся Cycle ORM по моделям при первом заходе в админку DevCraft — список в `,(0,n.jsx)(t.a,{href:`./getting_started#%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B-%D0%B2-%D0%B1%D0%B0%D0%B7%D0%B5`,children:`Начале работы`}),`.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`После правок PHP в `,(0,n.jsx)(t.code,{children:`devcraft/`}),` обновите автозагрузку Composer по общей инструкции.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};