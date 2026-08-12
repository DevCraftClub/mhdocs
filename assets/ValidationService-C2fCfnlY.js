import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ValidationService`},i=new Date(1786541452e3),a=`

**Описание:** Сервис для валидации данных
Выполняет валидацию объектов на основе атрибутов PHP 8.3.
Поддерживает различные типы валидации: обязательные поля,
ограничения длины, диапазоны значений, регулярные выражения.
Использует рефлексию для автоматического обнаружения правил валидации.

**С версии:** 1.0.0

**Версия:** 1.0.0

**Пример:**

\`\`\`php
class Movie {
#[Validation(required: true, minLength: 1, maxLength: 255)]
public string $title;
#[Validation(min: 1900, max: 2030)]
public int $year;
}
$validator = new ValidationService();
$movie = new Movie();
$movie->title = '';
$movie->year = 1800;
try {
$validator->validate($movie);
} catch (ValidationException $e) {
foreach ($e->getErrors() as $field => $error) {
echo "{$field}: {$error}\\n";
}
}
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Attributes\\Validation\`: Атрибут валидации
* \`\\KinopoiskDev\\Exceptions\\ValidationException\`: Исключения валидации

## \`validate()\` [#validate]

**Описание:** Валидирует объект на основе атрибутов свойств
Основной метод валидации, который анализирует все свойства объекта
и проверяет их на соответствие правилам, заданным в атрибутах Validation.
Выбрасывает ValidationException при обнаружении ошибок валидации.

**Параметры:**

* \`$object\` (object): Объект для валидации (должен иметь свойства с атрибутами Validation)

**Возвращает:** \`bool True\` если валидация прошла успешно

**Исключения:**

* \`ValidationException\`: При ошибках валидации с детальным описанием проблем

**Пример:**

\`\`\`php
$movie = new Movie();
$movie->title = 'The Matrix';
$movie->year = 1999;
try {
$validator->validate($movie);
echo "Объект валиден";
} catch (ValidationException $e) {
echo "Ошибки валидации: " . $e->getMessage();
}
\`\`\`

## \`validateProperty()\` [#validateproperty]

**Описание:** Валидирует конкретное свойство объекта
Проверяет одно свойство объекта на соответствие правилам валидации,
заданным в атрибуте Validation. Поддерживает различные типы проверок
в зависимости от типа значения свойства.

**Параметры:**

* \`$object\` (object): Объект для валидации
* \`$property\` (ReflectionProperty): Свойство для валидации

**Возвращает:** \`array<string, string>\` Массив ошибок валидации в формате \\['property' => 'error']

## \`validateString()\` [#validatestring]

**Описание:** Валидирует строковое значение
Выполняет валидацию строковых значений согласно правилам:
минимальная/максимальная длина и соответствие регулярному выражению.

**Параметры:**

* \`$value\` (string): Строковое значение для валидации
* \`$validation\` (Validation): Правила валидации из атрибута
* \`$propertyName\` (string): Название свойства для сообщений об ошибках

**Возвращает:** \`array<string, string>\` Массив ошибок валидации

## \`validateNumeric()\` [#validatenumeric]

**Описание:** Валидирует числовое значение
Выполняет валидацию числовых значений согласно правилам:
минимальное/максимальное значение.

**Параметры:**

* \`$value\` (float|int): Числовое значение для валидации
* \`$validation\` (Validation): Правила валидации из атрибута
* \`$propertyName\` (string): Название свойства для сообщений об ошибках

**Возвращает:** \`array<string, string>\` Массив ошибок валидации

## \`validateArray()\` [#validatearray]

**Описание:** Валидирует массив данных по правилам
Альтернативный метод валидации для работы с массивами данных
вместо объектов. Полезен для валидации входных данных API
или данных форм.

**Возвращает:** \`bool True\` если валидация прошла успешно

**Исключения:**

* \`ValidationException\`: При ошибках валидации

**Пример:**

\`\`\`php
$data = [
'title' => 'The Matrix',
'year' => 1999,
'rating' => 8.7
];
$rules = [
'title' => ['required' => true, 'min_length' => 1, 'max_length' => 255],
'year' => ['min' => 1900, 'max' => 2030],
'rating' => ['min' => 0, 'max' => 10]
];
try {
$validator->validateArray($data, $rules);
echo "Данные валидны";
} catch (ValidationException $e) {
echo "Ошибки: " . $e->getMessage();
}
\`\`\`

## \`validateFieldValue()\` [#validatefieldvalue]

**Описание:** Валидирует значение поля по правилам
Вспомогательный метод для валидации отдельного поля
согласно переданным правилам. Поддерживает различные
типы правил валидации.

**Параметры:**

* \`$value\` (mixed): Значение поля для валидации
* \`$fieldName\` (string): Название поля для сообщений об ошибках

**Возвращает:** \`array<string, string>\` Массив ошибок валидации

## \`validateValue()\` [#validatevalue]

**Описание:** Валидирует значение на основе правил валидации
Универсальный метод для валидации любого значения
согласно объекту Validation. Возвращает сообщение об ошибке
или null при успешной валидации.

**Параметры:**

* \`$value\` (mixed): Значение для валидации
* \`$validation\` (Validation): Правила валидации

**Возвращает:** \`string|null\` Сообщение об ошибке или null если валидация прошла успешно

## \`validateApiToken()\` [#validateapitoken]

**Описание:** Валидирует API токен

**Параметры:**

* \`$token\` (string|null): API токен для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateHttpMethod()\` [#validatehttpmethod]

**Описание:** Валидирует HTTP метод

**Параметры:**

* \`$method\` (string): HTTP метод

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateEndpoint()\` [#validateendpoint]

**Описание:** Валидирует endpoint

**Параметры:**

* \`$endpoint\` (string): Endpoint для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateYear()\` [#validateyear]

**Описание:** Валидирует год

**Параметры:**

* \`$year\` (int): Год для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateRating()\` [#validaterating]

**Описание:** Валидирует рейтинг

**Параметры:**

* \`$rating\` (float): Рейтинг для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateLimit()\` [#validatelimit]

**Описание:** Валидирует лимит

**Параметры:**

* \`$limit\` (int): Лимит для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validatePage()\` [#validatepage]

**Описание:** Валидирует номер страницы

**Параметры:**

* \`$page\` (int): Номер страницы

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateMovieId()\` [#validatemovieid]

**Описание:** Валидирует ID фильма

**Параметры:**

* \`$movieId\` (int): ID фильма

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validatePersonId()\` [#validatepersonid]

**Описание:** Валидирует ID персоны

**Параметры:**

* \`$personId\` (int): ID персоны

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateGenre()\` [#validategenre]

**Описание:** Валидирует жанр

**Параметры:**

* \`$genre\` (string): Жанр для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateCountry()\` [#validatecountry]

**Описание:** Валидирует страну

**Параметры:**

* \`$country\` (string): Страна для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateProfession()\` [#validateprofession]

**Описание:** Валидирует профессию

**Параметры:**

* \`$profession\` (string): Профессия для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateSearchQuery()\` [#validatesearchquery]

**Описание:** Валидирует поисковый запрос

**Параметры:**

* \`$query\` (string): Поисковый запрос

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateDate()\` [#validatedate]

**Описание:** Валидирует дату

**Параметры:**

* \`$date\` (string): Дата в формате Y-m-d

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateDateRange()\` [#validatedaterange]

**Описание:** Валидирует диапазон дат

**Параметры:**

* \`$startDate\` (string): Начальная дата
* \`$endDate\` (string): Конечная дата

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:

## \`validateNotEmptyArray()\` [#validatenotemptyarray]

**Описание:** Валидирует непустой массив

**Параметры:**

* \`$array\` (array): Массив для валидации

**Возвращает:** \`bool\`

**Исключения:**

* \`ValidationException\`:
`,o={contents:[{heading:void 0,content:`**Описание:** Сервис для валидации данных
Выполняет валидацию объектов на основе атрибутов PHP 8.3.
Поддерживает различные типы валидации: обязательные поля,
ограничения длины, диапазоны значений, регулярные выражения.
Использует рефлексию для автоматического обнаружения правил валидации.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**Пример:**`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Attributes\\Validation`: Атрибут валидации"},{heading:void 0,content:"`\\KinopoiskDev\\Exceptions\\ValidationException`: Исключения валидации"},{heading:`validate`,content:`**Описание:** Валидирует объект на основе атрибутов свойств
Основной метод валидации, который анализирует все свойства объекта
и проверяет их на соответствие правилам, заданным в атрибутах Validation.
Выбрасывает ValidationException при обнаружении ошибок валидации.`},{heading:`validate`,content:`**Параметры:**`},{heading:`validate`,content:"`$object` (object): Объект для валидации (должен иметь свойства с атрибутами Validation)"},{heading:`validate`,content:"**Возвращает:** `bool True` если валидация прошла успешно"},{heading:`validate`,content:`**Исключения:**`},{heading:`validate`,content:"`ValidationException`: При ошибках валидации с детальным описанием проблем"},{heading:`validate`,content:`**Пример:**`},{heading:`validateproperty`,content:`**Описание:** Валидирует конкретное свойство объекта
Проверяет одно свойство объекта на соответствие правилам валидации,
заданным в атрибуте Validation. Поддерживает различные типы проверок
в зависимости от типа значения свойства.`},{heading:`validateproperty`,content:`**Параметры:**`},{heading:`validateproperty`,content:"`$object` (object): Объект для валидации"},{heading:`validateproperty`,content:"`$property` (ReflectionProperty): Свойство для валидации"},{heading:`validateproperty`,content:"**Возвращает:** `array<string, string>` Массив ошибок валидации в формате \\['property' => 'error']"},{heading:`validatestring`,content:`**Описание:** Валидирует строковое значение
Выполняет валидацию строковых значений согласно правилам:
минимальная/максимальная длина и соответствие регулярному выражению.`},{heading:`validatestring`,content:`**Параметры:**`},{heading:`validatestring`,content:"`$value` (string): Строковое значение для валидации"},{heading:`validatestring`,content:"`$validation` (Validation): Правила валидации из атрибута"},{heading:`validatestring`,content:"`$propertyName` (string): Название свойства для сообщений об ошибках"},{heading:`validatestring`,content:"**Возвращает:** `array<string, string>` Массив ошибок валидации"},{heading:`validatenumeric`,content:`**Описание:** Валидирует числовое значение
Выполняет валидацию числовых значений согласно правилам:
минимальное/максимальное значение.`},{heading:`validatenumeric`,content:`**Параметры:**`},{heading:`validatenumeric`,content:"`$value` (float|int): Числовое значение для валидации"},{heading:`validatenumeric`,content:"`$validation` (Validation): Правила валидации из атрибута"},{heading:`validatenumeric`,content:"`$propertyName` (string): Название свойства для сообщений об ошибках"},{heading:`validatenumeric`,content:"**Возвращает:** `array<string, string>` Массив ошибок валидации"},{heading:`validatearray`,content:`**Описание:** Валидирует массив данных по правилам
Альтернативный метод валидации для работы с массивами данных
вместо объектов. Полезен для валидации входных данных API
или данных форм.`},{heading:`validatearray`,content:"**Возвращает:** `bool True` если валидация прошла успешно"},{heading:`validatearray`,content:`**Исключения:**`},{heading:`validatearray`,content:"`ValidationException`: При ошибках валидации"},{heading:`validatearray`,content:`**Пример:**`},{heading:`validatefieldvalue`,content:`**Описание:** Валидирует значение поля по правилам
Вспомогательный метод для валидации отдельного поля
согласно переданным правилам. Поддерживает различные
типы правил валидации.`},{heading:`validatefieldvalue`,content:`**Параметры:**`},{heading:`validatefieldvalue`,content:"`$value` (mixed): Значение поля для валидации"},{heading:`validatefieldvalue`,content:"`$fieldName` (string): Название поля для сообщений об ошибках"},{heading:`validatefieldvalue`,content:"**Возвращает:** `array<string, string>` Массив ошибок валидации"},{heading:`validatevalue`,content:`**Описание:** Валидирует значение на основе правил валидации
Универсальный метод для валидации любого значения
согласно объекту Validation. Возвращает сообщение об ошибке
или null при успешной валидации.`},{heading:`validatevalue`,content:`**Параметры:**`},{heading:`validatevalue`,content:"`$value` (mixed): Значение для валидации"},{heading:`validatevalue`,content:"`$validation` (Validation): Правила валидации"},{heading:`validatevalue`,content:"**Возвращает:** `string|null` Сообщение об ошибке или null если валидация прошла успешно"},{heading:`validateapitoken`,content:`**Описание:** Валидирует API токен`},{heading:`validateapitoken`,content:`**Параметры:**`},{heading:`validateapitoken`,content:"`$token` (string|null): API токен для валидации"},{heading:`validateapitoken`,content:"**Возвращает:** `bool`"},{heading:`validateapitoken`,content:`**Исключения:**`},{heading:`validateapitoken`,content:"`ValidationException`:"},{heading:`validatehttpmethod`,content:`**Описание:** Валидирует HTTP метод`},{heading:`validatehttpmethod`,content:`**Параметры:**`},{heading:`validatehttpmethod`,content:"`$method` (string): HTTP метод"},{heading:`validatehttpmethod`,content:"**Возвращает:** `bool`"},{heading:`validatehttpmethod`,content:`**Исключения:**`},{heading:`validatehttpmethod`,content:"`ValidationException`:"},{heading:`validateendpoint`,content:`**Описание:** Валидирует endpoint`},{heading:`validateendpoint`,content:`**Параметры:**`},{heading:`validateendpoint`,content:"`$endpoint` (string): Endpoint для валидации"},{heading:`validateendpoint`,content:"**Возвращает:** `bool`"},{heading:`validateendpoint`,content:`**Исключения:**`},{heading:`validateendpoint`,content:"`ValidationException`:"},{heading:`validateyear`,content:`**Описание:** Валидирует год`},{heading:`validateyear`,content:`**Параметры:**`},{heading:`validateyear`,content:"`$year` (int): Год для валидации"},{heading:`validateyear`,content:"**Возвращает:** `bool`"},{heading:`validateyear`,content:`**Исключения:**`},{heading:`validateyear`,content:"`ValidationException`:"},{heading:`validaterating`,content:`**Описание:** Валидирует рейтинг`},{heading:`validaterating`,content:`**Параметры:**`},{heading:`validaterating`,content:"`$rating` (float): Рейтинг для валидации"},{heading:`validaterating`,content:"**Возвращает:** `bool`"},{heading:`validaterating`,content:`**Исключения:**`},{heading:`validaterating`,content:"`ValidationException`:"},{heading:`validatelimit`,content:`**Описание:** Валидирует лимит`},{heading:`validatelimit`,content:`**Параметры:**`},{heading:`validatelimit`,content:"`$limit` (int): Лимит для валидации"},{heading:`validatelimit`,content:"**Возвращает:** `bool`"},{heading:`validatelimit`,content:`**Исключения:**`},{heading:`validatelimit`,content:"`ValidationException`:"},{heading:`validatepage`,content:`**Описание:** Валидирует номер страницы`},{heading:`validatepage`,content:`**Параметры:**`},{heading:`validatepage`,content:"`$page` (int): Номер страницы"},{heading:`validatepage`,content:"**Возвращает:** `bool`"},{heading:`validatepage`,content:`**Исключения:**`},{heading:`validatepage`,content:"`ValidationException`:"},{heading:`validatemovieid`,content:`**Описание:** Валидирует ID фильма`},{heading:`validatemovieid`,content:`**Параметры:**`},{heading:`validatemovieid`,content:"`$movieId` (int): ID фильма"},{heading:`validatemovieid`,content:"**Возвращает:** `bool`"},{heading:`validatemovieid`,content:`**Исключения:**`},{heading:`validatemovieid`,content:"`ValidationException`:"},{heading:`validatepersonid`,content:`**Описание:** Валидирует ID персоны`},{heading:`validatepersonid`,content:`**Параметры:**`},{heading:`validatepersonid`,content:"`$personId` (int): ID персоны"},{heading:`validatepersonid`,content:"**Возвращает:** `bool`"},{heading:`validatepersonid`,content:`**Исключения:**`},{heading:`validatepersonid`,content:"`ValidationException`:"},{heading:`validategenre`,content:`**Описание:** Валидирует жанр`},{heading:`validategenre`,content:`**Параметры:**`},{heading:`validategenre`,content:"`$genre` (string): Жанр для валидации"},{heading:`validategenre`,content:"**Возвращает:** `bool`"},{heading:`validategenre`,content:`**Исключения:**`},{heading:`validategenre`,content:"`ValidationException`:"},{heading:`validatecountry`,content:`**Описание:** Валидирует страну`},{heading:`validatecountry`,content:`**Параметры:**`},{heading:`validatecountry`,content:"`$country` (string): Страна для валидации"},{heading:`validatecountry`,content:"**Возвращает:** `bool`"},{heading:`validatecountry`,content:`**Исключения:**`},{heading:`validatecountry`,content:"`ValidationException`:"},{heading:`validateprofession`,content:`**Описание:** Валидирует профессию`},{heading:`validateprofession`,content:`**Параметры:**`},{heading:`validateprofession`,content:"`$profession` (string): Профессия для валидации"},{heading:`validateprofession`,content:"**Возвращает:** `bool`"},{heading:`validateprofession`,content:`**Исключения:**`},{heading:`validateprofession`,content:"`ValidationException`:"},{heading:`validatesearchquery`,content:`**Описание:** Валидирует поисковый запрос`},{heading:`validatesearchquery`,content:`**Параметры:**`},{heading:`validatesearchquery`,content:"`$query` (string): Поисковый запрос"},{heading:`validatesearchquery`,content:"**Возвращает:** `bool`"},{heading:`validatesearchquery`,content:`**Исключения:**`},{heading:`validatesearchquery`,content:"`ValidationException`:"},{heading:`validatedate`,content:`**Описание:** Валидирует дату`},{heading:`validatedate`,content:`**Параметры:**`},{heading:`validatedate`,content:"`$date` (string): Дата в формате Y-m-d"},{heading:`validatedate`,content:"**Возвращает:** `bool`"},{heading:`validatedate`,content:`**Исключения:**`},{heading:`validatedate`,content:"`ValidationException`:"},{heading:`validatedaterange`,content:`**Описание:** Валидирует диапазон дат`},{heading:`validatedaterange`,content:`**Параметры:**`},{heading:`validatedaterange`,content:"`$startDate` (string): Начальная дата"},{heading:`validatedaterange`,content:"`$endDate` (string): Конечная дата"},{heading:`validatedaterange`,content:"**Возвращает:** `bool`"},{heading:`validatedaterange`,content:`**Исключения:**`},{heading:`validatedaterange`,content:"`ValidationException`:"},{heading:`validatenotemptyarray`,content:`**Описание:** Валидирует непустой массив`},{heading:`validatenotemptyarray`,content:`**Параметры:**`},{heading:`validatenotemptyarray`,content:"`$array` (array): Массив для валидации"},{heading:`validatenotemptyarray`,content:"**Возвращает:** `bool`"},{heading:`validatenotemptyarray`,content:`**Исключения:**`},{heading:`validatenotemptyarray`,content:"`ValidationException`:"}],headings:[{id:`validate`,content:"`validate()`"},{id:`validateproperty`,content:"`validateProperty()`"},{id:`validatestring`,content:"`validateString()`"},{id:`validatenumeric`,content:"`validateNumeric()`"},{id:`validatearray`,content:"`validateArray()`"},{id:`validatefieldvalue`,content:"`validateFieldValue()`"},{id:`validatevalue`,content:"`validateValue()`"},{id:`validateapitoken`,content:"`validateApiToken()`"},{id:`validatehttpmethod`,content:"`validateHttpMethod()`"},{id:`validateendpoint`,content:"`validateEndpoint()`"},{id:`validateyear`,content:"`validateYear()`"},{id:`validaterating`,content:"`validateRating()`"},{id:`validatelimit`,content:"`validateLimit()`"},{id:`validatepage`,content:"`validatePage()`"},{id:`validatemovieid`,content:"`validateMovieId()`"},{id:`validatepersonid`,content:"`validatePersonId()`"},{id:`validategenre`,content:"`validateGenre()`"},{id:`validatecountry`,content:"`validateCountry()`"},{id:`validateprofession`,content:"`validateProfession()`"},{id:`validatesearchquery`,content:"`validateSearchQuery()`"},{id:`validatedate`,content:"`validateDate()`"},{id:`validatedaterange`,content:"`validateDateRange()`"},{id:`validatenotemptyarray`,content:"`validateNotEmptyArray()`"}]},s=[{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#validateproperty`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateProperty()`})})},{depth:2,url:`#validatestring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateString()`})})},{depth:2,url:`#validatenumeric`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateNumeric()`})})},{depth:2,url:`#validatearray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateArray()`})})},{depth:2,url:`#validatefieldvalue`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateFieldValue()`})})},{depth:2,url:`#validatevalue`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateValue()`})})},{depth:2,url:`#validateapitoken`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateApiToken()`})})},{depth:2,url:`#validatehttpmethod`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateHttpMethod()`})})},{depth:2,url:`#validateendpoint`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateEndpoint()`})})},{depth:2,url:`#validateyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateYear()`})})},{depth:2,url:`#validaterating`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateRating()`})})},{depth:2,url:`#validatelimit`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateLimit()`})})},{depth:2,url:`#validatepage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validatePage()`})})},{depth:2,url:`#validatemovieid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateMovieId()`})})},{depth:2,url:`#validatepersonid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validatePersonId()`})})},{depth:2,url:`#validategenre`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateGenre()`})})},{depth:2,url:`#validatecountry`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateCountry()`})})},{depth:2,url:`#validateprofession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateProfession()`})})},{depth:2,url:`#validatesearchquery`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateSearchQuery()`})})},{depth:2,url:`#validatedate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateDate()`})})},{depth:2,url:`#validatedaterange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateDateRange()`})})},{depth:2,url:`#validatenotemptyarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validateNotEmptyArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сервис для валидации данных
Выполняет валидацию объектов на основе атрибутов PHP 8.3.
Поддерживает различные типы валидации: обязательные поля,
ограничения длины, диапазоны значений, регулярные выражения.
Использует рефлексию для автоматического обнаружения правил валидации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Validation`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`required`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`minLength`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`maxLength`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`255`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $title;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`Validation`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`min`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1900`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`max`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2030`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`public`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $year;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$validator `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` ValidationService`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`title `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` ''`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`year `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1800`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$validator`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`validate`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($movie);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ValidationException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`foreach`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ($e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getErrors`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`as`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $field `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $error) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$field`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}: {`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$error`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`}`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`\\n`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Attributes\\Validation`}),`: Атрибут валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\ValidationException`}),`: Исключения валидации`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует объект на основе атрибутов свойств
Основной метод валидации, который анализирует все свойства объекта
и проверяет их на соответствие правилам, заданным в атрибутах Validation.
Выбрасывает ValidationException при обнаружении ошибок валидации.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$object`}),` (object): Объект для валидации (должен иметь свойства с атрибутами Validation)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если валидация прошла успешно`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При ошибках валидации с детальным описанием проблем`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` Movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`title `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'The Matrix'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$movie`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`year `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1999`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$validator`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`validate`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($movie);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Объект валиден"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ValidationException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Ошибки валидации: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`validateproperty`,children:(0,n.jsx)(t.code,{children:`validateProperty()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует конкретное свойство объекта
Проверяет одно свойство объекта на соответствие правилам валидации,
заданным в атрибуте Validation. Поддерживает различные типы проверок
в зависимости от типа значения свойства.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$object`}),` (object): Объект для валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$property`}),` (ReflectionProperty): Свойство для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string>`}),` Массив ошибок валидации в формате ['property' => 'error']`]}),`
`,(0,n.jsx)(t.h2,{id:`validatestring`,children:(0,n.jsx)(t.code,{children:`validateString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует строковое значение
Выполняет валидацию строковых значений согласно правилам:
минимальная/максимальная длина и соответствие регулярному выражению.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (string): Строковое значение для валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$validation`}),` (Validation): Правила валидации из атрибута`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$propertyName`}),` (string): Название свойства для сообщений об ошибках`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string>`}),` Массив ошибок валидации`]}),`
`,(0,n.jsx)(t.h2,{id:`validatenumeric`,children:(0,n.jsx)(t.code,{children:`validateNumeric()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует числовое значение
Выполняет валидацию числовых значений согласно правилам:
минимальное/максимальное значение.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (float|int): Числовое значение для валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$validation`}),` (Validation): Правила валидации из атрибута`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$propertyName`}),` (string): Название свойства для сообщений об ошибках`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string>`}),` Массив ошибок валидации`]}),`
`,(0,n.jsx)(t.h2,{id:`validatearray`,children:(0,n.jsx)(t.code,{children:`validateArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует массив данных по правилам
Альтернативный метод валидации для работы с массивами данных
вместо объектов. Полезен для валидации входных данных API
или данных форм.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если валидация прошла успешно`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`: При ошибках валидации`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$data `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'The Matrix'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'year'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1999`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'rating'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 8.7`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$rules `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'title'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'required'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'min_length'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'max_length'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 255`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'year'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'min'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1900`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'max'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 2030`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'rating'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'min'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'max'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 10`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`];`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`try`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$validator`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`validateArray`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($data, $rules);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Данные валидны"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`} `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`catch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`ValidationException`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "Ошибки: "`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` .`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $e`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getMessage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`validatefieldvalue`,children:(0,n.jsx)(t.code,{children:`validateFieldValue()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует значение поля по правилам
Вспомогательный метод для валидации отдельного поля
согласно переданным правилам. Поддерживает различные
типы правил валидации.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (mixed): Значение поля для валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fieldName`}),` (string): Название поля для сообщений об ошибках`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, string>`}),` Массив ошибок валидации`]}),`
`,(0,n.jsx)(t.h2,{id:`validatevalue`,children:(0,n.jsx)(t.code,{children:`validateValue()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует значение на основе правил валидации
Универсальный метод для валидации любого значения
согласно объекту Validation. Возвращает сообщение об ошибке
или null при успешной валидации.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (mixed): Значение для валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$validation`}),` (Validation): Правила валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Сообщение об ошибке или null если валидация прошла успешно`]}),`
`,(0,n.jsx)(t.h2,{id:`validateapitoken`,children:(0,n.jsx)(t.code,{children:`validateApiToken()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует API токен`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$token`}),` (string|null): API токен для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatehttpmethod`,children:(0,n.jsx)(t.code,{children:`validateHttpMethod()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует HTTP метод`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$method`}),` (string): HTTP метод`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validateendpoint`,children:(0,n.jsx)(t.code,{children:`validateEndpoint()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует endpoint`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endpoint`}),` (string): Endpoint для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validateyear`,children:(0,n.jsx)(t.code,{children:`validateYear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует год`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int): Год для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validaterating`,children:(0,n.jsx)(t.code,{children:`validateRating()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует рейтинг`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$rating`}),` (float): Рейтинг для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatelimit`,children:(0,n.jsx)(t.code,{children:`validateLimit()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует лимит`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Лимит для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatepage`,children:(0,n.jsx)(t.code,{children:`validatePage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует номер страницы`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatemovieid`,children:(0,n.jsx)(t.code,{children:`validateMovieId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует ID фильма`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$movieId`}),` (int): ID фильма`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatepersonid`,children:(0,n.jsx)(t.code,{children:`validatePersonId()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует ID персоны`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$personId`}),` (int): ID персоны`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validategenre`,children:(0,n.jsx)(t.code,{children:`validateGenre()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует жанр`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$genre`}),` (string): Жанр для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatecountry`,children:(0,n.jsx)(t.code,{children:`validateCountry()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует страну`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$country`}),` (string): Страна для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validateprofession`,children:(0,n.jsx)(t.code,{children:`validateProfession()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует профессию`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$profession`}),` (string): Профессия для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatesearchquery`,children:(0,n.jsx)(t.code,{children:`validateSearchQuery()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует поисковый запрос`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$query`}),` (string): Поисковый запрос`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatedate`,children:(0,n.jsx)(t.code,{children:`validateDate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует дату`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$date`}),` (string): Дата в формате Y-m-d`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatedaterange`,children:(0,n.jsx)(t.code,{children:`validateDateRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует диапазон дат`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$startDate`}),` (string): Начальная дата`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$endDate`}),` (string): Конечная дата`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validatenotemptyarray`,children:(0,n.jsx)(t.code,{children:`validateNotEmptyArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует непустой массив`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$array`}),` (array): Массив для валидации`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ValidationException`}),`:`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};