# Класс: [\Default](../../packages/Default.md)\TextLimiter

## Краткое содержание:

Twig-расширение, предоставляющее инструмент для ограничения длины текста.

## Описание:

Класс расширяет AbstractExtension и включает фильтр для обрезки текста
до заданной длины. Полезно для шаблонов, где требуется ограничение
длины текста, например, для кратких описаний или превью.


---

### Методы

* public [getFilters()](#method_getFilters)
* public [getFunctions()](#method_getFunctions)
* public [limit()](#method_limit)

---

### Подробности

* File: [engine/inc/maharder/_includes/twigExtensions/TextLimiter.php](../../engine/inc/maharder/_includes/twigExtensions/TextLimiter.php)

---

## Методы

<a id="method_getFilters"></a>
### getFilters

```
public getFilters() : array
```

##### Возвращает:

```
array
```

---

<a id="method_getFunctions"></a>
### getFunctions

```
public getFunctions() : array
```

##### Возвращает:

```
array
```

---

<a id="method_limit"></a>
### limit

```
public limit(?string  text, int  limit = 100) : string
```

##### Свойства:

| Название | Тип | По умолчанию |
|----------|-----|----------|
| **$text** | ?string |  |
| **$limit** | int | 100 |

##### Возвращает:

```
string
```
