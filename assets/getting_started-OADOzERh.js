import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое DLE Faker: тестовые пользователи, новости и категории в админке DevCraft.`,version:`200.1.4`},i=new Date(1790413881e3),a=`

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip" /> Перейти к разработке](https://devcraft.club/downloads/dle-faker.29/)

**DLE Faker** — сателлит [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started): в админке создаёте тестовых пользователей, категории и новости по шаблонам. В тексте шаблона — теги FakerPHP и файлы из своей медиатеки. На сайте модуля нет: только панель \`?mod=dle_faker\`.

Код модуля сейчас **200.1.5** (эта папка docs — опубликованная ветка \`200.1.4&#x60;). Новости, пользователи и категории пишутся через &#x2A;*\`DcApi\`*&#x2A; из Admin, не сырым SQL. Нужна оболочка **≥ 200.4.1**.

## Возможности [#возможности]

* Генератор пользователей, новостей и категорий.
* Шаблоны новостей: автор, категории, даты, флаги, доп. поля.
* Справочник тегов (\`{{ … }}\`) для текста и полей.
* Медиатека: изображения, файлы, аудио, видео — для доп. полей и тегов \`static_*\`.
* Настройки: локаль FakerPHP, пул авторов и категорий, как показывать доп. поля.

## Требования [#требования]

| Что             | Минимум                                       |
| --------------- | --------------------------------------------- |
| DataLife Engine | **20.0+**                                     |
| PHP             | **8.3+**                                      |
| DevCraft Admin  | **≥ 200.4.1** (в нём лежит \`DcApi\`)           |
| Composer        | пакет \`fakerphp/faker\` в каталоге \`devcraft/\` |

## Дерево [#дерево]

Корень сайта после установки. В скобках — зачем папка.

<Files>
  <Folder name="корень сайта DLE">
    <Folder name="devcraft">
      <Folder name="src/modules/dle_faker">
        <File name="manifest.php — меню, версия 200.1.5, AJAX, fakerphp/faker" />

        <File name="DleFakerIdentity.php — mod и code: dle_faker" />

        <File name="settings.schema.php — форма настроек" />

        <File name="changelog.data.php — история в панели" />

        <Folder name="Pages — главная, генераторы, шаблоны, файлы, теги, настройки" />

        <Folder name="Ajax — только devcraft/ajax.php" />

        <Folder name="Services — генерация, разбор тегов, файлы" />

        <Folder name="Filter — фильтр списка шаблонов" />

        <Folder name="Public — icon.png, dle_faker.js (админка, не оболочка сайта)" />

        <Folder name="templates — экраны Twig" />
      </Folder>

      <Folder name="locales — dle_faker.xliff" />

      <Folder name="config — dle_faker.json после сохранения настроек" />
    </Folder>

    <Folder name="engine/inc">
      <File name="dle_faker.php — вход в админку модуля" />
    </Folder>
  </Folder>
</Files>

Вход AJAX: \`devcraft/ajax.php?mod=dle_faker&controller=admin&method=…\`. Отдельного \`engine/ajax/dle_faker.php\` нет.

Локали только в \`devcraft/locales/*/dle_faker.xliff\`.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Поставьте Admin, затем Faker [#поставьте-admin-затем-faker]

    Сначала [DevCraft Admin ≥ 200.4.1](/dev/dle/devcraft_admin/200.4.1/install), затем этот плагин. В \`devcraft/\` нужен \`fakerphp/faker\` и \`composer dump-autoload\`. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Сохраните настройки [#сохраните-настройки]

    \`?mod=dle_faker&action=settings\`: локаль, авторы и категории для «случайно». Иначе теги \`random_user\` / \`random_category\` и генератор новостей не из чего брать пул. См. [Настройки](./settings).
  </Step>

  <Step>
    ### Шаблон и генерация [#шаблон-и-генерация]

    Создайте [шаблон новости](guides/gen_news), при необходимости загрузите файлы в меню **Файлы**, затем запустите генератор.
  </Step>
</Steps>

## Разделы документации [#разделы-документации]

<Cards>
  <Card title="Установка" href="/dev/dle/dle_faker/200.1.4/install">
    Архив плагина, Composer, первый заход
  </Card>

  <Card title="Настройки" href="/dev/dle/dle_faker/200.1.4/settings">
    Локаль, пулы, доп. поля
  </Card>

  <Card title="Новости" href="/dev/dle/dle_faker/200.1.4/guides/gen_news">
    Шаблоны и генерация публикаций
  </Card>

  <Card title="Пользователи" href="/dev/dle/dle_faker/200.1.4/guides/gen_users">
    Генерация учёток
  </Card>

  <Card title="История изменений" href="/dev/dle/dle_faker/200.1.4/changelog">
    200.1.5 и раньше
  </Card>
</Cards>
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**:  Перейти к разработке`},{heading:void 0,content:"**DLE Faker** — сателлит DevCraft Admin: в админке создаёте тестовых пользователей, категории и новости по шаблонам. В тексте шаблона — теги FakerPHP и файлы из своей медиатеки. На сайте модуля нет: только панель `?mod=dle_faker`."},{heading:void 0,content:"Код модуля сейчас **200.1.5** (эта папка docs — опубликованная ветка `200.1.4&#x60;). Новости, пользователи и категории пишутся через &#x2A;*`DcApi`*&#x2A; из Admin, не сырым SQL. Нужна оболочка **≥ 200.4.1**."},{heading:`возможности`,content:`Генератор пользователей, новостей и категорий.`},{heading:`возможности`,content:`Шаблоны новостей: автор, категории, даты, флаги, доп. поля.`},{heading:`возможности`,content:"Справочник тегов (`{{ … }}`) для текста и полей."},{heading:`возможности`,content:"Медиатека: изображения, файлы, аудио, видео — для доп. полей и тегов `static_*`."},{heading:`возможности`,content:`Настройки: локаль FakerPHP, пул авторов и категорий, как показывать доп. поля.`},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:"**≥ 200.4.1** (в нём лежит `DcApi`)"},{heading:`требования`,content:`Composer`},{heading:`требования`,content:"пакет `fakerphp/faker` в каталоге `devcraft/`"},{heading:`дерево`,content:`Корень сайта после установки. В скобках — зачем папка.`},{heading:`дерево`,content:`<File name="manifest.php — меню, версия 200.1.5, AJAX, fakerphp/faker" />`},{heading:`дерево`,content:`<File name="DleFakerIdentity.php — mod и code: dle_faker" />`},{heading:`дерево`,content:`<File name="settings.schema.php — форма настроек" />`},{heading:`дерево`,content:`<File name="changelog.data.php — история в панели" />`},{heading:`дерево`,content:`<File name="dle_faker.php — вход в админку модуля" />`},{heading:`дерево`,content:"Вход AJAX: `devcraft/ajax.php?mod=dle_faker&controller=admin&method=…`. Отдельного `engine/ajax/dle_faker.php` нет."},{heading:`дерево`,content:"Локали только в `devcraft/locales/*/dle_faker.xliff`."},{heading:`поставьте-admin-затем-faker`,content:"Сначала DevCraft Admin ≥ 200.4.1, затем этот плагин. В `devcraft/` нужен `fakerphp/faker` и `composer dump-autoload`. Подробности: Установка."},{heading:`сохраните-настройки`,content:"`?mod=dle_faker&action=settings`: локаль, авторы и категории для «случайно». Иначе теги `random_user` / `random_category` и генератор новостей не из чего брать пул. См. Настройки."},{heading:`шаблон-и-генерация`,content:`Создайте шаблон новости, при необходимости загрузите файлы в меню **Файлы**, затем запустите генератор.`},{heading:`разделы-документации`,content:`Архив плагина, Composer, первый заход`},{heading:`разделы-документации`,content:`Локаль, пулы, доп. поля`},{heading:`разделы-документации`,content:`Шаблоны и генерация публикаций`},{heading:`разделы-документации`,content:`Генерация учёток`},{heading:`разделы-документации`,content:`200.1.5 и раньше`}],headings:[{id:`возможности`,content:`Возможности`},{id:`требования`,content:`Требования`},{id:`дерево`,content:`Дерево`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`поставьте-admin-затем-faker`,content:`Поставьте Admin, затем Faker`},{id:`сохраните-настройки`,content:`Сохраните настройки`},{id:`шаблон-и-генерация`,content:`Шаблон и генерация`},{id:`разделы-документации`,content:`Разделы документации`}]},s=[{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дерево`,title:(0,n.jsx)(n.Fragment,{children:`Дерево`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#поставьте-admin-затем-faker`,title:(0,n.jsx)(n.Fragment,{children:`Поставьте Admin, затем Faker`})},{depth:3,url:`#сохраните-настройки`,title:(0,n.jsx)(n.Fragment,{children:`Сохраните настройки`})},{depth:3,url:`#шаблон-и-генерация`,title:(0,n.jsx)(n.Fragment,{children:`Шаблон и генерация`})},{depth:2,url:`#разделы-документации`,title:(0,n.jsx)(n.Fragment,{children:`Разделы документации`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Step:c,Steps:l}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Step`,!0),l||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsxs)(t.a,{href:`https://devcraft.club/downloads/dle-faker.29/`,children:[(0,n.jsx)(`i`,{class:`fa-thin fa-paperclip`}),` Перейти к разработке`]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`DLE Faker`}),` — сателлит `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`}),`: в админке создаёте тестовых пользователей, категории и новости по шаблонам. В тексте шаблона — теги FakerPHP и файлы из своей медиатеки. На сайте модуля нет: только панель `,(0,n.jsx)(t.code,{children:`?mod=dle_faker`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Код модуля сейчас `,(0,n.jsx)(t.strong,{children:`200.1.5`}),` (эта папка docs — опубликованная ветка `,(0,n.jsx)(t.code,{children:`200.1.4`}),`). Новости, пользователи и категории пишутся через `,(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`DcApi`})}),` из Admin, не сырым SQL. Нужна оболочка `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Генератор пользователей, новостей и категорий.`}),`
`,(0,n.jsx)(t.li,{children:`Шаблоны новостей: автор, категории, даты, флаги, доп. поля.`}),`
`,(0,n.jsxs)(t.li,{children:[`Справочник тегов (`,(0,n.jsx)(t.code,{children:`{{ … }}`}),`) для текста и полей.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Медиатека: изображения, файлы, аудио, видео — для доп. полей и тегов `,(0,n.jsx)(t.code,{children:`static_*`}),`.`]}),`
`,(0,n.jsx)(t.li,{children:`Настройки: локаль FakerPHP, пул авторов и категорий, как показывать доп. поля.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),` (в нём лежит `,(0,n.jsx)(t.code,{children:`DcApi`}),`)`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Composer`}),(0,n.jsxs)(t.td,{children:[`пакет `,(0,n.jsx)(t.code,{children:`fakerphp/faker`}),` в каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`дерево`,children:`Дерево`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта после установки. В скобках — зачем папка.`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`корень сайта DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src/modules/dle_faker`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php — меню, версия 200.1.5, AJAX, fakerphp/faker`}),(0,n.jsx)(a,{name:`DleFakerIdentity.php — mod и code: dle_faker`}),(0,n.jsx)(a,{name:`settings.schema.php — форма настроек`}),(0,n.jsx)(a,{name:`changelog.data.php — история в панели`}),(0,n.jsx)(s,{name:`Pages — главная, генераторы, шаблоны, файлы, теги, настройки`}),(0,n.jsx)(s,{name:`Ajax — только devcraft/ajax.php`}),(0,n.jsx)(s,{name:`Services — генерация, разбор тегов, файлы`}),(0,n.jsx)(s,{name:`Filter — фильтр списка шаблонов`}),(0,n.jsx)(s,{name:`Public — icon.png, dle_faker.js (админка, не оболочка сайта)`}),(0,n.jsx)(s,{name:`templates — экраны Twig`})]}),(0,n.jsx)(s,{name:`locales — dle_faker.xliff`}),(0,n.jsx)(s,{name:`config — dle_faker.json после сохранения настроек`})]}),(0,n.jsx)(s,{name:`engine/inc`,children:(0,n.jsx)(a,{name:`dle_faker.php — вход в админку модуля`})})]})}),`
`,(0,n.jsxs)(t.p,{children:[`Вход AJAX: `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php?mod=dle_faker&controller=admin&method=…`}),`. Отдельного `,(0,n.jsx)(t.code,{children:`engine/ajax/dle_faker.php`}),` нет.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Локали только в `,(0,n.jsx)(t.code,{children:`devcraft/locales/*/dle_faker.xliff`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`поставьте-admin-затем-faker`,children:`Поставьте Admin, затем Faker`}),(0,n.jsxs)(t.p,{children:[`Сначала `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin ≥ 200.4.1`}),`, затем этот плагин. В `,(0,n.jsx)(t.code,{children:`devcraft/`}),` нужен `,(0,n.jsx)(t.code,{children:`fakerphp/faker`}),` и `,(0,n.jsx)(t.code,{children:`composer dump-autoload`}),`. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`сохраните-настройки`,children:`Сохраните настройки`}),(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`?mod=dle_faker&action=settings`}),`: локаль, авторы и категории для «случайно». Иначе теги `,(0,n.jsx)(t.code,{children:`random_user`}),` / `,(0,n.jsx)(t.code,{children:`random_category`}),` и генератор новостей не из чего брать пул. См. `,(0,n.jsx)(t.a,{href:`./settings`,children:`Настройки`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`шаблон-и-генерация`,children:`Шаблон и генерация`}),(0,n.jsxs)(t.p,{children:[`Создайте `,(0,n.jsx)(t.a,{href:`guides/gen_news`,children:`шаблон новости`}),`, при необходимости загрузите файлы в меню `,(0,n.jsx)(t.strong,{children:`Файлы`}),`, затем запустите генератор.`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`разделы-документации`,children:`Разделы документации`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`/dev/dle/dle_faker/200.1.4/install`,children:(0,n.jsx)(t.p,{children:`Архив плагина, Composer, первый заход`})}),(0,n.jsx)(r,{title:`Настройки`,href:`/dev/dle/dle_faker/200.1.4/settings`,children:(0,n.jsx)(t.p,{children:`Локаль, пулы, доп. поля`})}),(0,n.jsx)(r,{title:`Новости`,href:`/dev/dle/dle_faker/200.1.4/guides/gen_news`,children:(0,n.jsx)(t.p,{children:`Шаблоны и генерация публикаций`})}),(0,n.jsx)(r,{title:`Пользователи`,href:`/dev/dle/dle_faker/200.1.4/guides/gen_users`,children:(0,n.jsx)(t.p,{children:`Генерация учёток`})}),(0,n.jsx)(r,{title:`История изменений`,href:`/dev/dle/dle_faker/200.1.4/changelog`,children:(0,n.jsx)(t.p,{children:`200.1.5 и раньше`})})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};