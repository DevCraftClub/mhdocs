---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: AdminContext - DevCraft Admin"
description: "Документация по плагину класс: admincontext для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: admincontext, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: AdminContext"
og:description: "Документация по плагину класс: admincontext для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: AdminContext"
twitter:description: "Документация по плагину класс: admincontext для DLE."
---

# Класс: AdminContext

## Краткое содержание:

Контекст административной панели для текущего запроса модуля.

---

### Свойства
* public $[dashboardName](#property_dashboardName)
* public $[licenseAgreementLink](#property_licenseAgreementLink)

---

### Методы
* public [__construct()](#method___construct)
* public [forPlugin()](#method_forPlugin)
* public [setCurrentAction()](#method_setCurrentAction)
* public [currentAction()](#method_currentAction)
* public [menu()](#method_menu)
* public [breadcrumbs()](#method_breadcrumbs)
* public [author()](#method_author)
* public [url()](#method_url)
* public [licLink()](#method_licLink)
* public [addBreadcrumb()](#method_addBreadcrumb)
* public [finalizeBreadcrumbs()](#method_finalizeBreadcrumbs)
* public [addCss()](#method_addCss)
* public [addJs()](#method_addJs)
* public [cssUrls()](#method_cssUrls)
* public [jsUrls()](#method_jsUrls)
* public [toArray()](#method_toArray)
* private [resolveSiteUrl()](#method_resolveSiteUrl)
* private [baseCssUrls()](#method_baseCssUrls)
* private [baseJsUrls()](#method_baseJsUrls)

---

### Подробности

* Путь: `devcraft/src/classes/Admin/AdminContext.php`

---

## Детали

### Свойства

[](){#property_dashboardName}
#### $dashboardName

Контекст административной панели для текущего запроса модуля.


[](){#property_licenseAgreementLink}
#### $licenseAgreementLink

Ссылка на пользовательское соглашение между автором и пользователем. По умолчанию: https://devcraft.club/pages/licence-agreement/


### Методы

[](){#method___construct}
### __construct()

Создаёт контекст админки для указанного модуля.

**С версии:** 200.4.0

**Параметры:**
- `$plugin` — Контекст модуля.

[](){#method_forPlugin}
### forPlugin()

Фабричный метод создания контекста для модуля.

**С версии:** 200.4.0

**Параметры:**
- `$plugin` — Контекст модуля.

**Возвращает:** `self` — Новый экземпляр контекста.

[](){#method_setCurrentAction}
### setCurrentAction()

Устанавливает текущее действие админки.

**С версии:** 200.4.0

**Параметры:**
- `$action` — Имя действия.

**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов.

[](){#method_currentAction}
### currentAction()

Возвращает текущее действие админки.

**С версии:** 200.4.0

**Возвращает:** `string` — Имя действия.

[](){#method_menu}
### menu()

Возвращает меню админки.

**С версии:** 200.4.0

**Возвращает:** `AdminLink[]` — Список корневых пунктов меню.

[](){#method_breadcrumbs}
### breadcrumbs()

Возвращает хлебные крошки страницы.

**С версии:** 200.4.0

**Возвращает:** `BreadCrumb[]` — Список крошек.

[](){#method_author}
### author()

Возвращает данные автора модуля.

**С версии:** 200.4.0

**Возвращает:** `Author` — Объект автора.

[](){#method_url}
### url()

Возвращает базовый URL сайта.

**С версии:** 200.4.0

**Возвращает:** `string` — URL без завершающего слэша.

[](){#method_licLink}
### licLink()

Возвращает ссылку на лицензионное соглашение.

**С версии:** 200.4.0

**Возвращает:** `string` — URL соглашения.

[](){#method_addBreadcrumb}
### addBreadcrumb()

Добавляет хлебную крошку в конец списка.

**С версии:** 200.4.0

**Параметры:**
- `$title` — Заголовок крошки.
- `$url` — Необязательная ссылка.

**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов.

[](){#method_finalizeBreadcrumbs}
### finalizeBreadcrumbs()

Дополняет крошки ссылкой на dashboard и сохраняет крошки страницы.

**С версии:** 200.4.0

**Параметры:**
- `$mod` — Имя модуля.
- `$action` — Текущее действие.

[](){#method_addCss}
### addCss()

Регистрирует дополнительный CSS-файл.

**С версии:** 200.4.0

**Параметры:**
- `$url` — URL стиля.

**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов.

[](){#method_addJs}
### addJs()

Регистрирует дополнительный JS-файл.

**С версии:** 200.4.0

**Параметры:**
- `$url` — URL скрипта.

**Возвращает:** `self` — Текущий экземпляр для цепочки вызовов.

[](){#method_cssUrls}
### cssUrls()

Возвращает список URL CSS-файлов.

**С версии:** 200.4.0

**Возвращает:** `string[]` — URL стилей.

[](){#method_jsUrls}
### jsUrls()

Возвращает список URL JS-файлов.

**С версии:** 200.4.0

**Возвращает:** `string[]` — URL скриптов.

[](){#method_toArray}
### toArray()

Преобразует контекст в массив для передачи в Twig.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — mixed> Ассоциативный массив данных layout.

[](){#method_resolveSiteUrl}
### resolveSiteUrl()

Определяет базовый URL сайта из глобальной конфигурации DLE.

**С версии:** 200.4.0

**Возвращает:** `string` — URL без завершающего слэша.

[](){#method_baseCssUrls}
### baseCssUrls()

Формирует базовый список CSS DevCraft.

**С версии:** 200.4.0

**Возвращает:** `string[]` — URL стилей Metro и DevCraft.

[](){#method_baseJsUrls}
### baseJsUrls()

Формирует базовый список JS DevCraft.

**С версии:** 200.4.0

**Возвращает:** `string[]` — URL скриптов Metro и DevCraft.
