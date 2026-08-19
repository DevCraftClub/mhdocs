import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Client - Основной клиент`,description:`Документация по client - основной клиент. Часть API wrapper для КиноПоиска.`},i=new Date(1787145028e3),a=`

Основной клиент для работы с Kinopoisk API.

***

**📚 Навигация:** [Главная](index) → Client

**🔗 Связанные классы:**

* [FilmService](./services/film-service) — Сервис для работы с фильмами
* [PersonService](./services/person-service) — Сервис для работы с персонами
* [MediaService](./services/media-service) — Сервис для работы с медиа
* [UserService](./services/user-service) — Сервис для работы с пользователями
* [ApiVersion](./enums/api-version) — Версии API
* [ApiException](./exceptions/api-exception) — Базовое исключение API
* [InvalidApiKeyException](./exceptions/invalid-api-key-exception) — Неверный API ключ
* [RateLimitException](./exceptions/rate-limit-exception) — Превышение лимита
* [ResourceNotFoundException](./exceptions/resource-not-found-exception) — Ресурс не найден

***

## Описание [#описание]

Предоставляет единую точку входа для работы с Kinopoisk API. Содержит все сервисы для работы с различными типами данных: фильмы, персоны, сериалы и другие.

## Основные возможности [#основные-возможности]

* Инициализация с API ключом
* Доступ к различным сервисам API
* Централизованная обработка ошибок
* Управление HTTP клиентом

## Свойства [#свойства]

### \`$films\` [#films]

**Тип:** \`\\NotKinopoisk\\Services\\FilmService\`

Сервис для работы с фильмами.

### \`$persons\` [#persons]

**Тип:** \`\\NotKinopoisk\\Services\\PersonService\`

Сервис для работы с персонами (актеры, режиссеры и т.д.).

### \`$users\` [#users]

**Тип:** \`\\NotKinopoisk\\Services\\UserService\`

Сервис для работы с пользовательскими данными.

### \`$media\` [#media]

**Тип:** \`\\NotKinopoisk\\Services\\MediaService\`

Сервис для работы с медиа контентом.

## Методы [#методы]

### \`__construct(?string $apiKey = null, array $config = [])\` [#__constructstring-apikey--null-array-config--]

Конструктор клиента.

**Параметры:**

* \`$apiKey\` (string|null) — API ключ для доступа к Kinopoisk API. Если не указан, будет попытка загрузить из переменной окружения \`KINOPOISK_API_KEY\`
* \`$config\` (array) — Дополнительная конфигурация для HTTP клиента

**Исключения:**

* \`InvalidArgumentException\` - Если API ключ не указан и не найден в переменных окружения

**Пример:**

\`\`\`php
// С API ключом
$client = new Client('your-api-key');

// Без API ключа (будет загружен из переменной окружения)
$client = new Client();

// С дополнительной конфигурацией
$client = new Client('your-api-key', [
    'timeout' => 30,
    'headers' => ['User-Agent' => 'MyApp/1.0']
]);
\`\`\`

### \`get(string $uri, array $query = []): array\` [#getstring-uri-array-query---array]

Выполняет GET запрос к API.

**Параметры:**

* \`$uri\` (string) - URI для запроса
* \`$query\` (array) - Параметры запроса

**Возвращает:**

* \`array\` - Ответ от API

**Исключения:**

* \`ApiException\` - При ошибке API
* \`InvalidApiKeyException\` - При неверном API ключе
* \`RateLimitException\` - При превышении лимита запросов
* \`ResourceNotFoundException\` - При отсутствии ресурса

### \`request(string $method, string $uri, array $options = []): array\` [#requeststring-method-string-uri-array-options---array]

Выполняет HTTP запрос к API.

**Параметры:**

* \`$method\` (string) - HTTP метод (GET, POST, PUT, DELETE)
* \`$uri\` (string) - URI для запроса
* \`$options\` (array) - Дополнительные опции запроса

**Возвращает:**

* \`array\` - Ответ от API

**Исключения:**

* \`ApiException\` - При ошибке API
* \`InvalidApiKeyException\` - При неверном API ключе
* \`RateLimitException\` - При превышении лимита запросов
* \`ResourceNotFoundException\` - При отсутствии ресурса

### \`getApiKey(): string|null\` [#getapikey-stringnull]

Получает текущий API ключ.

**Возвращает:**

* \`string|null\` - API ключ или null, если не установлен

### \`getBaseUrl(): string\` [#getbaseurl-string]

Получает базовый URL для API запросов.

**Возвращает:**

* \`string\` - Базовый URL (по умолчанию: [https://kinopoiskapiunofficial.tech](https://kinopoiskapiunofficial.tech))

### \`setBaseUrl(string $url): void\` [#setbaseurlstring-url-void]

Устанавливает базовый URL для API запросов.

**Параметры:**

* \`$url\` (string) - Новый базовый URL

## Примеры использования [#примеры-использования]

### Базовое использование [#базовое-использование]

\`\`\`php
<?php

use NotKinopoisk\\Client;

// Создание клиента
$client = new Client('your-api-key');

// Работа с фильмами
$film = $client->films->getById(301);
echo $film->getDisplayName();

// Работа с персонами
$person = $client->persons->getById(12345);
echo $person->getDisplayName();

// Поиск персон
$searchResult = $client->persons->search('Том Круз');
\`\`\`

### Использование с переменными окружения [#использование-с-переменными-окружения]

\`\`\`php
<?php

use NotKinopoisk\\Client;

// API ключ будет загружен из переменной окружения KINOPOISK_API_KEY
$client = new Client();

// Работа с медиа контентом
$images = $client->media->getImages(301, ImageType::POSTER);
\`\`\`

### Использование с дополнительной конфигурацией [#использование-с-дополнительной-конфигурацией]

\`\`\`php
<?php

use NotKinopoisk\\Client;

$config = [
    'timeout' => 60,
    'headers' => [
        'User-Agent' => 'MyApp/1.0',
        'Accept' => 'application/json'
    ],
    'verify' => true
];

$client = new Client('your-api-key', $config);
\`\`\`

## Обработка ошибок [#обработка-ошибок]

\`\`\`php
<?php

use NotKinopoisk\\Client;
use NotKinopoisk\\Exception\\ApiException;
use NotKinopoisk\\Exception\\InvalidApiKeyException;
use NotKinopoisk\\Exception\\RateLimitException;
use NotKinopoisk\\Exception\\ResourceNotFoundException;

try {
    $client = new Client('your-api-key');
    $film = $client->films->getById(301);
} catch (InvalidApiKeyException $e) {
    echo "Неверный API ключ: " . $e->getMessage();
} catch (RateLimitException $e) {
    echo "Превышен лимит запросов: " . $e->getMessage();
} catch (ResourceNotFoundException $e) {
    echo "Ресурс не найден: " . $e->getMessage();
} catch (ApiException $e) {
    echo "Ошибка API: " . $e->getMessage();
}
\`\`\`
`,o={contents:[{heading:void 0,content:`Основной клиент для работы с Kinopoisk API.`},{heading:void 0,content:`**📚 Навигация:** Главная → Client`},{heading:void 0,content:`**🔗 Связанные классы:**`},{heading:void 0,content:`FilmService — Сервис для работы с фильмами`},{heading:void 0,content:`PersonService — Сервис для работы с персонами`},{heading:void 0,content:`MediaService — Сервис для работы с медиа`},{heading:void 0,content:`UserService — Сервис для работы с пользователями`},{heading:void 0,content:`ApiVersion — Версии API`},{heading:void 0,content:`ApiException — Базовое исключение API`},{heading:void 0,content:`InvalidApiKeyException — Неверный API ключ`},{heading:void 0,content:`RateLimitException — Превышение лимита`},{heading:void 0,content:`ResourceNotFoundException — Ресурс не найден`},{heading:`описание`,content:`Предоставляет единую точку входа для работы с Kinopoisk API. Содержит все сервисы для работы с различными типами данных: фильмы, персоны, сериалы и другие.`},{heading:`основные-возможности`,content:`Инициализация с API ключом`},{heading:`основные-возможности`,content:`Доступ к различным сервисам API`},{heading:`основные-возможности`,content:`Централизованная обработка ошибок`},{heading:`основные-возможности`,content:`Управление HTTP клиентом`},{heading:`films`,content:"**Тип:** `\\NotKinopoisk\\Services\\FilmService`"},{heading:`films`,content:`Сервис для работы с фильмами.`},{heading:`persons`,content:"**Тип:** `\\NotKinopoisk\\Services\\PersonService`"},{heading:`persons`,content:`Сервис для работы с персонами (актеры, режиссеры и т.д.).`},{heading:`users`,content:"**Тип:** `\\NotKinopoisk\\Services\\UserService`"},{heading:`users`,content:`Сервис для работы с пользовательскими данными.`},{heading:`media`,content:"**Тип:** `\\NotKinopoisk\\Services\\MediaService`"},{heading:`media`,content:`Сервис для работы с медиа контентом.`},{heading:`__constructstring-apikey--null-array-config--`,content:`Конструктор клиента.`},{heading:`__constructstring-apikey--null-array-config--`,content:`**Параметры:**`},{heading:`__constructstring-apikey--null-array-config--`,content:"`$apiKey` (string|null) — API ключ для доступа к Kinopoisk API. Если не указан, будет попытка загрузить из переменной окружения `KINOPOISK_API_KEY`"},{heading:`__constructstring-apikey--null-array-config--`,content:"`$config` (array) — Дополнительная конфигурация для HTTP клиента"},{heading:`__constructstring-apikey--null-array-config--`,content:`**Исключения:**`},{heading:`__constructstring-apikey--null-array-config--`,content:"`InvalidArgumentException` - Если API ключ не указан и не найден в переменных окружения"},{heading:`__constructstring-apikey--null-array-config--`,content:`**Пример:**`},{heading:`getstring-uri-array-query---array`,content:`Выполняет GET запрос к API.`},{heading:`getstring-uri-array-query---array`,content:`**Параметры:**`},{heading:`getstring-uri-array-query---array`,content:"`$uri` (string) - URI для запроса"},{heading:`getstring-uri-array-query---array`,content:"`$query` (array) - Параметры запроса"},{heading:`getstring-uri-array-query---array`,content:`**Возвращает:**`},{heading:`getstring-uri-array-query---array`,content:"`array` - Ответ от API"},{heading:`getstring-uri-array-query---array`,content:`**Исключения:**`},{heading:`getstring-uri-array-query---array`,content:"`ApiException` - При ошибке API"},{heading:`getstring-uri-array-query---array`,content:"`InvalidApiKeyException` - При неверном API ключе"},{heading:`getstring-uri-array-query---array`,content:"`RateLimitException` - При превышении лимита запросов"},{heading:`getstring-uri-array-query---array`,content:"`ResourceNotFoundException` - При отсутствии ресурса"},{heading:`requeststring-method-string-uri-array-options---array`,content:`Выполняет HTTP запрос к API.`},{heading:`requeststring-method-string-uri-array-options---array`,content:`**Параметры:**`},{heading:`requeststring-method-string-uri-array-options---array`,content:"`$method` (string) - HTTP метод (GET, POST, PUT, DELETE)"},{heading:`requeststring-method-string-uri-array-options---array`,content:"`$uri` (string) - URI для запроса"},{heading:`requeststring-method-string-uri-array-options---array`,content:"`$options` (array) - Дополнительные опции запроса"},{heading:`requeststring-method-string-uri-array-options---array`,content:`**Возвращает:**`},{heading:`requeststring-method-string-uri-array-options---array`,content:"`array` - Ответ от API"},{heading:`requeststring-method-string-uri-array-options---array`,content:`**Исключения:**`},{heading:`requeststring-method-string-uri-array-options---array`,content:"`ApiException` - При ошибке API"},{heading:`requeststring-method-string-uri-array-options---array`,content:"`InvalidApiKeyException` - При неверном API ключе"},{heading:`requeststring-method-string-uri-array-options---array`,content:"`RateLimitException` - При превышении лимита запросов"},{heading:`requeststring-method-string-uri-array-options---array`,content:"`ResourceNotFoundException` - При отсутствии ресурса"},{heading:`getapikey-stringnull`,content:`Получает текущий API ключ.`},{heading:`getapikey-stringnull`,content:`**Возвращает:**`},{heading:`getapikey-stringnull`,content:"`string|null` - API ключ или null, если не установлен"},{heading:`getbaseurl-string`,content:`Получает базовый URL для API запросов.`},{heading:`getbaseurl-string`,content:`**Возвращает:**`},{heading:`getbaseurl-string`,content:"`string` - Базовый URL (по умолчанию: https\\://kinopoiskapiunofficial.tech)"},{heading:`setbaseurlstring-url-void`,content:`Устанавливает базовый URL для API запросов.`},{heading:`setbaseurlstring-url-void`,content:`**Параметры:**`},{heading:`setbaseurlstring-url-void`,content:"`$url` (string) - Новый базовый URL"}],headings:[{id:`описание`,content:`Описание`},{id:`основные-возможности`,content:`Основные возможности`},{id:`свойства`,content:`Свойства`},{id:`films`,content:"`$films`"},{id:`persons`,content:"`$persons`"},{id:`users`,content:"`$users`"},{id:`media`,content:"`$media`"},{id:`методы`,content:`Методы`},{id:`__constructstring-apikey--null-array-config--`,content:"`__construct(?string $apiKey = null, array $config = [])`"},{id:`getstring-uri-array-query---array`,content:"`get(string $uri, array $query = []): array`"},{id:`requeststring-method-string-uri-array-options---array`,content:"`request(string $method, string $uri, array $options = []): array`"},{id:`getapikey-stringnull`,content:"`getApiKey(): string|null`"},{id:`getbaseurl-string`,content:"`getBaseUrl(): string`"},{id:`setbaseurlstring-url-void`,content:"`setBaseUrl(string $url): void`"},{id:`примеры-использования`,content:`Примеры использования`},{id:`базовое-использование`,content:`Базовое использование`},{id:`использование-с-переменными-окружения`,content:`Использование с переменными окружения`},{id:`использование-с-дополнительной-конфигурацией`,content:`Использование с дополнительной конфигурацией`},{id:`обработка-ошибок`,content:`Обработка ошибок`}]},s=[{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:2,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:2,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#films`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$films`})})},{depth:3,url:`#persons`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$persons`})})},{depth:3,url:`#users`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$users`})})},{depth:3,url:`#media`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$media`})})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__constructstring-apikey--null-array-config--`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(?string $apiKey = null, array $config = [])`})})},{depth:3,url:`#getstring-uri-array-query---array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`get(string $uri, array $query = []): array`})})},{depth:3,url:`#requeststring-method-string-uri-array-options---array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`request(string $method, string $uri, array $options = []): array`})})},{depth:3,url:`#getapikey-stringnull`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getApiKey(): string|null`})})},{depth:3,url:`#getbaseurl-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBaseUrl(): string`})})},{depth:3,url:`#setbaseurlstring-url-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setBaseUrl(string $url): void`})})},{depth:2,url:`#примеры-использования`,title:(0,n.jsx)(n.Fragment,{children:`Примеры использования`})},{depth:3,url:`#базовое-использование`,title:(0,n.jsx)(n.Fragment,{children:`Базовое использование`})},{depth:3,url:`#использование-с-переменными-окружения`,title:(0,n.jsx)(n.Fragment,{children:`Использование с переменными окружения`})},{depth:3,url:`#использование-с-дополнительной-конфигурацией`,title:(0,n.jsx)(n.Fragment,{children:`Использование с дополнительной конфигурацией`})},{depth:2,url:`#обработка-ошибок`,title:(0,n.jsx)(n.Fragment,{children:`Обработка ошибок`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Основной клиент для работы с Kinopoisk API.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`📚 Навигация:`}),` `,(0,n.jsx)(t.a,{href:`index`,children:`Главная`}),` → Client`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`🔗 Связанные классы:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/film-service`,children:`FilmService`}),` — Сервис для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/person-service`,children:`PersonService`}),` — Сервис для работы с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/media-service`,children:`MediaService`}),` — Сервис для работы с медиа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./services/user-service`,children:`UserService`}),` — Сервис для работы с пользователями`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./enums/api-version`,children:`ApiVersion`}),` — Версии API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/api-exception`,children:`ApiException`}),` — Базовое исключение API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/invalid-api-key-exception`,children:`InvalidApiKeyException`}),` — Неверный API ключ`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/rate-limit-exception`,children:`RateLimitException`}),` — Превышение лимита`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./exceptions/resource-not-found-exception`,children:`ResourceNotFoundException`}),` — Ресурс не найден`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Предоставляет единую точку входа для работы с Kinopoisk API. Содержит все сервисы для работы с различными типами данных: фильмы, персоны, сериалы и другие.`}),`
`,(0,n.jsx)(t.h2,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Инициализация с API ключом`}),`
`,(0,n.jsx)(t.li,{children:`Доступ к различным сервисам API`}),`
`,(0,n.jsx)(t.li,{children:`Централизованная обработка ошибок`}),`
`,(0,n.jsx)(t.li,{children:`Управление HTTP клиентом`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.h3,{id:`films`,children:(0,n.jsx)(t.code,{children:`$films`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\FilmService`})]}),`
`,(0,n.jsx)(t.p,{children:`Сервис для работы с фильмами.`}),`
`,(0,n.jsx)(t.h3,{id:`persons`,children:(0,n.jsx)(t.code,{children:`$persons`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\PersonService`})]}),`
`,(0,n.jsx)(t.p,{children:`Сервис для работы с персонами (актеры, режиссеры и т.д.).`}),`
`,(0,n.jsx)(t.h3,{id:`users`,children:(0,n.jsx)(t.code,{children:`$users`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\UserService`})]}),`
`,(0,n.jsx)(t.p,{children:`Сервис для работы с пользовательскими данными.`}),`
`,(0,n.jsx)(t.h3,{id:`media`,children:(0,n.jsx)(t.code,{children:`$media`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\MediaService`})]}),`
`,(0,n.jsx)(t.p,{children:`Сервис для работы с медиа контентом.`}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__constructstring-apikey--null-array-config--`,children:(0,n.jsx)(t.code,{children:`__construct(?string $apiKey = null, array $config = [])`})}),`
`,(0,n.jsx)(t.p,{children:`Конструктор клиента.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiKey`}),` (string|null) — API ключ для доступа к Kinopoisk API. Если не указан, будет попытка загрузить из переменной окружения `,(0,n.jsx)(t.code,{children:`KINOPOISK_API_KEY`})]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$config`}),` (array) — Дополнительная конфигурация для HTTP клиента`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`InvalidArgumentException`}),` - Если API ключ не указан и не найден в переменных окружения`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// С API ключом`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Без API ключа (будет загружен из переменной окружения)`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// С дополнительной конфигурацией`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'timeout'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'headers'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'User-Agent'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'MyApp/1.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`getstring-uri-array-query---array`,children:(0,n.jsx)(t.code,{children:`get(string $uri, array $query = []): array`})}),`
`,(0,n.jsx)(t.p,{children:`Выполняет GET запрос к API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$uri`}),` (string) - URI для запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (array) - Параметры запроса`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`array`}),` - Ответ от API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ApiException`}),` - При ошибке API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`InvalidApiKeyException`}),` - При неверном API ключе`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`RateLimitException`}),` - При превышении лимита запросов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ResourceNotFoundException`}),` - При отсутствии ресурса`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`requeststring-method-string-uri-array-options---array`,children:(0,n.jsx)(t.code,{children:`request(string $method, string $uri, array $options = []): array`})}),`
`,(0,n.jsx)(t.p,{children:`Выполняет HTTP запрос к API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string) - HTTP метод (GET, POST, PUT, DELETE)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$uri`}),` (string) - URI для запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$options`}),` (array) - Дополнительные опции запроса`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`array`}),` - Ответ от API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ApiException`}),` - При ошибке API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`InvalidApiKeyException`}),` - При неверном API ключе`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`RateLimitException`}),` - При превышении лимита запросов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ResourceNotFoundException`}),` - При отсутствии ресурса`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getapikey-stringnull`,children:(0,n.jsx)(t.code,{children:`getApiKey(): string|null`})}),`
`,(0,n.jsx)(t.p,{children:`Получает текущий API ключ.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string|null`}),` - API ключ или null, если не установлен`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`getbaseurl-string`,children:(0,n.jsx)(t.code,{children:`getBaseUrl(): string`})}),`
`,(0,n.jsx)(t.p,{children:`Получает базовый URL для API запросов.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Базовый URL (по умолчанию: `,(0,n.jsx)(t.a,{href:`https://kinopoiskapiunofficial.tech`,children:`https://kinopoiskapiunofficial.tech`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`setbaseurlstring-url-void`,children:(0,n.jsx)(t.code,{children:`setBaseUrl(string $url): void`})}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает базовый URL для API запросов.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` (string) - Новый базовый URL`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`примеры-использования`,children:`Примеры использования`}),`
`,(0,n.jsx)(t.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание клиента`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Работа с фильмами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $film`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Работа с персонами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$person `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`12345`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $person`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDisplayName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск персон`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$searchResult `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`persons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`search`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Том Круз'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`использование-с-переменными-окружения`,children:`Использование с переменными окружения`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// API ключ будет загружен из переменной окружения KINOPOISK_API_KEY`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Работа с медиа контентом`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$images `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`media`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getImages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ImageType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`POSTER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h3,{id:`использование-с-дополнительной-конфигурацией`,children:`Использование с дополнительной конфигурацией`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$config `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'timeout'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 60`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'headers'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        'User-Agent'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'MyApp/1.0'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`        'Accept'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'application/json'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    ],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'verify'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, $config);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`обработка-ошибок`,children:`Обработка ошибок`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`<?`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`php`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Exception\\ApiException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Exception\\InvalidApiKeyException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Exception\\RateLimitException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NotKinopoisk\\Exception\\ResourceNotFoundException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $film `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`films`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`301`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`InvalidApiKeyException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Неверный API ключ: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`RateLimitException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Превышен лимит запросов: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ResourceNotFoundException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Ресурс не найден: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ApiException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Ошибка API: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};