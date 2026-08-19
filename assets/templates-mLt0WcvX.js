import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Шаблоны`,description:`Документация по плагину шаблоны для DLE.`},i=new Date(1787145028e3),a=`

Все шаблоны расположены по пути \`engine/inc/maharder/admin/templates\` и \`engine/inc/maharder/_templates/ваш_модуль\`. Для оформления используется шаблонизатор [Twig](https://twig.symfony.com/doc/3.x/templates.html) с некоторыми дополнениями.

***

## Структура [#структура]

\`\`\`
📦templates
 ┣ 📂templateIncludes
 ┃ ┣ 📜addCheckbox.html
 ┃ ┣ 📜addInput.html
 ┃ ┣ 📜addSelect.html
 ┃ ┣ 📜addTextarea.html
 ┃ ┣ 📜boxes.html
 ┃ ┣ 📜loader.html
 ┃ ┗ 📜segRow.html
 ┣ 📂_macros
 ┃ ┣ 📜checkbox.twig
 ┃ ┣ 📜input.twig
 ┃ ┣ 📜menu.twig
 ┃ ┣ 📜pagination.twig
 ┃ ┣ 📜search.twig
 ┃ ┣ 📜select.twig
 ┃ ┗ 📜textarea.twig
 ┣ 📜base.html
 ┣ 📜breadcrumb.html
 ┣ 📜footer.html
 ┣ 📜menu.html
 ┗ 📜sidebar.html
\`\`\`

***

### Основное [#основное]

#### base.html [#basehtml]

Основной файл, который отвечает за всё подключение всех стилей и скриптов.

**Блоки**:

| Название | Описание                                 |
| -------- | ---------------------------------------- |
| title    | Блок заголовка                           |
| content  | Блок основного содержимого               |
| scripts  | Блок содержимого дополнительных скриптов |

***

#### breadcrumb.html [#breadcrumbhtml]

Автоматическая генерация хлебных крошек

***

##### footer.html [#footerhtml]

Вывод подвала, а так-же генерация ссылок

***

#### menu.html [#menuhtml]

Вывод верхнего меню

***

#### sidebar.html [#sidebarhtml]

Вывод бокового меню для маленьких экранов

***

### Подключение шаблонов [#подключение-шаблонов]

Все подключения находятся в папке \`engine/inc/maharder/admin/templates/templateIncludes\`.

* Для общего блага и простоты использование рекомендуется использовать макросы
* Все элементы выводятся через шаблон \`engine/inc/maharder/admin/templates/templateIncludes/segRow.html\`

#### boxes.html [#boxeshtml]

Важный объект для создания [табов](https://fomantic-ui.com/modules/tab.html).

**Пример использования**:

\`\`\`twig
<div class="ui segment">
	{{ include('templateIncludes/boxes.html', {
		boxes: {
			main: {
				link: '#',
				name: 'Основные настройки',
				icon: 'home icon'
			},
			cron: {
				link: '#',
				name: 'Настройки крона',
				icon: 'clock outline icon'
			},
			telegram: {
				link: '#',
				name: 'Настройка бота',
				icon: 'universal access icon'
			},
			templates: {
				link: '#',
				name: 'Шаблоны',
				icon: 'pencil alternate icon'
			},
		}
	})
	}}
</div>
\`\`\`

**Параметры**:

\`\`\`twig
{{ include('templateIncludes/boxes.html', {
	boxes: {
		id: {
			link: '#',
			name: 'Название',
			icon: 'Класс'
		}
	}
	})
}}
\`\`\`

Важным параметром является свойство **boxes**. Он перенимает объект в виде массива ссылок. Каждый элемент ссылки содержит четыре главных атрибута.

* **id*&#x2A; - Универсальный индикатор, который будет так-же установлен у сегмента или блока. У первого блока обязательно должен быть класс **.active**.
* **id.link*&#x2A; - Если указывается как часть табов, то нужно указывать &#x2A;*#**. Если же нужна ссылка в прямом смысле этого слова, то указывайте ссылку
* **id.name** - Название таба
* **id.icon** - Название класса иконки

Сегменты выглядят примерно так:

\`\`\`html
<form class="ui form segment">
	<div class="ui bottom attached tab active" data-tab="main"></div>
	<div class="ui bottom attached tab" data-tab="cron"></div>
	<div class="ui bottom attached tab" data-tab="telegram"></div>
</form>
\`\`\`

***

#### segRow\\.html [#segrowhtml]

Рекомендуется использовать лишь тогда, когда нет альтернативы или возможности вывести доп. информацию

**Пример использования**:

\`\`\`twig
{{ include('templateIncludes/segRow.html', {
	id: 'cron_descr',
	name: 'Настройка крона',
	descr: "Если вы не сильны в crontab и не знаете как правильно настроить всё - данная функция для вас",
	html: 'Если у вас нет доступа к крону или SSH, то выполняем этот скрипт: <a href="' ~ dle_config.http_home_url ~ 'cron.php?cronmode=telegram" target="_blank">cron.php?cronmode=telegram</a><br>Если же вы всётаки его имеете, то выполните этот запрос <kbd>crontab -e</kbd> и в самый низ вставьте следующую строчку:<br><kbd>* * * * * /usr/bin/php -f ' ~document_root~ '/cron.php telegram</kbd><br>Простой генератор для крона можно увидеть тут: <a href="https://www.crontabgenerator.com" target="_blank">http://www.crontabgenerator.com</a><br>Замените <kbd>/usr/bin/php</kbd> на путь вашего интерпретатора. Если не знаете где он лежит, то узнаете это с помощью <kbd>which php</kbd>'
	})
}}
\`\`\`

**Параметры**:

\`\`\`twig
{{ include('templateIncludes/segRow.html', {
		type: type,
		id: id,
		name: name,
		descr: descr,
		html: html,
	})
}}
\`\`\`

Рекомендуются именно эти параметры для вывода дополнительной информации в сегмент отображения данных.

| Параметр  | Описание                                                  |
| --------- | --------------------------------------------------------- |
| **type**  | Тип строки, для простого текста достаточно указать \`html\` |
| **id**    | Уникальное значение строки                                |
| **name**  | Название строки                                           |
| **descr** | Описание строки                                           |
| **html**  | Произвольная информация                                   |

### Макросы [#макросы]

Функционал, который помогает в оформлении шаблонов, особенно с рекурсивными значениями.

* Намерено для них было использование расширение twig, чтобы отличить от вставок
* Рекомендуется использовать именно макросы, нежели вставки шаблонов из \`templateIncludes\`

***

#### checkbox.twig [#checkboxtwig]

Выводит переключатель

**Метод подключения**:

\`\`\`twig
{% from "_macros/checkbox.twig" import checkbox %}
\`\`\`

**Использование**:

\`\`\`twig
{{ checkbox('onof', 'Включить модуль?', 'Включает/Выключает модуль', settings) }}
\`\`\`

**Параметры**:

\`\`\`twig
macro checkbox(id, name, descr, opts)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название кнопки                                                                                        |
| **descr** | Описание кнопки                                                                                                |
| **opts**  | Объект с настройками плагина                                                                                   |

***

#### input.twig [#inputtwig]

Выводит форму простого заполнения текста

**Содержит**:

* input - Простой и обычный текстовой ввод
* tags - Текстовой ввод с поддержкой тегов
* number - Численный ввод
* hidden - Скрытое значение
* file - Тип загрузки файла

**Метод подключения**:

\`\`\`twig
{% from "_macros/input.twig" import input(, tags, number, ...) %}
\`\`\`

**Использование**:

На примере input

\`\`\`twig
{{ input('field', 'Укажите зависимость', 'Выберите поля зависимости, а так-же укажите значения, по которым будет вестись проверка данных перед отправкой в телеграм.', settings) }}
\`\`\`

**Параметры**:

* input - Простой и обычный текстовой ввод
* tags - Текстовой ввод с поддержкой тегов
* number - Численный ввод
* hidden - Скрытое значение

\`\`\`twig
macro input(id, name, descr, opts)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название кнопки                                                                                        |
| **descr** | Описание кнопки                                                                                                |
| **opts**  | Объект с настройками плагина                                                                                   |

\`\`\`twig
macro file(id, name, descr, opts, extra)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название кнопки                                                                                        |
| **descr** | Описание кнопки                                                                                                |
| **opts**  | Объект с настройками плагина                                                                                   |
| **extra** | Объект с дополнительными параметрами                                                                           |

***

#### menu.twig [#menutwig]

Содержит макрос для генерации меню

**Метод подключения**:

\`\`\`twig
{% from "_macros/menu.twig" import item %}
\`\`\`

**Использование**:

\`\`\`twig
{{ items(links, site, 'yes', 'no', 'firstLine') }}
\`\`\`

**Параметры**:

\`\`\`twig
macro item(items, _site, _first, _child, _fclass)
\`\`\`

| Параметр     | Описание                                                                                  |
| ------------ | ----------------------------------------------------------------------------------------- |
| **items**    | Массив с ссылками                                                                         |
| **\\_site**   | Указывается текущий объект / текущая страница                                             |
| **\\_first**  | Указывается первый ли ряд меню или нет. Принимает значения: yes или no. По умолчанию: yes |
| **\\_child**  | Указывается дочерние эелемнты или нет. Принимает значения: yes или no. По умолчанию: no   |
| **\\_fclass** | Перечень классов для первого ряда                                                         |

***

#### pagination.twig [#paginationtwig]

Содержит макрос для генерации пагинации

**Метод подключения**:

\`\`\`twig
{% from "_macros/pagination.twig" import pagination %}
\`\`\`

**Использование**:

\`\`\`twig
{{ pagination(total_pages, page) }}
\`\`\`

**Параметры**:

\`\`\`twig
pagination(total, current, pages_name, first_last_page, active_pages)
\`\`\`

| Параметр              | Описание                                                                                                                    |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **total**             | Всего новостей / объектов                                                                                                   |
| **current**           | Текущая страница                                                                                                            |
| **pages\\_name**       | Название параметра страницы в ссылке страницы, по умолчанию: page                                                           |
| **first\\_last\\_page** | Указывается сколько страниц показывать в начале и конце пагинации, если страниц много. По умолчанию: 2                      |
| **active\\_pages**     | Указывается активный промежуток страниц и сколько страниц в нём должно быть отображено, если страниц много. По умолчанию: 3 |

***

#### search.twig [#searchtwig]

Содержит макрос для генерации поиска и фильтрации данных

<Callout type="info" title="ВНИМАНИЕ!">
  НАХОДИТСЯ В РАЗРАБОТКЕ!
</Callout>

**Метод подключения**:

\`\`\`twig
{% from "_macros/search.twig" import search %}
\`\`\`

**Использование**:

\`\`\`twig
{{ search('telegram', 'cron', 'attached' ) }}
\`\`\`

**Параметры**:

\`\`\`twig
search(module, file, _type, _rmenu, _lmenu)
\`\`\`

| Параметр    | Описание                                                                              |
| ----------- | ------------------------------------------------------------------------------------- |
| **module**  | Главный модуль, поиск будет происходить через ajax контроллер DLE и файл maharder.php |
| **file**    | Файл, который будет отвечать за запросы                                               |
| **\\_type**  | Тип меню, название класса                                                             |
| **\\_rmenu** | Дополнительные ссылки на правой стороне меню                                          |
| **\\_lmenu** | Дополнительные ссылки на левой стороне меню                                           |

#### select.twig [#selecttwig]

Содержит макрос для выпадающего меню

**Метод подключения**:

\`\`\`twig
{% from "_macros/select.twig" import select %}
\`\`\`

**Использование**:

\`\`\`twig
{{ select('field', 'Доп. поле со статусом', 'Укажите поле, где на данный момент выводится статус сериала.', settings, xfields) }}
\`\`\`

**Параметры**:

\`\`\`twig
macro select(id, name, descr, opts, vals)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название списка                                                                                        |
| **descr** | Описание списка                                                                                                |
| **opts**  | Объект с настройками плагина                                                                                   |
| **vals**  | Значения для формирования списка, к примеру массив: &#x2A;*\\[name => value]**                                  |

***

#### textarea.twig [#textareatwig]

Содержит макрос для формы большого количества текста

**Содержит**:

* text - Простой элемент ввода большого количества текста
* editor - Похож на **text**, но к нему подключается редактор

**Метод подключения**:

\`\`\`twig
{% from "_macros/textarea.twig" import text(, editor) %}
\`\`\`

**Использование**:

\`\`\`twig
{{ editor('template', 'Шаблон сообщения', 'Настройте свой шаблон для отправки сообщений. Разрешается использовать BB-код и HTML-код.', template_data) }}
\`\`\`

**Параметры**:

\`\`\`twig
text(id, name, descr, opts)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название текстового поля                                                                               |
| **descr** | Описание поля                                                                                                  |
| **opts**  | Объект с настройками плагина                                                                                   |

***

#### filter.twig [#filtertwig]

Содержит макрос для формы большого количества текста

**Содержит**:

* search\\_and\\_filter - Вывод поиска и фильтрации таблицы данных

**Метод подключения**:

\`\`\`twig
{% from "_macros/textarea.twig" import text(, editor) %}
\`\`\`

**Использование**:

\`\`\`twig
{{ editor('template', 'Шаблон сообщения', 'Настройте свой шаблон для отправки сообщений. Разрешается использовать BB-код и HTML-код.', template_data) }}
\`\`\`

**Параметры**:

\`\`\`twig
text(id, name, descr, opts)
\`\`\`

| Параметр  | Описание                                                                                                       |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| **id**    | Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице |
| **name**  | Русское название текстового поля                                                                               |
| **descr** | Описание поля                                                                                                  |
| **opts**  | Объект с настройками плагина                                                                                   |

***

## Перечень дополнений [#перечень-дополнений]

* [MobileDetectExtension](https://github.com/bes89/mobiledetect-twig-extension) (Дополнена / подправлена мной)
* DeclineExtension (Моё дополнение)
* AdminUrlExtension (Моё дополнение)
* [MarkdownExtension](https://github.com/aptoma/twig-markdown)
* [CacheExtension](https://github.com/twigphp/cache-extra)
* [IntlExtension](https://github.com/twigphp/intl-extra)
* [CssInlinerExtension](https://github.com/twigphp/cssinliner-extra)
* [StringExtension](https://github.com/twigphp/string-extra)
* [HtmlExtension](https://github.com/twigphp/html-extra)
* [InkyExtension](https://github.com/twigphp/inky-extra)
* [Translation](https://github.com/JBlond/twig-trans)

### DeclineExtension [#declineextension]

В любом месте в шаблоне нужно указать тег **decline** для склонения. Пример:

\`\`\`twig
{{ decline(count, ['рубль', 'рубля', 'рублей']) }}
\`\`\`

Вместо **count** вставить переменную с количеством.

### AdminUrlExtension [#adminurlextension]

Дополнительные и глобальные ссылки и переменные в админпанеле и шаблонизаторе

| Тег              | Описание                                                  | Пример вывода                                                      |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------------------ |
| assets\\_url      | Прямая ссылка до папки со стилями и скриптами             | /engine/inc/maharder/admin/assets/                                 |
| plugin\\_url      | Ссылка текущей страницы, вместе с параметрами             | /admin.php?mod=main\\&new=test                                      |
| dle\\_login\\_hash | Хеш пользователя DLE                                      | 1234567890ABCDEFGabcdefg                                           |
| dle\\_config      | Массив конфирурации DLE                                   |                                                                    |
| \\_server         | Массив сервисной информации, аналог $\\_SERVER             |                                                                    |
| \\_get            | Массив отфильтрованногого GET-запроса сервера, либо null  |                                                                    |
| \\_post           | Массив отфильтрованногого POST-запроса сервера, либо null |                                                                    |
| languages        | Выводит массив языков в админпанели                       | Пример вывода можно посмотреть в menu.html                         |
| selected\\_lang   | Выводит текущий язык в админпанели                        | ru\\_RU                                                             |
| lang\\_data       | Массив данных с информацией о текущем языке               | original => Русский, english => Russian, iso2 => ru, tag => ru\\_RU |
`,o={contents:[{heading:void 0,content:"Все шаблоны расположены по пути `engine/inc/maharder/admin/templates` и `engine/inc/maharder/_templates/ваш_модуль`. Для оформления используется шаблонизатор Twig с некоторыми дополнениями."},{heading:`basehtml`,content:`Основной файл, который отвечает за всё подключение всех стилей и скриптов.`},{heading:`basehtml`,content:`**Блоки**:`},{heading:`basehtml`,content:`Название`},{heading:`basehtml`,content:`Описание`},{heading:`basehtml`,content:`title`},{heading:`basehtml`,content:`Блок заголовка`},{heading:`basehtml`,content:`content`},{heading:`basehtml`,content:`Блок основного содержимого`},{heading:`basehtml`,content:`scripts`},{heading:`basehtml`,content:`Блок содержимого дополнительных скриптов`},{heading:`breadcrumbhtml`,content:`Автоматическая генерация хлебных крошек`},{heading:`footerhtml`,content:`Вывод подвала, а так-же генерация ссылок`},{heading:`menuhtml`,content:`Вывод верхнего меню`},{heading:`sidebarhtml`,content:`Вывод бокового меню для маленьких экранов`},{heading:`подключение-шаблонов`,content:"Все подключения находятся в папке `engine/inc/maharder/admin/templates/templateIncludes`."},{heading:`подключение-шаблонов`,content:`Для общего блага и простоты использование рекомендуется использовать макросы`},{heading:`подключение-шаблонов`,content:"Все элементы выводятся через шаблон `engine/inc/maharder/admin/templates/templateIncludes/segRow.html`"},{heading:`boxeshtml`,content:`Важный объект для создания табов.`},{heading:`boxeshtml`,content:`**Пример использования**:`},{heading:`boxeshtml`,content:`**Параметры**:`},{heading:`boxeshtml`,content:`Важным параметром является свойство **boxes**. Он перенимает объект в виде массива ссылок. Каждый элемент ссылки содержит четыре главных атрибута.`},{heading:`boxeshtml`,content:`**id*&#x2A; - Универсальный индикатор, который будет так-же установлен у сегмента или блока. У первого блока обязательно должен быть класс **.active**.`},{heading:`boxeshtml`,content:`**id.link*&#x2A; - Если указывается как часть табов, то нужно указывать &#x2A;*#**. Если же нужна ссылка в прямом смысле этого слова, то указывайте ссылку`},{heading:`boxeshtml`,content:`**id.name** - Название таба`},{heading:`boxeshtml`,content:`**id.icon** - Название класса иконки`},{heading:`boxeshtml`,content:`Сегменты выглядят примерно так:`},{heading:`segrowhtml`,content:`Рекомендуется использовать лишь тогда, когда нет альтернативы или возможности вывести доп. информацию`},{heading:`segrowhtml`,content:`**Пример использования**:`},{heading:`segrowhtml`,content:`**Параметры**:`},{heading:`segrowhtml`,content:`Рекомендуются именно эти параметры для вывода дополнительной информации в сегмент отображения данных.`},{heading:`segrowhtml`,content:`Параметр`},{heading:`segrowhtml`,content:`Описание`},{heading:`segrowhtml`,content:`**type**`},{heading:`segrowhtml`,content:"Тип строки, для простого текста достаточно указать `html`"},{heading:`segrowhtml`,content:`**id**`},{heading:`segrowhtml`,content:`Уникальное значение строки`},{heading:`segrowhtml`,content:`**name**`},{heading:`segrowhtml`,content:`Название строки`},{heading:`segrowhtml`,content:`**descr**`},{heading:`segrowhtml`,content:`Описание строки`},{heading:`segrowhtml`,content:`**html**`},{heading:`segrowhtml`,content:`Произвольная информация`},{heading:`макросы`,content:`Функционал, который помогает в оформлении шаблонов, особенно с рекурсивными значениями.`},{heading:`макросы`,content:`Намерено для них было использование расширение twig, чтобы отличить от вставок`},{heading:`макросы`,content:"Рекомендуется использовать именно макросы, нежели вставки шаблонов из `templateIncludes`"},{heading:`checkboxtwig`,content:`Выводит переключатель`},{heading:`checkboxtwig`,content:`**Метод подключения**:`},{heading:`checkboxtwig`,content:`**Использование**:`},{heading:`checkboxtwig`,content:`**Параметры**:`},{heading:`checkboxtwig`,content:`Параметр`},{heading:`checkboxtwig`,content:`Описание`},{heading:`checkboxtwig`,content:`**id**`},{heading:`checkboxtwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`checkboxtwig`,content:`**name**`},{heading:`checkboxtwig`,content:`Русское название кнопки`},{heading:`checkboxtwig`,content:`**descr**`},{heading:`checkboxtwig`,content:`Описание кнопки`},{heading:`checkboxtwig`,content:`**opts**`},{heading:`checkboxtwig`,content:`Объект с настройками плагина`},{heading:`inputtwig`,content:`Выводит форму простого заполнения текста`},{heading:`inputtwig`,content:`**Содержит**:`},{heading:`inputtwig`,content:`input - Простой и обычный текстовой ввод`},{heading:`inputtwig`,content:`tags - Текстовой ввод с поддержкой тегов`},{heading:`inputtwig`,content:`number - Численный ввод`},{heading:`inputtwig`,content:`hidden - Скрытое значение`},{heading:`inputtwig`,content:`file - Тип загрузки файла`},{heading:`inputtwig`,content:`**Метод подключения**:`},{heading:`inputtwig`,content:`**Использование**:`},{heading:`inputtwig`,content:`На примере input`},{heading:`inputtwig`,content:`**Параметры**:`},{heading:`inputtwig`,content:`input - Простой и обычный текстовой ввод`},{heading:`inputtwig`,content:`tags - Текстовой ввод с поддержкой тегов`},{heading:`inputtwig`,content:`number - Численный ввод`},{heading:`inputtwig`,content:`hidden - Скрытое значение`},{heading:`inputtwig`,content:`Параметр`},{heading:`inputtwig`,content:`Описание`},{heading:`inputtwig`,content:`**id**`},{heading:`inputtwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`inputtwig`,content:`**name**`},{heading:`inputtwig`,content:`Русское название кнопки`},{heading:`inputtwig`,content:`**descr**`},{heading:`inputtwig`,content:`Описание кнопки`},{heading:`inputtwig`,content:`**opts**`},{heading:`inputtwig`,content:`Объект с настройками плагина`},{heading:`inputtwig`,content:`Параметр`},{heading:`inputtwig`,content:`Описание`},{heading:`inputtwig`,content:`**id**`},{heading:`inputtwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`inputtwig`,content:`**name**`},{heading:`inputtwig`,content:`Русское название кнопки`},{heading:`inputtwig`,content:`**descr**`},{heading:`inputtwig`,content:`Описание кнопки`},{heading:`inputtwig`,content:`**opts**`},{heading:`inputtwig`,content:`Объект с настройками плагина`},{heading:`inputtwig`,content:`**extra**`},{heading:`inputtwig`,content:`Объект с дополнительными параметрами`},{heading:`menutwig`,content:`Содержит макрос для генерации меню`},{heading:`menutwig`,content:`**Метод подключения**:`},{heading:`menutwig`,content:`**Использование**:`},{heading:`menutwig`,content:`**Параметры**:`},{heading:`menutwig`,content:`Параметр`},{heading:`menutwig`,content:`Описание`},{heading:`menutwig`,content:`**items**`},{heading:`menutwig`,content:`Массив с ссылками`},{heading:`menutwig`,content:`**\\_site**`},{heading:`menutwig`,content:`Указывается текущий объект / текущая страница`},{heading:`menutwig`,content:`**\\_first**`},{heading:`menutwig`,content:`Указывается первый ли ряд меню или нет. Принимает значения: yes или no. По умолчанию: yes`},{heading:`menutwig`,content:`**\\_child**`},{heading:`menutwig`,content:`Указывается дочерние эелемнты или нет. Принимает значения: yes или no. По умолчанию: no`},{heading:`menutwig`,content:`**\\_fclass**`},{heading:`menutwig`,content:`Перечень классов для первого ряда`},{heading:`paginationtwig`,content:`Содержит макрос для генерации пагинации`},{heading:`paginationtwig`,content:`**Метод подключения**:`},{heading:`paginationtwig`,content:`**Использование**:`},{heading:`paginationtwig`,content:`**Параметры**:`},{heading:`paginationtwig`,content:`Параметр`},{heading:`paginationtwig`,content:`Описание`},{heading:`paginationtwig`,content:`**total**`},{heading:`paginationtwig`,content:`Всего новостей / объектов`},{heading:`paginationtwig`,content:`**current**`},{heading:`paginationtwig`,content:`Текущая страница`},{heading:`paginationtwig`,content:`**pages\\_name**`},{heading:`paginationtwig`,content:`Название параметра страницы в ссылке страницы, по умолчанию: page`},{heading:`paginationtwig`,content:`**first\\_last\\_page**`},{heading:`paginationtwig`,content:`Указывается сколько страниц показывать в начале и конце пагинации, если страниц много. По умолчанию: 2`},{heading:`paginationtwig`,content:`**active\\_pages**`},{heading:`paginationtwig`,content:`Указывается активный промежуток страниц и сколько страниц в нём должно быть отображено, если страниц много. По умолчанию: 3`},{heading:`searchtwig`,content:`Содержит макрос для генерации поиска и фильтрации данных`},{heading:`searchtwig`,content:`НАХОДИТСЯ В РАЗРАБОТКЕ!`},{heading:`searchtwig`,content:`**Метод подключения**:`},{heading:`searchtwig`,content:`**Использование**:`},{heading:`searchtwig`,content:`**Параметры**:`},{heading:`searchtwig`,content:`Параметр`},{heading:`searchtwig`,content:`Описание`},{heading:`searchtwig`,content:`**module**`},{heading:`searchtwig`,content:`Главный модуль, поиск будет происходить через ajax контроллер DLE и файл maharder.php`},{heading:`searchtwig`,content:`**file**`},{heading:`searchtwig`,content:`Файл, который будет отвечать за запросы`},{heading:`searchtwig`,content:`**\\_type**`},{heading:`searchtwig`,content:`Тип меню, название класса`},{heading:`searchtwig`,content:`**\\_rmenu**`},{heading:`searchtwig`,content:`Дополнительные ссылки на правой стороне меню`},{heading:`searchtwig`,content:`**\\_lmenu**`},{heading:`searchtwig`,content:`Дополнительные ссылки на левой стороне меню`},{heading:`selecttwig`,content:`Содержит макрос для выпадающего меню`},{heading:`selecttwig`,content:`**Метод подключения**:`},{heading:`selecttwig`,content:`**Использование**:`},{heading:`selecttwig`,content:`**Параметры**:`},{heading:`selecttwig`,content:`Параметр`},{heading:`selecttwig`,content:`Описание`},{heading:`selecttwig`,content:`**id**`},{heading:`selecttwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`selecttwig`,content:`**name**`},{heading:`selecttwig`,content:`Русское название списка`},{heading:`selecttwig`,content:`**descr**`},{heading:`selecttwig`,content:`Описание списка`},{heading:`selecttwig`,content:`**opts**`},{heading:`selecttwig`,content:`Объект с настройками плагина`},{heading:`selecttwig`,content:`**vals**`},{heading:`selecttwig`,content:`Значения для формирования списка, к примеру массив: &#x2A;*\\[name => value]**`},{heading:`textareatwig`,content:`Содержит макрос для формы большого количества текста`},{heading:`textareatwig`,content:`**Содержит**:`},{heading:`textareatwig`,content:`text - Простой элемент ввода большого количества текста`},{heading:`textareatwig`,content:`editor - Похож на **text**, но к нему подключается редактор`},{heading:`textareatwig`,content:`**Метод подключения**:`},{heading:`textareatwig`,content:`**Использование**:`},{heading:`textareatwig`,content:`**Параметры**:`},{heading:`textareatwig`,content:`Параметр`},{heading:`textareatwig`,content:`Описание`},{heading:`textareatwig`,content:`**id**`},{heading:`textareatwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`textareatwig`,content:`**name**`},{heading:`textareatwig`,content:`Русское название текстового поля`},{heading:`textareatwig`,content:`**descr**`},{heading:`textareatwig`,content:`Описание поля`},{heading:`textareatwig`,content:`**opts**`},{heading:`textareatwig`,content:`Объект с настройками плагина`},{heading:`filtertwig`,content:`Содержит макрос для формы большого количества текста`},{heading:`filtertwig`,content:`**Содержит**:`},{heading:`filtertwig`,content:`search\\_and\\_filter - Вывод поиска и фильтрации таблицы данных`},{heading:`filtertwig`,content:`**Метод подключения**:`},{heading:`filtertwig`,content:`**Использование**:`},{heading:`filtertwig`,content:`**Параметры**:`},{heading:`filtertwig`,content:`Параметр`},{heading:`filtertwig`,content:`Описание`},{heading:`filtertwig`,content:`**id**`},{heading:`filtertwig`,content:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`},{heading:`filtertwig`,content:`**name**`},{heading:`filtertwig`,content:`Русское название текстового поля`},{heading:`filtertwig`,content:`**descr**`},{heading:`filtertwig`,content:`Описание поля`},{heading:`filtertwig`,content:`**opts**`},{heading:`filtertwig`,content:`Объект с настройками плагина`},{heading:`перечень-дополнений`,content:`MobileDetectExtension (Дополнена / подправлена мной)`},{heading:`перечень-дополнений`,content:`DeclineExtension (Моё дополнение)`},{heading:`перечень-дополнений`,content:`AdminUrlExtension (Моё дополнение)`},{heading:`перечень-дополнений`,content:`MarkdownExtension`},{heading:`перечень-дополнений`,content:`CacheExtension`},{heading:`перечень-дополнений`,content:`IntlExtension`},{heading:`перечень-дополнений`,content:`CssInlinerExtension`},{heading:`перечень-дополнений`,content:`StringExtension`},{heading:`перечень-дополнений`,content:`HtmlExtension`},{heading:`перечень-дополнений`,content:`InkyExtension`},{heading:`перечень-дополнений`,content:`Translation`},{heading:`declineextension`,content:`В любом месте в шаблоне нужно указать тег **decline** для склонения. Пример:`},{heading:`declineextension`,content:`Вместо **count** вставить переменную с количеством.`},{heading:`adminurlextension`,content:`Дополнительные и глобальные ссылки и переменные в админпанеле и шаблонизаторе`},{heading:`adminurlextension`,content:`Тег`},{heading:`adminurlextension`,content:`Описание`},{heading:`adminurlextension`,content:`Пример вывода`},{heading:`adminurlextension`,content:`assets\\_url`},{heading:`adminurlextension`,content:`Прямая ссылка до папки со стилями и скриптами`},{heading:`adminurlextension`,content:`/engine/inc/maharder/admin/assets/`},{heading:`adminurlextension`,content:`plugin\\_url`},{heading:`adminurlextension`,content:`Ссылка текущей страницы, вместе с параметрами`},{heading:`adminurlextension`,content:`/admin.php?mod=main\\&new=test`},{heading:`adminurlextension`,content:`dle\\_login\\_hash`},{heading:`adminurlextension`,content:`Хеш пользователя DLE`},{heading:`adminurlextension`,content:`1234567890ABCDEFGabcdefg`},{heading:`adminurlextension`,content:`dle\\_config`},{heading:`adminurlextension`,content:`Массив конфирурации DLE`},{heading:`adminurlextension`,content:`\\_server`},{heading:`adminurlextension`,content:`Массив сервисной информации, аналог $\\_SERVER`},{heading:`adminurlextension`,content:`\\_get`},{heading:`adminurlextension`,content:`Массив отфильтрованногого GET-запроса сервера, либо null`},{heading:`adminurlextension`,content:`\\_post`},{heading:`adminurlextension`,content:`Массив отфильтрованногого POST-запроса сервера, либо null`},{heading:`adminurlextension`,content:`languages`},{heading:`adminurlextension`,content:`Выводит массив языков в админпанели`},{heading:`adminurlextension`,content:`Пример вывода можно посмотреть в menu.html`},{heading:`adminurlextension`,content:`selected\\_lang`},{heading:`adminurlextension`,content:`Выводит текущий язык в админпанели`},{heading:`adminurlextension`,content:`ru\\_RU`},{heading:`adminurlextension`,content:`lang\\_data`},{heading:`adminurlextension`,content:`Массив данных с информацией о текущем языке`},{heading:`adminurlextension`,content:`original => Русский, english => Russian, iso2 => ru, tag => ru\\_RU`}],headings:[{id:`структура`,content:`Структура`},{id:`основное`,content:`Основное`},{id:`basehtml`,content:`base.html`},{id:`breadcrumbhtml`,content:`breadcrumb.html`},{id:`footerhtml`,content:`footer.html`},{id:`menuhtml`,content:`menu.html`},{id:`sidebarhtml`,content:`sidebar.html`},{id:`подключение-шаблонов`,content:`Подключение шаблонов`},{id:`boxeshtml`,content:`boxes.html`},{id:`segrowhtml`,content:`segRow.html`},{id:`макросы`,content:`Макросы`},{id:`checkboxtwig`,content:`checkbox.twig`},{id:`inputtwig`,content:`input.twig`},{id:`menutwig`,content:`menu.twig`},{id:`paginationtwig`,content:`pagination.twig`},{id:`searchtwig`,content:`search.twig`},{id:`selecttwig`,content:`select.twig`},{id:`textareatwig`,content:`textarea.twig`},{id:`filtertwig`,content:`filter.twig`},{id:`перечень-дополнений`,content:`Перечень дополнений`},{id:`declineextension`,content:`DeclineExtension`},{id:`adminurlextension`,content:`AdminUrlExtension`}]},s=[{depth:2,url:`#структура`,title:(0,n.jsx)(n.Fragment,{children:`Структура`})},{depth:3,url:`#основное`,title:(0,n.jsx)(n.Fragment,{children:`Основное`})},{depth:4,url:`#basehtml`,title:(0,n.jsx)(n.Fragment,{children:`base.html`})},{depth:4,url:`#breadcrumbhtml`,title:(0,n.jsx)(n.Fragment,{children:`breadcrumb.html`})},{depth:5,url:`#footerhtml`,title:(0,n.jsx)(n.Fragment,{children:`footer.html`})},{depth:4,url:`#menuhtml`,title:(0,n.jsx)(n.Fragment,{children:`menu.html`})},{depth:4,url:`#sidebarhtml`,title:(0,n.jsx)(n.Fragment,{children:`sidebar.html`})},{depth:3,url:`#подключение-шаблонов`,title:(0,n.jsx)(n.Fragment,{children:`Подключение шаблонов`})},{depth:4,url:`#boxeshtml`,title:(0,n.jsx)(n.Fragment,{children:`boxes.html`})},{depth:4,url:`#segrowhtml`,title:(0,n.jsx)(n.Fragment,{children:`segRow.html`})},{depth:3,url:`#макросы`,title:(0,n.jsx)(n.Fragment,{children:`Макросы`})},{depth:4,url:`#checkboxtwig`,title:(0,n.jsx)(n.Fragment,{children:`checkbox.twig`})},{depth:4,url:`#inputtwig`,title:(0,n.jsx)(n.Fragment,{children:`input.twig`})},{depth:4,url:`#menutwig`,title:(0,n.jsx)(n.Fragment,{children:`menu.twig`})},{depth:4,url:`#paginationtwig`,title:(0,n.jsx)(n.Fragment,{children:`pagination.twig`})},{depth:4,url:`#searchtwig`,title:(0,n.jsx)(n.Fragment,{children:`search.twig`})},{depth:4,url:`#selecttwig`,title:(0,n.jsx)(n.Fragment,{children:`select.twig`})},{depth:4,url:`#textareatwig`,title:(0,n.jsx)(n.Fragment,{children:`textarea.twig`})},{depth:4,url:`#filtertwig`,title:(0,n.jsx)(n.Fragment,{children:`filter.twig`})},{depth:2,url:`#перечень-дополнений`,title:(0,n.jsx)(n.Fragment,{children:`Перечень дополнений`})},{depth:3,url:`#declineextension`,title:(0,n.jsx)(n.Fragment,{children:`DeclineExtension`})},{depth:3,url:`#adminurlextension`,title:(0,n.jsx)(n.Fragment,{children:`AdminUrlExtension`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Все шаблоны расположены по пути `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/admin/templates`}),` и `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_templates/ваш_модуль`}),`. Для оформления используется шаблонизатор `,(0,n.jsx)(t.a,{href:`https://twig.symfony.com/doc/3.x/templates.html`,children:`Twig`}),` с некоторыми дополнениями.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`структура`,children:`Структура`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`📦templates`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📂templateIncludes`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜addCheckbox.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜addInput.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜addSelect.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜addTextarea.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜boxes.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜loader.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┗ 📜segRow.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📂_macros`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜checkbox.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜input.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜menu.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜pagination.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜search.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┣ 📜select.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┃ ┗ 📜textarea.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📜base.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📜breadcrumb.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📜footer.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┣ 📜menu.html`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:` ┗ 📜sidebar.html`})})]})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`основное`,children:`Основное`}),`
`,(0,n.jsx)(t.h4,{id:`basehtml`,children:`base.html`}),`
`,(0,n.jsx)(t.p,{children:`Основной файл, который отвечает за всё подключение всех стилей и скриптов.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Блоки`}),`:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`title`}),(0,n.jsx)(t.td,{children:`Блок заголовка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`content`}),(0,n.jsx)(t.td,{children:`Блок основного содержимого`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`scripts`}),(0,n.jsx)(t.td,{children:`Блок содержимого дополнительных скриптов`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`breadcrumbhtml`,children:`breadcrumb.html`}),`
`,(0,n.jsx)(t.p,{children:`Автоматическая генерация хлебных крошек`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h5,{id:`footerhtml`,children:`footer.html`}),`
`,(0,n.jsx)(t.p,{children:`Вывод подвала, а так-же генерация ссылок`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`menuhtml`,children:`menu.html`}),`
`,(0,n.jsx)(t.p,{children:`Вывод верхнего меню`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`sidebarhtml`,children:`sidebar.html`}),`
`,(0,n.jsx)(t.p,{children:`Вывод бокового меню для маленьких экранов`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подключение-шаблонов`,children:`Подключение шаблонов`}),`
`,(0,n.jsxs)(t.p,{children:[`Все подключения находятся в папке `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/admin/templates/templateIncludes`}),`.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Для общего блага и простоты использование рекомендуется использовать макросы`}),`
`,(0,n.jsxs)(t.li,{children:[`Все элементы выводятся через шаблон `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/admin/templates/templateIncludes/segRow.html`})]}),`
`]}),`
`,(0,n.jsx)(t.h4,{id:`boxeshtml`,children:`boxes.html`}),`
`,(0,n.jsxs)(t.p,{children:[`Важный объект для создания `,(0,n.jsx)(t.a,{href:`https://fomantic-ui.com/modules/tab.html`,children:`табов`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Пример использования`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"ui segment"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	{{ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`include`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'templateIncludes/boxes.html'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		boxes: {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			main: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				link: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'#'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Основные настройки'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				icon: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'home icon'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			},`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			cron: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				link: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'#'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройки крона'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				icon: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'clock outline icon'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			},`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			telegram: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				link: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'#'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройка бота'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				icon: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'universal access icon'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			},`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			templates: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				link: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'#'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Шаблоны'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				icon: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'pencil alternate icon'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			},`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	})`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}}`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`include`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'templateIncludes/boxes.html'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	boxes: {`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		id: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			link: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'#'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Название'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			icon: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Класс'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	}`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	})`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Важным параметром является свойство `,(0,n.jsx)(t.strong,{children:`boxes`}),`. Он перенимает объект в виде массива ссылок. Каждый элемент ссылки содержит четыре главных атрибута.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`id`}),` - Универсальный индикатор, который будет так-же установлен у сегмента или блока. У первого блока обязательно должен быть класс `,(0,n.jsx)(t.strong,{children:`.active`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`id.link`}),` - Если указывается как часть табов, то нужно указывать `,(0,n.jsx)(t.strong,{children:`#`}),`. Если же нужна ссылка в прямом смысле этого слова, то указывайте ссылку`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`id.name`}),` - Название таба`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`id.icon`}),` - Название класса иконки`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Сегменты выглядят примерно так:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`form`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"ui form segment"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"ui bottom attached tab active"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` data-tab`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"main"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`></`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"ui bottom attached tab"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` data-tab`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"cron"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`></`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"ui bottom attached tab"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` data-tab`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"telegram"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`></`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`form`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`segrowhtml`,children:`segRow.html`}),`
`,(0,n.jsx)(t.p,{children:`Рекомендуется использовать лишь тогда, когда нет альтернативы или возможности вывести доп. информацию`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Пример использования`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`include`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'templateIncludes/segRow.html'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	id: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'cron_descr'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	name: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройка крона'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	descr: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"Если вы не сильны в crontab и не знаете как правильно настроить всё - данная функция для вас"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	html: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Если у вас нет доступа к крону или SSH, то выполняем этот скрипт: <a href="'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ~ dle_config.http_home_url ~ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'cron.php?cronmode=telegram" target="_blank">cron.php?cronmode=telegram</a><br>Если же вы всётаки его имеете, то выполните этот запрос <kbd>crontab -e</kbd> и в самый низ вставьте следующую строчку:<br><kbd>* * * * * /usr/bin/php -f '`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ~document_root~ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'/cron.php telegram</kbd><br>Простой генератор для крона можно увидеть тут: <a href="https://www.crontabgenerator.com" target="_blank">http://www.crontabgenerator.com</a><br>Замените <kbd>/usr/bin/php</kbd> на путь вашего интерпретатора. Если не знаете где он лежит, то узнаете это с помощью <kbd>which php</kbd>'`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	})`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`include`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'templateIncludes/segRow.html'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		type: type,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		id: id,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		name: name,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		descr: descr,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		html: html,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	})`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}}`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Рекомендуются именно эти параметры для вывода дополнительной информации в сегмент отображения данных.`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`type`})}),(0,n.jsxs)(t.td,{children:[`Тип строки, для простого текста достаточно указать `,(0,n.jsx)(t.code,{children:`html`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение строки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Название строки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание строки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`html`})}),(0,n.jsx)(t.td,{children:`Произвольная информация`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`макросы`,children:`Макросы`}),`
`,(0,n.jsx)(t.p,{children:`Функционал, который помогает в оформлении шаблонов, особенно с рекурсивными значениями.`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Намерено для них было использование расширение twig, чтобы отличить от вставок`}),`
`,(0,n.jsxs)(t.li,{children:[`Рекомендуется использовать именно макросы, нежели вставки шаблонов из `,(0,n.jsx)(t.code,{children:`templateIncludes`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`checkboxtwig`,children:`checkbox.twig`}),`
`,(0,n.jsx)(t.p,{children:`Выводит переключатель`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/checkbox.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` checkbox %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ checkbox(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'onof'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Включить модуль?'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Включает/Выключает модуль'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, settings) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`macro checkbox(id, name, descr, opts)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`inputtwig`,children:`input.twig`}),`
`,(0,n.jsx)(t.p,{children:`Выводит форму простого заполнения текста`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Содержит`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`input - Простой и обычный текстовой ввод`}),`
`,(0,n.jsx)(t.li,{children:`tags - Текстовой ввод с поддержкой тегов`}),`
`,(0,n.jsx)(t.li,{children:`number - Численный ввод`}),`
`,(0,n.jsx)(t.li,{children:`hidden - Скрытое значение`}),`
`,(0,n.jsx)(t.li,{children:`file - Тип загрузки файла`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/input.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` input(, tags, number, ...) %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(t.p,{children:`На примере input`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ input(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'field'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Укажите зависимость'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Выберите поля зависимости, а так-же укажите значения, по которым будет вестись проверка данных перед отправкой в телеграм.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, settings) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`input - Простой и обычный текстовой ввод`}),`
`,(0,n.jsx)(t.li,{children:`tags - Текстовой ввод с поддержкой тегов`}),`
`,(0,n.jsx)(t.li,{children:`number - Численный ввод`}),`
`,(0,n.jsx)(t.li,{children:`hidden - Скрытое значение`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`macro input(id, name, descr, opts)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]})]})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`macro file(id, name, descr, opts, extra)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание кнопки`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`extra`})}),(0,n.jsx)(t.td,{children:`Объект с дополнительными параметрами`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`menutwig`,children:`menu.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для генерации меню`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/menu.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` item %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ items(links, site, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'yes'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'no'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'firstLine'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`macro item(items, _site, _first, _child, _fclass)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`items`})}),(0,n.jsx)(t.td,{children:`Массив с ссылками`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_site`})}),(0,n.jsx)(t.td,{children:`Указывается текущий объект / текущая страница`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_first`})}),(0,n.jsx)(t.td,{children:`Указывается первый ли ряд меню или нет. Принимает значения: yes или no. По умолчанию: yes`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_child`})}),(0,n.jsx)(t.td,{children:`Указывается дочерние эелемнты или нет. Принимает значения: yes или no. По умолчанию: no`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_fclass`})}),(0,n.jsx)(t.td,{children:`Перечень классов для первого ряда`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`paginationtwig`,children:`pagination.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для генерации пагинации`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/pagination.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` pagination %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ pagination(total_pages, page) }}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`pagination(total, current, pages_name, first_last_page, active_pages)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`total`})}),(0,n.jsx)(t.td,{children:`Всего новостей / объектов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`current`})}),(0,n.jsx)(t.td,{children:`Текущая страница`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`pages_name`})}),(0,n.jsx)(t.td,{children:`Название параметра страницы в ссылке страницы, по умолчанию: page`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`first_last_page`})}),(0,n.jsx)(t.td,{children:`Указывается сколько страниц показывать в начале и конце пагинации, если страниц много. По умолчанию: 2`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`active_pages`})}),(0,n.jsx)(t.td,{children:`Указывается активный промежуток страниц и сколько страниц в нём должно быть отображено, если страниц много. По умолчанию: 3`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`searchtwig`,children:`search.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для генерации поиска и фильтрации данных`}),`
`,(0,n.jsx)(r,{type:`info`,title:`ВНИМАНИЕ!`,children:(0,n.jsx)(t.p,{children:`НАХОДИТСЯ В РАЗРАБОТКЕ!`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/search.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` search %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ search(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'telegram'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'cron'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'attached'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`search(module, file, _type, _rmenu, _lmenu)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`module`})}),(0,n.jsx)(t.td,{children:`Главный модуль, поиск будет происходить через ajax контроллер DLE и файл maharder.php`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`file`})}),(0,n.jsx)(t.td,{children:`Файл, который будет отвечать за запросы`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_type`})}),(0,n.jsx)(t.td,{children:`Тип меню, название класса`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_rmenu`})}),(0,n.jsx)(t.td,{children:`Дополнительные ссылки на правой стороне меню`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`_lmenu`})}),(0,n.jsx)(t.td,{children:`Дополнительные ссылки на левой стороне меню`})]})]})]}),`
`,(0,n.jsx)(t.h4,{id:`selecttwig`,children:`select.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для выпадающего меню`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/select.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` select %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ select(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'field'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Доп. поле со статусом'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Укажите поле, где на данный момент выводится статус сериала.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, settings, xfields) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`macro select(id, name, descr, opts, vals)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название списка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание списка`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`vals`})}),(0,n.jsxs)(t.td,{children:[`Значения для формирования списка, к примеру массив: `,(0,n.jsx)(t.strong,{children:`[name => value]`})]})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`textareatwig`,children:`textarea.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для формы большого количества текста`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Содержит`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`text - Простой элемент ввода большого количества текста`}),`
`,(0,n.jsxs)(t.li,{children:[`editor - Похож на `,(0,n.jsx)(t.strong,{children:`text`}),`, но к нему подключается редактор`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/textarea.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` text(, editor) %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ editor(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'template'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Шаблон сообщения'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройте свой шаблон для отправки сообщений. Разрешается использовать BB-код и HTML-код.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, template_data) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`text(id, name, descr, opts)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название текстового поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h4,{id:`filtertwig`,children:`filter.twig`}),`
`,(0,n.jsx)(t.p,{children:`Содержит макрос для формы большого количества текста`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Содержит`}),`:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`search_and_filter - Вывод поиска и фильтрации таблицы данных`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Метод подключения`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{% `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`from`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "_macros/textarea.twig"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` text(, editor) %}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Использование`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ editor(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'template'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Шаблон сообщения'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Настройте свой шаблон для отправки сообщений. Разрешается использовать BB-код и HTML-код.'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, template_data) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Параметры`}),`:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`text(id, name, descr, opts)`})})})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`id`})}),(0,n.jsx)(t.td,{children:`Уникальное значение элемента, которое будет использоваться в обозначении самого плагина. Указывать на латинице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`name`})}),(0,n.jsx)(t.td,{children:`Русское название текстового поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`descr`})}),(0,n.jsx)(t.td,{children:`Описание поля`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`opts`})}),(0,n.jsx)(t.td,{children:`Объект с настройками плагина`})]})]})]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`перечень-дополнений`,children:`Перечень дополнений`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`https://github.com/bes89/mobiledetect-twig-extension`,children:`MobileDetectExtension`}),` (Дополнена / подправлена мной)`]}),`
`,(0,n.jsx)(t.li,{children:`DeclineExtension (Моё дополнение)`}),`
`,(0,n.jsx)(t.li,{children:`AdminUrlExtension (Моё дополнение)`}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/aptoma/twig-markdown`,children:`MarkdownExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/cache-extra`,children:`CacheExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/intl-extra`,children:`IntlExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/cssinliner-extra`,children:`CssInlinerExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/string-extra`,children:`StringExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/html-extra`,children:`HtmlExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/twigphp/inky-extra`,children:`InkyExtension`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`https://github.com/JBlond/twig-trans`,children:`Translation`})}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`declineextension`,children:`DeclineExtension`}),`
`,(0,n.jsxs)(t.p,{children:[`В любом месте в шаблоне нужно указать тег `,(0,n.jsx)(t.strong,{children:`decline`}),` для склонения. Пример:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{{ decline(count, [`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'рубль'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'рубля'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'рублей'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]) }}`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Вместо `,(0,n.jsx)(t.strong,{children:`count`}),` вставить переменную с количеством.`]}),`
`,(0,n.jsx)(t.h3,{id:`adminurlextension`,children:`AdminUrlExtension`}),`
`,(0,n.jsx)(t.p,{children:`Дополнительные и глобальные ссылки и переменные в админпанеле и шаблонизаторе`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Описание`}),(0,n.jsx)(t.th,{children:`Пример вывода`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`assets_url`}),(0,n.jsx)(t.td,{children:`Прямая ссылка до папки со стилями и скриптами`}),(0,n.jsx)(t.td,{children:`/engine/inc/maharder/admin/assets/`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`plugin_url`}),(0,n.jsx)(t.td,{children:`Ссылка текущей страницы, вместе с параметрами`}),(0,n.jsx)(t.td,{children:`/admin.php?mod=main&new=test`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`dle_login_hash`}),(0,n.jsx)(t.td,{children:`Хеш пользователя DLE`}),(0,n.jsx)(t.td,{children:`1234567890ABCDEFGabcdefg`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`dle_config`}),(0,n.jsx)(t.td,{children:`Массив конфирурации DLE`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`_server`}),(0,n.jsx)(t.td,{children:`Массив сервисной информации, аналог $_SERVER`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`_get`}),(0,n.jsx)(t.td,{children:`Массив отфильтрованногого GET-запроса сервера, либо null`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`_post`}),(0,n.jsx)(t.td,{children:`Массив отфильтрованногого POST-запроса сервера, либо null`}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`languages`}),(0,n.jsx)(t.td,{children:`Выводит массив языков в админпанели`}),(0,n.jsx)(t.td,{children:`Пример вывода можно посмотреть в menu.html`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`selected_lang`}),(0,n.jsx)(t.td,{children:`Выводит текущий язык в админпанели`}),(0,n.jsx)(t.td,{children:`ru_RU`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`lang_data`}),(0,n.jsx)(t.td,{children:`Массив данных с информацией о текущем языке`}),(0,n.jsx)(t.td,{children:`original => Русский, english => Russian, iso2 => ru, tag => ru_RU`})]})]})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};