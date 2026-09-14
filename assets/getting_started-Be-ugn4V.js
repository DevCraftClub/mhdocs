import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор UserLists 200.1.0: свои и общие списки новостей, кнопка на материале, каталог и предложения — без правок штатного «Избранного» DLE.`,version:`200.1.0`},i=new Date(1789411935e3),a=`

**UserLists** — сателлит [DevCraft Admin](../../devcraft_admin/getting_started) для DataLife Engine. Люди собирают новости в **свои списки** (только себе или открытые всем), а администратор задаёт **общие имена** вроде «В планах» или «Просмотрено»: название одно на весь сайт, содержимое у каждого своё.

Модуль **не трогает** штатное «Избранное» DLE: не подменяет его, не переносит туда записи и не правит ядро ради этого. Данные лежат в таблицах \`dc_user_lists*\`. Это замена старого FavAll: админка на Metro, кнопка на новости, каталог открытых списков и очередь предложений с одобрением владельца.

Исходники пакета: репозиторий \`DLE-UserLists\` (\`devcraft/src/modules/UserLists/\`).

## Что видит посетитель [#что-видит-посетитель]

На краткой или полной новости — кнопка (текст задаётся в настройках, по умолчанию «В списки»). По нажатию открывается окно: отметить списки, куда положить материал, при необходимости создать свой список.

Отдельно в теме подключаются страницы:

* мои списки;
* каталог открытых списков (гости — только если это разрешено в настройках);
* просмотр одного списка;
* очередь предложений владельцу.

Чужой **личный** список с сайта не виден. Открытый список видят те, кому это разрешено настройкой для гостей и правами группы.

## Что настраивает администратор [#что-настраивает-администратор]

Два вида списков:

1. **Админ-списки** — общие имена. Пользователь не удаляет такой список. Внутри у каждого человека свой набор новостей. При первом открытии модуля создаются три имени: «В планах», «Просмотрено», «Избрано».
2. **Списки пользователей** — создаёт владелец. Считаются в лимит группы. Можно оставить только себе или открыть всем (если группе разрешено). Описание правится визуальным редактором. Имя, видимость и описание меняют владелец или администратор.

Права групп: доступ к модулю на сайте, сколько своих списков можно завести, можно ли открывать списки всем, можно ли предлагать новости в чужие открытые списки.

Предложения: владелец включает приём и выбирает, кто может предлагать — конкретные люди или все, у кого есть право предлагать. Новость сначала в очереди; владелец принимает или отклоняет.

## Возможности [#возможности]

* кнопка и окно выбора списков на новости (краткая, полная или свой шаблон);
* каталог, «мои списки», просмотр и очередь предложений — отдельные вставки в тему;
* админ-списки с общим именем и личным содержимым;
* свои списки с лимитом, запрещёнными словами в названии и ограничением длины;
* права по группам DLE;
* гости и открытые списки — отдельный переключатель;
* запросы сайта и админки только через \`devcraft/ajax.php\`;
* журнал важных действий через \`LogGenerator\`.

## Требования [#требования]

| Компонент       | Версия        |
| --------------- | ------------- |
| DataLife Engine | **≥ 20.0**    |
| PHP             | **≥ 8.3**     |
| DevCraft Admin  | **≥ 200.4.0** |

## Идентификация модуля [#идентификация-модуля]

| Поле              | Значение                     |
| ----------------- | ---------------------------- |
| Каталог модуля    | \`UserLists\`                  |
| Код в админке     | \`user_lists\`                 |
| Версия            | \`200.1.0\`                    |
| Точка входа       | \`engine/inc/user_lists.php\`  |
| Пространство имён | \`DevCraft\\Modules\\UserLists\` |

## Таблицы в базе [#таблицы-в-базе]

При первом открытии модуля в админке создаются таблицы с префиксом сайта:

| Назначение                                    | Таблица                                   |
| --------------------------------------------- | ----------------------------------------- |
| Списки (админские и пользовательские)         | \`{prefix}_dc_user_lists\`                  |
| Новости в списках                             | \`{prefix}_dc_user_list_items\`             |
| Кому разрешено предлагать в конкретный список | \`{prefix}_dc_user_list_suggestors\`        |
| Права групп                                   | \`{prefix}_dc_user_list_group_permissions\` |

Новость в элементе ссылается на \`post.id\`. Одна и та же новость в одном списке у одного пользователя не дублируется.

## Структура файлов [#структура-файлов]

Корень сайта после установки (обзор):

<Files>
  <Folder name="Корень сайта">
    <Folder name="engine">
      <Folder name="inc">
        <File name="user_lists.php" />
      </Folder>

      <Folder name="modules/devcraft">
        <File name="user_lists.php" />

        <File name="user_lists_page.php" />
      </Folder>
    </Folder>

    <Folder name="devcraft">
      <Folder name="config">
        <File name="user_lists.json" />
      </Folder>

      <Folder name="src/modules/UserLists">
        <File name="manifest.php" />

        <Folder name="Ajax" />

        <Folder name="Models" />

        <Folder name="Pages" />

        <Folder name="Public" />

        <Folder name="Services" />

        <Folder name="templates" />
      </Folder>
    </Folder>

    <Folder name="templates/{skin}/devcraft/user_lists">
      <File name="button.tpl" />

      <File name="modal.tpl" />

      <File name="page.tpl" />

      <File name="view.tpl" />

      <File name="proposals.tpl" />
    </Folder>
  </Folder>
</Files>

Если в текущей теме нет каталога \`devcraft/user_lists/\`, скопируйте его из \`Default\`.

## Разделы админки [#разделы-админки]

| Раздел                | Зачем                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------- |
| Админ-списки          | Общие имена списков; содержимое у каждого пользователя своё                           |
| Списки пользователей  | Чужие и свои пользовательские списки, правки от администратора                        |
| Права групп           | Доступ, лимит своих списков, открытые списки, предложения                             |
| Настройки             | гости и открытые списки, текст кнопки, запрещённые слова, сколько записей на странице |
| Подключение в шаблоны | шпаргалка вставок в тему                                                              |

## Дальше [#дальше]

<Cards>
  <Card title="Установка" href="./install">
    Копирование файлов, регистрация плагина и первые шаги
  </Card>

  <Card title="Подключение в теме" href="./guides/theme">
    Кнопка на новости и страницы списков
  </Card>

  <Card title="Списки и видимость" href="./guides/lists-and-visibility">
    Админ-списки, личные и открытые, права групп
  </Card>

  <Card title="История изменений" href="./changelog">
    Что вошло в 200.1.0
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:`**UserLists** — сателлит DevCraft Admin для DataLife Engine. Люди собирают новости в **свои списки** (только себе или открытые всем), а администратор задаёт **общие имена** вроде «В планах» или «Просмотрено»: название одно на весь сайт, содержимое у каждого своё.`},{heading:void 0,content:"Модуль **не трогает** штатное «Избранное» DLE: не подменяет его, не переносит туда записи и не правит ядро ради этого. Данные лежат в таблицах `dc_user_lists*`. Это замена старого FavAll: админка на Metro, кнопка на новости, каталог открытых списков и очередь предложений с одобрением владельца."},{heading:void 0,content:"Исходники пакета: репозиторий `DLE-UserLists` (`devcraft/src/modules/UserLists/`)."},{heading:`что-видит-посетитель`,content:`На краткой или полной новости — кнопка (текст задаётся в настройках, по умолчанию «В списки»). По нажатию открывается окно: отметить списки, куда положить материал, при необходимости создать свой список.`},{heading:`что-видит-посетитель`,content:`Отдельно в теме подключаются страницы:`},{heading:`что-видит-посетитель`,content:`мои списки;`},{heading:`что-видит-посетитель`,content:`каталог открытых списков (гости — только если это разрешено в настройках);`},{heading:`что-видит-посетитель`,content:`просмотр одного списка;`},{heading:`что-видит-посетитель`,content:`очередь предложений владельцу.`},{heading:`что-видит-посетитель`,content:`Чужой **личный** список с сайта не виден. Открытый список видят те, кому это разрешено настройкой для гостей и правами группы.`},{heading:`что-настраивает-администратор`,content:`Два вида списков:`},{heading:`что-настраивает-администратор`,content:`**Админ-списки** — общие имена. Пользователь не удаляет такой список. Внутри у каждого человека свой набор новостей. При первом открытии модуля создаются три имени: «В планах», «Просмотрено», «Избрано».`},{heading:`что-настраивает-администратор`,content:`**Списки пользователей** — создаёт владелец. Считаются в лимит группы. Можно оставить только себе или открыть всем (если группе разрешено). Описание правится визуальным редактором. Имя, видимость и описание меняют владелец или администратор.`},{heading:`что-настраивает-администратор`,content:`Права групп: доступ к модулю на сайте, сколько своих списков можно завести, можно ли открывать списки всем, можно ли предлагать новости в чужие открытые списки.`},{heading:`что-настраивает-администратор`,content:`Предложения: владелец включает приём и выбирает, кто может предлагать — конкретные люди или все, у кого есть право предлагать. Новость сначала в очереди; владелец принимает или отклоняет.`},{heading:`возможности`,content:`кнопка и окно выбора списков на новости (краткая, полная или свой шаблон);`},{heading:`возможности`,content:`каталог, «мои списки», просмотр и очередь предложений — отдельные вставки в тему;`},{heading:`возможности`,content:`админ-списки с общим именем и личным содержимым;`},{heading:`возможности`,content:`свои списки с лимитом, запрещёнными словами в названии и ограничением длины;`},{heading:`возможности`,content:`права по группам DLE;`},{heading:`возможности`,content:`гости и открытые списки — отдельный переключатель;`},{heading:`возможности`,content:"запросы сайта и админки только через `devcraft/ajax.php`;"},{heading:`возможности`,content:"журнал важных действий через `LogGenerator`."},{heading:`требования`,content:`Компонент`},{heading:`требования`,content:`Версия`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**≥ 20.0**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**≥ 8.3**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:`**≥ 200.4.0**`},{heading:`идентификация-модуля`,content:`Поле`},{heading:`идентификация-модуля`,content:`Значение`},{heading:`идентификация-модуля`,content:`Каталог модуля`},{heading:`идентификация-модуля`,content:"`UserLists`"},{heading:`идентификация-модуля`,content:`Код в админке`},{heading:`идентификация-модуля`,content:"`user_lists`"},{heading:`идентификация-модуля`,content:`Версия`},{heading:`идентификация-модуля`,content:"`200.1.0`"},{heading:`идентификация-модуля`,content:`Точка входа`},{heading:`идентификация-модуля`,content:"`engine/inc/user_lists.php`"},{heading:`идентификация-модуля`,content:`Пространство имён`},{heading:`идентификация-модуля`,content:"`DevCraft\\Modules\\UserLists`"},{heading:`таблицы-в-базе`,content:`При первом открытии модуля в админке создаются таблицы с префиксом сайта:`},{heading:`таблицы-в-базе`,content:`Назначение`},{heading:`таблицы-в-базе`,content:`Таблица`},{heading:`таблицы-в-базе`,content:`Списки (админские и пользовательские)`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_user_lists`"},{heading:`таблицы-в-базе`,content:`Новости в списках`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_user_list_items`"},{heading:`таблицы-в-базе`,content:`Кому разрешено предлагать в конкретный список`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_user_list_suggestors`"},{heading:`таблицы-в-базе`,content:`Права групп`},{heading:`таблицы-в-базе`,content:"`{prefix}_dc_user_list_group_permissions`"},{heading:`таблицы-в-базе`,content:"Новость в элементе ссылается на `post.id`. Одна и та же новость в одном списке у одного пользователя не дублируется."},{heading:`структура-файлов`,content:`Корень сайта после установки (обзор):`},{heading:`структура-файлов`,content:`<File name="user_lists.php" />`},{heading:`структура-файлов`,content:`<File name="user_lists.php" />`},{heading:`структура-файлов`,content:`<File name="user_lists_page.php" />`},{heading:`структура-файлов`,content:`<File name="user_lists.json" />`},{heading:`структура-файлов`,content:`<File name="manifest.php" />`},{heading:`структура-файлов`,content:`<File name="button.tpl" />`},{heading:`структура-файлов`,content:`<File name="modal.tpl" />`},{heading:`структура-файлов`,content:`<File name="page.tpl" />`},{heading:`структура-файлов`,content:`<File name="view.tpl" />`},{heading:`структура-файлов`,content:`<File name="proposals.tpl" />`},{heading:`структура-файлов`,content:"Если в текущей теме нет каталога `devcraft/user_lists/`, скопируйте его из `Default`."},{heading:`разделы-админки`,content:`Раздел`},{heading:`разделы-админки`,content:`Зачем`},{heading:`разделы-админки`,content:`Админ-списки`},{heading:`разделы-админки`,content:`Общие имена списков; содержимое у каждого пользователя своё`},{heading:`разделы-админки`,content:`Списки пользователей`},{heading:`разделы-админки`,content:`Чужие и свои пользовательские списки, правки от администратора`},{heading:`разделы-админки`,content:`Права групп`},{heading:`разделы-админки`,content:`Доступ, лимит своих списков, открытые списки, предложения`},{heading:`разделы-админки`,content:`Настройки`},{heading:`разделы-админки`,content:`гости и открытые списки, текст кнопки, запрещённые слова, сколько записей на странице`},{heading:`разделы-админки`,content:`Подключение в шаблоны`},{heading:`разделы-админки`,content:`шпаргалка вставок в тему`},{heading:`дальше`,content:`Копирование файлов, регистрация плагина и первые шаги`},{heading:`дальше`,content:`Кнопка на новости и страницы списков`},{heading:`дальше`,content:`Админ-списки, личные и открытые, права групп`},{heading:`дальше`,content:`Что вошло в 200.1.0`}],headings:[{id:`что-видит-посетитель`,content:`Что видит посетитель`},{id:`что-настраивает-администратор`,content:`Что настраивает администратор`},{id:`возможности`,content:`Возможности`},{id:`требования`,content:`Требования`},{id:`идентификация-модуля`,content:`Идентификация модуля`},{id:`таблицы-в-базе`,content:`Таблицы в базе`},{id:`структура-файлов`,content:`Структура файлов`},{id:`разделы-админки`,content:`Разделы админки`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#что-видит-посетитель`,title:(0,n.jsx)(n.Fragment,{children:`Что видит посетитель`})},{depth:2,url:`#что-настраивает-администратор`,title:(0,n.jsx)(n.Fragment,{children:`Что настраивает администратор`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#идентификация-модуля`,title:(0,n.jsx)(n.Fragment,{children:`Идентификация модуля`})},{depth:2,url:`#таблицы-в-базе`,title:(0,n.jsx)(n.Fragment,{children:`Таблицы в базе`})},{depth:2,url:`#структура-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Структура файлов`})},{depth:2,url:`#разделы-админки`,title:(0,n.jsx)(n.Fragment,{children:`Разделы админки`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`UserLists`}),` — сателлит `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/getting_started`,children:`DevCraft Admin`}),` для DataLife Engine. Люди собирают новости в `,(0,n.jsx)(t.strong,{children:`свои списки`}),` (только себе или открытые всем), а администратор задаёт `,(0,n.jsx)(t.strong,{children:`общие имена`}),` вроде «В планах» или «Просмотрено»: название одно на весь сайт, содержимое у каждого своё.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модуль `,(0,n.jsx)(t.strong,{children:`не трогает`}),` штатное «Избранное» DLE: не подменяет его, не переносит туда записи и не правит ядро ради этого. Данные лежат в таблицах `,(0,n.jsx)(t.code,{children:`dc_user_lists*`}),`. Это замена старого FavAll: админка на Metro, кнопка на новости, каталог открытых списков и очередь предложений с одобрением владельца.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Исходники пакета: репозиторий `,(0,n.jsx)(t.code,{children:`DLE-UserLists`}),` (`,(0,n.jsx)(t.code,{children:`devcraft/src/modules/UserLists/`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`что-видит-посетитель`,children:`Что видит посетитель`}),`
`,(0,n.jsx)(t.p,{children:`На краткой или полной новости — кнопка (текст задаётся в настройках, по умолчанию «В списки»). По нажатию открывается окно: отметить списки, куда положить материал, при необходимости создать свой список.`}),`
`,(0,n.jsx)(t.p,{children:`Отдельно в теме подключаются страницы:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`мои списки;`}),`
`,(0,n.jsx)(t.li,{children:`каталог открытых списков (гости — только если это разрешено в настройках);`}),`
`,(0,n.jsx)(t.li,{children:`просмотр одного списка;`}),`
`,(0,n.jsx)(t.li,{children:`очередь предложений владельцу.`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Чужой `,(0,n.jsx)(t.strong,{children:`личный`}),` список с сайта не виден. Открытый список видят те, кому это разрешено настройкой для гостей и правами группы.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-настраивает-администратор`,children:`Что настраивает администратор`}),`
`,(0,n.jsx)(t.p,{children:`Два вида списков:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Админ-списки`}),` — общие имена. Пользователь не удаляет такой список. Внутри у каждого человека свой набор новостей. При первом открытии модуля создаются три имени: «В планах», «Просмотрено», «Избрано».`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Списки пользователей`}),` — создаёт владелец. Считаются в лимит группы. Можно оставить только себе или открыть всем (если группе разрешено). Описание правится визуальным редактором. Имя, видимость и описание меняют владелец или администратор.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Права групп: доступ к модулю на сайте, сколько своих списков можно завести, можно ли открывать списки всем, можно ли предлагать новости в чужие открытые списки.`}),`
`,(0,n.jsx)(t.p,{children:`Предложения: владелец включает приём и выбирает, кто может предлагать — конкретные люди или все, у кого есть право предлагать. Новость сначала в очереди; владелец принимает или отклоняет.`}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`кнопка и окно выбора списков на новости (краткая, полная или свой шаблон);`}),`
`,(0,n.jsx)(t.li,{children:`каталог, «мои списки», просмотр и очередь предложений — отдельные вставки в тему;`}),`
`,(0,n.jsx)(t.li,{children:`админ-списки с общим именем и личным содержимым;`}),`
`,(0,n.jsx)(t.li,{children:`свои списки с лимитом, запрещёнными словами в названии и ограничением длины;`}),`
`,(0,n.jsx)(t.li,{children:`права по группам DLE;`}),`
`,(0,n.jsx)(t.li,{children:`гости и открытые списки — отдельный переключатель;`}),`
`,(0,n.jsxs)(t.li,{children:[`запросы сайта и админки только через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`журнал важных действий через `,(0,n.jsx)(t.code,{children:`LogGenerator`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 20.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.0`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`идентификация-модуля`,children:`Идентификация модуля`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Поле`}),(0,n.jsx)(t.th,{children:`Значение`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Каталог модуля`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`UserLists`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Код в админке`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`user_lists`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Версия`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`200.1.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Точка входа`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`engine/inc/user_lists.php`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Пространство имён`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`DevCraft\\Modules\\UserLists`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`таблицы-в-базе`,children:`Таблицы в базе`}),`
`,(0,n.jsx)(t.p,{children:`При первом открытии модуля в админке создаются таблицы с префиксом сайта:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Назначение`}),(0,n.jsx)(t.th,{children:`Таблица`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Списки (админские и пользовательские)`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_user_lists`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Новости в списках`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_user_list_items`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Кому разрешено предлагать в конкретный список`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_user_list_suggestors`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Права групп`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`{prefix}_dc_user_list_group_permissions`})})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Новость в элементе ссылается на `,(0,n.jsx)(t.code,{children:`post.id`}),`. Одна и та же новость в одном списке у одного пользователя не дублируется.`]}),`
`,(0,n.jsx)(t.h2,{id:`структура-файлов`,children:`Структура файлов`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта после установки (обзор):`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`Корень сайта`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`engine`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`inc`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`user_lists.php`})}),(0,n.jsxs)(s,{name:`modules/devcraft`,children:[(0,n.jsx)(a,{name:`user_lists.php`}),(0,n.jsx)(a,{name:`user_lists_page.php`})]})]}),(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsx)(s,{name:`config`,children:(0,n.jsx)(a,{name:`user_lists.json`})}),(0,n.jsxs)(s,{name:`src/modules/UserLists`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php`}),(0,n.jsx)(s,{name:`Ajax`}),(0,n.jsx)(s,{name:`Models`}),(0,n.jsx)(s,{name:`Pages`}),(0,n.jsx)(s,{name:`Public`}),(0,n.jsx)(s,{name:`Services`}),(0,n.jsx)(s,{name:`templates`})]})]}),(0,n.jsxs)(s,{name:`templates/{skin}/devcraft/user_lists`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`button.tpl`}),(0,n.jsx)(a,{name:`modal.tpl`}),(0,n.jsx)(a,{name:`page.tpl`}),(0,n.jsx)(a,{name:`view.tpl`}),(0,n.jsx)(a,{name:`proposals.tpl`})]})]})}),`
`,(0,n.jsxs)(t.p,{children:[`Если в текущей теме нет каталога `,(0,n.jsx)(t.code,{children:`devcraft/user_lists/`}),`, скопируйте его из `,(0,n.jsx)(t.code,{children:`Default`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-админки`,children:`Разделы админки`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Раздел`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Админ-списки`}),(0,n.jsx)(t.td,{children:`Общие имена списков; содержимое у каждого пользователя своё`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Списки пользователей`}),(0,n.jsx)(t.td,{children:`Чужие и свои пользовательские списки, правки от администратора`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Права групп`}),(0,n.jsx)(t.td,{children:`Доступ, лимит своих списков, открытые списки, предложения`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Настройки`}),(0,n.jsx)(t.td,{children:`гости и открытые списки, текст кнопки, запрещённые слова, сколько записей на странице`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Подключение в шаблоны`}),(0,n.jsx)(t.td,{children:`шпаргалка вставок в тему`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Копирование файлов, регистрация плагина и первые шаги`})}),(0,n.jsx)(r,{title:`Подключение в теме`,href:`./guides/theme`,children:(0,n.jsx)(t.p,{children:`Кнопка на новости и страницы списков`})}),(0,n.jsx)(r,{title:`Списки и видимость`,href:`./guides/lists-and-visibility`,children:(0,n.jsx)(t.p,{children:`Админ-списки, личные и открытые, права групп`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что вошло в 200.1.0`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};