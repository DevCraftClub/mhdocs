import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Как работать с эндпоинтами`,description:`База /api/v2: пропуск Bearer, sugar vs /table/, ответы и типичные ошибки.`,version:`200.1.0`},i=new Date(1787834766e3),a=`

API — это набор адресов на сайте вида \`https://ВАШ_САЙТ/api/v2/…\`. Этот гайд объясняет **как думать** про них. Полный список путей — в [HTTP](../reference/http) и [OpenAPI](../reference/openapi).

## Что нужно заранее [#что-нужно-заранее]

* [Установка](../install)
* [Авторизация](auth) — получить Bearer (\`access_token\`)
* При демо-проблемах — [Инструкция .env](env)

## Два вида адресов [#два-вида-адресов]

| Вид                    | Пример                                        | Зачем                                                          |
| ---------------------- | --------------------------------------------- | -------------------------------------------------------------- |
| **Sugar** (короткий)   | \`POST /post/\`, \`POST /user/\`, \`POST /plugin/\` | Удобное **создание** одной сущности                            |
| **Универсальный CRUD** | \`/table/post/\`, \`/table/users/\`               | Список, чтение, правка, удаление **любой** разрешённой таблицы |

Sugar почти всегда только **create**. Список новостей — \`GET /post/\` или \`GET /table/post/\`; обновить новость — \`PUT /table/post/{id}\`.

Права (можно ли читать/писать таблицу) задаёт [уровень доступа](access-levels) ключа.

Некоторые служебные таблицы (\`api_keys\`, \`oauth_*\`, …) через \`/table/\` закрыты.

## Как выглядит запрос [#как-выглядит-запрос]

<Tabs groupId="endpointsExampleLang" items="['curl', 'PHP', 'JS', 'Python']">
  <Tab value="curl">
    \`\`\`bash
    curl -sS 'https://ВАШ_САЙТ/api/v2/table/users/?limit=20' \\
      -H 'Authorization: Bearer <access_token>'
    \`\`\`
  </Tab>

  <Tab value="PHP">
    \`\`\`php
    $ch = curl_init('https://ВАШ_САЙТ/api/v2/table/users/?limit=20');
    curl_setopt_array($ch, [
    	CURLOPT_RETURNTRANSFER => true,
    	CURLOPT_HTTPHEADER     => [
    		'Authorization: Bearer <access_token>',
    	],
    ]);

    $response = curl_exec($ch);
    curl_close($ch);

    echo $response;
    \`\`\`
  </Tab>

  <Tab value="JS">
    \`\`\`javascript
    const response = await fetch('https://ВАШ_САЙТ/api/v2/table/users/?limit=20', {
    	headers: {
    		Authorization: 'Bearer <access_token>',
    	},
    });

    const data = await response.json();
    console.log(data);
    \`\`\`
  </Tab>

  <Tab value="Python">
    \`\`\`python
    import requests

    response = requests.get(
        "https://ВАШ_САЙТ/api/v2/table/users/?limit=20",
        headers={"Authorization": "Bearer <access_token>"},
        timeout=30,
    )

    print(response.json())
    \`\`\`
  </Tab>
</Tabs>

Слеш в конце необязателен.

Типичный ответ списка:

\`\`\`json
{
  "data": [ … ],
  "count": 42
}
\`\`\`

Создание часто отвечает \`201\` и \`{ "id": 123 }\`.

## Ошибки простыми словами [#ошибки-простыми-словами]

Большинство ошибок — JSON с полями \`error\` и \`message\` (схема ApiError в OpenAPI).

| Код | Обычно значит                                                             |
| --- | ------------------------------------------------------------------------- |
| 401 | Нет пропуска или он просрочен — [auth](auth)                              |
| 403 | Токен есть, но нет scope на эту операцию — [access-levels](access-levels) |
| 404 | Нет такой записи / таблицы                                                |
| 422 | Тело запроса не прошло проверку (смотрите \`details\`)                      |

## Куда идти дальше [#куда-идти-дальше]

| Задача                   | Гайд                                                       |
| ------------------------ | ---------------------------------------------------------- |
| Создать / искать новости | [posts-create](posts-create), [posts-search](posts-search) |
| Доп. поля новости        | [xfields-news](xfields-news)                               |
| Пользователи             | [users-create](users-create), [users-search](users-search) |
| Плагин                   | [plugins-create](plugins-create)                           |
| То же из PHP на сайте    | [SDK](sdk)                                                 |
| Было v1                  | [migrate-v1-v2](migrate-v1-v2)                             |

## См. также [#см-также]

* [HTTP /api/v2](../reference/http)
* [OpenAPI](../reference/openapi)
* [Безопасность](security)
`,o={contents:[{heading:void 0,content:"API — это набор адресов на сайте вида `https://ВАШ_САЙТ/api/v2/…`. Этот гайд объясняет **как думать** про них. Полный список путей — в HTTP и OpenAPI."},{heading:`что-нужно-заранее`,content:`Установка`},{heading:`что-нужно-заранее`,content:"Авторизация — получить Bearer (`access_token`)"},{heading:`что-нужно-заранее`,content:`При демо-проблемах — Инструкция .env`},{heading:`два-вида-адресов`,content:`Вид`},{heading:`два-вида-адресов`,content:`Пример`},{heading:`два-вида-адресов`,content:`Зачем`},{heading:`два-вида-адресов`,content:`**Sugar** (короткий)`},{heading:`два-вида-адресов`,content:"`POST /post/`, `POST /user/`, `POST /plugin/`"},{heading:`два-вида-адресов`,content:`Удобное **создание** одной сущности`},{heading:`два-вида-адресов`,content:`**Универсальный CRUD**`},{heading:`два-вида-адресов`,content:"`/table/post/`, `/table/users/`"},{heading:`два-вида-адресов`,content:`Список, чтение, правка, удаление **любой** разрешённой таблицы`},{heading:`два-вида-адресов`,content:"Sugar почти всегда только **create**. Список новостей — `GET /post/` или `GET /table/post/`; обновить новость — `PUT /table/post/{id}`."},{heading:`два-вида-адресов`,content:`Права (можно ли читать/писать таблицу) задаёт уровень доступа ключа.`},{heading:`два-вида-адресов`,content:"Некоторые служебные таблицы (`api_keys`, `oauth_*`, …) через `/table/` закрыты."},{heading:`как-выглядит-запрос`,content:`Слеш в конце необязателен.`},{heading:`как-выглядит-запрос`,content:`Типичный ответ списка:`},{heading:`как-выглядит-запрос`,content:'Создание часто отвечает `201` и `{ "id": 123 }`.'},{heading:`ошибки-простыми-словами`,content:"Большинство ошибок — JSON с полями `error` и `message` (схема ApiError в OpenAPI)."},{heading:`ошибки-простыми-словами`,content:`Код`},{heading:`ошибки-простыми-словами`,content:`Обычно значит`},{heading:`ошибки-простыми-словами`,content:`401`},{heading:`ошибки-простыми-словами`,content:`Нет пропуска или он просрочен — auth`},{heading:`ошибки-простыми-словами`,content:`403`},{heading:`ошибки-простыми-словами`,content:`Токен есть, но нет scope на эту операцию — access-levels`},{heading:`ошибки-простыми-словами`,content:`404`},{heading:`ошибки-простыми-словами`,content:`Нет такой записи / таблицы`},{heading:`ошибки-простыми-словами`,content:`422`},{heading:`ошибки-простыми-словами`,content:"Тело запроса не прошло проверку (смотрите `details`)"},{heading:`куда-идти-дальше`,content:`Задача`},{heading:`куда-идти-дальше`,content:`Гайд`},{heading:`куда-идти-дальше`,content:`Создать / искать новости`},{heading:`куда-идти-дальше`,content:`posts-create, posts-search`},{heading:`куда-идти-дальше`,content:`Доп. поля новости`},{heading:`куда-идти-дальше`,content:`xfields-news`},{heading:`куда-идти-дальше`,content:`Пользователи`},{heading:`куда-идти-дальше`,content:`users-create, users-search`},{heading:`куда-идти-дальше`,content:`Плагин`},{heading:`куда-идти-дальше`,content:`plugins-create`},{heading:`куда-идти-дальше`,content:`То же из PHP на сайте`},{heading:`куда-идти-дальше`,content:`SDK`},{heading:`куда-идти-дальше`,content:`Было v1`},{heading:`куда-идти-дальше`,content:`migrate-v1-v2`},{heading:`см-также`,content:`HTTP /api/v2`},{heading:`см-также`,content:`OpenAPI`},{heading:`см-также`,content:`Безопасность`}],headings:[{id:`что-нужно-заранее`,content:`Что нужно заранее`},{id:`два-вида-адресов`,content:`Два вида адресов`},{id:`как-выглядит-запрос`,content:`Как выглядит запрос`},{id:`ошибки-простыми-словами`,content:`Ошибки простыми словами`},{id:`куда-идти-дальше`,content:`Куда идти дальше`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#что-нужно-заранее`,title:(0,n.jsx)(n.Fragment,{children:`Что нужно заранее`})},{depth:2,url:`#два-вида-адресов`,title:(0,n.jsx)(n.Fragment,{children:`Два вида адресов`})},{depth:2,url:`#как-выглядит-запрос`,title:(0,n.jsx)(n.Fragment,{children:`Как выглядит запрос`})},{depth:2,url:`#ошибки-простыми-словами`,title:(0,n.jsx)(n.Fragment,{children:`Ошибки простыми словами`})},{depth:2,url:`#куда-идти-дальше`,title:(0,n.jsx)(n.Fragment,{children:`Куда идти дальше`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components},{Tab:r,Tabs:i}=t;return r||u(`Tab`,!0),i||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`API — это набор адресов на сайте вида `,(0,n.jsx)(t.code,{children:`https://ВАШ_САЙТ/api/v2/…`}),`. Этот гайд объясняет `,(0,n.jsx)(t.strong,{children:`как думать`}),` про них. Полный список путей — в `,(0,n.jsx)(t.a,{href:`../reference/http`,children:`HTTP`}),` и `,(0,n.jsx)(t.a,{href:`../reference/openapi`,children:`OpenAPI`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`что-нужно-заранее`,children:`Что нужно заранее`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../install`,children:`Установка`})}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:`auth`,children:`Авторизация`}),` — получить Bearer (`,(0,n.jsx)(t.code,{children:`access_token`}),`)`]}),`
`,(0,n.jsxs)(t.li,{children:[`При демо-проблемах — `,(0,n.jsx)(t.a,{href:`env`,children:`Инструкция .env`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`два-вида-адресов`,children:`Два вида адресов`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Вид`}),(0,n.jsx)(t.th,{children:`Пример`}),(0,n.jsx)(t.th,{children:`Зачем`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.strong,{children:`Sugar`}),` (короткий)`]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`POST /post/`}),`, `,(0,n.jsx)(t.code,{children:`POST /user/`}),`, `,(0,n.jsx)(t.code,{children:`POST /plugin/`})]}),(0,n.jsxs)(t.td,{children:[`Удобное `,(0,n.jsx)(t.strong,{children:`создание`}),` одной сущности`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`Универсальный CRUD`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`/table/post/`}),`, `,(0,n.jsx)(t.code,{children:`/table/users/`})]}),(0,n.jsxs)(t.td,{children:[`Список, чтение, правка, удаление `,(0,n.jsx)(t.strong,{children:`любой`}),` разрешённой таблицы`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`Sugar почти всегда только `,(0,n.jsx)(t.strong,{children:`create`}),`. Список новостей — `,(0,n.jsx)(t.code,{children:`GET /post/`}),` или `,(0,n.jsx)(t.code,{children:`GET /table/post/`}),`; обновить новость — `,(0,n.jsx)(t.code,{children:`PUT /table/post/{id}`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Права (можно ли читать/писать таблицу) задаёт `,(0,n.jsx)(t.a,{href:`access-levels`,children:`уровень доступа`}),` ключа.`]}),`
`,(0,n.jsxs)(t.p,{children:[`Некоторые служебные таблицы (`,(0,n.jsx)(t.code,{children:`api_keys`}),`, `,(0,n.jsx)(t.code,{children:`oauth_*`}),`, …) через `,(0,n.jsx)(t.code,{children:`/table/`}),` закрыты.`]}),`
`,(0,n.jsx)(t.h2,{id:`как-выглядит-запрос`,children:`Как выглядит запрос`}),`
`,(0,n.jsxs)(i,{groupId:`endpointsExampleLang`,items:[`curl`,`PHP`,`JS`,`Python`],children:[(0,n.jsx)(r,{value:`curl`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -sS`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'https://ВАШ_САЙТ/api/v2/table/users/?limit=20'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` \\`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  -H`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` 'Authorization: Bearer <access_token>'`})]})]})})})}),(0,n.jsx)(r,{value:`PHP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$ch `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` curl_init`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'https://ВАШ_САЙТ/api/v2/table/users/?limit=20'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`curl_setopt_array`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($ch, [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	CURLOPT_RETURNTRANSFER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	CURLOPT_HTTPHEADER`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`     =>`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` [`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`		'Authorization: Bearer <access_token>'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	],`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]);`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` curl_exec`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($ch);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`curl_close`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`($ch);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`echo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $response;`})]})]})})})}),(0,n.jsx)(r,{value:`JS`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` response`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` await`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` fetch`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'https://ВАШ_САЙТ/api/v2/table/users/?limit=20'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	headers: {`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`		Authorization: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'Bearer <access_token>'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`	},`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`});`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` data`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` await`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` response.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`json`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`console.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`log`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(data);`})]})]})})})}),(0,n.jsx)(r,{value:`Python`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`import`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` requests`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`response `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` requests.get(`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`    "https://ВАШ_САЙТ/api/v2/table/users/?limit=20"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`    headers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"Authorization"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"Bearer <access_token>"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`},`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:`    timeout`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`30`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`print`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(response.json())`})]})]})})})})]}),`
`,(0,n.jsx)(t.p,{children:`Слеш в конце необязателен.`}),`
`,(0,n.jsx)(t.p,{children:`Типичный ответ списка:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`{`})}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "data"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: [ `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#B31D28`,"--shiki-light-font-style":`italic`,"--shiki-dark":`#FDAEB7`,"--shiki-dark-font-style":`italic`},children:`…`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` ],`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`  "count"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`: `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`42`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Создание часто отвечает `,(0,n.jsx)(t.code,{children:`201`}),` и `,(0,n.jsx)(t.code,{children:`{ "id": 123 }`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`ошибки-простыми-словами`,children:`Ошибки простыми словами`}),`
`,(0,n.jsxs)(t.p,{children:[`Большинство ошибок — JSON с полями `,(0,n.jsx)(t.code,{children:`error`}),` и `,(0,n.jsx)(t.code,{children:`message`}),` (схема ApiError в OpenAPI).`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Код`}),(0,n.jsx)(t.th,{children:`Обычно значит`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`401`}),(0,n.jsxs)(t.td,{children:[`Нет пропуска или он просрочен — `,(0,n.jsx)(t.a,{href:`auth`,children:`auth`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`403`}),(0,n.jsxs)(t.td,{children:[`Токен есть, но нет scope на эту операцию — `,(0,n.jsx)(t.a,{href:`access-levels`,children:`access-levels`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`404`}),(0,n.jsx)(t.td,{children:`Нет такой записи / таблицы`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`422`}),(0,n.jsxs)(t.td,{children:[`Тело запроса не прошло проверку (смотрите `,(0,n.jsx)(t.code,{children:`details`}),`)`]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`куда-идти-дальше`,children:`Куда идти дальше`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Задача`}),(0,n.jsx)(t.th,{children:`Гайд`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Создать / искать новости`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`posts-create`,children:`posts-create`}),`, `,(0,n.jsx)(t.a,{href:`posts-search`,children:`posts-search`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Доп. поля новости`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`xfields-news`,children:`xfields-news`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Пользователи`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`users-create`,children:`users-create`}),`, `,(0,n.jsx)(t.a,{href:`users-search`,children:`users-search`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Плагин`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`plugins-create`,children:`plugins-create`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`То же из PHP на сайте`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`sdk`,children:`SDK`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Было v1`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`migrate-v1-v2`,children:`migrate-v1-v2`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/http`,children:`HTTP /api/v2`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../reference/openapi`,children:`OpenAPI`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`security`,children:`Безопасность`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};