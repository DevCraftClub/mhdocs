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
sendRepost($id, 'addnews', [
	'defer'         => 'yes',       // yes|no|template
	'planned'       => null,        // ?DateTimeImmutable
	'template_mode' => 'auto',      // auto|manual
	'template_ids'  => [],          // при manual — id активных шаблонов
]);
```

Функция возвращает список `SendResult` (ok / message / raw) по каждому сработавшему шаблону.

Дополнительно:

```php
repostRunCron();                 // обработать due-очередь (то же, что авто-cron DLE)
repostDeleteCronForNews($id);    // очистить очередь новости
repostOptionsFromRequest();      // разобрать POST формы новости
```
