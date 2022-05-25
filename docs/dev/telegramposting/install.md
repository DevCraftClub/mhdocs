# Telegram Posting

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/telegram-posting.11/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> 1.6.7

## **Установка / Обновление**

**У вас три варианта для установки:**

1. **При помощи bat-Скрипта. Для пользователей Windows**

Для этого устанавливаем [7Zip](https://www.7-zip.org/download.html).
После установки запускаем скрипт install_archive.bat.
После завершения установки - загружаем install.zip в менеджер плагинов.

2. **Упаковать самому**

Любым архиватором запаковать всё содержимое в папке upload (нужен формат zip!), причём так, чтобы в корне архива был файл install.xml и папка engine.
Затем устанавливаем архив через менеджер плагинов.

3. **Просто залить**

Залейте папку engine в корень сайта и установите плагин через менеджер плагинов.

## Поддерживаемые теги для шаблона отправки

|Теги|Описание|
|----|--------|
|**Теги** для **короткой новости** движка **DLE**|[Документация DLE](https://dle-news.ru/extras/online/all17.html)|
|**{tags_no_link}**|Вывод тегов без ссылок|
|**{hashtags}**|Вывод тегов в виде хештегов (тег без ссылки, но добавляется # к тегу)|
|**[xfvalue_XXX_text]**|Если доп. поле является перекрестной ссылкой, то выводиться будет как простой текст|
|**[xfvalue_XXX_hashtag]**|Если доп. поле является перекрестной ссылкой, то выводиться будет как хештег|
|**[telegram_media_xfield_XXX file=Y max=Z]**|Добавляет значение в массив медиа для сообщения.<br>- XXX - название доп. поля<br>- Y - Номер медиафайла, если в перечени несколько файлов (file= не обязателен)<br>- Z - максимальное кол-во добавляемых файлов, если в перечени несколько файлов, иначе добавятся все (max= не обязателен). Не совместим с опцией file.|
|**[telegram_media_video video=X max=Z]**|Добавление видео в массив медиа.<br>- X - номер видео<br>- Y - Номер медиафайла, если в перечени несколько файлов (video= не обязателен)<br>- Z - максимальное кол-во добавляемых файлов, если в перечени несколько файлов, иначе добавятся все (max= не обязателен). Не совместим с опцией video.|
|**[telegram_media_audio audio=X max=Z]**|Добавление аудио в массив медиа.<br>- Y - Номер медиафайла, если в перечени несколько файлов (audio= не обязателен). Не совместим с опцией audio.<br>- Z - максимальное кол-во добавляемых файлов, если в перечени несколько файлов, иначе добавятся все (max= не обязателен)|
|**[telegram_media_image image=X max=Z]**|Добавление изображений в массив медиа.<br>- Y - Номер медиафайла, если в перечени несколько файлов (image= не обязателен). Не совместим с опцией image.<br>- Z - максимальное кол-во добавляемых файлов, если в перечени несколько файлов, иначе добавятся все (max= не обязателен). Не совместим с опцией image.|
|**[telegram_media_allimages image=X max=Z]**|Учитываются все изображения добавленные в краткую и полную новость, а так-же из доп. полей.<br>- Y - Номер медиафайла, если в перечени несколько файлов (image= не обязателен)<br>- Z - максимальное кол-во добавляемых файлов, если в перечени несколько файлов, иначе добавятся все (max= не обязателен). Не совместим с опцией image.|
|**[telegram_thumb]XXX[/telegram_thumb]**|Миниатюра или же превьюшка. Вместо XXX заполняем теги, иначе будет браться первое изображение из массива изображений.<br>- Максимальный размер изображения - 200 kb<br>- Максимальная высота и ширина - 320 px<br>- Указывать только онду ссылку на миниатюру, иначе будет браться первое изображение из массива изображений|
|**[telegram_title]XXX[/telegram_title]**|Заголовок для сообщения в телеграме. Вместо XXX выши теги, иначе будет браться заголовок новости.|
|**[button=X]Y[/button]**|Добавление кнопки под сообщением.<br>- X - ссылка<br>- Y - описание ссылки|


Теги **[telegram_media_** будут обработаны в том случае, если выбран медийный шаблон. Иначе - станут пустышкой. Если загруженный файл не будет являться разрешённым форматом, то он будет загружен как документ. Максимальное кол-во медиа файлов: 10.

## **Вывод сообщений**

- **Текстовой вывод** - Обыкновенный вывод сообщений.
- **Галерейный вывод** - Вывод сообщений с поддержкой медиавставок (до 10-ти штук)
- **Сообщение с постером** - Вывод сообщения с основным постером, в качестве постера берётся первое указанное изображение, другие игнорируются
- **Сообщение с аудио** - Вывод сообщения с аудио, как основа, в качестве аудио берётся первое указанное аудио, другие игнорируются
- **Сообщение с видео** - Вывод сообщения с видео, как основа, в качестве видео берётся первое указанное видео, другие игнорируются


## **Подключение в сторонние разработки**

*Полезно для парсеров*

После того, как новость будет сохранена в базу данных, добавьте этот код:

```php
$tg_post_id = $news_id; #идентификатор ID новости
$tg_post_type = 'addnews'; #тип добавления, addnews или editnews
@include DLEPlugins::Check(ENGINE_DIR . '/inc/maharder/telegram/custom_add.php');
```

## **Отправка сообщений по крону**

!!! warning "Предупреждение!"
	Данный файл не обрабатывается системой плагинов, поэтому все правки должны быть сделаны в ручную!

Работу с кроном перенимает штатный файл **cron.php**, что находится в корне сайта. Открываем его и находим значение:

```php
$allow_cron = 
```

Если дальше стоит **0**, то меняем его на **1**, в противом случае - пропускаешм шаг.

Далее, ищем 

```php
} elseif($cronmode == "antivirus") {
```

**Выше** добавляем:

```php
elseif($cronmode == "telegram") {
            include_once (DLEPlugins::Check(ENGINE_DIR . "/ajax/maharder/telegram/cronadd.php"));
            die ("done");
```

## Видео с настройкой

<div class="video-wrapper">
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/XZ-EqmK4VTw" frameborder="0" allowfullscreen></iframe>
</div>