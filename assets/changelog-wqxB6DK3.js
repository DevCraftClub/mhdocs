import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`История изменений`,description:`Релиз 200.1.0: лента на сайте, типизированные подписки, шаблоны темы`,version:`200.1.0`},i=new Date(1789555699e3),a=`

Дублируется во вкладке **История изменений** в админке модуля.

Репозиторий: [DLE-Notifications](https://github.com/DevCraftClub/DLE-Notifications).

## 200.1.0 (2026-08-26) [#20010-2026-08-26]

### Заметки [#заметки]

* **Политика публичной оболочки:** глобальные файлы — только через \`siteAssets\` манифеста (Admin ≥ 200.4.1); admin/page-local JS остаются в \`assets()\` / шаблонах. См. [Публичные ресурсы](../../devcraft_admin/200.4.1/guides/public_assets).

Первый релиз под DLE 20 и DevCraft Admin.

* доставка: сайт, почта, ЛС;
* подписки: новость, категория, автор, тег, доп. поле, все новые материалы;
* колокольчик с числом непрочитанных и автообновлением;
* тексты в \`.tpl\` темы, плейсхолдеры вроде {'{title}'} и {'{full-link}'};
* подписанная ссылка «Отписаться» в письме;
* права по группам;
* упоминания \`@ник\` в комментариях;
* сценарии рейтинга новости/комментария, удаления комментария, подписки на пользователя;
* гайд [Include в шаблонах](./guides/template_includes) (cat / tag / xfield / user);
* публичные entrypoint перенесены в \`devcraft/src/modules/Notifications/Site/\` (\`web.php\`, \`page.php\`, \`include.php\`); параметр подписки в include — \`stype\` (не \`type\`).
* \`ChannelRegistry\` / \`ChannelInterface\` — расширение каналов доставки;
* сателлиты: Telegram, дайджест, статистика;
* руководства: [свой канал](./guides/custom_channel), [сателлиты](./guides/satellites).
`,o={contents:[{heading:void 0,content:`Дублируется во вкладке **История изменений** в админке модуля.`},{heading:void 0,content:`Репозиторий: DLE-Notifications.`},{heading:`заметки`,content:"**Политика публичной оболочки:** глобальные файлы — только через `siteAssets` манифеста (Admin ≥ 200.4.1); admin/page-local JS остаются в `assets()` / шаблонах. См. Публичные ресурсы."},{heading:`заметки`,content:`Первый релиз под DLE 20 и DevCraft Admin.`},{heading:`заметки`,content:`доставка: сайт, почта, ЛС;`},{heading:`заметки`,content:`подписки: новость, категория, автор, тег, доп. поле, все новые материалы;`},{heading:`заметки`,content:`колокольчик с числом непрочитанных и автообновлением;`},{heading:`заметки`,content:"тексты в `.tpl` темы, плейсхолдеры вроде {'{title}'} и {'{full-link}'};"},{heading:`заметки`,content:`подписанная ссылка «Отписаться» в письме;`},{heading:`заметки`,content:`права по группам;`},{heading:`заметки`,content:"упоминания `@ник` в комментариях;"},{heading:`заметки`,content:`сценарии рейтинга новости/комментария, удаления комментария, подписки на пользователя;`},{heading:`заметки`,content:`гайд Include в шаблонах (cat / tag / xfield / user);`},{heading:`заметки`,content:"публичные entrypoint перенесены в `devcraft/src/modules/Notifications/Site/` (`web.php`, `page.php`, `include.php`); параметр подписки в include — `stype` (не `type`)."},{heading:`заметки`,content:"`ChannelRegistry` / `ChannelInterface` — расширение каналов доставки;"},{heading:`заметки`,content:`сателлиты: Telegram, дайджест, статистика;`},{heading:`заметки`,content:`руководства: свой канал, сателлиты.`}],headings:[{id:`20010-2026-08-26`,content:`200.1.0 (2026-08-26)`},{id:`заметки`,content:`Заметки`}]},s=[{depth:2,url:`#20010-2026-08-26`,title:(0,n.jsx)(n.Fragment,{children:`200.1.0 (2026-08-26)`})},{depth:3,url:`#заметки`,title:(0,n.jsx)(n.Fragment,{children:`Заметки`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`Дублируется во вкладке `,(0,n.jsx)(t.strong,{children:`История изменений`}),` в админке модуля.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/DLE-Notifications`,children:`DLE-Notifications`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`20010-2026-08-26`,children:`200.1.0 (2026-08-26)`}),`
`,(0,n.jsx)(t.h3,{id:`заметки`,children:`Заметки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Политика публичной оболочки:`}),` глобальные файлы — только через `,(0,n.jsx)(t.code,{children:`siteAssets`}),` манифеста (Admin ≥ 200.4.1); admin/page-local JS остаются в `,(0,n.jsx)(t.code,{children:`assets()`}),` / шаблонах. См. `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/200.4.1/guides/public_assets`,children:`Публичные ресурсы`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Первый релиз под DLE 20 и DevCraft Admin.`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`доставка: сайт, почта, ЛС;`}),`
`,(0,n.jsx)(t.li,{children:`подписки: новость, категория, автор, тег, доп. поле, все новые материалы;`}),`
`,(0,n.jsx)(t.li,{children:`колокольчик с числом непрочитанных и автообновлением;`}),`
`,(0,n.jsxs)(t.li,{children:[`тексты в `,(0,n.jsx)(t.code,{children:`.tpl`}),` темы, плейсхолдеры вроде `,`{title}`,` и `,`{full-link}`,`;`]}),`
`,(0,n.jsx)(t.li,{children:`подписанная ссылка «Отписаться» в письме;`}),`
`,(0,n.jsx)(t.li,{children:`права по группам;`}),`
`,(0,n.jsxs)(t.li,{children:[`упоминания `,(0,n.jsx)(t.code,{children:`@ник`}),` в комментариях;`]}),`
`,(0,n.jsx)(t.li,{children:`сценарии рейтинга новости/комментария, удаления комментария, подписки на пользователя;`}),`
`,(0,n.jsxs)(t.li,{children:[`гайд `,(0,n.jsx)(t.a,{href:`./guides/template_includes`,children:`Include в шаблонах`}),` (cat / tag / xfield / user);`]}),`
`,(0,n.jsxs)(t.li,{children:[`публичные entrypoint перенесены в `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/Notifications/Site/`}),` (`,(0,n.jsx)(t.code,{children:`web.php`}),`, `,(0,n.jsx)(t.code,{children:`page.php`}),`, `,(0,n.jsx)(t.code,{children:`include.php`}),`); параметр подписки в include — `,(0,n.jsx)(t.code,{children:`stype`}),` (не `,(0,n.jsx)(t.code,{children:`type`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ChannelRegistry`}),` / `,(0,n.jsx)(t.code,{children:`ChannelInterface`}),` — расширение каналов доставки;`]}),`
`,(0,n.jsx)(t.li,{children:`сателлиты: Telegram, дайджест, статистика;`}),`
`,(0,n.jsxs)(t.li,{children:[`руководства: `,(0,n.jsx)(t.a,{href:`./guides/custom_channel`,children:`свой канал`}),`, `,(0,n.jsx)(t.a,{href:`./guides/satellites`,children:`сателлиты`}),`.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};