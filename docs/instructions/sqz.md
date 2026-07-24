---
tags:
  - Инструкция
  - ИИ
  - sqz
title: "sqz"
description: "Установка и использование sqz — сжатие длинного вывода команд для экономии токенов ИИ."
keywords: "sqz, CLI, токены, ИИ"
author: "Maxim Harder"
og:title: "sqz"
og:description: "Сжатие stdout для LLM"
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
---

# sqz

**sqz** сжимает длинный вывод команд (логи, `git`, тесты), прежде чем он попадёт в контекст ИИ. Это stdin→stdout: команду запускают как обычно и передают вывод в `sqz compress`.

## Ссылки

- Репозиторий: [ojuschugh1/sqz](https://github.com/ojuschugh1/sqz)

## Установка

Один из способов:

```bash
# Homebrew
brew tap ojuschugh1/sqz
brew install sqz

# или npm
npm install -g sqz-cli

# или скрипт
curl -fsSL https://raw.githubusercontent.com/ojuschugh1/sqz/main/install.sh | sh
```

## Использование

```bash
git status 2>&1 | sqz compress
cargo test 2>&1 | sqz compress
```

Если в ответе появился токен `§ref:HASH§` и нужен исходный текст:

```bash
sqz expand a1b2c3d4
```

Отключить дедуп на один запуск: `SQZ_NO_DEDUP=1 … | sqz compress` или флаг `--no-cache`.

**Когда полезно:** длинный stdout/stderr.

**Не нужно:** интерактивные программы (REPL, ssh, vim); цепочки с `&&` / `;` лучше не гнать целиком через pipe; уже короткий вывод сжимать незачем.

## См. также

- [Ponytail](ponytail.md)
- [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools.md)
