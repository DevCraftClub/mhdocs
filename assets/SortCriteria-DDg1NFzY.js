import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SortCriteria`},i=new Date(1787223655e3),a=`

**Описание:** Класс для представления критериев сортировки
Инкапсулирует информацию о поле сортировки и направлении,
предоставляя удобные методы для работы с параметрами сортировки.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания критериев сортировки

**Параметры:**

* \`$field\` (SortField): Поле для сортировки
* \`$direction\` (SortDirection): Направление сортировки

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление критериев

**Возвращает:** \`string\` Человекочитаемое описание критериев сортировки

## \`create()\` [#create]

**Описание:** Создает критерии сортировки с автоматическим направлением по умолчанию
Фабричный метод, который создает SortCriteria используя рекомендуемое
направление сортировки для указанного поля.

**Параметры:**

* \`$field\` (SortField): Поле для сортировки

**Возвращает:** \`self\` Новый экземпляр SortCriteria с направлением по умолчанию

## \`ascending()\` [#ascending]

**Описание:** Создает критерии сортировки по возрастанию

**Параметры:**

* \`$field\` (SortField): Поле для сортировки

**Возвращает:** \`self\` Новый экземпляр SortCriteria с направлением ASC

## \`descending()\` [#descending]

**Описание:** Создает критерии сортировки по убыванию

**Параметры:**

* \`$field\` (SortField): Поле для сортировки

**Возвращает:** \`self\` Новый экземпляр SortCriteria с направлением DESC

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр SortCriteria из массива данных

**Возвращает:** \`self|null\` Новый экземпляр SortCriteria или null при некорректных данных

## \`fromStrings()\` [#fromstrings]

**Описание:** Создает экземпляр SortCriteria из строковых значений

**Параметры:**

* \`$field\` (string): Строковое значение поля
* \`$direction\` (string|null): Строковое значение направления (опционально)

**Возвращает:** \`self|null\` Новый экземпляр SortCriteria или null при неудачном преобразовании

## \`toArray()\` [#toarray]

**Описание:** Преобразует критерии в массив

**Возвращает:** \`array<string, string>\` Ассоциативный массив с ключами 'field' и 'direction'

## \`toApiString()\` [#toapistring]

**Описание:** Преобразует критерии в массив для URL параметров API
Формирует массив с отдельными параметрами sortField и sortType
для использования в API Kinopoisk.dev.

**Возвращает:** \`array\` Массив с ключами sortField и sortType

## \`reverse()\` [#reverse]

**Описание:** Возвращает противоположные критерии сортировки
Создает новый экземпляр SortCriteria с тем же полем,
но противоположным направлением сортировки.

**Возвращает:** \`self\` Новый экземпляр с обращенным направлением

## \`hasSameField()\` [#hassamefield]

**Описание:** Проверяет, совпадают ли критерии по полю

**Параметры:**

* \`$other\` (SortCriteria): Другие критерии для сравнения

**Возвращает:** \`bool true,\` если поля совпадают, false в противном случае

## \`equals()\` [#equals]

**Описание:** Проверяет полное равенство критериев

**Параметры:**

* \`$other\` (SortCriteria): Другие критерии для сравнения

**Возвращает:** \`bool true,\` если поле и направление совпадают, false в противном случае

## \`toShortString()\` [#toshortstring]

**Описание:** Возвращает краткое строковое представление

**Возвращает:** \`string\` Краткое описание с символом направления

## \`isRatingSort()\` [#isratingsort]

**Описание:** Проверяет, является ли поле рейтинговым

**Возвращает:** \`bool true,\` если поле сортировки является рейтинговым

## \`isVotesSort()\` [#isvotessort]

**Описание:** Проверяет, является ли поле полем голосов

**Возвращает:** \`bool true,\` если поле сортировки является полем голосов

## \`isDateSort()\` [#isdatesort]

**Описание:** Проверяет, является ли сортировка по дате

**Возвращает:** \`bool true,\` если поле сортировки является полем даты

## \`getFieldDataType()\` [#getfielddatatype]

**Описание:** Возвращает тип данных поля сортировки

**Возвращает:** \`string\` Тип данных поля ('number', 'string', 'date')
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления критериев сортировки
Инкапсулирует информацию о поле сортировки и направлении,
предоставляя удобные методы для работы с параметрами сортировки.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`__construct`,content:`**Описание:** Конструктор для создания критериев сортировки`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$field` (SortField): Поле для сортировки"},{heading:`__construct`,content:"`$direction` (SortDirection): Направление сортировки"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление критериев`},{heading:`__tostring`,content:"**Возвращает:** `string` Человекочитаемое описание критериев сортировки"},{heading:`create`,content:`**Описание:** Создает критерии сортировки с автоматическим направлением по умолчанию
Фабричный метод, который создает SortCriteria используя рекомендуемое
направление сортировки для указанного поля.`},{heading:`create`,content:`**Параметры:**`},{heading:`create`,content:"`$field` (SortField): Поле для сортировки"},{heading:`create`,content:"**Возвращает:** `self` Новый экземпляр SortCriteria с направлением по умолчанию"},{heading:`ascending`,content:`**Описание:** Создает критерии сортировки по возрастанию`},{heading:`ascending`,content:`**Параметры:**`},{heading:`ascending`,content:"`$field` (SortField): Поле для сортировки"},{heading:`ascending`,content:"**Возвращает:** `self` Новый экземпляр SortCriteria с направлением ASC"},{heading:`descending`,content:`**Описание:** Создает критерии сортировки по убыванию`},{heading:`descending`,content:`**Параметры:**`},{heading:`descending`,content:"`$field` (SortField): Поле для сортировки"},{heading:`descending`,content:"**Возвращает:** `self` Новый экземпляр SortCriteria с направлением DESC"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр SortCriteria из массива данных`},{heading:`fromarray`,content:"**Возвращает:** `self|null` Новый экземпляр SortCriteria или null при некорректных данных"},{heading:`fromstrings`,content:`**Описание:** Создает экземпляр SortCriteria из строковых значений`},{heading:`fromstrings`,content:`**Параметры:**`},{heading:`fromstrings`,content:"`$field` (string): Строковое значение поля"},{heading:`fromstrings`,content:"`$direction` (string|null): Строковое значение направления (опционально)"},{heading:`fromstrings`,content:"**Возвращает:** `self|null` Новый экземпляр SortCriteria или null при неудачном преобразовании"},{heading:`toarray`,content:`**Описание:** Преобразует критерии в массив`},{heading:`toarray`,content:"**Возвращает:** `array<string, string>` Ассоциативный массив с ключами 'field' и 'direction'"},{heading:`toapistring`,content:`**Описание:** Преобразует критерии в массив для URL параметров API
Формирует массив с отдельными параметрами sortField и sortType
для использования в API Kinopoisk.dev.`},{heading:`toapistring`,content:"**Возвращает:** `array` Массив с ключами sortField и sortType"},{heading:`reverse`,content:`**Описание:** Возвращает противоположные критерии сортировки
Создает новый экземпляр SortCriteria с тем же полем,
но противоположным направлением сортировки.`},{heading:`reverse`,content:"**Возвращает:** `self` Новый экземпляр с обращенным направлением"},{heading:`hassamefield`,content:`**Описание:** Проверяет, совпадают ли критерии по полю`},{heading:`hassamefield`,content:`**Параметры:**`},{heading:`hassamefield`,content:"`$other` (SortCriteria): Другие критерии для сравнения"},{heading:`hassamefield`,content:"**Возвращает:** `bool true,` если поля совпадают, false в противном случае"},{heading:`equals`,content:`**Описание:** Проверяет полное равенство критериев`},{heading:`equals`,content:`**Параметры:**`},{heading:`equals`,content:"`$other` (SortCriteria): Другие критерии для сравнения"},{heading:`equals`,content:"**Возвращает:** `bool true,` если поле и направление совпадают, false в противном случае"},{heading:`toshortstring`,content:`**Описание:** Возвращает краткое строковое представление`},{heading:`toshortstring`,content:"**Возвращает:** `string` Краткое описание с символом направления"},{heading:`isratingsort`,content:`**Описание:** Проверяет, является ли поле рейтинговым`},{heading:`isratingsort`,content:"**Возвращает:** `bool true,` если поле сортировки является рейтинговым"},{heading:`isvotessort`,content:`**Описание:** Проверяет, является ли поле полем голосов`},{heading:`isvotessort`,content:"**Возвращает:** `bool true,` если поле сортировки является полем голосов"},{heading:`isdatesort`,content:`**Описание:** Проверяет, является ли сортировка по дате`},{heading:`isdatesort`,content:"**Возвращает:** `bool true,` если поле сортировки является полем даты"},{heading:`getfielddatatype`,content:`**Описание:** Возвращает тип данных поля сортировки`},{heading:`getfielddatatype`,content:"**Возвращает:** `string` Тип данных поля ('number', 'string', 'date')"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`create`,content:"`create()`"},{id:`ascending`,content:"`ascending()`"},{id:`descending`,content:"`descending()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`fromstrings`,content:"`fromStrings()`"},{id:`toarray`,content:"`toArray()`"},{id:`toapistring`,content:"`toApiString()`"},{id:`reverse`,content:"`reverse()`"},{id:`hassamefield`,content:"`hasSameField()`"},{id:`equals`,content:"`equals()`"},{id:`toshortstring`,content:"`toShortString()`"},{id:`isratingsort`,content:"`isRatingSort()`"},{id:`isvotessort`,content:"`isVotesSort()`"},{id:`isdatesort`,content:"`isDateSort()`"},{id:`getfielddatatype`,content:"`getFieldDataType()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#create`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`create()`})})},{depth:2,url:`#ascending`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ascending()`})})},{depth:2,url:`#descending`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`descending()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#fromstrings`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromStrings()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#toapistring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toApiString()`})})},{depth:2,url:`#reverse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`reverse()`})})},{depth:2,url:`#hassamefield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasSameField()`})})},{depth:2,url:`#equals`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`equals()`})})},{depth:2,url:`#toshortstring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toShortString()`})})},{depth:2,url:`#isratingsort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isRatingSort()`})})},{depth:2,url:`#isvotessort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isVotesSort()`})})},{depth:2,url:`#isdatesort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isDateSort()`})})},{depth:2,url:`#getfielddatatype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFieldDataType()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления критериев сортировки
Инкапсулирует информацию о поле сортировки и направлении,
предоставляя удобные методы для работы с параметрами сортировки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания критериев сортировки`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (SortDirection): Направление сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление критериев`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Человекочитаемое описание критериев сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`create`,children:(0,n.jsx)(t.code,{children:`create()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает критерии сортировки с автоматическим направлением по умолчанию
Фабричный метод, который создает SortCriteria используя рекомендуемое
направление сортировки для указанного поля.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Новый экземпляр SortCriteria с направлением по умолчанию`]}),`
`,(0,n.jsx)(t.h2,{id:`ascending`,children:(0,n.jsx)(t.code,{children:`ascending()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает критерии сортировки по возрастанию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Новый экземпляр SortCriteria с направлением ASC`]}),`
`,(0,n.jsx)(t.h2,{id:`descending`,children:(0,n.jsx)(t.code,{children:`descending()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает критерии сортировки по убыванию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (SortField): Поле для сортировки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Новый экземпляр SortCriteria с направлением DESC`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр SortCriteria из массива данных`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self|null`}),` Новый экземпляр SortCriteria или null при некорректных данных`]}),`
`,(0,n.jsx)(t.h2,{id:`fromstrings`,children:(0,n.jsx)(t.code,{children:`fromStrings()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр SortCriteria из строковых значений`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Строковое значение поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$direction`}),` (string|null): Строковое значение направления (опционально)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self|null`}),` Новый экземпляр SortCriteria или null при неудачном преобразовании`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует критерии в массив`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string>`}),` Ассоциативный массив с ключами 'field' и 'direction'`]}),`
`,(0,n.jsx)(t.h2,{id:`toapistring`,children:(0,n.jsx)(t.code,{children:`toApiString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует критерии в массив для URL параметров API
Формирует массив с отдельными параметрами sortField и sortType
для использования в API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с ключами sortField и sortType`]}),`
`,(0,n.jsx)(t.h2,{id:`reverse`,children:(0,n.jsx)(t.code,{children:`reverse()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает противоположные критерии сортировки
Создает новый экземпляр SortCriteria с тем же полем,
но противоположным направлением сортировки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Новый экземпляр с обращенным направлением`]}),`
`,(0,n.jsx)(t.h2,{id:`hassamefield`,children:(0,n.jsx)(t.code,{children:`hasSameField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, совпадают ли критерии по полю`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$other`}),` (SortCriteria): Другие критерии для сравнения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поля совпадают, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`equals`,children:(0,n.jsx)(t.code,{children:`equals()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет полное равенство критериев`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$other`}),` (SortCriteria): Другие критерии для сравнения`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле и направление совпадают, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`toshortstring`,children:(0,n.jsx)(t.code,{children:`toShortString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает краткое строковое представление`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Краткое описание с символом направления`]}),`
`,(0,n.jsx)(t.h2,{id:`isratingsort`,children:(0,n.jsx)(t.code,{children:`isRatingSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле рейтинговым`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле сортировки является рейтинговым`]}),`
`,(0,n.jsx)(t.h2,{id:`isvotessort`,children:(0,n.jsx)(t.code,{children:`isVotesSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле полем голосов`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле сортировки является полем голосов`]}),`
`,(0,n.jsx)(t.h2,{id:`isdatesort`,children:(0,n.jsx)(t.code,{children:`isDateSort()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли сортировка по дате`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле сортировки является полем даты`]}),`
`,(0,n.jsx)(t.h2,{id:`getfielddatatype`,children:(0,n.jsx)(t.code,{children:`getFieldDataType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает тип данных поля сортировки`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Тип данных поля ('number', 'string', 'date')`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};