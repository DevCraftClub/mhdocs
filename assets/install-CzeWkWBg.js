import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка DLE API Connection Provider для XenForo 2.3`,version:`1.0.0`},i=new Date(1787834766e3),a=`

## Требования [#требования]

* XenForo &#x2A;*2.3.0+**
* На сайте DLE уже настроен [DLE API 200.1.0](../../dle/dle_api/200.1.0/install) и OAuth-клиент ([OAuth-клиенты](../../dle/dle_api/200.1.0/guides/oauth-client))

## Установка из архива [#установка-из-архива]

1. Скачайте add-on: [devcraft.club/downloads/dle-api-connection-provider.38](https://devcraft.club/downloads/dle-api-connection-provider.38/).
2. Распакуйте содержимое \`upload/\` в корень XenForo (каталог с \`src/\`, \`admin.php\`).
3. ACP → **Add-ons** → **Install add-on** → выберите **DLE API Connection Provider** (\`DevCraftClub/DleApiConnectionProvider\`).
4. После установки провайдер **DLE API** (\`dleapi\`) появится в **Setup → Connected accounts**.

## Установка из исходников (разработка) [#установка-из-исходников-разработка]

Add-on ID: \`DevCraftClub/DleApiConnectionProvider\`

\`\`\`
src/addons/DevCraftClub/DleApiConnectionProvider/
\`\`\`

Из корня XenForo:

\`\`\`bash
php cmd.php xf-addon:install DevCraftClub/DleApiConnectionProvider
\`\`\`

## Следующий шаг [#следующий-шаг]

[Настройка OAuth-клиента DLE и полей провайдера](guides/configuration).

## Удаление [#удаление]

ACP → **Add-ons** → Uninstall **DLE API Connection Provider**. Удаляются запись провайдера \`dleapi\` и связи пользователей с этим провайдером.
`,o={contents:[{heading:`требования`,content:`XenForo &#x2A;*2.3.0+**`},{heading:`требования`,content:`На сайте DLE уже настроен DLE API 200.1.0 и OAuth-клиент (OAuth-клиенты)`},{heading:`установка-из-архива`,content:`Скачайте add-on: devcraft.club/downloads/dle-api-connection-provider.38.`},{heading:`установка-из-архива`,content:"Распакуйте содержимое `upload/` в корень XenForo (каталог с `src/`, `admin.php`)."},{heading:`установка-из-архива`,content:"ACP → **Add-ons** → **Install add-on** → выберите **DLE API Connection Provider** (`DevCraftClub/DleApiConnectionProvider`)."},{heading:`установка-из-архива`,content:"После установки провайдер **DLE API** (`dleapi`) появится в **Setup → Connected accounts**."},{heading:`установка-из-исходников-разработка`,content:"Add-on ID: `DevCraftClub/DleApiConnectionProvider`"},{heading:`установка-из-исходников-разработка`,content:`Из корня XenForo:`},{heading:`следующий-шаг`,content:`Настройка OAuth-клиента DLE и полей провайдера.`},{heading:`удаление`,content:"ACP → **Add-ons** → Uninstall **DLE API Connection Provider**. Удаляются запись провайдера `dleapi` и связи пользователей с этим провайдером."}],headings:[{id:`требования`,content:`Требования`},{id:`установка-из-архива`,content:`Установка из архива`},{id:`установка-из-исходников-разработка`,content:`Установка из исходников (разработка)`},{id:`следующий-шаг`,content:`Следующий шаг`},{id:`удаление`,content:`Удаление`}]},s=[{depth:2,url:`#требования`,title:(0,n.jsx)(n.Fragment,{children:`Требования`})},{depth:2,url:`#установка-из-архива`,title:(0,n.jsx)(n.Fragment,{children:`Установка из архива`})},{depth:2,url:`#установка-из-исходников-разработка`,title:(0,n.jsx)(n.Fragment,{children:`Установка из исходников (разработка)`})},{depth:2,url:`#следующий-шаг`,title:(0,n.jsx)(n.Fragment,{children:`Следующий шаг`})},{depth:2,url:`#удаление`,title:(0,n.jsx)(n.Fragment,{children:`Удаление`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:`требования`,children:`Требования`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`XenForo `,(0,n.jsx)(t.strong,{children:`2.3.0+`})]}),`
`,(0,n.jsxs)(t.li,{children:[`На сайте DLE уже настроен `,(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/install`,children:`DLE API 200.1.0`}),` и OAuth-клиент (`,(0,n.jsx)(t.a,{href:`../../dle/dle_api/200.1.0/guides/oauth-client`,children:`OAuth-клиенты`}),`)`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка-из-архива`,children:`Установка из архива`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте add-on: `,(0,n.jsx)(t.a,{href:`https://devcraft.club/downloads/dle-api-connection-provider.38/`,children:`devcraft.club/downloads/dle-api-connection-provider.38`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Распакуйте содержимое `,(0,n.jsx)(t.code,{children:`upload/`}),` в корень XenForo (каталог с `,(0,n.jsx)(t.code,{children:`src/`}),`, `,(0,n.jsx)(t.code,{children:`admin.php`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`ACP → `,(0,n.jsx)(t.strong,{children:`Add-ons`}),` → `,(0,n.jsx)(t.strong,{children:`Install add-on`}),` → выберите `,(0,n.jsx)(t.strong,{children:`DLE API Connection Provider`}),` (`,(0,n.jsx)(t.code,{children:`DevCraftClub/DleApiConnectionProvider`}),`).`]}),`
`,(0,n.jsxs)(t.li,{children:[`После установки провайдер `,(0,n.jsx)(t.strong,{children:`DLE API`}),` (`,(0,n.jsx)(t.code,{children:`dleapi`}),`) появится в `,(0,n.jsx)(t.strong,{children:`Setup → Connected accounts`}),`.`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка-из-исходников-разработка`,children:`Установка из исходников (разработка)`}),`
`,(0,n.jsxs)(t.p,{children:[`Add-on ID: `,(0,n.jsx)(t.code,{children:`DevCraftClub/DleApiConnectionProvider`})]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`src/addons/DevCraftClub/DleApiConnectionProvider/`})})})})}),`
`,(0,n.jsx)(t.p,{children:`Из корня XenForo:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`php`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` cmd.php`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` xf-addon:install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` DevCraftClub/DleApiConnectionProvider`})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`следующий-шаг`,children:`Следующий шаг`}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:`guides/configuration`,children:`Настройка OAuth-клиента DLE и полей провайдера`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`удаление`,children:`Удаление`}),`
`,(0,n.jsxs)(t.p,{children:[`ACP → `,(0,n.jsx)(t.strong,{children:`Add-ons`}),` → Uninstall `,(0,n.jsx)(t.strong,{children:`DLE API Connection Provider`}),`. Удаляются запись провайдера `,(0,n.jsx)(t.code,{children:`dleapi`}),` и связи пользователей с этим провайдером.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};