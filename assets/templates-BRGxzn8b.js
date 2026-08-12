import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Шаблоны`,description:`Структура Twig-шаблонов DevCraft Admin.`},i=new Date(1786544989e3),a=`

HTML админки рендерится через [Twig](https://twig.symfony.com/) с автоэкранированием. Фабрика окружения — [EnvironmentFactory](../back-end/classes/EnvironmentFactory).

## Расположение [#расположение]

| Каталог                                | Назначение                                 |
| -------------------------------------- | ------------------------------------------ |
| \`devcraft/src/templates/core/\`         | Общий каркас: layout, меню, формы, макросы |
| \`devcraft/src/modules/{mod}/templates\` | Шаблоны конкретного модуля                 |

Отдельная \`.md\`-страница для каждого \`.twig\`-файла **не создаётся** — описывается только структура каталогов.

## Структура \`core/\` [#структура-core]

\`\`\`
devcraft/src/templates/core/
├── layout.twig           # Базовый макет Metro UI
├── partials/
│   ├── header.twig
│   ├── sidebar.twig
│   ├── breadcrumb.twig
│   └── footer.twig
├── forms/
│   ├── field.twig
│   ├── section.twig
│   └── tabs.twig
└── macros/
    └── ui.twig
\`\`\`

Точный список файлов см. в репозитории плагина; имена могут дополняться при обновлениях.

## Переменные шаблона [#переменные-шаблона]

Страницы (\`PageInterface\`) передают в Twig контекст через \`PageOrchestrator\`:

* \`module\` — метаданные из manifest;
* \`breadcrumbs\` — цепочка \`BreadCrumb\`;
* \`settings\` — значения из конфигурации;
* \`menu\` — пункты навигации модуля.

## Модульные шаблоны [#модульные-шаблоны]

Генератор модулей создаёт стартовый шаблон в \`templates/modules/{slug}/\`. Наследуйте \`core/layout.twig\`:

\`\`\`twig
{% extends 'core/layout.twig' %}
{% block content %}
  
{% endblock %}
\`\`\`

## AJAX (\`DevCraft.Ajax.post\`) [#ajax-devcraftajaxpost]

Layout задаёт \`body[data-mod="{{ mod }}"]\` и \`data-ajax-base\`.\\
\`DevCraft.Ajax.post(method, data)\` вызывает:

\`{ajaxBase}?controller=admin&method={method}&mod={data-mod}\`

Без \`mod\` сателлитные методы (\`save_suggestion\` и т.п.) не находятся в реестре.

## Multipart-загрузка файлов [#multipart-загрузка-файлов]

Общий транспорт панели (не отдельная страница модуля Admin):

| Слой | Артефакт                                                                  |
| ---- | ------------------------------------------------------------------------- |
| JS   | \`DevCraft.Ajax.postMultipart(url, formData, onProgress?)\` в \`devcraft.js\` |
| Twig | \`core/includes/upload/drop_form.twig\`                                     |
| PHP  | [\`UploadedFile\`](../back-end/classes/UploadedFile)                        |

### Контракт FormData [#контракт-formdata]

1. Поле файла — обычно \`file\` (как в \`UploadedFile::fromFilesKey('file')\`).
2. JSON-метаданные модуля — поле \`data\` (строка JSON), либо отдельные ключи.
3. \`user_hash\` добавляется автоматически, если его ещё нет в \`FormData\`.
4. \`onProgress(loaded, total)\` — опциональный колбэк прогресса XHR.

\`\`\`javascript
const fd = new FormData();
fd.append('data', JSON.stringify({ kind: 'image' }));
fd.append('file', fileInput.files[0]);

DevCraft.Ajax.postMultipart(DevCraft.Ajax.url('upload_static_file'), fd, function (loaded, total) {
  // прогресс-бар
}).then(function (response) {
  DevCraft.Ajax.handleNotice(response);
});
\`\`\`

\`\`\`php
$uploaded = \\DevCraft\\Core\\Http\\UploadedFile::fromFilesKey('file');
$uploaded->assertExtension(['jpg', 'png', 'webp']);
$uploaded->moveTo($targetPath);
\`\`\`

Скачивание файла клиенту — [\`FileResponse\`](../back-end/classes/FileResponse), не multipart.

## См. также [#см-также]

* [Генератор модулей](../../guides/new_module)
* [EnvironmentFactory](../back-end/classes/EnvironmentFactory)
`,o={contents:[{heading:void 0,content:`HTML админки рендерится через Twig с автоэкранированием. Фабрика окружения — EnvironmentFactory.`},{heading:`расположение`,content:`Каталог`},{heading:`расположение`,content:`Назначение`},{heading:`расположение`,content:"`devcraft/src/templates/core/`"},{heading:`расположение`,content:`Общий каркас: layout, меню, формы, макросы`},{heading:`расположение`,content:"`devcraft/src/modules/{mod}/templates`"},{heading:`расположение`,content:`Шаблоны конкретного модуля`},{heading:`расположение`,content:"Отдельная `.md`-страница для каждого `.twig`-файла **не создаётся** — описывается только структура каталогов."},{heading:`структура-core`,content:`Точный список файлов см. в репозитории плагина; имена могут дополняться при обновлениях.`},{heading:`переменные-шаблона`,content:"Страницы (`PageInterface`) передают в Twig контекст через `PageOrchestrator`:"},{heading:`переменные-шаблона`,content:"`module` — метаданные из manifest;"},{heading:`переменные-шаблона`,content:"`breadcrumbs` — цепочка `BreadCrumb`;"},{heading:`переменные-шаблона`,content:"`settings` — значения из конфигурации;"},{heading:`переменные-шаблона`,content:"`menu` — пункты навигации модуля."},{heading:`модульные-шаблоны`,content:"Генератор модулей создаёт стартовый шаблон в `templates/modules/{slug}/`. Наследуйте `core/layout.twig`:"},{heading:`ajax-devcraftajaxpost`,content:'Layout задаёт `body[data-mod="{{ mod }}"]` и `data-ajax-base`.\\\n`DevCraft.Ajax.post(method, data)` вызывает:'},{heading:`ajax-devcraftajaxpost`,content:"`{ajaxBase}?controller=admin&method={method}&mod={data-mod}`"},{heading:`ajax-devcraftajaxpost`,content:"Без `mod` сателлитные методы (`save_suggestion` и т.п.) не находятся в реестре."},{heading:`multipart-загрузка-файлов`,content:`Общий транспорт панели (не отдельная страница модуля Admin):`},{heading:`multipart-загрузка-файлов`,content:`Слой`},{heading:`multipart-загрузка-файлов`,content:`Артефакт`},{heading:`multipart-загрузка-файлов`,content:`JS`},{heading:`multipart-загрузка-файлов`,content:"`DevCraft.Ajax.postMultipart(url, formData, onProgress?)` в `devcraft.js`"},{heading:`multipart-загрузка-файлов`,content:`Twig`},{heading:`multipart-загрузка-файлов`,content:"`core/includes/upload/drop_form.twig`"},{heading:`multipart-загрузка-файлов`,content:`PHP`},{heading:`multipart-загрузка-файлов`,content:"`UploadedFile`"},{heading:`контракт-formdata`,content:"Поле файла — обычно `file` (как в `UploadedFile::fromFilesKey('file')`)."},{heading:`контракт-formdata`,content:"JSON-метаданные модуля — поле `data` (строка JSON), либо отдельные ключи."},{heading:`контракт-formdata`,content:"`user_hash` добавляется автоматически, если его ещё нет в `FormData`."},{heading:`контракт-formdata`,content:"`onProgress(loaded, total)` — опциональный колбэк прогресса XHR."},{heading:`контракт-formdata`,content:"Скачивание файла клиенту — `FileResponse`, не multipart."},{heading:`см-также`,content:`Генератор модулей`},{heading:`см-также`,content:`EnvironmentFactory`}],headings:[{id:`расположение`,content:`Расположение`},{id:`структура-core`,content:"Структура `core/`"},{id:`переменные-шаблона`,content:`Переменные шаблона`},{id:`модульные-шаблоны`,content:`Модульные шаблоны`},{id:`ajax-devcraftajaxpost`,content:"AJAX (`DevCraft.Ajax.post`)"},{id:`multipart-загрузка-файлов`,content:`Multipart-загрузка файлов`},{id:`контракт-formdata`,content:`Контракт FormData`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#расположение`,title:(0,n.jsx)(n.Fragment,{children:`Расположение`})},{depth:2,url:`#структура-core`,title:(0,n.jsxs)(n.Fragment,{children:[`Структура `,(0,n.jsx)(`code`,{children:`core/`})]})},{depth:2,url:`#переменные-шаблона`,title:(0,n.jsx)(n.Fragment,{children:`Переменные шаблона`})},{depth:2,url:`#модульные-шаблоны`,title:(0,n.jsx)(n.Fragment,{children:`Модульные шаблоны`})},{depth:2,url:`#ajax-devcraftajaxpost`,title:(0,n.jsxs)(n.Fragment,{children:[`AJAX (`,(0,n.jsx)(`code`,{children:`DevCraft.Ajax.post`}),`)`]})},{depth:2,url:`#multipart-загрузка-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Multipart-загрузка файлов`})},{depth:3,url:`#контракт-formdata`,title:(0,n.jsx)(n.Fragment,{children:`Контракт FormData`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`HTML админки рендерится через `,(0,n.jsx)(t.a,{href:`https://twig.symfony.com/`,children:`Twig`}),` с автоэкранированием. Фабрика окружения — `,(0,n.jsx)(t.a,{href:`../back-end/classes/EnvironmentFactory`,children:`EnvironmentFactory`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`расположение`,children:`Расположение`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Каталог`}),(0,n.jsx)(t.th,{children:`Назначение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/src/templates/core/`})}),(0,n.jsx)(t.td,{children:`Общий каркас: layout, меню, формы, макросы`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/{mod}/templates`})}),(0,n.jsx)(t.td,{children:`Шаблоны конкретного модуля`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Отдельная `,(0,n.jsx)(t.code,{children:`.md`}),`-страница для каждого `,(0,n.jsx)(t.code,{children:`.twig`}),`-файла `,(0,n.jsx)(t.strong,{children:`не создаётся`}),` — описывается только структура каталогов.`]}),`
`,(0,n.jsxs)(t.h2,{id:`структура-core`,children:[`Структура `,(0,n.jsx)(t.code,{children:`core/`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/src/templates/core/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── layout.twig           # Базовый макет Metro UI`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── partials/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── header.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── sidebar.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── breadcrumb.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── footer.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── forms/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── field.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── section.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── tabs.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── macros/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── ui.twig`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Точный список файлов см. в репозитории плагина; имена могут дополняться при обновлениях.`}),`
`,(0,n.jsx)(t.h2,{id:`переменные-шаблона`,children:`Переменные шаблона`}),`
`,(0,n.jsxs)(t.p,{children:[`Страницы (`,(0,n.jsx)(t.code,{children:`PageInterface`}),`) передают в Twig контекст через `,(0,n.jsx)(t.code,{children:`PageOrchestrator`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`module`}),` — метаданные из manifest;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`breadcrumbs`}),` — цепочка `,(0,n.jsx)(t.code,{children:`BreadCrumb`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`settings`}),` — значения из конфигурации;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`menu`}),` — пункты навигации модуля.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`модульные-шаблоны`,children:`Модульные шаблоны`}),`
`,(0,n.jsxs)(t.p,{children:[`Генератор модулей создаёт стартовый шаблон в `,(0,n.jsx)(t.code,{children:`templates/modules/{slug}/`}),`. Наследуйте `,(0,n.jsx)(t.code,{children:`core/layout.twig`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'core/layout.twig'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` %}`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`block`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` content %}`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  `})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`endblock`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` %}`})]})]})})}),`
`,(0,n.jsxs)(t.h2,{id:`ajax-devcraftajaxpost`,children:[`AJAX (`,(0,n.jsx)(t.code,{children:`DevCraft.Ajax.post`}),`)`]}),`
`,(0,n.jsxs)(t.p,{children:[`Layout задаёт `,(0,n.jsx)(t.code,{children:`body[data-mod="{{ mod }}"]`}),` и `,(0,n.jsx)(t.code,{children:`data-ajax-base`}),`.`,(0,n.jsx)(t.br,{}),`
`,(0,n.jsx)(t.code,{children:`DevCraft.Ajax.post(method, data)`}),` вызывает:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`{ajaxBase}?controller=admin&method={method}&mod={data-mod}`})}),`
`,(0,n.jsxs)(t.p,{children:[`Без `,(0,n.jsx)(t.code,{children:`mod`}),` сателлитные методы (`,(0,n.jsx)(t.code,{children:`save_suggestion`}),` и т.п.) не находятся в реестре.`]}),`
`,(0,n.jsx)(t.h2,{id:`multipart-загрузка-файлов`,children:`Multipart-загрузка файлов`}),`
`,(0,n.jsx)(t.p,{children:`Общий транспорт панели (не отдельная страница модуля Admin):`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Слой`}),(0,n.jsx)(t.th,{children:`Артефакт`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`JS`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`DevCraft.Ajax.postMultipart(url, formData, onProgress?)`}),` в `,(0,n.jsx)(t.code,{children:`devcraft.js`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Twig`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`core/includes/upload/drop_form.twig`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../back-end/classes/UploadedFile`,children:(0,n.jsx)(t.code,{children:`UploadedFile`})})})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`контракт-formdata`,children:`Контракт FormData`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Поле файла — обычно `,(0,n.jsx)(t.code,{children:`file`}),` (как в `,(0,n.jsx)(t.code,{children:`UploadedFile::fromFilesKey('file')`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`JSON-метаданные модуля — поле `,(0,n.jsx)(t.code,{children:`data`}),` (строка JSON), либо отдельные ключи.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`user_hash`}),` добавляется автоматически, если его ещё нет в `,(0,n.jsx)(t.code,{children:`FormData`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`onProgress(loaded, total)`}),` — опциональный колбэк прогресса XHR.`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` fd`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#B392F0`},children:` FormData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`fd.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`append`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'data'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`JSON`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`stringify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`({ kind: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'image'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` }));`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`fd.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`append`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'file'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, fileInput.files[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`DevCraft.Ajax.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`postMultipart`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(DevCraft.Ajax.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`url`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'upload_static_file'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`), fd, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`loaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`total`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`  // прогресс-бар`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}).`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`then`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`response`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`  DevCraft.Ajax.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`handleNotice`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(response);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`});`})})]})})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\DevCraft\\Core\\Http\\UploadedFile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromFilesKey`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'file'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`assertExtension`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'jpg'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'png'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'webp'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`moveTo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($targetPath);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Скачивание файла клиенту — `,(0,n.jsx)(t.a,{href:`../back-end/classes/FileResponse`,children:(0,n.jsx)(t.code,{children:`FileResponse`})}),`, не multipart.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/new_module`,children:`Генератор модулей`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../back-end/classes/EnvironmentFactory`,children:`EnvironmentFactory`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};