import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Rating`},i=new Date(1785400635e3),a=`

**Описание:** Класс для представления рейтингов фильма из различных источников
Содержит рейтинги фильма/сериала из различных источников, включая
Кинопоиск, IMDB, TMDB, а также оценки кинокритиков и ожидания зрителей.
Используется для отображения и анализа популярности и качества произведения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\Movie::getRating\`: () Для получения рейтинга фильма
* \`\\KinopoiskDev\\Models\\Votes\`: Для информации о количестве голосов

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели рейтинга
Создает новый экземпляр класса Rating с указанными параметрами рейтингов.
Все параметры являются опциональными и могут быть null при отсутствии данных.

**Параметры:**

* \`$kp\` (float|null): Рейтинг на Кинопоиске (0.0-10.0)
* \`$imdb\` (float|null): Рейтинг на IMDB (0.0-10.0)
* \`$tmdb\` (float|null): Рейтинг на TMDB (0.0-10.0)
* \`$filmCritics\` (float|null): Рейтинг кинокритиков (0.0-100.0)
* \`$russianFilmCritics\` (float|null): Рейтинг российских кинокритиков (0.0-100.0)
* \`$await\` (float|null): Рейтинг ожидания (0.0-100.0)

**См. также:**

* \`Rating::fromArray\`: () Для создания объекта из массива данных API

## \`__toString()\` [#__tostring]

**Описание:** Возвращает строковое представление рейтингов
Реализует магический метод \\_\\_toString для преобразования объекта
в строку. Формирует строку, содержащую основные рейтинги в удобочитаемом
формате, разделенные запятыми.

**Возвращает:** \`string\` Строковое представление рейтингов или 'No ratings', если рейтинги отсутствуют

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Rating из массива данных API
Фабричный метод для создания экземпляра класса Rating из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.

**Возвращает:** \`static\` Новый экземпляр класса Rating

**См. также:**

* \`Rating::toArray\`: () Для обратного преобразования в массив

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Rating в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.

**Возвращает:** \`array<string, mixed>\` Массив с данными рейтингов

**См. также:**

* \`Rating::fromArray\`: () Для создания объекта из массива

## \`getKinopoiskRating()\` [#getkinopoiskrating]

**Описание:** Возвращает рейтинг фильма на Кинопоиске
Предоставляет доступ к рейтингу фильма в системе Кинопоиск.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.

**Возвращает:** \`float|null\` Рейтинг на Кинопоиске или null, если рейтинг отсутствует

**См. также:**

* \`Rating::getImdbRating\`: () Для получения рейтинга IMDB
* \`Rating::getTmdbRating\`: () Для получения рейтинга TMDB

## \`getImdbRating()\` [#getimdbrating]

**Описание:** Возвращает рейтинг фильма на IMDB
Предоставляет доступ к рейтингу фильма в системе Internet Movie Database (IMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.

**Возвращает:** \`float|null\` Рейтинг на IMDB или null, если рейтинг отсутствует

**См. также:**

* \`Rating::getKinopoiskRating\`: () Для получения рейтинга Кинопоиска
* \`Rating::getTmdbRating\`: () Для получения рейтинга TMDB

## \`getTmdbRating()\` [#gettmdbrating]

**Описание:** Возвращает рейтинг фильма на TMDB
Предоставляет доступ к рейтингу фильма в системе The Movie Database (TMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.

**Возвращает:** \`float|null\` Рейтинг на TMDB или null, если рейтинг отсутствует

**См. также:**

* \`Rating::getKinopoiskRating\`: () Для получения рейтинга Кинопоиска
* \`Rating::getImdbRating\`: () Для получения рейтинга IMDB

## \`getFilmCriticsRating()\` [#getfilmcriticsrating]

**Описание:** Возвращает рейтинг фильма от кинокритиков
Предоставляет доступ к рейтингу фильма от международных кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.

**Возвращает:** \`float|null\` Рейтинг кинокритиков или null, если рейтинг отсутствует

**См. также:**

* \`Rating::getRussianFilmCriticsRating\`: () Для получения рейтинга российских кинокритиков

## \`getRussianFilmCriticsRating()\` [#getrussianfilmcriticsrating]

**Описание:** Возвращает рейтинг фильма от российских кинокритиков
Предоставляет доступ к рейтингу фильма от российских кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.

**Возвращает:** \`float|null\` Рейтинг российских кинокритиков или null, если рейтинг отсутствует

**См. также:**

* \`Rating::getFilmCriticsRating\`: () Для получения рейтинга международных кинокритиков

## \`getAwaitRating()\` [#getawaitrating]

**Описание:** Возвращает рейтинг ожидания фильма
Предоставляет доступ к рейтингу ожидания фильма, который отражает
интерес аудитории к еще не вышедшему фильму.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.

**Возвращает:** \`float|null\` Рейтинг ожидания или null, если рейтинг отсутствует

## \`getHighestRating()\` [#gethighestrating]

**Описание:** Возвращает наивысший доступный рейтинг
Анализирует все доступные рейтинги и возвращает наивысший из них.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.

**Возвращает:** \`float|null\` Наивысший рейтинг или null, если все рейтинги отсутствуют

**См. также:**

* \`Rating::getAverageRating\`: () Для получения среднего рейтинга

## \`getAverageRating()\` [#getaveragerating]

**Описание:** Возвращает средний рейтинг из всех доступных
Вычисляет среднее арифметическое всех доступных рейтингов.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.

**Возвращает:** \`float|null\` Средний рейтинг или null, если все рейтинги отсутствуют

**См. также:**

* \`Rating::getHighestRating\`: () Для получения наивысшего рейтинга

## \`hasAnyRating()\` [#hasanyrating]

**Описание:** Проверяет наличие хотя бы одного рейтинга
Определяет, существует ли хотя бы один рейтинг из любого источника.
Учитывает все возможные рейтинги, включая рейтинги ожидания и критиков.

**Возвращает:** \`bool true,\` если существует хотя бы один рейтинг, иначе false

**См. также:**

* \`Rating::getAvailableRatings\`: () Для получения всех доступных рейтингов

## \`getAvailableRatings()\` [#getavailableratings]

**Описание:** Возвращает все доступные рейтинги в виде ассоциативного массива
Собирает все ненулевые рейтинги в ассоциативный массив, где ключи
соответствуют источникам рейтингов, а значения - самим рейтингам.
Используется для получения полного набора рейтингов в удобном формате.

**Возвращает:** \`array<string, mixed>\` Ассоциативный массив доступных рейтингов

**См. также:**

* \`Rating::hasAnyRating\`: () Для проверки наличия хотя бы одного рейтинга

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели
Проверяет корректность рейтингов.
Все рейтинги должны быть в допустимых диапазонах.

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления рейтингов фильма из различных источников
Содержит рейтинги фильма/сериала из различных источников, включая
Кинопоиск, IMDB, TMDB, а также оценки кинокритиков и ожидания зрителей.
Используется для отображения и анализа популярности и качества произведения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Movie::getRating`: () Для получения рейтинга фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Votes`: Для информации о количестве голосов"},{heading:`__construct`,content:`**Описание:** Конструктор модели рейтинга
Создает новый экземпляр класса Rating с указанными параметрами рейтингов.
Все параметры являются опциональными и могут быть null при отсутствии данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$kp` (float|null): Рейтинг на Кинопоиске (0.0-10.0)"},{heading:`__construct`,content:"`$imdb` (float|null): Рейтинг на IMDB (0.0-10.0)"},{heading:`__construct`,content:"`$tmdb` (float|null): Рейтинг на TMDB (0.0-10.0)"},{heading:`__construct`,content:"`$filmCritics` (float|null): Рейтинг кинокритиков (0.0-100.0)"},{heading:`__construct`,content:"`$russianFilmCritics` (float|null): Рейтинг российских кинокритиков (0.0-100.0)"},{heading:`__construct`,content:"`$await` (float|null): Рейтинг ожидания (0.0-100.0)"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Rating::fromArray`: () Для создания объекта из массива данных API"},{heading:`__tostring`,content:`**Описание:** Возвращает строковое представление рейтингов
Реализует магический метод \\_\\_toString для преобразования объекта
в строку. Формирует строку, содержащую основные рейтинги в удобочитаемом
формате, разделенные запятыми.`},{heading:`__tostring`,content:"**Возвращает:** `string` Строковое представление рейтингов или 'No ratings', если рейтинги отсутствуют"},{heading:`fromarray`,content:`**Описание:** Создает объект Rating из массива данных API
Фабричный метод для создания экземпляра класса Rating из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса Rating"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Rating::toArray`: () Для обратного преобразования в массив"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Rating в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив с данными рейтингов"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Rating::fromArray`: () Для создания объекта из массива"},{heading:`getkinopoiskrating`,content:`**Описание:** Возвращает рейтинг фильма на Кинопоиске
Предоставляет доступ к рейтингу фильма в системе Кинопоиск.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`},{heading:`getkinopoiskrating`,content:"**Возвращает:** `float|null` Рейтинг на Кинопоиске или null, если рейтинг отсутствует"},{heading:`getkinopoiskrating`,content:`**См. также:**`},{heading:`getkinopoiskrating`,content:"`Rating::getImdbRating`: () Для получения рейтинга IMDB"},{heading:`getkinopoiskrating`,content:"`Rating::getTmdbRating`: () Для получения рейтинга TMDB"},{heading:`getimdbrating`,content:`**Описание:** Возвращает рейтинг фильма на IMDB
Предоставляет доступ к рейтингу фильма в системе Internet Movie Database (IMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`},{heading:`getimdbrating`,content:"**Возвращает:** `float|null` Рейтинг на IMDB или null, если рейтинг отсутствует"},{heading:`getimdbrating`,content:`**См. также:**`},{heading:`getimdbrating`,content:"`Rating::getKinopoiskRating`: () Для получения рейтинга Кинопоиска"},{heading:`getimdbrating`,content:"`Rating::getTmdbRating`: () Для получения рейтинга TMDB"},{heading:`gettmdbrating`,content:`**Описание:** Возвращает рейтинг фильма на TMDB
Предоставляет доступ к рейтингу фильма в системе The Movie Database (TMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`},{heading:`gettmdbrating`,content:"**Возвращает:** `float|null` Рейтинг на TMDB или null, если рейтинг отсутствует"},{heading:`gettmdbrating`,content:`**См. также:**`},{heading:`gettmdbrating`,content:"`Rating::getKinopoiskRating`: () Для получения рейтинга Кинопоиска"},{heading:`gettmdbrating`,content:"`Rating::getImdbRating`: () Для получения рейтинга IMDB"},{heading:`getfilmcriticsrating`,content:`**Описание:** Возвращает рейтинг фильма от кинокритиков
Предоставляет доступ к рейтингу фильма от международных кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`},{heading:`getfilmcriticsrating`,content:"**Возвращает:** `float|null` Рейтинг кинокритиков или null, если рейтинг отсутствует"},{heading:`getfilmcriticsrating`,content:`**См. также:**`},{heading:`getfilmcriticsrating`,content:"`Rating::getRussianFilmCriticsRating`: () Для получения рейтинга российских кинокритиков"},{heading:`getrussianfilmcriticsrating`,content:`**Описание:** Возвращает рейтинг фильма от российских кинокритиков
Предоставляет доступ к рейтингу фильма от российских кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`},{heading:`getrussianfilmcriticsrating`,content:"**Возвращает:** `float|null` Рейтинг российских кинокритиков или null, если рейтинг отсутствует"},{heading:`getrussianfilmcriticsrating`,content:`**См. также:**`},{heading:`getrussianfilmcriticsrating`,content:"`Rating::getFilmCriticsRating`: () Для получения рейтинга международных кинокритиков"},{heading:`getawaitrating`,content:`**Описание:** Возвращает рейтинг ожидания фильма
Предоставляет доступ к рейтингу ожидания фильма, который отражает
интерес аудитории к еще не вышедшему фильму.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`},{heading:`getawaitrating`,content:"**Возвращает:** `float|null` Рейтинг ожидания или null, если рейтинг отсутствует"},{heading:`gethighestrating`,content:`**Описание:** Возвращает наивысший доступный рейтинг
Анализирует все доступные рейтинги и возвращает наивысший из них.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.`},{heading:`gethighestrating`,content:"**Возвращает:** `float|null` Наивысший рейтинг или null, если все рейтинги отсутствуют"},{heading:`gethighestrating`,content:`**См. также:**`},{heading:`gethighestrating`,content:"`Rating::getAverageRating`: () Для получения среднего рейтинга"},{heading:`getaveragerating`,content:`**Описание:** Возвращает средний рейтинг из всех доступных
Вычисляет среднее арифметическое всех доступных рейтингов.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.`},{heading:`getaveragerating`,content:"**Возвращает:** `float|null` Средний рейтинг или null, если все рейтинги отсутствуют"},{heading:`getaveragerating`,content:`**См. также:**`},{heading:`getaveragerating`,content:"`Rating::getHighestRating`: () Для получения наивысшего рейтинга"},{heading:`hasanyrating`,content:`**Описание:** Проверяет наличие хотя бы одного рейтинга
Определяет, существует ли хотя бы один рейтинг из любого источника.
Учитывает все возможные рейтинги, включая рейтинги ожидания и критиков.`},{heading:`hasanyrating`,content:"**Возвращает:** `bool true,` если существует хотя бы один рейтинг, иначе false"},{heading:`hasanyrating`,content:`**См. также:**`},{heading:`hasanyrating`,content:"`Rating::getAvailableRatings`: () Для получения всех доступных рейтингов"},{heading:`getavailableratings`,content:`**Описание:** Возвращает все доступные рейтинги в виде ассоциативного массива
Собирает все ненулевые рейтинги в ассоциативный массив, где ключи
соответствуют источникам рейтингов, а значения - самим рейтингам.
Используется для получения полного набора рейтингов в удобном формате.`},{heading:`getavailableratings`,content:"**Возвращает:** `array<string, mixed>` Ассоциативный массив доступных рейтингов"},{heading:`getavailableratings`,content:`**См. также:**`},{heading:`getavailableratings`,content:"`Rating::hasAnyRating`: () Для проверки наличия хотя бы одного рейтинга"},{heading:`validate`,content:`**Описание:** Валидирует данные модели
Проверяет корректность рейтингов.
Все рейтинги должны быть в допустимых диапазонах.`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`getkinopoiskrating`,content:"`getKinopoiskRating()`"},{id:`getimdbrating`,content:"`getImdbRating()`"},{id:`gettmdbrating`,content:"`getTmdbRating()`"},{id:`getfilmcriticsrating`,content:"`getFilmCriticsRating()`"},{id:`getrussianfilmcriticsrating`,content:"`getRussianFilmCriticsRating()`"},{id:`getawaitrating`,content:"`getAwaitRating()`"},{id:`gethighestrating`,content:"`getHighestRating()`"},{id:`getaveragerating`,content:"`getAverageRating()`"},{id:`hasanyrating`,content:"`hasAnyRating()`"},{id:`getavailableratings`,content:"`getAvailableRatings()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getkinopoiskrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKinopoiskRating()`})})},{depth:2,url:`#getimdbrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImdbRating()`})})},{depth:2,url:`#gettmdbrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getTmdbRating()`})})},{depth:2,url:`#getfilmcriticsrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFilmCriticsRating()`})})},{depth:2,url:`#getrussianfilmcriticsrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRussianFilmCriticsRating()`})})},{depth:2,url:`#getawaitrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAwaitRating()`})})},{depth:2,url:`#gethighestrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getHighestRating()`})})},{depth:2,url:`#getaveragerating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAverageRating()`})})},{depth:2,url:`#hasanyrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasAnyRating()`})})},{depth:2,url:`#getavailableratings`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAvailableRatings()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления рейтингов фильма из различных источников
Содержит рейтинги фильма/сериала из различных источников, включая
Кинопоиск, IMDB, TMDB, а также оценки кинокритиков и ожидания зрителей.
Используется для отображения и анализа популярности и качества произведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Movie::getRating`}),`: () Для получения рейтинга фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Votes`}),`: Для информации о количестве голосов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели рейтинга
Создает новый экземпляр класса Rating с указанными параметрами рейтингов.
Все параметры являются опциональными и могут быть null при отсутствии данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$kp`}),` (float|null): Рейтинг на Кинопоиске (0.0-10.0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$imdb`}),` (float|null): Рейтинг на IMDB (0.0-10.0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$tmdb`}),` (float|null): Рейтинг на TMDB (0.0-10.0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filmCritics`}),` (float|null): Рейтинг кинокритиков (0.0-100.0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$russianFilmCritics`}),` (float|null): Рейтинг российских кинокритиков (0.0-100.0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$await`}),` (float|null): Рейтинг ожидания (0.0-100.0)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает строковое представление рейтингов
Реализует магический метод __toString для преобразования объекта
в строку. Формирует строку, содержащую основные рейтинги в удобочитаемом
формате, разделенные запятыми.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое представление рейтингов или 'No ratings', если рейтинги отсутствуют`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Rating из массива данных API
Фабричный метод для создания экземпляра класса Rating из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса Rating`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Rating в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив с данными рейтингов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getkinopoiskrating`,children:(0,n.jsx)(t.code,{children:`getKinopoiskRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма на Кинопоиске
Предоставляет доступ к рейтингу фильма в системе Кинопоиск.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг на Кинопоиске или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getImdbRating`}),`: () Для получения рейтинга IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getTmdbRating`}),`: () Для получения рейтинга TMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getimdbrating`,children:(0,n.jsx)(t.code,{children:`getImdbRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма на IMDB
Предоставляет доступ к рейтингу фильма в системе Internet Movie Database (IMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг на IMDB или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getKinopoiskRating`}),`: () Для получения рейтинга Кинопоиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getTmdbRating`}),`: () Для получения рейтинга TMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`gettmdbrating`,children:(0,n.jsx)(t.code,{children:`getTmdbRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма на TMDB
Предоставляет доступ к рейтингу фильма в системе The Movie Database (TMDB).
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 10.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг на TMDB или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getKinopoiskRating`}),`: () Для получения рейтинга Кинопоиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getImdbRating`}),`: () Для получения рейтинга IMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getfilmcriticsrating`,children:(0,n.jsx)(t.code,{children:`getFilmCriticsRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма от кинокритиков
Предоставляет доступ к рейтингу фильма от международных кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг кинокритиков или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getRussianFilmCriticsRating`}),`: () Для получения рейтинга российских кинокритиков`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getrussianfilmcriticsrating`,children:(0,n.jsx)(t.code,{children:`getRussianFilmCriticsRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма от российских кинокритиков
Предоставляет доступ к рейтингу фильма от российских кинокритиков.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг российских кинокритиков или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getFilmCriticsRating`}),`: () Для получения рейтинга международных кинокритиков`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getawaitrating`,children:(0,n.jsx)(t.code,{children:`getAwaitRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг ожидания фильма
Предоставляет доступ к рейтингу ожидания фильма, который отражает
интерес аудитории к еще не вышедшему фильму.
Рейтинг представлен в виде числа с плавающей точкой в диапазоне от 0.0 до 100.0.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг ожидания или null, если рейтинг отсутствует`]}),`
`,(0,n.jsx)(t.h2,{id:`gethighestrating`,children:(0,n.jsx)(t.code,{children:`getHighestRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наивысший доступный рейтинг
Анализирует все доступные рейтинги и возвращает наивысший из них.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Наивысший рейтинг или null, если все рейтинги отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getAverageRating`}),`: () Для получения среднего рейтинга`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getaveragerating`,children:(0,n.jsx)(t.code,{children:`getAverageRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает средний рейтинг из всех доступных
Вычисляет среднее арифметическое всех доступных рейтингов.
Учитывает только основные рейтинги (Кинопоиск, IMDB, TMDB, кинокритики),
игнорируя рейтинги ожидания и российских кинокритиков.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Средний рейтинг или null, если все рейтинги отсутствуют`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getHighestRating`}),`: () Для получения наивысшего рейтинга`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hasanyrating`,children:(0,n.jsx)(t.code,{children:`hasAnyRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие хотя бы одного рейтинга
Определяет, существует ли хотя бы один рейтинг из любого источника.
Учитывает все возможные рейтинги, включая рейтинги ожидания и критиков.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если существует хотя бы один рейтинг, иначе false`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getAvailableRatings`}),`: () Для получения всех доступных рейтингов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getavailableratings`,children:(0,n.jsx)(t.code,{children:`getAvailableRatings()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все доступные рейтинги в виде ассоциативного массива
Собирает все ненулевые рейтинги в ассоциативный массив, где ключи
соответствуют источникам рейтингов, а значения - самим рейтингам.
Используется для получения полного набора рейтингов в удобном формате.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Ассоциативный массив доступных рейтингов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::hasAnyRating`}),`: () Для проверки наличия хотя бы одного рейтинга`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели
Проверяет корректность рейтингов.
Все рейтинги должны быть в допустимых диапазонах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};