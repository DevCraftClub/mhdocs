import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Списки и видимость`,description:`Админ-списки, приват/публик, права групп и предложения новостей.`},i=new Date(1789411081e3),a=`

## Два вида списков [#два-вида-списков]

### Админ-списки [#админ-списки]

* Имя одно на всех (задаёт админ). Пользователь **не** удаляет такой список.
* Содержимое своё у каждого: пара \`(list_id, user_id, news_id)\`.
* Сиды при первом запуске: «В планах», «Просмотрено», «Избрано».

### Пользовательские списки [#пользовательские-списки]

* Создаёт владелец; считаются в лимит группы \`max_lists\`.
* **Приват** — чужим не видно.
* **Публик** — если группе разрешено \`can_public\`.
* Описание — WYSIWYG у владельца (и у админа).
* «Шапку» списка (имя, видимость, описание) правит только владелец или админ.

Штатное DLE «Избранное» модуль **не** меняет и **не** мигрирует.

## Права групп [#права-групп]

В админке: \`?mod=user_lists&action=permissions\`.

| Флаг          | Смысл                                                            |
| ------------- | ---------------------------------------------------------------- |
| \`enabled\`     | Группа вообще может пользоваться списками на сайте               |
| \`max_lists\`   | Сколько **своих** списков можно создать (админ-списки не входят) |
| \`can_public\`  | Разрешить публичные списки                                       |
| \`can_suggest\` | Разрешить предлагать новости в чужие публичные списки            |

## Гости [#гости]

Настройка \`guest_can_view_public\`: гости видят каталог и публичные списки. Если выключено — только авторизованные.

## Предложения в список [#предложения-в-список]

1. Владелец открыл список для предложений (whitelist конкретных людей **или** «все», если политика списка так задана).
2. У предлагающего есть \`can_suggest\`.
3. Новость попадает в очередь; владелец одобряет или отклоняет (\`proposals\` на сайте / обработчики в админке).

## Настройки, которые чаще всего путают [#настройки-которые-чаще-всего-путают]

| Поле                        | Зачем                                        |
| --------------------------- | -------------------------------------------- |
| \`button_label\`              | Текст кнопки на новости                      |
| \`bad_words\`                 | Запрещённые слова в названии (через запятую) |
| \`count_web\` / \`count_admin\` | Пагинация на сайте / в админке               |

## Логи [#логи]

Важные действия админа и сайта пишутся через \`LogGenerator\` с уровнем \`info\` (канал модуля UserLists).
`,o={contents:[{heading:`админ-списки`,content:`Имя одно на всех (задаёт админ). Пользователь **не** удаляет такой список.`},{heading:`админ-списки`,content:"Содержимое своё у каждого: пара `(list_id, user_id, news_id)`."},{heading:`админ-списки`,content:`Сиды при первом запуске: «В планах», «Просмотрено», «Избрано».`},{heading:`пользовательские-списки`,content:"Создаёт владелец; считаются в лимит группы `max_lists`."},{heading:`пользовательские-списки`,content:`**Приват** — чужим не видно.`},{heading:`пользовательские-списки`,content:"**Публик** — если группе разрешено `can_public`."},{heading:`пользовательские-списки`,content:`Описание — WYSIWYG у владельца (и у админа).`},{heading:`пользовательские-списки`,content:`«Шапку» списка (имя, видимость, описание) правит только владелец или админ.`},{heading:`пользовательские-списки`,content:`Штатное DLE «Избранное» модуль **не** меняет и **не** мигрирует.`},{heading:`права-групп`,content:"В админке: `?mod=user_lists&action=permissions`."},{heading:`права-групп`,content:`Флаг`},{heading:`права-групп`,content:`Смысл`},{heading:`права-групп`,content:"`enabled`"},{heading:`права-групп`,content:`Группа вообще может пользоваться списками на сайте`},{heading:`права-групп`,content:"`max_lists`"},{heading:`права-групп`,content:`Сколько **своих** списков можно создать (админ-списки не входят)`},{heading:`права-групп`,content:"`can_public`"},{heading:`права-групп`,content:`Разрешить публичные списки`},{heading:`права-групп`,content:"`can_suggest`"},{heading:`права-групп`,content:`Разрешить предлагать новости в чужие публичные списки`},{heading:`гости`,content:"Настройка `guest_can_view_public`: гости видят каталог и публичные списки. Если выключено — только авторизованные."},{heading:`предложения-в-список`,content:`Владелец открыл список для предложений (whitelist конкретных людей **или** «все», если политика списка так задана).`},{heading:`предложения-в-список`,content:"У предлагающего есть `can_suggest`."},{heading:`предложения-в-список`,content:"Новость попадает в очередь; владелец одобряет или отклоняет (`proposals` на сайте / обработчики в админке)."},{heading:`настройки-которые-чаще-всего-путают`,content:`Поле`},{heading:`настройки-которые-чаще-всего-путают`,content:`Зачем`},{heading:`настройки-которые-чаще-всего-путают`,content:"`button_label`"},{heading:`настройки-которые-чаще-всего-путают`,content:`Текст кнопки на новости`},{heading:`настройки-которые-чаще-всего-путают`,content:"`bad_words`"},{heading:`настройки-которые-чаще-всего-путают`,content:`Запрещённые слова в названии (через запятую)`},{heading:`настройки-которые-чаще-всего-путают`,content:"`count_web` / `count_admin`"},{heading:`настройки-которые-чаще-всего-путают`,content:`Пагинация на сайте / в админке`},{heading:`логи`,content:"Важные действия админа и сайта пишутся через `LogGenerator` с уровнем `info` (канал модуля UserLists)."}],headings:[{id:`два-вида-списков`,content:`Два вида списков`},{id:`админ-списки`,content:`Админ-списки`},{id:`пользовательские-списки`,content:`Пользовательские списки`},{id:`права-групп`,content:`Права групп`},{id:`гости`,content:`Гости`},{id:`предложения-в-список`,content:`Предложения в список`},{id:`настройки-которые-чаще-всего-путают`,content:`Настройки, которые чаще всего путают`},{id:`логи`,content:`Логи`}]},s=[{depth:2,url:`#два-вида-списков`,title:(0,n.jsx)(n.Fragment,{children:`Два вида списков`})},{depth:3,url:`#админ-списки`,title:(0,n.jsx)(n.Fragment,{children:`Админ-списки`})},{depth:3,url:`#пользовательские-списки`,title:(0,n.jsx)(n.Fragment,{children:`Пользовательские списки`})},{depth:2,url:`#права-групп`,title:(0,n.jsx)(n.Fragment,{children:`Права групп`})},{depth:2,url:`#гости`,title:(0,n.jsx)(n.Fragment,{children:`Гости`})},{depth:2,url:`#предложения-в-список`,title:(0,n.jsx)(n.Fragment,{children:`Предложения в список`})},{depth:2,url:`#настройки-которые-чаще-всего-путают`,title:(0,n.jsx)(n.Fragment,{children:`Настройки, которые чаще всего путают`})},{depth:2,url:`#логи`,title:(0,n.jsx)(n.Fragment,{children:`Логи`})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`два-вида-списков`,children:`Два вида списков`}),`
`,(0,n.jsx)(t.h3,{id:`админ-списки`,children:`Админ-списки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Имя одно на всех (задаёт админ). Пользователь `,(0,n.jsx)(t.strong,{children:`не`}),` удаляет такой список.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Содержимое своё у каждого: пара `,(0,n.jsx)(t.code,{children:`(list_id, user_id, news_id)`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Сиды при первом запуске: «В планах», «Просмотрено», «Избрано».`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`пользовательские-списки`,children:`Пользовательские списки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Создаёт владелец; считаются в лимит группы `,(0,n.jsx)(t.code,{children:`max_lists`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Приват`}),` — чужим не видно.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Публик`}),` — если группе разрешено `,(0,n.jsx)(t.code,{children:`can_public`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Описание — WYSIWYG у владельца (и у админа).`}),`
`,(0,n.jsx)(t.li,{children:`«Шапку» списка (имя, видимость, описание) правит только владелец или админ.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Штатное DLE «Избранное» модуль `,(0,n.jsx)(t.strong,{children:`не`}),` меняет и `,(0,n.jsx)(t.strong,{children:`не`}),` мигрирует.`]}),`
`,(0,n.jsx)(t.h2,{id:`права-групп`,children:`Права групп`}),`
`,(0,n.jsxs)(t.p,{children:[`В админке: `,(0,n.jsx)(t.code,{children:`?mod=user_lists&action=permissions`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Флаг`}),(0,n.jsx)(t.th,{children:`Смысл`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`enabled`})}),(0,n.jsx)(t.td,{children:`Группа вообще может пользоваться списками на сайте`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`max_lists`})}),(0,n.jsxs)(t.td,{children:[`Сколько `,(0,n.jsx)(t.strong,{children:`своих`}),` списков можно создать (админ-списки не входят)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`can_public`})}),(0,n.jsx)(t.td,{children:`Разрешить публичные списки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`can_suggest`})}),(0,n.jsx)(t.td,{children:`Разрешить предлагать новости в чужие публичные списки`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`гости`,children:`Гости`}),`
`,(0,n.jsxs)(t.p,{children:[`Настройка `,(0,n.jsx)(t.code,{children:`guest_can_view_public`}),`: гости видят каталог и публичные списки. Если выключено — только авторизованные.`]}),`
`,(0,n.jsx)(t.h2,{id:`предложения-в-список`,children:`Предложения в список`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Владелец открыл список для предложений (whitelist конкретных людей `,(0,n.jsx)(t.strong,{children:`или`}),` «все», если политика списка так задана).`]}),`
`,(0,n.jsxs)(t.li,{children:[`У предлагающего есть `,(0,n.jsx)(t.code,{children:`can_suggest`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Новость попадает в очередь; владелец одобряет или отклоняет (`,(0,n.jsx)(t.code,{children:`proposals`}),` на сайте / обработчики в админке).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`настройки-которые-чаще-всего-путают`,children:`Настройки, которые чаще всего путают`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`button_label`})}),(0,n.jsx)(t.td,{children:`Текст кнопки на новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bad_words`})}),(0,n.jsx)(t.td,{children:`Запрещённые слова в названии (через запятую)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`count_web`}),` / `,(0,n.jsx)(t.code,{children:`count_admin`})]}),(0,n.jsx)(t.td,{children:`Пагинация на сайте / в админке`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`логи`,children:`Логи`}),`
`,(0,n.jsxs)(t.p,{children:[`Важные действия админа и сайта пишутся через `,(0,n.jsx)(t.code,{children:`LogGenerator`}),` с уровнем `,(0,n.jsx)(t.code,{children:`info`}),` (канал модуля UserLists).`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};