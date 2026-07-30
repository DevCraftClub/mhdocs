import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ExternalId`},i=new Date(1785404498e3),a=`

**Описание:** Класс для представления внешних идентификаторов фильмов
Содержит идентификаторы фильма в различных внешних системах, таких как
Kinopoisk HD, IMDB и The Movie Database (TMDB). Предоставляет методы для
работы с идентификаторами, включая получение URL-адресов и проверку
существования идентификаторов.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\LinkedMovie\`: Для связанных фильмов с внешними идентификаторами
* \`\\KinopoiskDev\\Models\\Movie\`: Для использования внешних идентификаторов в фильмах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта внешних идентификаторов
Создает новый экземпляр класса ExternalId с указанными идентификаторами
из внешних систем. Все параметры являются опциональными и могут быть null
при отсутствии соответствующего идентификатора.

**Параметры:**

* \`$kpHD\` (string|null): Идентификатор фильма в системе Kinopoisk HD (null если не указан)
* \`$imdb\` (string|null): Идентификатор фильма в системе IMDB (null если не указан)
* \`$tmdb\` (int|null): Идентификатор фильма в системе TMDB (null если не указан)

**См. также:**

* \`ExternalId::fromArray\`: () Для создания объекта из массива данных API
* \`ExternalId::toArray\`: () Для преобразования объекта в массив

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление внешних идентификаторов
Магический метод для преобразования объекта в строку. Формирует читаемое
представление всех доступных внешних идентификаторов, разделенных запятыми.
Если идентификаторы отсутствуют, возвращает сообщение об их отсутствии.
"KP HD: \\{id}, IMDB: \\{id}, TMDB: \\{id}" или "No external IDs"

**Возвращает:** \`string\` Строковое представление внешних идентификаторов в формате

**См. также:**

* \`ExternalId::getAvailableIds\`: () Для получения доступных идентификаторов
* \`ExternalId::hasAnyId\`: () Для проверки наличия идентификаторов

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект ExternalId из массива данных API
Фабричный метод для создания экземпляра класса ExternalId из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Преобразует строковое значение TMDB в целое число.

* kpHD: string|null - идентификатор Kinopoisk HD
* imdb: string|null - идентификатор IMDB
* tmdb: string|int|null - идентификатор TMDB

**Возвращает:** \`static\` Новый экземпляр класса ExternalId с данными из массива

**См. также:**

* \`ExternalId::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ExternalId в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.

* kpHD: string|null - идентификатор Kinopoisk HD
* imdb: string|null - идентификатор IMDB
* tmdb: int|null - идентификатор TMDB

**Возвращает:** \`array<string, mixed>\` Массив с данными о внешних идентификаторах, содержащий ключи:

**См. также:**

* \`ExternalId::fromArray\`: () Для создания объекта из массива

## \`getImdbUrl()\` [#getimdburl]

**Описание:** Генерирует URL-адрес страницы фильма в системе IMDB
Формирует полный URL-адрес страницы фильма в системе IMDB на основе
сохраненного идентификатора. Возвращает null, если идентификатор IMDB
не установлен.

**Возвращает:** \`string|null\` URL-адрес страницы фильма в IMDB или null, если идентификатор не установлен

**См. также:**

* \`ExternalId::getImdbId\`: () Для получения идентификатора IMDB
* \`ExternalId::hasImdbId\`: () Для проверки существования идентификатора

## \`getTmdbUrl()\` [#gettmdburl]

**Описание:** Генерирует URL-адрес страницы фильма в системе TMDB
Формирует полный URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе сохраненного идентификатора. Возвращает null, если идентификатор TMDB
не установлен.

**Возвращает:** \`string|null\` URL-адрес страницы фильма в TMDB или null, если идентификатор не установлен

**См. также:**

* \`ExternalId::getTmdbId\`: () Для получения идентификатора TMDB
* \`ExternalId::hasTmdbId\`: () Для проверки существования идентификатора

## \`hasAnyId()\` [#hasanyid]

**Описание:** Проверяет наличие хотя бы одного внешнего идентификатора
Определяет, установлен ли хотя бы один из внешних идентификаторов
(Kinopoisk HD, IMDB или TMDB). Возвращает true, если найден хотя бы один
не null идентификатор.

**Возвращает:** \`bool true,\` если установлен хотя бы один идентификатор, false в противном случае

**См. также:**

* \`ExternalId::hasImdbId\`: () Для проверки конкретного идентификатора IMDB
* \`ExternalId::hasTmdbId\`: () Для проверки конкретного идентификатора TMDB
* \`ExternalId::hasKinopoiskHdId\`: () Для проверки конкретного идентификатора Kinopoisk HD

## \`hasImdbId()\` [#hasimdbid]

**Описание:** Проверяет наличие идентификатора IMDB
Определяет, установлен ли идентификатор фильма в системе IMDB.
Возвращает true, если идентификатор не равен null.

**Возвращает:** \`bool true,\` если идентификатор IMDB установлен, false в противном случае

**См. также:**

* \`ExternalId::getImdbId\`: () Для получения идентификатора IMDB
* \`ExternalId::hasAnyId\`: () Для проверки любого идентификатора

## \`hasTmdbId()\` [#hastmdbid]

**Описание:** Проверяет наличие идентификатора TMDB
Определяет, установлен ли идентификатор фильма в системе The Movie Database (TMDB).
Возвращает true, если идентификатор не равен null.

**Возвращает:** \`bool true,\` если идентификатор TMDB установлен, false в противном случае

**См. также:**

* \`ExternalId::getTmdbId\`: () Для получения идентификатора TMDB
* \`ExternalId::hasAnyId\`: () Для проверки любого идентификатора

## \`hasKinopoiskHdId()\` [#haskinopoiskhdid]

**Описание:** Проверяет наличие идентификатора Kinopoisk HD
Определяет, установлен ли идентификатор фильма в системе Kinopoisk HD.
Возвращает true, если идентификатор не равен null.

**Возвращает:** \`bool true,\` если идентификатор Kinopoisk HD установлен, false в противном случае

**См. также:**

* \`ExternalId::getKinopoiskHdId\`: () Для получения идентификатора Kinopoisk HD
* \`ExternalId::hasAnyId\`: () Для проверки любого идентификатора

## \`getAvailableIds()\` [#getavailableids]

**Описание:** Возвращает все доступные идентификаторы в виде ассоциативного массива
Собирает все установленные (не null) внешние идентификаторы в ассоциативный массив,
где ключами являются названия систем, а значениями - соответствующие идентификаторы.
Отсутствующие идентификаторы не включаются в результат.

* ключ 'kpHD' содержит идентификатор Kinopoisk HD (если установлен)
* ключ 'imdb' содержит идентификатор IMDB (если установлен)
* ключ 'tmdb' содержит идентификатор TMDB (если установлен)

**Возвращает:** \`array<string, string|int>\` Ассоциативный массив с доступными идентификаторами, где:

**См. также:**

* \`ExternalId::hasAnyId\`: () Для проверки наличия идентификаторов
* \`ExternalId::toArray\`: () Для получения всех идентификаторов включая null

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления внешних идентификаторов фильмов
Содержит идентификаторы фильма в различных внешних системах, таких как
Kinopoisk HD, IMDB и The Movie Database (TMDB). Предоставляет методы для
работы с идентификаторами, включая получение URL-адресов и проверку
существования идентификаторов.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\LinkedMovie`: Для связанных фильмов с внешними идентификаторами"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie`: Для использования внешних идентификаторов в фильмах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта внешних идентификаторов
Создает новый экземпляр класса ExternalId с указанными идентификаторами
из внешних систем. Все параметры являются опциональными и могут быть null
при отсутствии соответствующего идентификатора.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$kpHD` (string|null): Идентификатор фильма в системе Kinopoisk HD (null если не указан)"},{heading:`__construct`,content:"`$imdb` (string|null): Идентификатор фильма в системе IMDB (null если не указан)"},{heading:`__construct`,content:"`$tmdb` (int|null): Идентификатор фильма в системе TMDB (null если не указан)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`ExternalId::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`ExternalId::toArray`: () Для преобразования объекта в массив"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление внешних идентификаторов
Магический метод для преобразования объекта в строку. Формирует читаемое
представление всех доступных внешних идентификаторов, разделенных запятыми.
Если идентификаторы отсутствуют, возвращает сообщение об их отсутствии.
"KP HD: \\{id}, IMDB: \\{id}, TMDB: \\{id}" или "No external IDs"`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление внешних идентификаторов в формате"},{heading:`__tostring`,content:`**См. также:**`},{heading:`__tostring`,content:"`ExternalId::getAvailableIds`: () Для получения доступных идентификаторов"},{heading:`__tostring`,content:"`ExternalId::hasAnyId`: () Для проверки наличия идентификаторов"},{heading:`fromarray`,content:`**Описание:** Создает объект ExternalId из массива данных API
Фабричный метод для создания экземпляра класса ExternalId из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Преобразует строковое значение TMDB в целое число.`},{heading:`fromarray`,content:`kpHD: string|null - идентификатор Kinopoisk HD`},{heading:`fromarray`,content:`imdb: string|null - идентификатор IMDB`},{heading:`fromarray`,content:`tmdb: string|int|null - идентификатор TMDB`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса ExternalId с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`ExternalId::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ExternalId в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.`},{heading:`toarray`,content:`kpHD: string|null - идентификатор Kinopoisk HD`},{heading:`toarray`,content:`imdb: string|null - идентификатор IMDB`},{heading:`toarray`,content:`tmdb: int|null - идентификатор TMDB`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив с данными о внешних идентификаторах, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`ExternalId::fromArray`: () Для создания объекта из массива"},{heading:`getimdburl`,content:`**Описание:** Генерирует URL-адрес страницы фильма в системе IMDB
Формирует полный URL-адрес страницы фильма в системе IMDB на основе
сохраненного идентификатора. Возвращает null, если идентификатор IMDB
не установлен.`},{heading:`getimdburl`,content:"**Возвращает:** `string|null` URL-адрес страницы фильма в IMDB или null, если идентификатор не установлен"},{heading:`getimdburl`,content:`**См. также:**`},{heading:`getimdburl`,content:"`ExternalId::getImdbId`: () Для получения идентификатора IMDB"},{heading:`getimdburl`,content:"`ExternalId::hasImdbId`: () Для проверки существования идентификатора"},{heading:`gettmdburl`,content:`**Описание:** Генерирует URL-адрес страницы фильма в системе TMDB
Формирует полный URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе сохраненного идентификатора. Возвращает null, если идентификатор TMDB
не установлен.`},{heading:`gettmdburl`,content:"**Возвращает:** `string|null` URL-адрес страницы фильма в TMDB или null, если идентификатор не установлен"},{heading:`gettmdburl`,content:`**См. также:**`},{heading:`gettmdburl`,content:"`ExternalId::getTmdbId`: () Для получения идентификатора TMDB"},{heading:`gettmdburl`,content:"`ExternalId::hasTmdbId`: () Для проверки существования идентификатора"},{heading:`hasanyid`,content:`**Описание:** Проверяет наличие хотя бы одного внешнего идентификатора
Определяет, установлен ли хотя бы один из внешних идентификаторов
(Kinopoisk HD, IMDB или TMDB). Возвращает true, если найден хотя бы один
не null идентификатор.`},{heading:`hasanyid`,content:"**Возвращает:** `bool true,` если установлен хотя бы один идентификатор, false в противном случае"},{heading:`hasanyid`,content:`**См. также:**`},{heading:`hasanyid`,content:"`ExternalId::hasImdbId`: () Для проверки конкретного идентификатора IMDB"},{heading:`hasanyid`,content:"`ExternalId::hasTmdbId`: () Для проверки конкретного идентификатора TMDB"},{heading:`hasanyid`,content:"`ExternalId::hasKinopoiskHdId`: () Для проверки конкретного идентификатора Kinopoisk HD"},{heading:`hasimdbid`,content:`**Описание:** Проверяет наличие идентификатора IMDB
Определяет, установлен ли идентификатор фильма в системе IMDB.
Возвращает true, если идентификатор не равен null.`},{heading:`hasimdbid`,content:"**Возвращает:** `bool true,` если идентификатор IMDB установлен, false в противном случае"},{heading:`hasimdbid`,content:`**См. также:**`},{heading:`hasimdbid`,content:"`ExternalId::getImdbId`: () Для получения идентификатора IMDB"},{heading:`hasimdbid`,content:"`ExternalId::hasAnyId`: () Для проверки любого идентификатора"},{heading:`hastmdbid`,content:`**Описание:** Проверяет наличие идентификатора TMDB
Определяет, установлен ли идентификатор фильма в системе The Movie Database (TMDB).
Возвращает true, если идентификатор не равен null.`},{heading:`hastmdbid`,content:"**Возвращает:** `bool true,` если идентификатор TMDB установлен, false в противном случае"},{heading:`hastmdbid`,content:`**См. также:**`},{heading:`hastmdbid`,content:"`ExternalId::getTmdbId`: () Для получения идентификатора TMDB"},{heading:`hastmdbid`,content:"`ExternalId::hasAnyId`: () Для проверки любого идентификатора"},{heading:`haskinopoiskhdid`,content:`**Описание:** Проверяет наличие идентификатора Kinopoisk HD
Определяет, установлен ли идентификатор фильма в системе Kinopoisk HD.
Возвращает true, если идентификатор не равен null.`},{heading:`haskinopoiskhdid`,content:"**Возвращает:** `bool true,` если идентификатор Kinopoisk HD установлен, false в противном случае"},{heading:`haskinopoiskhdid`,content:`**См. также:**`},{heading:`haskinopoiskhdid`,content:"`ExternalId::getKinopoiskHdId`: () Для получения идентификатора Kinopoisk HD"},{heading:`haskinopoiskhdid`,content:"`ExternalId::hasAnyId`: () Для проверки любого идентификатора"},{heading:`getavailableids`,content:`**Описание:** Возвращает все доступные идентификаторы в виде ассоциативного массива
Собирает все установленные (не null) внешние идентификаторы в ассоциативный массив,
где ключами являются названия систем, а значениями - соответствующие идентификаторы.
Отсутствующие идентификаторы не включаются в результат.`},{heading:`getavailableids`,content:`ключ 'kpHD' содержит идентификатор Kinopoisk HD (если установлен)`},{heading:`getavailableids`,content:`ключ 'imdb' содержит идентификатор IMDB (если установлен)`},{heading:`getavailableids`,content:`ключ 'tmdb' содержит идентификатор TMDB (если установлен)`},{heading:`getavailableids`,content:"**Возвращает:** `array<string, string|int>` Ассоциативный массив с доступными идентификаторами, где:"},{heading:`getavailableids`,content:`**См. также:**`},{heading:`getavailableids`,content:"`ExternalId::hasAnyId`: () Для проверки наличия идентификаторов"},{heading:`getavailableids`,content:"`ExternalId::toArray`: () Для получения всех идентификаторов включая null"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`getimdburl`,content:"`getImdbUrl()`"},{id:`gettmdburl`,content:"`getTmdbUrl()`"},{id:`hasanyid`,content:"`hasAnyId()`"},{id:`hasimdbid`,content:"`hasImdbId()`"},{id:`hastmdbid`,content:"`hasTmdbId()`"},{id:`haskinopoiskhdid`,content:"`hasKinopoiskHdId()`"},{id:`getavailableids`,content:"`getAvailableIds()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getimdburl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImdbUrl()`})})},{depth:2,url:`#gettmdburl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getTmdbUrl()`})})},{depth:2,url:`#hasanyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasAnyId()`})})},{depth:2,url:`#hasimdbid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasImdbId()`})})},{depth:2,url:`#hastmdbid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasTmdbId()`})})},{depth:2,url:`#haskinopoiskhdid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasKinopoiskHdId()`})})},{depth:2,url:`#getavailableids`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAvailableIds()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления внешних идентификаторов фильмов
Содержит идентификаторы фильма в различных внешних системах, таких как
Kinopoisk HD, IMDB и The Movie Database (TMDB). Предоставляет методы для
работы с идентификаторами, включая получение URL-адресов и проверку
существования идентификаторов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\LinkedMovie`}),`: Для связанных фильмов с внешними идентификаторами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie`}),`: Для использования внешних идентификаторов в фильмах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта внешних идентификаторов
Создает новый экземпляр класса ExternalId с указанными идентификаторами
из внешних систем. Все параметры являются опциональными и могут быть null
при отсутствии соответствующего идентификатора.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$kpHD`}),` (string|null): Идентификатор фильма в системе Kinopoisk HD (null если не указан)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$imdb`}),` (string|null): Идентификатор фильма в системе IMDB (null если не указан)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$tmdb`}),` (int|null): Идентификатор фильма в системе TMDB (null если не указан)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление внешних идентификаторов
Магический метод для преобразования объекта в строку. Формирует читаемое
представление всех доступных внешних идентификаторов, разделенных запятыми.
Если идентификаторы отсутствуют, возвращает сообщение об их отсутствии.
"KP HD: {id}, IMDB: {id}, TMDB: {id}" или "No external IDs"`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление внешних идентификаторов в формате`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getAvailableIds`}),`: () Для получения доступных идентификаторов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasAnyId`}),`: () Для проверки наличия идентификаторов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект ExternalId из массива данных API
Фабричный метод для создания экземпляра класса ExternalId из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null. Преобразует строковое значение TMDB в целое число.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`kpHD: string|null - идентификатор Kinopoisk HD`}),`
`,(0,n.jsx)(t.li,{children:`imdb: string|null - идентификатор IMDB`}),`
`,(0,n.jsx)(t.li,{children:`tmdb: string|int|null - идентификатор TMDB`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса ExternalId с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса ExternalId в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных в JSON.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`kpHD: string|null - идентификатор Kinopoisk HD`}),`
`,(0,n.jsx)(t.li,{children:`imdb: string|null - идентификатор IMDB`}),`
`,(0,n.jsx)(t.li,{children:`tmdb: int|null - идентификатор TMDB`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив с данными о внешних идентификаторах, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getimdburl`,children:(0,n.jsx)(t.code,{children:`getImdbUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Генерирует URL-адрес страницы фильма в системе IMDB
Формирует полный URL-адрес страницы фильма в системе IMDB на основе
сохраненного идентификатора. Возвращает null, если идентификатор IMDB
не установлен.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес страницы фильма в IMDB или null, если идентификатор не установлен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getImdbId`}),`: () Для получения идентификатора IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasImdbId`}),`: () Для проверки существования идентификатора`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`gettmdburl`,children:(0,n.jsx)(t.code,{children:`getTmdbUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Генерирует URL-адрес страницы фильма в системе TMDB
Формирует полный URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе сохраненного идентификатора. Возвращает null, если идентификатор TMDB
не установлен.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес страницы фильма в TMDB или null, если идентификатор не установлен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getTmdbId`}),`: () Для получения идентификатора TMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasTmdbId`}),`: () Для проверки существования идентификатора`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hasanyid`,children:(0,n.jsx)(t.code,{children:`hasAnyId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие хотя бы одного внешнего идентификатора
Определяет, установлен ли хотя бы один из внешних идентификаторов
(Kinopoisk HD, IMDB или TMDB). Возвращает true, если найден хотя бы один
не null идентификатор.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если установлен хотя бы один идентификатор, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasImdbId`}),`: () Для проверки конкретного идентификатора IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasTmdbId`}),`: () Для проверки конкретного идентификатора TMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasKinopoiskHdId`}),`: () Для проверки конкретного идентификатора Kinopoisk HD`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hasimdbid`,children:(0,n.jsx)(t.code,{children:`hasImdbId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие идентификатора IMDB
Определяет, установлен ли идентификатор фильма в системе IMDB.
Возвращает true, если идентификатор не равен null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если идентификатор IMDB установлен, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getImdbId`}),`: () Для получения идентификатора IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasAnyId`}),`: () Для проверки любого идентификатора`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hastmdbid`,children:(0,n.jsx)(t.code,{children:`hasTmdbId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие идентификатора TMDB
Определяет, установлен ли идентификатор фильма в системе The Movie Database (TMDB).
Возвращает true, если идентификатор не равен null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если идентификатор TMDB установлен, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getTmdbId`}),`: () Для получения идентификатора TMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasAnyId`}),`: () Для проверки любого идентификатора`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`haskinopoiskhdid`,children:(0,n.jsx)(t.code,{children:`hasKinopoiskHdId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие идентификатора Kinopoisk HD
Определяет, установлен ли идентификатор фильма в системе Kinopoisk HD.
Возвращает true, если идентификатор не равен null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если идентификатор Kinopoisk HD установлен, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getKinopoiskHdId`}),`: () Для получения идентификатора Kinopoisk HD`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasAnyId`}),`: () Для проверки любого идентификатора`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getavailableids`,children:(0,n.jsx)(t.code,{children:`getAvailableIds()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все доступные идентификаторы в виде ассоциативного массива
Собирает все установленные (не null) внешние идентификаторы в ассоциативный массив,
где ключами являются названия систем, а значениями - соответствующие идентификаторы.
Отсутствующие идентификаторы не включаются в результат.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`ключ 'kpHD' содержит идентификатор Kinopoisk HD (если установлен)`}),`
`,(0,n.jsx)(t.li,{children:`ключ 'imdb' содержит идентификатор IMDB (если установлен)`}),`
`,(0,n.jsx)(t.li,{children:`ключ 'tmdb' содержит идентификатор TMDB (если установлен)`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string|int>`}),` Ассоциативный массив с доступными идентификаторами, где:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::hasAnyId`}),`: () Для проверки наличия идентификаторов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::toArray`}),`: () Для получения всех идентификаторов включая null`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};