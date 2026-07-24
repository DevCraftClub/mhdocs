---
tags:
  - DLE
  - Плагин
  - PHP
  - База данных
  - бэкап
title: "Начало работы - DB Manager"
description: "Обзор DB Manager 200.1.3: экспорт и импорт таблиц MySQL для DLE."
keywords: "PHP, DLE, база данных, бэкап, DB Manager, DevCraft, документация"
author: "Maxim Harder"
og:title: "DB Manager"
og:description: "Экспорт и импорт таблиц MySQL/MariaDB с DevCraft Admin."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# DB Manager

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/db-manager.30/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> **200.1.3**

Плагин экспортирует и импортирует таблицы MySQL/MariaDB с учётом внешних ключей. Работает как **сателлитный модуль DevCraft Admin** — без установленного DevCraft модуль не запустится.

## Минимальные требования

| Компонент | Версия |
| --------- | ------ |
| DataLife Engine | **20.0** |
| PHP | **8.3** |
| DevCraft Admin | **≥ 200.4.0** (включая `FileResponse` для скачивания резервных копий) |
| Расширения PHP | `mysqli`, `zip`, `bz2`, `curl` |

## Дальше

- [Установка](install.md)
- [Миграция с MHAdmin](migration.md)
- [DevCraft Admin — начало работы](../devcraft_admin/getting_started.md)
