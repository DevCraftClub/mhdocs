---
title: "Установка RePost"
tags:
    - PHP
    - DLE
    - Плагин
---
# Установка RePost

## Требования

- DLE ≥ 20.0
- PHP ≥ 8.3
- **DevCraft Admin ≥ 200.4.0** (`needplugin`)
- Composer-пакеты в `devcraft/`: `luzrain/telegram-bot-api`, `guzzlehttp/guzzle` (vendor **не** входит в архив плагина)

## Шаги

1. Установите плагин через менеджер плагинов DLE (архив с `install.xml`, `engine/`, `devcraft/`).
2. В каталоге `devcraft/` выполните (если пакетов ещё нет):

```bash
composer require luzrain/telegram-bot-api guzzlehttp/guzzle
composer dump-autoload
```

3. Откройте админку → **RePost**. При первом заходе Cycle ORM создаст таблицы:
   - `{prefix}_repost_connections`
   - `{prefix}_repost_templates`
   - `{prefix}_repost_proxies`
   - `{prefix}_repost_cron`

4. Создайте подключение Telegram и шаблон (активные подключение + шаблон).

## Логи

Сбои и успехи отправки пишутся через `LogGenerator::for('RePost')` → Admin → Logs, модуль/плагин **RePost**:

| Уровень | Когда |
|---------|--------|
| **error** | `SendResult::fail`, нет шаблонов/подключения/провайдера |
| **info** | старт `dispatch`, успешная отправка / постановка в cron |
| **debug** | matched template ids, `tg_send_type`, counts media, proxy — только если включён debug DevCraft |

Токен бота в payload не логируется явно как отдельное поле (в raw ответах API его тоже не должно быть).

## Хуки (install.xml)

Плагин патчит через `<file>` (не правьте DLE вручную в репозитории):

- `engine/inc/addnews.php` → `sendRepost($id, 'addnews')`
- `engine/inc/editnews.php` → `sendRepost($id, 'editnews')`
- `engine/modules/addnews.php` → `sendRepost($insert_id, 'addnews')`
- удаление новости → очистка очереди
- `cron.php` → режим `repost`

## Структура модуля

```text
devcraft/src/modules/RePost/
engine/inc/repost.php
engine/modules/devcraft/repost.php
devcraft/config/repost.json
```

AJAX только через `devcraft/ajax.php?mod=repost&controller=admin&method=…`.
