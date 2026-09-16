import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое DevCraft Dev Tools: описание, возможности, для кого, выбор базового класса и быстрый старт.`,version:`1.1.0`},i=new Date(1789554716e3),a=`

## Описание пакета [#описание-пакета]

**DevCraft Dev Tools** (\`devcraftclub/dev-tools\`) — небольшая библиотека на **PHP 8.3** для типовых задач в коде продуктов DevCraft и любых PHP-проектов: собрать объект «по цепочке», принять массив с API и проверить поля, положить значение в файловый кэш по стандарту PSR-6.

Вместо того чтобы в каждом модуле писать свои \`setX\`/\`getX\`, ручной разбор массивов и самодельный кэш на файлах, вы берёте готовые базовые классы и атрибуты. Пакет ставится через Composer; отдельного плагина DLE или экрана в админке у него нет — это зависимость для разработчика.

Версия **1.1.0** добавляет файловый пул кэша (\`FileCachePool\`) поверх уже знакомых цепочек \`with*\` и DTO на \`AbstractReflection\`. Линейка \`1.x\` совместима с PHP 8.3+.

## Возможности [#возможности]

* Цепочки \`with*\` для скрытых свойств: атрибуты \`#[With]\` и \`#[WithItem]\` на наследнике \`AbstractWith\`.
* Чтение и запись через \`get*\` / \`set*\` / \`is*\` — атрибуты \`#[Getter]\` / \`#[Setter]\` из пакета lombok-php (подключены через \`AbstractWith\`).
* DTO с публичными типизированными свойствами: \`fromArray()\`, \`toArray()\`, \`toJson()\` на \`AbstractReflection\`.
* Проверка полей атрибутами: \`Filter\`, \`Range\`, \`Regex\`, \`ArrayOf\`.
* Файловый кэш по PSR-6: \`FileCachePool\`, ключи с «папками» (\`Translation/dict\`), очистка префикса \`clearNamespace()\` (расширение пакета, не часть PSR-6).
* Общая точка в DevCraft Admin: тонкая обёртка \`CacheControl\` поверх того же пула.

## Для кого [#для-кого]

### Разработчики модулей и сервисов [#разработчики-модулей-и-сервисов]

Вы пишете сущности запросов, ответы API, настройки и кэш переводов. Подключаете пакет Composer’ом и наследуете нужный базовый класс — или создаёте \`FileCachePool\` как обычный объект. Каркас админки DLE и DevCraft Admin здесь ни при чём: Dev Tools живёт в \`vendor\` и вызывается из вашего PHP.

Документация для кода: [Руководства](./guides), [справочник](./reference). В экосистеме DLE пакет уже тянет [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) — отдельно ставить Dev Tools на сайт обычно не нужно.

### Владельцы сайта / админы панели [#владельцы-сайта--админы-панели]

Этот раздел документации вам почти не нужен: на сайте вы ставите **DevCraft Admin** и сателлиты. Dev Tools приедет как зависимость Composer внутри \`devcraft/\`. Менять код библиотеки не требуется.

## Почему не «свой» набор хелперов [#почему-не-свой-набор-хелперов]

Свой \`withFoo\` на каждом классе, ручной \`foreach\` по массиву API и кэш через \`file_put_contents\` быстро расходятся между модулями: разные имена методов, разная проверка типов, разный формат файлов. Dev Tools даёт **один** контракт: атрибуты + два базовых класса + один PSR-6 пул. В DevCraft Admin кэш уже сидит на \`FileCachePool\` — ваш сателлит может пользоваться тем же механизмом, а не третьей самоделкой.

Два базовых класса **нельзя** склеить наследованием: у \`AbstractWith\` свойства скрытые (private/protected), у \`AbstractReflection\` — публичные. Нужны оба стиля — два класса рядом или композиция.

## Архитектура [#архитектура]

Три независимых блока; в проекте берут один или несколько.

\`\`\`text
Цепочки with*                          DTO из массива                       Кэш PSR-6
─────────────                          ──────────────                       ────────
#[With] / #[WithItem]                  public-свойства с типами             FileCachePool
#[Getter] / #[Setter] (lombok-php)              │                                  │
        │                                       ▼                                  ▼
        ▼                                AbstractReflection              {каталог}/{ключ}.cache
 AbstractWith ──__call──► WithHandler            │                        JSON-запись {e,f,v}
        │            (сначала with*)             ▼
        └──parent──► Lombok\\Helper        ReflectionMapper
                     (get* / set* / is*)         │
                                                 ▼
                                          PropertyValidator
                                                 │
                            Filter / Range / Regex / ArrayOf
\`\`\`

## Выбор базового класса [#выбор-базового-класса]

| Задача                                                      | Что брать                                       | Свойства                                      |
| ----------------------------------------------------------- | ----------------------------------------------- | --------------------------------------------- |
| Объект-запрос, билдер, цепочка \`with*\` плюс \`get*\` / \`set*\` | наследовать \`AbstractWith\`                      | private или protected, не static, не readonly |
| Ответ/запрос API, заполнение из массива, JSON наружу        | наследовать \`AbstractReflection\`                | public, с типами                              |
| Кэш на диске по PSR-6                                       | создать \`FileCachePool\` (наследование не нужно) | —                                             |

## Требования [#требования]

| Что                          | Минимум                                        |
| ---------------------------- | ---------------------------------------------- |
| PHP                          | **8.3+**                                       |
| Composer                     | да                                             |
| \`psr/cache\`                  | \`^3.0\` (ставится с пакетом)                    |
| \`marcin-orlowski/lombok-php\` | \`^1.2\` (для \`get*\` / \`set*\` на \`AbstractWith\`) |

Подробнее: [Установка](./install).

## Быстрый старт [#быстрый-старт]

### 1. Кэш на файлах [#1-кэш-на-файлах]

\`\`\`php
use Devcraft\\Cache\\FileCachePool;

$pool = new FileCachePool('/path/to/cache', defaultTtlSeconds: 3600);

$item = $pool->getItem('Translation/dict');
$item->set(['hello' => 'world']);
$pool->save($item);

$hit = $pool->getItem('Translation/dict');
if ($hit->isHit()) {
    $value = $hit->get();
}

$pool->clearNamespace('Translation'); // расширение Dev Tools (не из PSR-6)
\`\`\`

### 2. Цепочка \`with*\` [#2-цепочка-with]

\`\`\`php
use Lombok\\Getter;
use Devcraft\\Abstracts\\AbstractWith;
use Devcraft\\Attributes\\With;
use Devcraft\\Attributes\\WithItem;

#[Getter]
final class Query extends AbstractWith
{
    #[With]
    private ?int $page = null;

    #[With, WithItem('string')]
    private array $tags = [];

    #[WithItem('string', ['string', 'null'])]
    private array $labels = [];
}

$query = (new Query())
    ->withPage(1)
    ->withTagsItem('proxy')
    ->withLabelsItem('status', 'ready');

$query->getPage();  // 1
$query->getTags();  // ['proxy']
$query->getLabels(); // ['status' => 'ready']
\`\`\`

### 3. DTO из массива [#3-dto-из-массива]

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

## Руководства (подробнее) [#руководства-подробнее]

| Руководство                                      | О чём                                              |
| ------------------------------------------------ | -------------------------------------------------- |
| [Файловый кэш PSR-6](guides/file_cache)          | Пул, ключи, TTL, очистка префикса, формат на диске |
| [Атрибуты With](guides/with_attributes)          | \`#[With]\`, \`#[WithItem]\`, правила типов и ошибки   |
| [Getter и Setter](guides/accessors)              | Как lombok-php стыкуется с \`AbstractWith\`          |
| [Маппер по reflection](guides/reflection_mapper) | \`fromArray\` / \`toArray\`, вложенные DTO, \`ArrayOf\`  |
| [Валидация](guides/validation)                   | \`Filter\`, \`Range\`, \`Regex\`, исключения             |

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="./install">
    Packagist и локальный path repository
  </Card>

  <Card title="Руководства" href="./guides">
    Кэш, With, accessors, DTO, валидация
  </Card>

  <Card title="Справочник API" href="./reference">
    Классы, атрибуты, исключения
  </Card>

  <Card title="История изменений" href="./changelog">
    Что нового в 1.1.0
  </Card>

  <Card title="English" href="./en/getting_started">
    Full English documentation
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) пакет в проект.
2. Выбрать базовый класс по таблице выше и пройти нужное [руководство](./guides).
3. Смотреть сигнатуры в [справочнике](./reference).
`,o={contents:[{heading:`описание-пакета`,content:"**DevCraft Dev Tools** (`devcraftclub/dev-tools`) — небольшая библиотека на **PHP 8.3** для типовых задач в коде продуктов DevCraft и любых PHP-проектов: собрать объект «по цепочке», принять массив с API и проверить поля, положить значение в файловый кэш по стандарту PSR-6."},{heading:`описание-пакета`,content:"Вместо того чтобы в каждом модуле писать свои `setX`/`getX`, ручной разбор массивов и самодельный кэш на файлах, вы берёте готовые базовые классы и атрибуты. Пакет ставится через Composer; отдельного плагина DLE или экрана в админке у него нет — это зависимость для разработчика."},{heading:`описание-пакета`,content:"Версия **1.1.0** добавляет файловый пул кэша (`FileCachePool`) поверх уже знакомых цепочек `with*` и DTO на `AbstractReflection`. Линейка `1.x` совместима с PHP 8.3+."},{heading:`возможности`,content:"Цепочки `with*` для скрытых свойств: атрибуты `#[With]` и `#[WithItem]` на наследнике `AbstractWith`."},{heading:`возможности`,content:"Чтение и запись через `get*` / `set*` / `is*` — атрибуты `#[Getter]` / `#[Setter]` из пакета lombok-php (подключены через `AbstractWith`)."},{heading:`возможности`,content:"DTO с публичными типизированными свойствами: `fromArray()`, `toArray()`, `toJson()` на `AbstractReflection`."},{heading:`возможности`,content:"Проверка полей атрибутами: `Filter`, `Range`, `Regex`, `ArrayOf`."},{heading:`возможности`,content:"Файловый кэш по PSR-6: `FileCachePool`, ключи с «папками» (`Translation/dict`), очистка префикса `clearNamespace()` (расширение пакета, не часть PSR-6)."},{heading:`возможности`,content:"Общая точка в DevCraft Admin: тонкая обёртка `CacheControl` поверх того же пула."},{heading:`разработчики-модулей-и-сервисов`,content:"Вы пишете сущности запросов, ответы API, настройки и кэш переводов. Подключаете пакет Composer’ом и наследуете нужный базовый класс — или создаёте `FileCachePool` как обычный объект. Каркас админки DLE и DevCraft Admin здесь ни при чём: Dev Tools живёт в `vendor` и вызывается из вашего PHP."},{heading:`разработчики-модулей-и-сервисов`,content:`Документация для кода: Руководства, справочник. В экосистеме DLE пакет уже тянет DevCraft Admin — отдельно ставить Dev Tools на сайт обычно не нужно.`},{heading:`владельцы-сайта--админы-панели`,content:"Этот раздел документации вам почти не нужен: на сайте вы ставите **DevCraft Admin** и сателлиты. Dev Tools приедет как зависимость Composer внутри `devcraft/`. Менять код библиотеки не требуется."},{heading:`почему-не-свой-набор-хелперов`,content:"Свой `withFoo` на каждом классе, ручной `foreach` по массиву API и кэш через `file_put_contents` быстро расходятся между модулями: разные имена методов, разная проверка типов, разный формат файлов. Dev Tools даёт **один** контракт: атрибуты + два базовых класса + один PSR-6 пул. В DevCraft Admin кэш уже сидит на `FileCachePool` — ваш сателлит может пользоваться тем же механизмом, а не третьей самоделкой."},{heading:`почему-не-свой-набор-хелперов`,content:"Два базовых класса **нельзя** склеить наследованием: у `AbstractWith` свойства скрытые (private/protected), у `AbstractReflection` — публичные. Нужны оба стиля — два класса рядом или композиция."},{heading:`архитектура`,content:`Три независимых блока; в проекте берут один или несколько.`},{heading:`выбор-базового-класса`,content:`Задача`},{heading:`выбор-базового-класса`,content:`Что брать`},{heading:`выбор-базового-класса`,content:`Свойства`},{heading:`выбор-базового-класса`,content:"Объект-запрос, билдер, цепочка `with*` плюс `get*` / `set*`"},{heading:`выбор-базового-класса`,content:"наследовать `AbstractWith`"},{heading:`выбор-базового-класса`,content:`private или protected, не static, не readonly`},{heading:`выбор-базового-класса`,content:`Ответ/запрос API, заполнение из массива, JSON наружу`},{heading:`выбор-базового-класса`,content:"наследовать `AbstractReflection`"},{heading:`выбор-базового-класса`,content:`public, с типами`},{heading:`выбор-базового-класса`,content:`Кэш на диске по PSR-6`},{heading:`выбор-базового-класса`,content:"создать `FileCachePool` (наследование не нужно)"},{heading:`выбор-базового-класса`,content:`—`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`Composer`},{heading:`требования`,content:`да`},{heading:`требования`,content:"`psr/cache`"},{heading:`требования`,content:"`^3.0` (ставится с пакетом)"},{heading:`требования`,content:"`marcin-orlowski/lombok-php`"},{heading:`требования`,content:"`^1.2` (для `get*` / `set*` на `AbstractWith`)"},{heading:`требования`,content:`Подробнее: Установка.`},{heading:`руководства-подробнее`,content:`Руководство`},{heading:`руководства-подробнее`,content:`О чём`},{heading:`руководства-подробнее`,content:`Файловый кэш PSR-6`},{heading:`руководства-подробнее`,content:`Пул, ключи, TTL, очистка префикса, формат на диске`},{heading:`руководства-подробнее`,content:`Атрибуты With`},{heading:`руководства-подробнее`,content:"`#[With]`, `#[WithItem]`, правила типов и ошибки"},{heading:`руководства-подробнее`,content:`Getter и Setter`},{heading:`руководства-подробнее`,content:"Как lombok-php стыкуется с `AbstractWith`"},{heading:`руководства-подробнее`,content:`Маппер по reflection`},{heading:`руководства-подробнее`,content:"`fromArray` / `toArray`, вложенные DTO, `ArrayOf`"},{heading:`руководства-подробнее`,content:`Валидация`},{heading:`руководства-подробнее`,content:"`Filter`, `Range`, `Regex`, исключения"},{heading:`разделы-документации`,content:`Packagist и локальный path repository`},{heading:`разделы-документации`,content:`Кэш, With, accessors, DTO, валидация`},{heading:`разделы-документации`,content:`Классы, атрибуты, исключения`},{heading:`разделы-документации`,content:`Что нового в 1.1.0`},{heading:`разделы-документации`,content:`Full English documentation`},{heading:`дальше`,content:`Установить пакет в проект.`},{heading:`дальше`,content:`Выбрать базовый класс по таблице выше и пройти нужное руководство.`},{heading:`дальше`,content:`Смотреть сигнатуры в справочнике.`}],headings:[{id:`описание-пакета`,content:`Описание пакета`},{id:`возможности`,content:`Возможности`},{id:`для-кого`,content:`Для кого`},{id:`разработчики-модулей-и-сервисов`,content:`Разработчики модулей и сервисов`},{id:`владельцы-сайта--админы-панели`,content:`Владельцы сайта / админы панели`},{id:`почему-не-свой-набор-хелперов`,content:`Почему не «свой» набор хелперов`},{id:`архитектура`,content:`Архитектура`},{id:`выбор-базового-класса`,content:`Выбор базового класса`},{id:`требования`,content:`Требования`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`1-кэш-на-файлах`,content:`1\\. Кэш на файлах`},{id:`2-цепочка-with`,content:"2\\. Цепочка `with*`"},{id:`3-dto-из-массива`,content:`3\\. DTO из массива`},{id:`руководства-подробнее`,content:`Руководства (подробнее)`},{id:`разделы-документации`,content:`Разделы документации`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#описание-пакета`,title:(0,n.jsx)(n.Fragment,{children:`Описание пакета`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:3,url:`#разработчики-модулей-и-сервисов`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики модулей и сервисов`})},{depth:3,url:`#владельцы-сайта--админы-панели`,title:(0,n.jsx)(n.Fragment,{children:`Владельцы сайта / админы панели`})},{depth:2,url:`#почему-не-свой-набор-хелперов`,title:(0,n.jsx)(n.Fragment,{children:`Почему не «свой» набор хелперов`})},{depth:2,url:`#архитектура`,title:(0,n.jsx)(n.Fragment,{children:`Архитектура`})},{depth:2,url:`#выбор-базового-класса`,title:(0,n.jsx)(n.Fragment,{children:`Выбор базового класса`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#1-кэш-на-файлах`,title:(0,n.jsx)(n.Fragment,{children:`1. Кэш на файлах`})},{depth:3,url:`#2-цепочка-with`,title:(0,n.jsxs)(n.Fragment,{children:[`2. Цепочка `,(0,n.jsx)(`code`,{children:`with*`})]})},{depth:3,url:`#3-dto-из-массива`,title:(0,n.jsx)(n.Fragment,{children:`3. DTO из массива`})},{depth:2,url:`#руководства-подробнее`,title:(0,n.jsx)(n.Fragment,{children:`Руководства (подробнее)`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`описание-пакета`,children:`Описание пакета`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DevCraft Dev Tools`}),` (`,(0,n.jsx)(t.code,{children:`devcraftclub/dev-tools`}),`) — небольшая библиотека на `,(0,n.jsx)(t.strong,{children:`PHP 8.3`}),` для типовых задач в коде продуктов DevCraft и любых PHP-проектов: собрать объект «по цепочке», принять массив с API и проверить поля, положить значение в файловый кэш по стандарту PSR-6.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Вместо того чтобы в каждом модуле писать свои `,(0,n.jsx)(t.code,{children:`setX`}),`/`,(0,n.jsx)(t.code,{children:`getX`}),`, ручной разбор массивов и самодельный кэш на файлах, вы берёте готовые базовые классы и атрибуты. Пакет ставится через Composer; отдельного плагина DLE или экрана в админке у него нет — это зависимость для разработчика.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Версия `,(0,n.jsx)(t.strong,{children:`1.1.0`}),` добавляет файловый пул кэша (`,(0,n.jsx)(t.code,{children:`FileCachePool`}),`) поверх уже знакомых цепочек `,(0,n.jsx)(t.code,{children:`with*`}),` и DTO на `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),`. Линейка `,(0,n.jsx)(t.code,{children:`1.x`}),` совместима с PHP 8.3+.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Цепочки `,(0,n.jsx)(t.code,{children:`with*`}),` для скрытых свойств: атрибуты `,(0,n.jsx)(t.code,{children:`#[With]`}),` и `,(0,n.jsx)(t.code,{children:`#[WithItem]`}),` на наследнике `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Чтение и запись через `,(0,n.jsx)(t.code,{children:`get*`}),` / `,(0,n.jsx)(t.code,{children:`set*`}),` / `,(0,n.jsx)(t.code,{children:`is*`}),` — атрибуты `,(0,n.jsx)(t.code,{children:`#[Getter]`}),` / `,(0,n.jsx)(t.code,{children:`#[Setter]`}),` из пакета lombok-php (подключены через `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`DTO с публичными типизированными свойствами: `,(0,n.jsx)(t.code,{children:`fromArray()`}),`, `,(0,n.jsx)(t.code,{children:`toArray()`}),`, `,(0,n.jsx)(t.code,{children:`toJson()`}),` на `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Проверка полей атрибутами: `,(0,n.jsx)(t.code,{children:`Filter`}),`, `,(0,n.jsx)(t.code,{children:`Range`}),`, `,(0,n.jsx)(t.code,{children:`Regex`}),`, `,(0,n.jsx)(t.code,{children:`ArrayOf`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Файловый кэш по PSR-6: `,(0,n.jsx)(t.code,{children:`FileCachePool`}),`, ключи с «папками» (`,(0,n.jsx)(t.code,{children:`Translation/dict`}),`), очистка префикса `,(0,n.jsx)(t.code,{children:`clearNamespace()`}),` (расширение пакета, не часть PSR-6).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Общая точка в DevCraft Admin: тонкая обёртка `,(0,n.jsx)(t.code,{children:`CacheControl`}),` поверх того же пула.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-модулей-и-сервисов`,children:`Разработчики модулей и сервисов`}),`
`,(0,n.jsxs)(t.p,{children:[`Вы пишете сущности запросов, ответы API, настройки и кэш переводов. Подключаете пакет Composer’ом и наследуете нужный базовый класс — или создаёте `,(0,n.jsx)(t.code,{children:`FileCachePool`}),` как обычный объект. Каркас админки DLE и DevCraft Admin здесь ни при чём: Dev Tools живёт в `,(0,n.jsx)(t.code,{children:`vendor`}),` и вызывается из вашего PHP.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Документация для кода: `,(0,n.jsx)(t.a,{href:`./guides`,children:`Руководства`}),`, `,(0,n.jsx)(t.a,{href:`./reference`,children:`справочник`}),`. В экосистеме DLE пакет уже тянет `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`}),` — отдельно ставить Dev Tools на сайт обычно не нужно.`]}),`
`,(0,n.jsx)(t.h3,{id:`владельцы-сайта--админы-панели`,children:`Владельцы сайта / админы панели`}),`
`,(0,n.jsxs)(t.p,{children:[`Этот раздел документации вам почти не нужен: на сайте вы ставите `,(0,n.jsx)(t.strong,{children:`DevCraft Admin`}),` и сателлиты. Dev Tools приедет как зависимость Composer внутри `,(0,n.jsx)(t.code,{children:`devcraft/`}),`. Менять код библиотеки не требуется.`]}),`
`,(0,n.jsx)(t.h2,{id:`почему-не-свой-набор-хелперов`,children:`Почему не «свой» набор хелперов`}),`
`,(0,n.jsxs)(t.p,{children:[`Свой `,(0,n.jsx)(t.code,{children:`withFoo`}),` на каждом классе, ручной `,(0,n.jsx)(t.code,{children:`foreach`}),` по массиву API и кэш через `,(0,n.jsx)(t.code,{children:`file_put_contents`}),` быстро расходятся между модулями: разные имена методов, разная проверка типов, разный формат файлов. Dev Tools даёт `,(0,n.jsx)(t.strong,{children:`один`}),` контракт: атрибуты + два базовых класса + один PSR-6 пул. В DevCraft Admin кэш уже сидит на `,(0,n.jsx)(t.code,{children:`FileCachePool`}),` — ваш сателлит может пользоваться тем же механизмом, а не третьей самоделкой.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Два базовых класса `,(0,n.jsx)(t.strong,{children:`нельзя`}),` склеить наследованием: у `,(0,n.jsx)(t.code,{children:`AbstractWith`}),` свойства скрытые (private/protected), у `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),` — публичные. Нужны оба стиля — два класса рядом или композиция.`]}),`
`,(0,n.jsx)(t.h2,{id:`архитектура`,children:`Архитектура`}),`
`,(0,n.jsx)(t.p,{children:`Три независимых блока; в проекте берут один или несколько.`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Цепочки with*                          DTO из массива                       Кэш PSR-6`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`─────────────                          ──────────────                       ────────`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`#[With] / #[WithItem]                  public-свойства с типами             FileCachePool`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`#[Getter] / #[Setter] (lombok-php)              │                                  │`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        │                                       ▼                                  ▼`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ▼                                AbstractReflection              {каталог}/{ключ}.cache`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` AbstractWith ──__call──► WithHandler            │                        JSON-запись {e,f,v}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        │            (сначала with*)             ▼`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └──parent──► Lombok\\Helper        ReflectionMapper`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                     (get* / set* / is*)         │`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                                                 ▼`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                                          PropertyValidator`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                                                 │`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                            Filter / Range / Regex / ArrayOf`})})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`выбор-базового-класса`,children:`Выбор базового класса`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Задача`}),(0,n.jsx)(t.th,{children:`Что брать`}),(0,n.jsx)(t.th,{children:`Свойства`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`Объект-запрос, билдер, цепочка `,(0,n.jsx)(t.code,{children:`with*`}),` плюс `,(0,n.jsx)(t.code,{children:`get*`}),` / `,(0,n.jsx)(t.code,{children:`set*`})]}),(0,n.jsxs)(t.td,{children:[`наследовать `,(0,n.jsx)(t.code,{children:`AbstractWith`})]}),(0,n.jsx)(t.td,{children:`private или protected, не static, не readonly`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Ответ/запрос API, заполнение из массива, JSON наружу`}),(0,n.jsxs)(t.td,{children:[`наследовать `,(0,n.jsx)(t.code,{children:`AbstractReflection`})]}),(0,n.jsx)(t.td,{children:`public, с типами`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Кэш на диске по PSR-6`}),(0,n.jsxs)(t.td,{children:[`создать `,(0,n.jsx)(t.code,{children:`FileCachePool`}),` (наследование не нужно)`]}),(0,n.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsx)(t.td,{children:`да`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`psr/cache`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^3.0`}),` (ставится с пакетом)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`marcin-orlowski/lombok-php`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`^1.2`}),` (для `,(0,n.jsx)(t.code,{children:`get*`}),` / `,(0,n.jsx)(t.code,{children:`set*`}),` на `,(0,n.jsx)(t.code,{children:`AbstractWith`}),`)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Подробнее: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsx)(t.h3,{id:`1-кэш-на-файлах`,children:`1. Кэш на файлах`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Cache\\FileCachePool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` FileCachePool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/path/to/cache'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`defaultTtlSeconds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`3600`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation/dict'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$item`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`set`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`([`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'hello'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'world'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`save`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($item);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$hit `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation/dict'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($hit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isHit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    $value `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $hit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$pool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearNamespace`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Translation'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// расширение Dev Tools (не из PSR-6)`})]})]})})})}),`
`,(0,n.jsxs)(t.h3,{id:`2-цепочка-with`,children:[`2. Цепочка `,(0,n.jsx)(t.code,{children:`with*`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Lombok\\Getter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Abstracts\\AbstractWith`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\With`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Devcraft\\Attributes\\WithItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Getter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`final`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` extends`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AbstractWith`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`With`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    private`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` ?int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $page `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`With`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`WithItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'string'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    private`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $tags `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    #[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`WithItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'string'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'string'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'null'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`])]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    private`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $labels `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [];`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$query `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`())`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withPage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withTagsItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'proxy'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    ->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withLabelsItem`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'status'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'ready'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();  `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// 1`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getTags`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();  `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// ['proxy']`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getLabels`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(); `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// ['status' => 'ready']`})]})]})})})}),`
`,(0,n.jsx)(t.h3,{id:`3-dto-из-массива`,children:`3. DTO из массива`}),`
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
`,(0,n.jsx)(t.h2,{id:`руководства-подробнее`,children:`Руководства (подробнее)`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Руководство`}),(0,n.jsx)(t.th,{children:`О чём`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/file_cache`,children:`Файловый кэш PSR-6`})}),(0,n.jsx)(t.td,{children:`Пул, ключи, TTL, очистка префикса, формат на диске`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/with_attributes`,children:`Атрибуты With`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`#[With]`}),`, `,(0,n.jsx)(t.code,{children:`#[WithItem]`}),`, правила типов и ошибки`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/accessors`,children:`Getter и Setter`})}),(0,n.jsxs)(t.td,{children:[`Как lombok-php стыкуется с `,(0,n.jsx)(t.code,{children:`AbstractWith`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/reflection_mapper`,children:`Маппер по reflection`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`fromArray`}),` / `,(0,n.jsx)(t.code,{children:`toArray`}),`, вложенные DTO, `,(0,n.jsx)(t.code,{children:`ArrayOf`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/validation`,children:`Валидация`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`Filter`}),`, `,(0,n.jsx)(t.code,{children:`Range`}),`, `,(0,n.jsx)(t.code,{children:`Regex`}),`, исключения`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Packagist и локальный path repository`})}),(0,n.jsx)(r,{title:`Руководства`,href:`./guides`,children:(0,n.jsx)(t.p,{children:`Кэш, With, accessors, DTO, валидация`})}),(0,n.jsx)(r,{title:`Справочник API`,href:`./reference`,children:(0,n.jsx)(t.p,{children:`Классы, атрибуты, исключения`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что нового в 1.1.0`})}),(0,n.jsx)(r,{title:`English`,href:`./en/getting_started`,children:(0,n.jsx)(t.p,{children:`Full English documentation`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` пакет в проект.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Выбрать базовый класс по таблице выше и пройти нужное `,(0,n.jsx)(t.a,{href:`./guides`,children:`руководство`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Смотреть сигнатуры в `,(0,n.jsx)(t.a,{href:`./reference`,children:`справочнике`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};