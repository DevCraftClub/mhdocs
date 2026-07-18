---
title: "Теги шаблонов RePost"
tags:
    - PHP
    - DLE
---
# Теги шаблонов

## DLE

База — `DevCraft\Core\Support\ParseTemplateTags::apply()` (как в show.full / TagsAdd): `{title}`, `{full-link}`, short/full story, xfields и т.д.

## RePost

| Тег | Описание |
|-----|----------|
| `{hashtags}` | Теги новости как `#tag` |
| `{category-hashtag}` | Категории как хештеги |
| `[if field]…[/if]` | Блок, если поле непустое |
| `[if field=value]…[/if]` | Сравнение |
| `[button=URL]Текст[/button]` | Inline-кнопка Telegram |
| `[repost_media_image=URL]` | Явное изображение |
| `[repost_media_video=URL]` | Видео |
| `[repost_media_audio=URL]` | Аудио |

BB `[b][i][u][s][code][url]` конвертируются в HTML, допустимый для Telegram `parse_mode=HTML`.

## Автосбор медиа

Если media-теги не заданы, медиа собираются из:

1. HTML новости / `dle_video` / `dle_audio`
2. Xfields типов `image` / `imagegalery` / `gallery`
3. Xfields типов **`audio`** и **`video`** (формат DLE `url|id|size,url2|…`)

Далее список фильтруется по `tg_send_type` подключения (`audio` оставляет только audios, `video` — videos, `media` — images+videos+audios, `text` — ничего).
