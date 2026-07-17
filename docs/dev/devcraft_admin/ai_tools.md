---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
  - ИИ
  title: "ИИ-инструменты - DevCraft Admin"
  description: "Промпты для ИИ-агентов при разработке модулей DevCraft."
  keywords: "PHP, DLE, DevCraft, ИИ, промпт, миграция"
  author: "Maxim Harder"
  og:title: "ИИ-инструменты DevCraft"
  og:description: "Готовые промпты для миграции и создания модулей."
  og:image: "<https://devcraft.club/data/assets/logo_default/devcraftx2.png>"
---

# ИИ-инструменты

Готовые промпты для Cursor, Claude и других агентов. Спецификация структуры модуля — в [Начало работы](getting_started.md).

## Промпт: миграция конфигурации и настроек под DevCraft

Скопируйте блок ниже в чат с агентом:

```markdown
Ты разрабатываешь модуль для DLE.

Цель: мигрировать модуль в структуру DevCraft.

Обязательные правила:
- PSR-4: DevCraft\Modules\{Name}\ в devcraft/src/modules/{Name}/
- Все require/include проектных файлов через DLEPlugins::Check()
- Комментарии, PHPDoc и UI-строки на русском языке
- HTML только в Twig (Metro UI), не в PHP
- AJAX только через devcraft/ajax.php — НЕ создавать engine/ajax/{mod}.php
- Обработчики реализуют AjaxHandlerInterface, возвращают JsonResponse или FileResponse
- Загрузка файлов: DevCraft.Ajax.postMultipart + DevCraft\\Core\\Http\\UploadedFile (не invent свой XHR)
- Настройки: settings.schema.php (FormSchemaBuilder), devcraft/config/{code}.json
- manifest.php: mod, code, meta, menu, ajax, changelog
- install.xml: needplugin=DevCraft Admin, без paths.php
- Файлы DLE / DevCraft Admin напрямую не редактировать — любые такие изменения только через <file>-операции (searchcode/replacecode) в install.xml; по стандартному дизайну они не нужны (Composer autoload, AJAX через devcraft/ajax.php), секция остаётся пустой
- DevCraft Admin ≥ 200.4.0 обязателен
- AdminLink::page(name, action, pageClass, icon, mod) — пятый аргумент mod обязателен для сателлитных модулей
- В manifest.php: пункт dashboard/index для AdminLinkResolver; assets.js подключать после devcraft.js (без inline-скриптов до ядра)
- ajax.controller = 'admin' (не имя модуля); URL: devcraft/ajax.php?mod={mod}&controller=admin&method=...

Стек разработки:
|Тип|Версия|
|---|-----------|
|PHP|>= 8.3|
|DevCraft Admin|>=200.4.0|
|DLE|>=20.0|

Ссылки на документации:
|Предназначение|Ссылка|
|--------------|------|
|DevCraft Admin|https://readme.devcraft.club/|
|DLE|https://dle-news.ru/extras/online/|
|Metro UI|https://github.com/olton/metroui-docs/tree/master/src/content/docs|
|Cycle ORM|https://github.com/cycle/docs/tree/2.x/docs/en|

Чеклист артефактов:
- [ ] manifest.php
- [ ] settings.schema.php (если есть настройки)
- [ ] changelog.data.php
- [ ] Pages/*.php
- [ ] Ajax/*Handler.php
- [ ] templates/*.twig
- [ ] engine/inc/{mod}.php
- [ ] install.xml + locales в devcraft/locales/

Детальная спецификация: getting_started.md в документации DevCraft Admin.

```

## Промпт: новый модуль с нуля

```markdown
Создай новый модуль DevCraft Admin для DLE 20.0.

Параметры:
- mod (URL): ___
- code (JSON config): ___
- Отображаемое имя: ___
- Страницы меню: ___

Следуй getting_started.md DevCraft Admin. Минимум:
manifest.php, settings.schema.php, SettingsPage, SettingsHandler, changelog.data.php,
engine/inc/{mod}.php, install.xml.

Используй DB Manager как reference implementation.
Не создавай engine/ajax/ endpoints.
```

## См. также

- [Начало работы](getting_started.md)

- [Генератор модулей](new_module.md)
