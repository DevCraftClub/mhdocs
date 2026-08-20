import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r=`/assets/static_template_name-_f-IvjT4.png`,i={title:`XF List Generator`},a=new Date(1787223655e3),o=`



**Ссылка на
разработку**: [Перейти к разработке](https://devcraft.club/downloads/xf-list-generator.19/)

**Версия модификации**: <i class="fa-duotone fa-code-branch" /> 1.1.0

## Установка [#установка]

Либо закинуть файл xf\\_list\\_gen.php в папку engine/modules, либо установить плагин через менеджер плагинов

## Подключение [#подключение]

Модуль подключается в любом шаблоне с помощью инклуда:

\`\`\`html
{include file="engine/modules/xf_list_gen.php?xffield=X&template=X&&limit=X&skip=X&sort=X&cat=X&news_id=X"
\`\`\`

## Отображение списка на отдельной странице [#отображение-списка-на-отдельной-странице]

* Создаём шаблон в папке вашего шаблона, к примеру /templates/Default/**xfield\\_list.tpl**
* В этот шаблон подключаем инклуд. Используем данные из статического шаблона **static.tpl** и дополняем его:

\`\`\`html
<article class="box story">
	<div class="box_in">
		[group=1]<ul class="story_icons">
			<li class="edit_btn">
				[edit]<i title="Редактировать">Редактировать</i>[/edit]
			</li>
		</ul>[/group]
		<h1 class="title">{description}</h1>
		<div class="text">{include file="engine/modules/xf_list_gen.php?xffield=X&template=Y}</div>
	</div>
</article>
\`\`\`

* Вместо X - название доп. поля. Вместо Y - путь до шаблона для списка
* Создаём статическую страницу в админпанеле и указываем в поле название созданного шаблона
  <img alt="название созданного шаблона" src="__img0" />
* Всё

## Теги [#теги]

**Обязательные теги**

* **xffield** - Название доп. поля
* **template** - Название шаблона с окончанием

**Дополнительные теги:**

* **limit** - Ограничивает вывод записей в списке, принимает только числа. По умолчанию: пусто
* **skip** - Пропускает заданное число записей, принимает только числа. По умолчанию: пусто
* **sort** - Сортировка списка, по умолчанию или по убыванию. Принимает только ASC и DESC. По умолчанию: ASC
* **cat** - Перечень категорий через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0
* **news\\_id** - Перечень новостей через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0

**Возможные теги в вашем шаблоне:**

* **\\{link}** - Выводит ссылку на доп. поле, если имеется (хотя да...)
* **\\{name}** - Название доп. поля
* **\\{value}** - Значение доп. поля
* **\\{max\\_value}** - Максимально возможное значение, сделано для вывода чисел
* **\\{min\\_value}** - Минимально возможное значение, сделано для вывода чисел
* **\\{count}** - Выводит общее количество использования доп. поля # начиная с версии 1.1.0
`,s={contents:[{heading:void 0,content:`**Ссылка на
разработку**: Перейти к разработке`},{heading:void 0,content:`**Версия модификации**:  1.1.0`},{heading:`установка`,content:`Либо закинуть файл xf\\_list\\_gen.php в папку engine/modules, либо установить плагин через менеджер плагинов`},{heading:`подключение`,content:`Модуль подключается в любом шаблоне с помощью инклуда:`},{heading:`отображение-списка-на-отдельной-странице`,content:`Создаём шаблон в папке вашего шаблона, к примеру /templates/Default/**xfield\\_list.tpl**`},{heading:`отображение-списка-на-отдельной-странице`,content:`В этот шаблон подключаем инклуд. Используем данные из статического шаблона **static.tpl** и дополняем его:`},{heading:`отображение-списка-на-отдельной-странице`,content:`Вместо X - название доп. поля. Вместо Y - путь до шаблона для списка`},{heading:`отображение-списка-на-отдельной-странице`,content:`Создаём статическую страницу в админпанеле и указываем в поле название созданного шаблона`},{heading:`отображение-списка-на-отдельной-странице`,content:`Всё`},{heading:`теги`,content:`**Обязательные теги**`},{heading:`теги`,content:`**xffield** - Название доп. поля`},{heading:`теги`,content:`**template** - Название шаблона с окончанием`},{heading:`теги`,content:`**Дополнительные теги:**`},{heading:`теги`,content:`**limit** - Ограничивает вывод записей в списке, принимает только числа. По умолчанию: пусто`},{heading:`теги`,content:`**skip** - Пропускает заданное число записей, принимает только числа. По умолчанию: пусто`},{heading:`теги`,content:`**sort** - Сортировка списка, по умолчанию или по убыванию. Принимает только ASC и DESC. По умолчанию: ASC`},{heading:`теги`,content:`**cat** - Перечень категорий через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0`},{heading:`теги`,content:`**news\\_id** - Перечень новостей через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0`},{heading:`теги`,content:`**Возможные теги в вашем шаблоне:**`},{heading:`теги`,content:`**\\{link}** - Выводит ссылку на доп. поле, если имеется (хотя да...)`},{heading:`теги`,content:`**\\{name}** - Название доп. поля`},{heading:`теги`,content:`**\\{value}** - Значение доп. поля`},{heading:`теги`,content:`**\\{max\\_value}** - Максимально возможное значение, сделано для вывода чисел`},{heading:`теги`,content:`**\\{min\\_value}** - Минимально возможное значение, сделано для вывода чисел`},{heading:`теги`,content:`**\\{count}** - Выводит общее количество использования доп. поля # начиная с версии 1.1.0`}],headings:[{id:`установка`,content:`Установка`},{id:`подключение`,content:`Подключение`},{id:`отображение-списка-на-отдельной-странице`,content:`Отображение списка на отдельной странице`},{id:`теги`,content:`Теги`}]},c=[{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#подключение`,title:(0,n.jsx)(n.Fragment,{children:`Подключение`})},{depth:2,url:`#отображение-списка-на-отдельной-странице`,title:(0,n.jsx)(n.Fragment,{children:`Отображение списка на отдельной странице`})},{depth:2,url:`#теги`,title:(0,n.jsx)(n.Fragment,{children:`Теги`})}];function l(e){let t={a:`a`,code:`code`,h2:`h2`,img:`img`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на
разработку`}),`: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/xf-list-generator.19/`,children:`Перейти к разработке`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия модификации`}),`: `,(0,n.jsx)(`i`,{class:`fa-duotone fa-code-branch`}),` 1.1.0`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(t.p,{children:`Либо закинуть файл xf_list_gen.php в папку engine/modules, либо установить плагин через менеджер плагинов`}),`
`,(0,n.jsx)(t.h2,{id:`подключение`,children:`Подключение`}),`
`,(0,n.jsx)(t.p,{children:`Модуль подключается в любом шаблоне с помощью инклуда:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/xf_list_gen.php?xffield=X&template=X&&limit=X&skip=X&sort=X&cat=X&news_id=X"`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`отображение-списка-на-отдельной-странице`,children:`Отображение списка на отдельной странице`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Создаём шаблон в папке вашего шаблона, к примеру /templates/Default/`,(0,n.jsx)(t.strong,{children:`xfield_list.tpl`})]}),`
`,(0,n.jsxs)(t.li,{children:[`В этот шаблон подключаем инклуд. Используем данные из статического шаблона `,(0,n.jsx)(t.strong,{children:`static.tpl`}),` и дополняем его:`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`article`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"box story"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"box_in"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		[group=1]<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`ul`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"story_icons"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`li`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"edit_btn"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`				[edit]<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`i`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` title`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"Редактировать"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>Редактировать</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`i`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>[/edit]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`			</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`li`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`ul`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>[/group]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`h1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"title"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>{description}</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`h1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"text"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>{include file="engine/modules/xf_list_gen.php?xffield=X&template=Y}</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`div`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`</`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#22863A`,"--shiki-dark":`#85E89D`},children:`article`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`>`})]})]})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Вместо X - название доп. поля. Вместо Y - путь до шаблона для списка`}),`
`,(0,n.jsxs)(t.li,{children:[`Создаём статическую страницу в админпанеле и указываем в поле название созданного шаблона
`,(0,n.jsx)(t.img,{alt:`название созданного шаблона`,src:r})]}),`
`,(0,n.jsx)(t.li,{children:`Всё`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`теги`,children:`Теги`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Обязательные теги`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`xffield`}),` - Название доп. поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`template`}),` - Название шаблона с окончанием`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Дополнительные теги:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`limit`}),` - Ограничивает вывод записей в списке, принимает только числа. По умолчанию: пусто`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`skip`}),` - Пропускает заданное число записей, принимает только числа. По умолчанию: пусто`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`sort`}),` - Сортировка списка, по умолчанию или по убыванию. Принимает только ASC и DESC. По умолчанию: ASC`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`cat`}),` - Перечень категорий через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`news_id`}),` - Перечень новостей через запятую (,) из которых должны формироваться списки # начиная с версии 1.1.0`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Возможные теги в вашем шаблоне:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{link}`}),` - Выводит ссылку на доп. поле, если имеется (хотя да...)`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{name}`}),` - Название доп. поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{value}`}),` - Значение доп. поля`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{max_value}`}),` - Максимально возможное значение, сделано для вывода чисел`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{min_value}`}),` - Минимально возможное значение, сделано для вывода чисел`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`{count}`}),` - Выводит общее количество использования доп. поля # начиная с версии 1.1.0`]}),`
`]})]})}function u(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}export{o as _markdown,u as default,i as frontmatter,a as lastModified,s as structuredData,c as toc};