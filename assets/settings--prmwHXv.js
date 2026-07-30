import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Настройки`,description:`Настройки TagsAdd: уведомления, вставка тегов, шаблоны PM.`},i=new Date(1785400635e3),a=`

Страница: \`?mod=tags_add&action=settings\`.

## Основные [#основные]

| Поле                                | Назначение                           |
| ----------------------------------- | ------------------------------------ |
| Разрешить предложения гостям        | Без входа на сайт                    |
| Текст кнопки на новости             | Надпись на кнопке «Предложить теги»  |
| PM админу при новом предложении     | Вкл/выкл уведомление модератору      |
| Ник получателя PM (админ)           | Пользователь DLE — получатель        |
| Имя отправителя PM                  | Пользователь DLE — от кого уходят ЛС |
| Имя user-xfield с prefs уведомлений | См. ниже                             |

## Доп. поле профиля (prefs уведомлений) [#доп-поле-профиля-prefs-уведомлений]

В **Пользователи → Дополнительные поля** создайте поле типа **список**:

| Параметр                 | Значение          |
| ------------------------ | ----------------- |
| Тип                      | список            |
| Значение по умолчанию    | см. варианты ниже |
| Изменяется пользователем | Да                |
| Личное поле              | Да (по желанию)   |

Варианты списка:

\`\`\`text
onsend|При отправке на проверку
onadd|При добавлении в новость
ondel|При отказе добавлять
all|Уведомлять обо всём
none|Не присылать уведомления
\`\`\`

Имя этого поля укажите в настройке **Имя user-xfield с prefs уведомлений**.

## Вставка при одобрении [#вставка-при-одобрении]

| Поле                    | Назначение                         |
| ----------------------- | ---------------------------------- |
| Куда вставлять          | \`tags\` (теги новости) или \`xfield\` |
| Имя доп. поля           | Только для режима \`xfield\`         |
| Писать также в xfsearch | Синхронизация с поиском DLE        |

## Шаблоны PM [#шаблоны-pm]

Темы и тела ЛС для: админа, отправителя при предложении, одобрения, отклонения.

В шаблонах доступны **теги новости DLE** (\`{title}\`, \`{full-link}\`, … — через [\`ParseTemplateTags\`](../../devcraft_admin/reference/back-end/classes/ParseTemplateTags)) и модульные плейсхолдеры:

| Плейсхолдер                 | Смысл                        |
| --------------------------- | ---------------------------- |
| \`{user}\`                    | Автор предложения            |
| \`{suggested_tags}\`          | Предложенные теги            |
| \`{moderate_suggested_tags}\` | Ссылка на карточку в очереди |
| \`{decline_reason}\`          | Причина отклонения           |

**Стандартная причина отклонения** (\`decline_reason_default\`) подставляется в \`{decline_reason}\`, если модератор оставил поле пустым. Отмена в диалоге отклонения **не** удаляет запись.

Старые плейсхолдеры \`%tags%\` / \`%adminlink%\` / \`%reason%\` при сохранении настроек мигрируют автоматически.
`,o={contents:[{heading:void 0,content:"Страница: `?mod=tags_add&action=settings`."},{heading:`основные`,content:`Поле`},{heading:`основные`,content:`Назначение`},{heading:`основные`,content:`Разрешить предложения гостям`},{heading:`основные`,content:`Без входа на сайт`},{heading:`основные`,content:`Текст кнопки на новости`},{heading:`основные`,content:`Надпись на кнопке «Предложить теги»`},{heading:`основные`,content:`PM админу при новом предложении`},{heading:`основные`,content:`Вкл/выкл уведомление модератору`},{heading:`основные`,content:`Ник получателя PM (админ)`},{heading:`основные`,content:`Пользователь DLE — получатель`},{heading:`основные`,content:`Имя отправителя PM`},{heading:`основные`,content:`Пользователь DLE — от кого уходят ЛС`},{heading:`основные`,content:`Имя user-xfield с prefs уведомлений`},{heading:`основные`,content:`См. ниже`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`В **Пользователи → Дополнительные поля** создайте поле типа **список**:`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Параметр`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Значение`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Тип`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`список`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Значение по умолчанию`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`см. варианты ниже`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Изменяется пользователем`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Да`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Личное поле`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Да (по желанию)`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Варианты списка:`},{heading:`доп-поле-профиля-prefs-уведомлений`,content:`Имя этого поля укажите в настройке **Имя user-xfield с prefs уведомлений**.`},{heading:`вставка-при-одобрении`,content:`Поле`},{heading:`вставка-при-одобрении`,content:`Назначение`},{heading:`вставка-при-одобрении`,content:`Куда вставлять`},{heading:`вставка-при-одобрении`,content:"`tags` (теги новости) или `xfield`"},{heading:`вставка-при-одобрении`,content:`Имя доп. поля`},{heading:`вставка-при-одобрении`,content:"Только для режима `xfield`"},{heading:`вставка-при-одобрении`,content:`Писать также в xfsearch`},{heading:`вставка-при-одобрении`,content:`Синхронизация с поиском DLE`},{heading:`шаблоны-pm`,content:`Темы и тела ЛС для: админа, отправителя при предложении, одобрения, отклонения.`},{heading:`шаблоны-pm`,content:"В шаблонах доступны **теги новости DLE** (`{title}`, `{full-link}`, … — через `ParseTemplateTags`) и модульные плейсхолдеры:"},{heading:`шаблоны-pm`,content:`Плейсхолдер`},{heading:`шаблоны-pm`,content:`Смысл`},{heading:`шаблоны-pm`,content:"`{user}`"},{heading:`шаблоны-pm`,content:`Автор предложения`},{heading:`шаблоны-pm`,content:"`{suggested_tags}`"},{heading:`шаблоны-pm`,content:`Предложенные теги`},{heading:`шаблоны-pm`,content:"`{moderate_suggested_tags}`"},{heading:`шаблоны-pm`,content:`Ссылка на карточку в очереди`},{heading:`шаблоны-pm`,content:"`{decline_reason}`"},{heading:`шаблоны-pm`,content:`Причина отклонения`},{heading:`шаблоны-pm`,content:"**Стандартная причина отклонения** (`decline_reason_default`) подставляется в `{decline_reason}`, если модератор оставил поле пустым. Отмена в диалоге отклонения **не** удаляет запись."},{heading:`шаблоны-pm`,content:"Старые плейсхолдеры `%tags%` / `%adminlink%` / `%reason%` при сохранении настроек мигрируют автоматически."}],headings:[{id:`основные`,content:`Основные`},{id:`доп-поле-профиля-prefs-уведомлений`,content:`Доп. поле профиля (prefs уведомлений)`},{id:`вставка-при-одобрении`,content:`Вставка при одобрении`},{id:`шаблоны-pm`,content:`Шаблоны PM`}]},s=[{depth:2,url:`#основные`,title:(0,n.jsx)(n.Fragment,{children:`Основные`})},{depth:2,url:`#доп-поле-профиля-prefs-уведомлений`,title:(0,n.jsx)(n.Fragment,{children:`Доп. поле профиля (prefs уведомлений)`})},{depth:2,url:`#вставка-при-одобрении`,title:(0,n.jsx)(n.Fragment,{children:`Вставка при одобрении`})},{depth:2,url:`#шаблоны-pm`,title:(0,n.jsx)(n.Fragment,{children:`Шаблоны PM`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Страница: `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=settings`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`основные`,children:`Основные`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Разрешить предложения гостям`}),(0,n.jsx)(t.td,{children:`Без входа на сайт`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Текст кнопки на новости`}),(0,n.jsx)(t.td,{children:`Надпись на кнопке «Предложить теги»`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PM админу при новом предложении`}),(0,n.jsx)(t.td,{children:`Вкл/выкл уведомление модератору`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ник получателя PM (админ)`}),(0,n.jsx)(t.td,{children:`Пользователь DLE — получатель`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Имя отправителя PM`}),(0,n.jsx)(t.td,{children:`Пользователь DLE — от кого уходят ЛС`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Имя user-xfield с prefs уведомлений`}),(0,n.jsx)(t.td,{children:`См. ниже`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`доп-поле-профиля-prefs-уведомлений`,children:`Доп. поле профиля (prefs уведомлений)`}),`
`,(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.strong,{children:`Пользователи → Дополнительные поля`}),` создайте поле типа `,(0,n.jsx)(t.strong,{children:`список`}),`:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Тип`}),(0,n.jsx)(t.td,{children:`список`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Значение по умолчанию`}),(0,n.jsx)(t.td,{children:`см. варианты ниже`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Изменяется пользователем`}),(0,n.jsx)(t.td,{children:`Да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Личное поле`}),(0,n.jsx)(t.td,{children:`Да (по желанию)`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Варианты списка:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`onsend|При отправке на проверку`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`onadd|При добавлении в новость`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ondel|При отказе добавлять`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`all|Уведомлять обо всём`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`none|Не присылать уведомления`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Имя этого поля укажите в настройке `,(0,n.jsx)(t.strong,{children:`Имя user-xfield с prefs уведомлений`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`вставка-при-одобрении`,children:`Вставка при одобрении`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Куда вставлять`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`tags`}),` (теги новости) или `,(0,n.jsx)(t.code,{children:`xfield`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Имя доп. поля`}),(0,n.jsxs)(t.td,{children:[`Только для режима `,(0,n.jsx)(t.code,{children:`xfield`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Писать также в xfsearch`}),(0,n.jsx)(t.td,{children:`Синхронизация с поиском DLE`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`шаблоны-pm`,children:`Шаблоны PM`}),`
`,(0,n.jsx)(t.p,{children:`Темы и тела ЛС для: админа, отправителя при предложении, одобрения, отклонения.`}),`
`,(0,n.jsxs)(t.p,{children:[`В шаблонах доступны `,(0,n.jsx)(t.strong,{children:`теги новости DLE`}),` (`,(0,n.jsx)(t.code,{children:`{title}`}),`, `,(0,n.jsx)(t.code,{children:`{full-link}`}),`, … — через `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/reference/back-end/classes/ParseTemplateTags`,children:(0,n.jsx)(t.code,{children:`ParseTemplateTags`})}),`) и модульные плейсхолдеры:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Плейсхолдер`}),(0,n.jsx)(t.th,{children:`Смысл`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{user}`})}),(0,n.jsx)(t.td,{children:`Автор предложения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{suggested_tags}`})}),(0,n.jsx)(t.td,{children:`Предложенные теги`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{moderate_suggested_tags}`})}),(0,n.jsx)(t.td,{children:`Ссылка на карточку в очереди`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{decline_reason}`})}),(0,n.jsx)(t.td,{children:`Причина отклонения`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Стандартная причина отклонения`}),` (`,(0,n.jsx)(t.code,{children:`decline_reason_default`}),`) подставляется в `,(0,n.jsx)(t.code,{children:`{decline_reason}`}),`, если модератор оставил поле пустым. Отмена в диалоге отклонения `,(0,n.jsx)(t.strong,{children:`не`}),` удаляет запись.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Старые плейсхолдеры `,(0,n.jsx)(t.code,{children:`%tags%`}),` / `,(0,n.jsx)(t.code,{children:`%adminlink%`}),` / `,(0,n.jsx)(t.code,{children:`%reason%`}),` при сохранении настроек мигрируют автоматически.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};