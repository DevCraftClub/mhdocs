import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор TagsAdd 200.3.1: требования и структура модуля.`},i=new Date(1787141927e3),a=`

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip" /> Перейти к разработке](https://devcraft.club/downloads/polzovatelskie-tegi.12/)

**Репозиторий**: [<i class="fa-brands fa-github" /> DevCraftClub/tagsadd](https://github.com/DevCraftClub/tagsadd)

Сателлитный модуль [DevCraft Admin](../../devcraft_admin/install): посетители предлагают теги к новости, модератор одобряет или отклоняет очередь в админке.

## Минимальные требования [#минимальные-требования]

| Компонент       | Версия                                              |
| --------------- | --------------------------------------------------- |
| DataLife Engine | **20.0**                                            |
| PHP             | **8.3+**                                            |
| DevCraft Admin  | **≥ 200.4.1** (\`dc_public.js\`, \`controller=public\`) |

## Структура (канон) [#структура-канон]

\`\`\`
engine/inc/tags_add.php                    # glue → Application::runAdmin('tags_add')
engine/modules/devcraft/tags_add.php         # include для fullstory
devcraft/
  config/tags_add.json
  src/modules/TagsAdd/
templates/THEME/devcraft/tags_add/
\`\`\`

## Дальше [#дальше]

* [Установка](install)
* [Настройки](settings)
* [Подключение в теме](guides/theme)
* [Changelog](changelog)
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**:  Перейти к разработке`},{heading:void 0,content:`**Репозиторий**:  DevCraftClub/tagsadd`},{heading:void 0,content:`Сателлитный модуль DevCraft Admin: посетители предлагают теги к новости, модератор одобряет или отклоняет очередь в админке.`},{heading:`минимальные-требования`,content:`Компонент`},{heading:`минимальные-требования`,content:`Версия`},{heading:`минимальные-требования`,content:`DataLife Engine`},{heading:`минимальные-требования`,content:`**20.0**`},{heading:`минимальные-требования`,content:`PHP`},{heading:`минимальные-требования`,content:`**8.3+**`},{heading:`минимальные-требования`,content:`DevCraft Admin`},{heading:`минимальные-требования`,content:"**≥ 200.4.1** (`dc_public.js`, `controller=public`)"},{heading:`дальше`,content:`Установка`},{heading:`дальше`,content:`Настройки`},{heading:`дальше`,content:`Подключение в теме`},{heading:`дальше`,content:`Changelog`}],headings:[{id:`минимальные-требования`,content:`Минимальные требования`},{id:`структура-канон`,content:`Структура (канон)`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#минимальные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Минимальные требования`})},{depth:2,url:`#структура-канон`,title:(0,n.jsx)(n.Fragment,{children:`Структура (канон)`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsxs)(t.a,{href:`https://devcraft.club/downloads/polzovatelskie-tegi.12/`,children:[(0,n.jsx)(`i`,{class:`fa-thin fa-paperclip`}),` Перейти к разработке`]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Репозиторий`}),`: `,(0,n.jsxs)(t.a,{href:`https://github.com/DevCraftClub/tagsadd`,children:[(0,n.jsx)(`i`,{class:`fa-brands fa-github`}),` DevCraftClub/tagsadd`]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Сателлитный модуль `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`: посетители предлагают теги к новости, модератор одобряет или отклоняет очередь в админке.`]}),`
`,(0,n.jsx)(t.h2,{id:`минимальные-требования`,children:`Минимальные требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3+`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`≥ 200.4.1`}),` (`,(0,n.jsx)(t.code,{children:`dc_public.js`}),`, `,(0,n.jsx)(t.code,{children:`controller=public`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`структура-канон`,children:`Структура (канон)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/inc/tags_add.php                    # glue → Application::runAdmin('tags_add')`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/modules/devcraft/tags_add.php         # include для fullstory`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  config/tags_add.json`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  src/modules/TagsAdd/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`templates/THEME/devcraft/tags_add/`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/theme`,children:`Подключение в теме`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`Changelog`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};