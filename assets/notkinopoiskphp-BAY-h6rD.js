import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`NotKinopoiskPHP`,description:`PHP wrapper для API КиноПоиска. Полная документация по использованию NotKinopoiskPHP.`},i=new Date(1787217967e3),a=`

Полная документация PHP библиотеки для работы с Kinopoisk Unofficial API.

## 📚 Содержание [#-содержание]

### 🚀 Быстрый старт [#-быстрый-старт]

* [Основной клиент](./client) - Главный класс для работы с API
* [Примеры использования](https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples) - Готовые примеры кода
* [Карта навигации](./navigation-map) - Интерактивная карта всей документации

### 📦 Основные компоненты [#-основные-компоненты]

#### 🔧 Сервисы [#-сервисы]

* [FilmService](./services/film-service) - Работа с фильмами
* [PersonService](./services/person-service) - Работа с персонами
* [MediaService](./services/media-service) - Работа с медиа
* [UserService](./services/user-service) - Работа с пользователями

#### 📊 Модели данных [#-модели-данных]

* [Film](./models/film) - Модель фильма
* [Person](./models/person) - Модель персоны
* [Staff](./models/staff) - Модель съемочной группы
* [Review](./models/review) - Модель отзыва
* [Image](./models/image) - Модель изображения
* [Video](./models/video) - Модель видео
* [Fact](./models/fact) - Модель факта
* [Award](./models/award) - Модель награды
* [BoxOffice](./models/box-office) - Модель кассовых сборов
* [Country](./models/country) - Модель страны
* [Genre](./models/genre) - Модель жанра
* [Episode](./models/episode) - Модель эпизода
* [Season](./models/season) - Модель сезона
* [ExternalSource](./models/external-source) - Модель внешнего источника
* [Distribution](./models/distribution) - Модель дистрибуции
* [FilmSearchResult](./models/film-search-result) - Модель результата поиска
* [PersonSpouse](./models/person-spouse) - Модель супруга
* [PersonFilm](./models/person-film) - Модель фильма персоны
* [UserVote](./models/user-vote) - Модель голоса пользователя
* [FilmCollection](./models/film-collection) - Модель коллекции фильмов
* [Filters](./models/filters) - Модель фильтров
* [RelatedFilm](./models/related-film) - Модель связанного фильма
* [ApiKeyInfo](./models/api-key-info) - Модель информации об API ключе
* [ApiKeyQouta](./models/api-key-qouta) - Модель квоты API ключа
* [MediaPost](./models/media-post) - Модель медиа поста

#### 🔢 Перечисления (Enums) [#-перечисления-enums]

* [ImageType](./enums/image-type) - Типы изображений
* [ReviewOrder](./enums/review-order) - Порядок сортировки отзывов
* [ReviewType](./enums/review-type) - Типы отзывов
* [FactType](./enums/fact-type) - Типы фактов
* [ProfessionKey](./enums/profession-key) - Ключи профессий
* [VideoSite](./enums/video-site) - Сайты видео
* [BoxOfficeType](./enums/box-office-type) - Типы кассовых сборов
* [DistributionType](./enums/distribution-type) - Типы дистрибуции
* [RelationType](./enums/relation-type) - Типы связей
* [Sex](./enums/sex) - Пол
* [ApiVersion](./enums/api-version) - Версии API
* [Month](./enums/month) - Месяцы
* [FilmOrder](./enums/film-order) - Порядок сортировки фильмов
* [ContentType](./enums/content-type) - Типы контента
* [CollectionType](./enums/collection-type) - Типы коллекций
* [DistributionSubType](./enums/distribution-sub-type) - Подтипы дистрибуции
* [AccountType](./enums/account-type) - Типы аккаунтов

#### 📤 Ответы API [#-ответы-api]

* [DefaultResponse](./responses/default-response) - Базовый ответ
* [PaginatedResponse](./responses/paginated-response) - Пагинированный ответ
* [KeywordSearchResponse](./responses/keyword-search-response) - Ответ поиска по ключевым словам

#### ⚠️ Исключения [#️-исключения]

* [ApiException](./exceptions/api-exception) - Базовое исключение API
* [InvalidApiKeyException](./exceptions/invalid-api-key-exception) - Неверный API ключ
* [RateLimitException](./exceptions/rate-limit-exception) - Превышение лимита запросов
* [ResourceNotFoundException](./exceptions/resource-not-found-exception) - Ресурс не найден
* [KpValidationException](./exceptions/kp-validation-exception) - Ошибка валидации

#### 🔗 Интерфейсы [#-интерфейсы]

* [ModelInterface](./interfaces/model-interface) - Интерфейс модели
* [ResponseInterface](./interfaces/response-interface) - Интерфейс ответа

## 🚀 Быстрый старт [#-быстрый-старт-1]

### Установка [#установка]

\`\`\`bash
composer require devcraftclub/kinopoiskapiunofficialtech
\`\`\`

### Базовое использование [#базовое-использование]

\`\`\`php
<?php

require_once 'vendor/autoload.php';

use NotKinopoisk\\Client;

// Создание клиента
$client = new Client('your-api-key');

// Получение фильма по ID
$film = $client->films->getById(301);

echo "Фильм: {$film->getDisplayName()}\\n";
echo "Рейтинг: {$film->rating}\\n";
echo "Год: {$film->year}\\n";
\`\`\`

## 📖 Подробные примеры [#-подробные-примеры]

### Работа с фильмами [#работа-с-фильмами]

\`\`\`php
// Поиск фильмов
$searchResults = $client->films->searchByKeyword('матрица');

// Получение топ фильмов
$topFilms = $client->films->getTop();

// Получение информации о фильме
$film = $client->films->getById(301);
$staff = $client->films->getStaff(301);
$facts = $client->films->getFacts(301);
\`\`\`

### Работа с персонами [#работа-с-персонами]

\`\`\`php
// Поиск персон
$persons = $client->persons->searchByName('Том Круз');

// Получение информации о персоне
$person = $client->persons->getById(123);
$films = $client->persons->getFilms(123);
\`\`\`

### Работа с медиа [#работа-с-медиа]

\`\`\`php
// Получение изображений
$images = $client->media->getImages(301, ImageType::POSTER);

// Получение видео
$videos = $client->media->getVideos(301);
\`\`\`

## 🔧 Конфигурация [#-конфигурация]

### Настройка клиента [#настройка-клиента]

\`\`\`php
$client = new Client('your-api-key', [
    'timeout' => 30,
    'retry_attempts' => 3,
    'api_version' => ApiVersion::V2_1
]);
\`\`\`

### Обработка ошибок [#обработка-ошибок]

\`\`\`php
try {
    $film = $client->films->getById(999999);
} catch (ResourceNotFoundException $e) {
    echo "Фильм не найден: {$e->getMessage()}\\n";
} catch (RateLimitException $e) {
    echo "Превышен лимит запросов\\n";
} catch (ApiException $e) {
    echo "Ошибка API: {$e->getMessage()}\\n";
}
\`\`\`

## 📊 Структура проекта [#-структура-проекта]

\`\`\`
src/
├── Client.php              # Основной клиент
├── Services/               # Сервисы для работы с API
│   ├── FilmService.php
│   ├── PersonService.php
│   ├── MediaService.php
│   └── UserService.php
├── Models/                 # Модели данных
│   ├── Film.php
│   ├── Person.php
│   ├── Staff.php
│   └── ...
├── Enums/                  # Перечисления
│   ├── ImageType.php
│   ├── ReviewOrder.php
│   └── ...
├── Responses/              # Классы ответов
│   ├── DefaultResponse.php
│   ├── PaginatedResponse.php
│   └── ...
├── Exceptions/             # Исключения
│   ├── ApiException.php
│   ├── InvalidApiKeyException.php
│   └── ...
└── Interfaces/             # Интерфейсы
    ├── ModelInterface.php
    └── ResponseInterface.php
\`\`\`

## 🧪 Тестирование [#-тестирование]

### Запуск тестов [#запуск-тестов]

\`\`\`bash
# Все тесты
XDEBUG_MODE=coverage KINOPOISK_API_KEY=your-key composer test

# Только unit тесты
composer test -- --testsuite=Unit

# Только интеграционные тесты
composer test -- --testsuite=Integration
\`\`\`

### Проверка качества кода [#проверка-качества-кода]

\`\`\`bash
# PHPStan анализ
XDEBUG_MODE=coverage KINOPOISK_API_KEY=your-key composer phpstan

# PHP CodeSniffer
composer phpcs
\`\`\`

## 📝 Примеры использования [#-примеры-использования]

Смотрите папку [\`examples/\`](https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples) для готовых примеров:

* [Базовое использование](https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/basic_usage.php)
* [Примеры конфигурации](https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/configuration_examples.php)
* [Работа с перечислениями](https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/enums_usage.php)
* [Использование с .env](https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/with_dotenv.php)

## 🔗 Полезные ссылки [#-полезные-ссылки]

* [GitHub репозиторий](https://github.com/DevCraftClub/NotKinopoiskPHP/)
* [Kinopoisk Unofficial API](https://kinopoiskapiunofficial.tech/)
* [Composer](https://getcomposer.org/)
`,o={contents:[{heading:void 0,content:`Полная документация PHP библиотеки для работы с Kinopoisk Unofficial API.`},{heading:`-быстрый-старт`,content:`Основной клиент - Главный класс для работы с API`},{heading:`-быстрый-старт`,content:`Примеры использования - Готовые примеры кода`},{heading:`-быстрый-старт`,content:`Карта навигации - Интерактивная карта всей документации`},{heading:`-сервисы`,content:`FilmService - Работа с фильмами`},{heading:`-сервисы`,content:`PersonService - Работа с персонами`},{heading:`-сервисы`,content:`MediaService - Работа с медиа`},{heading:`-сервисы`,content:`UserService - Работа с пользователями`},{heading:`-модели-данных`,content:`Film - Модель фильма`},{heading:`-модели-данных`,content:`Person - Модель персоны`},{heading:`-модели-данных`,content:`Staff - Модель съемочной группы`},{heading:`-модели-данных`,content:`Review - Модель отзыва`},{heading:`-модели-данных`,content:`Image - Модель изображения`},{heading:`-модели-данных`,content:`Video - Модель видео`},{heading:`-модели-данных`,content:`Fact - Модель факта`},{heading:`-модели-данных`,content:`Award - Модель награды`},{heading:`-модели-данных`,content:`BoxOffice - Модель кассовых сборов`},{heading:`-модели-данных`,content:`Country - Модель страны`},{heading:`-модели-данных`,content:`Genre - Модель жанра`},{heading:`-модели-данных`,content:`Episode - Модель эпизода`},{heading:`-модели-данных`,content:`Season - Модель сезона`},{heading:`-модели-данных`,content:`ExternalSource - Модель внешнего источника`},{heading:`-модели-данных`,content:`Distribution - Модель дистрибуции`},{heading:`-модели-данных`,content:`FilmSearchResult - Модель результата поиска`},{heading:`-модели-данных`,content:`PersonSpouse - Модель супруга`},{heading:`-модели-данных`,content:`PersonFilm - Модель фильма персоны`},{heading:`-модели-данных`,content:`UserVote - Модель голоса пользователя`},{heading:`-модели-данных`,content:`FilmCollection - Модель коллекции фильмов`},{heading:`-модели-данных`,content:`Filters - Модель фильтров`},{heading:`-модели-данных`,content:`RelatedFilm - Модель связанного фильма`},{heading:`-модели-данных`,content:`ApiKeyInfo - Модель информации об API ключе`},{heading:`-модели-данных`,content:`ApiKeyQouta - Модель квоты API ключа`},{heading:`-модели-данных`,content:`MediaPost - Модель медиа поста`},{heading:`-перечисления-enums`,content:`ImageType - Типы изображений`},{heading:`-перечисления-enums`,content:`ReviewOrder - Порядок сортировки отзывов`},{heading:`-перечисления-enums`,content:`ReviewType - Типы отзывов`},{heading:`-перечисления-enums`,content:`FactType - Типы фактов`},{heading:`-перечисления-enums`,content:`ProfessionKey - Ключи профессий`},{heading:`-перечисления-enums`,content:`VideoSite - Сайты видео`},{heading:`-перечисления-enums`,content:`BoxOfficeType - Типы кассовых сборов`},{heading:`-перечисления-enums`,content:`DistributionType - Типы дистрибуции`},{heading:`-перечисления-enums`,content:`RelationType - Типы связей`},{heading:`-перечисления-enums`,content:`Sex - Пол`},{heading:`-перечисления-enums`,content:`ApiVersion - Версии API`},{heading:`-перечисления-enums`,content:`Month - Месяцы`},{heading:`-перечисления-enums`,content:`FilmOrder - Порядок сортировки фильмов`},{heading:`-перечисления-enums`,content:`ContentType - Типы контента`},{heading:`-перечисления-enums`,content:`CollectionType - Типы коллекций`},{heading:`-перечисления-enums`,content:`DistributionSubType - Подтипы дистрибуции`},{heading:`-перечисления-enums`,content:`AccountType - Типы аккаунтов`},{heading:`-ответы-api`,content:`DefaultResponse - Базовый ответ`},{heading:`-ответы-api`,content:`PaginatedResponse - Пагинированный ответ`},{heading:`-ответы-api`,content:`KeywordSearchResponse - Ответ поиска по ключевым словам`},{heading:`️-исключения`,content:`ApiException - Базовое исключение API`},{heading:`️-исключения`,content:`InvalidApiKeyException - Неверный API ключ`},{heading:`️-исключения`,content:`RateLimitException - Превышение лимита запросов`},{heading:`️-исключения`,content:`ResourceNotFoundException - Ресурс не найден`},{heading:`️-исключения`,content:`KpValidationException - Ошибка валидации`},{heading:`-интерфейсы`,content:`ModelInterface - Интерфейс модели`},{heading:`-интерфейсы`,content:`ResponseInterface - Интерфейс ответа`},{heading:`-примеры-использования`,content:"Смотрите папку `examples/` для готовых примеров:"},{heading:`-примеры-использования`,content:`Базовое использование`},{heading:`-примеры-использования`,content:`Примеры конфигурации`},{heading:`-примеры-использования`,content:`Работа с перечислениями`},{heading:`-примеры-использования`,content:`Использование с .env`},{heading:`-полезные-ссылки`,content:`GitHub репозиторий`},{heading:`-полезные-ссылки`,content:`Kinopoisk Unofficial API`},{heading:`-полезные-ссылки`,content:`Composer`}],headings:[{id:`-содержание`,content:`📚 Содержание`},{id:`-быстрый-старт`,content:`🚀 Быстрый старт`},{id:`-основные-компоненты`,content:`📦 Основные компоненты`},{id:`-сервисы`,content:`🔧 Сервисы`},{id:`-модели-данных`,content:`📊 Модели данных`},{id:`-перечисления-enums`,content:`🔢 Перечисления (Enums)`},{id:`-ответы-api`,content:`📤 Ответы API`},{id:`️-исключения`,content:`⚠️ Исключения`},{id:`-интерфейсы`,content:`🔗 Интерфейсы`},{id:`-быстрый-старт-1`,content:`🚀 Быстрый старт`},{id:`установка`,content:`Установка`},{id:`базовое-использование`,content:`Базовое использование`},{id:`-подробные-примеры`,content:`📖 Подробные примеры`},{id:`работа-с-фильмами`,content:`Работа с фильмами`},{id:`работа-с-персонами`,content:`Работа с персонами`},{id:`работа-с-медиа`,content:`Работа с медиа`},{id:`-конфигурация`,content:`🔧 Конфигурация`},{id:`настройка-клиента`,content:`Настройка клиента`},{id:`обработка-ошибок`,content:`Обработка ошибок`},{id:`-структура-проекта`,content:`📊 Структура проекта`},{id:`-тестирование`,content:`🧪 Тестирование`},{id:`запуск-тестов`,content:`Запуск тестов`},{id:`проверка-качества-кода`,content:`Проверка качества кода`},{id:`-примеры-использования`,content:`📝 Примеры использования`},{id:`-полезные-ссылки`,content:`🔗 Полезные ссылки`}]},s=[{depth:2,url:`#-содержание`,title:(0,n.jsx)(n.Fragment,{children:`📚 Содержание`})},{depth:3,url:`#-быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`🚀 Быстрый старт`})},{depth:3,url:`#-основные-компоненты`,title:(0,n.jsx)(n.Fragment,{children:`📦 Основные компоненты`})},{depth:4,url:`#-сервисы`,title:(0,n.jsx)(n.Fragment,{children:`🔧 Сервисы`})},{depth:4,url:`#-модели-данных`,title:(0,n.jsx)(n.Fragment,{children:`📊 Модели данных`})},{depth:4,url:`#-перечисления-enums`,title:(0,n.jsx)(n.Fragment,{children:`🔢 Перечисления (Enums)`})},{depth:4,url:`#-ответы-api`,title:(0,n.jsx)(n.Fragment,{children:`📤 Ответы API`})},{depth:4,url:`#️-исключения`,title:(0,n.jsx)(n.Fragment,{children:`⚠️ Исключения`})},{depth:4,url:`#-интерфейсы`,title:(0,n.jsx)(n.Fragment,{children:`🔗 Интерфейсы`})},{depth:2,url:`#-быстрый-старт-1`,title:(0,n.jsx)(n.Fragment,{children:`🚀 Быстрый старт`})},{depth:3,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:3,url:`#базовое-использование`,title:(0,n.jsx)(n.Fragment,{children:`Базовое использование`})},{depth:2,url:`#-подробные-примеры`,title:(0,n.jsx)(n.Fragment,{children:`📖 Подробные примеры`})},{depth:3,url:`#работа-с-фильмами`,title:(0,n.jsx)(n.Fragment,{children:`Работа с фильмами`})},{depth:3,url:`#работа-с-персонами`,title:(0,n.jsx)(n.Fragment,{children:`Работа с персонами`})},{depth:3,url:`#работа-с-медиа`,title:(0,n.jsx)(n.Fragment,{children:`Работа с медиа`})},{depth:2,url:`#-конфигурация`,title:(0,n.jsx)(n.Fragment,{children:`🔧 Конфигурация`})},{depth:3,url:`#настройка-клиента`,title:(0,n.jsx)(n.Fragment,{children:`Настройка клиента`})},{depth:3,url:`#обработка-ошибок`,title:(0,n.jsx)(n.Fragment,{children:`Обработка ошибок`})},{depth:2,url:`#-структура-проекта`,title:(0,n.jsx)(n.Fragment,{children:`📊 Структура проекта`})},{depth:2,url:`#-тестирование`,title:(0,n.jsx)(n.Fragment,{children:`🧪 Тестирование`})},{depth:3,url:`#запуск-тестов`,title:(0,n.jsx)(n.Fragment,{children:`Запуск тестов`})},{depth:3,url:`#проверка-качества-кода`,title:(0,n.jsx)(n.Fragment,{children:`Проверка качества кода`})},{depth:2,url:`#-примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`📝 Примеры использования`})},{depth:2,url:`#-полезные-ссылки`,title:(0,n.jsx)(n.Fragment,{children:`🔗 Полезные ссылки`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,span:`span`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Полная документация PHP библиотеки для работы с Kinopoisk Unofficial API.`}),`
`,(0,n.jsx)(t.h2,{id:`-содержание`,children:`📚 Содержание`}),`
`,(0,n.jsx)(t.h3,{id:`-быстрый-старт`,children:`🚀 Быстрый старт`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./client`,children:`Основной клиент`}),` - Главный класс для работы с API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples`,children:`Примеры использования`}),` - Готовые примеры кода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./navigation-map`,children:`Карта навигации`}),` - Интерактивная карта всей документации`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-основные-компоненты`,children:`📦 Основные компоненты`}),`
`,(0,n.jsx)(t.h4,{id:`-сервисы`,children:`🔧 Сервисы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/film-service`,children:`FilmService`}),` - Работа с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/person-service`,children:`PersonService`}),` - Работа с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/media-service`,children:`MediaService`}),` - Работа с медиа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/user-service`,children:`UserService`}),` - Работа с пользователями`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`-модели-данных`,children:`📊 Модели данных`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/film`,children:`Film`}),` - Модель фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/person`,children:`Person`}),` - Модель персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/staff`,children:`Staff`}),` - Модель съемочной группы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/review`,children:`Review`}),` - Модель отзыва`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/image`,children:`Image`}),` - Модель изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/video`,children:`Video`}),` - Модель видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/fact`,children:`Fact`}),` - Модель факта`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/award`,children:`Award`}),` - Модель награды`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/box-office`,children:`BoxOffice`}),` - Модель кассовых сборов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/country`,children:`Country`}),` - Модель страны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/genre`,children:`Genre`}),` - Модель жанра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/episode`,children:`Episode`}),` - Модель эпизода`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/season`,children:`Season`}),` - Модель сезона`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/external-source`,children:`ExternalSource`}),` - Модель внешнего источника`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/distribution`,children:`Distribution`}),` - Модель дистрибуции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/film-search-result`,children:`FilmSearchResult`}),` - Модель результата поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/person-spouse`,children:`PersonSpouse`}),` - Модель супруга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/person-film`,children:`PersonFilm`}),` - Модель фильма персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/user-vote`,children:`UserVote`}),` - Модель голоса пользователя`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/film-collection`,children:`FilmCollection`}),` - Модель коллекции фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/filters`,children:`Filters`}),` - Модель фильтров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/related-film`,children:`RelatedFilm`}),` - Модель связанного фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/api-key-info`,children:`ApiKeyInfo`}),` - Модель информации об API ключе`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/api-key-qouta`,children:`ApiKeyQouta`}),` - Модель квоты API ключа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./models/media-post`,children:`MediaPost`}),` - Модель медиа поста`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`-перечисления-enums`,children:`🔢 Перечисления (Enums)`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/image-type`,children:`ImageType`}),` - Типы изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/review-order`,children:`ReviewOrder`}),` - Порядок сортировки отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/review-type`,children:`ReviewType`}),` - Типы отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/fact-type`,children:`FactType`}),` - Типы фактов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/profession-key`,children:`ProfessionKey`}),` - Ключи профессий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/video-site`,children:`VideoSite`}),` - Сайты видео`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/box-office-type`,children:`BoxOfficeType`}),` - Типы кассовых сборов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/distribution-type`,children:`DistributionType`}),` - Типы дистрибуции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/relation-type`,children:`RelationType`}),` - Типы связей`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/sex`,children:`Sex`}),` - Пол`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/api-version`,children:`ApiVersion`}),` - Версии API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/month`,children:`Month`}),` - Месяцы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/film-order`,children:`FilmOrder`}),` - Порядок сортировки фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/content-type`,children:`ContentType`}),` - Типы контента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/collection-type`,children:`CollectionType`}),` - Типы коллекций`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/distribution-sub-type`,children:`DistributionSubType`}),` - Подтипы дистрибуции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/account-type`,children:`AccountType`}),` - Типы аккаунтов`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`-ответы-api`,children:`📤 Ответы API`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./responses/default-response`,children:`DefaultResponse`}),` - Базовый ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./responses/paginated-response`,children:`PaginatedResponse`}),` - Пагинированный ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./responses/keyword-search-response`,children:`KeywordSearchResponse`}),` - Ответ поиска по ключевым словам`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`️-исключения`,children:`⚠️ Исключения`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/api-exception`,children:`ApiException`}),` - Базовое исключение API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/invalid-api-key-exception`,children:`InvalidApiKeyException`}),` - Неверный API ключ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/rate-limit-exception`,children:`RateLimitException`}),` - Превышение лимита запросов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/resource-not-found-exception`,children:`ResourceNotFoundException`}),` - Ресурс не найден`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/kp-validation-exception`,children:`KpValidationException`}),` - Ошибка валидации`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`-интерфейсы`,children:`🔗 Интерфейсы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./interfaces/model-interface`,children:`ModelInterface`}),` - Интерфейс модели`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./interfaces/response-interface`,children:`ResponseInterface`}),` - Интерфейс ответа`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-быстрый-старт-1`,children:`🚀 Быстрый старт`}),`
`,(0,n.jsx)(t.h3,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` devcraftclub/kinopoiskapiunofficialtech`})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`require_once`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'vendor/autoload.php'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание клиента`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение фильма по ID`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Фильм: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`()}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Рейтинг: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Год: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-подробные-примеры`,children:`📖 Подробные примеры`}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-фильмами`,children:`Работа с фильмами`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$searchResults `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByKeyword`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'матрица'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение топ фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$topFilms `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getTop`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение информации о фильме`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$staff `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getStaff`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$facts `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getFacts`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-персонами`,children:`Работа с персонами`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск персон`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$persons `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Том Круз'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение информации о персоне`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$person `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$films `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getFilms`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`работа-с-медиа`,children:`Работа с медиа`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение изображений`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$images `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`media`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`POSTER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение видео`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$videos `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`media`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getVideos`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-конфигурация`,children:`🔧 Конфигурация`}),`
`,(0,n.jsx)(t.h3,{id:`настройка-клиента`,children:`Настройка клиента`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'timeout'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'retry_attempts'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 3`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'api_version'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ApiVersion`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`V2_1`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`обработка-ошибок`,children:`Обработка ошибок`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`999999`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ResourceNotFoundException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Фильм не найден: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`()}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`RateLimitException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Превышен лимит запросов`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ApiException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Ошибка API: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`()}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-структура-проекта`,children:`📊 Структура проекта`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`src/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Client.php              # Основной клиент`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Services/               # Сервисы для работы с API`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── FilmService.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── PersonService.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── MediaService.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── UserService.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Models/                 # Модели данных`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── Film.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── Person.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── Staff.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── ...`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Enums/                  # Перечисления`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── ImageType.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── ReviewOrder.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── ...`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Responses/              # Классы ответов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── DefaultResponse.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── PaginatedResponse.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── ...`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Exceptions/             # Исключения`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── ApiException.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── InvalidApiKeyException.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── ...`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── Interfaces/             # Интерфейсы`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── ModelInterface.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── ResponseInterface.php`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-тестирование`,children:`🧪 Тестирование`}),`
`,(0,n.jsx)(t.h3,{id:`запуск-тестов`,children:`Запуск тестов`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`# Все тесты`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`XDEBUG_MODE`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`coverage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` KINOPOISK_API_KEY`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`your-key`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` test`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`# Только unit тесты`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` test`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --testsuite=Unit`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`# Только интеграционные тесты`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` test`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --testsuite=Integration`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`проверка-качества-кода`,children:`Проверка качества кода`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`# PHPStan анализ`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`XDEBUG_MODE`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`coverage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` KINOPOISK_API_KEY`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`your-key`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` phpstan`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`# PHP CodeSniffer`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` phpcs`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-примеры-использования`,children:`📝 Примеры использования`}),`
`,(0,n.jsxs)(t.p,{children:[`Смотрите папку `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples`,children:(0,n.jsx)(t.code,{children:`examples/`})}),` для готовых примеров:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/basic_usage.php`,children:`Базовое использование`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/configuration_examples.php`,children:`Примеры конфигурации`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/enums_usage.php`,children:`Работа с перечислениями`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/blob/main/examples/with_dotenv.php`,children:`Использование с .env`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-полезные-ссылки`,children:`🔗 Полезные ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/`,children:`GitHub репозиторий`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://kinopoiskapiunofficial.tech/`,children:`Kinopoisk Unofficial API`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://getcomposer.org/`,children:`Composer`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};