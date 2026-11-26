import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Класс: DebugHooks`,description:`Мост ядра к панели отладки Admin без жёсткой зависимости Core → Modules\\Admin.`,version:`200.4.2`},i=new Date(1795673215e3),a=`

**Описание:** Тонкий фасад в ядре: метки времени, запуск панели и подключение перехвата SQL Cycle. Если класса \`ToolbarService\` нет, вызовы ничего не делают — ядро не обязано импортировать модуль Admin.

**Namespace:** \`DevCraft\\Core\\Debug\`

**С версии:** 200.4.2

**См. также:**

* [Гайд: Отладка](../../../guides/debugging)
* [Application](Application)
* [DatabaseGateway](DatabaseGateway)

## Путь [#путь]

\`devcraft/src/classes/Debug/DebugHooks.php\`

## Методы [#методы]

### \`mark(string $name): void\` [#markstring-name-void]

Ставит метку времени для таймлайна панели («куда ушло»). Без Admin — пустой вызов.

### \`boot(string $surface): void\` [#bootstring-surface-void]

Запускает сбор панели на поверхности \`admin\` или \`public\`. Реальный \`ToolbarService::boot\` сам проверяет настройки, \`$member_id\` и группу.

### \`hookDleAdmin(): void\` [#hookdleadmin-void]

Ранний хук для страниц \`admin.php\` (не только раздел DevCraft).

### \`isBooted(): bool\` [#isbooted-bool]

\`true\`, если панель уже запущена в этом запросе.

### \`refreshCycleSqlTap(): void\` [#refreshcyclesqltap-void]

Просит [Application](Application) / [DatabaseGateway](DatabaseGateway) повесить логгер Cycle SQL, если панель уже запущена и шлюз БД создан. Ошибки ORM глотаются — boot панели не должен требовать базу.

<Callout type="info">
  \`Application\`, \`Router\` и \`DatabaseGateway\` ходят в панель через этот класс (\`class_exists\`), а не через прямой \`use\` \`ToolbarService\`.
</Callout>

## Пример [#пример]

\`\`\`php
use DevCraft\\Core\\Debug\\DebugHooks;

DebugHooks::mark('devcraft_boot_start');
DebugHooks::boot('public');

if (DebugHooks::isBooted()) {
	DebugHooks::refreshCycleSqlTap();
}
\`\`\`
`,o={contents:[{heading:void 0,content:"**Описание:** Тонкий фасад в ядре: метки времени, запуск панели и подключение перехвата SQL Cycle. Если класса `ToolbarService` нет, вызовы ничего не делают — ядро не обязано импортировать модуль Admin."},{heading:void 0,content:"**Namespace:** `DevCraft\\Core\\Debug`"},{heading:void 0,content:`**С версии:** 200.4.2`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`Гайд: Отладка`},{heading:void 0,content:`Application`},{heading:void 0,content:`DatabaseGateway`},{heading:`путь`,content:"`devcraft/src/classes/Debug/DebugHooks.php`"},{heading:`markstring-name-void`,content:`Ставит метку времени для таймлайна панели («куда ушло»). Без Admin — пустой вызов.`},{heading:`bootstring-surface-void`,content:"Запускает сбор панели на поверхности `admin` или `public`. Реальный `ToolbarService::boot` сам проверяет настройки, `$member_id` и группу."},{heading:`hookdleadmin-void`,content:"Ранний хук для страниц `admin.php` (не только раздел DevCraft)."},{heading:`isbooted-bool`,content:"`true`, если панель уже запущена в этом запросе."},{heading:`refreshcyclesqltap-void`,content:`Просит Application / DatabaseGateway повесить логгер Cycle SQL, если панель уже запущена и шлюз БД создан. Ошибки ORM глотаются — boot панели не должен требовать базу.`},{heading:`refreshcyclesqltap-void`,content:"`Application`, `Router` и `DatabaseGateway` ходят в панель через этот класс (`class_exists`), а не через прямой `use` `ToolbarService`."}],headings:[{id:`путь`,content:`Путь`},{id:`методы`,content:`Методы`},{id:`markstring-name-void`,content:"`mark(string $name): void`"},{id:`bootstring-surface-void`,content:"`boot(string $surface): void`"},{id:`hookdleadmin-void`,content:"`hookDleAdmin(): void`"},{id:`isbooted-bool`,content:"`isBooted(): bool`"},{id:`refreshcyclesqltap-void`,content:"`refreshCycleSqlTap(): void`"},{id:`пример`,content:`Пример`}]},s=[{depth:2,url:`#путь`,title:(0,n.jsx)(n.Fragment,{children:`Путь`})},{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#markstring-name-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`mark(string $name): void`})})},{depth:3,url:`#bootstring-surface-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`boot(string $surface): void`})})},{depth:3,url:`#hookdleadmin-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`hookDleAdmin(): void`})})},{depth:3,url:`#isbooted-bool`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`isBooted(): bool`})})},{depth:3,url:`#refreshcyclesqltap-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`refreshCycleSqlTap(): void`})})},{depth:2,url:`#пример`,title:(0,n.jsx)(n.Fragment,{children:`Пример`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Тонкий фасад в ядре: метки времени, запуск панели и подключение перехвата SQL Cycle. Если класса `,(0,n.jsx)(t.code,{children:`ToolbarService`}),` нет, вызовы ничего не делают — ядро не обязано импортировать модуль Admin.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraft\\Core\\Debug`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 200.4.2`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../../guides/debugging`,children:`Гайд: Отладка`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`Application`,children:`Application`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`DatabaseGateway`,children:`DatabaseGateway`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`путь`,children:`Путь`}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:`devcraft/src/classes/Debug/DebugHooks.php`})}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`markstring-name-void`,children:(0,n.jsx)(t.code,{children:`mark(string $name): void`})}),`
`,(0,n.jsx)(t.p,{children:`Ставит метку времени для таймлайна панели («куда ушло»). Без Admin — пустой вызов.`}),`
`,(0,n.jsx)(t.h3,{id:`bootstring-surface-void`,children:(0,n.jsx)(t.code,{children:`boot(string $surface): void`})}),`
`,(0,n.jsxs)(t.p,{children:[`Запускает сбор панели на поверхности `,(0,n.jsx)(t.code,{children:`admin`}),` или `,(0,n.jsx)(t.code,{children:`public`}),`. Реальный `,(0,n.jsx)(t.code,{children:`ToolbarService::boot`}),` сам проверяет настройки, `,(0,n.jsx)(t.code,{children:`$member_id`}),` и группу.`]}),`
`,(0,n.jsx)(t.h3,{id:`hookdleadmin-void`,children:(0,n.jsx)(t.code,{children:`hookDleAdmin(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[`Ранний хук для страниц `,(0,n.jsx)(t.code,{children:`admin.php`}),` (не только раздел DevCraft).`]}),`
`,(0,n.jsx)(t.h3,{id:`isbooted-bool`,children:(0,n.jsx)(t.code,{children:`isBooted(): bool`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`true`}),`, если панель уже запущена в этом запросе.`]}),`
`,(0,n.jsx)(t.h3,{id:`refreshcyclesqltap-void`,children:(0,n.jsx)(t.code,{children:`refreshCycleSqlTap(): void`})}),`
`,(0,n.jsxs)(t.p,{children:[`Просит `,(0,n.jsx)(t.a,{href:`Application`,children:`Application`}),` / `,(0,n.jsx)(t.a,{href:`DatabaseGateway`,children:`DatabaseGateway`}),` повесить логгер Cycle SQL, если панель уже запущена и шлюз БД создан. Ошибки ORM глотаются — boot панели не должен требовать базу.`]}),`
`,(0,n.jsx)(r,{type:`info`,children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`Application`}),`, `,(0,n.jsx)(t.code,{children:`Router`}),` и `,(0,n.jsx)(t.code,{children:`DatabaseGateway`}),` ходят в панель через этот класс (`,(0,n.jsx)(t.code,{children:`class_exists`}),`), а не через прямой `,(0,n.jsx)(t.code,{children:`use`}),` `,(0,n.jsx)(t.code,{children:`ToolbarService`}),`.`]})}),`
`,(0,n.jsx)(t.h2,{id:`пример`,children:`Пример`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`use`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` DevCraft\\Core\\Debug\\DebugHooks`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`DebugHooks`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`mark`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'devcraft_boot_start'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`DebugHooks`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`boot`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`'public'`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`DebugHooks`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isBooted`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`	DebugHooks`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`refreshCycleSqlTap`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};