import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`DataManager`},i=new Date(1787142659e3),a=`

## \`getObjectsArray()\` [#getobjectsarray]

**Описание:** Преобразует массив объектов в массив массивов
Статический вспомогательный метод для преобразования коллекции объектов
в массив массивов путем вызова метода toArray() для каждого объекта.
Используется для сериализации связанных объектов (например, жанров, стран,
персон) при преобразовании основного объекта в массив данных.
Может быть массивом объектов с методом toArray(), null, false или пустым массивом.
Если передан массив, каждый элемент должен содержать метод toArray()
Возвращает пустой массив, если входные данные являются falsy-значением
(null, false, 0, пустой массив, пустая строка)

**Параметры:**

* \`$objects\` (mixed): Коллекция объектов для преобразования или любое другое значение.

**Возвращает:** \`array<mixed>\` Массив массивов, полученный путем вызова toArray() для каждого объекта.

**Пример:**

\`\`\`php
// Преобразование массива объектов жанров
$genres = [new Genre('драма'), new Genre('триллер')];
$result = DataManager::getObjectsArray($genres);
// Результат: [['name' => 'драма'], ['name' => 'триллер']]
// Преобразование массива объектов стран
$countries = [new Country('США'), new Country('Великобритания')];
$result = DataManager::getObjectsArray($countries);
// Результат: [['name' => 'США'], ['name' => 'Великобритания']]
// Обработка пустого значения
$result = DataManager::getObjectsArray(null);
// Результат: []
// Обработка false
$result = DataManager::getObjectsArray(false);
// Результат: []
\`\`\`

**См. также:**

* \`Movie::toArray\`: () Основной метод преобразования объекта фильма в массив
* \`Genre::toArray\`: () Метод преобразования жанра в массив
* \`Country::toArray\`: () Метод преобразования страны в массив
* \`Person::toArray\`: () Метод преобразования персоны в массив

## \`parseObjectAuto()\` [#parseobjectauto]

**Описание:** Автоматически парсит объект из массива данных в зависимости от типа
Универсальный метод для автоматической обработки объектов, который определяет,
является ли значение по указанному ключу массивом объектов или одиночным объектом,
и соответственно выбирает подходящий метод парсинга. Используется для автоматизации
процесса обработки данных API, где одно и то же поле может содержать как массив
объектов, так и одиночный объект.

**Параметры:**

* \`$key\` (string): Ключ в массиве данных, по которому находится значение для парсинга
* \`$cls\` (string): Полное имя класса для создания объектов (должен иметь метод fromArray)
* \`$default\` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных (по умолчанию null)

**Возвращает:** \`mixed\` Массив объектов указанного класса, одиночный объект или значение по умолчанию

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если указанный класс не существует или не имеет метода fromArray

**См. также:**

* \`DataManager::parseObjectArray\`: () Для обработки массива объектов
* \`DataManager::parseObjectData\`: () Для обработки одиночного объекта

## \`parseObjectArray()\` [#parseobjectarray]

**Описание:** Разбирает данные объекта из массива API
Статический метод для извлечения и преобразования данных объектов из массива API
по указанному ключу. Если ключ существует в массиве, применяет функцию преобразования
к каждому элементу: создает объект через fromArray() для массивов или возвращает
элемент как есть для других типов данных. Используется для обработки коллекций
связанных объектов (жанры, страны, персоны и т.д.) при десериализации данных API.
Метод выполняет автоматическую проверку существования указанного класса и наличия
в нем метода fromArray() перед началом обработки данных. Это обеспечивает безопасность
и предотвращает ошибки выполнения при работе с некорректными классами.
Класс должен содержать статический метод fromArray()
Каждый элемент массива либо преобразован в объект через fromArray(),
либо возвращен в исходном виде для неассоциативных данных
или не содержит метод fromArray()

**Параметры:**

* \`$key\` (string): Ключ для поиска в массиве данных (например, 'genres', 'countries', 'persons')
* \`$cls\` (string): Имя класса для создания объектов (например, 'Genre', 'Country', 'Person').
* \`$default\` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа (по умолчанию пустой массив)

**Возвращает:** \`array<mixed>\` Массив объектов указанного типа или значение по умолчанию, если ключ не найден.

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если указанный класс не существует

**Пример:**

\`\`\`php
// Обработка массива жанров из API
$apiData = ['genres' => [['name' => 'драма'], ['name' => 'триллер']]];
$genres = DataManager::parseObjectArray($apiData, 'genres', 'Genre');
// Результат: [Genre объект 'драма', Genre объект 'триллер']
// Обработка отсутствующего ключа с кастомным значением по умолчанию
$result = DataManager::parseObjectArray($apiData, 'missing_key', 'Country', []);
// Результат: []
// Обработка данных с null значением по умолчанию
$result = DataManager::parseObjectArray($apiData, 'actors', 'Person', null);
// Результат: null (если ключ 'actors' отсутствует)
// Обработка смешанных данных (массивы и примитивы)
$mixedData = ['items' => [['id' => 1, 'name' => 'test'], 'simple_string']];
$result = DataManager::parseObjectArray($mixedData, 'items', 'SomeClass');
// Результат: [SomeClass объект, 'simple_string']
\`\`\`

**См. также:**

* \`DataManager::getObjectsArray\`: () Для преобразования объектов в массивы
* \`Genre::fromArray\`: () Для создания объектов жанров
* \`Country::fromArray\`: () Для создания объектов стран
* \`Person::fromArray\`: () Для создания объектов персон
* \`LinkedMovie::fromArray\`: () Для создания объектов связанных фильмов

## \`parseObjectData()\` [#parseobjectdata]

**Описание:** Парсит данные объекта из массива через фабричный метод
Универсальный статический метод для создания объектов из массивов данных
с использованием фабричного метода fromArray. Выполняет валидацию существования
класса и требуемого метода, возвращая экземпляр объекта указанного класса
или значение по умолчанию при отсутствии данных.

**Параметры:**

* \`$key\` (string): Ключ в массиве данных для извлечения значения
* \`$cls\` (string): Полное имя класса для создания объекта (с пространством имен)
* \`$default\` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных

**Возвращает:** \`mixed\` Экземпляр указанного класса, созданный через fromArray, или значение по умолчанию

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если указанный класс не существует
* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если в классе отсутствует метод fromArray

**Пример:**

\`\`\`php
// Создание объекта рейтинга из массива данных
$rating = Helper::parseObjectData(
$apiData,
'rating',
Rating::class,
new Rating()
);
// Создание объекта изображения с null по умолчанию
$poster = Helper::parseObjectData(
$movieData,
'poster',
ShortImage::class
);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Models\\Rating::fromArray\`: ()     Пример использования с моделью рейтинга
* \`\\KinopoiskDev\\Models\\Image::fromArray\`: ()      Пример использования с моделью изображения
* \`\\KinopoiskDev\\Models\\ExternalId::fromArray\`: () Пример использования с внешними ID

## \`parseEnumValue()\` [#parseenumvalue]

**Описание:** Разбирает значение enum из массива данных по указанному ключу
Безопасно извлекает значение из массива данных и пытается преобразовать его
в соответствующий enum с помощью метода tryFrom. Если ключ отсутствует в массиве
или значение не может быть преобразовано в enum, возвращается значение по умолчанию.
Выполняет проверку существования указанного класса enum перед попыткой преобразования.

**Параметры:**

* \`$key\` (string): Ключ в массиве, значение которого необходимо получить
* \`$enumClass\` (string): Полное имя класса enum для преобразования значения
* \`$default\` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа или неудачном преобразовании

**Возвращает:** \`mixed\` Экземпляр enum или значение по умолчанию при неудачном преобразовании

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если указанный класс enum не существует

**Пример:**

\`\`\`php
// Разбор типа фильма из данных API
$movieType = parseEnumValue(
data: ['type' => 'movie'],
key: 'type',
enumClass: MovieType::class
);
// Разбор с значением по умолчанию
$status = parseEnumValue(
data: $apiData,
key: 'status',
enumClass: Status::class,
default: Status::UNKNOWN
);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Enums\\MovieType\`: Пример использования с enum типов фильмов
* \`\\KinopoiskDev\\Enums\\FilterField\`: Пример использования с enum полей фильтрации
`,o={contents:[{heading:`getobjectsarray`,content:`**Описание:** Преобразует массив объектов в массив массивов
Статический вспомогательный метод для преобразования коллекции объектов
в массив массивов путем вызова метода toArray() для каждого объекта.
Используется для сериализации связанных объектов (например, жанров, стран,
персон) при преобразовании основного объекта в массив данных.
Может быть массивом объектов с методом toArray(), null, false или пустым массивом.
Если передан массив, каждый элемент должен содержать метод toArray()
Возвращает пустой массив, если входные данные являются falsy-значением
(null, false, 0, пустой массив, пустая строка)`},{heading:`getobjectsarray`,content:`**Параметры:**`},{heading:`getobjectsarray`,content:"`$objects` (mixed): Коллекция объектов для преобразования или любое другое значение."},{heading:`getobjectsarray`,content:"**Возвращает:** `array<mixed>` Массив массивов, полученный путем вызова toArray() для каждого объекта."},{heading:`getobjectsarray`,content:`**Пример:**`},{heading:`getobjectsarray`,content:`**См. также:**`},{heading:`getobjectsarray`,content:"`Movie::toArray`: () Основной метод преобразования объекта фильма в массив"},{heading:`getobjectsarray`,content:"`Genre::toArray`: () Метод преобразования жанра в массив"},{heading:`getobjectsarray`,content:"`Country::toArray`: () Метод преобразования страны в массив"},{heading:`getobjectsarray`,content:"`Person::toArray`: () Метод преобразования персоны в массив"},{heading:`parseobjectauto`,content:`**Описание:** Автоматически парсит объект из массива данных в зависимости от типа
Универсальный метод для автоматической обработки объектов, который определяет,
является ли значение по указанному ключу массивом объектов или одиночным объектом,
и соответственно выбирает подходящий метод парсинга. Используется для автоматизации
процесса обработки данных API, где одно и то же поле может содержать как массив
объектов, так и одиночный объект.`},{heading:`parseobjectauto`,content:`**Параметры:**`},{heading:`parseobjectauto`,content:"`$key` (string): Ключ в массиве данных, по которому находится значение для парсинга"},{heading:`parseobjectauto`,content:"`$cls` (string): Полное имя класса для создания объектов (должен иметь метод fromArray)"},{heading:`parseobjectauto`,content:"`$default` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных (по умолчанию null)"},{heading:`parseobjectauto`,content:"**Возвращает:** `mixed` Массив объектов указанного класса, одиночный объект или значение по умолчанию"},{heading:`parseobjectauto`,content:`**Исключения:**`},{heading:`parseobjectauto`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если указанный класс не существует или не имеет метода fromArray"},{heading:`parseobjectauto`,content:`**См. также:**`},{heading:`parseobjectauto`,content:"`DataManager::parseObjectArray`: () Для обработки массива объектов"},{heading:`parseobjectauto`,content:"`DataManager::parseObjectData`: () Для обработки одиночного объекта"},{heading:`parseobjectarray`,content:`**Описание:** Разбирает данные объекта из массива API
Статический метод для извлечения и преобразования данных объектов из массива API
по указанному ключу. Если ключ существует в массиве, применяет функцию преобразования
к каждому элементу: создает объект через fromArray() для массивов или возвращает
элемент как есть для других типов данных. Используется для обработки коллекций
связанных объектов (жанры, страны, персоны и т.д.) при десериализации данных API.
Метод выполняет автоматическую проверку существования указанного класса и наличия
в нем метода fromArray() перед началом обработки данных. Это обеспечивает безопасность
и предотвращает ошибки выполнения при работе с некорректными классами.
Класс должен содержать статический метод fromArray()
Каждый элемент массива либо преобразован в объект через fromArray(),
либо возвращен в исходном виде для неассоциативных данных
или не содержит метод fromArray()`},{heading:`parseobjectarray`,content:`**Параметры:**`},{heading:`parseobjectarray`,content:"`$key` (string): Ключ для поиска в массиве данных (например, 'genres', 'countries', 'persons')"},{heading:`parseobjectarray`,content:"`$cls` (string): Имя класса для создания объектов (например, 'Genre', 'Country', 'Person')."},{heading:`parseobjectarray`,content:"`$default` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа (по умолчанию пустой массив)"},{heading:`parseobjectarray`,content:"**Возвращает:** `array<mixed>` Массив объектов указанного типа или значение по умолчанию, если ключ не найден."},{heading:`parseobjectarray`,content:`**Исключения:**`},{heading:`parseobjectarray`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если указанный класс не существует"},{heading:`parseobjectarray`,content:`**Пример:**`},{heading:`parseobjectarray`,content:`**См. также:**`},{heading:`parseobjectarray`,content:"`DataManager::getObjectsArray`: () Для преобразования объектов в массивы"},{heading:`parseobjectarray`,content:"`Genre::fromArray`: () Для создания объектов жанров"},{heading:`parseobjectarray`,content:"`Country::fromArray`: () Для создания объектов стран"},{heading:`parseobjectarray`,content:"`Person::fromArray`: () Для создания объектов персон"},{heading:`parseobjectarray`,content:"`LinkedMovie::fromArray`: () Для создания объектов связанных фильмов"},{heading:`parseobjectdata`,content:`**Описание:** Парсит данные объекта из массива через фабричный метод
Универсальный статический метод для создания объектов из массивов данных
с использованием фабричного метода fromArray. Выполняет валидацию существования
класса и требуемого метода, возвращая экземпляр объекта указанного класса
или значение по умолчанию при отсутствии данных.`},{heading:`parseobjectdata`,content:`**Параметры:**`},{heading:`parseobjectdata`,content:"`$key` (string): Ключ в массиве данных для извлечения значения"},{heading:`parseobjectdata`,content:"`$cls` (string): Полное имя класса для создания объекта (с пространством имен)"},{heading:`parseobjectdata`,content:"`$default` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных"},{heading:`parseobjectdata`,content:"**Возвращает:** `mixed` Экземпляр указанного класса, созданный через fromArray, или значение по умолчанию"},{heading:`parseobjectdata`,content:`**Исключения:**`},{heading:`parseobjectdata`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если указанный класс не существует"},{heading:`parseobjectdata`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если в классе отсутствует метод fromArray"},{heading:`parseobjectdata`,content:`**Пример:**`},{heading:`parseobjectdata`,content:`**См. также:**`},{heading:`parseobjectdata`,content:"`\\KinopoiskDev\\Models\\Rating::fromArray`: ()     Пример использования с моделью рейтинга"},{heading:`parseobjectdata`,content:"`\\KinopoiskDev\\Models\\Image::fromArray`: ()      Пример использования с моделью изображения"},{heading:`parseobjectdata`,content:"`\\KinopoiskDev\\Models\\ExternalId::fromArray`: () Пример использования с внешними ID"},{heading:`parseenumvalue`,content:`**Описание:** Разбирает значение enum из массива данных по указанному ключу
Безопасно извлекает значение из массива данных и пытается преобразовать его
в соответствующий enum с помощью метода tryFrom. Если ключ отсутствует в массиве
или значение не может быть преобразовано в enum, возвращается значение по умолчанию.
Выполняет проверку существования указанного класса enum перед попыткой преобразования.`},{heading:`parseenumvalue`,content:`**Параметры:**`},{heading:`parseenumvalue`,content:"`$key` (string): Ключ в массиве, значение которого необходимо получить"},{heading:`parseenumvalue`,content:"`$enumClass` (string): Полное имя класса enum для преобразования значения"},{heading:`parseenumvalue`,content:"`$default` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа или неудачном преобразовании"},{heading:`parseenumvalue`,content:"**Возвращает:** `mixed` Экземпляр enum или значение по умолчанию при неудачном преобразовании"},{heading:`parseenumvalue`,content:`**Исключения:**`},{heading:`parseenumvalue`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если указанный класс enum не существует"},{heading:`parseenumvalue`,content:`**Пример:**`},{heading:`parseenumvalue`,content:`**См. также:**`},{heading:`parseenumvalue`,content:"`\\KinopoiskDev\\Enums\\MovieType`: Пример использования с enum типов фильмов"},{heading:`parseenumvalue`,content:"`\\KinopoiskDev\\Enums\\FilterField`: Пример использования с enum полей фильтрации"}],headings:[{id:`getobjectsarray`,content:"`getObjectsArray()`"},{id:`parseobjectauto`,content:"`parseObjectAuto()`"},{id:`parseobjectarray`,content:"`parseObjectArray()`"},{id:`parseobjectdata`,content:"`parseObjectData()`"},{id:`parseenumvalue`,content:"`parseEnumValue()`"}]},s=[{depth:2,url:`#getobjectsarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getObjectsArray()`})})},{depth:2,url:`#parseobjectauto`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parseObjectAuto()`})})},{depth:2,url:`#parseobjectarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parseObjectArray()`})})},{depth:2,url:`#parseobjectdata`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parseObjectData()`})})},{depth:2,url:`#parseenumvalue`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`parseEnumValue()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`getobjectsarray`,children:(0,n.jsx)(t.code,{children:`getObjectsArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует массив объектов в массив массивов
Статический вспомогательный метод для преобразования коллекции объектов
в массив массивов путем вызова метода toArray() для каждого объекта.
Используется для сериализации связанных объектов (например, жанров, стран,
персон) при преобразовании основного объекта в массив данных.
Может быть массивом объектов с методом toArray(), null, false или пустым массивом.
Если передан массив, каждый элемент должен содержать метод toArray()
Возвращает пустой массив, если входные данные являются falsy-значением
(null, false, 0, пустой массив, пустая строка)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$objects`}),` (mixed): Коллекция объектов для преобразования или любое другое значение.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<mixed>`}),` Массив массивов, полученный путем вызова toArray() для каждого объекта.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Преобразование массива объектов жанров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$genres `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Genre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'драма'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`), `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Genre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'триллер'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)];`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getObjectsArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($genres);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: [['name' => 'драма'], ['name' => 'триллер']]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Преобразование массива объектов стран`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$countries `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Country`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'США'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`), `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Country`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Великобритания'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)];`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getObjectsArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($countries);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: [['name' => 'США'], ['name' => 'Великобритания']]`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка пустого значения`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getObjectsArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: []`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка false`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getObjectsArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: []`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Movie::toArray`}),`: () Основной метод преобразования объекта фильма в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Genre::toArray`}),`: () Метод преобразования жанра в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Country::toArray`}),`: () Метод преобразования страны в массив`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::toArray`}),`: () Метод преобразования персоны в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`parseobjectauto`,children:(0,n.jsx)(t.code,{children:`parseObjectAuto()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Автоматически парсит объект из массива данных в зависимости от типа
Универсальный метод для автоматической обработки объектов, который определяет,
является ли значение по указанному ключу массивом объектов или одиночным объектом,
и соответственно выбирает подходящий метод парсинга. Используется для автоматизации
процесса обработки данных API, где одно и то же поле может содержать как массив
объектов, так и одиночный объект.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ в массиве данных, по которому находится значение для парсинга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cls`}),` (string): Полное имя класса для создания объектов (должен иметь метод fromArray)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных (по умолчанию null)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` Массив объектов указанного класса, одиночный объект или значение по умолчанию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если указанный класс не существует или не имеет метода fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DataManager::parseObjectArray`}),`: () Для обработки массива объектов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DataManager::parseObjectData`}),`: () Для обработки одиночного объекта`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`parseobjectarray`,children:(0,n.jsx)(t.code,{children:`parseObjectArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Разбирает данные объекта из массива API
Статический метод для извлечения и преобразования данных объектов из массива API
по указанному ключу. Если ключ существует в массиве, применяет функцию преобразования
к каждому элементу: создает объект через fromArray() для массивов или возвращает
элемент как есть для других типов данных. Используется для обработки коллекций
связанных объектов (жанры, страны, персоны и т.д.) при десериализации данных API.
Метод выполняет автоматическую проверку существования указанного класса и наличия
в нем метода fromArray() перед началом обработки данных. Это обеспечивает безопасность
и предотвращает ошибки выполнения при работе с некорректными классами.
Класс должен содержать статический метод fromArray()
Каждый элемент массива либо преобразован в объект через fromArray(),
либо возвращен в исходном виде для неассоциативных данных
или не содержит метод fromArray()`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ для поиска в массиве данных (например, 'genres', 'countries', 'persons')`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cls`}),` (string): Имя класса для создания объектов (например, 'Genre', 'Country', 'Person').`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа (по умолчанию пустой массив)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<mixed>`}),` Массив объектов указанного типа или значение по умолчанию, если ключ не найден.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если указанный класс не существует`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка массива жанров из API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$apiData `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'genres'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'драма'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`], [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'триллер'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]]];`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$genres `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'genres'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Genre'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: [Genre объект 'драма', Genre объект 'триллер']`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка отсутствующего ключа с кастомным значением по умолчанию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'missing_key'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Country'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, []);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: []`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка данных с null значением по умолчанию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($apiData, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'actors'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Person'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: null (если ключ 'actors' отсутствует)`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Обработка смешанных данных (массивы и примитивы)`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$mixedData `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'items'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'id'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'name'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'test'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`], `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'simple_string'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]];`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$result `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DataManager`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($mixedData, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'items'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'SomeClass'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Результат: [SomeClass объект, 'simple_string']`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DataManager::getObjectsArray`}),`: () Для преобразования объектов в массивы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Genre::fromArray`}),`: () Для создания объектов жанров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Country::fromArray`}),`: () Для создания объектов стран`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::fromArray`}),`: () Для создания объектов персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`LinkedMovie::fromArray`}),`: () Для создания объектов связанных фильмов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`parseobjectdata`,children:(0,n.jsx)(t.code,{children:`parseObjectData()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Парсит данные объекта из массива через фабричный метод
Универсальный статический метод для создания объектов из массивов данных
с использованием фабричного метода fromArray. Выполняет валидацию существования
класса и требуемого метода, возвращая экземпляр объекта указанного класса
или значение по умолчанию при отсутствии данных.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ в массиве данных для извлечения значения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$cls`}),` (string): Полное имя класса для создания объекта (с пространством имен)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` (mixed): Значение по умолчанию, возвращаемое при отсутствии данных`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` Экземпляр указанного класса, созданный через fromArray, или значение по умолчанию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если указанный класс не существует`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если в классе отсутствует метод fromArray`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание объекта рейтинга из массива данных`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$rating `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Helper`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$apiData,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'rating'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Rating`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Создание объекта изображения с null по умолчанию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$poster `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Helper`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`parseObjectData`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movieData,`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'poster'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ShortImage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Rating::fromArray`}),`: ()     Пример использования с моделью рейтинга`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image::fromArray`}),`: ()      Пример использования с моделью изображения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ExternalId::fromArray`}),`: () Пример использования с внешними ID`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`parseenumvalue`,children:(0,n.jsx)(t.code,{children:`parseEnumValue()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Разбирает значение enum из массива данных по указанному ключу
Безопасно извлекает значение из массива данных и пытается преобразовать его
в соответствующий enum с помощью метода tryFrom. Если ключ отсутствует в массиве
или значение не может быть преобразовано в enum, возвращается значение по умолчанию.
Выполняет проверку существования указанного класса enum перед попыткой преобразования.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ в массиве, значение которого необходимо получить`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enumClass`}),` (string): Полное имя класса enum для преобразования значения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$default`}),` (mixed): Значение по умолчанию, возвращаемое при отсутствии ключа или неудачном преобразовании`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` Экземпляр enum или значение по умолчанию при неудачном преобразовании`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если указанный класс enum не существует`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Разбор типа фильма из данных API`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movieType `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` parseEnumValue`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`data`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'type'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'movie'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`key`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'type'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`enumClass`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`MovieType`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Разбор с значением по умолчанию`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$status `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` parseEnumValue`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`data`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: $apiData,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`key`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'status'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`enumClass`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Status`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`default`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Status`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`UNKNOWN`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\MovieType`}),`: Пример использования с enum типов фильмов`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\FilterField`}),`: Пример использования с enum полей фильтрации`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};