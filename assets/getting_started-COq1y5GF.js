import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор ParserKit 210.1.0: доноры, alias/типы, Twig-карта, параметры {search}, окно схемы строки.`,version:`210.1.0`},i=new Date(1791275402e3),a=`

**ParserKit** — сателлит [DevCraft Admin](../../devcraft_admin/getting_started) для DataLife Engine. Модуль подключает **доноры** (RSS, Atom, XML, JSON), сам находит поля в ответе и даёт **шаблоны заполнения**: сопоставление полей новости с данными записи донора через **Twig**-выражения (условия, циклы, \`|date\`), без глобального холста конструктора.

Версия **210.1.0** добавляет **несколько схем запроса** у одного донора (список всегда, карточка и свои схемы), **набор способов входа** со случайным выбором и переходом при отказе, метку \`{search}\` везде (источник — поле новости или ключ другой схемы), пути схемы **без** числовых сегментов списка, **alias** и типы полей, редактор строки карты во **всплывающем окне** Metro (дерево + Twig + превью) и подсветку сломанных ссылок.

Исходники пакета: репозиторий \`DLE-ParserKit\` (\`devcraft/src/modules/ParserKit/\`).

Документация этой версии: [parserkit/210.1.0](https://readme.devcraft.club/latest/dev/parserkit/210.1.0/) — та же ссылка, что в админке модуля (\`docsLink\`).

## Как это работает [#как-это-работает]

1. **Донор** — URL источника. После опроса сохраняется снимок схемы: пути полей, узел списка записей (\`list_node\`), при необходимости пометки «последний узел».
2. **Шаблон заполнения** — правила для одного донора: условия применения, карта «поле новости → выражение» (\`field_graph\` с \`mappings\`: \`target\` + \`expr\`) и «Подпись в списке». Первичный ключ записи живёт на схеме запроса, не в шаблоне.
3. **Заполнение на форме новости** — редактор с правом add/edit news выбирает донор, шаблон и запись; поля формы подставляются по карте.

Схема потока:

<Mermaid
  chart="flowchart LR
  A[Донор URL] --> B[Опрос схемы]
  B --> C[Шаблон target/expr]
  C --> D[Форма новости fill]"
/>

## Что видит администратор [#что-видит-администратор]

| Раздел           | Зачем                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Главная          | Обзор модуля                                                         |
| Доноры           | Базовый адрес, пул способов входа, схемы запроса, опрос, схема полей |
| Шаблоны          | Условия, «Подпись в списке», карта Twig, окно схемы строки           |
| Настройки        | User-Agent HTTP и прочие параметры                                   |
| Журнал изменений | История версий пакета                                                |

## Что видит редактор новости [#что-видит-редактор-новости]

На форме **добавления** и **редактирования** новости (после установки плагина) — блок ParserKit: выбор донора, шаблона, списка записей и кнопка «Заполнить поля». Подробнее: [Заполнение на форме новости](./guides/fill).

## Возможности 210.1.0 [#возможности-21010]

* опрос доноров RSS/Atom/XML/JSON с **вложенными** путями (\`area.name\`, атрибуты \`@id\` и т.п.);
* режим &#x2A;*«Корень»**: если в ответе нет массива записей — одна запись = корень ответа (\`list_node=""\` в базе);
* пометка &#x2A;*«последний узел»** на группах схемы — обрезка ветки при построении тегов;
* шаблоны: \`target\`/\`expr\` на **Twig**, условия с связью **and** / **or** (по умолчанию «и»);
* **alias** и **тип** полей схемы; параметры запроса донора с плейсхолдером \`{search}\`;
* окно &#x2A;*«Схема»** на строке карты (дерево + Twig + превью) и подсветка сломанных ссылок;
* заполнение с подтверждением перезаписи непустых полей и предупреждением о битых выражениях.

## Требования [#требования]

| Компонент       | Версия        |
| --------------- | ------------- |
| DataLife Engine | **≥ 21.0**    |
| PHP             | **≥ 8.3**     |
| DevCraft Admin  | **≥ 200.4.0** |

## Идентификация модуля [#идентификация-модуля]

| Поле              | Значение                                                     |
| ----------------- | ------------------------------------------------------------ |
| Каталог модуля    | \`ParserKit\`                                                  |
| Код в админке     | \`parserkit\`                                                  |
| Версия            | \`210.1.0\`                                                    |
| Точка входа       | \`engine/inc/parserkit.php\`                                   |
| Пространство имён | \`DevCraft\\Modules\\ParserKit\`                                 |
| Документация      | \`https://readme.devcraft.club/latest/dev/parserkit/210.1.0/\` |

## Таблицы в базе [#таблицы-в-базе]

| Назначение         | Таблица                        |
| ------------------ | ------------------------------ |
| Доноры             | \`{prefix}_parserkit_donors\`    |
| Шаблоны заполнения | \`{prefix}_parserkit_templates\` |

## Структура файлов (обзор) [#структура-файлов-обзор]

<Files>
  <Folder name="Корень сайта">
    <Folder name="engine/inc">
      <File name="parserkit.php" />
    </Folder>

    <Folder name="devcraft/src/modules/ParserKit">
      <File name="manifest.php" />

      <Folder name="Ajax" />

      <Folder name="Controller" />

      <Folder name="Donor" />

      <Folder name="Models" />

      <Folder name="Pages" />

      <Folder name="Public">
        <File name="parserkit.js" />
      </Folder>

      <Folder name="Services" />

      <Folder name="templates" />
    </Folder>
  </Folder>
</Files>

## Дальше [#дальше]

<Cards>
  <Card title="Установка" href="./install">
    Плагин, зависимость DevCraft Admin, патч формы новости
  </Card>

  <Card title="Доноры" href="./guides/donors">
    URL, list\\_node, опрос, узел списка
  </Card>

  <Card title="Вложенные поля" href="./guides/nested_fields">
    Flatten, is\\_terminal, группы схемы
  </Card>

  <Card title="Шаблоны" href="./guides/templates">
    target/expr, условия and/or
  </Card>

  <Card title="Заполнение на форме" href="./guides/fill">
    Донор, шаблон, список записей, apply
  </Card>

  <Card title="История изменений" href="./changelog">
    Что вошло в 210.1.0
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:"**ParserKit** — сателлит DevCraft Admin для DataLife Engine. Модуль подключает **доноры** (RSS, Atom, XML, JSON), сам находит поля в ответе и даёт **шаблоны заполнения**: сопоставление полей новости с данными записи донора через **Twig**-выражения (условия, циклы, `|date`), без глобального холста конструктора."},{heading:void 0,content:"Версия **210.1.0** добавляет **несколько схем запроса** у одного донора (список всегда, карточка и свои схемы), **набор способов входа** со случайным выбором и переходом при отказе, метку `{search}` везде (источник — поле новости или ключ другой схемы), пути схемы **без** числовых сегментов списка, **alias** и типы полей, редактор строки карты во **всплывающем окне** Metro (дерево + Twig + превью) и подсветку сломанных ссылок."},{heading:void 0,content:"Исходники пакета: репозиторий `DLE-ParserKit` (`devcraft/src/modules/ParserKit/`)."},{heading:void 0,content:"Документация этой версии: parserkit/210.1.0 — та же ссылка, что в админке модуля (`docsLink`)."},{heading:`как-это-работает`,content:"**Донор** — URL источника. После опроса сохраняется снимок схемы: пути полей, узел списка записей (`list_node`), при необходимости пометки «последний узел»."},{heading:`как-это-работает`,content:"**Шаблон заполнения** — правила для одного донора: условия применения, карта «поле новости → выражение» (`field_graph` с `mappings`: `target` + `expr`) и «Подпись в списке». Первичный ключ записи живёт на схеме запроса, не в шаблоне."},{heading:`как-это-работает`,content:`**Заполнение на форме новости** — редактор с правом add/edit news выбирает донор, шаблон и запись; поля формы подставляются по карте.`},{heading:`как-это-работает`,content:`Схема потока:`},{heading:`что-видит-администратор`,content:`Раздел`},{heading:`что-видит-администратор`,content:`Зачем`},{heading:`что-видит-администратор`,content:`Главная`},{heading:`что-видит-администратор`,content:`Обзор модуля`},{heading:`что-видит-администратор`,content:`Доноры`},{heading:`что-видит-администратор`,content:`Базовый адрес, пул способов входа, схемы запроса, опрос, схема полей`},{heading:`что-видит-администратор`,content:`Шаблоны`},{heading:`что-видит-администратор`,content:`Условия, «Подпись в списке», карта Twig, окно схемы строки`},{heading:`что-видит-администратор`,content:`Настройки`},{heading:`что-видит-администратор`,content:`User-Agent HTTP и прочие параметры`},{heading:`что-видит-администратор`,content:`Журнал изменений`},{heading:`что-видит-администратор`,content:`История версий пакета`},{heading:`что-видит-редактор-новости`,content:`На форме **добавления** и **редактирования** новости (после установки плагина) — блок ParserKit: выбор донора, шаблона, списка записей и кнопка «Заполнить поля». Подробнее: Заполнение на форме новости.`},{heading:`возможности-21010`,content:"опрос доноров RSS/Atom/XML/JSON с **вложенными** путями (`area.name`, атрибуты `@id` и т.п.);"},{heading:`возможности-21010`,content:'режим &#x2A;*«Корень»**: если в ответе нет массива записей — одна запись = корень ответа (`list_node=""` в базе);'},{heading:`возможности-21010`,content:`пометка &#x2A;*«последний узел»** на группах схемы — обрезка ветки при построении тегов;`},{heading:`возможности-21010`,content:"шаблоны: `target`/`expr` на **Twig**, условия с связью **and** / **or** (по умолчанию «и»);"},{heading:`возможности-21010`,content:"**alias** и **тип** полей схемы; параметры запроса донора с плейсхолдером `{search}`;"},{heading:`возможности-21010`,content:`окно &#x2A;*«Схема»** на строке карты (дерево + Twig + превью) и подсветка сломанных ссылок;`},{heading:`возможности-21010`,content:`заполнение с подтверждением перезаписи непустых полей и предупреждением о битых выражениях.`},{heading:`требования`,content:`Компонент`},{heading:`требования`,content:`Версия`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**≥ 21.0**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**≥ 8.3**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.0**`},{heading:`идентификация-модуля`,content:`Поле`},{heading:`идентификация-модуля`,content:`Значение`},{heading:`идентификация-модуля`,content:`Каталог модуля`},{heading:`идентификация-модуля`,content:"`ParserKit`"},{heading:`идентификация-модуля`,content:`Код в админке`},{heading:`идентификация-модуля`,content:"`parserkit`"},{heading:`идентификация-модуля`,content:`Версия`},{heading:`идентификация-модуля`,content:"`210.1.0`"},{heading:`идентификация-модуля`,content:`Точка входа`},{heading:`идентификация-модуля`,content:"`engine/inc/parserkit.php`"},{heading:`идентификация-модуля`,content:`Пространство имён`},{heading:`идентификация-модуля`,content:"`DevCraft\\Modules\\ParserKit`"},{heading:`идентификация-модуля`,content:`Документация`},{heading:`идентификация-модуля`,content:"`https://readme.devcraft.club/latest/dev/parserkit/210.1.0/`"},{heading:`таблицы-в-базе`,content:`Назначение`},{heading:`таблицы-в-базе`,content:`Таблица`},{heading:`таблицы-в-базе`,content:`Доноры`},{heading:`таблицы-в-базе`,content:"`{prefix}_parserkit_donors`"},{heading:`таблицы-в-базе`,content:`Шаблоны заполнения`},{heading:`таблицы-в-базе`,content:"`{prefix}_parserkit_templates`"},{heading:`структура-файлов-обзор`,content:`<File name="parserkit.php" />`},{heading:`структура-файлов-обзор`,content:`<File name="manifest.php" />`},{heading:`структура-файлов-обзор`,content:`<File name="parserkit.js" />`},{heading:`дальше`,content:`Плагин, зависимость DevCraft Admin, патч формы новости`},{heading:`дальше`,content:`URL, list\\_node, опрос, узел списка`},{heading:`дальше`,content:`Flatten, is\\_terminal, группы схемы`},{heading:`дальше`,content:`target/expr, условия and/or`},{heading:`дальше`,content:`Донор, шаблон, список записей, apply`},{heading:`дальше`,content:`Что вошло в 210.1.0`}],headings:[{id:`как-это-работает`,content:`Как это работает`},{id:`что-видит-администратор`,content:`Что видит администратор`},{id:`что-видит-редактор-новости`,content:`Что видит редактор новости`},{id:`возможности-21010`,content:`Возможности 210.1.0`},{id:`требования`,content:`Требования`},{id:`идентификация-модуля`,content:`Идентификация модуля`},{id:`таблицы-в-базе`,content:`Таблицы в базе`},{id:`структура-файлов-обзор`,content:`Структура файлов (обзор)`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#как-это-работает`,title:(0,n.jsx)(n.Fragment,{children:`Как это работает`})},{depth:2,url:`#что-видит-администратор`,title:(0,n.jsx)(n.Fragment,{children:`Что видит администратор`})},{depth:2,url:`#что-видит-редактор-новости`,title:(0,n.jsx)(n.Fragment,{children:`Что видит редактор новости`})},{depth:2,url:`#возможности-21010`,title:(0,n.jsx)(n.Fragment,{children:`Возможности 210.1.0`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#идентификация-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Идентификация модуля`})},{depth:2,url:`#таблицы-в-базе`,title:(0,n.jsx)(n.Fragment,{children:`Таблицы в базе`})},{depth:2,url:`#структура-файлов-обзор`,title:(0,n.jsx)(n.Fragment,{children:`Структура файлов (обзор)`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Mermaid:c}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Mermaid`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`ParserKit`}),` — сателлит `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` для DataLife Engine. Модуль подключает `,(0,n.jsx)(t.strong,{children:`доноры`}),` (RSS, Atom, XML, JSON), сам находит поля в ответе и даёт `,(0,n.jsx)(t.strong,{children:`шаблоны заполнения`}),`: сопоставление полей новости с данными записи донора через `,(0,n.jsx)(t.strong,{children:`Twig`}),`-выражения (условия, циклы, `,(0,n.jsx)(t.code,{children:`|date`}),`), без глобального холста конструктора.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Версия `,(0,n.jsx)(t.strong,{children:`210.1.0`}),` добавляет `,(0,n.jsx)(t.strong,{children:`несколько схем запроса`}),` у одного донора (список всегда, карточка и свои схемы), `,(0,n.jsx)(t.strong,{children:`набор способов входа`}),` со случайным выбором и переходом при отказе, метку `,(0,n.jsx)(t.code,{children:`{search}`}),` везде (источник — поле новости или ключ другой схемы), пути схемы `,(0,n.jsx)(t.strong,{children:`без`}),` числовых сегментов списка, `,(0,n.jsx)(t.strong,{children:`alias`}),` и типы полей, редактор строки карты во `,(0,n.jsx)(t.strong,{children:`всплывающем окне`}),` Metro (дерево + Twig + превью) и подсветку сломанных ссылок.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Исходники пакета: репозиторий `,(0,n.jsx)(t.code,{children:`DLE-ParserKit`}),` (`,(0,n.jsx)(t.code,{children:`devcraft/src/modules/ParserKit/`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Документация этой версии: `,(0,n.jsx)(t.a,{href:`https://readme.devcraft.club/latest/dev/parserkit/210.1.0/`,children:`parserkit/210.1.0`}),` — та же ссылка, что в админке модуля (`,(0,n.jsx)(t.code,{children:`docsLink`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`как-это-работает`,children:`Как это работает`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Донор`}),` — URL источника. После опроса сохраняется снимок схемы: пути полей, узел списка записей (`,(0,n.jsx)(t.code,{children:`list_node`}),`), при необходимости пометки «последний узел».`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Шаблон заполнения`}),` — правила для одного донора: условия применения, карта «поле новости → выражение» (`,(0,n.jsx)(t.code,{children:`field_graph`}),` с `,(0,n.jsx)(t.code,{children:`mappings`}),`: `,(0,n.jsx)(t.code,{children:`target`}),` + `,(0,n.jsx)(t.code,{children:`expr`}),`) и «Подпись в списке». Первичный ключ записи живёт на схеме запроса, не в шаблоне.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Заполнение на форме новости`}),` — редактор с правом add/edit news выбирает донор, шаблон и запись; поля формы подставляются по карте.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Схема потока:`}),`
`,(0,n.jsx)(c,{chart:`flowchart LR
  A[Донор URL] --> B[Опрос схемы]
  B --> C[Шаблон target/expr]
  C --> D[Форма новости fill]`}),`
`,(0,n.jsx)(t.h2,{id:`что-видит-администратор`,children:`Что видит администратор`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Раздел`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Главная`}),(0,n.jsx)(t.td,{children:`Обзор модуля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Доноры`}),(0,n.jsx)(t.td,{children:`Базовый адрес, пул способов входа, схемы запроса, опрос, схема полей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Шаблоны`}),(0,n.jsx)(t.td,{children:`Условия, «Подпись в списке», карта Twig, окно схемы строки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Настройки`}),(0,n.jsx)(t.td,{children:`User-Agent HTTP и прочие параметры`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Журнал изменений`}),(0,n.jsx)(t.td,{children:`История версий пакета`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`что-видит-редактор-новости`,children:`Что видит редактор новости`}),`
`,(0,n.jsxs)(t.p,{children:[`На форме `,(0,n.jsx)(t.strong,{children:`добавления`}),` и `,(0,n.jsx)(t.strong,{children:`редактирования`}),` новости (после установки плагина) — блок ParserKit: выбор донора, шаблона, списка записей и кнопка «Заполнить поля». Подробнее: `,(0,n.jsx)(t.a,{href:`./guides/fill`,children:`Заполнение на форме новости`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности-21010`,children:`Возможности 210.1.0`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`опрос доноров RSS/Atom/XML/JSON с `,(0,n.jsx)(t.strong,{children:`вложенными`}),` путями (`,(0,n.jsx)(t.code,{children:`area.name`}),`, атрибуты `,(0,n.jsx)(t.code,{children:`@id`}),` и т.п.);`]}),`
`,(0,n.jsxs)(t.li,{children:[`режим `,(0,n.jsx)(t.strong,{children:`«Корень»`}),`: если в ответе нет массива записей — одна запись = корень ответа (`,(0,n.jsx)(t.code,{children:`list_node=""`}),` в базе);`]}),`
`,(0,n.jsxs)(t.li,{children:[`пометка `,(0,n.jsx)(t.strong,{children:`«последний узел»`}),` на группах схемы — обрезка ветки при построении тегов;`]}),`
`,(0,n.jsxs)(t.li,{children:[`шаблоны: `,(0,n.jsx)(t.code,{children:`target`}),`/`,(0,n.jsx)(t.code,{children:`expr`}),` на `,(0,n.jsx)(t.strong,{children:`Twig`}),`, условия с связью `,(0,n.jsx)(t.strong,{children:`and`}),` / `,(0,n.jsx)(t.strong,{children:`or`}),` (по умолчанию «и»);`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`alias`}),` и `,(0,n.jsx)(t.strong,{children:`тип`}),` полей схемы; параметры запроса донора с плейсхолдером `,(0,n.jsx)(t.code,{children:`{search}`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`окно `,(0,n.jsx)(t.strong,{children:`«Схема»`}),` на строке карты (дерево + Twig + превью) и подсветка сломанных ссылок;`]}),`
`,(0,n.jsx)(t.li,{children:`заполнение с подтверждением перезаписи непустых полей и предупреждением о битых выражениях.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 21.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.0`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`идентификация-модуля`,children:`Идентификация модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Каталог модуля`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ParserKit`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Код в админке`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`parserkit`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`210.1.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Точка входа`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/parserkit.php`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Пространство имён`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\ParserKit`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Документация`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`https://readme.devcraft.club/latest/dev/parserkit/210.1.0/`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`таблицы-в-базе`,children:`Таблицы в базе`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Назначение`}),(0,n.jsx)(t.th,{children:`Таблица`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Доноры`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_parserkit_donors`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Шаблоны заполнения`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_parserkit_templates`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`структура-файлов-обзор`,children:`Структура файлов (обзор)`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`Корень сайта`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`engine/inc`,children:(0,n.jsx)(a,{name:`parserkit.php`})}),(0,n.jsxs)(s,{name:`devcraft/src/modules/ParserKit`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(s,{name:`Ajax`}),(0,n.jsx)(s,{name:`Controller`}),(0,n.jsx)(s,{name:`Donor`}),(0,n.jsx)(s,{name:`Models`}),(0,n.jsx)(s,{name:`Pages`}),(0,n.jsx)(s,{name:`Public`,children:(0,n.jsx)(a,{name:`parserkit.js`})}),(0,n.jsx)(s,{name:`Services`}),(0,n.jsx)(s,{name:`templates`})]})]})}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Плагин, зависимость DevCraft Admin, патч формы новости`})}),(0,n.jsx)(r,{title:`Доноры`,href:`./guides/donors`,children:(0,n.jsx)(t.p,{children:`URL, list_node, опрос, узел списка`})}),(0,n.jsx)(r,{title:`Вложенные поля`,href:`./guides/nested_fields`,children:(0,n.jsx)(t.p,{children:`Flatten, is_terminal, группы схемы`})}),(0,n.jsx)(r,{title:`Шаблоны`,href:`./guides/templates`,children:(0,n.jsx)(t.p,{children:`target/expr, условия and/or`})}),(0,n.jsx)(r,{title:`Заполнение на форме`,href:`./guides/fill`,children:(0,n.jsx)(t.p,{children:`Донор, шаблон, список записей, apply`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что вошло в 210.1.0`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};