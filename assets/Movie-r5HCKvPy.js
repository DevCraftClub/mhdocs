import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Movie`},i=new Date(1787142659e3),a=`

**Описание:** Класс для представления фильма/сериала из API Kinopoisk.dev
Представляет полную информацию о фильме или сериале, включая базовые данные,
рейтинги, участников, изображения, связанные произведения и другую метаинформацию.
Используется для работы с детальной информацией о произведениях кинематографа.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\SearchMovie\`: Для поисковых результатов фильмов
* \`\\KinopoiskDev\\Models\\LinkedMovie\`: Для связанных фильмов
* \`\\KinopoiskDev\\Models\\ExternalId\`: Для внешних идентификаторов

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта фильма/сериала
Создает новый экземпляр класса Movie с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии данных.

**Параметры:**

* \`$id\` (int|null): Уникальный идентификатор фильма
* \`$externalId\` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB и т.д.)
* \`$name\` (string|null): Название фильма на русском языке
* \`$alternativeName\` (string|null): Альтернативное название
* \`$enName\` (string|null): Название фильма на английском языке
* \`$names\` (array\\<Name>|null): Массив названий на разных языках
* \`$type\` (MovieType|null): Тип фильма (фильм, сериал, мини-сериал)
* \`$typeNumber\` (int|null): Номер типа
* \`$year\` (int|null): Год выпуска
* \`$description\` (string|null): Полное описание фильма
* \`$shortDescription\` (string|null): Краткое описание
* \`$slogan\` (string|null): Слоган фильма
* \`$status\` (MovieStatus|null): Статус фильма
* \`$facts\` (array\\<FactInMovie>|null): Массив фактов о фильме
* \`$movieLength\` (int|null): Длительность фильма в минутах
* \`$ratingMpaa\` (RatingMpaa|null): Рейтинг MPAA
* \`$ageRating\` (int|null): Возрастной рейтинг
* \`$rating\` (Rating|null): Рейтинги фильма
* \`$votes\` (Votes|null): Голоса за фильм
* \`$logo\` (Logo|null): Логотип фильма
* \`$poster\` (ShortImage|null): Постер фильма
* \`$backdrop\` (ShortImage|null): Фоновое изображение
* \`$videos\` (VideoTypes|null): Видео материалы
* \`$genres\` (array\\<ItemName>): Массив жанров
* \`$countries\` (array\\<ItemName>): Массив стран производства
* \`$persons\` (array\\<PersonInMovie>): Массив участников съемочной группы
* \`$reviewInfo\` (ReviewInfo|null): Информация о рецензиях
* \`$budget\` (CurrencyValue|null): Бюджет фильма
* \`$fees\` (Fees|null): Кассовые сборы
* \`$premiere\` (Premiere|null): Информация о премьере
* \`$watchability\` (Watchability|null): Где посмотреть фильм
* \`$releaseYears\` (array\\<int>|null): Годы выпуска
* \`$top10\` (int|null): Позиция в топ-10
* \`$top250\` (int|null): Позиция в топ-250
* \`$isSeries\` (bool): Является ли сериалом
* \`$ticketsOnSale\` (bool|null): Продаются ли билеты
* \`$totalSeriesLength\` (int|null): Общая длительность сериала
* \`$seriesLength\` (int|null): Длительность серии
* \`$audience\` (array\\<Audience>|null): Аудитория фильма
* \`$lists\` (array\\<Lists>): Списки фильмов
* \`$networks\` (Networks|null): Сети вещания
* \`$createdAt\` (string|null): Дата создания записи
* \`$updatedAt\` (string|null): Дата обновления записи

**См. также:**

* \`Movie::fromArray\`: () Для создания объекта из массива данных API

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Movie из массива данных API
Фабричный метод для создания экземпляра класса Movie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.

**Возвращает:** \`static\` Новый экземпляр класса Movie

**См. также:**

* \`Movie::toArray\`: () Для обратного преобразования в массив

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели
Проверяет корректность основных полей объекта Movie.
Проверяет наличие обязательного идентификатора и валидность опциональных полей.

**Возвращает:** \`bool True\` если данные валидны

## \`getKinopoiskRating()\` [#getkinopoiskrating]

**Описание:** Возвращает рейтинг фильма на Кинопоиске
Извлекает рейтинг фильма из системы Кинопоиск. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.

**Возвращает:** \`float|null\` Рейтинг на Кинопоиске (от 0.0 до 10.0) или null, если не установлен

**См. также:**

* \`Movie::getImdbRating\`: () Для получения рейтинга IMDB
* \`Rating::getKp\`: () Для альтернативного способа получения рейтинга

## \`getImdbRating()\` [#getimdbrating]

**Описание:** Возвращает рейтинг фильма на IMDB
Извлекает рейтинг фильма из системы IMDB. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.

**Возвращает:** \`float|null\` Рейтинг на IMDB (от 0.0 до 10.0) или null, если не установлен

**См. также:**

* \`Movie::getKinopoiskRating\`: () Для получения рейтинга Кинопоиска
* \`Rating::getImdb\`: () Для альтернативного способа получения рейтинга

## \`getPosterUrl()\` [#getposterurl]

**Описание:** Возвращает URL постера фильма
Извлекает URL-адрес постера фильма из объекта изображения.
Возвращает null, если постер не установлен или URL отсутствует.

**Возвращает:** \`string|null\` URL-адрес постера или null, если не установлен

**См. также:**

* \`Image::getUrl\`: () Для получения URL из объекта изображения
* \`Movie::getBackdropUrl\`: () Для получения URL фонового изображения

## \`getGenreNames()\` [#getgenrenames]

**Описание:** Возвращает массив названий жанров фильма
Извлекает названия жанров из массива объектов жанров и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у жанра,
возвращается пустая строка.

**Возвращает:** \`array<string>\` Массив строк с названиями жанров

**См. также:**

* \`Movie::getCountryNames\`: () Для получения названий стран
* \`Movie::getGenres\`: () Для получения полной информации о жанрах

## \`getCountryNames()\` [#getcountrynames]

**Описание:** Возвращает массив названий стран производства
Извлекает названия стран из массива объектов стран и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у страны,
возвращается пустая строка.

**Возвращает:** \`array<string>\` Массив строк с названиями стран производства

**См. также:**

* \`Movie::getGenreNames\`: () Для получения названий жанров
* \`Movie::getCountries\`: () Для получения полной информации о странах

## \`getImdbUrl()\` [#getimdburl]

**Описание:** Возвращает URL страницы фильма в системе IMDB
Формирует URL-адрес страницы фильма в системе IMDB на основе
внешних идентификаторов. Возвращает null, если внешние идентификаторы
отсутствуют или идентификатор IMDB не установлен.

**Возвращает:** \`string|null\` URL-адрес страницы фильма в IMDB или null, если не доступен

**См. также:**

* \`ExternalId::getImdbUrl\`: () Для получения URL из внешних идентификаторов
* \`Movie::getTmdbUrl\`: () Для получения URL TMDB

## \`getTmdbUrl()\` [#gettmdburl]

**Описание:** Возвращает URL страницы фильма в системе TMDB
Формирует URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе внешних идентификаторов. Возвращает null, если внешние
идентификаторы отсутствуют или идентификатор TMDB не установлен.

**Возвращает:** \`string|null\` URL-адрес страницы фильма в TMDB или null, если не доступен

**См. также:**

* \`ExternalId::getTmdbUrl\`: () Для получения URL из внешних идентификаторов
* \`Movie::getImdbUrl\`: () Для получения URL IMDB

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Movie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.

**Возвращает:** \`array<string, mixed>\` Массив с данными фильма

**См. также:**

* \`Movie::fromArray\`: () Для создания объекта из массива

## \`getName()\` [#getname]

**Описание:** Возвращает наиболее подходящее название фильма.
Метод последовательно проверяет наличие русского названия (\`name\`),
альтернативного названия (\`alternativeName\`) и английского названия (\`enName\`).
Возвращается первое найденное не-null значение. Если все названия отсутствуют,
возвращается пустая строка.

**С версии:** 1.0.0

**Возвращает:** \`string\` Название фильма или пустая строка, если ни одно из названий не доступно.

**См. также:**

* \`Movie::\`: $name
* \`Movie::\`: $alternativeName
* \`Movie::\`: $enName
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления фильма/сериала из API Kinopoisk.dev
Представляет полную информацию о фильме или сериале, включая базовые данные,
рейтинги, участников, изображения, связанные произведения и другую метаинформацию.
Используется для работы с детальной информацией о произведениях кинематографа.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\SearchMovie`: Для поисковых результатов фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\LinkedMovie`: Для связанных фильмов"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ExternalId`: Для внешних идентификаторов"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта фильма/сериала
Создает новый экземпляр класса Movie с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии данных.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int|null): Уникальный идентификатор фильма"},{heading:`__construct`,content:"`$externalId` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB и т.д.)"},{heading:`__construct`,content:"`$name` (string|null): Название фильма на русском языке"},{heading:`__construct`,content:"`$alternativeName` (string|null): Альтернативное название"},{heading:`__construct`,content:"`$enName` (string|null): Название фильма на английском языке"},{heading:`__construct`,content:"`$names` (array\\<Name>|null): Массив названий на разных языках"},{heading:`__construct`,content:"`$type` (MovieType|null): Тип фильма (фильм, сериал, мини-сериал)"},{heading:`__construct`,content:"`$typeNumber` (int|null): Номер типа"},{heading:`__construct`,content:"`$year` (int|null): Год выпуска"},{heading:`__construct`,content:"`$description` (string|null): Полное описание фильма"},{heading:`__construct`,content:"`$shortDescription` (string|null): Краткое описание"},{heading:`__construct`,content:"`$slogan` (string|null): Слоган фильма"},{heading:`__construct`,content:"`$status` (MovieStatus|null): Статус фильма"},{heading:`__construct`,content:"`$facts` (array\\<FactInMovie>|null): Массив фактов о фильме"},{heading:`__construct`,content:"`$movieLength` (int|null): Длительность фильма в минутах"},{heading:`__construct`,content:"`$ratingMpaa` (RatingMpaa|null): Рейтинг MPAA"},{heading:`__construct`,content:"`$ageRating` (int|null): Возрастной рейтинг"},{heading:`__construct`,content:"`$rating` (Rating|null): Рейтинги фильма"},{heading:`__construct`,content:"`$votes` (Votes|null): Голоса за фильм"},{heading:`__construct`,content:"`$logo` (Logo|null): Логотип фильма"},{heading:`__construct`,content:"`$poster` (ShortImage|null): Постер фильма"},{heading:`__construct`,content:"`$backdrop` (ShortImage|null): Фоновое изображение"},{heading:`__construct`,content:"`$videos` (VideoTypes|null): Видео материалы"},{heading:`__construct`,content:"`$genres` (array\\<ItemName>): Массив жанров"},{heading:`__construct`,content:"`$countries` (array\\<ItemName>): Массив стран производства"},{heading:`__construct`,content:"`$persons` (array\\<PersonInMovie>): Массив участников съемочной группы"},{heading:`__construct`,content:"`$reviewInfo` (ReviewInfo|null): Информация о рецензиях"},{heading:`__construct`,content:"`$budget` (CurrencyValue|null): Бюджет фильма"},{heading:`__construct`,content:"`$fees` (Fees|null): Кассовые сборы"},{heading:`__construct`,content:"`$premiere` (Premiere|null): Информация о премьере"},{heading:`__construct`,content:"`$watchability` (Watchability|null): Где посмотреть фильм"},{heading:`__construct`,content:"`$releaseYears` (array\\<int>|null): Годы выпуска"},{heading:`__construct`,content:"`$top10` (int|null): Позиция в топ-10"},{heading:`__construct`,content:"`$top250` (int|null): Позиция в топ-250"},{heading:`__construct`,content:"`$isSeries` (bool): Является ли сериалом"},{heading:`__construct`,content:"`$ticketsOnSale` (bool|null): Продаются ли билеты"},{heading:`__construct`,content:"`$totalSeriesLength` (int|null): Общая длительность сериала"},{heading:`__construct`,content:"`$seriesLength` (int|null): Длительность серии"},{heading:`__construct`,content:"`$audience` (array\\<Audience>|null): Аудитория фильма"},{heading:`__construct`,content:"`$lists` (array\\<Lists>): Списки фильмов"},{heading:`__construct`,content:"`$networks` (Networks|null): Сети вещания"},{heading:`__construct`,content:"`$createdAt` (string|null): Дата создания записи"},{heading:`__construct`,content:"`$updatedAt` (string|null): Дата обновления записи"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Movie::fromArray`: () Для создания объекта из массива данных API"},{heading:`fromarray`,content:`**Описание:** Создает объект Movie из массива данных API
Фабричный метод для создания экземпляра класса Movie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса Movie"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Movie::toArray`: () Для обратного преобразования в массив"},{heading:`validate`,content:`**Описание:** Валидирует данные модели
Проверяет корректность основных полей объекта Movie.
Проверяет наличие обязательного идентификатора и валидность опциональных полей.`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`getkinopoiskrating`,content:`**Описание:** Возвращает рейтинг фильма на Кинопоиске
Извлекает рейтинг фильма из системы Кинопоиск. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.`},{heading:`getkinopoiskrating`,content:"**Возвращает:** `float|null` Рейтинг на Кинопоиске (от 0.0 до 10.0) или null, если не установлен"},{heading:`getkinopoiskrating`,content:`**См. также:**`},{heading:`getkinopoiskrating`,content:"`Movie::getImdbRating`: () Для получения рейтинга IMDB"},{heading:`getkinopoiskrating`,content:"`Rating::getKp`: () Для альтернативного способа получения рейтинга"},{heading:`getimdbrating`,content:`**Описание:** Возвращает рейтинг фильма на IMDB
Извлекает рейтинг фильма из системы IMDB. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.`},{heading:`getimdbrating`,content:"**Возвращает:** `float|null` Рейтинг на IMDB (от 0.0 до 10.0) или null, если не установлен"},{heading:`getimdbrating`,content:`**См. также:**`},{heading:`getimdbrating`,content:"`Movie::getKinopoiskRating`: () Для получения рейтинга Кинопоиска"},{heading:`getimdbrating`,content:"`Rating::getImdb`: () Для альтернативного способа получения рейтинга"},{heading:`getposterurl`,content:`**Описание:** Возвращает URL постера фильма
Извлекает URL-адрес постера фильма из объекта изображения.
Возвращает null, если постер не установлен или URL отсутствует.`},{heading:`getposterurl`,content:"**Возвращает:** `string|null` URL-адрес постера или null, если не установлен"},{heading:`getposterurl`,content:`**См. также:**`},{heading:`getposterurl`,content:"`Image::getUrl`: () Для получения URL из объекта изображения"},{heading:`getposterurl`,content:"`Movie::getBackdropUrl`: () Для получения URL фонового изображения"},{heading:`getgenrenames`,content:`**Описание:** Возвращает массив названий жанров фильма
Извлекает названия жанров из массива объектов жанров и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у жанра,
возвращается пустая строка.`},{heading:`getgenrenames`,content:"**Возвращает:** `array<string>` Массив строк с названиями жанров"},{heading:`getgenrenames`,content:`**См. также:**`},{heading:`getgenrenames`,content:"`Movie::getCountryNames`: () Для получения названий стран"},{heading:`getgenrenames`,content:"`Movie::getGenres`: () Для получения полной информации о жанрах"},{heading:`getcountrynames`,content:`**Описание:** Возвращает массив названий стран производства
Извлекает названия стран из массива объектов стран и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у страны,
возвращается пустая строка.`},{heading:`getcountrynames`,content:"**Возвращает:** `array<string>` Массив строк с названиями стран производства"},{heading:`getcountrynames`,content:`**См. также:**`},{heading:`getcountrynames`,content:"`Movie::getGenreNames`: () Для получения названий жанров"},{heading:`getcountrynames`,content:"`Movie::getCountries`: () Для получения полной информации о странах"},{heading:`getimdburl`,content:`**Описание:** Возвращает URL страницы фильма в системе IMDB
Формирует URL-адрес страницы фильма в системе IMDB на основе
внешних идентификаторов. Возвращает null, если внешние идентификаторы
отсутствуют или идентификатор IMDB не установлен.`},{heading:`getimdburl`,content:"**Возвращает:** `string|null` URL-адрес страницы фильма в IMDB или null, если не доступен"},{heading:`getimdburl`,content:`**См. также:**`},{heading:`getimdburl`,content:"`ExternalId::getImdbUrl`: () Для получения URL из внешних идентификаторов"},{heading:`getimdburl`,content:"`Movie::getTmdbUrl`: () Для получения URL TMDB"},{heading:`gettmdburl`,content:`**Описание:** Возвращает URL страницы фильма в системе TMDB
Формирует URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе внешних идентификаторов. Возвращает null, если внешние
идентификаторы отсутствуют или идентификатор TMDB не установлен.`},{heading:`gettmdburl`,content:"**Возвращает:** `string|null` URL-адрес страницы фильма в TMDB или null, если не доступен"},{heading:`gettmdburl`,content:`**См. также:**`},{heading:`gettmdburl`,content:"`ExternalId::getTmdbUrl`: () Для получения URL из внешних идентификаторов"},{heading:`gettmdburl`,content:"`Movie::getImdbUrl`: () Для получения URL IMDB"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Movie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив с данными фильма"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Movie::fromArray`: () Для создания объекта из массива"},{heading:`getname`,content:"**Описание:** Возвращает наиболее подходящее название фильма.\nМетод последовательно проверяет наличие русского названия (`name`),\nальтернативного названия (`alternativeName`) и английского названия (`enName`).\nВозвращается первое найденное не-null значение. Если все названия отсутствуют,\nвозвращается пустая строка."},{heading:`getname`,content:`**С версии:** 1.0.0`},{heading:`getname`,content:"**Возвращает:** `string` Название фильма или пустая строка, если ни одно из названий не доступно."},{heading:`getname`,content:`**См. также:**`},{heading:`getname`,content:"`Movie::`: $name"},{heading:`getname`,content:"`Movie::`: $alternativeName"},{heading:`getname`,content:"`Movie::`: $enName"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`getkinopoiskrating`,content:"`getKinopoiskRating()`"},{id:`getimdbrating`,content:"`getImdbRating()`"},{id:`getposterurl`,content:"`getPosterUrl()`"},{id:`getgenrenames`,content:"`getGenreNames()`"},{id:`getcountrynames`,content:"`getCountryNames()`"},{id:`getimdburl`,content:"`getImdbUrl()`"},{id:`gettmdburl`,content:"`getTmdbUrl()`"},{id:`toarray`,content:"`toArray()`"},{id:`getname`,content:"`getName()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#getkinopoiskrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getKinopoiskRating()`})})},{depth:2,url:`#getimdbrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImdbRating()`})})},{depth:2,url:`#getposterurl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPosterUrl()`})})},{depth:2,url:`#getgenrenames`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getGenreNames()`})})},{depth:2,url:`#getcountrynames`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getCountryNames()`})})},{depth:2,url:`#getimdburl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getImdbUrl()`})})},{depth:2,url:`#gettmdburl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getTmdbUrl()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getName()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления фильма/сериала из API Kinopoisk.dev
Представляет полную информацию о фильме или сериале, включая базовые данные,
рейтинги, участников, изображения, связанные произведения и другую метаинформацию.
Используется для работы с детальной информацией о произведениях кинематографа.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\SearchMovie`}),`: Для поисковых результатов фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\LinkedMovie`}),`: Для связанных фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ExternalId`}),`: Для внешних идентификаторов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта фильма/сериала
Создает новый экземпляр класса Movie с указанными параметрами.
Все параметры являются опциональными и могут быть null при отсутствии данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int|null): Уникальный идентификатор фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$externalId`}),` (ExternalId|null): Внешние идентификаторы (IMDB, TMDB и т.д.)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Название фильма на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$alternativeName`}),` (string|null): Альтернативное название`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Название фильма на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$names`}),` (array<Name>|null): Массив названий на разных языках`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (MovieType|null): Тип фильма (фильм, сериал, мини-сериал)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$typeNumber`}),` (int|null): Номер типа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int|null): Год выпуска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string|null): Полное описание фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$shortDescription`}),` (string|null): Краткое описание`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$slogan`}),` (string|null): Слоган фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` (MovieStatus|null): Статус фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$facts`}),` (array<FactInMovie>|null): Массив фактов о фильме`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieLength`}),` (int|null): Длительность фильма в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ratingMpaa`}),` (RatingMpaa|null): Рейтинг MPAA`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ageRating`}),` (int|null): Возрастной рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (Rating|null): Рейтинги фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$votes`}),` (Votes|null): Голоса за фильм`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$logo`}),` (Logo|null): Логотип фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$poster`}),` (ShortImage|null): Постер фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$backdrop`}),` (ShortImage|null): Фоновое изображение`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$videos`}),` (VideoTypes|null): Видео материалы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (array<ItemName>): Массив жанров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (array<ItemName>): Массив стран производства`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$persons`}),` (array<PersonInMovie>): Массив участников съемочной группы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$reviewInfo`}),` (ReviewInfo|null): Информация о рецензиях`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$budget`}),` (CurrencyValue|null): Бюджет фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fees`}),` (Fees|null): Кассовые сборы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$premiere`}),` (Premiere|null): Информация о премьере`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$watchability`}),` (Watchability|null): Где посмотреть фильм`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$releaseYears`}),` (array<int>|null): Годы выпуска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top10`}),` (int|null): Позиция в топ-10`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top250`}),` (int|null): Позиция в топ-250`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$isSeries`}),` (bool): Является ли сериалом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ticketsOnSale`}),` (bool|null): Продаются ли билеты`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$totalSeriesLength`}),` (int|null): Общая длительность сериала`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$seriesLength`}),` (int|null): Длительность серии`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$audience`}),` (array<Audience>|null): Аудитория фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$lists`}),` (array<Lists>): Списки фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$networks`}),` (Networks|null): Сети вещания`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string|null): Дата создания записи`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string|null): Дата обновления записи`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Movie из массива данных API
Фабричный метод для создания экземпляра класса Movie из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса Movie`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели
Проверяет корректность основных полей объекта Movie.
Проверяет наличие обязательного идентификатора и валидность опциональных полей.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.h2,{id:`getkinopoiskrating`,children:(0,n.jsx)(t.code,{children:`getKinopoiskRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма на Кинопоиске
Извлекает рейтинг фильма из системы Кинопоиск. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг на Кинопоиске (от 0.0 до 10.0) или null, если не установлен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getImdbRating`}),`: () Для получения рейтинга IMDB`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getKp`}),`: () Для альтернативного способа получения рейтинга`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getimdbrating`,children:(0,n.jsx)(t.code,{children:`getImdbRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рейтинг фильма на IMDB
Извлекает рейтинг фильма из системы IMDB. Возвращает null,
если рейтинг не установлен или объект рейтинга отсутствует.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Рейтинг на IMDB (от 0.0 до 10.0) или null, если не установлен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getKinopoiskRating`}),`: () Для получения рейтинга Кинопоиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Rating::getImdb`}),`: () Для альтернативного способа получения рейтинга`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getposterurl`,children:(0,n.jsx)(t.code,{children:`getPosterUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает URL постера фильма
Извлекает URL-адрес постера фильма из объекта изображения.
Возвращает null, если постер не установлен или URL отсутствует.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес постера или null, если не установлен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Image::getUrl`}),`: () Для получения URL из объекта изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getBackdropUrl`}),`: () Для получения URL фонового изображения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getgenrenames`,children:(0,n.jsx)(t.code,{children:`getGenreNames()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает массив названий жанров фильма
Извлекает названия жанров из массива объектов жанров и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у жанра,
возвращается пустая строка.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string>`}),` Массив строк с названиями жанров`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getCountryNames`}),`: () Для получения названий стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getGenres`}),`: () Для получения полной информации о жанрах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getcountrynames`,children:(0,n.jsx)(t.code,{children:`getCountryNames()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает массив названий стран производства
Извлекает названия стран из массива объектов стран и возвращает их
в виде простого массива строк. Если поле 'name' отсутствует у страны,
возвращается пустая строка.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string>`}),` Массив строк с названиями стран производства`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getGenreNames`}),`: () Для получения названий жанров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getCountries`}),`: () Для получения полной информации о странах`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getimdburl`,children:(0,n.jsx)(t.code,{children:`getImdbUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает URL страницы фильма в системе IMDB
Формирует URL-адрес страницы фильма в системе IMDB на основе
внешних идентификаторов. Возвращает null, если внешние идентификаторы
отсутствуют или идентификатор IMDB не установлен.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес страницы фильма в IMDB или null, если не доступен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getImdbUrl`}),`: () Для получения URL из внешних идентификаторов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getTmdbUrl`}),`: () Для получения URL TMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`gettmdburl`,children:(0,n.jsx)(t.code,{children:`getTmdbUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает URL страницы фильма в системе TMDB
Формирует URL-адрес страницы фильма в системе The Movie Database (TMDB)
на основе внешних идентификаторов. Возвращает null, если внешние
идентификаторы отсутствуют или идентификатор TMDB не установлен.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес страницы фильма в TMDB или null, если не доступен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ExternalId::getTmdbUrl`}),`: () Для получения URL из внешних идентификаторов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::getImdbUrl`}),`: () Для получения URL IMDB`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Movie в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив с данными фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::fromArray`}),`: () Для создания объекта из массива`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getname`,children:(0,n.jsx)(t.code,{children:`getName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наиболее подходящее название фильма.
Метод последовательно проверяет наличие русского названия (`,(0,n.jsx)(t.code,{children:`name`}),`),
альтернативного названия (`,(0,n.jsx)(t.code,{children:`alternativeName`}),`) и английского названия (`,(0,n.jsx)(t.code,{children:`enName`}),`).
Возвращается первое найденное не-null значение. Если все названия отсутствуют,
возвращается пустая строка.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Название фильма или пустая строка, если ни одно из названий не доступно.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::`}),`: $name`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::`}),`: $alternativeName`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::`}),`: $enName`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};