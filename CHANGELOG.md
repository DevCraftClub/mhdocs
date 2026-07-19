# Журнал изменений

Формат основан на [Keep a Changelog](https://keepachangelog.com/ru/1.0.0/).

## [2.0.0] - 2026-07-19

Мажорный релиз: масштабное расширение документации DevCraft Admin и его модулей
(RePost, TagsAdd, DLE Faker), новые разделы по архитектуре и экономной разработке
с ИИ.

### 📚 Документация

**DevCraft Admin (core)**

- Добавлена документация по точкам входа плагина: `engine/inc/devcraft.php`,
  `init.php`, `ajax.php` и bootstrap, с диаграммами потоков запросов для
  админ-страниц и AJAX.
- Документирован базовый класс `AbstractPage` (методы и свойства для
  административных страниц).
- Добавлены страницы для `FileResponse` и `UploadedFile`.
- Документирован новый тип пункта меню `hidden` в `AdminLink`.
- Уточнено поведение AJAX при неизвестном методе и автодобавление параметра
  `mod` в `DevCraft.Ajax.post` из атрибута layout-а.
- Добавлен класс `ParseTemplateTags` в индекс документации.
- Документированы классы `PackagePolicyService`, `ComposerStateReader` и
  `LogMessagePresenter` с примерами использования.
- Раздел `manifest.md` расширен описанием блока `composer_required`.
- Добавлена инструкция по миграции DB Manager с MHAdmin на DevCraft Admin 200.1.3.
- Добавлены раздел про CRUD-страницы на основе модели и примеры работы с
  формами в backend.
- Добавлен документ «Конституция PHP» и раздел про экономную разработку с ИИ
  (таблица ролей инструментов и политики для dle200test).

**RePost**

- Добавлены документы по установке плагина, разработке собственных провайдеров
  доставки и интеграции API в сторонние разработки.
- Добавлена документация по подключениям (`connections.md`), cron-отправке
  (`cron.md`), шаблонам (`templates.md`), тегам шаблонов (`template_tags.md`)
  и списку провайдеров (`providers.md`).
- Расширено описание `sendRepost()` (параметры `defer`, `planned`,
  `template_mode`, `template_ids`), `repostRunCron()` и добавлена функция
  `repostOptionsFromRequest()`.
- Добавлена полная документация провайдера Telegram: получение токена и
  chat id, типы отправки медиа, лимиты Bot API, структура каталога и
  конфигурация.
- Название платформы «VKontakte» заменено на актуальное «VK.com» во всей
  документации провайдера, обновлены примеры URL и названий сообществ.

**TagsAdd (usertags)**

- Документация переструктурирована в раздел `usertags/` с отдельными
  страницами `install.md`, `settings.md`, `theme.md` и `changelog.md`.
- Обновлены плейсхолдеры в примерах `ParseTemplateTags` на актуальные форматы
  TagsAdd (`{user}`, `{suggested_tags}` вместо `%user%`, `%tags%`).

**DLE Faker**

- Инструкция по установке переписана: версия обновлена до 200.1.4, добавлены
  метаданные для SEO, уточнены минимальные требования (DLE 20.0, PHP 8.3,
  DevCraft Admin ≥ 200.4.0), добавлена пошаговая установка архива и Composer,
  удалена устаревшая информация о legacy-путях.

### 🔗 Ссылки

- [Readme DevCraft](https://readme.devcraft.club)
- [GitHub Pages](https://devcraftclub.github.io/mhdocs/)
