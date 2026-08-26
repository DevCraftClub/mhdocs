import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Сравнение KinopoiskDev и NotKinopoiskPHP`},i=new Date(1787750944e3),a=`

## Обзор [#обзор]

**Важно:** Это два совершенно разных API от разных команд разработки!

* **KinopoiskDev** - обертка для неофициального API [kinopoisk.dev](https://kinopoisk.dev)
* **NotKinopoiskPHP** - обертка для неофициального API [kinopoiskapiunofficial.tech](https://kinopoiskapiunofficial.tech)

Эти API **не совместимы** между собой, имеют разную структуру данных и эндпоинты.

## Основные различия [#основные-различия]

### API и разработка [#api-и-разработка]

| Аспект            | KinopoiskDev                                                | NotKinopoiskPHP                                                    |
| ----------------- | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| **API**           | [kinopoisk.dev](https://kinopoisk.dev)                      | [kinopoiskapiunofficial.tech](https://kinopoiskapiunofficial.tech) |
| **Статус**        | Активная разработка, современный API                        | Стабильный, но менее активная разработка                           |
| **Поддержка**     | [Telegram группа](https://t.me/omdb_dev) (7,908 участников) | ❌ Даже на Email не отвечают                                        |
| **Совместимость** | ❌ Не совместим с NotKinopoiskPHP                            | ❌ Не совместим с KinopoiskDev                                      |

### Архитектура библиотек [#архитектура-библиотек]

| Аспект          | KinopoiskDev                                                              | NotKinopoiskPHP                         |
| --------------- | ------------------------------------------------------------------------- | --------------------------------------- |
| **Подход**      | Объектно-ориентированный с использованием атрибутов PHP 8.3+              | Функциональный с использованием трейтов |
| **Структура**   | Модульная с четким разделением ответственности                            | Монолитная с общими классами            |
| **Валидация**   | Декларативная через атрибуты \`#[Validation]\`                              | Ручная валидация в методах              |
| **Кэширование** | Интерфейс \`CacheInterface\` с возможностью подключения различных драйверов | Встроенное кэширование                  |
| **Логирование** | PSR-3 совместимый \`LoggerInterface\`                                       | Простое логирование                     |

### Функциональность [#функциональность]

| Функция                    | KinopoiskDev                                  | NotKinopoiskPHP        |
| -------------------------- | --------------------------------------------- | ---------------------- |
| **Поиск фильмов**          | ✅ Расширенные фильтры с поддержкой диапазонов | ✅ Базовые фильтры      |
| **Поиск персон**           | ✅ Специализированные фильтры для персон       | ✅ Базовый поиск        |
| **Работа с изображениями** | ✅ Фильтры по разрешению, типу                 | ✅ Базовые возможности  |
| **Валидация данных**       | ✅ Автоматическая через атрибуты               | ⚠️ Ручная              |
| **Обработка ошибок**       | ✅ Специализированные исключения               | ✅ Базовые исключения   |
| **Кэширование**            | ✅ Гибкая система кэширования                  | ⚠️ Простое кэширование |
| **Логирование**            | ✅ PSR-3 совместимое                           | ⚠️ Базовое             |

### Примеры использования [#примеры-использования]

#### KinopoiskDev [#kinopoiskdev]

\`\`\`php
use KinopoiskDev\\Http\\MovieRequests;
use KinopoiskDev\\Filter\\MovieSearchFilter;

$kinopoisk = new MovieRequests(apiToken: 'your-token');

// Поиск с расширенными фильтрами
$filter = new MovieSearchFilter();
$filter->withYearBetween(2020, 2024)
       ->withMinRating(7.0, 'kp')
       ->withAllGenres(['драма', 'комедия'])
       ->onlyMovies();

$movies = $kinopoisk->searchMovies($filter);
\`\`\`

#### NotKinopoiskPHP [#notkinopoiskphp]

\`\`\`php
use NotKinopoiskPHP\\Client;

$client = new Client('your-token');

// Поиск с базовыми параметрами
$movies = $client->searchMovies([
    'year' => '2020-2024',
    'rating.kp' => '7-10',
    'genres.name' => 'драма,комедия',
    'type' => 'movie'
]);
\`\`\`

## Преимущества KinopoiskDev [#преимущества-kinopoiskdev]

### 1. Современный подход [#1-современный-подход]

* Использование PHP 8.3+ атрибутов
* Строгая типизация
* Объектно-ориентированный дизайн

### 2. Расширенная функциональность [#2-расширенная-функциональность]

* Более гибкие фильтры
* Специализированные классы для разных типов данных
* Автоматическая валидация

### 3. Лучшая архитектура [#3-лучшая-архитектура]

* Модульная структура
* Интерфейсы для расширяемости
* PSR стандарты

### 4. Безопасность [#4-безопасность]

* Атрибут \`#[Sensitive]\` для конфиденциальных данных
* Автоматическое скрытие в JSON/массивах

## Преимущества NotKinopoiskPHP [#преимущества-notkinopoiskphp]

### 1. Простота использования [#1-простота-использования]

* Более простой API
* Меньше кода для базовых операций
* Быстрый старт

### 2. Совместимость [#2-совместимость]

* Работает с более старыми версиями PHP
* Меньше зависимостей

### 3. Стабильность [#3-стабильность]

* Более зрелая библиотека
* Больше тестов

## Рекомендации по выбору [#рекомендации-по-выбору]

### Выберите KinopoiskDev если: [#выберите-kinopoiskdev-если]

* Используете PHP 8.3+
* Нужны расширенные возможности фильтрации
* Важна архитектура и расширяемость
* Требуется строгая типизация
* Нужна интеграция с PSR стандартами

### Выберите NotKinopoiskPHP если: [#выберите-notkinopoiskphp-если]

* Используете более старые версии PHP
* Нужны только базовые операции
* Важна простота использования
* Требуется максимальная совместимость

## Миграция [#миграция]

**⚠️ Важно:** Прямая миграция между библиотеками невозможна из-за разных API!

### Переход с NotKinopoiskPHP на KinopoiskDev [#переход-с-notkinopoiskphp-на-kinopoiskdev]

Требуется полный рефакторинг кода, так как:

1. **Разные API ключи** - нужны отдельные ключи для каждого API
2. **Разная структура данных** - модели и ответы не совместимы
3. **Разные эндпоинты** - URL и параметры запросов отличаются
4. **Разная логика фильтрации** - синтаксис фильтров не совпадает

### Пример рефакторинга [#пример-рефакторинга]

\`\`\`php
// NotKinopoiskPHP (старый код)
$client = new Client('token');
$movies = $client->searchMovies(['year' => '2023']);

// KinopoiskDev (новый код) - ПОЛНОСТЬЮ ПЕРЕПИСАТЬ!
$kinopoisk = new MovieRequests(apiToken: 'new-token-for-kinopoisk-dev');
$filter = new MovieSearchFilter();
$filter->year(2023);
$movies = $kinopoisk->searchMovies($filter);
\`\`\`

### Рекомендации по миграции [#рекомендации-по-миграции]

1. **Получить новый API ключ** на [kinopoisk.dev](https://kinopoisk.dev)
2. **Изучить документацию** нового API
3. **Переписать все запросы** с нуля
4. **Обновить обработку ответов** под новую структуру данных
5. **Протестировать** все функции

## Заключение [#заключение]

**KinopoiskDev** представляет собой современную библиотеку для официального API [kinopoisk.dev](https://kinopoisk.dev) с активной поддержкой через [Telegram группу](https://t.me/omdb_dev) (7,908 участников). Это выбор для новых проектов, требующих современного и активно поддерживаемого API.

**NotKinopoiskPHP** остается стабильным решением для неофициального API kinopoiskapiunofficial.tech, подходящим для проектов, которые уже используют этот API или требуют максимальной совместимости со старыми версиями PHP.

**Выбор зависит от:**

* Требований к официальности API
* Необходимости активной поддержки
* Совместимости с существующим кодом
* Версии PHP в проекте
`,o={contents:[{heading:`обзор`,content:`**Важно:** Это два совершенно разных API от разных команд разработки!`},{heading:`обзор`,content:`**KinopoiskDev** - обертка для неофициального API kinopoisk.dev`},{heading:`обзор`,content:`**NotKinopoiskPHP** - обертка для неофициального API kinopoiskapiunofficial.tech`},{heading:`обзор`,content:`Эти API **не совместимы** между собой, имеют разную структуру данных и эндпоинты.`},{heading:`api-и-разработка`,content:`Аспект`},{heading:`api-и-разработка`,content:`KinopoiskDev`},{heading:`api-и-разработка`,content:`NotKinopoiskPHP`},{heading:`api-и-разработка`,content:`**API**`},{heading:`api-и-разработка`,content:`kinopoisk.dev`},{heading:`api-и-разработка`,content:`kinopoiskapiunofficial.tech`},{heading:`api-и-разработка`,content:`**Статус**`},{heading:`api-и-разработка`,content:`Активная разработка, современный API`},{heading:`api-и-разработка`,content:`Стабильный, но менее активная разработка`},{heading:`api-и-разработка`,content:`**Поддержка**`},{heading:`api-и-разработка`,content:`Telegram группа (7,908 участников)`},{heading:`api-и-разработка`,content:`❌ Даже на Email не отвечают`},{heading:`api-и-разработка`,content:`**Совместимость**`},{heading:`api-и-разработка`,content:`❌ Не совместим с NotKinopoiskPHP`},{heading:`api-и-разработка`,content:`❌ Не совместим с KinopoiskDev`},{heading:`архитектура-библиотек`,content:`Аспект`},{heading:`архитектура-библиотек`,content:`KinopoiskDev`},{heading:`архитектура-библиотек`,content:`NotKinopoiskPHP`},{heading:`архитектура-библиотек`,content:`**Подход**`},{heading:`архитектура-библиотек`,content:`Объектно-ориентированный с использованием атрибутов PHP 8.3+`},{heading:`архитектура-библиотек`,content:`Функциональный с использованием трейтов`},{heading:`архитектура-библиотек`,content:`**Структура**`},{heading:`архитектура-библиотек`,content:`Модульная с четким разделением ответственности`},{heading:`архитектура-библиотек`,content:`Монолитная с общими классами`},{heading:`архитектура-библиотек`,content:`**Валидация**`},{heading:`архитектура-библиотек`,content:"Декларативная через атрибуты `#[Validation]`"},{heading:`архитектура-библиотек`,content:`Ручная валидация в методах`},{heading:`архитектура-библиотек`,content:`**Кэширование**`},{heading:`архитектура-библиотек`,content:"Интерфейс `CacheInterface` с возможностью подключения различных драйверов"},{heading:`архитектура-библиотек`,content:`Встроенное кэширование`},{heading:`архитектура-библиотек`,content:`**Логирование**`},{heading:`архитектура-библиотек`,content:"PSR-3 совместимый `LoggerInterface`"},{heading:`архитектура-библиотек`,content:`Простое логирование`},{heading:`функциональность`,content:`Функция`},{heading:`функциональность`,content:`KinopoiskDev`},{heading:`функциональность`,content:`NotKinopoiskPHP`},{heading:`функциональность`,content:`**Поиск фильмов**`},{heading:`функциональность`,content:`✅ Расширенные фильтры с поддержкой диапазонов`},{heading:`функциональность`,content:`✅ Базовые фильтры`},{heading:`функциональность`,content:`**Поиск персон**`},{heading:`функциональность`,content:`✅ Специализированные фильтры для персон`},{heading:`функциональность`,content:`✅ Базовый поиск`},{heading:`функциональность`,content:`**Работа с изображениями**`},{heading:`функциональность`,content:`✅ Фильтры по разрешению, типу`},{heading:`функциональность`,content:`✅ Базовые возможности`},{heading:`функциональность`,content:`**Валидация данных**`},{heading:`функциональность`,content:`✅ Автоматическая через атрибуты`},{heading:`функциональность`,content:`⚠️ Ручная`},{heading:`функциональность`,content:`**Обработка ошибок**`},{heading:`функциональность`,content:`✅ Специализированные исключения`},{heading:`функциональность`,content:`✅ Базовые исключения`},{heading:`функциональность`,content:`**Кэширование**`},{heading:`функциональность`,content:`✅ Гибкая система кэширования`},{heading:`функциональность`,content:`⚠️ Простое кэширование`},{heading:`функциональность`,content:`**Логирование**`},{heading:`функциональность`,content:`✅ PSR-3 совместимое`},{heading:`функциональность`,content:`⚠️ Базовое`},{heading:`1-современный-подход`,content:`Использование PHP 8.3+ атрибутов`},{heading:`1-современный-подход`,content:`Строгая типизация`},{heading:`1-современный-подход`,content:`Объектно-ориентированный дизайн`},{heading:`2-расширенная-функциональность`,content:`Более гибкие фильтры`},{heading:`2-расширенная-функциональность`,content:`Специализированные классы для разных типов данных`},{heading:`2-расширенная-функциональность`,content:`Автоматическая валидация`},{heading:`3-лучшая-архитектура`,content:`Модульная структура`},{heading:`3-лучшая-архитектура`,content:`Интерфейсы для расширяемости`},{heading:`3-лучшая-архитектура`,content:`PSR стандарты`},{heading:`4-безопасность`,content:"Атрибут `#[Sensitive]` для конфиденциальных данных"},{heading:`4-безопасность`,content:`Автоматическое скрытие в JSON/массивах`},{heading:`1-простота-использования`,content:`Более простой API`},{heading:`1-простота-использования`,content:`Меньше кода для базовых операций`},{heading:`1-простота-использования`,content:`Быстрый старт`},{heading:`2-совместимость`,content:`Работает с более старыми версиями PHP`},{heading:`2-совместимость`,content:`Меньше зависимостей`},{heading:`3-стабильность`,content:`Более зрелая библиотека`},{heading:`3-стабильность`,content:`Больше тестов`},{heading:`выберите-kinopoiskdev-если`,content:`Используете PHP 8.3+`},{heading:`выберите-kinopoiskdev-если`,content:`Нужны расширенные возможности фильтрации`},{heading:`выберите-kinopoiskdev-если`,content:`Важна архитектура и расширяемость`},{heading:`выберите-kinopoiskdev-если`,content:`Требуется строгая типизация`},{heading:`выберите-kinopoiskdev-если`,content:`Нужна интеграция с PSR стандартами`},{heading:`выберите-notkinopoiskphp-если`,content:`Используете более старые версии PHP`},{heading:`выберите-notkinopoiskphp-если`,content:`Нужны только базовые операции`},{heading:`выберите-notkinopoiskphp-если`,content:`Важна простота использования`},{heading:`выберите-notkinopoiskphp-если`,content:`Требуется максимальная совместимость`},{heading:`миграция`,content:`**⚠️ Важно:** Прямая миграция между библиотеками невозможна из-за разных API!`},{heading:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`Требуется полный рефакторинг кода, так как:`},{heading:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`**Разные API ключи** - нужны отдельные ключи для каждого API`},{heading:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`**Разная структура данных** - модели и ответы не совместимы`},{heading:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`**Разные эндпоинты** - URL и параметры запросов отличаются`},{heading:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`**Разная логика фильтрации** - синтаксис фильтров не совпадает`},{heading:`рекомендации-по-миграции`,content:`**Получить новый API ключ** на kinopoisk.dev`},{heading:`рекомендации-по-миграции`,content:`**Изучить документацию** нового API`},{heading:`рекомендации-по-миграции`,content:`**Переписать все запросы** с нуля`},{heading:`рекомендации-по-миграции`,content:`**Обновить обработку ответов** под новую структуру данных`},{heading:`рекомендации-по-миграции`,content:`**Протестировать** все функции`},{heading:`заключение`,content:`**KinopoiskDev** представляет собой современную библиотеку для официального API kinopoisk.dev с активной поддержкой через Telegram группу (7,908 участников). Это выбор для новых проектов, требующих современного и активно поддерживаемого API.`},{heading:`заключение`,content:`**NotKinopoiskPHP** остается стабильным решением для неофициального API kinopoiskapiunofficial.tech, подходящим для проектов, которые уже используют этот API или требуют максимальной совместимости со старыми версиями PHP.`},{heading:`заключение`,content:`**Выбор зависит от:**`},{heading:`заключение`,content:`Требований к официальности API`},{heading:`заключение`,content:`Необходимости активной поддержки`},{heading:`заключение`,content:`Совместимости с существующим кодом`},{heading:`заключение`,content:`Версии PHP в проекте`}],headings:[{id:`обзор`,content:`Обзор`},{id:`основные-различия`,content:`Основные различия`},{id:`api-и-разработка`,content:`API и разработка`},{id:`архитектура-библиотек`,content:`Архитектура библиотек`},{id:`функциональность`,content:`Функциональность`},{id:`примеры-использования`,content:`Примеры использования`},{id:`kinopoiskdev`,content:`KinopoiskDev`},{id:`notkinopoiskphp`,content:`NotKinopoiskPHP`},{id:`преимущества-kinopoiskdev`,content:`Преимущества KinopoiskDev`},{id:`1-современный-подход`,content:`1\\. Современный подход`},{id:`2-расширенная-функциональность`,content:`2\\. Расширенная функциональность`},{id:`3-лучшая-архитектура`,content:`3\\. Лучшая архитектура`},{id:`4-безопасность`,content:`4\\. Безопасность`},{id:`преимущества-notkinopoiskphp`,content:`Преимущества NotKinopoiskPHP`},{id:`1-простота-использования`,content:`1\\. Простота использования`},{id:`2-совместимость`,content:`2\\. Совместимость`},{id:`3-стабильность`,content:`3\\. Стабильность`},{id:`рекомендации-по-выбору`,content:`Рекомендации по выбору`},{id:`выберите-kinopoiskdev-если`,content:`Выберите KinopoiskDev если:`},{id:`выберите-notkinopoiskphp-если`,content:`Выберите NotKinopoiskPHP если:`},{id:`миграция`,content:`Миграция`},{id:`переход-с-notkinopoiskphp-на-kinopoiskdev`,content:`Переход с NotKinopoiskPHP на KinopoiskDev`},{id:`пример-рефакторинга`,content:`Пример рефакторинга`},{id:`рекомендации-по-миграции`,content:`Рекомендации по миграции`},{id:`заключение`,content:`Заключение`}]},s=[{depth:2,url:`#обзор`,title:(0,n.jsx)(n.Fragment,{children:`Обзор`})},{depth:2,url:`#основные-различия`,title:(0,n.jsx)(n.Fragment,{children:`Основные различия`})},{depth:3,url:`#api-и-разработка`,title:(0,n.jsx)(n.Fragment,{children:`API и разработка`})},{depth:3,url:`#архитектура-библиотек`,title:(0,n.jsx)(n.Fragment,{children:`Архитектура библиотек`})},{depth:3,url:`#функциональность`,title:(0,n.jsx)(n.Fragment,{children:`Функциональность`})},{depth:3,url:`#примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`Примеры использования`})},{depth:4,url:`#kinopoiskdev`,title:(0,n.jsx)(n.Fragment,{children:`KinopoiskDev`})},{depth:4,url:`#notkinopoiskphp`,title:(0,n.jsx)(n.Fragment,{children:`NotKinopoiskPHP`})},{depth:2,url:`#преимущества-kinopoiskdev`,title:(0,n.jsx)(n.Fragment,{children:`Преимущества KinopoiskDev`})},{depth:3,url:`#1-современный-подход`,title:(0,n.jsx)(n.Fragment,{children:`1. Современный подход`})},{depth:3,url:`#2-расширенная-функциональность`,title:(0,n.jsx)(n.Fragment,{children:`2. Расширенная функциональность`})},{depth:3,url:`#3-лучшая-архитектура`,title:(0,n.jsx)(n.Fragment,{children:`3. Лучшая архитектура`})},{depth:3,url:`#4-безопасность`,title:(0,n.jsx)(n.Fragment,{children:`4. Безопасность`})},{depth:2,url:`#преимущества-notkinopoiskphp`,title:(0,n.jsx)(n.Fragment,{children:`Преимущества NotKinopoiskPHP`})},{depth:3,url:`#1-простота-использования`,title:(0,n.jsx)(n.Fragment,{children:`1. Простота использования`})},{depth:3,url:`#2-совместимость`,title:(0,n.jsx)(n.Fragment,{children:`2. Совместимость`})},{depth:3,url:`#3-стабильность`,title:(0,n.jsx)(n.Fragment,{children:`3. Стабильность`})},{depth:2,url:`#рекомендации-по-выбору`,title:(0,n.jsx)(n.Fragment,{children:`Рекомендации по выбору`})},{depth:3,url:`#выберите-kinopoiskdev-если`,title:(0,n.jsx)(n.Fragment,{children:`Выберите KinopoiskDev если:`})},{depth:3,url:`#выберите-notkinopoiskphp-если`,title:(0,n.jsx)(n.Fragment,{children:`Выберите NotKinopoiskPHP если:`})},{depth:2,url:`#миграция`,title:(0,n.jsx)(n.Fragment,{children:`Миграция`})},{depth:3,url:`#переход-с-notkinopoiskphp-на-kinopoiskdev`,title:(0,n.jsx)(n.Fragment,{children:`Переход с NotKinopoiskPHP на KinopoiskDev`})},{depth:3,url:`#пример-рефакторинга`,title:(0,n.jsx)(n.Fragment,{children:`Пример рефакторинга`})},{depth:3,url:`#рекомендации-по-миграции`,title:(0,n.jsx)(n.Fragment,{children:`Рекомендации по миграции`})},{depth:2,url:`#заключение`,title:(0,n.jsx)(n.Fragment,{children:`Заключение`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`обзор`,children:`Обзор`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Важно:`}),` Это два совершенно разных API от разных команд разработки!`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`KinopoiskDev`}),` - обертка для неофициального API `,(0,n.jsx)(t.a,{href:`https://kinopoisk.dev`,children:`kinopoisk.dev`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`NotKinopoiskPHP`}),` - обертка для неофициального API `,(0,n.jsx)(t.a,{href:`https://kinopoiskapiunofficial.tech`,children:`kinopoiskapiunofficial.tech`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Эти API `,(0,n.jsx)(t.strong,{children:`не совместимы`}),` между собой, имеют разную структуру данных и эндпоинты.`]}),`
`,(0,n.jsx)(t.h2,{id:`основные-различия`,children:`Основные различия`}),`
`,(0,n.jsx)(t.h3,{id:`api-и-разработка`,children:`API и разработка`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Аспект`}),(0,n.jsx)(t.th,{children:`KinopoiskDev`}),(0,n.jsx)(t.th,{children:`NotKinopoiskPHP`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`API`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`https://kinopoisk.dev`,children:`kinopoisk.dev`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`https://kinopoiskapiunofficial.tech`,children:`kinopoiskapiunofficial.tech`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Статус`})}),(0,n.jsx)(t.td,{children:`Активная разработка, современный API`}),(0,n.jsx)(t.td,{children:`Стабильный, но менее активная разработка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Поддержка`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`https://t.me/omdb_dev`,children:`Telegram группа`}),` (7,908 участников)`]}),(0,n.jsx)(t.td,{children:`❌ Даже на Email не отвечают`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Совместимость`})}),(0,n.jsx)(t.td,{children:`❌ Не совместим с NotKinopoiskPHP`}),(0,n.jsx)(t.td,{children:`❌ Не совместим с KinopoiskDev`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`архитектура-библиотек`,children:`Архитектура библиотек`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Аспект`}),(0,n.jsx)(t.th,{children:`KinopoiskDev`}),(0,n.jsx)(t.th,{children:`NotKinopoiskPHP`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Подход`})}),(0,n.jsx)(t.td,{children:`Объектно-ориентированный с использованием атрибутов PHP 8.3+`}),(0,n.jsx)(t.td,{children:`Функциональный с использованием трейтов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Структура`})}),(0,n.jsx)(t.td,{children:`Модульная с четким разделением ответственности`}),(0,n.jsx)(t.td,{children:`Монолитная с общими классами`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Валидация`})}),(0,n.jsxs)(t.td,{children:[`Декларативная через атрибуты `,(0,n.jsx)(t.code,{children:`#[Validation]`})]}),(0,n.jsx)(t.td,{children:`Ручная валидация в методах`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Кэширование`})}),(0,n.jsxs)(t.td,{children:[`Интерфейс `,(0,n.jsx)(t.code,{children:`CacheInterface`}),` с возможностью подключения различных драйверов`]}),(0,n.jsx)(t.td,{children:`Встроенное кэширование`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Логирование`})}),(0,n.jsxs)(t.td,{children:[`PSR-3 совместимый `,(0,n.jsx)(t.code,{children:`LoggerInterface`})]}),(0,n.jsx)(t.td,{children:`Простое логирование`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`функциональность`,children:`Функциональность`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Функция`}),(0,n.jsx)(t.th,{children:`KinopoiskDev`}),(0,n.jsx)(t.th,{children:`NotKinopoiskPHP`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Поиск фильмов`})}),(0,n.jsx)(t.td,{children:`✅ Расширенные фильтры с поддержкой диапазонов`}),(0,n.jsx)(t.td,{children:`✅ Базовые фильтры`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Поиск персон`})}),(0,n.jsx)(t.td,{children:`✅ Специализированные фильтры для персон`}),(0,n.jsx)(t.td,{children:`✅ Базовый поиск`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Работа с изображениями`})}),(0,n.jsx)(t.td,{children:`✅ Фильтры по разрешению, типу`}),(0,n.jsx)(t.td,{children:`✅ Базовые возможности`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Валидация данных`})}),(0,n.jsx)(t.td,{children:`✅ Автоматическая через атрибуты`}),(0,n.jsx)(t.td,{children:`⚠️ Ручная`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Обработка ошибок`})}),(0,n.jsx)(t.td,{children:`✅ Специализированные исключения`}),(0,n.jsx)(t.td,{children:`✅ Базовые исключения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Кэширование`})}),(0,n.jsx)(t.td,{children:`✅ Гибкая система кэширования`}),(0,n.jsx)(t.td,{children:`⚠️ Простое кэширование`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Логирование`})}),(0,n.jsx)(t.td,{children:`✅ PSR-3 совместимое`}),(0,n.jsx)(t.td,{children:`⚠️ Базовое`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,n.jsx)(t.h4,{id:`kinopoiskdev`,children:`KinopoiskDev`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` KinopoiskDev\\Http\\MovieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` KinopoiskDev\\Filter\\MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$kinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`apiToken`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск с расширенными фильтрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withYearBetween`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2020`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2024`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withMinRating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`7.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'kp'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withAllGenres`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'драма'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'комедия'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`])`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`       ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`onlyMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter);`})]})]})})}),`
`,(0,n.jsx)(t.h4,{id:`notkinopoiskphp`,children:`NotKinopoiskPHP`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoiskPHP\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск с базовыми параметрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'year'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '2020-2024'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'rating.kp'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '7-10'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'genres.name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'драма,комедия'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'type'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'movie'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`преимущества-kinopoiskdev`,children:`Преимущества KinopoiskDev`}),`
`,(0,n.jsx)(t.h3,{id:`1-современный-подход`,children:`1. Современный подход`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Использование PHP 8.3+ атрибутов`}),`
`,(0,n.jsx)(t.li,{children:`Строгая типизация`}),`
`,(0,n.jsx)(t.li,{children:`Объектно-ориентированный дизайн`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-расширенная-функциональность`,children:`2. Расширенная функциональность`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Более гибкие фильтры`}),`
`,(0,n.jsx)(t.li,{children:`Специализированные классы для разных типов данных`}),`
`,(0,n.jsx)(t.li,{children:`Автоматическая валидация`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`3-лучшая-архитектура`,children:`3. Лучшая архитектура`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Модульная структура`}),`
`,(0,n.jsx)(t.li,{children:`Интерфейсы для расширяемости`}),`
`,(0,n.jsx)(t.li,{children:`PSR стандарты`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`4-безопасность`,children:`4. Безопасность`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Атрибут `,(0,n.jsx)(t.code,{children:`#[Sensitive]`}),` для конфиденциальных данных`]}),`
`,(0,n.jsx)(t.li,{children:`Автоматическое скрытие в JSON/массивах`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`преимущества-notkinopoiskphp`,children:`Преимущества NotKinopoiskPHP`}),`
`,(0,n.jsx)(t.h3,{id:`1-простота-использования`,children:`1. Простота использования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Более простой API`}),`
`,(0,n.jsx)(t.li,{children:`Меньше кода для базовых операций`}),`
`,(0,n.jsx)(t.li,{children:`Быстрый старт`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`2-совместимость`,children:`2. Совместимость`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Работает с более старыми версиями PHP`}),`
`,(0,n.jsx)(t.li,{children:`Меньше зависимостей`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`3-стабильность`,children:`3. Стабильность`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Более зрелая библиотека`}),`
`,(0,n.jsx)(t.li,{children:`Больше тестов`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`рекомендации-по-выбору`,children:`Рекомендации по выбору`}),`
`,(0,n.jsx)(t.h3,{id:`выберите-kinopoiskdev-если`,children:`Выберите KinopoiskDev если:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Используете PHP 8.3+`}),`
`,(0,n.jsx)(t.li,{children:`Нужны расширенные возможности фильтрации`}),`
`,(0,n.jsx)(t.li,{children:`Важна архитектура и расширяемость`}),`
`,(0,n.jsx)(t.li,{children:`Требуется строгая типизация`}),`
`,(0,n.jsx)(t.li,{children:`Нужна интеграция с PSR стандартами`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`выберите-notkinopoiskphp-если`,children:`Выберите NotKinopoiskPHP если:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Используете более старые версии PHP`}),`
`,(0,n.jsx)(t.li,{children:`Нужны только базовые операции`}),`
`,(0,n.jsx)(t.li,{children:`Важна простота использования`}),`
`,(0,n.jsx)(t.li,{children:`Требуется максимальная совместимость`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`миграция`,children:`Миграция`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`⚠️ Важно:`}),` Прямая миграция между библиотеками невозможна из-за разных API!`]}),`
`,(0,n.jsx)(t.h3,{id:`переход-с-notkinopoiskphp-на-kinopoiskdev`,children:`Переход с NotKinopoiskPHP на KinopoiskDev`}),`
`,(0,n.jsx)(t.p,{children:`Требуется полный рефакторинг кода, так как:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Разные API ключи`}),` - нужны отдельные ключи для каждого API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Разная структура данных`}),` - модели и ответы не совместимы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Разные эндпоинты`}),` - URL и параметры запросов отличаются`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Разная логика фильтрации`}),` - синтаксис фильтров не совпадает`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`пример-рефакторинга`,children:`Пример рефакторинга`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// NotKinopoiskPHP (старый код)`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'year'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '2023'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// KinopoiskDev (новый код) - ПОЛНОСТЬЮ ПЕРЕПИСАТЬ!`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$kinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`apiToken`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'new-token-for-kinopoisk-dev'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` MovieSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`year`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2023`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movies `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchMovies`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`рекомендации-по-миграции`,children:`Рекомендации по миграции`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Получить новый API ключ`}),` на `,(0,n.jsx)(t.a,{href:`https://kinopoisk.dev`,children:`kinopoisk.dev`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Изучить документацию`}),` нового API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Переписать все запросы`}),` с нуля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Обновить обработку ответов`}),` под новую структуру данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Протестировать`}),` все функции`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`заключение`,children:`Заключение`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`KinopoiskDev`}),` представляет собой современную библиотеку для официального API `,(0,n.jsx)(t.a,{href:`https://kinopoisk.dev`,children:`kinopoisk.dev`}),` с активной поддержкой через `,(0,n.jsx)(t.a,{href:`https://t.me/omdb_dev`,children:`Telegram группу`}),` (7,908 участников). Это выбор для новых проектов, требующих современного и активно поддерживаемого API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`NotKinopoiskPHP`}),` остается стабильным решением для неофициального API kinopoiskapiunofficial.tech, подходящим для проектов, которые уже используют этот API или требуют максимальной совместимости со старыми версиями PHP.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Выбор зависит от:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Требований к официальности API`}),`
`,(0,n.jsx)(t.li,{children:`Необходимости активной поддержки`}),`
`,(0,n.jsx)(t.li,{children:`Совместимости с существующим кодом`}),`
`,(0,n.jsx)(t.li,{children:`Версии PHP в проекте`}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};