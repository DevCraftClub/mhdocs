import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Главная`},i=new Date(1787141927e3),a=`

<Callout type="warn" title="Устаревшая документация">
  Эта документация относится к &#x2A;*MH Admin (Legacy)**. Актуальная документация для DevCraft Admin находится в разделе [DevCraft Admin](../../dev/dle/devcraft_admin/install).
</Callout>

\\*\\*Ссылка на
разработку
\\*\\*: [<i class="fa-thin fa-paperclip" /> Перейти к разработке](https://devcraft.club/downloads/maharder-assets.4/)

**Версия модификации**: <i class="fa-duotone fa-code-branch" /> 173.3.3

## Минимальные требования [#минимальные-требования]

* **Версия PHP**: 8.3

* **Расширения PHP**:

  * simplexml (для работы с XML)
  * libxml (базовое расширение для XML)
  * intl (интернационализация, требуется для работы с локализацией через symfony/translation)
  * fileinfo (определение MIME-типов файлов)
  * pdo\\_mysql (PDO-драйвер для вашей СУБД, так как проект использует Cycle ORM)
  * curl (для работы с HTTP-запросами через php-curl-class)
  * mbstring (для корректной работы с многобайтовыми строками, часто требуется Twig и локализацией)
  * openssl (для работы с HTTPS и шифрованием)

* **Рекомендуемые настройки**:

  * Выделенная память PHP: не менее 128M

## **Установка / Обновление** [#установка--обновление]

**У вас четыре варианта для установки:**

### 1. Скрипт сборки архива [#1-скрипт-сборки-архива]

<Tabs groupId="os" items="['Windows', 'Linux / macOS']">
  <Tab value="Windows">
    Установите [7-Zip](https://www.7-zip.org/download.html), запустите \`install_archive.bat\`, затем загрузите получившийся zip в менеджер плагинов DLE.
  </Tab>

  <Tab value="Linux / macOS">
    \`\`\`bash
    chmod +x install_archive.sh
    ./install_archive.sh
    \`\`\`

    Затем установите собранный архив через менеджер плагинов.
  </Tab>
</Tabs>

### 2. **Упаковать самому** [#2-упаковать-самому]

Любым архиватором запаковать всё содержимое в папке upload (нужен формат zip!), причём так, чтобы в корне архива был
файл install.xml и папка engine.
Затем устанавливаем архив через менеджер плагинов.

### 3. **Просто залить** [#3-просто-залить]

Залейте папку engine в корень сайта и установите плагин через менеджер плагинов.

## Структура [#структура]

<details>
  <summary>
    Просмотр структуры файлов
  </summary>

  \`\`\`
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

  \`\`\`
</details>

## Для пользователей [#для-пользователей]

Для простых пользователей плагинов достаточно просмотреть страницу с [настройкой](./frontend/manage). Для
разработчиков будет интересно начать со страницы о [шаблонах](./frontend/templates)

## Для разработчиков [#для-разработчиков]

Для всех желающих разрабатывать, но не имеющих время и терпения работать с админпанелью и кодом самой DLE я решил
предоставить свою основу для этого.
Структура делиться на три части:

* AJAX - класс для работы с AJAX, в \`engine/ajax/maharder/\`
* Сам модуль - в \`engine/inc/maharder/_modules/\`
* Шаблоны - в \`engine/inc/maharder/_templates/\`

Рекомендую использовать для этого [генератор модулей](./new_module).

## Видео с настройкой [#видео-с-настройкой]

<div class="video-wrapper">
  <YouTube id="_L6RyVXaXW4" />
</div>
`,o={contents:[{heading:void 0,content:`Эта документация относится к &#x2A;*MH Admin (Legacy)**. Актуальная документация для DevCraft Admin находится в разделе DevCraft Admin.`},{heading:void 0,content:`\\*\\*Ссылка на
разработку
\\*\\*:  Перейти к разработке`},{heading:void 0,content:`**Версия модификации**:  173.3.3`},{heading:`минимальные-требования`,content:`**Версия PHP**: 8.3`},{heading:`минимальные-требования`,content:`**Расширения PHP**:`},{heading:`минимальные-требования`,content:`simplexml (для работы с XML)`},{heading:`минимальные-требования`,content:`libxml (базовое расширение для XML)`},{heading:`минимальные-требования`,content:`intl (интернационализация, требуется для работы с локализацией через symfony/translation)`},{heading:`минимальные-требования`,content:`fileinfo (определение MIME-типов файлов)`},{heading:`минимальные-требования`,content:`pdo\\_mysql (PDO-драйвер для вашей СУБД, так как проект использует Cycle ORM)`},{heading:`минимальные-требования`,content:`curl (для работы с HTTP-запросами через php-curl-class)`},{heading:`минимальные-требования`,content:`mbstring (для корректной работы с многобайтовыми строками, часто требуется Twig и локализацией)`},{heading:`минимальные-требования`,content:`openssl (для работы с HTTPS и шифрованием)`},{heading:`минимальные-требования`,content:`**Рекомендуемые настройки**:`},{heading:`минимальные-требования`,content:`Выделенная память PHP: не менее 128M`},{heading:`установка--обновление`,content:`**У вас четыре варианта для установки:**`},{heading:`1-скрипт-сборки-архива`,content:"Установите 7-Zip, запустите `install_archive.bat`, затем загрузите получившийся zip в менеджер плагинов DLE."},{heading:`1-скрипт-сборки-архива`,content:`Затем установите собранный архив через менеджер плагинов.`},{heading:`2-упаковать-самому`,content:`Любым архиватором запаковать всё содержимое в папке upload (нужен формат zip!), причём так, чтобы в корне архива был
файл install.xml и папка engine.
Затем устанавливаем архив через менеджер плагинов.`},{heading:`3-просто-залить`,content:`Залейте папку engine в корень сайта и установите плагин через менеджер плагинов.`},{heading:`для-пользователей`,content:`Для простых пользователей плагинов достаточно просмотреть страницу с настройкой. Для
разработчиков будет интересно начать со страницы о шаблонах`},{heading:`для-разработчиков`,content:`Для всех желающих разрабатывать, но не имеющих время и терпения работать с админпанелью и кодом самой DLE я решил
предоставить свою основу для этого.
Структура делиться на три части:`},{heading:`для-разработчиков`,content:"AJAX - класс для работы с AJAX, в `engine/ajax/maharder/`"},{heading:`для-разработчиков`,content:"Сам модуль - в `engine/inc/maharder/_modules/`"},{heading:`для-разработчиков`,content:"Шаблоны - в `engine/inc/maharder/_templates/`"},{heading:`для-разработчиков`,content:`Рекомендую использовать для этого генератор модулей.`}],headings:[{id:`минимальные-требования`,content:`Минимальные требования`},{id:`установка--обновление`,content:`**Установка / Обновление**`},{id:`1-скрипт-сборки-архива`,content:`1\\. Скрипт сборки архива`},{id:`2-упаковать-самому`,content:`2\\. **Упаковать самому**`},{id:`3-просто-залить`,content:`3\\. **Просто залить**`},{id:`структура`,content:`Структура`},{id:`для-пользователей`,content:`Для пользователей`},{id:`для-разработчиков`,content:`Для разработчиков`},{id:`видео-с-настройкой`,content:`Видео с настройкой`}]},s=[{depth:2,url:`#минимальные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Минимальные требования`})},{depth:2,url:`#установка--обновление`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`strong`,{children:`Установка / Обновление`})})},{depth:3,url:`#1-скрипт-сборки-архива`,title:(0,n.jsx)(n.Fragment,{children:`1. Скрипт сборки архива`})},{depth:3,url:`#2-упаковать-самому`,title:(0,n.jsxs)(n.Fragment,{children:[`2. `,(0,n.jsx)(`strong`,{children:`Упаковать самому`})]})},{depth:3,url:`#3-просто-залить`,title:(0,n.jsxs)(n.Fragment,{children:[`3. `,(0,n.jsx)(`strong`,{children:`Просто залить`})]})},{depth:2,url:`#структура`,title:(0,n.jsx)(n.Fragment,{children:`Структура`})},{depth:2,url:`#для-пользователей`,title:(0,n.jsx)(n.Fragment,{children:`Для пользователей`})},{depth:2,url:`#для-разработчиков`,title:(0,n.jsx)(n.Fragment,{children:`Для разработчиков`})},{depth:2,url:`#видео-с-настройкой`,title:(0,n.jsx)(n.Fragment,{children:`Видео с настройкой`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r,Tab:i,Tabs:a,YouTube:o}=t;return r||u(`Callout`,!0),i||u(`Tab`,!0),a||u(`Tabs`,!0),o||u(`YouTube`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Устаревшая документация`,children:(0,n.jsxs)(t.p,{children:[`Эта документация относится к `,(0,n.jsx)(t.strong,{children:`MH Admin (Legacy)`}),`. Актуальная документация для DevCraft Admin находится в разделе `,(0,n.jsx)(t.a,{href:`../../dev/dle/devcraft_admin/install`,children:`DevCraft Admin`}),`.`]})}),`
`,(0,n.jsxs)(t.p,{children:[`**Ссылка на
разработку
**: `,(0,n.jsxs)(t.a,{href:`https://devcraft.club/downloads/maharder-assets.4/`,children:[(0,n.jsx)(`i`,{class:`fa-thin fa-paperclip`}),` Перейти к разработке`]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия модификации`}),`: `,(0,n.jsx)(`i`,{class:`fa-duotone fa-code-branch`}),` 173.3.3`]}),`
`,(0,n.jsx)(t.h2,{id:`минимальные-требования`,children:`Минимальные требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия PHP`}),`: 8.3`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Расширения PHP`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`simplexml (для работы с XML)`}),`
`,(0,n.jsx)(t.li,{children:`libxml (базовое расширение для XML)`}),`
`,(0,n.jsx)(t.li,{children:`intl (интернационализация, требуется для работы с локализацией через symfony/translation)`}),`
`,(0,n.jsx)(t.li,{children:`fileinfo (определение MIME-типов файлов)`}),`
`,(0,n.jsx)(t.li,{children:`pdo_mysql (PDO-драйвер для вашей СУБД, так как проект использует Cycle ORM)`}),`
`,(0,n.jsx)(t.li,{children:`curl (для работы с HTTP-запросами через php-curl-class)`}),`
`,(0,n.jsx)(t.li,{children:`mbstring (для корректной работы с многобайтовыми строками, часто требуется Twig и локализацией)`}),`
`,(0,n.jsx)(t.li,{children:`openssl (для работы с HTTPS и шифрованием)`}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.li,{children:[`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Рекомендуемые настройки`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Выделенная память PHP: не менее 128M`}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка--обновление`,children:(0,n.jsx)(t.strong,{children:`Установка / Обновление`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`У вас четыре варианта для установки:`})}),`
`,(0,n.jsx)(t.h3,{id:`1-скрипт-сборки-архива`,children:`1. Скрипт сборки архива`}),`
`,(0,n.jsxs)(a,{groupId:`os`,items:[`Windows`,`Linux / macOS`],children:[(0,n.jsx)(i,{value:`Windows`,children:(0,n.jsxs)(t.p,{children:[`Установите `,(0,n.jsx)(t.a,{href:`https://www.7-zip.org/download.html`,children:`7-Zip`}),`, запустите `,(0,n.jsx)(t.code,{children:`install_archive.bat`}),`, затем загрузите получившийся zip в менеджер плагинов DLE.`]})}),(0,n.jsxs)(i,{value:`Linux / macOS`,children:[(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`chmod`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` +x`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install_archive.sh`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`./install_archive.sh`})})]})})}),(0,n.jsx)(t.p,{children:`Затем установите собранный архив через менеджер плагинов.`})]})]}),`
`,(0,n.jsxs)(t.h3,{id:`2-упаковать-самому`,children:[`2. `,(0,n.jsx)(t.strong,{children:`Упаковать самому`})]}),`
`,(0,n.jsx)(t.p,{children:`Любым архиватором запаковать всё содержимое в папке upload (нужен формат zip!), причём так, чтобы в корне архива был
файл install.xml и папка engine.
Затем устанавливаем архив через менеджер плагинов.`}),`
`,(0,n.jsxs)(t.h3,{id:`3-просто-залить`,children:[`3. `,(0,n.jsx)(t.strong,{children:`Просто залить`})]}),`
`,(0,n.jsx)(t.p,{children:`Залейте папку engine в корень сайта и установите плагин через менеджер плагинов.`}),`
`,(0,n.jsx)(t.h2,{id:`структура`,children:`Структура`}),`
`,(0,n.jsxs)(`details`,{children:[(0,n.jsx)(`summary`,{children:`Просмотр структуры файлов`}),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  ├── ajax/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── maharder/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      └── maharder/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── _functions.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── _new_module.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── _settings.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── master.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── maharder.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  └── inc/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    ├── maharder/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      ├── _includes/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── classes/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── Admin.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── CacheControl.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── ComposerAction.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── DataManager.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── LogGenerator.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── MhAjax.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── MhTranslation.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── TwigFilter.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── database/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── BasisModel.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── BasisRepository.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── MhDB.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── extras/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── functions.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── mhLoader.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── paths.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── module_files/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── ajax_master.php.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── assets_htaccess.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── changelog.php.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── inc_admin.php.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── module_locale.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── modules_main.php.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── templates_main.html.txt`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── responses/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── AjaxAbstractResponse.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── ErrorResponseAjax.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── SuccessResponseAjax.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── traits/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── AssetsChecker.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── DataLoader.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── DleData.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── UpdatesChecker.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── twigExtensions/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── AdminUrlExtension.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── DateTimeFormatter.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── DeclineExtension.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── MobileDetectExtension.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── TextLimiter.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── types/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── AdminLink.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── Author.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── BreadCrumb.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      ├── _locales/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── de_DE/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── mhadmin.xliff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── en_US/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── mhadmin.xliff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── ru_RU/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── mhadmin.xliff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── uk_UA/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── mhadmin.xliff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      ├── _modules/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── admin/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── icon.jpg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── models/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── MhLog.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── module/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── changelog.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── links.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── logs.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── main.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── new_module.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── repositories/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── MhLogRepository.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      ├── _templates/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── admin/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── changelog.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── logs.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── main.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── new_module.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`      └── admin/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── css/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── themes/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── basic/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                └── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                  └── fonts/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    └── icons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── default/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                └── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                  ├── fonts/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── brand-icons.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── brand-icons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── brand-icons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── brand-icons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── brand-icons.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── outline-icons.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── outline-icons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── outline-icons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── outline-icons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    └── outline-icons.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                  └── images/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    └── flags.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── github/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                └── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                  └── fonts/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── octicons-local.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── octicons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── octicons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    └── octicons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── material/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                └── assets/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                  └── fonts/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    ├── icons.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                    └── icons.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── base.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── bootstrap-suggest.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── dark.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa_fix.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa_old.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── icons.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery-confirm.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── prettify.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── prism.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── theme.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── tokens.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── v4-font-face.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── v4-shims.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── v5-font-face.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── editor/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── emoticons/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── alien.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── angel.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── angry.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── blink.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── blush.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cheerful.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cool.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cwy.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── devil.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── dizzy.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ermm.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── face.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── getlost.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── grin.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── happy.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── heart.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── kissing.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── laughing.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ninja.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pinch.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pouty.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── sad.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── shocked.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── sick.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── sideways.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── silly.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── sleeping.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── smile.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── tongue.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── unsure.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── w00t.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── wassat.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── whistling.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── wink.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── wub.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── formats/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── bbcode.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── xhtml.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── icons/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── material.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── monocons.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── languages/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ar.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ca.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cn.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cs.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── de.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── el.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── en-US.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── en.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── es.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── et.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── fa.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── fr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── gl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── hu.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── id.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── it.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ja.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── lt.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── nb.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── nl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pt-BR.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pt.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ru.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── sv.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── template.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── tr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── tw.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── uk.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── vi.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── plugins/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── autosave.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── autoyoutube.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── dragdrop.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── format.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── plaintext.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── strictbbcode.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── undo.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── v1compat.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── themes/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── content/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`                └── default.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── default.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── defaultdark.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── famfamfam.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── modern.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── office-toolbar.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── office.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── square.min.css`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery.sceditor.bbcode.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery.sceditor.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery.sceditor.xhtml.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── sceditor.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── img/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── custom-favorites/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── maharder/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.jpg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── mystatus/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── notifications/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── telegram/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── webmaster-verification/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── icon.png`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── js/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── i18n/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── translation.de_DE.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── translation.en_US.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── translation.ru_RU.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── translation.uk_UA.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── translator.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── lang/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ar.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── cn.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── de.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── fr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── pl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ru.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── tr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── ua.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── vn.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── timeago/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── README.md`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.af.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.am.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ar.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.az-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.az.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.be.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.bg.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.bs.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ca.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.cs.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.cy.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.da.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.de-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.de.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.dv.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.el.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.en-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.en.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.es-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.es.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.et.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.eu.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.fa-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.fa.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.fi.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.fr-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.fr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.gl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.he.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.hr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.hu.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.hy.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.id.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.is.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.it-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.it.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ja.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.jv.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ko.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ky.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.lt.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.lv.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.mk.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.nl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.no.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.pl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.pt-br-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.pt-br.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.pt-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.pt.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ro.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.rs.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ru.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.rw.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.si.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.sk.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.sl.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.sq.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.sr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.sv.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.th.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.tr-short.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.tr.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.uk.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.ur.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.uz.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.vi.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              ├── jquery.timeago.zh-CN.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`              └── jquery.timeago.zh-TW.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── autosize.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── base.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── bootstrap-suggest.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── cleave.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── clipboard.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery-confirm.min.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── jquery.timeago.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── language.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── mask.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── prettify.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── prism.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── run_prettify.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── theme.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── tokens.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── webfonts/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-brands-400.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-brands-400.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-brands-400.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-brands-400.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-brands-400.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-900.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-900.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-900.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-900.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-900.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-light-300.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-light-300.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-regular-400.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-regular-400.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-thin-100.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-duotone-thin-100.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-light-300.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-light-300.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-light-300.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-light-300.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-light-300.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-regular-400.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-regular-400.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-regular-400.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-regular-400.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-regular-400.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-light-300.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-light-300.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-regular-400.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-regular-400.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-solid-900.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-solid-900.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-thin-100.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-duotone-thin-100.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-light-300.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-light-300.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-regular-400.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-regular-400.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-solid-900.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-solid-900.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-thin-100.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-sharp-thin-100.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-solid-900.eot`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-solid-900.svg`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-solid-900.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-solid-900.woff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-solid-900.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-thin-100.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-thin-100.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── fa-v4compatibility.ttf`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── fa-v4compatibility.woff2`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── templates/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── _macros/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── checkbox.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── filter.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── input.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── menu.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── pagination.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── search.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── select.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── tablesort.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── textarea.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── templateIncludes/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── addCheckbox.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── addInput.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── addSelect.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── addTextarea.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── boxes.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── filterArea.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            ├── loader.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`            └── segRow.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── base.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── breadcrumb.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── footer.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── main.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          ├── menu.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`          └── sidebar.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── .htaccess`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        ├── composer.json`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`        └── index.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    └── maharder.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`install.xml`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})})]})})})]}),`
`,(0,n.jsx)(t.h2,{id:`для-пользователей`,children:`Для пользователей`}),`
`,(0,n.jsxs)(t.p,{children:[`Для простых пользователей плагинов достаточно просмотреть страницу с `,(0,n.jsx)(t.a,{href:`./frontend/manage`,children:`настройкой`}),`. Для
разработчиков будет интересно начать со страницы о `,(0,n.jsx)(t.a,{href:`./frontend/templates`,children:`шаблонах`})]}),`
`,(0,n.jsx)(t.h2,{id:`для-разработчиков`,children:`Для разработчиков`}),`
`,(0,n.jsx)(t.p,{children:`Для всех желающих разрабатывать, но не имеющих время и терпения работать с админпанелью и кодом самой DLE я решил
предоставить свою основу для этого.
Структура делиться на три части:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`AJAX - класс для работы с AJAX, в `,(0,n.jsx)(t.code,{children:`engine/ajax/maharder/`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Сам модуль - в `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_modules/`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Шаблоны - в `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_templates/`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Рекомендую использовать для этого `,(0,n.jsx)(t.a,{href:`./new_module`,children:`генератор модулей`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`видео-с-настройкой`,children:`Видео с настройкой`}),`
`,(0,n.jsx)(`div`,{class:`video-wrapper`,children:(0,n.jsx)(o,{id:`_L6RyVXaXW4`})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};