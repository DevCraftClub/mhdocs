## Что меняется

Кратко: зачем этот PR (2–4 предложения).

## Тип

- [ ] Новая страница
- [ ] Правка контента
- [ ] Навигация (`meta.json`)
- [ ] Версия / структура плагина (`defaultVersion`, `...version`)
- [ ] Инфраструктура сайта (CI, `app/`, зависимости)

## Затронутые пути

Пример: `content/docs/dev/dle/...`, `app/`, `.woodpecker/`

-

## Чеклист контента

- [ ] Frontmatter: `title`, `description` (+ `version` для плагинов)
- [ ] Slug добавлен в соседний `meta.json` (порядок сайдбара)
- [ ] Нет дубля H1 в MDX (заголовок из frontmatter / DocsTitle)
- [ ] Callout вместо MkDocs `!!!`
- [ ] Ссылки: относительные ок или абсолютные `/…` где нужно
- [ ] Сайдбар плагина: Plugin → страницы без лишней папки версии (`"...version"` extract)
- [ ] Локально `npm run dev` — страница и сайдбар проверены

## Чеклист инфры

Заполнять, если трогали `app/`, CI или зависимости.

- [ ] `npm run types:check`
- [ ] `npm run lint:links`
- [ ] `npm run build` (есть `build/client/index.html`)

## Issues

Fixes #

См. также [CONTRIBUTING_DOCS.md](../CONTRIBUTING_DOCS.md).

> Публичный GitHub (ветка `dev`) — статический сайт + `.github` templates. Исходники MDX — в Gitea Maxim/MhDocs-Dev.
