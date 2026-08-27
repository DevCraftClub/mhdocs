import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Генератор языковых файлов`,description:`Локализация модулей DevCraft: XLIFF и Translation.`},i=new Date(1787750944e3),a=`

**Зачем:** строки в коде на русском, интерфейс — на языке админки; без правки PHP при добавлении локали.

Оборачивайте текст в \`__()\` / \`translate()\`. Файлы: \`devcraft/locales/{locale}/\` (путь — [Настройка](manage)).

## Класс Translation [#класс-translation]

Загрузка и выбор перевода выполняется через [Translation](../reference/back-end/classes/Translation) и мост [TwigTranslatorBridge](../reference/back-end/classes/TwigTranslatorBridge) для шаблонов Twig.

Список доступных языков для настроек формируется методом \`Translation::getFormattedLanguageList()\`.

## Формат файлов [#формат-файлов]

Используются XLIFF-файлы по одному на модуль, например:

\`\`\`
devcraft/locales/ru_RU/devcraft.xliff
devcraft/locales/ru_RU/my_module.xliff
\`\`\`

Полный каталог всех XLIFF на сайте в документации не приводится — достаточно знать базовый путь из настроек.

## Извлечение строк для перевода [#извлечение-строк-для-перевода]

Для массового сбора фраз из PHP/Twig можно использовать внешние инструменты (например, [translation\\_generator](https://github.com/DevCraftClub/translation_generator)) с указанием:

* исходного каталога \`devcraft/src/\`;
* исключений: \`vendor/\`, \`cache/\`, \`logs/\`;
* выходного каталога \`devcraft/locales/ru_RU/\`;
* имени модуля для файла XLIFF.

## Crowdin [#crowdin]

При публикации на Crowdin укажите путь к локалям согласно настройкам проекта. Синхронизация с репозиторием выполняется вручную или через CI — вне scope DevCraft Admin.

## См. также [#см-также]

* [Настройка](manage) — поле \`locales_path\`
* [Глобальные функции](../reference/back-end/index)
`,o={contents:[{heading:void 0,content:`**Зачем:** строки в коде на русском, интерфейс — на языке админки; без правки PHP при добавлении локали.`},{heading:void 0,content:"Оборачивайте текст в `__()` / `translate()`. Файлы: `devcraft/locales/{locale}/` (путь — Настройка)."},{heading:`класс-translation`,content:`Загрузка и выбор перевода выполняется через Translation и мост TwigTranslatorBridge для шаблонов Twig.`},{heading:`класс-translation`,content:"Список доступных языков для настроек формируется методом `Translation::getFormattedLanguageList()`."},{heading:`формат-файлов`,content:`Используются XLIFF-файлы по одному на модуль, например:`},{heading:`формат-файлов`,content:`Полный каталог всех XLIFF на сайте в документации не приводится — достаточно знать базовый путь из настроек.`},{heading:`извлечение-строк-для-перевода`,content:`Для массового сбора фраз из PHP/Twig можно использовать внешние инструменты (например, translation\\_generator) с указанием:`},{heading:`извлечение-строк-для-перевода`,content:"исходного каталога `devcraft/src/`;"},{heading:`извлечение-строк-для-перевода`,content:"исключений: `vendor/`, `cache/`, `logs/`;"},{heading:`извлечение-строк-для-перевода`,content:"выходного каталога `devcraft/locales/ru_RU/`;"},{heading:`извлечение-строк-для-перевода`,content:`имени модуля для файла XLIFF.`},{heading:`crowdin`,content:`При публикации на Crowdin укажите путь к локалям согласно настройкам проекта. Синхронизация с репозиторием выполняется вручную или через CI — вне scope DevCraft Admin.`},{heading:`см-также`,content:"Настройка — поле `locales_path`"},{heading:`см-также`,content:`Глобальные функции`}],headings:[{id:`класс-translation`,content:`Класс Translation`},{id:`формат-файлов`,content:`Формат файлов`},{id:`извлечение-строк-для-перевода`,content:`Извлечение строк для перевода`},{id:`crowdin`,content:`Crowdin`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#класс-translation`,title:(0,n.jsx)(n.Fragment,{children:`Класс Translation`})},{depth:2,url:`#формат-файлов`,title:(0,n.jsx)(n.Fragment,{children:`Формат файлов`})},{depth:2,url:`#извлечение-строк-для-перевода`,title:(0,n.jsx)(n.Fragment,{children:`Извлечение строк для перевода`})},{depth:2,url:`#crowdin`,title:(0,n.jsx)(n.Fragment,{children:`Crowdin`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Зачем:`}),` строки в коде на русском, интерфейс — на языке админки; без правки PHP при добавлении локали.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Оборачивайте текст в `,(0,n.jsx)(t.code,{children:`__()`}),` / `,(0,n.jsx)(t.code,{children:`translate()`}),`. Файлы: `,(0,n.jsx)(t.code,{children:`devcraft/locales/{locale}/`}),` (путь — `,(0,n.jsx)(t.a,{href:`manage`,children:`Настройка`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`класс-translation`,children:`Класс Translation`}),`
`,(0,n.jsxs)(t.p,{children:[`Загрузка и выбор перевода выполняется через `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/Translation`,children:`Translation`}),` и мост `,(0,n.jsx)(t.a,{href:`../reference/back-end/classes/TwigTranslatorBridge`,children:`TwigTranslatorBridge`}),` для шаблонов Twig.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Список доступных языков для настроек формируется методом `,(0,n.jsx)(t.code,{children:`Translation::getFormattedLanguageList()`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`формат-файлов`,children:`Формат файлов`}),`
`,(0,n.jsx)(t.p,{children:`Используются XLIFF-файлы по одному на модуль, например:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/locales/ru_RU/devcraft.xliff`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`devcraft/locales/ru_RU/my_module.xliff`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`Полный каталог всех XLIFF на сайте в документации не приводится — достаточно знать базовый путь из настроек.`}),`
`,(0,n.jsx)(t.h2,{id:`извлечение-строк-для-перевода`,children:`Извлечение строк для перевода`}),`
`,(0,n.jsxs)(t.p,{children:[`Для массового сбора фраз из PHP/Twig можно использовать внешние инструменты (например, `,(0,n.jsx)(t.a,{href:`https://github.com/DevCraftClub/translation_generator`,children:`translation_generator`}),`) с указанием:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`исходного каталога `,(0,n.jsx)(t.code,{children:`devcraft/src/`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`исключений: `,(0,n.jsx)(t.code,{children:`vendor/`}),`, `,(0,n.jsx)(t.code,{children:`cache/`}),`, `,(0,n.jsx)(t.code,{children:`logs/`}),`;`]}),`
`,(0,n.jsxs)(t.li,{children:[`выходного каталога `,(0,n.jsx)(t.code,{children:`devcraft/locales/ru_RU/`}),`;`]}),`
`,(0,n.jsx)(t.li,{children:`имени модуля для файла XLIFF.`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`crowdin`,children:`Crowdin`}),`
`,(0,n.jsx)(t.p,{children:`При публикации на Crowdin укажите путь к локалям согласно настройкам проекта. Синхронизация с репозиторием выполняется вручную или через CI — вне scope DevCraft Admin.`}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`manage`,children:`Настройка`}),` — поле `,(0,n.jsx)(t.code,{children:`locales_path`})]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/back-end/index`,children:`Глобальные функции`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};