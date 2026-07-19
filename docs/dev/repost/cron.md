---
title: "Cron RePost"
tags:
    - PHP
    - DLE
---
# Очередь и cron

Отложенная публикация идёт через **авто-cron DLE**, без патча корневого `cron.php`.

## Настройки (RePost → Cron)

| Ключ | Смысл | Default |
|------|--------|---------|
| `cron_enabled` | Шаблоны с флагом «В очередь cron» ставятся в очередь (режим «настройка шаблона» на форме) | off |
| `cron_news` | Сколько записей обработать за один проход | 5 |
| `cron_waittime` | Пауза между отправками (сек) | 2 |
| `cron_retry_interval` | Сдвиг `planned` при ошибке/таймауте (сек) | 300 |
| `cron_max_attempts` | После N неудач → `status=failed` | 5 |
| `cron_autodelete` | Удалять строку очереди после успеха | on |

У шаблона по-прежнему есть флаг **В очередь cron** — он учитывается только при `cron_enabled` и режиме defer = «настройка шаблона».

## Как запускается

1. В `config.php` DLE включён авто-cron (`$config['cron']`).
2. При обычном хите сайта DLE вызывает `engine/modules/cron.php`.
3. Плагин в конце успешного прохода вызывает `repostRunCron()` → `CronRunner` → `findDue` → `sendCronItem`.

Корневой `cron.php` / `cronmode=repost` **не используются** и плагином не патчатся.

## Форма новости

Над «Сохранить / Создать» (админка add/edit и frontend addnews):

- **Отложенная отправка:** да / нет / настройка шаблона
- **Время:** дата + время (пусто = due сразу)
- **Шаблоны:** автоматически (matcher) или мультивыбор активных

POST: `repost_defer`, `repost_plan_date`, `repost_plan_time`, `repost_tpl_mode`, `repost_tpl_ids[]`.

Очередь **на каждый шаблон** отдельно (unique `template_id` + `news_id`).

## Retry

Ошибка или таймаут провайдера:

1. `attempts += 1`
2. `last_error` = текст ошибки
3. если `attempts < cron_max_attempts` → `planned += cron_retry_interval`, `status=pending`
4. иначе → `status=failed` (больше не попадает в `findDue`)

Админка → **Очередь**: статус, попытки, ошибка; ручная отправка / удаление.

При удалении новости записи очереди для `news_id` очищаются автоматически.
