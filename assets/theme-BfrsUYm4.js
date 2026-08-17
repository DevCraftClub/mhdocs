import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Подключение в теме`,description:`Include TagsAdd в fullstory.tpl и теги шаблонов button/modal.`},i=new Date(1786951824e3),a=`

## fullstory.tpl [#fullstorytpl]

В шаблон полной новости добавьте:

\`\`\`html
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=css"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=button"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=modal"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=js"}
\`\`\`

Параметр \`focus\`:

| Значение | Результат                |
| -------- | ------------------------ |
| \`css\`    | Стили модуля             |
| \`button\` | Кнопка предложения       |
| \`modal\`  | Разметка модального окна |
| \`js\`     | Скрипт отправки          |

Файлы темы лежат в \`templates/THEME/devcraft/tags_add/\` (\`button.tpl\`, \`modal.tpl\`, \`tags_add.css\`, \`tags_add.js\`). Скопируйте каталог из пакета \`Default\`, если используете другую тему.

## Теги шаблонов темы [#теги-шаблонов-темы]

### button.tpl [#buttontpl]

| Тег              | Описание                 |
| ---------------- | ------------------------ |
| \`{button-label}\` | Текст кнопки из настроек |
| \`{news-id}\`      | ID новости               |

### modal.tpl [#modaltpl]

| Тег              | Описание                      |
| ---------------- | ----------------------------- |
| \`{news-id}\`      | ID новости                    |
| \`{button-label}\` | Текст кнопки / заголовок окна |
| \`{user-hash}\`    | \`dle_login_hash\` для AJAX     |

При правке модалки сохраняйте имена полей формы и endpoint AJAX — иначе отправка сломается.

## Модерация [#модерация]

Очередь: \`?mod=tags_add&action=suggestions\`.\\
Одобрение / отклонение / удаление — с подтверждениями Metro; отклонение с причиной (или стандартной из настроек).
`,o={contents:[{heading:`fullstorytpl`,content:`В шаблон полной новости добавьте:`},{heading:`fullstorytpl`,content:"Параметр `focus`:"},{heading:`fullstorytpl`,content:`Значение`},{heading:`fullstorytpl`,content:`Результат`},{heading:`fullstorytpl`,content:"`css`"},{heading:`fullstorytpl`,content:`Стили модуля`},{heading:`fullstorytpl`,content:"`button`"},{heading:`fullstorytpl`,content:`Кнопка предложения`},{heading:`fullstorytpl`,content:"`modal`"},{heading:`fullstorytpl`,content:`Разметка модального окна`},{heading:`fullstorytpl`,content:"`js`"},{heading:`fullstorytpl`,content:`Скрипт отправки`},{heading:`fullstorytpl`,content:"Файлы темы лежат в `templates/THEME/devcraft/tags_add/` (`button.tpl`, `modal.tpl`, `tags_add.css`, `tags_add.js`). Скопируйте каталог из пакета `Default`, если используете другую тему."},{heading:`buttontpl`,content:`Тег`},{heading:`buttontpl`,content:`Описание`},{heading:`buttontpl`,content:"`{button-label}`"},{heading:`buttontpl`,content:`Текст кнопки из настроек`},{heading:`buttontpl`,content:"`{news-id}`"},{heading:`buttontpl`,content:`ID новости`},{heading:`modaltpl`,content:`Тег`},{heading:`modaltpl`,content:`Описание`},{heading:`modaltpl`,content:"`{news-id}`"},{heading:`modaltpl`,content:`ID новости`},{heading:`modaltpl`,content:"`{button-label}`"},{heading:`modaltpl`,content:`Текст кнопки / заголовок окна`},{heading:`modaltpl`,content:"`{user-hash}`"},{heading:`modaltpl`,content:"`dle_login_hash` для AJAX"},{heading:`modaltpl`,content:`При правке модалки сохраняйте имена полей формы и endpoint AJAX — иначе отправка сломается.`},{heading:`модерация`,content:"Очередь: `?mod=tags_add&action=suggestions`.\\\nОдобрение / отклонение / удаление — с подтверждениями Metro; отклонение с причиной (или стандартной из настроек)."}],headings:[{id:`fullstorytpl`,content:`fullstory.tpl`},{id:`теги-шаблонов-темы`,content:`Теги шаблонов темы`},{id:`buttontpl`,content:`button.tpl`},{id:`modaltpl`,content:`modal.tpl`},{id:`модерация`,content:`Модерация`}]},s=[{depth:2,url:`#fullstorytpl`,title:(0,n.jsx)(n.Fragment,{children:`fullstory.tpl`})},{depth:2,url:`#теги-шаблонов-темы`,title:(0,n.jsx)(n.Fragment,{children:`Теги шаблонов темы`})},{depth:3,url:`#buttontpl`,title:(0,n.jsx)(n.Fragment,{children:`button.tpl`})},{depth:3,url:`#modaltpl`,title:(0,n.jsx)(n.Fragment,{children:`modal.tpl`})},{depth:2,url:`#модерация`,title:(0,n.jsx)(n.Fragment,{children:`Модерация`})}];function c(e){let t={br:`br`,code:`code`,h2:`h2`,h3:`h3`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`fullstorytpl`,children:`fullstory.tpl`}),`
`,(0,n.jsx)(t.p,{children:`В шаблон полной новости добавьте:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=css"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=button"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=modal"}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=js"}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Параметр `,(0,n.jsx)(t.code,{children:`focus`}),`:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Значение`}),(0,n.jsx)(t.th,{children:`Результат`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`css`})}),(0,n.jsx)(t.td,{children:`Стили модуля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`button`})}),(0,n.jsx)(t.td,{children:`Кнопка предложения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`modal`})}),(0,n.jsx)(t.td,{children:`Разметка модального окна`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`js`})}),(0,n.jsx)(t.td,{children:`Скрипт отправки`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Файлы темы лежат в `,(0,n.jsx)(t.code,{children:`templates/THEME/devcraft/tags_add/`}),` (`,(0,n.jsx)(t.code,{children:`button.tpl`}),`, `,(0,n.jsx)(t.code,{children:`modal.tpl`}),`, `,(0,n.jsx)(t.code,{children:`tags_add.css`}),`, `,(0,n.jsx)(t.code,{children:`tags_add.js`}),`). Скопируйте каталог из пакета `,(0,n.jsx)(t.code,{children:`Default`}),`, если используете другую тему.`]}),`
`,(0,n.jsx)(t.h2,{id:`теги-шаблонов-темы`,children:`Теги шаблонов темы`}),`
`,(0,n.jsx)(t.h3,{id:`buttontpl`,children:`button.tpl`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{button-label}`})}),(0,n.jsx)(t.td,{children:`Текст кнопки из настроек`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{news-id}`})}),(0,n.jsx)(t.td,{children:`ID новости`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`modaltpl`,children:`modal.tpl`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{news-id}`})}),(0,n.jsx)(t.td,{children:`ID новости`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{button-label}`})}),(0,n.jsx)(t.td,{children:`Текст кнопки / заголовок окна`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{user-hash}`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`dle_login_hash`}),` для AJAX`]})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`При правке модалки сохраняйте имена полей формы и endpoint AJAX — иначе отправка сломается.`}),`
`,(0,n.jsx)(t.h2,{id:`модерация`,children:`Модерация`}),`
`,(0,n.jsxs)(t.p,{children:[`Очередь: `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=suggestions`}),`.`,(0,n.jsx)(t.br,{}),`
`,`Одобрение / отклонение / удаление — с подтверждениями Metro; отклонение с причиной (или стандартной из настроек).`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};