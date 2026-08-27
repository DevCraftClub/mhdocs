import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Votes`},i=new Date(1787750944e3),a=`

**Описание:** Класс для представления количества голосов из различных источников
Содержит информацию о количестве голосов для фильма/сериала из различных
источников, включая Кинопоиск, IMDB, TMDB, а также голоса кинокритиков
и ожидания зрителей. Используется для анализа популярности произведения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie::getVotes\`: () Для получения голосов фильма
* \`\\KinopoiskDev\\Models\\Rating\`: Для информации о рейтингах

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта голосов
Создает новый экземпляр класса Votes с количеством голосов из различных источников.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.

**Параметры:**

* \`$kp\` (int|null): Количество голосов на Кинопоиске
* \`$imdb\` (int|null): Количество голосов на IMDB
* \`$tmdb\` (int|null): Количество голосов на The Movie Database
* \`$filmCritics\` (int|null): Количество голосов кинокритиков
* \`$russianFilmCritics\` (int|null): Количество голосов российских кинокритиков
* \`$await\` (int|null): Количество голосов ожидания

**См. также:**

* \`Votes::fromArray\`: () Для создания объекта из массива данных API
* \`Votes::toArray\`: () Для преобразования объекта в массив

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление голосов
Реализует магический метод \\_\\_toString для преобразования объекта
в строку. Формирует строку, содержащую основные голоса в удобочитаемом
формате, разделенные запятыми.

**Возвращает:** \`string\` Строковое представление голосов или 'No votes', если голоса отсутствуют

**См. также:**

* \`Votes::formatVoteCount\`: () Для форматирования количества голосов
* \`Votes::getFormattedKpVotes\`: () Для получения отформатированных голосов Кинопоиска
* \`Votes::getFormattedImdbVotes\`: () Для получения отформатированных голосов IMDB

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Votes из массива данных API
Фабричный метод для создания экземпляра класса Votes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует строковые значения в числовые.

* kp: int|null - количество голосов на Кинопоиске
* imdb: int|null - количество голосов на IMDB
* tmdb: int|null - количество голосов на TMDB
* filmCritics: int|null - количество голосов кинокритиков
* russianFilmCritics: int|null - количество голосов российских кинокритиков
* await: int|null - количество голосов ожидания

**Параметры:**

* \`$data\` (array): Массив данных о голосах от API, содержащий ключи:

**Возвращает:** \`\\KinopoiskDev\\Models\\Votes\` Новый экземпляр класса Votes с данными из массива

**См. также:**

* \`Votes::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Votes в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с данными о количестве голосов из различных источников

**См. также:**

* \`Votes::fromArray\`: () Для создания объекта из массива

## \`getTotalVotes()\` [#gettotalvotes]

**Описание:** Возвращает общее количество голосов со всех платформ
Суммирует количество голосов из всех доступных источников,
включая Кинопоиск, IMDB, TMDB, голоса кинокритиков и ожидания.
Игнорирует отсутствующие (null) значения при подсчете.

**Возвращает:** \`int\` Общее количество голосов со всех платформ

**См. также:**

* \`Votes::getAvailableVotes\`: () Для получения голосов в виде ассоциативного массива
* \`Votes::getMostVotedPlatform\`: () Для определения платформы с наибольшим количеством голосов

## \`getMostVotedPlatform()\` [#getmostvotedplatform]

**Описание:** Возвращает платформу с наибольшим количеством голосов
Определяет, какая из платформ (Кинопоиск, IMDB, TMDB и т.д.) имеет
наибольшее количество голосов. Используется для определения наиболее
популярного источника оценок для данного фильма или сериала.

**Возвращает:** \`string|null\` Ключ платформы с наибольшим количеством голосов или null, если голоса отсутствуют

**См. также:**

* \`Votes::getAvailableVotes\`: () Для получения всех доступных голосов
* \`Votes::getTotalVotes\`: () Для получения общего количества голосов

## \`getAvailableVotes()\` [#getavailablevotes]

**Описание:** Возвращает все доступные голоса в виде ассоциативного массива
Собирает все ненулевые значения голосов в ассоциативный массив, где ключи
соответствуют источникам голосов, а значения - количеству голосов.
Используется для получения полного набора голосов в удобном формате.

**Возвращает:** \`array\` Ассоциативный массив доступных голосов

**См. также:**

* \`Votes::hasAnyVotes\`: () Для проверки наличия хотя бы одного голоса
* \`Votes::getTotalVotes\`: () Для получения общего количества голосов

## \`hasAnyVotes()\` [#hasanyvotes]

**Описание:** Проверяет наличие хотя бы одного голоса
Определяет, существует ли хотя бы один голос из любого источника.
Учитывает все возможные источники голосов, включая голоса ожидания и критиков.

**Возвращает:** \`bool true,\` если существует хотя бы один голос, иначе false

**См. также:**

* \`Votes::getAvailableVotes\`: () Для получения всех доступных голосов

## \`getFormattedKpVotes()\` [#getformattedkpvotes]

**Описание:** Возвращает отформатированное количество голосов Кинопоиска
Предоставляет количество голосов с Кинопоиска в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.

**Возвращает:** \`string|null\` Отформатированное количество голосов или null, если голоса отсутствуют

**См. также:**

* \`Votes::formatVoteCount\`: () Для форматирования количества голосов
* \`Votes::getFormattedImdbVotes\`: () Для получения отформатированных голосов IMDB

## \`formatVoteCount()\` [#formatvotecount]

**Описание:** Форматирует количество голосов с суффиксами K/M
Преобразует числовое значение количества голосов в удобочитаемый формат
с использованием суффиксов K (тысячи) и M (миллионы). Например, 1500 будет
отображаться как "1.5K", а 2000000 как "2.0M".

**Параметры:**

* \`$count\` (int): Количество голосов для форматирования

**Возвращает:** \`string\` Отформатированное строковое представление количества голосов

**См. также:**

* \`Votes::getFormattedKpVotes\`: () Для получения отформатированных голосов Кинопоиска
* \`Votes::getFormattedImdbVotes\`: () Для получения отформатированных голосов IMDB

## \`getFormattedImdbVotes()\` [#getformattedimdbvotes]

**Описание:** Возвращает отформатированное количество голосов IMDB
Предоставляет количество голосов с IMDB в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.

**Возвращает:** \`string|null\` Отформатированное количество голосов или null, если голоса отсутствуют

**См. также:**

* \`Votes::formatVoteCount\`: () Для форматирования количества голосов
* \`Votes::getFormattedKpVotes\`: () Для получения отформатированных голосов Кинопоиска

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления количества голосов из различных источников
Содержит информацию о количестве голосов для фильма/сериала из различных
источников, включая Кинопоиск, IMDB, TMDB, а также голоса кинокритиков
и ожидания зрителей. Используется для анализа популярности произведения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie::getVotes`: () Для получения голосов фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Rating`: Для информации о рейтингах"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта голосов
Создает новый экземпляр класса Votes с количеством голосов из различных источников.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$kp` (int|null): Количество голосов на Кинопоиске"},{heading:`__construct`,content:"`$imdb` (int|null): Количество голосов на IMDB"},{heading:`__construct`,content:"`$tmdb` (int|null): Количество голосов на The Movie Database"},{heading:`__construct`,content:"`$filmCritics` (int|null): Количество голосов кинокритиков"},{heading:`__construct`,content:"`$russianFilmCritics` (int|null): Количество голосов российских кинокритиков"},{heading:`__construct`,content:"`$await` (int|null): Количество голосов ожидания"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Votes::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Votes::toArray`: () Для преобразования объекта в массив"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление голосов
Реализует магический метод \\_\\_toString для преобразования объекта
в строку. Формирует строку, содержащую основные голоса в удобочитаемом
формате, разделенные запятыми.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление голосов или 'No votes', если голоса отсутствуют"},{heading:`__tostring`,content:`**См. также:**`},{heading:`__tostring`,content:"`Votes::formatVoteCount`: () Для форматирования количества голосов"},{heading:`__tostring`,content:"`Votes::getFormattedKpVotes`: () Для получения отформатированных голосов Кинопоиска"},{heading:`__tostring`,content:"`Votes::getFormattedImdbVotes`: () Для получения отформатированных голосов IMDB"},{heading:`fromarray`,content:`**Описание:** Создает объект Votes из массива данных API
Фабричный метод для создания экземпляра класса Votes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует строковые значения в числовые.`},{heading:`fromarray`,content:`kp: int|null - количество голосов на Кинопоиске`},{heading:`fromarray`,content:`imdb: int|null - количество голосов на IMDB`},{heading:`fromarray`,content:`tmdb: int|null - количество голосов на TMDB`},{heading:`fromarray`,content:`filmCritics: int|null - количество голосов кинокритиков`},{heading:`fromarray`,content:`russianFilmCritics: int|null - количество голосов российских кинокритиков`},{heading:`fromarray`,content:`await: int|null - количество голосов ожидания`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о голосах от API, содержащий ключи:"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Votes` Новый экземпляр класса Votes с данными из массива"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Votes::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Votes в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с данными о количестве голосов из различных источников"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Votes::fromArray`: () Для создания объекта из массива"},{heading:`gettotalvotes`,content:`**Описание:** Возвращает общее количество голосов со всех платформ
Суммирует количество голосов из всех доступных источников,
включая Кинопоиск, IMDB, TMDB, голоса кинокритиков и ожидания.
Игнорирует отсутствующие (null) значения при подсчете.`},{heading:`gettotalvotes`,content:"**Возвращает:** `int` Общее количество голосов со всех платформ"},{heading:`gettotalvotes`,content:`**См. также:**`},{heading:`gettotalvotes`,content:"`Votes::getAvailableVotes`: () Для получения голосов в виде ассоциативного массива"},{heading:`gettotalvotes`,content:"`Votes::getMostVotedPlatform`: () Для определения платформы с наибольшим количеством голосов"},{heading:`getmostvotedplatform`,content:`**Описание:** Возвращает платформу с наибольшим количеством голосов
Определяет, какая из платформ (Кинопоиск, IMDB, TMDB и т.д.) имеет
наибольшее количество голосов. Используется для определения наиболее
популярного источника оценок для данного фильма или сериала.`},{heading:`getmostvotedplatform`,content:"**Возвращает:** `string|null` Ключ платформы с наибольшим количеством голосов или null, если голоса отсутствуют"},{heading:`getmostvotedplatform`,content:`**См. также:**`},{heading:`getmostvotedplatform`,content:"`Votes::getAvailableVotes`: () Для получения всех доступных голосов"},{heading:`getmostvotedplatform`,content:"`Votes::getTotalVotes`: () Для получения общего количества голосов"},{heading:`getavailablevotes`,content:`**Описание:** Возвращает все доступные голоса в виде ассоциативного массива
Собирает все ненулевые значения голосов в ассоциативный массив, где ключи
соответствуют источникам голосов, а значения - количеству голосов.
Используется для получения полного набора голосов в удобном формате.`},{heading:`getavailablevotes`,content:"**Возвращает:** `array` Ассоциативный массив доступных голосов"},{heading:`getavailablevotes`,content:`**См. также:**`},{heading:`getavailablevotes`,content:"`Votes::hasAnyVotes`: () Для проверки наличия хотя бы одного голоса"},{heading:`getavailablevotes`,content:"`Votes::getTotalVotes`: () Для получения общего количества голосов"},{heading:`hasanyvotes`,content:`**Описание:** Проверяет наличие хотя бы одного голоса
Определяет, существует ли хотя бы один голос из любого источника.
Учитывает все возможные источники голосов, включая голоса ожидания и критиков.`},{heading:`hasanyvotes`,content:"**Возвращает:** `bool true,` если существует хотя бы один голос, иначе false"},{heading:`hasanyvotes`,content:`**См. также:**`},{heading:`hasanyvotes`,content:"`Votes::getAvailableVotes`: () Для получения всех доступных голосов"},{heading:`getformattedkpvotes`,content:`**Описание:** Возвращает отформатированное количество голосов Кинопоиска
Предоставляет количество голосов с Кинопоиска в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.`},{heading:`getformattedkpvotes`,content:"**Возвращает:** `string|null` Отформатированное количество голосов или null, если голоса отсутствуют"},{heading:`getformattedkpvotes`,content:`**См. также:**`},{heading:`getformattedkpvotes`,content:"`Votes::formatVoteCount`: () Для форматирования количества голосов"},{heading:`getformattedkpvotes`,content:"`Votes::getFormattedImdbVotes`: () Для получения отформатированных голосов IMDB"},{heading:`formatvotecount`,content:`**Описание:** Форматирует количество голосов с суффиксами K/M
Преобразует числовое значение количества голосов в удобочитаемый формат
с использованием суффиксов K (тысячи) и M (миллионы). Например, 1500 будет
отображаться как "1.5K", а 2000000 как "2.0M".`},{heading:`formatvotecount`,content:`**Параметры:**`},{heading:`formatvotecount`,content:"`$count` (int): Количество голосов для форматирования"},{heading:`formatvotecount`,content:"**Возвращает:** `string` Отформатированное строковое представление количества голосов"},{heading:`formatvotecount`,content:`**См. также:**`},{heading:`formatvotecount`,content:"`Votes::getFormattedKpVotes`: () Для получения отформатированных голосов Кинопоиска"},{heading:`formatvotecount`,content:"`Votes::getFormattedImdbVotes`: () Для получения отформатированных голосов IMDB"},{heading:`getformattedimdbvotes`,content:`**Описание:** Возвращает отформатированное количество голосов IMDB
Предоставляет количество голосов с IMDB в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.`},{heading:`getformattedimdbvotes`,content:"**Возвращает:** `string|null` Отформатированное количество голосов или null, если голоса отсутствуют"},{heading:`getformattedimdbvotes`,content:`**См. также:**`},{heading:`getformattedimdbvotes`,content:"`Votes::formatVoteCount`: () Для форматирования количества голосов"},{heading:`getformattedimdbvotes`,content:"`Votes::getFormattedKpVotes`: () Для получения отформатированных голосов Кинопоиска"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`gettotalvotes`,content:"`getTotalVotes()`"},{id:`getmostvotedplatform`,content:"`getMostVotedPlatform()`"},{id:`getavailablevotes`,content:"`getAvailableVotes()`"},{id:`hasanyvotes`,content:"`hasAnyVotes()`"},{id:`getformattedkpvotes`,content:"`getFormattedKpVotes()`"},{id:`formatvotecount`,content:"`formatVoteCount()`"},{id:`getformattedimdbvotes`,content:"`getFormattedImdbVotes()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#gettotalvotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getTotalVotes()`})})},{depth:2,url:`#getmostvotedplatform`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMostVotedPlatform()`})})},{depth:2,url:`#getavailablevotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAvailableVotes()`})})},{depth:2,url:`#hasanyvotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasAnyVotes()`})})},{depth:2,url:`#getformattedkpvotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFormattedKpVotes()`})})},{depth:2,url:`#formatvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`formatVoteCount()`})})},{depth:2,url:`#getformattedimdbvotes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFormattedImdbVotes()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления количества голосов из различных источников
Содержит информацию о количестве голосов для фильма/сериала из различных
источников, включая Кинопоиск, IMDB, TMDB, а также голоса кинокритиков
и ожидания зрителей. Используется для анализа популярности произведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie::getVotes`}),`: () Для получения голосов фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Rating`}),`: Для информации о рейтингах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта голосов
Создает новый экземпляр класса Votes с количеством голосов из различных источников.
Все параметры являются опциональными и могут быть NULL при отсутствии
соответствующей информации в источнике данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$kp`}),` (int|null): Количество голосов на Кинопоиске`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$imdb`}),` (int|null): Количество голосов на IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$tmdb`}),` (int|null): Количество голосов на The Movie Database`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filmCritics`}),` (int|null): Количество голосов кинокритиков`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$russianFilmCritics`}),` (int|null): Количество голосов российских кинокритиков`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$await`}),` (int|null): Количество голосов ожидания`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::toArray`}),`: () Для преобразования объекта в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление голосов
Реализует магический метод __toString для преобразования объекта
в строку. Формирует строку, содержащую основные голоса в удобочитаемом
формате, разделенные запятыми.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление голосов или 'No votes', если голоса отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::formatVoteCount`}),`: () Для форматирования количества голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedKpVotes`}),`: () Для получения отформатированных голосов Кинопоиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedImdbVotes`}),`: () Для получения отформатированных голосов IMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Votes из массива данных API
Фабричный метод для создания экземпляра класса Votes из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует строковые значения в числовые.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`kp: int|null - количество голосов на Кинопоиске`}),`
`,(0,n.jsx)(t.li,{children:`imdb: int|null - количество голосов на IMDB`}),`
`,(0,n.jsx)(t.li,{children:`tmdb: int|null - количество голосов на TMDB`}),`
`,(0,n.jsx)(t.li,{children:`filmCritics: int|null - количество голосов кинокритиков`}),`
`,(0,n.jsx)(t.li,{children:`russianFilmCritics: int|null - количество голосов российских кинокритиков`}),`
`,(0,n.jsx)(t.li,{children:`await: int|null - количество голосов ожидания`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о голосах от API, содержащий ключи:`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Votes`}),` Новый экземпляр класса Votes с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Votes в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с данными о количестве голосов из различных источников`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`gettotalvotes`,children:(0,n.jsx)(t.code,{children:`getTotalVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает общее количество голосов со всех платформ
Суммирует количество голосов из всех доступных источников,
включая Кинопоиск, IMDB, TMDB, голоса кинокритиков и ожидания.
Игнорирует отсутствующие (null) значения при подсчете.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Общее количество голосов со всех платформ`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getAvailableVotes`}),`: () Для получения голосов в виде ассоциативного массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getMostVotedPlatform`}),`: () Для определения платформы с наибольшим количеством голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getmostvotedplatform`,children:(0,n.jsx)(t.code,{children:`getMostVotedPlatform()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает платформу с наибольшим количеством голосов
Определяет, какая из платформ (Кинопоиск, IMDB, TMDB и т.д.) имеет
наибольшее количество голосов. Используется для определения наиболее
популярного источника оценок для данного фильма или сериала.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Ключ платформы с наибольшим количеством голосов или null, если голоса отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getAvailableVotes`}),`: () Для получения всех доступных голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getTotalVotes`}),`: () Для получения общего количества голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getavailablevotes`,children:(0,n.jsx)(t.code,{children:`getAvailableVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все доступные голоса в виде ассоциативного массива
Собирает все ненулевые значения голосов в ассоциативный массив, где ключи
соответствуют источникам голосов, а значения - количеству голосов.
Используется для получения полного набора голосов в удобном формате.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив доступных голосов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::hasAnyVotes`}),`: () Для проверки наличия хотя бы одного голоса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getTotalVotes`}),`: () Для получения общего количества голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hasanyvotes`,children:(0,n.jsx)(t.code,{children:`hasAnyVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие хотя бы одного голоса
Определяет, существует ли хотя бы один голос из любого источника.
Учитывает все возможные источники голосов, включая голоса ожидания и критиков.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если существует хотя бы один голос, иначе false`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getAvailableVotes`}),`: () Для получения всех доступных голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getformattedkpvotes`,children:(0,n.jsx)(t.code,{children:`getFormattedKpVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает отформатированное количество голосов Кинопоиска
Предоставляет количество голосов с Кинопоиска в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Отформатированное количество голосов или null, если голоса отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::formatVoteCount`}),`: () Для форматирования количества голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedImdbVotes`}),`: () Для получения отформатированных голосов IMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`formatvotecount`,children:(0,n.jsx)(t.code,{children:`formatVoteCount()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Форматирует количество голосов с суффиксами K/M
Преобразует числовое значение количества голосов в удобочитаемый формат
с использованием суффиксов K (тысячи) и M (миллионы). Например, 1500 будет
отображаться как "1.5K", а 2000000 как "2.0M".`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$count`}),` (int): Количество голосов для форматирования`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Отформатированное строковое представление количества голосов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedKpVotes`}),`: () Для получения отформатированных голосов Кинопоиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedImdbVotes`}),`: () Для получения отформатированных голосов IMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getformattedimdbvotes`,children:(0,n.jsx)(t.code,{children:`getFormattedImdbVotes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает отформатированное количество голосов IMDB
Предоставляет количество голосов с IMDB в удобочитаемом формате
с использованием суффиксов K/M. Возвращает null, если голоса отсутствуют.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Отформатированное количество голосов или null, если голоса отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::formatVoteCount`}),`: () Для форматирования количества голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Votes::getFormattedKpVotes`}),`: () Для получения отформатированных голосов Кинопоиска`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};