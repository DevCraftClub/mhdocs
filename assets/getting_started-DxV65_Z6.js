import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор сателлита «Связи: Автоматизация» — правила, шаблоны узоров и запуск в модуле Связи.`,version:`1.0.0`},i=new Date(1789555699e3),a=`

**Связи: Автоматизация** — сателлит плагина [Связи](../../connections/getting_started). Он по правилам категории сборки строит **направленные пары** между новостями в сборке (кто к кому и с каким типом связи). Сама страница новости на сайте runner не вызывает: пары появляются в админке при сохранении состава или по кнопке запуска.

Код модуля лежит рядом с основным пакетом «Связи» (\`devcraft/src/modules/ConnectionsAutomation/\`). Отдельный zip **Connections Automation** включает функцию в менеджере плагинов (активация сателлита), без второй копии исходников и без своего пункта в левом меню DLE. Интерфейс встраивается в раздел «Связи».

## Возможности [#возможности]

* шаблоны узоров: линейный, «звезда», симметричный и произвольный;
* настройки авто-подписей («раньше / позже / связанное») для линейного правила и подписи на сайте, если явной пары нет;
* несколько активных правил на одну категорию; при конфликте — окно выбора и ручной запуск;
* режимы «сохранить ручные правки» и «полная перезапись»;
* автозапуск при сохранении состава или порядка, если активно ровно одно правило;
* пункт **Правила автоматизации** внутри «Связи» при включённом плагине автоматизации;
* дополнительные кнопки и статусы в экранах категорий / запуске автоматизации.

## Требования [#требования]

| Компонент       | Минимум                   |
| --------------- | ------------------------- |
| DataLife Engine | **21.0**                  |
| PHP             | **8.3**                   |
| Плагин «Связи»  | установлен и **активен**  |
| DevCraft Admin  | через «Связи» (≥ 200.4.0) |

## Идентификация [#идентификация]

| Поле           | Значение                                     |
| -------------- | -------------------------------------------- |
| Каталог модуля | \`ConnectionsAutomation\`                      |
| Код            | \`dle_connections_auto\`                       |
| Версия         | \`1.0.0\`                                      |
| Запросы        | \`devcraft/ajax.php?mod=dle_connections_auto\` |

## Таблицы в базе [#таблицы-в-базе]

Схема поднимается **Cycle ORM** по моделям (не SQL в \`install.xml\`). При первом обращении к админке DevCraft появляются:

| Назначение                 | Откуда                                    | Таблица / колонка                                                       |
| -------------------------- | ----------------------------------------- | ----------------------------------------------------------------------- |
| Правила автоматизации      | \`ConnectionAutoRule\`                      | \`{prefix}_dc_connections_auto_rules\`                                    |
| Условия правила            | \`ConnectionAutoCondition\`                 | \`{prefix}_dc_connections_auto_conditions\`                               |
| Признак ручной правки пары | \`ConnectionPairRelation\` (модуль «Связи») | колонка \`is_manual_override\` в \`{prefix}_dc_connections_pair_relations\` |

## Структура файлов [#структура-файлов]

<Files>
  <Folder name="Корень сайта">
    <Folder name="devcraft/src/modules">
      <Folder name="ConnectionsAutomation">
        <File name="manifest.php" />

        <Folder name="Ajax" />

        <Folder name="Models" />

        <Folder name="Pages" />

        <Folder name="Public" />

        <Folder name="Services" />

        <Folder name="templates" />
      </Folder>

      <Folder name="Connections (хост-модуль)" />
    </Folder>
  </Folder>
</Files>

Экран правил: \`?mod=dle_connections&action=rules\` → страница \`RulesPage\`, шаблон \`connectionsautomation/rules.twig\`.

Редактор условий: \`?mod=dle_connections&action=rule_edit&category_id=…&id=…\` → страница правил (скрытый пункт меню, только по ссылке). Подробнее: [Редактор правил и своя схема позиций](./guides/rule-editor).

## Дальше [#дальше]

<Cards>
  <Card title="Установка" href="./install">
    Зависимость от «Связи» и шаги после общей установки
  </Card>

  <Card title="Редактор правил" href="./guides/rule-editor">
    Страница условий, схема «Своя», автозаполнение на новости
  </Card>

  <Card title="История изменений" href="./changelog">
    Версия 1.0.0
  </Card>

  <Card title="Связи — начало работы" href="../../connections/getting_started">
    Хост-модуль сборок и публичный вывод
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:`**Связи: Автоматизация** — сателлит плагина Связи. Он по правилам категории сборки строит **направленные пары** между новостями в сборке (кто к кому и с каким типом связи). Сама страница новости на сайте runner не вызывает: пары появляются в админке при сохранении состава или по кнопке запуска.`},{heading:void 0,content:"Код модуля лежит рядом с основным пакетом «Связи» (`devcraft/src/modules/ConnectionsAutomation/`). Отдельный zip **Connections Automation** включает функцию в менеджере плагинов (активация сателлита), без второй копии исходников и без своего пункта в левом меню DLE. Интерфейс встраивается в раздел «Связи»."},{heading:`возможности`,content:`шаблоны узоров: линейный, «звезда», симметричный и произвольный;`},{heading:`возможности`,content:`настройки авто-подписей («раньше / позже / связанное») для линейного правила и подписи на сайте, если явной пары нет;`},{heading:`возможности`,content:`несколько активных правил на одну категорию; при конфликте — окно выбора и ручной запуск;`},{heading:`возможности`,content:`режимы «сохранить ручные правки» и «полная перезапись»;`},{heading:`возможности`,content:`автозапуск при сохранении состава или порядка, если активно ровно одно правило;`},{heading:`возможности`,content:`пункт **Правила автоматизации** внутри «Связи» при включённом плагине автоматизации;`},{heading:`возможности`,content:`дополнительные кнопки и статусы в экранах категорий / запуске автоматизации.`},{heading:`требования`,content:`Компонент`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**21.0**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3**`},{heading:`требования`,content:`Плагин «Связи»`},{heading:`требования`,content:`установлен и **активен**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`через «Связи» (≥ 200.4.0)`},{heading:`идентификация`,content:`Поле`},{heading:`идентификация`,content:`Значение`},{heading:`идентификация`,content:`Каталог модуля`},{heading:`идентификация`,content:"`ConnectionsAutomation`"},{heading:`идентификация`,content:`Код`},{heading:`идентификация`,content:"`dle_connections_auto`"},{heading:`идентификация`,content:`Версия`},{heading:`идентификация`,content:"`1.0.0`"},{heading:`идентификация`,content:`Запросы`},{heading:`идентификация`,content:"`devcraft/ajax.php?mod=dle_connections_auto`"},{heading:`таблицы-в-базе`,content:"Схема поднимается **Cycle ORM** по моделям (не SQL в `install.xml`). При первом обращении к админке DevCraft появляются:"},{heading:`таблицы-в-базе`,content:`Назначение`},{heading:`таблицы-в-базе`,content:`Откуда`},{heading:`таблицы-в-базе`,content:`Таблица / колонка`},{heading:`таблицы-в-базе`,content:`Правила автоматизации`},{heading:`таблицы-в-базе`,content:"`ConnectionAutoRule`"},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_auto_rules`"},{heading:`таблицы-в-базе`,content:`Условия правила`},{heading:`таблицы-в-базе`,content:"`ConnectionAutoCondition`"},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_auto_conditions`"},{heading:`таблицы-в-базе`,content:`Признак ручной правки пары`},{heading:`таблицы-в-базе`,content:"`ConnectionPairRelation` (модуль «Связи»)"},{heading:`таблицы-в-базе`,content:"колонка `is_manual_override` в `{prefix}_dc_connections_pair_relations`"},{heading:`структура-файлов`,content:`<File name="manifest.php" />`},{heading:`структура-файлов`,content:"Экран правил: `?mod=dle_connections&action=rules` → страница `RulesPage`, шаблон `connectionsautomation/rules.twig`."},{heading:`структура-файлов`,content:"Редактор условий: `?mod=dle_connections&action=rule_edit&category_id=…&id=…` → страница правил (скрытый пункт меню, только по ссылке). Подробнее: Редактор правил и своя схема позиций."},{heading:`дальше`,content:`Зависимость от «Связи» и шаги после общей установки`},{heading:`дальше`,content:`Страница условий, схема «Своя», автозаполнение на новости`},{heading:`дальше`,content:`Версия 1.0.0`},{heading:`дальше`,content:`Хост-модуль сборок и публичный вывод`}],headings:[{id:`возможности`,content:`Возможности`},{id:`требования`,content:`Требования`},{id:`идентификация`,content:`Идентификация`},{id:`таблицы-в-базе`,content:`Таблицы в базе`},{id:`структура-файлов`,content:`Структура файлов`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#идентификация`,title:(0,n.jsx)(n.Fragment,{children:`Идентификация`})},{depth:2,url:`#таблицы-в-базе`,title:(0,n.jsx)(n.Fragment,{children:`Таблицы в базе`})},{depth:2,url:`#структура-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Структура файлов`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Связи: Автоматизация`}),` — сателлит плагина `,(0,n.jsx)(t.a,{href:`../../connections/getting_started`,children:`Связи`}),`. Он по правилам категории сборки строит `,(0,n.jsx)(t.strong,{children:`направленные пары`}),` между новостями в сборке (кто к кому и с каким типом связи). Сама страница новости на сайте runner не вызывает: пары появляются в админке при сохранении состава или по кнопке запуска.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Код модуля лежит рядом с основным пакетом «Связи» (`,(0,n.jsx)(t.code,{children:`devcraft/src/modules/ConnectionsAutomation/`}),`). Отдельный zip `,(0,n.jsx)(t.strong,{children:`Connections Automation`}),` включает функцию в менеджере плагинов (активация сателлита), без второй копии исходников и без своего пункта в левом меню DLE. Интерфейс встраивается в раздел «Связи».`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`шаблоны узоров: линейный, «звезда», симметричный и произвольный;`}),`
`,(0,n.jsx)(t.li,{children:`настройки авто-подписей («раньше / позже / связанное») для линейного правила и подписи на сайте, если явной пары нет;`}),`
`,(0,n.jsx)(t.li,{children:`несколько активных правил на одну категорию; при конфликте — окно выбора и ручной запуск;`}),`
`,(0,n.jsx)(t.li,{children:`режимы «сохранить ручные правки» и «полная перезапись»;`}),`
`,(0,n.jsx)(t.li,{children:`автозапуск при сохранении состава или порядка, если активно ровно одно правило;`}),`
`,(0,n.jsxs)(t.li,{children:[`пункт `,(0,n.jsx)(t.strong,{children:`Правила автоматизации`}),` внутри «Связи» при включённом плагине автоматизации;`]}),`
`,(0,n.jsx)(t.li,{children:`дополнительные кнопки и статусы в экранах категорий / запуске автоматизации.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Плагин «Связи»`}),(0,n.jsxs)(t.td,{children:[`установлен и `,(0,n.jsx)(t.strong,{children:`активен`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:`через «Связи» (≥ 200.4.0)`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`идентификация`,children:`Идентификация`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Каталог модуля`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ConnectionsAutomation`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Код`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`dle_connections_auto`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`1.0.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Запросы`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/ajax.php?mod=dle_connections_auto`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`таблицы-в-базе`,children:`Таблицы в базе`}),`
`,(0,n.jsxs)(t.p,{children:[`Схема поднимается `,(0,n.jsx)(t.strong,{children:`Cycle ORM`}),` по моделям (не SQL в `,(0,n.jsx)(t.code,{children:`install.xml`}),`). При первом обращении к админке DevCraft появляются:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Назначение`}),(0,n.jsx)(t.th,{children:`Откуда`}),(0,n.jsx)(t.th,{children:`Таблица / колонка`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Правила автоматизации`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ConnectionAutoRule`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_auto_rules`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Условия правила`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ConnectionAutoCondition`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_auto_conditions`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Признак ручной правки пары`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`ConnectionPairRelation`}),` (модуль «Связи»)`]}),(0,n.jsxs)(t.td,{children:[`колонка `,(0,n.jsx)(t.code,{children:`is_manual_override`}),` в `,(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_pair_relations`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`структура-файлов`,children:`Структура файлов`}),`
`,(0,n.jsx)(o,{children:(0,n.jsx)(s,{name:`Корень сайта`,defaultOpen:!0,children:(0,n.jsxs)(s,{name:`devcraft/src/modules`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`ConnectionsAutomation`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(s,{name:`Ajax`}),(0,n.jsx)(s,{name:`Models`}),(0,n.jsx)(s,{name:`Pages`}),(0,n.jsx)(s,{name:`Public`}),(0,n.jsx)(s,{name:`Services`}),(0,n.jsx)(s,{name:`templates`})]}),(0,n.jsx)(s,{name:`Connections (хост-модуль)`})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Экран правил: `,(0,n.jsx)(t.code,{children:`?mod=dle_connections&action=rules`}),` → страница `,(0,n.jsx)(t.code,{children:`RulesPage`}),`, шаблон `,(0,n.jsx)(t.code,{children:`connectionsautomation/rules.twig`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Редактор условий: `,(0,n.jsx)(t.code,{children:`?mod=dle_connections&action=rule_edit&category_id=…&id=…`}),` → страница правил (скрытый пункт меню, только по ссылке). Подробнее: `,(0,n.jsx)(t.a,{href:`./guides/rule-editor`,children:`Редактор правил и своя схема позиций`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Зависимость от «Связи» и шаги после общей установки`})}),(0,n.jsx)(r,{title:`Редактор правил`,href:`./guides/rule-editor`,children:(0,n.jsx)(t.p,{children:`Страница условий, схема «Своя», автозаполнение на новости`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Версия 1.0.0`})}),(0,n.jsx)(r,{title:`Связи — начало работы`,href:`../../connections/getting_started`,children:(0,n.jsx)(t.p,{children:`Хост-модуль сборок и публичный вывод`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};