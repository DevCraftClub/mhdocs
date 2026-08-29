import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`MeiliPersonEntity`},i=new Date(1788011088e3),a=`

**Описание:** Сущность персоны для индексации в поисковой системе MeiliSearch
Этот класс представляет структуру данных персоны для индексации в поисковой системе MeiliSearch.
Содержит основную информацию о персоне, включая биографические данные, профессиональную информацию
и места рождения/смерти. Все свойства являются  для обеспечения неизменности данных.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Enums\\PersonSex\`: Enum для определения пола персоны
* \`\\KinopoiskDev\\Models\\Person\`: Основная модель персоны

## \`__construct()\` [#__construct]

**Описание:** Создает новый экземпляр сущности персоны для MeiliSearch
Конструктор инициализирует все свойства персоны значениями по умолчанию.
Все параметры являются именованными для удобства использования и поддержки
автоматической генерации объектов из массивов данных API.

**С версии:** 1.0.0

**Параметры:**

* \`$id\` (int): Уникальный идентификатор персоны в базе данных
* \`$name\` (string|null): Имя персоны на русском языке (может быть null для неизвестных персон)
* \`$enName\` (string|null): Имя персоны на английском языке (может быть null если отсутствует перевод)
* \`$photo\` (string|null): URL фотографии персоны (может быть null если фото недоступно)
* \`$sex\` (PersonSex|null): Пол персоны из enum PersonSex (может быть null если не определен)
* \`$growth\` (int|null): Рост персоны в сантиметрах (может быть null если неизвестен)
* \`$birthday\` (string|null): Дата рождения в формате ISO 8601 (может быть null если неизвестна)
* \`$death\` (string|null): Дата смерти в формате ISO 8601 (может быть null если персона жива или дата неизвестна)
* \`$age\` (int|null): Возраст персоны в годах (может быть null если невозможно вычислить)
* \`$birthPlace\` (\\KinopoiskDev\\Models\\BirthPlace\\[]): Массив мест рождения персоны (пустой массив по умолчанию)
* \`$deathPlace\` (\\KinopoiskDev\\Models\\DeathPlace\\[]): Массив мест смерти персоны (пустой массив по умолчанию)
* \`$profession\` (PersonProfession\\[]|null): Массив профессий персоны (может быть null если профессии неизвестны)

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект MeiliPersonEntity из массива данных API
Фабричный метод для создания экземпляра класса MeiliPersonEntity из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.

**Возвращает:** \`static\` Новый экземпляр класса MeiliPersonEntity

**См. также:**

* \`MeiliPersonEntity::toArray\`: () Для обратного преобразования в массив

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны

## \`getBestName()\` [#getbestname]

**Описание:** Возвращает наиболее подходящее имя персоны
Определяет и возвращает наиболее подходящее имя персоны, отдавая
предпочтение русскому имени, если оно доступно. Если русское имя
отсутствует, возвращает английское имя.

**Возвращает:** \`string|null\` Наиболее подходящее имя персоны или null, если имя не задано

## \`getPhotoUrl()\` [#getphotourl]

**Описание:** Возвращает URL фотографии персоны
Предоставляет прямой доступ к URL-адресу фотографии персоны.
Может использоваться для отображения изображения персоны в интерфейсе.

**Возвращает:** \`string|null\` URL-адрес фотографии или null, если фотография отсутствует

## \`getRoleCategory()\` [#getrolecategory]

**Описание:** Возвращает категории ролей персоны
Определяет все категории профессий персоны на основе проверки различных типов профессий.
Использует современный подход с array\\_filter для оптимизации производительности
и избежания повторяющихся if-конструкций. Метод создает карту соответствия между
значениями enum профессий и результатами методов проверки, затем фильтрует только
те профессии, которые присутствуют у данной персоны.

**С версии:** 1.0.0

**Версия:** 1.0.0

**Возвращает:** \`array<string>\` Массив строковых значений (value) enum PersonProfession для активных профессий персоны

**См. также:**

* \`PersonProfession\`: Enum с возможными категориями профессий
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isActor()\` [#isactor]

**Описание:** Проверяет, является ли персона актером
Определяет, является ли данная персона актером на основе значений в массиве профессий.
Метод выполняет строгую проверку (с использованием оператора ===) наличия строкового
значения enum PersonProfession::ACTOR в массиве profession. Возвращает true, если
среди профессий персоны найдена профессия актера.

**Возвращает:** \`bool true,\` если персона является актером, false в противном случае

**См. также:**

* \`PersonProfession::ACTOR\`: Enum значение профессии актера
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isDirector()\` [#isdirector]

**Описание:** Проверяет, является ли персона режиссером
Метод проверяет наличие профессии "режиссер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является режиссером, false в противном случае

**См. также:**

* \`PersonProfession::DIRECTOR\`: Константа для профессии режиссера
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isWriter()\` [#iswriter]

**Описание:** Проверяет, является ли персона сценаристом
Метод проверяет наличие профессии "сценарист" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::WRITER среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является сценаристом, false в противном случае

**См. также:**

* \`PersonProfession::WRITER\`: Константа для профессии сценариста
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isProducer()\` [#isproducer]

**Описание:** Проверяет, является ли персона продюсером
Метод проверяет наличие профессии "продюсер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::PRODUCER среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является продюсером, false в противном случае

**См. также:**

* \`PersonProfession::PRODUCER\`: Константа для профессии продюсера
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isComposer()\` [#iscomposer]

**Описание:** Проверяет, является ли персона композитором
Метод проверяет наличие профессии "композитор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::COMPOSER среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является композитором, false в противном случае

**См. также:**

* \`PersonProfession::COMPOSER\`: Константа для профессии композитора
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isOperator()\` [#isoperator]

**Описание:** Проверяет, является ли персона оператором
Метод проверяет наличие профессии "оператор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::OPERATOR среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является оператором, false в противном случае

**См. также:**

* \`PersonProfession::OPERATOR\`: Константа для профессии оператора
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isDesigner()\` [#isdesigner]

**Описание:** Проверяет, является ли персона художником (постановщиком)
Метод проверяет наличие профессии "художник" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DESIGN среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является художником, false в противном случае

**См. также:**

* \`PersonProfession::DESIGN\`: Константа для профессии художника
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isEditor()\` [#iseditor]

**Описание:** Проверяет, является ли персона монтажёром
Метод проверяет наличие профессии "монтажер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::EDITOR среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является монтажёром, false в противном случае

**См. также:**

* \`PersonProfession::EDITOR\`: Константа для профессии монтажёра
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isVoiceActor()\` [#isvoiceactor]

**Описание:** Проверяет, является ли персона актёром дубляжа
Метод проверяет наличие профессии "актер дубляжа" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::VOICE\\_ACTOR среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является актером дубляжа, false в противном случае

**См. также:**

* \`PersonProfession::VOICE_ACTOR\`: Константа для актёра дубляжа
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isOtherProfession\`: () Проверка других профессий персоны

## \`isOtherProfession()\` [#isotherprofession]

**Описание:** Проверяет, является ли персона иной профессии
Метод проверяет наличие профессии "другой" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.

**Возвращает:** \`bool true,\` если персона является другой профессии, false в противном случае

**См. также:**

* \`PersonProfession::DIRECTOR\`: Константа для других профессий персоны
* \`self::isActor\`: () Проверка, является ли персона актером
* \`self::isDirector\`: () Проверка, является ли персона режиссером
* \`self::isWriter\`: () Проверка, является ли персона сценаристом
* \`self::isProducer\`: () Проверка, является ли персона продюсером
* \`self::isComposer\`: () Проверка, является ли персона композитором
* \`self::isOperator\`: () Проверка, является ли персона оператором
* \`self::isDesigner\`: () Проверка, является ли персона художником
* \`self::isEditor\`: () Проверка, является ли персона монтажером
* \`self::isVoiceActor\`: () Проверка, является ли персона актером дубляжа

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект сущности персоны в массив данных
Конвертирует все свойства сущности персоны в ассоциативный массив
для сериализации, передачи в API или сохранения в хранилище данных.
Метод выполняет безопасное преобразование nullable enum значений
в их строковые представления через использование null-safe оператора.
Возвращаемый массив содержит как базовые свойства персоны (id, имена,
фото), так и дополнительные данные (профессии на русском и английском
языках, полученные через соответствующие методы).

* id: int - уникальный идентификатор персоны
* photo: string|null - URL фотографии персоны
* name: string|null - русское имя персоны
* enName: string|null - английское имя персоны
* profession: array|null - массив объектов профессий персоны
* professionRu: array - массив профессий на русском языке
* professionEn: array - массив профессий на английском языке
* sex: string|null - пол персоны (значение enum или null)
* growth: int|null - рост персоны в сантиметрах
* birthday: string|null - дата рождения в формате строки
* death: string|null - дата смерти в формате строки
* age: int|null - возраст персоны в годах
* birthPlace: array - массив мест рождения
* deathPlace: array - массив мест смерти

**С версии:** 1.0.0

**Возвращает:** \`array<string, mixed>\` Ассоциативный массив с данными персоны, содержащий ключи:

**См. также:**

* \`getBestName\`: () Для получения наиболее подходящего имени персоны
* \`getProfessionRu\`: () Для получения массива профессий на русском языке
* \`getProfessionEn\`: () Для получения массива профессий на английском языке
* \`\\KinopoiskDev\\Enums\\PersonSex\`: Enum для значений пола персоны
* \`\\KinopoiskDev\\Enums\\PersonProfession\`: Enum для значений профессий персоны

## \`getProfessionRu()\` [#getprofessionru]

**Описание:** Возвращает профессию персоны на русском языке
Предоставляет доступ к названию профессии персоны на русском языке.
Может использоваться для отображения профессии в русскоязычном интерфейсе.

**Возвращает:** \`array<string>\` Название профессии на русском языке или null, если не задано

**См. также:**

* \`Person::getProfessionEn\`: () Для получения профессии на английском языке

## \`getProfessionEn()\` [#getprofessionen]

**Описание:** Возвращает профессию персоны на английском языке
Предоставляет доступ к профессии персоны в виде enum значения.
Может использоваться для программной обработки типа профессии.

**Возвращает:** \`array<string> Enum\` значение профессии или null, если не задано

**См. также:**

* \`Person::getProfessionRu\`: () Для получения профессии на русском языке
* \`PersonProfession\`: Для списка возможных профессий
`,o={contents:[{heading:void 0,content:`**Описание:** Сущность персоны для индексации в поисковой системе MeiliSearch
Этот класс представляет структуру данных персоны для индексации в поисковой системе MeiliSearch.
Содержит основную информацию о персоне, включая биографические данные, профессиональную информацию
и места рождения/смерти. Все свойства являются  для обеспечения неизменности данных.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Enums\\PersonSex`: Enum для определения пола персоны"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Person`: Основная модель персоны"},{heading:`__construct`,content:`**Описание:** Создает новый экземпляр сущности персоны для MeiliSearch
Конструктор инициализирует все свойства персоны значениями по умолчанию.
Все параметры являются именованными для удобства использования и поддержки
автоматической генерации объектов из массивов данных API.`},{heading:`__construct`,content:`**С версии:** 1.0.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$id` (int): Уникальный идентификатор персоны в базе данных"},{heading:`__construct`,content:"`$name` (string|null): Имя персоны на русском языке (может быть null для неизвестных персон)"},{heading:`__construct`,content:"`$enName` (string|null): Имя персоны на английском языке (может быть null если отсутствует перевод)"},{heading:`__construct`,content:"`$photo` (string|null): URL фотографии персоны (может быть null если фото недоступно)"},{heading:`__construct`,content:"`$sex` (PersonSex|null): Пол персоны из enum PersonSex (может быть null если не определен)"},{heading:`__construct`,content:"`$growth` (int|null): Рост персоны в сантиметрах (может быть null если неизвестен)"},{heading:`__construct`,content:"`$birthday` (string|null): Дата рождения в формате ISO 8601 (может быть null если неизвестна)"},{heading:`__construct`,content:"`$death` (string|null): Дата смерти в формате ISO 8601 (может быть null если персона жива или дата неизвестна)"},{heading:`__construct`,content:"`$age` (int|null): Возраст персоны в годах (может быть null если невозможно вычислить)"},{heading:`__construct`,content:"`$birthPlace` (\\KinopoiskDev\\Models\\BirthPlace\\[]): Массив мест рождения персоны (пустой массив по умолчанию)"},{heading:`__construct`,content:"`$deathPlace` (\\KinopoiskDev\\Models\\DeathPlace\\[]): Массив мест смерти персоны (пустой массив по умолчанию)"},{heading:`__construct`,content:"`$profession` (PersonProfession\\[]|null): Массив профессий персоны (может быть null если профессии неизвестны)"},{heading:`fromarray`,content:`**Описание:** Создает объект MeiliPersonEntity из массива данных API
Фабричный метод для создания экземпляра класса MeiliPersonEntity из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.`},{heading:`fromarray`,content:"**Возвращает:** `static` Новый экземпляр класса MeiliPersonEntity"},{heading:`fromarray`,content:`**См. также:**`},{heading:`fromarray`,content:"`MeiliPersonEntity::toArray`: () Для обратного преобразования в массив"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"},{heading:`getbestname`,content:`**Описание:** Возвращает наиболее подходящее имя персоны
Определяет и возвращает наиболее подходящее имя персоны, отдавая
предпочтение русскому имени, если оно доступно. Если русское имя
отсутствует, возвращает английское имя.`},{heading:`getbestname`,content:"**Возвращает:** `string|null` Наиболее подходящее имя персоны или null, если имя не задано"},{heading:`getphotourl`,content:`**Описание:** Возвращает URL фотографии персоны
Предоставляет прямой доступ к URL-адресу фотографии персоны.
Может использоваться для отображения изображения персоны в интерфейсе.`},{heading:`getphotourl`,content:"**Возвращает:** `string|null` URL-адрес фотографии или null, если фотография отсутствует"},{heading:`getrolecategory`,content:`**Описание:** Возвращает категории ролей персоны
Определяет все категории профессий персоны на основе проверки различных типов профессий.
Использует современный подход с array\\_filter для оптимизации производительности
и избежания повторяющихся if-конструкций. Метод создает карту соответствия между
значениями enum профессий и результатами методов проверки, затем фильтрует только
те профессии, которые присутствуют у данной персоны.`},{heading:`getrolecategory`,content:`**С версии:** 1.0.0`},{heading:`getrolecategory`,content:`**Версия:** 1.0.0`},{heading:`getrolecategory`,content:"**Возвращает:** `array<string>` Массив строковых значений (value) enum PersonProfession для активных профессий персоны"},{heading:`getrolecategory`,content:`**См. также:**`},{heading:`getrolecategory`,content:"`PersonProfession`: Enum с возможными категориями профессий"},{heading:`getrolecategory`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`getrolecategory`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`getrolecategory`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`getrolecategory`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`getrolecategory`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`getrolecategory`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`getrolecategory`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`getrolecategory`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`getrolecategory`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`getrolecategory`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isactor`,content:`**Описание:** Проверяет, является ли персона актером
Определяет, является ли данная персона актером на основе значений в массиве профессий.
Метод выполняет строгую проверку (с использованием оператора ===) наличия строкового
значения enum PersonProfession::ACTOR в массиве profession. Возвращает true, если
среди профессий персоны найдена профессия актера.`},{heading:`isactor`,content:"**Возвращает:** `bool true,` если персона является актером, false в противном случае"},{heading:`isactor`,content:`**См. также:**`},{heading:`isactor`,content:"`PersonProfession::ACTOR`: Enum значение профессии актера"},{heading:`isactor`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isactor`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isactor`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isactor`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isactor`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isactor`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isactor`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isactor`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`isactor`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isdirector`,content:`**Описание:** Проверяет, является ли персона режиссером
Метод проверяет наличие профессии "режиссер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.`},{heading:`isdirector`,content:"**Возвращает:** `bool true,` если персона является режиссером, false в противном случае"},{heading:`isdirector`,content:`**См. также:**`},{heading:`isdirector`,content:"`PersonProfession::DIRECTOR`: Константа для профессии режиссера"},{heading:`isdirector`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isdirector`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isdirector`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isdirector`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isdirector`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isdirector`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isdirector`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isdirector`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`isdirector`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`iswriter`,content:`**Описание:** Проверяет, является ли персона сценаристом
Метод проверяет наличие профессии "сценарист" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::WRITER среди всех профессий персоны.`},{heading:`iswriter`,content:"**Возвращает:** `bool true,` если персона является сценаристом, false в противном случае"},{heading:`iswriter`,content:`**См. также:**`},{heading:`iswriter`,content:"`PersonProfession::WRITER`: Константа для профессии сценариста"},{heading:`iswriter`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`iswriter`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`iswriter`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`iswriter`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`iswriter`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`iswriter`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`iswriter`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`iswriter`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`iswriter`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isproducer`,content:`**Описание:** Проверяет, является ли персона продюсером
Метод проверяет наличие профессии "продюсер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::PRODUCER среди всех профессий персоны.`},{heading:`isproducer`,content:"**Возвращает:** `bool true,` если персона является продюсером, false в противном случае"},{heading:`isproducer`,content:`**См. также:**`},{heading:`isproducer`,content:"`PersonProfession::PRODUCER`: Константа для профессии продюсера"},{heading:`isproducer`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isproducer`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isproducer`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isproducer`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isproducer`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isproducer`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isproducer`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isproducer`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`isproducer`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`iscomposer`,content:`**Описание:** Проверяет, является ли персона композитором
Метод проверяет наличие профессии "композитор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::COMPOSER среди всех профессий персоны.`},{heading:`iscomposer`,content:"**Возвращает:** `bool true,` если персона является композитором, false в противном случае"},{heading:`iscomposer`,content:`**См. также:**`},{heading:`iscomposer`,content:"`PersonProfession::COMPOSER`: Константа для профессии композитора"},{heading:`iscomposer`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`iscomposer`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`iscomposer`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`iscomposer`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`iscomposer`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`iscomposer`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`iscomposer`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`iscomposer`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`iscomposer`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isoperator`,content:`**Описание:** Проверяет, является ли персона оператором
Метод проверяет наличие профессии "оператор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::OPERATOR среди всех профессий персоны.`},{heading:`isoperator`,content:"**Возвращает:** `bool true,` если персона является оператором, false в противном случае"},{heading:`isoperator`,content:`**См. также:**`},{heading:`isoperator`,content:"`PersonProfession::OPERATOR`: Константа для профессии оператора"},{heading:`isoperator`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isoperator`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isoperator`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isoperator`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isoperator`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isoperator`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isoperator`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isoperator`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`isoperator`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isdesigner`,content:`**Описание:** Проверяет, является ли персона художником (постановщиком)
Метод проверяет наличие профессии "художник" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DESIGN среди всех профессий персоны.`},{heading:`isdesigner`,content:"**Возвращает:** `bool true,` если персона является художником, false в противном случае"},{heading:`isdesigner`,content:`**См. также:**`},{heading:`isdesigner`,content:"`PersonProfession::DESIGN`: Константа для профессии художника"},{heading:`isdesigner`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isdesigner`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isdesigner`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isdesigner`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isdesigner`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isdesigner`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isdesigner`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isdesigner`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`isdesigner`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`iseditor`,content:`**Описание:** Проверяет, является ли персона монтажёром
Метод проверяет наличие профессии "монтажер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::EDITOR среди всех профессий персоны.`},{heading:`iseditor`,content:"**Возвращает:** `bool true,` если персона является монтажёром, false в противном случае"},{heading:`iseditor`,content:`**См. также:**`},{heading:`iseditor`,content:"`PersonProfession::EDITOR`: Константа для профессии монтажёра"},{heading:`iseditor`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`iseditor`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`iseditor`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`iseditor`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`iseditor`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`iseditor`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`iseditor`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`iseditor`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`iseditor`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isvoiceactor`,content:`**Описание:** Проверяет, является ли персона актёром дубляжа
Метод проверяет наличие профессии "актер дубляжа" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::VOICE\\_ACTOR среди всех профессий персоны.`},{heading:`isvoiceactor`,content:"**Возвращает:** `bool true,` если персона является актером дубляжа, false в противном случае"},{heading:`isvoiceactor`,content:`**См. также:**`},{heading:`isvoiceactor`,content:"`PersonProfession::VOICE_ACTOR`: Константа для актёра дубляжа"},{heading:`isvoiceactor`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isvoiceactor`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isvoiceactor`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isvoiceactor`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isvoiceactor`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isvoiceactor`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isvoiceactor`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isvoiceactor`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isvoiceactor`,content:"`self::isOtherProfession`: () Проверка других профессий персоны"},{heading:`isotherprofession`,content:`**Описание:** Проверяет, является ли персона иной профессии
Метод проверяет наличие профессии "другой" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.`},{heading:`isotherprofession`,content:"**Возвращает:** `bool true,` если персона является другой профессии, false в противном случае"},{heading:`isotherprofession`,content:`**См. также:**`},{heading:`isotherprofession`,content:"`PersonProfession::DIRECTOR`: Константа для других профессий персоны"},{heading:`isotherprofession`,content:"`self::isActor`: () Проверка, является ли персона актером"},{heading:`isotherprofession`,content:"`self::isDirector`: () Проверка, является ли персона режиссером"},{heading:`isotherprofession`,content:"`self::isWriter`: () Проверка, является ли персона сценаристом"},{heading:`isotherprofession`,content:"`self::isProducer`: () Проверка, является ли персона продюсером"},{heading:`isotherprofession`,content:"`self::isComposer`: () Проверка, является ли персона композитором"},{heading:`isotherprofession`,content:"`self::isOperator`: () Проверка, является ли персона оператором"},{heading:`isotherprofession`,content:"`self::isDesigner`: () Проверка, является ли персона художником"},{heading:`isotherprofession`,content:"`self::isEditor`: () Проверка, является ли персона монтажером"},{heading:`isotherprofession`,content:"`self::isVoiceActor`: () Проверка, является ли персона актером дубляжа"},{heading:`toarray`,content:`**Описание:** Преобразует объект сущности персоны в массив данных
Конвертирует все свойства сущности персоны в ассоциативный массив
для сериализации, передачи в API или сохранения в хранилище данных.
Метод выполняет безопасное преобразование nullable enum значений
в их строковые представления через использование null-safe оператора.
Возвращаемый массив содержит как базовые свойства персоны (id, имена,
фото), так и дополнительные данные (профессии на русском и английском
языках, полученные через соответствующие методы).`},{heading:`toarray`,content:`id: int - уникальный идентификатор персоны`},{heading:`toarray`,content:`photo: string|null - URL фотографии персоны`},{heading:`toarray`,content:`name: string|null - русское имя персоны`},{heading:`toarray`,content:`enName: string|null - английское имя персоны`},{heading:`toarray`,content:`profession: array|null - массив объектов профессий персоны`},{heading:`toarray`,content:`professionRu: array - массив профессий на русском языке`},{heading:`toarray`,content:`professionEn: array - массив профессий на английском языке`},{heading:`toarray`,content:`sex: string|null - пол персоны (значение enum или null)`},{heading:`toarray`,content:`growth: int|null - рост персоны в сантиметрах`},{heading:`toarray`,content:`birthday: string|null - дата рождения в формате строки`},{heading:`toarray`,content:`death: string|null - дата смерти в формате строки`},{heading:`toarray`,content:`age: int|null - возраст персоны в годах`},{heading:`toarray`,content:`birthPlace: array - массив мест рождения`},{heading:`toarray`,content:`deathPlace: array - массив мест смерти`},{heading:`toarray`,content:`**С версии:** 1.0.0`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Ассоциативный массив с данными персоны, содержащий ключи:"},{heading:`toarray`,content:`**См. также:**`},{heading:`toarray`,content:"`getBestName`: () Для получения наиболее подходящего имени персоны"},{heading:`toarray`,content:"`getProfessionRu`: () Для получения массива профессий на русском языке"},{heading:`toarray`,content:"`getProfessionEn`: () Для получения массива профессий на английском языке"},{heading:`toarray`,content:"`\\KinopoiskDev\\Enums\\PersonSex`: Enum для значений пола персоны"},{heading:`toarray`,content:"`\\KinopoiskDev\\Enums\\PersonProfession`: Enum для значений профессий персоны"},{heading:`getprofessionru`,content:`**Описание:** Возвращает профессию персоны на русском языке
Предоставляет доступ к названию профессии персоны на русском языке.
Может использоваться для отображения профессии в русскоязычном интерфейсе.`},{heading:`getprofessionru`,content:"**Возвращает:** `array<string>` Название профессии на русском языке или null, если не задано"},{heading:`getprofessionru`,content:`**См. также:**`},{heading:`getprofessionru`,content:"`Person::getProfessionEn`: () Для получения профессии на английском языке"},{heading:`getprofessionen`,content:`**Описание:** Возвращает профессию персоны на английском языке
Предоставляет доступ к профессии персоны в виде enum значения.
Может использоваться для программной обработки типа профессии.`},{heading:`getprofessionen`,content:"**Возвращает:** `array<string> Enum` значение профессии или null, если не задано"},{heading:`getprofessionen`,content:`**См. также:**`},{heading:`getprofessionen`,content:"`Person::getProfessionRu`: () Для получения профессии на русском языке"},{heading:`getprofessionen`,content:"`PersonProfession`: Для списка возможных профессий"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`validate`,content:"`validate()`"},{id:`getbestname`,content:"`getBestName()`"},{id:`getphotourl`,content:"`getPhotoUrl()`"},{id:`getrolecategory`,content:"`getRoleCategory()`"},{id:`isactor`,content:"`isActor()`"},{id:`isdirector`,content:"`isDirector()`"},{id:`iswriter`,content:"`isWriter()`"},{id:`isproducer`,content:"`isProducer()`"},{id:`iscomposer`,content:"`isComposer()`"},{id:`isoperator`,content:"`isOperator()`"},{id:`isdesigner`,content:"`isDesigner()`"},{id:`iseditor`,content:"`isEditor()`"},{id:`isvoiceactor`,content:"`isVoiceActor()`"},{id:`isotherprofession`,content:"`isOtherProfession()`"},{id:`toarray`,content:"`toArray()`"},{id:`getprofessionru`,content:"`getProfessionRu()`"},{id:`getprofessionen`,content:"`getProfessionEn()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})},{depth:2,url:`#getbestname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBestName()`})})},{depth:2,url:`#getphotourl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPhotoUrl()`})})},{depth:2,url:`#getrolecategory`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getRoleCategory()`})})},{depth:2,url:`#isactor`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isActor()`})})},{depth:2,url:`#isdirector`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isDirector()`})})},{depth:2,url:`#iswriter`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isWriter()`})})},{depth:2,url:`#isproducer`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isProducer()`})})},{depth:2,url:`#iscomposer`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isComposer()`})})},{depth:2,url:`#isoperator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isOperator()`})})},{depth:2,url:`#isdesigner`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isDesigner()`})})},{depth:2,url:`#iseditor`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isEditor()`})})},{depth:2,url:`#isvoiceactor`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isVoiceActor()`})})},{depth:2,url:`#isotherprofession`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isOtherProfession()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getprofessionru`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getProfessionRu()`})})},{depth:2,url:`#getprofessionen`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getProfessionEn()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сущность персоны для индексации в поисковой системе MeiliSearch
Этот класс представляет структуру данных персоны для индексации в поисковой системе MeiliSearch.
Содержит основную информацию о персоне, включая биографические данные, профессиональную информацию
и места рождения/смерти. Все свойства являются  для обеспечения неизменности данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonSex`}),`: Enum для определения пола персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Person`}),`: Основная модель персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает новый экземпляр сущности персоны для MeiliSearch
Конструктор инициализирует все свойства персоны значениями по умолчанию.
Все параметры являются именованными для удобства использования и поддержки
автоматической генерации объектов из массивов данных API.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$id`}),` (int): Уникальный идентификатор персоны в базе данных`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` (string|null): Имя персоны на русском языке (может быть null для неизвестных персон)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$enName`}),` (string|null): Имя персоны на английском языке (может быть null если отсутствует перевод)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$photo`}),` (string|null): URL фотографии персоны (может быть null если фото недоступно)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$sex`}),` (PersonSex|null): Пол персоны из enum PersonSex (может быть null если не определен)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$growth`}),` (int|null): Рост персоны в сантиметрах (может быть null если неизвестен)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$birthday`}),` (string|null): Дата рождения в формате ISO 8601 (может быть null если неизвестна)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$death`}),` (string|null): Дата смерти в формате ISO 8601 (может быть null если персона жива или дата неизвестна)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$age`}),` (int|null): Возраст персоны в годах (может быть null если невозможно вычислить)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$birthPlace`}),` (\\KinopoiskDev\\Models\\BirthPlace[]): Массив мест рождения персоны (пустой массив по умолчанию)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$deathPlace`}),` (\\KinopoiskDev\\Models\\DeathPlace[]): Массив мест смерти персоны (пустой массив по умолчанию)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$profession`}),` (PersonProfession[]|null): Массив профессий персоны (может быть null если профессии неизвестны)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект MeiliPersonEntity из массива данных API
Фабричный метод для создания экземпляра класса MeiliPersonEntity из массива данных,
полученных от API Kinopoisk.dev. Безопасно обрабатывает отсутствующие
значения, устанавливая их в null или пустые массивы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Новый экземпляр класса MeiliPersonEntity`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`MeiliPersonEntity::toArray`}),`: () Для обратного преобразования в массив`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]}),`
`,(0,n.jsx)(t.h2,{id:`getbestname`,children:(0,n.jsx)(t.code,{children:`getBestName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает наиболее подходящее имя персоны
Определяет и возвращает наиболее подходящее имя персоны, отдавая
предпочтение русскому имени, если оно доступно. Если русское имя
отсутствует, возвращает английское имя.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Наиболее подходящее имя персоны или null, если имя не задано`]}),`
`,(0,n.jsx)(t.h2,{id:`getphotourl`,children:(0,n.jsx)(t.code,{children:`getPhotoUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает URL фотографии персоны
Предоставляет прямой доступ к URL-адресу фотографии персоны.
Может использоваться для отображения изображения персоны в интерфейсе.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` URL-адрес фотографии или null, если фотография отсутствует`]}),`
`,(0,n.jsx)(t.h2,{id:`getrolecategory`,children:(0,n.jsx)(t.code,{children:`getRoleCategory()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает категории ролей персоны
Определяет все категории профессий персоны на основе проверки различных типов профессий.
Использует современный подход с array_filter для оптимизации производительности
и избежания повторяющихся if-конструкций. Метод создает карту соответствия между
значениями enum профессий и результатами методов проверки, затем фильтрует только
те профессии, которые присутствуют у данной персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string>`}),` Массив строковых значений (value) enum PersonProfession для активных профессий персоны`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession`}),`: Enum с возможными категориями профессий`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isactor`,children:(0,n.jsx)(t.code,{children:`isActor()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона актером
Определяет, является ли данная персона актером на основе значений в массиве профессий.
Метод выполняет строгую проверку (с использованием оператора ===) наличия строкового
значения enum PersonProfession::ACTOR в массиве profession. Возвращает true, если
среди профессий персоны найдена профессия актера.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является актером, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::ACTOR`}),`: Enum значение профессии актера`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isdirector`,children:(0,n.jsx)(t.code,{children:`isDirector()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона режиссером
Метод проверяет наличие профессии "режиссер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является режиссером, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::DIRECTOR`}),`: Константа для профессии режиссера`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`iswriter`,children:(0,n.jsx)(t.code,{children:`isWriter()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона сценаристом
Метод проверяет наличие профессии "сценарист" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::WRITER среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является сценаристом, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::WRITER`}),`: Константа для профессии сценариста`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isproducer`,children:(0,n.jsx)(t.code,{children:`isProducer()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона продюсером
Метод проверяет наличие профессии "продюсер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::PRODUCER среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является продюсером, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::PRODUCER`}),`: Константа для профессии продюсера`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`iscomposer`,children:(0,n.jsx)(t.code,{children:`isComposer()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона композитором
Метод проверяет наличие профессии "композитор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::COMPOSER среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является композитором, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::COMPOSER`}),`: Константа для профессии композитора`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isoperator`,children:(0,n.jsx)(t.code,{children:`isOperator()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона оператором
Метод проверяет наличие профессии "оператор" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::OPERATOR среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является оператором, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::OPERATOR`}),`: Константа для профессии оператора`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isdesigner`,children:(0,n.jsx)(t.code,{children:`isDesigner()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона художником (постановщиком)
Метод проверяет наличие профессии "художник" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DESIGN среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является художником, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::DESIGN`}),`: Константа для профессии художника`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`iseditor`,children:(0,n.jsx)(t.code,{children:`isEditor()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона монтажёром
Метод проверяет наличие профессии "монтажер" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::EDITOR среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является монтажёром, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::EDITOR`}),`: Константа для профессии монтажёра`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isvoiceactor`,children:(0,n.jsx)(t.code,{children:`isVoiceActor()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона актёром дубляжа
Метод проверяет наличие профессии "актер дубляжа" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::VOICE_ACTOR среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является актером дубляжа, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::VOICE_ACTOR`}),`: Константа для актёра дубляжа`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOtherProfession`}),`: () Проверка других профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isotherprofession`,children:(0,n.jsx)(t.code,{children:`isOtherProfession()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли персона иной профессии
Метод проверяет наличие профессии "другой" в массиве профессий персоны.
Использует строгое сравнение для точного соответствия значения enum
PersonProfession::DIRECTOR среди всех профессий персоны.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true,`}),` если персона является другой профессии, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession::DIRECTOR`}),`: Константа для других профессий персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isActor`}),`: () Проверка, является ли персона актером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDirector`}),`: () Проверка, является ли персона режиссером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isWriter`}),`: () Проверка, является ли персона сценаристом`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isProducer`}),`: () Проверка, является ли персона продюсером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isComposer`}),`: () Проверка, является ли персона композитором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isOperator`}),`: () Проверка, является ли персона оператором`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isDesigner`}),`: () Проверка, является ли персона художником`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isEditor`}),`: () Проверка, является ли персона монтажером`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`self::isVoiceActor`}),`: () Проверка, является ли персона актером дубляжа`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект сущности персоны в массив данных
Конвертирует все свойства сущности персоны в ассоциативный массив
для сериализации, передачи в API или сохранения в хранилище данных.
Метод выполняет безопасное преобразование nullable enum значений
в их строковые представления через использование null-safe оператора.
Возвращаемый массив содержит как базовые свойства персоны (id, имена,
фото), так и дополнительные данные (профессии на русском и английском
языках, полученные через соответствующие методы).`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`id: int - уникальный идентификатор персоны`}),`
`,(0,n.jsx)(t.li,{children:`photo: string|null - URL фотографии персоны`}),`
`,(0,n.jsx)(t.li,{children:`name: string|null - русское имя персоны`}),`
`,(0,n.jsx)(t.li,{children:`enName: string|null - английское имя персоны`}),`
`,(0,n.jsx)(t.li,{children:`profession: array|null - массив объектов профессий персоны`}),`
`,(0,n.jsx)(t.li,{children:`professionRu: array - массив профессий на русском языке`}),`
`,(0,n.jsx)(t.li,{children:`professionEn: array - массив профессий на английском языке`}),`
`,(0,n.jsx)(t.li,{children:`sex: string|null - пол персоны (значение enum или null)`}),`
`,(0,n.jsx)(t.li,{children:`growth: int|null - рост персоны в сантиметрах`}),`
`,(0,n.jsx)(t.li,{children:`birthday: string|null - дата рождения в формате строки`}),`
`,(0,n.jsx)(t.li,{children:`death: string|null - дата смерти в формате строки`}),`
`,(0,n.jsx)(t.li,{children:`age: int|null - возраст персоны в годах`}),`
`,(0,n.jsx)(t.li,{children:`birthPlace: array - массив мест рождения`}),`
`,(0,n.jsx)(t.li,{children:`deathPlace: array - массив мест смерти`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Ассоциативный массив с данными персоны, содержащий ключи:`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getBestName`}),`: () Для получения наиболее подходящего имени персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getProfessionRu`}),`: () Для получения массива профессий на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getProfessionEn`}),`: () Для получения массива профессий на английском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonSex`}),`: Enum для значений пола персоны`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Enums\\PersonProfession`}),`: Enum для значений профессий персоны`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getprofessionru`,children:(0,n.jsx)(t.code,{children:`getProfessionRu()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает профессию персоны на русском языке
Предоставляет доступ к названию профессии персоны на русском языке.
Может использоваться для отображения профессии в русскоязычном интерфейсе.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string>`}),` Название профессии на русском языке или null, если не задано`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::getProfessionEn`}),`: () Для получения профессии на английском языке`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getprofessionen`,children:(0,n.jsx)(t.code,{children:`getProfessionEn()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает профессию персоны на английском языке
Предоставляет доступ к профессии персоны в виде enum значения.
Может использоваться для программной обработки типа профессии.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string> Enum`}),` значение профессии или null, если не задано`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Person::getProfessionRu`}),`: () Для получения профессии на русском языке`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`PersonProfession`}),`: Для списка возможных профессий`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};