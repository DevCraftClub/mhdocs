import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`BaseDocsResponseDto`},i=new Date(1787145028e3),a=`

**Описание:** Базовый класс для всех DTO ответов с пагинацией документов
Предоставляет общую функциональность для пагинированных ответов API,
включая навигацию по страницам и получение элементов коллекции.
Этот абстрактный класс расширяет BaseResponseDto и добавляет
специфичные для пагинации методы.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto\`:
* \`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto\`:
* \`\\KinopoiskDev\\Responses\\BaseResponseDto\`:

## \`__construct()\` [#__construct]

**Описание:** Конструктор для создания DTO пагинированного ответа
Инициализирует все необходимые параметры пагинации со значениями по умолчанию.
Все свойства являются  для обеспечения неизменности данных.

**С версии:** 1.0.0

**Параметры:**

* \`$total\` (int): Общее количество доступных документов в коллекции
* \`$limit\` (int): Максимальное количество документов на одной странице
* \`$page\` (int): Номер текущей страницы (начинается с 1)
* \`$pages\` (int): Общее количество страниц в коллекции

## \`getNextPage()\` [#getnextpage]

**Описание:** Возвращает номер следующей страницы
Вычисляет номер следующей страницы на основе текущей позиции.
Возвращает null, если текущая страница является последней.

**С версии:** 1.0.0

**Возвращает:** \`int|null\` Номер следующей страницы или null если следующей страницы нет

**См. также:**

* \`hasNextPage\`: () Для проверки существования следующей страницы

## \`hasNextPage()\` [#hasnextpage]

**Описание:** Проверяет наличие следующей страницы
Определяет, есть ли еще страницы после текущей на основе
сравнения номера текущей страницы с общим количеством страниц.

**С версии:** 1.0.0

**Возвращает:** \`bool true\` если есть следующая страница, false в противном случае

**См. также:**

* \`getNextPage\`: () Для получения номера следующей страницы

## \`getPreviousPage()\` [#getpreviouspage]

**Описание:** Возвращает номер предыдущей страницы
Вычисляет номер предыдущей страницы на основе текущей позиции.
Возвращает null, если текущая страница является первой.

**С версии:** 1.0.0

**Возвращает:** \`int|null\` Номер предыдущей страницы или null если предыдущей страницы нет

**См. также:**

* \`hasPreviousPage\`: () Для проверки существования предыдущей страницы

## \`hasPreviousPage()\` [#haspreviouspage]

**Описание:** Проверяет наличие предыдущей страницы
Определяет, есть ли страницы перед текущей на основе
сравнения номера текущей страницы с единицей.

**С версии:** 1.0.0

**Возвращает:** \`bool true\` если есть предыдущая страница, false в противном случае

**См. также:**

* \`getPreviousPage\`: () Для получения номера предыдущей страницы

## \`getFirst()\` [#getfirst]

**Описание:** Возвращает первый элемент коллекции
Получает первый документ из массива docs текущей страницы.
Возвращает null, если коллекция пуста.

**С версии:** 1.0.0

**Возвращает:** \`mixed\` Первый документ или null если коллекция пуста

**См. также:**

* \`getLast\`: () Для получения последнего элемента
* \`isEmpty\`: () Для проверки пустоты коллекции

## \`getLast()\` [#getlast]

**Описание:** Возвращает последний элемент коллекции
Получает последний документ из массива docs текущей страницы.
Создает копию массива для избежания изменения  свойства.
Возвращает null, если коллекция пуста.

**С версии:** 1.0.0

**Возвращает:** \`mixed\` Последний документ или null если коллекция пуста

**См. также:**

* \`getFirst\`: () Для получения первого элемента
* \`isEmpty\`: () Для проверки пустоты коллекции

## \`isEmpty()\` [#isempty]

**Описание:** Проверяет пустоту коллекции результатов
Определяет, содержит ли текущая страница какие-либо документы.

**С версии:** 1.0.0

**Возвращает:** \`bool true\` если коллекция пуста, false в противном случае

**См. также:**

* \`getCurrentPageCount\`: () Для получения точного количества элементов

## \`getCurrentPageCount()\` [#getcurrentpagecount]

**Описание:** Возвращает количество результатов на текущей странице
Подсчитывает фактическое количество документов в массиве docs
для текущей страницы.

**С версии:** 1.0.0

**Возвращает:** \`int\` Количество документов на текущей странице

**См. также:**

* \`isEmpty\`: () Для проверки пустоты коллекции

## \`fromArray()\` [#fromarray]

**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.

Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Базовый метод, который должен быть переопределен
в дочерних классах для правильной обработки типизированных документов.

**Возвращает:** \`static\` Экземпляр конкретного DTO класса

## \`toArray()\` [#toarray]

**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.

Конвертирует объект в массив для сериализации
Преобразует все свойства пагинации в ассоциативный массив,
подходящий для JSON-сериализации или передачи в API.

**С версии:** 1.0.0

**Возвращает:** \`array\` Ассоциативный массив со всеми данными пагинации
`,o={contents:[{heading:void 0,content:`**Описание:** Базовый класс для всех DTO ответов с пагинацией документов
Предоставляет общую функциональность для пагинированных ответов API,
включая навигацию по страницам и получение элементов коллекции.
Этот абстрактный класс расширяет BaseResponseDto и добавляет
специфичные для пагинации методы.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto`:"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto`:"},{heading:void 0,content:"`\\KinopoiskDev\\Responses\\BaseResponseDto`:"},{heading:`__construct`,content:`**Описание:** Конструктор для создания DTO пагинированного ответа
Инициализирует все необходимые параметры пагинации со значениями по умолчанию.
Все свойства являются  для обеспечения неизменности данных.`},{heading:`__construct`,content:`**С версии:** 1.0.0`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$total` (int): Общее количество доступных документов в коллекции"},{heading:`__construct`,content:"`$limit` (int): Максимальное количество документов на одной странице"},{heading:`__construct`,content:"`$page` (int): Номер текущей страницы (начинается с 1)"},{heading:`__construct`,content:"`$pages` (int): Общее количество страниц в коллекции"},{heading:`getnextpage`,content:`**Описание:** Возвращает номер следующей страницы
Вычисляет номер следующей страницы на основе текущей позиции.
Возвращает null, если текущая страница является последней.`},{heading:`getnextpage`,content:`**С версии:** 1.0.0`},{heading:`getnextpage`,content:"**Возвращает:** `int|null` Номер следующей страницы или null если следующей страницы нет"},{heading:`getnextpage`,content:`**См. также:**`},{heading:`getnextpage`,content:"`hasNextPage`: () Для проверки существования следующей страницы"},{heading:`hasnextpage`,content:`**Описание:** Проверяет наличие следующей страницы
Определяет, есть ли еще страницы после текущей на основе
сравнения номера текущей страницы с общим количеством страниц.`},{heading:`hasnextpage`,content:`**С версии:** 1.0.0`},{heading:`hasnextpage`,content:"**Возвращает:** `bool true` если есть следующая страница, false в противном случае"},{heading:`hasnextpage`,content:`**См. также:**`},{heading:`hasnextpage`,content:"`getNextPage`: () Для получения номера следующей страницы"},{heading:`getpreviouspage`,content:`**Описание:** Возвращает номер предыдущей страницы
Вычисляет номер предыдущей страницы на основе текущей позиции.
Возвращает null, если текущая страница является первой.`},{heading:`getpreviouspage`,content:`**С версии:** 1.0.0`},{heading:`getpreviouspage`,content:"**Возвращает:** `int|null` Номер предыдущей страницы или null если предыдущей страницы нет"},{heading:`getpreviouspage`,content:`**См. также:**`},{heading:`getpreviouspage`,content:"`hasPreviousPage`: () Для проверки существования предыдущей страницы"},{heading:`haspreviouspage`,content:`**Описание:** Проверяет наличие предыдущей страницы
Определяет, есть ли страницы перед текущей на основе
сравнения номера текущей страницы с единицей.`},{heading:`haspreviouspage`,content:`**С версии:** 1.0.0`},{heading:`haspreviouspage`,content:"**Возвращает:** `bool true` если есть предыдущая страница, false в противном случае"},{heading:`haspreviouspage`,content:`**См. также:**`},{heading:`haspreviouspage`,content:"`getPreviousPage`: () Для получения номера предыдущей страницы"},{heading:`getfirst`,content:`**Описание:** Возвращает первый элемент коллекции
Получает первый документ из массива docs текущей страницы.
Возвращает null, если коллекция пуста.`},{heading:`getfirst`,content:`**С версии:** 1.0.0`},{heading:`getfirst`,content:"**Возвращает:** `mixed` Первый документ или null если коллекция пуста"},{heading:`getfirst`,content:`**См. также:**`},{heading:`getfirst`,content:"`getLast`: () Для получения последнего элемента"},{heading:`getfirst`,content:"`isEmpty`: () Для проверки пустоты коллекции"},{heading:`getlast`,content:`**Описание:** Возвращает последний элемент коллекции
Получает последний документ из массива docs текущей страницы.
Создает копию массива для избежания изменения  свойства.
Возвращает null, если коллекция пуста.`},{heading:`getlast`,content:`**С версии:** 1.0.0`},{heading:`getlast`,content:"**Возвращает:** `mixed` Последний документ или null если коллекция пуста"},{heading:`getlast`,content:`**См. также:**`},{heading:`getlast`,content:"`getFirst`: () Для получения первого элемента"},{heading:`getlast`,content:"`isEmpty`: () Для проверки пустоты коллекции"},{heading:`isempty`,content:`**Описание:** Проверяет пустоту коллекции результатов
Определяет, содержит ли текущая страница какие-либо документы.`},{heading:`isempty`,content:`**С версии:** 1.0.0`},{heading:`isempty`,content:"**Возвращает:** `bool true` если коллекция пуста, false в противном случае"},{heading:`isempty`,content:`**См. также:**`},{heading:`isempty`,content:"`getCurrentPageCount`: () Для получения точного количества элементов"},{heading:`getcurrentpagecount`,content:`**Описание:** Возвращает количество результатов на текущей странице
Подсчитывает фактическое количество документов в массиве docs
для текущей страницы.`},{heading:`getcurrentpagecount`,content:`**С версии:** 1.0.0`},{heading:`getcurrentpagecount`,content:"**Возвращает:** `int` Количество документов на текущей странице"},{heading:`getcurrentpagecount`,content:`**См. также:**`},{heading:`getcurrentpagecount`,content:"`isEmpty`: () Для проверки пустоты коллекции"},{heading:`fromarray`,content:`**Описание:** Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`},{heading:`fromarray`,content:`Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Базовый метод, который должен быть переопределен
в дочерних классах для правильной обработки типизированных документов.`},{heading:`fromarray`,content:"**Возвращает:** `static` Экземпляр конкретного DTO класса"},{heading:`toarray`,content:`**Описание:** Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`},{heading:`toarray`,content:`Конвертирует объект в массив для сериализации
Преобразует все свойства пагинации в ассоциативный массив,
подходящий для JSON-сериализации или передачи в API.`},{heading:`toarray`,content:`**С версии:** 1.0.0`},{heading:`toarray`,content:"**Возвращает:** `array` Ассоциативный массив со всеми данными пагинации"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`getnextpage`,content:"`getNextPage()`"},{id:`hasnextpage`,content:"`hasNextPage()`"},{id:`getpreviouspage`,content:"`getPreviousPage()`"},{id:`haspreviouspage`,content:"`hasPreviousPage()`"},{id:`getfirst`,content:"`getFirst()`"},{id:`getlast`,content:"`getLast()`"},{id:`isempty`,content:"`isEmpty()`"},{id:`getcurrentpagecount`,content:"`getCurrentPageCount()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#getnextpage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getNextPage()`})})},{depth:2,url:`#hasnextpage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasNextPage()`})})},{depth:2,url:`#getpreviouspage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getPreviousPage()`})})},{depth:2,url:`#haspreviouspage`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hasPreviousPage()`})})},{depth:2,url:`#getfirst`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFirst()`})})},{depth:2,url:`#getlast`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getLast()`})})},{depth:2,url:`#isempty`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isEmpty()`})})},{depth:2,url:`#getcurrentpagecount`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getCurrentPageCount()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Базовый класс для всех DTO ответов с пагинацией документов
Предоставляет общую функциональность для пагинированных ответов API,
включая навигацию по страницам и получение элементов коллекции.
Этот абстрактный класс расширяет BaseResponseDto и добавляет
специфичные для пагинации методы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\MovieDocsResponseDto`}),`:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\Api\\PersonDocsResponseDto`}),`:`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Responses\\BaseResponseDto`}),`:`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор для создания DTO пагинированного ответа
Инициализирует все необходимые параметры пагинации со значениями по умолчанию.
Все свойства являются  для обеспечения неизменности данных.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$total`}),` (int): Общее количество доступных документов в коллекции`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$limit`}),` (int): Максимальное количество документов на одной странице`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$page`}),` (int): Номер текущей страницы (начинается с 1)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$pages`}),` (int): Общее количество страниц в коллекции`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getnextpage`,children:(0,n.jsx)(t.code,{children:`getNextPage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает номер следующей страницы
Вычисляет номер следующей страницы на основе текущей позиции.
Возвращает null, если текущая страница является последней.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int|null`}),` Номер следующей страницы или null если следующей страницы нет`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`hasNextPage`}),`: () Для проверки существования следующей страницы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`hasnextpage`,children:(0,n.jsx)(t.code,{children:`hasNextPage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие следующей страницы
Определяет, есть ли еще страницы после текущей на основе
сравнения номера текущей страницы с общим количеством страниц.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если есть следующая страница, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getNextPage`}),`: () Для получения номера следующей страницы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getpreviouspage`,children:(0,n.jsx)(t.code,{children:`getPreviousPage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает номер предыдущей страницы
Вычисляет номер предыдущей страницы на основе текущей позиции.
Возвращает null, если текущая страница является первой.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int|null`}),` Номер предыдущей страницы или null если предыдущей страницы нет`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`hasPreviousPage`}),`: () Для проверки существования предыдущей страницы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`haspreviouspage`,children:(0,n.jsx)(t.code,{children:`hasPreviousPage()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие предыдущей страницы
Определяет, есть ли страницы перед текущей на основе
сравнения номера текущей страницы с единицей.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если есть предыдущая страница, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getPreviousPage`}),`: () Для получения номера предыдущей страницы`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getfirst`,children:(0,n.jsx)(t.code,{children:`getFirst()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает первый элемент коллекции
Получает первый документ из массива docs текущей страницы.
Возвращает null, если коллекция пуста.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` Первый документ или null если коллекция пуста`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getLast`}),`: () Для получения последнего элемента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`isEmpty`}),`: () Для проверки пустоты коллекции`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getlast`,children:(0,n.jsx)(t.code,{children:`getLast()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает последний элемент коллекции
Получает последний документ из массива docs текущей страницы.
Создает копию массива для избежания изменения  свойства.
Возвращает null, если коллекция пуста.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed`}),` Последний документ или null если коллекция пуста`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getFirst`}),`: () Для получения первого элемента`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`isEmpty`}),`: () Для проверки пустоты коллекции`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`isempty`,children:(0,n.jsx)(t.code,{children:`isEmpty()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет пустоту коллекции результатов
Определяет, содержит ли текущая страница какие-либо документы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если коллекция пуста, false в противном случае`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`getCurrentPageCount`}),`: () Для получения точного количества элементов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`getcurrentpagecount`,children:(0,n.jsx)(t.code,{children:`getCurrentPageCount()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает количество результатов на текущей странице
Подсчитывает фактическое количество документов в массиве docs
для текущей страницы.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` Количество документов на текущей странице`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`isEmpty`}),`: () Для проверки пустоты коллекции`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Каждый дочерний класс должен реализовать
этот метод в соответствии со своей структурой данных.`]}),`
`,(0,n.jsx)(t.p,{children:`Создает экземпляр DTO из массива данных
Фабричный метод для создания объекта DTO из ассоциативного массива,
полученного из API ответа. Базовый метод, который должен быть переопределен
в дочерних классах для правильной обработки типизированных документов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`static`}),` Экземпляр конкретного DTO класса`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует DTO в ассоциативный массив
Метод для сериализации объекта DTO в массив, пригодный для
передачи в JSON или другие форматы. Структура массива должна
соответствовать формату API ответа.`]}),`
`,(0,n.jsx)(t.p,{children:`Конвертирует объект в массив для сериализации
Преобразует все свойства пагинации в ассоциативный массив,
подходящий для JSON-сериализации или передачи в API.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`}),` Ассоциативный массив со всеми данными пагинации`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};