import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Episode`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления эпизода сериала (версия API 1.4)
Представляет информацию об отдельном эпизоде сериала согласно схеме Episode,
включая номер, название, описание, дату выхода и кадр из эпизода.
Используется в составе сезонов для детальной информации о структуре сериалов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Season\`: Для информации о сезонах
* \`\\KinopoiskDev\\Models\\ShortImage\`: Для кадров из эпизодов

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели эпизода
Создает новый экземпляр класса Episode с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$number\` (int|null): Номер эпизода
* \`$name\` (string|null): Название эпизода на русском языке
* \`$enName\` (string|null): Название эпизода на английском языке
* \`$date\` (string|null): Дата выхода эпизода (deprecated)
* \`$description\` (string|null): Описание эпизода на русском языке
* \`$still\` (ShortImage|null): Кадр из эпизода
* \`$airDate\` (string|null): Дата выхода эпизода
* \`$enDescription\` (string|null): Описание эпизода на английском языке

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Episode из массива данных API
Фабричный метод для создания экземпляра класса Episode из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.

**Параметры:**

* \`$data\` (array): Массив данных об эпизоде от API

**Возвращает:** \`\\KinopoiskDev\\Models\\Episode\` Новый экземпляр класса Episode с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Episode в массив,
совместимый с форматом API Kinopoisk.dev.

**Возвращает:** \`array\` Массив с данными об эпизоде

## \`getName()\` [#getname]

**Описание:** Возвращает наилучшее доступное название эпизода

**Возвращает:** \`string|null\` Название эпизода или null если не задано

## \`getBestDescription()\` [#getbestdescription]

**Описание:** Возвращает наилучшее доступное описание эпизода

**Возвращает:** \`string|null\` Описание эпизода или null если не задано

## \`getActualAirDate()\` [#getactualairdate]

**Описание:** Возвращает актуальную дату выхода эпизода
Приоритет отдается airDate над deprecated полем date

**Возвращает:** \`string|null\` Дата выхода эпизода

## \`hasStill()\` [#hasstill]

**Описание:** Проверяет наличие кадра из эпизода

**Возвращает:** \`bool true\` если кадр доступен, иначе false

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления эпизода сериала (версия API 1.4)
Представляет информацию об отдельном эпизоде сериала согласно схеме Episode,
включая номер, название, описание, дату выхода и кадр из эпизода.
Используется в составе сезонов для детальной информации о структуре сериалов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Season`: Для информации о сезонах"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ShortImage`: Для кадров из эпизодов"},{heading:`__construct`,content:`**Описание:** Конструктор модели эпизода
Создает новый экземпляр класса Episode с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$number` (int|null): Номер эпизода"},{heading:`__construct`,content:"`$name` (string|null): Название эпизода на русском языке"},{heading:`__construct`,content:"`$enName` (string|null): Название эпизода на английском языке"},{heading:`__construct`,content:"`$date` (string|null): Дата выхода эпизода (deprecated)"},{heading:`__construct`,content:"`$description` (string|null): Описание эпизода на русском языке"},{heading:`__construct`,content:"`$still` (ShortImage|null): Кадр из эпизода"},{heading:`__construct`,content:"`$airDate` (string|null): Дата выхода эпизода"},{heading:`__construct`,content:"`$enDescription` (string|null): Описание эпизода на английском языке"},{heading:`fromarray`,content:`**Описание:** Создает объект Episode из массива данных API
Фабричный метод для создания экземпляра класса Episode из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных об эпизоде от API"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Episode` Новый экземпляр класса Episode с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Episode в массив,
совместимый с форматом API Kinopoisk.dev.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными об эпизоде"},{heading:`getname`,content:`**Описание:** Возвращает наилучшее доступное название эпизода`},{heading:`getname`,content:"**Возвращает:** `string|null` Название эпизода или null если не задано"},{heading:`getbestdescription`,content:`**Описание:** Возвращает наилучшее доступное описание эпизода`},{heading:`getbestdescription`,content:"**Возвращает:** `string|null` Описание эпизода или null если не задано"},{heading:`getactualairdate`,content:`**Описание:** Возвращает актуальную дату выхода эпизода
Приоритет отдается airDate над deprecated полем date`},{heading:`getactualairdate`,content:"**Возвращает:** `string|null` Дата выхода эпизода"},{heading:`hasstill`,content:`**Описание:** Проверяет наличие кадра из эпизода`},{heading:`hasstill`,content:"**Возвращает:** `bool true` если кадр доступен, иначе false"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`getname`,content:"`getName()`"},{id:`getbestdescription`,content:"`getBestDescription()`"},{id:`getactualairdate`,content:"`getActualAirDate()`"},{id:`hasstill`,content:"`hasStill()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getName()`})})},{depth:2,url:`#getbestdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBestDescription()`})})},{depth:2,url:`#getactualairdate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getActualAirDate()`})})},{depth:2,url:`#hasstill`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasStill()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления эпизода сериала (версия API 1.4)
Представляет информацию об отдельном эпизоде сериала согласно схеме Episode,
включая номер, название, описание, дату выхода и кадр из эпизода.
Используется в составе сезонов для детальной информации о структуре сериалов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Season`}),`: Для информации о сезонах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ShortImage`}),`: Для кадров из эпизодов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели эпизода
Создает новый экземпляр класса Episode с указанными параметрами.
Большинство параметров являются опциональными и могут быть null при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$number`}),` (int|null): Номер эпизода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название эпизода на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Название эпизода на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$date`}),` (string|null): Дата выхода эпизода (deprecated)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Описание эпизода на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$still`}),` (ShortImage|null): Кадр из эпизода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$airDate`}),` (string|null): Дата выхода эпизода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enDescription`}),` (string|null): Описание эпизода на английском языке`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Episode из массива данных API
Фабричный метод для создания экземпляра класса Episode из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных об эпизоде от API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Episode`}),` Новый экземпляр класса Episode с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Episode в массив,
совместимый с форматом API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными об эпизоде`]}),`
`,(0,n.jsx)(t.h2,{id:`getname`,children:(0,n.jsx)(t.code,{children:`getName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наилучшее доступное название эпизода`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Название эпизода или null если не задано`]}),`
`,(0,n.jsx)(t.h2,{id:`getbestdescription`,children:(0,n.jsx)(t.code,{children:`getBestDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наилучшее доступное описание эпизода`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Описание эпизода или null если не задано`]}),`
`,(0,n.jsx)(t.h2,{id:`getactualairdate`,children:(0,n.jsx)(t.code,{children:`getActualAirDate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает актуальную дату выхода эпизода
Приоритет отдается airDate над deprecated полем date`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Дата выхода эпизода`]}),`
`,(0,n.jsx)(t.h2,{id:`hasstill`,children:(0,n.jsx)(t.code,{children:`hasStill()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие кадра из эпизода`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если кадр доступен, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};