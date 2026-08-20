import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: UploadedFile`,description:`Обёртка над $_FILES для multipart-загрузок в админке DevCraft.`},i=new Date(1787223655e3),a=`

## Краткое содержание: [#краткое-содержание]

Обёртка над элементом \`$_FILES\` для multipart-загрузок: валидация, проверка расширения, перенос во временный/целевой путь.

***

### Свойства [#свойства]

*Нет публичных свойств.*

***

### Методы [#методы]

* public static [fromFilesKey()](#method_fromFilesKey)
* public [originalName()](#method_originalName)
* public [tmpName()](#method_tmpName)
* public [size()](#method_size)
* public [mime()](#method_mime)
* public [toArray()](#method_toArray)
* public [assertExtension()](#method_assertExtension)
* public [moveTo()](#method_moveTo)

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/Http/UploadedFile.php\`
* Namespace: \`DevCraft\\Core\\Http\`

***

## Детали [#детали]

### Методы [#методы-1]

<span id="method_fromFilesKey" />

### fromFilesKey() [#fromfileskey]

Создаёт экземпляр из ключа \`$_FILES\`. Бросает \`RuntimeException\`, если файл не передан, код ошибки загрузки не \`UPLOAD_ERR_OK\` или временный файл недоступен.

**Параметры:**

* \`$key\` — Имя поля в \`$_FILES\` (например \`file\`).

**Возвращает:** \`self\`

<span id="method_originalName" />

### originalName() [#originalname]

**Возвращает:** \`string\` — исходное имя файла (\`basename\`).

<span id="method_tmpName" />

### tmpName() [#tmpname]

**Возвращает:** \`string\` — путь к временному файлу PHP.

<span id="method_size" />

### size() [#size]

**Возвращает:** \`int\` — размер в байтах.

<span id="method_mime" />

### mime() [#mime]

**Возвращает:** \`string\` — MIME из \`$_FILES['type']\` (не доверять слепо).

<span id="method_toArray" />

### toArray() [#toarray]

**Возвращает:** \`array\` — сырой элемент \`$_FILES\`.

<span id="method_assertExtension" />

### assertExtension() [#assertextension]

Проверяет расширение (без точки, нижний регистр) против белого списка.

**Параметры:**

* \`$allowed\` — \`list<string>\`, например \`['jpg', 'png', 'webp']\`.

<span id="method_moveTo" />

### moveTo() [#moveto]

Создаёт каталог при необходимости и вызывает \`move_uploaded_file\`.

**Параметры:**

* \`$targetPath\` — абсолютный путь назначения.

***

## Пример handler [#пример-handler]

\`\`\`php
use DevCraft\\Core\\Http\\UploadedFile;
use DevCraft\\Core\\Http\\JsonResponse;

$uploaded = UploadedFile::fromFilesKey('file');
$uploaded->assertExtension(['jpg', 'png', 'gif', 'webp']);
$uploaded->moveTo($targetDir . '/' . $storedName);

return JsonResponse::ok(['id' => $id]);
\`\`\`

Клиент: \`DevCraft.Ajax.postMultipart(url, formData, onProgress?)\` — см. [Шаблоны фронтенда](../../front-end/templates#multipart-загрузка-файлов).
`,o={contents:[{heading:`краткое-содержание`,content:"Обёртка над элементом `$_FILES` для multipart-загрузок: валидация, проверка расширения, перенос во временный/целевой путь."},{heading:`свойства`,content:`*Нет публичных свойств.*`},{heading:`методы`,content:`public static fromFilesKey()`},{heading:`методы`,content:`public originalName()`},{heading:`методы`,content:`public tmpName()`},{heading:`методы`,content:`public size()`},{heading:`методы`,content:`public mime()`},{heading:`методы`,content:`public toArray()`},{heading:`методы`,content:`public assertExtension()`},{heading:`методы`,content:`public moveTo()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/Http/UploadedFile.php`"},{heading:`подробности`,content:"Namespace: `DevCraft\\Core\\Http`"},{heading:`fromfileskey`,content:"Создаёт экземпляр из ключа `$_FILES`. Бросает `RuntimeException`, если файл не передан, код ошибки загрузки не `UPLOAD_ERR_OK` или временный файл недоступен."},{heading:`fromfileskey`,content:`**Параметры:**`},{heading:`fromfileskey`,content:"`$key` — Имя поля в `$_FILES` (например `file`)."},{heading:`fromfileskey`,content:"**Возвращает:** `self`"},{heading:`originalname`,content:"**Возвращает:** `string` — исходное имя файла (`basename`)."},{heading:`tmpname`,content:"**Возвращает:** `string` — путь к временному файлу PHP."},{heading:`size`,content:"**Возвращает:** `int` — размер в байтах."},{heading:`mime`,content:"**Возвращает:** `string` — MIME из `$_FILES['type']` (не доверять слепо)."},{heading:`toarray`,content:"**Возвращает:** `array` — сырой элемент `$_FILES`."},{heading:`assertextension`,content:`Проверяет расширение (без точки, нижний регистр) против белого списка.`},{heading:`assertextension`,content:`**Параметры:**`},{heading:`assertextension`,content:"`$allowed` — `list<string>`, например `['jpg', 'png', 'webp']`."},{heading:`moveto`,content:"Создаёт каталог при необходимости и вызывает `move_uploaded_file`."},{heading:`moveto`,content:`**Параметры:**`},{heading:`moveto`,content:"`$targetPath` — абсолютный путь назначения."},{heading:`пример-handler`,content:"Клиент: `DevCraft.Ajax.postMultipart(url, formData, onProgress?)` — см. Шаблоны фронтенда."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`методы-1`,content:`Методы`},{id:`fromfileskey`,content:`fromFilesKey()`},{id:`originalname`,content:`originalName()`},{id:`tmpname`,content:`tmpName()`},{id:`size`,content:`size()`},{id:`mime`,content:`mime()`},{id:`toarray`,content:`toArray()`},{id:`assertextension`,content:`assertExtension()`},{id:`moveto`,content:`moveTo()`},{id:`пример-handler`,content:`Пример handler`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#fromfileskey`,title:(0,n.jsx)(n.Fragment,{children:`fromFilesKey()`})},{depth:3,url:`#originalname`,title:(0,n.jsx)(n.Fragment,{children:`originalName()`})},{depth:3,url:`#tmpname`,title:(0,n.jsx)(n.Fragment,{children:`tmpName()`})},{depth:3,url:`#size`,title:(0,n.jsx)(n.Fragment,{children:`size()`})},{depth:3,url:`#mime`,title:(0,n.jsx)(n.Fragment,{children:`mime()`})},{depth:3,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:`toArray()`})},{depth:3,url:`#assertextension`,title:(0,n.jsx)(n.Fragment,{children:`assertExtension()`})},{depth:3,url:`#moveto`,title:(0,n.jsx)(n.Fragment,{children:`moveTo()`})},{depth:2,url:`#пример-handler`,title:(0,n.jsx)(n.Fragment,{children:`Пример handler`})}];function c(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsxs)(t.p,{children:[`Обёртка над элементом `,(0,n.jsx)(t.code,{children:`$_FILES`}),` для multipart-загрузок: валидация, проверка расширения, перенос во временный/целевой путь.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Нет публичных свойств.`})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public static `,(0,n.jsx)(t.a,{href:`#method_fromFilesKey`,children:`fromFilesKey()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_originalName`,children:`originalName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_tmpName`,children:`tmpName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_size`,children:`size()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_mime`,children:`mime()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_toArray`,children:`toArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_assertExtension`,children:`assertExtension()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_moveTo`,children:`moveTo()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/Http/UploadedFile.php`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Namespace: `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Http`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_fromFilesKey`}),`
`,(0,n.jsx)(t.h3,{id:`fromfileskey`,children:`fromFilesKey()`}),`
`,(0,n.jsxs)(t.p,{children:[`Создаёт экземпляр из ключа `,(0,n.jsx)(t.code,{children:`$_FILES`}),`. Бросает `,(0,n.jsx)(t.code,{children:`RuntimeException`}),`, если файл не передан, код ошибки загрузки не `,(0,n.jsx)(t.code,{children:`UPLOAD_ERR_OK`}),` или временный файл недоступен.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` — Имя поля в `,(0,n.jsx)(t.code,{children:`$_FILES`}),` (например `,(0,n.jsx)(t.code,{children:`file`}),`).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(`span`,{id:`method_originalName`}),`
`,(0,n.jsx)(t.h3,{id:`originalname`,children:`originalName()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — исходное имя файла (`,(0,n.jsx)(t.code,{children:`basename`}),`).`]}),`
`,(0,n.jsx)(`span`,{id:`method_tmpName`}),`
`,(0,n.jsx)(t.h3,{id:`tmpname`,children:`tmpName()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — путь к временному файлу PHP.`]}),`
`,(0,n.jsx)(`span`,{id:`method_size`}),`
`,(0,n.jsx)(t.h3,{id:`size`,children:`size()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — размер в байтах.`]}),`
`,(0,n.jsx)(`span`,{id:`method_mime`}),`
`,(0,n.jsx)(t.h3,{id:`mime`,children:`mime()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — MIME из `,(0,n.jsx)(t.code,{children:`$_FILES['type']`}),` (не доверять слепо).`]}),`
`,(0,n.jsx)(`span`,{id:`method_toArray`}),`
`,(0,n.jsx)(t.h3,{id:`toarray`,children:`toArray()`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` — сырой элемент `,(0,n.jsx)(t.code,{children:`$_FILES`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`method_assertExtension`}),`
`,(0,n.jsx)(t.h3,{id:`assertextension`,children:`assertExtension()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет расширение (без точки, нижний регистр) против белого списка.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$allowed`}),` — `,(0,n.jsx)(t.code,{children:`list<string>`}),`, например `,(0,n.jsx)(t.code,{children:`['jpg', 'png', 'webp']`}),`.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_moveTo`}),`
`,(0,n.jsx)(t.h3,{id:`moveto`,children:`moveTo()`}),`
`,(0,n.jsxs)(t.p,{children:[`Создаёт каталог при необходимости и вызывает `,(0,n.jsx)(t.code,{children:`move_uploaded_file`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$targetPath`}),` — абсолютный путь назначения.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`пример-handler`,children:`Пример handler`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Http\\UploadedFile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Http\\JsonResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` UploadedFile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromFilesKey`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'file'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`assertExtension`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'jpg'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'png'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'gif'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'webp'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$uploaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`moveTo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($targetDir `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '/'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $storedName);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` JsonResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`ok`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $id]);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Клиент: `,(0,n.jsx)(t.code,{children:`DevCraft.Ajax.postMultipart(url, formData, onProgress?)`}),` — см. `,(0,n.jsx)(t.a,{href:`../../front-end/templates#multipart-%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0-%D1%84%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2`,children:`Шаблоны фронтенда`}),`.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};