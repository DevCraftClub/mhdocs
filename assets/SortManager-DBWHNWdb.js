import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SortManager`},i=new Date(1786951824e3),a=`

**Описание:** Trait для добавления функциональности сортировки к фильтрам
Этот trait предоставляет методы для управления параметрами сортировки
при выполнении запросов к API Kinopoisk.dev. Может использоваться
в классах фильтрации для расширения их функциональности.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`removeSortByField()\` [#removesortbyfield]

**Описание:** Удаляет сортировку по указанному полю

**Параметры:**

* \`$field\` (SortField): Поле для удаления из сортировки

## \`toggleSort()\` [#togglesort]

**Описание:** Переключает направление сортировки для указанного поля
Если сортировка по полю существует, меняет направление на противоположное.
Если сортировки нет, добавляет с направлением по умолчанию.

**Параметры:**

* \`$field\` (SortField): Поле для переключения сортировки

## \`sortBy()\` [#sortby]

**Описание:** Добавляет сортировку по указанному полю

**Параметры:**

* \`$field\` (SortField): Поле для сортировки
* \`$direction\` (SortDirection|null): Направление сортировки (по умолчанию используется рекомендуемое)

## \`addSortCriteria()\` [#addsortcriteria]

**Описание:** Добавляет критерий сортировки
Добавляет новый критерий сортировки к текущему набору.
Если критерий для указанного поля уже существует, он будет заменен.

**Параметры:**

* \`$criteria\` (SortCriteria): Критерий сортировки

## \`hasSortBy()\` [#hassortby]

**Описание:** Проверяет, установлена ли сортировка по указанному полю

**Параметры:**

* \`$field\` (SortField): Поле для проверки

**Возвращает:** \`bool true,\` если сортировка по полю установлена, false в противном случае

## \`getSortDirection()\` [#getsortdirection]

**Описание:** Возвращает направление сортировки для указанного поля

**Параметры:**

* \`$field\` (SortField): Поле для получения направления

**Возвращает:** \`SortDirection|null\` Направление сортировки или null, если сортировка не установлена

## \`getSortCriteria()\` [#getsortcriteria]

**Описание:** Возвращает все критерии сортировки

**Возвращает:** \`SortCriteria[]\` Массив критериев сортировки

## \`setSortCriteria()\` [#setsortcriteria]

**Описание:** Устанавливает множественные критерии сортировки
Заменяет текущие критерии сортировки новым набором.

**Параметры:**

* \`$criteria\` (SortCriteria\\[]): Массив критериев сортировки

## \`clearSort()\` [#clearsort]

**Описание:** Очищает все критерии сортировки

## \`addMultipleSort()\` [#addmultiplesort]

**Описание:** Добавляет множественные критерии сортировки из массива строк

**Параметры:**

* \`$sorts\` (array\\<string|SortCriteria>): Массив строк в формате "field:direction" или просто "field"

**Пример:**

\`\`\`php
$filter->addMultipleSort([
'rating.kp:desc',
'year:asc',
'name' // будет использовано направление по умолчанию
]);
\`\`\`

## \`getSortData()\` [#getsortdata]

**Описание:** Преобразует критерии сортировки в параметры для API
Формирует строку сортировки в формате, ожидаемом API Kinopoisk.dev.
Множественные критерии объединяются запятыми.

**Возвращает:** \`array|null\` Массив с данными о критериях сортировки или null, если критерии не установлены

## \`getSortCount()\` [#getsortcount]

**Описание:** Возвращает количество установленных критериев сортировки

**Возвращает:** \`int\` Количество критериев сортировки

## \`hasAnySorting()\` [#hasanysorting]

**Описание:** Проверяет, установлены ли какие-либо критерии сортировки

**Возвращает:** \`bool true,\` если есть хотя бы один критерий сортировки, false в противном случае

## \`getFirstSortCriteria()\` [#getfirstsortcriteria]

**Описание:** Возвращает первый критерий сортировки

**Возвращает:** \`SortCriteria|null\` Первый критерий или null, если критерии отсутствуют

## \`getLastSortCriteria()\` [#getlastsortcriteria]

**Описание:** Возвращает последний критерий сортировки

**Возвращает:** \`SortCriteria|null\` Последний критерий или null, если критерии отсутствуют

## \`sortByImdbRating()\` [#sortbyimdbrating]

**Описание:** Сортировка по рейтингу IMDB (по убыванию)

## \`sortByDesc()\` [#sortbydesc]

**Описание:** Добавляет сортировку по убыванию

**Параметры:**

* \`$field\` (SortField): Поле для сортировки

## \`sortByYearOldFirst()\` [#sortbyyearoldfirst]

**Описание:** Сортировка по году выпуска (по возрастанию - сначала старые)

## \`sortByAsc()\` [#sortbyasc]

**Описание:** Добавляет сортировку по возрастанию

**Параметры:**

* \`$field\` (SortField): Поле для сортировки

## \`sortByName()\` [#sortbyname]

**Описание:** Сортировка по названию (по алфавиту)

## \`sortByPopularity()\` [#sortbypopularity]

**Описание:** Сортировка по популярности (количество голосов Кинопоиска)

## \`sortByCreated()\` [#sortbycreated]

**Описание:** Сортировка по дате создания записи (сначала новые)

## \`sortByUpdated()\` [#sortbyupdated]

**Описание:** Сортировка по дате обновления записи (сначала обновленные)

## \`sortByBest()\` [#sortbybest]

**Описание:** Комбинированная сортировка по рейтингу и году
Сначала по рейтингу Кинопоиска (по убыванию), затем по году (по убыванию).

## \`sortByYear()\` [#sortbyyear]

**Описание:** Сортировка по году выпуска (по убыванию - сначала новые)

## \`sortByKinopoiskRating()\` [#sortbykinopoiskrating]

**Описание:** Сортировка по рейтингу Кинопоиска (по убыванию)

## \`exportSortCriteria()\` [#exportsortcriteria]

**Описание:** Экспорт критериев сортировки в массив для сериализации

**Возвращает:** \`array<array<string, string>>\` Массив с данными о критериях сортировки

## \`importSortCriteria()\` [#importsortcriteria]

**Описание:** Импорт критериев сортировки из массива
`,o={contents:[{heading:void 0,content:`**Описание:** Trait для добавления функциональности сортировки к фильтрам
Этот trait предоставляет методы для управления параметрами сортировки
при выполнении запросов к API Kinopoisk.dev. Может использоваться
в классах фильтрации для расширения их функциональности.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`removesortbyfield`,content:`**Описание:** Удаляет сортировку по указанному полю`},{heading:`removesortbyfield`,content:`**Параметры:**`},{heading:`removesortbyfield`,content:"`$field` (SortField): Поле для удаления из сортировки"},{heading:`togglesort`,content:`**Описание:** Переключает направление сортировки для указанного поля
Если сортировка по полю существует, меняет направление на противоположное.
Если сортировки нет, добавляет с направлением по умолчанию.`},{heading:`togglesort`,content:`**Параметры:**`},{heading:`togglesort`,content:"`$field` (SortField): Поле для переключения сортировки"},{heading:`sortby`,content:`**Описание:** Добавляет сортировку по указанному полю`},{heading:`sortby`,content:`**Параметры:**`},{heading:`sortby`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortby`,content:"`$direction` (SortDirection|null): Направление сортировки (по умолчанию используется рекомендуемое)"},{heading:`addsortcriteria`,content:`**Описание:** Добавляет критерий сортировки
Добавляет новый критерий сортировки к текущему набору.
Если критерий для указанного поля уже существует, он будет заменен.`},{heading:`addsortcriteria`,content:`**Параметры:**`},{heading:`addsortcriteria`,content:"`$criteria` (SortCriteria): Критерий сортировки"},{heading:`hassortby`,content:`**Описание:** Проверяет, установлена ли сортировка по указанному полю`},{heading:`hassortby`,content:`**Параметры:**`},{heading:`hassortby`,content:"`$field` (SortField): Поле для проверки"},{heading:`hassortby`,content:"**Возвращает:** `bool true,` если сортировка по полю установлена, false в противном случае"},{heading:`getsortdirection`,content:`**Описание:** Возвращает направление сортировки для указанного поля`},{heading:`getsortdirection`,content:`**Параметры:**`},{heading:`getsortdirection`,content:"`$field` (SortField): Поле для получения направления"},{heading:`getsortdirection`,content:"**Возвращает:** `SortDirection|null` Направление сортировки или null, если сортировка не установлена"},{heading:`getsortcriteria`,content:`**Описание:** Возвращает все критерии сортировки`},{heading:`getsortcriteria`,content:"**Возвращает:** `SortCriteria[]` Массив критериев сортировки"},{heading:`setsortcriteria`,content:`**Описание:** Устанавливает множественные критерии сортировки
Заменяет текущие критерии сортировки новым набором.`},{heading:`setsortcriteria`,content:`**Параметры:**`},{heading:`setsortcriteria`,content:"`$criteria` (SortCriteria\\[]): Массив критериев сортировки"},{heading:`clearsort`,content:`**Описание:** Очищает все критерии сортировки`},{heading:`addmultiplesort`,content:`**Описание:** Добавляет множественные критерии сортировки из массива строк`},{heading:`addmultiplesort`,content:`**Параметры:**`},{heading:`addmultiplesort`,content:'`$sorts` (array\\<string|SortCriteria>): Массив строк в формате "field:direction" или просто "field"'},{heading:`addmultiplesort`,content:`**Пример:**`},{heading:`getsortdata`,content:`**Описание:** Преобразует критерии сортировки в параметры для API
Формирует строку сортировки в формате, ожидаемом API Kinopoisk.dev.
Множественные критерии объединяются запятыми.`},{heading:`getsortdata`,content:"**Возвращает:** `array|null` Массив с данными о критериях сортировки или null, если критерии не установлены"},{heading:`getsortcount`,content:`**Описание:** Возвращает количество установленных критериев сортировки`},{heading:`getsortcount`,content:"**Возвращает:** `int` Количество критериев сортировки"},{heading:`hasanysorting`,content:`**Описание:** Проверяет, установлены ли какие-либо критерии сортировки`},{heading:`hasanysorting`,content:"**Возвращает:** `bool true,` если есть хотя бы один критерий сортировки, false в противном случае"},{heading:`getfirstsortcriteria`,content:`**Описание:** Возвращает первый критерий сортировки`},{heading:`getfirstsortcriteria`,content:"**Возвращает:** `SortCriteria|null` Первый критерий или null, если критерии отсутствуют"},{heading:`getlastsortcriteria`,content:`**Описание:** Возвращает последний критерий сортировки`},{heading:`getlastsortcriteria`,content:"**Возвращает:** `SortCriteria|null` Последний критерий или null, если критерии отсутствуют"},{heading:`sortbyimdbrating`,content:`**Описание:** Сортировка по рейтингу IMDB (по убыванию)`},{heading:`sortbydesc`,content:`**Описание:** Добавляет сортировку по убыванию`},{heading:`sortbydesc`,content:`**Параметры:**`},{heading:`sortbydesc`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortbyyearoldfirst`,content:`**Описание:** Сортировка по году выпуска (по возрастанию - сначала старые)`},{heading:`sortbyasc`,content:`**Описание:** Добавляет сортировку по возрастанию`},{heading:`sortbyasc`,content:`**Параметры:**`},{heading:`sortbyasc`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortbyname`,content:`**Описание:** Сортировка по названию (по алфавиту)`},{heading:`sortbypopularity`,content:`**Описание:** Сортировка по популярности (количество голосов Кинопоиска)`},{heading:`sortbycreated`,content:`**Описание:** Сортировка по дате создания записи (сначала новые)`},{heading:`sortbyupdated`,content:`**Описание:** Сортировка по дате обновления записи (сначала обновленные)`},{heading:`sortbybest`,content:`**Описание:** Комбинированная сортировка по рейтингу и году
Сначала по рейтингу Кинопоиска (по убыванию), затем по году (по убыванию).`},{heading:`sortbyyear`,content:`**Описание:** Сортировка по году выпуска (по убыванию - сначала новые)`},{heading:`sortbykinopoiskrating`,content:`**Описание:** Сортировка по рейтингу Кинопоиска (по убыванию)`},{heading:`exportsortcriteria`,content:`**Описание:** Экспорт критериев сортировки в массив для сериализации`},{heading:`exportsortcriteria`,content:"**Возвращает:** `array<array<string, string>>` Массив с данными о критериях сортировки"},{heading:`importsortcriteria`,content:`**Описание:** Импорт критериев сортировки из массива`}],headings:[{id:`removesortbyfield`,content:"`removeSortByField()`"},{id:`togglesort`,content:"`toggleSort()`"},{id:`sortby`,content:"`sortBy()`"},{id:`addsortcriteria`,content:"`addSortCriteria()`"},{id:`hassortby`,content:"`hasSortBy()`"},{id:`getsortdirection`,content:"`getSortDirection()`"},{id:`getsortcriteria`,content:"`getSortCriteria()`"},{id:`setsortcriteria`,content:"`setSortCriteria()`"},{id:`clearsort`,content:"`clearSort()`"},{id:`addmultiplesort`,content:"`addMultipleSort()`"},{id:`getsortdata`,content:"`getSortData()`"},{id:`getsortcount`,content:"`getSortCount()`"},{id:`hasanysorting`,content:"`hasAnySorting()`"},{id:`getfirstsortcriteria`,content:"`getFirstSortCriteria()`"},{id:`getlastsortcriteria`,content:"`getLastSortCriteria()`"},{id:`sortbyimdbrating`,content:"`sortByImdbRating()`"},{id:`sortbydesc`,content:"`sortByDesc()`"},{id:`sortbyyearoldfirst`,content:"`sortByYearOldFirst()`"},{id:`sortbyasc`,content:"`sortByAsc()`"},{id:`sortbyname`,content:"`sortByName()`"},{id:`sortbypopularity`,content:"`sortByPopularity()`"},{id:`sortbycreated`,content:"`sortByCreated()`"},{id:`sortbyupdated`,content:"`sortByUpdated()`"},{id:`sortbybest`,content:"`sortByBest()`"},{id:`sortbyyear`,content:"`sortByYear()`"},{id:`sortbykinopoiskrating`,content:"`sortByKinopoiskRating()`"},{id:`exportsortcriteria`,content:"`exportSortCriteria()`"},{id:`importsortcriteria`,content:"`importSortCriteria()`"}]},s=[{depth:2,url:`#removesortbyfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`removeSortByField()`})})},{depth:2,url:`#togglesort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toggleSort()`})})},{depth:2,url:`#sortby`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortBy()`})})},{depth:2,url:`#addsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addSortCriteria()`})})},{depth:2,url:`#hassortby`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasSortBy()`})})},{depth:2,url:`#getsortdirection`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortDirection()`})})},{depth:2,url:`#getsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortCriteria()`})})},{depth:2,url:`#setsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setSortCriteria()`})})},{depth:2,url:`#clearsort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`clearSort()`})})},{depth:2,url:`#addmultiplesort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addMultipleSort()`})})},{depth:2,url:`#getsortdata`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortData()`})})},{depth:2,url:`#getsortcount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortCount()`})})},{depth:2,url:`#hasanysorting`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasAnySorting()`})})},{depth:2,url:`#getfirstsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFirstSortCriteria()`})})},{depth:2,url:`#getlastsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getLastSortCriteria()`})})},{depth:2,url:`#sortbyimdbrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByImdbRating()`})})},{depth:2,url:`#sortbydesc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByDesc()`})})},{depth:2,url:`#sortbyyearoldfirst`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByYearOldFirst()`})})},{depth:2,url:`#sortbyasc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByAsc()`})})},{depth:2,url:`#sortbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByName()`})})},{depth:2,url:`#sortbypopularity`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByPopularity()`})})},{depth:2,url:`#sortbycreated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByCreated()`})})},{depth:2,url:`#sortbyupdated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByUpdated()`})})},{depth:2,url:`#sortbybest`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByBest()`})})},{depth:2,url:`#sortbyyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByYear()`})})},{depth:2,url:`#sortbykinopoiskrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByKinopoiskRating()`})})},{depth:2,url:`#exportsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`exportSortCriteria()`})})},{depth:2,url:`#importsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`importSortCriteria()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Trait для добавления функциональности сортировки к фильтрам
Этот trait предоставляет методы для управления параметрами сортировки
при выполнении запросов к API Kinopoisk.dev. Может использоваться
в классах фильтрации для расширения их функциональности.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`removesortbyfield`,children:(0,n.jsx)(t.code,{children:`removeSortByField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет сортировку по указанному полю`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для удаления из сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`togglesort`,children:(0,n.jsx)(t.code,{children:`toggleSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Переключает направление сортировки для указанного поля
Если сортировка по полю существует, меняет направление на противоположное.
Если сортировки нет, добавляет с направлением по умолчанию.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для переключения сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortby`,children:(0,n.jsx)(t.code,{children:`sortBy()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет сортировку по указанному полю`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (SortDirection|null): Направление сортировки (по умолчанию используется рекомендуемое)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`addsortcriteria`,children:(0,n.jsx)(t.code,{children:`addSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет критерий сортировки
Добавляет новый критерий сортировки к текущему набору.
Если критерий для указанного поля уже существует, он будет заменен.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$criteria`}),` (SortCriteria): Критерий сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hassortby`,children:(0,n.jsx)(t.code,{children:`hasSortBy()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, установлена ли сортировка по указанному полю`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для проверки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если сортировка по полю установлена, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`getsortdirection`,children:(0,n.jsx)(t.code,{children:`getSortDirection()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает направление сортировки для указанного поля`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для получения направления`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortDirection|null`}),` Направление сортировки или null, если сортировка не установлена`]}),`
`,(0,n.jsx)(t.h2,{id:`getsortcriteria`,children:(0,n.jsx)(t.code,{children:`getSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все критерии сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortCriteria[]`}),` Массив критериев сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`setsortcriteria`,children:(0,n.jsx)(t.code,{children:`setSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Устанавливает множественные критерии сортировки
Заменяет текущие критерии сортировки новым набором.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$criteria`}),` (SortCriteria[]): Массив критериев сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`clearsort`,children:(0,n.jsx)(t.code,{children:`clearSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Очищает все критерии сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`addmultiplesort`,children:(0,n.jsx)(t.code,{children:`addMultipleSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет множественные критерии сортировки из массива строк`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sorts`}),` (array<string|SortCriteria>): Массив строк в формате "field:direction" или просто "field"`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`addMultipleSort`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'rating.kp:desc'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'year:asc'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:` // будет использовано направление по умолчанию`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getsortdata`,children:(0,n.jsx)(t.code,{children:`getSortData()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует критерии сортировки в параметры для API
Формирует строку сортировки в формате, ожидаемом API Kinopoisk.dev.
Множественные критерии объединяются запятыми.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array|null`}),` Массив с данными о критериях сортировки или null, если критерии не установлены`]}),`
`,(0,n.jsx)(t.h2,{id:`getsortcount`,children:(0,n.jsx)(t.code,{children:`getSortCount()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает количество установленных критериев сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Количество критериев сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`hasanysorting`,children:(0,n.jsx)(t.code,{children:`hasAnySorting()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, установлены ли какие-либо критерии сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если есть хотя бы один критерий сортировки, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`getfirstsortcriteria`,children:(0,n.jsx)(t.code,{children:`getFirstSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает первый критерий сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortCriteria|null`}),` Первый критерий или null, если критерии отсутствуют`]}),`
`,(0,n.jsx)(t.h2,{id:`getlastsortcriteria`,children:(0,n.jsx)(t.code,{children:`getLastSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает последний критерий сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortCriteria|null`}),` Последний критерий или null, если критерии отсутствуют`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyimdbrating`,children:(0,n.jsx)(t.code,{children:`sortByImdbRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по рейтингу IMDB (по убыванию)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbydesc`,children:(0,n.jsx)(t.code,{children:`sortByDesc()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет сортировку по убыванию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyyearoldfirst`,children:(0,n.jsx)(t.code,{children:`sortByYearOldFirst()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по году выпуска (по возрастанию - сначала старые)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyasc`,children:(0,n.jsx)(t.code,{children:`sortByAsc()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет сортировку по возрастанию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyname`,children:(0,n.jsx)(t.code,{children:`sortByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по названию (по алфавиту)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbypopularity`,children:(0,n.jsx)(t.code,{children:`sortByPopularity()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по популярности (количество голосов Кинопоиска)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbycreated`,children:(0,n.jsx)(t.code,{children:`sortByCreated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по дате создания записи (сначала новые)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyupdated`,children:(0,n.jsx)(t.code,{children:`sortByUpdated()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по дате обновления записи (сначала обновленные)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbybest`,children:(0,n.jsx)(t.code,{children:`sortByBest()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Комбинированная сортировка по рейтингу и году
Сначала по рейтингу Кинопоиска (по убыванию), затем по году (по убыванию).`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbyyear`,children:(0,n.jsx)(t.code,{children:`sortByYear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по году выпуска (по убыванию - сначала новые)`]}),`
`,(0,n.jsx)(t.h2,{id:`sortbykinopoiskrating`,children:(0,n.jsx)(t.code,{children:`sortByKinopoiskRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сортировка по рейтингу Кинопоиска (по убыванию)`]}),`
`,(0,n.jsx)(t.h2,{id:`exportsortcriteria`,children:(0,n.jsx)(t.code,{children:`exportSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Экспорт критериев сортировки в массив для сериализации`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<array<string, string>>`}),` Массив с данными о критериях сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`importsortcriteria`,children:(0,n.jsx)(t.code,{children:`importSortCriteria()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Импорт критериев сортировки из массива`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};