---
tags:
  - PHP
  - DLE
  - Плагин
  - Админка
title: "Класс: Translation - DevCraft Admin"
description: "Документация по плагину класс: translation для DLE."
keywords: "PHP, DLE, Плагин, Админка, класс: translation, DevCraft, документация"
author: "Maxim Harder"
og:title: "Класс: Translation"
og:description: "Документация по плагину класс: translation для DLE."
og:image: "https://devcraft.club/data/assets/logo_default/devcraftx2.png"
twitter:title: "Класс: Translation"
twitter:description: "Документация по плагину класс: translation для DLE."
---

# Класс: Translation

## Краткое содержание:

Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.

---

### Свойства
* private $[translator](#property_translator)
* private $[localization_path](#property_localization_path)
* private $[locale](#property_locale)

---

### Методы
* public [getDictionaryForLocale()](#method_getDictionaryForLocale)
* public [convertXliffToJs()](#method_convertXliffToJs)
* public [jsTranslationFilePath()](#method_jsTranslationFilePath)
* public [jsTranslationFileMtime()](#method_jsTranslationFileMtime)
* public [metroLocaleFor()](#method_metroLocaleFor)
* public [metroLocaleAddonPath()](#method_metroLocaleAddonPath)
* public [setTranslator()](#method_setTranslator)
* public [reset()](#method_reset)
* public [getTranslator()](#method_getTranslator)
* public [setLocale()](#method_setLocale)
* public [getLocale()](#method_getLocale)
* public [getLocaleData()](#method_getLocaleData)
* public [getTranslation()](#method_getTranslation)
* public [getTranslationWithParameters()](#method_getTranslationWithParameters)
* public [getTranslationPlural()](#method_getTranslationPlural)
* public [getTranslationPluralWithParameters()](#method_getTranslationPluralWithParameters)
* public [setLocalizationPath()](#method_setLocalizationPath)
* public [getLanguages()](#method_getLanguages)
* private [normalizeLanguages()](#method_normalizeLanguages)
* public [loadLanguageMeta()](#method_loadLanguageMeta)
* private [languageMetaToLegacy()](#method_languageMetaToLegacy)
* private [languagesMetaVersion()](#method_languagesMetaVersion)
* public [getFormattedLanguageList()](#method_getFormattedLanguageList)
* public [setUseTranslator()](#method_setUseTranslator)
* public [isUseTranslator()](#method_isUseTranslator)
* public [getLocalizationPath()](#method_getLocalizationPath)
* private [nonTranslator()](#method_nonTranslator)
* private [getTranslationArray()](#method_getTranslationArray)
* private [loadDictionaryForLocale()](#method_loadDictionaryForLocale)
* private [localeXliffMtime()](#method_localeXliffMtime)
* private [writeJsTranslationFile()](#method_writeJsTranslationFile)
* private [parseXliffFile()](#method_parseXliffFile)
* private [flattenFileList()](#method_flattenFileList)

---

### Подробности

* Путь: `devcraft/src/classes/I18n/Translation.php`

---

## Детали

### Свойства

[](){#property_translator}
#### $translator

Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.


[](){#property_localization_path}
#### $localization_path

Абсолютный путь к каталогу локализаций.


[](){#property_locale}
#### $locale

Текущий тег локали (например, ru_RU).


### Методы

[](){#method_getDictionaryForLocale}
### getDictionaryForLocale()

Возвращает словарь переводов для указанной локали без смены активной локали.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `array<string,` — string> Ассоциативный массив исходная_строка => перевод.

[](){#method_convertXliffToJs}
### convertXliffToJs()

Генерирует JS-словари переводов из XLIFF для клиентского __().

**С версии:** 173.3.0

[](){#method_jsTranslationFilePath}
### jsTranslationFilePath()

Возвращает абсолютный путь к JS-файлу перевода для локали.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `string Нормализованный путь к translation.{locale}` — .js.

[](){#method_jsTranslationFileMtime}
### jsTranslationFileMtime()

Возвращает время последней модификации JS-файла перевода.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `int` — Unix-timestamp или 0, если файл отсутствует.

[](){#method_metroLocaleFor}
### metroLocaleFor()

Возвращает двухбуквенный код локали Metro UI для заданного тега.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `string` — Код ISO 639-1 (например, ru).

[](){#method_metroLocaleAddonPath}
### metroLocaleAddonPath()

Возвращает путь к JS-аддону Metro UI для локали или null, если файл отсутствует.

**С версии:** 200.4.0

**Параметры:**
- `$metroLocale` — Двухбуквенный код локали Metro.

**Возвращает:** `string|null Абсолютный путь к metro.{locale}` — .js или null.

[](){#method_setTranslator}
### setTranslator()

Устанавливает переводчик для модуля с заданными настройками.

**С версии:** 173.3.0

[](){#method_reset}
### reset()

Сбрасывает состояние переводчика и очищает кэш локализации.

**С версии:** 200.4.0

[](){#method_getTranslator}
### getTranslator()

Возвращает экземпляр переводчика, связанный с текущим модулем.

**С версии:** 173.3.0

**Возвращает:** `Translator|null` — Экземпляр переводчика или null.

[](){#method_setLocale}
### setLocale()

Устанавливает локаль для приложения.

**С версии:** 173.3.0

**Параметры:**
- `$locale` — Новое значение локали.

[](){#method_getLocale}
### getLocale()

Возвращает текущую локаль или значение по умолчанию (ru_RU).

**С версии:** 173.3.0

**Возвращает:** `string` — Текущая локаль.

[](){#method_getLocaleData}
### getLocaleData()

Возвращает локализованные данные для указанного языка.

**С версии:** 173.3.0

**Параметры:**
- `$locale` — Код языка.

**Возвращает:** `array<string,` — mixed> Массив данных локализации или пустой массив.

[](){#method_getTranslation}
### getTranslation()

Возвращает переведённую фразу.

**С версии:** 173.3.0

**Параметры:**
- `$phrase` — Фраза для перевода.

**Возвращает:** `string` — Переведённая строка.

[](){#method_getTranslationWithParameters}
### getTranslationWithParameters()

Возвращает переведённую фразу с установленными параметрами.

**С версии:** 173.3.0

**Параметры:**
- `$phrase` — Исходная фраза.

**Возвращает:** `string` — Переведённая фраза или исходная строка при отключённом переводчике.

[](){#method_getTranslationPlural}
### getTranslationPlural()

Возвращает переведённую фразу с учётом множественного числа.

**С версии:** 173.3.0

**Параметры:**
- `$phrase` — Переводимая фраза.
- `$count` — Количество для выбора формы.

**Возвращает:** `string` — Переведённая строка с учётом склонения.

[](){#method_getTranslationPluralWithParameters}
### getTranslationPluralWithParameters()

Возвращает переведённую фразу с параметрами множественного числа.

**С версии:** 173.3.0

**Параметры:**
- `$phrase` — Фраза для перевода.
- `$count` — Число для выбора варианта склонения.

**Возвращает:** `string` — Переведённая фраза с учётом склонений и параметров.

[](){#method_setLocalizationPath}
### setLocalizationPath()

Устанавливает путь до переводимых фраз.

**С версии:** 173.3.0

**Параметры:**
- `$localization_path` — Абсолютный или относительный путь к каталогу локалей.

[](){#method_getLanguages}
### getLanguages()

Получает список доступных языков.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — LanguageData> Массив языков: тег => метаданные.

[](){#method_normalizeLanguages}
### normalizeLanguages()

Нормализует список языков после чтения из файлового JSON-кэша.

**С версии:** 200.4.0

**Возвращает:** `array<string,` — LanguageData> Массив языков: тег => метаданные.

[](){#method_loadLanguageMeta}
### loadLanguageMeta()

Загружает метаданные языка из meta.php или формирует значения по умолчанию.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `LanguageData` — Объект с названиями и кодами языка.

[](){#method_languageMetaToLegacy}
### languageMetaToLegacy()

Преобразует LanguageData в legacy-формат списка языков.

**С версии:** 200.4.0

**Параметры:**
- `$data` — Метаданные языка.

**Возвращает:** `array{original: string, english: string, iso2: string, tag: string}` — 

[](){#method_languagesMetaVersion}
### languagesMetaVersion()

Возвращает версию кэша списка языков по mtime файлов meta.php.

**С версии:** 200.4.0

**Возвращает:** `string` — Строковое представление максимального mtime.

[](){#method_getFormattedLanguageList}
### getFormattedLanguageList()

Возвращает отформатированный список языков с заданным шаблоном.

**С версии:** 173.3.0

**Параметры:**
- `$format` — Шаблон подстановки ({originalName}, {englishName}, {iso2}, {tag}).

**Возвращает:** `array<int, array<string, string>>` — Массив с ключами tag и name.

[](){#method_setUseTranslator}
### setUseTranslator()

Устанавливает использование переводчика.

**С версии:** 173.3.0

**Параметры:**
- `$use_translator` — true — включить переводчик.

[](){#method_isUseTranslator}
### isUseTranslator()

Проверяет, используется ли переводчик.

**С версии:** 173.3.0

**Возвращает:** `bool` — true, если переводчик активен.

[](){#method_getLocalizationPath}
### getLocalizationPath()

Получает путь к локализации приложения.

**С версии:** 173.3.0

**Возвращает:** `string|null` — Полный нормализованный путь к каталогу локалей.

[](){#method_nonTranslator}
### nonTranslator()

Заменяет плейсхолдеры в строке без использования переводчика.

**С версии:** 173.3.0

**Параметры:**
- `$phrase` — Исходная строка.

**Возвращает:** `string` — Обработанная строка.

[](){#method_getTranslationArray}
### getTranslationArray()

Возвращает массив переводов для текущей активной локали.

**С версии:** 173.3.0

**Возвращает:** `array<string,` — string> Словарь переводов.

[](){#method_loadDictionaryForLocale}
### loadDictionaryForLocale()

Загружает словарь переводов из XLIFF-файлов указанной локали.

**С версии:** 173.3.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `array<string,` — string> Ассоциативный массив переводов.

[](){#method_localeXliffMtime}
### localeXliffMtime()

Возвращает максимальный mtime XLIFF-файлов локали.

**С версии:** 200.4.0

**Параметры:**
- `$locale` — Тег локали.

**Возвращает:** `int` — Unix-timestamp или 0.

[](){#method_writeJsTranslationFile}
### writeJsTranslationFile()

Записывает JS-файл словаря переводов для клиентского DevCraftI18n.

**С версии:** 200.4.0

**Параметры:**
- `$path` — Путь к выходному файлу.
- `$locale` — Тег локали.

**Возвращает:** `bool` — true при успешной записи.

[](){#method_parseXliffFile}
### parseXliffFile()

Парсит один XLIFF-файл и возвращает пары source => target.

**С версии:** 173.3.0

**Параметры:**
- `$filePath` — Имя или относительный путь файла.
- `$directory` — Каталог локали.

**Возвращает:** `array<string,` — string> Извлечённые переводы.

[](){#method_flattenFileList}
### flattenFileList()

Разворачивает древовидный список файлов dirToArray в плоский список путей.

**С версии:** 200.4.0

**Параметры:**
- `$tree` — Дерево каталогов от DataManager::dirToArray().

**Возвращает:** `list<string>` — Относительные пути файлов.
