import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор плагина «Связи»: сборки новостей, админка и вывод на сайте.`,version:`210.1.0`},i=new Date(1789477657e3),a=`

**Связи** — плагин для DataLife Engine, который собирает новости в **сборки** (группы связанных материалов) и показывает их читателю на полной новости. Вместо разрозненных «похожих» блоков вы получаете единый раздел в админке: дерево сборок, вкладку на форме новости и готовый вывод в теме сайта.

Плагин ставится поверх [DevCraft Admin](../../devcraft_admin/getting_started) и живёт в каталоге модуля \`Connections\`. Редактор может перетаскивать новости в нужном порядке, задавать тип связи и скрывать отдельные элементы. На сайте текущая новость из списка не дублируется; пустые и скрытые позиции не показываются. Дополнительно можно подключить сателлит [Связи: Автоматизация](../../connections_automation/getting_started) — он сам строит направленные пары по правилам категории сборки.

## Возможности [#возможности]

* дерево сборок и элементов в админке с перетаскиванием порядка;
* вкладка «Связи» на формах добавления и правки новости;
* каталог **типов связей** и **категорий сборок**;
* публичный вывод через вставку в шаблон полной новости;
* форма связей на публичном добавлении новости (тег \`{dc-connections}\` в теме).

## Требования [#требования]

| Компонент       | Версия        |
| --------------- | ------------- |
| DataLife Engine | **≥ 21.0**    |
| PHP             | **≥ 8.3**     |
| DevCraft Admin  | **≥ 200.4.1** |

## Идентификация модуля [#идентификация-модуля]

| Поле              | Значение                         |
| ----------------- | -------------------------------- |
| Каталог модуля    | \`Connections\`                    |
| Код в админке     | \`dle_connections\`                |
| Версия            | \`210.1.0\`                        |
| Точка входа       | \`engine/inc/dle_connections.php\` |
| Пространство имён | \`DevCraft\\Modules\\Connections\`   |

Публичная логика лежит в \`Controller/\`, а не в толстых файлах \`engine/modules/\`.

## Таблицы в базе [#таблицы-в-базе]

При первом открытии модуля в админке создаются таблицы с префиксом сайта:

| Назначение                                    | Таблица                                    |
| --------------------------------------------- | ------------------------------------------ |
| Сборки                                        | \`{prefix}_dc_connections_collections\`      |
| Элементы сборок (новости в сборке)            | \`{prefix}_dc_connections_items\`            |
| Типы связей                                   | \`{prefix}_dc_connections_relation_types\`   |
| Категории сборок                              | \`{prefix}_dc_connections_collection_types\` |
| Направленные пары (тип между двумя новостями) | \`{prefix}_dc_connections_pair_relations\`   |

Новость в элементе ссылается на \`post.id\`. В одной сборке одна и та же новость не дублируется. Типы связей и категории **не заполняются сами** при установке — их создают вручную в соответствующих разделах.

## Структура файлов [#структура-файлов]

Корень сайта после установки плагина (обзор):

<Files>
  <Folder name="Корень сайта">
    <Folder name="engine">
      <Folder name="inc">
        <File name="dle_connections.php" />
      </Folder>
    </Folder>

    <Folder name="devcraft">
      <Folder name="config">
        <File name="connections.json" />
      </Folder>

      <Folder name="locales">
        <Folder name="ru_RU">
          <File name="dle_connections.xliff" />
        </Folder>
      </Folder>

      <Folder name="src/modules/Connections">
        <File name="manifest.php" />

        <Folder name="Ajax" />

        <Folder name="Controller" />

        <Folder name="Models" />

        <Folder name="Pages" />

        <Folder name="Public" />

        <Folder name="Services" />

        <Folder name="templates" />
      </Folder>
    </Folder>

    <Folder name="templates/{skin}/devcraft/connections">
      <File name="list.tpl" />

      <File name="item.tpl" />
    </Folder>
  </Folder>
</Files>

Если в текущей теме нет шаблонов \`devcraft/connections/\`, берутся файлы из темы \`Air\`, затем из \`Default\` (\`Default\` — запасной путь для обратной совместимости с DataLife Engine 20.0).

## Дальше [#дальше]

<Cards>
  <Card title="Установка" href="./install">
    Требования модуля и особые шаги после общей установки
  </Card>

  <Card title="Дерево в админке" href="./guides/admin-tree">
    Сборки, элементы и запросы для разработчиков
  </Card>

  <Card title="Публичный вывод" href="./guides/public-include">
    Вставка на полной новости и шаблоны темы
  </Card>

  <Card title="История изменений" href="./changelog">
    Что вошло в 210.1.0
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:`**Связи** — плагин для DataLife Engine, который собирает новости в **сборки** (группы связанных материалов) и показывает их читателю на полной новости. Вместо разрозненных «похожих» блоков вы получаете единый раздел в админке: дерево сборок, вкладку на форме новости и готовый вывод в теме сайта.`},{heading:void 0,content:"Плагин ставится поверх DevCraft Admin и живёт в каталоге модуля `Connections`. Редактор может перетаскивать новости в нужном порядке, задавать тип связи и скрывать отдельные элементы. На сайте текущая новость из списка не дублируется; пустые и скрытые позиции не показываются. Дополнительно можно подключить сателлит Связи: Автоматизация — он сам строит направленные пары по правилам категории сборки."},{heading:`возможности`,content:`дерево сборок и элементов в админке с перетаскиванием порядка;`},{heading:`возможности`,content:`вкладка «Связи» на формах добавления и правки новости;`},{heading:`возможности`,content:`каталог **типов связей** и **категорий сборок**;`},{heading:`возможности`,content:`публичный вывод через вставку в шаблон полной новости;`},{heading:`возможности`,content:"форма связей на публичном добавлении новости (тег `{dc-connections}` в теме)."},{heading:`требования`,content:`Компонент`},{heading:`требования`,content:`Версия`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**≥ 21.0**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**≥ 8.3**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.1**`},{heading:`идентификация-модуля`,content:`Поле`},{heading:`идентификация-модуля`,content:`Значение`},{heading:`идентификация-модуля`,content:`Каталог модуля`},{heading:`идентификация-модуля`,content:"`Connections`"},{heading:`идентификация-модуля`,content:`Код в админке`},{heading:`идентификация-модуля`,content:"`dle_connections`"},{heading:`идентификация-модуля`,content:`Версия`},{heading:`идентификация-модуля`,content:"`210.1.0`"},{heading:`идентификация-модуля`,content:`Точка входа`},{heading:`идентификация-модуля`,content:"`engine/inc/dle_connections.php`"},{heading:`идентификация-модуля`,content:`Пространство имён`},{heading:`идентификация-модуля`,content:"`DevCraft\\Modules\\Connections`"},{heading:`идентификация-модуля`,content:"Публичная логика лежит в `Controller/`, а не в толстых файлах `engine/modules/`."},{heading:`таблицы-в-базе`,content:`При первом открытии модуля в админке создаются таблицы с префиксом сайта:`},{heading:`таблицы-в-базе`,content:`Назначение`},{heading:`таблицы-в-базе`,content:`Таблица`},{heading:`таблицы-в-базе`,content:`Сборки`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_collections`"},{heading:`таблицы-в-базе`,content:`Элементы сборок (новости в сборке)`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_items`"},{heading:`таблицы-в-базе`,content:`Типы связей`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_relation_types`"},{heading:`таблицы-в-базе`,content:`Категории сборок`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_collection_types`"},{heading:`таблицы-в-базе`,content:`Направленные пары (тип между двумя новостями)`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_connections_pair_relations`"},{heading:`таблицы-в-базе`,content:"Новость в элементе ссылается на `post.id`. В одной сборке одна и та же новость не дублируется. Типы связей и категории **не заполняются сами** при установке — их создают вручную в соответствующих разделах."},{heading:`структура-файлов`,content:`Корень сайта после установки плагина (обзор):`},{heading:`структура-файлов`,content:`<File name="dle_connections.php" />`},{heading:`структура-файлов`,content:`<File name="connections.json" />`},{heading:`структура-файлов`,content:`<File name="dle_connections.xliff" />`},{heading:`структура-файлов`,content:`<File name="manifest.php" />`},{heading:`структура-файлов`,content:`<File name="list.tpl" />`},{heading:`структура-файлов`,content:`<File name="item.tpl" />`},{heading:`структура-файлов`,content:"Если в текущей теме нет шаблонов `devcraft/connections/`, берутся файлы из темы `Air`, затем из `Default` (`Default` — запасной путь для обратной совместимости с DataLife Engine 20.0)."},{heading:`дальше`,content:`Требования модуля и особые шаги после общей установки`},{heading:`дальше`,content:`Сборки, элементы и запросы для разработчиков`},{heading:`дальше`,content:`Вставка на полной новости и шаблоны темы`},{heading:`дальше`,content:`Что вошло в 210.1.0`}],headings:[{id:`возможности`,content:`Возможности`},{id:`требования`,content:`Требования`},{id:`идентификация-модуля`,content:`Идентификация модуля`},{id:`таблицы-в-базе`,content:`Таблицы в базе`},{id:`структура-файлов`,content:`Структура файлов`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#идентификация-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Идентификация модуля`})},{depth:2,url:`#таблицы-в-базе`,title:(0,n.jsx)(n.Fragment,{children:`Таблицы в базе`})},{depth:2,url:`#структура-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Структура файлов`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Связи`}),` — плагин для DataLife Engine, который собирает новости в `,(0,n.jsx)(t.strong,{children:`сборки`}),` (группы связанных материалов) и показывает их читателю на полной новости. Вместо разрозненных «похожих» блоков вы получаете единый раздел в админке: дерево сборок, вкладку на форме новости и готовый вывод в теме сайта.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Плагин ставится поверх `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` и живёт в каталоге модуля `,(0,n.jsx)(t.code,{children:`Connections`}),`. Редактор может перетаскивать новости в нужном порядке, задавать тип связи и скрывать отдельные элементы. На сайте текущая новость из списка не дублируется; пустые и скрытые позиции не показываются. Дополнительно можно подключить сателлит `,(0,n.jsx)(t.a,{href:`../../connections_automation/getting_started`,children:`Связи: Автоматизация`}),` — он сам строит направленные пары по правилам категории сборки.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`дерево сборок и элементов в админке с перетаскиванием порядка;`}),`
`,(0,n.jsx)(t.li,{children:`вкладка «Связи» на формах добавления и правки новости;`}),`
`,(0,n.jsxs)(t.li,{children:[`каталог `,(0,n.jsx)(t.strong,{children:`типов связей`}),` и `,(0,n.jsx)(t.strong,{children:`категорий сборок`}),`;`]}),`
`,(0,n.jsx)(t.li,{children:`публичный вывод через вставку в шаблон полной новости;`}),`
`,(0,n.jsxs)(t.li,{children:[`форма связей на публичном добавлении новости (тег `,(0,n.jsx)(t.code,{children:`{dc-connections}`}),` в теме).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.1`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`идентификация-модуля`,children:`Идентификация модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Каталог модуля`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`Connections`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Код в админке`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`dle_connections`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`210.1.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Точка входа`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/dle_connections.php`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Пространство имён`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\Connections`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Публичная логика лежит в `,(0,n.jsx)(t.code,{children:`Controller/`}),`, а не в толстых файлах `,(0,n.jsx)(t.code,{children:`engine/modules/`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`таблицы-в-базе`,children:`Таблицы в базе`}),`
`,(0,n.jsx)(t.p,{children:`При первом открытии модуля в админке создаются таблицы с префиксом сайта:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Назначение`}),(0,n.jsx)(t.th,{children:`Таблица`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Сборки`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_collections`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Элементы сборок (новости в сборке)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_items`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Типы связей`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_relation_types`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Категории сборок`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_collection_types`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Направленные пары (тип между двумя новостями)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_connections_pair_relations`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Новость в элементе ссылается на `,(0,n.jsx)(t.code,{children:`post.id`}),`. В одной сборке одна и та же новость не дублируется. Типы связей и категории `,(0,n.jsx)(t.strong,{children:`не заполняются сами`}),` при установке — их создают вручную в соответствующих разделах.`]}),`
`,(0,n.jsx)(t.h2,{id:`структура-файлов`,children:`Структура файлов`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта после установки плагина (обзор):`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`Корень сайта`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`engine`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`inc`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`dle_connections.php`})})}),(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`config`,children:(0,n.jsx)(a,{name:`connections.json`})}),(0,n.jsx)(s,{name:`locales`,children:(0,n.jsx)(s,{name:`ru_RU`,children:(0,n.jsx)(a,{name:`dle_connections.xliff`})})}),(0,n.jsxs)(s,{name:`src/modules/Connections`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(s,{name:`Ajax`}),(0,n.jsx)(s,{name:`Controller`}),(0,n.jsx)(s,{name:`Models`}),(0,n.jsx)(s,{name:`Pages`}),(0,n.jsx)(s,{name:`Public`}),(0,n.jsx)(s,{name:`Services`}),(0,n.jsx)(s,{name:`templates`})]})]}),(0,n.jsxs)(s,{name:`templates/{skin}/devcraft/connections`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`list.tpl`}),(0,n.jsx)(a,{name:`item.tpl`})]})]})}),`
`,(0,n.jsxs)(t.p,{children:[`Если в текущей теме нет шаблонов `,(0,n.jsx)(t.code,{children:`devcraft/connections/`}),`, берутся файлы из темы `,(0,n.jsx)(t.code,{children:`Air`}),`, затем из `,(0,n.jsx)(t.code,{children:`Default`}),` (`,(0,n.jsx)(t.code,{children:`Default`}),` — запасной путь для обратной совместимости с DataLife Engine 20.0).`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Требования модуля и особые шаги после общей установки`})}),(0,n.jsx)(r,{title:`Дерево в админке`,href:`./guides/admin-tree`,children:(0,n.jsx)(t.p,{children:`Сборки, элементы и запросы для разработчиков`})}),(0,n.jsx)(r,{title:`Публичный вывод`,href:`./guides/public-include`,children:(0,n.jsx)(t.p,{children:`Вставка на полной новости и шаблоны темы`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что вошло в 210.1.0`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};