---
title: "Changelog RePost"
tags:
    - PHP
    - DLE
---
# Changelog

## 200.1.0 (2026-07-18)

### Added

- Миграция на DevCraft Admin: multi-provider ядро, Telegram как эталон
- Несколько подключений API и шаблонов с привязкой к подключению
- Очередь cron, прокси, автопостинг через install.xml
- Парсинг xfields `audio` / `video`; фильтр медиа по `tg_send_type`
- Подтипы `media` / `media_video` / `media_audio` / `media_document`; одиночные типы — только первый файл
- `TemplateTagsInterface` + `DefaultTemplateTags` / `TelegramTemplateTags`; HTML-allowlist канала
- Селекторы `[repost_media_*]` (`url=` / `image=` / `max=`), `{tags_no_link}`, `[xfvalue_*_text|_hashtag]`, `[repost_thumb]`
- `allowedMediaExtensions()`; скачивание внешних `url=` на сервер перед аплоадом
- Чипы тегов и ограничение TinyMCE по `allowedHtmlTags()` на странице шаблона
- Справочник **Теги шаблонов** в админке (`hints` / HTML / расширения медиа)
- `AbstractProvider` и формулировка «канал доставки»
- Копирование подключений, прокси и шаблонов в UI
- Логирование отправки через `LogGenerator` (error / info / debug)
- Документация [developing_providers.md](reference/developing_providers.md)

### Changed

- DLE-теги через ParseTemplateTags; префикс медиа-тегов `[repost_media_*]`
- Telegram: album photo/video; `media_audio` / `media_document` через SendMediaGroup; одиночные audio/video — один файл
- Список шаблонов: колонка прокси (Нет / Случайный / ip:port)

### Fixed

- Тихие сбои отправки без записи в Admin logs

### Removed

- Зависимость от MH Admin и `engine/ajax/maharder/*`
