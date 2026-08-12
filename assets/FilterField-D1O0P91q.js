import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`FilterField`},i=new Date(1786541452e3),a=`

**Описание:** Enum для полей фильтрации
Этот enum содержит все возможные поля, которые можно использовать
при фильтрации данных через API Kinopoisk.dev

## \`getFieldType()\` [#getfieldtype]

**Описание:** Возвращает тип поля

## \`supportsIncludeExclude()\` [#supportsincludeexclude]

**Описание:** Проверяет, поддерживает ли поле операторы включения/исключения

## \`supportsRange()\` [#supportsrange]

**Описание:** Проверяет, поддерживает ли поле диапазоны

## \`getDefaultOperator()\` [#getdefaultoperator]

**Описание:** Возвращает оператор по умолчанию для поля

## \`getBaseField()\` [#getbasefield]

**Описание:** Возвращает базовое поле для составных полей (например, rating.kp -> rating)

## \`getSubField()\` [#getsubfield]

**Описание:** Возвращает подполе для составных полей (например, rating.kp -> kp)

## Cases [#cases]

### \`ID\` [#id]

**Значение:** \`'id'\`

### \`EXTERNAL_ID\` [#external_id]

**Значение:** \`'externalId'\`

### \`NAME\` [#name]

**Значение:** \`'name'\`

### \`EN_NAME\` [#en_name]

**Значение:** \`'enName'\`

### \`ALTERNATIVE_NAME\` [#alternative_name]

**Значение:** \`'alternativeName'\`

### \`NAMES\` [#names]

**Значение:** \`'names.name'\`

### \`DESCRIPTION\` [#description]

**Значение:** \`'description'\`

### \`SHORT_DESCRIPTION\` [#short_description]

**Значение:** \`'shortDescription'\`

### \`SLOGAN\` [#slogan]

**Значение:** \`'slogan'\`

### \`TYPE\` [#type]

**Значение:** \`'type'\`

### \`TYPE_NUMBER\` [#type_number]

**Значение:** \`'typeNumber'\`

### \`IS_SERIES\` [#is_series]

**Значение:** \`'isSeries'\`

### \`STATUS\` [#status]

**Значение:** \`'status'\`

### \`YEAR\` [#year]

**Значение:** \`'year'\`

### \`RELEASE_YEARS\` [#release_years]

**Значение:** \`'releaseYears'\`

### \`UPDATED_AT\` [#updated_at]

**Значение:** \`'updatedAt'\`

### \`CREATED_AT\` [#created_at]

**Значение:** \`'createdAt'\`

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

### \`RATING_MPAA\` [#rating_mpaa]

**Значение:** \`'ratingMpaa'\`

### \`AGE_RATING\` [#age_rating]

**Значение:** \`'ageRating'\`

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

### \`GENRES\` [#genres]

**Значение:** \`'genres.name'\`

### \`COUNTRIES\` [#countries]

**Значение:** \`'countries.name'\`

### \`POSTER\` [#poster]

**Значение:** \`'poster'\`

### \`BACKDROP\` [#backdrop]

**Значение:** \`'backdrop'\`

### \`LOGO\` [#logo]

**Значение:** \`'logo'\`

### \`TICKETS_ON_SALE\` [#tickets_on_sale]

**Значение:** \`'ticketsOnSale'\`

### \`VIDEOS\` [#videos]

**Значение:** \`'videos'\`

### \`NETWORKS\` [#networks]

**Значение:** \`'networks'\`

### \`PERSONS\` [#persons]

**Значение:** \`'persons'\`

### \`PERSONS_NAME\` [#persons_name]

**Значение:** \`'persons.name'\`

### \`PERSONS_ID\` [#persons_id]

**Значение:** \`'persons.id'\`

### \`PERSONS_PROFESSION\` [#persons_profession]

**Значение:** \`'persons.profession'\`

### \`FACTS\` [#facts]

**Значение:** \`'facts'\`

### \`FEES\` [#fees]

**Значение:** \`'fees'\`

### \`PREMIERE\` [#premiere]

**Значение:** \`'premiere'\`

### \`PREMIERE_WORLD\` [#premiere_world]

**Значение:** \`'premiere.world'\`

### \`PREMIERE_RUSSIA\` [#premiere_russia]

**Значение:** \`'premiere.russia'\`

### \`PREMIERE_USA\` [#premiere_usa]

**Значение:** \`'premiere.usa'\`

### \`SIMILAR_MOVIES\` [#similar_movies]

**Значение:** \`'similarMovies'\`

### \`SEQUELS_AND_PREQUELS\` [#sequels_and_prequels]

**Значение:** \`'sequelsAndPrequels'\`

### \`WATCHABILITY\` [#watchability]

**Значение:** \`'watchability'\`

### \`LISTS\` [#lists]

**Значение:** \`'lists'\`

### \`TOP_10\` [#top_10]

**Значение:** \`'top10'\`

### \`TOP_250\` [#top_250]

**Значение:** \`'top250'\`

### \`SEASONS_INFO\` [#seasons_info]

**Значение:** \`'seasonsInfo'\`

### \`BUDGET\` [#budget]

**Значение:** \`'budget'\`

### \`AUDIENCE\` [#audience]

**Значение:** \`'audience'\`
`,o={contents:[{heading:void 0,content:`**Описание:** Enum для полей фильтрации
Этот enum содержит все возможные поля, которые можно использовать
при фильтрации данных через API Kinopoisk.dev`},{heading:`getfieldtype`,content:`**Описание:** Возвращает тип поля`},{heading:`supportsincludeexclude`,content:`**Описание:** Проверяет, поддерживает ли поле операторы включения/исключения`},{heading:`supportsrange`,content:`**Описание:** Проверяет, поддерживает ли поле диапазоны`},{heading:`getdefaultoperator`,content:`**Описание:** Возвращает оператор по умолчанию для поля`},{heading:`getbasefield`,content:`**Описание:** Возвращает базовое поле для составных полей (например, rating.kp -> rating)`},{heading:`getsubfield`,content:`**Описание:** Возвращает подполе для составных полей (например, rating.kp -> kp)`},{heading:`id`,content:"**Значение:** `'id'`"},{heading:`external_id`,content:"**Значение:** `'externalId'`"},{heading:`name`,content:"**Значение:** `'name'`"},{heading:`en_name`,content:"**Значение:** `'enName'`"},{heading:`alternative_name`,content:"**Значение:** `'alternativeName'`"},{heading:`names`,content:"**Значение:** `'names.name'`"},{heading:`description`,content:"**Значение:** `'description'`"},{heading:`short_description`,content:"**Значение:** `'shortDescription'`"},{heading:`slogan`,content:"**Значение:** `'slogan'`"},{heading:`type`,content:"**Значение:** `'type'`"},{heading:`type_number`,content:"**Значение:** `'typeNumber'`"},{heading:`is_series`,content:"**Значение:** `'isSeries'`"},{heading:`status`,content:"**Значение:** `'status'`"},{heading:`year`,content:"**Значение:** `'year'`"},{heading:`release_years`,content:"**Значение:** `'releaseYears'`"},{heading:`updated_at`,content:"**Значение:** `'updatedAt'`"},{heading:`created_at`,content:"**Значение:** `'createdAt'`"},{heading:`rating_kp`,content:"**Значение:** `'rating.kp'`"},{heading:`rating_imdb`,content:"**Значение:** `'rating.imdb'`"},{heading:`rating_tmdb`,content:"**Значение:** `'rating.tmdb'`"},{heading:`rating_film_critics`,content:"**Значение:** `'rating.filmCritics'`"},{heading:`rating_russian_film_critics`,content:"**Значение:** `'rating.russianFilmCritics'`"},{heading:`rating_await`,content:"**Значение:** `'rating.await'`"},{heading:`rating_mpaa`,content:"**Значение:** `'ratingMpaa'`"},{heading:`age_rating`,content:"**Значение:** `'ageRating'`"},{heading:`votes_kp`,content:"**Значение:** `'votes.kp'`"},{heading:`votes_imdb`,content:"**Значение:** `'votes.imdb'`"},{heading:`votes_tmdb`,content:"**Значение:** `'votes.tmdb'`"},{heading:`votes_film_critics`,content:"**Значение:** `'votes.filmCritics'`"},{heading:`votes_russian_film_critics`,content:"**Значение:** `'votes.russianFilmCritics'`"},{heading:`votes_await`,content:"**Значение:** `'votes.await'`"},{heading:`movie_length`,content:"**Значение:** `'movieLength'`"},{heading:`series_length`,content:"**Значение:** `'seriesLength'`"},{heading:`total_series_length`,content:"**Значение:** `'totalSeriesLength'`"},{heading:`genres`,content:"**Значение:** `'genres.name'`"},{heading:`countries`,content:"**Значение:** `'countries.name'`"},{heading:`poster`,content:"**Значение:** `'poster'`"},{heading:`backdrop`,content:"**Значение:** `'backdrop'`"},{heading:`logo`,content:"**Значение:** `'logo'`"},{heading:`tickets_on_sale`,content:"**Значение:** `'ticketsOnSale'`"},{heading:`videos`,content:"**Значение:** `'videos'`"},{heading:`networks`,content:"**Значение:** `'networks'`"},{heading:`persons`,content:"**Значение:** `'persons'`"},{heading:`persons_name`,content:"**Значение:** `'persons.name'`"},{heading:`persons_id`,content:"**Значение:** `'persons.id'`"},{heading:`persons_profession`,content:"**Значение:** `'persons.profession'`"},{heading:`facts`,content:"**Значение:** `'facts'`"},{heading:`fees`,content:"**Значение:** `'fees'`"},{heading:`premiere`,content:"**Значение:** `'premiere'`"},{heading:`premiere_world`,content:"**Значение:** `'premiere.world'`"},{heading:`premiere_russia`,content:"**Значение:** `'premiere.russia'`"},{heading:`premiere_usa`,content:"**Значение:** `'premiere.usa'`"},{heading:`similar_movies`,content:"**Значение:** `'similarMovies'`"},{heading:`sequels_and_prequels`,content:"**Значение:** `'sequelsAndPrequels'`"},{heading:`watchability`,content:"**Значение:** `'watchability'`"},{heading:`lists`,content:"**Значение:** `'lists'`"},{heading:`top_10`,content:"**Значение:** `'top10'`"},{heading:`top_250`,content:"**Значение:** `'top250'`"},{heading:`seasons_info`,content:"**Значение:** `'seasonsInfo'`"},{heading:`budget`,content:"**Значение:** `'budget'`"},{heading:`audience`,content:"**Значение:** `'audience'`"}],headings:[{id:`getfieldtype`,content:"`getFieldType()`"},{id:`supportsincludeexclude`,content:"`supportsIncludeExclude()`"},{id:`supportsrange`,content:"`supportsRange()`"},{id:`getdefaultoperator`,content:"`getDefaultOperator()`"},{id:`getbasefield`,content:"`getBaseField()`"},{id:`getsubfield`,content:"`getSubField()`"},{id:`cases`,content:`Cases`},{id:`id`,content:"`ID`"},{id:`external_id`,content:"`EXTERNAL_ID`"},{id:`name`,content:"`NAME`"},{id:`en_name`,content:"`EN_NAME`"},{id:`alternative_name`,content:"`ALTERNATIVE_NAME`"},{id:`names`,content:"`NAMES`"},{id:`description`,content:"`DESCRIPTION`"},{id:`short_description`,content:"`SHORT_DESCRIPTION`"},{id:`slogan`,content:"`SLOGAN`"},{id:`type`,content:"`TYPE`"},{id:`type_number`,content:"`TYPE_NUMBER`"},{id:`is_series`,content:"`IS_SERIES`"},{id:`status`,content:"`STATUS`"},{id:`year`,content:"`YEAR`"},{id:`release_years`,content:"`RELEASE_YEARS`"},{id:`updated_at`,content:"`UPDATED_AT`"},{id:`created_at`,content:"`CREATED_AT`"},{id:`rating_kp`,content:"`RATING_KP`"},{id:`rating_imdb`,content:"`RATING_IMDB`"},{id:`rating_tmdb`,content:"`RATING_TMDB`"},{id:`rating_film_critics`,content:"`RATING_FILM_CRITICS`"},{id:`rating_russian_film_critics`,content:"`RATING_RUSSIAN_FILM_CRITICS`"},{id:`rating_await`,content:"`RATING_AWAIT`"},{id:`rating_mpaa`,content:"`RATING_MPAA`"},{id:`age_rating`,content:"`AGE_RATING`"},{id:`votes_kp`,content:"`VOTES_KP`"},{id:`votes_imdb`,content:"`VOTES_IMDB`"},{id:`votes_tmdb`,content:"`VOTES_TMDB`"},{id:`votes_film_critics`,content:"`VOTES_FILM_CRITICS`"},{id:`votes_russian_film_critics`,content:"`VOTES_RUSSIAN_FILM_CRITICS`"},{id:`votes_await`,content:"`VOTES_AWAIT`"},{id:`movie_length`,content:"`MOVIE_LENGTH`"},{id:`series_length`,content:"`SERIES_LENGTH`"},{id:`total_series_length`,content:"`TOTAL_SERIES_LENGTH`"},{id:`genres`,content:"`GENRES`"},{id:`countries`,content:"`COUNTRIES`"},{id:`poster`,content:"`POSTER`"},{id:`backdrop`,content:"`BACKDROP`"},{id:`logo`,content:"`LOGO`"},{id:`tickets_on_sale`,content:"`TICKETS_ON_SALE`"},{id:`videos`,content:"`VIDEOS`"},{id:`networks`,content:"`NETWORKS`"},{id:`persons`,content:"`PERSONS`"},{id:`persons_name`,content:"`PERSONS_NAME`"},{id:`persons_id`,content:"`PERSONS_ID`"},{id:`persons_profession`,content:"`PERSONS_PROFESSION`"},{id:`facts`,content:"`FACTS`"},{id:`fees`,content:"`FEES`"},{id:`premiere`,content:"`PREMIERE`"},{id:`premiere_world`,content:"`PREMIERE_WORLD`"},{id:`premiere_russia`,content:"`PREMIERE_RUSSIA`"},{id:`premiere_usa`,content:"`PREMIERE_USA`"},{id:`similar_movies`,content:"`SIMILAR_MOVIES`"},{id:`sequels_and_prequels`,content:"`SEQUELS_AND_PREQUELS`"},{id:`watchability`,content:"`WATCHABILITY`"},{id:`lists`,content:"`LISTS`"},{id:`top_10`,content:"`TOP_10`"},{id:`top_250`,content:"`TOP_250`"},{id:`seasons_info`,content:"`SEASONS_INFO`"},{id:`budget`,content:"`BUDGET`"},{id:`audience`,content:"`AUDIENCE`"}]},s=[{depth:2,url:`#getfieldtype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFieldType()`})})},{depth:2,url:`#supportsincludeexclude`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`supportsIncludeExclude()`})})},{depth:2,url:`#supportsrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`supportsRange()`})})},{depth:2,url:`#getdefaultoperator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDefaultOperator()`})})},{depth:2,url:`#getbasefield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBaseField()`})})},{depth:2,url:`#getsubfield`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getSubField()`})})},{depth:2,url:`#cases`,title:(0,n.jsx)(n.Fragment,{children:`Cases`})},{depth:3,url:`#id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ID`})})},{depth:3,url:`#external_id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`EXTERNAL_ID`})})},{depth:3,url:`#name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`NAME`})})},{depth:3,url:`#en_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`EN_NAME`})})},{depth:3,url:`#alternative_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`ALTERNATIVE_NAME`})})},{depth:3,url:`#names`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`NAMES`})})},{depth:3,url:`#description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DESCRIPTION`})})},{depth:3,url:`#short_description`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SHORT_DESCRIPTION`})})},{depth:3,url:`#slogan`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SLOGAN`})})},{depth:3,url:`#type`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TYPE`})})},{depth:3,url:`#type_number`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TYPE_NUMBER`})})},{depth:3,url:`#is_series`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`IS_SERIES`})})},{depth:3,url:`#status`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`STATUS`})})},{depth:3,url:`#year`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`YEAR`})})},{depth:3,url:`#release_years`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RELEASE_YEARS`})})},{depth:3,url:`#updated_at`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`UPDATED_AT`})})},{depth:3,url:`#created_at`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`CREATED_AT`})})},{depth:3,url:`#rating_kp`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_KP`})})},{depth:3,url:`#rating_imdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_IMDB`})})},{depth:3,url:`#rating_tmdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_TMDB`})})},{depth:3,url:`#rating_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_FILM_CRITICS`})})},{depth:3,url:`#rating_russian_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_RUSSIAN_FILM_CRITICS`})})},{depth:3,url:`#rating_await`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_AWAIT`})})},{depth:3,url:`#rating_mpaa`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`RATING_MPAA`})})},{depth:3,url:`#age_rating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`AGE_RATING`})})},{depth:3,url:`#votes_kp`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_KP`})})},{depth:3,url:`#votes_imdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_IMDB`})})},{depth:3,url:`#votes_tmdb`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_TMDB`})})},{depth:3,url:`#votes_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_FILM_CRITICS`})})},{depth:3,url:`#votes_russian_film_critics`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_RUSSIAN_FILM_CRITICS`})})},{depth:3,url:`#votes_await`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VOTES_AWAIT`})})},{depth:3,url:`#movie_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`MOVIE_LENGTH`})})},{depth:3,url:`#series_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SERIES_LENGTH`})})},{depth:3,url:`#total_series_length`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOTAL_SERIES_LENGTH`})})},{depth:3,url:`#genres`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`GENRES`})})},{depth:3,url:`#countries`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`COUNTRIES`})})},{depth:3,url:`#poster`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`POSTER`})})},{depth:3,url:`#backdrop`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`BACKDROP`})})},{depth:3,url:`#logo`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`LOGO`})})},{depth:3,url:`#tickets_on_sale`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TICKETS_ON_SALE`})})},{depth:3,url:`#videos`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`VIDEOS`})})},{depth:3,url:`#networks`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`NETWORKS`})})},{depth:3,url:`#persons`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PERSONS`})})},{depth:3,url:`#persons_name`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PERSONS_NAME`})})},{depth:3,url:`#persons_id`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PERSONS_ID`})})},{depth:3,url:`#persons_profession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PERSONS_PROFESSION`})})},{depth:3,url:`#facts`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`FACTS`})})},{depth:3,url:`#fees`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`FEES`})})},{depth:3,url:`#premiere`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE`})})},{depth:3,url:`#premiere_world`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_WORLD`})})},{depth:3,url:`#premiere_russia`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_RUSSIA`})})},{depth:3,url:`#premiere_usa`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PREMIERE_USA`})})},{depth:3,url:`#similar_movies`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SIMILAR_MOVIES`})})},{depth:3,url:`#sequels_and_prequels`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SEQUELS_AND_PREQUELS`})})},{depth:3,url:`#watchability`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`WATCHABILITY`})})},{depth:3,url:`#lists`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`LISTS`})})},{depth:3,url:`#top_10`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOP_10`})})},{depth:3,url:`#top_250`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`TOP_250`})})},{depth:3,url:`#seasons_info`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SEASONS_INFO`})})},{depth:3,url:`#budget`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`BUDGET`})})},{depth:3,url:`#audience`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`AUDIENCE`})})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,p:`p`,strong:`strong`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Enum для полей фильтрации
Этот enum содержит все возможные поля, которые можно использовать
при фильтрации данных через API Kinopoisk.dev`]}),`
`,(0,n.jsx)(t.h2,{id:`getfieldtype`,children:(0,n.jsx)(t.code,{children:`getFieldType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает тип поля`]}),`
`,(0,n.jsx)(t.h2,{id:`supportsincludeexclude`,children:(0,n.jsx)(t.code,{children:`supportsIncludeExclude()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, поддерживает ли поле операторы включения/исключения`]}),`
`,(0,n.jsx)(t.h2,{id:`supportsrange`,children:(0,n.jsx)(t.code,{children:`supportsRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, поддерживает ли поле диапазоны`]}),`
`,(0,n.jsx)(t.h2,{id:`getdefaultoperator`,children:(0,n.jsx)(t.code,{children:`getDefaultOperator()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает оператор по умолчанию для поля`]}),`
`,(0,n.jsx)(t.h2,{id:`getbasefield`,children:(0,n.jsx)(t.code,{children:`getBaseField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает базовое поле для составных полей (например, rating.kp -> rating)`]}),`
`,(0,n.jsx)(t.h2,{id:`getsubfield`,children:(0,n.jsx)(t.code,{children:`getSubField()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает подполе для составных полей (например, rating.kp -> kp)`]}),`
`,(0,n.jsx)(t.h2,{id:`cases`,children:`Cases`}),`
`,(0,n.jsx)(t.h3,{id:`id`,children:(0,n.jsx)(t.code,{children:`ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'id'`})]}),`
`,(0,n.jsx)(t.h3,{id:`external_id`,children:(0,n.jsx)(t.code,{children:`EXTERNAL_ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'externalId'`})]}),`
`,(0,n.jsx)(t.h3,{id:`name`,children:(0,n.jsx)(t.code,{children:`NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`en_name`,children:(0,n.jsx)(t.code,{children:`EN_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'enName'`})]}),`
`,(0,n.jsx)(t.h3,{id:`alternative_name`,children:(0,n.jsx)(t.code,{children:`ALTERNATIVE_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'alternativeName'`})]}),`
`,(0,n.jsx)(t.h3,{id:`names`,children:(0,n.jsx)(t.code,{children:`NAMES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'names.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`description`,children:(0,n.jsx)(t.code,{children:`DESCRIPTION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'description'`})]}),`
`,(0,n.jsx)(t.h3,{id:`short_description`,children:(0,n.jsx)(t.code,{children:`SHORT_DESCRIPTION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'shortDescription'`})]}),`
`,(0,n.jsx)(t.h3,{id:`slogan`,children:(0,n.jsx)(t.code,{children:`SLOGAN`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'slogan'`})]}),`
`,(0,n.jsx)(t.h3,{id:`type`,children:(0,n.jsx)(t.code,{children:`TYPE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'type'`})]}),`
`,(0,n.jsx)(t.h3,{id:`type_number`,children:(0,n.jsx)(t.code,{children:`TYPE_NUMBER`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'typeNumber'`})]}),`
`,(0,n.jsx)(t.h3,{id:`is_series`,children:(0,n.jsx)(t.code,{children:`IS_SERIES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'isSeries'`})]}),`
`,(0,n.jsx)(t.h3,{id:`status`,children:(0,n.jsx)(t.code,{children:`STATUS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'status'`})]}),`
`,(0,n.jsx)(t.h3,{id:`year`,children:(0,n.jsx)(t.code,{children:`YEAR`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'year'`})]}),`
`,(0,n.jsx)(t.h3,{id:`release_years`,children:(0,n.jsx)(t.code,{children:`RELEASE_YEARS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'releaseYears'`})]}),`
`,(0,n.jsx)(t.h3,{id:`updated_at`,children:(0,n.jsx)(t.code,{children:`UPDATED_AT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'updatedAt'`})]}),`
`,(0,n.jsx)(t.h3,{id:`created_at`,children:(0,n.jsx)(t.code,{children:`CREATED_AT`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'createdAt'`})]}),`
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
`,(0,n.jsx)(t.h3,{id:`rating_mpaa`,children:(0,n.jsx)(t.code,{children:`RATING_MPAA`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'ratingMpaa'`})]}),`
`,(0,n.jsx)(t.h3,{id:`age_rating`,children:(0,n.jsx)(t.code,{children:`AGE_RATING`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'ageRating'`})]}),`
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
`,(0,n.jsx)(t.h3,{id:`genres`,children:(0,n.jsx)(t.code,{children:`GENRES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'genres.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`countries`,children:(0,n.jsx)(t.code,{children:`COUNTRIES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'countries.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`poster`,children:(0,n.jsx)(t.code,{children:`POSTER`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'poster'`})]}),`
`,(0,n.jsx)(t.h3,{id:`backdrop`,children:(0,n.jsx)(t.code,{children:`BACKDROP`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'backdrop'`})]}),`
`,(0,n.jsx)(t.h3,{id:`logo`,children:(0,n.jsx)(t.code,{children:`LOGO`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'logo'`})]}),`
`,(0,n.jsx)(t.h3,{id:`tickets_on_sale`,children:(0,n.jsx)(t.code,{children:`TICKETS_ON_SALE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'ticketsOnSale'`})]}),`
`,(0,n.jsx)(t.h3,{id:`videos`,children:(0,n.jsx)(t.code,{children:`VIDEOS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'videos'`})]}),`
`,(0,n.jsx)(t.h3,{id:`networks`,children:(0,n.jsx)(t.code,{children:`NETWORKS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'networks'`})]}),`
`,(0,n.jsx)(t.h3,{id:`persons`,children:(0,n.jsx)(t.code,{children:`PERSONS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'persons'`})]}),`
`,(0,n.jsx)(t.h3,{id:`persons_name`,children:(0,n.jsx)(t.code,{children:`PERSONS_NAME`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'persons.name'`})]}),`
`,(0,n.jsx)(t.h3,{id:`persons_id`,children:(0,n.jsx)(t.code,{children:`PERSONS_ID`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'persons.id'`})]}),`
`,(0,n.jsx)(t.h3,{id:`persons_profession`,children:(0,n.jsx)(t.code,{children:`PERSONS_PROFESSION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'persons.profession'`})]}),`
`,(0,n.jsx)(t.h3,{id:`facts`,children:(0,n.jsx)(t.code,{children:`FACTS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'facts'`})]}),`
`,(0,n.jsx)(t.h3,{id:`fees`,children:(0,n.jsx)(t.code,{children:`FEES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'fees'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere`,children:(0,n.jsx)(t.code,{children:`PREMIERE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_world`,children:(0,n.jsx)(t.code,{children:`PREMIERE_WORLD`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.world'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_russia`,children:(0,n.jsx)(t.code,{children:`PREMIERE_RUSSIA`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.russia'`})]}),`
`,(0,n.jsx)(t.h3,{id:`premiere_usa`,children:(0,n.jsx)(t.code,{children:`PREMIERE_USA`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'premiere.usa'`})]}),`
`,(0,n.jsx)(t.h3,{id:`similar_movies`,children:(0,n.jsx)(t.code,{children:`SIMILAR_MOVIES`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'similarMovies'`})]}),`
`,(0,n.jsx)(t.h3,{id:`sequels_and_prequels`,children:(0,n.jsx)(t.code,{children:`SEQUELS_AND_PREQUELS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'sequelsAndPrequels'`})]}),`
`,(0,n.jsx)(t.h3,{id:`watchability`,children:(0,n.jsx)(t.code,{children:`WATCHABILITY`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'watchability'`})]}),`
`,(0,n.jsx)(t.h3,{id:`lists`,children:(0,n.jsx)(t.code,{children:`LISTS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'lists'`})]}),`
`,(0,n.jsx)(t.h3,{id:`top_10`,children:(0,n.jsx)(t.code,{children:`TOP_10`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'top10'`})]}),`
`,(0,n.jsx)(t.h3,{id:`top_250`,children:(0,n.jsx)(t.code,{children:`TOP_250`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'top250'`})]}),`
`,(0,n.jsx)(t.h3,{id:`seasons_info`,children:(0,n.jsx)(t.code,{children:`SEASONS_INFO`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'seasonsInfo'`})]}),`
`,(0,n.jsx)(t.h3,{id:`budget`,children:(0,n.jsx)(t.code,{children:`BUDGET`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'budget'`})]}),`
`,(0,n.jsx)(t.h3,{id:`audience`,children:(0,n.jsx)(t.code,{children:`AUDIENCE`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'audience'`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};