---
tags:
    - Faker
    - PHP
    - DLE
    - Генератор
---
# DLE Faker

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/dle-faker.29/)

DLE Faker - лагин, что позволяет вам генерировать случайные данные для DLE. На данный момент поддерживаются следующие компоненты: новости и пользователи.

* **Версия модификации**: <i class="fa-duotone fa-code-branch"></i> 173.1.1

!!! warning "Минимальная версия MH Admin"
    **Минимальная версия MH Admin**: [<i class="fa-duotone fa-code-branch"></i> 173.3.3](../mhadmin/install.md)

## **Установка / Обновление**

Смотри [инструкцию по установке](../install_instructions.md).

### **Установка зависимостей** (Опционально)

Если в ходе использования выскочит ошибка связанная с `Faker` или / и `Faker\Factory` - установите зависимости через [композер](../composer.md).

Нужно установить следующую зависимость:

```bash
composer require fakerphp/faker
```

В теории она должна прописаться через файл `init.php`.


## **Структура**


```
engine/
  ├── ajax/
    └── maharder/
      └── dle_faker/
        ├── generator_create_post.php
        ├── generator_create_user.php
        ├── master.php
        ├── parse_content.php
        ├── settings.php
        ├── templates_change_status.php
        ├── templates_create.php
        └── templates_delete.php
  └── inc/
    ├── maharder/
      ├── _locales/
        ├── de_DE/
          └── dle_faker.xliff
        ├── en_US/
          └── dle_faker.xliff
        ├── ru_RU/
          └── dle_faker.xliff
        ├── uk_UA/
          └── dle_faker.xliff
        └── .htaccess
      ├── _modules/
        └── dle_faker/
          ├── assets/
            ├── .htaccess
            └── icon.png
          ├── models/
            └── FakerTemplate.php
          ├── module/
            ├── changelog.php
            ├── generator.php
            ├── main.php
            ├── tags.php
            └── templates.php
          ├── pages/
            ├── generator_all.php
            ├── generator_news.php
            ├── generator_users.php
            ├── templates_all.php
            └── templates_create.php
          ├── repositories/
            └── FakerTemplateRepository.php
          └── utils/
            ├── composer.lock
            ├── faker_lang.php
            ├── helper_tags.php
            ├── init.php
            ├── post_tags.php
            └── user_tags.php
      └── _templates/
        └── dle_faker/
          ├── generator_all.html
          ├── generator_posts.html
          ├── generator_users.html
          ├── main.html
          ├── tags.html
          ├── templates_all.html
          └── templates_create.html
    └── dle_faker.php
install.xml

```