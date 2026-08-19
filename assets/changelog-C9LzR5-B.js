import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`История изменений`,description:`Журнал изменений DevCraft Admin.`},i=new Date(1787142659e3),a=`

## Upload API (после 200.4.0) [#upload-api-после-20040]

### Добавлено [#добавлено]

* \`DevCraft.Ajax.postMultipart\` — XHR multipart с прогрессом.
* Twig \`core/includes/upload/drop_form.twig\` — dropzone для модулей.
* [\`UploadedFile\`](reference/back-end/classes/UploadedFile) — валидация и \`moveTo\` для \`$_FILES\`.
* Документация [\`FileResponse\`](reference/back-end/classes/FileResponse) для скачивания из AJAX.
* [\`FormFieldBuilder::editor()\`](reference/back-end/classes/FormFieldBuilder) — TinyMCE; [\`FormFieldBuilder::codeViewer()\`](reference/back-end/classes/FormFieldBuilder) — ACE. Универсальные includes \`tinymce_editor_scripts.twig\` / \`code_editor_scripts.twig\` (ACE не реинициализируется на каждый клик по вкладке).

## 200.4.0 [#20040]

### Добавлено [#добавлено-1]

* Плагин DevCraft — преемник MHAdmin: отдельный раздел в админке DLE (?mod=devcraft).
* Поддержка DataLife Engine 20.0.
* Новый внешний вид на базе Metro UI вместо прежнего Semantic UI / Fomantic UI: формы, переключатели, календари и таблицы.
* Страница логов: таблица подгружается без полной перезагрузки страницы; удобные фильтры с метками.
* Понятные уведомления при сохранении настроек, удалении записей и проверке ресурсов.
* Обновление скриптов и стилей с сервера разработчика (assets.devcraft.club).
* Генератор модулей для создания новых плагинов в структуре DevCraft.
* Мультиязычность: русский, английский, немецкий, украинский — интерфейс и элементы Metro UI.

### Изменено [#изменено]

* Интерфейс переведён с Semantic UI (Fomantic UI) на Metro UI — другой внешний вид кнопок, форм и таблиц.
* Убраны тяжёлые UI-зависимости (Fomantic, jquery-confirm, bootstrap-suggest и др.) — вместо них единая библиотека Metro UI.
* Файлы плагина находятся в каталоге devcraft/ на сайте, а не в engine/inc/maharder/.
* Настройки по-прежнему в одном месте (кеш, язык, логирование, Telegram), оформлены вкладками; можно сохранить только корректные поля.
* Меню «Страницы DLE» — быстрый переход в стандартную админку DLE из боковой панели DevCraft.
* История изменений: те же release notes, новый формат с группами «Добавлено», «Изменено» и т.д.

### Удалено [#удалено]

* Название MHAdmin / maharder и вход ?mod=maharder — заменены на DevCraft.
* Прежний внешний вид Semantic / Fomantic UI (сегменты, старые выпадающие списки и всплывающие подсказки).
* Font Awesome Pro в комплекте плагина — иконки через Metro UI.
* Старая структура каталогов maharder (\\_modules, \\_templates); параллельная установка с MHAdmin не предусмотрена.

### Исправлено [#исправлено]

* Фильтры на странице логов (в том числе по дате) работают стабильнее.

## Предыдущие версии [#предыдущие-версии]

Смотри последнюю версию [MH Admin](../../../../deprecated/mhadmin/changelog)
`,o={contents:[{heading:`добавлено`,content:"`DevCraft.Ajax.postMultipart` — XHR multipart с прогрессом."},{heading:`добавлено`,content:"Twig `core/includes/upload/drop_form.twig` — dropzone для модулей."},{heading:`добавлено`,content:"`UploadedFile` — валидация и `moveTo` для `$_FILES`."},{heading:`добавлено`,content:"Документация `FileResponse` для скачивания из AJAX."},{heading:`добавлено`,content:"`FormFieldBuilder::editor()` — TinyMCE; `FormFieldBuilder::codeViewer()` — ACE. Универсальные includes `tinymce_editor_scripts.twig` / `code_editor_scripts.twig` (ACE не реинициализируется на каждый клик по вкладке)."},{heading:`добавлено-1`,content:`Плагин DevCraft — преемник MHAdmin: отдельный раздел в админке DLE (?mod=devcraft).`},{heading:`добавлено-1`,content:`Поддержка DataLife Engine 20.0.`},{heading:`добавлено-1`,content:`Новый внешний вид на базе Metro UI вместо прежнего Semantic UI / Fomantic UI: формы, переключатели, календари и таблицы.`},{heading:`добавлено-1`,content:`Страница логов: таблица подгружается без полной перезагрузки страницы; удобные фильтры с метками.`},{heading:`добавлено-1`,content:`Понятные уведомления при сохранении настроек, удалении записей и проверке ресурсов.`},{heading:`добавлено-1`,content:`Обновление скриптов и стилей с сервера разработчика (assets.devcraft.club).`},{heading:`добавлено-1`,content:`Генератор модулей для создания новых плагинов в структуре DevCraft.`},{heading:`добавлено-1`,content:`Мультиязычность: русский, английский, немецкий, украинский — интерфейс и элементы Metro UI.`},{heading:`изменено`,content:`Интерфейс переведён с Semantic UI (Fomantic UI) на Metro UI — другой внешний вид кнопок, форм и таблиц.`},{heading:`изменено`,content:`Убраны тяжёлые UI-зависимости (Fomantic, jquery-confirm, bootstrap-suggest и др.) — вместо них единая библиотека Metro UI.`},{heading:`изменено`,content:`Файлы плагина находятся в каталоге devcraft/ на сайте, а не в engine/inc/maharder/.`},{heading:`изменено`,content:`Настройки по-прежнему в одном месте (кеш, язык, логирование, Telegram), оформлены вкладками; можно сохранить только корректные поля.`},{heading:`изменено`,content:`Меню «Страницы DLE» — быстрый переход в стандартную админку DLE из боковой панели DevCraft.`},{heading:`изменено`,content:`История изменений: те же release notes, новый формат с группами «Добавлено», «Изменено» и т.д.`},{heading:`удалено`,content:`Название MHAdmin / maharder и вход ?mod=maharder — заменены на DevCraft.`},{heading:`удалено`,content:`Прежний внешний вид Semantic / Fomantic UI (сегменты, старые выпадающие списки и всплывающие подсказки).`},{heading:`удалено`,content:`Font Awesome Pro в комплекте плагина — иконки через Metro UI.`},{heading:`удалено`,content:`Старая структура каталогов maharder (\\_modules, \\_templates); параллельная установка с MHAdmin не предусмотрена.`},{heading:`исправлено`,content:`Фильтры на странице логов (в том числе по дате) работают стабильнее.`},{heading:`предыдущие-версии`,content:`Смотри последнюю версию MH Admin`}],headings:[{id:`upload-api-после-20040`,content:`Upload API (после 200.4.0)`},{id:`добавлено`,content:`Добавлено`},{id:`20040`,content:`200.4.0`},{id:`добавлено-1`,content:`Добавлено`},{id:`изменено`,content:`Изменено`},{id:`удалено`,content:`Удалено`},{id:`исправлено`,content:`Исправлено`},{id:`предыдущие-версии`,content:`Предыдущие версии`}]},s=[{depth:2,url:`#upload-api-после-20040`,title:(0,n.jsx)(n.Fragment,{children:`Upload API (после 200.4.0)`})},{depth:3,url:`#добавлено`,title:(0,n.jsx)(n.Fragment,{children:`Добавлено`})},{depth:2,url:`#20040`,title:(0,n.jsx)(n.Fragment,{children:`200.4.0`})},{depth:3,url:`#добавлено-1`,title:(0,n.jsx)(n.Fragment,{children:`Добавлено`})},{depth:3,url:`#изменено`,title:(0,n.jsx)(n.Fragment,{children:`Изменено`})},{depth:3,url:`#удалено`,title:(0,n.jsx)(n.Fragment,{children:`Удалено`})},{depth:3,url:`#исправлено`,title:(0,n.jsx)(n.Fragment,{children:`Исправлено`})},{depth:2,url:`#предыдущие-версии`,title:(0,n.jsx)(n.Fragment,{children:`Предыдущие версии`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`upload-api-после-20040`,children:`Upload API (после 200.4.0)`}),`
`,(0,n.jsx)(t.h3,{id:`добавлено`,children:`Добавлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DevCraft.Ajax.postMultipart`}),` — XHR multipart с прогрессом.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Twig `,(0,n.jsx)(t.code,{children:`core/includes/upload/drop_form.twig`}),` — dropzone для модулей.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`reference/back-end/classes/UploadedFile`,children:(0,n.jsx)(t.code,{children:`UploadedFile`})}),` — валидация и `,(0,n.jsx)(t.code,{children:`moveTo`}),` для `,(0,n.jsx)(t.code,{children:`$_FILES`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Документация `,(0,n.jsx)(t.a,{href:`reference/back-end/classes/FileResponse`,children:(0,n.jsx)(t.code,{children:`FileResponse`})}),` для скачивания из AJAX.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`reference/back-end/classes/FormFieldBuilder`,children:(0,n.jsx)(t.code,{children:`FormFieldBuilder::editor()`})}),` — TinyMCE; `,(0,n.jsx)(t.a,{href:`reference/back-end/classes/FormFieldBuilder`,children:(0,n.jsx)(t.code,{children:`FormFieldBuilder::codeViewer()`})}),` — ACE. Универсальные includes `,(0,n.jsx)(t.code,{children:`tinymce_editor_scripts.twig`}),` / `,(0,n.jsx)(t.code,{children:`code_editor_scripts.twig`}),` (ACE не реинициализируется на каждый клик по вкладке).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`20040`,children:`200.4.0`}),`
`,(0,n.jsx)(t.h3,{id:`добавлено-1`,children:`Добавлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Плагин DevCraft — преемник MHAdmin: отдельный раздел в админке DLE (?mod=devcraft).`}),`
`,(0,n.jsx)(t.li,{children:`Поддержка DataLife Engine 20.0.`}),`
`,(0,n.jsx)(t.li,{children:`Новый внешний вид на базе Metro UI вместо прежнего Semantic UI / Fomantic UI: формы, переключатели, календари и таблицы.`}),`
`,(0,n.jsx)(t.li,{children:`Страница логов: таблица подгружается без полной перезагрузки страницы; удобные фильтры с метками.`}),`
`,(0,n.jsx)(t.li,{children:`Понятные уведомления при сохранении настроек, удалении записей и проверке ресурсов.`}),`
`,(0,n.jsx)(t.li,{children:`Обновление скриптов и стилей с сервера разработчика (assets.devcraft.club).`}),`
`,(0,n.jsx)(t.li,{children:`Генератор модулей для создания новых плагинов в структуре DevCraft.`}),`
`,(0,n.jsx)(t.li,{children:`Мультиязычность: русский, английский, немецкий, украинский — интерфейс и элементы Metro UI.`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`изменено`,children:`Изменено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Интерфейс переведён с Semantic UI (Fomantic UI) на Metro UI — другой внешний вид кнопок, форм и таблиц.`}),`
`,(0,n.jsx)(t.li,{children:`Убраны тяжёлые UI-зависимости (Fomantic, jquery-confirm, bootstrap-suggest и др.) — вместо них единая библиотека Metro UI.`}),`
`,(0,n.jsx)(t.li,{children:`Файлы плагина находятся в каталоге devcraft/ на сайте, а не в engine/inc/maharder/.`}),`
`,(0,n.jsx)(t.li,{children:`Настройки по-прежнему в одном месте (кеш, язык, логирование, Telegram), оформлены вкладками; можно сохранить только корректные поля.`}),`
`,(0,n.jsx)(t.li,{children:`Меню «Страницы DLE» — быстрый переход в стандартную админку DLE из боковой панели DevCraft.`}),`
`,(0,n.jsx)(t.li,{children:`История изменений: те же release notes, новый формат с группами «Добавлено», «Изменено» и т.д.`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`удалено`,children:`Удалено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Название MHAdmin / maharder и вход ?mod=maharder — заменены на DevCraft.`}),`
`,(0,n.jsx)(t.li,{children:`Прежний внешний вид Semantic / Fomantic UI (сегменты, старые выпадающие списки и всплывающие подсказки).`}),`
`,(0,n.jsx)(t.li,{children:`Font Awesome Pro в комплекте плагина — иконки через Metro UI.`}),`
`,(0,n.jsx)(t.li,{children:`Старая структура каталогов maharder (_modules, _templates); параллельная установка с MHAdmin не предусмотрена.`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`исправлено`,children:`Исправлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Фильтры на странице логов (в том числе по дате) работают стабильнее.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`предыдущие-версии`,children:`Предыдущие версии`}),`
`,(0,n.jsxs)(t.p,{children:[`Смотри последнюю версию `,(0,n.jsx)(t.a,{href:`../../../../deprecated/mhadmin/changelog`,children:`MH Admin`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};