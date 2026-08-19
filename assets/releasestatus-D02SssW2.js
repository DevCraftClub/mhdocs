import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Release Status - Документация DevCraft`,description:`Документация по модулю Release Status для DLE. Управление статусами релизов.`,version:`1.0.0`},i=new Date(1787145028e3),a=`

**Ссылка на разработку**: [ Перейти к разработке](https://devcraft.club/downloads/releasestatus.6/)

## **Установка** [#установка]

* Залить файлы из папки uploads в корень сайта (уделите внимание папке Default в папке templates)
* Запустите файл install.php в корне вашего сайта, а затем удалите
* В шаблонах откройте файл main.tpl и добавьте стиль

\`\`\`html
<link href="{THEME}/releasestatus/main.css" type="text/css" rel="stylesheet" />
\`\`\`

* В этом же файле, или любом другом файле шаблона, прописываем это для вывода блока

\`\`\`html
{include file="engine/modules/releasestatus.php"}
\`\`\`

* На файл engine/data/releasestatus.php выставить права 666

**Теги для release\\_block.tpl**

* \\{image}, \\{image-1}, \\{image-\\*} - При условии, что изображения выводятся из короткой или полной новости
* \\{poster} - При условии, если изображение выводится из доп. поля
* \\{title} - Выводит название в зависимости от вывода, настроенного в настройках
* \\{type} - Выводит тип релиза, полнометражку или сериал
* \\{number} - Выводит номер серии, если релиз полнометражка - не выводится
* \\{translate\\_name} - Выводит название поля: "Перевод"
* \\{dub\\_name} - Выводит название поля: "Озвучка"
* \\{montage\\_name} - Выводит название поля: "Монтаж"
* \\{post\\_name} - Выводит название поля: "Проверка"
* \\{translate} - Выводит значение для поля: "Перевод"
* \\{dub} - Выводит значение для поля: "Озвучка"
* \\{montage} - Выводит значение для поля: "Монтаж"
* \\{post} - Выводит значение для поля: "Проверка"
* \\{suffix} - Выводит знак процента
* \\{progress} - Выводит прогрессбар, статус в процентах. Если отключены показы в процентах, то и прогрессбара не будет
* \\{link} - Ссылка на новость
* \\{id} - ID статуса
* \\[status]\\[/status] - Скрывает текст, если отключён показ нуллевых значений (пока в стадии обдумки)
* \\[link]\\[/link] - Заключённый текст превратится в ссылку на новость

<div class="video-wrapper">
  <YouTube id="fV5FwefJqhY" />
</div>
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**:  Перейти к разработке`},{heading:`установка`,content:`Залить файлы из папки uploads в корень сайта (уделите внимание папке Default в папке templates)`},{heading:`установка`,content:`Запустите файл install.php в корне вашего сайта, а затем удалите`},{heading:`установка`,content:`В шаблонах откройте файл main.tpl и добавьте стиль`},{heading:`установка`,content:`В этом же файле, или любом другом файле шаблона, прописываем это для вывода блока`},{heading:`установка`,content:`На файл engine/data/releasestatus.php выставить права 666`},{heading:`установка`,content:`**Теги для release\\_block.tpl**`},{heading:`установка`,content:`\\{image}, \\{image-1}, \\{image-\\*} - При условии, что изображения выводятся из короткой или полной новости`},{heading:`установка`,content:`\\{poster} - При условии, если изображение выводится из доп. поля`},{heading:`установка`,content:`\\{title} - Выводит название в зависимости от вывода, настроенного в настройках`},{heading:`установка`,content:`\\{type} - Выводит тип релиза, полнометражку или сериал`},{heading:`установка`,content:`\\{number} - Выводит номер серии, если релиз полнометражка - не выводится`},{heading:`установка`,content:`\\{translate\\_name} - Выводит название поля: "Перевод"`},{heading:`установка`,content:`\\{dub\\_name} - Выводит название поля: "Озвучка"`},{heading:`установка`,content:`\\{montage\\_name} - Выводит название поля: "Монтаж"`},{heading:`установка`,content:`\\{post\\_name} - Выводит название поля: "Проверка"`},{heading:`установка`,content:`\\{translate} - Выводит значение для поля: "Перевод"`},{heading:`установка`,content:`\\{dub} - Выводит значение для поля: "Озвучка"`},{heading:`установка`,content:`\\{montage} - Выводит значение для поля: "Монтаж"`},{heading:`установка`,content:`\\{post} - Выводит значение для поля: "Проверка"`},{heading:`установка`,content:`\\{suffix} - Выводит знак процента`},{heading:`установка`,content:`\\{progress} - Выводит прогрессбар, статус в процентах. Если отключены показы в процентах, то и прогрессбара не будет`},{heading:`установка`,content:`\\{link} - Ссылка на новость`},{heading:`установка`,content:`\\{id} - ID статуса`},{heading:`установка`,content:`\\[status]\\[/status] - Скрывает текст, если отключён показ нуллевых значений (пока в стадии обдумки)`},{heading:`установка`,content:`\\[link]\\[/link] - Заключённый текст превратится в ссылку на новость`}],headings:[{id:`установка`,content:`**Установка**`}]},s=[{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`strong`,{children:`Установка`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{YouTube:r}=t;return r||u(`YouTube`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/releasestatus.6/`,children:` Перейти к разработке`})]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:(0,n.jsx)(t.strong,{children:`Установка`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Залить файлы из папки uploads в корень сайта (уделите внимание папке Default в папке templates)`}),`
`,(0,n.jsx)(t.li,{children:`Запустите файл install.php в корне вашего сайта, а затем удалите`}),`
`,(0,n.jsx)(t.li,{children:`В шаблонах откройте файл main.tpl и добавьте стиль`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`link`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` href`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"{THEME}/releasestatus/main.css"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"text/css"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` rel`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"stylesheet"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` />`})]})})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`В этом же файле, или любом другом файле шаблона, прописываем это для вывода блока`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/releasestatus.php"}`})})})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`На файл engine/data/releasestatus.php выставить права 666`}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Теги для release_block.tpl`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`{image}, {image-1}, {image-*} - При условии, что изображения выводятся из короткой или полной новости`}),`
`,(0,n.jsx)(t.li,{children:`{poster} - При условии, если изображение выводится из доп. поля`}),`
`,(0,n.jsx)(t.li,{children:`{title} - Выводит название в зависимости от вывода, настроенного в настройках`}),`
`,(0,n.jsx)(t.li,{children:`{type} - Выводит тип релиза, полнометражку или сериал`}),`
`,(0,n.jsx)(t.li,{children:`{number} - Выводит номер серии, если релиз полнометражка - не выводится`}),`
`,(0,n.jsx)(t.li,{children:`{translate_name} - Выводит название поля: "Перевод"`}),`
`,(0,n.jsx)(t.li,{children:`{dub_name} - Выводит название поля: "Озвучка"`}),`
`,(0,n.jsx)(t.li,{children:`{montage_name} - Выводит название поля: "Монтаж"`}),`
`,(0,n.jsx)(t.li,{children:`{post_name} - Выводит название поля: "Проверка"`}),`
`,(0,n.jsx)(t.li,{children:`{translate} - Выводит значение для поля: "Перевод"`}),`
`,(0,n.jsx)(t.li,{children:`{dub} - Выводит значение для поля: "Озвучка"`}),`
`,(0,n.jsx)(t.li,{children:`{montage} - Выводит значение для поля: "Монтаж"`}),`
`,(0,n.jsx)(t.li,{children:`{post} - Выводит значение для поля: "Проверка"`}),`
`,(0,n.jsx)(t.li,{children:`{suffix} - Выводит знак процента`}),`
`,(0,n.jsx)(t.li,{children:`{progress} - Выводит прогрессбар, статус в процентах. Если отключены показы в процентах, то и прогрессбара не будет`}),`
`,(0,n.jsx)(t.li,{children:`{link} - Ссылка на новость`}),`
`,(0,n.jsx)(t.li,{children:`{id} - ID статуса`}),`
`,(0,n.jsx)(t.li,{children:`[status][/status] - Скрывает текст, если отключён показ нуллевых значений (пока в стадии обдумки)`}),`
`,(0,n.jsx)(t.li,{children:`[link][/link] - Заключённый текст превратится в ссылку на новость`}),`
`]}),`
`,(0,n.jsx)(`div`,{class:`video-wrapper`,children:(0,n.jsx)(r,{id:`fV5FwefJqhY`})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};