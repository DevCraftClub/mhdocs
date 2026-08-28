import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`With`,description:`Маркерный атрибут: виртуальный withPropertyName($value) заменяет значение свойства.`,version:`1.0.0`},i=new Date(1787834766e3),a=`

**Описание:** Маркерный PHP-атрибут для свойства. \`WithHandler\` генерирует метод \`with{Property}($value)\`, который заменяет значение свойства целиком и возвращает \`$this\`.

**Namespace:** \`Devcraft\\Attributes\`

**Target:** \`Attribute::TARGET_PROPERTY\`

**С версии:** 1.0.0

**См. также:**

* [WithItem](WithItem)
* [WithHandler](../runtime/WithHandler)
* [AbstractWith](../abstracts/AbstractWith)
* [Гайд: атрибуты With](../../guides/with_attributes)

## Поведение [#поведение]

* Свойство должно быть non-public, non-static, non-readonly.
* Ровно один аргумент.
* Проверка типа — штатная PHP (без string→int coercion).
* Nullable свойства допускают \`null\`.

\`\`\`php
#[With]
private ?int $page = null;

$query->withPage(3);
\`\`\`
`,o={contents:[{heading:void 0,content:"**Описание:** Маркерный PHP-атрибут для свойства. `WithHandler` генерирует метод `with{Property}($value)`, который заменяет значение свойства целиком и возвращает `$this`."},{heading:void 0,content:"**Namespace:** `Devcraft\\Attributes`"},{heading:void 0,content:"**Target:** `Attribute::TARGET_PROPERTY`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`WithItem`},{heading:void 0,content:`WithHandler`},{heading:void 0,content:`AbstractWith`},{heading:void 0,content:`Гайд: атрибуты With`},{heading:`поведение`,content:`Свойство должно быть non-public, non-static, non-readonly.`},{heading:`поведение`,content:`Ровно один аргумент.`},{heading:`поведение`,content:`Проверка типа — штатная PHP (без string→int coercion).`},{heading:`поведение`,content:"Nullable свойства допускают `null`."}],headings:[{id:`поведение`,content:`Поведение`}]},s=[{depth:2,url:`#поведение`,title:(0,n.jsx)(n.Fragment,{children:`Поведение`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Маркерный PHP-атрибут для свойства. `,(0,n.jsx)(t.code,{children:`WithHandler`}),` генерирует метод `,(0,n.jsx)(t.code,{children:`with{Property}($value)`}),`, который заменяет значение свойства целиком и возвращает `,(0,n.jsx)(t.code,{children:`$this`}),`.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`Devcraft\\Attributes`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Target:`}),` `,(0,n.jsx)(t.code,{children:`Attribute::TARGET_PROPERTY`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`WithItem`,children:`WithItem`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../runtime/WithHandler`,children:`WithHandler`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../abstracts/AbstractWith`,children:`AbstractWith`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../../guides/with_attributes`,children:`Гайд: атрибуты With`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`поведение`,children:`Поведение`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Свойство должно быть non-public, non-static, non-readonly.`}),`
`,(0,n.jsx)(t.li,{children:`Ровно один аргумент.`}),`
`,(0,n.jsx)(t.li,{children:`Проверка типа — штатная PHP (без string→int coercion).`}),`
`,(0,n.jsxs)(t.li,{children:[`Nullable свойства допускают `,(0,n.jsx)(t.code,{children:`null`}),`.`]}),`
`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`#[`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`With`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`]`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`private`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` ?int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` $page `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` null`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`$query`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`->`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`withPage`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`3`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};