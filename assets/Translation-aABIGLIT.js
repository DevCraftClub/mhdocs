import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: Translation`,description:`Документация по плагину класс: translation для DLE.`},i=new Date(1787145028e3),a=`

## Краткое содержание: [#краткое-содержание]

Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.

***

### Свойства [#свойства]

* private $[translator](#property_translator)
* private $[localization\\_path](#property_localization_path)
* private $[locale](#property_locale)

***

### Методы [#методы]

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

***

### Подробности [#подробности]

* Путь: \`devcraft/src/classes/I18n/Translation.php\`

***

## Детали [#детали]

### Свойства [#свойства-1]

<span id="property_translator" />

#### $translator [#translator]

Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.

<span id="property_localization_path" />

#### $localization\\_path [#localization_path]

Абсолютный путь к каталогу локализаций.

<span id="property_locale" />

#### $locale [#locale]

Текущий тег локали (например, ru\\_RU).

### Методы [#методы-1]

<span id="method_getDictionaryForLocale" />

### getDictionaryForLocale() [#getdictionaryforlocale]

Возвращает словарь переводов для указанной локали без смены активной локали.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`array<string,\` — string> Ассоциативный массив исходная\\_строка => перевод.

<span id="method_convertXliffToJs" />

### convertXliffToJs() [#convertxlifftojs]

Генерирует JS-словари переводов из XLIFF для клиентского \\_\\_().

**С версии:** 173.3.0

<span id="method_jsTranslationFilePath" />

### jsTranslationFilePath() [#jstranslationfilepath]

Возвращает абсолютный путь к JS-файлу перевода для локали.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`string Нормализованный путь к translation.{locale}\` — .js.

<span id="method_jsTranslationFileMtime" />

### jsTranslationFileMtime() [#jstranslationfilemtime]

Возвращает время последней модификации JS-файла перевода.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`int\` — Unix-timestamp или 0, если файл отсутствует.

<span id="method_metroLocaleFor" />

### metroLocaleFor() [#metrolocalefor]

Возвращает двухбуквенный код локали Metro UI для заданного тега.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`string\` — Код ISO 639-1 (например, ru).

<span id="method_metroLocaleAddonPath" />

### metroLocaleAddonPath() [#metrolocaleaddonpath]

Возвращает путь к JS-аддону Metro UI для локали или null, если файл отсутствует.

**С версии:** 200.4.0

**Параметры:**

* \`$metroLocale\` — Двухбуквенный код локали Metro.

**Возвращает:** \`string|null Абсолютный путь к metro.{locale}\` — .js или null.

<span id="method_setTranslator" />

### setTranslator() [#settranslator]

Устанавливает переводчик для модуля с заданными настройками.

**С версии:** 173.3.0

<span id="method_reset" />

### reset() [#reset]

Сбрасывает состояние переводчика и очищает кэш локализации.

**С версии:** 200.4.0

<span id="method_getTranslator" />

### getTranslator() [#gettranslator]

Возвращает экземпляр переводчика, связанный с текущим модулем.

**С версии:** 173.3.0

**Возвращает:** \`Translator|null\` — Экземпляр переводчика или null.

<span id="method_setLocale" />

### setLocale() [#setlocale]

Устанавливает локаль для приложения.

**С версии:** 173.3.0

**Параметры:**

* \`$locale\` — Новое значение локали.

<span id="method_getLocale" />

### getLocale() [#getlocale]

Возвращает текущую локаль или значение по умолчанию (ru\\_RU).

**С версии:** 173.3.0

**Возвращает:** \`string\` — Текущая локаль.

<span id="method_getLocaleData" />

### getLocaleData() [#getlocaledata]

Возвращает локализованные данные для указанного языка.

**С версии:** 173.3.0

**Параметры:**

* \`$locale\` — Код языка.

**Возвращает:** \`array<string,\` — mixed> Массив данных локализации или пустой массив.

<span id="method_getTranslation" />

### getTranslation() [#gettranslation]

Возвращает переведённую фразу.

**С версии:** 173.3.0

**Параметры:**

* \`$phrase\` — Фраза для перевода.

**Возвращает:** \`string\` — Переведённая строка.

<span id="method_getTranslationWithParameters" />

### getTranslationWithParameters() [#gettranslationwithparameters]

Возвращает переведённую фразу с установленными параметрами.

**С версии:** 173.3.0

**Параметры:**

* \`$phrase\` — Исходная фраза.

**Возвращает:** \`string\` — Переведённая фраза или исходная строка при отключённом переводчике.

<span id="method_getTranslationPlural" />

### getTranslationPlural() [#gettranslationplural]

Возвращает переведённую фразу с учётом множественного числа.

**С версии:** 173.3.0

**Параметры:**

* \`$phrase\` — Переводимая фраза.
* \`$count\` — Количество для выбора формы.

**Возвращает:** \`string\` — Переведённая строка с учётом склонения.

<span id="method_getTranslationPluralWithParameters" />

### getTranslationPluralWithParameters() [#gettranslationpluralwithparameters]

Возвращает переведённую фразу с параметрами множественного числа.

**С версии:** 173.3.0

**Параметры:**

* \`$phrase\` — Фраза для перевода.
* \`$count\` — Число для выбора варианта склонения.

**Возвращает:** \`string\` — Переведённая фраза с учётом склонений и параметров.

<span id="method_setLocalizationPath" />

### setLocalizationPath() [#setlocalizationpath]

Устанавливает путь до переводимых фраз.

**С версии:** 173.3.0

**Параметры:**

* \`$localization_path\` — Абсолютный или относительный путь к каталогу локалей.

<span id="method_getLanguages" />

### getLanguages() [#getlanguages]

Получает список доступных языков.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — LanguageData> Массив языков: тег => метаданные.

<span id="method_normalizeLanguages" />

### normalizeLanguages() [#normalizelanguages]

Нормализует список языков после чтения из файлового JSON-кэша.

**С версии:** 200.4.0

**Возвращает:** \`array<string,\` — LanguageData> Массив языков: тег => метаданные.

<span id="method_loadLanguageMeta" />

### loadLanguageMeta() [#loadlanguagemeta]

Загружает метаданные языка из meta.php или формирует значения по умолчанию.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`LanguageData\` — Объект с названиями и кодами языка.

<span id="method_languageMetaToLegacy" />

### languageMetaToLegacy() [#languagemetatolegacy]

Преобразует LanguageData в legacy-формат списка языков.

**С версии:** 200.4.0

**Параметры:**

* \`$data\` — Метаданные языка.

**Возвращает:** \`array{original: string, english: string, iso2: string, tag: string}\` —

<span id="method_languagesMetaVersion" />

### languagesMetaVersion() [#languagesmetaversion]

Возвращает версию кэша списка языков по mtime файлов meta.php.

**С версии:** 200.4.0

**Возвращает:** \`string\` — Строковое представление максимального mtime.

<span id="method_getFormattedLanguageList" />

### getFormattedLanguageList() [#getformattedlanguagelist]

Возвращает отформатированный список языков с заданным шаблоном.

**С версии:** 173.3.0

**Параметры:**

* \`$format\` — Шаблон подстановки (\\{originalName}, \\{englishName}, \\{iso2}, \\{tag}).

**Возвращает:** \`array<int, array<string, string>>\` — Массив с ключами tag и name.

<span id="method_setUseTranslator" />

### setUseTranslator() [#setusetranslator]

Устанавливает использование переводчика.

**С версии:** 173.3.0

**Параметры:**

* \`$use_translator\` — true — включить переводчик.

<span id="method_isUseTranslator" />

### isUseTranslator() [#isusetranslator]

Проверяет, используется ли переводчик.

**С версии:** 173.3.0

**Возвращает:** \`bool\` — true, если переводчик активен.

<span id="method_getLocalizationPath" />

### getLocalizationPath() [#getlocalizationpath]

Получает путь к локализации приложения.

**С версии:** 173.3.0

**Возвращает:** \`string|null\` — Полный нормализованный путь к каталогу локалей.

<span id="method_nonTranslator" />

### nonTranslator() [#nontranslator]

Заменяет плейсхолдеры в строке без использования переводчика.

**С версии:** 173.3.0

**Параметры:**

* \`$phrase\` — Исходная строка.

**Возвращает:** \`string\` — Обработанная строка.

<span id="method_getTranslationArray" />

### getTranslationArray() [#gettranslationarray]

Возвращает массив переводов для текущей активной локали.

**С версии:** 173.3.0

**Возвращает:** \`array<string,\` — string> Словарь переводов.

<span id="method_loadDictionaryForLocale" />

### loadDictionaryForLocale() [#loaddictionaryforlocale]

Загружает словарь переводов из XLIFF-файлов указанной локали.

**С версии:** 173.3.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`array<string,\` — string> Ассоциативный массив переводов.

<span id="method_localeXliffMtime" />

### localeXliffMtime() [#localexliffmtime]

Возвращает максимальный mtime XLIFF-файлов локали.

**С версии:** 200.4.0

**Параметры:**

* \`$locale\` — Тег локали.

**Возвращает:** \`int\` — Unix-timestamp или 0.

<span id="method_writeJsTranslationFile" />

### writeJsTranslationFile() [#writejstranslationfile]

Записывает JS-файл словаря переводов для клиентского DevCraftI18n.

**С версии:** 200.4.0

**Параметры:**

* \`$path\` — Путь к выходному файлу.
* \`$locale\` — Тег локали.

**Возвращает:** \`bool\` — true при успешной записи.

<span id="method_parseXliffFile" />

### parseXliffFile() [#parsexlifffile]

Парсит один XLIFF-файл и возвращает пары source => target.

**С версии:** 173.3.0

**Параметры:**

* \`$filePath\` — Имя или относительный путь файла.
* \`$directory\` — Каталог локали.

**Возвращает:** \`array<string,\` — string> Извлечённые переводы.

<span id="method_flattenFileList" />

### flattenFileList() [#flattenfilelist]

Разворачивает древовидный список файлов dirToArray в плоский список путей.

**С версии:** 200.4.0

**Параметры:**

* \`$tree\` — Дерево каталогов от DataManager::dirToArray().

**Возвращает:** \`list<string>\` — Относительные пути файлов.
`,o={contents:[{heading:`краткое-содержание`,content:`Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.`},{heading:`свойства`,content:`private $translator`},{heading:`свойства`,content:`private $localization\\_path`},{heading:`свойства`,content:`private $locale`},{heading:`методы`,content:`public getDictionaryForLocale()`},{heading:`методы`,content:`public convertXliffToJs()`},{heading:`методы`,content:`public jsTranslationFilePath()`},{heading:`методы`,content:`public jsTranslationFileMtime()`},{heading:`методы`,content:`public metroLocaleFor()`},{heading:`методы`,content:`public metroLocaleAddonPath()`},{heading:`методы`,content:`public setTranslator()`},{heading:`методы`,content:`public reset()`},{heading:`методы`,content:`public getTranslator()`},{heading:`методы`,content:`public setLocale()`},{heading:`методы`,content:`public getLocale()`},{heading:`методы`,content:`public getLocaleData()`},{heading:`методы`,content:`public getTranslation()`},{heading:`методы`,content:`public getTranslationWithParameters()`},{heading:`методы`,content:`public getTranslationPlural()`},{heading:`методы`,content:`public getTranslationPluralWithParameters()`},{heading:`методы`,content:`public setLocalizationPath()`},{heading:`методы`,content:`public getLanguages()`},{heading:`методы`,content:`private normalizeLanguages()`},{heading:`методы`,content:`public loadLanguageMeta()`},{heading:`методы`,content:`private languageMetaToLegacy()`},{heading:`методы`,content:`private languagesMetaVersion()`},{heading:`методы`,content:`public getFormattedLanguageList()`},{heading:`методы`,content:`public setUseTranslator()`},{heading:`методы`,content:`public isUseTranslator()`},{heading:`методы`,content:`public getLocalizationPath()`},{heading:`методы`,content:`private nonTranslator()`},{heading:`методы`,content:`private getTranslationArray()`},{heading:`методы`,content:`private loadDictionaryForLocale()`},{heading:`методы`,content:`private localeXliffMtime()`},{heading:`методы`,content:`private writeJsTranslationFile()`},{heading:`методы`,content:`private parseXliffFile()`},{heading:`методы`,content:`private flattenFileList()`},{heading:`подробности`,content:"Путь: `devcraft/src/classes/I18n/Translation.php`"},{heading:`translator`,content:`Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.`},{heading:`localization_path`,content:`Абсолютный путь к каталогу локализаций.`},{heading:`locale`,content:`Текущий тег локали (например, ru\\_RU).`},{heading:`getdictionaryforlocale`,content:`Возвращает словарь переводов для указанной локали без смены активной локали.`},{heading:`getdictionaryforlocale`,content:`**С версии:** 200.4.0`},{heading:`getdictionaryforlocale`,content:`**Параметры:**`},{heading:`getdictionaryforlocale`,content:"`$locale` — Тег локали."},{heading:`getdictionaryforlocale`,content:"**Возвращает:** `array<string,` — string> Ассоциативный массив исходная\\_строка => перевод."},{heading:`convertxlifftojs`,content:`Генерирует JS-словари переводов из XLIFF для клиентского \\_\\_().`},{heading:`convertxlifftojs`,content:`**С версии:** 173.3.0`},{heading:`jstranslationfilepath`,content:`Возвращает абсолютный путь к JS-файлу перевода для локали.`},{heading:`jstranslationfilepath`,content:`**С версии:** 200.4.0`},{heading:`jstranslationfilepath`,content:`**Параметры:**`},{heading:`jstranslationfilepath`,content:"`$locale` — Тег локали."},{heading:`jstranslationfilepath`,content:"**Возвращает:** `string Нормализованный путь к translation.{locale}` — .js."},{heading:`jstranslationfilemtime`,content:`Возвращает время последней модификации JS-файла перевода.`},{heading:`jstranslationfilemtime`,content:`**С версии:** 200.4.0`},{heading:`jstranslationfilemtime`,content:`**Параметры:**`},{heading:`jstranslationfilemtime`,content:"`$locale` — Тег локали."},{heading:`jstranslationfilemtime`,content:"**Возвращает:** `int` — Unix-timestamp или 0, если файл отсутствует."},{heading:`metrolocalefor`,content:`Возвращает двухбуквенный код локали Metro UI для заданного тега.`},{heading:`metrolocalefor`,content:`**С версии:** 200.4.0`},{heading:`metrolocalefor`,content:`**Параметры:**`},{heading:`metrolocalefor`,content:"`$locale` — Тег локали."},{heading:`metrolocalefor`,content:"**Возвращает:** `string` — Код ISO 639-1 (например, ru)."},{heading:`metrolocaleaddonpath`,content:`Возвращает путь к JS-аддону Metro UI для локали или null, если файл отсутствует.`},{heading:`metrolocaleaddonpath`,content:`**С версии:** 200.4.0`},{heading:`metrolocaleaddonpath`,content:`**Параметры:**`},{heading:`metrolocaleaddonpath`,content:"`$metroLocale` — Двухбуквенный код локали Metro."},{heading:`metrolocaleaddonpath`,content:"**Возвращает:** `string|null Абсолютный путь к metro.{locale}` — .js или null."},{heading:`settranslator`,content:`Устанавливает переводчик для модуля с заданными настройками.`},{heading:`settranslator`,content:`**С версии:** 173.3.0`},{heading:`reset`,content:`Сбрасывает состояние переводчика и очищает кэш локализации.`},{heading:`reset`,content:`**С версии:** 200.4.0`},{heading:`gettranslator`,content:`Возвращает экземпляр переводчика, связанный с текущим модулем.`},{heading:`gettranslator`,content:`**С версии:** 173.3.0`},{heading:`gettranslator`,content:"**Возвращает:** `Translator|null` — Экземпляр переводчика или null."},{heading:`setlocale`,content:`Устанавливает локаль для приложения.`},{heading:`setlocale`,content:`**С версии:** 173.3.0`},{heading:`setlocale`,content:`**Параметры:**`},{heading:`setlocale`,content:"`$locale` — Новое значение локали."},{heading:`getlocale`,content:`Возвращает текущую локаль или значение по умолчанию (ru\\_RU).`},{heading:`getlocale`,content:`**С версии:** 173.3.0`},{heading:`getlocale`,content:"**Возвращает:** `string` — Текущая локаль."},{heading:`getlocaledata`,content:`Возвращает локализованные данные для указанного языка.`},{heading:`getlocaledata`,content:`**С версии:** 173.3.0`},{heading:`getlocaledata`,content:`**Параметры:**`},{heading:`getlocaledata`,content:"`$locale` — Код языка."},{heading:`getlocaledata`,content:"**Возвращает:** `array<string,` — mixed> Массив данных локализации или пустой массив."},{heading:`gettranslation`,content:`Возвращает переведённую фразу.`},{heading:`gettranslation`,content:`**С версии:** 173.3.0`},{heading:`gettranslation`,content:`**Параметры:**`},{heading:`gettranslation`,content:"`$phrase` — Фраза для перевода."},{heading:`gettranslation`,content:"**Возвращает:** `string` — Переведённая строка."},{heading:`gettranslationwithparameters`,content:`Возвращает переведённую фразу с установленными параметрами.`},{heading:`gettranslationwithparameters`,content:`**С версии:** 173.3.0`},{heading:`gettranslationwithparameters`,content:`**Параметры:**`},{heading:`gettranslationwithparameters`,content:"`$phrase` — Исходная фраза."},{heading:`gettranslationwithparameters`,content:"**Возвращает:** `string` — Переведённая фраза или исходная строка при отключённом переводчике."},{heading:`gettranslationplural`,content:`Возвращает переведённую фразу с учётом множественного числа.`},{heading:`gettranslationplural`,content:`**С версии:** 173.3.0`},{heading:`gettranslationplural`,content:`**Параметры:**`},{heading:`gettranslationplural`,content:"`$phrase` — Переводимая фраза."},{heading:`gettranslationplural`,content:"`$count` — Количество для выбора формы."},{heading:`gettranslationplural`,content:"**Возвращает:** `string` — Переведённая строка с учётом склонения."},{heading:`gettranslationpluralwithparameters`,content:`Возвращает переведённую фразу с параметрами множественного числа.`},{heading:`gettranslationpluralwithparameters`,content:`**С версии:** 173.3.0`},{heading:`gettranslationpluralwithparameters`,content:`**Параметры:**`},{heading:`gettranslationpluralwithparameters`,content:"`$phrase` — Фраза для перевода."},{heading:`gettranslationpluralwithparameters`,content:"`$count` — Число для выбора варианта склонения."},{heading:`gettranslationpluralwithparameters`,content:"**Возвращает:** `string` — Переведённая фраза с учётом склонений и параметров."},{heading:`setlocalizationpath`,content:`Устанавливает путь до переводимых фраз.`},{heading:`setlocalizationpath`,content:`**С версии:** 173.3.0`},{heading:`setlocalizationpath`,content:`**Параметры:**`},{heading:`setlocalizationpath`,content:"`$localization_path` — Абсолютный или относительный путь к каталогу локалей."},{heading:`getlanguages`,content:`Получает список доступных языков.`},{heading:`getlanguages`,content:`**С версии:** 173.3.0`},{heading:`getlanguages`,content:"**Возвращает:** `array<string,` — LanguageData> Массив языков: тег => метаданные."},{heading:`normalizelanguages`,content:`Нормализует список языков после чтения из файлового JSON-кэша.`},{heading:`normalizelanguages`,content:`**С версии:** 200.4.0`},{heading:`normalizelanguages`,content:"**Возвращает:** `array<string,` — LanguageData> Массив языков: тег => метаданные."},{heading:`loadlanguagemeta`,content:`Загружает метаданные языка из meta.php или формирует значения по умолчанию.`},{heading:`loadlanguagemeta`,content:`**С версии:** 200.4.0`},{heading:`loadlanguagemeta`,content:`**Параметры:**`},{heading:`loadlanguagemeta`,content:"`$locale` — Тег локали."},{heading:`loadlanguagemeta`,content:"**Возвращает:** `LanguageData` — Объект с названиями и кодами языка."},{heading:`languagemetatolegacy`,content:`Преобразует LanguageData в legacy-формат списка языков.`},{heading:`languagemetatolegacy`,content:`**С версии:** 200.4.0`},{heading:`languagemetatolegacy`,content:`**Параметры:**`},{heading:`languagemetatolegacy`,content:"`$data` — Метаданные языка."},{heading:`languagemetatolegacy`,content:"**Возвращает:** `array{original: string, english: string, iso2: string, tag: string}` —"},{heading:`languagesmetaversion`,content:`Возвращает версию кэша списка языков по mtime файлов meta.php.`},{heading:`languagesmetaversion`,content:`**С версии:** 200.4.0`},{heading:`languagesmetaversion`,content:"**Возвращает:** `string` — Строковое представление максимального mtime."},{heading:`getformattedlanguagelist`,content:`Возвращает отформатированный список языков с заданным шаблоном.`},{heading:`getformattedlanguagelist`,content:`**С версии:** 173.3.0`},{heading:`getformattedlanguagelist`,content:`**Параметры:**`},{heading:`getformattedlanguagelist`,content:"`$format` — Шаблон подстановки (\\{originalName}, \\{englishName}, \\{iso2}, \\{tag})."},{heading:`getformattedlanguagelist`,content:"**Возвращает:** `array<int, array<string, string>>` — Массив с ключами tag и name."},{heading:`setusetranslator`,content:`Устанавливает использование переводчика.`},{heading:`setusetranslator`,content:`**С версии:** 173.3.0`},{heading:`setusetranslator`,content:`**Параметры:**`},{heading:`setusetranslator`,content:"`$use_translator` — true — включить переводчик."},{heading:`isusetranslator`,content:`Проверяет, используется ли переводчик.`},{heading:`isusetranslator`,content:`**С версии:** 173.3.0`},{heading:`isusetranslator`,content:"**Возвращает:** `bool` — true, если переводчик активен."},{heading:`getlocalizationpath`,content:`Получает путь к локализации приложения.`},{heading:`getlocalizationpath`,content:`**С версии:** 173.3.0`},{heading:`getlocalizationpath`,content:"**Возвращает:** `string|null` — Полный нормализованный путь к каталогу локалей."},{heading:`nontranslator`,content:`Заменяет плейсхолдеры в строке без использования переводчика.`},{heading:`nontranslator`,content:`**С версии:** 173.3.0`},{heading:`nontranslator`,content:`**Параметры:**`},{heading:`nontranslator`,content:"`$phrase` — Исходная строка."},{heading:`nontranslator`,content:"**Возвращает:** `string` — Обработанная строка."},{heading:`gettranslationarray`,content:`Возвращает массив переводов для текущей активной локали.`},{heading:`gettranslationarray`,content:`**С версии:** 173.3.0`},{heading:`gettranslationarray`,content:"**Возвращает:** `array<string,` — string> Словарь переводов."},{heading:`loaddictionaryforlocale`,content:`Загружает словарь переводов из XLIFF-файлов указанной локали.`},{heading:`loaddictionaryforlocale`,content:`**С версии:** 173.3.0`},{heading:`loaddictionaryforlocale`,content:`**Параметры:**`},{heading:`loaddictionaryforlocale`,content:"`$locale` — Тег локали."},{heading:`loaddictionaryforlocale`,content:"**Возвращает:** `array<string,` — string> Ассоциативный массив переводов."},{heading:`localexliffmtime`,content:`Возвращает максимальный mtime XLIFF-файлов локали.`},{heading:`localexliffmtime`,content:`**С версии:** 200.4.0`},{heading:`localexliffmtime`,content:`**Параметры:**`},{heading:`localexliffmtime`,content:"`$locale` — Тег локали."},{heading:`localexliffmtime`,content:"**Возвращает:** `int` — Unix-timestamp или 0."},{heading:`writejstranslationfile`,content:`Записывает JS-файл словаря переводов для клиентского DevCraftI18n.`},{heading:`writejstranslationfile`,content:`**С версии:** 200.4.0`},{heading:`writejstranslationfile`,content:`**Параметры:**`},{heading:`writejstranslationfile`,content:"`$path` — Путь к выходному файлу."},{heading:`writejstranslationfile`,content:"`$locale` — Тег локали."},{heading:`writejstranslationfile`,content:"**Возвращает:** `bool` — true при успешной записи."},{heading:`parsexlifffile`,content:`Парсит один XLIFF-файл и возвращает пары source => target.`},{heading:`parsexlifffile`,content:`**С версии:** 173.3.0`},{heading:`parsexlifffile`,content:`**Параметры:**`},{heading:`parsexlifffile`,content:"`$filePath` — Имя или относительный путь файла."},{heading:`parsexlifffile`,content:"`$directory` — Каталог локали."},{heading:`parsexlifffile`,content:"**Возвращает:** `array<string,` — string> Извлечённые переводы."},{heading:`flattenfilelist`,content:`Разворачивает древовидный список файлов dirToArray в плоский список путей.`},{heading:`flattenfilelist`,content:`**С версии:** 200.4.0`},{heading:`flattenfilelist`,content:`**Параметры:**`},{heading:`flattenfilelist`,content:"`$tree` — Дерево каталогов от DataManager::dirToArray()."},{heading:`flattenfilelist`,content:"**Возвращает:** `list<string>` — Относительные пути файлов."}],headings:[{id:`краткое-содержание`,content:`Краткое содержание:`},{id:`свойства`,content:`Свойства`},{id:`методы`,content:`Методы`},{id:`подробности`,content:`Подробности`},{id:`детали`,content:`Детали`},{id:`свойства-1`,content:`Свойства`},{id:`translator`,content:`$translator`},{id:`localization_path`,content:`$localization_path`},{id:`locale`,content:`$locale`},{id:`методы-1`,content:`Методы`},{id:`getdictionaryforlocale`,content:`getDictionaryForLocale()`},{id:`convertxlifftojs`,content:`convertXliffToJs()`},{id:`jstranslationfilepath`,content:`jsTranslationFilePath()`},{id:`jstranslationfilemtime`,content:`jsTranslationFileMtime()`},{id:`metrolocalefor`,content:`metroLocaleFor()`},{id:`metrolocaleaddonpath`,content:`metroLocaleAddonPath()`},{id:`settranslator`,content:`setTranslator()`},{id:`reset`,content:`reset()`},{id:`gettranslator`,content:`getTranslator()`},{id:`setlocale`,content:`setLocale()`},{id:`getlocale`,content:`getLocale()`},{id:`getlocaledata`,content:`getLocaleData()`},{id:`gettranslation`,content:`getTranslation()`},{id:`gettranslationwithparameters`,content:`getTranslationWithParameters()`},{id:`gettranslationplural`,content:`getTranslationPlural()`},{id:`gettranslationpluralwithparameters`,content:`getTranslationPluralWithParameters()`},{id:`setlocalizationpath`,content:`setLocalizationPath()`},{id:`getlanguages`,content:`getLanguages()`},{id:`normalizelanguages`,content:`normalizeLanguages()`},{id:`loadlanguagemeta`,content:`loadLanguageMeta()`},{id:`languagemetatolegacy`,content:`languageMetaToLegacy()`},{id:`languagesmetaversion`,content:`languagesMetaVersion()`},{id:`getformattedlanguagelist`,content:`getFormattedLanguageList()`},{id:`setusetranslator`,content:`setUseTranslator()`},{id:`isusetranslator`,content:`isUseTranslator()`},{id:`getlocalizationpath`,content:`getLocalizationPath()`},{id:`nontranslator`,content:`nonTranslator()`},{id:`gettranslationarray`,content:`getTranslationArray()`},{id:`loaddictionaryforlocale`,content:`loadDictionaryForLocale()`},{id:`localexliffmtime`,content:`localeXliffMtime()`},{id:`writejstranslationfile`,content:`writeJsTranslationFile()`},{id:`parsexlifffile`,content:`parseXliffFile()`},{id:`flattenfilelist`,content:`flattenFileList()`}]},s=[{depth:2,url:`#краткое-содержание`,title:(0,n.jsx)(n.Fragment,{children:`Краткое содержание:`})},{depth:3,url:`#свойства`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:3,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#подробности`,title:(0,n.jsx)(n.Fragment,{children:`Подробности`})},{depth:2,url:`#детали`,title:(0,n.jsx)(n.Fragment,{children:`Детали`})},{depth:3,url:`#свойства-1`,title:(0,n.jsx)(n.Fragment,{children:`Свойства`})},{depth:4,url:`#translator`,title:(0,n.jsx)(n.Fragment,{children:`$translator`})},{depth:4,url:`#localization_path`,title:(0,n.jsx)(n.Fragment,{children:`$localization_path`})},{depth:4,url:`#locale`,title:(0,n.jsx)(n.Fragment,{children:`$locale`})},{depth:3,url:`#методы-1`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#getdictionaryforlocale`,title:(0,n.jsx)(n.Fragment,{children:`getDictionaryForLocale()`})},{depth:3,url:`#convertxlifftojs`,title:(0,n.jsx)(n.Fragment,{children:`convertXliffToJs()`})},{depth:3,url:`#jstranslationfilepath`,title:(0,n.jsx)(n.Fragment,{children:`jsTranslationFilePath()`})},{depth:3,url:`#jstranslationfilemtime`,title:(0,n.jsx)(n.Fragment,{children:`jsTranslationFileMtime()`})},{depth:3,url:`#metrolocalefor`,title:(0,n.jsx)(n.Fragment,{children:`metroLocaleFor()`})},{depth:3,url:`#metrolocaleaddonpath`,title:(0,n.jsx)(n.Fragment,{children:`metroLocaleAddonPath()`})},{depth:3,url:`#settranslator`,title:(0,n.jsx)(n.Fragment,{children:`setTranslator()`})},{depth:3,url:`#reset`,title:(0,n.jsx)(n.Fragment,{children:`reset()`})},{depth:3,url:`#gettranslator`,title:(0,n.jsx)(n.Fragment,{children:`getTranslator()`})},{depth:3,url:`#setlocale`,title:(0,n.jsx)(n.Fragment,{children:`setLocale()`})},{depth:3,url:`#getlocale`,title:(0,n.jsx)(n.Fragment,{children:`getLocale()`})},{depth:3,url:`#getlocaledata`,title:(0,n.jsx)(n.Fragment,{children:`getLocaleData()`})},{depth:3,url:`#gettranslation`,title:(0,n.jsx)(n.Fragment,{children:`getTranslation()`})},{depth:3,url:`#gettranslationwithparameters`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationWithParameters()`})},{depth:3,url:`#gettranslationplural`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationPlural()`})},{depth:3,url:`#gettranslationpluralwithparameters`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationPluralWithParameters()`})},{depth:3,url:`#setlocalizationpath`,title:(0,n.jsx)(n.Fragment,{children:`setLocalizationPath()`})},{depth:3,url:`#getlanguages`,title:(0,n.jsx)(n.Fragment,{children:`getLanguages()`})},{depth:3,url:`#normalizelanguages`,title:(0,n.jsx)(n.Fragment,{children:`normalizeLanguages()`})},{depth:3,url:`#loadlanguagemeta`,title:(0,n.jsx)(n.Fragment,{children:`loadLanguageMeta()`})},{depth:3,url:`#languagemetatolegacy`,title:(0,n.jsx)(n.Fragment,{children:`languageMetaToLegacy()`})},{depth:3,url:`#languagesmetaversion`,title:(0,n.jsx)(n.Fragment,{children:`languagesMetaVersion()`})},{depth:3,url:`#getformattedlanguagelist`,title:(0,n.jsx)(n.Fragment,{children:`getFormattedLanguageList()`})},{depth:3,url:`#setusetranslator`,title:(0,n.jsx)(n.Fragment,{children:`setUseTranslator()`})},{depth:3,url:`#isusetranslator`,title:(0,n.jsx)(n.Fragment,{children:`isUseTranslator()`})},{depth:3,url:`#getlocalizationpath`,title:(0,n.jsx)(n.Fragment,{children:`getLocalizationPath()`})},{depth:3,url:`#nontranslator`,title:(0,n.jsx)(n.Fragment,{children:`nonTranslator()`})},{depth:3,url:`#gettranslationarray`,title:(0,n.jsx)(n.Fragment,{children:`getTranslationArray()`})},{depth:3,url:`#loaddictionaryforlocale`,title:(0,n.jsx)(n.Fragment,{children:`loadDictionaryForLocale()`})},{depth:3,url:`#localexliffmtime`,title:(0,n.jsx)(n.Fragment,{children:`localeXliffMtime()`})},{depth:3,url:`#writejstranslationfile`,title:(0,n.jsx)(n.Fragment,{children:`writeJsTranslationFile()`})},{depth:3,url:`#parsexlifffile`,title:(0,n.jsx)(n.Fragment,{children:`parseXliffFile()`})},{depth:3,url:`#flattenfilelist`,title:(0,n.jsx)(n.Fragment,{children:`flattenFileList()`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,h4:`h4`,hr:`hr`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`краткое-содержание`,children:`Краткое содержание:`}),`
`,(0,n.jsx)(t.p,{children:`Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.`}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`свойства`,children:`Свойства`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_translator`,children:`translator`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_localization_path`,children:`localization_path`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private $`,(0,n.jsx)(t.a,{href:`#property_locale`,children:`locale`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`методы`,children:`Методы`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getDictionaryForLocale`,children:`getDictionaryForLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_convertXliffToJs`,children:`convertXliffToJs()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_jsTranslationFilePath`,children:`jsTranslationFilePath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_jsTranslationFileMtime`,children:`jsTranslationFileMtime()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_metroLocaleFor`,children:`metroLocaleFor()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_metroLocaleAddonPath`,children:`metroLocaleAddonPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setTranslator`,children:`setTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_reset`,children:`reset()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslator`,children:`getTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLocale`,children:`setLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocale`,children:`getLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocaleData`,children:`getLocaleData()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslation`,children:`getTranslation()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationWithParameters`,children:`getTranslationWithParameters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationPlural`,children:`getTranslationPlural()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getTranslationPluralWithParameters`,children:`getTranslationPluralWithParameters()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setLocalizationPath`,children:`setLocalizationPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLanguages`,children:`getLanguages()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_normalizeLanguages`,children:`normalizeLanguages()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_loadLanguageMeta`,children:`loadLanguageMeta()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_languageMetaToLegacy`,children:`languageMetaToLegacy()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_languagesMetaVersion`,children:`languagesMetaVersion()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getFormattedLanguageList`,children:`getFormattedLanguageList()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_setUseTranslator`,children:`setUseTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_isUseTranslator`,children:`isUseTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`public `,(0,n.jsx)(t.a,{href:`#method_getLocalizationPath`,children:`getLocalizationPath()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_nonTranslator`,children:`nonTranslator()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_getTranslationArray`,children:`getTranslationArray()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_loadDictionaryForLocale`,children:`loadDictionaryForLocale()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_localeXliffMtime`,children:`localeXliffMtime()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_writeJsTranslationFile`,children:`writeJsTranslationFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_parseXliffFile`,children:`parseXliffFile()`})]}),`
`,(0,n.jsxs)(t.li,{children:[`private `,(0,n.jsx)(t.a,{href:`#method_flattenFileList`,children:`flattenFileList()`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h3,{id:`подробности`,children:`Подробности`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Путь: `,(0,n.jsx)(t.code,{children:`devcraft/src/classes/I18n/Translation.php`})]}),`
`]}),`
`,(0,n.jsx)(t.hr,{}),`
`,(0,n.jsx)(t.h2,{id:`детали`,children:`Детали`}),`
`,(0,n.jsx)(t.h3,{id:`свойства-1`,children:`Свойства`}),`
`,(0,n.jsx)(`span`,{id:`property_translator`}),`
`,(0,n.jsx)(t.h4,{id:`translator`,children:`$translator`}),`
`,(0,n.jsx)(t.p,{children:`Статический фасад локализации: Symfony Translator, XLIFF-каталоги и JS-словари.`}),`
`,(0,n.jsx)(`span`,{id:`property_localization_path`}),`
`,(0,n.jsx)(t.h4,{id:`localization_path`,children:`$localization_path`}),`
`,(0,n.jsx)(t.p,{children:`Абсолютный путь к каталогу локализаций.`}),`
`,(0,n.jsx)(`span`,{id:`property_locale`}),`
`,(0,n.jsx)(t.h4,{id:`locale`,children:`$locale`}),`
`,(0,n.jsx)(t.p,{children:`Текущий тег локали (например, ru_RU).`}),`
`,(0,n.jsx)(t.h3,{id:`методы-1`,children:`Методы`}),`
`,(0,n.jsx)(`span`,{id:`method_getDictionaryForLocale`}),`
`,(0,n.jsx)(t.h3,{id:`getdictionaryforlocale`,children:`getDictionaryForLocale()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает словарь переводов для указанной локали без смены активной локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Ассоциативный массив исходная_строка => перевод.`]}),`
`,(0,n.jsx)(`span`,{id:`method_convertXliffToJs`}),`
`,(0,n.jsx)(t.h3,{id:`convertxlifftojs`,children:`convertXliffToJs()`}),`
`,(0,n.jsx)(t.p,{children:`Генерирует JS-словари переводов из XLIFF для клиентского __().`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_jsTranslationFilePath`}),`
`,(0,n.jsx)(t.h3,{id:`jstranslationfilepath`,children:`jsTranslationFilePath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает абсолютный путь к JS-файлу перевода для локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string Нормализованный путь к translation.{locale}`}),` — .js.`]}),`
`,(0,n.jsx)(`span`,{id:`method_jsTranslationFileMtime`}),`
`,(0,n.jsx)(t.h3,{id:`jstranslationfilemtime`,children:`jsTranslationFileMtime()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает время последней модификации JS-файла перевода.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Unix-timestamp или 0, если файл отсутствует.`]}),`
`,(0,n.jsx)(`span`,{id:`method_metroLocaleFor`}),`
`,(0,n.jsx)(t.h3,{id:`metrolocalefor`,children:`metroLocaleFor()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает двухбуквенный код локали Metro UI для заданного тега.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Код ISO 639-1 (например, ru).`]}),`
`,(0,n.jsx)(`span`,{id:`method_metroLocaleAddonPath`}),`
`,(0,n.jsx)(t.h3,{id:`metrolocaleaddonpath`,children:`metroLocaleAddonPath()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает путь к JS-аддону Metro UI для локали или null, если файл отсутствует.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$metroLocale`}),` — Двухбуквенный код локали Metro.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null Абсолютный путь к metro.{locale}`}),` — .js или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`settranslator`,children:`setTranslator()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает переводчик для модуля с заданными настройками.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_reset`}),`
`,(0,n.jsx)(t.h3,{id:`reset`,children:`reset()`}),`
`,(0,n.jsx)(t.p,{children:`Сбрасывает состояние переводчика и очищает кэш локализации.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslator`,children:`getTranslator()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает экземпляр переводчика, связанный с текущим модулем.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`Translator|null`}),` — Экземпляр переводчика или null.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setLocale`}),`
`,(0,n.jsx)(t.h3,{id:`setlocale`,children:`setLocale()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает локаль для приложения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Новое значение локали.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getLocale`}),`
`,(0,n.jsx)(t.h3,{id:`getlocale`,children:`getLocale()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает текущую локаль или значение по умолчанию (ru_RU).`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Текущая локаль.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getLocaleData`}),`
`,(0,n.jsx)(t.h3,{id:`getlocaledata`,children:`getLocaleData()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает локализованные данные для указанного языка.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Код языка.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — mixed> Массив данных локализации или пустой массив.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslation`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslation`,children:`getTranslation()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$phrase`}),` — Фраза для перевода.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Переведённая строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationWithParameters`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationwithparameters`,children:`getTranslationWithParameters()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с установленными параметрами.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$phrase`}),` — Исходная фраза.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Переведённая фраза или исходная строка при отключённом переводчике.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationPlural`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationplural`,children:`getTranslationPlural()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с учётом множественного числа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$phrase`}),` — Переводимая фраза.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$count`}),` — Количество для выбора формы.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Переведённая строка с учётом склонения.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationPluralWithParameters`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationpluralwithparameters`,children:`getTranslationPluralWithParameters()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает переведённую фразу с параметрами множественного числа.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$phrase`}),` — Фраза для перевода.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$count`}),` — Число для выбора варианта склонения.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Переведённая фраза с учётом склонений и параметров.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setLocalizationPath`}),`
`,(0,n.jsx)(t.h3,{id:`setlocalizationpath`,children:`setLocalizationPath()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает путь до переводимых фраз.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$localization_path`}),` — Абсолютный или относительный путь к каталогу локалей.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_getLanguages`}),`
`,(0,n.jsx)(t.h3,{id:`getlanguages`,children:`getLanguages()`}),`
`,(0,n.jsx)(t.p,{children:`Получает список доступных языков.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — LanguageData> Массив языков: тег => метаданные.`]}),`
`,(0,n.jsx)(`span`,{id:`method_normalizeLanguages`}),`
`,(0,n.jsx)(t.h3,{id:`normalizelanguages`,children:`normalizeLanguages()`}),`
`,(0,n.jsx)(t.p,{children:`Нормализует список языков после чтения из файлового JSON-кэша.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — LanguageData> Массив языков: тег => метаданные.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadLanguageMeta`}),`
`,(0,n.jsx)(t.h3,{id:`loadlanguagemeta`,children:`loadLanguageMeta()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает метаданные языка из meta.php или формирует значения по умолчанию.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`LanguageData`}),` — Объект с названиями и кодами языка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_languageMetaToLegacy`}),`
`,(0,n.jsx)(t.h3,{id:`languagemetatolegacy`,children:`languageMetaToLegacy()`}),`
`,(0,n.jsx)(t.p,{children:`Преобразует LanguageData в legacy-формат списка языков.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$data`}),` — Метаданные языка.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array{original: string, english: string, iso2: string, tag: string}`}),` —`]}),`
`,(0,n.jsx)(`span`,{id:`method_languagesMetaVersion`}),`
`,(0,n.jsx)(t.h3,{id:`languagesmetaversion`,children:`languagesMetaVersion()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает версию кэша списка языков по mtime файлов meta.php.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Строковое представление максимального mtime.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getFormattedLanguageList`}),`
`,(0,n.jsx)(t.h3,{id:`getformattedlanguagelist`,children:`getFormattedLanguageList()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает отформатированный список языков с заданным шаблоном.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$format`}),` — Шаблон подстановки ({originalName}, {englishName}, {iso2}, {tag}).`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<int, array<string, string>>`}),` — Массив с ключами tag и name.`]}),`
`,(0,n.jsx)(`span`,{id:`method_setUseTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`setusetranslator`,children:`setUseTranslator()`}),`
`,(0,n.jsx)(t.p,{children:`Устанавливает использование переводчика.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$use_translator`}),` — true — включить переводчик.`]}),`
`]}),`
`,(0,n.jsx)(`span`,{id:`method_isUseTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`isusetranslator`,children:`isUseTranslator()`}),`
`,(0,n.jsx)(t.p,{children:`Проверяет, используется ли переводчик.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true, если переводчик активен.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getLocalizationPath`}),`
`,(0,n.jsx)(t.h3,{id:`getlocalizationpath`,children:`getLocalizationPath()`}),`
`,(0,n.jsx)(t.p,{children:`Получает путь к локализации приложения.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string|null`}),` — Полный нормализованный путь к каталогу локалей.`]}),`
`,(0,n.jsx)(`span`,{id:`method_nonTranslator`}),`
`,(0,n.jsx)(t.h3,{id:`nontranslator`,children:`nonTranslator()`}),`
`,(0,n.jsx)(t.p,{children:`Заменяет плейсхолдеры в строке без использования переводчика.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$phrase`}),` — Исходная строка.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`string`}),` — Обработанная строка.`]}),`
`,(0,n.jsx)(`span`,{id:`method_getTranslationArray`}),`
`,(0,n.jsx)(t.h3,{id:`gettranslationarray`,children:`getTranslationArray()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает массив переводов для текущей активной локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Словарь переводов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_loadDictionaryForLocale`}),`
`,(0,n.jsx)(t.h3,{id:`loaddictionaryforlocale`,children:`loadDictionaryForLocale()`}),`
`,(0,n.jsx)(t.p,{children:`Загружает словарь переводов из XLIFF-файлов указанной локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Ассоциативный массив переводов.`]}),`
`,(0,n.jsx)(`span`,{id:`method_localeXliffMtime`}),`
`,(0,n.jsx)(t.h3,{id:`localexliffmtime`,children:`localeXliffMtime()`}),`
`,(0,n.jsx)(t.p,{children:`Возвращает максимальный mtime XLIFF-файлов локали.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`int`}),` — Unix-timestamp или 0.`]}),`
`,(0,n.jsx)(`span`,{id:`method_writeJsTranslationFile`}),`
`,(0,n.jsx)(t.h3,{id:`writejstranslationfile`,children:`writeJsTranslationFile()`}),`
`,(0,n.jsx)(t.p,{children:`Записывает JS-файл словаря переводов для клиентского DevCraftI18n.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$path`}),` — Путь к выходному файлу.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$locale`}),` — Тег локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`bool`}),` — true при успешной записи.`]}),`
`,(0,n.jsx)(`span`,{id:`method_parseXliffFile`}),`
`,(0,n.jsx)(t.h3,{id:`parsexlifffile`,children:`parseXliffFile()`}),`
`,(0,n.jsx)(t.p,{children:`Парсит один XLIFF-файл и возвращает пары source => target.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 173.3.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$filePath`}),` — Имя или относительный путь файла.`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$directory`}),` — Каталог локали.`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`array<string,`}),` — string> Извлечённые переводы.`]}),`
`,(0,n.jsx)(`span`,{id:`method_flattenFileList`}),`
`,(0,n.jsx)(t.h3,{id:`flattenfilelist`,children:`flattenFileList()`}),`
`,(0,n.jsx)(t.p,{children:`Разворачивает древовидный список файлов dirToArray в плоский список путей.`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`Параметры:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`$tree`}),` — Дерево каталогов от DataManager::dirToArray().`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`list<string>`}),` — Относительные пути файлов.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};