---
title: "Теги шаблонов RePost"
tags:
    - PHP
    - DLE
---
# Теги шаблонов

## DLE

База — `DevCraft\Core\Support\ParseTemplateTags::apply()` (как в show.full / TagsAdd): `{title}`, `{full-link}`, short/full story, xfields и т.д.

## RePost / канал

| Тег | Описание |
|-----|----------|
| `{hashtags}` | Теги новости как `#tag` |
| `{tags_no_link}` | Теги без `#` и без ссылок |
| `{category-hashtag}` | Категории как хештеги |
| `{tags}` | Список тегов |
| `[if field]…[/if]` | Блок, если поле непустое |
| `[if field=value]…[/if]` | Сравнение |
| `[xfvalue_XXX_text]` | Значение доп. поля без ссылок |
| `[xfvalue_XXX_hashtag]` | Значение доп. поля как хештеги |
| `[button=URL]Текст[/button]` | Inline-кнопка Telegram |
| `[repost_media_image image=X max=Z]` | Изображение из пула новости |
| `[repost_media_image url=…]` | Прямая ссылка / локальный путь (скачивается на сервер) |
| `[repost_media_video …]` / `audio` / `document` | Аналогично |
| `[repost_media_allimages …]` | Все изображения новости и xfields |
| `[repost_media_xfield_XXX file=Y max=Z]` | Медиа из доп. поля |
| `[repost_thumb]…[/repost_thumb]` | Миниатюра для audio/video |

BB `[b][i][u][s][code][url]` → HTML через `TemplateTagsInterface::sanitizeHtml()` (Telegram — allowlist Bot API).

Чипы и подсказка на странице шаблона — из `hints()` / `allowedHtmlTags()` провайдера подключения.  
Полный справочник в админке: **RePost → Теги шаблонов** (`?mod=repost&action=template_tags`).

## Автосбор медиа

Если в шаблоне **нет** ни одного `[repost_media_*]`, медиа собираются из HTML / dle_video / dle_audio / xfields.  
Если теги есть — массив только из них (как в legacy).

Фильтр по `tg_send_type` и лимитам/расширениям канала (`allowedMediaExtensions()`).
