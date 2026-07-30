import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PersonRequests`},i=new Date(1785404498e3),a=`

**Описание:** Класс для API-запросов, связанных с персонами
Предоставляет полный набор методов для работы с персонами через API Kinopoisk.dev.
Включает поиск персон, получение детальной информации, наград, фильтрацию по
профессиям и другим критериям. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:

* Поиск персон по различным критериям
* Получение детальной информации о персоне
* Работа с наградами персон
* Фильтрация по профессиям (актеры, режиссеры и т.д.)
* Поиск по имени с поддержкой регулярных выражений
* Специализированные методы для популярных запросов

**С версии:** 1.0.0

**Версия:** 1.0.0

**Пример:**

\`\`\`php
$personRequests = new PersonRequests('your-api-token');
// Получение персоны по ID
$person = $personRequests->getPersonById(123);
// Поиск персон
$filter = new PersonSearchFilter();
$filter->profession('актер')->age(30, 50);
$results = $personRequests->searchPersons($filter, 1, 20);
// Поиск по имени
$actors = $personRequests->searchByName('Том Круз');
// Получение актеров
$actors = $personRequests->getActors(1, 50);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Filter\\PersonSearchFilter\`: Для настройки фильтрации
* \`\\KinopoiskDev\\Models\\Person\`: Модель персоны
* \`\\KinopoiskDev\\Models\\PersonAward\`: Модель награды персоны
* \`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto\`: Ответ с персонами
* \`\\KinopoiskDev\\Responses\\Api\\PersonAwardDocsResponseDto\`: Ответ с наградами

## \`getPersonById()\` [#getpersonbyid]

**Описание:** Получает персону по её уникальному идентификатору
Выполняет запрос к API для получения полной информации о персоне,
включая биографические данные, фильмографию, награды, места
рождения и смерти, и другие доступные сведения.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/person/{id}\`

**Параметры:**

* \`$personId\` (int): Уникальный идентификатор персоны в системе Kinopoisk

**Возвращает:** \`Person\` Объект персоны со всеми доступными данными

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или проблемах с сетью
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса (401, 403, 404)
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
$person = $personRequests->getPersonById(123);
echo $person->name; // Имя персоны
echo $person->profession; // Профессия
\`\`\`

## \`getActors()\` [#getactors]

**Описание:** Получает список актёров
Удобный метод для получения списка персон с профессией "актёр".
Является обёрткой над методом getPersonsByProfession().

**Параметры:**

* \`$limit\` (int): Количество результатов на странице (максимум 250)
* \`$page\` (int): Номер страницы результатов (начиная с 1)

**Возвращает:** \`PersonDocsResponseDto\` Список актёров с информацией о пагинации

**Исключения:**

* \`\\JsonException\`: При ошибках парсинга JSON-ответа
* \`KinopoiskDevException\`: При ошибках API

**См. также:**

* \`PersonRequests::getPersonsByProfession\`: () Для получения персон других профессий

## \`getPersonsByProfession()\` [#getpersonsbyprofession]

**Описание:** Получает персон по профессии
Выполняет поиск персон, которые работают в указанной профессиональной области.
Поддерживает русские названия профессий из справочника Kinopoisk.

**Параметры:**

* \`$limit\` (int): Количество результатов на странице (максимум 250)
* \`$profession\` (string): Профессия (актёр, режиссёр, сценарист, продюсер и т.д.)
* \`$page\` (int): Номер страницы результатов (начиная с 1)

**Возвращает:** \`PersonDocsResponseDto\` Персоны указанной профессии с информацией о пагинации

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**См. также:**

* \`PersonRequests::getActors\`: () Для получения актёров
* \`PersonRequests::getDirectors\`: () Для получения режиссёров

## \`searchPersons()\` [#searchpersons]

**Описание:** Выполняет поиск персон по различным критериям
Основной метод для поиска персон с поддержкой сложных фильтров.
Позволяет искать по имени, профессии, возрасту, полу, месту рождения и другим параметрам.

**API Endpoint:** \`/v1.4/person\`

**Параметры:**

* \`$filters\` (PersonSearchFilter|null): Объект фильтра для поиска персон
* \`$page\` (int): Номер страницы результатов (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска с пагинацией

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API

## \`getRandomPerson()\` [#getrandomperson]

**Описание:** Получает случайную персону из базы данных API с применением случайных критериев сортировки
Метод создает случайный набор критериев сортировки, применяет их к поисковому запросу
и возвращает первую персону из результата. Если фильтры не переданы, создается
новый экземпляр PersonSearchFilter. Добавляет от 1 до (количество полей - 1)
случайных критериев сортировки для обеспечения максимальной случайности результата.
Алгоритм работы:

1. Создает пустой фильтр, если не передан
2. Получает доступные поля и направления сортировки
3. Генерирует случайное количество критериев сортировки (1 до max-1)
4. Для каждого критерия выбирает случайное поле и направление
5. Выполняет поиск с лимитом 1 запись на 1 странице
6. Возвращает первую найденную персону

**С версии:** 1.0.0

**Параметры:**

* \`$filters\` (PersonSearchFilter|null): Фильтры для поиска персон. Если null, создается новый экземпляр

**Возвращает:** \`Person\` Случайно выбранная персона из базы данных

**Исключения:**

* \`\\Random\\RandomException\`: В случае ошибки генерации случайного числа
* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException\`: Если не найдено персон, соответствующих фильтрам, или при других ошибках API

**Пример:**

\`\`\`php
// Получение случайной персоны без фильтров
$randomPerson = $personRequests->getRandomPerson();
// Получение случайной персоны только среди актеров
$filter = new PersonSearchFilter();
$filter->onlyActors();
$randomActor = $personRequests->getRandomPerson($filter);
// Получение случайной персоны определенного возраста
$filter = new PersonSearchFilter();
$filter->age(30, 'gte')->age(60, 'lte');
$randomAdultPerson = $personRequests->getRandomPerson($filter);
\`\`\`

**См. также:**

* \`PersonSearchFilter\`: Класс для настройки фильтров поиска персон
* \`SortField::getPersonFields\`: () Получение доступных полей для сортировки персон
* \`SortDirection::getAllDirections\`: () Получение всех направлений сортировки
* \`SortCriteria\`: Класс для создания критериев сортировки

## \`searchPersonsByName()\` [#searchpersonsbyname]

**Описание:** Выполняет поиск персон по имени (алиас для searchByName)

**Параметры:**

* \`$name\` (string): Имя для поиска
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска

## \`searchByName()\` [#searchbyname]

**Описание:** Выполняет поиск персон по имени
Удобный метод для поиска персон по имени с использованием регулярных выражений.
Поддерживает поиск как по русским, так и по английским именам. Полезен для
быстрого поиска персон без сложной фильтрации.

**С версии:** 1.0.0

**API Endpoint:** \`/v1.4/person/search\`

**Параметры:**

* \`$name\` (string): Имя персоны для поиска (может быть русским или английским)
* \`$page\` (int): Номер страницы результатов (начиная с 1)
* \`$limit\` (int): Количество результатов на странице (максимум 250)

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска с информацией о пагинации

**Исключения:**

* \`KinopoiskDevException\`: При ошибках API или валидации
* \`KinopoiskResponseException\`: При ошибках HTTP-запроса
* \`\\JsonException\`: При ошибках парсинга JSON-ответа

**Пример:**

\`\`\`php
// Поиск по русскому имени
$results = $personRequests->searchByName('Том Круз');
// Поиск по английскому имени
$results = $personRequests->searchByName('Tom Cruise', 1, 20);
\`\`\`

## \`getPersonsBySex()\` [#getpersonsbysex]

**Описание:** Получает персон по полу

**Параметры:**

* \`$sex\` (string): Пол (М, Ж)
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска

## \`getPersonsByBirthYear()\` [#getpersonsbybirthyear]

**Описание:** Получает персон по году рождения

**Параметры:**

* \`$year\` (int): Год рождения
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска

## \`getPersonsByBirthYearRange()\` [#getpersonsbybirthyearrange]

**Описание:** Получает персон по диапазону годов рождения

**Параметры:**

* \`$fromYear\` (int): Начальный год
* \`$toYear\` (int): Конечный год
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска

## \`getPersonsByDeathYear()\` [#getpersonsbydeathyear]

**Описание:** Получает персон по году смерти

**Параметры:**

* \`$year\` (int): Год смерти
* \`$page\` (int): Номер страницы
* \`$limit\` (int): Количество результатов

**Возвращает:** \`PersonDocsResponseDto\` Результаты поиска

## \`getPersonAwards()\` [#getpersonawards]

**Описание:** Получает награды персон с возможностью фильтрации и пагинации
Если null, создается пустой фильтр.
Поддерживает фильтрацию по возрасту, полу,
месту рождения, профессии и другим параметрам.
Значение должно быть положительным числом.
Значение не должно превышать 250.

* docs: массив объектов PersonAward с данными о наградах
* total: общее количество наград в результате
* limit: примененное ограничение на количество элементов
* page: текущая страница
* pages: общее количество страниц
* Если параметр $limit превышает 250
* Если параметр $page меньше 1
* При ошибках HTTP-запроса к API
* При ошибках парсинга ответа от API
* При ошибках создания объектов PersonAward из данных API

**API Endpoint:** \`/v1.4/person/awards\`

**Параметры:**

* \`$filters\` (PersonSearchFilter|null): Объект фильтрации для поиска наград
* \`$page\` (int): Номер страницы (по умолчанию: 1)
* \`$limit\` (int): Количество результатов на странице (по умолчанию: 10)
* \`$filters\` (PersonSearchFilter|null): Фильтры для поиска наград персон.
* \`$page\` (int): Номер страницы для пагинации (начиная с 1).
* \`$limit\` (int): Максимальное количество элементов на странице.

**Возвращает:** \`PersonAwardDocsResponseDto\` Объект ответа, содержащий:

**Исключения:**

* \`\\KinopoiskDev\\Exceptions\\KinopoiskDevException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException|\\JsonException\`:

**Пример:**

\`\`\`php
// Получение первых 10 наград персон
$awards = $kinopoisk->getPersonAwards();
// Получение наград с фильтрацией по профессии
$filter = new PersonSearchFilter();
$filter->profession('актер');
$awards = $kinopoisk->getPersonAwards($filter, 1, 20);
// Получение наград живых персон с ограничением по возрасту
$filter = new PersonSearchFilter();
$filter->onlyAlive()->age(30, 'gte');
$awards = $kinopoisk->getPersonAwards($filter, 2, 50);
\`\`\`

**См. также:**

* \`\\KinopoiskDev\\Filter\\PersonSearchFilter\`: Для параметров фильтрации
* \`\\KinopoiskDev\\Models\\PersonAward\`: Для структуры данных наград персон
* \`\\KinopoiskDev\\Responses\\PersonAwardDocsResponseDto\`: Для структуры ответа
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для API-запросов, связанных с персонами
Предоставляет полный набор методов для работы с персонами через API Kinopoisk.dev.
Включает поиск персон, получение детальной информации, наград, фильтрацию по
профессиям и другим критериям. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:`},{heading:void 0,content:`Поиск персон по различным критериям`},{heading:void 0,content:`Получение детальной информации о персоне`},{heading:void 0,content:`Работа с наградами персон`},{heading:void 0,content:`Фильтрация по профессиям (актеры, режиссеры и т.д.)`},{heading:void 0,content:`Поиск по имени с поддержкой регулярных выражений`},{heading:void 0,content:`Специализированные методы для популярных запросов`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**Пример:**`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Filter\\PersonSearchFilter`: Для настройки фильтрации"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Модель персоны"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\PersonAward`: Модель награды персоны"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto`: Ответ с персонами"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\PersonAwardDocsResponseDto`: Ответ с наградами"},{heading:`getpersonbyid`,content:`**Описание:** Получает персону по её уникальному идентификатору
Выполняет запрос к API для получения полной информации о персоне,
включая биографические данные, фильмографию, награды, места
рождения и смерти, и другие доступные сведения.`},{heading:`getpersonbyid`,content:`**С версии:** 1.0.0`},{heading:`getpersonbyid`,content:"**API Endpoint:** `/v1.4/person/{id}`"},{heading:`getpersonbyid`,content:`**Параметры:**`},{heading:`getpersonbyid`,content:"`$personId` (int): Уникальный идентификатор персоны в системе Kinopoisk"},{heading:`getpersonbyid`,content:"**Возвращает:** `Person` Объект персоны со всеми доступными данными"},{heading:`getpersonbyid`,content:`**Исключения:**`},{heading:`getpersonbyid`,content:"`KinopoiskDevException`: При ошибках API или проблемах с сетью"},{heading:`getpersonbyid`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса (401, 403, 404)"},{heading:`getpersonbyid`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getpersonbyid`,content:`**Пример:**`},{heading:`getactors`,content:`**Описание:** Получает список актёров
Удобный метод для получения списка персон с профессией "актёр".
Является обёрткой над методом getPersonsByProfession().`},{heading:`getactors`,content:`**Параметры:**`},{heading:`getactors`,content:"`$limit` (int): Количество результатов на странице (максимум 250)"},{heading:`getactors`,content:"`$page` (int): Номер страницы результатов (начиная с 1)"},{heading:`getactors`,content:"**Возвращает:** `PersonDocsResponseDto` Список актёров с информацией о пагинации"},{heading:`getactors`,content:`**Исключения:**`},{heading:`getactors`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getactors`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getactors`,content:`**См. также:**`},{heading:`getactors`,content:"`PersonRequests::getPersonsByProfession`: () Для получения персон других профессий"},{heading:`getpersonsbyprofession`,content:`**Описание:** Получает персон по профессии
Выполняет поиск персон, которые работают в указанной профессиональной области.
Поддерживает русские названия профессий из справочника Kinopoisk.`},{heading:`getpersonsbyprofession`,content:`**Параметры:**`},{heading:`getpersonsbyprofession`,content:"`$limit` (int): Количество результатов на странице (максимум 250)"},{heading:`getpersonsbyprofession`,content:"`$profession` (string): Профессия (актёр, режиссёр, сценарист, продюсер и т.д.)"},{heading:`getpersonsbyprofession`,content:"`$page` (int): Номер страницы результатов (начиная с 1)"},{heading:`getpersonsbyprofession`,content:"**Возвращает:** `PersonDocsResponseDto` Персоны указанной профессии с информацией о пагинации"},{heading:`getpersonsbyprofession`,content:`**Исключения:**`},{heading:`getpersonsbyprofession`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getpersonsbyprofession`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`getpersonsbyprofession`,content:`**См. также:**`},{heading:`getpersonsbyprofession`,content:"`PersonRequests::getActors`: () Для получения актёров"},{heading:`getpersonsbyprofession`,content:"`PersonRequests::getDirectors`: () Для получения режиссёров"},{heading:`searchpersons`,content:`**Описание:** Выполняет поиск персон по различным критериям
Основной метод для поиска персон с поддержкой сложных фильтров.
Позволяет искать по имени, профессии, возрасту, полу, месту рождения и другим параметрам.`},{heading:`searchpersons`,content:"**API Endpoint:** `/v1.4/person`"},{heading:`searchpersons`,content:`**Параметры:**`},{heading:`searchpersons`,content:"`$filters` (PersonSearchFilter|null): Объект фильтра для поиска персон"},{heading:`searchpersons`,content:"`$page` (int): Номер страницы результатов (по умолчанию: 1)"},{heading:`searchpersons`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)"},{heading:`searchpersons`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска с пагинацией"},{heading:`searchpersons`,content:`**Исключения:**`},{heading:`searchpersons`,content:"`KinopoiskDevException`: При ошибках API"},{heading:`getrandomperson`,content:`**Описание:** Получает случайную персону из базы данных API с применением случайных критериев сортировки
Метод создает случайный набор критериев сортировки, применяет их к поисковому запросу
и возвращает первую персону из результата. Если фильтры не переданы, создается
новый экземпляр PersonSearchFilter. Добавляет от 1 до (количество полей - 1)
случайных критериев сортировки для обеспечения максимальной случайности результата.
Алгоритм работы:`},{heading:`getrandomperson`,content:`Создает пустой фильтр, если не передан`},{heading:`getrandomperson`,content:`Получает доступные поля и направления сортировки`},{heading:`getrandomperson`,content:`Генерирует случайное количество критериев сортировки (1 до max-1)`},{heading:`getrandomperson`,content:`Для каждого критерия выбирает случайное поле и направление`},{heading:`getrandomperson`,content:`Выполняет поиск с лимитом 1 запись на 1 странице`},{heading:`getrandomperson`,content:`Возвращает первую найденную персону`},{heading:`getrandomperson`,content:`**С версии:** 1.0.0`},{heading:`getrandomperson`,content:`**Параметры:**`},{heading:`getrandomperson`,content:"`$filters` (PersonSearchFilter|null): Фильтры для поиска персон. Если null, создается новый экземпляр"},{heading:`getrandomperson`,content:"**Возвращает:** `Person` Случайно выбранная персона из базы данных"},{heading:`getrandomperson`,content:`**Исключения:**`},{heading:`getrandomperson`,content:"`\\Random\\RandomException`: В случае ошибки генерации случайного числа"},{heading:`getrandomperson`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`: Если не найдено персон, соответствующих фильтрам, или при других ошибках API"},{heading:`getrandomperson`,content:`**Пример:**`},{heading:`getrandomperson`,content:`**См. также:**`},{heading:`getrandomperson`,content:"`PersonSearchFilter`: Класс для настройки фильтров поиска персон"},{heading:`getrandomperson`,content:"`SortField::getPersonFields`: () Получение доступных полей для сортировки персон"},{heading:`getrandomperson`,content:"`SortDirection::getAllDirections`: () Получение всех направлений сортировки"},{heading:`getrandomperson`,content:"`SortCriteria`: Класс для создания критериев сортировки"},{heading:`searchpersonsbyname`,content:`**Описание:** Выполняет поиск персон по имени (алиас для searchByName)`},{heading:`searchpersonsbyname`,content:`**Параметры:**`},{heading:`searchpersonsbyname`,content:"`$name` (string): Имя для поиска"},{heading:`searchpersonsbyname`,content:"`$page` (int): Номер страницы"},{heading:`searchpersonsbyname`,content:"`$limit` (int): Количество результатов"},{heading:`searchpersonsbyname`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска"},{heading:`searchbyname`,content:`**Описание:** Выполняет поиск персон по имени
Удобный метод для поиска персон по имени с использованием регулярных выражений.
Поддерживает поиск как по русским, так и по английским именам. Полезен для
быстрого поиска персон без сложной фильтрации.`},{heading:`searchbyname`,content:`**С версии:** 1.0.0`},{heading:`searchbyname`,content:"**API Endpoint:** `/v1.4/person/search`"},{heading:`searchbyname`,content:`**Параметры:**`},{heading:`searchbyname`,content:"`$name` (string): Имя персоны для поиска (может быть русским или английским)"},{heading:`searchbyname`,content:"`$page` (int): Номер страницы результатов (начиная с 1)"},{heading:`searchbyname`,content:"`$limit` (int): Количество результатов на странице (максимум 250)"},{heading:`searchbyname`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска с информацией о пагинации"},{heading:`searchbyname`,content:`**Исключения:**`},{heading:`searchbyname`,content:"`KinopoiskDevException`: При ошибках API или валидации"},{heading:`searchbyname`,content:"`KinopoiskResponseException`: При ошибках HTTP-запроса"},{heading:`searchbyname`,content:"`\\JsonException`: При ошибках парсинга JSON-ответа"},{heading:`searchbyname`,content:`**Пример:**`},{heading:`getpersonsbysex`,content:`**Описание:** Получает персон по полу`},{heading:`getpersonsbysex`,content:`**Параметры:**`},{heading:`getpersonsbysex`,content:"`$sex` (string): Пол (М, Ж)"},{heading:`getpersonsbysex`,content:"`$page` (int): Номер страницы"},{heading:`getpersonsbysex`,content:"`$limit` (int): Количество результатов"},{heading:`getpersonsbysex`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска"},{heading:`getpersonsbybirthyear`,content:`**Описание:** Получает персон по году рождения`},{heading:`getpersonsbybirthyear`,content:`**Параметры:**`},{heading:`getpersonsbybirthyear`,content:"`$year` (int): Год рождения"},{heading:`getpersonsbybirthyear`,content:"`$page` (int): Номер страницы"},{heading:`getpersonsbybirthyear`,content:"`$limit` (int): Количество результатов"},{heading:`getpersonsbybirthyear`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска"},{heading:`getpersonsbybirthyearrange`,content:`**Описание:** Получает персон по диапазону годов рождения`},{heading:`getpersonsbybirthyearrange`,content:`**Параметры:**`},{heading:`getpersonsbybirthyearrange`,content:"`$fromYear` (int): Начальный год"},{heading:`getpersonsbybirthyearrange`,content:"`$toYear` (int): Конечный год"},{heading:`getpersonsbybirthyearrange`,content:"`$page` (int): Номер страницы"},{heading:`getpersonsbybirthyearrange`,content:"`$limit` (int): Количество результатов"},{heading:`getpersonsbybirthyearrange`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска"},{heading:`getpersonsbydeathyear`,content:`**Описание:** Получает персон по году смерти`},{heading:`getpersonsbydeathyear`,content:`**Параметры:**`},{heading:`getpersonsbydeathyear`,content:"`$year` (int): Год смерти"},{heading:`getpersonsbydeathyear`,content:"`$page` (int): Номер страницы"},{heading:`getpersonsbydeathyear`,content:"`$limit` (int): Количество результатов"},{heading:`getpersonsbydeathyear`,content:"**Возвращает:** `PersonDocsResponseDto` Результаты поиска"},{heading:`getpersonawards`,content:`**Описание:** Получает награды персон с возможностью фильтрации и пагинации
Если null, создается пустой фильтр.
Поддерживает фильтрацию по возрасту, полу,
месту рождения, профессии и другим параметрам.
Значение должно быть положительным числом.
Значение не должно превышать 250.`},{heading:`getpersonawards`,content:`docs: массив объектов PersonAward с данными о наградах`},{heading:`getpersonawards`,content:`total: общее количество наград в результате`},{heading:`getpersonawards`,content:`limit: примененное ограничение на количество элементов`},{heading:`getpersonawards`,content:`page: текущая страница`},{heading:`getpersonawards`,content:`pages: общее количество страниц`},{heading:`getpersonawards`,content:`Если параметр $limit превышает 250`},{heading:`getpersonawards`,content:`Если параметр $page меньше 1`},{heading:`getpersonawards`,content:`При ошибках HTTP-запроса к API`},{heading:`getpersonawards`,content:`При ошибках парсинга ответа от API`},{heading:`getpersonawards`,content:`При ошибках создания объектов PersonAward из данных API`},{heading:`getpersonawards`,content:"**API Endpoint:** `/v1.4/person/awards`"},{heading:`getpersonawards`,content:`**Параметры:**`},{heading:`getpersonawards`,content:"`$filters` (PersonSearchFilter|null): Объект фильтрации для поиска наград"},{heading:`getpersonawards`,content:"`$page` (int): Номер страницы (по умолчанию: 1)"},{heading:`getpersonawards`,content:"`$limit` (int): Количество результатов на странице (по умолчанию: 10)"},{heading:`getpersonawards`,content:"`$filters` (PersonSearchFilter|null): Фильтры для поиска наград персон."},{heading:`getpersonawards`,content:"`$page` (int): Номер страницы для пагинации (начиная с 1)."},{heading:`getpersonawards`,content:"`$limit` (int): Максимальное количество элементов на странице."},{heading:`getpersonawards`,content:"**Возвращает:** `PersonAwardDocsResponseDto` Объект ответа, содержащий:"},{heading:`getpersonawards`,content:`**Исключения:**`},{heading:`getpersonawards`,content:"`\\KinopoiskDev\\Exceptions\\KinopoiskDevException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException|\\JsonException`:"},{heading:`getpersonawards`,content:`**Пример:**`},{heading:`getpersonawards`,content:`**См. также:**`},{heading:`getpersonawards`,content:"`\\KinopoiskDev\\Filter\\PersonSearchFilter`: Для параметров фильтрации"},{heading:`getpersonawards`,content:"`\\KinopoiskDev\\Models\\PersonAward`: Для структуры данных наград персон"},{heading:`getpersonawards`,content:"`\\KinopoiskDev\\Responses\\PersonAwardDocsResponseDto`: Для структуры ответа"}],headings:[{id:`getpersonbyid`,content:"`getPersonById()`"},{id:`getactors`,content:"`getActors()`"},{id:`getpersonsbyprofession`,content:"`getPersonsByProfession()`"},{id:`searchpersons`,content:"`searchPersons()`"},{id:`getrandomperson`,content:"`getRandomPerson()`"},{id:`searchpersonsbyname`,content:"`searchPersonsByName()`"},{id:`searchbyname`,content:"`searchByName()`"},{id:`getpersonsbysex`,content:"`getPersonsBySex()`"},{id:`getpersonsbybirthyear`,content:"`getPersonsByBirthYear()`"},{id:`getpersonsbybirthyearrange`,content:"`getPersonsByBirthYearRange()`"},{id:`getpersonsbydeathyear`,content:"`getPersonsByDeathYear()`"},{id:`getpersonawards`,content:"`getPersonAwards()`"}]},s=[{depth:2,url:`#getpersonbyid`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonById()`})})},{depth:2,url:`#getactors`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getActors()`})})},{depth:2,url:`#getpersonsbyprofession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonsByProfession()`})})},{depth:2,url:`#searchpersons`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchPersons()`})})},{depth:2,url:`#getrandomperson`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRandomPerson()`})})},{depth:2,url:`#searchpersonsbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchPersonsByName()`})})},{depth:2,url:`#searchbyname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`searchByName()`})})},{depth:2,url:`#getpersonsbysex`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonsBySex()`})})},{depth:2,url:`#getpersonsbybirthyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonsByBirthYear()`})})},{depth:2,url:`#getpersonsbybirthyearrange`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonsByBirthYearRange()`})})},{depth:2,url:`#getpersonsbydeathyear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonsByDeathYear()`})})},{depth:2,url:`#getpersonawards`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPersonAwards()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для API-запросов, связанных с персонами
Предоставляет полный набор методов для работы с персонами через API Kinopoisk.dev.
Включает поиск персон, получение детальной информации, наград, фильтрацию по
профессиям и другим критериям. Поддерживает расширенную фильтрацию,
пагинацию и обработку ошибок.
Основные возможности:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Поиск персон по различным критериям`}),`
`,(0,n.jsx)(t.li,{children:`Получение детальной информации о персоне`}),`
`,(0,n.jsx)(t.li,{children:`Работа с наградами персон`}),`
`,(0,n.jsx)(t.li,{children:`Фильтрация по профессиям (актеры, режиссеры и т.д.)`}),`
`,(0,n.jsx)(t.li,{children:`Поиск по имени с поддержкой регулярных выражений`}),`
`,(0,n.jsx)(t.li,{children:`Специализированные методы для популярных запросов`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$personRequests `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'your-api-token'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение персоны по ID`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$person `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск персон`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`profession`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'актер'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`age`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchPersons`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск по имени`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$actors `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Том Круз'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение актеров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$actors `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getActors`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\PersonSearchFilter`}),`: Для настройки фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Модель персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonAward`}),`: Модель награды персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto`}),`: Ответ с персонами`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\PersonAwardDocsResponseDto`}),`: Ответ с наградами`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonbyid`,children:(0,n.jsx)(t.code,{children:`getPersonById()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персону по её уникальному идентификатору
Выполняет запрос к API для получения полной информации о персоне,
включая биографические данные, фильмографию, награды, места
рождения и смерти, и другие доступные сведения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/person/{id}`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$personId`}),` (int): Уникальный идентификатор персоны в системе Kinopoisk`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Person`}),` Объект персоны со всеми доступными данными`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или проблемах с сетью`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса (401, 403, 404)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$person `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonById`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`123`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $person`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`name; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Имя персоны`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $person`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`profession; `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Профессия`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getactors`,children:(0,n.jsx)(t.code,{children:`getActors()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает список актёров
Удобный метод для получения списка персон с профессией "актёр".
Является обёрткой над методом getPersonsByProfession().`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (максимум 250)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (начиная с 1)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Список актёров с информацией о пагинации`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonRequests::getPersonsByProfession`}),`: () Для получения персон других профессий`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonsbyprofession`,children:(0,n.jsx)(t.code,{children:`getPersonsByProfession()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персон по профессии
Выполняет поиск персон, которые работают в указанной профессиональной области.
Поддерживает русские названия профессий из справочника Kinopoisk.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (максимум 250)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$profession`}),` (string): Профессия (актёр, режиссёр, сценарист, продюсер и т.д.)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (начиная с 1)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Персоны указанной профессии с информацией о пагинации`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonRequests::getActors`}),`: () Для получения актёров`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonRequests::getDirectors`}),`: () Для получения режиссёров`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchpersons`,children:(0,n.jsx)(t.code,{children:`searchPersons()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет поиск персон по различным критериям
Основной метод для поиска персон с поддержкой сложных фильтров.
Позволяет искать по имени, профессии, возрасту, полу, месту рождения и другим параметрам.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/person`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (PersonSearchFilter|null): Объект фильтра для поиска персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10, максимум: 250)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска с пагинацией`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getrandomperson`,children:(0,n.jsx)(t.code,{children:`getRandomPerson()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает случайную персону из базы данных API с применением случайных критериев сортировки
Метод создает случайный набор критериев сортировки, применяет их к поисковому запросу
и возвращает первую персону из результата. Если фильтры не переданы, создается
новый экземпляр PersonSearchFilter. Добавляет от 1 до (количество полей - 1)
случайных критериев сортировки для обеспечения максимальной случайности результата.
Алгоритм работы:`]}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsx)(t.li,{children:`Создает пустой фильтр, если не передан`}),`
`,(0,n.jsx)(t.li,{children:`Получает доступные поля и направления сортировки`}),`
`,(0,n.jsx)(t.li,{children:`Генерирует случайное количество критериев сортировки (1 до max-1)`}),`
`,(0,n.jsx)(t.li,{children:`Для каждого критерия выбирает случайное поле и направление`}),`
`,(0,n.jsx)(t.li,{children:`Выполняет поиск с лимитом 1 запись на 1 странице`}),`
`,(0,n.jsx)(t.li,{children:`Возвращает первую найденную персону`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (PersonSearchFilter|null): Фильтры для поиска персон. Если null, создается новый экземпляр`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Person`}),` Случайно выбранная персона из базы данных`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\Random\\RandomException`}),`: В случае ошибки генерации случайного числа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException`}),`: Если не найдено персон, соответствующих фильтрам, или при других ошибках API`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение случайной персоны без фильтров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomPerson `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение случайной персоны только среди актеров`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`onlyActors`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomActor `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение случайной персоны определенного возраста`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`age`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'gte'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`age`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`60`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'lte'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$randomAdultPerson `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getRandomPerson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonSearchFilter`}),`: Класс для настройки фильтров поиска персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SortField::getPersonFields`}),`: () Получение доступных полей для сортировки персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SortDirection::getAllDirections`}),`: () Получение всех направлений сортировки`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SortCriteria`}),`: Класс для создания критериев сортировки`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`searchpersonsbyname`,children:(0,n.jsx)(t.code,{children:`searchPersonsByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет поиск персон по имени (алиас для searchByName)`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Имя для поиска`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`searchbyname`,children:(0,n.jsx)(t.code,{children:`searchByName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Выполняет поиск персон по имени
Удобный метод для поиска персон по имени с использованием регулярных выражений.
Поддерживает поиск как по русским, так и по английским именам. Полезен для
быстрого поиска персон без сложной фильтрации.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/person/search`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string): Имя персоны для поиска (может быть русским или английским)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы результатов (начиная с 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (максимум 250)`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска с информацией о пагинации`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskDevException`}),`: При ошибках API или валидации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`KinopoiskResponseException`}),`: При ошибках HTTP-запроса`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\JsonException`}),`: При ошибках парсинга JSON-ответа`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск по русскому имени`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Том Круз'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Поиск по английскому имени`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$results `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $personRequests`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`searchByName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Tom Cruise'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.h2,{id:`getpersonsbysex`,children:(0,n.jsx)(t.code,{children:`getPersonsBySex()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персон по полу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sex`}),` (string): Пол (М, Ж)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonsbybirthyear`,children:(0,n.jsx)(t.code,{children:`getPersonsByBirthYear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персон по году рождения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int): Год рождения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonsbybirthyearrange`,children:(0,n.jsx)(t.code,{children:`getPersonsByBirthYearRange()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персон по диапазону годов рождения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$fromYear`}),` (int): Начальный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$toYear`}),` (int): Конечный год`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonsbydeathyear`,children:(0,n.jsx)(t.code,{children:`getPersonsByDeathYear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает персон по году смерти`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$year`}),` (int): Год смерти`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonDocsResponseDto`}),` Результаты поиска`]}),`
`,(0,n.jsx)(t.h2,{id:`getpersonawards`,children:(0,n.jsx)(t.code,{children:`getPersonAwards()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает награды персон с возможностью фильтрации и пагинации
Если null, создается пустой фильтр.
Поддерживает фильтрацию по возрасту, полу,
месту рождения, профессии и другим параметрам.
Значение должно быть положительным числом.
Значение не должно превышать 250.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`docs: массив объектов PersonAward с данными о наградах`}),`
`,(0,n.jsx)(t.li,{children:`total: общее количество наград в результате`}),`
`,(0,n.jsx)(t.li,{children:`limit: примененное ограничение на количество элементов`}),`
`,(0,n.jsx)(t.li,{children:`page: текущая страница`}),`
`,(0,n.jsx)(t.li,{children:`pages: общее количество страниц`}),`
`,(0,n.jsx)(t.li,{children:`Если параметр $limit превышает 250`}),`
`,(0,n.jsx)(t.li,{children:`Если параметр $page меньше 1`}),`
`,(0,n.jsx)(t.li,{children:`При ошибках HTTP-запроса к API`}),`
`,(0,n.jsx)(t.li,{children:`При ошибках парсинга ответа от API`}),`
`,(0,n.jsx)(t.li,{children:`При ошибках создания объектов PersonAward из данных API`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`API Endpoint:`}),` `,(0,n.jsx)(t.code,{children:`/v1.4/person/awards`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (PersonSearchFilter|null): Объект фильтрации для поиска наград`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы (по умолчанию: 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Количество результатов на странице (по умолчанию: 10)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filters`}),` (PersonSearchFilter|null): Фильтры для поиска наград персон.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер страницы для пагинации (начиная с 1).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество элементов на странице.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`PersonAwardDocsResponseDto`}),` Объект ответа, содержащий:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Exceptions\\KinopoiskDevException|\\KinopoiskDev\\Exceptions\\KinopoiskResponseException|\\JsonException`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Пример:`})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение первых 10 наград персон`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$awards `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonAwards`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение наград с фильтрацией по профессии`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`profession`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'актер'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$awards `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonAwards`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Получение наград живых персон с ограничением по возрасту`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` new`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` PersonSearchFilter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$filter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`onlyAlive`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`age`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'gte'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$awards `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $kinopoisk`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPersonAwards`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($filter, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`50`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Filter\\PersonSearchFilter`}),`: Для параметров фильтрации`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\PersonAward`}),`: Для структуры данных наград персон`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\PersonAwardDocsResponseDto`}),`: Для структуры ответа`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};