---
title: "Шаблоны RePost"
tags:
    - PHP
    - DLE
---
# Шаблоны

Шаблон всегда привязан к **подключению** (`connection_id`).

## Поля

| Поле | Описание |
|------|----------|
| name | Название (unique) |
| connection_id | FK на подключение |
| template_type | `addnews`, `editnews` или оба через запятую |
| template | Текст с тегами |
| condition | JSON-массив условий |
| condition_relation | `and` / `or` |
| cron | Класть в очередь вместо мгновенной отправки |
| use_proxy | Использовать прокси при отправке |
| proxy_id | Конкретный прокси или `0` / null = **случайный активный** из пула |

## Прокси

- `use_proxy = 0` — без прокси (в списке шаблонов: **Нет**).
- `use_proxy = 1`, `proxy_id = 0` / пусто — **Случайный**: `ProxyRepository::pickRandomActive()`.
- `use_proxy = 1`, `proxy_id > 0` — фиксированный `ip:port`.

В форме редактирования под select есть подсказка про значение «случайный».

## Копирование

В списках → **Действия** → **Копировать**:

| Сущность | Поведение |
|----------|-----------|
| Шаблон | имя `… (копия)` / `(копия 2)`, те же connection/condition/template/flags/proxy |
| Подключение | имя `… (копия)`, тот же provider/config/active |
| Прокси | тот же ip/type/auth; при конфликте unique `(ip,port,type)` — порт `+1`, пока свободен |

## Условия (JSON)

```json
[
  {"source": "post", "name": "approve", "value": "1", "op": "="},
  {"source": "category", "name": "5", "value": "", "op": "="},
  {"source": "xfields", "name": "field", "value": "yes", "op": "="}
]
```

Пустой массив условий = шаблон подходит ко всем новостям выбранного типа события.
