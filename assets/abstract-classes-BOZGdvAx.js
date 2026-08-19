import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Абстрактные классы`,description:`Документация по абстрактные классы. Часть API wrapper для КиноПоиска.`},i=new Date(1787124777e3),a=`

Абстрактные базовые классы библиотеки NotKinopoisk PHP Wrapper.

## AbstractService [#abstractservice]

Абстрактный базовый класс для сервисов Kinopoisk API.

### Описание [#описание]

Предоставляет общую функциональность для всех сервисов, работающих с Kinopoisk API. Содержит базовые методы для выполнения запросов и обработки ответов.

### Основные возможности [#основные-возможности]

* Общие методы для работы с API
* Обработка ошибок и исключений
* Логирование запросов и ответов
* Базовая валидация данных

### Свойства [#свойства]

#### \`$client\` [#client]

**Тип:** \`\\NotKinopoisk\\Client\`

Основной клиент для работы с API.

#### \`$apiVersion\` [#apiversion]

**Тип:** \`ApiVersion\`

Версия API для использования.

### Методы [#методы]

#### \`__construct(Client $client, ApiVersion $apiVersion = ApiVersion::V1)\` [#__constructclient-client-apiversion-apiversion--apiversionv1]

Конструктор абстрактного сервиса для работы с Kinopoisk API.

**Параметры:**

* \`$client\` (\\NotKinopoisk\\Client) — Основной клиент для работы с API
* \`$apiVersion\` (ApiVersion) — Версия API для использования (по умолчанию 'v1')

**Пример:**

\`\`\`php
// Создание сервиса с версией API по умолчанию
$client = new Client('your-api-key');
$service = new FilmService($client);

// Создание сервиса с указанной версией API
$service = new FilmService($client, ApiVersion::V2_2);
\`\`\`

#### \`setApiVersion(ApiVersion $apiVersion): void\` [#setapiversionapiversion-apiversion-void]

Устанавливает версию API для работы сервиса.

**Параметры:**

* \`$apiVersion\` (ApiVersion) — Версия API из перечисления доступных версий

#### \`get(string $uri, array $query = []): array\` [#getstring-uri-array-query---array]

Выполняет GET запрос к API.

**Параметры:**

* \`$uri\` (string) — URI для запроса
* \`$query\` (array) — Параметры запроса

**Возвращает:**

* \`array\` - Ответ от API

#### \`buildUri(string $endpoint, ?ApiVersion $api_version = null): string\` [#builduristring-endpoint-apiversion-api_version--null-string]

Строит URI для запроса с учетом версии API.

**Параметры:**

* \`$endpoint\` (string) — Конечная точка API
* \`$api_version\` (ApiVersion|null) — Версия API (если не указана, используется текущая)

**Возвращает:**

* \`string\` - Полный URI для запроса

### Пример реализации [#пример-реализации]

\`\`\`php
class MyService extends AbstractService
{
    public function getData(): array
    {
        $response = $this->client->get('/api/v1/endpoint');
        return $response->getData();
    }

    public function getCustomData(string $id): array
    {
        $uri = $this->buildUri("/films/{$id}");
        return $this->get($uri);
    }
}
\`\`\`

### Наследующие классы [#наследующие-классы]

* \`\\NotKinopoisk\\Services\\FilmService\` - Сервис для работы с фильмами
* \`\\NotKinopoisk\\Services\\PersonService\` - Сервис для работы с персонами
* \`\\NotKinopoisk\\Services\\MediaService\` - Сервис для работы с медиа
* \`\\NotKinopoisk\\Services\\UserService\` - Сервис для работы с пользователем

### Связанные классы [#связанные-классы]

* \`\\NotKinopoisk\\Client\` - Основной клиент API
* \`\\NotKinopoisk\\Enums\\ApiVersion\` - Перечисление версий API
`,o={contents:[{heading:void 0,content:`Абстрактные базовые классы библиотеки NotKinopoisk PHP Wrapper.`},{heading:`abstractservice`,content:`Абстрактный базовый класс для сервисов Kinopoisk API.`},{heading:`описание`,content:`Предоставляет общую функциональность для всех сервисов, работающих с Kinopoisk API. Содержит базовые методы для выполнения запросов и обработки ответов.`},{heading:`основные-возможности`,content:`Общие методы для работы с API`},{heading:`основные-возможности`,content:`Обработка ошибок и исключений`},{heading:`основные-возможности`,content:`Логирование запросов и ответов`},{heading:`основные-возможности`,content:`Базовая валидация данных`},{heading:`client`,content:"**Тип:** `\\NotKinopoisk\\Client`"},{heading:`client`,content:`Основной клиент для работы с API.`},{heading:`apiversion`,content:"**Тип:** `ApiVersion`"},{heading:`apiversion`,content:`Версия API для использования.`},{heading:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:`Конструктор абстрактного сервиса для работы с Kinopoisk API.`},{heading:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:`**Параметры:**`},{heading:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:"`$client` (\\NotKinopoisk\\Client) — Основной клиент для работы с API"},{heading:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:"`$apiVersion` (ApiVersion) — Версия API для использования (по умолчанию 'v1')"},{heading:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:`**Пример:**`},{heading:`setapiversionapiversion-apiversion-void`,content:`Устанавливает версию API для работы сервиса.`},{heading:`setapiversionapiversion-apiversion-void`,content:`**Параметры:**`},{heading:`setapiversionapiversion-apiversion-void`,content:"`$apiVersion` (ApiVersion) — Версия API из перечисления доступных версий"},{heading:`getstring-uri-array-query---array`,content:`Выполняет GET запрос к API.`},{heading:`getstring-uri-array-query---array`,content:`**Параметры:**`},{heading:`getstring-uri-array-query---array`,content:"`$uri` (string) — URI для запроса"},{heading:`getstring-uri-array-query---array`,content:"`$query` (array) — Параметры запроса"},{heading:`getstring-uri-array-query---array`,content:`**Возвращает:**`},{heading:`getstring-uri-array-query---array`,content:"`array` - Ответ от API"},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:`Строит URI для запроса с учетом версии API.`},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:`**Параметры:**`},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:"`$endpoint` (string) — Конечная точка API"},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:"`$api_version` (ApiVersion|null) — Версия API (если не указана, используется текущая)"},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:`**Возвращает:**`},{heading:`builduristring-endpoint-apiversion-api_version--null-string`,content:"`string` - Полный URI для запроса"},{heading:`наследующие-классы`,content:"`\\NotKinopoisk\\Services\\FilmService` - Сервис для работы с фильмами"},{heading:`наследующие-классы`,content:"`\\NotKinopoisk\\Services\\PersonService` - Сервис для работы с персонами"},{heading:`наследующие-классы`,content:"`\\NotKinopoisk\\Services\\MediaService` - Сервис для работы с медиа"},{heading:`наследующие-классы`,content:"`\\NotKinopoisk\\Services\\UserService` - Сервис для работы с пользователем"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Client` - Основной клиент API"},{heading:`связанные-классы`,content:"`\\NotKinopoisk\\Enums\\ApiVersion` - Перечисление версий API"}],headings:[{id:`abstractservice`,content:`AbstractService`},{id:`описание`,content:`Описание`},{id:`основные-возможности`,content:`Основные возможности`},{id:`свойства`,content:`Свойства`},{id:`client`,content:"`$client`"},{id:`apiversion`,content:"`$apiVersion`"},{id:`методы`,content:`Методы`},{id:`__constructclient-client-apiversion-apiversion--apiversionv1`,content:"`__construct(Client $client, ApiVersion $apiVersion = ApiVersion::V1)`"},{id:`setapiversionapiversion-apiversion-void`,content:"`setApiVersion(ApiVersion $apiVersion): void`"},{id:`getstring-uri-array-query---array`,content:"`get(string $uri, array $query = []): array`"},{id:`builduristring-endpoint-apiversion-api_version--null-string`,content:"`buildUri(string $endpoint, ?ApiVersion $api_version = null): string`"},{id:`пример-реализации`,content:`Пример реализации`},{id:`наследующие-классы`,content:`Наследующие классы`},{id:`связанные-классы`,content:`Связанные классы`}]},s=[{depth:2,url:`#abstractservice`,title:(0,n.jsx)(n.Fragment,{children:`AbstractService`})},{depth:3,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:3,url:`#основные-возможности`,title:(0,n.jsx)(n.Fragment,{children:`Основные возможности`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#client`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$client`})})},{depth:4,url:`#apiversion`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`$apiVersion`})})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:4,url:`#__constructclient-client-apiversion-apiversion--apiversionv1`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(Client $client, ApiVersion $apiVersion = ApiVersion::V1)`})})},{depth:4,url:`#setapiversionapiversion-apiversion-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setApiVersion(ApiVersion $apiVersion): void`})})},{depth:4,url:`#getstring-uri-array-query---array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`get(string $uri, array $query = []): array`})})},{depth:4,url:`#builduristring-endpoint-apiversion-api_version--null-string`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`buildUri(string $endpoint, ?ApiVersion $api_version = null): string`})})},{depth:3,url:`#пример-реализации`,title:(0,n.jsx)(n.Fragment,{children:`Пример реализации`})},{depth:3,url:`#наследующие-классы`,title:(0,n.jsx)(n.Fragment,{children:`Наследующие классы`})},{depth:3,url:`#связанные-классы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные классы`})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Абстрактные базовые классы библиотеки NotKinopoisk PHP Wrapper.`}),`
`,(0,n.jsx)(t.h2,{id:`abstractservice`,children:`AbstractService`}),`
`,(0,n.jsx)(t.p,{children:`Абстрактный базовый класс для сервисов Kinopoisk API.`}),`
`,(0,n.jsx)(t.h3,{id:`описание`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Предоставляет общую функциональность для всех сервисов, работающих с Kinopoisk API. Содержит базовые методы для выполнения запросов и обработки ответов.`}),`
`,(0,n.jsx)(t.h3,{id:`основные-возможности`,children:`Основные возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Общие методы для работы с API`}),`
`,(0,n.jsx)(t.li,{children:`Обработка ошибок и исключений`}),`
`,(0,n.jsx)(t.li,{children:`Логирование запросов и ответов`}),`
`,(0,n.jsx)(t.li,{children:`Базовая валидация данных`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsx)(t.h4,{id:`client`,children:(0,n.jsx)(t.code,{children:`$client`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Client`})]}),`
`,(0,n.jsx)(t.p,{children:`Основной клиент для работы с API.`}),`
`,(0,n.jsx)(t.h4,{id:`apiversion`,children:(0,n.jsx)(t.code,{children:`$apiVersion`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(t.code,{children:`ApiVersion`})]}),`
`,(0,n.jsx)(t.p,{children:`Версия API для использования.`}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h4,{id:`__constructclient-client-apiversion-apiversion--apiversionv1`,children:(0,n.jsx)(t.code,{children:`__construct(Client $client, ApiVersion $apiVersion = ApiVersion::V1)`})}),`
`,(0,n.jsx)(t.p,{children:`Конструктор абстрактного сервиса для работы с Kinopoisk API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$client`}),` (\\NotKinopoisk\\Client) — Основной клиент для работы с API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiVersion`}),` (ApiVersion) — Версия API для использования (по умолчанию 'v1')`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание сервиса с версией API по умолчанию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$client `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$service `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FilmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($client);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание сервиса с указанной версией API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$service `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FilmService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($client, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ApiVersion`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`V2_2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h4,{id:`setapiversionapiversion-apiversion-void`,children:(0,n.jsx)(t.code,{children:`setApiVersion(ApiVersion $apiVersion): void`})}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает версию API для работы сервиса.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$apiVersion`}),` (ApiVersion) — Версия API из перечисления доступных версий`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`getstring-uri-array-query---array`,children:(0,n.jsx)(t.code,{children:`get(string $uri, array $query = []): array`})}),`
`,(0,n.jsx)(t.p,{children:`Выполняет GET запрос к API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$uri`}),` (string) — URI для запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (array) — Параметры запроса`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`array`}),` - Ответ от API`]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`builduristring-endpoint-apiversion-api_version--null-string`,children:(0,n.jsx)(t.code,{children:`buildUri(string $endpoint, ?ApiVersion $api_version = null): string`})}),`
`,(0,n.jsx)(t.p,{children:`Строит URI для запроса с учетом версии API.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string) — Конечная точка API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$api_version`}),` (ApiVersion|null) — Версия API (если не указана, используется текущая)`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возвращает:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`string`}),` - Полный URI для запроса`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`пример-реализации`,children:`Пример реализации`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` MyService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractService`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` getData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        $response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`client`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/api/v1/endpoint'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $response`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    }`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` getCustomData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $id)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        $uri `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`buildUri`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"/films/{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$id`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`        return`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` $this`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($uri);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    }`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h3,{id:`наследующие-классы`,children:`Наследующие классы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\FilmService`}),` - Сервис для работы с фильмами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\PersonService`}),` - Сервис для работы с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\MediaService`}),` - Сервис для работы с медиа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Services\\UserService`}),` - Сервис для работы с пользователем`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`связанные-классы`,children:`Связанные классы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Client`}),` - Основной клиент API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\NotKinopoisk\\Enums\\ApiVersion`}),` - Перечисление версий API`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};