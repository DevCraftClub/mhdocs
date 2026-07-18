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
- `AbstractProvider` и формулировка «канал доставки»
- Копирование подключений, прокси и шаблонов в UI
- Логирование отправки через `LogGenerator` (error / info / debug)
- Документация [developing_providers.md](developing_providers.md)

### Changed

- DLE-теги через ParseTemplateTags; префикс медиа-тегов `[repost_media_*]`
- Telegram: `SendAudio` / `SendVideo` на каждый файл; album без смешения audio
- Список шаблонов: колонка прокси (Нет / Случайный / ip:port)

### Fixed

- Тихие сбои отправки без записи в Admin logs

### Removed

- Зависимость от MH Admin и `engine/ajax/maharder/*`
