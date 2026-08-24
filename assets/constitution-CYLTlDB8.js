import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Конституция PHP`,description:`Публичный дайджест правил PHP-разработки модулей DevCraft для DLE 20.`},i=new Date(1787223655e3),a=`

Публичный дайджест правил PHP-разработки модулей DevCraft (и совместимого legacy MH Admin).

**Иерархия при конфликте:** Конституция > [Roistat PHP Code Conventions](https://github.com/roistat/php-code-conventions) > legacy \`mhadmin\`.

## Scope [#scope]

| Входит                                | Не входит (явно исключено)      |
| ------------------------------------- | ------------------------------- |
| Семантика PHP (Roistat Code Conv)     | Правила PR-workflow             |
| Стиль форматирования (Principle VIII) | Обязательные тесты / test env   |
| Стек, слои, DLE/DevCraft интеграция   | Standalone CLI (\`bin/\`)         |
|                                       | Документация без явного запроса |

## Стек [#стек]

| Слой            | Технология                                         |
| --------------- | -------------------------------------------------- |
| Runtime         | PHP **≥ 8.3**                                      |
| Шаблоны         | Twig                                               |
| Persistence     | Cycle ORM                                          |
| Admin UI        | Metro UI                                           |
| Хост            | DLE **20.0**                                       |
| Workspace       | репозиторий/проект модуля на DevCraft              |
| Legacy-референс | проект \`mhadmin\` и его \`graphify-out/\` (если есть) |

## Принципы (MUST) [#принципы-must]

| #    | Принцип             | Кратко                                                                                                            |
| ---- | ------------------- | ----------------------------------------------------------------------------------------------------------------- |
| I    | Roistat semantics   | Читаемость, без мёртвого кода, typed/IDE-refactorable; narrative comments не раздувать (\`// hack:\`, \`@todo\` — ок) |
| II   | Слои                | Service / Repository / Controller / Entity / DTO — без cross-layer shortcuts                                      |
| III  | PHP 8.3 typing      | Типы везде; \`validate*\`/\`check*\` бросают; getters без префикса \`get\`                                              |
| IV   | Cycle ORM           | Нет ad-hoc SQL в контроллерах/сервисах (кроме миграций)                                                           |
| V    | Twig                | HTML только через Twig; данные готовятся в PHP                                                                    |
| VI   | Metro UI            | Паттерны из примеров Metro UI, без параллельных CSS-фреймворков                                                   |
| VII  | DRY                 | Одна точка истины для повторяющейся логики                                                                        |
| VIII | Code style          | Tabs, margin 150, вертикальное выравнивание \`=\`/\`=>\`, braces on new line                                          |
| IX   | DLE 20              | \`DLEPlugins::Check()\`, prefix, topics 72–75; &#x2A;*DevCraft:** AJAX только через \`devcraft/ajax.php\`             |
| X    | No CLI              | Нет \`devcraft/bin\` и shell entry points                                                                           |
| XI   | No unsolicited docs | README/docs только по явному запросу                                                                              |

### Оверлей DevCraft [#оверлей-devcraft]

Комментарии, PHPDoc и UI/ошибки в PHP — **на русском**. Это не отменяет запрет на «воду» в комментариях (I).

## Review gates [#review-gates]

1. Принципы I–XI
2. Roistat digest для затронутого кода
3. Style profile (VIII)
4. Cycle + Twig + Metro для новых частей
5. Нет нового CLI / unsolicited docs

## Graphify [#graphify]

| Граф                               | Роль                                                                                       |
| ---------------------------------- | ------------------------------------------------------------------------------------------ |
| \`graphify-out/\` у legacy \`mhadmin\` | PRIMARY для старой раскладки модулей                                                       |
| \`graphify-out/\` у host DLE         | Состояние хоста; \`graphify update .\` после правок \`engine/\` (не после чистого \`devcraft/\`) |

## См. также [#см-также]

* [Начало работы](../dev/dle/devcraft_admin/getting_started)
* [ИИ-инструменты](../dev/dle/devcraft_admin/guides/ai_tools)
* [Точки входа](../dev/dle/devcraft_admin/reference/back-end/entry_points)
`,o={contents:[{heading:void 0,content:`Публичный дайджест правил PHP-разработки модулей DevCraft (и совместимого legacy MH Admin).`},{heading:void 0,content:"**Иерархия при конфликте:** Конституция > Roistat PHP Code Conventions > legacy `mhadmin`."},{heading:`scope`,content:`Входит`},{heading:`scope`,content:`Не входит (явно исключено)`},{heading:`scope`,content:`Семантика PHP (Roistat Code Conv)`},{heading:`scope`,content:`Правила PR-workflow`},{heading:`scope`,content:`Стиль форматирования (Principle VIII)`},{heading:`scope`,content:`Обязательные тесты / test env`},{heading:`scope`,content:`Стек, слои, DLE/DevCraft интеграция`},{heading:`scope`,content:"Standalone CLI (`bin/`)"},{heading:`scope`,content:`Документация без явного запроса`},{heading:`стек`,content:`Слой`},{heading:`стек`,content:`Технология`},{heading:`стек`,content:`Runtime`},{heading:`стек`,content:`PHP **≥ 8.3**`},{heading:`стек`,content:`Шаблоны`},{heading:`стек`,content:`Twig`},{heading:`стек`,content:`Persistence`},{heading:`стек`,content:`Cycle ORM`},{heading:`стек`,content:`Admin UI`},{heading:`стек`,content:`Metro UI`},{heading:`стек`,content:`Хост`},{heading:`стек`,content:`DLE **20.0**`},{heading:`стек`,content:`Workspace`},{heading:`стек`,content:`репозиторий/проект модуля на DevCraft`},{heading:`стек`,content:`Legacy-референс`},{heading:`стек`,content:"проект `mhadmin` и его `graphify-out/` (если есть)"},{heading:`принципы-must`,content:`#`},{heading:`принципы-must`,content:`Принцип`},{heading:`принципы-must`,content:`Кратко`},{heading:`принципы-must`,content:`I`},{heading:`принципы-must`,content:`Roistat semantics`},{heading:`принципы-must`,content:"Читаемость, без мёртвого кода, typed/IDE-refactorable; narrative comments не раздувать (`// hack:`, `@todo` — ок)"},{heading:`принципы-must`,content:`II`},{heading:`принципы-must`,content:`Слои`},{heading:`принципы-must`,content:`Service / Repository / Controller / Entity / DTO — без cross-layer shortcuts`},{heading:`принципы-must`,content:`III`},{heading:`принципы-must`,content:`PHP 8.3 typing`},{heading:`принципы-must`,content:"Типы везде; `validate*`/`check*` бросают; getters без префикса `get`"},{heading:`принципы-must`,content:`IV`},{heading:`принципы-must`,content:`Cycle ORM`},{heading:`принципы-must`,content:`Нет ad-hoc SQL в контроллерах/сервисах (кроме миграций)`},{heading:`принципы-must`,content:`V`},{heading:`принципы-must`,content:`Twig`},{heading:`принципы-must`,content:`HTML только через Twig; данные готовятся в PHP`},{heading:`принципы-must`,content:`VI`},{heading:`принципы-must`,content:`Metro UI`},{heading:`принципы-must`,content:`Паттерны из примеров Metro UI, без параллельных CSS-фреймворков`},{heading:`принципы-must`,content:`VII`},{heading:`принципы-must`,content:`DRY`},{heading:`принципы-must`,content:`Одна точка истины для повторяющейся логики`},{heading:`принципы-must`,content:`VIII`},{heading:`принципы-must`,content:`Code style`},{heading:`принципы-must`,content:"Tabs, margin 150, вертикальное выравнивание `=`/`=>`, braces on new line"},{heading:`принципы-must`,content:`IX`},{heading:`принципы-must`,content:`DLE 20`},{heading:`принципы-must`,content:"`DLEPlugins::Check()`, prefix, topics 72–75; &#x2A;*DevCraft:** AJAX только через `devcraft/ajax.php`"},{heading:`принципы-must`,content:`X`},{heading:`принципы-must`,content:`No CLI`},{heading:`принципы-must`,content:"Нет `devcraft/bin` и shell entry points"},{heading:`принципы-must`,content:`XI`},{heading:`принципы-must`,content:`No unsolicited docs`},{heading:`принципы-must`,content:`README/docs только по явному запросу`},{heading:`оверлей-devcraft`,content:`Комментарии, PHPDoc и UI/ошибки в PHP — **на русском**. Это не отменяет запрет на «воду» в комментариях (I).`},{heading:`review-gates`,content:`Принципы I–XI`},{heading:`review-gates`,content:`Roistat digest для затронутого кода`},{heading:`review-gates`,content:`Style profile (VIII)`},{heading:`review-gates`,content:`Cycle + Twig + Metro для новых частей`},{heading:`review-gates`,content:`Нет нового CLI / unsolicited docs`},{heading:`graphify`,content:`Граф`},{heading:`graphify`,content:`Роль`},{heading:`graphify`,content:"`graphify-out/` у legacy `mhadmin`"},{heading:`graphify`,content:`PRIMARY для старой раскладки модулей`},{heading:`graphify`,content:"`graphify-out/` у host DLE"},{heading:`graphify`,content:"Состояние хоста; `graphify update .` после правок `engine/` (не после чистого `devcraft/`)"},{heading:`см-также`,content:`Начало работы`},{heading:`см-также`,content:`ИИ-инструменты`},{heading:`см-также`,content:`Точки входа`}],headings:[{id:`scope`,content:`Scope`},{id:`стек`,content:`Стек`},{id:`принципы-must`,content:`Принципы (MUST)`},{id:`оверлей-devcraft`,content:`Оверлей DevCraft`},{id:`review-gates`,content:`Review gates`},{id:`graphify`,content:`Graphify`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#scope`,title:(0,n.jsx)(n.Fragment,{children:`Scope`})},{depth:2,url:`#стек`,title:(0,n.jsx)(n.Fragment,{children:`Стек`})},{depth:2,url:`#принципы-must`,title:(0,n.jsx)(n.Fragment,{children:`Принципы (MUST)`})},{depth:3,url:`#оверлей-devcraft`,title:(0,n.jsx)(n.Fragment,{children:`Оверлей DevCraft`})},{depth:2,url:`#review-gates`,title:(0,n.jsx)(n.Fragment,{children:`Review gates`})},{depth:2,url:`#graphify`,title:(0,n.jsx)(n.Fragment,{children:`Graphify`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Публичный дайджест правил PHP-разработки модулей DevCraft (и совместимого legacy MH Admin).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Иерархия при конфликте:`}),` Конституция > `,(0,n.jsx)(t.a,{href:`https://github.com/roistat/php-code-conventions`,children:`Roistat PHP Code Conventions`}),` > legacy `,(0,n.jsx)(t.code,{children:`mhadmin`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`scope`,children:`Scope`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Входит`}),(0,n.jsx)(t.th,{children:`Не входит (явно исключено)`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Семантика PHP (Roistat Code Conv)`}),(0,n.jsx)(t.td,{children:`Правила PR-workflow`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Стиль форматирования (Principle VIII)`}),(0,n.jsx)(t.td,{children:`Обязательные тесты / test env`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Стек, слои, DLE/DevCraft интеграция`}),(0,n.jsxs)(t.td,{children:[`Standalone CLI (`,(0,n.jsx)(t.code,{children:`bin/`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:`Документация без явного запроса`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`стек`,children:`Стек`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Слой`}),(0,n.jsx)(t.th,{children:`Технология`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Runtime`}),(0,n.jsxs)(t.td,{children:[`PHP `,(0,n.jsx)(t.strong,{children:`≥ 8.3`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Шаблоны`}),(0,n.jsx)(t.td,{children:`Twig`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Persistence`}),(0,n.jsx)(t.td,{children:`Cycle ORM`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Admin UI`}),(0,n.jsx)(t.td,{children:`Metro UI`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Хост`}),(0,n.jsxs)(t.td,{children:[`DLE `,(0,n.jsx)(t.strong,{children:`20.0`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Workspace`}),(0,n.jsx)(t.td,{children:`репозиторий/проект модуля на DevCraft`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Legacy-референс`}),(0,n.jsxs)(t.td,{children:[`проект `,(0,n.jsx)(t.code,{children:`mhadmin`}),` и его `,(0,n.jsx)(t.code,{children:`graphify-out/`}),` (если есть)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`принципы-must`,children:`Принципы (MUST)`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`#`}),(0,n.jsx)(t.th,{children:`Принцип`}),(0,n.jsx)(t.th,{children:`Кратко`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`I`}),(0,n.jsx)(t.td,{children:`Roistat semantics`}),(0,n.jsxs)(t.td,{children:[`Читаемость, без мёртвого кода, typed/IDE-refactorable; narrative comments не раздувать (`,(0,n.jsx)(t.code,{children:`// hack:`}),`, `,(0,n.jsx)(t.code,{children:`@todo`}),` — ок)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`II`}),(0,n.jsx)(t.td,{children:`Слои`}),(0,n.jsx)(t.td,{children:`Service / Repository / Controller / Entity / DTO — без cross-layer shortcuts`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`III`}),(0,n.jsx)(t.td,{children:`PHP 8.3 typing`}),(0,n.jsxs)(t.td,{children:[`Типы везде; `,(0,n.jsx)(t.code,{children:`validate*`}),`/`,(0,n.jsx)(t.code,{children:`check*`}),` бросают; getters без префикса `,(0,n.jsx)(t.code,{children:`get`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IV`}),(0,n.jsx)(t.td,{children:`Cycle ORM`}),(0,n.jsx)(t.td,{children:`Нет ad-hoc SQL в контроллерах/сервисах (кроме миграций)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`V`}),(0,n.jsx)(t.td,{children:`Twig`}),(0,n.jsx)(t.td,{children:`HTML только через Twig; данные готовятся в PHP`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VI`}),(0,n.jsx)(t.td,{children:`Metro UI`}),(0,n.jsx)(t.td,{children:`Паттерны из примеров Metro UI, без параллельных CSS-фреймворков`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VII`}),(0,n.jsx)(t.td,{children:`DRY`}),(0,n.jsx)(t.td,{children:`Одна точка истины для повторяющейся логики`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VIII`}),(0,n.jsx)(t.td,{children:`Code style`}),(0,n.jsxs)(t.td,{children:[`Tabs, margin 150, вертикальное выравнивание `,(0,n.jsx)(t.code,{children:`=`}),`/`,(0,n.jsx)(t.code,{children:`=>`}),`, braces on new line`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IX`}),(0,n.jsx)(t.td,{children:`DLE 20`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DLEPlugins::Check()`}),`, prefix, topics 72–75; `,(0,n.jsx)(t.strong,{children:`DevCraft:`}),` AJAX только через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`X`}),(0,n.jsx)(t.td,{children:`No CLI`}),(0,n.jsxs)(t.td,{children:[`Нет `,(0,n.jsx)(t.code,{children:`devcraft/bin`}),` и shell entry points`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XI`}),(0,n.jsx)(t.td,{children:`No unsolicited docs`}),(0,n.jsx)(t.td,{children:`README/docs только по явному запросу`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`оверлей-devcraft`,children:`Оверлей DevCraft`}),`
`,(0,n.jsxs)(t.p,{children:[`Комментарии, PHPDoc и UI/ошибки в PHP — `,(0,n.jsx)(t.strong,{children:`на русском`}),`. Это не отменяет запрет на «воду» в комментариях (I).`]}),`
`,(0,n.jsx)(t.h2,{id:`review-gates`,children:`Review gates`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Принципы I–XI`}),`
`,(0,n.jsx)(t.li,{children:`Roistat digest для затронутого кода`}),`
`,(0,n.jsx)(t.li,{children:`Style profile (VIII)`}),`
`,(0,n.jsx)(t.li,{children:`Cycle + Twig + Metro для новых частей`}),`
`,(0,n.jsx)(t.li,{children:`Нет нового CLI / unsolicited docs`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`graphify`,children:`Graphify`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Граф`}),(0,n.jsx)(t.th,{children:`Роль`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`graphify-out/`}),` у legacy `,(0,n.jsx)(t.code,{children:`mhadmin`})]}),(0,n.jsx)(t.td,{children:`PRIMARY для старой раскладки модулей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`graphify-out/`}),` у host DLE`]}),(0,n.jsxs)(t.td,{children:[`Состояние хоста; `,(0,n.jsx)(t.code,{children:`graphify update .`}),` после правок `,(0,n.jsx)(t.code,{children:`engine/`}),` (не после чистого `,(0,n.jsx)(t.code,{children:`devcraft/`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/reference/back-end/entry_points`,children:`Точки входа`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};