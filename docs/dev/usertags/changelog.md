---
tags:
  - PHP
  - DLE
  - Плагин
  - Теги
title: "История изменений - TagsAdd"
description: "Changelog TagsAdd (Пользовательские теги) с привязкой к коммитам GitHub."
keywords: "PHP, DLE, TagsAdd, changelog, DevCraft, документация"
author: "Maxim Harder"
og:title: "Changelog TagsAdd"
og:description: "История изменений TagsAdd."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# История изменений

Актуальный список также в модуле (`changelog.data.php`) и на `?mod=tags_add&action=changelog`.

Репозиторий: [DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd).

## 200.3.0 (2026-07-17)

Миграция на DevCraft Admin / DLE 20.0. Ветка: [`releases/200.3.0`](https://github.com/DevCraftClub/tagsadd/tree/releases/200.3.0).

### Добавлено

- Каркас модуля TagsAdd для DevCraft Admin и DLE 20.0  
  ([`4abd7c2`](https://github.com/DevCraftClub/tagsadd/commit/4abd7c250261e1b1d86432e5ddc266d17cfd3c29) — *feat: добавляет модуль TagsAdd для управления тегами новостей*)
- Очередь предложений, модерация approve/reject, вставка в `post.tags` / `_tags` или xfield
- Публичный suggest через `dc_public.js` и `controller=public`
- Шаблоны темы `Default/devcraft/tags_add` и настройки с PM-шаблонами
- Стандартная причина отклонения (`decline_reason_default`), Metro-диалоги отклонения и удаления  
  ([`d6b59fc`](https://github.com/DevCraftClub/tagsadd/commit/d6b59fc12b24279da8b4e3b7ea8257646a02a80a) — *feat: добавить миграцию плейсхолдеров и нормализацию*)
- В списке предложений: имена пользователей и заголовки новостей со ссылками/иконками

### Изменено

- Плейсхолдеры PM: `{suggested_tags}`, `{moderate_suggested_tags}`, `{decline_reason}`; `mail_from` — select
- Шаблоны issue на GitHub: DLE 20.0 / PHP 8.4  
  ([`81448a4`](https://github.com/DevCraftClub/tagsadd/commit/81448a461df5a088dfcd3b8158df15c9d873c964) — *docs: обновить шаблоны issue с актуальными версиями*)

### Исправлено

- Отмена отклонения больше не удаляет запись
- HTML-ссылки в шаблонах PM после двойного экранирования (`htmlspecialchars_decode` при normalize)

### Удалено

- Legacy Semantic UI, arcticModal, tokenfield, maharder AJAX и доверие к `userid` из POST

## 2.0 (2018-03-28)

Legacy TagsAdd+ для прежней схемы `engine/inc/maharder/` / `engine/modules/maharder/`.

Коммит: [`4211def`](https://github.com/DevCraftClub/tagsadd/commit/4211def23df2057a24f778226f9c603e6cbf2871) — *tagsAdd v2.0* (ветка [`v2.0`](https://github.com/DevCraftClub/tagsadd/tree/v2.0)).

- Переписан код, админ-панель, подключение одной строкой include
- Исправлены баги относительно 1.x

!!! note "Миграция с 2.0"
    Пакет 200.x **не** ставится поверх maharder-путей. Удалите старый плагин, установите DevCraft Admin, затем TagsAdd 200.3.0 и заново подключите includes в теме (см. [установку](install.md)).

## 1.2.1

- Теги `[usertags]` / `[not-usertags]` для скрытия блоков при вкл/выкл модуля
- Исправления багов

## 1.2

- Админ-панель
- Улучшения кода
