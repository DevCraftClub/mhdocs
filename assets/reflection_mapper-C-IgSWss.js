import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Маппер по reflection`,description:`DTO: fromArray, toArray, toJson через AbstractReflection и ReflectionMapper.`,version:`1.1.0`},i=new Date(1789411935e3),a=`

## Введение [#введение]

\`AbstractReflection\` — базовый класс для DTO с **публичными** типизированными свойствами. Даёт \`fromArray()\`, \`toArray()\` и \`toJson()\`. Заполнение и выгрузку делает \`ReflectionMapper\`.

Зачем: принять массив с API или формы, проверить поля атрибутами валидации, отдать обратно массив или JSON — без ручного присваивания каждого поля.

## Предварительные требования [#предварительные-требования]

* [Начало работы](../getting_started)
* [Установка](../install)

## Пример [#пример]

\`\`\`php
use Devcraft\\Abstracts\\AbstractReflection;
use Devcraft\\Attributes\\ArrayOf;
use Devcraft\\Attributes\\Range;

final class Address extends AbstractReflection
{
    public string $city;
}

final class Profile extends AbstractReflection
{
    public string $name;

    public Address $address;

    #[ArrayOf(Address::class)]
    public array $locations = [];

    #[Range(min: 0)]
    public int $score = 0;
}

$profile = Profile::fromArray([
    'name' => 'Ada',
    'address' => ['city' => 'Berlin'],
    'locations' => [
        ['city' => 'Berlin'],
    ],
    'score' => '10',
]);

$profile->toArray();
$profile->toJson();
\`\`\`

Канонический пример Proxy / Address:

\`\`\`php
use Devcraft\\Abstracts\\AbstractReflection;
use Devcraft\\Attributes\\ArrayOf;
use Devcraft\\Attributes\\Range;
use Devcraft\\Attributes\\Regex;

final class Address extends AbstractReflection
{
    public string $city;
}

final class Proxy extends AbstractReflection
{
    #[Regex('/^[0-9a-f-]{36}$/i')]
    public string $id;

    #[Range(min: 1, max: 65535)]
    public int $port;

    public Address $address;

    #[ArrayOf(Address::class)]
    public array $locations = [];
}

$proxy = Proxy::fromArray([
    'id' => '550e8400-e29b-41d4-a716-446655440000',
    'port' => '8080',
    'address' => ['city' => 'Berlin'],
    'locations' => [
        ['city' => 'Berlin'],
        ['city' => 'Paris'],
    ],
]);

$proxy->port;              // int 8080 (string coerced)
$proxy->address->city;     // 'Berlin'
$proxy->toArray();         // nested arrays
echo $proxy->toJson();     // pretty-printed JSON
\`\`\`

См. также: [AbstractReflection](../reference/abstracts/AbstractReflection), [ReflectionMapper](../reference/mapper/ReflectionMapper), [ArrayOf](../reference/attributes/ArrayOf).

## API AbstractReflection [#api-abstractreflection]

| Метод                                             | Описание                                                                |
| ------------------------------------------------- | ----------------------------------------------------------------------- |
| \`static fromArray(array $data): static\`           | Создать экземпляр и заполнить public-свойства                           |
| \`toArray(): array\`                                | Выгрузить инициализированные public-свойства (вложенные DTO рекурсивно) |
| \`toJson(): string\`                                | Красивый JSON с Unicode; при ошибке — \`JsonException\`                   |
| \`static setLogger(LoggerInterface $logger): void\` | Свой логгер для сбоев валидации                                         |
| \`static resetLogger(): void\`                      | Сбросить логгер (тесты)                                                 |

В маппинге участвуют только **public, не static** свойства. Private/protected mapper игнорирует.

## Правила заполнения [#правила-заполнения]

\`ReflectionMapper::hydrate($target, $data)\` обходит public-свойства:

1. Нет ключа или явный \`null\` → запасной путь для null (см. ниже).
2. Значение приводится к типу свойства.
3. \`#[ArrayOf]\` обрабатывает списки.
4. Атрибуты валидации проверяют уже приведённое значение.
5. Ошибки собираются; если карта ошибок не пуста → \`ValidationException\`.

### Скаляры [#скаляры]

| Объявленный тип    | Что принимают                                               |
| ------------------ | ----------------------------------------------------------- |
| \`string\`           | только string                                               |
| \`int\`              | int или числовая строка (\`FILTER_VALIDATE_INT\`)             |
| \`float\`            | float, int или числовая строка (\`FILTER_VALIDATE_FLOAT\`)    |
| \`bool\`             | bool, \`0\`/\`1\` или булевы строки (\`FILTER_VALIDATE_BOOLEAN\`) |
| \`array\`            | array                                                       |
| \`object\`           | object                                                      |
| \`mixed\` / без типа | что угодно                                                  |

Объединения и пересечения типов свойств не поддерживаются — падают при приведении.

### Вложенные DTO [#вложенные-dto]

Если тип свойства — наследник \`AbstractReflection\`, а на входе массив, mapper создаёт вложенный класс и заполняет его. Путь ошибки — через точку (\`address.city\`, \`locations.0.city\`).

Если на входе уже экземпляр нужного типа (или интерфейса) — принимается как есть.

### Запасной путь для null [#запасной-путь-для-null]

Когда ключа нет или значение \`null\`:

* свойства с default оставляют default;
* nullable без пригодного значения становятся \`null\`;
* обязательные non-nullable без default получают ошибку «is required».

При сбое приведения/валидации у **nullable** свойства mapper ставит \`null\` вместо добавления пути в выброшенную карту ошибок (сбой всё равно пишется в лог).

## \`#[ArrayOf]\` [#arrayof]

\`ArrayOf\` — и подсказка для преобразования, и правило валидации.

Значение должно быть **списком** (\`array_is_list\`). Каждый элемент приводится к объявленному типу (встроенный или вложенный \`AbstractReflection\`).

\`\`\`php
#[ArrayOf('int')]
public array $ids = [];

#[ArrayOf(Address::class)]
public array $locations = [];
\`\`\`

Ассоциативные массивы падают с сообщением \`must be a list\`. Ошибки элементов — \`ids.1\`, \`locations.0.city\` и т.д.

## Выгрузка [#выгрузка]

\`toArray()\` включает только инициализированные public-свойства. Вложенные \`AbstractReflection\` раскрываются рекурсивно. Обычные массивы обходятся поэлементно.

\`toJson()\` кодирует \`toArray()\` с:

* \`JSON_THROW_ON_ERROR\`
* \`JSON_UNESCAPED_UNICODE\`
* \`JSON_PRETTY_PRINT\`
* \`JSON_UNESCAPED_SLASHES\`
* \`JSON_INVALID_UTF8_SUBSTITUTE\`

## Логирование [#логирование]

По умолчанию — \`Analog\\Logger\`. Для тестов или своего лога:

\`\`\`php
AbstractReflection::setLogger($psrLogger);
\`\`\`

Каждый сбой пишется с уровнем error и контекстом: \`class\`, \`property\` (путь через точку), \`expected\`, \`actual_type\`.

## Прямой вызов mapper [#прямой-вызов-mapper]

Можно заполнить уже созданный объект без \`fromArray()\`:

\`\`\`php
use Devcraft\\Mapper\\ReflectionMapper;
use Psr\\Log\\NullLogger;

$mapper = new ReflectionMapper(new NullLogger());
$mapper->hydrate($profile, $payload);
\`\`\`

Второй аргумент конструктора — необязательный свой \`PropertyValidator\`.

## Связанные разделы [#связанные-разделы]

* [AbstractReflection](../reference/abstracts/AbstractReflection)
* [ReflectionMapper](../reference/mapper/ReflectionMapper)
* [ArrayOf](../reference/attributes/ArrayOf)
* [Валидация](validation)
* [История изменений](../changelog)
`,o={contents:[{heading:`введение`,content:"`AbstractReflection` — базовый класс для DTO с **публичными** типизированными свойствами. Даёт `fromArray()`, `toArray()` и `toJson()`. Заполнение и выгрузку делает `ReflectionMapper`."},{heading:`введение`,content:`Зачем: принять массив с API или формы, проверить поля атрибутами валидации, отдать обратно массив или JSON — без ручного присваивания каждого поля.`},{heading:`предварительные-требования`,content:`Начало работы`},{heading:`предварительные-требования`,content:`Установка`},{heading:`пример`,content:`Канонический пример Proxy / Address:`},{heading:`пример`,content:`См. также: AbstractReflection, ReflectionMapper, ArrayOf.`},{heading:`api-abstractreflection`,content:`Метод`},{heading:`api-abstractreflection`,content:`Описание`},{heading:`api-abstractreflection`,content:"`static fromArray(array $data): static`"},{heading:`api-abstractreflection`,content:`Создать экземпляр и заполнить public-свойства`},{heading:`api-abstractreflection`,content:"`toArray(): array`"},{heading:`api-abstractreflection`,content:`Выгрузить инициализированные public-свойства (вложенные DTO рекурсивно)`},{heading:`api-abstractreflection`,content:"`toJson(): string`"},{heading:`api-abstractreflection`,content:"Красивый JSON с Unicode; при ошибке — `JsonException`"},{heading:`api-abstractreflection`,content:"`static setLogger(LoggerInterface $logger): void`"},{heading:`api-abstractreflection`,content:`Свой логгер для сбоев валидации`},{heading:`api-abstractreflection`,content:"`static resetLogger(): void`"},{heading:`api-abstractreflection`,content:`Сбросить логгер (тесты)`},{heading:`api-abstractreflection`,content:`В маппинге участвуют только **public, не static** свойства. Private/protected mapper игнорирует.`},{heading:`правила-заполнения`,content:"`ReflectionMapper::hydrate($target, $data)` обходит public-свойства:"},{heading:`правила-заполнения`,content:"Нет ключа или явный `null` → запасной путь для null (см. ниже)."},{heading:`правила-заполнения`,content:`Значение приводится к типу свойства.`},{heading:`правила-заполнения`,content:"`#[ArrayOf]` обрабатывает списки."},{heading:`правила-заполнения`,content:`Атрибуты валидации проверяют уже приведённое значение.`},{heading:`правила-заполнения`,content:"Ошибки собираются; если карта ошибок не пуста → `ValidationException`."},{heading:`скаляры`,content:`Объявленный тип`},{heading:`скаляры`,content:`Что принимают`},{heading:`скаляры`,content:"`string`"},{heading:`скаляры`,content:`только string`},{heading:`скаляры`,content:"`int`"},{heading:`скаляры`,content:"int или числовая строка (`FILTER_VALIDATE_INT`)"},{heading:`скаляры`,content:"`float`"},{heading:`скаляры`,content:"float, int или числовая строка (`FILTER_VALIDATE_FLOAT`)"},{heading:`скаляры`,content:"`bool`"},{heading:`скаляры`,content:"bool, `0`/`1` или булевы строки (`FILTER_VALIDATE_BOOLEAN`)"},{heading:`скаляры`,content:"`array`"},{heading:`скаляры`,content:`array`},{heading:`скаляры`,content:"`object`"},{heading:`скаляры`,content:`object`},{heading:`скаляры`,content:"`mixed` / без типа"},{heading:`скаляры`,content:`что угодно`},{heading:`скаляры`,content:`Объединения и пересечения типов свойств не поддерживаются — падают при приведении.`},{heading:`вложенные-dto`,content:"Если тип свойства — наследник `AbstractReflection`, а на входе массив, mapper создаёт вложенный класс и заполняет его. Путь ошибки — через точку (`address.city`, `locations.0.city`)."},{heading:`вложенные-dto`,content:`Если на входе уже экземпляр нужного типа (или интерфейса) — принимается как есть.`},{heading:`запасной-путь-для-null`,content:"Когда ключа нет или значение `null`:"},{heading:`запасной-путь-для-null`,content:`свойства с default оставляют default;`},{heading:`запасной-путь-для-null`,content:"nullable без пригодного значения становятся `null`;"},{heading:`запасной-путь-для-null`,content:`обязательные non-nullable без default получают ошибку «is required».`},{heading:`запасной-путь-для-null`,content:"При сбое приведения/валидации у **nullable** свойства mapper ставит `null` вместо добавления пути в выброшенную карту ошибок (сбой всё равно пишется в лог)."},{heading:`arrayof`,content:"`ArrayOf` — и подсказка для преобразования, и правило валидации."},{heading:`arrayof`,content:"Значение должно быть **списком** (`array_is_list`). Каждый элемент приводится к объявленному типу (встроенный или вложенный `AbstractReflection`)."},{heading:`arrayof`,content:"Ассоциативные массивы падают с сообщением `must be a list`. Ошибки элементов — `ids.1`, `locations.0.city` и т.д."},{heading:`выгрузка`,content:"`toArray()` включает только инициализированные public-свойства. Вложенные `AbstractReflection` раскрываются рекурсивно. Обычные массивы обходятся поэлементно."},{heading:`выгрузка`,content:"`toJson()` кодирует `toArray()` с:"},{heading:`выгрузка`,content:"`JSON_THROW_ON_ERROR`"},{heading:`выгрузка`,content:"`JSON_UNESCAPED_UNICODE`"},{heading:`выгрузка`,content:"`JSON_PRETTY_PRINT`"},{heading:`выгрузка`,content:"`JSON_UNESCAPED_SLASHES`"},{heading:`выгрузка`,content:"`JSON_INVALID_UTF8_SUBSTITUTE`"},{heading:`логирование`,content:"По умолчанию — `Analog\\Logger`. Для тестов или своего лога:"},{heading:`логирование`,content:"Каждый сбой пишется с уровнем error и контекстом: `class`, `property` (путь через точку), `expected`, `actual_type`."},{heading:`прямой-вызов-mapper`,content:"Можно заполнить уже созданный объект без `fromArray()`:"},{heading:`прямой-вызов-mapper`,content:"Второй аргумент конструктора — необязательный свой `PropertyValidator`."},{heading:`связанные-разделы`,content:`AbstractReflection`},{heading:`связанные-разделы`,content:`ReflectionMapper`},{heading:`связанные-разделы`,content:`ArrayOf`},{heading:`связанные-разделы`,content:`Валидация`},{heading:`связанные-разделы`,content:`История изменений`}],headings:[{id:`введение`,content:`Введение`},{id:`предварительные-требования`,content:`Предварительные требования`},{id:`пример`,content:`Пример`},{id:`api-abstractreflection`,content:`API AbstractReflection`},{id:`правила-заполнения`,content:`Правила заполнения`},{id:`скаляры`,content:`Скаляры`},{id:`вложенные-dto`,content:`Вложенные DTO`},{id:`запасной-путь-для-null`,content:`Запасной путь для null`},{id:`arrayof`,content:"`#[ArrayOf]`"},{id:`выгрузка`,content:`Выгрузка`},{id:`логирование`,content:`Логирование`},{id:`прямой-вызов-mapper`,content:`Прямой вызов mapper`},{id:`связанные-разделы`,content:`Связанные разделы`}]},s=[{depth:2,url:`#введение`,title:(0,n.jsx)(n.Fragment,{children:`Введение`})},{depth:2,url:`#предварительные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Предварительные требования`})},{depth:2,url:`#пример`,title:(0,n.jsx)(n.Fragment,{children:`Пример`})},{depth:2,url:`#api-abstractreflection`,title:(0,n.jsx)(n.Fragment,{children:`API AbstractReflection`})},{depth:2,url:`#правила-заполнения`,title:(0,n.jsx)(n.Fragment,{children:`Правила заполнения`})},{depth:3,url:`#скаляры`,title:(0,n.jsx)(n.Fragment,{children:`Скаляры`})},{depth:3,url:`#вложенные-dto`,title:(0,n.jsx)(n.Fragment,{children:`Вложенные DTO`})},{depth:3,url:`#запасной-путь-для-null`,title:(0,n.jsx)(n.Fragment,{children:`Запасной путь для null`})},{depth:2,url:`#arrayof`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`#[ArrayOf]`})})},{depth:2,url:`#выгрузка`,title:(0,n.jsx)(n.Fragment,{children:`Выгрузка`})},{depth:2,url:`#логирование`,title:(0,n.jsx)(n.Fragment,{children:`Логирование`})},{depth:2,url:`#прямой-вызов-mapper`,title:(0,n.jsx)(n.Fragment,{children:`Прямой вызов mapper`})},{depth:2,url:`#связанные-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Связанные разделы`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`введение`,children:`Введение`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`AbstractReflection`}),` — базовый класс для DTO с `,(0,n.jsx)(t.strong,{children:`публичными`}),` типизированными свойствами. Даёт `,(0,n.jsx)(t.code,{children:`fromArray()`}),`, `,(0,n.jsx)(t.code,{children:`toArray()`}),` и `,(0,n.jsx)(t.code,{children:`toJson()`}),`. Заполнение и выгрузку делает `,(0,n.jsx)(t.code,{children:`ReflectionMapper`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:`Зачем: принять массив с API или формы, проверить поля атрибутами валидации, отдать обратно массив или JSON — без ручного присваивания каждого поля.`}),`
`,(0,n.jsx)(t.h2,{id:`предварительные-требования`,children:`Предварительные требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../getting_started`,children:`Начало работы`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Abstracts\\AbstractReflection`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\Range`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractReflection`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $city;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractReflection`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $name;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $address;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $locations `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Range`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`min`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $score `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$profile `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Ada'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'address'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'city'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Berlin'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'locations'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'city'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Berlin'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    ],`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'score'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '10'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$profile`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toJson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:`Канонический пример Proxy / Address:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Abstracts\\AbstractReflection`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\Range`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\Regex`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractReflection`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $city;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractReflection`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Regex`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`^`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#DBEDFF`},children:`[0-9a-f-]{36}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`$`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`/i'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $id;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Range`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`min`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`max`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`65535`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $port;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $address;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $locations `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxy `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`fromArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '550e8400-e29b-41d4-a716-446655440000'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'port'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` '8080'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'address'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'city'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Berlin'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    'locations'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'city'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Berlin'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`        [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'city'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Paris'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    ],`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`port;              `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// int 8080 (string coerced)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`city;     `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// 'Berlin'`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();         `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// nested arrays`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $proxy`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`toJson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();     `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// pretty-printed JSON`})]})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`См. также: `,(0,n.jsx)(t.a,{href:`../reference/abstracts/AbstractReflection`,children:`AbstractReflection`}),`, `,(0,n.jsx)(t.a,{href:`../reference/mapper/ReflectionMapper`,children:`ReflectionMapper`}),`, `,(0,n.jsx)(t.a,{href:`../reference/attributes/ArrayOf`,children:`ArrayOf`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`api-abstractreflection`,children:`API AbstractReflection`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Метод`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`static fromArray(array $data): static`})}),(0,n.jsx)(t.td,{children:`Создать экземпляр и заполнить public-свойства`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`toArray(): array`})}),(0,n.jsx)(t.td,{children:`Выгрузить инициализированные public-свойства (вложенные DTO рекурсивно)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`toJson(): string`})}),(0,n.jsxs)(t.td,{children:[`Красивый JSON с Unicode; при ошибке — `,(0,n.jsx)(t.code,{children:`JsonException`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`static setLogger(LoggerInterface $logger): void`})}),(0,n.jsx)(t.td,{children:`Свой логгер для сбоев валидации`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`static resetLogger(): void`})}),(0,n.jsx)(t.td,{children:`Сбросить логгер (тесты)`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`В маппинге участвуют только `,(0,n.jsx)(t.strong,{children:`public, не static`}),` свойства. Private/protected mapper игнорирует.`]}),`
`,(0,n.jsx)(t.h2,{id:`правила-заполнения`,children:`Правила заполнения`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`ReflectionMapper::hydrate($target, $data)`}),` обходит public-свойства:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Нет ключа или явный `,(0,n.jsx)(t.code,{children:`null`}),` → запасной путь для null (см. ниже).`]}),`
`,(0,n.jsx)(t.li,{children:`Значение приводится к типу свойства.`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`#[ArrayOf]`}),` обрабатывает списки.`]}),`
`,(0,n.jsx)(t.li,{children:`Атрибуты валидации проверяют уже приведённое значение.`}),`
`,(0,n.jsxs)(t.li,{children:[`Ошибки собираются; если карта ошибок не пуста → `,(0,n.jsx)(t.code,{children:`ValidationException`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`скаляры`,children:`Скаляры`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Объявленный тип`}),(0,n.jsx)(t.th,{children:`Что принимают`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`только string`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsxs)(t.td,{children:[`int или числовая строка (`,(0,n.jsx)(t.code,{children:`FILTER_VALIDATE_INT`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`float`})}),(0,n.jsxs)(t.td,{children:[`float, int или числовая строка (`,(0,n.jsx)(t.code,{children:`FILTER_VALIDATE_FLOAT`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`bool`})}),(0,n.jsxs)(t.td,{children:[`bool, `,(0,n.jsx)(t.code,{children:`0`}),`/`,(0,n.jsx)(t.code,{children:`1`}),` или булевы строки (`,(0,n.jsx)(t.code,{children:`FILTER_VALIDATE_BOOLEAN`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`array`})}),(0,n.jsx)(t.td,{children:`array`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`object`})}),(0,n.jsx)(t.td,{children:`object`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`mixed`}),` / без типа`]}),(0,n.jsx)(t.td,{children:`что угодно`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Объединения и пересечения типов свойств не поддерживаются — падают при приведении.`}),`
`,(0,n.jsx)(t.h3,{id:`вложенные-dto`,children:`Вложенные DTO`}),`
`,(0,n.jsxs)(t.p,{children:[`Если тип свойства — наследник `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),`, а на входе массив, mapper создаёт вложенный класс и заполняет его. Путь ошибки — через точку (`,(0,n.jsx)(t.code,{children:`address.city`}),`, `,(0,n.jsx)(t.code,{children:`locations.0.city`}),`).`]}),`
`,(0,n.jsx)(t.p,{children:`Если на входе уже экземпляр нужного типа (или интерфейса) — принимается как есть.`}),`
`,(0,n.jsx)(t.h3,{id:`запасной-путь-для-null`,children:`Запасной путь для null`}),`
`,(0,n.jsxs)(t.p,{children:[`Когда ключа нет или значение `,(0,n.jsx)(t.code,{children:`null`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`свойства с default оставляют default;`}),`
`,(0,n.jsxs)(t.li,{children:[`nullable без пригодного значения становятся `,(0,n.jsx)(t.code,{children:`null`}),`;`]}),`
`,(0,n.jsx)(t.li,{children:`обязательные non-nullable без default получают ошибку «is required».`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`При сбое приведения/валидации у `,(0,n.jsx)(t.strong,{children:`nullable`}),` свойства mapper ставит `,(0,n.jsx)(t.code,{children:`null`}),` вместо добавления пути в выброшенную карту ошибок (сбой всё равно пишется в лог).`]}),`
`,(0,n.jsx)(t.h2,{id:`arrayof`,children:(0,n.jsx)(t.code,{children:`#[ArrayOf]`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`ArrayOf`}),` — и подсказка для преобразования, и правило валидации.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Значение должно быть `,(0,n.jsx)(t.strong,{children:`списком`}),` (`,(0,n.jsx)(t.code,{children:`array_is_list`}),`). Каждый элемент приводится к объявленному типу (встроенный или вложенный `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),`).`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'int'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $ids `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ArrayOf`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Address`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $locations `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативные массивы падают с сообщением `,(0,n.jsx)(t.code,{children:`must be a list`}),`. Ошибки элементов — `,(0,n.jsx)(t.code,{children:`ids.1`}),`, `,(0,n.jsx)(t.code,{children:`locations.0.city`}),` и т.д.`]}),`
`,(0,n.jsx)(t.h2,{id:`выгрузка`,children:`Выгрузка`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`toArray()`}),` включает только инициализированные public-свойства. Вложенные `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),` раскрываются рекурсивно. Обычные массивы обходятся поэлементно.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`toJson()`}),` кодирует `,(0,n.jsx)(t.code,{children:`toArray()`}),` с:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`JSON_THROW_ON_ERROR`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`JSON_UNESCAPED_UNICODE`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`JSON_PRETTY_PRINT`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`JSON_UNESCAPED_SLASHES`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`JSON_INVALID_UTF8_SUBSTITUTE`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`логирование`,children:`Логирование`}),`
`,(0,n.jsxs)(t.p,{children:[`По умолчанию — `,(0,n.jsx)(t.code,{children:`Analog\\Logger`}),`. Для тестов или своего лога:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`AbstractReflection`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setLogger`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($psrLogger);`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Каждый сбой пишется с уровнем error и контекстом: `,(0,n.jsx)(t.code,{children:`class`}),`, `,(0,n.jsx)(t.code,{children:`property`}),` (путь через точку), `,(0,n.jsx)(t.code,{children:`expected`}),`, `,(0,n.jsx)(t.code,{children:`actual_type`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`прямой-вызов-mapper`,children:`Прямой вызов mapper`}),`
`,(0,n.jsxs)(t.p,{children:[`Можно заполнить уже созданный объект без `,(0,n.jsx)(t.code,{children:`fromArray()`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Mapper\\ReflectionMapper`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Psr\\Log\\NullLogger`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$mapper `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ReflectionMapper`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` NullLogger`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`());`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$mapper`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`hydrate`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($profile, $payload);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Второй аргумент конструктора — необязательный свой `,(0,n.jsx)(t.code,{children:`PropertyValidator`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`связанные-разделы`,children:`Связанные разделы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/abstracts/AbstractReflection`,children:`AbstractReflection`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/mapper/ReflectionMapper`,children:`ReflectionMapper`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/attributes/ArrayOf`,children:`ArrayOf`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`validation`,children:`Валидация`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../changelog`,children:`История изменений`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};