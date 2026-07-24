---
tags:
  - Инструкция
  - ИИ
  - ponytail
title: "Ponytail"
description: "Установка и идея Ponytail — режим «ленивого сеньора» для ИИ-агента: минимум кода."
keywords: "ponytail, YAGNI, ИИ, skill"
author: "Maxim Harder"
og:title: "Ponytail"
og:description: "Минимальный код через лестницу решений"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# Ponytail

**Ponytail** — skill/правила для ИИ-агента: перед написанием кода пройти «лестницу» от YAGNI и reuse до одной строки. Цель — меньше лишнего кода и диффа, без халатности в безопасности и валидации.

## Ссылки

- Сайт: [ponytail.dev](https://ponytail.dev/)
- Репозиторий автора: [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) (актуальный способ установки — в README сайта/репо)

## Установка

Зависит от агента (Claude Code, Cursor, Codex и др.):

- Cursor / Windsurf и подобные: скопировать rules-файл в проект (например `.cursor/rules/ponytail.mdc`) — как указано в документации Ponytail;
- агенты со skills/plugins — установка через их каталог skills.

## Использование

Перед кодом агент останавливается на первой подходящей ступени: не нужно ли это вовсе → уже есть в проекте → stdlib → нативная фича → уже установленная зависимость → одна строка → минимум кода.

В DevCraft это часто значит: переиспользовать `JsonResponse`, `AdminLink`, `DleDataService`, готовые виджеты Metro, а не писать параллельный XHR или свой слой форм.

**Когда полезно:** любая реализация и рефакторинг «не раздувать».

**Не нужно:** абстракции «на будущее»; чинить только один caller, если баг в общей функции.

## См. также

- [sqz](sqz.md)
- [Конституция PHP](constitution.md)
- [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools.md)
