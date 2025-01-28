# Создание модуля

Структура админпанели даёт возможность добавлять бесконечное количество модулей. Для этого была создана папка `_modules` по пути `engine/inc/maharder`. Сюда загружается структура папкой и файлов нового модуля. Шаблоны, для простоты подключения, заливаются в папку `engine/inc/maharder/_templates`. 

Для простого начала рекомендую [сгенерировать модуль](../new_module.md).

## Основная структура

```
module_name/
├── assets/
    ├── .htaccess
    └── icon.jpg
├── models/
    └── DataBaseTable.php
├── module/
    ├── changelog.php
    └── main.php
└── repositories/
    └── DataBaseTableRepository.php
```

- `module_name` - название модуля на латинице без пробелов!
- В папку `assets` кладуться дополнительные стили, иконки, скрипты, которые могут быть открыты в браузере. Используется на данный момент для иконки
- В папке `models` - создаются сами модели таблиц. Каждый класс модели дополняет [BasisModel](./classes/BasisModel.md). Основы создания класса модели можно прочесть на сайте [Cycle ORM](https://cycle-orm.dev/docs/annotated-entity/current/en). Таблицы будут автоматически созданы.
- Папка `module` служит основой основ. Здесь складируются все основные файлы вывода страниц. Файл `main.php` отвечает, к примеру, за главную страницу.
- Папка `repositories` отвечает за дополнительные запросы и является необязательным дополнением. Подробнее можно прочитать на [Cycle ORM](https://cycle-orm.dev/docs/basic-repository/current/en)

## Файл страницы

```php
<?php

	$modVars = [
		'title' => __('Настройки модуля'),
	];

	$htmlTemplate = 'admin/main.html';
```

- В массив `$modVars` добавляются все переменные, что важны для вывода информации на странице.
- `$htmlTemplate` - переменная шаблона данной страницы.

<details>
    <summary>Пример страницы с пагинацией</summary>

```php
<?php

global $mh, $MHDB; // Использование глобальных переменных $mh и $MHDB для доступа к объектам системы.

use Spiral\Pagination\Paginator; // Импорт класса Paginator для работы с пагинацией.
use Cycle\Database\Injection\Parameter; // Импорт класса Parameter для безопасной передачи параметров в запросы.

// Определение ключей фильтров и их типов для обработки входных данных.
$filterKeys = ['filter_plugin' => FILTER_REQUIRE_ARRAY, 'filter_type' => FILTER_REQUIRE_ARRAY, 'filter_fn' => FILTER_REQUIRE_ARRAY];

// Получение фильтров по умолчанию для обработки GET-запросов.
$inputFilters = TwigFilter::getDefaultFilters($filterKeys);

// Фильтрация входных данных из GET-запроса с использованием заданных фильтров.
$GET_DATA = filter_input_array(INPUT_GET, $inputFilters);

// Обработка каждого фильтра для очистки данных.
foreach ($filterKeys as $key => $filter) {
    $GET_DATA[$key] = isset($_GET[$key]) ? DataManager::sanitizeArrayInput(
        $_GET[$key], // Очистка входных данных от нежелательных символов.
        [FILTER_SANITIZE_FULL_SPECIAL_CHARS]
    ) : null;
}

// Получение конфигурации для модуля Maharder.
$mh_config = DataManager::getConfig('maharder');

// Создание репозитория для работы с логами.
$repo = $MHDB->repository(MhLog::class);

// Инициализация объекта TwigFilter для работы с фильтрами.
$twigFilter = new TwigFilter($repo);

// Инициализация переменной для хранения условий WHERE в SQL-запросе.
$whereClause = null;

// Массив для хранения фильтров.
$filters = [];

// Добавление фильтров в массив, если они переданы в GET-запросе.
if ($GET_DATA['filter_plugin']) $filters[] = [
    'plugin' => ['in' => new Parameter($GET_DATA['filter_plugin'])] // Фильтр по плагину.
];
if ($GET_DATA['filter_type']) $filters[] = [
    'log_type' => ['in' => new Parameter($GET_DATA['filter_type'])] // Фильтр по типу лога.
];
if ($GET_DATA['filter_fn']) $filters[] = [
    'fn_name' => ['in' => new Parameter($GET_DATA['filter_fn'])] // Фильтр по имени функции.
];

// Если фильтры есть, добавляем их в условие WHERE.
if (count($filters)) $whereClause['@and'] = $filters;

// Формирование SQL-запроса с учетом фильтров.
$mh_logs = $repo->select()->where($whereClause);

// Получение текущей страницы из GET-запроса или установка значения по умолчанию (1).
$cur_page = $GET_DATA['page'] ?? 1;

// Вычисление общего количества страниц для пагинации.
$total_pages = (int)@ceil($mh_logs->count() / $mh_config['list_count']);

// Вычисление начальной позиции для выборки данных.
$start = isset($GET_DATA['page']) ? (((int)$cur_page - 1) * $mh_config['list_count']) : 0;

// Получение порядка сортировки из GET-запроса или установка значения по умолчанию ('time').
$order = $GET_DATA['order'] ?? 'time';

// Получение направления сортировки (ASC или DESC) из GET-запроса.
$sort = TwigFilter::getSort($GET_DATA['sort'] ?? 'DESC');

// Применение сортировки к SQL-запросу.
$mh_logs = $mh_logs->orderBy($order, $sort);

// Инициализация пагинатора с количеством элементов на странице из конфигурации.
$paginator = new Paginator($mh_config['list_count']);

// Применение пагинации к SQL-запросу.
$paginator->withPage($cur_page)->paginate($mh_logs);

// Формирование массива переменных для передачи в шаблон.
$modVars = [
    'title'       => __('mhadmin', 'Вывод логов'), // Заголовок страницы.
    'logs'        => $mh_logs->fetchAll(), // Получение всех логов.
    'total_pages' => $total_pages, // Общее количество страниц.
    'page'        => $cur_page, // Текущая страница.
    'order'       => $order, // Поле для сортировки.
    'sort'        => $sort, // Направление сортировки.
    'filters'     => array_merge( // Фильтры для отображения в интерфейсе.
        $twigFilter->createFilter('plugin', 'tags', __('mhadmin', 'Плагин')),
        $twigFilter->createFilter('type', 'tags', __('mhadmin', 'Тип'), 'log_type'),
        $twigFilter->createFilter('fn', 'tags', __('mhadmin', 'Функция'), 'fn_name'),
    )
];

// Установка хлебных крошек (навигационной цепочки) для страницы.
$mh->setBreadcrumb(new BreadCrumb($modVars['title'], THIS_SELF . '?' . http_build_query($GET_DATA)));

// Добавление хлебных крошек для текущей страницы, если это не первая страница.
if ($cur_page > 1) {
    $mh->setBreadcrumb(new BreadCrumb(__('mhadmin', 'Страница %page%', ['%page%' => $cur_page]), THIS_SELF . '?' . http_build_query($GET_DATA)));
}

// Указание шаблона для отображения страницы.
$htmlTemplate = 'admin/logs.html';
```

Краткое описание:
1. Фильтрация и обработка входных данных: Код обрабатывает GET-параметры, применяет фильтры и очищает данные.
2. Работа с базой данных: Формируется SQL-запрос с учетом фильтров и сортировки.
3. Пагинация: Реализована пагинация для отображения логов постранично.
4. Подготовка данных для шаблона: Формируется массив переменных, которые передаются в шаблон для отображения.
5. Хлебные крошки: Добавляется навигационная цепочка для удобства пользователя.
6. Шаблон: Указывается файл шаблона для отображения страницы.

</details>
