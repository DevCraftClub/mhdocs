import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Kinopoisk`},i=new Date(1786951824e3),a=`

**Описание:** Главный класс для работы с API Kinopoisk.dev
Предоставляет базовую функциональность для выполнения HTTP запросов к API,
обработки ответов, кэширования и управления ошибками. Использует современные
PHP 8.3 возможности и архитектурные паттерны.
Основные возможности:

* Выполнение HTTP запросов к API Kinopoisk.dev
* Автоматическое кэширование ответов
* Валидация входных данных
* Обработка ошибок API
* Логирование операций

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Http\\MovieRequests\`: Для работы с фильмами
* \`\\KinopoiskDev\\Http\\PersonRequests\`: Для работы с персонами
* \`\\KinopoiskDev\\Http\\StudioRequests\`: Для работы со студиями
* \`\\KinopoiskDev\\Contracts\\CacheInterface\`: Интерфейс кэширования
* \`\\KinopoiskDev\\Contracts\\LoggerInterface\`: Интерфейс логирования

## \`__construct()\` [#__construct]

**Описание:** Конструктор клиента API Kinopoisk
Инициализирует клиент API с указанными параметрами. Если параметры не переданы,
используются значения по умолчанию. API токен может быть передан напрямую
или получен из переменной окружения KINOPOISK\\_TOKEN.

**С версии:** 1.0.0

**Параметры:**

* \`$apiToken\` (string|null): Токен авторизации API (если null, берется из $\\_ENV\\['KINOPOISK\\_TOKEN'])
* \`$httpClient\` (HttpClient|null): HTTP клиент (если null, создается новый)
* \`$cache\` (CacheInterface|null): Сервис кэширования (если null, создается FilesystemAdapter)
* \`$logger\` (LoggerInterface|null): Логгер (если null, логирование отключено)
* \`$useCache\` (bool): Использовать кэширование (по умолчанию false)
* \`$responseValidator\` (ValidationService|null): Валидатор ответов API (если null, валидация отключена)

**Исключения:**

* \`ValidationException\`: При отсутствии токена или неверном формате
* \`KinopoiskDevException\`: При ошибке инициализации компонентов

**Пример:**

\`\`\`php
// Минимальная инициализация
$kinopoisk = new Kinopoisk();
// С кастомными параметрами
$kinopoisk = new Kinopoisk(
	apiToken: 'ABC1DEF-2GH3IJK-4LM5NOP-6QR7STU',
	useCache: true
);
// С кастомным HTTP клиентом и логгером
$httpClient = new HttpClient(['timeout' => 60]);
$logger = new CustomLogger();
$kinopoisk = new Kinopoisk('your-api-token', $httpClient, null, $logger);
\`\`\`

## \`validateAndSetApiToken()\` [#validateandsetapitoken]

**Описание:** Валидирует и устанавливает API токен
Проверяет наличие и формат API токена. Если токен не передан,
пытается получить его из переменной окружения KINOPOISK\\_TOKEN.
Валидирует формат токена Kinopoisk.dev.

**С версии:** 1.0.0

**Параметры:**

* \`$apiToken\` (string|null): Токен API для валидации

**Исключения:**

* \`ValidationException\`: При отсутствии токена или неверном формате

## \`createDefaultHttpClient()\` [#createdefaulthttpclient]

**Описание:** Создает HTTP клиент по умолчанию
Создает экземпляр GuzzleHttp\\Client с базовыми настройками
для работы с API Kinopoisk.dev.

**С версии:** 1.0.0

**Возвращает:** \`HttpClient\` Экземпляр HTTP клиента с настроенными параметрами

## \`makeRequestWithValidation()\` [#makerequestwithvalidation]

**Описание:** Выполняет HTTP запрос к API с валидацией ответа
Расширенная версия makeRequest, которая также выполняет валидацию
ответа с эталонными данными, если включена валидация.

**Параметры:**

* \`$method\` (string): HTTP метод
* \`$endpoint\` (string): Конечная точка API
* \`$apiVersion\` (string|null): Версия API

**Возвращает:** \`array<string, mixed>\` Декодированные данные ответа

**Исключения:**

* \`KinopoiskDevException\`: При ошибках запроса или валидации

## \`buildFullUrl()\` [#buildfullurl]

**Описание:** Строит полный URL для запроса

**Параметры:**

* \`$method\` (string): HTTP метод
* \`$endpoint\` (string): Конечная точка
* \`$version\` (string): Версия API

**Возвращает:** \`string\` Полный URL

## \`makeRequest()\` [#makerequest]

**Описание:** Выполняет HTTP запрос к API с поддержкой кэширования
Основной метод для выполнения запросов к API Kinopoisk.dev. Поддерживает
автоматическое кэширование GET запросов и обработку различных HTTP методов.
Валидирует входные параметры перед выполнением запроса.

**С версии:** 1.0.0

**Параметры:**

* \`$method\` (string): HTTP метод (GET, POST, PUT, DELETE, PATCH)
* \`$endpoint\` (string): Конечная точка API (без версии)
* \`$apiVersion\` (string|null): Версия API (если null, используется API\\_VERSION)

**Возвращает:** \`ResponseInterface\` Ответ от API

**Исключения:**

* \`KinopoiskDevException\`: При ошибках валидации или HTTP запроса
* \`ValidationException\`: При неверных параметрах запроса

**Пример:**

\`\`\`php
// Простой GET запрос
$response = $kinopoisk->makeRequest('GET', 'movie/123');
// GET запрос с параметрами
$response = $kinopoisk->makeRequest('GET', 'movie', [
	'page' => 1,
	'limit' => 10
]);
// Запрос к другой версии API
$response = $kinopoisk->makeRequest('GET', 'movie/123', [], 'v1.3');
\`\`\`

## \`validateHttpMethod()\` [#validatehttpmethod]

**Описание:** Валидирует HTTP метод
Проверяет, что переданный HTTP метод поддерживается API.

**С версии:** 1.0.0

**Параметры:**

* \`$method\` (string): HTTP метод для валидации

**Исключения:**

* \`ValidationException\`: При неверном или неподдерживаемом методе

## \`validateEndpoint()\` [#validateendpoint]

**Описание:** Валидирует конечную точку API
Проверяет формат и валидность конечной точки API.
Допускает только буквы, цифры, слеши, подчеркивания и дефисы.

**С версии:** 1.0.0

**Параметры:**

* \`$endpoint\` (string): Конечная точка для валидации

**Исключения:**

* \`ValidationException\`: При неверном формате конечной точки

## \`generateCacheKey()\` [#generatecachekey]

**Описание:** Генерирует ключ для кэширования
Создает уникальный ключ кэша на основе параметров запроса.
Использует SHA256 хэш для обеспечения уникальности и безопасности.

**С версии:** 1.0.0

**Параметры:**

* \`$method\` (string): HTTP метод
* \`$endpoint\` (string): Конечная точка
* \`$version\` (string): Версия API

**Возвращает:** \`string\` Уникальный ключ кэша

## \`executeHttpRequest()\` [#executehttprequest]

**Описание:** Выполняет HTTP запрос
Формирует полный URL запроса и выполняет его через HTTP клиент.
Добавляет API токен в заголовки запроса.

**С версии:** 1.0.0

**Параметры:**

* \`$method\` (string): HTTP метод
* \`$endpoint\` (string): Конечная точка
* \`$version\` (string): Версия API

**Возвращает:** \`ResponseInterface\` Ответ от сервера

**Исключения:**

* \`GuzzleException\`: При ошибке выполнения HTTP запроса

## \`parseResponse()\` [#parseresponse]

**Описание:** Обрабатывает ответ от API с валидацией
Парсит HTTP ответ от API, проверяет статус код и декодирует JSON.
Обрабатывает различные типы ошибок API и логирует результаты.
Если включена валидация ответов, сравнивает с эталонными данными.

**С версии:** 1.0.0

**Параметры:**

* \`$response\` (ResponseInterface): HTTP ответ от API
* \`$requestUrl\` (string|null): Полный URL запроса для валидации (опционально)

**Возвращает:** \`array<string, mixed>\` Декодированные данные ответа

**Исключения:**

* \`KinopoiskDevException\`: При ошибках обработки ответа
* \`KinopoiskResponseException\`: При ошибках API (401, 403, 404, 500)
* \`\\JsonException\`: При ошибках парсинга JSON

**Пример:**

\`\`\`php
$response = $kinopoisk->makeRequest('GET', 'movie/123');
$data = $kinopoisk->parseResponse($response);
$movie = Movie::fromArray($data);
\`\`\`

## \`handleErrorStatusCode()\` [#handleerrorstatuscode]

**Описание:** Обрабатывает ошибочные статус коды
Проверяет статус код ответа и выбрасывает соответствующие исключения
для известных ошибок API (401, 403, 404).

**С версии:** 1.0.0

**Параметры:**

* \`$statusCode\` (HttpStatusCode|null): Статус код как enum
* \`$rawStatusCode\` (int|null): Сырой статус код

**Исключения:**

* \`KinopoiskResponseException\`: При известных ошибках API

## \`validateResponse()\` [#validateresponse]

**Описание:** Валидирует ответ API с эталонными данными

**Параметры:**

* \`$requestUrl\` (string): URL запроса
`,o={contents:[{heading:void 0,content:`**Описание:** Главный класс для работы с API Kinopoisk.dev
Предоставляет базовую функциональность для выполнения HTTP запросов к API,
обработки ответов, кэширования и управления ошибками. Использует современные
PHP 8.3 возможности и архитектурные паттерны.
Основные возможности:`},{heading:void 0,content:`Выполнение HTTP запросов к API Kinopoisk.dev`},{heading:void 0,content:`Автоматическое кэширование ответов`},{heading:void 0,content:`Валидация входных данных`},{heading:void 0,content:`Обработка ошибок API`},{heading:void 0,content:`Логирование операций`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Http\\MovieRequests`: Для работы с фильмами"},{heading:void 0,content:"`\\KinopoiskDev\\Http\\PersonRequests`: Для работы с персонами"},{heading:void 0,content:"`\\KinopoiskDev\\Http\\StudioRequests`: Для работы со студиями"},{heading:void 0,content:"`\\KinopoiskDev\\Contracts\\CacheInterface`: Интерфейс кэширования"},{heading:void 0,content:"`\\KinopoiskDev\\Contracts\\LoggerInterface`: Интерфейс логирования"},{heading:`__construct`,content:`**Описание:** Конструктор клиента API Kinopoisk
Инициализирует клиент API с указанными параметрами. Если параметры не переданы,
используются значения по умолчанию. API токен может быть передан напрямую
или получен из переменной окружения KINOPOISK\\_TOKEN.`},{heading:`__construct`,content:`**С версии:** 1.0.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$apiToken` (string|null): Токен авторизации API (если null, берется из $\\_ENV\\['KINOPOISK\\_TOKEN'])"},{heading:`__construct`,content:"`$httpClient` (HttpClient|null): HTTP клиент (если null, создается новый)"},{heading:`__construct`,content:"`$cache` (CacheInterface|null): Сервис кэширования (если null, создается FilesystemAdapter)"},{heading:`__construct`,content:"`$logger` (LoggerInterface|null): Логгер (если null, логирование отключено)"},{heading:`__construct`,content:"`$useCache` (bool): Использовать кэширование (по умолчанию false)"},{heading:`__construct`,content:"`$responseValidator` (ValidationService|null): Валидатор ответов API (если null, валидация отключена)"},{heading:`__construct`,content:`**Исключения:**`},{heading:`__construct`,content:"`ValidationException`: При отсутствии токена или неверном формате"},{heading:`__construct`,content:"`KinopoiskDevException`: При ошибке инициализации компонентов"},{heading:`__construct`,content:`**Пример:**`},{heading:`validateandsetapitoken`,content:`**Описание:** Валидирует и устанавливает API токен
Проверяет наличие и формат API токена. Если токен не передан,
пытается получить его из переменной окружения KINOPOISK\\_TOKEN.
Валидирует формат токена Kinopoisk.dev.`},{heading:`validateandsetapitoken`,content:`**С версии:** 1.0.0`},{heading:`validateandsetapitoken`,content:`**Параметры:**`},{heading:`validateandsetapitoken`,content:"`$apiToken` (string|null): Токен API для валидации"},{heading:`validateandsetapitoken`,content:`**Исключения:**`},{heading:`validateandsetapitoken`,content:"`ValidationException`: При отсутствии токена или неверном формате"},{heading:`createdefaulthttpclient`,content:`**Описание:** Создает HTTP клиент по умолчанию
Создает экземпляр GuzzleHttp\\Client с базовыми настройками
для работы с API Kinopoisk.dev.`},{heading:`createdefaulthttpclient`,content:`**С версии:** 1.0.0`},{heading:`createdefaulthttpclient`,content:"**Возвращает:** `HttpClient` Экземпляр HTTP клиента с настроенными параметрами"},{heading:`makerequestwithvalidation`,content:`**Описание:** Выполняет HTTP запрос к API с валидацией ответа
Расширенная версия makeRequest, которая также выполняет валидацию
ответа с эталонными данными, если включена валидация.`},{heading:`makerequestwithvalidation`,content:`**Параметры:**`},{heading:`makerequestwithvalidation`,content:"`$method` (string): HTTP метод"},{heading:`makerequestwithvalidation`,content:"`$endpoint` (string): Конечная точка API"},{heading:`makerequestwithvalidation`,content:"`$apiVersion` (string|null): Версия API"},{heading:`makerequestwithvalidation`,content:"**Возвращает:** `array<string, mixed>` Декодированные данные ответа"},{heading:`makerequestwithvalidation`,content:`**Исключения:**`},{heading:`makerequestwithvalidation`,content:"`KinopoiskDevException`: При ошибках запроса или валидации"},{heading:`buildfullurl`,content:`**Описание:** Строит полный URL для запроса`},{heading:`buildfullurl`,content:`**Параметры:**`},{heading:`buildfullurl`,content:"`$method` (string): HTTP метод"},{heading:`buildfullurl`,content:"`$endpoint` (string): Конечная точка"},{heading:`buildfullurl`,content:"`$version` (string): Версия API"},{heading:`buildfullurl`,content:"**Возвращает:** `string` Полный URL"},{heading:`makerequest`,content:`**Описание:** Выполняет HTTP запрос к API с поддержкой кэширования
Основной метод для выполнения запросов к API Kinopoisk.dev. Поддерживает
автоматическое кэширование GET запросов и обработку различных HTTP методов.
Валидирует входные параметры перед выполнением запроса.`},{heading:`makerequest`,content:`**С версии:** 1.0.0`},{heading:`makerequest`,content:`**Параметры:**`},{heading:`makerequest`,content:"`$method` (string): HTTP метод (GET, POST, PUT, DELETE, PATCH)"},{heading:`makerequest`,content:"`$endpoint` (string): Конечная точка API (без версии)"},{heading:`makerequest`,content:"`$apiVersion` (string|null): Версия API (если null, используется API\\_VERSION)"},{heading:`makerequest`,content:"**Возвращает:** `ResponseInterface` Ответ от API"},{heading:`makerequest`,content:`**Исключения:**`},{heading:`makerequest`,content:"`KinopoiskDevException`: При ошибках валидации или HTTP запроса"},{heading:`makerequest`,content:"`ValidationException`: При неверных параметрах запроса"},{heading:`makerequest`,content:`**Пример:**`},{heading:`validatehttpmethod`,content:`**Описание:** Валидирует HTTP метод
Проверяет, что переданный HTTP метод поддерживается API.`},{heading:`validatehttpmethod`,content:`**С версии:** 1.0.0`},{heading:`validatehttpmethod`,content:`**Параметры:**`},{heading:`validatehttpmethod`,content:"`$method` (string): HTTP метод для валидации"},{heading:`validatehttpmethod`,content:`**Исключения:**`},{heading:`validatehttpmethod`,content:"`ValidationException`: При неверном или неподдерживаемом методе"},{heading:`validateendpoint`,content:`**Описание:** Валидирует конечную точку API
Проверяет формат и валидность конечной точки API.
Допускает только буквы, цифры, слеши, подчеркивания и дефисы.`},{heading:`validateendpoint`,content:`**С версии:** 1.0.0`},{heading:`validateendpoint`,content:`**Параметры:**`},{heading:`validateendpoint`,content:"`$endpoint` (string): Конечная точка для валидации"},{heading:`validateendpoint`,content:`**Исключения:**`},{heading:`validateendpoint`,content:"`ValidationException`: При неверном формате конечной точки"},{heading:`generatecachekey`,content:`**Описание:** Генерирует ключ для кэширования
Создает уникальный ключ кэша на основе параметров запроса.
Использует SHA256 хэш для обеспечения уникальности и безопасности.`},{heading:`generatecachekey`,content:`**С версии:** 1.0.0`},{heading:`generatecachekey`,content:`**Параметры:**`},{heading:`generatecachekey`,content:"`$method` (string): HTTP метод"},{heading:`generatecachekey`,content:"`$endpoint` (string): Конечная точка"},{heading:`generatecachekey`,content:"`$version` (string): Версия API"},{heading:`generatecachekey`,content:"**Возвращает:** `string` Уникальный ключ кэша"},{heading:`executehttprequest`,content:`**Описание:** Выполняет HTTP запрос
Формирует полный URL запроса и выполняет его через HTTP клиент.
Добавляет API токен в заголовки запроса.`},{heading:`executehttprequest`,content:`**С версии:** 1.0.0`},{heading:`executehttprequest`,content:`**Параметры:**`},{heading:`executehttprequest`,content:"`$method` (string): HTTP метод"},{heading:`executehttprequest`,content:"`$endpoint` (string): Конечная точка"},{heading:`executehttprequest`,content:"`$version` (string): Версия API"},{heading:`executehttprequest`,content:"**Возвращает:** `ResponseInterface` Ответ от сервера"},{heading:`executehttprequest`,content:`**Исключения:**`},{heading:`executehttprequest`,content:"`GuzzleException`: При ошибке выполнения HTTP запроса"},{heading:`parseresponse`,content:`**Описание:** Обрабатывает ответ от API с валидацией
Парсит HTTP ответ от API, проверяет статус код и декодирует JSON.
Обрабатывает различные типы ошибок API и логирует результаты.
Если включена валидация ответов, сравнивает с эталонными данными.`},{heading:`parseresponse`,content:`**С версии:** 1.0.0`},{heading:`parseresponse`,content:`**Параметры:**`},{heading:`parseresponse`,content:"`$response` (ResponseInterface): HTTP ответ от API"},{heading:`parseresponse`,content:"`$requestUrl` (string|null): Полный URL запроса для валидации (опционально)"},{heading:`parseresponse`,content:"**Возвращает:** `array<string, mixed>` Декодированные данные ответа"},{heading:`parseresponse`,content:`**Исключения:**`},{heading:`parseresponse`,content:"`KinopoiskDevException`: При ошибках обработки ответа"},{heading:`parseresponse`,content:"`KinopoiskResponseException`: При ошибках API (401, 403, 404, 500)"},{heading:`parseresponse`,content:"`\\JsonException`: При ошибках парсинга JSON"},{heading:`parseresponse`,content:`**Пример:**`},{heading:`handleerrorstatuscode`,content:`**Описание:** Обрабатывает ошибочные статус коды
Проверяет статус код ответа и выбрасывает соответствующие исключения
для известных ошибок API (401, 403, 404).`},{heading:`handleerrorstatuscode`,content:`**С версии:** 1.0.0`},{heading:`handleerrorstatuscode`,content:`**Параметры:**`},{heading:`handleerrorstatuscode`,content:"`$statusCode` (HttpStatusCode|null): Статус код как enum"},{heading:`handleerrorstatuscode`,content:"`$rawStatusCode` (int|null): Сырой статус код"},{heading:`handleerrorstatuscode`,content:`**Исключения:**`},{heading:`handleerrorstatuscode`,content:"`KinopoiskResponseException`: При известных ошибках API"},{heading:`validateresponse`,content:`**Описание:** Валидирует ответ API с эталонными данными`},{heading:`validateresponse`,content:`**Параметры:**`},{heading:`validateresponse`,content:"`$requestUrl` (string): URL запроса"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`validateandsetapitoken`,content:"`validateAndSetApiToken()`"},{id:`createdefaulthttpclient`,content:"`createDefaultHttpClient()`"},{id:`makerequestwithvalidation`,content:"`makeRequestWithValidation()`"},{id:`buildfullurl`,content:"`buildFullUrl()`"},{id:`makerequest`,content:"`makeRequest()`"},{id:`validatehttpmethod`,content:"`validateHttpMethod()`"},{id:`validateendpoint`,content:"`validateEndpoint()`"},{id:`generatecachekey`,content:"`generateCacheKey()`"},{id:`executehttprequest`,content:"`executeHttpRequest()`"},{id:`parseresponse`,content:"`parseResponse()`"},{id:`handleerrorstatuscode`,content:"`handleErrorStatusCode()`"},{id:`validateresponse`,content:"`validateResponse()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#validateandsetapitoken`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateAndSetApiToken()`})})},{depth:2,url:`#createdefaulthttpclient`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`createDefaultHttpClient()`})})},{depth:2,url:`#makerequestwithvalidation`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`makeRequestWithValidation()`})})},{depth:2,url:`#buildfullurl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`buildFullUrl()`})})},{depth:2,url:`#makerequest`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`makeRequest()`})})},{depth:2,url:`#validatehttpmethod`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateHttpMethod()`})})},{depth:2,url:`#validateendpoint`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateEndpoint()`})})},{depth:2,url:`#generatecachekey`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`generateCacheKey()`})})},{depth:2,url:`#executehttprequest`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`executeHttpRequest()`})})},{depth:2,url:`#parseresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parseResponse()`})})},{depth:2,url:`#handleerrorstatuscode`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`handleErrorStatusCode()`})})},{depth:2,url:`#validateresponse`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateResponse()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Главный класс для работы с API Kinopoisk.dev
Предоставляет базовую функциональность для выполнения HTTP запросов к API,
обработки ответов, кэширования и управления ошибками. Использует современные
PHP 8.3 возможности и архитектурные паттерны.
Основные возможности:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Выполнение HTTP запросов к API Kinopoisk.dev`}),`
`,(0,n.jsx)(t.li,{children:`Автоматическое кэширование ответов`}),`
`,(0,n.jsx)(t.li,{children:`Валидация входных данных`}),`
`,(0,n.jsx)(t.li,{children:`Обработка ошибок API`}),`
`,(0,n.jsx)(t.li,{children:`Логирование операций`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Http\\MovieRequests`}),`: Для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Http\\PersonRequests`}),`: Для работы с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Http\\StudioRequests`}),`: Для работы со студиями`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Contracts\\CacheInterface`}),`: Интерфейс кэширования`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Contracts\\LoggerInterface`}),`: Интерфейс логирования`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор клиента API Kinopoisk
Инициализирует клиент API с указанными параметрами. Если параметры не переданы,
используются значения по умолчанию. API токен может быть передан напрямую
или получен из переменной окружения KINOPOISK_TOKEN.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiToken`}),` (string|null): Токен авторизации API (если null, берется из $_ENV['KINOPOISK_TOKEN'])`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$httpClient`}),` (HttpClient|null): HTTP клиент (если null, создается новый)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cache`}),` (CacheInterface|null): Сервис кэширования (если null, создается FilesystemAdapter)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$logger`}),` (LoggerInterface|null): Логгер (если null, логирование отключено)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$useCache`}),` (bool): Использовать кэширование (по умолчанию false)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$responseValidator`}),` (ValidationService|null): Валидатор ответов API (если null, валидация отключена)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При отсутствии токена или неверном формате`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибке инициализации компонентов`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Минимальная инициализация`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$kinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// С кастомными параметрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$kinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	apiToken`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'ABC1DEF-2GH3IJK-4LM5NOP-6QR7STU'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`	useCache`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// С кастомным HTTP клиентом и логгером`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$httpClient `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` HttpClient`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'timeout'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 60`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$logger `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` CustomLogger`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$kinopoisk `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, $httpClient, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, $logger);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`validateandsetapitoken`,children:(0,n.jsx)(t.code,{children:`validateAndSetApiToken()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует и устанавливает API токен
Проверяет наличие и формат API токена. Если токен не передан,
пытается получить его из переменной окружения KINOPOISK_TOKEN.
Валидирует формат токена Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiToken`}),` (string|null): Токен API для валидации`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При отсутствии токена или неверном формате`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`createdefaulthttpclient`,children:(0,n.jsx)(t.code,{children:`createDefaultHttpClient()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает HTTP клиент по умолчанию
Создает экземпляр GuzzleHttp\\Client с базовыми настройками
для работы с API Kinopoisk.dev.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`HttpClient`}),` Экземпляр HTTP клиента с настроенными параметрами`]}),`
`,(0,n.jsx)(t.h2,{id:`makerequestwithvalidation`,children:(0,n.jsx)(t.code,{children:`makeRequestWithValidation()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет HTTP запрос к API с валидацией ответа
Расширенная версия makeRequest, которая также выполняет валидацию
ответа с эталонными данными, если включена валидация.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiVersion`}),` (string|null): Версия API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Декодированные данные ответа`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках запроса или валидации`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`buildfullurl`,children:(0,n.jsx)(t.code,{children:`buildFullUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Строит полный URL для запроса`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$version`}),` (string): Версия API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Полный URL`]}),`
`,(0,n.jsx)(t.h2,{id:`makerequest`,children:(0,n.jsx)(t.code,{children:`makeRequest()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет HTTP запрос к API с поддержкой кэширования
Основной метод для выполнения запросов к API Kinopoisk.dev. Поддерживает
автоматическое кэширование GET запросов и обработку различных HTTP методов.
Валидирует входные параметры перед выполнением запроса.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод (GET, POST, PUT, DELETE, PATCH)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка API (без версии)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiVersion`}),` (string|null): Версия API (если null, используется API_VERSION)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ResponseInterface`}),` Ответ от API`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках валидации или HTTP запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При неверных параметрах запроса`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Простой GET запрос`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`makeRequest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'GET'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'movie/123'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// GET запрос с параметрами`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`makeRequest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'GET'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'movie'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'page'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`	'limit'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 10`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Запрос к другой версии API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`makeRequest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'GET'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'movie/123'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [], `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'v1.3'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`validatehttpmethod`,children:(0,n.jsx)(t.code,{children:`validateHttpMethod()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует HTTP метод
Проверяет, что переданный HTTP метод поддерживается API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод для валидации`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При неверном или неподдерживаемом методе`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validateendpoint`,children:(0,n.jsx)(t.code,{children:`validateEndpoint()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует конечную точку API
Проверяет формат и валидность конечной точки API.
Допускает только буквы, цифры, слеши, подчеркивания и дефисы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка для валидации`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При неверном формате конечной точки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`generatecachekey`,children:(0,n.jsx)(t.code,{children:`generateCacheKey()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Генерирует ключ для кэширования
Создает уникальный ключ кэша на основе параметров запроса.
Использует SHA256 хэш для обеспечения уникальности и безопасности.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$version`}),` (string): Версия API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Уникальный ключ кэша`]}),`
`,(0,n.jsx)(t.h2,{id:`executehttprequest`,children:(0,n.jsx)(t.code,{children:`executeHttpRequest()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет HTTP запрос
Формирует полный URL запроса и выполняет его через HTTP клиент.
Добавляет API токен в заголовки запроса.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Конечная точка`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$version`}),` (string): Версия API`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`ResponseInterface`}),` Ответ от сервера`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`GuzzleException`}),`: При ошибке выполнения HTTP запроса`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`parseresponse`,children:(0,n.jsx)(t.code,{children:`parseResponse()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Обрабатывает ответ от API с валидацией
Парсит HTTP ответ от API, проверяет статус код и декодирует JSON.
Обрабатывает различные типы ошибок API и логирует результаты.
Если включена валидация ответов, сравнивает с эталонными данными.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$response`}),` (ResponseInterface): HTTP ответ от API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$requestUrl`}),` (string|null): Полный URL запроса для валидации (опционально)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Декодированные данные ответа`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках обработки ответа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках API (401, 403, 404, 500)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`makeRequest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'GET'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'movie/123'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$data `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseResponse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($response);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($data);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`handleerrorstatuscode`,children:(0,n.jsx)(t.code,{children:`handleErrorStatusCode()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Обрабатывает ошибочные статус коды
Проверяет статус код ответа и выбрасывает соответствующие исключения
для известных ошибок API (401, 403, 404).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$statusCode`}),` (HttpStatusCode|null): Статус код как enum`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rawStatusCode`}),` (int|null): Сырой статус код`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При известных ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validateresponse`,children:(0,n.jsx)(t.code,{children:`validateResponse()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует ответ API с эталонными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$requestUrl`}),` (string): URL запроса`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};