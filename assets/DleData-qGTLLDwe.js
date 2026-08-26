import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DleData`,description:`Документация по плагину класс: dledata для DLE.`},i=new Date(1787750944e3),a=`

## Краткое содержание: [#краткое-содержание]

Трейт \`DleData\` предоставляет методы для работы с дополнительными данными (xfields),
пользователями, группами, категориями и другими сущностями в контексте системы управления данными.

## Описание: [#описание]

Основные функции:

* Загрузка, получение и обработка дополнительных полей (xfields) для постов и пользователей.
* Управление данными пользователей, групп, категорий и их настройками.
* Интеграция с кешированием для повышения производительности.
  Преимущества:
* Использование кеша для уменьшения количества запросов к базе данных.
* Гибкость в управлении динамическими полями и других данных.
  Применения:
* Подходит для случаев, где требуется работать с различными сущностями (статьи, пользователи и т.д.) с поддержкой
  дополнительных параметров.
  Свойства:
* \`$postXfieldKeys\`: Список ключей конфигурации для дополнительных полей новостей (настраиваемых полей).
* \`$userXfieldKeys\`: Список ключей конфигурации для дополнительных полей пользователей.
  Методы:
* \`load_data\`: Универсальный метод для выполнения SQL-запросов к базе данных с поддержкой кеширования.
* \`get_used_xfields\`: Извлекает и возвращает дополнительные поля объекта (поста или пользователя).
* \`loadXfields\`: Загружает дополнительные поля из конфигурационных файлов.
* \`getXfieldInfo\`: Предоставляет информацию о конкретном поле на основе его имени.
* Другие методы позволяют управлять пользователями, группами и категориями.

***

### Свойства [#свойства]

* protected $[postXfieldKeys](#property_postXfieldKeys)
* protected $[userXfieldKeys](#property_userXfieldKeys)

***

### Методы [#методы]

* public [get\\_used\\_xfields()](#method_get_used_xfields)
* public [getCats()](#method_getCats)
* public [getUser()](#method_getUser)
* public [getUserGroups()](#method_getUserGroups)
* public [getUsers()](#method_getUsers)
* public [getXfieldInfo()](#method_getXfieldInfo)
* public [loadXfields()](#method_loadXfields)

***

### Подробности [#подробности]

* Путь: engine/inc/maharder/\\_includes/traits/DleData.php

***

## Свойства [#свойства-1]

<span id="property_postXfieldKeys" />

#### protected $postXfieldKeys : array [#protected-postxfieldkeys--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

| Ключ                   | Позиция в массиве | Описание                                                                          |
| ---------------------- | ----------------- | --------------------------------------------------------------------------------- |
| name                   | 0                 | системное имя поля                                                                |
| description            | 1                 | описание поля                                                                     |
| category               | 2                 | Разрешённые категории                                                             |
| type                   | 3                 | тип поля                                                                          |
| default                | 4                 | Значения по умолчанию                                                             |
| is\\_required           | 5                 | обязательное поле (1 или 0)                                                       |
| is\\_link               | 6                 | Перекрёстные ссылки (1 или 0)                                                     |
| use\\_editor            | 7                 | Подключать редактор при добавлении или редактировании публикаций для данного поля |
| is\\_safe               | 8                 | Безопасный режим поля (отключение BB тегов и HTML)                                |
| image\\_max\\_size       | 9                 | Максимальные размеры оригинального изображения                                    |
| image\\_max\\_file\\_size | 10                | Максимальный вес изображения                                                      |
| use\\_watermark         | 11                | Наложить водяные знаки                                                            |
| image\\_create\\_min     | 12                | Создать уменьшенную копию                                                         |
| image\\_min\\_size       | 13                | Размеры уменьшенной копии                                                         |
| file\\_ext              | 14                | Расширения файлов, допустимых к загрузке                                          |
| file\\_max\\_file\\_size  | 15                | Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)          |
| gallery\\_max\\_images   | 16                | Максимальное кол-во изображений                                                   |
| yesno\\_enabled         | 17                | Значение по умолчанию для поля да/нет                                             |
| hint                   | 18                | Подсказка                                                                         |
| groups\\_allow\\_add     | 19                | Разрешить добавление для групп                                                    |
| groups\\_allow\\_view    | 20                | Разрешить просмотр для групп                                                      |
| separator              | 21                | Разделитель                                                                       |
| image\\_min\\_file\\_size | 22                | Минимальные размеры изображения для загрузки                                      |
| datetime\\_type         | 23                | Формат заполнения                                                                 |
| datetime\\_format       | 24                | Формат вывода даты                                                                |
| datetime\\_localize     | 25                | Локализовывать дату при выводе на сайте                                           |
| datetime\\_decline      | 26                | Склонять дату при выводе на сайте                                                 |
| is\\_public             | 27                | Загружать файл как публичный                                                      |
| allow\\_template        | 28                | Разрешить вставку тега вывода данного поля в текст новостей                       |
| use\\_opengraph         | 29                | Использовать изображение в разметке Open Graph                                    |
| lazy\\_load             | 30                | Отложенная загрузка изображений                                                   |
| video\\_max\\_files      | 31                | Количество загружаемых файлов                                                     |
| video\\_max\\_file\\_size | 32                | Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)          |
| storage                | 33                | Хранилище загрузок                                                                |
| select\\_multiple       | 34                | Разрешить выбор нескольких значений                                               |
| select\\_separator      | 35                | разделитель для поля "Список"                                                     |
| min\\_chars             | 36                | Минимальное количество символов в поле                                            |
| max\\_chars             | 37                | Максимальное количество символов в поле                                           |
| image\\_max\\_size\\_side | 38                | По которой стороне определять максимальный размер оригинального изображения       |
| image\\_min\\_size\\_side | 39                | По которой стороне определять размер уменьшенной копии изображения                |

<span id="property_userXfieldKeys" />

#### protected $userXfieldKeys : array [#protected-userxfieldkeys--array]

***

**Тип:** <abbr title="array">Массив</abbr>

**Подробности:**

| Ключ               | Позиция в массиве | Описание                                           |
| ------------------ | ----------------- | -------------------------------------------------- |
| name               | 0                 | системное имя поля                                 |
| description        | 1                 | описание поля                                      |
| registration\\_page | 2                 | отображать на странице регистрации                 |
| type               | 3                 | тип поля                                           |
| allow\\_change      | 4                 | Поле может быть изменено пользователем             |
| is\\_private        | 5                 | Личное поле                                        |
| default\\_value     | 6                 | Значение по умолчанию                              |
| is\\_save           | 7                 | Безопасный режим поля (отключение BB тегов и HTML) |

***

## Методы [#методы-1]

<span id="method_get_used_xfields" />

### get\\_used\\_xfields [#get_used_xfields]

\`\`\`
public get_used_xfields(int  id, string  type = "post") : array|bool
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Возвращает массив с дополнительными полями, использованными в объекте, либо \`false\`, если данные отсутствуют.

##### Описание [#описание-1]

Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.

##### Смотри так-же: [#смотри-так-же]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Свойства: [#свойства-2]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$id**   | int    |              |
| **$type** | string | "post"       |

##### Ошибки: [#ошибки]

| Тип            | Описание                                                           |
| -------------- | ------------------------------------------------------------------ |
| \\JsonException | Исключение выбрасывается, если произошла ошибка при работе с JSON. |

##### Возвращает: [#возвращает]

\`\`\`
array|bool
\`\`\`

Возвращает массив дополнительных полей объекта в формате
ключ => значение, либо \`false\`, если данные отсутствуют.

***

<span id="method_getCats" />

### getCats [#getcats]

\`\`\`
public getCats() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.

##### Описание [#описание-2]

Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.

##### Смотри так-же: [#смотри-так-же-1]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-1]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-1]

\`\`\`
array
\`\`\`

Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.

***

<span id="method_getUser" />

### getUser [#getuser]

\`\`\`
public getUser(int|null  id = null, string|null  uname = null) : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Получает данные пользователя по ID или имени пользователя.

##### Описание [#описание-3]

Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает \`false\`.
В противном случае выполняется поиск данных в таблице \`users\` с использованием указанного критерия.

##### Смотри так-же: [#смотри-так-же-2]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Свойства: [#свойства-3]

| Название   | Тип                    | По умолчанию |
| ---------- | ---------------------- | ------------ |
| **$id**    | int    \\| null         | null         |
| **$uname** | string         \\| null | null         |

##### Ошибки: [#ошибки-2]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-2]

\`\`\`
array|false
\`\`\`

Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает \`false\`, если пользователь не найден или если критерии поиска не заданы.

***

<span id="method_getUserGroups" />

### getUserGroups [#getusergroups]

\`\`\`
public getUserGroups() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Получает список групп пользователей в формате массива с идентификаторами и именами групп.

##### Описание [#описание-4]

Метод обращается к функции \`load_data\` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей \`id\` и \`group_name\`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).

##### Смотри так-же: [#смотри-так-же-3]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-3]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-3]

\`\`\`
array
\`\`\`

Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.

***

<span id="method_getUsers" />

### getUsers [#getusers]

\`\`\`
public getUsers() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Возвращает список пользователей из базы данных.

##### Описание [#описание-5]

Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.

##### Смотри так-же: [#смотри-так-же-4]

* [\\DataLoader::load\\_data()](./DataLoader#method_load_data)

##### Ошибки: [#ошибки-4]

| Тип            | Описание |
| -------------- | -------- |
| \\JsonException |          |

##### Возвращает: [#возвращает-4]

\`\`\`
array
\`\`\`

Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user\\_id), а значения
— их имена.

***

<span id="method_getXfieldInfo" />

### getXfieldInfo [#getxfieldinfo]

\`\`\`
public getXfieldInfo(string  name, string  type = "post") : array|null
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.

##### Смотри так-же: [#смотри-так-же-5]

* [\\DleData::loadXfields()](#method_loadXfields)
* [\\CacheControl::getCache()](./CacheControl#method_getCache)

##### Свойства: [#свойства-4]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$name** | string |              |
| **$type** | string | "post"       |

##### Возвращает: [#возвращает-5]

\`\`\`
array|null
\`\`\`

Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.

***

<span id="method_loadXfields" />

### loadXfields [#loadxfields]

\`\`\`
public loadXfields(string  type = "post") : array|false
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Загружает дополнительные поля для новостей или профилей пользователей.

##### Описание [#описание-6]

Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:

* \`"post"\`: данные загружаются из файла \`xfields.txt\`.
* \`"user"\`: данные загружаются из файла \`xprofile.txt\`.
  Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
  в свойствах \`userXfieldKeys\` или \`postXfieldKeys\`.

##### Смотри так-же: [#смотри-так-же-6]

* [\\CacheControl::getCache()](./CacheControl#method_getCache)
* [\\CacheControl::setCache()](./CacheControl#method_setCache)

##### Свойства: [#свойства-5]

| Название  | Тип    | По умолчанию |
| --------- | ------ | ------------ |
| **$type** | string | "post"       |

##### Возвращает: [#возвращает-6]

\`\`\`
array|false
\`\`\`

Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает \`false\` в случае невозможности прочитать файл.
`,o={contents:[{heading:`краткое-содержание`,content:"Трейт `DleData` предоставляет методы для работы с дополнительными данными (xfields),\nпользователями, группами, категориями и другими сущностями в контексте системы управления данными."},{heading:`описание`,content:`Основные функции:`},{heading:`описание`,content:`Загрузка, получение и обработка дополнительных полей (xfields) для постов и пользователей.`},{heading:`описание`,content:`Управление данными пользователей, групп, категорий и их настройками.`},{heading:`описание`,content:`Интеграция с кешированием для повышения производительности.
Преимущества:`},{heading:`описание`,content:`Использование кеша для уменьшения количества запросов к базе данных.`},{heading:`описание`,content:`Гибкость в управлении динамическими полями и других данных.
Применения:`},{heading:`описание`,content:`Подходит для случаев, где требуется работать с различными сущностями (статьи, пользователи и т.д.) с поддержкой
дополнительных параметров.
Свойства:`},{heading:`описание`,content:"`$postXfieldKeys`: Список ключей конфигурации для дополнительных полей новостей (настраиваемых полей)."},{heading:`описание`,content:"`$userXfieldKeys`: Список ключей конфигурации для дополнительных полей пользователей.\nМетоды:"},{heading:`описание`,content:"`load_data`: Универсальный метод для выполнения SQL-запросов к базе данных с поддержкой кеширования."},{heading:`описание`,content:"`get_used_xfields`: Извлекает и возвращает дополнительные поля объекта (поста или пользователя)."},{heading:`описание`,content:"`loadXfields`: Загружает дополнительные поля из конфигурационных файлов."},{heading:`описание`,content:"`getXfieldInfo`: Предоставляет информацию о конкретном поле на основе его имени."},{heading:`описание`,content:`Другие методы позволяют управлять пользователями, группами и категориями.`},{heading:`свойства`,content:`protected $postXfieldKeys`},{heading:`свойства`,content:`protected $userXfieldKeys`},{heading:`методы`,content:`public get\\_used\\_xfields()`},{heading:`методы`,content:`public getCats()`},{heading:`методы`,content:`public getUser()`},{heading:`методы`,content:`public getUserGroups()`},{heading:`методы`,content:`public getUsers()`},{heading:`методы`,content:`public getXfieldInfo()`},{heading:`методы`,content:`public loadXfields()`},{heading:`подробности`,content:`Путь: engine/inc/maharder/\\_includes/traits/DleData.php`},{heading:`protected-postxfieldkeys--array`,content:`**Тип:** Массив`},{heading:`protected-postxfieldkeys--array`,content:`**Подробности:**`},{heading:`protected-postxfieldkeys--array`,content:`Ключ`},{heading:`protected-postxfieldkeys--array`,content:`Позиция в массиве`},{heading:`protected-postxfieldkeys--array`,content:`Описание`},{heading:`protected-postxfieldkeys--array`,content:`name`},{heading:`protected-postxfieldkeys--array`,content:`0`},{heading:`protected-postxfieldkeys--array`,content:`системное имя поля`},{heading:`protected-postxfieldkeys--array`,content:`description`},{heading:`protected-postxfieldkeys--array`,content:`1`},{heading:`protected-postxfieldkeys--array`,content:`описание поля`},{heading:`protected-postxfieldkeys--array`,content:`category`},{heading:`protected-postxfieldkeys--array`,content:`2`},{heading:`protected-postxfieldkeys--array`,content:`Разрешённые категории`},{heading:`protected-postxfieldkeys--array`,content:`type`},{heading:`protected-postxfieldkeys--array`,content:`3`},{heading:`protected-postxfieldkeys--array`,content:`тип поля`},{heading:`protected-postxfieldkeys--array`,content:`default`},{heading:`protected-postxfieldkeys--array`,content:`4`},{heading:`protected-postxfieldkeys--array`,content:`Значения по умолчанию`},{heading:`protected-postxfieldkeys--array`,content:`is\\_required`},{heading:`protected-postxfieldkeys--array`,content:`5`},{heading:`protected-postxfieldkeys--array`,content:`обязательное поле (1 или 0)`},{heading:`protected-postxfieldkeys--array`,content:`is\\_link`},{heading:`protected-postxfieldkeys--array`,content:`6`},{heading:`protected-postxfieldkeys--array`,content:`Перекрёстные ссылки (1 или 0)`},{heading:`protected-postxfieldkeys--array`,content:`use\\_editor`},{heading:`protected-postxfieldkeys--array`,content:`7`},{heading:`protected-postxfieldkeys--array`,content:`Подключать редактор при добавлении или редактировании публикаций для данного поля`},{heading:`protected-postxfieldkeys--array`,content:`is\\_safe`},{heading:`protected-postxfieldkeys--array`,content:`8`},{heading:`protected-postxfieldkeys--array`,content:`Безопасный режим поля (отключение BB тегов и HTML)`},{heading:`protected-postxfieldkeys--array`,content:`image\\_max\\_size`},{heading:`protected-postxfieldkeys--array`,content:`9`},{heading:`protected-postxfieldkeys--array`,content:`Максимальные размеры оригинального изображения`},{heading:`protected-postxfieldkeys--array`,content:`image\\_max\\_file\\_size`},{heading:`protected-postxfieldkeys--array`,content:`10`},{heading:`protected-postxfieldkeys--array`,content:`Максимальный вес изображения`},{heading:`protected-postxfieldkeys--array`,content:`use\\_watermark`},{heading:`protected-postxfieldkeys--array`,content:`11`},{heading:`protected-postxfieldkeys--array`,content:`Наложить водяные знаки`},{heading:`protected-postxfieldkeys--array`,content:`image\\_create\\_min`},{heading:`protected-postxfieldkeys--array`,content:`12`},{heading:`protected-postxfieldkeys--array`,content:`Создать уменьшенную копию`},{heading:`protected-postxfieldkeys--array`,content:`image\\_min\\_size`},{heading:`protected-postxfieldkeys--array`,content:`13`},{heading:`protected-postxfieldkeys--array`,content:`Размеры уменьшенной копии`},{heading:`protected-postxfieldkeys--array`,content:`file\\_ext`},{heading:`protected-postxfieldkeys--array`,content:`14`},{heading:`protected-postxfieldkeys--array`,content:`Расширения файлов, допустимых к загрузке`},{heading:`protected-postxfieldkeys--array`,content:`file\\_max\\_file\\_size`},{heading:`protected-postxfieldkeys--array`,content:`15`},{heading:`protected-postxfieldkeys--array`,content:`Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)`},{heading:`protected-postxfieldkeys--array`,content:`gallery\\_max\\_images`},{heading:`protected-postxfieldkeys--array`,content:`16`},{heading:`protected-postxfieldkeys--array`,content:`Максимальное кол-во изображений`},{heading:`protected-postxfieldkeys--array`,content:`yesno\\_enabled`},{heading:`protected-postxfieldkeys--array`,content:`17`},{heading:`protected-postxfieldkeys--array`,content:`Значение по умолчанию для поля да/нет`},{heading:`protected-postxfieldkeys--array`,content:`hint`},{heading:`protected-postxfieldkeys--array`,content:`18`},{heading:`protected-postxfieldkeys--array`,content:`Подсказка`},{heading:`protected-postxfieldkeys--array`,content:`groups\\_allow\\_add`},{heading:`protected-postxfieldkeys--array`,content:`19`},{heading:`protected-postxfieldkeys--array`,content:`Разрешить добавление для групп`},{heading:`protected-postxfieldkeys--array`,content:`groups\\_allow\\_view`},{heading:`protected-postxfieldkeys--array`,content:`20`},{heading:`protected-postxfieldkeys--array`,content:`Разрешить просмотр для групп`},{heading:`protected-postxfieldkeys--array`,content:`separator`},{heading:`protected-postxfieldkeys--array`,content:`21`},{heading:`protected-postxfieldkeys--array`,content:`Разделитель`},{heading:`protected-postxfieldkeys--array`,content:`image\\_min\\_file\\_size`},{heading:`protected-postxfieldkeys--array`,content:`22`},{heading:`protected-postxfieldkeys--array`,content:`Минимальные размеры изображения для загрузки`},{heading:`protected-postxfieldkeys--array`,content:`datetime\\_type`},{heading:`protected-postxfieldkeys--array`,content:`23`},{heading:`protected-postxfieldkeys--array`,content:`Формат заполнения`},{heading:`protected-postxfieldkeys--array`,content:`datetime\\_format`},{heading:`protected-postxfieldkeys--array`,content:`24`},{heading:`protected-postxfieldkeys--array`,content:`Формат вывода даты`},{heading:`protected-postxfieldkeys--array`,content:`datetime\\_localize`},{heading:`protected-postxfieldkeys--array`,content:`25`},{heading:`protected-postxfieldkeys--array`,content:`Локализовывать дату при выводе на сайте`},{heading:`protected-postxfieldkeys--array`,content:`datetime\\_decline`},{heading:`protected-postxfieldkeys--array`,content:`26`},{heading:`protected-postxfieldkeys--array`,content:`Склонять дату при выводе на сайте`},{heading:`protected-postxfieldkeys--array`,content:`is\\_public`},{heading:`protected-postxfieldkeys--array`,content:`27`},{heading:`protected-postxfieldkeys--array`,content:`Загружать файл как публичный`},{heading:`protected-postxfieldkeys--array`,content:`allow\\_template`},{heading:`protected-postxfieldkeys--array`,content:`28`},{heading:`protected-postxfieldkeys--array`,content:`Разрешить вставку тега вывода данного поля в текст новостей`},{heading:`protected-postxfieldkeys--array`,content:`use\\_opengraph`},{heading:`protected-postxfieldkeys--array`,content:`29`},{heading:`protected-postxfieldkeys--array`,content:`Использовать изображение в разметке Open Graph`},{heading:`protected-postxfieldkeys--array`,content:`lazy\\_load`},{heading:`protected-postxfieldkeys--array`,content:`30`},{heading:`protected-postxfieldkeys--array`,content:`Отложенная загрузка изображений`},{heading:`protected-postxfieldkeys--array`,content:`video\\_max\\_files`},{heading:`protected-postxfieldkeys--array`,content:`31`},{heading:`protected-postxfieldkeys--array`,content:`Количество загружаемых файлов`},{heading:`protected-postxfieldkeys--array`,content:`video\\_max\\_file\\_size`},{heading:`protected-postxfieldkeys--array`,content:`32`},{heading:`protected-postxfieldkeys--array`,content:`Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)`},{heading:`protected-postxfieldkeys--array`,content:`storage`},{heading:`protected-postxfieldkeys--array`,content:`33`},{heading:`protected-postxfieldkeys--array`,content:`Хранилище загрузок`},{heading:`protected-postxfieldkeys--array`,content:`select\\_multiple`},{heading:`protected-postxfieldkeys--array`,content:`34`},{heading:`protected-postxfieldkeys--array`,content:`Разрешить выбор нескольких значений`},{heading:`protected-postxfieldkeys--array`,content:`select\\_separator`},{heading:`protected-postxfieldkeys--array`,content:`35`},{heading:`protected-postxfieldkeys--array`,content:`разделитель для поля "Список"`},{heading:`protected-postxfieldkeys--array`,content:`min\\_chars`},{heading:`protected-postxfieldkeys--array`,content:`36`},{heading:`protected-postxfieldkeys--array`,content:`Минимальное количество символов в поле`},{heading:`protected-postxfieldkeys--array`,content:`max\\_chars`},{heading:`protected-postxfieldkeys--array`,content:`37`},{heading:`protected-postxfieldkeys--array`,content:`Максимальное количество символов в поле`},{heading:`protected-postxfieldkeys--array`,content:`image\\_max\\_size\\_side`},{heading:`protected-postxfieldkeys--array`,content:`38`},{heading:`protected-postxfieldkeys--array`,content:`По которой стороне определять максимальный размер оригинального изображения`},{heading:`protected-postxfieldkeys--array`,content:`image\\_min\\_size\\_side`},{heading:`protected-postxfieldkeys--array`,content:`39`},{heading:`protected-postxfieldkeys--array`,content:`По которой стороне определять размер уменьшенной копии изображения`},{heading:`protected-userxfieldkeys--array`,content:`**Тип:** Массив`},{heading:`protected-userxfieldkeys--array`,content:`**Подробности:**`},{heading:`protected-userxfieldkeys--array`,content:`Ключ`},{heading:`protected-userxfieldkeys--array`,content:`Позиция в массиве`},{heading:`protected-userxfieldkeys--array`,content:`Описание`},{heading:`protected-userxfieldkeys--array`,content:`name`},{heading:`protected-userxfieldkeys--array`,content:`0`},{heading:`protected-userxfieldkeys--array`,content:`системное имя поля`},{heading:`protected-userxfieldkeys--array`,content:`description`},{heading:`protected-userxfieldkeys--array`,content:`1`},{heading:`protected-userxfieldkeys--array`,content:`описание поля`},{heading:`protected-userxfieldkeys--array`,content:`registration\\_page`},{heading:`protected-userxfieldkeys--array`,content:`2`},{heading:`protected-userxfieldkeys--array`,content:`отображать на странице регистрации`},{heading:`protected-userxfieldkeys--array`,content:`type`},{heading:`protected-userxfieldkeys--array`,content:`3`},{heading:`protected-userxfieldkeys--array`,content:`тип поля`},{heading:`protected-userxfieldkeys--array`,content:`allow\\_change`},{heading:`protected-userxfieldkeys--array`,content:`4`},{heading:`protected-userxfieldkeys--array`,content:`Поле может быть изменено пользователем`},{heading:`protected-userxfieldkeys--array`,content:`is\\_private`},{heading:`protected-userxfieldkeys--array`,content:`5`},{heading:`protected-userxfieldkeys--array`,content:`Личное поле`},{heading:`protected-userxfieldkeys--array`,content:`default\\_value`},{heading:`protected-userxfieldkeys--array`,content:`6`},{heading:`protected-userxfieldkeys--array`,content:`Значение по умолчанию`},{heading:`protected-userxfieldkeys--array`,content:`is\\_save`},{heading:`protected-userxfieldkeys--array`,content:`7`},{heading:`protected-userxfieldkeys--array`,content:`Безопасный режим поля (отключение BB тегов и HTML)`},{heading:`краткое-содержание-1`,content:"Возвращает массив с дополнительными полями, использованными в объекте, либо `false`, если данные отсутствуют."},{heading:`описание-1`,content:`Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.`},{heading:`смотри-так-же`,content:`\\DataLoader::load\\_data()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$id**`},{heading:`свойства-2`,content:`int`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string`},{heading:`свойства-2`,content:`"post"`},{heading:`ошибки`,content:`Тип`},{heading:`ошибки`,content:`Описание`},{heading:`ошибки`,content:`\\JsonException`},{heading:`ошибки`,content:`Исключение выбрасывается, если произошла ошибка при работе с JSON.`},{heading:`возвращает`,content:"Возвращает массив дополнительных полей объекта в формате\nключ => значение, либо `false`, если данные отсутствуют."},{heading:`краткое-содержание-2`,content:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`},{heading:`описание-2`,content:`Метод загружает данные из базы данных, используя метод \`load_data\`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`},{heading:`смотри-так-же-1`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-1`,content:`Тип`},{heading:`ошибки-1`,content:`Описание`},{heading:`ошибки-1`,content:`\\JsonException`},{heading:`возвращает-1`,content:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`},{heading:`краткое-содержание-3`,content:`Получает данные пользователя по ID или имени пользователя.`},{heading:`описание-3`,content:"Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `false`.\nВ противном случае выполняется поиск данных в таблице `users` с использованием указанного критерия."},{heading:`смотри-так-же-2`,content:`\\DataLoader::load\\_data()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$id**`},{heading:`свойства-3`,content:`int    \\| null`},{heading:`свойства-3`,content:`null`},{heading:`свойства-3`,content:`**$uname**`},{heading:`свойства-3`,content:`string         \\| null`},{heading:`свойства-3`,content:`null`},{heading:`ошибки-2`,content:`Тип`},{heading:`ошибки-2`,content:`Описание`},{heading:`ошибки-2`,content:`\\JsonException`},{heading:`возвращает-2`,content:"Ассоциативный массив с данными о пользователе, если пользователь найден.\nВозвращает `false`, если пользователь не найден или если критерии поиска не заданы."},{heading:`краткое-содержание-4`,content:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`},{heading:`описание-4`,content:'Метод обращается к функции `load_data` для загрузки данных о группах пользователей\nиз таблицы "usergroups" с выборкой полей `id` и `group_name`,\nзатем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,\nи значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).'},{heading:`смотри-так-же-3`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-3`,content:`Тип`},{heading:`ошибки-3`,content:`Описание`},{heading:`ошибки-3`,content:`\\JsonException`},{heading:`возвращает-3`,content:`Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.`},{heading:`краткое-содержание-5`,content:`Возвращает список пользователей из базы данных.`},{heading:`описание-5`,content:`Метод загружает данные о пользователях, используя метод \`load_data\`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`},{heading:`смотри-так-же-4`,content:`\\DataLoader::load\\_data()`},{heading:`ошибки-4`,content:`Тип`},{heading:`ошибки-4`,content:`Описание`},{heading:`ошибки-4`,content:`\\JsonException`},{heading:`возвращает-4`,content:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user\\_id), а значения
— их имена.`},{heading:`краткое-содержание-6`,content:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`},{heading:`смотри-так-же-5`,content:`\\DleData::loadXfields()`},{heading:`смотри-так-же-5`,content:`\\CacheControl::getCache()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$name**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`**$type**`},{heading:`свойства-4`,content:`string`},{heading:`свойства-4`,content:`"post"`},{heading:`возвращает-5`,content:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`},{heading:`краткое-содержание-7`,content:`Загружает дополнительные поля для новостей или профилей пользователей.`},{heading:`описание-6`,content:`Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра \`$type\`:`},{heading:`описание-6`,content:'`"post"`: данные загружаются из файла `xfields.txt`.'},{heading:`описание-6`,content:'`"user"`: данные загружаются из файла `xprofile.txt`.\nКлючи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным\nв свойствах `userXfieldKeys` или `postXfieldKeys`.'},{heading:`смотри-так-же-6`,content:`\\CacheControl::getCache()`},{heading:`смотри-так-же-6`,content:`\\CacheControl::setCache()`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$type**`},{heading:`свойства-5`,content:`string`},{heading:`свойства-5`,content:`"post"`},{heading:`возвращает-6`,content:"Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его\nпараметры. Возвращает `false` в случае невозможности прочитать файл."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`protected-postxfieldkeys--array`,content:`protected $postXfieldKeys : array`},{id:`protected-userxfieldkeys--array`,content:`protected $userXfieldKeys : array`},{id:`методы-1`,content:`Методы`},{id:`get_used_xfields`,content:`get_used_xfields`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`ошибки`,content:`Ошибки:`},{id:`возвращает`,content:`Возвращает:`},{id:`getcats`,content:`getCats`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`ошибки-1`,content:`Ошибки:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getuser`,content:`getUser`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`ошибки-2`,content:`Ошибки:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getusergroups`,content:`getUserGroups`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`ошибки-3`,content:`Ошибки:`},{id:`возвращает-3`,content:`Возвращает:`},{id:`getusers`,content:`getUsers`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`ошибки-4`,content:`Ошибки:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getxfieldinfo`,content:`getXfieldInfo`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-5`,content:`Возвращает:`},{id:`loadxfields`,content:`loadXfields`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-6`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#protected-postxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $postXfieldKeys : array`})},{depth:4,url:`#protected-userxfieldkeys--array`,title:(0,n.jsx)(n.Fragment,{children:`protected $userXfieldKeys : array`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#get_used_xfields`,title:(0,n.jsx)(n.Fragment,{children:`get_used_xfields`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getcats`,title:(0,n.jsx)(n.Fragment,{children:`getCats`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-1`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getuser`,title:(0,n.jsx)(n.Fragment,{children:`getUser`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#ошибки-2`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusergroups`,title:(0,n.jsx)(n.Fragment,{children:`getUserGroups`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-3`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getusers`,title:(0,n.jsx)(n.Fragment,{children:`getUsers`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#ошибки-4`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getxfieldinfo`,title:(0,n.jsx)(n.Fragment,{children:`getXfieldInfo`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#loadxfields`,title:(0,n.jsx)(n.Fragment,{children:`loadXfields`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsxs)(t.p,{children:[`Трейт `,(0,n.jsx)(t.code,{children:`DleData`}),` предоставляет методы для работы с дополнительными данными (xfields),
пользователями, группами, категориями и другими сущностями в контексте системы управления данными.`]}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Основные функции:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Загрузка, получение и обработка дополнительных полей (xfields) для постов и пользователей.`}),`
`,(0,n.jsx)(t.li,{children:`Управление данными пользователей, групп, категорий и их настройками.`}),`
`,(0,n.jsx)(t.li,{children:`Интеграция с кешированием для повышения производительности.
Преимущества:`}),`
`,(0,n.jsx)(t.li,{children:`Использование кеша для уменьшения количества запросов к базе данных.`}),`
`,(0,n.jsx)(t.li,{children:`Гибкость в управлении динамическими полями и других данных.
Применения:`}),`
`,(0,n.jsx)(t.li,{children:`Подходит для случаев, где требуется работать с различными сущностями (статьи, пользователи и т.д.) с поддержкой
дополнительных параметров.
Свойства:`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$postXfieldKeys`}),`: Список ключей конфигурации для дополнительных полей новостей (настраиваемых полей).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$userXfieldKeys`}),`: Список ключей конфигурации для дополнительных полей пользователей.
Методы:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`load_data`}),`: Универсальный метод для выполнения SQL-запросов к базе данных с поддержкой кеширования.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`get_used_xfields`}),`: Извлекает и возвращает дополнительные поля объекта (поста или пользователя).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`loadXfields`}),`: Загружает дополнительные поля из конфигурационных файлов.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getXfieldInfo`}),`: Предоставляет информацию о конкретном поле на основе его имени.`]}),`
`,(0,n.jsx)(t.li,{children:`Другие методы позволяют управлять пользователями, группами и категориями.`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_postXfieldKeys`,children:`postXfieldKeys`})]}),`
`,(0,n.jsxs)(t.li,{children:[`protected $`,(0,n.jsx)(t.a,{href:`#property_userXfieldKeys`,children:`userXfieldKeys`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_get_used_xfields`,children:`get_used_xfields()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getCats`,children:`getCats()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUser`,children:`getUser()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUserGroups`,children:`getUserGroups()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getUsers`,children:`getUsers()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getXfieldInfo`,children:`getXfieldInfo()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_loadXfields`,children:`loadXfields()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Путь: engine/inc/maharder/_includes/traits/DleData.php`}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_postXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-postxfieldkeys--array`,children:`protected $postXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Ключ`}),(0,n.jsx)(t.th,{children:`Позиция в массиве`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`name`}),(0,n.jsx)(t.td,{children:`0`}),(0,n.jsx)(t.td,{children:`системное имя поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`description`}),(0,n.jsx)(t.td,{children:`1`}),(0,n.jsx)(t.td,{children:`описание поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`category`}),(0,n.jsx)(t.td,{children:`2`}),(0,n.jsx)(t.td,{children:`Разрешённые категории`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`type`}),(0,n.jsx)(t.td,{children:`3`}),(0,n.jsx)(t.td,{children:`тип поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`default`}),(0,n.jsx)(t.td,{children:`4`}),(0,n.jsx)(t.td,{children:`Значения по умолчанию`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_required`}),(0,n.jsx)(t.td,{children:`5`}),(0,n.jsx)(t.td,{children:`обязательное поле (1 или 0)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_link`}),(0,n.jsx)(t.td,{children:`6`}),(0,n.jsx)(t.td,{children:`Перекрёстные ссылки (1 или 0)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`use_editor`}),(0,n.jsx)(t.td,{children:`7`}),(0,n.jsx)(t.td,{children:`Подключать редактор при добавлении или редактировании публикаций для данного поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_safe`}),(0,n.jsx)(t.td,{children:`8`}),(0,n.jsx)(t.td,{children:`Безопасный режим поля (отключение BB тегов и HTML)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_max_size`}),(0,n.jsx)(t.td,{children:`9`}),(0,n.jsx)(t.td,{children:`Максимальные размеры оригинального изображения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_max_file_size`}),(0,n.jsx)(t.td,{children:`10`}),(0,n.jsx)(t.td,{children:`Максимальный вес изображения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`use_watermark`}),(0,n.jsx)(t.td,{children:`11`}),(0,n.jsx)(t.td,{children:`Наложить водяные знаки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_create_min`}),(0,n.jsx)(t.td,{children:`12`}),(0,n.jsx)(t.td,{children:`Создать уменьшенную копию`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_min_size`}),(0,n.jsx)(t.td,{children:`13`}),(0,n.jsx)(t.td,{children:`Размеры уменьшенной копии`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`file_ext`}),(0,n.jsx)(t.td,{children:`14`}),(0,n.jsx)(t.td,{children:`Расширения файлов, допустимых к загрузке`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`file_max_file_size`}),(0,n.jsx)(t.td,{children:`15`}),(0,n.jsx)(t.td,{children:`Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`gallery_max_images`}),(0,n.jsx)(t.td,{children:`16`}),(0,n.jsx)(t.td,{children:`Максимальное кол-во изображений`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`yesno_enabled`}),(0,n.jsx)(t.td,{children:`17`}),(0,n.jsx)(t.td,{children:`Значение по умолчанию для поля да/нет`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`hint`}),(0,n.jsx)(t.td,{children:`18`}),(0,n.jsx)(t.td,{children:`Подсказка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`groups_allow_add`}),(0,n.jsx)(t.td,{children:`19`}),(0,n.jsx)(t.td,{children:`Разрешить добавление для групп`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`groups_allow_view`}),(0,n.jsx)(t.td,{children:`20`}),(0,n.jsx)(t.td,{children:`Разрешить просмотр для групп`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`separator`}),(0,n.jsx)(t.td,{children:`21`}),(0,n.jsx)(t.td,{children:`Разделитель`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_min_file_size`}),(0,n.jsx)(t.td,{children:`22`}),(0,n.jsx)(t.td,{children:`Минимальные размеры изображения для загрузки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`datetime_type`}),(0,n.jsx)(t.td,{children:`23`}),(0,n.jsx)(t.td,{children:`Формат заполнения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`datetime_format`}),(0,n.jsx)(t.td,{children:`24`}),(0,n.jsx)(t.td,{children:`Формат вывода даты`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`datetime_localize`}),(0,n.jsx)(t.td,{children:`25`}),(0,n.jsx)(t.td,{children:`Локализовывать дату при выводе на сайте`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`datetime_decline`}),(0,n.jsx)(t.td,{children:`26`}),(0,n.jsx)(t.td,{children:`Склонять дату при выводе на сайте`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_public`}),(0,n.jsx)(t.td,{children:`27`}),(0,n.jsx)(t.td,{children:`Загружать файл как публичный`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`allow_template`}),(0,n.jsx)(t.td,{children:`28`}),(0,n.jsx)(t.td,{children:`Разрешить вставку тега вывода данного поля в текст новостей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`use_opengraph`}),(0,n.jsx)(t.td,{children:`29`}),(0,n.jsx)(t.td,{children:`Использовать изображение в разметке Open Graph`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`lazy_load`}),(0,n.jsx)(t.td,{children:`30`}),(0,n.jsx)(t.td,{children:`Отложенная загрузка изображений`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`video_max_files`}),(0,n.jsx)(t.td,{children:`31`}),(0,n.jsx)(t.td,{children:`Количество загружаемых файлов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`video_max_file_size`}),(0,n.jsx)(t.td,{children:`32`}),(0,n.jsx)(t.td,{children:`Максимальный размер файла допустимый к загрузке на сервер (в килобайтах)`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`storage`}),(0,n.jsx)(t.td,{children:`33`}),(0,n.jsx)(t.td,{children:`Хранилище загрузок`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`select_multiple`}),(0,n.jsx)(t.td,{children:`34`}),(0,n.jsx)(t.td,{children:`Разрешить выбор нескольких значений`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`select_separator`}),(0,n.jsx)(t.td,{children:`35`}),(0,n.jsx)(t.td,{children:`разделитель для поля "Список"`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`min_chars`}),(0,n.jsx)(t.td,{children:`36`}),(0,n.jsx)(t.td,{children:`Минимальное количество символов в поле`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`max_chars`}),(0,n.jsx)(t.td,{children:`37`}),(0,n.jsx)(t.td,{children:`Максимальное количество символов в поле`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_max_size_side`}),(0,n.jsx)(t.td,{children:`38`}),(0,n.jsx)(t.td,{children:`По которой стороне определять максимальный размер оригинального изображения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`image_min_size_side`}),(0,n.jsx)(t.td,{children:`39`}),(0,n.jsx)(t.td,{children:`По которой стороне определять размер уменьшенной копии изображения`})]})]})]}),`
`,(0,n.jsx)(`span`,{id:`property_userXfieldKeys`}),`
`,(0,n.jsx)(t.h4,{id:`protected-userxfieldkeys--array`,children:`protected $userXfieldKeys : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Подробности:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Ключ`}),(0,n.jsx)(t.th,{children:`Позиция в массиве`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`name`}),(0,n.jsx)(t.td,{children:`0`}),(0,n.jsx)(t.td,{children:`системное имя поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`description`}),(0,n.jsx)(t.td,{children:`1`}),(0,n.jsx)(t.td,{children:`описание поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`registration_page`}),(0,n.jsx)(t.td,{children:`2`}),(0,n.jsx)(t.td,{children:`отображать на странице регистрации`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`type`}),(0,n.jsx)(t.td,{children:`3`}),(0,n.jsx)(t.td,{children:`тип поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`allow_change`}),(0,n.jsx)(t.td,{children:`4`}),(0,n.jsx)(t.td,{children:`Поле может быть изменено пользователем`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_private`}),(0,n.jsx)(t.td,{children:`5`}),(0,n.jsx)(t.td,{children:`Личное поле`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`default_value`}),(0,n.jsx)(t.td,{children:`6`}),(0,n.jsx)(t.td,{children:`Значение по умолчанию`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`is_save`}),(0,n.jsx)(t.td,{children:`7`}),(0,n.jsx)(t.td,{children:`Безопасный режим поля (отключение BB тегов и HTML)`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_get_used_xfields`}),`
`,(0,n.jsx)(t.h3,{id:`get_used_xfields`,children:`get_used_xfields`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public get_used_xfields(int  id, string  type = "post") : array|bool`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив с дополнительными полями, использованными в объекте, либо `,(0,n.jsx)(t.code,{children:`false`}),`, если данные отсутствуют.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод извлекает данные из базы данных для указанного объекта (поста или пользователя)
и преобразует строку с дополнительными полями в массив с ключами и их значениями.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$id`})}),(0,n.jsx)(t.td,{children:`int`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{children:`Исключение выбрасывается, если произошла ошибка при работе с JSON.`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|bool`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает массив дополнительных полей объекта в формате
ключ => значение, либо `,(0,n.jsx)(t.code,{children:`false`}),`, если данные отсутствуют.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getCats`}),`
`,(0,n.jsx)(t.h3,{id:`getcats`,children:`getCats`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getCats() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список категорий в виде ассоциативного массива, где ключом является ID категории, а значением — её
название.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные из базы данных, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`, и сортирует их по названию категории в
алфавитном порядке. В результате возвращается массив с ID категорий в качестве ключей и названиями категорий в
качестве значений.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-1`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив категорий, где ключ — ID категории, а значение — её название.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUser`}),`
`,(0,n.jsx)(t.h3,{id:`getuser`,children:`getUser`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUser(int|null  id = null, string|null  uname = null) : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает данные пользователя по ID или имени пользователя.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если ни идентификатор пользователя, ни имя пользователя не переданы, метод возвращает `,(0,n.jsx)(t.code,{children:`false`}),`.
В противном случае выполняется поиск данных в таблице `,(0,n.jsx)(t.code,{children:`users`}),` с использованием указанного критерия.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$id`})}),(0,n.jsx)(t.td,{children:`int    | null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$uname`})}),(0,n.jsx)(t.td,{children:`string         | null`}),(0,n.jsx)(t.td,{children:`null`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-2`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативный массив с данными о пользователе, если пользователь найден.
Возвращает `,(0,n.jsx)(t.code,{children:`false`}),`, если пользователь не найден или если критерии поиска не заданы.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUserGroups`}),`
`,(0,n.jsx)(t.h3,{id:`getusergroups`,children:`getUserGroups`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUserGroups() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Получает список групп пользователей в формате массива с идентификаторами и именами групп.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод обращается к функции `,(0,n.jsx)(t.code,{children:`load_data`}),` для загрузки данных о группах пользователей
из таблицы "usergroups" с выборкой полей `,(0,n.jsx)(t.code,{children:`id`}),` и `,(0,n.jsx)(t.code,{children:`group_name`}),`,
затем преобразует результат в ассоциативный массив с ключами — идентификаторами групп,
и значениями — именами групп, отсортированными по названию группы в алфавитном порядке (ASC).`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-3`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив, где ключ — идентификатор группы, значение — имя группы.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getUsers`}),`
`,(0,n.jsx)(t.h3,{id:`getusers`,children:`getUsers`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getUsers() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает список пользователей из базы данных.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод загружает данные о пользователях, используя метод `,(0,n.jsx)(t.code,{children:`load_data`}),`,
и возвращает массив, где ключами являются идентификаторы пользователей,
а значениями — их имена, отсортированные в алфавитном порядке.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./DataLoader#method_load_data`,children:`\\DataLoader::load_data()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`ошибки-4`,children:`Ошибки:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`\\JsonException`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Ассоциативный массив пользователей, где ключи — идентификаторы пользователей (user_id), а значения
— их имена.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getXfieldInfo`}),`
`,(0,n.jsx)(t.h3,{id:`getxfieldinfo`,children:`getXfieldInfo`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getXfieldInfo(string  name, string  type = "post") : array|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о дополнительном поле (xfield) на основании его имени и типа.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_loadXfields`,children:`\\DleData::loadXfields()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает информацию о поле в виде ассоциативного массива, либо null,
если поле не найдено.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_loadXfields`}),`
`,(0,n.jsx)(t.h3,{id:`loadxfields`,children:`loadXfields`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public loadXfields(string  type = "post") : array|false`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Загружает дополнительные поля для новостей или профилей пользователей.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Метод извлекает данные из кэша, либо, при его отсутствии, читает данные из файла конфигурации.
Возвращает ассоциативный массив, где ключами являются названия дополнительных полей, а значениями - их
параметры.
Данные загружаются в зависимости от значения параметра `,(0,n.jsx)(t.code,{children:`$type`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`"post"`}),`: данные загружаются из файла `,(0,n.jsx)(t.code,{children:`xfields.txt`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`"user"`}),`: данные загружаются из файла `,(0,n.jsx)(t.code,{children:`xprofile.txt`}),`.
Ключи массива, формируемого из файла конфигурации, соответствуют предопределённым ключам, указанным
в свойствах `,(0,n.jsx)(t.code,{children:`userXfieldKeys`}),` или `,(0,n.jsx)(t.code,{children:`postXfieldKeys`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_getCache`,children:`\\CacheControl::getCache()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`./CacheControl#method_setCache`,children:`\\CacheControl::setCache()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string`}),(0,n.jsx)(t.td,{children:`"post"`})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array|false`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Ассоциативный массив дополнительных полей, где ключ - название поля, значение - его
параметры. Возвращает `,(0,n.jsx)(t.code,{children:`false`}),` в случае невозможности прочитать файл.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};