---
title: "Cron RePost"
tags:
    - PHP
    - DLE
---
# Очередь и cron

1. В настройках RePost задайте `cron_news`, `cron_waittime`, `cron_autodelete`.
2. У шаблона включите **В очередь cron**.
3. В корневом `cron.php` установите `$allow_cron = 1`.
4. Плагин добавляет режим `repost` в `cron.php` через install.xml.

## Запуск

```bash
php cron.php repost
# или
curl 'https://example.com/cron.php?cronmode=repost'
```

Админка → **Очередь**: ручная отправка / удаление записей.

При удалении новости записи очереди для `news_id` очищаются автоматически.
