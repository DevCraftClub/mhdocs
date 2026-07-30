import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Person`},i=new Date(1785404498e3),a=`

**Описание:** Класс для представления персоны из API Kinopoisk.dev
Представляет информацию об актере, режиссере, сценаристе или другом участнике
кинопроизводства. Содержит биографические данные, профессиональную информацию,
фильмографию и другие связанные сведения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\PersonInMovie\`: Для информации о персоне в контексте фильма
* \`\\KinopoiskDev\\Enums\\PersonProfession\`: Для типов профессий персон
* \`\\KinopoiskDev\\Enums\\PersonSex\`: Для типов пола персон
* \`\\KinopoiskDev\\Models\\MeiliPersonEntity\`: Родительский класс

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания объекта персоны
Создает новый экземпляр класса Person с полным набором данных о персоне.
Все свойства класса являются для обеспечения неизменности данных.
Конструктор также вызывает родительский конструктор для инициализации
базовых свойств наследуемых от MeiliPersonEntity.

**Параметры:**

* \`$id\` (int): Уникальный идентификатор персоны в системе Kinopoisk
* \`$name\` (string|null): Имя персоны на русском языке
* \`$enName\` (string|null): Имя персоны на английском языке
* \`$photo\` (string|null): URL фотографии персоны
* \`$sex\` (PersonSex|null): Пол персоны (enum значение)
* \`$growth\` (int|null): Рост персоны в сантиметрах
* \`$birthday\` (string|null): Дата рождения в формате ISO 8601
* \`$death\` (string|null): Дата смерти в формате ISO 8601
* \`$age\` (int|null): Возраст персоны в годах
* \`$birthPlace\` (\\KinopoiskDev\\Models\\BirthPlace\\[]): Массив мест рождения персоны (пустой массив по умолчанию)
* \`$deathPlace\` (\\KinopoiskDev\\Models\\DeathPlace\\[]): Массив мест смерти персоны (пустой массив по умолчанию)
* \`$profession\` (PersonProfession\\[]|null): Массив профессий персоны (может быть null если профессии неизвестны)
* \`$spouses\` (\\KinopoiskDev\\Models\\Spouses\\[]): Массив данных о супругах персоны
* \`$countAwards\` (int): Количество наград персоны (по умолчанию 0)
* \`$facts\` (\\KinopoiskDev\\Models\\FactInPerson\\[]): Массив интересных фактов о персоне
* \`$movies\` (\\KinopoiskDev\\Models\\MovieInPerson\\[]): Массив фильмов с участием персоны
* \`$updatedAt\` (string|null): Дата последнего обновления записи в формате ISO 8601
* \`$createdAt\` (string|null): Дата создания записи в формате ISO 8601

**См. также:**

* \`Person::fromArray\`: () Для создания объекта из массива данных API
* \`Person::toArray\`: () Для преобразования объекта в массив
* \`MeiliPersonEntity::__construct\`: () Конструктор родительского класса

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Person из массива данных API
Фабричный метод для создания экземпляра класса Person из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.

**Параметры:**

* \`$data\` (array): Массив данных о персоне от API, содержащий все возможные поля персоны

**Возвращает:** \`\\KinopoiskDev\\Models\\Person\` Новый экземпляр класса Person с данными из массива

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`:

**См. также:**

* \`Person::toArray\`: () Для обратного преобразования в массив
* \`DataManager::parseEnumValue\`: () Для преобразования enum значений

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\ValidationException\`: При ошибке валидации

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Person в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.

**Возвращает:** \`array\` Массив с полными данными о персоне, содержащий все поля объекта

**См. также:**

* \`Person::fromArray\`: () Для создания объекта из массива
* \`DataManager::getObjectsArray\`: () Для преобразования массива объектов в массив массивов

## \`getName()\` [#getname]

**Описание:** Возвращает наиболее подходящее имя персоны.
Метод последовательно проверяет наличие русского имени (\`name\`) и английского имени (\`enName\`).
Возвращается первое найденное не-null значение. Если оба имени отсутствуют,
возвращается пустая строка.

**С версии:** 1.0.0

**Возвращает:** \`string\` Имя персоны или пустая строка, если имена не доступны.

**См. также:**

* \`Person::\`: $enName
* \`Person::\`: $name
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления персоны из API Kinopoisk.dev
Представляет информацию об актере, режиссере, сценаристе или другом участнике
кинопроизводства. Содержит биографические данные, профессиональную информацию,
фильмографию и другие связанные сведения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonInMovie`: Для информации о персоне в контексте фильма"},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\PersonProfession`: Для типов профессий персон"},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\PersonSex`: Для типов пола персон"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\MeiliPersonEntity`: Родительский класс"},{heading:`__construct`,content:`**Описание:** Конструктор для создания объекта персоны
Создает новый экземпляр класса Person с полным набором данных о персоне.
Все свойства класса являются для обеспечения неизменности данных.
Конструктор также вызывает родительский конструктор для инициализации
базовых свойств наследуемых от MeiliPersonEntity.`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор персоны в системе Kinopoisk"},{heading:`__construct`,content:"`$name` (string|null): Имя персоны на русском языке"},{heading:`__construct`,content:"`$enName` (string|null): Имя персоны на английском языке"},{heading:`__construct`,content:"`$photo` (string|null): URL фотографии персоны"},{heading:`__construct`,content:"`$sex` (PersonSex|null): Пол персоны (enum значение)"},{heading:`__construct`,content:"`$growth` (int|null): Рост персоны в сантиметрах"},{heading:`__construct`,content:"`$birthday` (string|null): Дата рождения в формате ISO 8601"},{heading:`__construct`,content:"`$death` (string|null): Дата смерти в формате ISO 8601"},{heading:`__construct`,content:"`$age` (int|null): Возраст персоны в годах"},{heading:`__construct`,content:"`$birthPlace` (\\KinopoiskDev\\Models\\BirthPlace\\[]): Массив мест рождения персоны (пустой массив по умолчанию)"},{heading:`__construct`,content:"`$deathPlace` (\\KinopoiskDev\\Models\\DeathPlace\\[]): Массив мест смерти персоны (пустой массив по умолчанию)"},{heading:`__construct`,content:"`$profession` (PersonProfession\\[]|null): Массив профессий персоны (может быть null если профессии неизвестны)"},{heading:`__construct`,content:"`$spouses` (\\KinopoiskDev\\Models\\Spouses\\[]): Массив данных о супругах персоны"},{heading:`__construct`,content:"`$countAwards` (int): Количество наград персоны (по умолчанию 0)"},{heading:`__construct`,content:"`$facts` (\\KinopoiskDev\\Models\\FactInPerson\\[]): Массив интересных фактов о персоне"},{heading:`__construct`,content:"`$movies` (\\KinopoiskDev\\Models\\MovieInPerson\\[]): Массив фильмов с участием персоны"},{heading:`__construct`,content:"`$updatedAt` (string|null): Дата последнего обновления записи в формате ISO 8601"},{heading:`__construct`,content:"`$createdAt` (string|null): Дата создания записи в формате ISO 8601"},{heading:`__construct`,content:`**См. также:**`},{heading:`__construct`,content:"`Person::fromArray`: () Для создания объекта из массива данных API"},{heading:`__construct`,content:"`Person::toArray`: () Для преобразования объекта в массив"},{heading:`__construct`,content:"`MeiliPersonEntity::__construct`: () Конструктор родительского класса"},{heading:`fromarray`,content:`**Описание:** Создает объект Person из массива данных API
Фабричный метод для создания экземпляра класса Person из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`},{heading:`fromarray`,content:`**Параметры:**`},{heading:`fromarray`,content:"`$data` (array): Массив данных о персоне от API, содержащий все возможные поля персоны"},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Person` Новый экземпляр класса Person с данными из массива"},{heading:`fromarray`,content:`**Исключения:**`},{heading:`fromarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`:"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`Person::toArray`: () Для обратного преобразования в массив"},{heading:`fromarray`,content:"`DataManager::parseEnumValue`: () Для преобразования enum значений"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`validate`,content:`**Исключения:**`},{heading:`validate`,content:"`\\KinopoiskDev\\Exceptions\\ValidationException`: При ошибке валидации"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Person в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`},{heading:`toarray`,content:"**Возвращает:** `array` Массив с полными данными о персоне, содержащий все поля объекта"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`Person::fromArray`: () Для создания объекта из массива"},{heading:`toarray`,content:"`DataManager::getObjectsArray`: () Для преобразования массива объектов в массив массивов"},{heading:`getname`,content:"**Описание:** Возвращает наиболее подходящее имя персоны.\nМетод последовательно проверяет наличие русского имени (`name`) и английского имени (`enName`).\nВозвращается первое найденное не-null значение. Если оба имени отсутствуют,\nвозвращается пустая строка."},{heading:`getname`,content:`**С версии:** 1.0.0`},{heading:`getname`,content:"**Возвращает:** `string` Имя персоны или пустая строка, если имена не доступны."},{heading:`getname`,content:`**См. также:**`},{heading:`getname`,content:"`Person::`: $enName"},{heading:`getname`,content:"`Person::`: $name"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`toarray`,content:"`toArray()`"},{id:`getname`,content:"`getName()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getName()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления персоны из API Kinopoisk.dev
Представляет информацию об актере, режиссере, сценаристе или другом участнике
кинопроизводства. Содержит биографические данные, профессиональную информацию,
фильмографию и другие связанные сведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonInMovie`}),`: Для информации о персоне в контексте фильма`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonProfession`}),`: Для типов профессий персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonSex`}),`: Для типов пола персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\MeiliPersonEntity`}),`: Родительский класс`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания объекта персоны
Создает новый экземпляр класса Person с полным набором данных о персоне.
Все свойства класса являются для обеспечения неизменности данных.
Конструктор также вызывает родительский конструктор для инициализации
базовых свойств наследуемых от MeiliPersonEntity.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор персоны в системе Kinopoisk`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Имя персоны на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Имя персоны на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$photo`}),` (string|null): URL фотографии персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sex`}),` (PersonSex|null): Пол персоны (enum значение)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$growth`}),` (int|null): Рост персоны в сантиметрах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$birthday`}),` (string|null): Дата рождения в формате ISO 8601`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$death`}),` (string|null): Дата смерти в формате ISO 8601`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$age`}),` (int|null): Возраст персоны в годах`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$birthPlace`}),` (\\KinopoiskDev\\Models\\BirthPlace[]): Массив мест рождения персоны (пустой массив по умолчанию)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$deathPlace`}),` (\\KinopoiskDev\\Models\\DeathPlace[]): Массив мест смерти персоны (пустой массив по умолчанию)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$profession`}),` (PersonProfession[]|null): Массив профессий персоны (может быть null если профессии неизвестны)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$spouses`}),` (\\KinopoiskDev\\Models\\Spouses[]): Массив данных о супругах персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$countAwards`}),` (int): Количество наград персоны (по умолчанию 0)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$facts`}),` (\\KinopoiskDev\\Models\\FactInPerson[]): Массив интересных фактов о персоне`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movies`}),` (\\KinopoiskDev\\Models\\MovieInPerson[]): Массив фильмов с участием персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$updatedAt`}),` (string|null): Дата последнего обновления записи в формате ISO 8601`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$createdAt`}),` (string|null): Дата создания записи в формате ISO 8601`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::fromArray`}),`: () Для создания объекта из массива данных API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::toArray`}),`: () Для преобразования объекта в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MeiliPersonEntity::__construct`}),`: () Конструктор родительского класса`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Person из массива данных API
Фабричный метод для создания экземпляра класса Person из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения и преобразует вложенные объекты в соответствующие классы.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` (array): Массив данных о персоне от API, содержащий все возможные поля персоны`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),` Новый экземпляр класса Person с данными из массива`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::toArray`}),`: () Для обратного преобразования в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DataManager::parseEnumValue`}),`: () Для преобразования enum значений`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\ValidationException`}),`: При ошибке валидации`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив данных
Конвертирует текущий экземпляр класса Person в массив,
совместимый с форматом API Kinopoisk.dev. Используется для сериализации
данных при отправке запросов к API или для экспорта данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Массив с полными данными о персоне, содержащий все поля объекта`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::fromArray`}),`: () Для создания объекта из массива`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DataManager::getObjectsArray`}),`: () Для преобразования массива объектов в массив массивов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getname`,children:(0,n.jsx)(t.code,{children:`getName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наиболее подходящее имя персоны.
Метод последовательно проверяет наличие русского имени (`,(0,n.jsx)(t.code,{children:`name`}),`) и английского имени (`,(0,n.jsx)(t.code,{children:`enName`}),`).
Возвращается первое найденное не-null значение. Если оба имени отсутствуют,
возвращается пустая строка.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Имя персоны или пустая строка, если имена не доступны.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::`}),`: $enName`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::`}),`: $name`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};