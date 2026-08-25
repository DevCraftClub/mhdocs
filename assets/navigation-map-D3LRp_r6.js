import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Карта навигации документации`,description:`Документация по карта навигации документации. Часть API wrapper для КиноПоиска.`},i=new Date(1787654208e3),a=`

Интерактивная карта навигации по всей документации NotKinopoisk PHP Library.

***

**📚 Навигация:** [Главная](./index) → Карта навигации

***

## 🗺️ Структура документации [#️-структура-документации]

\`\`\`
📁 docs/
├── 📄 index.md                              # Главная страница
├── 📄 navigation-map.md                     # Карта навигации (этот файл)
├── 📄 client.md                             # Основной клиент
│
├── 📁 services/                             # Сервисы API
│   ├── 📄 index.md                          # Обзор сервисов
│   ├── 📄 film-service.md                   # Сервис фильмов
│   ├── 📄 person-service.md                 # Сервис персон
│   ├── 📄 media-service.md                  # Сервис медиа
│   └── 📄 user-service.md                   # Сервис пользователей
│
├── 📁 models/                               # Модели данных
│   ├── 📄 index.md                          # Обзор моделей
│   ├── 📄 film.md                           # Модель фильма
│   ├── 📄 person.md                         # Модель персоны
│   ├── 📄 staff.md                          # Модель съемочной группы
│   ├── 📄 review.md                         # Модель отзыва
│   ├── 📄 fact.md                           # Модель факта
│   ├── 📄 image.md                          # Модель изображения
│   ├── 📄 video.md                          # Модель видео
│   ├── 📄 award.md                          # Модель награды
│   ├── 📄 box-office.md                     # Модель кассовых сборов
│   ├── 📄 country.md                        # Модель страны
│   ├── 📄 genre.md                          # Модель жанра
│   ├── 📄 episode.md                        # Модель эпизода
│   ├── 📄 season.md                         # Модель сезона
│   ├── 📄 external-source.md                # Модель внешнего источника
│   ├── 📄 distribution.md                   # Модель дистрибуции
│   ├── 📄 film-search-result.md             # Модель результата поиска
│   ├── 📄 person-spouse.md                  # Модель супруга
│   ├── 📄 person-film.md                    # Модель фильма персоны
│   ├── 📄 user-vote.md                      # Модель голоса пользователя
│   ├── 📄 film-collection.md                # Модель коллекции фильмов
│   ├── 📄 filters.md                        # Модель фильтров
│   ├── 📄 related-film.md                   # Модель связанного фильма
│   ├── 📄 api-key-info.md                   # Модель информации об API ключе
│   ├── 📄 api-key-qouta.md                  # Модель квоты API ключа
│   └── 📄 media-post.md                     # Модель медиа поста
│
├── 📁 enums/                                # Перечисления
│   ├── 📄 index.md                          # Обзор перечислений
│   ├── 📄 image-type.md                     # Типы изображений
│   ├── 📄 review-order.md                   # Порядок сортировки отзывов
│   ├── 📄 review-type.md                    # Типы отзывов
│   ├── 📄 fact-type.md                      # Типы фактов
│   ├── 📄 profession-key.md                 # Ключи профессий
│   ├── 📄 video-site.md                     # Сайты видео
│   ├── 📄 box-office-type.md                # Типы кассовых сборов
│   ├── 📄 distribution-type.md              # Типы дистрибуции
│   ├── 📄 relation-type.md                  # Типы связей
│   ├── 📄 sex.md                            # Пол
│   ├── 📄 api-version.md                    # Версии API
│   ├── 📄 month.md                          # Месяцы
│   ├── 📄 film-order.md                     # Порядок сортировки фильмов
│   ├── 📄 content-type.md                   # Типы контента
│   ├── 📄 collection-type.md                # Типы коллекций
│   ├── 📄 distribution-sub-type.md          # Подтипы дистрибуции
│   ├── 📄 production-status.md              # Статусы производства
│   └── 📄 account-type.md                   # Типы аккаунтов
│
├── 📁 responses/                            # Ответы API
│   ├── 📄 index.md                          # Обзор ответов
│   ├── 📄 default-response.md               # Базовый ответ
│   ├── 📄 paginated-response.md             # Пагинированный ответ
│   ├── 📄 keyword-search-response.md        # Ответ поиска
│   ├── 📄 budget-response.md                # Ответ с бюджетом
│   ├── 📄 sequel-prequel-response.md        # Ответ с сиквелами/приквелами
│   ├── 📄 movie-staff-response.md           # Ответ со съемочной командой
│   ├── 📄 review-response.md                # Ответ с отзывами
│   └── 📄 simple-response.md                # Простой ответ
│
├── 📁 exceptions/                           # Исключения
│   ├── 📄 index.md                          # Обзор исключений
│   ├── 📄 api-exception.md                  # Базовое исключение API
│   ├── 📄 invalid-api-key-exception.md      # Неверный API ключ
│   ├── 📄 rate-limit-exception.md           # Превышение лимита
│   ├── 📄 resource-not-found-exception.md   # Ресурс не найден
│   └── 📄 kp-validation-exception.md        # Ошибка валидации
│
└── 📁 interfaces/                           # Интерфейсы
    ├── 📄 index.md                          # Обзор интерфейсов
    ├── 📄 model-interface.md                # Интерфейс модели
    └── 📄 response-interface.md             # Интерфейс ответа
\`\`\`

## 🔗 Быстрые ссылки [#-быстрые-ссылки]

### 🚀 Начало работы [#-начало-работы]

* **[Главная страница](./index)** - Обзор библиотеки и быстрый старт
* **[Основной клиент](./client)** - Главный класс для работы с API
* **[Примеры использования](https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples)** - Готовые примеры кода

### 📦 Основные компоненты [#-основные-компоненты]

* **[Сервисы](./services/index)** - Работа с различными типами данных
* **[Модели](./models/index)** - Структуры данных API
* **[Перечисления](./enums/index)** - Константы и типы
* **[Ответы](./responses/index)** - Классы ответов API
* **[Исключения](./exceptions/index)** - Обработка ошибок
* **[Интерфейсы](./interfaces/index)** - Базовые контракты

## 🎯 Популярные разделы [#-популярные-разделы]

### 🎬 Работа с фильмами [#-работа-с-фильмами]

1. **[FilmService](./services/film-service)** - Основной сервис для работы с фильмами
2. **[Film](./models/film)** - Модель фильма с полной информацией
3. **[FilmSearchResult](./models/film-search-result)** - Результаты поиска фильмов
4. **[ContentType](./enums/content-type)** - Типы контента (фильм, сериал, etc.)
5. **[FilmOrder](./enums/film-order)** - Сортировка фильмов

### 👥 Работа с персонами [#-работа-с-персонами]

1. **[PersonService](./services/person-service)** - Сервис для работы с персонами
2. **[Person](./models/person)** - Модель персоны
3. **[Staff](./models/staff)** - Съемочная группа
4. **[ProfessionKey](./enums/profession-key)** - Профессии в кино
5. **[PersonFilm](./models/person-film)** - Фильмография персоны

### 🎥 Работа с медиа [#-работа-с-медиа]

1. **[MediaService](./services/media-service)** - Сервис для работы с медиа
2. **[Image](./models/image)** - Изображения фильмов
3. **[Video](./models/video)** - Видео контент
4. **[ImageType](./enums/image-type)** - Типы изображений
5. **[VideoSite](./enums/video-site)** - Сайты видео

### 📝 Работа с отзывами и фактами [#-работа-с-отзывами-и-фактами]

1. **[Review](./models/review)** - Отзывы пользователей
2. **[Fact](./models/fact)** - Интересные факты
3. **[ReviewType](./enums/review-type)** - Типы отзывов
4. **[ReviewOrder](./enums/review-order)** - Сортировка отзывов
5. **[FactType](./enums/fact-type)** - Типы фактов

## 🔍 Поиск по функциональности [#-поиск-по-функциональности]

### 🔍 Поиск и фильтрация [#-поиск-и-фильтрация]

* **[FilmService::searchByKeyword()](./services/film-service#searchbykeyword)** - Поиск фильмов
* **[PersonService::searchByName()](./services/person-service#searchbyname)** - Поиск персон
* **[FilmService::getTop()](./services/film-service#gettop)** - Топ фильмов
* **[Filters](./models/filters)** - Фильтры для поиска

### 📊 Статистика и рейтинги [#-статистика-и-рейтинги]

* **[BoxOffice](./models/box-office)** - Кассовые сборы
* **[Award](./models/award)** - Награды и номинации
* **[UserVote](./models/user-vote)** - Пользовательские голоса
* **[ExternalSource](./models/external-source)** - Внешние источники рейтингов

### 🎬 Сериалы и эпизоды [#-сериалы-и-эпизоды]

* **[Episode](./models/episode)** - Эпизоды сериалов
* **[Season](./models/season)** - Сезоны сериалов
* **[FilmService::getSeasons()](./services/film-service#getseasons)** - Получение сезонов

### 🔗 Связанный контент [#-связанный-контент]

* **[RelatedFilm](./models/related-film)** - Связанные фильмы
* **[FilmService::getSequelsAndPrequels()](./services/film-service#getsequelsandprequels)** - Сиквелы и приквелы
* **[FilmCollection](./models/film-collection)** - Коллекции фильмов

## ⚠️ Обработка ошибок [#️-обработка-ошибок]

### 🔑 Аутентификация [#-аутентификация]

* **[InvalidApiKeyException](./exceptions/invalid-api-key-exception)** - Неверный API ключ
* **[ApiKeyInfo](./models/api-key-info)** - Информация об API ключе
* **[ApiKeyQouta](./models/api-key-qouta)** - Квоты запросов

### ⏱️ Лимиты и ограничения [#️-лимиты-и-ограничения]

* **[RateLimitException](./exceptions/rate-limit-exception)** - Превышение лимита запросов
* **[UserService](./services/user-service)** - Информация о лимитах

### 🔍 Ошибки ресурсов [#-ошибки-ресурсов]

* **[ResourceNotFoundException](./exceptions/resource-not-found-exception)** - Ресурс не найден
* **[ApiException](./exceptions/api-exception)** - Общие ошибки API

### ✅ Валидация данных [#-валидация-данных]

* **[KpValidationException](./exceptions/kp-validation-exception)** - Ошибки валидации
* **[ModelInterface](./interfaces/model-interface)** - Базовый интерфейс моделей

## 🛠️ Утилиты и помощники [#️-утилиты-и-помощники]

### 📄 Ответы API [#-ответы-api]

* **[DefaultResponse](./responses/default-response)** - Базовый ответ
* **[PaginatedResponse](./responses/paginated-response)** - Пагинация
* **[KeywordSearchResponse](./responses/keyword-search-response)** - Ответ поиска

### 🔧 Интерфейсы [#-интерфейсы]

* **[ModelInterface](./interfaces/model-interface)** - Интерфейс моделей
* **[ResponseInterface](./interfaces/response-interface)** - Интерфейс ответов

### 🌍 Справочные данные [#-справочные-данные]

* **[Country](./models/country)** - Страны
* **[Genre](./models/genre)** - Жанры
* **[Distribution](./models/distribution)** - Дистрибуция
* **[Month](./enums/month)** - Месяцы

## 📚 Примеры использования [#-примеры-использования]

### 🚀 Быстрый старт [#-быстрый-старт]

\`\`\`php
// Создание клиента
$client = new Client('your-api-key');

// Получение фильма
$film = $client->films->getById(301);

// Поиск фильмов
$searchResults = $client->films->searchByKeyword('матрица');

// Получение съемочной группы
$staff = $client->films->getStaff(301);
\`\`\`

### 🔍 Поиск и фильтрация [#-поиск-и-фильтрация-1]

\`\`\`php
// Поиск персон
$persons = $client->persons->searchByName('Том Круз');

// Получение топ фильмов
$topFilms = $client->films->getTop();

// Получение изображений
$images = $client->media->getImages(301, ImageType::POSTER);
\`\`\`

### ⚠️ Обработка ошибок [#️-обработка-ошибок-1]

\`\`\`php
try {
    $film = $client->films->getById(999999);
} catch (ResourceNotFoundException $e) {
    echo "Фильм не найден\\n";
} catch (RateLimitException $e) {
    echo "Превышен лимит запросов\\n";
}
\`\`\`

## 🎯 Рекомендуемые маршруты изучения [#-рекомендуемые-маршруты-изучения]

### 🆕 Для новичков [#-для-новичков]

1. **[Главная страница](./index)** - Обзор библиотеки
2. **[Основной клиент](./client)** - Базовые концепции
3. **[FilmService](./services/film-service)** - Работа с фильмами
4. **[Film](./models/film)** - Структура данных фильма
5. **[Примеры](https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples)** - Практические примеры

### 🔧 Для разработчиков [#-для-разработчиков]

1. **[Интерфейсы](./interfaces/index)** - Базовые контракты
2. **[Исключения](./exceptions/index)** - Обработка ошибок
3. **[Ответы](./responses/index)** - Структура ответов API
4. **[Перечисления](./enums/index)** - Константы и типы
5. **[Модели](./models/index)** - Все модели данных

### 🎬 Для работы с контентом [#-для-работы-с-контентом]

1. **[FilmService](./services/film-service)** - Основные операции с фильмами
2. **[PersonService](./services/person-service)** - Работа с персонами
3. **[MediaService](./services/media-service)** - Медиа контент
4. **[UserService](./services/user-service)** - Пользовательские данные
5. **[Связанные модели](./models/index)** - Дополнительные данные

### 🔍 Для поиска и анализа [#-для-поиска-и-анализа]

1. **[FilmService::searchByKeyword()](./services/film-service#searchbykeyword)** - Поиск фильмов
2. **[PersonService::searchByName()](./services/person-service#searchbyname)** - Поиск персон
3. **[FilmService::getTop()](./services/film-service#gettop)** - Топ фильмов
4. **[Статистические модели](./models/index)** - Анализ данных
5. **[Перечисления для сортировки](./enums/index)** - Настройка поиска

## 📊 Статистика документации [#-статистика-документации]

### 📁 Файлы документации [#-файлы-документации]

* **Всего файлов:** 60+
* **Главная страница:** 1
* **Сервисы:** 5
* **Модели:** 25
* **Перечисления:** 18
* **Ответы:** 4
* **Исключения:** 6
* **Интерфейсы:** 3

### 🔗 Связи между компонентами [#-связи-между-компонентами]

* **Перекрестные ссылки:** 200+
* **Навигационные элементы:** 60+
* **Примеры кода:** 100+
* **Связанные классы:** 300+

### 📚 Содержание [#-содержание]

* **Строк документации:** 15,000+
* **Примеров кода:** 500+
* **Методов API:** 50+
* **Моделей данных:** 25+
* **Перечислений:** 18+

***

**📚 Навигация:** [Главная](./index) → Карта навигации
`,o={contents:[{heading:void 0,content:`Интерактивная карта навигации по всей документации NotKinopoisk PHP Library.`},{heading:void 0,content:`**📚 Навигация:** Главная → Карта навигации`},{heading:`-начало-работы`,content:`**Главная страница** - Обзор библиотеки и быстрый старт`},{heading:`-начало-работы`,content:`**Основной клиент** - Главный класс для работы с API`},{heading:`-начало-работы`,content:`**Примеры использования** - Готовые примеры кода`},{heading:`-основные-компоненты`,content:`**Сервисы** - Работа с различными типами данных`},{heading:`-основные-компоненты`,content:`**Модели** - Структуры данных API`},{heading:`-основные-компоненты`,content:`**Перечисления** - Константы и типы`},{heading:`-основные-компоненты`,content:`**Ответы** - Классы ответов API`},{heading:`-основные-компоненты`,content:`**Исключения** - Обработка ошибок`},{heading:`-основные-компоненты`,content:`**Интерфейсы** - Базовые контракты`},{heading:`-работа-с-фильмами`,content:`**FilmService** - Основной сервис для работы с фильмами`},{heading:`-работа-с-фильмами`,content:`**Film** - Модель фильма с полной информацией`},{heading:`-работа-с-фильмами`,content:`**FilmSearchResult** - Результаты поиска фильмов`},{heading:`-работа-с-фильмами`,content:`**ContentType** - Типы контента (фильм, сериал, etc.)`},{heading:`-работа-с-фильмами`,content:`**FilmOrder** - Сортировка фильмов`},{heading:`-работа-с-персонами`,content:`**PersonService** - Сервис для работы с персонами`},{heading:`-работа-с-персонами`,content:`**Person** - Модель персоны`},{heading:`-работа-с-персонами`,content:`**Staff** - Съемочная группа`},{heading:`-работа-с-персонами`,content:`**ProfessionKey** - Профессии в кино`},{heading:`-работа-с-персонами`,content:`**PersonFilm** - Фильмография персоны`},{heading:`-работа-с-медиа`,content:`**MediaService** - Сервис для работы с медиа`},{heading:`-работа-с-медиа`,content:`**Image** - Изображения фильмов`},{heading:`-работа-с-медиа`,content:`**Video** - Видео контент`},{heading:`-работа-с-медиа`,content:`**ImageType** - Типы изображений`},{heading:`-работа-с-медиа`,content:`**VideoSite** - Сайты видео`},{heading:`-работа-с-отзывами-и-фактами`,content:`**Review** - Отзывы пользователей`},{heading:`-работа-с-отзывами-и-фактами`,content:`**Fact** - Интересные факты`},{heading:`-работа-с-отзывами-и-фактами`,content:`**ReviewType** - Типы отзывов`},{heading:`-работа-с-отзывами-и-фактами`,content:`**ReviewOrder** - Сортировка отзывов`},{heading:`-работа-с-отзывами-и-фактами`,content:`**FactType** - Типы фактов`},{heading:`-поиск-и-фильтрация`,content:`**FilmService::searchByKeyword()** - Поиск фильмов`},{heading:`-поиск-и-фильтрация`,content:`**PersonService::searchByName()** - Поиск персон`},{heading:`-поиск-и-фильтрация`,content:`**FilmService::getTop()** - Топ фильмов`},{heading:`-поиск-и-фильтрация`,content:`**Filters** - Фильтры для поиска`},{heading:`-статистика-и-рейтинги`,content:`**BoxOffice** - Кассовые сборы`},{heading:`-статистика-и-рейтинги`,content:`**Award** - Награды и номинации`},{heading:`-статистика-и-рейтинги`,content:`**UserVote** - Пользовательские голоса`},{heading:`-статистика-и-рейтинги`,content:`**ExternalSource** - Внешние источники рейтингов`},{heading:`-сериалы-и-эпизоды`,content:`**Episode** - Эпизоды сериалов`},{heading:`-сериалы-и-эпизоды`,content:`**Season** - Сезоны сериалов`},{heading:`-сериалы-и-эпизоды`,content:`**FilmService::getSeasons()** - Получение сезонов`},{heading:`-связанный-контент`,content:`**RelatedFilm** - Связанные фильмы`},{heading:`-связанный-контент`,content:`**FilmService::getSequelsAndPrequels()** - Сиквелы и приквелы`},{heading:`-связанный-контент`,content:`**FilmCollection** - Коллекции фильмов`},{heading:`-аутентификация`,content:`**InvalidApiKeyException** - Неверный API ключ`},{heading:`-аутентификация`,content:`**ApiKeyInfo** - Информация об API ключе`},{heading:`-аутентификация`,content:`**ApiKeyQouta** - Квоты запросов`},{heading:`️-лимиты-и-ограничения`,content:`**RateLimitException** - Превышение лимита запросов`},{heading:`️-лимиты-и-ограничения`,content:`**UserService** - Информация о лимитах`},{heading:`-ошибки-ресурсов`,content:`**ResourceNotFoundException** - Ресурс не найден`},{heading:`-ошибки-ресурсов`,content:`**ApiException** - Общие ошибки API`},{heading:`-валидация-данных`,content:`**KpValidationException** - Ошибки валидации`},{heading:`-валидация-данных`,content:`**ModelInterface** - Базовый интерфейс моделей`},{heading:`-ответы-api`,content:`**DefaultResponse** - Базовый ответ`},{heading:`-ответы-api`,content:`**PaginatedResponse** - Пагинация`},{heading:`-ответы-api`,content:`**KeywordSearchResponse** - Ответ поиска`},{heading:`-интерфейсы`,content:`**ModelInterface** - Интерфейс моделей`},{heading:`-интерфейсы`,content:`**ResponseInterface** - Интерфейс ответов`},{heading:`-справочные-данные`,content:`**Country** - Страны`},{heading:`-справочные-данные`,content:`**Genre** - Жанры`},{heading:`-справочные-данные`,content:`**Distribution** - Дистрибуция`},{heading:`-справочные-данные`,content:`**Month** - Месяцы`},{heading:`-для-новичков`,content:`**Главная страница** - Обзор библиотеки`},{heading:`-для-новичков`,content:`**Основной клиент** - Базовые концепции`},{heading:`-для-новичков`,content:`**FilmService** - Работа с фильмами`},{heading:`-для-новичков`,content:`**Film** - Структура данных фильма`},{heading:`-для-новичков`,content:`**Примеры** - Практические примеры`},{heading:`-для-разработчиков`,content:`**Интерфейсы** - Базовые контракты`},{heading:`-для-разработчиков`,content:`**Исключения** - Обработка ошибок`},{heading:`-для-разработчиков`,content:`**Ответы** - Структура ответов API`},{heading:`-для-разработчиков`,content:`**Перечисления** - Константы и типы`},{heading:`-для-разработчиков`,content:`**Модели** - Все модели данных`},{heading:`-для-работы-с-контентом`,content:`**FilmService** - Основные операции с фильмами`},{heading:`-для-работы-с-контентом`,content:`**PersonService** - Работа с персонами`},{heading:`-для-работы-с-контентом`,content:`**MediaService** - Медиа контент`},{heading:`-для-работы-с-контентом`,content:`**UserService** - Пользовательские данные`},{heading:`-для-работы-с-контентом`,content:`**Связанные модели** - Дополнительные данные`},{heading:`-для-поиска-и-анализа`,content:`**FilmService::searchByKeyword()** - Поиск фильмов`},{heading:`-для-поиска-и-анализа`,content:`**PersonService::searchByName()** - Поиск персон`},{heading:`-для-поиска-и-анализа`,content:`**FilmService::getTop()** - Топ фильмов`},{heading:`-для-поиска-и-анализа`,content:`**Статистические модели** - Анализ данных`},{heading:`-для-поиска-и-анализа`,content:`**Перечисления для сортировки** - Настройка поиска`},{heading:`-файлы-документации`,content:`**Всего файлов:** 60+`},{heading:`-файлы-документации`,content:`**Главная страница:** 1`},{heading:`-файлы-документации`,content:`**Сервисы:** 5`},{heading:`-файлы-документации`,content:`**Модели:** 25`},{heading:`-файлы-документации`,content:`**Перечисления:** 18`},{heading:`-файлы-документации`,content:`**Ответы:** 4`},{heading:`-файлы-документации`,content:`**Исключения:** 6`},{heading:`-файлы-документации`,content:`**Интерфейсы:** 3`},{heading:`-связи-между-компонентами`,content:`**Перекрестные ссылки:** 200+`},{heading:`-связи-между-компонентами`,content:`**Навигационные элементы:** 60+`},{heading:`-связи-между-компонентами`,content:`**Примеры кода:** 100+`},{heading:`-связи-между-компонентами`,content:`**Связанные классы:** 300+`},{heading:`-содержание`,content:`**Строк документации:** 15,000+`},{heading:`-содержание`,content:`**Примеров кода:** 500+`},{heading:`-содержание`,content:`**Методов API:** 50+`},{heading:`-содержание`,content:`**Моделей данных:** 25+`},{heading:`-содержание`,content:`**Перечислений:** 18+`},{heading:`-содержание`,content:`**📚 Навигация:** Главная → Карта навигации`}],headings:[{id:`️-структура-документации`,content:`🗺️ Структура документации`},{id:`-быстрые-ссылки`,content:`🔗 Быстрые ссылки`},{id:`-начало-работы`,content:`🚀 Начало работы`},{id:`-основные-компоненты`,content:`📦 Основные компоненты`},{id:`-популярные-разделы`,content:`🎯 Популярные разделы`},{id:`-работа-с-фильмами`,content:`🎬 Работа с фильмами`},{id:`-работа-с-персонами`,content:`👥 Работа с персонами`},{id:`-работа-с-медиа`,content:`🎥 Работа с медиа`},{id:`-работа-с-отзывами-и-фактами`,content:`📝 Работа с отзывами и фактами`},{id:`-поиск-по-функциональности`,content:`🔍 Поиск по функциональности`},{id:`-поиск-и-фильтрация`,content:`🔍 Поиск и фильтрация`},{id:`-статистика-и-рейтинги`,content:`📊 Статистика и рейтинги`},{id:`-сериалы-и-эпизоды`,content:`🎬 Сериалы и эпизоды`},{id:`-связанный-контент`,content:`🔗 Связанный контент`},{id:`️-обработка-ошибок`,content:`⚠️ Обработка ошибок`},{id:`-аутентификация`,content:`🔑 Аутентификация`},{id:`️-лимиты-и-ограничения`,content:`⏱️ Лимиты и ограничения`},{id:`-ошибки-ресурсов`,content:`🔍 Ошибки ресурсов`},{id:`-валидация-данных`,content:`✅ Валидация данных`},{id:`️-утилиты-и-помощники`,content:`🛠️ Утилиты и помощники`},{id:`-ответы-api`,content:`📄 Ответы API`},{id:`-интерфейсы`,content:`🔧 Интерфейсы`},{id:`-справочные-данные`,content:`🌍 Справочные данные`},{id:`-примеры-использования`,content:`📚 Примеры использования`},{id:`-быстрый-старт`,content:`🚀 Быстрый старт`},{id:`-поиск-и-фильтрация-1`,content:`🔍 Поиск и фильтрация`},{id:`️-обработка-ошибок-1`,content:`⚠️ Обработка ошибок`},{id:`-рекомендуемые-маршруты-изучения`,content:`🎯 Рекомендуемые маршруты изучения`},{id:`-для-новичков`,content:`🆕 Для новичков`},{id:`-для-разработчиков`,content:`🔧 Для разработчиков`},{id:`-для-работы-с-контентом`,content:`🎬 Для работы с контентом`},{id:`-для-поиска-и-анализа`,content:`🔍 Для поиска и анализа`},{id:`-статистика-документации`,content:`📊 Статистика документации`},{id:`-файлы-документации`,content:`📁 Файлы документации`},{id:`-связи-между-компонентами`,content:`🔗 Связи между компонентами`},{id:`-содержание`,content:`📚 Содержание`}]},s=[{depth:2,url:`#️-структура-документации`,title:(0,n.jsx)(n.Fragment,{children:`🗺️ Структура документации`})},{depth:2,url:`#-быстрые-ссылки`,title:(0,n.jsx)(n.Fragment,{children:`🔗 Быстрые ссылки`})},{depth:3,url:`#-начало-работы`,title:(0,n.jsx)(n.Fragment,{children:`🚀 Начало работы`})},{depth:3,url:`#-основные-компоненты`,title:(0,n.jsx)(n.Fragment,{children:`📦 Основные компоненты`})},{depth:2,url:`#-популярные-разделы`,title:(0,n.jsx)(n.Fragment,{children:`🎯 Популярные разделы`})},{depth:3,url:`#-работа-с-фильмами`,title:(0,n.jsx)(n.Fragment,{children:`🎬 Работа с фильмами`})},{depth:3,url:`#-работа-с-персонами`,title:(0,n.jsx)(n.Fragment,{children:`👥 Работа с персонами`})},{depth:3,url:`#-работа-с-медиа`,title:(0,n.jsx)(n.Fragment,{children:`🎥 Работа с медиа`})},{depth:3,url:`#-работа-с-отзывами-и-фактами`,title:(0,n.jsx)(n.Fragment,{children:`📝 Работа с отзывами и фактами`})},{depth:2,url:`#-поиск-по-функциональности`,title:(0,n.jsx)(n.Fragment,{children:`🔍 Поиск по функциональности`})},{depth:3,url:`#-поиск-и-фильтрация`,title:(0,n.jsx)(n.Fragment,{children:`🔍 Поиск и фильтрация`})},{depth:3,url:`#-статистика-и-рейтинги`,title:(0,n.jsx)(n.Fragment,{children:`📊 Статистика и рейтинги`})},{depth:3,url:`#-сериалы-и-эпизоды`,title:(0,n.jsx)(n.Fragment,{children:`🎬 Сериалы и эпизоды`})},{depth:3,url:`#-связанный-контент`,title:(0,n.jsx)(n.Fragment,{children:`🔗 Связанный контент`})},{depth:2,url:`#️-обработка-ошибок`,title:(0,n.jsx)(n.Fragment,{children:`⚠️ Обработка ошибок`})},{depth:3,url:`#-аутентификация`,title:(0,n.jsx)(n.Fragment,{children:`🔑 Аутентификация`})},{depth:3,url:`#️-лимиты-и-ограничения`,title:(0,n.jsx)(n.Fragment,{children:`⏱️ Лимиты и ограничения`})},{depth:3,url:`#-ошибки-ресурсов`,title:(0,n.jsx)(n.Fragment,{children:`🔍 Ошибки ресурсов`})},{depth:3,url:`#-валидация-данных`,title:(0,n.jsx)(n.Fragment,{children:`✅ Валидация данных`})},{depth:2,url:`#️-утилиты-и-помощники`,title:(0,n.jsx)(n.Fragment,{children:`🛠️ Утилиты и помощники`})},{depth:3,url:`#-ответы-api`,title:(0,n.jsx)(n.Fragment,{children:`📄 Ответы API`})},{depth:3,url:`#-интерфейсы`,title:(0,n.jsx)(n.Fragment,{children:`🔧 Интерфейсы`})},{depth:3,url:`#-справочные-данные`,title:(0,n.jsx)(n.Fragment,{children:`🌍 Справочные данные`})},{depth:2,url:`#-примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`📚 Примеры использования`})},{depth:3,url:`#-быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`🚀 Быстрый старт`})},{depth:3,url:`#-поиск-и-фильтрация-1`,title:(0,n.jsx)(n.Fragment,{children:`🔍 Поиск и фильтрация`})},{depth:3,url:`#️-обработка-ошибок-1`,title:(0,n.jsx)(n.Fragment,{children:`⚠️ Обработка ошибок`})},{depth:2,url:`#-рекомендуемые-маршруты-изучения`,title:(0,n.jsx)(n.Fragment,{children:`🎯 Рекомендуемые маршруты изучения`})},{depth:3,url:`#-для-новичков`,title:(0,n.jsx)(n.Fragment,{children:`🆕 Для новичков`})},{depth:3,url:`#-для-разработчиков`,title:(0,n.jsx)(n.Fragment,{children:`🔧 Для разработчиков`})},{depth:3,url:`#-для-работы-с-контентом`,title:(0,n.jsx)(n.Fragment,{children:`🎬 Для работы с контентом`})},{depth:3,url:`#-для-поиска-и-анализа`,title:(0,n.jsx)(n.Fragment,{children:`🔍 Для поиска и анализа`})},{depth:2,url:`#-статистика-документации`,title:(0,n.jsx)(n.Fragment,{children:`📊 Статистика документации`})},{depth:3,url:`#-файлы-документации`,title:(0,n.jsx)(n.Fragment,{children:`📁 Файлы документации`})},{depth:3,url:`#-связи-между-компонентами`,title:(0,n.jsx)(n.Fragment,{children:`🔗 Связи между компонентами`})},{depth:3,url:`#-содержание`,title:(0,n.jsx)(n.Fragment,{children:`📚 Содержание`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Интерактивная карта навигации по всей документации NotKinopoisk PHP Library.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`./index`,children:`Главная`}),` → Карта навигации`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`️-структура-документации`,children:`🗺️ Структура документации`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`📁 docs/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📄 index.md                              # Главная страница`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📄 navigation-map.md                     # Карта навигации (этот файл)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📄 client.md                             # Основной клиент`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📁 services/                             # Сервисы API`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 index.md                          # Обзор сервисов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 film-service.md                   # Сервис фильмов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 person-service.md                 # Сервис персон`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 media-service.md                  # Сервис медиа`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── 📄 user-service.md                   # Сервис пользователей`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📁 models/                               # Модели данных`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 index.md                          # Обзор моделей`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 film.md                           # Модель фильма`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 person.md                         # Модель персоны`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 staff.md                          # Модель съемочной группы`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 review.md                         # Модель отзыва`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 fact.md                           # Модель факта`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 image.md                          # Модель изображения`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 video.md                          # Модель видео`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 award.md                          # Модель награды`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 box-office.md                     # Модель кассовых сборов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 country.md                        # Модель страны`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 genre.md                          # Модель жанра`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 episode.md                        # Модель эпизода`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 season.md                         # Модель сезона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 external-source.md                # Модель внешнего источника`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 distribution.md                   # Модель дистрибуции`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 film-search-result.md             # Модель результата поиска`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 person-spouse.md                  # Модель супруга`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 person-film.md                    # Модель фильма персоны`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 user-vote.md                      # Модель голоса пользователя`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 film-collection.md                # Модель коллекции фильмов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 filters.md                        # Модель фильтров`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 related-film.md                   # Модель связанного фильма`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 api-key-info.md                   # Модель информации об API ключе`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 api-key-qouta.md                  # Модель квоты API ключа`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── 📄 media-post.md                     # Модель медиа поста`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📁 enums/                                # Перечисления`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 index.md                          # Обзор перечислений`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 image-type.md                     # Типы изображений`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 review-order.md                   # Порядок сортировки отзывов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 review-type.md                    # Типы отзывов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 fact-type.md                      # Типы фактов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 profession-key.md                 # Ключи профессий`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 video-site.md                     # Сайты видео`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 box-office-type.md                # Типы кассовых сборов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 distribution-type.md              # Типы дистрибуции`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 relation-type.md                  # Типы связей`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 sex.md                            # Пол`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 api-version.md                    # Версии API`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 month.md                          # Месяцы`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 film-order.md                     # Порядок сортировки фильмов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 content-type.md                   # Типы контента`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 collection-type.md                # Типы коллекций`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 distribution-sub-type.md          # Подтипы дистрибуции`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 production-status.md              # Статусы производства`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── 📄 account-type.md                   # Типы аккаунтов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📁 responses/                            # Ответы API`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 index.md                          # Обзор ответов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 default-response.md               # Базовый ответ`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 paginated-response.md             # Пагинированный ответ`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 keyword-search-response.md        # Ответ поиска`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 budget-response.md                # Ответ с бюджетом`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 sequel-prequel-response.md        # Ответ с сиквелами/приквелами`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 movie-staff-response.md           # Ответ со съемочной командой`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 review-response.md                # Ответ с отзывами`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── 📄 simple-response.md                # Простой ответ`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── 📁 exceptions/                           # Исключения`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 index.md                          # Обзор исключений`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 api-exception.md                  # Базовое исключение API`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 invalid-api-key-exception.md      # Неверный API ключ`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 rate-limit-exception.md           # Превышение лимита`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   ├── 📄 resource-not-found-exception.md   # Ресурс не найден`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── 📄 kp-validation-exception.md        # Ошибка валидации`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`└── 📁 interfaces/                           # Интерфейсы`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── 📄 index.md                          # Обзор интерфейсов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── 📄 model-interface.md                # Интерфейс модели`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── 📄 response-interface.md             # Интерфейс ответа`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-быстрые-ссылки`,children:`🔗 Быстрые ссылки`}),`
`,(0,n.jsx)(t.h3,{id:`-начало-работы`,children:`🚀 Начало работы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./index`,children:`Главная страница`})}),` - Обзор библиотеки и быстрый старт`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./client`,children:`Основной клиент`})}),` - Главный класс для работы с API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples`,children:`Примеры использования`})}),` - Готовые примеры кода`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-основные-компоненты`,children:`📦 Основные компоненты`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/index`,children:`Сервисы`})}),` - Работа с различными типами данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/index`,children:`Модели`})}),` - Структуры данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/index`,children:`Перечисления`})}),` - Константы и типы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./responses/index`,children:`Ответы`})}),` - Классы ответов API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/index`,children:`Исключения`})}),` - Обработка ошибок`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./interfaces/index`,children:`Интерфейсы`})}),` - Базовые контракты`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-популярные-разделы`,children:`🎯 Популярные разделы`}),`
`,(0,n.jsx)(t.h3,{id:`-работа-с-фильмами`,children:`🎬 Работа с фильмами`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service`,children:`FilmService`})}),` - Основной сервис для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/film`,children:`Film`})}),` - Модель фильма с полной информацией`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/film-search-result`,children:`FilmSearchResult`})}),` - Результаты поиска фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/content-type`,children:`ContentType`})}),` - Типы контента (фильм, сериал, etc.)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/film-order`,children:`FilmOrder`})}),` - Сортировка фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-работа-с-персонами`,children:`👥 Работа с персонами`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/person-service`,children:`PersonService`})}),` - Сервис для работы с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/person`,children:`Person`})}),` - Модель персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/staff`,children:`Staff`})}),` - Съемочная группа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/profession-key`,children:`ProfessionKey`})}),` - Профессии в кино`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/person-film`,children:`PersonFilm`})}),` - Фильмография персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-работа-с-медиа`,children:`🎥 Работа с медиа`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/media-service`,children:`MediaService`})}),` - Сервис для работы с медиа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/image`,children:`Image`})}),` - Изображения фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/video`,children:`Video`})}),` - Видео контент`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/image-type`,children:`ImageType`})}),` - Типы изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/video-site`,children:`VideoSite`})}),` - Сайты видео`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-работа-с-отзывами-и-фактами`,children:`📝 Работа с отзывами и фактами`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/review`,children:`Review`})}),` - Отзывы пользователей`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/fact`,children:`Fact`})}),` - Интересные факты`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/review-type`,children:`ReviewType`})}),` - Типы отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/review-order`,children:`ReviewOrder`})}),` - Сортировка отзывов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/fact-type`,children:`FactType`})}),` - Типы фактов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-поиск-по-функциональности`,children:`🔍 Поиск по функциональности`}),`
`,(0,n.jsx)(t.h3,{id:`-поиск-и-фильтрация`,children:`🔍 Поиск и фильтрация`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#searchbykeyword`,children:`FilmService::searchByKeyword()`})}),` - Поиск фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/person-service#searchbyname`,children:`PersonService::searchByName()`})}),` - Поиск персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#gettop`,children:`FilmService::getTop()`})}),` - Топ фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/filters`,children:`Filters`})}),` - Фильтры для поиска`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-статистика-и-рейтинги`,children:`📊 Статистика и рейтинги`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/box-office`,children:`BoxOffice`})}),` - Кассовые сборы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/award`,children:`Award`})}),` - Награды и номинации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/user-vote`,children:`UserVote`})}),` - Пользовательские голоса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/external-source`,children:`ExternalSource`})}),` - Внешние источники рейтингов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-сериалы-и-эпизоды`,children:`🎬 Сериалы и эпизоды`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/episode`,children:`Episode`})}),` - Эпизоды сериалов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/season`,children:`Season`})}),` - Сезоны сериалов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#getseasons`,children:`FilmService::getSeasons()`})}),` - Получение сезонов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-связанный-контент`,children:`🔗 Связанный контент`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/related-film`,children:`RelatedFilm`})}),` - Связанные фильмы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#getsequelsandprequels`,children:`FilmService::getSequelsAndPrequels()`})}),` - Сиквелы и приквелы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/film-collection`,children:`FilmCollection`})}),` - Коллекции фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`️-обработка-ошибок`,children:`⚠️ Обработка ошибок`}),`
`,(0,n.jsx)(t.h3,{id:`-аутентификация`,children:`🔑 Аутентификация`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/invalid-api-key-exception`,children:`InvalidApiKeyException`})}),` - Неверный API ключ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/api-key-info`,children:`ApiKeyInfo`})}),` - Информация об API ключе`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/api-key-qouta`,children:`ApiKeyQouta`})}),` - Квоты запросов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`️-лимиты-и-ограничения`,children:`⏱️ Лимиты и ограничения`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/rate-limit-exception`,children:`RateLimitException`})}),` - Превышение лимита запросов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/user-service`,children:`UserService`})}),` - Информация о лимитах`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-ошибки-ресурсов`,children:`🔍 Ошибки ресурсов`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/resource-not-found-exception`,children:`ResourceNotFoundException`})}),` - Ресурс не найден`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/api-exception`,children:`ApiException`})}),` - Общие ошибки API`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-валидация-данных`,children:`✅ Валидация данных`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/kp-validation-exception`,children:`KpValidationException`})}),` - Ошибки валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./interfaces/model-interface`,children:`ModelInterface`})}),` - Базовый интерфейс моделей`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`️-утилиты-и-помощники`,children:`🛠️ Утилиты и помощники`}),`
`,(0,n.jsx)(t.h3,{id:`-ответы-api`,children:`📄 Ответы API`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./responses/default-response`,children:`DefaultResponse`})}),` - Базовый ответ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./responses/paginated-response`,children:`PaginatedResponse`})}),` - Пагинация`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./responses/keyword-search-response`,children:`KeywordSearchResponse`})}),` - Ответ поиска`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-интерфейсы`,children:`🔧 Интерфейсы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./interfaces/model-interface`,children:`ModelInterface`})}),` - Интерфейс моделей`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./interfaces/response-interface`,children:`ResponseInterface`})}),` - Интерфейс ответов`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-справочные-данные`,children:`🌍 Справочные данные`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/country`,children:`Country`})}),` - Страны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/genre`,children:`Genre`})}),` - Жанры`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/distribution`,children:`Distribution`})}),` - Дистрибуция`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/month`,children:`Month`})}),` - Месяцы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-примеры-использования`,children:`📚 Примеры использования`}),`
`,(0,n.jsx)(t.h3,{id:`-быстрый-старт`,children:`🚀 Быстрый старт`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание клиента`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение фильма`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$searchResults `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByKeyword`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'матрица'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение съемочной группы`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$staff `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getStaff`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`-поиск-и-фильтрация-1`,children:`🔍 Поиск и фильтрация`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск персон`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$persons `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Том Круз'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение топ фильмов`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$topFilms `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getTop`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение изображений`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$images `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`media`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`POSTER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`️-обработка-ошибок-1`,children:`⚠️ Обработка ошибок`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`999999`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ResourceNotFoundException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Фильм не найден`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`RateLimitException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Превышен лимит запросов`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`-рекомендуемые-маршруты-изучения`,children:`🎯 Рекомендуемые маршруты изучения`}),`
`,(0,n.jsx)(t.h3,{id:`-для-новичков`,children:`🆕 Для новичков`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./index`,children:`Главная страница`})}),` - Обзор библиотеки`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./client`,children:`Основной клиент`})}),` - Базовые концепции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service`,children:`FilmService`})}),` - Работа с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/film`,children:`Film`})}),` - Структура данных фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/NotKinopoiskPHP/tree/main/examples`,children:`Примеры`})}),` - Практические примеры`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-для-разработчиков`,children:`🔧 Для разработчиков`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./interfaces/index`,children:`Интерфейсы`})}),` - Базовые контракты`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./exceptions/index`,children:`Исключения`})}),` - Обработка ошибок`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./responses/index`,children:`Ответы`})}),` - Структура ответов API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/index`,children:`Перечисления`})}),` - Константы и типы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/index`,children:`Модели`})}),` - Все модели данных`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-для-работы-с-контентом`,children:`🎬 Для работы с контентом`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service`,children:`FilmService`})}),` - Основные операции с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/person-service`,children:`PersonService`})}),` - Работа с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/media-service`,children:`MediaService`})}),` - Медиа контент`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/user-service`,children:`UserService`})}),` - Пользовательские данные`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/index`,children:`Связанные модели`})}),` - Дополнительные данные`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-для-поиска-и-анализа`,children:`🔍 Для поиска и анализа`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#searchbykeyword`,children:`FilmService::searchByKeyword()`})}),` - Поиск фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/person-service#searchbyname`,children:`PersonService::searchByName()`})}),` - Поиск персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./services/film-service#gettop`,children:`FilmService::getTop()`})}),` - Топ фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./models/index`,children:`Статистические модели`})}),` - Анализ данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:`./enums/index`,children:`Перечисления для сортировки`})}),` - Настройка поиска`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`-статистика-документации`,children:`📊 Статистика документации`}),`
`,(0,n.jsx)(t.h3,{id:`-файлы-документации`,children:`📁 Файлы документации`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Всего файлов:`}),` 60+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Главная страница:`}),` 1`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Сервисы:`}),` 5`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Модели:`}),` 25`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Перечисления:`}),` 18`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Ответы:`}),` 4`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Исключения:`}),` 6`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Интерфейсы:`}),` 3`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-связи-между-компонентами`,children:`🔗 Связи между компонентами`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Перекрестные ссылки:`}),` 200+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Навигационные элементы:`}),` 60+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Примеры кода:`}),` 100+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Связанные классы:`}),` 300+`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`-содержание`,children:`📚 Содержание`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Строк документации:`}),` 15,000+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Примеров кода:`}),` 500+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Методов API:`}),` 50+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Моделей данных:`}),` 25+`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Перечислений:`}),` 18+`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`./index`,children:`Главная`}),` → Карта навигации`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};