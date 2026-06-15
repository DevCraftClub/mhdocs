---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Содержание классов для разработки в Back-End - DevCraft Admin"
description: "Обзор API DevCraft Admin: константы, функции и классы."
keywords: "PHP, DLE, Плагин, Админка, API, DevCraft, документация"
author: "Maxim Harder"
og:title: "Содержание Back-End"
og:description: "Обзор API DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Содержание классов для разработки в Back-End

## Константы `DEVCRAFT_*`

Регистрируются в `Paths::register()` (`devcraft/src/classes/Config/Paths.php`):

[](){#constant_DEVCRAFT_ROOT}
### DEVCRAFT_ROOT
Корень каталога плагина: `ROOT_DIR . '/devcraft'`.

[](){#constant_DEVCRAFT_SRC}
### DEVCRAFT_SRC
Исходный код: `DEVCRAFT_ROOT . '/src'`.

[](){#constant_DEVCRAFT_TEMPLATES}
### DEVCRAFT_TEMPLATES
Twig-шаблоны: `DEVCRAFT_SRC . '/templates'`.

[](){#constant_DEVCRAFT_LOCALES}
### DEVCRAFT_LOCALES
Файлы локализации: `DEVCRAFT_ROOT . '/locales'`.

[](){#constant_DEVCRAFT_CONFIG}
### DEVCRAFT_CONFIG
Конфигурация JSON: `DEVCRAFT_ROOT . '/config'`.

[](){#constant_DEVCRAFT_MODULES}
### DEVCRAFT_MODULES
Модули: `DEVCRAFT_SRC . '/modules'`.

[](){#constant_DEVCRAFT_CLASSES}
### DEVCRAFT_CLASSES
Классы ядра: `DEVCRAFT_SRC . '/classes'`.

[](){#constant_DEVCRAFT_LOGS}
### DEVCRAFT_LOGS
Журналы: `DEVCRAFT_ROOT . '/logs'`.

[](){#constant_DEVCRAFT_CACHE}
### DEVCRAFT_CACHE
Файловый кеш: `DEVCRAFT_ROOT . '/cache'`.

Дополнительно при bootstrap определяется `DEVCRAFT_BOOTSTRAPPED` в `devcraft/init.php`.

## Глобальные функции

Файл: `devcraft/src/bootstrap/functions.php`.

[](){#method___}
### __
Синоним `translate()` для краткой записи переводимых строк в PHP и схемах форм.

[](){#method_translate}
### translate
Переводит фразу через `Translation` с поддержкой параметров и множественного числа.

[](){#method_dirToArray}
### dirToArray
Строит дерево каталога; делегирует `DataManager::dirToArray()`.

[](){#method_br2nl}
### br2nl
Заменяет HTML-теги `<br>` на разделитель строк.

## Классы, интерфейсы и перечисления

| Название | Краткое содержание |
|----------|-------------------|
| [AjaxHandlerInterface](./classes/AjaxHandlerInterface.md) | Контракт обработчика AJAX-запроса модуля DevCraft. |
| [FilterableRepositoryInterface](./classes/FilterableRepositoryInterface.md) | Контракт репозитория с метаданными для построения фильтров админки. |
| [PageInterface](./classes/PageInterface.md) | Контракт обработчика административной страницы модуля. |
| [ResponseInterface](./classes/ResponseInterface.md) | Контракт HTTP-ответа, отправляемого клиенту. |
| [SettingsPageInterface](./classes/SettingsPageInterface.md) | Контракт страницы настроек модуля с дополнительными данными формы. |
| [AbstractEntity](./classes/AbstractEntity.md) | Базовая ORM-сущность с аудитом создания и изменения записи. |
| [AbstractPage](./classes/AbstractPage.md) | Базовый класс административной страницы с доступом к Twig и контексту админки. |
| [AbstractRepository](./classes/AbstractRepository.md) | Базовый Cycle ORM-репозиторий с фильтрацией, пагинацией и метаданными колонок. |
| [AbstractType](./classes/AbstractType.md) | Базовый тип данных с сериализацией в массив и обратно. |
| [AdminContext](./classes/AdminContext.md) | Контекст административной панели для текущего запроса модуля. |
| [AdminErrorRenderer](./classes/AdminErrorRenderer.md) | Рендерит страницы ошибок админки через Twig. |
| [AdminLink](./classes/AdminLink.md) | Элемент навигационного меню административной панели. |
| [AdminLinkResolver](./classes/AdminLinkResolver.md) | Разрешает действия и классы страниц по дереву пунктов меню. |
| [AjaxController](./classes/AjaxController.md) | Диспетчер AJAX-запросов DevCraft. |
| [AjaxRequest](./classes/AjaxRequest.md) | DTO входящего AJAX-запроса DevCraft. |
| [AjaxRouteRegistry](./classes/AjaxRouteRegistry.md) | Реестр AJAX-маршрутов controller/method → обработчик. |
| [Application](./classes/Application.md) | Главный контейнер приложения DevCraft (Singleton). |
| [AssetsCheckerService](./classes/AssetsCheckerService.md) | Сканирует и синхронизирует публичные ассеты с удалённым манифестом. |
| [Author](./classes/Author.md) | Данные автора модуля для блока информации в админке. |
| [BreadCrumb](./classes/BreadCrumb.md) | Элемент навигационной цепочки «хлебных крошек». |
| [CacheControl](./classes/CacheControl.md) | Файловый кэш DevCraft. |
| [Changelog](./classes/Changelog.md) | Запись версии в журнале изменений модуля. |
| [ChangelogChange](./classes/ChangelogChange.md) | Одна запись изменения в журнале версий. |
| [ChangelogPage](./classes/ChangelogPage.md) | Страница истории изменений модуля DevCraft Admin. |
| [CheckAssetsHandler](./classes/CheckAssetsHandler.md) | AJAX: сравнение локальных и удалённых ресурсов. |
| [CheckUpdateHandler](./classes/CheckUpdateHandler.md) | AJAX: проверка обновлений на devcraft.club. |
| [ContextLogger](./classes/ContextLogger.md) | Контекстный логгер с привязкой к модулю. |
| [DashboardPage](./classes/DashboardPage.md) | Главная страница модуля DevCraft Admin. |
| [DataLoaderService](./classes/DataLoaderService.md) | Загрузка данных DLE с кешированием. |
| [DataManager](./classes/DataManager.md) | Файлы, JSON-конфигурация, санитизация ввода DLE. |
| [DatabaseGateway](./classes/DatabaseGateway.md) | Шлюз Cycle ORM. |
| [DeleteLogHandler](./classes/DeleteLogHandler.md) | AJAX: удаление записи журнала. |
| [DevCraftConfig](./classes/DevCraftConfig.md) | Доступ к настройкам плагина с учётом схемы. |
| [DevCraftException](./classes/DevCraftException.md) | Базовое исключение DevCraft. |
| [DleDataService](./classes/DleDataService.md) | Справочные данные DLE (пользователи, категории, xfields). |
| [DleMenuBuilder](./classes/DleMenuBuilder.md) | Меню «Страницы DLE». |
| [EntityPathResolver](./classes/EntityPathResolver.md) | Пути к моделям и миграциям. |
| [EnvironmentFactory](./classes/EnvironmentFactory.md) | Фабрика Twig Environment. |
| [FilterFormService](./classes/FilterFormService.md) | Фильтрация списковых страниц админки. |
| [FilterSchema](./classes/FilterSchema.md) | Декларативная схема фильтра. |
| [FormField](./classes/FormField.md) | Описание поля формы. |
| [FormFieldBuilder](./classes/FormFieldBuilder.md) | Fluent-строитель поля формы. |
| [FormSchema](./classes/FormSchema.md) | Полная схема формы. |
| [FormSchemaBuilder](./classes/FormSchemaBuilder.md) | Fluent-строитель схемы формы. |
| [FormSection](./classes/FormSection.md) | Секция формы. |
| [FormSectionBuilder](./classes/FormSectionBuilder.md) | Fluent-строитель секции. |
| [JsonResponse](./classes/JsonResponse.md) | JSON-ответ AJAX. |
| [LanguageData](./classes/LanguageData.md) | Метаданные языка локализации. |
| [LogGenerator](./classes/LogGenerator.md) | Генератор логов: файлы, Telegram, БД. |
| [LogRecord](./classes/LogRecord.md) | Сущность записи журнала DevCraft в таблице `devcraft_logs`. |
| [LogRecordRepository](./classes/LogRecordRepository.md) | Репозиторий `devcraft_logs`. |
| [LogsPage](./classes/LogsPage.md) | Страница журнала событий. |
| [LogsTableHandler](./classes/LogsTableHandler.md) | AJAX: таблица журнала. |
| [MenuComposer](./classes/MenuComposer.md) | Объединение меню DLE и manifest. |
| [ModuleData](./classes/ModuleData.md) | Метаданные зарегистрированного модуля. |
| [ModuleGeneratorInput](./classes/ModuleGeneratorInput.md) | DTO формы генератора модулей. |
| [ModuleGeneratorService](./classes/ModuleGeneratorService.md) | Генерация каркаса нового модуля. |
| [NewModuleHandler](./classes/NewModuleHandler.md) | AJAX: генерация модуля. |
| [NewModulePage](./classes/NewModulePage.md) | Страница генератора модулей. |
| [PageOrchestrator](./classes/PageOrchestrator.md) | Переменные Twig для настроек и changelog. |
| [Paths](./classes/Paths.md) | Пути и URL DevCraft. |
| [PluginContext](./classes/PluginContext.md) | Контекст модуля после загрузки manifest. |
| [Registry](./classes/Registry.md) | Реестр модулей DevCraft. |
| [Router](./classes/Router.md) | Маршрутизатор админ-запросов. |
| [SaveAssetHandler](./classes/SaveAssetHandler.md) | AJAX: загрузка одного ресурса. |
| [SettingsFormService](./classes/SettingsFormService.md) | View-model формы настроек. |
| [SettingsHandler](./classes/SettingsHandler.md) | AJAX: сохранение настроек. |
| [SettingsPage](./classes/SettingsPage.md) | Страница настроек. |
| [SyncAssetsHandler](./classes/SyncAssetsHandler.md) | AJAX: массовая синхронизация ресурсов. |
| [Translation](./classes/Translation.md) | Фасад локализации (XLIFF, Symfony). |
| [TwigTranslatorBridge](./classes/TwigTranslatorBridge.md) | Мост Symfony Translation для Twig. |
| [AdminErrorKind](./classes/AdminErrorKind.md) | Классификация ошибок админки. |
| [ChangelogChangeType](./classes/ChangelogChangeType.md) | Тип записи changelog. |
| [FormLayout](./classes/FormLayout.md) | Раскладка формы (вкладки и т.д.). |
