---
tags:
  - PHP
  - DLE
  - Плагин
  - Генератор
  - Парсер
title: "Парсер шаблонов - DLE Faker"
description: "Как DLE Faker разбирает теги {{ … }} в шаблонах."
keywords: "PHP, DLE, Faker, парсер, DevCraft"
author: "Maxim Harder"
og:title: "Парсер шаблонов"
og:description: "Как DLE Faker разбирает теги в шаблонах."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Парсер шаблонов

Разбор выполняет `DevCraft\Modules\dle_faker\Services\FakerContentParser` на сервере при генерации (AJAX `generate_posts` / `generate_users`), не отдельный legacy `parse_content.php`.

Теги вида `{{ name param=value }}` подставляются через FakerPHP с локалью из настроек модуля.

См. справочник на странице модуля `?mod=dle_faker&action=tags` и разделы:

- [Общие теги](tag_for_all.md)
- [Для пользователей](tag_for_users.md)
- [Для новостей](tag_for_news.md)

Медиа-теги `{{ static_image }}`, `{{ static_file }}`, `{{ static_audio }}`, `{{ static_video }}` берут случайный файл из библиотеки модуля и публикуют его в `uploads/` DLE.
