import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Генератор модулей`,description:`Создание нового модуля DevCraft через админ-панель.`},i=new Date(1787141927e3),a=`

Функционал упрощает создание каркаса нового модуля DevCraft: страницы, AJAX, manifest, шаблоны и локализация.

Откройте в админке **DevCraft Admin → Генератор модулей** (\`NewModulePage\`).

Форма генератора содержит имя модуля, code и базовые опции каркаса. Для graphify здесь важнее связь страницы с \`NewModulePage\` и \`ModuleGeneratorService\`, чем отдельный скриншот интерфейса.

## Форма [#форма]

Укажите отображаемое имя модуля и код (латиница). Обработчик \`NewModuleHandler\` вызывает \`ModuleGeneratorService\`, который создаёт структуру под \`devcraft/src/modules/{Name}/\`.

## Создаваемая структура [#создаваемая-структура]

\`\`\`text
devcraft/src/modules/{Name}/
├── manifest.php
├── settings.schema.php      # при необходимости
├── changelog.data.php
├── Pages/
├── Ajax/
├── Services/
│   └── ModuleGeneratorService.php  # только в модуле Admin
├── Models/
├── Repositories/
├── templates/
│   └── *.twig
\`\`\`

Точный набор файлов зависит от шаблона генератора (см. \`ModuleGeneratorService\` и \`ModuleGeneratorInput\` в [справочнике API](../reference/back-end/classes/ModuleGeneratorService)).

## Регистрация в DLE [#регистрация-в-dle]

После генерации:

1. Проверьте \`manifest.php\` нового модуля (меню, AJAX, assets).
2. Убедитесь, что модуль появился в меню DLE.
3. При необходимости добавьте запись в менеджер плагинов DLE для отдельного \`engine/inc/{mod}.php\`.

## Возможные проблемы [#возможные-проблемы]

* **Права на запись** — каталог \`devcraft/src/modules/\` должен быть доступен для PHP.
* **Дубликат кода** — транслит модуля должен быть уникальным.
* **Локализация** — сгенерированные фразы добавьте в XLIFF (см. [Генератор языковых файлов](generate_languages)).

## См. также [#см-также]

* [Манифест модуля](../reference/back-end/manifest)
* [Класс ModuleGeneratorService](../reference/back-end/classes/ModuleGeneratorService)
`,o={contents:[{heading:void 0,content:`Функционал упрощает создание каркаса нового модуля DevCraft: страницы, AJAX, manifest, шаблоны и локализация.`},{heading:void 0,content:"Откройте в админке **DevCraft Admin → Генератор модулей** (`NewModulePage`)."},{heading:void 0,content:"Форма генератора содержит имя модуля, code и базовые опции каркаса. Для graphify здесь важнее связь страницы с `NewModulePage` и `ModuleGeneratorService`, чем отдельный скриншот интерфейса."},{heading:`форма`,content:"Укажите отображаемое имя модуля и код (латиница). Обработчик `NewModuleHandler` вызывает `ModuleGeneratorService`, который создаёт структуру под `devcraft/src/modules/{Name}/`."},{heading:`создаваемая-структура`,content:"Точный набор файлов зависит от шаблона генератора (см. `ModuleGeneratorService` и `ModuleGeneratorInput` в справочнике API)."},{heading:`регистрация-в-dle`,content:`После генерации:`},{heading:`регистрация-в-dle`,content:"Проверьте `manifest.php` нового модуля (меню, AJAX, assets)."},{heading:`регистрация-в-dle`,content:`Убедитесь, что модуль появился в меню DLE.`},{heading:`регистрация-в-dle`,content:"При необходимости добавьте запись в менеджер плагинов DLE для отдельного `engine/inc/{mod}.php`."},{heading:`возможные-проблемы`,content:"**Права на запись** — каталог `devcraft/src/modules/` должен быть доступен для PHP."},{heading:`возможные-проблемы`,content:`**Дубликат кода** — транслит модуля должен быть уникальным.`},{heading:`возможные-проблемы`,content:`**Локализация** — сгенерированные фразы добавьте в XLIFF (см. Генератор языковых файлов).`},{heading:`см-также`,content:`Манифест модуля`},{heading:`см-также`,content:`Класс ModuleGeneratorService`}],headings:[{id:`форма`,content:`Форма`},{id:`создаваемая-структура`,content:`Создаваемая структура`},{id:`регистрация-в-dle`,content:`Регистрация в DLE`},{id:`возможные-проблемы`,content:`Возможные проблемы`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#форма`,title:(0,n.jsx)(n.Fragment,{children:`Форма`})},{depth:2,url:`#создаваемая-структура`,title:(0,n.jsx)(n.Fragment,{children:`Создаваемая структура`})},{depth:2,url:`#регистрация-в-dle`,title:(0,n.jsx)(n.Fragment,{children:`Регистрация в DLE`})},{depth:2,url:`#возможные-проблемы`,title:(0,n.jsx)(n.Fragment,{children:`Возможные проблемы`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Функционал упрощает создание каркаса нового модуля DevCraft: страницы, AJAX, manifest, шаблоны и локализация.`}),`
`,(0,n.jsxs)(t.p,{children:[`Откройте в админке `,(0,n.jsx)(t.strong,{children:`DevCraft Admin → Генератор модулей`}),` (`,(0,n.jsx)(t.code,{children:`NewModulePage`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Форма генератора содержит имя модуля, code и базовые опции каркаса. Для graphify здесь важнее связь страницы с `,(0,n.jsx)(t.code,{children:`NewModulePage`}),` и `,(0,n.jsx)(t.code,{children:`ModuleGeneratorService`}),`, чем отдельный скриншот интерфейса.`]}),`
`,(0,n.jsx)(t.h2,{id:`форма`,children:`Форма`}),`
`,(0,n.jsxs)(t.p,{children:[`Укажите отображаемое имя модуля и код (латиница). Обработчик `,(0,n.jsx)(t.code,{children:`NewModuleHandler`}),` вызывает `,(0,n.jsx)(t.code,{children:`ModuleGeneratorService`}),`, который создаёт структуру под `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/{Name}/`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`создаваемая-структура`,children:`Создаваемая структура`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/src/modules/{Name}/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── manifest.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── settings.schema.php      # при необходимости`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── changelog.data.php`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Pages/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Ajax/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Services/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── ModuleGeneratorService.php  # только в модуле Admin`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Models/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── Repositories/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`├── templates/`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`│   └── *.twig`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Точный набор файлов зависит от шаблона генератора (см. `,(0,n.jsx)(t.code,{children:`ModuleGeneratorService`}),` и `,(0,n.jsx)(t.code,{children:`ModuleGeneratorInput`}),` в `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/ModuleGeneratorService`,children:`справочнике API`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`регистрация-в-dle`,children:`Регистрация в DLE`}),`
`,(0,n.jsx)(t.p,{children:`После генерации:`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Проверьте `,(0,n.jsx)(t.code,{children:`manifest.php`}),` нового модуля (меню, AJAX, assets).`]}),`
`,(0,n.jsx)(t.li,{children:`Убедитесь, что модуль появился в меню DLE.`}),`
`,(0,n.jsxs)(t.li,{children:[`При необходимости добавьте запись в менеджер плагинов DLE для отдельного `,(0,n.jsx)(t.code,{children:`engine/inc/{mod}.php`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`возможные-проблемы`,children:`Возможные проблемы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Права на запись`}),` — каталог `,(0,n.jsx)(t.code,{children:`devcraft/src/modules/`}),` должен быть доступен для PHP.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Дубликат кода`}),` — транслит модуля должен быть уникальным.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:`Локализация`}),` — сгенерированные фразы добавьте в XLIFF (см. `,(0,n.jsx)(t.a,{href:`generate_languages`,children:`Генератор языковых файлов`}),`).`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/back-end/manifest`,children:`Манифест модуля`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/back-end/classes/ModuleGeneratorService`,children:`Класс ModuleGeneratorService`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};