import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: FileResponse`,description:`HTTP-ответ со скачиванием файла из AJAX-handler DevCraft.`},i=new Date(1787218238e3),a=`

## Краткое содержание: [#краткое-содержание]

HTTP-ответ с потоковой отдачей файла (\`Content-Disposition: attachment\`). Альтернатива \`JsonResponse\` для AJAX-handler'ов, которые должны отдать файл на скачивание.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [send()](#method_send)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Http/FileResponse.php\`
* Namespace: \`DevCraft\\Core\\Http\`
* Интерфейс: \`DevCraft\\Core\\Interfaces\\ResponseInterface\`
* С версии: 200.4.0

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct() [#__construct]

**Параметры:**

* \`$filePath\` — абсолютный путь к существующему файлу на диске;
* \`$downloadName\` — имя в заголовке; по умолчанию \`basename($filePath)\`;
* \`$mimeType\` — MIME; по умолчанию \`application/octet-stream\`.

<span id="method_send" />

### send() [#send]

Очищает буферы вывода, отправляет заголовки и тело файла через \`readfile\`. Бросает \`RuntimeException\`, если файл недоступен.

***

## Пример [#пример]

\`\`\`php
use DevCraft\\Core\\Http\\FileResponse;

return new FileResponse(
    ROOT_DIR . '/uploads/export.csv',
    'export.csv',
    'text/csv',
);
\`\`\`

Для загрузки файла **на сервер** используйте [\`UploadedFile\`](UploadedFile) и [\`postMultipart\`](../../front-end/templates#multipart-загрузка-файлов).
`,o={contents:[{heading:`краткое-содержание`,content:"HTTP-ответ с потоковой отдачей файла (`Content-Disposition: attachment`). Альтернатива `JsonResponse` для AJAX-handler'ов, которые должны отдать файл на скачивание."},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public send()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Http/FileResponse.php`"},{heading:`подробности`,content:"Namespace: `DevCraft\\Core\\Http`"},{heading:`подробности`,content:"Интерфейс: `DevCraft\\Core\\Interfaces\\ResponseInterface`"},{heading:`подробности`,content:`С версии: 200.4.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$filePath` — абсолютный путь к существующему файлу на диске;"},{heading:`__construct`,content:"`$downloadName` — имя в заголовке; по умолчанию `basename($filePath)`;"},{heading:`__construct`,content:"`$mimeType` — MIME; по умолчанию `application/octet-stream`."},{heading:`send`,content:"Очищает буферы вывода, отправляет заголовки и тело файла через `readfile`. Бросает `RuntimeException`, если файл недоступен."},{heading:`пример`,content:"Для загрузки файла **на сервер** используйте `UploadedFile` и `postMultipart`."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct()`},{id:`send`,content:`send()`},{id:`пример`,content:`Пример`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct()`})},{depth:3,url:`#send`,title:(0,n.jsx)(n.Fragment,{children:`send()`})},{depth:2,url:`#пример`,title:(0,n.jsx)(n.Fragment,{children:`Пример`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsxs)(t.p,{children:[`HTTP-ответ с потоковой отдачей файла (`,(0,n.jsx)(t.code,{children:`Content-Disposition: attachment`}),`). Альтернатива `,(0,n.jsx)(t.code,{children:`JsonResponse`}),` для AJAX-handler'ов, которые должны отдать файл на скачивание.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_send`,children:`send()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Http/FileResponse.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Namespace: `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Http`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Интерфейс: `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Interfaces\\ResponseInterface`})]}),`
`,(0,n.jsx)(t.li,{children:`С версии: 200.4.0`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct()`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filePath`}),` — абсолютный путь к существующему файлу на диске;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$downloadName`}),` — имя в заголовке; по умолчанию `,(0,n.jsx)(t.code,{children:`basename($filePath)`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$mimeType`}),` — MIME; по умолчанию `,(0,n.jsx)(t.code,{children:`application/octet-stream`}),`.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_send`}),`
`,(0,n.jsx)(t.h3,{id:`send`,children:`send()`}),`
`,(0,n.jsxs)(t.p,{children:[`Очищает буферы вывода, отправляет заголовки и тело файла через `,(0,n.jsx)(t.code,{children:`readfile`}),`. Бросает `,(0,n.jsx)(t.code,{children:`RuntimeException`}),`, если файл недоступен.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Http\\FileResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FileResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    ROOT_DIR`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '/uploads/export.csv'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'export.csv'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'text/csv'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Для загрузки файла `,(0,n.jsx)(t.strong,{children:`на сервер`}),` используйте `,(0,n.jsx)(t.a,{href:`UploadedFile`,children:(0,n.jsx)(t.code,{children:`UploadedFile`})}),` и `,(0,n.jsx)(t.a,{href:`../../front-end/templates#multipart-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2`,children:(0,n.jsx)(t.code,{children:`postMultipart`})}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};