import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`sqz`,description:`Установка и использование sqz — сжатие длинного вывода команд для экономии токенов ИИ.`},i=new Date(1787750944e3),a=`

**sqz** сжимает длинный вывод команд (логи, \`git\`, тесты), прежде чем он попадёт в контекст ИИ. Это stdin→stdout: команду запускают как обычно и передают вывод в \`sqz compress\`.

## Ссылки [#ссылки]

* Репозиторий: [ojuschugh1/sqz](https://github.com/ojuschugh1/sqz)

## Установка [#установка]

Один из способов:

<CodeBlockTabs defaultValue="npm" groupId="package-manager">
  <CodeBlockTabsList>
    <CodeBlockTabsTrigger value="npm">
      npm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="pnpm">
      pnpm
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="yarn">
      yarn
    </CodeBlockTabsTrigger>

    <CodeBlockTabsTrigger value="bun">
      bun
    </CodeBlockTabsTrigger>
  </CodeBlockTabsList>

  <CodeBlockTab value="npm">
    \`\`\`bash
    npm install -g sqz-cli
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="pnpm">
    \`\`\`bash
    pnpm add -g sqz-cli
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="yarn">
    \`\`\`bash
    yarn global add sqz-cli
    \`\`\`
  </CodeBlockTab>

  <CodeBlockTab value="bun">
    \`\`\`bash
    bun add --global sqz-cli
    \`\`\`
  </CodeBlockTab>
</CodeBlockTabs>

Или через Homebrew / install-скрипт:

<Tabs groupId="os" items="['Homebrew', 'Скрипт']">
  <Tab value="Homebrew">
    \`\`\`bash
    brew tap ojuschugh1/sqz
    brew install sqz
    \`\`\`
  </Tab>

  <Tab value="Скрипт">
    \`\`\`bash
    curl -fsSL https://raw.githubusercontent.com/ojuschugh1/sqz/main/install.sh | sh
    \`\`\`
  </Tab>
</Tabs>

## Использование [#использование]

\`\`\`bash
git status 2>&1 | sqz compress
cargo test 2>&1 | sqz compress
\`\`\`

Если в ответе появился токен \`§ref:HASH§\` и нужен исходный текст:

\`\`\`bash
sqz expand a1b2c3d4
\`\`\`

Отключить дедуп на один запуск: \`SQZ_NO_DEDUP=1 … | sqz compress\` или флаг \`--no-cache\`.

**Когда полезно:** длинный stdout/stderr.

**Не нужно:** интерактивные программы (REPL, ssh, vim); цепочки с \`&&\` / \`;\` лучше не гнать целиком через pipe; уже короткий вывод сжимать незачем.

## См. также [#см-также]

* [Ponytail](ponytail)
* [ИИ-инструменты DevCraft](../dev/dle/devcraft_admin/guides/ai_tools)
`,o={contents:[{heading:void 0,content:"**sqz** сжимает длинный вывод команд (логи, `git`, тесты), прежде чем он попадёт в контекст ИИ. Это stdin→stdout: команду запускают как обычно и передают вывод в `sqz compress`."},{heading:`ссылки`,content:`Репозиторий: ojuschugh1/sqz`},{heading:`установка`,content:`Один из способов:`},{heading:`установка`,content:`Или через Homebrew / install-скрипт:`},{heading:`использование`,content:"Если в ответе появился токен `§ref:HASH§` и нужен исходный текст:"},{heading:`использование`,content:"Отключить дедуп на один запуск: `SQZ_NO_DEDUP=1 … | sqz compress` или флаг `--no-cache`."},{heading:`использование`,content:`**Когда полезно:** длинный stdout/stderr.`},{heading:`использование`,content:"**Не нужно:** интерактивные программы (REPL, ssh, vim); цепочки с `&&` / `;` лучше не гнать целиком через pipe; уже короткий вывод сжимать незачем."},{heading:`см-также`,content:`Ponytail`},{heading:`см-также`,content:`ИИ-инструменты DevCraft`}],headings:[{id:`ссылки`,content:`Ссылки`},{id:`установка`,content:`Установка`},{id:`использование`,content:`Использование`},{id:`см-также`,content:`См. также`}]},s=[{depth:2,url:`#ссылки`,title:(0,n.jsx)(n.Fragment,{children:`Ссылки`})},{depth:2,url:`#установка`,title:(0,n.jsx)(n.Fragment,{children:`Установка`})},{depth:2,url:`#использование`,title:(0,n.jsx)(n.Fragment,{children:`Использование`})},{depth:2,url:`#см-также`,title:(0,n.jsx)(n.Fragment,{children:`См. также`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{CodeBlockTab:r,CodeBlockTabs:i,CodeBlockTabsList:a,CodeBlockTabsTrigger:o,Tab:s,Tabs:c}=t;return r||u(`CodeBlockTab`,!0),i||u(`CodeBlockTabs`,!0),a||u(`CodeBlockTabsList`,!0),o||u(`CodeBlockTabsTrigger`,!0),s||u(`Tab`,!0),c||u(`Tabs`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`sqz`}),` сжимает длинный вывод команд (логи, `,(0,n.jsx)(t.code,{children:`git`}),`, тесты), прежде чем он попадёт в контекст ИИ. Это stdin→stdout: команду запускают как обычно и передают вывод в `,(0,n.jsx)(t.code,{children:`sqz compress`}),`.`]}),`
`,(0,n.jsx)(t.h2,{id:`ссылки`,children:`Ссылки`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Репозиторий: `,(0,n.jsx)(t.a,{href:`https://github.com/ojuschugh1/sqz`,children:`ojuschugh1/sqz`})]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`установка`,children:`Установка`}),`
`,(0,n.jsx)(t.p,{children:`Один из способов:`}),`
`,(0,n.jsxs)(i,{defaultValue:`npm`,groupId:`package-manager`,persist:!0,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`npm`,children:`npm`}),(0,n.jsx)(o,{value:`pnpm`,children:`pnpm`}),(0,n.jsx)(o,{value:`yarn`,children:`yarn`}),(0,n.jsx)(o,{value:`bun`,children:`bun`})]}),(0,n.jsx)(r,{value:`npm`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`npm`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -g`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` sqz-cli`})]})})})})}),(0,n.jsx)(r,{value:`pnpm`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pnpm`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -g`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` sqz-cli`})]})})})})}),(0,n.jsx)(r,{value:`yarn`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`yarn`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` global`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` sqz-cli`})]})})})})}),(0,n.jsx)(r,{value:`bun`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`bun`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` add`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --global`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` sqz-cli`})]})})})})})]}),`
`,(0,n.jsx)(t.p,{children:`Или через Homebrew / install-скрипт:`}),`
`,(0,n.jsxs)(c,{groupId:`os`,items:[`Homebrew`,`Скрипт`],children:[(0,n.jsx)(s,{value:`Homebrew`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`brew`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` tap`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` ojuschugh1/sqz`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`brew`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` sqz`})]})]})})})}),(0,n.jsx)(s,{value:`Скрипт`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`curl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` -fsSL`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` https://raw.githubusercontent.com/ojuschugh1/sqz/main/install.sh`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` |`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` sh`})]})})})})})]}),`
`,(0,n.jsx)(t.h2,{id:`использование`,children:`Использование`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`git`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` status`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` 2>&1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` |`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` sqz`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` compress`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`cargo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` test`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` 2>&1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` |`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` sqz`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` compress`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Если в ответе появился токен `,(0,n.jsx)(t.code,{children:`§ref:HASH§`}),` и нужен исходный текст:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`sqz`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` expand`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` a1b2c3d4`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`Отключить дедуп на один запуск: `,(0,n.jsx)(t.code,{children:`SQZ_NO_DEDUP=1 … | sqz compress`}),` или флаг `,(0,n.jsx)(t.code,{children:`--no-cache`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Когда полезно:`}),` длинный stdout/stderr.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Не нужно:`}),` интерактивные программы (REPL, ssh, vim); цепочки с `,(0,n.jsx)(t.code,{children:`&&`}),` / `,(0,n.jsx)(t.code,{children:`;`}),` лучше не гнать целиком через pipe; уже короткий вывод сжимать незачем.`]}),`
`,(0,n.jsx)(t.h2,{id:`см-также`,children:`См. также`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`ponytail`,children:`Ponytail`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dev/dle/devcraft_admin/guides/ai_tools`,children:`ИИ-инструменты DevCraft`})}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};