---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "История изменений - MH Admin"
description: "Документация по плагину история изменений для DLE."
keywords: "PHP, DLE, Плагин, Админка, история изменений, DevCraft, документация"
author: "Maxim Harder"
og:title: "История изменений"
og:description: "Документация по плагину история изменений для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "История изменений"
twitter:description: "Документация по плагину история изменений для DLE."
---

# История изменений

+/- 173.3.3
* **[FIX]** Исправлена работа с composer
* **[FIX]** Исправлена проблема цикличности в классе переводов

+/- 173.3.2
* **[FIX]** По неопределённой причине закинул старую версию поверх новой при мёрдже

+/- 173.3.1
* **[FIX]** Исправлена загрузка скриптов при помощи composer
* **[FIX]** Исправлены мелкие ошибки в коде
* **[FIX]** Добавлены placeholder для стилей и скриптов

+++ 173.3.0
- **[NEW]** Добавлена мультиязычная поддержка, перевод можно осуществить при помощи сервиса Crowdin. Ссылка в подвале каждого модуля.
- **[NEW]** Добавлена возможность выводов логов на отдельной странице.
- **[NEW]** Добавлено моделирование таблиц в базе данных при помощи Cycle ORM. Это поможет в дальнейшем создавать модули с более сложной структурой и работу с данными.
- **[NEW]** Все изменения в таблицах будут храниться в отдельной таблице "migrations" и в папке "_migrations". Это позволит легко сделать откат изменений.
- **[NEW]** Добавлена возможность сортировать и фильтровать данные таблиц на страницах административной панели (где такие есть, пример: Логи).
- **[NEW]** Добавлена возможность проверять на обновление плагина на сайте devcraft.club. Используется гостевой ключ.
- **[UPDATE]** Минимальная версия PHP 8.3
- **[UPDATE]** Функционал обновлён до версий DLE 17.3
- **[UPDATE][BETA]** Установщик упрощён. Теперь зависимости загружаются и устанавливаются при первом открытии [любого] модуля. Может занять несколько минут. Теперь установщик весит мало.
- **[UPDATE]** Откат функций, которые использовали класс DLEFiles. Он не работает со сторонними разработками как надо. Либо работает, но документации к нему то нет.
- **[UPDATE]** Изменена структура файлов админпанели. Теперь все файлы модуля находятся в папке "_modules", a шаблоны в папке "_templates".
- **[DELETE]** Удалены устаревшие и ненужные методы логирования.
- **[DELETE]** Удалена замена иконок в админпанели DLE.

+++ 2.0.7
* **[NEW]** Добавлен функционал проверки обновления плагина
* **[UPDATE]** Изменён подход к некоторым классам
* **[FIX]** Вернул поддержку PHP 7.2
* **[FIX]** Вернул поддержку PHP >= 8

+/- 2.0.6.1
* **[FIX]** Удалены остаточные файлы (кеш, конфигурации, ...)
* **[FIX]** Вернул нужные, но удалённые файлы

+++ 2.0.6
* **[NEW]** Добавлена функция отправки логов в телеграм [БЕТА]
* **[FIX]** Исправил ошибку работы логирования

+/- 2.0.5
* **[FIX]** Исправил работу моделей
* **[FIX]** Исправил обработку кеша
* **[FIX]** Почистил папки

+/- 2.0.4
* **[FIX]** Обновил файлы для генерации модуля

+++ 2.0.3
* **[NEW]** Добавлена возможность пользователю самому решать использовать ли в админпанеле обновлённые иконки или нет
* **[NEW]** Добавлена возможность пользователю самому решать подключать в админке глобальную кнопку по очистке кеша или нет
* **[NEW]** Дальнейшая работа с базой данных будет происходить только через созданные мною модели. Для этого будет использоваться функционал классов Model и Table
* **[UPDATE]** Логирование ошибок будет происходить в дальнейшем через <a href="https://seldaek.github.io/monolog/" target="_blank">Monolog - Logging for PHP</a>. При включённом функционале - библиотека будет отправлять уведомления в консоль браузера, а так-же сохранять файлов в папку логов
* **[UPDATE]** Обновление библиотек до последних версий с минимально возможной PHP версией <b>7.2.9</b>
* **[UPDATE]** Подключены иконки FontAwesome 6.1.1 Pro, используется вариант light (о не достающих или пропавших иконок прошу сообщать)
* **[FIX]** Путь до иконки модуля исправлен 🤦‍♂️
* **[FIX]** Продокументировал классы с небольшими объяснениями, что делает какая функция и для чего используется та или иная переменная
* **[DEL]** Удалён кошелёк WMR

+/- 2.0.2
* **FIX**: Добавлена иконка
* **FIX**: Исправлен файл AJAX

--- 2.0.1
* В связи с некоторыми обстоятельствами пришлось отказаться от i18n модуля. Возможно он выйдет отдельным модулем.
* Обновление зависимостей до минимально требуемой версии PHP 7.2
* Улучшена реструктуризация классов
* Добавлена тёмная тема оформления
* Для желающих создать модуль на основе моей админки была создана функция генерации путей и файлов
* Fontawesome были обновлены до 6ой версии
* Добавлена проверка на целостность файлов и их обновления

+++ 2.0.0
* Полностью новая админпанель, которая не зависит от оформления и функционала самой DLE
* За основу панели был взят движок Twig, создавать свои шаблоны будет проще
* Очищать кеш в админке стало проще - кнопка была выведена в ряд с "Добавить новость" и "Редактировать новости"
* Внедрён i18n в систему DLE, это даёт возможность создавать мультиязычные сайты (модуль отдельно продаваться или делаться не будет)
* i18n: не зависит от базы данных, все фразы хранятся в файлах json
* i18n: в шаблонах достаточно использовать тег {trans text="сюда переводимый текст"}, чтобы перевести фразу
* i18n: в скриптах PHP достаточно использовать функцию translate("сюда переводимый текст"), чтобы перевести фразу
* i18n: в скриптах JS достаточно использовать функцию translateJS("сюда переводимый текст"), чтобы перевести фразу. Желательно подгружать фразы при загруженной странице, т.к. async не доработан
* i18n: мультиязычность поддерживается в "Новости", "Баннеры", "Категории", "Электронная почта / Рассылки", "Метатеги", "Опросы", "Вопросы и ответы", "Статические страницы", "Группы пользователей", а так-же вывод новостей и статических страниц на сайте
* i18n: поддерживается машинный перевод через сервис RapidApi
* i18n: динамичное использование, не требующее массивов данных - достаточно указать текст

+/- 1.7.1
*небольшой фикс в языковом файле

+/- 1.7
* Обновление иконок от fontawesome глобально
* Обновление многих функций
* Добавление языковых файлов (в дальнейшем будет проще локализовать модули)
* Добавлен немецкий язык к оболочке

+/- 1.6
* Фикс

+++ 1.5
* Новые модальные и всплывающие окна
* Улучшены некоторые функции
* Добавлен скрипт DateTimePicker
* Добавлены несколько украшательств

+++ 1.4
* Вывод категорий

+++ 1.3
* Автоматический вывод доп. полей в админке
* Автоматический вывод пользователей
* Исправлены баги в JS

+++ 1.1
* Обновление до актуальных версий DLE
* Мелкие правки

+++ 1.0.0
* Основной релиз