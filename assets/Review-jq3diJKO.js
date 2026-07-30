import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Review`},i=new Date(1785404498e3),a=`

**Описание:** Класс для представления рецензии на фильм
Представляет информацию о рецензии пользователя на фильм или сериал,
включая текст рецензии, тип (позитивная/негативная/нейтральная),
автора и статистику лайков/дизлайков.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie\`: Для основной модели фильма

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта рецензии
Создает новый экземпляр класса Review с указанными параметрами.
Все обязательные поля должны быть переданы при создании объекта.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор рецензии
* \`$movieId\` (int): ID фильма к которому относится рецензия
* \`$authorId\` (int): ID автора рецензии
* \`$reviewLikes\` (int): Количество лайков рецензии
* \`$reviewDislikes\` (int): Количество дизлайков рецензии
* \`$updatedAt\` (string): Дата последнего обновления
* \`$createdAt\` (string): Дата создания рецензии
* \`$title\` (string|null): Заголовок рецензии
* \`$type\` (string|null): Тип рецензии (Позитивный/Негативный/Нейтральный)
* \`$review\` (string|null): Текст рецензии
* \`$date\` (string|null): Дата создания рецензии (альтернативное поле)
* \`$author\` (string|null): Имя автора рецензии
* \`$userRating\` (int|null): Пользовательский рейтинг

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Review из массива данных API
Фабричный метод для создания экземпляра класса Review из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных полей.

**Параметры:**

* \`$data\` (array): Массив данных о рецензии от API

**Возвращает:** \`\\KinopoiskDev\\Models\\Review\` Новый экземпляр класса Review с данными из массива

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Review в массив,
совместимый с форматом API Kinopoisk.dev.

**Возвращает:** \`array\` Массив с данными о рецензии

## \`isPositive()\` [#ispositive]

**Описание:** Проверяет, является ли рецензия позитивной

**Возвращает:** \`bool true\` если рецензия позитивная, иначе false

## \`isNegative()\` [#isnegative]

**Описание:** Проверяет, является ли рецензия негативной

**Возвращает:** \`bool true\` если рецензия негативная, иначе false

## \`isNeutral()\` [#isneutral]

**Описание:** Проверяет, является ли рецензия нейтральной

**Возвращает:** \`bool true\` если рецензия нейтральная, иначе false

## \`getNetRating()\` [#getnetrating]

**Описание:** Возвращает общий рейтинг рецензии (лайки - дизлайки)

**Возвращает:** \`int\` Разность между лайками и дизлайками

## \`getPositivePercentage()\` [#getpositivepercentage]

**Описание:** Возвращает процент позитивных оценок рецензии

**Возвращает:** \`float\` Процент лайков от общего количества оценок

## \`getActualDate()\` [#getactualdate]

**Описание:** Возвращает актуальную дату рецензии
Приоритет отдается createdAt над полем date

**Возвращает:** \`string\` Дата рецензии

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления рецензии на фильм
Представляет информацию о рецензии пользователя на фильм или сериал,
включая текст рецензии, тип (позитивная/негативная/нейтральная),
автора и статистику лайков/дизлайков.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для основной модели фильма"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта рецензии
Создает новый экземпляр класса Review с указанными параметрами.
Все обязательные поля должны быть переданы при создании объекта.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор рецензии"},{heading:`__construct`,content:"`$movieId` (int): ID фильма к которому относится рецензия"},{heading:`__construct`,content:"`$authorId` (int): ID автора рецензии"},{heading:`__construct`,content:"`$reviewLikes` (int): Количество лайков рецензии"},{heading:`__construct`,content:"`$reviewDislikes` (int): Количество дизлайков рецензии"},{heading:`__construct`,content:"`$updatedAt` (string): Дата последнего обновления"},{heading:`__construct`,content:"`$createdAt` (string): Дата создания рецензии"},{heading:`__construct`,content:"`$title` (string|null): Заголовок рецензии"},{heading:`__construct`,content:"`$type` (string|null): Тип рецензии (Позитивный/Негативный/Нейтральный)"},{heading:`__construct`,content:"`$review` (string|null): Текст рецензии"},{heading:`__construct`,content:"`$date` (string|null): Дата создания рецензии (альтернативное поле)"},{heading:`__construct`,content:"`$author` (string|null): Имя автора рецензии"},{heading:`__construct`,content:"`$userRating` (int|null): Пользовательский рейтинг"},{heading:`fromarray`,content:`**Описание:** Создает объект Review из массива данных API
Фабричный метод для создания экземпляра класса Review из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных полей.`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о рецензии от API"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Review` Новый экземпляр класса Review с данными из массива"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Review в массив,
совместимый с форматом API Kinopoisk.dev.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о рецензии"},{heading:`ispositive`,content:`**Описание:** Проверяет, является ли рецензия позитивной`},{heading:`ispositive`,content:"**Возвращает:** `bool true` если рецензия позитивная, иначе false"},{heading:`isnegative`,content:`**Описание:** Проверяет, является ли рецензия негативной`},{heading:`isnegative`,content:"**Возвращает:** `bool true` если рецензия негативная, иначе false"},{heading:`isneutral`,content:`**Описание:** Проверяет, является ли рецензия нейтральной`},{heading:`isneutral`,content:"**Возвращает:** `bool true` если рецензия нейтральная, иначе false"},{heading:`getnetrating`,content:`**Описание:** Возвращает общий рейтинг рецензии (лайки - дизлайки)`},{heading:`getnetrating`,content:"**Возвращает:** `int` Разность между лайками и дизлайками"},{heading:`getpositivepercentage`,content:`**Описание:** Возвращает процент позитивных оценок рецензии`},{heading:`getpositivepercentage`,content:"**Возвращает:** `float` Процент лайков от общего количества оценок"},{heading:`getactualdate`,content:`**Описание:** Возвращает актуальную дату рецензии
Приоритет отдается createdAt над полем date`},{heading:`getactualdate`,content:"**Возвращает:** `string` Дата рецензии"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`ispositive`,content:"`isPositive()`"},{id:`isnegative`,content:"`isNegative()`"},{id:`isneutral`,content:"`isNeutral()`"},{id:`getnetrating`,content:"`getNetRating()`"},{id:`getpositivepercentage`,content:"`getPositivePercentage()`"},{id:`getactualdate`,content:"`getActualDate()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#ispositive`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isPositive()`})})},{depth:2,url:`#isnegative`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isNegative()`})})},{depth:2,url:`#isneutral`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isNeutral()`})})},{depth:2,url:`#getnetrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getNetRating()`})})},{depth:2,url:`#getpositivepercentage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPositivePercentage()`})})},{depth:2,url:`#getactualdate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getActualDate()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления рецензии на фильм
Представляет информацию о рецензии пользователя на фильм или сериал,
включая текст рецензии, тип (позитивная/негативная/нейтральная),
автора и статистику лайков/дизлайков.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для основной модели фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта рецензии
Создает новый экземпляр класса Review с указанными параметрами.
Все обязательные поля должны быть переданы при создании объекта.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма к которому относится рецензия`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$authorId`}),` (int): ID автора рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$reviewLikes`}),` (int): Количество лайков рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$reviewDislikes`}),` (int): Количество дизлайков рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string): Дата последнего обновления`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string): Дата создания рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string|null): Заголовок рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string|null): Тип рецензии (Позитивный/Негативный/Нейтральный)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$review`}),` (string|null): Текст рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$date`}),` (string|null): Дата создания рецензии (альтернативное поле)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$author`}),` (string|null): Имя автора рецензии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$userRating`}),` (int|null): Пользовательский рейтинг`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Review из массива данных API
Фабричный метод для создания экземпляра класса Review из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения для опциональных полей.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о рецензии от API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Review`}),` Новый экземпляр класса Review с данными из массива`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Review в массив,
совместимый с форматом API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о рецензии`]}),`
`,(0,n.jsx)(t.h2,{id:`ispositive`,children:(0,n.jsx)(t.code,{children:`isPositive()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли рецензия позитивной`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если рецензия позитивная, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`isnegative`,children:(0,n.jsx)(t.code,{children:`isNegative()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли рецензия негативной`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если рецензия негативная, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`isneutral`,children:(0,n.jsx)(t.code,{children:`isNeutral()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли рецензия нейтральной`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если рецензия нейтральная, иначе false`]}),`
`,(0,n.jsx)(t.h2,{id:`getnetrating`,children:(0,n.jsx)(t.code,{children:`getNetRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает общий рейтинг рецензии (лайки - дизлайки)`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Разность между лайками и дизлайками`]}),`
`,(0,n.jsx)(t.h2,{id:`getpositivepercentage`,children:(0,n.jsx)(t.code,{children:`getPositivePercentage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает процент позитивных оценок рецензии`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float`}),` Процент лайков от общего количества оценок`]}),`
`,(0,n.jsx)(t.h2,{id:`getactualdate`,children:(0,n.jsx)(t.code,{children:`getActualDate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает актуальную дату рецензии
Приоритет отдается createdAt над полем date`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Дата рецензии`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};