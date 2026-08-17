import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`CacheInterface`},i=new Date(1786951824e3),a=`

**Описание:** Интерфейс для сервиса кэширования
Определяет контракт для работы с различными системами кэширования
в приложении. Поддерживает базовые операции CRUD для кэша.

**С версии:** 1.0.0

**Версия:** 1.0.0

## \`get()\` [#get]

**Описание:** Получает значение из кэша по ключу

**Параметры:**

* \`$key\` (string): Ключ кэша

**Возвращает:** \`mixed|null\` Значение из кэша или null если не найдено

## \`set()\` [#set]

**Описание:** Сохраняет значение в кэш

**Параметры:**

* \`$key\` (string): Ключ кэша
* \`$value\` (mixed): Значение для сохранения
* \`$ttl\` (int): Время жизни в секундах

**Возвращает:** \`bool True\` при успешном сохранении

## \`delete()\` [#delete]

**Описание:** Удаляет значение из кэша

**Параметры:**

* \`$key\` (string): Ключ кэша

**Возвращает:** \`bool True\` при успешном удалении

## \`has()\` [#has]

**Описание:** Проверяет наличие ключа в кэше

**Параметры:**

* \`$key\` (string): Ключ кэша

**Возвращает:** \`bool True\` если ключ существует

## \`clear()\` [#clear]

**Описание:** Очищает весь кэш

**Возвращает:** \`bool True\` при успешной очистке

## \`getMultiple()\` [#getmultiple]

**Описание:** Получает множественные значения по ключам

**Параметры:**

* \`$keys\` (array\\<string>): Массив ключей

**Возвращает:** \`array<string, mixed>\` Ассоциативный массив ключ => значение

## \`setMultiple()\` [#setmultiple]

**Описание:** Сохраняет множественные значения

**Параметры:**

* \`$ttl\` (int): Время жизни в секундах

**Возвращает:** \`bool True\` при успешном сохранении
`,o={contents:[{heading:void 0,content:`**Описание:** Интерфейс для сервиса кэширования
Определяет контракт для работы с различными системами кэширования
в приложении. Поддерживает базовые операции CRUD для кэша.`},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**Версия:** 1.0.0`},{heading:`get`,content:`**Описание:** Получает значение из кэша по ключу`},{heading:`get`,content:`**Параметры:**`},{heading:`get`,content:"`$key` (string): Ключ кэша"},{heading:`get`,content:"**Возвращает:** `mixed|null` Значение из кэша или null если не найдено"},{heading:`set`,content:`**Описание:** Сохраняет значение в кэш`},{heading:`set`,content:`**Параметры:**`},{heading:`set`,content:"`$key` (string): Ключ кэша"},{heading:`set`,content:"`$value` (mixed): Значение для сохранения"},{heading:`set`,content:"`$ttl` (int): Время жизни в секундах"},{heading:`set`,content:"**Возвращает:** `bool True` при успешном сохранении"},{heading:`delete`,content:`**Описание:** Удаляет значение из кэша`},{heading:`delete`,content:`**Параметры:**`},{heading:`delete`,content:"`$key` (string): Ключ кэша"},{heading:`delete`,content:"**Возвращает:** `bool True` при успешном удалении"},{heading:`has`,content:`**Описание:** Проверяет наличие ключа в кэше`},{heading:`has`,content:`**Параметры:**`},{heading:`has`,content:"`$key` (string): Ключ кэша"},{heading:`has`,content:"**Возвращает:** `bool True` если ключ существует"},{heading:`clear`,content:`**Описание:** Очищает весь кэш`},{heading:`clear`,content:"**Возвращает:** `bool True` при успешной очистке"},{heading:`getmultiple`,content:`**Описание:** Получает множественные значения по ключам`},{heading:`getmultiple`,content:`**Параметры:**`},{heading:`getmultiple`,content:"`$keys` (array\\<string>): Массив ключей"},{heading:`getmultiple`,content:"**Возвращает:** `array<string, mixed>` Ассоциативный массив ключ => значение"},{heading:`setmultiple`,content:`**Описание:** Сохраняет множественные значения`},{heading:`setmultiple`,content:`**Параметры:**`},{heading:`setmultiple`,content:"`$ttl` (int): Время жизни в секундах"},{heading:`setmultiple`,content:"**Возвращает:** `bool True` при успешном сохранении"}],headings:[{id:`get`,content:"`get()`"},{id:`set`,content:"`set()`"},{id:`delete`,content:"`delete()`"},{id:`has`,content:"`has()`"},{id:`clear`,content:"`clear()`"},{id:`getmultiple`,content:"`getMultiple()`"},{id:`setmultiple`,content:"`setMultiple()`"}]},s=[{depth:2,url:`#get`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`get()`})})},{depth:2,url:`#set`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`set()`})})},{depth:2,url:`#delete`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`delete()`})})},{depth:2,url:`#has`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`has()`})})},{depth:2,url:`#clear`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`clear()`})})},{depth:2,url:`#getmultiple`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getMultiple()`})})},{depth:2,url:`#setmultiple`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`setMultiple()`})})}];function c(e){let t={code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Интерфейс для сервиса кэширования
Определяет контракт для работы с различными системами кэширования
в приложении. Поддерживает базовые операции CRUD для кэша.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Версия:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.h2,{id:`get`,children:(0,n.jsx)(t.code,{children:`get()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает значение из кэша по ключу`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ кэша`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`mixed|null`}),` Значение из кэша или null если не найдено`]}),`
`,(0,n.jsx)(t.h2,{id:`set`,children:(0,n.jsx)(t.code,{children:`set()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сохраняет значение в кэш`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ кэша`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$value`}),` (mixed): Значение для сохранения`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ttl`}),` (int): Время жизни в секундах`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` при успешном сохранении`]}),`
`,(0,n.jsx)(t.h2,{id:`delete`,children:(0,n.jsx)(t.code,{children:`delete()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Удаляет значение из кэша`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ кэша`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` при успешном удалении`]}),`
`,(0,n.jsx)(t.h2,{id:`has`,children:(0,n.jsx)(t.code,{children:`has()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Проверяет наличие ключа в кэше`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$key`}),` (string): Ключ кэша`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` если ключ существует`]}),`
`,(0,n.jsx)(t.h2,{id:`clear`,children:(0,n.jsx)(t.code,{children:`clear()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Очищает весь кэш`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` при успешной очистке`]}),`
`,(0,n.jsx)(t.h2,{id:`getmultiple`,children:(0,n.jsx)(t.code,{children:`getMultiple()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Получает множественные значения по ключам`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$keys`}),` (array<string>): Массив ключей`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string, mixed>`}),` Ассоциативный массив ключ => значение`]}),`
`,(0,n.jsx)(t.h2,{id:`setmultiple`,children:(0,n.jsx)(t.code,{children:`setMultiple()`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Сохраняет множественные значения`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$ttl`}),` (int): Время жизни в секундах`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool True`}),` при успешном сохранении`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};