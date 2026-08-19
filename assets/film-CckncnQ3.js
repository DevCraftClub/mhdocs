import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Film - Модель фильма`,description:`Документация по film - модель фильма. Часть API wrapper для КиноПоиска.`},i=new Date(1787142659e3),a=`

Модель фильма из Kinopoisk API.

***

**📚 Навигация:** [Главная](../index) → [Модели](index) → Film

**🔗 Связанные классы:**

* [FilmService](../services/film-service) - Сервис для работы с фильмами
* [Staff](./staff) - Съемочная группа
* [Review](./review) - Отзывы
* [Fact](./fact) - Факты
* [Image](./image) - Изображения
* [Video](./video) - Видео
* [Award](./award) - Награды
* [BoxOffice](./box-office) - Кассовые сборы
* [Country](./country) - Страны
* [Genre](./genre) - Жанры
* [Episode](./episode) - Эпизоды
* [Season](./season) - Сезоны
* [RelatedFilm](./related-film) - Связанные фильмы
* [ContentType](../enums/content-type) - Типы контента
* [FilmOrder](../enums/film-order) - Порядок сортировки фильмов
* [ImageType](../enums/image-type) - Типы изображений
* [ReviewOrder](../enums/review-order) - Порядок сортировки отзывов
* [ReviewType](../enums/review-type) - Типы отзывов
* [FactType](../enums/fact-type) - Типы фактов
* [VideoSite](../enums/video-site) - Сайты видео
* [BoxOfficeType](../enums/box-office-type) - Типы кассовых сборов
* [DistributionType](../enums/distribution-type) - Типы дистрибуции
* [Month](../enums/month) - Месяцы
* [ApiException](../exceptions/api-exception) - Базовое исключение API
* [ResourceNotFoundException](../exceptions/resource-not-found-exception) - Ресурс не найден
* [KpValidationException](../exceptions/kp-validation-exception) - Ошибка валидации

***

## Описание [#описание]

Представляет полную информацию о фильме, полученную из Kinopoisk Unofficial API. Содержит все основные данные: названия, рейтинги, описания, технические характеристики и метаданные фильма.

## Основные возможности [#основные-возможности]

* Хранение полной информации о фильме в неизменяемом виде (readonly свойства)
* Создание объекта из массива данных API
* Удобные методы для получения отображаемого названия и основного рейтинга
* Определение типа контента (фильм/сериал)

## Свойства [#свойства]

### Основные идентификаторы [#основные-идентификаторы]

#### \`$kinopoiskId\` [#kinopoiskid]

**Тип:** \`int\`

Уникальный идентификатор фильма в Кинопоиске.

#### \`$kinopoiskHDId\` [#kinopoiskhdid]

**Тип:** \`string|null\`

Идентификатор фильма в Кинопоиск HD (если доступен).

#### \`$imdbId\` [#imdbid]

**Тип:** \`string|null\`

Идентификатор фильма в IMDb.

### Названия [#названия]

#### \`$nameRu\` [#nameru]

**Тип:** \`string|null\`

Название фильма на русском языке.

#### \`$nameEn\` [#nameen]

**Тип:** \`string|null\`

Название фильма на английском языке.

#### \`$nameOriginal\` [#nameoriginal]

**Тип:** \`string|null\`

Оригинальное название фильма.

### Изображения [#изображения]

#### \`$posterUrl\` [#posterurl]

**Тип:** \`string\`

URL постера фильма в высоком разрешении.

#### \`$posterUrlPreview\` [#posterurlpreview]

**Тип:** \`string\`

URL постера фильма в низком разрешении.

#### \`$coverUrl\` [#coverurl]

**Тип:** \`string|null\`

URL обложки фильма.

#### \`$logoUrl\` [#logourl]

**Тип:** \`string|null\`

URL логотипа фильма.

### Рейтинги [#рейтинги]

#### \`$ratingKinopoisk\` [#ratingkinopoisk]

**Тип:** \`float|null\`

Рейтинг Кинопоиска.

#### \`$ratingKinopoiskVoteCount\` [#ratingkinopoiskvotecount]

**Тип:** \`int|null\`

Количество голосов на Кинопоиске.

#### \`$ratingImdb\` [#ratingimdb]

**Тип:** \`float|null\`

Рейтинг IMDb.

#### \`$ratingImdbVoteCount\` [#ratingimdbvotecount]

**Тип:** \`int|null\`

Количество голосов на IMDb.

#### \`$ratingFilmCritics\` [#ratingfilmcritics]

**Тип:** \`float|null\`

Рейтинг кинокритиков.

#### \`$ratingFilmCriticsVoteCount\` [#ratingfilmcriticsvotecount]

**Тип:** \`int|null\`

Количество голосов кинокритиков.

#### \`$ratingGoodReview\` [#ratinggoodreview]

**Тип:** \`float|null\`

Рейтинг хороших рецензий.

#### \`$ratingGoodReviewVoteCount\` [#ratinggoodreviewvotecount]

**Тип:** \`int|null\`

Количество голосов за хорошие рецензии.

#### \`$ratingAwait\` [#ratingawait]

**Тип:** \`float|null\`

Рейтинг ожидания.

#### \`$ratingAwaitCount\` [#ratingawaitcount]

**Тип:** \`int|null\`

Количество голосов ожидания.

#### \`$ratingRfCritics\` [#ratingrfcritics]

**Тип:** \`float|null\`

Рейтинг российских кинокритиков.

#### \`$ratingRfCriticsVoteCount\` [#ratingrfcriticsvotecount]

**Тип:** \`int|null\`

Количество голосов российских кинокритиков.

### Основная информация [#основная-информация]

#### \`$year\` [#year]

**Тип:** \`int|null\`

Год выпуска фильма.

#### \`$filmLength\` [#filmlength]

**Тип:** \`int|null\`

Длительность фильма в минутах.

#### \`$startYear\` [#startyear]

**Тип:** \`int|null\`

Год начала производства (для сериалов).

#### \`$endYear\` [#endyear]

**Тип:** \`int|null\`

Год окончания производства (для сериалов).

#### \`$type\` [#type]

**Тип:** \`ContentType\`

Тип контента (FILM, SERIES, MINI\\_SERIES, TV\\_SHOW).

#### \`$productionStatus\` [#productionstatus]

**Тип:** \`ProductionStatus|null\`

Статус производства фильма.

### Описания [#описания]

#### \`$slogan\` [#slogan]

**Тип:** \`string|null\`

Слоган фильма.

#### \`$description\` [#description]

**Тип:** \`string|null\`

Полное описание фильма.

#### \`$shortDescription\` [#shortdescription]

**Тип:** \`string|null\`

Краткое описание фильма.

#### \`$editorAnnotation\` [#editorannotation]

**Тип:** \`string|null\`

Редакторская аннотация.

### Дополнительная информация [#дополнительная-информация]

#### \`$webUrl\` [#weburl]

**Тип:** \`string|null\`

URL страницы фильма на Кинопоиске.

#### \`$reviewsCount\` [#reviewscount]

**Тип:** \`int|null\`

Количество рецензий на фильм.

#### \`$isTicketsAvailable\` [#isticketsavailable]

**Тип:** \`bool|null\`

Доступны ли билеты в кинотеатрах.

#### \`$ratingMpaa\` [#ratingmpaa]

**Тип:** \`string|null\`

Рейтинг MPAA.

#### \`$ratingAgeLimits\` [#ratingagelimits]

**Тип:** \`string|null\`

Возрастные ограничения.

#### \`$hasImax\` [#hasimax]

**Тип:** \`bool|null\`

Доступен ли в формате IMAX.

#### \`$has3D\` [#has3d]

**Тип:** \`bool|null\`

Доступен ли в формате 3D.

#### \`$lastSync\` [#lastsync]

**Тип:** \`string|null\`

Время последней синхронизации данных.

### Коллекции [#коллекции]

#### \`$countries\` [#countries]

**Тип:** \`Country[]\`

Массив стран производства.

#### \`$genres\` [#genres]

**Тип:** \`Genre[]\`

Массив жанров фильма.

### Флаги [#флаги]

#### \`$serial\` [#serial]

**Тип:** \`bool|null\`

Является ли сериалом.

#### \`$shortFilm\` [#shortfilm]

**Тип:** \`bool|null\`

Является ли короткометражным фильмом.

#### \`$completed\` [#completed]

**Тип:** \`bool|null\`

Завершен ли (для сериалов).

## Методы [#методы]

### \`__construct(...)\` [#__construct]

Конструктор модели фильма.

**Параметры:**
См. свойства выше для полного списка параметров.

### \`fromArray(array $data): self\` [#fromarrayarray-data-self]

Создает экземпляр фильма из массива данных API.

**Параметры:**

* \`$data\` (array) - Массив данных от API

**Возвращает:**

* \`self\` - Новый экземпляр фильма

**Пример:**

\`\`\`php
$film = Film::fromArray($apiData);
\`\`\`

### \`getDisplayName(): string\` [#getdisplayname-string]

Получает отображаемое название фильма.

**Возвращает:**

* \`string\` - Название на русском языке, если доступно, иначе на английском

**Пример:**

\`\`\`php
echo $film->getDisplayName(); // "Матрица" или "The Matrix"
\`\`\`

### \`isSerial(): bool\` [#isserial-bool]

Проверяет, является ли фильм сериалом.

**Возвращает:**

* \`bool\` - true, если это сериал

**Пример:**

\`\`\`php
if ($film->isSerial()) {
    echo "Это сериал";
}
\`\`\`

### \`getMainRating(): ?float\` [#getmainrating-float]

Получает основной рейтинг фильма.

**Возвращает:**

* \`float|null\` - Рейтинг Кинопоиска, если доступен, иначе null

**Пример:**

\`\`\`php
$rating = $film->getMainRating(); // 8.7
\`\`\`

### \`getCountriesString(): string\` [#getcountriesstring-string]

Получает строку со странами производства.

**Возвращает:**

* \`string\` - Строка с названиями стран через запятую

**Пример:**

\`\`\`php
echo $film->getCountriesString(); // "США, Великобритания"
\`\`\`

### \`getGenresString(): string\` [#getgenresstring-string]

Получает строку с жанрами фильма.

**Возвращает:**

* \`string\` - Строка с названиями жанров через запятую

**Пример:**

\`\`\`php
echo $film->getGenresString(); // "боевик, фантастика, триллер"
\`\`\`

### \`formatDuration(): string\` [#formatduration-string]

Форматирует длительность фильма.

**Возвращает:**

* \`string\` - Отформатированная длительность (например, "02:16:00")

**Пример:**

\`\`\`php
echo $film->formatDuration(); // "00:02:16"
\`\`\`

### \`formatDurationString(): string\` [#formatdurationstring-string]

Форматирует длительность фильма в виде строки.

**Возвращает:**

* \`string\` - Отформатированная длительность с полными словами

**Пример:**

\`\`\`php
echo $film->formatDurationString(); // "2 часа 16 минут"
\`\`\`

### \`toArray(): array\` [#toarray-array]

Преобразует объект фильма в массив.

**Возвращает:**

* \`array\` - Ассоциативный массив со всеми данными фильма

## Примеры использования [#примеры-использования]

### Создание из данных API [#создание-из-данных-api]

\`\`\`php
<?php

use NotKinopoisk\\Models\\Film;

// Создание из данных API
$film = Film::fromArray($apiData);

// Получение отображаемого названия
echo $film->getDisplayName(); // "Матрица" или "The Matrix"

// Проверка типа контента
if ($film->isSerial()) {
    echo "Это сериал";
}

// Получение основного рейтинга
$rating = $film->getMainRating(); // 8.7
\`\`\`

### Работа с информацией о фильме [#работа-с-информацией-о-фильме]

\`\`\`php
// Получение основной информации
echo "Название: " . $film->getDisplayName() . "\\n";
echo "Год: " . $film->year . "\\n";
echo "Длительность: " . $film->formatDuration() . "\\n";
echo "Страны: " . $film->getCountriesString() . "\\n";
echo "Жанры: " . $film->getGenresString() . "\\n";

// Проверка рейтингов
if ($film->ratingKinopoisk) {
    echo "Рейтинг Кинопоиска: " . $film->ratingKinopoisk . "\\n";
}

if ($film->ratingImdb) {
    echo "Рейтинг IMDb: " . $film->ratingImdb . "\\n";
}
\`\`\`

### Проверка типа контента [#проверка-типа-контента]

\`\`\`php
switch ($film->type) {
    case ContentType::FILM:
        echo "Это фильм";
        break;
    case ContentType::SERIES:
        echo "Это сериал";
        break;
    case ContentType::MINI_SERIES:
        echo "Это мини-сериал";
        break;
    case ContentType::TV_SHOW:
        echo "Это телешоу";
        break;
}
\`\`\`

## Связанные классы [#связанные-классы]

* \`\\NotKinopoisk\\Models\\FilmCollection\` - Коллекция фильмов
* \`\\NotKinopoisk\\Services\\FilmService\` - Сервис для работы с фильмами
* \`\\NotKinopoisk\\Models\\Country\` - Модель страны
* \`\\NotKinopoisk\\Models\\Genre\` - Модель жанра
* \`\\NotKinopoisk\\Enums\\ContentType\` - Типы контента
* \`\\NotKinopoisk\\Enums\\ProductionStatus\` - Статусы производства
`,o={contents:[{heading:void 0,content:`Модель фильма из Kinopoisk API.`},{heading:void 0,content:`**📚 Навигация:** Главная → Модели → Film`},{heading:void 0,content:`**🔗 Связанные классы:**`},{heading:void 0,content:`FilmService - Сервис для работы с фильмами`},{heading:void 0,content:`Staff - Съемочная группа`},{heading:void 0,content:`Review - Отзывы`},{heading:void 0,content:`Fact - Факты`},{heading:void 0,content:`Image - Изображения`},{heading:void 0,content:`Video - Видео`},{heading:void 0,content:`Award - Награды`},{heading:void 0,content:`BoxOffice - Кассовые сборы`},{heading:void 0,content:`Country - Страны`},{heading:void 0,content:`Genre - Жанры`},{heading:void 0,content:`Episode - Эпизоды`},{heading:void 0,content:`Season - Сезоны`},{heading:void 0,content:`RelatedFilm - Связанные фильмы`},{heading:void 0,content:`ContentType - Типы контента`},{heading:void 0,content:`FilmOrder - Порядок сортировки фильмов`},{heading:void 0,content:`ImageType - Типы изображений`},{heading:void 0,content:`ReviewOrder - Порядок сортировки отзывов`},{heading:void 0,content:`ReviewType - Типы отзывов`},{heading:void 0,content:`FactType - Типы фактов`},{heading:void 0,content:`VideoSite - Сайты видео`},{heading:void 0,content:`BoxOfficeType - Типы кассовых сборов`},{heading:void 0,content:`DistributionType - Типы дистрибуции`},{heading:void 0,content:`Month - Месяцы`},{heading:void 0,content:`ApiException - Базовое исключение API`},{heading:void 0,content:`ResourceNotFoundException - Ресурс не найден`},{heading:void 0,content:`KpValidationException - Ошибка валидации`},{heading:`описание`,content:`Представляет полную информацию о фильме, полученную из Kinopoisk Unofficial API. Содержит все основные данные: названия, рейтинги, описания, технические характеристики и метаданные фильма.`},{heading:`основные-возможности`,content:`Хранение полной информации о фильме в неизменяемом виде (readonly свойства)`},{heading:`основные-возможности`,content:`Создание объекта из массива данных API`},{heading:`основные-возможности`,content:`Удобные методы для получения отображаемого названия и основного рейтинга`},{heading:`основные-возможности`,content:`Определение типа контента (фильм/сериал)`},{heading:`kinopoiskid`,content:"**Тип:** `int`"},{heading:`kinopoiskid`,content:`Уникальный идентификатор фильма в Кинопоиске.`},{heading:`kinopoiskhdid`,content:"**Тип:** `string|null`"},{heading:`kinopoiskhdid`,content:`Идентификатор фильма в Кинопоиск HD (если доступен).`},{heading:`imdbid`,content:"**Тип:** `string|null`"},{heading:`imdbid`,content:`Идентификатор фильма в IMDb.`},{heading:`nameru`,content:"**Тип:** `string|null`"},{heading:`nameru`,content:`Название фильма на русском языке.`},{heading:`nameen`,content:"**Тип:** `string|null`"},{heading:`nameen`,content:`Название фильма на английском языке.`},{heading:`nameoriginal`,content:"**Тип:** `string|null`"},{heading:`nameoriginal`,content:`Оригинальное название фильма.`},{heading:`posterurl`,content:"**Тип:** `string`"},{heading:`posterurl`,content:`URL постера фильма в высоком разрешении.`},{heading:`posterurlpreview`,content:"**Тип:** `string`"},{heading:`posterurlpreview`,content:`URL постера фильма в низком разрешении.`},{heading:`coverurl`,content:"**Тип:** `string|null`"},{heading:`coverurl`,content:`URL обложки фильма.`},{heading:`logourl`,content:"**Тип:** `string|null`"},{heading:`logourl`,content:`URL логотипа фильма.`},{heading:`ratingkinopoisk`,content:"**Тип:** `float|null`"},{heading:`ratingkinopoisk`,content:`Рейтинг Кинопоиска.`},{heading:`ratingkinopoiskvotecount`,content:"**Тип:** `int|null`"},{heading:`ratingkinopoiskvotecount`,content:`Количество голосов на Кинопоиске.`},{heading:`ratingimdb`,content:"**Тип:** `float|null`"},{heading:`ratingimdb`,content:`Рейтинг IMDb.`},{heading:`ratingimdbvotecount`,content:"**Тип:** `int|null`"},{heading:`ratingimdbvotecount`,content:`Количество голосов на IMDb.`},{heading:`ratingfilmcritics`,content:"**Тип:** `float|null`"},{heading:`ratingfilmcritics`,content:`Рейтинг кинокритиков.`},{heading:`ratingfilmcriticsvotecount`,content:"**Тип:** `int|null`"},{heading:`ratingfilmcriticsvotecount`,content:`Количество голосов кинокритиков.`},{heading:`ratinggoodreview`,content:"**Тип:** `float|null`"},{heading:`ratinggoodreview`,content:`Рейтинг хороших рецензий.`},{heading:`ratinggoodreviewvotecount`,content:"**Тип:** `int|null`"},{heading:`ratinggoodreviewvotecount`,content:`Количество голосов за хорошие рецензии.`},{heading:`ratingawait`,content:"**Тип:** `float|null`"},{heading:`ratingawait`,content:`Рейтинг ожидания.`},{heading:`ratingawaitcount`,content:"**Тип:** `int|null`"},{heading:`ratingawaitcount`,content:`Количество голосов ожидания.`},{heading:`ratingrfcritics`,content:"**Тип:** `float|null`"},{heading:`ratingrfcritics`,content:`Рейтинг российских кинокритиков.`},{heading:`ratingrfcriticsvotecount`,content:"**Тип:** `int|null`"},{heading:`ratingrfcriticsvotecount`,content:`Количество голосов российских кинокритиков.`},{heading:`year`,content:"**Тип:** `int|null`"},{heading:`year`,content:`Год выпуска фильма.`},{heading:`filmlength`,content:"**Тип:** `int|null`"},{heading:`filmlength`,content:`Длительность фильма в минутах.`},{heading:`startyear`,content:"**Тип:** `int|null`"},{heading:`startyear`,content:`Год начала производства (для сериалов).`},{heading:`endyear`,content:"**Тип:** `int|null`"},{heading:`endyear`,content:`Год окончания производства (для сериалов).`},{heading:`type`,content:"**Тип:** `ContentType`"},{heading:`type`,content:`Тип контента (FILM, SERIES, MINI\\_SERIES, TV\\_SHOW).`},{heading:`productionstatus`,content:"**Тип:** `ProductionStatus|null`"},{heading:`productionstatus`,content:`Статус производства фильма.`},{heading:`slogan`,content:"**Тип:** `string|null`"},{heading:`slogan`,content:`Слоган фильма.`},{heading:`description`,content:"**Тип:** `string|null`"},{heading:`description`,content:`Полное описание фильма.`},{heading:`shortdescription`,content:"**Тип:** `string|null`"},{heading:`shortdescription`,content:`Краткое описание фильма.`},{heading:`editorannotation`,content:"**Тип:** `string|null`"},{heading:`editorannotation`,content:`Редакторская аннотация.`},{heading:`weburl`,content:"**Тип:** `string|null`"},{heading:`weburl`,content:`URL страницы фильма на Кинопоиске.`},{heading:`reviewscount`,content:"**Тип:** `int|null`"},{heading:`reviewscount`,content:`Количество рецензий на фильм.`},{heading:`isticketsavailable`,content:"**Тип:** `bool|null`"},{heading:`isticketsavailable`,content:`Доступны ли билеты в кинотеатрах.`},{heading:`ratingmpaa`,content:"**Тип:** `string|null`"},{heading:`ratingmpaa`,content:`Рейтинг MPAA.`},{heading:`ratingagelimits`,content:"**Тип:** `string|null`"},{heading:`ratingagelimits`,content:`Возрастные ограничения.`},{heading:`hasimax`,content:"**Тип:** `bool|null`"},{heading:`hasimax`,content:`Доступен ли в формате IMAX.`},{heading:`has3d`,content:"**Тип:** `bool|null`"},{heading:`has3d`,content:`Доступен ли в формате 3D.`},{heading:`lastsync`,content:"**Тип:** `string|null`"},{heading:`lastsync`,content:`Время последней синхронизации данных.`},{heading:`countries`,content:"**Тип:** `Country[]`"},{heading:`countries`,content:`Массив стран производства.`},{heading:`genres`,content:"**Тип:** `Genre[]`"},{heading:`genres`,content:`Массив жанров фильма.`},{heading:`serial`,content:"**Тип:** `bool|null`"},{heading:`serial`,content:`Является ли сериалом.`},{heading:`shortfilm`,content:"**Тип:** `bool|null`"},{heading:`shortfilm`,content:`Является ли короткометражным фильмом.`},{heading:`completed`,content:"**Тип:** `bool|null`"},{heading:`completed`,content:`Завершен ли (для сериалов).`},{heading:`__construct`,content:`Конструктор модели фильма.`},{heading:`__construct`,content:`**Параметры:**
См. свойства выше для полного списка параметров.`},{heading:`fromarrayarray-data-self`,content:`Создает экземпляр фильма из массива данных API.`},{heading:`fromarrayarray-data-self`,content:`**Параметры:**`},{heading:`fromarrayarray-data-self`,content:"`$data` (array) - Массив данных от API"},{heading:`fromarrayarray-data-self`,content:`**Возвращает:**`},{heading:`fromarrayarray-data-self`,content:"`self` - Новый экземпляр фильма"},{heading:`fromarrayarray-data-self`,content:`**Пример:**`},{heading:`getdisplayname-string`,content:`Получает отображаемое название фильма.`},{heading:`getdisplayname-string`,content:`**Возвращает:**`},{heading:`getdisplayname-string`,content:"`string` - Название на русском языке, если доступно, иначе на английском"},{heading:`getdisplayname-string`,content:`**Пример:**`},{heading:`isserial-bool`,content:`Проверяет, является ли фильм сериалом.`},{heading:`isserial-bool`,content:`**Возвращает:**`},{heading:`isserial-bool`,content:"`bool` - true, если это сериал"},{heading:`isserial-bool`,content:`**Пример:**`},{heading:`getmainrating-float`,content:`Получает основной рейтинг фильма.`},{heading:`getmainrating-float`,content:`**Возвращает:**`},{heading:`getmainrating-float`,content:"`float|null` - Рейтинг Кинопоиска, если доступен, иначе null"},{heading:`getmainrating-float`,content:`**Пример:**`},{heading:`getcountriesstring-string`,content:`Получает строку со странами производства.`},{heading:`getcountriesstring-string`,content:`**Возвращает:**`},{heading:`getcountriesstring-string`,content:"`string` - Строка с названиями стран через запятую"},{heading:`getcountriesstring-string`,content:`**Пример:**`},{heading:`getgenresstring-string`,content:`Получает строку с жанрами фильма.`},{heading:`getgenresstring-string`,content:`**Возвращает:**`},{heading:`getgenresstring-string`,content:"`string` - Строка с названиями жанров через запятую"},{heading:`getgenresstring-string`,content:`**Пример:**`},{heading:`formatduration-string`,content:`Форматирует длительность фильма.`},{heading:`formatduration-string`,content:`**Возвращает:**`},{heading:`formatduration-string`,content:'`string` - Отформатированная длительность (например, "02:16:00")'},{heading:`formatduration-string`,content:`**Пример:**`},{heading:`formatdurationstring-string`,content:`Форматирует длительность фильма в виде строки.`},{heading:`formatdurationstring-string`,content:`**Возвращает:**`},{heading:`formatdurationstring-string`,content:"`string` - Отформатированная длительность с полными словами"},{heading:`formatdurationstring-string`,content:`**Пример:**`},{heading:`toarray-array`,content:`Преобразует объект фильма в массив.`},{heading:`toarray-array`,content:`**Возвращает:**`},{heading:`toarray-array`,content:"`array` - Ассоциативный массив со всеми данными фильма"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Models\\FilmCollection` - Коллекция фильмов"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Services\\FilmService` - Сервис для работы с фильмами"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Models\\Country` - Модель страны"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Models\\Genre` - Модель жанра"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\ContentType` - Типы контента"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\ProductionStatus` - Статусы производства"}],headings:[{id:`описание`,content:`Описание`},{id:`основные-возможности`,content:`Основные возможности`},{id:`свойства`,content:`Свойства`},{id:`основные-идентификаторы`,content:`Основные идентификаторы`},{id:`kinopoiskid`,content:"`$kinopoiskId`"},{id:`kinopoiskhdid`,content:"`$kinopoiskHDId`"},{id:`imdbid`,content:"`$imdbId`"},{id:`названия`,content:`Названия`},{id:`nameru`,content:"`$nameRu`"},{id:`nameen`,content:"`$nameEn`"},{id:`nameoriginal`,content:"`$nameOriginal`"},{id:`изображения`,content:`Изображения`},{id:`posterurl`,content:"`$posterUrl`"},{id:`posterurlpreview`,content:"`$posterUrlPreview`"},{id:`coverurl`,content:"`$coverUrl`"},{id:`logourl`,content:"`$logoUrl`"},{id:`рейтинги`,content:`Рейтинги`},{id:`ratingkinopoisk`,content:"`$ratingKinopoisk`"},{id:`ratingkinopoiskvotecount`,content:"`$ratingKinopoiskVoteCount`"},{id:`ratingimdb`,content:"`$ratingImdb`"},{id:`ratingimdbvotecount`,content:"`$ratingImdbVoteCount`"},{id:`ratingfilmcritics`,content:"`$ratingFilmCritics`"},{id:`ratingfilmcriticsvotecount`,content:"`$ratingFilmCriticsVoteCount`"},{id:`ratinggoodreview`,content:"`$ratingGoodReview`"},{id:`ratinggoodreviewvotecount`,content:"`$ratingGoodReviewVoteCount`"},{id:`ratingawait`,content:"`$ratingAwait`"},{id:`ratingawaitcount`,content:"`$ratingAwaitCount`"},{id:`ratingrfcritics`,content:"`$ratingRfCritics`"},{id:`ratingrfcriticsvotecount`,content:"`$ratingRfCriticsVoteCount`"},{id:`основная-информация`,content:`Основная информация`},{id:`year`,content:"`$year`"},{id:`filmlength`,content:"`$filmLength`"},{id:`startyear`,content:"`$startYear`"},{id:`endyear`,content:"`$endYear`"},{id:`type`,content:"`$type`"},{id:`productionstatus`,content:"`$productionStatus`"},{id:`описания`,content:`Описания`},{id:`slogan`,content:"`$slogan`"},{id:`description`,content:"`$description`"},{id:`shortdescription`,content:"`$shortDescription`"},{id:`editorannotation`,content:"`$editorAnnotation`"},{id:`дополнительная-информация`,content:`Дополнительная информация`},{id:`weburl`,content:"`$webUrl`"},{id:`reviewscount`,content:"`$reviewsCount`"},{id:`isticketsavailable`,content:"`$isTicketsAvailable`"},{id:`ratingmpaa`,content:"`$ratingMpaa`"},{id:`ratingagelimits`,content:"`$ratingAgeLimits`"},{id:`hasimax`,content:"`$hasImax`"},{id:`has3d`,content:"`$has3D`"},{id:`lastsync`,content:"`$lastSync`"},{id:`коллекции`,content:`Коллекции`},{id:`countries`,content:"`$countries`"},{id:`genres`,content:"`$genres`"},{id:`флаги`,content:`Флаги`},{id:`serial`,content:"`$serial`"},{id:`shortfilm`,content:"`$shortFilm`"},{id:`completed`,content:"`$completed`"},{id:`методы`,content:`Методы`},{id:`__construct`,content:"`__construct(...)`"},{id:`fromarrayarray-data-self`,content:"`fromArray(array $data): self`"},{id:`getdisplayname-string`,content:"`getDisplayName(): string`"},{id:`isserial-bool`,content:"`isSerial(): bool`"},{id:`getmainrating-float`,content:"`getMainRating(): ?float`"},{id:`getcountriesstring-string`,content:"`getCountriesString(): string`"},{id:`getgenresstring-string`,content:"`getGenresString(): string`"},{id:`formatduration-string`,content:"`formatDuration(): string`"},{id:`formatdurationstring-string`,content:"`formatDurationString(): string`"},{id:`toarray-array`,content:"`toArray(): array`"},{id:`примеры-использования`,content:`Примеры использования`},{id:`создание-из-данных-api`,content:`Создание из данных API`},{id:`работа-с-информацией-о-фильме`,content:`Работа с информацией о фильме`},{id:`проверка-типа-контента`,content:`Проверка типа контента`},{id:`связанные-классы`,content:`Связанные классы`}]},s=[{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:2,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:2,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#основные-идентификаторы`,title:(0,n.jsx)(n.Fragment,{children:`Основные идентификаторы`})},{depth:4,url:`#kinopoiskid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$kinopoiskId`})})},{depth:4,url:`#kinopoiskhdid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$kinopoiskHDId`})})},{depth:4,url:`#imdbid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$imdbId`})})},{depth:3,url:`#названия`,title:(0,n.jsx)(n.Fragment,{children:`Названия`})},{depth:4,url:`#nameru`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$nameRu`})})},{depth:4,url:`#nameen`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$nameEn`})})},{depth:4,url:`#nameoriginal`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$nameOriginal`})})},{depth:3,url:`#изображения`,title:(0,n.jsx)(n.Fragment,{children:`Изображения`})},{depth:4,url:`#posterurl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$posterUrl`})})},{depth:4,url:`#posterurlpreview`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$posterUrlPreview`})})},{depth:4,url:`#coverurl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$coverUrl`})})},{depth:4,url:`#logourl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$logoUrl`})})},{depth:3,url:`#рейтинги`,title:(0,n.jsx)(n.Fragment,{children:`Рейтинги`})},{depth:4,url:`#ratingkinopoisk`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingKinopoisk`})})},{depth:4,url:`#ratingkinopoiskvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingKinopoiskVoteCount`})})},{depth:4,url:`#ratingimdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingImdb`})})},{depth:4,url:`#ratingimdbvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingImdbVoteCount`})})},{depth:4,url:`#ratingfilmcritics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingFilmCritics`})})},{depth:4,url:`#ratingfilmcriticsvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingFilmCriticsVoteCount`})})},{depth:4,url:`#ratinggoodreview`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingGoodReview`})})},{depth:4,url:`#ratinggoodreviewvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingGoodReviewVoteCount`})})},{depth:4,url:`#ratingawait`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingAwait`})})},{depth:4,url:`#ratingawaitcount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingAwaitCount`})})},{depth:4,url:`#ratingrfcritics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingRfCritics`})})},{depth:4,url:`#ratingrfcriticsvotecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingRfCriticsVoteCount`})})},{depth:3,url:`#основная-информация`,title:(0,n.jsx)(n.Fragment,{children:`Основная информация`})},{depth:4,url:`#year`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$year`})})},{depth:4,url:`#filmlength`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$filmLength`})})},{depth:4,url:`#startyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$startYear`})})},{depth:4,url:`#endyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$endYear`})})},{depth:4,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$type`})})},{depth:4,url:`#productionstatus`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$productionStatus`})})},{depth:3,url:`#описания`,title:(0,n.jsx)(n.Fragment,{children:`Описания`})},{depth:4,url:`#slogan`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$slogan`})})},{depth:4,url:`#description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$description`})})},{depth:4,url:`#shortdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$shortDescription`})})},{depth:4,url:`#editorannotation`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$editorAnnotation`})})},{depth:3,url:`#дополнительная-информация`,title:(0,n.jsx)(n.Fragment,{children:`Дополнительная информация`})},{depth:4,url:`#weburl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$webUrl`})})},{depth:4,url:`#reviewscount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$reviewsCount`})})},{depth:4,url:`#isticketsavailable`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$isTicketsAvailable`})})},{depth:4,url:`#ratingmpaa`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingMpaa`})})},{depth:4,url:`#ratingagelimits`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$ratingAgeLimits`})})},{depth:4,url:`#hasimax`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$hasImax`})})},{depth:4,url:`#has3d`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$has3D`})})},{depth:4,url:`#lastsync`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$lastSync`})})},{depth:3,url:`#коллекции`,title:(0,n.jsx)(n.Fragment,{children:`Коллекции`})},{depth:4,url:`#countries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$countries`})})},{depth:4,url:`#genres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$genres`})})},{depth:3,url:`#флаги`,title:(0,n.jsx)(n.Fragment,{children:`Флаги`})},{depth:4,url:`#serial`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$serial`})})},{depth:4,url:`#shortfilm`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$shortFilm`})})},{depth:4,url:`#completed`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$completed`})})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(...)`})})},{depth:3,url:`#fromarrayarray-data-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray(array $data): self`})})},{depth:3,url:`#getdisplayname-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDisplayName(): string`})})},{depth:3,url:`#isserial-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isSerial(): bool`})})},{depth:3,url:`#getmainrating-float`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMainRating(): ?float`})})},{depth:3,url:`#getcountriesstring-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getCountriesString(): string`})})},{depth:3,url:`#getgenresstring-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getGenresString(): string`})})},{depth:3,url:`#formatduration-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`formatDuration(): string`})})},{depth:3,url:`#formatdurationstring-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`formatDurationString(): string`})})},{depth:3,url:`#toarray-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray(): array`})})},{depth:2,url:`#примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`Примеры использования`})},{depth:3,url:`#создание-из-данных-api`,title:(0,n.jsx)(n.Fragment,{children:`Создание из данных API`})},{depth:3,url:`#работа-с-информацией-о-фильме`,title:(0,n.jsx)(n.Fragment,{children:`Работа с информацией о фильме`})},{depth:3,url:`#проверка-типа-контента`,title:(0,n.jsx)(n.Fragment,{children:`Проверка типа контента`})},{depth:2,url:`#связанные-классы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные классы`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Модель фильма из Kinopoisk API.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`../index`,children:`Главная`}),` → `,(0,n.jsx)(t.a,{href:`index`,children:`Модели`}),` → Film`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`🔗 Связанные классы:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../services/film-service`,children:`FilmService`}),` - Сервис для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./staff`,children:`Staff`}),` - Съемочная группа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./review`,children:`Review`}),` - Отзывы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./fact`,children:`Fact`}),` - Факты`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./image`,children:`Image`}),` - Изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./video`,children:`Video`}),` - Видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./award`,children:`Award`}),` - Награды`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./box-office`,children:`BoxOffice`}),` - Кассовые сборы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./country`,children:`Country`}),` - Страны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./genre`,children:`Genre`}),` - Жанры`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./episode`,children:`Episode`}),` - Эпизоды`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./season`,children:`Season`}),` - Сезоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./related-film`,children:`RelatedFilm`}),` - Связанные фильмы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/content-type`,children:`ContentType`}),` - Типы контента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/film-order`,children:`FilmOrder`}),` - Порядок сортировки фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/image-type`,children:`ImageType`}),` - Типы изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/review-order`,children:`ReviewOrder`}),` - Порядок сортировки отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/review-type`,children:`ReviewType`}),` - Типы отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/fact-type`,children:`FactType`}),` - Типы фактов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/video-site`,children:`VideoSite`}),` - Сайты видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/box-office-type`,children:`BoxOfficeType`}),` - Типы кассовых сборов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/distribution-type`,children:`DistributionType`}),` - Типы дистрибуции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../enums/month`,children:`Month`}),` - Месяцы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/api-exception`,children:`ApiException`}),` - Базовое исключение API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/resource-not-found-exception`,children:`ResourceNotFoundException`}),` - Ресурс не найден`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`../exceptions/kp-validation-exception`,children:`KpValidationException`}),` - Ошибка валидации`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Представляет полную информацию о фильме, полученную из Kinopoisk Unofficial API. Содержит все основные данные: названия, рейтинги, описания, технические характеристики и метаданные фильма.`}),`
`,(0,n.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Хранение полной информации о фильме в неизменяемом виде (readonly свойства)`}),`
`,(0,n.jsx)(t.li,{children:`Создание объекта из массива данных API`}),`
`,(0,n.jsx)(t.li,{children:`Удобные методы для получения отображаемого названия и основного рейтинга`}),`
`,(0,n.jsx)(t.li,{children:`Определение типа контента (фильм/сериал)`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.h3,{id:`основные-идентификаторы`,children:`Основные идентификаторы`}),`
`,(0,n.jsx)(t.h4,{id:`kinopoiskid`,children:(0,n.jsx)(t.code,{children:`$kinopoiskId`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int`})]}),`
`,(0,n.jsx)(t.p,{children:`Уникальный идентификатор фильма в Кинопоиске.`}),`
`,(0,n.jsx)(t.h4,{id:`kinopoiskhdid`,children:(0,n.jsx)(t.code,{children:`$kinopoiskHDId`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Идентификатор фильма в Кинопоиск HD (если доступен).`}),`
`,(0,n.jsx)(t.h4,{id:`imdbid`,children:(0,n.jsx)(t.code,{children:`$imdbId`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Идентификатор фильма в IMDb.`}),`
`,(0,n.jsx)(t.h3,{id:`названия`,children:`Названия`}),`
`,(0,n.jsx)(t.h4,{id:`nameru`,children:(0,n.jsx)(t.code,{children:`$nameRu`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Название фильма на русском языке.`}),`
`,(0,n.jsx)(t.h4,{id:`nameen`,children:(0,n.jsx)(t.code,{children:`$nameEn`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Название фильма на английском языке.`}),`
`,(0,n.jsx)(t.h4,{id:`nameoriginal`,children:(0,n.jsx)(t.code,{children:`$nameOriginal`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Оригинальное название фильма.`}),`
`,(0,n.jsx)(t.h3,{id:`изображения`,children:`Изображения`}),`
`,(0,n.jsx)(t.h4,{id:`posterurl`,children:(0,n.jsx)(t.code,{children:`$posterUrl`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(t.p,{children:`URL постера фильма в высоком разрешении.`}),`
`,(0,n.jsx)(t.h4,{id:`posterurlpreview`,children:(0,n.jsx)(t.code,{children:`$posterUrlPreview`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string`})]}),`
`,(0,n.jsx)(t.p,{children:`URL постера фильма в низком разрешении.`}),`
`,(0,n.jsx)(t.h4,{id:`coverurl`,children:(0,n.jsx)(t.code,{children:`$coverUrl`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`URL обложки фильма.`}),`
`,(0,n.jsx)(t.h4,{id:`logourl`,children:(0,n.jsx)(t.code,{children:`$logoUrl`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`URL логотипа фильма.`}),`
`,(0,n.jsx)(t.h3,{id:`рейтинги`,children:`Рейтинги`}),`
`,(0,n.jsx)(t.h4,{id:`ratingkinopoisk`,children:(0,n.jsx)(t.code,{children:`$ratingKinopoisk`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг Кинопоиска.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingkinopoiskvotecount`,children:(0,n.jsx)(t.code,{children:`$ratingKinopoiskVoteCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов на Кинопоиске.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingimdb`,children:(0,n.jsx)(t.code,{children:`$ratingImdb`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг IMDb.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingimdbvotecount`,children:(0,n.jsx)(t.code,{children:`$ratingImdbVoteCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов на IMDb.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingfilmcritics`,children:(0,n.jsx)(t.code,{children:`$ratingFilmCritics`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг кинокритиков.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingfilmcriticsvotecount`,children:(0,n.jsx)(t.code,{children:`$ratingFilmCriticsVoteCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов кинокритиков.`}),`
`,(0,n.jsx)(t.h4,{id:`ratinggoodreview`,children:(0,n.jsx)(t.code,{children:`$ratingGoodReview`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг хороших рецензий.`}),`
`,(0,n.jsx)(t.h4,{id:`ratinggoodreviewvotecount`,children:(0,n.jsx)(t.code,{children:`$ratingGoodReviewVoteCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов за хорошие рецензии.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingawait`,children:(0,n.jsx)(t.code,{children:`$ratingAwait`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг ожидания.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingawaitcount`,children:(0,n.jsx)(t.code,{children:`$ratingAwaitCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов ожидания.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingrfcritics`,children:(0,n.jsx)(t.code,{children:`$ratingRfCritics`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`float|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг российских кинокритиков.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingrfcriticsvotecount`,children:(0,n.jsx)(t.code,{children:`$ratingRfCriticsVoteCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество голосов российских кинокритиков.`}),`
`,(0,n.jsx)(t.h3,{id:`основная-информация`,children:`Основная информация`}),`
`,(0,n.jsx)(t.h4,{id:`year`,children:(0,n.jsx)(t.code,{children:`$year`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Год выпуска фильма.`}),`
`,(0,n.jsx)(t.h4,{id:`filmlength`,children:(0,n.jsx)(t.code,{children:`$filmLength`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Длительность фильма в минутах.`}),`
`,(0,n.jsx)(t.h4,{id:`startyear`,children:(0,n.jsx)(t.code,{children:`$startYear`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Год начала производства (для сериалов).`}),`
`,(0,n.jsx)(t.h4,{id:`endyear`,children:(0,n.jsx)(t.code,{children:`$endYear`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Год окончания производства (для сериалов).`}),`
`,(0,n.jsx)(t.h4,{id:`type`,children:(0,n.jsx)(t.code,{children:`$type`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`ContentType`})]}),`
`,(0,n.jsx)(t.p,{children:`Тип контента (FILM, SERIES, MINI_SERIES, TV_SHOW).`}),`
`,(0,n.jsx)(t.h4,{id:`productionstatus`,children:(0,n.jsx)(t.code,{children:`$productionStatus`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`ProductionStatus|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Статус производства фильма.`}),`
`,(0,n.jsx)(t.h3,{id:`описания`,children:`Описания`}),`
`,(0,n.jsx)(t.h4,{id:`slogan`,children:(0,n.jsx)(t.code,{children:`$slogan`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Слоган фильма.`}),`
`,(0,n.jsx)(t.h4,{id:`description`,children:(0,n.jsx)(t.code,{children:`$description`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Полное описание фильма.`}),`
`,(0,n.jsx)(t.h4,{id:`shortdescription`,children:(0,n.jsx)(t.code,{children:`$shortDescription`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Краткое описание фильма.`}),`
`,(0,n.jsx)(t.h4,{id:`editorannotation`,children:(0,n.jsx)(t.code,{children:`$editorAnnotation`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Редакторская аннотация.`}),`
`,(0,n.jsx)(t.h3,{id:`дополнительная-информация`,children:`Дополнительная информация`}),`
`,(0,n.jsx)(t.h4,{id:`weburl`,children:(0,n.jsx)(t.code,{children:`$webUrl`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`URL страницы фильма на Кинопоиске.`}),`
`,(0,n.jsx)(t.h4,{id:`reviewscount`,children:(0,n.jsx)(t.code,{children:`$reviewsCount`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`int|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Количество рецензий на фильм.`}),`
`,(0,n.jsx)(t.h4,{id:`isticketsavailable`,children:(0,n.jsx)(t.code,{children:`$isTicketsAvailable`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Доступны ли билеты в кинотеатрах.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingmpaa`,children:(0,n.jsx)(t.code,{children:`$ratingMpaa`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Рейтинг MPAA.`}),`
`,(0,n.jsx)(t.h4,{id:`ratingagelimits`,children:(0,n.jsx)(t.code,{children:`$ratingAgeLimits`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Возрастные ограничения.`}),`
`,(0,n.jsx)(t.h4,{id:`hasimax`,children:(0,n.jsx)(t.code,{children:`$hasImax`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Доступен ли в формате IMAX.`}),`
`,(0,n.jsx)(t.h4,{id:`has3d`,children:(0,n.jsx)(t.code,{children:`$has3D`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Доступен ли в формате 3D.`}),`
`,(0,n.jsx)(t.h4,{id:`lastsync`,children:(0,n.jsx)(t.code,{children:`$lastSync`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`string|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Время последней синхронизации данных.`}),`
`,(0,n.jsx)(t.h3,{id:`коллекции`,children:`Коллекции`}),`
`,(0,n.jsx)(t.h4,{id:`countries`,children:(0,n.jsx)(t.code,{children:`$countries`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`Country[]`})]}),`
`,(0,n.jsx)(t.p,{children:`Массив стран производства.`}),`
`,(0,n.jsx)(t.h4,{id:`genres`,children:(0,n.jsx)(t.code,{children:`$genres`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`Genre[]`})]}),`
`,(0,n.jsx)(t.p,{children:`Массив жанров фильма.`}),`
`,(0,n.jsx)(t.h3,{id:`флаги`,children:`Флаги`}),`
`,(0,n.jsx)(t.h4,{id:`serial`,children:(0,n.jsx)(t.code,{children:`$serial`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Является ли сериалом.`}),`
`,(0,n.jsx)(t.h4,{id:`shortfilm`,children:(0,n.jsx)(t.code,{children:`$shortFilm`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Является ли короткометражным фильмом.`}),`
`,(0,n.jsx)(t.h4,{id:`completed`,children:(0,n.jsx)(t.code,{children:`$completed`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`bool|null`})]}),`
`,(0,n.jsx)(t.p,{children:`Завершен ли (для сериалов).`}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct(...)`})}),`
`,(0,n.jsx)(t.p,{children:`Конструктор модели фильма.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры:`}),`
См. свойства выше для полного списка параметров.`]}),`
`,(0,n.jsx)(t.h3,{id:`fromarrayarray-data-self`,children:(0,n.jsx)(t.code,{children:`fromArray(array $data): self`})}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр фильма из массива данных API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array) - Массив данных от API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self`}),` - Новый экземпляр фильма`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData);`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`getdisplayname-string`,children:(0,n.jsx)(t.code,{children:`getDisplayName(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Получает отображаемое название фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Название на русском языке, если доступно, иначе на английском`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "Матрица" или "The Matrix"`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`isserial-bool`,children:(0,n.jsx)(t.code,{children:`isSerial(): bool`})}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, является ли фильм сериалом.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`bool`}),` - true, если это сериал`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isSerial`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это сериал"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`getmainrating-float`,children:(0,n.jsx)(t.code,{children:`getMainRating(): ?float`})}),`
`,(0,n.jsx)(t.p,{children:`Получает основной рейтинг фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`float|null`}),` - Рейтинг Кинопоиска, если доступен, иначе null`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$rating `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMainRating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// 8.7`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`getcountriesstring-string`,children:(0,n.jsx)(t.code,{children:`getCountriesString(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Получает строку со странами производства.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Строка с названиями стран через запятую`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getCountriesString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "США, Великобритания"`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`getgenresstring-string`,children:(0,n.jsx)(t.code,{children:`getGenresString(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Получает строку с жанрами фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Строка с названиями жанров через запятую`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getGenresString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "боевик, фантастика, триллер"`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`formatduration-string`,children:(0,n.jsx)(t.code,{children:`formatDuration(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Форматирует длительность фильма.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Отформатированная длительность (например, "02:16:00")`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`formatDuration`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "00:02:16"`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`formatdurationstring-string`,children:(0,n.jsx)(t.code,{children:`formatDurationString(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Форматирует длительность фильма в виде строки.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Отформатированная длительность с полными словами`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`formatDurationString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "2 часа 16 минут"`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`toarray-array`,children:(0,n.jsx)(t.code,{children:`toArray(): array`})}),`
`,(0,n.jsx)(t.p,{children:`Преобразует объект фильма в массив.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`array`}),` - Ассоциативный массив со всеми данными фильма`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,n.jsx)(t.h3,{id:`создание-из-данных-api`,children:`Создание из данных API`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Models\\Film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание из данных API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение отображаемого названия`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// "Матрица" или "The Matrix"`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Проверка типа контента`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isSerial`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это сериал"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение основного рейтинга`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$rating `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMainRating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// 8.7`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-информацией-о-фильме`,children:`Работа с информацией о фильме`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение основной информации`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Название: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Год: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`year `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Длительность: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`formatDuration`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Страны: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getCountriesString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Жанры: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getGenresString`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Проверка рейтингов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`ratingKinopoisk) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Рейтинг Кинопоиска: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`ratingKinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`ratingImdb) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Рейтинг IMDb: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`ratingImdb `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`проверка-типа-контента`,children:`Проверка типа контента`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`switch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`type) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    case`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ContentType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`FILM`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`:`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`        echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это фильм"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        break`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    case`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ContentType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`SERIES`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`:`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`        echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это сериал"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        break`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    case`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ContentType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`MINI_SERIES`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`:`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`        echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это мини-сериал"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        break`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    case`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ContentType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`TV_SHOW`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`:`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`        echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Это телешоу"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        break`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`связанные-классы`,children:`Связанные классы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Models\\FilmCollection`}),` - Коллекция фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\FilmService`}),` - Сервис для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Models\\Country`}),` - Модель страны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Models\\Genre`}),` - Модель жанра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\ContentType`}),` - Типы контента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\ProductionStatus`}),` - Статусы производства`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};