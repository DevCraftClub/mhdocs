import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Image`},i=new Date(1787145028e3),a=`

**Описание:** Класс для представления изображений фильмов
Представляет изображение фильма, включая постеры, фоны, логотипы и другие
визуальные элементы. Содержит URL-адреса изображений в полном размере
и их уменьшенные версии для предварительного просмотра, а также
информацию о размерах и разрешении. Предоставляет методы для анализа
соотношения сторон и категории качества изображения.

**С версии:** 1.0.0

**Версия:** 1.0.0

**См. также:**

* \`\\KinopoiskDev\\Models\\ShortImage\`: Для упрощенной модели изображений
* \`\\KinopoiskDev\\Models\\Logo\`: Для логотипов

## \`__construct()\` [#__construct]

**Описание:** Конструктор модели изображения

**Параметры:**

* \`$url\` (string|null): URL полноразмерного изображения (null если недоступно)
* \`$previewUrl\` (string|null): URL превью изображения (null если недоступно)
* \`$height\` (int|null): Высота изображения в пикселях (null если неизвестна)
* \`$width\` (int|null): Ширина изображения в пикселях (null если неизвестна)

## \`__toString()\` [#__tostring]

**Описание:** Строковое представление изображения
Магический метод для получения строкового представления объекта.
Возвращает описательную информацию об изображении, включая размеры
и категорию разрешения. Если изображение недоступно, возвращает
соответствующее сообщение.
или изображение недоступно

**Возвращает:** \`string\` Строковое описание изображения в формате "WIDTHxHEIGHT - CATEGORY"

## \`exists()\` [#exists]

**Описание:** Проверяет, доступно ли изображение
Определяет, доступно ли изображение, проверяя наличие хотя бы одного
из URL-адресов (полноразмерного или превью).

**Возвращает:** \`bool true\` если изображение доступно, false в противном случае

## \`getFormattedDimensions()\` [#getformatteddimensions]

**Описание:** Возвращает размеры изображения в виде строки
Если размеры неизвестны, возвращает null.

**Возвращает:** \`string|null\` Строка размеров в формате "1920x1080" или null если размеры неизвестны

## \`getResolutionCategory()\` [#getresolutioncategory]

**Описание:** Возвращает категорию разрешения изображения
Определяет категорию разрешения на основе размеров изображения.
Если размеры неизвестны, возвращает null.

**Возвращает:** \`string|null\` Категория разрешения ('4K', 'Full HD', 'HD', 'SD', 'Low') или null если размеры неизвестны

## \`fromArray()\` [#fromarray]

**Описание:** Создает объект Image из массива данных API
Фабричный метод для создания экземпляра класса Image из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null.
Автоматически преобразует строковые значения размеров в целые числа.

* url: string|null - URL полноразмерного изображения
* previewUrl: string|null - URL превью изображения
* height: int|string|null - высота изображения
* width: int|string|null - ширина изображения

**Возвращает:** \`\\KinopoiskDev\\Models\\Image\` Новый экземпляр класса Image с данными из массива

## \`toArray()\` [#toarray]

**Описание:** Преобразует объект в массив
Конвертирует текущий экземпляр класса Image в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или экспорте в JSON.

* url: string|null - URL полноразмерного изображения
* previewUrl: string|null - URL превью изображения
* height: int|null - высота изображения
* width: int|null - ширина изображения

**Возвращает:** \`array<string, mixed>\` Массив с данными изображения, содержащий ключи:

## \`getBestUrl()\` [#getbesturl]

**Описание:** Возвращает лучший доступный URL изображения
Приоритет: полноразмерное изображение > превью

**Возвращает:** \`string|null URL\` наилучшего доступного изображения или null если изображения недоступны

## \`getDimensions()\` [#getdimensions]

**Описание:** Возвращает размеры изображения в виде массива
Если размеры неизвестны, возвращает null.

**Возвращает:** \`array<string, int>|null\` Массив размеров с ключами 'width' и 'height' или null если размеры неизвестны

## \`isPortrait()\` [#isportrait]

**Описание:** Проверяет, является ли изображение портретным
Определяет ориентацию изображения на основе соотношения сторон.
Портретным считается изображение с соотношением сторон меньше 1.

**Возвращает:** \`bool|null true\` если изображение портретное, false если альбомное или квадратное, null если размеры неизвестны

## \`getAspectRatio()\` [#getaspectratio]

**Описание:** Возвращает соотношение сторон изображения

**Возвращает:** \`float|null\` Соотношение сторон (ширина/высота) или null если размеры неизвестны или высота равна 0

## \`isLandscape()\` [#islandscape]

**Описание:** Проверяет, является ли изображение альбомным
Определяет ориентацию изображения на основе соотношения сторон.
Альбомным считается изображение с соотношением сторон больше 1.

**Возвращает:** \`bool|null true\` если изображение альбомное, false если портретное или квадратное, null если размеры неизвестны

## \`isSquare()\` [#issquare]

**Описание:** Проверяет, является ли изображение квадратным
Определяет, является ли изображение квадратным, сравнивая соотношение сторон
с 1 с допуском 0.01 для учета погрешностей вычислений.

**Возвращает:** \`bool|null true\` если изображение квадратное, false в противном случае, null если размеры неизвестны

## \`validate()\` [#validate]

**Описание:** Валидирует данные модели

**Возвращает:** \`bool True\` если данные валидны
`,o={contents:[{heading:void 0,content:`**Описание:** Класс для представления изображений фильмов
Представляет изображение фильма, включая постеры, фоны, логотипы и другие
визуальные элементы. Содержит URL-адреса изображений в полном размере
и их уменьшенные версии для предварительного просмотра, а также
информацию о размерах и разрешении. Предоставляет методы для анализа
соотношения сторон и категории качества изображения.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:"`\\KinopoiskDev\\Models\\ShortImage`: Для упрощенной модели изображений"},{heading:void 0,content:"`\\KinopoiskDev\\Models\\Logo`: Для логотипов"},{heading:`__construct`,content:`**Описание:** Конструктор модели изображения`},{heading:`__construct`,content:`**Параметры:**`},{heading:`__construct`,content:"`$url` (string|null): URL полноразмерного изображения (null если недоступно)"},{heading:`__construct`,content:"`$previewUrl` (string|null): URL превью изображения (null если недоступно)"},{heading:`__construct`,content:"`$height` (int|null): Высота изображения в пикселях (null если неизвестна)"},{heading:`__construct`,content:"`$width` (int|null): Ширина изображения в пикселях (null если неизвестна)"},{heading:`__tostring`,content:`**Описание:** Строковое представление изображения
Магический метод для получения строкового представления объекта.
Возвращает описательную информацию об изображении, включая размеры
и категорию разрешения. Если изображение недоступно, возвращает
соответствующее сообщение.
или изображение недоступно`},{heading:`__tostring`,content:'**Возвращает:** `string` Строковое описание изображения в формате "WIDTHxHEIGHT - CATEGORY"'},{heading:`exists`,content:`**Описание:** Проверяет, доступно ли изображение
Определяет, доступно ли изображение, проверяя наличие хотя бы одного
из URL-адресов (полноразмерного или превью).`},{heading:`exists`,content:"**Возвращает:** `bool true` если изображение доступно, false в противном случае"},{heading:`getformatteddimensions`,content:`**Описание:** Возвращает размеры изображения в виде строки
Если размеры неизвестны, возвращает null.`},{heading:`getformatteddimensions`,content:'**Возвращает:** `string|null` Строка размеров в формате "1920x1080" или null если размеры неизвестны'},{heading:`getresolutioncategory`,content:`**Описание:** Возвращает категорию разрешения изображения
Определяет категорию разрешения на основе размеров изображения.
Если размеры неизвестны, возвращает null.`},{heading:`getresolutioncategory`,content:"**Возвращает:** `string|null` Категория разрешения ('4K', 'Full HD', 'HD', 'SD', 'Low') или null если размеры неизвестны"},{heading:`fromarray`,content:`**Описание:** Создает объект Image из массива данных API
Фабричный метод для создания экземпляра класса Image из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null.
Автоматически преобразует строковые значения размеров в целые числа.`},{heading:`fromarray`,content:`url: string|null - URL полноразмерного изображения`},{heading:`fromarray`,content:`previewUrl: string|null - URL превью изображения`},{heading:`fromarray`,content:`height: int|string|null - высота изображения`},{heading:`fromarray`,content:`width: int|string|null - ширина изображения`},{heading:`fromarray`,content:"**Возвращает:** `\\KinopoiskDev\\Models\\Image` Новый экземпляр класса Image с данными из массива"},{heading:`toarray`,content:`**Описание:** Преобразует объект в массив
Конвертирует текущий экземпляр класса Image в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или экспорте в JSON.`},{heading:`toarray`,content:`url: string|null - URL полноразмерного изображения`},{heading:`toarray`,content:`previewUrl: string|null - URL превью изображения`},{heading:`toarray`,content:`height: int|null - высота изображения`},{heading:`toarray`,content:`width: int|null - ширина изображения`},{heading:`toarray`,content:"**Возвращает:** `array<string, mixed>` Массив с данными изображения, содержащий ключи:"},{heading:`getbesturl`,content:`**Описание:** Возвращает лучший доступный URL изображения
Приоритет: полноразмерное изображение > превью`},{heading:`getbesturl`,content:"**Возвращает:** `string|null URL` наилучшего доступного изображения или null если изображения недоступны"},{heading:`getdimensions`,content:`**Описание:** Возвращает размеры изображения в виде массива
Если размеры неизвестны, возвращает null.`},{heading:`getdimensions`,content:"**Возвращает:** `array<string, int>|null` Массив размеров с ключами 'width' и 'height' или null если размеры неизвестны"},{heading:`isportrait`,content:`**Описание:** Проверяет, является ли изображение портретным
Определяет ориентацию изображения на основе соотношения сторон.
Портретным считается изображение с соотношением сторон меньше 1.`},{heading:`isportrait`,content:"**Возвращает:** `bool|null true` если изображение портретное, false если альбомное или квадратное, null если размеры неизвестны"},{heading:`getaspectratio`,content:`**Описание:** Возвращает соотношение сторон изображения`},{heading:`getaspectratio`,content:"**Возвращает:** `float|null` Соотношение сторон (ширина/высота) или null если размеры неизвестны или высота равна 0"},{heading:`islandscape`,content:`**Описание:** Проверяет, является ли изображение альбомным
Определяет ориентацию изображения на основе соотношения сторон.
Альбомным считается изображение с соотношением сторон больше 1.`},{heading:`islandscape`,content:"**Возвращает:** `bool|null true` если изображение альбомное, false если портретное или квадратное, null если размеры неизвестны"},{heading:`issquare`,content:`**Описание:** Проверяет, является ли изображение квадратным
Определяет, является ли изображение квадратным, сравнивая соотношение сторон
с 1 с допуском 0.01 для учета погрешностей вычислений.`},{heading:`issquare`,content:"**Возвращает:** `bool|null true` если изображение квадратное, false в противном случае, null если размеры неизвестны"},{heading:`validate`,content:`**Описание:** Валидирует данные модели`},{heading:`validate`,content:"**Возвращает:** `bool True` если данные валидны"}],headings:[{id:`__construct`,content:"`__construct()`"},{id:`__tostring`,content:"`__toString()`"},{id:`exists`,content:"`exists()`"},{id:`getformatteddimensions`,content:"`getFormattedDimensions()`"},{id:`getresolutioncategory`,content:"`getResolutionCategory()`"},{id:`fromarray`,content:"`fromArray()`"},{id:`toarray`,content:"`toArray()`"},{id:`getbesturl`,content:"`getBestUrl()`"},{id:`getdimensions`,content:"`getDimensions()`"},{id:`isportrait`,content:"`isPortrait()`"},{id:`getaspectratio`,content:"`getAspectRatio()`"},{id:`islandscape`,content:"`isLandscape()`"},{id:`issquare`,content:"`isSquare()`"},{id:`validate`,content:"`validate()`"}]},s=[{depth:2,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct()`})})},{depth:2,url:`#__tostring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__toString()`})})},{depth:2,url:`#exists`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`exists()`})})},{depth:2,url:`#getformatteddimensions`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getFormattedDimensions()`})})},{depth:2,url:`#getresolutioncategory`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getResolutionCategory()`})})},{depth:2,url:`#fromarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromArray()`})})},{depth:2,url:`#toarray`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray()`})})},{depth:2,url:`#getbesturl`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getBestUrl()`})})},{depth:2,url:`#getdimensions`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDimensions()`})})},{depth:2,url:`#isportrait`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isPortrait()`})})},{depth:2,url:`#getaspectratio`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAspectRatio()`})})},{depth:2,url:`#islandscape`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isLandscape()`})})},{depth:2,url:`#issquare`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isSquare()`})})},{depth:2,url:`#validate`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`validate()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Класс для представления изображений фильмов
Представляет изображение фильма, включая постеры, фоны, логотипы и другие
визуальные элементы. Содержит URL-адреса изображений в полном размере
и их уменьшенные версии для предварительного просмотра, а также
информацию о размерах и разрешении. Предоставляет методы для анализа
соотношения сторон и категории качества изображения.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\ShortImage`}),`: Для упрощенной модели изображений`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Logo`}),`: Для логотипов`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__construct`,children:(0,n.jsx)(t.code,{children:`__construct()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Конструктор модели изображения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$url`}),` (string|null): URL полноразмерного изображения (null если недоступно)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$previewUrl`}),` (string|null): URL превью изображения (null если недоступно)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$height`}),` (int|null): Высота изображения в пикселях (null если неизвестна)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$width`}),` (int|null): Ширина изображения в пикселях (null если неизвестна)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`__tostring`,children:(0,n.jsx)(t.code,{children:`__toString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Строковое представление изображения
Магический метод для получения строкового представления объекта.
Возвращает описательную информацию об изображении, включая размеры
и категорию разрешения. Если изображение недоступно, возвращает
соответствующее сообщение.
или изображение недоступно`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Строковое описание изображения в формате "WIDTHxHEIGHT - CATEGORY"`]}),`
`,(0,n.jsx)(t.h2,{id:`exists`,children:(0,n.jsx)(t.code,{children:`exists()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, доступно ли изображение
Определяет, доступно ли изображение, проверяя наличие хотя бы одного
из URL-адресов (полноразмерного или превью).`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool true`}),` если изображение доступно, false в противном случае`]}),`
`,(0,n.jsx)(t.h2,{id:`getformatteddimensions`,children:(0,n.jsx)(t.code,{children:`getFormattedDimensions()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает размеры изображения в виде строки
Если размеры неизвестны, возвращает null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Строка размеров в формате "1920x1080" или null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`getresolutioncategory`,children:(0,n.jsx)(t.code,{children:`getResolutionCategory()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает категорию разрешения изображения
Определяет категорию разрешения на основе размеров изображения.
Если размеры неизвестны, возвращает null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` Категория разрешения ('4K', 'Full HD', 'HD', 'SD', 'Low') или null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`fromarray`,children:(0,n.jsx)(t.code,{children:`fromArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Создает объект Image из массива данных API
Фабричный метод для создания экземпляра класса Image из массива
данных, полученных от API Kinopoisk.dev. Безопасно обрабатывает
отсутствующие значения, устанавливая их в null.
Автоматически преобразует строковые значения размеров в целые числа.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`url: string|null - URL полноразмерного изображения`}),`
`,(0,n.jsx)(t.li,{children:`previewUrl: string|null - URL превью изображения`}),`
`,(0,n.jsx)(t.li,{children:`height: int|string|null - высота изображения`}),`
`,(0,n.jsx)(t.li,{children:`width: int|string|null - ширина изображения`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`\\KinopoiskDev\\Models\\Image`}),` Новый экземпляр класса Image с данными из массива`]}),`
`,(0,n.jsx)(t.h2,{id:`toarray`,children:(0,n.jsx)(t.code,{children:`toArray()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Преобразует объект в массив
Конвертирует текущий экземпляр класса Image в массив,
совместимый с форматом API Kinopoisk.dev. Используется для
сериализации данных при отправке запросов к API или экспорте в JSON.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`url: string|null - URL полноразмерного изображения`}),`
`,(0,n.jsx)(t.li,{children:`previewUrl: string|null - URL превью изображения`}),`
`,(0,n.jsx)(t.li,{children:`height: int|null - высота изображения`}),`
`,(0,n.jsx)(t.li,{children:`width: int|null - ширина изображения`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Массив с данными изображения, содержащий ключи:`]}),`
`,(0,n.jsx)(t.h2,{id:`getbesturl`,children:(0,n.jsx)(t.code,{children:`getBestUrl()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает лучший доступный URL изображения
Приоритет: полноразмерное изображение > превью`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null URL`}),` наилучшего доступного изображения или null если изображения недоступны`]}),`
`,(0,n.jsx)(t.h2,{id:`getdimensions`,children:(0,n.jsx)(t.code,{children:`getDimensions()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает размеры изображения в виде массива
Если размеры неизвестны, возвращает null.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, int>|null`}),` Массив размеров с ключами 'width' и 'height' или null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`isportrait`,children:(0,n.jsx)(t.code,{children:`isPortrait()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли изображение портретным
Определяет ориентацию изображения на основе соотношения сторон.
Портретным считается изображение с соотношением сторон меньше 1.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool|null true`}),` если изображение портретное, false если альбомное или квадратное, null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`getaspectratio`,children:(0,n.jsx)(t.code,{children:`getAspectRatio()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Возвращает соотношение сторон изображения`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`float|null`}),` Соотношение сторон (ширина/высота) или null если размеры неизвестны или высота равна 0`]}),`
`,(0,n.jsx)(t.h2,{id:`islandscape`,children:(0,n.jsx)(t.code,{children:`isLandscape()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли изображение альбомным
Определяет ориентацию изображения на основе соотношения сторон.
Альбомным считается изображение с соотношением сторон больше 1.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool|null true`}),` если изображение альбомное, false если портретное или квадратное, null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`issquare`,children:(0,n.jsx)(t.code,{children:`isSquare()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли изображение квадратным
Определяет, является ли изображение квадратным, сравнивая соотношение сторон
с 1 с допуском 0.01 для учета погрешностей вычислений.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool|null true`}),` если изображение квадратное, false в противном случае, null если размеры неизвестны`]}),`
`,(0,n.jsx)(t.h2,{id:`validate`,children:(0,n.jsx)(t.code,{children:`validate()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Валидирует данные модели`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если данные валидны`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};