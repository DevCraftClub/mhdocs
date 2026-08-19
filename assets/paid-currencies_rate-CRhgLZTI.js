import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Цены по курсу валют`,description:`Документация по плагину цены по курсу валют для DLE.`,version:`3.1.1`},i=new Date(1787142659e3),a=`

**Ссылка на разработку**: [Перейти к разработке](https://devcraft.club/shop/cena-po-kursu-valjut.4/)

## **Установка** [#установка]

* Для установки достаточно закинуть в корень сайта все файлы и загрузить файл с настройками (**kurscbr.xml**) в админпанеле через менеджер плагинов.
* Для версий DLE ниже |- Создайте доп. поле с типом списка со следующими значениями:

\`\`\`
AED|AED - Дирхам Арабских Эмиратов
ALL|ALL - Лек
AMD|AMD - Драма
ANG|ANG - Нидерландский Антильский Гульден
AOA|AOA - Кванза
ARS|ARS - Аргентинское Песо
AUD|AUD - Австралийский Доллар
AZN|AZN - Азербайджанский Манат
BBD|BBD - Барбадосский Доллар
BDT|BDT - Така
BGN|BGN - Болгарский Лев
BHD|BHD - Бахрейнский Динар
BRL|BRL - Бразильский Реал
BSD|BSD - Багамский Доллар
BWP|BWP - Ботсваны Пула
BYN|BYN - Белорусский Рубль
CAD|CAD - Канадский Доллар
CHF|CHF - Швейцарский Франк
CLP|CLP - Чилийское Песо
CNY|CNY - Китайский Юань
COP|COP - Колумбийское Песо
CZK|CZK - Чешская Крона
DKK|DKK - Датская Крона
DOP|DOP - Доминиканское Песо
EGP|EGP - Египетский Фунт
ETB|ETB - Эфиопский Быр
EUR|EUR - Евро
FJD|FJD - Фиджийский Доллар
GBP|GBP - Британский Фунт
GEL|GEL - Грузинский Лари
GHS|GHS - Ганский Седи
GTQ|GTQ - Гватемальский Кетсаль
HKD|HKD - Гонконгский Доллар
HNL|HNL - Гондурасская Лемпира
HRK|HRK - Хорватская Куна
HUF|HUF - Венгерский Форинт
IDR|IDR - Индонезийская Рупия
ILS|ILS - Новый Израильский Шекель
INR|INR - Индийская Рупия
IQD|IQD - Иракский Динар
IRR|IRR - Иранский Риал
ISK|ISK - Исландская Крона
JMD|JMD - Ямайский Доллар
JOD|JOD - Иорданский Динар
JPY|JPY - Японская Иена
KES|KES - Кенийский Шиллинг
KHR|KHR - Камбоджийский Риель
KRW|KRW - Южнокорейская Вона
KWD|KWD - Кувейтский Динар
KZT|KZT - Казахстанский Тенге
LAK|LAK - Лаосский Кип
LBP|LBP - Ливанский Фунт
LKR|LKR - Шри-Ланкийская Рупия
MAD|MAD - Марокканский Дирхам
MDL|MDL - Молдавский Лей
MKD|MKD - Денар Республики Македония
MMK|MMK - Мьянманский Чат
MUR|MUR - Маврикийская Рупия
MXN|MXN - Мексиканское Песо
MYR|MYR - Малайзийский Ринггит
NAD|NAD - Доллар Намибии
NGN|NGN - Найра
NOK|NOK - Норвежская Крона
NZD|NZD - Новозеландский Доллар
OMR|OMR - Оманский Риал
PAB|PAB - Бальбоа
PEN|PEN - Перуанский Соль
PGK|PGK - Папуа-Новой Гвинеи Кина
PHP|PHP - Филиппинское Песо
PKR|PKR - Пакистанская Рупия
PLN|PLN - Злотый
PYG|PYG - Парагвайский Гуарани
QAR|QAR - Катарский Риал
RON|RON - Румынский Лей
RSD|RSD - Сербский Динар
RUB|RUB - Рубль
SAR|SAR - Саудовский Риял
SCR|SCR - Сейшельская Рупия
SEK|SEK - Шведская Крона
SGD|SGD - Сингапурский Доллар
THB|THB - Бат
TJS|TJS - Таджикских Сомони
TND|TND - Тунисский Динар
TRY|TRY - Турецкая Лира
TTD|TTD - Тринидад И Тобаго Доллар
TWD|TWD - Новый Тайваньский Доллар
TZS|TZS - Танзанийский Шиллинг
UAH|UAH - Украинская Гривна
USD|USD - Доллар
UYU|UYU - Уругвайское Песо
UZS|UZS - Узбекский Сом
VEF|VEF - Боливар
VND|VND - Донг
XAF|XAF - Франк Кфа Beac
XCD|XCD - Восточно-Карибский Доллар
XOF|XOF - Западно-Африканский Франк Кфа Фран
XPF|XPF - Франк Кфп
ZAR|ZAR - Южноафриканский Рэнд
ZMW|ZMW - Замбийская Квача
\`\`\`

* Регистрируемся на сайте сервиса: [exchangerate-api](https://www.exchangerate-api.com/)
* Настраиваем всё в админпанеле
* Удаляем **install.php** с корня сайта

## **Теги и использование** [#теги-и-использование]

### main.tpl [#maintpl]

Для подключения **на главной** (main.tpl) достаточно этой строчки:

\`\`\`html
{include file="engine/modules/kurscbr.php?mod=site&from=XXX"}
\`\`\`

Вместо **ХХХ** впишите свою валюту. От этой валюты будет идти расчёт. Все доступные валюты можно узнать ниже. В шаблоне можно указывать след. теги:

| Тег                 | Описание                                              |
| ------------------- | ----------------------------------------------------- |
| **\\{cur\\_XXX}**     | выводит курс по соотношению изначальной валюты        |
| **\\{cur\\_id\\_XXX}** | выводит идентификатор валюты в виде **USD, EUR, RUB** |

### full.tpl [#fulltpl]

Для шаблона **в полной новости** (full.tpl) доступны следующие теги:

| Тег                 | Описание                                                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **\\{cur\\_XXX}**     | выводит окончательную цену по курсу                                                                                                      |
| **\\{cur\\_id\\_XXX}** | выводит идентификатор валюты в виде **USD, EUR, RUB** или название валюты в виде **Доллар, Рубль, Евро**. Смотря как вы настроили у себя |
| **\\{curs\\_XXX}**    | выводит курс к изначальной валюте.                                                                                                       |
| **\\{price\\_ori}**   | выводит исходную цену                                                                                                                    |
| **\\{valuta\\_ori}**  | выводит исходную валюту                                                                                                                  |

### fullstory.tpl [#fullstorytpl]

Чтобы подключить модуль в шаблоне с полной новостью (fullstory.tpl) добавляем строчку:

\`\`\`html
{include file="engine/modules/kurscbr.php?news_id={news-id}&save=CUR:field"}
\`\`\`

* Параметр **news\\_id** **обязателен** к использованию. Он указывает ID новости.
* Параметр **save** указывается тогда, когда нужно сохранить отформатирование значение в определённое поле. К примеру: основная цена в евро, то в этом поле будет сохранена отконвертированная сумма.
* Вместо **CUR**указываем нужную **валюту**
* вместо **field** - **доп. поле*&#x2A;. Эти значения разделяются двоеточием (&#x2A;*:**). Если надо сохранить в несколько полей, то используйте **запятую** в качестве разделителя.

\`\`\`html
{include file="engine/modules/kurscbr.php?news_id={news-id}&save=EUR:eur_price,USD:usd:price"}
\`\`\`

## Доступные к использованию валюты [#доступные-к-использованию-валюты]

**На данный момент API поддерживает эти валюты:**

| Идентификатор | Описание                           |
| ------------- | ---------------------------------- |
| AED           | Дирхам Арабских Эмиратов           |
| ALL           | Лек                                |
| AMD           | Драма                              |
| ANG           | Нидерландский Антильский Гульден   |
| AOA           | Кванза                             |
| ARS           | Аргентинское Песо                  |
| AUD           | Австралийский Доллар               |
| AZN           | Азербайджанский Манат              |
| BBD           | Барбадосский Доллар                |
| BGN           | Болгарский Лев                     |
| BHD           | Бахрейнский Динар                  |
| BRL           | Бразильский Реал                   |
| BSD           | Багамский Доллар                   |
| BWP           | Ботсваны Пула                      |
| BYN           | Белорусский Рубль                  |
| CAD           | Канадский Доллар                   |
| CHF           | Швейцарский Франк                  |
| CLP           | Чилийское Песо                     |
| CNY           | Китайский Юань                     |
| COP           | Колумбийское Песо                  |
| CZK           | Чешская Крона                      |
| DKK           | Датская Крона                      |
| DOP           | Доминиканское Песо                 |
| EGP           | Египетский Фунт                    |
| ETB           | Эфиопский Быр                      |
| EUR           | Евро                               |
| FJD           | Фиджийский Доллар                  |
| GBP           | Британский Фунт                    |
| GEL           | Грузинский Лари                    |
| GHS           | Ганский Седи                       |
| GTQ           | Гватемальский Кетсаль              |
| HKD           | Гонконгский Доллар                 |
| HNL           | Гондурасская Лемпира               |
| HRK           | Хорватская Куна                    |
| HUF           | Венгерский Форинт                  |
| IDR           | Индонезийская Рупия                |
| ILS           | Новый Израильский Шекель           |
| INR           | Индийская Рупия                    |
| IQD           | Иракский Динар                     |
| IRR           | Иранский Риал                      |
| ISK           | Исландская Крона                   |
| JMD           | Ямайский Доллар                    |
| JOD           | Иорданский Динар                   |
| JPY           | Японская Иена                      |
| KES           | Кенийский Шиллинг                  |
| KHR           | Камбоджийский Риель                |
| KRW           | Южнокорейская Вона                 |
| KWD           | Кувейтский Динар                   |
| KZT           | Казахстанский Тенге                |
| LAK           | Лаосский Кип                       |
| LBP           | Ливанский Фунт                     |
| LKR           | Шри-Ланкийская Рупия               |
| MAD           | Марокканский Дирхам                |
| MDL           | Молдавский Лей                     |
| MKD           | Денар Республики Македония         |
| MMK           | Мьянманский Чат                    |
| MUR           | Маврикийская Рупия                 |
| MXN           | Мексиканское Песо                  |
| MYR           | Малайзийский Ринггит               |
| NAD           | Доллар Намибии                     |
| NGN           | Найра                              |
| NOK           | Норвежская Крона                   |
| NZD           | Новозеландский Доллар              |
| OMR           | Оманский Риал                      |
| PAB           | Бальбоа                            |
| PEN           | Перуанский Соль                    |
| PGK           | Папуа-Новой Гвинеи Кина            |
| PHP           | Филиппинское Песо                  |
| PKR           | Пакистанская Рупия                 |
| PLN           | Злотый                             |
| PYG           | Парагвайский Гуарани               |
| QAR           | Катарский Риал                     |
| RON           | Румынский Лей                      |
| RSD           | Сербский Динар                     |
| RUB           | Рубль                              |
| SAR           | Саудовский Риял                    |
| SCR           | Сейшельская Рупия                  |
| SEK           | Шведская Крона                     |
| SGD           | Сингапурский Доллар                |
| THB           | Бат                                |
| TJS           | Таджикских Сомони                  |
| TND           | Тунисский Динар                    |
| TRY           | Турецкая Лира                      |
| TTD           | Тринидад И Тобаго Доллар           |
| TWD           | Новый Тайваньский Доллар           |
| TZS           | Танзанийский Шиллинг               |
| UAH           | Украинская Гривна                  |
| USD           | Доллар                             |
| UYU           | Уругвайское Песо                   |
| UZS           | Узбекский Сом                      |
| VEF           | Боливар                            |
| VND           | Донг                               |
| XAF           | Франк Кфа Beac                     |
| XCD           | Восточно-Карибский Доллар          |
| XOF           | Западно-Африканский Франк Кфа Фран |
| XPF           | Франк Кфп                          |
| ZAR           | Южноафриканский Рэнд               |
| ZMW           | Замбийская Квача                   |

Если описание какой-либо валюты неверно - пишите
`,o={contents:[{heading:void 0,content:`**Ссылка на разработку**: Перейти к разработке`},{heading:`установка`,content:`Для установки достаточно закинуть в корень сайта все файлы и загрузить файл с настройками (**kurscbr.xml**) в админпанеле через менеджер плагинов.`},{heading:`установка`,content:`Для версий DLE ниже |- Создайте доп. поле с типом списка со следующими значениями:`},{heading:`установка`,content:`Регистрируемся на сайте сервиса: exchangerate-api`},{heading:`установка`,content:`Настраиваем всё в админпанеле`},{heading:`установка`,content:`Удаляем **install.php** с корня сайта`},{heading:`maintpl`,content:`Для подключения **на главной** (main.tpl) достаточно этой строчки:`},{heading:`maintpl`,content:`Вместо **ХХХ** впишите свою валюту. От этой валюты будет идти расчёт. Все доступные валюты можно узнать ниже. В шаблоне можно указывать след. теги:`},{heading:`maintpl`,content:`Тег`},{heading:`maintpl`,content:`Описание`},{heading:`maintpl`,content:`**\\{cur\\_XXX}**`},{heading:`maintpl`,content:`выводит курс по соотношению изначальной валюты`},{heading:`maintpl`,content:`**\\{cur\\_id\\_XXX}**`},{heading:`maintpl`,content:`выводит идентификатор валюты в виде **USD, EUR, RUB**`},{heading:`fulltpl`,content:`Для шаблона **в полной новости** (full.tpl) доступны следующие теги:`},{heading:`fulltpl`,content:`Тег`},{heading:`fulltpl`,content:`Описание`},{heading:`fulltpl`,content:`**\\{cur\\_XXX}**`},{heading:`fulltpl`,content:`выводит окончательную цену по курсу`},{heading:`fulltpl`,content:`**\\{cur\\_id\\_XXX}**`},{heading:`fulltpl`,content:`выводит идентификатор валюты в виде **USD, EUR, RUB** или название валюты в виде **Доллар, Рубль, Евро**. Смотря как вы настроили у себя`},{heading:`fulltpl`,content:`**\\{curs\\_XXX}**`},{heading:`fulltpl`,content:`выводит курс к изначальной валюте.`},{heading:`fulltpl`,content:`**\\{price\\_ori}**`},{heading:`fulltpl`,content:`выводит исходную цену`},{heading:`fulltpl`,content:`**\\{valuta\\_ori}**`},{heading:`fulltpl`,content:`выводит исходную валюту`},{heading:`fullstorytpl`,content:`Чтобы подключить модуль в шаблоне с полной новостью (fullstory.tpl) добавляем строчку:`},{heading:`fullstorytpl`,content:`Параметр **news\\_id** **обязателен** к использованию. Он указывает ID новости.`},{heading:`fullstorytpl`,content:`Параметр **save** указывается тогда, когда нужно сохранить отформатирование значение в определённое поле. К примеру: основная цена в евро, то в этом поле будет сохранена отконвертированная сумма.`},{heading:`fullstorytpl`,content:`Вместо **CUR**указываем нужную **валюту**`},{heading:`fullstorytpl`,content:`вместо **field** - **доп. поле*&#x2A;. Эти значения разделяются двоеточием (&#x2A;*:**). Если надо сохранить в несколько полей, то используйте **запятую** в качестве разделителя.`},{heading:`доступные-к-использованию-валюты`,content:`**На данный момент API поддерживает эти валюты:**`},{heading:`доступные-к-использованию-валюты`,content:`Идентификатор`},{heading:`доступные-к-использованию-валюты`,content:`Описание`},{heading:`доступные-к-использованию-валюты`,content:`AED`},{heading:`доступные-к-использованию-валюты`,content:`Дирхам Арабских Эмиратов`},{heading:`доступные-к-использованию-валюты`,content:`ALL`},{heading:`доступные-к-использованию-валюты`,content:`Лек`},{heading:`доступные-к-использованию-валюты`,content:`AMD`},{heading:`доступные-к-использованию-валюты`,content:`Драма`},{heading:`доступные-к-использованию-валюты`,content:`ANG`},{heading:`доступные-к-использованию-валюты`,content:`Нидерландский Антильский Гульден`},{heading:`доступные-к-использованию-валюты`,content:`AOA`},{heading:`доступные-к-использованию-валюты`,content:`Кванза`},{heading:`доступные-к-использованию-валюты`,content:`ARS`},{heading:`доступные-к-использованию-валюты`,content:`Аргентинское Песо`},{heading:`доступные-к-использованию-валюты`,content:`AUD`},{heading:`доступные-к-использованию-валюты`,content:`Австралийский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`AZN`},{heading:`доступные-к-использованию-валюты`,content:`Азербайджанский Манат`},{heading:`доступные-к-использованию-валюты`,content:`BBD`},{heading:`доступные-к-использованию-валюты`,content:`Барбадосский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`BGN`},{heading:`доступные-к-использованию-валюты`,content:`Болгарский Лев`},{heading:`доступные-к-использованию-валюты`,content:`BHD`},{heading:`доступные-к-использованию-валюты`,content:`Бахрейнский Динар`},{heading:`доступные-к-использованию-валюты`,content:`BRL`},{heading:`доступные-к-использованию-валюты`,content:`Бразильский Реал`},{heading:`доступные-к-использованию-валюты`,content:`BSD`},{heading:`доступные-к-использованию-валюты`,content:`Багамский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`BWP`},{heading:`доступные-к-использованию-валюты`,content:`Ботсваны Пула`},{heading:`доступные-к-использованию-валюты`,content:`BYN`},{heading:`доступные-к-использованию-валюты`,content:`Белорусский Рубль`},{heading:`доступные-к-использованию-валюты`,content:`CAD`},{heading:`доступные-к-использованию-валюты`,content:`Канадский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`CHF`},{heading:`доступные-к-использованию-валюты`,content:`Швейцарский Франк`},{heading:`доступные-к-использованию-валюты`,content:`CLP`},{heading:`доступные-к-использованию-валюты`,content:`Чилийское Песо`},{heading:`доступные-к-использованию-валюты`,content:`CNY`},{heading:`доступные-к-использованию-валюты`,content:`Китайский Юань`},{heading:`доступные-к-использованию-валюты`,content:`COP`},{heading:`доступные-к-использованию-валюты`,content:`Колумбийское Песо`},{heading:`доступные-к-использованию-валюты`,content:`CZK`},{heading:`доступные-к-использованию-валюты`,content:`Чешская Крона`},{heading:`доступные-к-использованию-валюты`,content:`DKK`},{heading:`доступные-к-использованию-валюты`,content:`Датская Крона`},{heading:`доступные-к-использованию-валюты`,content:`DOP`},{heading:`доступные-к-использованию-валюты`,content:`Доминиканское Песо`},{heading:`доступные-к-использованию-валюты`,content:`EGP`},{heading:`доступные-к-использованию-валюты`,content:`Египетский Фунт`},{heading:`доступные-к-использованию-валюты`,content:`ETB`},{heading:`доступные-к-использованию-валюты`,content:`Эфиопский Быр`},{heading:`доступные-к-использованию-валюты`,content:`EUR`},{heading:`доступные-к-использованию-валюты`,content:`Евро`},{heading:`доступные-к-использованию-валюты`,content:`FJD`},{heading:`доступные-к-использованию-валюты`,content:`Фиджийский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`GBP`},{heading:`доступные-к-использованию-валюты`,content:`Британский Фунт`},{heading:`доступные-к-использованию-валюты`,content:`GEL`},{heading:`доступные-к-использованию-валюты`,content:`Грузинский Лари`},{heading:`доступные-к-использованию-валюты`,content:`GHS`},{heading:`доступные-к-использованию-валюты`,content:`Ганский Седи`},{heading:`доступные-к-использованию-валюты`,content:`GTQ`},{heading:`доступные-к-использованию-валюты`,content:`Гватемальский Кетсаль`},{heading:`доступные-к-использованию-валюты`,content:`HKD`},{heading:`доступные-к-использованию-валюты`,content:`Гонконгский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`HNL`},{heading:`доступные-к-использованию-валюты`,content:`Гондурасская Лемпира`},{heading:`доступные-к-использованию-валюты`,content:`HRK`},{heading:`доступные-к-использованию-валюты`,content:`Хорватская Куна`},{heading:`доступные-к-использованию-валюты`,content:`HUF`},{heading:`доступные-к-использованию-валюты`,content:`Венгерский Форинт`},{heading:`доступные-к-использованию-валюты`,content:`IDR`},{heading:`доступные-к-использованию-валюты`,content:`Индонезийская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`ILS`},{heading:`доступные-к-использованию-валюты`,content:`Новый Израильский Шекель`},{heading:`доступные-к-использованию-валюты`,content:`INR`},{heading:`доступные-к-использованию-валюты`,content:`Индийская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`IQD`},{heading:`доступные-к-использованию-валюты`,content:`Иракский Динар`},{heading:`доступные-к-использованию-валюты`,content:`IRR`},{heading:`доступные-к-использованию-валюты`,content:`Иранский Риал`},{heading:`доступные-к-использованию-валюты`,content:`ISK`},{heading:`доступные-к-использованию-валюты`,content:`Исландская Крона`},{heading:`доступные-к-использованию-валюты`,content:`JMD`},{heading:`доступные-к-использованию-валюты`,content:`Ямайский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`JOD`},{heading:`доступные-к-использованию-валюты`,content:`Иорданский Динар`},{heading:`доступные-к-использованию-валюты`,content:`JPY`},{heading:`доступные-к-использованию-валюты`,content:`Японская Иена`},{heading:`доступные-к-использованию-валюты`,content:`KES`},{heading:`доступные-к-использованию-валюты`,content:`Кенийский Шиллинг`},{heading:`доступные-к-использованию-валюты`,content:`KHR`},{heading:`доступные-к-использованию-валюты`,content:`Камбоджийский Риель`},{heading:`доступные-к-использованию-валюты`,content:`KRW`},{heading:`доступные-к-использованию-валюты`,content:`Южнокорейская Вона`},{heading:`доступные-к-использованию-валюты`,content:`KWD`},{heading:`доступные-к-использованию-валюты`,content:`Кувейтский Динар`},{heading:`доступные-к-использованию-валюты`,content:`KZT`},{heading:`доступные-к-использованию-валюты`,content:`Казахстанский Тенге`},{heading:`доступные-к-использованию-валюты`,content:`LAK`},{heading:`доступные-к-использованию-валюты`,content:`Лаосский Кип`},{heading:`доступные-к-использованию-валюты`,content:`LBP`},{heading:`доступные-к-использованию-валюты`,content:`Ливанский Фунт`},{heading:`доступные-к-использованию-валюты`,content:`LKR`},{heading:`доступные-к-использованию-валюты`,content:`Шри-Ланкийская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`MAD`},{heading:`доступные-к-использованию-валюты`,content:`Марокканский Дирхам`},{heading:`доступные-к-использованию-валюты`,content:`MDL`},{heading:`доступные-к-использованию-валюты`,content:`Молдавский Лей`},{heading:`доступные-к-использованию-валюты`,content:`MKD`},{heading:`доступные-к-использованию-валюты`,content:`Денар Республики Македония`},{heading:`доступные-к-использованию-валюты`,content:`MMK`},{heading:`доступные-к-использованию-валюты`,content:`Мьянманский Чат`},{heading:`доступные-к-использованию-валюты`,content:`MUR`},{heading:`доступные-к-использованию-валюты`,content:`Маврикийская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`MXN`},{heading:`доступные-к-использованию-валюты`,content:`Мексиканское Песо`},{heading:`доступные-к-использованию-валюты`,content:`MYR`},{heading:`доступные-к-использованию-валюты`,content:`Малайзийский Ринггит`},{heading:`доступные-к-использованию-валюты`,content:`NAD`},{heading:`доступные-к-использованию-валюты`,content:`Доллар Намибии`},{heading:`доступные-к-использованию-валюты`,content:`NGN`},{heading:`доступные-к-использованию-валюты`,content:`Найра`},{heading:`доступные-к-использованию-валюты`,content:`NOK`},{heading:`доступные-к-использованию-валюты`,content:`Норвежская Крона`},{heading:`доступные-к-использованию-валюты`,content:`NZD`},{heading:`доступные-к-использованию-валюты`,content:`Новозеландский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`OMR`},{heading:`доступные-к-использованию-валюты`,content:`Оманский Риал`},{heading:`доступные-к-использованию-валюты`,content:`PAB`},{heading:`доступные-к-использованию-валюты`,content:`Бальбоа`},{heading:`доступные-к-использованию-валюты`,content:`PEN`},{heading:`доступные-к-использованию-валюты`,content:`Перуанский Соль`},{heading:`доступные-к-использованию-валюты`,content:`PGK`},{heading:`доступные-к-использованию-валюты`,content:`Папуа-Новой Гвинеи Кина`},{heading:`доступные-к-использованию-валюты`,content:`PHP`},{heading:`доступные-к-использованию-валюты`,content:`Филиппинское Песо`},{heading:`доступные-к-использованию-валюты`,content:`PKR`},{heading:`доступные-к-использованию-валюты`,content:`Пакистанская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`PLN`},{heading:`доступные-к-использованию-валюты`,content:`Злотый`},{heading:`доступные-к-использованию-валюты`,content:`PYG`},{heading:`доступные-к-использованию-валюты`,content:`Парагвайский Гуарани`},{heading:`доступные-к-использованию-валюты`,content:`QAR`},{heading:`доступные-к-использованию-валюты`,content:`Катарский Риал`},{heading:`доступные-к-использованию-валюты`,content:`RON`},{heading:`доступные-к-использованию-валюты`,content:`Румынский Лей`},{heading:`доступные-к-использованию-валюты`,content:`RSD`},{heading:`доступные-к-использованию-валюты`,content:`Сербский Динар`},{heading:`доступные-к-использованию-валюты`,content:`RUB`},{heading:`доступные-к-использованию-валюты`,content:`Рубль`},{heading:`доступные-к-использованию-валюты`,content:`SAR`},{heading:`доступные-к-использованию-валюты`,content:`Саудовский Риял`},{heading:`доступные-к-использованию-валюты`,content:`SCR`},{heading:`доступные-к-использованию-валюты`,content:`Сейшельская Рупия`},{heading:`доступные-к-использованию-валюты`,content:`SEK`},{heading:`доступные-к-использованию-валюты`,content:`Шведская Крона`},{heading:`доступные-к-использованию-валюты`,content:`SGD`},{heading:`доступные-к-использованию-валюты`,content:`Сингапурский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`THB`},{heading:`доступные-к-использованию-валюты`,content:`Бат`},{heading:`доступные-к-использованию-валюты`,content:`TJS`},{heading:`доступные-к-использованию-валюты`,content:`Таджикских Сомони`},{heading:`доступные-к-использованию-валюты`,content:`TND`},{heading:`доступные-к-использованию-валюты`,content:`Тунисский Динар`},{heading:`доступные-к-использованию-валюты`,content:`TRY`},{heading:`доступные-к-использованию-валюты`,content:`Турецкая Лира`},{heading:`доступные-к-использованию-валюты`,content:`TTD`},{heading:`доступные-к-использованию-валюты`,content:`Тринидад И Тобаго Доллар`},{heading:`доступные-к-использованию-валюты`,content:`TWD`},{heading:`доступные-к-использованию-валюты`,content:`Новый Тайваньский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`TZS`},{heading:`доступные-к-использованию-валюты`,content:`Танзанийский Шиллинг`},{heading:`доступные-к-использованию-валюты`,content:`UAH`},{heading:`доступные-к-использованию-валюты`,content:`Украинская Гривна`},{heading:`доступные-к-использованию-валюты`,content:`USD`},{heading:`доступные-к-использованию-валюты`,content:`Доллар`},{heading:`доступные-к-использованию-валюты`,content:`UYU`},{heading:`доступные-к-использованию-валюты`,content:`Уругвайское Песо`},{heading:`доступные-к-использованию-валюты`,content:`UZS`},{heading:`доступные-к-использованию-валюты`,content:`Узбекский Сом`},{heading:`доступные-к-использованию-валюты`,content:`VEF`},{heading:`доступные-к-использованию-валюты`,content:`Боливар`},{heading:`доступные-к-использованию-валюты`,content:`VND`},{heading:`доступные-к-использованию-валюты`,content:`Донг`},{heading:`доступные-к-использованию-валюты`,content:`XAF`},{heading:`доступные-к-использованию-валюты`,content:`Франк Кфа Beac`},{heading:`доступные-к-использованию-валюты`,content:`XCD`},{heading:`доступные-к-использованию-валюты`,content:`Восточно-Карибский Доллар`},{heading:`доступные-к-использованию-валюты`,content:`XOF`},{heading:`доступные-к-использованию-валюты`,content:`Западно-Африканский Франк Кфа Фран`},{heading:`доступные-к-использованию-валюты`,content:`XPF`},{heading:`доступные-к-использованию-валюты`,content:`Франк Кфп`},{heading:`доступные-к-использованию-валюты`,content:`ZAR`},{heading:`доступные-к-использованию-валюты`,content:`Южноафриканский Рэнд`},{heading:`доступные-к-использованию-валюты`,content:`ZMW`},{heading:`доступные-к-использованию-валюты`,content:`Замбийская Квача`},{heading:`доступные-к-использованию-валюты`,content:`Если описание какой-либо валюты неверно - пишите`}],headings:[{id:`установка`,content:`**Установка**`},{id:`теги-и-использование`,content:`**Теги и использование**`},{id:`maintpl`,content:`main.tpl`},{id:`fulltpl`,content:`full.tpl`},{id:`fullstorytpl`,content:`fullstory.tpl`},{id:`доступные-к-использованию-валюты`,content:`Доступные к использованию валюты`}]},s=[{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`strong`,{children:`Установка`})})},{depth:2,url:`#теги-и-использование`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`strong`,{children:`Теги и использование`})})},{depth:3,url:`#maintpl`,title:(0,n.jsx)(n.Fragment,{children:`main.tpl`})},{depth:3,url:`#fulltpl`,title:(0,n.jsx)(n.Fragment,{children:`full.tpl`})},{depth:3,url:`#fullstorytpl`,title:(0,n.jsx)(n.Fragment,{children:`fullstory.tpl`})},{depth:2,url:`#доступные-к-использованию-валюты`,title:(0,n.jsx)(n.Fragment,{children:`Доступные к использованию валюты`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Ссылка на разработку`}),`: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/shop/cena-po-kursu-valjut.4/`,children:`Перейти к разработке`})]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:(0,n.jsx)(t.strong,{children:`Установка`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Для установки достаточно закинуть в корень сайта все файлы и загрузить файл с настройками (`,(0,n.jsx)(t.strong,{children:`kurscbr.xml`}),`) в админпанеле через менеджер плагинов.`]}),`
`,(0,n.jsx)(t.li,{children:`Для версий DLE ниже |- Создайте доп. поле с типом списка со следующими значениями:`}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`AED|AED - Дирхам Арабских Эмиратов`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ALL|ALL - Лек`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`AMD|AMD - Драма`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ANG|ANG - Нидерландский Антильский Гульден`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`AOA|AOA - Кванза`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ARS|ARS - Аргентинское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`AUD|AUD - Австралийский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`AZN|AZN - Азербайджанский Манат`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BBD|BBD - Барбадосский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BDT|BDT - Така`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BGN|BGN - Болгарский Лев`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BHD|BHD - Бахрейнский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BRL|BRL - Бразильский Реал`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BSD|BSD - Багамский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BWP|BWP - Ботсваны Пула`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`BYN|BYN - Белорусский Рубль`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`CAD|CAD - Канадский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`CHF|CHF - Швейцарский Франк`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`CLP|CLP - Чилийское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`CNY|CNY - Китайский Юань`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`COP|COP - Колумбийское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`CZK|CZK - Чешская Крона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`DKK|DKK - Датская Крона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`DOP|DOP - Доминиканское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`EGP|EGP - Египетский Фунт`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ETB|ETB - Эфиопский Быр`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`EUR|EUR - Евро`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`FJD|FJD - Фиджийский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`GBP|GBP - Британский Фунт`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`GEL|GEL - Грузинский Лари`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`GHS|GHS - Ганский Седи`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`GTQ|GTQ - Гватемальский Кетсаль`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`HKD|HKD - Гонконгский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`HNL|HNL - Гондурасская Лемпира`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`HRK|HRK - Хорватская Куна`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`HUF|HUF - Венгерский Форинт`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`IDR|IDR - Индонезийская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ILS|ILS - Новый Израильский Шекель`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`INR|INR - Индийская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`IQD|IQD - Иракский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`IRR|IRR - Иранский Риал`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ISK|ISK - Исландская Крона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`JMD|JMD - Ямайский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`JOD|JOD - Иорданский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`JPY|JPY - Японская Иена`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`KES|KES - Кенийский Шиллинг`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`KHR|KHR - Камбоджийский Риель`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`KRW|KRW - Южнокорейская Вона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`KWD|KWD - Кувейтский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`KZT|KZT - Казахстанский Тенге`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`LAK|LAK - Лаосский Кип`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`LBP|LBP - Ливанский Фунт`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`LKR|LKR - Шри-Ланкийская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MAD|MAD - Марокканский Дирхам`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MDL|MDL - Молдавский Лей`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MKD|MKD - Денар Республики Македония`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MMK|MMK - Мьянманский Чат`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MUR|MUR - Маврикийская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MXN|MXN - Мексиканское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`MYR|MYR - Малайзийский Ринггит`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`NAD|NAD - Доллар Намибии`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`NGN|NGN - Найра`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`NOK|NOK - Норвежская Крона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`NZD|NZD - Новозеландский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`OMR|OMR - Оманский Риал`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PAB|PAB - Бальбоа`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PEN|PEN - Перуанский Соль`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PGK|PGK - Папуа-Новой Гвинеи Кина`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PHP|PHP - Филиппинское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PKR|PKR - Пакистанская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PLN|PLN - Злотый`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`PYG|PYG - Парагвайский Гуарани`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`QAR|QAR - Катарский Риал`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`RON|RON - Румынский Лей`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`RSD|RSD - Сербский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`RUB|RUB - Рубль`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`SAR|SAR - Саудовский Риял`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`SCR|SCR - Сейшельская Рупия`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`SEK|SEK - Шведская Крона`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`SGD|SGD - Сингапурский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`THB|THB - Бат`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TJS|TJS - Таджикских Сомони`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TND|TND - Тунисский Динар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TRY|TRY - Турецкая Лира`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TTD|TTD - Тринидад И Тобаго Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TWD|TWD - Новый Тайваньский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`TZS|TZS - Танзанийский Шиллинг`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`UAH|UAH - Украинская Гривна`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`USD|USD - Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`UYU|UYU - Уругвайское Песо`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`UZS|UZS - Узбекский Сом`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`VEF|VEF - Боливар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`VND|VND - Донг`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`XAF|XAF - Франк Кфа Beac`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`XCD|XCD - Восточно-Карибский Доллар`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`XOF|XOF - Западно-Африканский Франк Кфа Фран`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`XPF|XPF - Франк Кфп`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ZAR|ZAR - Южноафриканский Рэнд`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`ZMW|ZMW - Замбийская Квача`})})]})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Регистрируемся на сайте сервиса: `,(0,n.jsx)(t.a,{href:`https://www.exchangerate-api.com/`,children:`exchangerate-api`})]}),`
`,(0,n.jsx)(t.li,{children:`Настраиваем всё в админпанеле`}),`
`,(0,n.jsxs)(t.li,{children:[`Удаляем `,(0,n.jsx)(t.strong,{children:`install.php`}),` с корня сайта`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`теги-и-использование`,children:(0,n.jsx)(t.strong,{children:`Теги и использование`})}),`
`,(0,n.jsx)(t.h3,{id:`maintpl`,children:`main.tpl`}),`
`,(0,n.jsxs)(t.p,{children:[`Для подключения `,(0,n.jsx)(t.strong,{children:`на главной`}),` (main.tpl) достаточно этой строчки:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/kurscbr.php?mod=site&from=XXX"}`})})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Вместо `,(0,n.jsx)(t.strong,{children:`ХХХ`}),` впишите свою валюту. От этой валюты будет идти расчёт. Все доступные валюты можно узнать ниже. В шаблоне можно указывать след. теги:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{cur_XXX}`})}),(0,n.jsx)(t.td,{children:`выводит курс по соотношению изначальной валюты`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{cur_id_XXX}`})}),(0,n.jsxs)(t.td,{children:[`выводит идентификатор валюты в виде `,(0,n.jsx)(t.strong,{children:`USD, EUR, RUB`})]})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`fulltpl`,children:`full.tpl`}),`
`,(0,n.jsxs)(t.p,{children:[`Для шаблона `,(0,n.jsx)(t.strong,{children:`в полной новости`}),` (full.tpl) доступны следующие теги:`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Тег`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{cur_XXX}`})}),(0,n.jsx)(t.td,{children:`выводит окончательную цену по курсу`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{cur_id_XXX}`})}),(0,n.jsxs)(t.td,{children:[`выводит идентификатор валюты в виде `,(0,n.jsx)(t.strong,{children:`USD, EUR, RUB`}),` или название валюты в виде `,(0,n.jsx)(t.strong,{children:`Доллар, Рубль, Евро`}),`. Смотря как вы настроили у себя`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{curs_XXX}`})}),(0,n.jsx)(t.td,{children:`выводит курс к изначальной валюте.`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{price_ori}`})}),(0,n.jsx)(t.td,{children:`выводит исходную цену`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`{valuta_ori}`})}),(0,n.jsx)(t.td,{children:`выводит исходную валюту`})]})]})]}),`
`,(0,n.jsx)(t.h3,{id:`fullstorytpl`,children:`fullstory.tpl`}),`
`,(0,n.jsx)(t.p,{children:`Чтобы подключить модуль в шаблоне с полной новостью (fullstory.tpl) добавляем строчку:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/kurscbr.php?news_id={news-id}&save=CUR:field"}`})})})})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Параметр `,(0,n.jsx)(t.strong,{children:`news_id`}),` `,(0,n.jsx)(t.strong,{children:`обязателен`}),` к использованию. Он указывает ID новости.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Параметр `,(0,n.jsx)(t.strong,{children:`save`}),` указывается тогда, когда нужно сохранить отформатирование значение в определённое поле. К примеру: основная цена в евро, то в этом поле будет сохранена отконвертированная сумма.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Вместо `,(0,n.jsx)(t.strong,{children:`CUR`}),`указываем нужную `,(0,n.jsx)(t.strong,{children:`валюту`})]}),`
`,(0,n.jsxs)(t.li,{children:[`вместо `,(0,n.jsx)(t.strong,{children:`field`}),` - `,(0,n.jsx)(t.strong,{children:`доп. поле`}),`. Эти значения разделяются двоеточием (`,(0,n.jsx)(t.strong,{children:`:`}),`). Если надо сохранить в несколько полей, то используйте `,(0,n.jsx)(t.strong,{children:`запятую`}),` в качестве разделителя.`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{include file="engine/modules/kurscbr.php?news_id={news-id}&save=EUR:eur_price,USD:usd:price"}`})})})})}),`
`,(0,n.jsx)(t.h2,{id:`доступные-к-использованию-валюты`,children:`Доступные к использованию валюты`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`На данный момент API поддерживает эти валюты:`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Идентификатор`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`AED`}),(0,n.jsx)(t.td,{children:`Дирхам Арабских Эмиратов`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ALL`}),(0,n.jsx)(t.td,{children:`Лек`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`AMD`}),(0,n.jsx)(t.td,{children:`Драма`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ANG`}),(0,n.jsx)(t.td,{children:`Нидерландский Антильский Гульден`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`AOA`}),(0,n.jsx)(t.td,{children:`Кванза`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ARS`}),(0,n.jsx)(t.td,{children:`Аргентинское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`AUD`}),(0,n.jsx)(t.td,{children:`Австралийский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`AZN`}),(0,n.jsx)(t.td,{children:`Азербайджанский Манат`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BBD`}),(0,n.jsx)(t.td,{children:`Барбадосский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BGN`}),(0,n.jsx)(t.td,{children:`Болгарский Лев`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BHD`}),(0,n.jsx)(t.td,{children:`Бахрейнский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BRL`}),(0,n.jsx)(t.td,{children:`Бразильский Реал`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BSD`}),(0,n.jsx)(t.td,{children:`Багамский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BWP`}),(0,n.jsx)(t.td,{children:`Ботсваны Пула`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BYN`}),(0,n.jsx)(t.td,{children:`Белорусский Рубль`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CAD`}),(0,n.jsx)(t.td,{children:`Канадский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CHF`}),(0,n.jsx)(t.td,{children:`Швейцарский Франк`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CLP`}),(0,n.jsx)(t.td,{children:`Чилийское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CNY`}),(0,n.jsx)(t.td,{children:`Китайский Юань`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`COP`}),(0,n.jsx)(t.td,{children:`Колумбийское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CZK`}),(0,n.jsx)(t.td,{children:`Чешская Крона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DKK`}),(0,n.jsx)(t.td,{children:`Датская Крона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`DOP`}),(0,n.jsx)(t.td,{children:`Доминиканское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`EGP`}),(0,n.jsx)(t.td,{children:`Египетский Фунт`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ETB`}),(0,n.jsx)(t.td,{children:`Эфиопский Быр`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`EUR`}),(0,n.jsx)(t.td,{children:`Евро`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`FJD`}),(0,n.jsx)(t.td,{children:`Фиджийский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GBP`}),(0,n.jsx)(t.td,{children:`Британский Фунт`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GEL`}),(0,n.jsx)(t.td,{children:`Грузинский Лари`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GHS`}),(0,n.jsx)(t.td,{children:`Ганский Седи`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`GTQ`}),(0,n.jsx)(t.td,{children:`Гватемальский Кетсаль`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`HKD`}),(0,n.jsx)(t.td,{children:`Гонконгский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`HNL`}),(0,n.jsx)(t.td,{children:`Гондурасская Лемпира`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`HRK`}),(0,n.jsx)(t.td,{children:`Хорватская Куна`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`HUF`}),(0,n.jsx)(t.td,{children:`Венгерский Форинт`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IDR`}),(0,n.jsx)(t.td,{children:`Индонезийская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ILS`}),(0,n.jsx)(t.td,{children:`Новый Израильский Шекель`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`INR`}),(0,n.jsx)(t.td,{children:`Индийская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IQD`}),(0,n.jsx)(t.td,{children:`Иракский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`IRR`}),(0,n.jsx)(t.td,{children:`Иранский Риал`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ISK`}),(0,n.jsx)(t.td,{children:`Исландская Крона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`JMD`}),(0,n.jsx)(t.td,{children:`Ямайский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`JOD`}),(0,n.jsx)(t.td,{children:`Иорданский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`JPY`}),(0,n.jsx)(t.td,{children:`Японская Иена`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`KES`}),(0,n.jsx)(t.td,{children:`Кенийский Шиллинг`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`KHR`}),(0,n.jsx)(t.td,{children:`Камбоджийский Риель`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`KRW`}),(0,n.jsx)(t.td,{children:`Южнокорейская Вона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`KWD`}),(0,n.jsx)(t.td,{children:`Кувейтский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`KZT`}),(0,n.jsx)(t.td,{children:`Казахстанский Тенге`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`LAK`}),(0,n.jsx)(t.td,{children:`Лаосский Кип`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`LBP`}),(0,n.jsx)(t.td,{children:`Ливанский Фунт`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`LKR`}),(0,n.jsx)(t.td,{children:`Шри-Ланкийская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MAD`}),(0,n.jsx)(t.td,{children:`Марокканский Дирхам`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MDL`}),(0,n.jsx)(t.td,{children:`Молдавский Лей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MKD`}),(0,n.jsx)(t.td,{children:`Денар Республики Македония`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MMK`}),(0,n.jsx)(t.td,{children:`Мьянманский Чат`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MUR`}),(0,n.jsx)(t.td,{children:`Маврикийская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MXN`}),(0,n.jsx)(t.td,{children:`Мексиканское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`MYR`}),(0,n.jsx)(t.td,{children:`Малайзийский Ринггит`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`NAD`}),(0,n.jsx)(t.td,{children:`Доллар Намибии`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`NGN`}),(0,n.jsx)(t.td,{children:`Найра`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`NOK`}),(0,n.jsx)(t.td,{children:`Норвежская Крона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`NZD`}),(0,n.jsx)(t.td,{children:`Новозеландский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`OMR`}),(0,n.jsx)(t.td,{children:`Оманский Риал`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PAB`}),(0,n.jsx)(t.td,{children:`Бальбоа`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PEN`}),(0,n.jsx)(t.td,{children:`Перуанский Соль`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PGK`}),(0,n.jsx)(t.td,{children:`Папуа-Новой Гвинеи Кина`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PHP`}),(0,n.jsx)(t.td,{children:`Филиппинское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PKR`}),(0,n.jsx)(t.td,{children:`Пакистанская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PLN`}),(0,n.jsx)(t.td,{children:`Злотый`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`PYG`}),(0,n.jsx)(t.td,{children:`Парагвайский Гуарани`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`QAR`}),(0,n.jsx)(t.td,{children:`Катарский Риал`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`RON`}),(0,n.jsx)(t.td,{children:`Румынский Лей`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`RSD`}),(0,n.jsx)(t.td,{children:`Сербский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`RUB`}),(0,n.jsx)(t.td,{children:`Рубль`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SAR`}),(0,n.jsx)(t.td,{children:`Саудовский Риял`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SCR`}),(0,n.jsx)(t.td,{children:`Сейшельская Рупия`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SEK`}),(0,n.jsx)(t.td,{children:`Шведская Крона`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`SGD`}),(0,n.jsx)(t.td,{children:`Сингапурский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`THB`}),(0,n.jsx)(t.td,{children:`Бат`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TJS`}),(0,n.jsx)(t.td,{children:`Таджикских Сомони`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TND`}),(0,n.jsx)(t.td,{children:`Тунисский Динар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TRY`}),(0,n.jsx)(t.td,{children:`Турецкая Лира`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TTD`}),(0,n.jsx)(t.td,{children:`Тринидад И Тобаго Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TWD`}),(0,n.jsx)(t.td,{children:`Новый Тайваньский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`TZS`}),(0,n.jsx)(t.td,{children:`Танзанийский Шиллинг`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`UAH`}),(0,n.jsx)(t.td,{children:`Украинская Гривна`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`USD`}),(0,n.jsx)(t.td,{children:`Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`UYU`}),(0,n.jsx)(t.td,{children:`Уругвайское Песо`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`UZS`}),(0,n.jsx)(t.td,{children:`Узбекский Сом`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VEF`}),(0,n.jsx)(t.td,{children:`Боливар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`VND`}),(0,n.jsx)(t.td,{children:`Донг`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XAF`}),(0,n.jsx)(t.td,{children:`Франк Кфа Beac`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XCD`}),(0,n.jsx)(t.td,{children:`Восточно-Карибский Доллар`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XOF`}),(0,n.jsx)(t.td,{children:`Западно-Африканский Франк Кфа Фран`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XPF`}),(0,n.jsx)(t.td,{children:`Франк Кфп`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ZAR`}),(0,n.jsx)(t.td,{children:`Южноафриканский Рэнд`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`ZMW`}),(0,n.jsx)(t.td,{children:`Замбийская Квача`})]})]})]}),`
`,(0,n.jsx)(t.p,{children:`Если описание какой-либо валюты неверно - пишите`})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};