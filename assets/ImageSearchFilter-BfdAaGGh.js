import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ImageSearchFilter`},i=new Date(1785402405e3),a=`

**Описание:** Класс для фильтров при поиске изображений

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`language()\` [#language]

**Описание:** Добавляет фильтр по языку изображения

**Параметры:**

* \`$language\` (string): Язык изображения

## \`onlyPosters()\` [#onlyposters]

**Описание:** Фильтр только для постеров

## \`onlyStills()\` [#onlystills]

**Описание:** Фильтр только для кадров

## \`onlyShooting()\` [#onlyshooting]

**Описание:** Фильтр только для фотосессий

## \`onlyScreenshots()\` [#onlyscreenshots]

**Описание:** Фильтр только для скриншотов

## \`onlyHighRes()\` [#onlyhighres]

**Описание:** Фильтр только для изображений высокого разрешения (Full HD+)

## \`minResolution()\` [#minresolution]

**Описание:** Добавляет фильтр по минимальному разрешению

**Параметры:**

* \`$minWidth\` (int): Минимальная ширина
* \`$minHeight\` (int): Минимальная высота

## \`width()\` [#width]

**Описание:** Добавляет фильтр по ширине изображения

**Параметры:**

* \`$width\` (int): Ширина изображения в пикселях
* \`$operator\` (string): Оператор сравнения

## \`height()\` [#height]

**Описание:** Добавляет фильтр по высоте изображения

**Параметры:**

* \`$height\` (int): Высота изображения в пикселях
* \`$operator\` (string): Оператор сравнения

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
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для фильтров при поиске изображений`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`language`,content:`**Описание:** Добавляет фильтр по языку изображения`},{heading:`language`,content:`**Параметры:**`},{heading:`language`,content:"`$language` (string): Язык изображения"},{heading:`onlyposters`,content:`**Описание:** Фильтр только для постеров`},{heading:`onlystills`,content:`**Описание:** Фильтр только для кадров`},{heading:`onlyshooting`,content:`**Описание:** Фильтр только для фотосессий`},{heading:`onlyscreenshots`,content:`**Описание:** Фильтр только для скриншотов`},{heading:`onlyhighres`,content:`**Описание:** Фильтр только для изображений высокого разрешения (Full HD+)`},{heading:`minresolution`,content:`**Описание:** Добавляет фильтр по минимальному разрешению`},{heading:`minresolution`,content:`**Параметры:**`},{heading:`minresolution`,content:"`$minWidth` (int): Минимальная ширина"},{heading:`minresolution`,content:"`$minHeight` (int): Минимальная высота"},{heading:`width`,content:`**Описание:** Добавляет фильтр по ширине изображения`},{heading:`width`,content:`**Параметры:**`},{heading:`width`,content:"`$width` (int): Ширина изображения в пикселях"},{heading:`width`,content:"`$operator` (string): Оператор сравнения"},{heading:`height`,content:`**Описание:** Добавляет фильтр по высоте изображения`},{heading:`height`,content:`**Параметры:**`},{heading:`height`,content:"`$height` (int): Высота изображения в пикселях"},{heading:`height`,content:"`$operator` (string): Оператор сравнения"},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название"},{heading:`name`,content:"`$operator` (string): Оператор сравнения"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string|\\KinopoiskDev\\Enums\\ReviewType): Тип"},{heading:`type`,content:"`$operator` (string): Оператор сравнения"},{heading:`type`,content:"**Возвращает:** `\\KinopoiskDev\\Filter\\MovieSearchFilter|\\KinopoiskDev\\Filter\\ImageSearchFilter|\\KinopoiskDev\\Filter\\KeywordSearchFilter|\\KinopoiskDev\\Filter\\PersonSearchFilter|\\KinopoiskDev\\Filter\\ReviewSearchFilter|\\KinopoiskDev\\Filter\\SeasonSearchFilter|\\KinopoiskDev\\Filter\\StudioSearchFilter|\\KinopoiskDev\\Utils\\FilterTrait`"},{heading:`movieid`,content:`**Описание:** Добавляет фильтр по ID фильма`},{heading:`movieid`,content:`**Параметры:**`},{heading:`movieid`,content:"`$movieId` (int): ID фильма"},{heading:`searchbyname`,content:`**Описание:** Добавляет поисковый фильтр по названию с использованием регулярных выражений`},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbyenname`,content:`**Описание:** Добавляет поисковый фильтр по английскому названию с использованием регулярных выражений`},{heading:`searchbyenname`,content:`**Параметры:**`},{heading:`searchbyenname`,content:"`$query` (string): Поисковый запрос"},{heading:`searchbydescription`,content:`**Описание:** Добавляет поисковый фильтр по описанию с использованием регулярных выражений`},{heading:`searchbydescription`,content:`**Параметры:**`},{heading:`searchbydescription`,content:"`$query` (string): Поисковый запрос"},{heading:`withminrating`,content:`**Описание:** Добавляет фильтр по минимальному рейтингу`},{heading:`withminrating`,content:`**Параметры:**`},{heading:`withminrating`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withminrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withmaxrating`,content:`**Описание:** Добавляет фильтр по максимальному рейтингу`},{heading:`withmaxrating`,content:`**Параметры:**`},{heading:`withmaxrating`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withmaxrating`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`withratingbetween`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`withratingbetween`,content:`**Параметры:**`},{heading:`withratingbetween`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`withratingbetween`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`withratingbetween`,content:"`$field` (string): Поле рейтинга (kp, imdb и т.д.)"},{heading:`addrangefilter`,content:`**Описание:** Добавляет фильтр по диапазону`},{heading:`addrangefilter`,content:`**Параметры:**`},{heading:`addrangefilter`,content:"`$field` (string): Имя поля"},{heading:`addrangefilter`,content:"`$minValue` (int): Минимальное значение"},{heading:`addrangefilter`,content:"`$maxValue` (int): Максимальное значение"},{heading:`seasonrange`,content:`**Описание:** Добавляет фильтр по диапазону сезонов`},{heading:`seasonrange`,content:`**Параметры:**`},{heading:`seasonrange`,content:"`$fromSeason` (int): Начальный сезон"},{heading:`seasonrange`,content:"`$toSeason` (int): Конечный сезон"},{heading:`agerange`,content:`**Описание:** Добавляет фильтр по возрастному диапазону`},{heading:`agerange`,content:`**Параметры:**`},{heading:`agerange`,content:"`$minAge` (int): Минимальный возраст"},{heading:`agerange`,content:"`$maxAge` (int): Максимальный возраст"}],headings:[{id:`language`,content:"`language()`"},{id:`onlyposters`,content:"`onlyPosters()`"},{id:`onlystills`,content:"`onlyStills()`"},{id:`onlyshooting`,content:"`onlyShooting()`"},{id:`onlyscreenshots`,content:"`onlyScreenshots()`"},{id:`onlyhighres`,content:"`onlyHighRes()`"},{id:`minresolution`,content:"`minResolution()`"},{id:`width`,content:"`width()`"},{id:`height`,content:"`height()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`type`,content:"`type()`"},{id:`movieid`,content:"`movieId()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`searchbyenname`,content:"`searchByEnName()`"},{id:`searchbydescription`,content:"`searchByDescription()`"},{id:`withminrating`,content:"`withMinRating()`"},{id:`withmaxrating`,content:"`withMaxRating()`"},{id:`withratingbetween`,content:"`withRatingBetween()`"},{id:`addrangefilter`,content:"`addRangeFilter()`"},{id:`seasonrange`,content:"`seasonRange()`"},{id:`agerange`,content:"`ageRange()`"}]},s=[{depth:2,url:`#language`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`language()`})})},{depth:2,url:`#onlyposters`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyPosters()`})})},{depth:2,url:`#onlystills`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyStills()`})})},{depth:2,url:`#onlyshooting`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyShooting()`})})},{depth:2,url:`#onlyscreenshots`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyScreenshots()`})})},{depth:2,url:`#onlyhighres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`onlyHighRes()`})})},{depth:2,url:`#minresolution`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`minResolution()`})})},{depth:2,url:`#width`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`width()`})})},{depth:2,url:`#height`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`height()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#movieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieId()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#searchbyenname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByEnName()`})})},{depth:2,url:`#searchbydescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByDescription()`})})},{depth:2,url:`#withminrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMinRating()`})})},{depth:2,url:`#withmaxrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withMaxRating()`})})},{depth:2,url:`#withratingbetween`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withRatingBetween()`})})},{depth:2,url:`#addrangefilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addRangeFilter()`})})},{depth:2,url:`#seasonrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonRange()`})})},{depth:2,url:`#agerange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRange()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для фильтров при поиске изображений`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`language`,children:(0,n.jsx)(t.code,{children:`language()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по языку изображения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$language`}),` (string): Язык изображения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyposters`,children:(0,n.jsx)(t.code,{children:`onlyPosters()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для постеров`]}),`
`,(0,n.jsx)(t.h2,{id:`onlystills`,children:(0,n.jsx)(t.code,{children:`onlyStills()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для кадров`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyshooting`,children:(0,n.jsx)(t.code,{children:`onlyShooting()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для фотосессий`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyscreenshots`,children:(0,n.jsx)(t.code,{children:`onlyScreenshots()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для скриншотов`]}),`
`,(0,n.jsx)(t.h2,{id:`onlyhighres`,children:(0,n.jsx)(t.code,{children:`onlyHighRes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фильтр только для изображений высокого разрешения (Full HD+)`]}),`
`,(0,n.jsx)(t.h2,{id:`minresolution`,children:(0,n.jsx)(t.code,{children:`minResolution()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по минимальному разрешению`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minWidth`}),` (int): Минимальная ширина`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minHeight`}),` (int): Минимальная высота`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`width`,children:(0,n.jsx)(t.code,{children:`width()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ширине изображения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$width`}),` (int): Ширина изображения в пикселях`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`height`,children:(0,n.jsx)(t.code,{children:`height()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по высоте изображения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$height`}),` (int): Высота изображения в пикселях`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
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