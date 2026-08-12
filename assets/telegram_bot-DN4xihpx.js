import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r=`/assets/botfather-DHF3GWzF.png`,i=`/assets/bot_commands-CEKW7JNa.png`,a=`/assets/channel_settings_1-B4hcm4i6.png`,o=`/assets/channel_settings_2-Dnn5mW_5.png`,s=`/assets/channel_settings_3-BCtsQKLA.png`,c=`/assets/bot_added-CdiFVZLo.png`,l=`/assets/channel_info-BwNsoOg7.png`,u=`/assets/getmyid-DnokIdJ0.png`,d={title:`Настройка Telegram-бота`,description:`Документация по плагину настройка бота для DLE.`},f=new Date(1786541452e3),p=`

















<Callout type="info" title="Для Re: Post и legacy">
  Инструкция по BotFather подходит для [Re: Post](/dev/dle/repost/getting_started) ([провайдер Telegram](/dev/dle/repost/providers/telegram)) и для устаревшего Telegram Posting.
</Callout>

Довольно частый вопрос, на который приходится давать ответ 😂.

## Создаём бота [#создаём-бота]

В вашем телеграм клиенте нужно найти [@BotFather](https://t.me/BotFather).

На скриншоте показан профиль \`@BotFather\` в Telegram.
<img alt="Профиль BotFather в Telegram" src="__img0" />

Запускаем бота и получаем список команд

На этом экране виден список команд BotFather, откуда начинается создание бота.
<img alt="Команды BotFather" src="__img1" />

При помощи команды <kbd>/newbot</kbd> начинаем процесс создания нового бота

### Вопросы бота [#вопросы-бота]

#### Alright, a new bot. How are we going to call it? Please choose a name for your bot. [#alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot]

\`Хорошо, новый бот. Как мы его назовём? Пожалуйста, выберите имя для вашего бота.\`

Даём именнование боту. К примеру: **Мой хороший бот**

#### Good. Now let's choose a username for your bot. It must end in \`bot\`. Like this, for example: TetrisBot or tetris\\_bot. [#good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot]

\`Хорошо. Теперь давайте выберем имя пользователя для вашего бота. Он должен заканчиваться на bot. Например, так: TetrisBot или tetris_bot.\`

К примеру: **my\\_good\\_bot**

#### Завершение [#завершение]

*Done! Congratulations on your new bot. You will find it at t.me/my\\_good\\_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.*

*Use this token to access the HTTP API:*

*API-Key*

*Keep your token secure and store it safely, it can be used by anyone to control your bot.For a description of the Bot API, see this page: [https://core.telegram.org/bots/api](https://core.telegram.org/bots/api)*

\`\`\`
Готово! Поздравляю с новым ботом. Вы найдете его по адреси t.me/my_good_bot. Теперь вы можете добавить описание, раздел about и картинку профиля для своего бота, список команд смотрите в /help. Кстати, когда вы закончите создание своего классного бота, напишите в нашу службу поддержки ботов, если вам нужно лучшее имя пользователя для него. Перед этим убедитесь, что бот полностью готов к работе.

Используйте этот токен для доступа к HTTP API:
API-Key
Обеспечьте безопасность своего токена и храните его в надежном месте, он может быть использован кем угодно для управления вашим ботом.

Описание Bot API см. на этой странице: https://core.telegram.org/bots/api
\`\`\`

На этом всё. Не давайте третьим лицам этот ключ.

## Подключение к группе / каналу [#подключение-к-группе--каналу]

Для более комфортного использования бота - рекоммендуетця добавить его в группу / канал как администратора. Решайте сами.

Переходим в канал / группу и добавляем бота

На двух скриншотах ниже показаны шаги входа в настройки канала и переход к добавлению администратора.
<img alt="Настройки канала: первый шаг" src="__img2" /><img alt="Настройки канала: второй шаг" src="__img3" />

Исходя из вашего решения - выбираем нужную группу пользователей.

На этом экране выбирается роль бота в канале или группе.
<img alt="Выбор роли бота в канале" src="__img4" />

В поисковой строке выбираем бота и добавляем.

Скриншот ниже показывает уже найденного и добавленного бота.
<img alt="Бот добавлен в канал" src="__img5" />

## Как получить ID канала / группы? [#как-получить-id-канала--группы]

### Публичный канал / группа [#публичный-канал--группа]

Самый простой вариант.

В окне с информацией о канале копируем ссылку

На скриншоте показано место, откуда копируется ссылка публичного канала.
<img alt="Ссылка публичного канала" src="__img6" />

Заменяем &#x2A;*(https\\://)t.me/*&#x2A; на &#x2A;*@*&#x2A;. Должно получиться **@channel\\_name**

### Скрытый канал / группа [#скрытый-канал--группа]

Есть два варианта:

#### С правами администратора [#с-правами-администратора]

В канале, куда добавили бота, напишите любое сообщение и запустите в настройках модуля поиск канала / группы. Если всё прошло как надо -  в поле проставится ID канала / группы

#### Без администраторских прав [#без-администраторских-прав]

Данный вариант является самым простым. Достаточно открыть [@getmyid\\_bot](https://t.me/getmyid_bot) в клиенте и переслать в него сообщение с канала / группы

На скриншоте показан ответ \`@getmyid_bot\` с числовым ID.
<img alt="Ответ getmyid_bot с ID канала" src="__img7" />

Копируем обрамлённые значения. Это и есть ID канала / группы
`,m={contents:[{heading:void 0,content:`Инструкция по BotFather подходит для Re: Post (провайдер Telegram) и для устаревшего Telegram Posting.`},{heading:void 0,content:`Довольно частый вопрос, на который приходится давать ответ 😂.`},{heading:`создаём-бота`,content:`В вашем телеграм клиенте нужно найти @BotFather.`},{heading:`создаём-бота`,content:"На скриншоте показан профиль `@BotFather` в Telegram."},{heading:`создаём-бота`,content:`Запускаем бота и получаем список команд`},{heading:`создаём-бота`,content:`На этом экране виден список команд BotFather, откуда начинается создание бота.`},{heading:`создаём-бота`,content:`При помощи команды /newbot начинаем процесс создания нового бота`},{heading:`alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot`,content:"`Хорошо, новый бот. Как мы его назовём? Пожалуйста, выберите имя для вашего бота.`"},{heading:`alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot`,content:`Даём именнование боту. К примеру: **Мой хороший бот**`},{heading:`good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot`,content:"`Хорошо. Теперь давайте выберем имя пользователя для вашего бота. Он должен заканчиваться на bot. Например, так: TetrisBot или tetris_bot.`"},{heading:`good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot`,content:`К примеру: **my\\_good\\_bot**`},{heading:`завершение`,content:`*Done! Congratulations on your new bot. You will find it at t.me/my\\_good\\_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.*`},{heading:`завершение`,content:`*Use this token to access the HTTP API:*`},{heading:`завершение`,content:`*API-Key*`},{heading:`завершение`,content:`*Keep your token secure and store it safely, it can be used by anyone to control your bot.For a description of the Bot API, see this page: https\\://core.telegram.org/bots/api*`},{heading:`завершение`,content:`На этом всё. Не давайте третьим лицам этот ключ.`},{heading:`подключение-к-группе--каналу`,content:`Для более комфортного использования бота - рекоммендуетця добавить его в группу / канал как администратора. Решайте сами.`},{heading:`подключение-к-группе--каналу`,content:`Переходим в канал / группу и добавляем бота`},{heading:`подключение-к-группе--каналу`,content:`На двух скриншотах ниже показаны шаги входа в настройки канала и переход к добавлению администратора.`},{heading:`подключение-к-группе--каналу`,content:`Исходя из вашего решения - выбираем нужную группу пользователей.`},{heading:`подключение-к-группе--каналу`,content:`На этом экране выбирается роль бота в канале или группе.`},{heading:`подключение-к-группе--каналу`,content:`В поисковой строке выбираем бота и добавляем.`},{heading:`подключение-к-группе--каналу`,content:`Скриншот ниже показывает уже найденного и добавленного бота.`},{heading:`публичный-канал--группа`,content:`Самый простой вариант.`},{heading:`публичный-канал--группа`,content:`В окне с информацией о канале копируем ссылку`},{heading:`публичный-канал--группа`,content:`На скриншоте показано место, откуда копируется ссылка публичного канала.`},{heading:`публичный-канал--группа`,content:`Заменяем &#x2A;*(https\\://)t.me/*&#x2A; на &#x2A;*@*&#x2A;. Должно получиться **@channel\\_name**`},{heading:`скрытый-канал--группа`,content:`Есть два варианта:`},{heading:`с-правами-администратора`,content:`В канале, куда добавили бота, напишите любое сообщение и запустите в настройках модуля поиск канала / группы. Если всё прошло как надо -  в поле проставится ID канала / группы`},{heading:`без-администраторских-прав`,content:`Данный вариант является самым простым. Достаточно открыть @getmyid\\_bot в клиенте и переслать в него сообщение с канала / группы`},{heading:`без-администраторских-прав`,content:"На скриншоте показан ответ `@getmyid_bot` с числовым ID."},{heading:`без-администраторских-прав`,content:`Копируем обрамлённые значения. Это и есть ID канала / группы`}],headings:[{id:`создаём-бота`,content:`Создаём бота`},{id:`вопросы-бота`,content:`Вопросы бота`},{id:`alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot`,content:`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`},{id:`good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot`,content:"Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot."},{id:`завершение`,content:`Завершение`},{id:`подключение-к-группе--каналу`,content:`Подключение к группе / каналу`},{id:`как-получить-id-канала--группы`,content:`Как получить ID канала / группы?`},{id:`публичный-канал--группа`,content:`Публичный канал / группа`},{id:`скрытый-канал--группа`,content:`Скрытый канал / группа`},{id:`с-правами-администратора`,content:`С правами администратора`},{id:`без-администраторских-прав`,content:`Без администраторских прав`}]},h=[{depth:2,url:`#создаём-бота`,title:(0,n.jsx)(n.Fragment,{children:`Создаём бота`})},{depth:3,url:`#вопросы-бота`,title:(0,n.jsx)(n.Fragment,{children:`Вопросы бота`})},{depth:4,url:`#alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot`,title:(0,n.jsx)(n.Fragment,{children:`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`})},{depth:4,url:`#good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot`,title:(0,n.jsxs)(n.Fragment,{children:[`Good. Now let's choose a username for your bot. It must end in `,(0,n.jsx)(`code`,{children:`bot`}),`. Like this, for example: TetrisBot or tetris_bot.`]})},{depth:4,url:`#завершение`,title:(0,n.jsx)(n.Fragment,{children:`Завершение`})},{depth:2,url:`#подключение-к-группе--каналу`,title:(0,n.jsx)(n.Fragment,{children:`Подключение к группе / каналу`})},{depth:2,url:`#как-получить-id-канала--группы`,title:(0,n.jsx)(n.Fragment,{children:`Как получить ID канала / группы?`})},{depth:3,url:`#публичный-канал--группа`,title:(0,n.jsx)(n.Fragment,{children:`Публичный канал / группа`})},{depth:3,url:`#скрытый-канал--группа`,title:(0,n.jsx)(n.Fragment,{children:`Скрытый канал / группа`})},{depth:4,url:`#с-правами-администратора`,title:(0,n.jsx)(n.Fragment,{children:`С правами администратора`})},{depth:4,url:`#без-администраторских-прав`,title:(0,n.jsx)(n.Fragment,{children:`Без администраторских прав`})}];function g(e){let t={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,h4:`h4`,img:`img`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,...e.components},{Callout:d}=t;return d||v(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{type:`info`,title:`Для Re: Post и legacy`,children:(0,n.jsxs)(t.p,{children:[`Инструкция по BotFather подходит для `,(0,n.jsx)(t.a,{href:`/dev/dle/repost/getting_started`,children:`Re: Post`}),` (`,(0,n.jsx)(t.a,{href:`/dev/dle/repost/providers/telegram`,children:`провайдер Telegram`}),`) и для устаревшего Telegram Posting.`]})}),`
`,(0,n.jsx)(t.p,{children:`Довольно частый вопрос, на который приходится давать ответ 😂.`}),`
`,(0,n.jsx)(t.h2,{id:`создаём-бота`,children:`Создаём бота`}),`
`,(0,n.jsxs)(t.p,{children:[`В вашем телеграм клиенте нужно найти `,(0,n.jsx)(t.a,{href:`https://t.me/BotFather`,children:`@BotFather`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`На скриншоте показан профиль `,(0,n.jsx)(t.code,{children:`@BotFather`}),` в Telegram.
`,(0,n.jsx)(t.img,{alt:`Профиль BotFather в Telegram`,src:r})]}),`
`,(0,n.jsx)(t.p,{children:`Запускаем бота и получаем список команд`}),`
`,(0,n.jsxs)(t.p,{children:[`На этом экране виден список команд BotFather, откуда начинается создание бота.
`,(0,n.jsx)(t.img,{alt:`Команды BotFather`,src:i})]}),`
`,(0,n.jsxs)(t.p,{children:[`При помощи команды `,(0,n.jsx)(`kbd`,{children:`/newbot`}),` начинаем процесс создания нового бота`]}),`
`,(0,n.jsx)(t.h3,{id:`вопросы-бота`,children:`Вопросы бота`}),`
`,(0,n.jsx)(t.h4,{id:`alright-a-new-bot-how-are-we-going-to-call-it-please-choose-a-name-for-your-bot`,children:`Alright, a new bot. How are we going to call it? Please choose a name for your bot.`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`Хорошо, новый бот. Как мы его назовём? Пожалуйста, выберите имя для вашего бота.`})}),`
`,(0,n.jsxs)(t.p,{children:[`Даём именнование боту. К примеру: `,(0,n.jsx)(t.strong,{children:`Мой хороший бот`})]}),`
`,(0,n.jsxs)(t.h4,{id:`good-now-lets-choose-a-username-for-your-bot-it-must-end-in-bot-like-this-for-example-tetrisbot-or-tetris_bot`,children:[`Good. Now let's choose a username for your bot. It must end in `,(0,n.jsx)(t.code,{children:`bot`}),`. Like this, for example: TetrisBot or tetris_bot.`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`Хорошо. Теперь давайте выберем имя пользователя для вашего бота. Он должен заканчиваться на bot. Например, так: TetrisBot или tetris_bot.`})}),`
`,(0,n.jsxs)(t.p,{children:[`К примеру: `,(0,n.jsx)(t.strong,{children:`my_good_bot`})]}),`
`,(0,n.jsx)(t.h4,{id:`завершение`,children:`Завершение`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Done! Congratulations on your new bot. You will find it at t.me/my_good_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`Use this token to access the HTTP API:`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:`API-Key`})}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:[`Keep your token secure and store it safely, it can be used by anyone to control your bot.For a description of the Bot API, see this page: `,(0,n.jsx)(t.a,{href:`https://core.telegram.org/bots/api`,children:`https://core.telegram.org/bots/api`})]})}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Готово! Поздравляю с новым ботом. Вы найдете его по адреси t.me/my_good_bot. Теперь вы можете добавить описание, раздел about и картинку профиля для своего бота, список команд смотрите в /help. Кстати, когда вы закончите создание своего классного бота, напишите в нашу службу поддержки ботов, если вам нужно лучшее имя пользователя для него. Перед этим убедитесь, что бот полностью готов к работе.`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Используйте этот токен для доступа к HTTP API:`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`API-Key`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Обеспечьте безопасность своего токена и храните его в надежном месте, он может быть использован кем угодно для управления вашим ботом.`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`Описание Bot API см. на этой странице: https://core.telegram.org/bots/api`})})]})})}),`
`,(0,n.jsx)(t.p,{children:`На этом всё. Не давайте третьим лицам этот ключ.`}),`
`,(0,n.jsx)(t.h2,{id:`подключение-к-группе--каналу`,children:`Подключение к группе / каналу`}),`
`,(0,n.jsx)(t.p,{children:`Для более комфортного использования бота - рекоммендуетця добавить его в группу / канал как администратора. Решайте сами.`}),`
`,(0,n.jsx)(t.p,{children:`Переходим в канал / группу и добавляем бота`}),`
`,(0,n.jsxs)(t.p,{children:[`На двух скриншотах ниже показаны шаги входа в настройки канала и переход к добавлению администратора.
`,(0,n.jsx)(t.img,{alt:`Настройки канала: первый шаг`,src:a}),(0,n.jsx)(t.img,{alt:`Настройки канала: второй шаг`,src:o})]}),`
`,(0,n.jsx)(t.p,{children:`Исходя из вашего решения - выбираем нужную группу пользователей.`}),`
`,(0,n.jsxs)(t.p,{children:[`На этом экране выбирается роль бота в канале или группе.
`,(0,n.jsx)(t.img,{alt:`Выбор роли бота в канале`,src:s})]}),`
`,(0,n.jsx)(t.p,{children:`В поисковой строке выбираем бота и добавляем.`}),`
`,(0,n.jsxs)(t.p,{children:[`Скриншот ниже показывает уже найденного и добавленного бота.
`,(0,n.jsx)(t.img,{alt:`Бот добавлен в канал`,src:c})]}),`
`,(0,n.jsx)(t.h2,{id:`как-получить-id-канала--группы`,children:`Как получить ID канала / группы?`}),`
`,(0,n.jsx)(t.h3,{id:`публичный-канал--группа`,children:`Публичный канал / группа`}),`
`,(0,n.jsx)(t.p,{children:`Самый простой вариант.`}),`
`,(0,n.jsx)(t.p,{children:`В окне с информацией о канале копируем ссылку`}),`
`,(0,n.jsxs)(t.p,{children:[`На скриншоте показано место, откуда копируется ссылка публичного канала.
`,(0,n.jsx)(t.img,{alt:`Ссылка публичного канала`,src:l})]}),`
`,(0,n.jsxs)(t.p,{children:[`Заменяем `,(0,n.jsx)(t.strong,{children:`(https://)t.me/`}),` на `,(0,n.jsx)(t.strong,{children:`@`}),`. Должно получиться `,(0,n.jsx)(t.strong,{children:`@channel_name`})]}),`
`,(0,n.jsx)(t.h3,{id:`скрытый-канал--группа`,children:`Скрытый канал / группа`}),`
`,(0,n.jsx)(t.p,{children:`Есть два варианта:`}),`
`,(0,n.jsx)(t.h4,{id:`с-правами-администратора`,children:`С правами администратора`}),`
`,(0,n.jsx)(t.p,{children:`В канале, куда добавили бота, напишите любое сообщение и запустите в настройках модуля поиск канала / группы. Если всё прошло как надо -  в поле проставится ID канала / группы`}),`
`,(0,n.jsx)(t.h4,{id:`без-администраторских-прав`,children:`Без администраторских прав`}),`
`,(0,n.jsxs)(t.p,{children:[`Данный вариант является самым простым. Достаточно открыть `,(0,n.jsx)(t.a,{href:`https://t.me/getmyid_bot`,children:`@getmyid_bot`}),` в клиенте и переслать в него сообщение с канала / группы`]}),`
`,(0,n.jsxs)(t.p,{children:[`На скриншоте показан ответ `,(0,n.jsx)(t.code,{children:`@getmyid_bot`}),` с числовым ID.
`,(0,n.jsx)(t.img,{alt:`Ответ getmyid_bot с ID канала`,src:u})]}),`
`,(0,n.jsx)(t.p,{children:`Копируем обрамлённые значения. Это и есть ID канала / группы`})]})}function _(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(g,{...e})}):g(e)}function v(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{p as _markdown,_ as default,d as frontmatter,f as lastModified,m as structuredData,h as toc};