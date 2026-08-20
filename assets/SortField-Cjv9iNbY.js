import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`SortField`},i=new Date(1787223655e3),a=`

**Описание:** Enum для полей сортировки при поиске фильмов
Этот enum содержит все возможные поля, которые можно использовать
для сортировки результатов поиска через API Kinopoisk.dev

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`getPersonFields()\` [#getpersonfields]

**Описание:** Возвращает массив полей персон для выбора
Предоставляет статически кэшируемый список всех доступных полей персон,
которые могут быть использованы при запросах к API для получения информации
о персонах. Включает основные данные персоны, информацию о супругах,
фильмографию и дополнительные метаданные.
Возвращаемые поля включают:

* Базовую информацию: ID, имя, год рождения, пол, рост
* Даты: дата создания/обновления записи, день рождения, дата смерти
* Профессиональную информацию: профессия, количество наград, возраст
* Места: место рождения и смерти
* Фото и факты
* Информацию о супругах: ID, имя, пол, развод и причины, дети, тип отношений
* Фильмографию: ID фильмов, названия, альтернативные названия, рейтинги,
  общую информацию, описания, английские профессии
  Метод использует статическое кэширование для оптимизации производительности
  при множественных вызовах в рамках одного запроса.

**С версии:** 1.0.0

**Возвращает:** \`array<int, string>\` Массив строковых значений полей персон

**Пример:**

\`\`\`php
$fields = PersonField::getPersonFields();
$selectFields = implode(',', $fields); // Для API запроса
// Использование в запросе
$filter->selectFields($fields);
\`\`\`

## \`getRatingFields()\` [#getratingfields]

**Описание:** Возвращает все поля рейтингов
Статический метод для получения всех доступных полей рейтингов.
Используется для создания интерфейсов выбора рейтинговых полей.

**Возвращает:** \`array<SortField>\` Массив всех рейтинговых полей SortField

## \`getVotesFields()\` [#getvotesfields]

**Описание:** Возвращает все поля голосов
Статический метод для получения всех доступных полей голосов.
Используется для создания интерфейсов выбора полей голосов.

**Возвращает:** \`array<SortField>\` Массив всех полей голосов SortField

## \`getDescription()\` [#getdescription]

**Описание:** Возвращает человекочитаемое описание поля
Предоставляет описательное название поля сортировки на русском языке
для использования в пользовательских интерфейсах и документации.

**Возвращает:** \`string\` Описательное название поля на русском языке

## \`isRatingField()\` [#isratingfield]

**Описание:** Проверяет, является ли поле рейтинговым
Определяет, относится ли поле сортировки к категории рейтингов.
Используется для группировки и специальной обработки рейтинговых полей.

**Возвращает:** \`bool true,\` если поле является рейтинговым, false в противном случае

## \`isVotesField()\` [#isvotesfield]

**Описание:** Проверяет, является ли поле полем голосов
Определяет, относится ли поле сортировки к категории голосов.
Используется для группировки и специальной обработки полей голосов.

**Возвращает:** \`bool true,\` если поле является полем голосов, false в противном случае

## \`isDateField()\` [#isdatefield]

**Описание:** Проверяет, является ли поле полем даты
Определяет, относится ли поле сортировки к категории дат.
Используется для валидации и специальной обработки временных полей.

**Возвращает:** \`bool true,\` если поле является полем даты, false в противном случае

## \`getDataType()\` [#getdatatype]

**Описание:** Возвращает тип данных поля для валидации
Определяет тип данных поля сортировки для обеспечения корректной
валидации и обработки параметров сортировки.

**Возвращает:** \`string\` Тип данных поля ('number', 'string', 'date')

## \`isNumericField()\` [#isnumericfield]

**Описание:** Проверяет, является ли поле числовым
Определяет, относится ли поле сортировки к числовому типу данных.
Используется для валидации и обработки числовых значений.

**Возвращает:** \`bool true,\` если поле является числовым, false в противном случае

## \`getDefaultDirection()\` [#getdefaultdirection]

**Описание:** Возвращает рекомендуемое направление сортировки по умолчанию
Определяет наиболее логичное направление сортировки для каждого поля
на основе его семантики и обычных пользовательских ожиданий.

**Возвращает:** \`SortDirection\` Рекомендуемое направление сортировки

## Cases [#cases]

### \`ID\` [#id]

**Значение:** \`'id'\`

### \`NAME\` [#name]

**Значение:** \`'name'\`

### \`EN_NAME\` [#en_name]

**Значение:** \`'enName'\`

### \`ALTERNATIVE_NAME\` [#alternative_name]

**Значение:** \`'alternativeName'\`

### \`YEAR\` [#year]

**Значение:** \`'year'\`

### \`CREATED_AT\` [#created_at]

**Значение:** \`'createdAt'\`

### \`UPDATED_AT\` [#updated_at]

**Значение:** \`'updatedAt'\`

### \`RATING_KP\` [#rating_kp]

**Значение:** \`'rating.kp'\`

### \`RATING_IMDB\` [#rating_imdb]

**Значение:** \`'rating.imdb'\`

### \`RATING_TMDB\` [#rating_tmdb]

**Значение:** \`'rating.tmdb'\`

### \`RATING_FILM_CRITICS\` [#rating_film_critics]

**Значение:** \`'rating.filmCritics'\`

### \`RATING_RUSSIAN_FILM_CRITICS\` [#rating_russian_film_critics]

**Значение:** \`'rating.russianFilmCritics'\`

### \`RATING_AWAIT\` [#rating_await]

**Значение:** \`'rating.await'\`

### \`VOTES_KP\` [#votes_kp]

**Значение:** \`'votes.kp'\`

### \`VOTES_IMDB\` [#votes_imdb]

**Значение:** \`'votes.imdb'\`

### \`VOTES_TMDB\` [#votes_tmdb]

**Значение:** \`'votes.tmdb'\`

### \`VOTES_FILM_CRITICS\` [#votes_film_critics]

**Значение:** \`'votes.filmCritics'\`

### \`VOTES_RUSSIAN_FILM_CRITICS\` [#votes_russian_film_critics]

**Значение:** \`'votes.russianFilmCritics'\`

### \`VOTES_AWAIT\` [#votes_await]

**Значение:** \`'votes.await'\`

### \`MOVIE_LENGTH\` [#movie_length]

**Значение:** \`'movieLength'\`

### \`SERIES_LENGTH\` [#series_length]

**Значение:** \`'seriesLength'\`

### \`TOTAL_SERIES_LENGTH\` [#total_series_length]

**Значение:** \`'totalSeriesLength'\`

### \`AGE_RATING\` [#age_rating]

**Значение:** \`'ageRating'\`

### \`TOP_10\` [#top_10]

**Значение:** \`'top10'\`

### \`TOP_250\` [#top_250]

**Значение:** \`'top250'\`

### \`PREMIERE_WORLD\` [#premiere_world]

**Значение:** \`'premiere.world'\`

### \`PREMIERE_RUSSIA\` [#premiere_russia]

**Значение:** \`'premiere.russia'\`

### \`PREMIERE_USA\` [#premiere_usa]

**Значение:** \`'premiere.usa'\`

### \`TYPE\` [#type]

**Значение:** \`'type'\`

### \`TITLE\` [#title]

**Значение:** \`'title'\`

### \`MOVIES\` [#movies]

**Значение:** \`'movies'\`

### \`PHOTO\` [#photo]

**Значение:** \`'photo'\`

### \`SEX\` [#sex]

**Значение:** \`'sex'\`

### \`GROWTH\` [#growth]

**Значение:** \`'growth'\`

### \`BIRTHDAY\` [#birthday]

**Значение:** \`'birthday'\`

### \`DEATH\` [#death]

**Значение:** \`'death'\`

### \`AGE\` [#age]

**Значение:** \`'age'\`

### \`BIRTH_PLACE\` [#birth_place]

**Значение:** \`'birthPlace.value'\`

### \`DEATH_PLACE\` [#death_place]

**Значение:** \`'deathPlace.value'\`

### \`COUNT_AWARDS\` [#count_awards]

**Значение:** \`'countAwards'\`

### \`PROFESSION\` [#profession]

**Значение:** \`'profession.value'\`

### \`SPOUSES_ID\` [#spouses_id]

**Значение:** \`'spouses.id'\`

### \`SPOUSES_NAME\` [#spouses_name]

**Значение:** \`'spouses.name'\`

### \`SPOUSES_DIVORCED\` [#spouses_divorced]

**Значение:** \`'spouses.divorced'\`

### \`SPOUSES_DIVORCED_REASON\` [#spouses_divorced_reason]

**Значение:** \`'spouses.divorcedReason'\`

### \`SPOUSES_SEX\` [#spouses_sex]

**Значение:** \`'spouses.sex'\`

### \`SPOUSES_CHILDREN\` [#spouses_children]

**Значение:** \`'spouses.children'\`

### \`SPOUSES_RELATION\` [#spouses_relation]

**Значение:** \`'spouses.relation'\`

### \`FACTS\` [#facts]

**Значение:** \`'facts.value'\`

### \`MOVIES_ID\` [#movies_id]

**Значение:** \`'movies.id'\`

### \`MOVIES_NAME\` [#movies_name]

**Значение:** \`'movies.name'\`

### \`MOVIES_ALTERNATIVE_NAME\` [#movies_alternative_name]

**Значение:** \`'movies.alternativeName'\`

### \`MOVIES_RATING\` [#movies_rating]

**Значение:** \`'movies.rating'\`

### \`MOVIES_GENERAL\` [#movies_general]

**Значение:** \`'movies.general'\`

### \`MOVIES_DESCRIPTION\` [#movies_description]

**Значение:** \`'movies.description'\`

### \`MOVIES_EN_PROFESSION\` [#movies_en_profession]

**Значение:** \`'movies.enProfession'\`
`,o={contents:[{heading:void 0,content:`**Описание:** Enum для полей сортировки при поиске фильмов
Этот enum содержит все возможные поля, которые можно использовать
для сортировки результатов поиска через API Kinopoisk.dev`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`getpersonfields`,content:`**Описание:** Возвращает массив полей персон для выбора
Предоставляет статически кэшируемый список всех доступных полей персон,
которые могут быть использованы при запросах к API для получения информации
о персонах. Включает основные данные персоны, информацию о супругах,
фильмографию и дополнительные метаданные.
Возвращаемые поля включают:`},{heading:`getpersonfields`,content:`Базовую информацию: ID, имя, год рождения, пол, рост`},{heading:`getpersonfields`,content:`Даты: дата создания/обновления записи, день рождения, дата смерти`},{heading:`getpersonfields`,content:`Профессиональную информацию: профессия, количество наград, возраст`},{heading:`getpersonfields`,content:`Места: место рождения и смерти`},{heading:`getpersonfields`,content:`Фото и факты`},{heading:`getpersonfields`,content:`Информацию о супругах: ID, имя, пол, развод и причины, дети, тип отношений`},{heading:`getpersonfields`,content:`Фильмографию: ID фильмов, названия, альтернативные названия, рейтинги,
общую информацию, описания, английские профессии
Метод использует статическое кэширование для оптимизации производительности
при множественных вызовах в рамках одного запроса.`},{heading:`getpersonfields`,content:`**С версии:** 1.0.0`},{heading:`getpersonfields`,content:"**Возвращает:** `array<int, string>` Массив строковых значений полей персон"},{heading:`getpersonfields`,content:`**Пример:**`},{heading:`getratingfields`,content:`**Описание:** Возвращает все поля рейтингов
Статический метод для получения всех доступных полей рейтингов.
Используется для создания интерфейсов выбора рейтинговых полей.`},{heading:`getratingfields`,content:"**Возвращает:** `array<SortField>` Массив всех рейтинговых полей SortField"},{heading:`getvotesfields`,content:`**Описание:** Возвращает все поля голосов
Статический метод для получения всех доступных полей голосов.
Используется для создания интерфейсов выбора полей голосов.`},{heading:`getvotesfields`,content:"**Возвращает:** `array<SortField>` Массив всех полей голосов SortField"},{heading:`getdescription`,content:`**Описание:** Возвращает человекочитаемое описание поля
Предоставляет описательное название поля сортировки на русском языке
для использования в пользовательских интерфейсах и документации.`},{heading:`getdescription`,content:"**Возвращает:** `string` Описательное название поля на русском языке"},{heading:`isratingfield`,content:`**Описание:** Проверяет, является ли поле рейтинговым
Определяет, относится ли поле сортировки к категории рейтингов.
Используется для группировки и специальной обработки рейтинговых полей.`},{heading:`isratingfield`,content:"**Возвращает:** `bool true,` если поле является рейтинговым, false в противном случае"},{heading:`isvotesfield`,content:`**Описание:** Проверяет, является ли поле полем голосов
Определяет, относится ли поле сортировки к категории голосов.
Используется для группировки и специальной обработки полей голосов.`},{heading:`isvotesfield`,content:"**Возвращает:** `bool true,` если поле является полем голосов, false в противном случае"},{heading:`isdatefield`,content:`**Описание:** Проверяет, является ли поле полем даты
Определяет, относится ли поле сортировки к категории дат.
Используется для валидации и специальной обработки временных полей.`},{heading:`isdatefield`,content:"**Возвращает:** `bool true,` если поле является полем даты, false в противном случае"},{heading:`getdatatype`,content:`**Описание:** Возвращает тип данных поля для валидации
Определяет тип данных поля сортировки для обеспечения корректной
валидации и обработки параметров сортировки.`},{heading:`getdatatype`,content:"**Возвращает:** `string` Тип данных поля ('number', 'string', 'date')"},{heading:`isnumericfield`,content:`**Описание:** Проверяет, является ли поле числовым
Определяет, относится ли поле сортировки к числовому типу данных.
Используется для валидации и обработки числовых значений.`},{heading:`isnumericfield`,content:"**Возвращает:** `bool true,` если поле является числовым, false в противном случае"},{heading:`getdefaultdirection`,content:`**Описание:** Возвращает рекомендуемое направление сортировки по умолчанию
Определяет наиболее логичное направление сортировки для каждого поля
на основе его семантики и обычных пользовательских ожиданий.`},{heading:`getdefaultdirection`,content:"**Возвращает:** `SortDirection` Рекомендуемое направление сортировки"},{heading:`id`,content:"**Значение:** `'id'`"},{heading:`name`,content:"**Значение:** `'name'`"},{heading:`en_name`,content:"**Значение:** `'enName'`"},{heading:`alternative_name`,content:"**Значение:** `'alternativeName'`"},{heading:`year`,content:"**Значение:** `'year'`"},{heading:`created_at`,content:"**Значение:** `'createdAt'`"},{heading:`updated_at`,content:"**Значение:** `'updatedAt'`"},{heading:`rating_kp`,content:"**Значение:** `'rating.kp'`"},{heading:`rating_imdb`,content:"**Значение:** `'rating.imdb'`"},{heading:`rating_tmdb`,content:"**Значение:** `'rating.tmdb'`"},{heading:`rating_film_critics`,content:"**Значение:** `'rating.filmCritics'`"},{heading:`rating_russian_film_critics`,content:"**Значение:** `'rating.russianFilmCritics'`"},{heading:`rating_await`,content:"**Значение:** `'rating.await'`"},{heading:`votes_kp`,content:"**Значение:** `'votes.kp'`"},{heading:`votes_imdb`,content:"**Значение:** `'votes.imdb'`"},{heading:`votes_tmdb`,content:"**Значение:** `'votes.tmdb'`"},{heading:`votes_film_critics`,content:"**Значение:** `'votes.filmCritics'`"},{heading:`votes_russian_film_critics`,content:"**Значение:** `'votes.russianFilmCritics'`"},{heading:`votes_await`,content:"**Значение:** `'votes.await'`"},{heading:`movie_length`,content:"**Значение:** `'movieLength'`"},{heading:`series_length`,content:"**Значение:** `'seriesLength'`"},{heading:`total_series_length`,content:"**Значение:** `'totalSeriesLength'`"},{heading:`age_rating`,content:"**Значение:** `'ageRating'`"},{heading:`top_10`,content:"**Значение:** `'top10'`"},{heading:`top_250`,content:"**Значение:** `'top250'`"},{heading:`premiere_world`,content:"**Значение:** `'premiere.world'`"},{heading:`premiere_russia`,content:"**Значение:** `'premiere.russia'`"},{heading:`premiere_usa`,content:"**Значение:** `'premiere.usa'`"},{heading:`type`,content:"**Значение:** `'type'`"},{heading:`title`,content:"**Значение:** `'title'`"},{heading:`movies`,content:"**Значение:** `'movies'`"},{heading:`photo`,content:"**Значение:** `'photo'`"},{heading:`sex`,content:"**Значение:** `'sex'`"},{heading:`growth`,content:"**Значение:** `'growth'`"},{heading:`birthday`,content:"**Значение:** `'birthday'`"},{heading:`death`,content:"**Значение:** `'death'`"},{heading:`age`,content:"**Значение:** `'age'`"},{heading:`birth_place`,content:"**Значение:** `'birthPlace.value'`"},{heading:`death_place`,content:"**Значение:** `'deathPlace.value'`"},{heading:`count_awards`,content:"**Значение:** `'countAwards'`"},{heading:`profession`,content:"**Значение:** `'profession.value'`"},{heading:`spouses_id`,content:"**Значение:** `'spouses.id'`"},{heading:`spouses_name`,content:"**Значение:** `'spouses.name'`"},{heading:`spouses_divorced`,content:"**Значение:** `'spouses.divorced'`"},{heading:`spouses_divorced_reason`,content:"**Значение:** `'spouses.divorcedReason'`"},{heading:`spouses_sex`,content:"**Значение:** `'spouses.sex'`"},{heading:`spouses_children`,content:"**Значение:** `'spouses.children'`"},{heading:`spouses_relation`,content:"**Значение:** `'spouses.relation'`"},{heading:`facts`,content:"**Значение:** `'facts.value'`"},{heading:`movies_id`,content:"**Значение:** `'movies.id'`"},{heading:`movies_name`,content:"**Значение:** `'movies.name'`"},{heading:`movies_alternative_name`,content:"**Значение:** `'movies.alternativeName'`"},{heading:`movies_rating`,content:"**Значение:** `'movies.rating'`"},{heading:`movies_general`,content:"**Значение:** `'movies.general'`"},{heading:`movies_description`,content:"**Значение:** `'movies.description'`"},{heading:`movies_en_profession`,content:"**Значение:** `'movies.enProfession'`"}],headings:[{id:`getpersonfields`,content:"`getPersonFields()`"},{id:`getratingfields`,content:"`getRatingFields()`"},{id:`getvotesfields`,content:"`getVotesFields()`"},{id:`getdescription`,content:"`getDescription()`"},{id:`isratingfield`,content:"`isRatingField()`"},{id:`isvotesfield`,content:"`isVotesField()`"},{id:`isdatefield`,content:"`isDateField()`"},{id:`getdatatype`,content:"`getDataType()`"},{id:`isnumericfield`,content:"`isNumericField()`"},{id:`getdefaultdirection`,content:"`getDefaultDirection()`"},{id:`cases`,content:`Cases`},{id:`id`,content:"`ID`"},{id:`name`,content:"`NAME`"},{id:`en_name`,content:"`EN_NAME`"},{id:`alternative_name`,content:"`ALTERNATIVE_NAME`"},{id:`year`,content:"`YEAR`"},{id:`created_at`,content:"`CREATED_AT`"},{id:`updated_at`,content:"`UPDATED_AT`"},{id:`rating_kp`,content:"`RATING_KP`"},{id:`rating_imdb`,content:"`RATING_IMDB`"},{id:`rating_tmdb`,content:"`RATING_TMDB`"},{id:`rating_film_critics`,content:"`RATING_FILM_CRITICS`"},{id:`rating_russian_film_critics`,content:"`RATING_RUSSIAN_FILM_CRITICS`"},{id:`rating_await`,content:"`RATING_AWAIT`"},{id:`votes_kp`,content:"`VOTES_KP`"},{id:`votes_imdb`,content:"`VOTES_IMDB`"},{id:`votes_tmdb`,content:"`VOTES_TMDB`"},{id:`votes_film_critics`,content:"`VOTES_FILM_CRITICS`"},{id:`votes_russian_film_critics`,content:"`VOTES_RUSSIAN_FILM_CRITICS`"},{id:`votes_await`,content:"`VOTES_AWAIT`"},{id:`movie_length`,content:"`MOVIE_LENGTH`"},{id:`series_length`,content:"`SERIES_LENGTH`"},{id:`total_series_length`,content:"`TOTAL_SERIES_LENGTH`"},{id:`age_rating`,content:"`AGE_RATING`"},{id:`top_10`,content:"`TOP_10`"},{id:`top_250`,content:"`TOP_250`"},{id:`premiere_world`,content:"`PREMIERE_WORLD`"},{id:`premiere_russia`,content:"`PREMIERE_RUSSIA`"},{id:`premiere_usa`,content:"`PREMIERE_USA`"},{id:`type`,content:"`TYPE`"},{id:`title`,content:"`TITLE`"},{id:`movies`,content:"`MOVIES`"},{id:`photo`,content:"`PHOTO`"},{id:`sex`,content:"`SEX`"},{id:`growth`,content:"`GROWTH`"},{id:`birthday`,content:"`BIRTHDAY`"},{id:`death`,content:"`DEATH`"},{id:`age`,content:"`AGE`"},{id:`birth_place`,content:"`BIRTH_PLACE`"},{id:`death_place`,content:"`DEATH_PLACE`"},{id:`count_awards`,content:"`COUNT_AWARDS`"},{id:`profession`,content:"`PROFESSION`"},{id:`spouses_id`,content:"`SPOUSES_ID`"},{id:`spouses_name`,content:"`SPOUSES_NAME`"},{id:`spouses_divorced`,content:"`SPOUSES_DIVORCED`"},{id:`spouses_divorced_reason`,content:"`SPOUSES_DIVORCED_REASON`"},{id:`spouses_sex`,content:"`SPOUSES_SEX`"},{id:`spouses_children`,content:"`SPOUSES_CHILDREN`"},{id:`spouses_relation`,content:"`SPOUSES_RELATION`"},{id:`facts`,content:"`FACTS`"},{id:`movies_id`,content:"`MOVIES_ID`"},{id:`movies_name`,content:"`MOVIES_NAME`"},{id:`movies_alternative_name`,content:"`MOVIES_ALTERNATIVE_NAME`"},{id:`movies_rating`,content:"`MOVIES_RATING`"},{id:`movies_general`,content:"`MOVIES_GENERAL`"},{id:`movies_description`,content:"`MOVIES_DESCRIPTION`"},{id:`movies_en_profession`,content:"`MOVIES_EN_PROFESSION`"}]},s=[{depth:2,url:`#getpersonfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonFields()`})})},{depth:2,url:`#getratingfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRatingFields()`})})},{depth:2,url:`#getvotesfields`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getVotesFields()`})})},{depth:2,url:`#getdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDescription()`})})},{depth:2,url:`#isratingfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isRatingField()`})})},{depth:2,url:`#isvotesfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isVotesField()`})})},{depth:2,url:`#isdatefield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isDateField()`})})},{depth:2,url:`#getdatatype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDataType()`})})},{depth:2,url:`#isnumericfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isNumericField()`})})},{depth:2,url:`#getdefaultdirection`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDefaultDirection()`})})},{depth:2,url:`#cases`,title:(0,n.jsx)(n.Fragment,{children:`Cases`})},{depth:3,url:`#id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ID`})})},{depth:3,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`NAME`})})},{depth:3,url:`#en_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`EN_NAME`})})},{depth:3,url:`#alternative_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ALTERNATIVE_NAME`})})},{depth:3,url:`#year`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`YEAR`})})},{depth:3,url:`#created_at`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`CREATED_AT`})})},{depth:3,url:`#updated_at`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`UPDATED_AT`})})},{depth:3,url:`#rating_kp`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_KP`})})},{depth:3,url:`#rating_imdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_IMDB`})})},{depth:3,url:`#rating_tmdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_TMDB`})})},{depth:3,url:`#rating_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_FILM_CRITICS`})})},{depth:3,url:`#rating_russian_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_RUSSIAN_FILM_CRITICS`})})},{depth:3,url:`#rating_await`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_AWAIT`})})},{depth:3,url:`#votes_kp`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_KP`})})},{depth:3,url:`#votes_imdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_IMDB`})})},{depth:3,url:`#votes_tmdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_TMDB`})})},{depth:3,url:`#votes_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_FILM_CRITICS`})})},{depth:3,url:`#votes_russian_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_RUSSIAN_FILM_CRITICS`})})},{depth:3,url:`#votes_await`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_AWAIT`})})},{depth:3,url:`#movie_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIE_LENGTH`})})},{depth:3,url:`#series_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SERIES_LENGTH`})})},{depth:3,url:`#total_series_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOTAL_SERIES_LENGTH`})})},{depth:3,url:`#age_rating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`AGE_RATING`})})},{depth:3,url:`#top_10`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOP_10`})})},{depth:3,url:`#top_250`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOP_250`})})},{depth:3,url:`#premiere_world`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_WORLD`})})},{depth:3,url:`#premiere_russia`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_RUSSIA`})})},{depth:3,url:`#premiere_usa`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_USA`})})},{depth:3,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TYPE`})})},{depth:3,url:`#title`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TITLE`})})},{depth:3,url:`#movies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES`})})},{depth:3,url:`#photo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PHOTO`})})},{depth:3,url:`#sex`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SEX`})})},{depth:3,url:`#growth`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`GROWTH`})})},{depth:3,url:`#birthday`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`BIRTHDAY`})})},{depth:3,url:`#death`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DEATH`})})},{depth:3,url:`#age`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`AGE`})})},{depth:3,url:`#birth_place`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`BIRTH_PLACE`})})},{depth:3,url:`#death_place`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DEATH_PLACE`})})},{depth:3,url:`#count_awards`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`COUNT_AWARDS`})})},{depth:3,url:`#profession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PROFESSION`})})},{depth:3,url:`#spouses_id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_ID`})})},{depth:3,url:`#spouses_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_NAME`})})},{depth:3,url:`#spouses_divorced`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_DIVORCED`})})},{depth:3,url:`#spouses_divorced_reason`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_DIVORCED_REASON`})})},{depth:3,url:`#spouses_sex`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_SEX`})})},{depth:3,url:`#spouses_children`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_CHILDREN`})})},{depth:3,url:`#spouses_relation`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPOUSES_RELATION`})})},{depth:3,url:`#facts`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`FACTS`})})},{depth:3,url:`#movies_id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_ID`})})},{depth:3,url:`#movies_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_NAME`})})},{depth:3,url:`#movies_alternative_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_ALTERNATIVE_NAME`})})},{depth:3,url:`#movies_rating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_RATING`})})},{depth:3,url:`#movies_general`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_GENERAL`})})},{depth:3,url:`#movies_description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_DESCRIPTION`})})},{depth:3,url:`#movies_en_profession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIES_EN_PROFESSION`})})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Enum для полей сортировки при поиске фильмов
Этот enum содержит все возможные поля, которые можно использовать
для сортировки результатов поиска через API Kinopoisk.dev`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonfields`,children:(0,n.jsx)(t.code,{children:`getPersonFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает массив полей персон для выбора
Предоставляет статически кэшируемый список всех доступных полей персон,
которые могут быть использованы при запросах к API для получения информации
о персонах. Включает основные данные персоны, информацию о супругах,
фильмографию и дополнительные метаданные.
Возвращаемые поля включают:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Базовую информацию: ID, имя, год рождения, пол, рост`}),`
`,(0,n.jsx)(t.li,{children:`Даты: дата создания/обновления записи, день рождения, дата смерти`}),`
`,(0,n.jsx)(t.li,{children:`Профессиональную информацию: профессия, количество наград, возраст`}),`
`,(0,n.jsx)(t.li,{children:`Места: место рождения и смерти`}),`
`,(0,n.jsx)(t.li,{children:`Фото и факты`}),`
`,(0,n.jsx)(t.li,{children:`Информацию о супругах: ID, имя, пол, развод и причины, дети, тип отношений`}),`
`,(0,n.jsx)(t.li,{children:`Фильмографию: ID фильмов, названия, альтернативные названия, рейтинги,
общую информацию, описания, английские профессии
Метод использует статическое кэширование для оптимизации производительности
при множественных вызовах в рамках одного запроса.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, string>`}),` Массив строковых значений полей персон`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$fields `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonField`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonFields`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$selectFields `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` implode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`','`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, $fields); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Для API запроса`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Использование в запросе`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`selectFields`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($fields);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getratingfields`,children:(0,n.jsx)(t.code,{children:`getRatingFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все поля рейтингов
Статический метод для получения всех доступных полей рейтингов.
Используется для создания интерфейсов выбора рейтинговых полей.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<SortField>`}),` Массив всех рейтинговых полей SortField`]}),`
`,(0,n.jsx)(t.h2,{id:`getvotesfields`,children:(0,n.jsx)(t.code,{children:`getVotesFields()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает все поля голосов
Статический метод для получения всех доступных полей голосов.
Используется для создания интерфейсов выбора полей голосов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<SortField>`}),` Массив всех полей голосов SortField`]}),`
`,(0,n.jsx)(t.h2,{id:`getdescription`,children:(0,n.jsx)(t.code,{children:`getDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает человекочитаемое описание поля
Предоставляет описательное название поля сортировки на русском языке
для использования в пользовательских интерфейсах и документации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Описательное название поля на русском языке`]}),`
`,(0,n.jsx)(t.h2,{id:`isratingfield`,children:(0,n.jsx)(t.code,{children:`isRatingField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле рейтинговым
Определяет, относится ли поле сортировки к категории рейтингов.
Используется для группировки и специальной обработки рейтинговых полей.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле является рейтинговым, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`isvotesfield`,children:(0,n.jsx)(t.code,{children:`isVotesField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле полем голосов
Определяет, относится ли поле сортировки к категории голосов.
Используется для группировки и специальной обработки полей голосов.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле является полем голосов, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`isdatefield`,children:(0,n.jsx)(t.code,{children:`isDateField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле полем даты
Определяет, относится ли поле сортировки к категории дат.
Используется для валидации и специальной обработки временных полей.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле является полем даты, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`getdatatype`,children:(0,n.jsx)(t.code,{children:`getDataType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает тип данных поля для валидации
Определяет тип данных поля сортировки для обеспечения корректной
валидации и обработки параметров сортировки.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Тип данных поля ('number', 'string', 'date')`]}),`
`,(0,n.jsx)(t.h2,{id:`isnumericfield`,children:(0,n.jsx)(t.code,{children:`isNumericField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли поле числовым
Определяет, относится ли поле сортировки к числовому типу данных.
Используется для валидации и обработки числовых значений.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если поле является числовым, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`getdefaultdirection`,children:(0,n.jsx)(t.code,{children:`getDefaultDirection()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает рекомендуемое направление сортировки по умолчанию
Определяет наиболее логичное направление сортировки для каждого поля
на основе его семантики и обычных пользовательских ожиданий.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`SortDirection`}),` Рекомендуемое направление сортировки`]}),`
`,(0,n.jsx)(t.h2,{id:`cases`,children:`Cases`}),`
`,(0,n.jsx)(t.h3,{id:`id`,children:(0,n.jsx)(t.code,{children:`ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'id'`})]}),`
`,(0,n.jsx)(t.h3,{id:`name`,children:(0,n.jsx)(t.code,{children:`NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`en_name`,children:(0,n.jsx)(t.code,{children:`EN_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'enName'`})]}),`
`,(0,n.jsx)(t.h3,{id:`alternative_name`,children:(0,n.jsx)(t.code,{children:`ALTERNATIVE_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'alternativeName'`})]}),`
`,(0,n.jsx)(t.h3,{id:`year`,children:(0,n.jsx)(t.code,{children:`YEAR`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'year'`})]}),`
`,(0,n.jsx)(t.h3,{id:`created_at`,children:(0,n.jsx)(t.code,{children:`CREATED_AT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'createdAt'`})]}),`
`,(0,n.jsx)(t.h3,{id:`updated_at`,children:(0,n.jsx)(t.code,{children:`UPDATED_AT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'updatedAt'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_kp`,children:(0,n.jsx)(t.code,{children:`RATING_KP`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.kp'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_imdb`,children:(0,n.jsx)(t.code,{children:`RATING_IMDB`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.imdb'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_tmdb`,children:(0,n.jsx)(t.code,{children:`RATING_TMDB`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.tmdb'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_film_critics`,children:(0,n.jsx)(t.code,{children:`RATING_FILM_CRITICS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.filmCritics'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_russian_film_critics`,children:(0,n.jsx)(t.code,{children:`RATING_RUSSIAN_FILM_CRITICS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.russianFilmCritics'`})]}),`
`,(0,n.jsx)(t.h3,{id:`rating_await`,children:(0,n.jsx)(t.code,{children:`RATING_AWAIT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'rating.await'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_kp`,children:(0,n.jsx)(t.code,{children:`VOTES_KP`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.kp'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_imdb`,children:(0,n.jsx)(t.code,{children:`VOTES_IMDB`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.imdb'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_tmdb`,children:(0,n.jsx)(t.code,{children:`VOTES_TMDB`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.tmdb'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_film_critics`,children:(0,n.jsx)(t.code,{children:`VOTES_FILM_CRITICS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.filmCritics'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_russian_film_critics`,children:(0,n.jsx)(t.code,{children:`VOTES_RUSSIAN_FILM_CRITICS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.russianFilmCritics'`})]}),`
`,(0,n.jsx)(t.h3,{id:`votes_await`,children:(0,n.jsx)(t.code,{children:`VOTES_AWAIT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'votes.await'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movie_length`,children:(0,n.jsx)(t.code,{children:`MOVIE_LENGTH`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movieLength'`})]}),`
`,(0,n.jsx)(t.h3,{id:`series_length`,children:(0,n.jsx)(t.code,{children:`SERIES_LENGTH`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'seriesLength'`})]}),`
`,(0,n.jsx)(t.h3,{id:`total_series_length`,children:(0,n.jsx)(t.code,{children:`TOTAL_SERIES_LENGTH`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'totalSeriesLength'`})]}),`
`,(0,n.jsx)(t.h3,{id:`age_rating`,children:(0,n.jsx)(t.code,{children:`AGE_RATING`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'ageRating'`})]}),`
`,(0,n.jsx)(t.h3,{id:`top_10`,children:(0,n.jsx)(t.code,{children:`TOP_10`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'top10'`})]}),`
`,(0,n.jsx)(t.h3,{id:`top_250`,children:(0,n.jsx)(t.code,{children:`TOP_250`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'top250'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_world`,children:(0,n.jsx)(t.code,{children:`PREMIERE_WORLD`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.world'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_russia`,children:(0,n.jsx)(t.code,{children:`PREMIERE_RUSSIA`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.russia'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_usa`,children:(0,n.jsx)(t.code,{children:`PREMIERE_USA`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.usa'`})]}),`
`,(0,n.jsx)(t.h3,{id:`type`,children:(0,n.jsx)(t.code,{children:`TYPE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'type'`})]}),`
`,(0,n.jsx)(t.h3,{id:`title`,children:(0,n.jsx)(t.code,{children:`TITLE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'title'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies`,children:(0,n.jsx)(t.code,{children:`MOVIES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies'`})]}),`
`,(0,n.jsx)(t.h3,{id:`photo`,children:(0,n.jsx)(t.code,{children:`PHOTO`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'photo'`})]}),`
`,(0,n.jsx)(t.h3,{id:`sex`,children:(0,n.jsx)(t.code,{children:`SEX`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'sex'`})]}),`
`,(0,n.jsx)(t.h3,{id:`growth`,children:(0,n.jsx)(t.code,{children:`GROWTH`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'growth'`})]}),`
`,(0,n.jsx)(t.h3,{id:`birthday`,children:(0,n.jsx)(t.code,{children:`BIRTHDAY`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'birthday'`})]}),`
`,(0,n.jsx)(t.h3,{id:`death`,children:(0,n.jsx)(t.code,{children:`DEATH`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'death'`})]}),`
`,(0,n.jsx)(t.h3,{id:`age`,children:(0,n.jsx)(t.code,{children:`AGE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'age'`})]}),`
`,(0,n.jsx)(t.h3,{id:`birth_place`,children:(0,n.jsx)(t.code,{children:`BIRTH_PLACE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'birthPlace.value'`})]}),`
`,(0,n.jsx)(t.h3,{id:`death_place`,children:(0,n.jsx)(t.code,{children:`DEATH_PLACE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'deathPlace.value'`})]}),`
`,(0,n.jsx)(t.h3,{id:`count_awards`,children:(0,n.jsx)(t.code,{children:`COUNT_AWARDS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'countAwards'`})]}),`
`,(0,n.jsx)(t.h3,{id:`profession`,children:(0,n.jsx)(t.code,{children:`PROFESSION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'profession.value'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_id`,children:(0,n.jsx)(t.code,{children:`SPOUSES_ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.id'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_name`,children:(0,n.jsx)(t.code,{children:`SPOUSES_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_divorced`,children:(0,n.jsx)(t.code,{children:`SPOUSES_DIVORCED`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.divorced'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_divorced_reason`,children:(0,n.jsx)(t.code,{children:`SPOUSES_DIVORCED_REASON`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.divorcedReason'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_sex`,children:(0,n.jsx)(t.code,{children:`SPOUSES_SEX`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.sex'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_children`,children:(0,n.jsx)(t.code,{children:`SPOUSES_CHILDREN`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.children'`})]}),`
`,(0,n.jsx)(t.h3,{id:`spouses_relation`,children:(0,n.jsx)(t.code,{children:`SPOUSES_RELATION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'spouses.relation'`})]}),`
`,(0,n.jsx)(t.h3,{id:`facts`,children:(0,n.jsx)(t.code,{children:`FACTS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'facts.value'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_id`,children:(0,n.jsx)(t.code,{children:`MOVIES_ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.id'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_name`,children:(0,n.jsx)(t.code,{children:`MOVIES_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_alternative_name`,children:(0,n.jsx)(t.code,{children:`MOVIES_ALTERNATIVE_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.alternativeName'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_rating`,children:(0,n.jsx)(t.code,{children:`MOVIES_RATING`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.rating'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_general`,children:(0,n.jsx)(t.code,{children:`MOVIES_GENERAL`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.general'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_description`,children:(0,n.jsx)(t.code,{children:`MOVIES_DESCRIPTION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.description'`})]}),`
`,(0,n.jsx)(t.h3,{id:`movies_en_profession`,children:(0,n.jsx)(t.code,{children:`MOVIES_EN_PROFESSION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'movies.enProfession'`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};