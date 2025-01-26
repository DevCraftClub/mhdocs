# MhTranslation

## Функция: `MhTranslation`

**Описание:**  
Класс для оформления фраз переводов

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `setTranslator`

**Описание:**  
Класс переводчика

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslator`

**Описание:**  
Возвращает экземпляр переводчика, связанный с текущим модулем.
Если модуль передан как параметр, то он устанавливается перед получением переводчика.
Если переводчик ещё не установлен, он будет автоматически инициализирован для текущего модуля.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `setModule`

**Описание:**  
Устанавливает значение для статического свойства \$module.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getModule`

**Описание:**  
Возвращает название модуля.
Если статическое свойство `\$module` не установлено, возвращается строка `'mhadmin'`.

**Теги:**
- [LogGenerator::generateLog()](./)
## Функция: `setLocale`

**Описание:**  
Устанавливает локаль для приложения.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getLocale`

**Описание:**  
Возвращает текущую локаль или значение по умолчанию ('ru_RU'), если локаль не определена.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getLocaleData`

**Описание:**  
Возвращает локализованные данные для указанного языка.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslation`

**Описание:**  
Возвращает переведённую фразу.
Метод использует функцию `getTranslationWithParameters` для получения перевода
без указания дополнительных параметров.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslationWithParameters`

**Описание:**  
Возвращает переведённую фразу с установленными параметрами.
Перевод осуществляется с использованием зарегистрированного переводчика.
Если переводчик не установлен, он инициализируется вызовом метода `setTranslator`.
Если использование переводчика отключено, возвращается результат без перевода.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslationPlural`

**Описание:**  
Возвращает переведённую фразу с учётом параметров множественного числа/склонения.
Делегирует обработку перевода методу `getTranslationPluralWithParameters`, передавая
пустой массив параметров в качестве третьего аргумента.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslationPluralWithParameters`

**Описание:**  
Возвращает переведённую фразу с параметрами множественного числа, учитывая склонения, с дополнительной
поддержкой параметров.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `nonTranslator`

**Описание:**  
Заменяет плейсхолдеры в строке на указанные значения.
Метод принимает строку и массив пар "ключ-значение", где каждый ключ - это плейсхолдер,
который заменяется соответствующим значением в строке.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `setLocalizationPath`

**Описание:**  
Устанавливает путь до переводимых фраз

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getTranslationArray`

**Описание:**  
Возвращает массив переводов из XLIFF файла в виде ассоциативного массива,
где ключами являются исходные строки, а значениями — переведённые строки.
Если файл перевода отсутствует или возникает ошибка при его обработке,
возвращается пустой массив. Реализована поддержка кеширования для ускорения
получения данных при последующих вызовах.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getLanguages`

**Описание:**  
Получает список доступных языков.
Метод проверяет наличие кэша для списка языков.
Если кэш отсутствует, формирует список языков на основе содержимого директории локализаций.
Полученные данные сохраняются в кэше для последующего использования.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `getFormattedLanguageList`

**Описание:**  
Возвращает отформатированный список языков с заданным шаблоном формата.
Поддерживаемые подстановочные шаблоны в строке формата:
- `{original}` - заменяется на переведённое название языка.
- `{english}` - заменяется на английское название языка.
- `{iso2}` - заменяется на двузначный код языка (например: `ru`).
- `{tag}` - заменяется на код языка (например: `ru_RU`).
Если формат не указан, по умолчанию используется шаблон: "{original} ({english})".

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `languageList`

**Описание:**  
Возвращает массив данных о языке на основе переданного кода языка.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `setUseTranslator`

**Описание:**  
Устанавливает использование переводчика.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `isUseTranslator`

**Описание:**  
Проверяет, используется ли переводчик.
Метод проверяет, инициализирован ли статический переводчик
(`self::\$translator`). Если переменная не равна null, значит переводчик
используется.

**Теги:**
- [LogGenerator::generateLog()](./)
## Функция: `getLocalizationPath`

**Описание:**  
Получает путь к локализации приложения.
Метод возвращает путь к директории с файлами локализации. Если путь ранее
не был установлен или пуст, он загружается из конфигурации `mhadmin` и
по умолчанию указывает на директорию `/engine/inc/maharder/_locales`.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `convertXliffToJs`

**Описание:**  
Преобразует XLIFF-файлы переводов в JavaScript-файлы для поддержки локализации на клиентской стороне.
Метод перебирает доступные языки из функции {@see self::getLanguages()}, кэширует переводы,
преобразует их из XLIFF-файлов и генерирует JavaScript-файлы с переводами.
Если переводы не найдены или директория переводов отсутствует, генерируется лог ошибки.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `generateJsTranslationContent`

**Описание:**  
Генерирует содержимое JavaScript-файла с переводами на основе переданного массива переводов.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
## Функция: `writeJsFile`

**Описание:**  
Записывает переданное содержимое в указанный файл JavaScript.
В случае неуспешной записи генерирует критический лог с использованием метода LogGenerator::generateLog.

**Теги:**
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
- [LogGenerator::generateLog()](./)
