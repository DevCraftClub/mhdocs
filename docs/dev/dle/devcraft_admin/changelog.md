---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "История изменений - DevCraft Admin"
description: "Журнал изменений DevCraft Admin."
keywords: "PHP, DLE, Плагин, Админка, changelog, DevCraft, документация"
author: "Maxim Harder"
og:title: "История изменений"
og:description: "Журнал изменений DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# История изменений

## Upload API (после 200.4.0)

### Добавлено

- `DevCraft.Ajax.postMultipart` — XHR multipart с прогрессом.
- Twig `core/includes/upload/drop_form.twig` — dropzone для модулей.
- [`UploadedFile`](reference/back-end/classes/UploadedFile.md) — валидация и `moveTo` для `$_FILES`.
- Документация [`FileResponse`](reference/back-end/classes/FileResponse.md) для скачивания из AJAX.

## 200.4.0

### Добавлено

- Плагин DevCraft — преемник MHAdmin: отдельный раздел в админке DLE (?mod=devcraft).
- Поддержка DataLife Engine 20.0.
- Новый внешний вид на базе Metro UI вместо прежнего Semantic UI / Fomantic UI: формы, переключатели, календари и таблицы.
- Страница логов: таблица подгружается без полной перезагрузки страницы; удобные фильтры с метками.
- Понятные уведомления при сохранении настроек, удалении записей и проверке ресурсов.
- Обновление скриптов и стилей с сервера разработчика (assets.devcraft.club).
- Генератор модулей для создания новых плагинов в структуре DevCraft.
- Мультиязычность: русский, английский, немецкий, украинский — интерфейс и элементы Metro UI.

### Изменено

- Интерфейс переведён с Semantic UI (Fomantic UI) на Metro UI — другой внешний вид кнопок, форм и таблиц.
- Убраны тяжёлые UI-зависимости (Fomantic, jquery-confirm, bootstrap-suggest и др.) — вместо них единая библиотека Metro UI.
- Файлы плагина находятся в каталоге devcraft/ на сайте, а не в engine/inc/maharder/.
- Настройки по-прежнему в одном месте (кеш, язык, логирование, Telegram), оформлены вкладками; можно сохранить только корректные поля.
- Меню «Страницы DLE» — быстрый переход в стандартную админку DLE из боковой панели DevCraft.
- История изменений: те же release notes, новый формат с группами «Добавлено», «Изменено» и т.д.

### Удалено

- Название MHAdmin / maharder и вход ?mod=maharder — заменены на DevCraft.
- Прежний внешний вид Semantic / Fomantic UI (сегменты, старые выпадающие списки и всплывающие подсказки).
- Font Awesome Pro в комплекте плагина — иконки через Metro UI.
- Старая структура каталогов maharder (_modules, _templates); параллельная установка с MHAdmin не предусмотрена.

### Исправлено

- Фильтры на странице логов (в том числе по дате) работают стабильнее.

## Предыдущие версии

Смотри последнюю версию [MH Admin](../mhadmin/changelog.md)
