import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`История изменений`,description:`Changelog TagsAdd (Пользовательские теги) с привязкой к коммитам GitHub.`},i=new Date(1785402405e3),a=`

Актуальный список также в модуле (\`changelog.data.php\`) и на \`?mod=tags_add&action=changelog\`.

Репозиторий: [DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd).

## 200.3.1 (2026-07-19) [#20031-2026-07-19]

### Исправлено [#исправлено]

* Фатал undefined \`__()\` на фронте при include \`tags_add.php\` без DevCraft bootstrap — добавлен fallback
* XLIFF TagsAdd перенесён из \`locales/ru/\` в \`locales/ru_RU/\`

### Изменено [#изменено]

* Рендер button/modal через нативный \`$tpl\` и шаблоны темы
* Блок \`author\` в manifest убран — используется дефолт \`ModuleManifest\`

## 200.3.0 (2026-07-17) [#20030-2026-07-17]

Миграция на DevCraft Admin / DLE 20.0. Ветка: [\`releases/200.3.0\`](https://github.com/DevCraftClub/tagsadd/tree/releases/200.3.0).

### Добавлено [#добавлено]

* Каркас модуля TagsAdd для DevCraft Admin и DLE 20.0\\
  ([\`4abd7c2\`](https://github.com/DevCraftClub/tagsadd/commit/4abd7c250261e1b1d86432e5ddc266d17cfd3c29) — *feat: добавляет модуль TagsAdd для управления тегами новостей*)
* Очередь предложений, модерация approve/reject, вставка в \`post.tags\` / \`_tags\` или xfield
* Публичный suggest через \`dc_public.js\` и \`controller=public\`
* Шаблоны темы \`Default/devcraft/tags_add\` и настройки с PM-шаблонами
* Стандартная причина отклонения (\`decline_reason_default\`), Metro-диалоги отклонения и удаления\\
  ([\`d6b59fc\`](https://github.com/DevCraftClub/tagsadd/commit/d6b59fc12b24279da8b4e3b7ea8257646a02a80a) — *feat: добавить миграцию плейсхолдеров и нормализацию*)
* В списке предложений: имена пользователей и заголовки новостей со ссылками/иконками

### Изменено [#изменено-1]

* Плейсхолдеры PM: \`{suggested_tags}\`, \`{moderate_suggested_tags}\`, \`{decline_reason}\`; \`mail_from\` — select
* Шаблоны issue на GitHub: DLE 20.0 / PHP 8.4\\
  ([\`81448a4\`](https://github.com/DevCraftClub/tagsadd/commit/81448a461df5a088dfcd3b8158df15c9d873c964) — *docs: обновить шаблоны issue с актуальными версиями*)

### Исправлено [#исправлено-1]

* Отмена отклонения больше не удаляет запись
* HTML-ссылки в шаблонах PM после двойного экранирования (\`htmlspecialchars_decode\` при normalize)

### Удалено [#удалено]

* Legacy Semantic UI, arcticModal, tokenfield, maharder AJAX и доверие к \`userid\` из POST

## 2.0 (2018-03-28) [#20-2018-03-28]

Legacy TagsAdd+ для прежней схемы \`engine/inc/maharder/\` / \`engine/modules/maharder/\`.

Коммит: [\`4211def\`](https://github.com/DevCraftClub/tagsadd/commit/4211def23df2057a24f778226f9c603e6cbf2871) — *tagsAdd v2.0* (ветка [\`v2.0\`](https://github.com/DevCraftClub/tagsadd/tree/v2.0)).

* Переписан код, админ-панель, подключение одной строкой include
* Исправлены баги относительно 1.x

<Callout type="info" title="Миграция с 2.0">
  Пакет 200.x **не** ставится поверх maharder-путей. Удалите старый плагин, установите DevCraft Admin, затем TagsAdd 200.3.0 или новее и заново подключите includes в теме (см. [установку](install)).
</Callout>

## 1.2.1 [#121]

* Теги \`[usertags]\` / \`[not-usertags]\` для скрытия блоков при вкл/выкл модуля
* Исправления багов

## 1.2 [#12]

* Админ-панель
* Улучшения кода
`,o={contents:[{heading:void 0,content:"Актуальный список также в модуле (`changelog.data.php`) и на `?mod=tags_add&action=changelog`."},{heading:void 0,content:`Репозиторий: DevCraftClub/tagsadd.`},{heading:`исправлено`,content:"Фатал undefined `__()` на фронте при include `tags_add.php` без DevCraft bootstrap — добавлен fallback"},{heading:`исправлено`,content:"XLIFF TagsAdd перенесён из `locales/ru/` в `locales/ru_RU/`"},{heading:`изменено`,content:"Рендер button/modal через нативный `$tpl` и шаблоны темы"},{heading:`изменено`,content:"Блок `author` в manifest убран — используется дефолт `ModuleManifest`"},{heading:`20030-2026-07-17`,content:"Миграция на DevCraft Admin / DLE 20.0. Ветка: `releases/200.3.0`."},{heading:`добавлено`,content:"Каркас модуля TagsAdd для DevCraft Admin и DLE 20.0\\\n(`4abd7c2` — *feat: добавляет модуль TagsAdd для управления тегами новостей*)"},{heading:`добавлено`,content:"Очередь предложений, модерация approve/reject, вставка в `post.tags` / `_tags` или xfield"},{heading:`добавлено`,content:"Публичный suggest через `dc_public.js` и `controller=public`"},{heading:`добавлено`,content:"Шаблоны темы `Default/devcraft/tags_add` и настройки с PM-шаблонами"},{heading:`добавлено`,content:"Стандартная причина отклонения (`decline_reason_default`), Metro-диалоги отклонения и удаления\\\n(`d6b59fc` — *feat: добавить миграцию плейсхолдеров и нормализацию*)"},{heading:`добавлено`,content:`В списке предложений: имена пользователей и заголовки новостей со ссылками/иконками`},{heading:`изменено-1`,content:"Плейсхолдеры PM: `{suggested_tags}`, `{moderate_suggested_tags}`, `{decline_reason}`; `mail_from` — select"},{heading:`изменено-1`,content:"Шаблоны issue на GitHub: DLE 20.0 / PHP 8.4\\\n(`81448a4` — *docs: обновить шаблоны issue с актуальными версиями*)"},{heading:`исправлено-1`,content:`Отмена отклонения больше не удаляет запись`},{heading:`исправлено-1`,content:"HTML-ссылки в шаблонах PM после двойного экранирования (`htmlspecialchars_decode` при normalize)"},{heading:`удалено`,content:"Legacy Semantic UI, arcticModal, tokenfield, maharder AJAX и доверие к `userid` из POST"},{heading:`20-2018-03-28`,content:"Legacy TagsAdd+ для прежней схемы `engine/inc/maharder/` / `engine/modules/maharder/`."},{heading:`20-2018-03-28`,content:"Коммит: `4211def` — *tagsAdd v2.0* (ветка `v2.0`)."},{heading:`20-2018-03-28`,content:`Переписан код, админ-панель, подключение одной строкой include`},{heading:`20-2018-03-28`,content:`Исправлены баги относительно 1.x`},{heading:`20-2018-03-28`,content:`Пакет 200.x **не** ставится поверх maharder-путей. Удалите старый плагин, установите DevCraft Admin, затем TagsAdd 200.3.0 или новее и заново подключите includes в теме (см. установку).`},{heading:`121`,content:"Теги `[usertags]` / `[not-usertags]` для скрытия блоков при вкл/выкл модуля"},{heading:`121`,content:`Исправления багов`},{heading:`12`,content:`Админ-панель`},{heading:`12`,content:`Улучшения кода`}],headings:[{id:`20031-2026-07-19`,content:`200.3.1 (2026-07-19)`},{id:`исправлено`,content:`Исправлено`},{id:`изменено`,content:`Изменено`},{id:`20030-2026-07-17`,content:`200.3.0 (2026-07-17)`},{id:`добавлено`,content:`Добавлено`},{id:`изменено-1`,content:`Изменено`},{id:`исправлено-1`,content:`Исправлено`},{id:`удалено`,content:`Удалено`},{id:`20-2018-03-28`,content:`2.0 (2018-03-28)`},{id:`121`,content:`1.2.1`},{id:`12`,content:`1.2`}]},s=[{depth:2,url:`#20031-2026-07-19`,title:(0,n.jsx)(n.Fragment,{children:`200.3.1 (2026-07-19)`})},{depth:3,url:`#исправлено`,title:(0,n.jsx)(n.Fragment,{children:`Исправлено`})},{depth:3,url:`#изменено`,title:(0,n.jsx)(n.Fragment,{children:`Изменено`})},{depth:2,url:`#20030-2026-07-17`,title:(0,n.jsx)(n.Fragment,{children:`200.3.0 (2026-07-17)`})},{depth:3,url:`#добавлено`,title:(0,n.jsx)(n.Fragment,{children:`Добавлено`})},{depth:3,url:`#изменено-1`,title:(0,n.jsx)(n.Fragment,{children:`Изменено`})},{depth:3,url:`#исправлено-1`,title:(0,n.jsx)(n.Fragment,{children:`Исправлено`})},{depth:3,url:`#удалено`,title:(0,n.jsx)(n.Fragment,{children:`Удалено`})},{depth:2,url:`#20-2018-03-28`,title:(0,n.jsx)(n.Fragment,{children:`2.0 (2018-03-28)`})},{depth:2,url:`#121`,title:(0,n.jsx)(n.Fragment,{children:`1.2.1`})},{depth:2,url:`#12`,title:(0,n.jsx)(n.Fragment,{children:`1.2`})}];function c(e){let t={a:`a`,br:`br`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Актуальный список также в модуле (`,(0,n.jsx)(t.code,{children:`changelog.data.php`}),`) и на `,(0,n.jsx)(t.code,{children:`?mod=tags_add&action=changelog`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd`,children:`DevCraftClub/tagsadd`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`20031-2026-07-19`,children:`200.3.1 (2026-07-19)`}),`
`,(0,n.jsx)(t.h3,{id:`исправлено`,children:`Исправлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Фатал undefined `,(0,n.jsx)(t.code,{children:`__()`}),` на фронте при include `,(0,n.jsx)(t.code,{children:`tags_add.php`}),` без DevCraft bootstrap — добавлен fallback`]}),`
`,(0,n.jsxs)(t.li,{children:[`XLIFF TagsAdd перенесён из `,(0,n.jsx)(t.code,{children:`locales/ru/`}),` в `,(0,n.jsx)(t.code,{children:`locales/ru_RU/`})]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`изменено`,children:`Изменено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Рендер button/modal через нативный `,(0,n.jsx)(t.code,{children:`$tpl`}),` и шаблоны темы`]}),`
`,(0,n.jsxs)(t.li,{children:[`Блок `,(0,n.jsx)(t.code,{children:`author`}),` в manifest убран — используется дефолт `,(0,n.jsx)(t.code,{children:`ModuleManifest`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`20030-2026-07-17`,children:`200.3.0 (2026-07-17)`}),`
`,(0,n.jsxs)(t.p,{children:[`Миграция на DevCraft Admin / DLE 20.0. Ветка: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/tree/releases/200.3.0`,children:(0,n.jsx)(t.code,{children:`releases/200.3.0`})}),`.`]}),`
`,(0,n.jsx)(t.h3,{id:`добавлено`,children:`Добавлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Каркас модуля TagsAdd для DevCraft Admin и DLE 20.0`,(0,n.jsx)(t.br,{}),`
`,`(`,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/commit/4abd7c250261e1b1d86432e5ddc266d17cfd3c29`,children:(0,n.jsx)(t.code,{children:`4abd7c2`})}),` — `,(0,n.jsx)(t.em,{children:`feat: добавляет модуль TagsAdd для управления тегами новостей`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[`Очередь предложений, модерация approve/reject, вставка в `,(0,n.jsx)(t.code,{children:`post.tags`}),` / `,(0,n.jsx)(t.code,{children:`_tags`}),` или xfield`]}),`
`,(0,n.jsxs)(t.li,{children:[`Публичный suggest через `,(0,n.jsx)(t.code,{children:`dc_public.js`}),` и `,(0,n.jsx)(t.code,{children:`controller=public`})]}),`
`,(0,n.jsxs)(t.li,{children:[`Шаблоны темы `,(0,n.jsx)(t.code,{children:`Default/devcraft/tags_add`}),` и настройки с PM-шаблонами`]}),`
`,(0,n.jsxs)(t.li,{children:[`Стандартная причина отклонения (`,(0,n.jsx)(t.code,{children:`decline_reason_default`}),`), Metro-диалоги отклонения и удаления`,(0,n.jsx)(t.br,{}),`
`,`(`,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/commit/d6b59fc12b24279da8b4e3b7ea8257646a02a80a`,children:(0,n.jsx)(t.code,{children:`d6b59fc`})}),` — `,(0,n.jsx)(t.em,{children:`feat: добавить миграцию плейсхолдеров и нормализацию`}),`)`]}),`
`,(0,n.jsx)(t.li,{children:`В списке предложений: имена пользователей и заголовки новостей со ссылками/иконками`}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`изменено-1`,children:`Изменено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Плейсхолдеры PM: `,(0,n.jsx)(t.code,{children:`{suggested_tags}`}),`, `,(0,n.jsx)(t.code,{children:`{moderate_suggested_tags}`}),`, `,(0,n.jsx)(t.code,{children:`{decline_reason}`}),`; `,(0,n.jsx)(t.code,{children:`mail_from`}),` — select`]}),`
`,(0,n.jsxs)(t.li,{children:[`Шаблоны issue на GitHub: DLE 20.0 / PHP 8.4`,(0,n.jsx)(t.br,{}),`
`,`(`,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/commit/81448a461df5a088dfcd3b8158df15c9d873c964`,children:(0,n.jsx)(t.code,{children:`81448a4`})}),` — `,(0,n.jsx)(t.em,{children:`docs: обновить шаблоны issue с актуальными версиями`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`исправлено-1`,children:`Исправлено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Отмена отклонения больше не удаляет запись`}),`
`,(0,n.jsxs)(t.li,{children:[`HTML-ссылки в шаблонах PM после двойного экранирования (`,(0,n.jsx)(t.code,{children:`htmlspecialchars_decode`}),` при normalize)`]}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`удалено`,children:`Удалено`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Legacy Semantic UI, arcticModal, tokenfield, maharder AJAX и доверие к `,(0,n.jsx)(t.code,{children:`userid`}),` из POST`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`20-2018-03-28`,children:`2.0 (2018-03-28)`}),`
`,(0,n.jsxs)(t.p,{children:[`Legacy TagsAdd+ для прежней схемы `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),` / `,(0,n.jsx)(t.code,{children:`engine/modules/maharder/`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Коммит: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/commit/4211def23df2057a24f778226f9c603e6cbf2871`,children:(0,n.jsx)(t.code,{children:`4211def`})}),` — `,(0,n.jsx)(t.em,{children:`tagsAdd v2.0`}),` (ветка `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/tagsadd/tree/v2.0`,children:(0,n.jsx)(t.code,{children:`v2.0`})}),`).`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Переписан код, админ-панель, подключение одной строкой include`}),`
`,(0,n.jsx)(t.li,{children:`Исправлены баги относительно 1.x`}),`
`]}),`
`,(0,n.jsx)(r,{type:`info`,title:`Миграция с 2.0`,children:(0,n.jsxs)(t.p,{children:[`Пакет 200.x `,(0,n.jsx)(t.strong,{children:`не`}),` ставится поверх maharder-путей. Удалите старый плагин, установите DevCraft Admin, затем TagsAdd 200.3.0 или новее и заново подключите includes в теме (см. `,(0,n.jsx)(t.a,{href:`install`,children:`установку`}),`).`]})}),`
`,(0,n.jsx)(t.h2,{id:`121`,children:`1.2.1`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Теги `,(0,n.jsx)(t.code,{children:`[usertags]`}),` / `,(0,n.jsx)(t.code,{children:`[not-usertags]`}),` для скрытия блоков при вкл/выкл модуля`]}),`
`,(0,n.jsx)(t.li,{children:`Исправления багов`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`12`,children:`1.2`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Админ-панель`}),`
`,(0,n.jsx)(t.li,{children:`Улучшения кода`}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};