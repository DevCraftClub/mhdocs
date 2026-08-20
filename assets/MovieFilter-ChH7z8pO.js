import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MovieFilter`},i=new Date(1787213191e3),a=`

**Описание:** Класс для создания фильтров при поиске фильмов
Этот класс предоставляет методы для построения параметров фильтрации
при поиске фильмов через API Kinopoisk.dev

**Ссылка:** [https://kinopoiskdev.readme.io/reference/moviecontroller\\_findmanybyqueryv1\\_4](https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4)

## \`id()\` [#id]

**Описание:** Добавляет фильтр по ID фильма

**Параметры:**

* \`$id\` (int|array\\<int>): ID фильма или массив ID
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`addFilter()\` [#addfilter]

**Описание:** Добавляет произвольный фильтр

**Параметры:**

* \`$field\` (string): Поле для фильтрации
* \`$value\` (mixed): Значение фильтра
* \`$operator\` (string): Оператор сравнения

## \`externalId()\` [#externalid]

**Описание:** Добавляет фильтр по внешнему ID фильма

## \`name()\` [#name]

**Описание:** Добавляет фильтр по названию фильма

**Параметры:**

* \`$name\` (string): Название фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, regex)

## \`enName()\` [#enname]

**Описание:** Добавляет фильтр по английскому названию фильма

**Параметры:**

* \`$enName\` (string): Английское название фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, regex)

## \`alternativeName()\` [#alternativename]

**Описание:** Добавляет фильтр по альтернативному названию фильма

**Параметры:**

* \`$alternativeName\` (string): Альтернативное название фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, regex)

## \`names()\` [#names]

**Описание:** Добавляет фильтр по всем названиям фильма

**Параметры:**

* \`$names\` (string|array\\<string>): Название или массив названий
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, regex)

## \`description()\` [#description]

**Описание:** Добавляет фильтр по описанию фильма

**Параметры:**

* \`$description\` (string): Описание фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, regex)

## \`shortDescription()\` [#shortdescription]

**Описание:** Добавляет фильтр по краткому описанию фильма

**Параметры:**

* \`$shortDescription\` (string): Краткое описание фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, regex)

## \`slogan()\` [#slogan]

**Описание:** Добавляет фильтр по слогану фильма

**Параметры:**

* \`$slogan\` (string): Слоган фильма
* \`$operator\` (string): Оператор сравнения (eq, ne, regex)

## \`type()\` [#type]

**Описание:** Добавляет фильтр по типу фильма

**Параметры:**

* \`$type\` (string): Тип фильма (movie, tv-series, cartoon, anime, animated-series, tv-show)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`typeNumber()\` [#typenumber]

**Описание:** Добавляет фильтр по номеру типа фильма

**Параметры:**

* \`$typeNumber\` (int): Номер типа фильма (1-6)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`isSeries()\` [#isseries]

**Описание:** Добавляет фильтр по признаку сериала

**Параметры:**

* \`$isSeries\` (bool): Является ли фильм сериалом

## \`status()\` [#status]

**Описание:** Добавляет фильтр по статусу фильма

**Параметры:**

* \`$status\` (string): Статус фильма (filming, pre-production, completed, announced, post-production)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`year()\` [#year]

**Описание:** Добавляет фильтр по году выпуска

**Параметры:**

* \`$year\` (int): Год выпуска
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`yearRange()\` [#yearrange]

**Описание:** Добавляет фильтр по диапазону годов выпуска

**Параметры:**

* \`$fromYear\` (int): Начальный год
* \`$toYear\` (int): Конечный год

## \`releaseYears()\` [#releaseyears]

**Описание:** Добавляет фильтр по годам релиза

**Параметры:**

* \`$releaseYears\` (array\\<int>): Массив годов релиза

## \`rating()\` [#rating]

**Описание:** Добавляет фильтр по рейтингу

**Параметры:**

* \`$rating\` (float|array\\<float>): Рейтинг или массив с параметрами рейтинга
* \`$field\` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`ratingRange()\` [#ratingrange]

**Описание:** Добавляет фильтр по диапазону рейтинга

**Параметры:**

* \`$minRating\` (float): Минимальный рейтинг
* \`$maxRating\` (float): Максимальный рейтинг
* \`$field\` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)

## \`ratingMpaa()\` [#ratingmpaa]

**Описание:** Добавляет фильтр по рейтингу MPAA

**Параметры:**

* \`$ratingMpaa\` (string): Рейтинг MPAA (g, pg, pg-13, r, nc-17)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`ageRating()\` [#agerating]

**Описание:** Добавляет фильтр по возрастному рейтингу

**Параметры:**

* \`$ageRating\` (int): Возрастной рейтинг
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`votes()\` [#votes]

**Описание:** Добавляет фильтр по голосам

**Параметры:**

* \`$votes\` (int|array\\<int>): Количество голосов или массив с параметрами голосов
* \`$field\` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`votesRange()\` [#votesrange]

**Описание:** Добавляет фильтр по диапазону голосов

**Параметры:**

* \`$minVotes\` (int): Минимальное количество голосов
* \`$maxVotes\` (int): Максимальное количество голосов
* \`$field\` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)

## \`seasonsInfo()\` [#seasonsinfo]

**Описание:** Добавляет фильтр по информации о сезонах

## \`budget()\` [#budget]

**Описание:** Добавляет фильтр по бюджету

## \`audience()\` [#audience]

**Описание:** Добавляет фильтр по аудитории

## \`movieLength()\` [#movielength]

**Описание:** Добавляет фильтр по длительности фильма

**Параметры:**

* \`$movieLength\` (int): Длительность фильма в минутах
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`seriesLength()\` [#serieslength]

**Описание:** Добавляет фильтр по длительности серии

**Параметры:**

* \`$seriesLength\` (int): Длительность серии в минутах
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`totalSeriesLength()\` [#totalserieslength]

**Описание:** Добавляет фильтр по общей длительности сериала

**Параметры:**

* \`$totalSeriesLength\` (int): Общая длительность сериала в минутах
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`genres()\` [#genres]

**Описание:** Добавляет фильтр по жанрам

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`includeGenres()\` [#includegenres]

**Описание:** Добавляет фильтр для включения жанров (оператор +)

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров для включения

## \`excludeGenres()\` [#excludegenres]

**Описание:** Добавляет фильтр для исключения жанров (оператор !)

**Параметры:**

* \`$genres\` (string|array\\<string>): Жанр или массив жанров для исключения

## \`countries()\` [#countries]

**Описание:** Добавляет фильтр по странам

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin)

## \`includeCountries()\` [#includecountries]

**Описание:** Добавляет фильтр для включения стран (оператор +)

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран для включения

## \`excludeCountries()\` [#excludecountries]

**Описание:** Добавляет фильтр для исключения стран (оператор !)

**Параметры:**

* \`$countries\` (string|array\\<string>): Страна или массив стран для исключения

## \`poster()\` [#poster]

**Описание:** Добавляет фильтр по постеру

## \`backdrop()\` [#backdrop]

**Описание:** Добавляет фильтр по фоновому изображению

## \`logo()\` [#logo]

**Описание:** Добавляет фильтр по логотипу

## \`ticketsOnSale()\` [#ticketsonsale]

**Описание:** Добавляет фильтр по наличию билетов в продаже

**Параметры:**

* \`$ticketsOnSale\` (bool): Наличие билетов в продаже

## \`videos()\` [#videos]

**Описание:** Добавляет фильтр по видео

## \`networks()\` [#networks]

**Описание:** Добавляет фильтр по сетям

## \`persons()\` [#persons]

**Описание:** Добавляет фильтр по участникам

## \`facts()\` [#facts]

**Описание:** Добавляет фильтр по фактам

## \`fees()\` [#fees]

**Описание:** Добавляет фильтр по сборам

## \`premiere()\` [#premiere]

**Описание:** Добавляет фильтр по премьере

## \`premiereRange()\` [#premiererange]

**Описание:** Добавляет фильтр по диапазону дат премьеры

**Параметры:**

* \`$fromDate\` (string): Начальная дата в формате dd.mm.yyyy
* \`$toDate\` (string): Конечная дата в формате dd.mm.yyyy
* \`$country\` (string): Страна премьеры (russia, world, usa, ...)

## \`similarMovies()\` [#similarmovies]

**Описание:** Добавляет фильтр по похожим фильмам

## \`sequelsAndPrequels()\` [#sequelsandprequels]

**Описание:** Добавляет фильтр по сиквелам и приквелам

## \`watchability()\` [#watchability]

**Описание:** Добавляет фильтр по доступности просмотра

## \`lists()\` [#lists]

**Описание:** Добавляет фильтр по спискам

## \`top10()\` [#top10]

**Описание:** Добавляет фильтр по топ-10

**Параметры:**

* \`$top10\` (int): Позиция в топ-10
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`top250()\` [#top250]

**Описание:** Добавляет фильтр по топ-250

**Параметры:**

* \`$top250\` (int): Позиция в топ-250
* \`$operator\` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)

## \`updatedAt()\` [#updatedat]

**Описание:** Добавляет фильтр по дате обновления

**Параметры:**

* \`$updatedAt\` (string): Дата обновления
* \`$operator\` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)

## \`createdAt()\` [#createdat]

**Описание:** Добавляет фильтр по дате создания

**Параметры:**

* \`$createdAt\` (string): Дата создания
* \`$operator\` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)

## \`getFilters()\` [#getfilters]

**Описание:** Возвращает массив фильтров

**Возвращает:** \`array<string, mixed>\`

## \`notNullFields()\` [#notnullfields]

**Описание:** Исключение записей с пустыми значениями в указанных полях

**Параметры:**

* \`$fields\` (array\\<string>): Массив названий полей

## \`reset()\` [#reset]

**Описание:** Сбрасывает все фильтры

## \`setMaxLimit()\` [#setmaxlimit]

**Описание:** Устанавливает лимит количества элементов в результате запроса
Метод устанавливает ограничение на количество возвращаемых элементов
в текущем запросе. Используется для пагинации и контроля объема данных.
Добавляет фильтр 'limit' в массив фильтров запроса.

**Параметры:**

* \`$int\` (int): Максимальное количество элементов для возврата (должно быть положительным числом)

**Возвращает:** \`self\` Возвращает текущий экземпляр объекта для поддержки цепочки вызовов (fluent interface)

## \`setPageNumber()\` [#setpagenumber]

**Описание:** Устанавливает номер страницы для пагинации результатов
Задает номер страницы для получения определенного набора результатов
при выполнении запросов с пагинацией. Страницы нумеруются начиная с 1.
Значение сохраняется в массиве фильтров под ключом 'page' для
последующего использования в API-запросах.

**С версии:** 1.0.0

**Параметры:**

* \`$int\` (int): Номер страницы для получения результатов (должен быть больше 0)

**Возвращает:** \`self\` Возвращает текущий экземпляр для цепочного вызова методов

**Пример:**

\`\`\`php
$filter = new MovieSearchFilter();
$filter->page(2)->limit(20); // Получить вторую страницу с 20 результатами
// Использование в цепочке методов
$results = $movieRequests->searchMovies(
$filter->year(2023)->page(3)->limit(50)
);
\`\`\`

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
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для создания фильтров при поиске фильмов
Этот класс предоставляет методы для построения параметров фильтрации
при поиске фильмов через API Kinopoisk.dev`},{heading:void 0,content:`**Ссылка:** https\\://kinopoiskdev.readme.io/reference/moviecontroller\\_findmanybyqueryv1\\_4`},{heading:`id`,content:`**Описание:** Добавляет фильтр по ID фильма`},{heading:`id`,content:`**Параметры:**`},{heading:`id`,content:"`$id` (int|array\\<int>): ID фильма или массив ID"},{heading:`id`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`addfilter`,content:`**Описание:** Добавляет произвольный фильтр`},{heading:`addfilter`,content:`**Параметры:**`},{heading:`addfilter`,content:"`$field` (string): Поле для фильтрации"},{heading:`addfilter`,content:"`$value` (mixed): Значение фильтра"},{heading:`addfilter`,content:"`$operator` (string): Оператор сравнения"},{heading:`externalid`,content:`**Описание:** Добавляет фильтр по внешнему ID фильма`},{heading:`name`,content:`**Описание:** Добавляет фильтр по названию фильма`},{heading:`name`,content:`**Параметры:**`},{heading:`name`,content:"`$name` (string): Название фильма"},{heading:`name`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, regex)"},{heading:`enname`,content:`**Описание:** Добавляет фильтр по английскому названию фильма`},{heading:`enname`,content:`**Параметры:**`},{heading:`enname`,content:"`$enName` (string): Английское название фильма"},{heading:`enname`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, regex)"},{heading:`alternativename`,content:`**Описание:** Добавляет фильтр по альтернативному названию фильма`},{heading:`alternativename`,content:`**Параметры:**`},{heading:`alternativename`,content:"`$alternativeName` (string): Альтернативное название фильма"},{heading:`alternativename`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, regex)"},{heading:`names`,content:`**Описание:** Добавляет фильтр по всем названиям фильма`},{heading:`names`,content:`**Параметры:**`},{heading:`names`,content:"`$names` (string|array\\<string>): Название или массив названий"},{heading:`names`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, regex)"},{heading:`description`,content:`**Описание:** Добавляет фильтр по описанию фильма`},{heading:`description`,content:`**Параметры:**`},{heading:`description`,content:"`$description` (string): Описание фильма"},{heading:`description`,content:"`$operator` (string): Оператор сравнения (eq, ne, regex)"},{heading:`shortdescription`,content:`**Описание:** Добавляет фильтр по краткому описанию фильма`},{heading:`shortdescription`,content:`**Параметры:**`},{heading:`shortdescription`,content:"`$shortDescription` (string): Краткое описание фильма"},{heading:`shortdescription`,content:"`$operator` (string): Оператор сравнения (eq, ne, regex)"},{heading:`slogan`,content:`**Описание:** Добавляет фильтр по слогану фильма`},{heading:`slogan`,content:`**Параметры:**`},{heading:`slogan`,content:"`$slogan` (string): Слоган фильма"},{heading:`slogan`,content:"`$operator` (string): Оператор сравнения (eq, ne, regex)"},{heading:`type`,content:`**Описание:** Добавляет фильтр по типу фильма`},{heading:`type`,content:`**Параметры:**`},{heading:`type`,content:"`$type` (string): Тип фильма (movie, tv-series, cartoon, anime, animated-series, tv-show)"},{heading:`type`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`typenumber`,content:`**Описание:** Добавляет фильтр по номеру типа фильма`},{heading:`typenumber`,content:`**Параметры:**`},{heading:`typenumber`,content:"`$typeNumber` (int): Номер типа фильма (1-6)"},{heading:`typenumber`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`isseries`,content:`**Описание:** Добавляет фильтр по признаку сериала`},{heading:`isseries`,content:`**Параметры:**`},{heading:`isseries`,content:"`$isSeries` (bool): Является ли фильм сериалом"},{heading:`status`,content:`**Описание:** Добавляет фильтр по статусу фильма`},{heading:`status`,content:`**Параметры:**`},{heading:`status`,content:"`$status` (string): Статус фильма (filming, pre-production, completed, announced, post-production)"},{heading:`status`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`year`,content:`**Описание:** Добавляет фильтр по году выпуска`},{heading:`year`,content:`**Параметры:**`},{heading:`year`,content:"`$year` (int): Год выпуска"},{heading:`year`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`yearrange`,content:`**Описание:** Добавляет фильтр по диапазону годов выпуска`},{heading:`yearrange`,content:`**Параметры:**`},{heading:`yearrange`,content:"`$fromYear` (int): Начальный год"},{heading:`yearrange`,content:"`$toYear` (int): Конечный год"},{heading:`releaseyears`,content:`**Описание:** Добавляет фильтр по годам релиза`},{heading:`releaseyears`,content:`**Параметры:**`},{heading:`releaseyears`,content:"`$releaseYears` (array\\<int>): Массив годов релиза"},{heading:`rating`,content:`**Описание:** Добавляет фильтр по рейтингу`},{heading:`rating`,content:`**Параметры:**`},{heading:`rating`,content:"`$rating` (float|array\\<float>): Рейтинг или массив с параметрами рейтинга"},{heading:`rating`,content:"`$field` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`rating`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`ratingrange`,content:`**Описание:** Добавляет фильтр по диапазону рейтинга`},{heading:`ratingrange`,content:`**Параметры:**`},{heading:`ratingrange`,content:"`$minRating` (float): Минимальный рейтинг"},{heading:`ratingrange`,content:"`$maxRating` (float): Максимальный рейтинг"},{heading:`ratingrange`,content:"`$field` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`ratingmpaa`,content:`**Описание:** Добавляет фильтр по рейтингу MPAA`},{heading:`ratingmpaa`,content:`**Параметры:**`},{heading:`ratingmpaa`,content:"`$ratingMpaa` (string): Рейтинг MPAA (g, pg, pg-13, r, nc-17)"},{heading:`ratingmpaa`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`agerating`,content:`**Описание:** Добавляет фильтр по возрастному рейтингу`},{heading:`agerating`,content:`**Параметры:**`},{heading:`agerating`,content:"`$ageRating` (int): Возрастной рейтинг"},{heading:`agerating`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`votes`,content:`**Описание:** Добавляет фильтр по голосам`},{heading:`votes`,content:`**Параметры:**`},{heading:`votes`,content:"`$votes` (int|array\\<int>): Количество голосов или массив с параметрами голосов"},{heading:`votes`,content:"`$field` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`votes`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`votesrange`,content:`**Описание:** Добавляет фильтр по диапазону голосов`},{heading:`votesrange`,content:`**Параметры:**`},{heading:`votesrange`,content:"`$minVotes` (int): Минимальное количество голосов"},{heading:`votesrange`,content:"`$maxVotes` (int): Максимальное количество голосов"},{heading:`votesrange`,content:"`$field` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)"},{heading:`seasonsinfo`,content:`**Описание:** Добавляет фильтр по информации о сезонах`},{heading:`budget`,content:`**Описание:** Добавляет фильтр по бюджету`},{heading:`audience`,content:`**Описание:** Добавляет фильтр по аудитории`},{heading:`movielength`,content:`**Описание:** Добавляет фильтр по длительности фильма`},{heading:`movielength`,content:`**Параметры:**`},{heading:`movielength`,content:"`$movieLength` (int): Длительность фильма в минутах"},{heading:`movielength`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`serieslength`,content:`**Описание:** Добавляет фильтр по длительности серии`},{heading:`serieslength`,content:`**Параметры:**`},{heading:`serieslength`,content:"`$seriesLength` (int): Длительность серии в минутах"},{heading:`serieslength`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`totalserieslength`,content:`**Описание:** Добавляет фильтр по общей длительности сериала`},{heading:`totalserieslength`,content:`**Параметры:**`},{heading:`totalserieslength`,content:"`$totalSeriesLength` (int): Общая длительность сериала в минутах"},{heading:`totalserieslength`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`genres`,content:`**Описание:** Добавляет фильтр по жанрам`},{heading:`genres`,content:`**Параметры:**`},{heading:`genres`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров"},{heading:`genres`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`includegenres`,content:`**Описание:** Добавляет фильтр для включения жанров (оператор +)`},{heading:`includegenres`,content:`**Параметры:**`},{heading:`includegenres`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров для включения"},{heading:`excludegenres`,content:`**Описание:** Добавляет фильтр для исключения жанров (оператор !)`},{heading:`excludegenres`,content:`**Параметры:**`},{heading:`excludegenres`,content:"`$genres` (string|array\\<string>): Жанр или массив жанров для исключения"},{heading:`countries`,content:`**Описание:** Добавляет фильтр по странам`},{heading:`countries`,content:`**Параметры:**`},{heading:`countries`,content:"`$countries` (string|array\\<string>): Страна или массив стран"},{heading:`countries`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin)"},{heading:`includecountries`,content:`**Описание:** Добавляет фильтр для включения стран (оператор +)`},{heading:`includecountries`,content:`**Параметры:**`},{heading:`includecountries`,content:"`$countries` (string|array\\<string>): Страна или массив стран для включения"},{heading:`excludecountries`,content:`**Описание:** Добавляет фильтр для исключения стран (оператор !)`},{heading:`excludecountries`,content:`**Параметры:**`},{heading:`excludecountries`,content:"`$countries` (string|array\\<string>): Страна или массив стран для исключения"},{heading:`poster`,content:`**Описание:** Добавляет фильтр по постеру`},{heading:`backdrop`,content:`**Описание:** Добавляет фильтр по фоновому изображению`},{heading:`logo`,content:`**Описание:** Добавляет фильтр по логотипу`},{heading:`ticketsonsale`,content:`**Описание:** Добавляет фильтр по наличию билетов в продаже`},{heading:`ticketsonsale`,content:`**Параметры:**`},{heading:`ticketsonsale`,content:"`$ticketsOnSale` (bool): Наличие билетов в продаже"},{heading:`videos`,content:`**Описание:** Добавляет фильтр по видео`},{heading:`networks`,content:`**Описание:** Добавляет фильтр по сетям`},{heading:`persons`,content:`**Описание:** Добавляет фильтр по участникам`},{heading:`facts`,content:`**Описание:** Добавляет фильтр по фактам`},{heading:`fees`,content:`**Описание:** Добавляет фильтр по сборам`},{heading:`premiere`,content:`**Описание:** Добавляет фильтр по премьере`},{heading:`premiererange`,content:`**Описание:** Добавляет фильтр по диапазону дат премьеры`},{heading:`premiererange`,content:`**Параметры:**`},{heading:`premiererange`,content:"`$fromDate` (string): Начальная дата в формате dd.mm.yyyy"},{heading:`premiererange`,content:"`$toDate` (string): Конечная дата в формате dd.mm.yyyy"},{heading:`premiererange`,content:"`$country` (string): Страна премьеры (russia, world, usa, ...)"},{heading:`similarmovies`,content:`**Описание:** Добавляет фильтр по похожим фильмам`},{heading:`sequelsandprequels`,content:`**Описание:** Добавляет фильтр по сиквелам и приквелам`},{heading:`watchability`,content:`**Описание:** Добавляет фильтр по доступности просмотра`},{heading:`lists`,content:`**Описание:** Добавляет фильтр по спискам`},{heading:`top10`,content:`**Описание:** Добавляет фильтр по топ-10`},{heading:`top10`,content:`**Параметры:**`},{heading:`top10`,content:"`$top10` (int): Позиция в топ-10"},{heading:`top10`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`top250`,content:`**Описание:** Добавляет фильтр по топ-250`},{heading:`top250`,content:`**Параметры:**`},{heading:`top250`,content:"`$top250` (int): Позиция в топ-250"},{heading:`top250`,content:"`$operator` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)"},{heading:`updatedat`,content:`**Описание:** Добавляет фильтр по дате обновления`},{heading:`updatedat`,content:`**Параметры:**`},{heading:`updatedat`,content:"`$updatedAt` (string): Дата обновления"},{heading:`updatedat`,content:"`$operator` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)"},{heading:`createdat`,content:`**Описание:** Добавляет фильтр по дате создания`},{heading:`createdat`,content:`**Параметры:**`},{heading:`createdat`,content:"`$createdAt` (string): Дата создания"},{heading:`createdat`,content:"`$operator` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)"},{heading:`getfilters`,content:`**Описание:** Возвращает массив фильтров`},{heading:`getfilters`,content:"**Возвращает:** `array<string, mixed>`"},{heading:`notnullfields`,content:`**Описание:** Исключение записей с пустыми значениями в указанных полях`},{heading:`notnullfields`,content:`**Параметры:**`},{heading:`notnullfields`,content:"`$fields` (array\\<string>): Массив названий полей"},{heading:`reset`,content:`**Описание:** Сбрасывает все фильтры`},{heading:`setmaxlimit`,content:`**Описание:** Устанавливает лимит количества элементов в результате запроса
Метод устанавливает ограничение на количество возвращаемых элементов
в текущем запросе. Используется для пагинации и контроля объема данных.
Добавляет фильтр 'limit' в массив фильтров запроса.`},{heading:`setmaxlimit`,content:`**Параметры:**`},{heading:`setmaxlimit`,content:"`$int` (int): Максимальное количество элементов для возврата (должно быть положительным числом)"},{heading:`setmaxlimit`,content:"**Возвращает:** `self` Возвращает текущий экземпляр объекта для поддержки цепочки вызовов (fluent interface)"},{heading:`setpagenumber`,content:`**Описание:** Устанавливает номер страницы для пагинации результатов
Задает номер страницы для получения определенного набора результатов
при выполнении запросов с пагинацией. Страницы нумеруются начиная с 1.
Значение сохраняется в массиве фильтров под ключом 'page' для
последующего использования в API-запросах.`},{heading:`setpagenumber`,content:`**С версии:** 1.0.0`},{heading:`setpagenumber`,content:`**Параметры:**`},{heading:`setpagenumber`,content:"`$int` (int): Номер страницы для получения результатов (должен быть больше 0)"},{heading:`setpagenumber`,content:"**Возвращает:** `self` Возвращает текущий экземпляр для цепочного вызова методов"},{heading:`setpagenumber`,content:`**Пример:**`},{heading:`removesortbyfield`,content:`**Описание:** Удаляет сортировку по указанному полю`},{heading:`removesortbyfield`,content:`**Параметры:**`},{heading:`removesortbyfield`,content:"`$field` (SortField): Поле для удаления из сортировки"},{heading:`togglesort`,content:`**Описание:** Переключает направление сортировки для указанного поля
Если сортировка по полю существует, меняет направление на противоположное.
Если сортировки нет, добавляет с направлением по умолчанию.`},{heading:`togglesort`,content:`**Параметры:**`},{heading:`togglesort`,content:"`$field` (SortField): Поле для переключения сортировки"},{heading:`sortby`,content:`**Описание:** Добавляет сортировку по указанному полю`},{heading:`sortby`,content:`**Параметры:**`},{heading:`sortby`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortby`,content:"`$direction` (SortDirection|null): Направление сортировки (по умолчанию используется рекомендуемое)"},{heading:`addsortcriteria`,content:`**Описание:** Добавляет критерий сортировки
Добавляет новый критерий сортировки к текущему набору.
Если критерий для указанного поля уже существует, он будет заменен.`},{heading:`addsortcriteria`,content:`**Параметры:**`},{heading:`addsortcriteria`,content:"`$criteria` (SortCriteria): Критерий сортировки"},{heading:`hassortby`,content:`**Описание:** Проверяет, установлена ли сортировка по указанному полю`},{heading:`hassortby`,content:`**Параметры:**`},{heading:`hassortby`,content:"`$field` (SortField): Поле для проверки"},{heading:`hassortby`,content:"**Возвращает:** `bool true,` если сортировка по полю установлена, false в противном случае"},{heading:`getsortdirection`,content:`**Описание:** Возвращает направление сортировки для указанного поля`},{heading:`getsortdirection`,content:`**Параметры:**`},{heading:`getsortdirection`,content:"`$field` (SortField): Поле для получения направления"},{heading:`getsortdirection`,content:"**Возвращает:** `SortDirection|null` Направление сортировки или null, если сортировка не установлена"},{heading:`getsortcriteria`,content:`**Описание:** Возвращает все критерии сортировки`},{heading:`getsortcriteria`,content:"**Возвращает:** `SortCriteria[]` Массив критериев сортировки"},{heading:`setsortcriteria`,content:`**Описание:** Устанавливает множественные критерии сортировки
Заменяет текущие критерии сортировки новым набором.`},{heading:`setsortcriteria`,content:`**Параметры:**`},{heading:`setsortcriteria`,content:"`$criteria` (SortCriteria\\[]): Массив критериев сортировки"},{heading:`clearsort`,content:`**Описание:** Очищает все критерии сортировки`},{heading:`addmultiplesort`,content:`**Описание:** Добавляет множественные критерии сортировки из массива строк`},{heading:`addmultiplesort`,content:`**Параметры:**`},{heading:`addmultiplesort`,content:'`$sorts` (array\\<string|SortCriteria>): Массив строк в формате "field:direction" или просто "field"'},{heading:`addmultiplesort`,content:`**Пример:**`},{heading:`getsortdata`,content:`**Описание:** Преобразует критерии сортировки в параметры для API
Формирует строку сортировки в формате, ожидаемом API Kinopoisk.dev.
Множественные критерии объединяются запятыми.`},{heading:`getsortdata`,content:"**Возвращает:** `array|null` Массив с данными о критериях сортировки или null, если критерии не установлены"},{heading:`getsortcount`,content:`**Описание:** Возвращает количество установленных критериев сортировки`},{heading:`getsortcount`,content:"**Возвращает:** `int` Количество критериев сортировки"},{heading:`hasanysorting`,content:`**Описание:** Проверяет, установлены ли какие-либо критерии сортировки`},{heading:`hasanysorting`,content:"**Возвращает:** `bool true,` если есть хотя бы один критерий сортировки, false в противном случае"},{heading:`getfirstsortcriteria`,content:`**Описание:** Возвращает первый критерий сортировки`},{heading:`getfirstsortcriteria`,content:"**Возвращает:** `SortCriteria|null` Первый критерий или null, если критерии отсутствуют"},{heading:`getlastsortcriteria`,content:`**Описание:** Возвращает последний критерий сортировки`},{heading:`getlastsortcriteria`,content:"**Возвращает:** `SortCriteria|null` Последний критерий или null, если критерии отсутствуют"},{heading:`sortbyimdbrating`,content:`**Описание:** Сортировка по рейтингу IMDB (по убыванию)`},{heading:`sortbydesc`,content:`**Описание:** Добавляет сортировку по убыванию`},{heading:`sortbydesc`,content:`**Параметры:**`},{heading:`sortbydesc`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortbyyearoldfirst`,content:`**Описание:** Сортировка по году выпуска (по возрастанию - сначала старые)`},{heading:`sortbyasc`,content:`**Описание:** Добавляет сортировку по возрастанию`},{heading:`sortbyasc`,content:`**Параметры:**`},{heading:`sortbyasc`,content:"`$field` (SortField): Поле для сортировки"},{heading:`sortbyname`,content:`**Описание:** Сортировка по названию (по алфавиту)`},{heading:`sortbypopularity`,content:`**Описание:** Сортировка по популярности (количество голосов Кинопоиска)`},{heading:`sortbycreated`,content:`**Описание:** Сортировка по дате создания записи (сначала новые)`},{heading:`sortbyupdated`,content:`**Описание:** Сортировка по дате обновления записи (сначала обновленные)`},{heading:`sortbybest`,content:`**Описание:** Комбинированная сортировка по рейтингу и году
Сначала по рейтингу Кинопоиска (по убыванию), затем по году (по убыванию).`},{heading:`sortbyyear`,content:`**Описание:** Сортировка по году выпуска (по убыванию - сначала новые)`},{heading:`sortbykinopoiskrating`,content:`**Описание:** Сортировка по рейтингу Кинопоиска (по убыванию)`},{heading:`exportsortcriteria`,content:`**Описание:** Экспорт критериев сортировки в массив для сериализации`},{heading:`exportsortcriteria`,content:"**Возвращает:** `array<array<string, string>>` Массив с данными о критериях сортировки"},{heading:`importsortcriteria`,content:`**Описание:** Импорт критериев сортировки из массива`}],headings:[{id:`id`,content:"`id()`"},{id:`addfilter`,content:"`addFilter()`"},{id:`externalid`,content:"`externalId()`"},{id:`name`,content:"`name()`"},{id:`enname`,content:"`enName()`"},{id:`alternativename`,content:"`alternativeName()`"},{id:`names`,content:"`names()`"},{id:`description`,content:"`description()`"},{id:`shortdescription`,content:"`shortDescription()`"},{id:`slogan`,content:"`slogan()`"},{id:`type`,content:"`type()`"},{id:`typenumber`,content:"`typeNumber()`"},{id:`isseries`,content:"`isSeries()`"},{id:`status`,content:"`status()`"},{id:`year`,content:"`year()`"},{id:`yearrange`,content:"`yearRange()`"},{id:`releaseyears`,content:"`releaseYears()`"},{id:`rating`,content:"`rating()`"},{id:`ratingrange`,content:"`ratingRange()`"},{id:`ratingmpaa`,content:"`ratingMpaa()`"},{id:`agerating`,content:"`ageRating()`"},{id:`votes`,content:"`votes()`"},{id:`votesrange`,content:"`votesRange()`"},{id:`seasonsinfo`,content:"`seasonsInfo()`"},{id:`budget`,content:"`budget()`"},{id:`audience`,content:"`audience()`"},{id:`movielength`,content:"`movieLength()`"},{id:`serieslength`,content:"`seriesLength()`"},{id:`totalserieslength`,content:"`totalSeriesLength()`"},{id:`genres`,content:"`genres()`"},{id:`includegenres`,content:"`includeGenres()`"},{id:`excludegenres`,content:"`excludeGenres()`"},{id:`countries`,content:"`countries()`"},{id:`includecountries`,content:"`includeCountries()`"},{id:`excludecountries`,content:"`excludeCountries()`"},{id:`poster`,content:"`poster()`"},{id:`backdrop`,content:"`backdrop()`"},{id:`logo`,content:"`logo()`"},{id:`ticketsonsale`,content:"`ticketsOnSale()`"},{id:`videos`,content:"`videos()`"},{id:`networks`,content:"`networks()`"},{id:`persons`,content:"`persons()`"},{id:`facts`,content:"`facts()`"},{id:`fees`,content:"`fees()`"},{id:`premiere`,content:"`premiere()`"},{id:`premiererange`,content:"`premiereRange()`"},{id:`similarmovies`,content:"`similarMovies()`"},{id:`sequelsandprequels`,content:"`sequelsAndPrequels()`"},{id:`watchability`,content:"`watchability()`"},{id:`lists`,content:"`lists()`"},{id:`top10`,content:"`top10()`"},{id:`top250`,content:"`top250()`"},{id:`updatedat`,content:"`updatedAt()`"},{id:`createdat`,content:"`createdAt()`"},{id:`getfilters`,content:"`getFilters()`"},{id:`notnullfields`,content:"`notNullFields()`"},{id:`reset`,content:"`reset()`"},{id:`setmaxlimit`,content:"`setMaxLimit()`"},{id:`setpagenumber`,content:"`setPageNumber()`"},{id:`removesortbyfield`,content:"`removeSortByField()`"},{id:`togglesort`,content:"`toggleSort()`"},{id:`sortby`,content:"`sortBy()`"},{id:`addsortcriteria`,content:"`addSortCriteria()`"},{id:`hassortby`,content:"`hasSortBy()`"},{id:`getsortdirection`,content:"`getSortDirection()`"},{id:`getsortcriteria`,content:"`getSortCriteria()`"},{id:`setsortcriteria`,content:"`setSortCriteria()`"},{id:`clearsort`,content:"`clearSort()`"},{id:`addmultiplesort`,content:"`addMultipleSort()`"},{id:`getsortdata`,content:"`getSortData()`"},{id:`getsortcount`,content:"`getSortCount()`"},{id:`hasanysorting`,content:"`hasAnySorting()`"},{id:`getfirstsortcriteria`,content:"`getFirstSortCriteria()`"},{id:`getlastsortcriteria`,content:"`getLastSortCriteria()`"},{id:`sortbyimdbrating`,content:"`sortByImdbRating()`"},{id:`sortbydesc`,content:"`sortByDesc()`"},{id:`sortbyyearoldfirst`,content:"`sortByYearOldFirst()`"},{id:`sortbyasc`,content:"`sortByAsc()`"},{id:`sortbyname`,content:"`sortByName()`"},{id:`sortbypopularity`,content:"`sortByPopularity()`"},{id:`sortbycreated`,content:"`sortByCreated()`"},{id:`sortbyupdated`,content:"`sortByUpdated()`"},{id:`sortbybest`,content:"`sortByBest()`"},{id:`sortbyyear`,content:"`sortByYear()`"},{id:`sortbykinopoiskrating`,content:"`sortByKinopoiskRating()`"},{id:`exportsortcriteria`,content:"`exportSortCriteria()`"},{id:`importsortcriteria`,content:"`importSortCriteria()`"}]},s=[{depth:2,url:`#id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`id()`})})},{depth:2,url:`#addfilter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addFilter()`})})},{depth:2,url:`#externalid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`externalId()`})})},{depth:2,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`name()`})})},{depth:2,url:`#enname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`enName()`})})},{depth:2,url:`#alternativename`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`alternativeName()`})})},{depth:2,url:`#names`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`names()`})})},{depth:2,url:`#description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`description()`})})},{depth:2,url:`#shortdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`shortDescription()`})})},{depth:2,url:`#slogan`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`slogan()`})})},{depth:2,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`type()`})})},{depth:2,url:`#typenumber`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`typeNumber()`})})},{depth:2,url:`#isseries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isSeries()`})})},{depth:2,url:`#status`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`status()`})})},{depth:2,url:`#year`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`year()`})})},{depth:2,url:`#yearrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`yearRange()`})})},{depth:2,url:`#releaseyears`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`releaseYears()`})})},{depth:2,url:`#rating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`rating()`})})},{depth:2,url:`#ratingrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ratingRange()`})})},{depth:2,url:`#ratingmpaa`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ratingMpaa()`})})},{depth:2,url:`#agerating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ageRating()`})})},{depth:2,url:`#votes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`votes()`})})},{depth:2,url:`#votesrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`votesRange()`})})},{depth:2,url:`#seasonsinfo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seasonsInfo()`})})},{depth:2,url:`#budget`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`budget()`})})},{depth:2,url:`#audience`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`audience()`})})},{depth:2,url:`#movielength`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`movieLength()`})})},{depth:2,url:`#serieslength`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`seriesLength()`})})},{depth:2,url:`#totalserieslength`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`totalSeriesLength()`})})},{depth:2,url:`#genres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`genres()`})})},{depth:2,url:`#includegenres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`includeGenres()`})})},{depth:2,url:`#excludegenres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`excludeGenres()`})})},{depth:2,url:`#countries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`countries()`})})},{depth:2,url:`#includecountries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`includeCountries()`})})},{depth:2,url:`#excludecountries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`excludeCountries()`})})},{depth:2,url:`#poster`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`poster()`})})},{depth:2,url:`#backdrop`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`backdrop()`})})},{depth:2,url:`#logo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`logo()`})})},{depth:2,url:`#ticketsonsale`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ticketsOnSale()`})})},{depth:2,url:`#videos`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`videos()`})})},{depth:2,url:`#networks`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`networks()`})})},{depth:2,url:`#persons`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`persons()`})})},{depth:2,url:`#facts`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`facts()`})})},{depth:2,url:`#fees`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fees()`})})},{depth:2,url:`#premiere`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`premiere()`})})},{depth:2,url:`#premiererange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`premiereRange()`})})},{depth:2,url:`#similarmovies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`similarMovies()`})})},{depth:2,url:`#sequelsandprequels`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sequelsAndPrequels()`})})},{depth:2,url:`#watchability`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`watchability()`})})},{depth:2,url:`#lists`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`lists()`})})},{depth:2,url:`#top10`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`top10()`})})},{depth:2,url:`#top250`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`top250()`})})},{depth:2,url:`#updatedat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`updatedAt()`})})},{depth:2,url:`#createdat`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`createdAt()`})})},{depth:2,url:`#getfilters`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFilters()`})})},{depth:2,url:`#notnullfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`notNullFields()`})})},{depth:2,url:`#reset`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`reset()`})})},{depth:2,url:`#setmaxlimit`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setMaxLimit()`})})},{depth:2,url:`#setpagenumber`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setPageNumber()`})})},{depth:2,url:`#removesortbyfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`removeSortByField()`})})},{depth:2,url:`#togglesort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toggleSort()`})})},{depth:2,url:`#sortby`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortBy()`})})},{depth:2,url:`#addsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addSortCriteria()`})})},{depth:2,url:`#hassortby`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasSortBy()`})})},{depth:2,url:`#getsortdirection`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortDirection()`})})},{depth:2,url:`#getsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortCriteria()`})})},{depth:2,url:`#setsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setSortCriteria()`})})},{depth:2,url:`#clearsort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`clearSort()`})})},{depth:2,url:`#addmultiplesort`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`addMultipleSort()`})})},{depth:2,url:`#getsortdata`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortData()`})})},{depth:2,url:`#getsortcount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSortCount()`})})},{depth:2,url:`#hasanysorting`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasAnySorting()`})})},{depth:2,url:`#getfirstsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFirstSortCriteria()`})})},{depth:2,url:`#getlastsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getLastSortCriteria()`})})},{depth:2,url:`#sortbyimdbrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByImdbRating()`})})},{depth:2,url:`#sortbydesc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByDesc()`})})},{depth:2,url:`#sortbyyearoldfirst`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByYearOldFirst()`})})},{depth:2,url:`#sortbyasc`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByAsc()`})})},{depth:2,url:`#sortbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByName()`})})},{depth:2,url:`#sortbypopularity`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByPopularity()`})})},{depth:2,url:`#sortbycreated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByCreated()`})})},{depth:2,url:`#sortbyupdated`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByUpdated()`})})},{depth:2,url:`#sortbybest`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByBest()`})})},{depth:2,url:`#sortbyyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByYear()`})})},{depth:2,url:`#sortbykinopoiskrating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`sortByKinopoiskRating()`})})},{depth:2,url:`#exportsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`exportSortCriteria()`})})},{depth:2,url:`#importsortcriteria`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`importSortCriteria()`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для создания фильтров при поиске фильмов
Этот класс предоставляет методы для построения параметров фильтрации
при поиске фильмов через API Kinopoisk.dev`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка:`}),` `,(0,n.jsx)(t.a,{href:`https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4`,children:`https://kinopoiskdev.readme.io/reference/moviecontroller_findmanybyqueryv1_4`})]}),`
`,(0,n.jsx)(t.h2,{id:`id`,children:(0,n.jsx)(t.code,{children:`id()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по ID фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int|array<int>): ID фильма или массив ID`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`addfilter`,children:(0,n.jsx)(t.code,{children:`addFilter()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет произвольный фильтр`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле для фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (mixed): Значение фильтра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`externalid`,children:(0,n.jsx)(t.code,{children:`externalId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по внешнему ID фильма`]}),`
`,(0,n.jsx)(t.h2,{id:`name`,children:(0,n.jsx)(t.code,{children:`name()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по названию фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Название фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`enname`,children:(0,n.jsx)(t.code,{children:`enName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по английскому названию фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string): Английское название фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`alternativename`,children:(0,n.jsx)(t.code,{children:`alternativeName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по альтернативному названию фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$alternativeName`}),` (string): Альтернативное название фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`names`,children:(0,n.jsx)(t.code,{children:`names()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по всем названиям фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$names`}),` (string|array<string>): Название или массив названий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`description`,children:(0,n.jsx)(t.code,{children:`description()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по описанию фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$description`}),` (string): Описание фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`shortdescription`,children:(0,n.jsx)(t.code,{children:`shortDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по краткому описанию фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$shortDescription`}),` (string): Краткое описание фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`slogan`,children:(0,n.jsx)(t.code,{children:`slogan()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по слогану фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$slogan`}),` (string): Слоган фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, regex)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`type`,children:(0,n.jsx)(t.code,{children:`type()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по типу фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` (string): Тип фильма (movie, tv-series, cartoon, anime, animated-series, tv-show)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`typenumber`,children:(0,n.jsx)(t.code,{children:`typeNumber()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по номеру типа фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$typeNumber`}),` (int): Номер типа фильма (1-6)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isseries`,children:(0,n.jsx)(t.code,{children:`isSeries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по признаку сериала`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$isSeries`}),` (bool): Является ли фильм сериалом`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`status`,children:(0,n.jsx)(t.code,{children:`status()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по статусу фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$status`}),` (string): Статус фильма (filming, pre-production, completed, announced, post-production)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`year`,children:(0,n.jsx)(t.code,{children:`year()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по году выпуска`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int): Год выпуска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`yearrange`,children:(0,n.jsx)(t.code,{children:`yearRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону годов выпуска`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromYear`}),` (int): Начальный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toYear`}),` (int): Конечный год`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`releaseyears`,children:(0,n.jsx)(t.code,{children:`releaseYears()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по годам релиза`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$releaseYears`}),` (array<int>): Массив годов релиза`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`rating`,children:(0,n.jsx)(t.code,{children:`rating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (float|array<float>): Рейтинг или массив с параметрами рейтинга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`ratingrange`,children:(0,n.jsx)(t.code,{children:`ratingRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону рейтинга`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minRating`}),` (float): Минимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxRating`}),` (float): Максимальный рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле рейтинга (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`ratingmpaa`,children:(0,n.jsx)(t.code,{children:`ratingMpaa()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по рейтингу MPAA`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ratingMpaa`}),` (string): Рейтинг MPAA (g, pg, pg-13, r, nc-17)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`agerating`,children:(0,n.jsx)(t.code,{children:`ageRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по возрастному рейтингу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ageRating`}),` (int): Возрастной рейтинг`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`votes`,children:(0,n.jsx)(t.code,{children:`votes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по голосам`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$votes`}),` (int|array<int>): Количество голосов или массив с параметрами голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`votesrange`,children:(0,n.jsx)(t.code,{children:`votesRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону голосов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$minVotes`}),` (int): Минимальное количество голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$maxVotes`}),` (int): Максимальное количество голосов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$field`}),` (string): Поле голосов (kp, imdb, tmdb, filmCritics, russianFilmCritics, await)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`seasonsinfo`,children:(0,n.jsx)(t.code,{children:`seasonsInfo()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по информации о сезонах`]}),`
`,(0,n.jsx)(t.h2,{id:`budget`,children:(0,n.jsx)(t.code,{children:`budget()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по бюджету`]}),`
`,(0,n.jsx)(t.h2,{id:`audience`,children:(0,n.jsx)(t.code,{children:`audience()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по аудитории`]}),`
`,(0,n.jsx)(t.h2,{id:`movielength`,children:(0,n.jsx)(t.code,{children:`movieLength()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по длительности фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieLength`}),` (int): Длительность фильма в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`serieslength`,children:(0,n.jsx)(t.code,{children:`seriesLength()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по длительности серии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$seriesLength`}),` (int): Длительность серии в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`totalserieslength`,children:(0,n.jsx)(t.code,{children:`totalSeriesLength()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по общей длительности сериала`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$totalSeriesLength`}),` (int): Общая длительность сериала в минутах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`genres`,children:(0,n.jsx)(t.code,{children:`genres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по жанрам`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`includegenres`,children:(0,n.jsx)(t.code,{children:`includeGenres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для включения жанров (оператор +)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров для включения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`excludegenres`,children:(0,n.jsx)(t.code,{children:`excludeGenres()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для исключения жанров (оператор !)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genres`}),` (string|array<string>): Жанр или массив жанров для исключения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`countries`,children:(0,n.jsx)(t.code,{children:`countries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по странам`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`includecountries`,children:(0,n.jsx)(t.code,{children:`includeCountries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для включения стран (оператор +)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран для включения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`excludecountries`,children:(0,n.jsx)(t.code,{children:`excludeCountries()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр для исключения стран (оператор !)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countries`}),` (string|array<string>): Страна или массив стран для исключения`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`poster`,children:(0,n.jsx)(t.code,{children:`poster()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по постеру`]}),`
`,(0,n.jsx)(t.h2,{id:`backdrop`,children:(0,n.jsx)(t.code,{children:`backdrop()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по фоновому изображению`]}),`
`,(0,n.jsx)(t.h2,{id:`logo`,children:(0,n.jsx)(t.code,{children:`logo()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по логотипу`]}),`
`,(0,n.jsx)(t.h2,{id:`ticketsonsale`,children:(0,n.jsx)(t.code,{children:`ticketsOnSale()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по наличию билетов в продаже`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ticketsOnSale`}),` (bool): Наличие билетов в продаже`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`videos`,children:(0,n.jsx)(t.code,{children:`videos()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по видео`]}),`
`,(0,n.jsx)(t.h2,{id:`networks`,children:(0,n.jsx)(t.code,{children:`networks()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по сетям`]}),`
`,(0,n.jsx)(t.h2,{id:`persons`,children:(0,n.jsx)(t.code,{children:`persons()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по участникам`]}),`
`,(0,n.jsx)(t.h2,{id:`facts`,children:(0,n.jsx)(t.code,{children:`facts()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по фактам`]}),`
`,(0,n.jsx)(t.h2,{id:`fees`,children:(0,n.jsx)(t.code,{children:`fees()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по сборам`]}),`
`,(0,n.jsx)(t.h2,{id:`premiere`,children:(0,n.jsx)(t.code,{children:`premiere()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по премьере`]}),`
`,(0,n.jsx)(t.h2,{id:`premiererange`,children:(0,n.jsx)(t.code,{children:`premiereRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по диапазону дат премьеры`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromDate`}),` (string): Начальная дата в формате dd.mm.yyyy`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toDate`}),` (string): Конечная дата в формате dd.mm.yyyy`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (string): Страна премьеры (russia, world, usa, ...)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`similarmovies`,children:(0,n.jsx)(t.code,{children:`similarMovies()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по похожим фильмам`]}),`
`,(0,n.jsx)(t.h2,{id:`sequelsandprequels`,children:(0,n.jsx)(t.code,{children:`sequelsAndPrequels()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по сиквелам и приквелам`]}),`
`,(0,n.jsx)(t.h2,{id:`watchability`,children:(0,n.jsx)(t.code,{children:`watchability()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по доступности просмотра`]}),`
`,(0,n.jsx)(t.h2,{id:`lists`,children:(0,n.jsx)(t.code,{children:`lists()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по спискам`]}),`
`,(0,n.jsx)(t.h2,{id:`top10`,children:(0,n.jsx)(t.code,{children:`top10()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по топ-10`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top10`}),` (int): Позиция в топ-10`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`top250`,children:(0,n.jsx)(t.code,{children:`top250()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по топ-250`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$top250`}),` (int): Позиция в топ-250`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, in, nin, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`updatedat`,children:(0,n.jsx)(t.code,{children:`updatedAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по дате обновления`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string): Дата обновления`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`createdat`,children:(0,n.jsx)(t.code,{children:`createdAt()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Добавляет фильтр по дате создания`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string): Дата создания`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$operator`}),` (string): Оператор сравнения (eq, ne, gt, gte, lt, lte)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getfilters`,children:(0,n.jsx)(t.code,{children:`getFilters()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает массив фильтров`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`})]}),`
`,(0,n.jsx)(t.h2,{id:`notnullfields`,children:(0,n.jsx)(t.code,{children:`notNullFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Исключение записей с пустыми значениями в указанных полях`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fields`}),` (array<string>): Массив названий полей`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`reset`,children:(0,n.jsx)(t.code,{children:`reset()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сбрасывает все фильтры`]}),`
`,(0,n.jsx)(t.h2,{id:`setmaxlimit`,children:(0,n.jsx)(t.code,{children:`setMaxLimit()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Устанавливает лимит количества элементов в результате запроса
Метод устанавливает ограничение на количество возвращаемых элементов
в текущем запросе. Используется для пагинации и контроля объема данных.
Добавляет фильтр 'limit' в массив фильтров запроса.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$int`}),` (int): Максимальное количество элементов для возврата (должно быть положительным числом)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Возвращает текущий экземпляр объекта для поддержки цепочки вызовов (fluent interface)`]}),`
`,(0,n.jsx)(t.h2,{id:`setpagenumber`,children:(0,n.jsx)(t.code,{children:`setPageNumber()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Устанавливает номер страницы для пагинации результатов
Задает номер страницы для получения определенного набора результатов
при выполнении запросов с пагинацией. Страницы нумеруются начиная с 1.
Значение сохраняется в массиве фильтров под ключом 'page' для
последующего использования в API-запросах.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$int`}),` (int): Номер страницы для получения результатов (должен быть больше 0)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`}),` Возвращает текущий экземпляр для цепочного вызова методов`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`page`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`limit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получить вторую страницу с 20 результатами`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Использование в цепочке методов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $movieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`page`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`3`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`limit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
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