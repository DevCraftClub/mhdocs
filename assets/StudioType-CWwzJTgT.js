import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`StudioType`},i=new Date(1787141927e3),a=`

**Описание:** Перечисление типов студий
Определяет возможные типы студий в системе Kinopoisk:

* Производство: кинокомпании, занимающиеся производством фильмов
* Спецэффекты: студии, специализирующиеся на создании визуальных эффектов
* Прокат: дистрибьюторские компании
* Студия дубляжа: студии, занимающиеся озвучиванием и дубляжом

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`getAllTypes()\` [#getalltypes]

**Описание:** Получает все доступные типы студий

**Возвращает:** \`array<string>\` Массив всех возможных типов студий

## \`isValidType()\` [#isvalidtype]

**Описание:** Проверяет, является ли переданное значение валидным типом студии

**Параметры:**

* \`$value\` (string): Значение для проверки

**Возвращает:** \`bool True,\` если значение является валидным типом студии

## \`fromString()\` [#fromstring]

**Описание:** Получает тип студии по строковому значению

**Параметры:**

* \`$value\` (string): Строковое значение типа

**Возвращает:** \`self|null\` Объект enum или null, если значение не найдено

## \`getDescription()\` [#getdescription]

**Описание:** Получает описание типа студии

**Возвращает:** \`string\` Человекочитаемое описание типа студии

## \`getEnglishName()\` [#getenglishname]

**Описание:** Получает английское название типа студии

**Возвращает:** \`string\` Английское название типа

## Cases [#cases]

### \`PRODUCTION\` [#production]

**Значение:** \`'Производство'\`

**Описание:** Производственная студия/кинокомпания
Компании, занимающиеся непосредственно производством фильмов и сериалов

### \`SPECIAL_EFFECTS\` [#special_effects]

**Значение:** \`'Спецэффекты'\`

**Описание:** Студия спецэффектов
Компании, специализирующиеся на создании визуальных и компьютерных эффектов

### \`DISTRIBUTION\` [#distribution]

**Значение:** \`'Прокат'\`

**Описание:** Прокатная компания
Дистрибьюторы, занимающиеся распространением и показом фильмов

### \`DUBBING_STUDIO\` [#dubbing_studio]

**Значение:** \`'Студия дубляжа'\`

**Описание:** Студия дубляжа
Компании, занимающиеся озвучиванием, дубляжом и локализацией контента
`,o={contents:[{heading:void 0,content:`**Описание:** Перечисление типов студий
Определяет возможные типы студий в системе Kinopoisk:`},{heading:void 0,content:`Производство: кинокомпании, занимающиеся производством фильмов`},{heading:void 0,content:`Спецэффекты: студии, специализирующиеся на создании визуальных эффектов`},{heading:void 0,content:`Прокат: дистрибьюторские компании`},{heading:void 0,content:`Студия дубляжа: студии, занимающиеся озвучиванием и дубляжом`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`getalltypes`,content:`**Описание:** Получает все доступные типы студий`},{heading:`getalltypes`,content:"**Возвращает:** `array<string>` Массив всех возможных типов студий"},{heading:`isvalidtype`,content:`**Описание:** Проверяет, является ли переданное значение валидным типом студии`},{heading:`isvalidtype`,content:`**Параметры:**`},{heading:`isvalidtype`,content:"`$value` (string): Значение для проверки"},{heading:`isvalidtype`,content:"**Возвращает:** `bool True,` если значение является валидным типом студии"},{heading:`fromstring`,content:`**Описание:** Получает тип студии по строковому значению`},{heading:`fromstring`,content:`**Параметры:**`},{heading:`fromstring`,content:"`$value` (string): Строковое значение типа"},{heading:`fromstring`,content:"**Возвращает:** `self|null` Объект enum или null, если значение не найдено"},{heading:`getdescription`,content:`**Описание:** Получает описание типа студии`},{heading:`getdescription`,content:"**Возвращает:** `string` Человекочитаемое описание типа студии"},{heading:`getenglishname`,content:`**Описание:** Получает английское название типа студии`},{heading:`getenglishname`,content:"**Возвращает:** `string` Английское название типа"},{heading:`production`,content:"**Значение:** `'Производство'`"},{heading:`production`,content:`**Описание:** Производственная студия/кинокомпания
Компании, занимающиеся непосредственно производством фильмов и сериалов`},{heading:`special_effects`,content:"**Значение:** `'Спецэффекты'`"},{heading:`special_effects`,content:`**Описание:** Студия спецэффектов
Компании, специализирующиеся на создании визуальных и компьютерных эффектов`},{heading:`distribution`,content:"**Значение:** `'Прокат'`"},{heading:`distribution`,content:`**Описание:** Прокатная компания
Дистрибьюторы, занимающиеся распространением и показом фильмов`},{heading:`dubbing_studio`,content:"**Значение:** `'Студия дубляжа'`"},{heading:`dubbing_studio`,content:`**Описание:** Студия дубляжа
Компании, занимающиеся озвучиванием, дубляжом и локализацией контента`}],headings:[{id:`getalltypes`,content:"`getAllTypes()`"},{id:`isvalidtype`,content:"`isValidType()`"},{id:`fromstring`,content:"`fromString()`"},{id:`getdescription`,content:"`getDescription()`"},{id:`getenglishname`,content:"`getEnglishName()`"},{id:`cases`,content:`Cases`},{id:`production`,content:"`PRODUCTION`"},{id:`special_effects`,content:"`SPECIAL_EFFECTS`"},{id:`distribution`,content:"`DISTRIBUTION`"},{id:`dubbing_studio`,content:"`DUBBING_STUDIO`"}]},s=[{depth:2,url:`#getalltypes`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getAllTypes()`})})},{depth:2,url:`#isvalidtype`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isValidType()`})})},{depth:2,url:`#fromstring`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`fromString()`})})},{depth:2,url:`#getdescription`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getDescription()`})})},{depth:2,url:`#getenglishname`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getEnglishName()`})})},{depth:2,url:`#cases`,title:(0,n.jsx)(n.Fragment,{children:`Cases`})},{depth:3,url:`#production`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`PRODUCTION`})})},{depth:3,url:`#special_effects`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`SPECIAL_EFFECTS`})})},{depth:3,url:`#distribution`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DISTRIBUTION`})})},{depth:3,url:`#dubbing_studio`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`DUBBING_STUDIO`})})}];function c(e){let t={code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Перечисление типов студий
Определяет возможные типы студий в системе Kinopoisk:`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Производство: кинокомпании, занимающиеся производством фильмов`}),`
`,(0,n.jsx)(t.li,{children:`Спецэффекты: студии, специализирующиеся на создании визуальных эффектов`}),`
`,(0,n.jsx)(t.li,{children:`Прокат: дистрибьюторские компании`}),`
`,(0,n.jsx)(t.li,{children:`Студия дубляжа: студии, занимающиеся озвучиванием и дубляжом`}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`getalltypes`,children:(0,n.jsx)(t.code,{children:`getAllTypes()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает все доступные типы студий`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string>`}),` Массив всех возможных типов студий`]}),`
`,(0,n.jsx)(t.h2,{id:`isvalidtype`,children:(0,n.jsx)(t.code,{children:`isValidType()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет, является ли переданное значение валидным типом студии`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (string): Значение для проверки`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True,`}),` если значение является валидным типом студии`]}),`
`,(0,n.jsx)(t.h2,{id:`fromstring`,children:(0,n.jsx)(t.code,{children:`fromString()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает тип студии по строковому значению`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (string): Строковое значение типа`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self|null`}),` Объект enum или null, если значение не найдено`]}),`
`,(0,n.jsx)(t.h2,{id:`getdescription`,children:(0,n.jsx)(t.code,{children:`getDescription()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает описание типа студии`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Человекочитаемое описание типа студии`]}),`
`,(0,n.jsx)(t.h2,{id:`getenglishname`,children:(0,n.jsx)(t.code,{children:`getEnglishName()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает английское название типа студии`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` Английское название типа`]}),`
`,(0,n.jsx)(t.h2,{id:`cases`,children:`Cases`}),`
`,(0,n.jsx)(t.h3,{id:`production`,children:(0,n.jsx)(t.code,{children:`PRODUCTION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'Производство'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Производственная студия/кинокомпания
Компании, занимающиеся непосредственно производством фильмов и сериалов`]}),`
`,(0,n.jsx)(t.h3,{id:`special_effects`,children:(0,n.jsx)(t.code,{children:`SPECIAL_EFFECTS`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'Спецэффекты'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Студия спецэффектов
Компании, специализирующиеся на создании визуальных и компьютерных эффектов`]}),`
`,(0,n.jsx)(t.h3,{id:`distribution`,children:(0,n.jsx)(t.code,{children:`DISTRIBUTION`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'Прокат'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Прокатная компания
Дистрибьюторы, занимающиеся распространением и показом фильмов`]}),`
`,(0,n.jsx)(t.h3,{id:`dubbing_studio`,children:(0,n.jsx)(t.code,{children:`DUBBING_STUDIO`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Значение:`}),` `,(0,n.jsx)(t.code,{children:`'Студия дубляжа'`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Студия дубляжа
Компании, занимающиеся озвучиванием, дубляжом и локализацией контента`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};