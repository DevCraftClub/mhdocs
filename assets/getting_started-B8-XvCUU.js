import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Начало работы`,description:`Обзор DLE Faker 200.1.4: требования и структура модуля.`},i=new Date(1786541452e3),a=`

**Ссылка на разработку**: [<i class="fa-thin fa-paperclip" /> Перейти к разработке](https://devcraft.club/downloads/dle-faker.29/)

Сателлитный модуль DevCraft Admin: генерация тестовых пользователей, категорий, новостей по шаблонам с тегами FakerPHP и медиа-библиотекой.

## Минимальные требования [#минимальные-требования]

| Компонент       | Версия        |
| --------------- | ------------- |
| DataLife Engine | **20.0**      |
| PHP             | **8.3**       |
| DevCraft Admin  | **≥ 200.4.0** |

## Структура (канон) [#структура-канон]

\`\`\`
engine/inc/dle_faker.php          # glue → Application::runAdmin('dle_faker')
devcraft/
  config/dle_faker.json
  src/modules/dle_faker/
    Ajax/ Services/ Pages/ Models/ …
    Public/dle_faker.js
    templates/*.twig
    manifest.php
\`\`\`

AJAX только через \`devcraft/ajax.php?mod=dle_faker&controller=admin&method=…\`.

## Дальше [#дальше]

* [Установка](install)
* [Настройки](settings)
* [Генерация новостей](guides/gen_news)
* [Changelog](changelog)
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**:  Перейти к разработке`},{heading:void 0,content:`Сателлитный модуль DevCraft Admin: генерация тестовых пользователей, категорий, новостей по шаблонам с тегами FakerPHP и медиа-библиотекой.`},{heading:`минимальные-требования`,content:`Компонент`},{heading:`минимальные-требования`,content:`Версия`},{heading:`минимальные-требования`,content:`DataLife Engine`},{heading:`минимальные-требования`,content:`**20.0**`},{heading:`минимальные-требования`,content:`PHP`},{heading:`минимальные-требования`,content:`**8.3**`},{heading:`минимальные-требования`,content:`DevCraft Admin`},{heading:`минимальные-требования`,content:`**≥ 200.4.0**`},{heading:`структура-канон`,content:"AJAX только через `devcraft/ajax.php?mod=dle_faker&controller=admin&method=…`."},{heading:`дальше`,content:`Установка`},{heading:`дальше`,content:`Настройки`},{heading:`дальше`,content:`Генерация новостей`},{heading:`дальше`,content:`Changelog`}],headings:[{id:`минимальные-требования`,content:`Минимальные требования`},{id:`структура-канон`,content:`Структура (канон)`},{id:`дальше`,content:`Дальше`}]},s=[{depth:2,url:`#минимальные-требования`,title:(0,n.jsx)(n.Fragment,{children:`Минимальные требования`})},{depth:2,url:`#структура-канон`,title:(0,n.jsx)(n.Fragment,{children:`Структура (канон)`})},{depth:2,url:`#дальше`,title:(0,n.jsx)(n.Fragment,{children:`Дальше`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsxs)(t.a,{href:`https://devcraft.club/downloads/dle-faker.29/`,children:[(0,n.jsx)(`i`,{class:`fa-thin fa-paperclip`}),` Перейти к разработке`]})]}),`
`,(0,n.jsx)(t.p,{children:`Сателлитный модуль DevCraft Admin: генерация тестовых пользователей, категорий, новостей по шаблонам с тегами FakerPHP и медиа-библиотекой.`}),`
`,(0,n.jsx)(t.h2,{id:`минимальные-требования`,children:`Минимальные требования`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Компонент`}),(0,n.jsx)(t.th,{children:`Версия`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DataLife Engine`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`20.0`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`8.3`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DevCraft Admin`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`≥ 200.4.0`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`структура-канон`,children:`Структура (канон)`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`engine/inc/dle_faker.php          # glue → Application::runAdmin('dle_faker')`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  config/dle_faker.json`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  src/modules/dle_faker/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    Ajax/ Services/ Pages/ Models/ …`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    Public/dle_faker.js`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    templates/*.twig`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`    manifest.php`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`AJAX только через `,(0,n.jsx)(t.code,{children:`devcraft/ajax.php?mod=dle_faker&controller=admin&method=…`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`дальше`,children:`Дальше`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`install`,children:`Установка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`settings`,children:`Настройки`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`guides/gen_news`,children:`Генерация новостей`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`changelog`,children:`Changelog`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};