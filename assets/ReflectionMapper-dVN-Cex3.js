import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ReflectionMapper`,description:`Гидратация и сериализация public-свойств DTO с валидацией.`,version:`1.0.1`},i=new Date(1788011088e3),a=`

**Описание:** Маппер public non-static свойств: конверсия типов, \`#[ArrayOf]\`, запуск \`ValidationRule\`, сериализация в массив. Используется из \`AbstractReflection\` и может вызываться напрямую.

**Namespace:** \`Devcraft\\Mapper\`

**С версии:** 1.0.0

**См. также:**

* [AbstractReflection](../abstracts/AbstractReflection)
* [PropertyValidator](../validation/PropertyValidator)
* [ValidationException](../exceptions/ValidationException)
* [ArrayOf](../attributes/ArrayOf)
* [Гайд: Reflection mapper](../../guides/reflection_mapper)

## Методы [#методы]

### \`__construct(LoggerInterface $logger, PropertyValidator $validator = new PropertyValidator())\` [#__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator]

**Параметры:**

| Параметр     | Тип                                                  | Описание                                                                  |
| ------------ | ---------------------------------------------------- | ------------------------------------------------------------------------- |
| \`$logger\`    | \`LoggerInterface\`                                    | Логгер сбоев валидации/конверсии                                          |
| \`$validator\` | [PropertyValidator](../validation/PropertyValidator) | Опциональный кастомный валидатор. По умолчанию: \`new PropertyValidator()\` |

### \`hydrate(object $target, array $data): object\` [#hydrateobject-target-array-data-object]

**Описание:** Гидратирует public-свойства \`$target\` из \`$data\`. Собирает ошибки; при непустой карте бросает \`ValidationException\`.

**Параметры:**

| Параметр  | Тип      | Описание                                 |
| --------- | -------- | ---------------------------------------- |
| \`$target\` | \`object\` | DTO или любой объект с public-свойствами |
| \`$data\`   | \`array\`  | Входной ассоциативный массив             |

**Возвращает:** \`object\` — \`$target\`

**Исключения:**

* [ValidationException](../exceptions/ValidationException)

### \`toArray(object $source): array\` [#toarrayobject-source-array]

**Описание:** Экспорт инициализированных public-свойств. Вложенные \`AbstractReflection\` и массивы нормализуются рекурсивно.

**Параметры:**

| Параметр  | Тип      | Описание              |
| --------- | -------- | --------------------- |
| \`$source\` | \`object\` | Источник сериализации |

**Возвращает:** \`array\`

## Поток гидратации свойства [#поток-гидратации-свойства]

1. Missing / \`null\` → null fallback (default / \`null\` / \`is required\`)
2. Конверсия по declared type (+ nested DTO / \`ArrayOf\`)
3. \`PropertyValidator::validateValue\`
4. При сбое на nullable — свойство = \`null\` + log; иначе путь в error map

Union/intersection property types не поддерживаются.
`,o={contents:[{heading:void 0,content:"**Описание:** Маппер public non-static свойств: конверсия типов, `#[ArrayOf]`, запуск `ValidationRule`, сериализация в массив. Используется из `AbstractReflection` и может вызываться напрямую."},{heading:void 0,content:"**Namespace:** `Devcraft\\Mapper`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`AbstractReflection`},{heading:void 0,content:`PropertyValidator`},{heading:void 0,content:`ValidationException`},{heading:void 0,content:`ArrayOf`},{heading:void 0,content:`Гайд: Reflection mapper`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`**Параметры:**`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`Параметр`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`Тип`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`Описание`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:"`$logger`"},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:"`LoggerInterface`"},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`Логгер сбоев валидации/конверсии`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:"`$validator`"},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:`PropertyValidator`},{heading:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:"Опциональный кастомный валидатор. По умолчанию: `new PropertyValidator()`"},{heading:`hydrateobject-target-array-data-object`,content:"**Описание:** Гидратирует public-свойства `$target` из `$data`. Собирает ошибки; при непустой карте бросает `ValidationException`."},{heading:`hydrateobject-target-array-data-object`,content:`**Параметры:**`},{heading:`hydrateobject-target-array-data-object`,content:`Параметр`},{heading:`hydrateobject-target-array-data-object`,content:`Тип`},{heading:`hydrateobject-target-array-data-object`,content:`Описание`},{heading:`hydrateobject-target-array-data-object`,content:"`$target`"},{heading:`hydrateobject-target-array-data-object`,content:"`object`"},{heading:`hydrateobject-target-array-data-object`,content:`DTO или любой объект с public-свойствами`},{heading:`hydrateobject-target-array-data-object`,content:"`$data`"},{heading:`hydrateobject-target-array-data-object`,content:"`array`"},{heading:`hydrateobject-target-array-data-object`,content:`Входной ассоциативный массив`},{heading:`hydrateobject-target-array-data-object`,content:"**Возвращает:** `object` — `$target`"},{heading:`hydrateobject-target-array-data-object`,content:`**Исключения:**`},{heading:`hydrateobject-target-array-data-object`,content:`ValidationException`},{heading:`toarrayobject-source-array`,content:"**Описание:** Экспорт инициализированных public-свойств. Вложенные `AbstractReflection` и массивы нормализуются рекурсивно."},{heading:`toarrayobject-source-array`,content:`**Параметры:**`},{heading:`toarrayobject-source-array`,content:`Параметр`},{heading:`toarrayobject-source-array`,content:`Тип`},{heading:`toarrayobject-source-array`,content:`Описание`},{heading:`toarrayobject-source-array`,content:"`$source`"},{heading:`toarrayobject-source-array`,content:"`object`"},{heading:`toarrayobject-source-array`,content:`Источник сериализации`},{heading:`toarrayobject-source-array`,content:"**Возвращает:** `array`"},{heading:`поток-гидратации-свойства`,content:"Missing / `null` → null fallback (default / `null` / `is required`)"},{heading:`поток-гидратации-свойства`,content:"Конверсия по declared type (+ nested DTO / `ArrayOf`)"},{heading:`поток-гидратации-свойства`,content:"`PropertyValidator::validateValue`"},{heading:`поток-гидратации-свойства`,content:"При сбое на nullable — свойство = `null` + log; иначе путь в error map"},{heading:`поток-гидратации-свойства`,content:`Union/intersection property types не поддерживаются.`}],headings:[{id:`методы`,content:`Методы`},{id:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,content:"`__construct(LoggerInterface $logger, PropertyValidator $validator = new PropertyValidator())`"},{id:`hydrateobject-target-array-data-object`,content:"`hydrate(object $target, array $data): object`"},{id:`toarrayobject-source-array`,content:"`toArray(object $source): array`"},{id:`поток-гидратации-свойства`,content:`Поток гидратации свойства`}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(LoggerInterface $logger, PropertyValidator $validator = new PropertyValidator())`})})},{depth:3,url:`#hydrateobject-target-array-data-object`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hydrate(object $target, array $data): object`})})},{depth:3,url:`#toarrayobject-source-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`toArray(object $source): array`})})},{depth:2,url:`#поток-гидратации-свойства`,title:(0,n.jsx)(n.Fragment,{children:`Поток гидратации свойства`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Маппер public non-static свойств: конверсия типов, `,(0,n.jsx)(t.code,{children:`#[ArrayOf]`}),`, запуск `,(0,n.jsx)(t.code,{children:`ValidationRule`}),`, сериализация в массив. Используется из `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),` и может вызываться напрямую.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Mapper`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../abstracts/AbstractReflection`,children:`AbstractReflection`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../validation/PropertyValidator`,children:`PropertyValidator`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../exceptions/ValidationException`,children:`ValidationException`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../attributes/ArrayOf`,children:`ArrayOf`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/reflection_mapper`,children:`Гайд: Reflection mapper`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__constructloggerinterface-logger-propertyvalidator-validator--new-propertyvalidator`,children:(0,n.jsx)(t.code,{children:`__construct(LoggerInterface $logger, PropertyValidator $validator = new PropertyValidator())`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$logger`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`LoggerInterface`})}),(0,n.jsx)(t.td,{children:`Логгер сбоев валидации/конверсии`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$validator`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../validation/PropertyValidator`,children:`PropertyValidator`})}),(0,n.jsxs)(t.td,{children:[`Опциональный кастомный валидатор. По умолчанию: `,(0,n.jsx)(t.code,{children:`new PropertyValidator()`})]})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`hydrateobject-target-array-data-object`,children:(0,n.jsx)(t.code,{children:`hydrate(object $target, array $data): object`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Гидратирует public-свойства `,(0,n.jsx)(t.code,{children:`$target`}),` из `,(0,n.jsx)(t.code,{children:`$data`}),`. Собирает ошибки; при непустой карте бросает `,(0,n.jsx)(t.code,{children:`ValidationException`}),`.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$target`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`object`})}),(0,n.jsx)(t.td,{children:`DTO или любой объект с public-свойствами`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$data`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`array`})}),(0,n.jsx)(t.td,{children:`Входной ассоциативный массив`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`object`}),` — `,(0,n.jsx)(t.code,{children:`$target`})]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Исключения:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../exceptions/ValidationException`,children:`ValidationException`})}),`
`]}),`
`,(0,n.jsx)(t.h3,{id:`toarrayobject-source-array`,children:(0,n.jsx)(t.code,{children:`toArray(object $source): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Экспорт инициализированных public-свойств. Вложенные `,(0,n.jsx)(t.code,{children:`AbstractReflection`}),` и массивы нормализуются рекурсивно.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$source`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`object`})}),(0,n.jsx)(t.td,{children:`Источник сериализации`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array`})]}),`
`,(0,n.jsx)(t.h2,{id:`поток-гидратации-свойства`,children:`Поток гидратации свойства`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Missing / `,(0,n.jsx)(t.code,{children:`null`}),` → null fallback (default / `,(0,n.jsx)(t.code,{children:`null`}),` / `,(0,n.jsx)(t.code,{children:`is required`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[`Конверсия по declared type (+ nested DTO / `,(0,n.jsx)(t.code,{children:`ArrayOf`}),`)`]}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`PropertyValidator::validateValue`})}),`
`,(0,n.jsxs)(t.li,{children:[`При сбое на nullable — свойство = `,(0,n.jsx)(t.code,{children:`null`}),` + log; иначе путь в error map`]}),`
`]}),`
`,(0,n.jsx)(t.p,{children:`Union/intersection property types не поддерживаются.`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};