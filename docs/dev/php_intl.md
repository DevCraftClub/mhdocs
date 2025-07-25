---
tags:
  - Инструкция
  - PHP
---
# Установка PHP intl (php-intl)

Для корректной эксплуатации админки, требуется активировать / установить дополнение PHP intl.

## Через php.ini

Ищем серверную конфигурацию PHP (обычно /etc/php/8.1/apache2/php.ini):

```bash
php --ini
```

и получаем примерный вывод в консоли:

```bash
Configuration File (php.ini) Path: /etc/php/8.1/cli
Loaded Configuration File:         /etc/php/8.1/cli/php.ini
Scan for additional .ini files in: /etc/php/8.1/cli/conf.d
Additional .ini files parsed:      /etc/php/8.1/cli/conf.d/10-mysqlnd.ini,
/etc/php/8.1/cli/conf.d/10-opcache.ini,
...
```

Тут мы видим и версию PHP и путь к конфигурационному файлу (`/etc/php/8.1/cli/php.ini`).

Ищем строку `;extension=intl` и удаляем `;` в начале строки, чтобы активировать расширение. Затем перезапускаем apache:

```bash
sudo systemctl restart apache2
```

## Через пакет установок (Ubuntu, Debian, etc.)

Если вы используете Debian/Ubuntu, то можно установить расширение php-intl через пакетный менеджер:

```bash
sudo apt-get install php8.1-intl
```

`8.1` - это версия PHP, которую вы используете. Если вы используете другую версию, то замените `8.1` на соответствующую версию.`

