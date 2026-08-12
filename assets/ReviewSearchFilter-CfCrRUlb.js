import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ReviewSearchFilter`},i=new Date(1786541452e3),a=`

**Описание:** Класс для фильтров при поиске отзывов

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`author()\` [#author]

**Описание:** Добавляет фильтр по автору

**Параметры:**

* \`$author\` (string): Автор отзыва
* \`$operator\` (string): Оператор сравнения

## \`review()\` [#review]

**Описание:** Добавляет фильтр по тексту отзыва

**Параметры:**

* \`$review\` (string): Текст отзыва
* \`$operator\` (string): Оператор сравнения

## \`title()\` [#title]

**Описание:** Добавляет фильтр по заголовку

**Параметры:**

* \`$title\` (string): Заголовок отзыва
* \`$operator\` (string): Оператор сравнения

## \`onlyPositive()\` [#onlypositive]

**Описание:** Фильтр только для положительных отзывов

## \`onlyNegative()\` [#onlynegative]

**Описание:** Фильтр только для отрицательных отзывов

## \`onlyNeutral()\` [#onlyneutral]

**Описание:** Фильтр только для нейтральных отзывов

## \`name()\` [#name]

**Описание:** Добавляет фильтр по названию

**Параметры:**

* \`$name\` (string): Название
* \`$operator\` (string): Оператор сравнения

## \`enName()\` [#enname]

**Описание:** Добавляет фильтр по английскому названию

**Параметры:**

* \`$enName\` (string): Английское название
* \`$operator\` (string): Оператор сравнения

## \`type()\` [#type]

**Описание:** Добавляет фильтр по типу

**Параметры:**

* \`$type\` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип
* \`$operator\` (string): Оператор сравнения

**Возвращает:** \`\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait\`

## \`movieId()\` [#movieid]

**Описание:** Добавляет фильтр по ID фильма

**Параметры:**

* \`$movieId\` (int): ID фильма

## \`searchByName()\` [#searchbyname]

**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`searchByEnName()\` [#searchbyenname]

**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`searchByDescription()\` [#searchbydescription]

**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений

**Параметры:**

* \`$query\` (string): Поисковый запрос

## \`withMinRating()\` [#withminrating]

**Описание:** Добавляет фильтр по минимальному рейтингу

**Параметры:**

* \`$minRating\` (float): Минимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`withMaxRating()\` [#withmaxrating]

**Описание:** Добавляет фильтр по максимальному рейтингу

**Параметры:**

* \`$maxRating\` (float): Максимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`withRatingBetween()\` [#withratingbetween]

**Описание:** Добавляет фильтр по диапазону рейтинга

**Параметры:**

* \`$minRating\` (float): Минимальный рейтинг
* \`$maxRating\` (float): Максимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb и т.д.)

## \`addRangeFilter()\` [#addrangefilter]

**Описание:** Добавляет фильтр по диапазону

**Параметры:**

* \`$field\` (string): Имя поля
* \`$minValue\` (int): Минимальное значение
* \`$maxValue\` (int): Максимальное значение

## \`seasonRange()\` [#seasonrange]

**Описание:** Добавляет фильтр по диапазону сезонов

**Параметры:**

* \`$fromSeason\` (int): Начальный сезон
* \`$toSeason\` (int): Конечный сезон

## \`ageRange()\` [#agerange]

**Описание:** Добавляет фильтр по возрастному диапазону

**Параметры:**

* \`$minAge\` (int): Минимальный возраст
* \`$maxAge\` (int): Максимальный возраст
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для фильтров при поиске отзывов`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`author`,content:`**Описание:** Добавляет фильтр по автору`},{heading:`author`,content:`**Параметры:**`},{heading:`author`,content:"`$author` (string): Автор отзыва"},{heading:`author`,content:"`$operator` (string): Оператор сравнения"},{heading:`review`,content:`**Описание:** Добавляет фильтр по тексту отзыва`},{heading:`review`,content:`**Параметры:**`},{heading:`review`,content:"`$review` (string): Текст отзыва"},{heading:`review`,content:"`$operator` (string): Оператор сравнения"},{heading:`title`,content:`**Описание:** Добавляет фильтр по заголовку`},{heading:`title`,content:`**Параметры:**`},{heading:`title`,content:"`$title` (string): Заголовок отзыва"},{heading:`title`,content:"`$operator` (string): Оператор сравнения"},{heading:`onlypositive`,content:`**Описание:** Фильтр только для положительных отзывов`},{heading:`onlynegative`,content:`**Описание:** Фильтр только для отрицательных отзывов`},{heading:`onlyneutral`,content:`**Описание:** Фильтр только для нейтральных отзывов`},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название"},{heading:`name`,content:"`$operator` (string): Оператор сравнения"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип"},{heading:`type`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:"**Возвращает:** `\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`"},{heading:`movieid`,content:`**Описание:** Добавляет фильтр по ID фильма`},{heading:`movieid`,content:`**Параметры:**`},{heading:`movieid`,content:"`$movieId` (int): ID фильма"},{heading:`searchbyname`,content:`**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений`},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyenname`,content:`**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`},{heading:`searchbyenname`,content:`**Параметры:**`},{heading:`searchbyenname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbydescription`,content:`**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений`},{heading:`searchbydescription`,content:`**Параметры:**`},{heading:`searchbydescription`,content:"`$query` (string): Поисковый запрос"},{heading:`withminrating`,content:`**Описание:** Добавляет фильтр по минимальному рейтингу`},{heading:`withminrating`,content:`**Параметры:**`},{heading:`withminrating`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withminrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withmaxrating`,content:`**Описание:** Добавляет фильтр по максимальному рейтингу`},{heading:`withmaxrating`,content:`**Параметры:**`},{heading:`withmaxrating`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withmaxrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withratingbetween`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`withratingbetween`,content:`**Параметры:**`},{heading:`withratingbetween`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withratingbetween`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withratingbetween`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`addrangefilter`,content:`**Описание:** Добавляет фильтр по диапазону`},{heading:`addrangefilter`,content:`**Параметры:**`},{heading:`addrangefilter`,content:"`$field` (string): Имя поля"},{heading:`addrangefilter`,content:"`$minValue` (int): Минимальное значение"},{heading:`addrangefilter`,content:"`$maxValue` (int): Максимальное значение"},{heading:`seasonrange`,content:`**Описание:** Добавляет фильтр по диапазону сезонов`},{heading:`seasonrange`,content:`**Параметры:**`},{heading:`seasonrange`,content:"`$fromSeason` (int): Начальный сезон"},{heading:`seasonrange`,content:"`$toSeason` (int): Конечный сезон"},{heading:`agerange`,content:`**Описание:** Добавляет фильтр по возрастному диапазону`},{heading:`agerange`,content:`**Параметры:**`},{heading:`agerange`,content:"`$minAge` (int): Минимальный возраст"},{heading:`agerange`,content:"`$maxAge` (int): Максимальный возраст"}],headings:[{id:`author`,content:"`author()`"},{id:`review`,content:"`review()`"},{id:`title`,content:"`title()`"},{id:`onlypositive`,content:"`onlyPositive()`"},{id:`onlynegative`,content:"`onlyNegative()`"},{id:`onlyneutral`,content:"`onlyNeutral()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`type`,content:"`type()`"},{id:`movieid`,content:"`movieId()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`searchbyenname`,content:"`searchByEnName()`"},{id:`searchbydescription`,content:"`searchByDescription()`"},{id:`withminrating`,content:"`withMinRating()`"},{id:`withmaxrating`,content:"`withMaxRating()`"},{id:`withratingbetween`,content:"`withRatingBetween()`"},{id:`addrangefilter`,content:"`addRangeFilter()`"},{id:`seasonrange`,content:"`seasonRange()`"},{id:`agerange`,content:"`ageRange()`"}]},s=[{depth:2,url:`#author`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`author()`})})},{depth:2,url:`#review`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`review()`})})},{depth:2,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`title()`})})},{depth:2,url:`#onlypositive`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyPositive()`})})},{depth:2,url:`#onlynegative`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyNegative()`})})},{depth:2,url:`#onlyneutral`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyNeutral()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#movieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieId()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#searchbyenname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByEnName()`})})},{depth:2,url:`#searchbydescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByDescription()`})})},{depth:2,url:`#withminrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinRating()`})})},{depth:2,url:`#withmaxrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMaxRating()`})})},{depth:2,url:`#withratingbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withRatingBetween()`})})},{depth:2,url:`#addrangefilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addRangeFilter()`})})},{depth:2,url:`#seasonrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonRange()`})})},{depth:2,url:`#agerange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRange()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для фильтров при поиске отзывов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`author`,children:(0,n.jsx)(t.code,{children:`author()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по автору`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$author`}),` (string): Автор отзыва`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`review`,children:(0,n.jsx)(t.code,{children:`review()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по тексту отзыва`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$review`}),` (string): Текст отзыва`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`title`,children:(0,n.jsx)(t.code,{children:`title()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по заголовку`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$title`}),` (string): Заголовок отзыва`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`onlypositive`,children:(0,n.jsx)(t.code,{children:`onlyPositive()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для положительных отзывов`]}),`
`,(0,n.jsx)(t.h2,{id:`onlynegative`,children:(0,n.jsx)(t.code,{children:`onlyNegative()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для отрицательных отзывов`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyneutral`,children:(0,n.jsx)(t.code,{children:`onlyNeutral()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для нейтральных отзывов`]}),`
`,(0,n.jsx)(t.h2,{id:`name`,children:(0,n.jsx)(t.code,{children:`name()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по названию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`enname`,children:(0,n.jsx)(t.code,{children:`enName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по английскому названию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string): Английское название`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`type`,children:(0,n.jsx)(t.code,{children:`type()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по типу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`})]}),`
`,(0,n.jsx)(t.h2,{id:`movieid`,children:(0,n.jsx)(t.code,{children:`movieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ID фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyname`,children:(0,n.jsx)(t.code,{children:`searchByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по названию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyenname`,children:(0,n.jsx)(t.code,{children:`searchByEnName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbydescription`,children:(0,n.jsx)(t.code,{children:`searchByDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет поисковый фильтр по описанию с использованием регулярных выражений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withminrating`,children:(0,n.jsx)(t.code,{children:`withMinRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по минимальному рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minRating`}),` (float): Минимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withmaxrating`,children:(0,n.jsx)(t.code,{children:`withMaxRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по максимальному рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxRating`}),` (float): Максимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`withratingbetween`,children:(0,n.jsx)(t.code,{children:`withRatingBetween()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону рейтинга`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minRating`}),` (float): Минимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxRating`}),` (float): Максимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb и т.д.)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`addrangefilter`,children:(0,n.jsx)(t.code,{children:`addRangeFilter()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Имя поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minValue`}),` (int): Минимальное значение`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxValue`}),` (int): Максимальное значение`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`seasonrange`,children:(0,n.jsx)(t.code,{children:`seasonRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону сезонов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromSeason`}),` (int): Начальный сезон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toSeason`}),` (int): Конечный сезон`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`agerange`,children:(0,n.jsx)(t.code,{children:`ageRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по возрастному диапазону`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minAge`}),` (int): Минимальный возраст`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxAge`}),` (int): Максимальный возраст`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};