import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Что такое TagsAdd: предложение тегов к новостям, модерация, настройки и подключение в теме.`,version:`200.3.1`},i=new Date(1789485207e3),a=`

## Описание плагина [#описание-плагина]

**TagsAdd** (пользовательские теги) — сателлит [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/getting_started) для **DataLife Engine**. Читатель на полной новости предлагает теги; предложения попадают в очередь. Модератор в админке одобряет, отклоняет или правит запись — при одобрении теги пишутся в теги новости или в выбранное доп. поле.

Модуль: \`devcraft/src/modules/TagsAdd/\`, вход админки \`?mod=tags_add\`. Публичная отправка идёт через общий AJAX DevCraft (\`controller=public\`), без отдельных \`engine/ajax\` скриптов модуля. Версия **200.3.1** — ветка \`200.*&#x60; для DLE 20+ и Admin **≥ 200.4.1**.

* Страница загрузки: [devcraft.club](https://devcraft.club/downloads/polzovatelskie-tegi.12/)
* Репозиторий: [DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd)

## Возможности [#возможности]

* Кнопка и окно на полной новости (шаблоны темы).
* Предложения от гостей (если разрешено в настройках) и от авторизованных.
* Очередь в админке: одобрить / отклонить с причиной / удалить / массовые действия.
* Вставка при одобрении в \`tags\` новости или в доп. поле (\`xfield\`), опционально в xfsearch.
* ЛС админу и автору предложения (шаблоны с плейсхолдерами новости и модуля).
* Предпочтения уведомлений через доп. поле профиля (список).
* Локали XLIFF (\`ru_RU\` и др.), changelog в панели модуля.

## Для кого [#для-кого]

### Владельцы сайта и модераторы [#владельцы-сайта-и-модераторы]

Ставите Admin, затем TagsAdd, сохраняете настройки (получатель ЛС, куда писать теги), подключаете includes в \`fullstory.tpl\`. Дальше работаете в очереди \`?mod=tags_add&action=suggestions\`.

### Разработчики темы [#разработчики-темы]

Копируете \`templates/Default/devcraft/tags_add/\` в свой скин, правите \`button.tpl\` / \`modal.tpl\` / CSS / JS, не ломая имена полей формы и AJAX. См. [Подключение в теме](guides/theme).

**Почему не старый TagsAdd 2.x (maharder).** Пакет 200.x — другой каркас: DevCraft, Metro, Cycle ORM. Поверх \`engine/inc/maharder/\` не ставится — сначала снимите legacy, потом Admin и TagsAdd 200.3.x.

## Требования [#требования]

| Что             | Минимум                                        |
| --------------- | ---------------------------------------------- |
| DataLife Engine | **20.0+**                                      |
| PHP             | **8.3+**                                       |
| DevCraft Admin  | **≥ 200.4.1** (\`dc_public.js\`, публичный AJAX) |

Полный чеклист: [Установка](./install).

## Дерево структуры [#дерево-структуры]

Корень сайта после установки. В скобках — зачем папка.

<Files>
  <Folder name="корень сайта DLE">
    <Folder name="devcraft">
      <Folder name="src/modules/TagsAdd">
        <File name="manifest.php — меню, AJAX, meta" />

        <File name="settings.schema.php — форма настроек" />

        <File name="changelog.data.php — история в панели" />

        <File name="TagsAddIdentity.php — MODULE/CODE" />

        <Folder name="Controller — публичный include show_tags_add.php" />

        <Folder name="Pages — главная, очередь, настройки, шаблоны ЛС…" />

        <Folder name="Ajax — suggest, approve, reject, delete…" />

        <Folder name="Services / Models / Repositories / Filter" />

        <Folder name="templates — Twig экранов админки" />

        <Folder name="Public — tags_add.css, tags_add_site.js, admin tags_add.js" />
      </Folder>

      <Folder name="config — tags_add.json после сохранения" />

      <Folder name="locales — tagsadd.xliff (ru_RU, …)" />
    </Folder>

    <Folder name="engine">
      <Folder name="inc">
        <File name="tags_add.php — glue админки" />
      </Folder>
    </Folder>

    <Folder name="templates/{skin}/devcraft/tags_add">
      <File name="button.tpl / modal.tpl" />
    </Folder>
  </Folder>
</Files>

Кратко:

* **\`devcraft/src/modules/TagsAdd/\`** — админка, бизнес-логика и публичный Controller.
* **\`Controller/show_tags_add.php\`** — канон include в теме (от корня сайта).
* **\`Public/\`** — CSS/JS сайта (\`siteAssets\`) и JS админки (\`assets\`).
* **\`templates/…/tags_add/\`** — разметка кнопки и окна.

## Быстрый старт [#быстрый-старт]

<Steps>
  <Step>
    ### Поставьте Admin и TagsAdd [#поставьте-admin-и-tagsadd]

    Сначала [DevCraft Admin](/dev/dle/devcraft_admin/200.4.1/install), затем ZIP TagsAdd через менеджер плагинов. В \`devcraft/\` выполните \`composer dump-autoload\`. Подробности: [Установка](./install).
  </Step>

  <Step>
    ### Настройки [#настройки]

    Откройте \`?mod=tags_add\`, сохраните получателя ЛС, текст кнопки и куда вставлять теги при одобрении. См. [Настройки](./settings).
  </Step>

  <Step>
    ### Тема [#тема]

    В \`main.tpl\` поставьте \`{devcraft}\`. В \`fullstory.tpl\` — includes с \`focus=button\` и \`focus=modal\`. Скопируйте шаблоны в свой скин при необходимости. См. [Подключение в теме](guides/theme).
  </Step>

  <Step>
    ### Модерация [#модерация]

    Очередь: \`?mod=tags_add&action=suggestions\`. Одобрение пишет теги в новость; отклонение может с причиной (или стандартной из настроек).
  </Step>
</Steps>

## Руководства и разделы [#руководства-и-разделы]

| Страница                           | О чём                                           |
| ---------------------------------- | ----------------------------------------------- |
| [Установка](./install)             | ZIP, Composer, первый запуск, отличие от legacy |
| [Настройки](./settings)            | PM, xfield prefs, куда писать теги, шаблоны ЛС  |
| [Подключение в теме](guides/theme) | Includes в fullstory, теги button/modal         |
| [Очередь](guides/moderation)       | Одобрение, отклонение, массовые действия        |
| [Справочник](./reference)          | Классы PHP и AJAX                               |
| [История изменений](./changelog)   | 200.3.1 и ранее                                 |

<Cards>
  <Card title="Установка" href="./install">
    Admin, ZIP, dump-autoload, таблица
  </Card>

  <Card title="Настройки" href="./settings">
    Уведомления, вставка тегов, PM
  </Card>

  <Card title="Тема" href="./guides/theme">
    fullstory.tpl и шаблоны кнопки
  </Card>

  <Card title="Очередь" href="./guides/moderation">
    Одобрить, отклонить, массово
  </Card>

  <Card title="Справочник" href="./reference">
    Классы и AJAX
  </Card>

  <Card title="История изменений" href="./changelog">
    Что изменилось в 200.3.1
  </Card>
</Cards>

## Дальше [#дальше]

1. [Установить](./install) плагин.
2. Пройти [быстрый старт](#быстрый-старт).
3. Настроить [шаблоны ЛС и вставку](./settings), проверить кнопку на новости.
`,o={contents:[{heading:`описание-плагина`,content:`**TagsAdd** (пользовательские теги) — сателлит DevCraft Admin для **DataLife Engine**. Читатель на полной новости предлагает теги; предложения попадают в очередь. Модератор в админке одобряет, отклоняет или правит запись — при одобрении теги пишутся в теги новости или в выбранное доп. поле.`},{heading:`описание-плагина`,content:"Модуль: `devcraft/src/modules/TagsAdd/`, вход админки `?mod=tags_add`. Публичная отправка идёт через общий AJAX DevCraft (`controller=public`), без отдельных `engine/ajax` скриптов модуля. Версия **200.3.1** — ветка `200.*&#x60; для DLE 20+ и Admin **≥ 200.4.1**."},{heading:`описание-плагина`,content:`Страница загрузки: devcraft.club`},{heading:`описание-плагина`,content:`Репозиторий: DevCraftClub/tagsadd`},{heading:`возможности`,content:`Кнопка и окно на полной новости (шаблоны темы).`},{heading:`возможности`,content:`Предложения от гостей (если разрешено в настройках) и от авторизованных.`},{heading:`возможности`,content:`Очередь в админке: одобрить / отклонить с причиной / удалить / массовые действия.`},{heading:`возможности`,content:"Вставка при одобрении в `tags` новости или в доп. поле (`xfield`), опционально в xfsearch."},{heading:`возможности`,content:`ЛС админу и автору предложения (шаблоны с плейсхолдерами новости и модуля).`},{heading:`возможности`,content:`Предпочтения уведомлений через доп. поле профиля (список).`},{heading:`возможности`,content:"Локали XLIFF (`ru_RU` и др.), changelog в панели модуля."},{heading:`владельцы-сайта-и-модераторы`,content:"Ставите Admin, затем TagsAdd, сохраняете настройки (получатель ЛС, куда писать теги), подключаете includes в `fullstory.tpl`. Дальше работаете в очереди `?mod=tags_add&action=suggestions`."},{heading:`разработчики-темы`,content:"Копируете `templates/Default/devcraft/tags_add/` в свой скин, правите `button.tpl` / `modal.tpl` / CSS / JS, не ломая имена полей формы и AJAX. См. Подключение в теме."},{heading:`разработчики-темы`,content:"**Почему не старый TagsAdd 2.x (maharder).** Пакет 200.x — другой каркас: DevCraft, Metro, Cycle ORM. Поверх `engine/inc/maharder/` не ставится — сначала снимите legacy, потом Admin и TagsAdd 200.3.x."},{heading:`требования`,content:`Что`},{heading:`требования`,content:`Минимум`},{heading:`требования`,content:`DataLife Engine`},{heading:`требования`,content:`**20.0+**`},{heading:`требования`,content:`PHP`},{heading:`требования`,content:`**8.3+**`},{heading:`требования`,content:`DevCraft Admin`},{heading:`требования`,content:"**≥ 200.4.1** (`dc_public.js`, публичный AJAX)"},{heading:`требования`,content:`Полный чеклист: Установка.`},{heading:`дерево-структуры`,content:`Корень сайта после установки. В скобках — зачем папка.`},{heading:`дерево-структуры`,content:`<File name="manifest.php — меню, AJAX, meta" />`},{heading:`дерево-структуры`,content:`<File name="settings.schema.php — форма настроек" />`},{heading:`дерево-структуры`,content:`<File name="changelog.data.php — история в панели" />`},{heading:`дерево-структуры`,content:`<File name="TagsAddIdentity.php — MODULE/CODE" />`},{heading:`дерево-структуры`,content:`<File name="tags_add.php — glue админки" />`},{heading:`дерево-структуры`,content:`<File name="button.tpl / modal.tpl" />`},{heading:`дерево-структуры`,content:`Кратко:`},{heading:`дерево-структуры`,content:"**`devcraft/src/modules/TagsAdd/`** — админка, бизнес-логика и публичный Controller."},{heading:`дерево-структуры`,content:"**`Controller/show_tags_add.php`** — канон include в теме (от корня сайта)."},{heading:`дерево-структуры`,content:"**`Public/`** — CSS/JS сайта (`siteAssets`) и JS админки (`assets`)."},{heading:`дерево-структуры`,content:"**`templates/…/tags_add/`** — разметка кнопки и окна."},{heading:`поставьте-admin-и-tagsadd`,content:"Сначала DevCraft Admin, затем ZIP TagsAdd через менеджер плагинов. В `devcraft/` выполните `composer dump-autoload`. Подробности: Установка."},{heading:`настройки`,content:"Откройте `?mod=tags_add`, сохраните получателя ЛС, текст кнопки и куда вставлять теги при одобрении. См. Настройки."},{heading:`тема`,content:"В `main.tpl` поставьте `{devcraft}`. В `fullstory.tpl` — includes с `focus=button` и `focus=modal`. Скопируйте шаблоны в свой скин при необходимости. См. Подключение в теме."},{heading:`модерация`,content:"Очередь: `?mod=tags_add&action=suggestions`. Одобрение пишет теги в новость; отклонение может с причиной (или стандартной из настроек)."},{heading:`руководства-и-разделы`,content:`Страница`},{heading:`руководства-и-разделы`,content:`О чём`},{heading:`руководства-и-разделы`,content:`Установка`},{heading:`руководства-и-разделы`,content:`ZIP, Composer, первый запуск, отличие от legacy`},{heading:`руководства-и-разделы`,content:`Настройки`},{heading:`руководства-и-разделы`,content:`PM, xfield prefs, куда писать теги, шаблоны ЛС`},{heading:`руководства-и-разделы`,content:`Подключение в теме`},{heading:`руководства-и-разделы`,content:`Includes в fullstory, теги button/modal`},{heading:`руководства-и-разделы`,content:`Очередь`},{heading:`руководства-и-разделы`,content:`Одобрение, отклонение, массовые действия`},{heading:`руководства-и-разделы`,content:`Справочник`},{heading:`руководства-и-разделы`,content:`Классы PHP и AJAX`},{heading:`руководства-и-разделы`,content:`История изменений`},{heading:`руководства-и-разделы`,content:`200.3.1 и ранее`},{heading:`руководства-и-разделы`,content:`Admin, ZIP, dump-autoload, таблица`},{heading:`руководства-и-разделы`,content:`Уведомления, вставка тегов, PM`},{heading:`руководства-и-разделы`,content:`fullstory.tpl и шаблоны кнопки`},{heading:`руководства-и-разделы`,content:`Одобрить, отклонить, массово`},{heading:`руководства-и-разделы`,content:`Классы и AJAX`},{heading:`руководства-и-разделы`,content:`Что изменилось в 200.3.1`},{heading:`дальше`,content:`Установить плагин.`},{heading:`дальше`,content:`Пройти быстрый старт.`},{heading:`дальше`,content:`Настроить шаблоны ЛС и вставку, проверить кнопку на новости.`}],headings:[{id:`описание-плагина`,content:`Описание плагина`},{id:`возможности`,content:`Возможности`},{id:`для-кого`,content:`Для кого`},{id:`владельцы-сайта-и-модераторы`,content:`Владельцы сайта и модераторы`},{id:`разработчики-темы`,content:`Разработчики темы`},{id:`требования`,content:`Требования`},{id:`дерево-структуры`,content:`Дерево структуры`},{id:`быстрый-старт`,content:`Быстрый старт`},{id:`поставьте-admin-и-tagsadd`,content:`Поставьте Admin и TagsAdd`},{id:`настройки`,content:`Настройки`},{id:`тема`,content:`Тема`},{id:`модерация`,content:`Модерация`},{id:`руководства-и-разделы`,content:`Руководства и разделы`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#описание-плагина`,title:(0,n.jsx)(n.Fragment,{children:`Описание плагина`})},{depth:2,url:`#возможности`,title:(0,n.jsx)(n.Fragment,{children:`Возможности`})},{depth:2,url:`#для-кого`,title:(0,n.jsx)(n.Fragment,{children:`Для кого`})},{depth:3,url:`#владельцы-сайта-и-модераторы`,title:(0,n.jsx)(n.Fragment,{children:`Владельцы сайта и модераторы`})},{depth:3,url:`#разработчики-темы`,title:(0,n.jsx)(n.Fragment,{children:`Разработчики темы`})},{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#дерево-структуры`,title:(0,n.jsx)(n.Fragment,{children:`Дерево структуры`})},{depth:2,url:`#быстрый-старт`,title:(0,n.jsx)(n.Fragment,{children:`Быстрый старт`})},{depth:3,url:`#поставьте-admin-и-tagsadd`,title:(0,n.jsx)(n.Fragment,{children:`Поставьте Admin и TagsAdd`})},{depth:3,url:`#настройки`,title:(0,n.jsx)(n.Fragment,{children:`Настройки`})},{depth:3,url:`#тема`,title:(0,n.jsx)(n.Fragment,{children:`Тема`})},{depth:3,url:`#модерация`,title:(0,n.jsx)(n.Fragment,{children:`Модерация`})},{depth:2,url:`#руководства-и-разделы`,title:(0,n.jsx)(n.Fragment,{children:`Руководства и разделы`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Card:r,Cards:i,File:a,Files:o,Folder:s,Step:c,Steps:l}=t;return r||u(`Card`,!0),i||u(`Cards`,!0),a||u(`File`,!0),o||u(`Files`,!0),s||u(`Folder`,!0),c||u(`Step`,!0),l||u(`Steps`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`описание-плагина`,children:`Описание плагина`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`TagsAdd`}),` (пользовательские теги) — сателлит `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/getting_started`,children:`DevCraft Admin`}),` для `,(0,n.jsx)(t.strong,{children:`DataLife Engine`}),`. Читатель на полной новости предлагает теги; предложения попадают в очередь. Модератор в админке одобряет, отклоняет или правит запись — при одобрении теги пишутся в теги новости или в выбранное доп. поле.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Модуль: `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/TagsAdd/`}),`, вход админки `,(0,n.jsx)(t.code,{children:`?mod=tags_add`}),`. Публичная отправка идёт через общий AJAX DevCraft (`,(0,n.jsx)(t.code,{children:`controller=public`}),`), без отдельных `,(0,n.jsx)(t.code,{children:`engine/ajax`}),` скриптов модуля. Версия `,(0,n.jsx)(t.strong,{children:`200.3.1`}),` — ветка `,(0,n.jsx)(t.code,{children:`200.*`}),` для DLE 20+ и Admin `,(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),`.`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Страница загрузки: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/polzovatelskie-tegi.12/`,children:`devcraft.club`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd`,children:`DevCraftClub/tagsadd`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`возможности`,children:`Возможности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Кнопка и окно на полной новости (шаблоны темы).`}),`
`,(0,n.jsx)(t.li,{children:`Предложения от гостей (если разрешено в настройках) и от авторизованных.`}),`
`,(0,n.jsx)(t.li,{children:`Очередь в админке: одобрить / отклонить с причиной / удалить / массовые действия.`}),`
`,(0,n.jsxs)(t.li,{children:[`Вставка при одобрении в `,(0,n.jsx)(t.code,{children:`tags`}),` новости или в доп. поле (`,(0,n.jsx)(t.code,{children:`xfield`}),`), опционально в xfsearch.`]}),`
`,(0,n.jsx)(t.li,{children:`ЛС админу и автору предложения (шаблоны с плейсхолдерами новости и модуля).`}),`
`,(0,n.jsx)(t.li,{children:`Предпочтения уведомлений через доп. поле профиля (список).`}),`
`,(0,n.jsxs)(t.li,{children:[`Локали XLIFF (`,(0,n.jsx)(t.code,{children:`ru_RU`}),` и др.), changelog в панели модуля.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`для-кого`,children:`Для кого`}),`
`,(0,n.jsx)(t.h3,{id:`владельцы-сайта-и-модераторы`,children:`Владельцы сайта и модераторы`}),`
`,(0,n.jsxs)(t.p,{children:[`Ставите Admin, затем TagsAdd, сохраняете настройки (получатель ЛС, куда писать теги), подключаете includes в `,(0,n.jsx)(t.code,{children:`fullstory.tpl`}),`. Дальше работаете в очереди `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=suggestions`}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`разработчики-темы`,children:`Разработчики темы`}),`
`,(0,n.jsxs)(t.p,{children:[`Копируете `,(0,n.jsx)(t.code,{children:`templates/Default/devcraft/tags_add/`}),` в свой скин, правите `,(0,n.jsx)(t.code,{children:`button.tpl`}),` / `,(0,n.jsx)(t.code,{children:`modal.tpl`}),` / CSS / JS, не ломая имена полей формы и AJAX. См. `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Почему не старый TagsAdd 2.x (maharder).`}),` Пакет 200.x — другой каркас: DevCraft, Metro, Cycle ORM. Поверх `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),` не ставится — сначала снимите legacy, потом Admin и TagsAdd 200.3.x.`]}),`
`,(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Что`}),(0,n.jsx)(t.th,{children:`Минимум`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),` (`,(0,n.jsx)(t.code,{children:`dc_public.js`}),`, публичный AJAX)`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Полный чеклист: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дерево-структуры`,children:`Дерево структуры`}),`
`,(0,n.jsx)(t.p,{children:`Корень сайта после установки. В скобках — зачем папка.`}),`
`,(0,n.jsx)(o,{children:(0,n.jsxs)(s,{name:`корень сайта DLE`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`devcraft`,defaultOpen:!0,children:[(0,n.jsxs)(s,{name:`src/modules/TagsAdd`,defaultOpen:!0,children:[(0,n.jsx)(a,{name:`manifest.php — меню, AJAX, meta`}),(0,n.jsx)(a,{name:`settings.schema.php — форма настроек`}),(0,n.jsx)(a,{name:`changelog.data.php — история в панели`}),(0,n.jsx)(a,{name:`TagsAddIdentity.php — MODULE/CODE`}),(0,n.jsx)(s,{name:`Controller — публичный include show_tags_add.php`}),(0,n.jsx)(s,{name:`Pages — главная, очередь, настройки, шаблоны ЛС…`}),(0,n.jsx)(s,{name:`Ajax — suggest, approve, reject, delete…`}),(0,n.jsx)(s,{name:`Services / Models / Repositories / Filter`}),(0,n.jsx)(s,{name:`templates — Twig экранов админки`}),(0,n.jsx)(s,{name:`Public — tags_add.css, tags_add_site.js, admin tags_add.js`})]}),(0,n.jsx)(s,{name:`config — tags_add.json после сохранения`}),(0,n.jsx)(s,{name:`locales — tagsadd.xliff (ru_RU, …)`})]}),(0,n.jsx)(s,{name:`engine`,defaultOpen:!0,children:(0,n.jsx)(s,{name:`inc`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`tags_add.php — glue админки`})})}),(0,n.jsx)(s,{name:`templates/{skin}/devcraft/tags_add`,defaultOpen:!0,children:(0,n.jsx)(a,{name:`button.tpl / modal.tpl`})})]})}),`
`,(0,n.jsx)(t.p,{children:`Кратко:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/TagsAdd/`})}),` — админка, бизнес-логика и публичный Controller.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`Controller/show_tags_add.php`})}),` — канон include в теме (от корня сайта).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`Public/`})}),` — CSS/JS сайта (`,(0,n.jsx)(t.code,{children:`siteAssets`}),`) и JS админки (`,(0,n.jsx)(t.code,{children:`assets`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:`templates/…/tags_add/`})}),` — разметка кнопки и окна.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`быстрый-старт`,children:`Быстрый старт`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`поставьте-admin-и-tagsadd`,children:`Поставьте Admin и TagsAdd`}),(0,n.jsxs)(t.p,{children:[`Сначала `,(0,n.jsx)(t.a,{href:`/dev/dle/devcraft_admin/200.4.1/install`,children:`DevCraft Admin`}),`, затем ZIP TagsAdd через менеджер плагинов. В `,(0,n.jsx)(t.code,{children:`devcraft/`}),` выполните `,(0,n.jsx)(t.code,{children:`composer dump-autoload`}),`. Подробности: `,(0,n.jsx)(t.a,{href:`./install`,children:`Установка`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`настройки`,children:`Настройки`}),(0,n.jsxs)(t.p,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=tags_add`}),`, сохраните получателя ЛС, текст кнопки и куда вставлять теги при одобрении. См. `,(0,n.jsx)(t.a,{href:`./settings`,children:`Настройки`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`тема`,children:`Тема`}),(0,n.jsxs)(t.p,{children:[`В `,(0,n.jsx)(t.code,{children:`main.tpl`}),` поставьте `,(0,n.jsx)(t.code,{children:`{devcraft}`}),`. В `,(0,n.jsx)(t.code,{children:`fullstory.tpl`}),` — includes с `,(0,n.jsx)(t.code,{children:`focus=button`}),` и `,(0,n.jsx)(t.code,{children:`focus=modal`}),`. Скопируйте шаблоны в свой скин при необходимости. См. `,(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`}),`.`]})]}),(0,n.jsxs)(c,{children:[(0,n.jsx)(t.h3,{id:`модерация`,children:`Модерация`}),(0,n.jsxs)(t.p,{children:[`Очередь: `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=suggestions`}),`. Одобрение пишет теги в новость; отклонение может с причиной (или стандартной из настроек).`]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`руководства-и-разделы`,children:`Руководства и разделы`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Страница`}),(0,n.jsx)(t.th,{children:`О чём`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./install`,children:`Установка`})}),(0,n.jsx)(t.td,{children:`ZIP, Composer, первый запуск, отличие от legacy`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./settings`,children:`Настройки`})}),(0,n.jsx)(t.td,{children:`PM, xfield prefs, куда писать теги, шаблоны ЛС`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`})}),(0,n.jsx)(t.td,{children:`Includes в fullstory, теги button/modal`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`guides/moderation`,children:`Очередь`})}),(0,n.jsx)(t.td,{children:`Одобрение, отклонение, массовые действия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./reference`,children:`Справочник`})}),(0,n.jsx)(t.td,{children:`Классы PHP и AJAX`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`./changelog`,children:`История изменений`})}),(0,n.jsx)(t.td,{children:`200.3.1 и ранее`})]})]})]}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`Установка`,href:`./install`,children:(0,n.jsx)(t.p,{children:`Admin, ZIP, dump-autoload, таблица`})}),(0,n.jsx)(r,{title:`Настройки`,href:`./settings`,children:(0,n.jsx)(t.p,{children:`Уведомления, вставка тегов, PM`})}),(0,n.jsx)(r,{title:`Тема`,href:`./guides/theme`,children:(0,n.jsx)(t.p,{children:`fullstory.tpl и шаблоны кнопки`})}),(0,n.jsx)(r,{title:`Очередь`,href:`./guides/moderation`,children:(0,n.jsx)(t.p,{children:`Одобрить, отклонить, массово`})}),(0,n.jsx)(r,{title:`Справочник`,href:`./reference`,children:(0,n.jsx)(t.p,{children:`Классы и AJAX`})}),(0,n.jsx)(r,{title:`История изменений`,href:`./changelog`,children:(0,n.jsx)(t.p,{children:`Что изменилось в 200.3.1`})})]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`./install`,children:`Установить`}),` плагин.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Пройти `,(0,n.jsx)(t.a,{href:`#%D0%B1%D1%8B%D1%81%D1%82%D1%80%D1%8B%D0%B9-%D1%81%D1%82%D0%B0%D1%80%D1%82`,children:`быстрый старт`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Настроить `,(0,n.jsx)(t.a,{href:`./settings`,children:`шаблоны ЛС и вставку`}),`, проверить кнопку на новости.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};