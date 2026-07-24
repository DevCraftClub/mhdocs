---
tags:
  - DLE
  - PHP
  - Плагин
  - Теги
title: "Подключение в теме - TagsAdd"
description: "Include TagsAdd в fullstory.tpl и теги шаблонов button/modal."
keywords: "PHP, DLE, TagsAdd, fullstory, шаблон, DevCraft, документация"
author: "Maxim Harder"
og:title: "Подключение в теме TagsAdd"
og:description: "Include TagsAdd в fullstory.tpl и теги шаблонов button/modal."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Подключение в теме

## fullstory.tpl

В шаблон полной новости добавьте:

```html
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=css"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=button"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=modal"}
{include file="engine/modules/devcraft/tags_add.php?newsid={news-id}&focus=js"}
```

Параметр `focus`:

| Значение | Результат |
| -------- | --------- |
| `css` | Стили модуля |
| `button` | Кнопка предложения |
| `modal` | Разметка модального окна |
| `js` | Скрипт отправки |

Файлы темы лежат в `templates/THEME/devcraft/tags_add/` (`button.tpl`, `modal.tpl`, `tags_add.css`, `tags_add.js`). Скопируйте каталог из пакета `Default`, если используете другую тему.

## Теги шаблонов темы

### button.tpl

| Тег | Описание |
| --- | -------- |
| `{button-label}` | Текст кнопки из настроек |
| `{news-id}` | ID новости |

### modal.tpl

| Тег | Описание |
| --- | -------- |
| `{news-id}` | ID новости |
| `{button-label}` | Текст кнопки / заголовок окна |
| `{user-hash}` | `dle_login_hash` для AJAX |

При правке модалки сохраняйте имена полей формы и endpoint AJAX — иначе отправка сломается.

## Модерация

Очередь: `?mod=tags_add&action=suggestions`.  
Одобрение / отклонение / удаление — с подтверждениями Metro; отклонение с причиной (или стандартной из настроек).
