---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: ParseTemplateTags - DevCraft Admin"
description: "Парсинг тегов шаблонов новости DLE для модулей DevCraft."
keywords: "PHP, DLE, Плагин, Админка, ParseTemplateTags, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: ParseTemplateTags"
og:description: "Парсинг тегов шаблонов новости DLE для модулей DevCraft."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: ParseTemplateTags"
twitter:description: "Парсинг тегов шаблонов новости DLE для модулей DevCraft."
---

# Класс: ParseTemplateTags

## Краткое содержание

Статический хелпер: подставляет **все теги шаблонов новости DLE** (short/full) в произвольную строку через `dle_template` + логику `show.short` / `show.custom` / `show.full`. URL полной новости — `DLEUrl::BuildUrl('showfull')`.

Модульные плейсхолдеры (`%user%`, `%tags%`, …) передаются в `$extra` и не ломают DLE-теги.

---

### Методы

* public [fullLink()](#method_fullLink)
* public [title()](#method_title)
* public [apply()](#method_apply)

---

### Подробности

* Путь: `devcraft/src/classes/Support/ParseTemplateTags.php`
* Fill-логика: `devcraft/src/classes/Support/ParseTemplateTags/fill_news.php`
* Namespace: `DevCraft\Core\Support`

---

## Детали

### Методы

[](){#method_fullLink}
### fullLink()

URL полной новости, как в `engine/modules/show.full.php`.

**Параметры:**

- `$row` — поля post (`id`, `alt_name`, `category`, `date`).

**Возвращает:** `string`

[](){#method_title}
### title()

Экранированный заголовок как `{title}` в DLE.

[](){#method_apply}
### apply()

```php
ParseTemplateTags::apply(
    string $template,
    array $row,
    array $extra = [],
    array $options = [] // mode: short|full, globals: bool
): string
```

Парсит теги новости (`{title}`, `{full-link}`, `[full-link]…[/full-link]`, категории, даты, автор, теги, xfields, rating, `{short-story}` / `{full-story}`, …), затем подставляет `$extra`.

Автоматически добавляет совместимость TagsAdd: `%title%`, `%link%`, если их нет в `$extra`.

**Пример:**

```php
use DevCraft\Core\Support\ParseTemplateTags;

$body = ParseTemplateTags::apply(
    '«{title}»: <a href="{full-link}">открыть</a>. От %user%',
    $newsRow,
    ['%user%' => 'Admin', '%tags%' => 'a, b']
);
```
