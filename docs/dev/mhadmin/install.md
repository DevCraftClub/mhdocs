---
tags:
    - DLE
    - PHP
    - Плагин
    - админпанель
---
# MH Admin

**Ссылка на
разработку
**: [<i class="fa-thin fa-paperclip"></i> Перейти к разработке](https://devcraft.club/downloads/maharder-assets.4/)

**Версия модификации**: <i class="fa-duotone fa-code-branch"></i> 173.3.3

## Минимальные требования

<ul>
<li><b>Версия PHP</b>: 8.3</li>
<li><b>Расширения PHP</b>:
<ul>
  <li>simplexml (для работы с XML)</li>
  <li>libxml (базовое расширение для XML)</li>
  <li>intl (интернационализация, требуется для работы с локализацией через symfony/translation)</li>
  <li>fileinfo (определение MIME-типов файлов)</li>
  <li>pdo_mysql (PDO-драйвер для вашей СУБД, так как проект использует Cycle ORM)</li>
  <li>curl (для работы с HTTP-запросами через php-curl-class)</li>
  <li>mbstring (для корректной работы с многобайтовыми строками, часто требуется Twig и локализацией)</li>
  <li>openssl (для работы с HTTPS и шифрованием) </li>
</ul></li>
<li><b>Рекомендуемые настройки</b>:
<ul>
  <li>Выделенная память PHP: не менее 128M</li>
</ul></li>
</ul>

## **Установка / Обновление**

**У вас четыре варианта для установки:**

### 1. **При помощи bat-Скрипта. Для пользователей Windows**

Для этого устанавливаем [7Zip](https://www.7-zip.org/download.html).
После установки запускаем скрипт install_archive.bat.
После завершения установки - загружаем install.zip в менеджер плагинов.

### 2. **При помощи sh-Скрипта. Для пользователей Linux/MacOs**

1. Устанавливаем права

```bash
chmod +x install_archive.sh
```

2. Запускаем скрипт

```bash
./install_archive.sh
```

3. Устанавливаем плагин через менеджер плагинов

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
engine/
  ├── ajax/
    ├── maharder/
      └── maharder/
        ├── _functions.php
        ├── _new_module.php
        ├── _settings.php
        └── master.php
    └── maharder.php
  └── inc/
    ├── maharder/
      ├── _includes/
        ├── classes/
          ├── Admin.php
          ├── CacheControl.php
          ├── ComposerAction.php
          ├── DataManager.php
          ├── LogGenerator.php
          ├── MhAjax.php
          ├── MhTranslation.php
          └── TwigFilter.php
        ├── database/
          ├── BasisModel.php
          ├── BasisRepository.php
          └── MhDB.php
        ├── extras/
          ├── functions.php
          ├── mhLoader.php
          └── paths.php
        ├── module_files/
          ├── ajax_master.php.txt
          ├── assets_htaccess.txt
          ├── changelog.php.txt
          ├── inc_admin.php.txt
          ├── module_locale.txt
          ├── modules_main.php.txt
          └── templates_main.html.txt
        ├── responses/
          ├── AjaxAbstractResponse.php
          ├── ErrorResponseAjax.php
          └── SuccessResponseAjax.php
        ├── traits/
          ├── AssetsChecker.php
          ├── DataLoader.php
          ├── DleData.php
          └── UpdatesChecker.php
        ├── twigExtensions/
          ├── AdminUrlExtension.php
          ├── DateTimeFormatter.php
          ├── DeclineExtension.php
          ├── MobileDetectExtension.php
          └── TextLimiter.php
        └── types/
          ├── AdminLink.php
          ├── Author.php
          └── BreadCrumb.php
      ├── _locales/
        ├── de_DE/
          └── mhadmin.xliff
        ├── en_US/
          └── mhadmin.xliff
        ├── ru_RU/
          └── mhadmin.xliff
        ├── uk_UA/
          └── mhadmin.xliff
        └── .htaccess
      ├── _modules/
        └── admin/
          ├── assets/
            ├── .htaccess
            └── icon.jpg
          ├── models/
            └── MhLog.php
          ├── module/
            ├── changelog.php
            ├── links.php
            ├── logs.php
            ├── main.php
            └── new_module.php
          └── repositories/
            └── MhLogRepository.php
      ├── _templates/
        └── admin/
          ├── changelog.html
          ├── logs.html
          ├── main.html
          └── new_module.html
      └── admin/
        ├── assets/
          ├── css/
            ├── themes/
              ├── basic/
                └── assets/
                  └── fonts/
                    ├── icons.eot
                    ├── icons.svg
                    ├── icons.ttf
                    └── icons.woff
              ├── default/
                └── assets/
                  ├── fonts/
                    ├── brand-icons.eot
                    ├── brand-icons.svg
                    ├── brand-icons.ttf
                    ├── brand-icons.woff
                    ├── brand-icons.woff2
                    ├── icons.eot
                    ├── icons.svg
                    ├── icons.ttf
                    ├── icons.woff
                    ├── icons.woff2
                    ├── outline-icons.eot
                    ├── outline-icons.svg
                    ├── outline-icons.ttf
                    ├── outline-icons.woff
                    └── outline-icons.woff2
                  └── images/
                    ├── .htaccess
                    └── flags.png
              ├── github/
                └── assets/
                  └── fonts/
                    ├── octicons-local.ttf
                    ├── octicons.svg
                    ├── octicons.ttf
                    └── octicons.woff
              └── material/
                └── assets/
                  └── fonts/
                    ├── icons.eot
                    ├── icons.svg
                    ├── icons.ttf
                    ├── icons.woff
                    └── icons.woff2
            ├── .htaccess
            ├── base.css
            ├── bootstrap-suggest.css
            ├── dark.css
            ├── fa_fix.css
            ├── fa_old.css
            ├── icons.css
            ├── jquery-confirm.min.css
            ├── prettify.css
            ├── prism.css
            ├── theme.css
            ├── tokens.css
            ├── v4-font-face.min.css
            ├── v4-shims.min.css
            └── v5-font-face.min.css
          ├── editor/
            ├── emoticons/
              ├── alien.png
              ├── angel.png
              ├── angry.png
              ├── blink.png
              ├── blush.png
              ├── cheerful.png
              ├── cool.png
              ├── cwy.png
              ├── devil.png
              ├── dizzy.png
              ├── ermm.png
              ├── face.png
              ├── getlost.png
              ├── grin.png
              ├── happy.png
              ├── heart.png
              ├── kissing.png
              ├── laughing.png
              ├── ninja.png
              ├── pinch.png
              ├── pouty.png
              ├── sad.png
              ├── shocked.png
              ├── sick.png
              ├── sideways.png
              ├── silly.png
              ├── sleeping.png
              ├── smile.png
              ├── tongue.png
              ├── unsure.png
              ├── w00t.png
              ├── wassat.png
              ├── whistling.png
              ├── wink.png
              └── wub.png
            ├── formats/
              ├── bbcode.js
              └── xhtml.js
            ├── icons/
              ├── material.js
              └── monocons.js
            ├── languages/
              ├── ar.js
              ├── ca.js
              ├── cn.js
              ├── cs.js
              ├── de.js
              ├── el.js
              ├── en-US.js
              ├── en.js
              ├── es.js
              ├── et.js
              ├── fa.js
              ├── fr.js
              ├── gl.js
              ├── hu.js
              ├── id.js
              ├── it.js
              ├── ja.js
              ├── lt.js
              ├── nb.js
              ├── nl.js
              ├── pl.js
              ├── pt-BR.js
              ├── pt.js
              ├── ru.js
              ├── sv.js
              ├── template.js
              ├── tr.js
              ├── tw.js
              ├── uk.js
              └── vi.js
            ├── plugins/
              ├── autosave.js
              ├── autoyoutube.js
              ├── dragdrop.js
              ├── format.js
              ├── plaintext.js
              ├── strictbbcode.js
              ├── undo.js
              └── v1compat.js
            ├── themes/
              ├── content/
                └── default.min.css
              ├── default.min.css
              ├── defaultdark.min.css
              ├── famfamfam.png
              ├── modern.min.css
              ├── office-toolbar.min.css
              ├── office.min.css
              └── square.min.css
            ├── .htaccess
            ├── jquery.sceditor.bbcode.min.js
            ├── jquery.sceditor.min.js
            ├── jquery.sceditor.xhtml.min.js
            └── sceditor.min.js
          ├── img/
            ├── custom-favorites/
              └── icon.png
            ├── maharder/
              └── icon.jpg
            ├── mystatus/
              └── icon.png
            ├── notifications/
              └── icon.png
            ├── telegram/
              └── icon.png
            ├── webmaster-verification/
              └── icon.png
            └── .htaccess
          ├── js/
            ├── i18n/
              ├── .htaccess
              ├── translation.de_DE.js
              ├── translation.en_US.js
              ├── translation.ru_RU.js
              ├── translation.uk_UA.js
              └── translator.js
            ├── lang/
              ├── ar.js
              ├── cn.js
              ├── de.js
              ├── fr.js
              ├── pl.js
              ├── ru.js
              ├── tr.js
              ├── ua.js
              └── vn.js
            ├── timeago/
              ├── README.md
              ├── jquery.timeago.af.js
              ├── jquery.timeago.am.js
              ├── jquery.timeago.ar.js
              ├── jquery.timeago.az-short.js
              ├── jquery.timeago.az.js
              ├── jquery.timeago.be.js
              ├── jquery.timeago.bg.js
              ├── jquery.timeago.bs.js
              ├── jquery.timeago.ca.js
              ├── jquery.timeago.cs.js
              ├── jquery.timeago.cy.js
              ├── jquery.timeago.da.js
              ├── jquery.timeago.de-short.js
              ├── jquery.timeago.de.js
              ├── jquery.timeago.dv.js
              ├── jquery.timeago.el.js
              ├── jquery.timeago.en-short.js
              ├── jquery.timeago.en.js
              ├── jquery.timeago.es-short.js
              ├── jquery.timeago.es.js
              ├── jquery.timeago.et.js
              ├── jquery.timeago.eu.js
              ├── jquery.timeago.fa-short.js
              ├── jquery.timeago.fa.js
              ├── jquery.timeago.fi.js
              ├── jquery.timeago.fr-short.js
              ├── jquery.timeago.fr.js
              ├── jquery.timeago.gl.js
              ├── jquery.timeago.he.js
              ├── jquery.timeago.hr.js
              ├── jquery.timeago.hu.js
              ├── jquery.timeago.hy.js
              ├── jquery.timeago.id.js
              ├── jquery.timeago.is.js
              ├── jquery.timeago.it-short.js
              ├── jquery.timeago.it.js
              ├── jquery.timeago.ja.js
              ├── jquery.timeago.jv.js
              ├── jquery.timeago.ko.js
              ├── jquery.timeago.ky.js
              ├── jquery.timeago.lt.js
              ├── jquery.timeago.lv.js
              ├── jquery.timeago.mk.js
              ├── jquery.timeago.nl.js
              ├── jquery.timeago.no.js
              ├── jquery.timeago.pl.js
              ├── jquery.timeago.pt-br-short.js
              ├── jquery.timeago.pt-br.js
              ├── jquery.timeago.pt-short.js
              ├── jquery.timeago.pt.js
              ├── jquery.timeago.ro.js
              ├── jquery.timeago.rs.js
              ├── jquery.timeago.ru.js
              ├── jquery.timeago.rw.js
              ├── jquery.timeago.si.js
              ├── jquery.timeago.sk.js
              ├── jquery.timeago.sl.js
              ├── jquery.timeago.sq.js
              ├── jquery.timeago.sr.js
              ├── jquery.timeago.sv.js
              ├── jquery.timeago.th.js
              ├── jquery.timeago.tr-short.js
              ├── jquery.timeago.tr.js
              ├── jquery.timeago.uk.js
              ├── jquery.timeago.ur.js
              ├── jquery.timeago.uz.js
              ├── jquery.timeago.vi.js
              ├── jquery.timeago.zh-CN.js
              └── jquery.timeago.zh-TW.js
            ├── .htaccess
            ├── autosize.min.js
            ├── base.js
            ├── bootstrap-suggest.min.js
            ├── cleave.min.js
            ├── clipboard.js
            ├── jquery-confirm.min.js
            ├── jquery.js
            ├── jquery.timeago.js
            ├── language.js
            ├── mask.js
            ├── prettify.js
            ├── prism.js
            ├── run_prettify.js
            ├── theme.js
            └── tokens.js
          └── webfonts/
            ├── .htaccess
            ├── fa-brands-400.eot
            ├── fa-brands-400.svg
            ├── fa-brands-400.ttf
            ├── fa-brands-400.woff
            ├── fa-brands-400.woff2
            ├── fa-duotone-900.eot
            ├── fa-duotone-900.svg
            ├── fa-duotone-900.ttf
            ├── fa-duotone-900.woff
            ├── fa-duotone-900.woff2
            ├── fa-duotone-light-300.ttf
            ├── fa-duotone-light-300.woff2
            ├── fa-duotone-regular-400.ttf
            ├── fa-duotone-regular-400.woff2
            ├── fa-duotone-thin-100.ttf
            ├── fa-duotone-thin-100.woff2
            ├── fa-light-300.eot
            ├── fa-light-300.svg
            ├── fa-light-300.ttf
            ├── fa-light-300.woff
            ├── fa-light-300.woff2
            ├── fa-regular-400.eot
            ├── fa-regular-400.svg
            ├── fa-regular-400.ttf
            ├── fa-regular-400.woff
            ├── fa-regular-400.woff2
            ├── fa-sharp-duotone-light-300.ttf
            ├── fa-sharp-duotone-light-300.woff2
            ├── fa-sharp-duotone-regular-400.ttf
            ├── fa-sharp-duotone-regular-400.woff2
            ├── fa-sharp-duotone-solid-900.ttf
            ├── fa-sharp-duotone-solid-900.woff2
            ├── fa-sharp-duotone-thin-100.ttf
            ├── fa-sharp-duotone-thin-100.woff2
            ├── fa-sharp-light-300.ttf
            ├── fa-sharp-light-300.woff2
            ├── fa-sharp-regular-400.ttf
            ├── fa-sharp-regular-400.woff2
            ├── fa-sharp-solid-900.ttf
            ├── fa-sharp-solid-900.woff2
            ├── fa-sharp-thin-100.ttf
            ├── fa-sharp-thin-100.woff2
            ├── fa-solid-900.eot
            ├── fa-solid-900.svg
            ├── fa-solid-900.ttf
            ├── fa-solid-900.woff
            ├── fa-solid-900.woff2
            ├── fa-thin-100.ttf
            ├── fa-thin-100.woff2
            ├── fa-v4compatibility.ttf
            └── fa-v4compatibility.woff2
        ├── templates/
          ├── _macros/
            ├── checkbox.twig
            ├── filter.twig
            ├── input.twig
            ├── menu.twig
            ├── pagination.twig
            ├── search.twig
            ├── select.twig
            ├── tablesort.twig
            └── textarea.twig
          ├── templateIncludes/
            ├── addCheckbox.html
            ├── addInput.html
            ├── addSelect.html
            ├── addTextarea.html
            ├── boxes.html
            ├── filterArea.html
            ├── loader.html
            └── segRow.html
          ├── base.html
          ├── breadcrumb.html
          ├── footer.html
          ├── main.html
          ├── menu.html
          └── sidebar.html
        ├── .htaccess
        ├── composer.json
        └── index.php
    └── maharder.php
install.xml

```

</details>

## Для пользователей

Для простых пользователей плагинов достаточно просмотреть страницу с [настройкой](./frontend/manage.md). Для
разработчиков будет интересно начать со страницы о [шаблонах](./frontend/templates.md)

## Для разработчиков

Для всех желающих разрабатывать, но не имеющих время и терпения работать с админпанелью и кодом самой DLE я решил
предоставить свою основу для этого.
Структура делиться на три части:

- AJAX - класс для работы с AJAX, в `engine/ajax/maharder/`
- Сам модуль - в `engine/inc/maharder/_modules/`
- Шаблоны - в `engine/inc/maharder/_templates/`

Рекомендую использовать для этого [генератор модулей](./new_module.md).

## Видео с настройкой

<div class="video-wrapper">
  <iframe width="1280" height="720" src="https://www.youtube.com/embed/_L6RyVXaXW4" frameborder="0" allowfullscreen></iframe>
</div>