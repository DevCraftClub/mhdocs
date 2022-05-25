# MH Admin

**Ссылка на
разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/maharder-assets.4/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> 2.0.4

## **Установка / Обновление**

**У вас три варианта для установки:**

### 1. **При помощи bat-Скрипта. Для пользователей Windows**

Для этого устанавливаем [7Zip](https://www.7-zip.org/download.html).
После установки запускаем скрипт install_archive.bat.
После завершения установки - загружаем install.zip в менеджер плагинов.

### 2. **Упаковать самому**

Любым архиватором запаковать всё содержимое в папке upload (нужен формат zip!), причём так, чтобы в корне архива был
файл install.xml и папка engine.
Затем устанавливаем архив через менеджер плагинов.

### 3. **Просто залить**

Залейте папку engine в корень сайта и установите плагин через менеджер плагинов.

## Структура

<details>
	<summary>Просмотр структуры файлов</summary>

```
MHAdmin
 ┣ 📂engine
 ┃ ┣ 📂ajax
 ┃ ┃ ┣ 📂maharder
 ┃ ┃ ┃ ┣ 📂maharder
 ┃ ┃ ┃ ┃ ┣ 📜master.php
 ┃ ┃ ┃ ┃ ┣ 📜_functions.php
 ┃ ┃ ┃ ┃ ┣ 📜_new_module.php
 ┃ ┃ ┃ ┃ ┗ 📜_settings.php
 ┃ ┃ ┃ ┗ 📜master.php
 ┃ ┃ ┗ 📜maharder.php
 ┃ ┗ 📂inc
 ┃ ┃ ┣ 📂maharder
 ┃ ┃ ┃ ┣ 📂admin
 ┃ ┃ ┃ ┃ ┣ 📂assets
 ┃ ┃ ┃ ┃ ┃ ┣ 📂css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜.htaccess
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜base.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fa_fix.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜fa_old.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜icons.css
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜theme.css
 ┃ ┃ ┃ ┃ ┃ ┣ 📂img
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂maharder
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜icon.jpg
 ┃ ┃ ┃ ┃ ┃ ┣ 📂js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜.htaccess
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜base.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜jquery.js
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜theme.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜.htaccess
 ┃ ┃ ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┃ ┃ ┗ 📂admin
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜changelog.php
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜main.php
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜new_module.php
 ┃ ┃ ┃ ┃ ┣ 📂templates
 ┃ ┃ ┃ ┃ ┃ ┣ 📂modules
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂admin
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜changelog.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜main.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜new_module.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📂templateIncludes
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜addCheckbox.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜addInput.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜addSelect.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜addTextarea.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜boxes.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜loader.html
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜segRow.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📂_macros
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜checkbox.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜input.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜menu.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜pagination.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜search.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜select.twig
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜textarea.twig
 ┃ ┃ ┃ ┃ ┃ ┣ 📜base.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜breadcrumb.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.html
 ┃ ┃ ┃ ┃ ┃ ┣ 📜menu.html
 ┃ ┃ ┃ ┃ ┃ ┗ 📜sidebar.html
 ┃ ┃ ┃ ┃ ┣ 📂_locales
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ru_RU.mo
 ┃ ┃ ┃ ┃ ┃ ┗ 📜ru_RU.po
 ┃ ┃ ┃ ┃ ┣ 📜.htaccess
 ┃ ┃ ┃ ┃ ┣ 📜composer.json
 ┃ ┃ ┃ ┃ ┣ 📜composer.lock
 ┃ ┃ ┃ ┃ ┣ 📜composer.phar
 ┃ ┃ ┃ ┃ ┗ 📜index.php
 ┃ ┃ ┃ ┗ 📂_includes
 ┃ ┃ ┃ ┃ ┣ 📂classes
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Admin.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AdminUrlExtension.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Ajax.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DeclineExtension.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜MobileDetectExtension.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜Model.php
 ┃ ┃ ┃ ┃ ┃ ┗ 📜Table.php
 ┃ ┃ ┃ ┃ ┣ 📂extras
 ┃ ┃ ┃ ┃ ┃ ┗ 📜paths.php
 ┃ ┃ ┃ ┃ ┣ 📂module_files
 ┃ ┃ ┃ ┃ ┃ ┣ 📜ajax_master.php.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜inc_admin.php.txt
 ┃ ┃ ┃ ┃ ┃ ┣ 📜modules_main.php.txt
 ┃ ┃ ┃ ┃ ┃ ┗ 📜templates_main.html.txt
 ┃ ┃ ┃ ┃ ┣ 📂traits
 ┃ ┃ ┃ ┃ ┃ ┣ 📜AssetsChecker.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DataLoader.php
 ┃ ┃ ┃ ┃ ┃ ┣ 📜DleData.php
 ┃ ┃ ┃ ┃ ┃ ┗ 📜LogGenerator.php
 ┃ ┃ ┃ ┃ ┗ 📂vendor
 ┃ ┃ ┃ ┃   ┣ Composer vendor
 ┃ ┃ ┃ ┃   ┗ 📜autoload.php
 ┃ ┃ ┗ 📜maharder.php
 ┗ 📜install.xml
```

</details>

## Для пользователей

Для простых пользователей плагинов достаточно просмотреть страницу с [настройкой](./frontend/manage.md). Для разработчиков будет интересно начать со страницы о [шаблонах](./frontend/templates.md)

## Для разработчиков

Решил дать возможность создавать на основе моей админки свои модули, ибо в ЛС часто задают вопросы о том как сделать
свой модуль или с чего начать делать админку.

Как мы все знаем, DLE не предоставляет грамотной документации для разработчиков и раз в пару основных версий меняет
шаблон.

Благодаря узколобости DLE, все классы нужно подключать инклудом. Поэтому вот, перечень классов:


| Название класса | Тип   | Описание                                                                           | Документация                                | Путь подключения                                      |
|-----------------|-------|------------------------------------------------------------------------------------|---------------------------------------------|-------------------------------------------------------|
| Admin           | Class | Основной класс админпанели                                                         | [Admin](./backend/admin.md)                 | engine/inc/maharder/_includes/classes/Admin.php       |
| Ajax            | Class | Облегчённый класс для работы с ajax                                                | [Ajax](./backend/ajax.md)                   | engine/inc/maharder/_includes/classes/Ajax.php        |
| AssetsChecker   | Trait | Вспомогательный класс проверки целостности файлов на сервере                       | [AssetsChecker](./backend/assetschecker.md) | engine/inc/maharder/_includes/trait/AssetsChecker.php |
| DataLoader      | Trait | Вспомогательный класс для подключения и работы с базой данных и файлами на сервере | [DataLoader](./backend/dataloader.md)       | engine/inc/maharder/_includes/trait/DataLoader.php    |
| DleData         | Trait | Вспомогательный класс для работы с данными системы DLE                             | [DleData](./backend/dledata.md)             | engine/inc/maharder/_includes/trait/DleData.php       |
| LogGenerator    | Trait | Вспомогательный класс для логирования ошибок                                       | [LogGenerator](./backend/loggenerator.md)   | engine/inc/maharder/_includes/trait/LogGenerator.php  |
| Model           | Class     | Класс для управления таблицы объекта                                               | [Model](./backend/model.md)                 | engine/inc/maharder/_includes/classes/Model.php       |
| Table               | Class     | Класс для управления таблицы и её миграции                                                | [Table](./backend/table.md)                 | engine/inc/maharder/_includes/classes/Table.php           |
