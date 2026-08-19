import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ResponseInterface`,description:`Документация по responseinterface. Часть API wrapper для КиноПоиска.`},i=new Date(1787145028e3),a=`

Интерфейс для объектов ответов Kinopoisk API.

## Описание [#описание]

Определяет общий контракт для всех типов ответов API, включая методы для создания объектов из массивов данных и валидации целевых классов. Обеспечивает единообразие в обработке различных типов ответов.

## Основные возможности [#основные-возможности]

* Создание экземпляров ответов из данных API
* Валидация классов для преобразования элементов
* Унификация работы с различными типами ответов

## Методы [#методы]

### \`fromArray(array $data, string $cls): object\` [#fromarrayarray-data-string-cls-object]

Создает экземпляр ответа из массива данных API.

**Параметры:**

* \`$data\` (array) - Массив данных от API, содержащий структуру ответа
* \`$cls\` (string) - Полное имя класса для преобразования элементов массива

**Возвращает:**

* \`object\` - Новый экземпляр класса-реализации с преобразованными данными

**Исключения:**

* \`KpValidationException\` - Если указанный класс не существует
* \`KpValidationException\` - Если класс не имеет метода fromArray
* \`KpValidationException\` - Если данные имеют неверный формат

### \`checkClass(string $cls): void\` [#checkclassstring-cls-void]

Проверяет существование и совместимость класса.

**Параметры:**

* \`$cls\` (string) - Полное имя класса для проверки

**Исключения:**

* \`KpValidationException\` - Если указанный класс не существует
* \`KpValidationException\` - Если класс не имеет статического метода fromArray

### \`toArray(): array\` [#toarray-array]

Преобразует объект в массив данных.

**Возвращает:**

* \`array\` - Массив данных, представляющий объект ответа

**Пример:**

\`\`\`php
$response = SomeResponse::fromArray($apiData);
$array = $response->toArray();

// Использование для сериализации
$json = json_encode($array);

// Использование для логирования
$logger->info('Ответ API', $array);
\`\`\`

## Пример использования [#пример-использования]

\`\`\`php
// Создание ответа из данных API
$apiData = [
    'total' => 100,
    'items' => [
        ['id' => 1, 'name' => 'Фильм 1'],
        ['id' => 2, 'name' => 'Фильм 2']
    ]
];

$response = DefaultResponse::fromArray($apiData, Film::class);

// Преобразование в массив
$array = $response->toArray();
\`\`\`

# Связанные файлы [#связанные-файлы]

* [DefaultResponse](../responses/default-response) - Базовый ответ
* [PaginatedResponse](../responses/paginated-response) - Пагинированный ответ
* [KeywordSearchResponse](../responses/keyword-search-response) - Ответ поиска

***

**📚 Навигация:** [Главная](../index) → [Интерфейсы](index) → ResponseInterface
`,o={contents:[{heading:void 0,content:`Интерфейс для объектов ответов Kinopoisk API.`},{heading:`описание`,content:`Определяет общий контракт для всех типов ответов API, включая методы для создания объектов из массивов данных и валидации целевых классов. Обеспечивает единообразие в обработке различных типов ответов.`},{heading:`основные-возможности`,content:`Создание экземпляров ответов из данных API`},{heading:`основные-возможности`,content:`Валидация классов для преобразования элементов`},{heading:`основные-возможности`,content:`Унификация работы с различными типами ответов`},{heading:`fromarrayarray-data-string-cls-object`,content:`Создает экземпляр ответа из массива данных API.`},{heading:`fromarrayarray-data-string-cls-object`,content:`**Параметры:**`},{heading:`fromarrayarray-data-string-cls-object`,content:"`$data` (array) - Массив данных от API, содержащий структуру ответа"},{heading:`fromarrayarray-data-string-cls-object`,content:"`$cls` (string) - Полное имя класса для преобразования элементов массива"},{heading:`fromarrayarray-data-string-cls-object`,content:`**Возвращает:**`},{heading:`fromarrayarray-data-string-cls-object`,content:"`object` - Новый экземпляр класса-реализации с преобразованными данными"},{heading:`fromarrayarray-data-string-cls-object`,content:`**Исключения:**`},{heading:`fromarrayarray-data-string-cls-object`,content:"`KpValidationException` - Если указанный класс не существует"},{heading:`fromarrayarray-data-string-cls-object`,content:"`KpValidationException` - Если класс не имеет метода fromArray"},{heading:`fromarrayarray-data-string-cls-object`,content:"`KpValidationException` - Если данные имеют неверный формат"},{heading:`checkclassstring-cls-void`,content:`Проверяет существование и совместимость класса.`},{heading:`checkclassstring-cls-void`,content:`**Параметры:**`},{heading:`checkclassstring-cls-void`,content:"`$cls` (string) - Полное имя класса для проверки"},{heading:`checkclassstring-cls-void`,content:`**Исключения:**`},{heading:`checkclassstring-cls-void`,content:"`KpValidationException` - Если указанный класс не существует"},{heading:`checkclassstring-cls-void`,content:"`KpValidationException` - Если класс не имеет статического метода fromArray"},{heading:`toarray-array`,content:`Преобразует объект в массив данных.`},{heading:`toarray-array`,content:`**Возвращает:**`},{heading:`toarray-array`,content:"`array` - Массив данных, представляющий объект ответа"},{heading:`toarray-array`,content:`**Пример:**`},{heading:`связанные-файлы`,content:`DefaultResponse - Базовый ответ`},{heading:`связанные-файлы`,content:`PaginatedResponse - Пагинированный ответ`},{heading:`связанные-файлы`,content:`KeywordSearchResponse - Ответ поиска`},{heading:`связанные-файлы`,content:`**📚 Навигация:** Главная → Интерфейсы → ResponseInterface`}],headings:[{id:`описание`,content:`Описание`},{id:`основные-возможности`,content:`Основные возможности`},{id:`методы`,content:`Методы`},{id:`fromarrayarray-data-string-cls-object`,content:"`fromArray(array $data, string $cls): object`"},{id:`checkclassstring-cls-void`,content:"`checkClass(string $cls): void`"},{id:`toarray-array`,content:"`toArray(): array`"},{id:`пример-использования`,content:`Пример использования`},{id:`связанные-файлы`,content:`Связанные файлы`}]},s=[{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:2,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#fromarrayarray-data-string-cls-object`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray(array $data, string $cls): object`})})},{depth:3,url:`#checkclassstring-cls-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`checkClass(string $cls): void`})})},{depth:3,url:`#toarray-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray(): array`})})},{depth:2,url:`#пример-использования`,title:(0,n.jsx)(n.Fragment,{children:`Пример использования`})},{depth:1,url:`#связанные-файлы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные файлы`})}];function c(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Интерфейс для объектов ответов Kinopoisk API.`}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Определяет общий контракт для всех типов ответов API, включая методы для создания объектов из массивов данных и валидации целевых классов. Обеспечивает единообразие в обработке различных типов ответов.`}),`
`,(0,n.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Создание экземпляров ответов из данных API`}),`
`,(0,n.jsx)(t.li,{children:`Валидация классов для преобразования элементов`}),`
`,(0,n.jsx)(t.li,{children:`Унификация работы с различными типами ответов`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`fromarrayarray-data-string-cls-object`,children:(0,n.jsx)(t.code,{children:`fromArray(array $data, string $cls): object`})}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр ответа из массива данных API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array) - Массив данных от API, содержащий структуру ответа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cls`}),` (string) - Полное имя класса для преобразования элементов массива`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`object`}),` - Новый экземпляр класса-реализации с преобразованными данными`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KpValidationException`}),` - Если указанный класс не существует`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KpValidationException`}),` - Если класс не имеет метода fromArray`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KpValidationException`}),` - Если данные имеют неверный формат`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`checkclassstring-cls-void`,children:(0,n.jsx)(t.code,{children:`checkClass(string $cls): void`})}),`
`,(0,n.jsx)(t.p,{children:`Проверяет существование и совместимость класса.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cls`}),` (string) - Полное имя класса для проверки`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KpValidationException`}),` - Если указанный класс не существует`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KpValidationException`}),` - Если класс не имеет статического метода fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`toarray-array`,children:(0,n.jsx)(t.code,{children:`toArray(): array`})}),`
`,(0,n.jsx)(t.p,{children:`Преобразует объект в массив данных.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`array`}),` - Массив данных, представляющий объект ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` SomeResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$array `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $response`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Использование для сериализации`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$json `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` json_encode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($array);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Использование для логирования`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$logger`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`info`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Ответ API'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, $array);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`пример-использования`,children:`Пример использования`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание ответа из данных API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$apiData `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'total'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 100`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'items'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Фильм 1'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Фильм 2'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    ]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DefaultResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Преобразование в массив`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$array `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $response`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsx)(t.h1,{id:`связанные-файлы`,children:`Связанные файлы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../responses/default-response`,children:`DefaultResponse`}),` - Базовый ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../responses/paginated-response`,children:`PaginatedResponse`}),` - Пагинированный ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../responses/keyword-search-response`,children:`KeywordSearchResponse`}),` - Ответ поиска`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`../index`,children:`Главная`}),` → `,(0,n.jsx)(t.a,{href:`index`,children:`Интерфейсы`}),` → ResponseInterface`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};