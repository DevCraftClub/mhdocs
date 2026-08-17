import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: AdminLink`,description:`Документация по плагину класс: adminlink для DLE.`},i=new Date(1786951824e3),a=`

## Краткое содержание: [#краткое-содержание]

Класс \`AdminLink\` реализует функциональность для создания и управления административными ссылками,
включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры.

## Описание: [#описание]

Содержит методы для установки и получения атрибутов ссылки, а также для манипуляции дочерними элементами,
такими как добавление, установка и рекурсивное построение иерархии.

Основные свойства включают:

* \`$parent\` – идентификатор родительского элемента.
* \`$name\` – имя ссылки.
* \`$link\` – URL-адрес.
* \`$type\` – тип элемента (например, 'link', 'dropdown').
* \`$extra\` – дополнительные параметры.
* \`$children\` – массив дочерних элементов.

***

### Свойства [#свойства]

* private $[children](#property_children)
* private $[extra](#property_extra)
* private $[link](#property_link)
* private $[name](#property_name)
* private $[parent](#property_parent)
* private $[type](#property_type)

***

### Методы [#методы]

* public [\\_\\_construct()](#method___construct)
* public [addChild()](#method_addChild)
* public [getChildren()](#method_getChildren)
* public [getExtra()](#method_getExtra)
* public [getLink()](#method_getLink)
* public [getName()](#method_getName)
* public [getParent()](#method_getParent)
* public [getType()](#method_getType)
* public [setChildren()](#method_setChildren)
* public [setExtra()](#method_setExtra)
* public [setLink()](#method_setLink)
* public [setName()](#method_setName)
* public [setParent()](#method_setParent)
* public [setType()](#method_setType)

***

### Подробности [#подробности]

* Путь: \`engine/inc/maharder/_includes/types/AdminLink.php\`

***

## Свойства [#свойства-1]

<span id="property_children" />

#### private $children : array [#private-children--array]

***

**Тип:** <abbr title="array">Массив</abbr>

Список дочерних элементов. Устанавливается через метод [\\AdminLink::setChildren()](#method_setChildren).

<span id="property_extra" />

#### private $extra : ?string [#private-extra--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

Дополнительная информация. Устанавливается через метод [\\AdminLink::setExtra()](#method_setExtra)
и фильтруется с помощью FILTER\\_SANITIZE\\_FULL\\_SPECIAL\\_CHARS.

<span id="property_link" />

#### private $link : ?string [#private-link--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

URL ссылки. Устанавливается через метод [\\AdminLink::setLink()](#method_setLink)
и валидируется с помощью FILTER\\_VALIDATE\\_URL.

<span id="property_name" />

#### private $name : ?string [#private-name--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

Имя ссылки. Устанавливается через метод [\\AdminLink::setName()](#method_setName)
и фильтруется с помощью FILTER\\_SANITIZE\\_FULL\\_SPECIAL\\_CHARS.

<span id="property_parent" />

#### private $parent : ?string [#private-parent--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

Родительский элемент. Устанавливается через метод [\\AdminLink::setParent()](#method_setParent).

<span id="property_type" />

#### private $type : ?string [#private-type--string]

***

**Тип:** <abbr title="?string">Текст или null</abbr>

Тип ссылки. Устанавливается через метод [\\AdminLink::setType()](#method_setType).
Ожидаемые значения: 'link', 'dropdown', 'divider', 'data'.
По умолчанию: 'link'.

***

## Методы [#методы-1]

<span id="method___construct" />

### \\_\\_construct [#__construct]

\`\`\`
public __construct(string|null  parent = null, string|null  name = null, string|null  link = null, string|null  type = null, string|null  extra = null, array  children = []) : mixed
\`\`\`

##### Краткое содержание [#краткое-содержание-1]

Конструктор класса AdminLink.

##### Описание [#описание-1]

Инициализирует объект с переданными параметрами, вызывая соответствующие
методы установки свойств.

##### Смотри так-же: [#смотри-так-же]

* [\\AdminLink::setParent()](#method_setParent)
* [\\AdminLink::setName()](#method_setName)
* [\\AdminLink::setLink()](#method_setLink)
* [\\AdminLink::setType()](#method_setType)
* [\\AdminLink::setExtra()](#method_setExtra)
* [\\AdminLink::setChildren()](#method_setChildren)

##### Свойства: [#свойства-2]

| Название      | Тип          | По умолчанию |
| ------------- | ------------ | ------------ |
| **$parent**   | string\\|null | null         |
| **$name**     | string\\|null | null         |
| **$link**     | string\\|null | null         |
| **$type**     | string\\|null | null         |
| **$extra**    | string\\|null | null         |
| **$children** | array        | \\[]          |

##### Возвращает: [#возвращает]

\`\`\`
mixed
\`\`\`

***

<span id="method_addChild" />

### addChild [#addchild]

\`\`\`
public addChild(\\AdminLink  link) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-2]

Добавляет дочернюю ссылку к текущему объекту \`AdminLink\`.

##### Описание [#описание-2]

Если переданная ссылка имеет родительский идентификатор (\`parentId\`), проверяется, существует ли такой
дочерний элемент у текущего объекта. В случае его существования вызов метода продолжается рекурсивно
для добавления дочерней ссылки. Если дочерний элемент отсутствует, ссылка добавляется как новый дочерний элемент.
Если у переданной ссылки нет родительского идентификатора, она добавляется в общий список дочерних элементов.

##### Смотри так-же: [#смотри-так-же-1]

* [\\AdminLink::getParent()](#method_getParent)
* [\\AdminLink::getChildren()](#method_getChildren)

##### Свойства: [#свойства-3]

| Название  | Тип        | По умолчанию |
| --------- | ---------- | ------------ |
| **$link** | \\AdminLink |              |

##### Возвращает: [#возвращает-1]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр \`AdminLink\` для возможности дальнейшей цепочки вызовов.

***

<span id="method_getChildren" />

### getChildren [#getchildren]

\`\`\`
public getChildren() : array
\`\`\`

##### Краткое содержание [#краткое-содержание-3]

Возвращает массив детей текущего объекта.

##### Смотри так-же: [#смотри-так-же-2]

* [\\AdminLink::$children](#property_children)
* [\\AdminLink::setChildren()](#method_setChildren)

##### Возвращает: [#возвращает-2]

\`\`\`
array
\`\`\`

Список объектов, являющихся потомками текущего объекта.

***

<span id="method_getExtra" />

### getExtra [#getextra]

\`\`\`
public getExtra() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-4]

Возвращает значение дополнительного параметра.

##### Возвращает: [#возвращает-3]

\`\`\`
string|null
\`\`\`

Дополнительный параметр или null, если он не установлен.

***

<span id="method_getLink" />

### getLink [#getlink]

\`\`\`
public getLink() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-5]

Возвращает значение свойства ссылки.

##### Смотри так-же: [#смотри-так-же-3]

* [\\AdminLink::setLink()](#method_setLink)

##### Возвращает: [#возвращает-4]

\`\`\`
string|null
\`\`\`

Вернётся строка с URL или \`null\`, если ссылка не установлена.

***

<span id="method_getName" />

### getName [#getname]

\`\`\`
public getName() : ?string
\`\`\`

##### Возвращает: [#возвращает-5]

\`\`\`
?string
\`\`\`

***

<span id="method_getParent" />

### getParent [#getparent]

\`\`\`
public getParent() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-6]

Возвращает идентификатор родителя текущего объекта AdminLink.

##### Возвращает: [#возвращает-6]

\`\`\`
string|null
\`\`\`

Идентификатор родителя или null, если родитель не установлен.

***

<span id="method_getType" />

### getType [#gettype]

\`\`\`
public getType() : string|null
\`\`\`

##### Краткое содержание [#краткое-содержание-7]

Возвращает текущий тип элемента.

##### Описание [#описание-3]

Тип может принимать следующие значения: 'link', 'dropdown', 'divider', 'data',
или null, если он не был установлен.

##### Смотри так-же: [#смотри-так-же-4]

* [\\AdminLink::setType()](#method_setType)
* [\\AdminLink::$type](#property_type)

##### Возвращает: [#возвращает-7]

\`\`\`
string|null
\`\`\`

Текущий тип элемента или null, если тип не задан.

***

<span id="method_setChildren" />

### setChildren [#setchildren]

\`\`\`
public setChildren(array  children) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-8]

Устанавливает массив дочерних элементов для текущего объекта.

##### Описание [#описание-4]

Этот метод заменяет существующий массив дочерних элементов переданным массивом.

##### Смотри так-же: [#смотри-так-же-5]

* [\\AdminLink::getChildren()](#method_getChildren)
* [\\AdminLink::addChild()](#method_addChild)

##### Свойства: [#свойства-4]

| Название      | Тип   | По умолчанию |
| ------------- | ----- | ------------ |
| **$children** | array |              |

##### Возвращает: [#возвращает-8]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр класса для возможности цепочки вызовов.

***

<span id="method_setExtra" />

### setExtra [#setextra]

\`\`\`
public setExtra(string|null  extra) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-9]

Устанавливает значение дополнительного параметра и применяет фильтрацию.

##### Свойства: [#свойства-5]

| Название   | Тип          | По умолчанию |
| ---------- | ------------ | ------------ |
| **$extra** | string\\|null |              |

##### Возвращает: [#возвращает-9]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр класса для цепочки вызовов.

***

<span id="method_setLink" />

### setLink [#setlink]

\`\`\`
public setLink(string|null  link) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-10]

Устанавливает URL-ссылку для текущего объекта класса \`AdminLink\`.

##### Описание [#описание-5]

Метод проверяет переданную строку на соответствие формату URL с использованием фильтрации через \\{@see}.
Если переданное значение не является допустимым URL, оно будет проигнорировано.

##### Смотри так-же: [#смотри-так-же-6]

* [\\AdminLink::$link](#property_link)
* [\\AdminLink::getLink()](#method_getLink)

##### Свойства: [#свойства-6]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$link** | string\\|null |              |

##### Возвращает: [#возвращает-10]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр объекта \`AdminLink\` для возможности цепочки вызовов.

***

<span id="method_setName" />

### setName [#setname]

\`\`\`
public setName(string|null  name) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-11]

Устанавливает название ссылки после фильтрации входного значения.

##### Свойства: [#свойства-7]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$name** | string\\|null |              |

##### Возвращает: [#возвращает-11]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр класса AdminLink.

***

<span id="method_setParent" />

### setParent [#setparent]

\`\`\`
public setParent(string|null  parent) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-12]

Устанавливает родительский идентификатор для ссылки.

##### Свойства: [#свойства-8]

| Название    | Тип          | По умолчанию |
| ----------- | ------------ | ------------ |
| **$parent** | string\\|null |              |

##### Возвращает: [#возвращает-12]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр класса для цепочки вызовов.

***

<span id="method_setType" />

### setType [#settype]

\`\`\`
public setType(string|null  type) : \\AdminLink
\`\`\`

##### Краткое содержание [#краткое-содержание-13]

Устанавливает тип текущего объекта \`AdminLink\`.

##### Описание [#описание-6]

Метод позволяет задать тип ссылки из набора допустимых значений.
Если значение передано и соответствует одному из допустимых значений,
оно будет установлено в соответствующее свойство объекта.

##### Смотри так-же: [#смотри-так-же-7]

* [\\AdminLink::$type](#property_type)
* [\\AdminLink::getType()](#method_getType)

##### Свойства: [#свойства-9]

| Название  | Тип          | По умолчанию |
| --------- | ------------ | ------------ |
| **$type** | string\\|null |              |

##### Возвращает: [#возвращает-13]

\`\`\`
\\AdminLink
\`\`\`

Возвращает текущий экземпляр \`AdminLink\` для возможности цепочки вызовов.
`,o={contents:[{heading:`краткое-содержание`,content:"Класс `AdminLink` реализует функциональность для создания и управления административными ссылками,\nвключая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры."},{heading:`описание`,content:`Содержит методы для установки и получения атрибутов ссылки, а также для манипуляции дочерними элементами,
такими как добавление, установка и рекурсивное построение иерархии.`},{heading:`описание`,content:`Основные свойства включают:`},{heading:`описание`,content:"`$parent` – идентификатор родительского элемента."},{heading:`описание`,content:"`$name` – имя ссылки."},{heading:`описание`,content:"`$link` – URL-адрес."},{heading:`описание`,content:"`$type` – тип элемента (например, 'link', 'dropdown')."},{heading:`описание`,content:"`$extra` – дополнительные параметры."},{heading:`описание`,content:"`$children` – массив дочерних элементов."},{heading:`свойства`,content:`private $children`},{heading:`свойства`,content:`private $extra`},{heading:`свойства`,content:`private $link`},{heading:`свойства`,content:`private $name`},{heading:`свойства`,content:`private $parent`},{heading:`свойства`,content:`private $type`},{heading:`методы`,content:`public \\_\\_construct()`},{heading:`методы`,content:`public addChild()`},{heading:`методы`,content:`public getChildren()`},{heading:`методы`,content:`public getExtra()`},{heading:`методы`,content:`public getLink()`},{heading:`методы`,content:`public getName()`},{heading:`методы`,content:`public getParent()`},{heading:`методы`,content:`public getType()`},{heading:`методы`,content:`public setChildren()`},{heading:`методы`,content:`public setExtra()`},{heading:`методы`,content:`public setLink()`},{heading:`методы`,content:`public setName()`},{heading:`методы`,content:`public setParent()`},{heading:`методы`,content:`public setType()`},{heading:`подробности`,content:"Путь: `engine/inc/maharder/_includes/types/AdminLink.php`"},{heading:`private-children--array`,content:`**Тип:** Массив`},{heading:`private-children--array`,content:`Список дочерних элементов. Устанавливается через метод \\AdminLink::setChildren().`},{heading:`private-extra--string`,content:`**Тип:** Текст или null`},{heading:`private-extra--string`,content:`Дополнительная информация. Устанавливается через метод \\AdminLink::setExtra()
и фильтруется с помощью FILTER\\_SANITIZE\\_FULL\\_SPECIAL\\_CHARS.`},{heading:`private-link--string`,content:`**Тип:** Текст или null`},{heading:`private-link--string`,content:`URL ссылки. Устанавливается через метод \\AdminLink::setLink()
и валидируется с помощью FILTER\\_VALIDATE\\_URL.`},{heading:`private-name--string`,content:`**Тип:** Текст или null`},{heading:`private-name--string`,content:`Имя ссылки. Устанавливается через метод \\AdminLink::setName()
и фильтруется с помощью FILTER\\_SANITIZE\\_FULL\\_SPECIAL\\_CHARS.`},{heading:`private-parent--string`,content:`**Тип:** Текст или null`},{heading:`private-parent--string`,content:`Родительский элемент. Устанавливается через метод \\AdminLink::setParent().`},{heading:`private-type--string`,content:`**Тип:** Текст или null`},{heading:`private-type--string`,content:`Тип ссылки. Устанавливается через метод \\AdminLink::setType().
Ожидаемые значения: 'link', 'dropdown', 'divider', 'data'.
По умолчанию: 'link'.`},{heading:`краткое-содержание-1`,content:`Конструктор класса AdminLink.`},{heading:`описание-1`,content:`Инициализирует объект с переданными параметрами, вызывая соответствующие
методы установки свойств.`},{heading:`смотри-так-же`,content:`\\AdminLink::setParent()`},{heading:`смотри-так-же`,content:`\\AdminLink::setName()`},{heading:`смотри-так-же`,content:`\\AdminLink::setLink()`},{heading:`смотри-так-же`,content:`\\AdminLink::setType()`},{heading:`смотри-так-же`,content:`\\AdminLink::setExtra()`},{heading:`смотри-так-же`,content:`\\AdminLink::setChildren()`},{heading:`свойства-2`,content:`Название`},{heading:`свойства-2`,content:`Тип`},{heading:`свойства-2`,content:`По умолчанию`},{heading:`свойства-2`,content:`**$parent**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`null`},{heading:`свойства-2`,content:`**$name**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`null`},{heading:`свойства-2`,content:`**$link**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`null`},{heading:`свойства-2`,content:`**$type**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`null`},{heading:`свойства-2`,content:`**$extra**`},{heading:`свойства-2`,content:`string\\|null`},{heading:`свойства-2`,content:`null`},{heading:`свойства-2`,content:`**$children**`},{heading:`свойства-2`,content:`array`},{heading:`свойства-2`,content:`\\[]`},{heading:`краткое-содержание-2`,content:"Добавляет дочернюю ссылку к текущему объекту `AdminLink`."},{heading:`описание-2`,content:`Если переданная ссылка имеет родительский идентификатор (\`parentId\`), проверяется, существует ли такой
дочерний элемент у текущего объекта. В случае его существования вызов метода продолжается рекурсивно
для добавления дочерней ссылки. Если дочерний элемент отсутствует, ссылка добавляется как новый дочерний элемент.
Если у переданной ссылки нет родительского идентификатора, она добавляется в общий список дочерних элементов.`},{heading:`смотри-так-же-1`,content:`\\AdminLink::getParent()`},{heading:`смотри-так-же-1`,content:`\\AdminLink::getChildren()`},{heading:`свойства-3`,content:`Название`},{heading:`свойства-3`,content:`Тип`},{heading:`свойства-3`,content:`По умолчанию`},{heading:`свойства-3`,content:`**$link**`},{heading:`свойства-3`,content:`\\AdminLink`},{heading:`возвращает-1`,content:"Возвращает текущий экземпляр `AdminLink` для возможности дальнейшей цепочки вызовов."},{heading:`краткое-содержание-3`,content:`Возвращает массив детей текущего объекта.`},{heading:`смотри-так-же-2`,content:`\\AdminLink::$children`},{heading:`смотри-так-же-2`,content:`\\AdminLink::setChildren()`},{heading:`возвращает-2`,content:`Список объектов, являющихся потомками текущего объекта.`},{heading:`краткое-содержание-4`,content:`Возвращает значение дополнительного параметра.`},{heading:`возвращает-3`,content:`Дополнительный параметр или null, если он не установлен.`},{heading:`краткое-содержание-5`,content:`Возвращает значение свойства ссылки.`},{heading:`смотри-так-же-3`,content:`\\AdminLink::setLink()`},{heading:`возвращает-4`,content:"Вернётся строка с URL или `null`, если ссылка не установлена."},{heading:`краткое-содержание-6`,content:`Возвращает идентификатор родителя текущего объекта AdminLink.`},{heading:`возвращает-6`,content:`Идентификатор родителя или null, если родитель не установлен.`},{heading:`краткое-содержание-7`,content:`Возвращает текущий тип элемента.`},{heading:`описание-3`,content:`Тип может принимать следующие значения: 'link', 'dropdown', 'divider', 'data',
или null, если он не был установлен.`},{heading:`смотри-так-же-4`,content:`\\AdminLink::setType()`},{heading:`смотри-так-же-4`,content:`\\AdminLink::$type`},{heading:`возвращает-7`,content:`Текущий тип элемента или null, если тип не задан.`},{heading:`краткое-содержание-8`,content:`Устанавливает массив дочерних элементов для текущего объекта.`},{heading:`описание-4`,content:`Этот метод заменяет существующий массив дочерних элементов переданным массивом.`},{heading:`смотри-так-же-5`,content:`\\AdminLink::getChildren()`},{heading:`смотри-так-же-5`,content:`\\AdminLink::addChild()`},{heading:`свойства-4`,content:`Название`},{heading:`свойства-4`,content:`Тип`},{heading:`свойства-4`,content:`По умолчанию`},{heading:`свойства-4`,content:`**$children**`},{heading:`свойства-4`,content:`array`},{heading:`возвращает-8`,content:`Возвращает текущий экземпляр класса для возможности цепочки вызовов.`},{heading:`краткое-содержание-9`,content:`Устанавливает значение дополнительного параметра и применяет фильтрацию.`},{heading:`свойства-5`,content:`Название`},{heading:`свойства-5`,content:`Тип`},{heading:`свойства-5`,content:`По умолчанию`},{heading:`свойства-5`,content:`**$extra**`},{heading:`свойства-5`,content:`string\\|null`},{heading:`возвращает-9`,content:`Возвращает текущий экземпляр класса для цепочки вызовов.`},{heading:`краткое-содержание-10`,content:"Устанавливает URL-ссылку для текущего объекта класса `AdminLink`."},{heading:`описание-5`,content:`Метод проверяет переданную строку на соответствие формату URL с использованием фильтрации через \\{@see}.
Если переданное значение не является допустимым URL, оно будет проигнорировано.`},{heading:`смотри-так-же-6`,content:`\\AdminLink::$link`},{heading:`смотри-так-же-6`,content:`\\AdminLink::getLink()`},{heading:`свойства-6`,content:`Название`},{heading:`свойства-6`,content:`Тип`},{heading:`свойства-6`,content:`По умолчанию`},{heading:`свойства-6`,content:`**$link**`},{heading:`свойства-6`,content:`string\\|null`},{heading:`возвращает-10`,content:"Возвращает текущий экземпляр объекта `AdminLink` для возможности цепочки вызовов."},{heading:`краткое-содержание-11`,content:`Устанавливает название ссылки после фильтрации входного значения.`},{heading:`свойства-7`,content:`Название`},{heading:`свойства-7`,content:`Тип`},{heading:`свойства-7`,content:`По умолчанию`},{heading:`свойства-7`,content:`**$name**`},{heading:`свойства-7`,content:`string\\|null`},{heading:`возвращает-11`,content:`Возвращает текущий экземпляр класса AdminLink.`},{heading:`краткое-содержание-12`,content:`Устанавливает родительский идентификатор для ссылки.`},{heading:`свойства-8`,content:`Название`},{heading:`свойства-8`,content:`Тип`},{heading:`свойства-8`,content:`По умолчанию`},{heading:`свойства-8`,content:`**$parent**`},{heading:`свойства-8`,content:`string\\|null`},{heading:`возвращает-12`,content:`Возвращает текущий экземпляр класса для цепочки вызовов.`},{heading:`краткое-содержание-13`,content:"Устанавливает тип текущего объекта `AdminLink`."},{heading:`описание-6`,content:`Метод позволяет задать тип ссылки из набора допустимых значений.
Если значение передано и соответствует одному из допустимых значений,
оно будет установлено в соответствующее свойство объекта.`},{heading:`смотри-так-же-7`,content:`\\AdminLink::$type`},{heading:`смотри-так-же-7`,content:`\\AdminLink::getType()`},{heading:`свойства-9`,content:`Название`},{heading:`свойства-9`,content:`Тип`},{heading:`свойства-9`,content:`По умолчанию`},{heading:`свойства-9`,content:`**$type**`},{heading:`свойства-9`,content:`string\\|null`},{heading:`возвращает-13`,content:"Возвращает текущий экземпляр `AdminLink` для возможности цепочки вызовов."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`описание`,content:`Описание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`свойства-1`,content:`Свойства`},{id:`private-children--array`,content:`private $children : array`},{id:`private-extra--string`,content:`private $extra : ?string`},{id:`private-link--string`,content:`private $link : ?string`},{id:`private-name--string`,content:`private $name : ?string`},{id:`private-parent--string`,content:`private $parent : ?string`},{id:`private-type--string`,content:`private $type : ?string`},{id:`методы-1`,content:`Методы`},{id:`__construct`,content:`\\__construct`},{id:`краткое-содержание-1`,content:`Краткое содержание`},{id:`описание-1`,content:`Описание`},{id:`смотри-так-же`,content:`Смотри так-же:`},{id:`свойства-2`,content:`Свойства:`},{id:`возвращает`,content:`Возвращает:`},{id:`addchild`,content:`addChild`},{id:`краткое-содержание-2`,content:`Краткое содержание`},{id:`описание-2`,content:`Описание`},{id:`смотри-так-же-1`,content:`Смотри так-же:`},{id:`свойства-3`,content:`Свойства:`},{id:`возвращает-1`,content:`Возвращает:`},{id:`getchildren`,content:`getChildren`},{id:`краткое-содержание-3`,content:`Краткое содержание`},{id:`смотри-так-же-2`,content:`Смотри так-же:`},{id:`возвращает-2`,content:`Возвращает:`},{id:`getextra`,content:`getExtra`},{id:`краткое-содержание-4`,content:`Краткое содержание`},{id:`возвращает-3`,content:`Возвращает:`},{id:`getlink`,content:`getLink`},{id:`краткое-содержание-5`,content:`Краткое содержание`},{id:`смотри-так-же-3`,content:`Смотри так-же:`},{id:`возвращает-4`,content:`Возвращает:`},{id:`getname`,content:`getName`},{id:`возвращает-5`,content:`Возвращает:`},{id:`getparent`,content:`getParent`},{id:`краткое-содержание-6`,content:`Краткое содержание`},{id:`возвращает-6`,content:`Возвращает:`},{id:`gettype`,content:`getType`},{id:`краткое-содержание-7`,content:`Краткое содержание`},{id:`описание-3`,content:`Описание`},{id:`смотри-так-же-4`,content:`Смотри так-же:`},{id:`возвращает-7`,content:`Возвращает:`},{id:`setchildren`,content:`setChildren`},{id:`краткое-содержание-8`,content:`Краткое содержание`},{id:`описание-4`,content:`Описание`},{id:`смотри-так-же-5`,content:`Смотри так-же:`},{id:`свойства-4`,content:`Свойства:`},{id:`возвращает-8`,content:`Возвращает:`},{id:`setextra`,content:`setExtra`},{id:`краткое-содержание-9`,content:`Краткое содержание`},{id:`свойства-5`,content:`Свойства:`},{id:`возвращает-9`,content:`Возвращает:`},{id:`setlink`,content:`setLink`},{id:`краткое-содержание-10`,content:`Краткое содержание`},{id:`описание-5`,content:`Описание`},{id:`смотри-так-же-6`,content:`Смотри так-же:`},{id:`свойства-6`,content:`Свойства:`},{id:`возвращает-10`,content:`Возвращает:`},{id:`setname`,content:`setName`},{id:`краткое-содержание-11`,content:`Краткое содержание`},{id:`свойства-7`,content:`Свойства:`},{id:`возвращает-11`,content:`Возвращает:`},{id:`setparent`,content:`setParent`},{id:`краткое-содержание-12`,content:`Краткое содержание`},{id:`свойства-8`,content:`Свойства:`},{id:`возвращает-12`,content:`Возвращает:`},{id:`settype`,content:`setType`},{id:`краткое-содержание-13`,content:`Краткое содержание`},{id:`описание-6`,content:`Описание`},{id:`смотри-так-же-7`,content:`Смотри так-же:`},{id:`свойства-9`,content:`Свойства:`},{id:`возвращает-13`,content:`Возвращает:`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:2,url:`#описание`,title:(0,n.jsx)(n.Fragment,{children:`Описание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#private-children--array`,title:(0,n.jsx)(n.Fragment,{children:`private $children : array`})},{depth:4,url:`#private-extra--string`,title:(0,n.jsx)(n.Fragment,{children:`private $extra : ?string`})},{depth:4,url:`#private-link--string`,title:(0,n.jsx)(n.Fragment,{children:`private $link : ?string`})},{depth:4,url:`#private-name--string`,title:(0,n.jsx)(n.Fragment,{children:`private $name : ?string`})},{depth:4,url:`#private-parent--string`,title:(0,n.jsx)(n.Fragment,{children:`private $parent : ?string`})},{depth:4,url:`#private-type--string`,title:(0,n.jsx)(n.Fragment,{children:`private $type : ?string`})},{depth:2,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__construct`,title:(0,n.jsx)(n.Fragment,{children:`__construct`})},{depth:5,url:`#краткое-содержание-1`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-1`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-2`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#addchild`,title:(0,n.jsx)(n.Fragment,{children:`addChild`})},{depth:5,url:`#краткое-содержание-2`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-2`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-1`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-3`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-1`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getchildren`,title:(0,n.jsx)(n.Fragment,{children:`getChildren`})},{depth:5,url:`#краткое-содержание-3`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-2`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-2`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getextra`,title:(0,n.jsx)(n.Fragment,{children:`getExtra`})},{depth:5,url:`#краткое-содержание-4`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-3`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getlink`,title:(0,n.jsx)(n.Fragment,{children:`getLink`})},{depth:5,url:`#краткое-содержание-5`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#смотри-так-же-3`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-4`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getname`,title:(0,n.jsx)(n.Fragment,{children:`getName`})},{depth:5,url:`#возвращает-5`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#getparent`,title:(0,n.jsx)(n.Fragment,{children:`getParent`})},{depth:5,url:`#краткое-содержание-6`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#возвращает-6`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#gettype`,title:(0,n.jsx)(n.Fragment,{children:`getType`})},{depth:5,url:`#краткое-содержание-7`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-3`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-4`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#возвращает-7`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setchildren`,title:(0,n.jsx)(n.Fragment,{children:`setChildren`})},{depth:5,url:`#краткое-содержание-8`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-4`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-5`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-4`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-8`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setextra`,title:(0,n.jsx)(n.Fragment,{children:`setExtra`})},{depth:5,url:`#краткое-содержание-9`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-5`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-9`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setlink`,title:(0,n.jsx)(n.Fragment,{children:`setLink`})},{depth:5,url:`#краткое-содержание-10`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-5`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-6`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-6`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-10`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setname`,title:(0,n.jsx)(n.Fragment,{children:`setName`})},{depth:5,url:`#краткое-содержание-11`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-7`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-11`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#setparent`,title:(0,n.jsx)(n.Fragment,{children:`setParent`})},{depth:5,url:`#краткое-содержание-12`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#свойства-8`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-12`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})},{depth:3,url:`#settype`,title:(0,n.jsx)(n.Fragment,{children:`setType`})},{depth:5,url:`#краткое-содержание-13`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание`})},{depth:5,url:`#описание-6`,title:(0,n.jsx)(n.Fragment,{children:`Описание`})},{depth:5,url:`#смотри-так-же-7`,title:(0,n.jsx)(n.Fragment,{children:`Смотри так-же:`})},{depth:5,url:`#свойства-9`,title:(0,n.jsx)(n.Fragment,{children:`Свойства:`})},{depth:5,url:`#возвращает-13`,title:(0,n.jsx)(n.Fragment,{children:`Возвращает:`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,h5:`h5`,hr:`hr`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsxs)(t.p,{children:[`Класс `,(0,n.jsx)(t.code,{children:`AdminLink`}),` реализует функциональность для создания и управления административными ссылками,
включая родительские связи, дочерние элементы, типы ссылок и дополнительные параметры.`]}),`
`,(0,n.jsx)(t.h2,{id:`описание`,children:`Описание:`}),`
`,(0,n.jsx)(t.p,{children:`Содержит методы для установки и получения атрибутов ссылки, а также для манипуляции дочерними элементами,
такими как добавление, установка и рекурсивное построение иерархии.`}),`
`,(0,n.jsx)(t.p,{children:`Основные свойства включают:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$parent`}),` – идентификатор родительского элемента.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$name`}),` – имя ссылки.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$link`}),` – URL-адрес.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$type`}),` – тип элемента (например, 'link', 'dropdown').`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$extra`}),` – дополнительные параметры.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$children`}),` – массив дочерних элементов.`]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_children`,children:`children`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_extra`,children:`extra`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_link`,children:`link`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_name`,children:`name`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_parent`,children:`parent`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_type`,children:`type`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method___construct`,children:`__construct()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_addChild`,children:`addChild()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getChildren`,children:`getChildren()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getExtra`,children:`getExtra()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLink`,children:`getLink()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getName`,children:`getName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getParent`,children:`getParent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getType`,children:`getType()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setChildren`,children:`setChildren()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setExtra`,children:`setExtra()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLink`,children:`setLink()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setName`,children:`setName()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setParent`,children:`setParent()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setType`,children:`setType()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/_includes/types/AdminLink.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_children`}),`
`,(0,n.jsx)(t.h4,{id:`private-children--array`,children:`private $children : array`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`array`,children:`Массив`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Список дочерних элементов. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setChildren`,children:`\\AdminLink::setChildren()`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`property_extra`}),`
`,(0,n.jsx)(t.h4,{id:`private-extra--string`,children:`private $extra : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Дополнительная информация. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setExtra`,children:`\\AdminLink::setExtra()`}),`
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.`]}),`
`,(0,n.jsx)(`span`,{id:`property_link`}),`
`,(0,n.jsx)(t.h4,{id:`private-link--string`,children:`private $link : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.p,{children:[`URL ссылки. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setLink`,children:`\\AdminLink::setLink()`}),`
и валидируется с помощью FILTER_VALIDATE_URL.`]}),`
`,(0,n.jsx)(`span`,{id:`property_name`}),`
`,(0,n.jsx)(t.h4,{id:`private-name--string`,children:`private $name : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Имя ссылки. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setName`,children:`\\AdminLink::setName()`}),`
и фильтруется с помощью FILTER_SANITIZE_FULL_SPECIAL_CHARS.`]}),`
`,(0,n.jsx)(`span`,{id:`property_parent`}),`
`,(0,n.jsx)(t.h4,{id:`private-parent--string`,children:`private $parent : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Родительский элемент. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setParent`,children:`\\AdminLink::setParent()`}),`.`]}),`
`,(0,n.jsx)(`span`,{id:`property_type`}),`
`,(0,n.jsx)(t.h4,{id:`private-type--string`,children:`private $type : ?string`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Тип:`}),` `,(0,n.jsx)(`abbr`,{title:`?string`,children:`Текст или null`})]}),`
`,(0,n.jsxs)(t.p,{children:[`Тип ссылки. Устанавливается через метод `,(0,n.jsx)(t.a,{href:`#method_setType`,children:`\\AdminLink::setType()`}),`.
Ожидаемые значения: 'link', 'dropdown', 'divider', 'data'.
По умолчанию: 'link'.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method___construct`}),`
`,(0,n.jsx)(t.h3,{id:`__construct`,children:`__construct`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public __construct(string|null  parent = null, string|null  name = null, string|null  link = null, string|null  type = null, string|null  extra = null, array  children = []) : mixed`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-1`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Конструктор класса AdminLink.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-1`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Инициализирует объект с переданными параметрами, вызывая соответствующие
методы установки свойств.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setParent`,children:`\\AdminLink::setParent()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setName`,children:`\\AdminLink::setName()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setLink`,children:`\\AdminLink::setLink()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setType`,children:`\\AdminLink::setType()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setExtra`,children:`\\AdminLink::setExtra()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setChildren`,children:`\\AdminLink::setChildren()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-2`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parent`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$link`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$extra`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{children:`null`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$children`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{children:`[]`})]})]})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`mixed`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_addChild`}),`
`,(0,n.jsx)(t.h3,{id:`addchild`,children:`addChild`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public addChild(\\AdminLink  link) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-2`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Добавляет дочернюю ссылку к текущему объекту `,(0,n.jsx)(t.code,{children:`AdminLink`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-2`,children:`Описание`}),`
`,(0,n.jsxs)(t.p,{children:[`Если переданная ссылка имеет родительский идентификатор (`,(0,n.jsx)(t.code,{children:`parentId`}),`), проверяется, существует ли такой
дочерний элемент у текущего объекта. В случае его существования вызов метода продолжается рекурсивно
для добавления дочерней ссылки. Если дочерний элемент отсутствует, ссылка добавляется как новый дочерний элемент.
Если у переданной ссылки нет родительского идентификатора, она добавляется в общий список дочерних элементов.`]}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-1`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getParent`,children:`\\AdminLink::getParent()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getChildren`,children:`\\AdminLink::getChildren()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-3`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$link`})}),(0,n.jsx)(t.td,{children:`\\AdminLink`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-1`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает текущий экземпляр `,(0,n.jsx)(t.code,{children:`AdminLink`}),` для возможности дальнейшей цепочки вызовов.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getChildren`}),`
`,(0,n.jsx)(t.h3,{id:`getchildren`,children:`getChildren`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getChildren() : array`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-3`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив детей текущего объекта.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-2`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_children`,children:`\\AdminLink::$children`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setChildren`,children:`\\AdminLink::setChildren()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-2`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`array`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Список объектов, являющихся потомками текущего объекта.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getExtra`}),`
`,(0,n.jsx)(t.h3,{id:`getextra`,children:`getExtra`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getExtra() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-4`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает значение дополнительного параметра.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-3`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Дополнительный параметр или null, если он не установлен.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getLink`}),`
`,(0,n.jsx)(t.h3,{id:`getlink`,children:`getLink`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getLink() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-5`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает значение свойства ссылки.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-3`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setLink`,children:`\\AdminLink::setLink()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-4`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Вернётся строка с URL или `,(0,n.jsx)(t.code,{children:`null`}),`, если ссылка не установлена.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getName`}),`
`,(0,n.jsx)(t.h3,{id:`getname`,children:`getName`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getName() : ?string`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-5`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`?string`})})})})}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getParent`}),`
`,(0,n.jsx)(t.h3,{id:`getparent`,children:`getParent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getParent() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-6`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает идентификатор родителя текущего объекта AdminLink.`}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-6`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Идентификатор родителя или null, если родитель не установлен.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_getType`}),`
`,(0,n.jsx)(t.h3,{id:`gettype`,children:`getType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public getType() : string|null`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-7`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий тип элемента.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-3`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Тип может принимать следующие значения: 'link', 'dropdown', 'divider', 'data',
или null, если он не был установлен.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-4`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_setType`,children:`\\AdminLink::setType()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_type`,children:`\\AdminLink::$type`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-7`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`string|null`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Текущий тип элемента или null, если тип не задан.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setChildren`}),`
`,(0,n.jsx)(t.h3,{id:`setchildren`,children:`setChildren`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setChildren(array  children) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-8`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает массив дочерних элементов для текущего объекта.`}),`
`,(0,n.jsx)(t.h5,{id:`описание-4`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Этот метод заменяет существующий массив дочерних элементов переданным массивом.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-5`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getChildren`,children:`\\AdminLink::getChildren()`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_addChild`,children:`\\AdminLink::addChild()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-4`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$children`})}),(0,n.jsx)(t.td,{children:`array`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-8`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий экземпляр класса для возможности цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setExtra`}),`
`,(0,n.jsx)(t.h3,{id:`setextra`,children:`setExtra`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setExtra(string|null  extra) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-9`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает значение дополнительного параметра и применяет фильтрацию.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-5`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$extra`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-9`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий экземпляр класса для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setLink`}),`
`,(0,n.jsx)(t.h3,{id:`setlink`,children:`setLink`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setLink(string|null  link) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-10`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Устанавливает URL-ссылку для текущего объекта класса `,(0,n.jsx)(t.code,{children:`AdminLink`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-5`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод проверяет переданную строку на соответствие формату URL с использованием фильтрации через {@see}.
Если переданное значение не является допустимым URL, оно будет проигнорировано.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-6`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_link`,children:`\\AdminLink::$link`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getLink`,children:`\\AdminLink::getLink()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-6`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$link`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-10`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает текущий экземпляр объекта `,(0,n.jsx)(t.code,{children:`AdminLink`}),` для возможности цепочки вызовов.`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setName`}),`
`,(0,n.jsx)(t.h3,{id:`setname`,children:`setName`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setName(string|null  name) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-11`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает название ссылки после фильтрации входного значения.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-7`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$name`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-11`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий экземпляр класса AdminLink.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setParent`}),`
`,(0,n.jsx)(t.h3,{id:`setparent`,children:`setParent`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setParent(string|null  parent) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-12`,children:`Краткое содержание`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает родительский идентификатор для ссылки.`}),`
`,(0,n.jsx)(t.h5,{id:`свойства-8`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$parent`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-12`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущий экземпляр класса для цепочки вызовов.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(`span`,{id:`method_setType`}),`
`,(0,n.jsx)(t.h3,{id:`settype`,children:`setType`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`public setType(string|null  type) : \\AdminLink`})})})})}),`
`,(0,n.jsx)(t.h5,{id:`краткое-содержание-13`,children:`Краткое содержание`}),`
`,(0,n.jsxs)(t.p,{children:[`Устанавливает тип текущего объекта `,(0,n.jsx)(t.code,{children:`AdminLink`}),`.`]}),`
`,(0,n.jsx)(t.h5,{id:`описание-6`,children:`Описание`}),`
`,(0,n.jsx)(t.p,{children:`Метод позволяет задать тип ссылки из набора допустимых значений.
Если значение передано и соответствует одному из допустимых значений,
оно будет установлено в соответствующее свойство объекта.`}),`
`,(0,n.jsx)(t.h5,{id:`смотри-так-же-7`,children:`Смотри так-же:`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#property_type`,children:`\\AdminLink::$type`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`#method_getType`,children:`\\AdminLink::getType()`})}),`
`]}),`
`,(0,n.jsx)(t.h5,{id:`свойства-9`,children:`Свойства:`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Название`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`По умолчанию`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`$type`})}),(0,n.jsx)(t.td,{children:`string|null`}),(0,n.jsx)(t.td,{})]})})]}),`
`,(0,n.jsx)(t.h5,{id:`возвращает-13`,children:`Возвращает:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`\\AdminLink`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Возвращает текущий экземпляр `,(0,n.jsx)(t.code,{children:`AdminLink`}),` для возможности цепочки вызовов.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};