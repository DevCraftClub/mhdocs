---
title: "RePost Provider: VK (платное)"
tags:
    - PHP
    - DLE
    - VK.com
    - DevCraft
---
# RePost Provider: VK

**Платное дополнение** к RePost: публикация новостей на стену сообщества VK.com.

#### Версия: <i class="fa-duotone fa-code-branch"></i> 200.2.0
#### Совместимость: RePost ≥ **200.1.0**, DLE 20.0
#### Скачать: [<i class="fa-thin fa-paperclip"></i> Купить / скачать](https://devcraft.club/) <!-- placeholder: страница продажи -->

Проверено с RePost **200.1.0**.

## Возможности (200.2.0)

| Тип | Поведение | Токен |
|-----|-----------|-------|
| Текст / `wall.post` | [`wall.post`](https://dev.vk.com/ru/method/wall.post), `from_group` | community |
| Фото | [wall-photo](https://dev.vk.com/ru/api/upload/wall-photo): getWallUploadServer → `photo` → saveWallPhoto | **user** |
| Видео | [video-in-profile](https://dev.vk.com/ru/api/upload/video-in-profile): video.save → `video_file` → wall.post | **user** |
| Документ | [document-in-profile](https://dev.vk.com/ru/api/upload/document-in-profile): getWallUploadServer → `file` → docs.save | community |

Лимиты [wall.post](https://dev.vk.com/ru/method/wall.post):

- ≤ **10** photo+video; ≤ **1** doc на пост
- Фото ≤ **50 МБ** (JPG/PNG/GIF)
- Видео: практический PHP-cap ~200 МиБ; форматы **mp4/avi/mov/mpeg/3gp/flv/wmv** (не mkv/webm — API/upload часто даёт HTTP 500)
- Документ: не MP3; платформа до 4 ГиБ, в коде практический cap ~100 МиБ
- Интервал между постами ≥ **3 мин**

## Два токена

| Поле | Назначение |
|------|------------|
| `vk_token` | Ключ **сообщества**: `wall.post`, docs |
| `vk_user_token` | Ключ **пользователя**: photos / video upload. Без него типы photo/video/media недоступны |

### Настройки модуля RePost (секция VK)

| Поле | Назначение |
|------|------------|
| `vk_api_host` | Базовый домен API, по умолчанию `vk.com`. Для РФ — `vk.ru`. Запросы: `https://api.{домен}/method` |

Upload файлов — свой `VkMultipartUpload` (`CURLFile` + filename); SDK `upload()` без имени на video CDN даёт HTTP 500.

В актуальной доке [`wall.post`](https://dev.vk.com/ru/method/wall.post) описан для user + `wall` (часто через support). В аддоне публикация идёт ключом сообщества + `from_group=1`. При error **214** проверьте права / user-токен с `wall`.

Канон: [обзор API](https://dev.vk.com/ru/api/overview), [PHP SDK](https://dev.vk.com/ru/sdk/php).

## Установка

1. Установите **RePost** ≥ 200.1.0.
2. Установите ZIP **RePost Provider: VK** через DLE Plugin Manager.
3. В `devcraft/`:

```bash
composer require vkcom/vk-php-sdk && composer dump-autoload
```

## Получение ключей и ID

OAuth в админке RePost нет — ключи вставляются вручную в форму подключения. Краткие подсказки также показаны под полями на странице редактирования подключения.

Официально: [ключи доступа](https://dev.vk.com/ru/api/access-token/getting-started), [ключ сообщества](https://dev.vk.com/ru/api/access-token/community-token), [права доступа](https://dev.vk.com/ru/reference/access-rights).

### ID сообщества (`vk_group_id`)

Допустимо:

- числовой id (`123456`);
- `club123456` / `public123456` / `event…`;
- **короткое имя** из URL (`moj_krutoj_pablik` для `https://vk.ru/moj_krutoj_pablik`).

Резолв имени — через [`utils.resolveScreenName`](https://dev.vk.com/ru/method/utils.resolveScreenName) ключом сообщества.

### Ключ сообщества (`vk_token`)

Нужен всегда: `wall.post` от имени группы, загрузка документов.

1. Откройте сообщество под аккаунтом администратора.
2. **Управление** → **Настройки** → **Работа с API** (или «Дополнительно» → ключи доступа — формулировки в интерфейсе VK меняются).
3. Создайте ключ доступа сообщества.
4. Включите минимум права **`wall`** и **`docs`** (документы на стену).
5. Скопируйте выданный ключ в поле **«Ключ доступа сообщества»**.

Это **не** тот же ключ, что пользовательский. Community-токен **не** умеет `photos.getWallUploadServer` / `video.save` для стены (типичный error **27**).

Без user-токена доступны типы отправки: **Текст**, **Документ**, **Медиа — файлы**.

### Ключ пользователя (`vk_user_token`)

Нужен для типов **Фото**, **Видео**, **Медиа** / **Медиа — только видео**: upload фото на стену и `video.save`.

Права: **`photos`**, **`video`**. Желательно **`offline`** (бессрочный токен, `expires_in=0`). Аккаунт должен иметь право публиковать в целевом сообществе (админ/редактор).

#### Почему «официальный» OAuth часто не работает (2025–2026)

В [dev.vk.com](https://dev.vk.com) при создании приложения обычно есть только **мини-приложение / игра / плагин** — типа **Standalone больше нет**.  
Для таких приложений Implicit Flow вида:

```text
https://oauth.vk.com/authorize?client_id=APP_ID&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=photos,video,offline&response_type=token&v=5.199
```

часто отвечает `invalid_request` / **`invalid scope`**: права `photos` / `video` / `offline` для нового app не выдаются без согласования.

Кабинет [VK ID](https://id.vk.com/about/business/go) (OAuth 2.1) ориентирован на бизнес-верификацию; расширенные scope для API стены нередко нужно запрашивать у `devsupport@corp.vk.com`. Токены формата `vk2.a.*` из VK ID **не** всегда подходят к классическим method API (`wall.post` и т.п.).

#### Практический способ получить user-токен (для своего аккаунта)

1. Откройте [vkhost.github.io](https://vkhost.github.io/) (сторонний генератор ссылок OAuth под известные клиенты).
2. Выберите приложение вроде **VK Admin** / аналог (если один клиент отвечает `application is blocked` — попробуйте другой из списка).
3. Отметьте права **`photos`**, **`video`**, по возможности **`offline`**.
4. Авторизуйтесь аккаунтом админа группы.
5. После редиректа на `https://oauth.vk.com/blank.html#access_token=…` скопируйте **только** значение `access_token` (от `vk1.a.` до следующего `&`), не весь URL и не `email`.
6. Вставьте в поле **«Ключ доступа пользователя»** в подключении RePost.

Замечания по безопасности и сроку:

- Токен = полный доступ от имени пользователя: не коммитьте, не кидайте в чаты; при утечке смените пароль / снимите доступ приложению.
- Если в URL `expires_in=86400` (сутки), а не `0` — токен временный; без `offline` его придётся обновлять.
- Это обход через чужой client_id; для продакшена «по-белому» — бизнес-приложение VK ID + support с запросом `photos`/`video`.

#### Проверка прав

После сохранения можно косвенно проверить: публикация типа `media` с картинкой/mp4 должна пройти; ошибка «нужен vk_user_token» значит поле пустое; error **27** — вызвали photo/video API community-ключом.

### Поля подключения

| Поле | Описание |
|------|----------|
| `vk_token` | Ключ сообщества |
| `vk_user_token` | Ключ пользователя (фото/видео) |
| `vk_group_id` | ID группы |
| `vk_from_group` | От имени сообщества |
| `vk_send_type` | `text` \| `photo` \| `video` \| `media` \| `media_video` \| `media_document` \| `document` |

Смена провайдера в форме перезагружает schema. Dispatch читает `vk_send_type`.

### Типичные ошибки

| Код / симптом | Смысл |
|---------------|--------|
| `invalid scope` | У приложения нет права запрашивать photos/video/offline |
| `application is blocked` | Выбранный OAuth-клиент заблокирован VK — смените клиент на vkhost |
| 6 | Too many requests / интервал ≥ 3 мин между постами |
| 214 | Нет доступа к публикации (права wall / токен) |
| 27 | Метод недоступен для данного типа ключа — нужен user token |
| 13000 | Страйки сообщества |
| HTTP 500 на upload | Часто SDK без filename (в аддоне — свой upload) или неподдерживаемый формат видео (нужен mp4) |

## Upload (канон VK)

- Фото: [wall-photo](https://dev.vk.com/ru/api/upload/wall-photo) — **не** альбомный `photos.save`
- Видео: [video-in-profile](https://dev.vk.com/ru/api/upload/video-in-profile) — после upload отдельного save нет; на стену — `wall.post`
- Upload файлов — через `CURLFile` с `filename` (Guzzle SDK без имени на video CDN → HTTP 500)
- Docs: [document-in-profile](https://dev.vk.com/ru/api/upload/document-in-profile) — для стены только `docs.getWallUploadServer` (не `getUploadServer`)

## SDK и код

| Слой | Реализация |
|------|------------|
| Composer | `vkcom/vk-php-sdk` ^5.0 (method calls) |
| Factory | `VKClientFactory` → API **5.199**, host из `vk_api_host` |
| Upload | `VkMultipartUpload` (не SDK `upload`) |
| Каталог | `Provider/VK/` |

```bash
composer show vkcom/vk-php-sdk
php devcraft/src/modules/RePost/Provider/VK/selfcheck.php
```

## Roadmap

- shortVideo / stories
- OAuth в админке
- Внешние `link` в video.save

## Связанные страницы

- [../providers.md](../providers.md)
- [telegram.md](telegram.md)
