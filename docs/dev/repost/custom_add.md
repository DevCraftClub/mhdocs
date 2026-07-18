---
title: "API RePost для парсеров"
tags:
    - PHP
    - DLE
---
# Подключение в сторонние разработки

После сохранения новости в БД:

```php
include_once (DLEPlugins::Check(ENGINE_DIR . '/modules/devcraft/repost.php'));
sendRepost($id, 'addnews'); // или 'editnews'
```

Функция возвращает список `SendResult` (ok / message / raw) по каждому сработавшему шаблону.

Дополнительно:

```php
repostRunCron();                 // обработать очередь
repostDeleteCronForNews($id);    // очистить очередь новости
```
