import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`Установка`,description:`Установка DLE Faker 200.1.4 для DLE 20.0 с DevCraft Admin.`},i=new Date(1785400635e3),a=`

<Callout type="warn" title="Порядок установки">
  Сначала установите и настройте [DevCraft Admin](../../devcraft_admin/install). Затем устанавливайте DLE Faker.
</Callout>

## 1. Архив плагина [#1-архив-плагина]

1. Скачайте \`install.zip\` релиза.
2. Загрузите в **Панель управления DLE → Плагины → Установить плагин**.
3. Убедитесь, что появились:
   * \`engine/inc/dle_faker.php\`
   * \`devcraft/src/modules/dle_faker/\`
   * локали \`devcraft/locales/*/dle_faker.xliff\` (если входят в пакет)

Legacy-пути \`engine/inc/maharder/\` и \`engine/ajax/maharder/dle_faker/\` **не используются** и в релизе отсутствуют.

## 2. Composer [#2-composer]

В каталоге \`devcraft/\` установите зависимость (через [Composer UI](../../devcraft_admin/install) модуля DevCraft или CLI):

\`\`\`bash
composer require fakerphp/faker
composer dump-autoload
\`\`\`

Пакет объявлен в \`manifest.php\` как \`composer_required\` (\`hardRequired\`).

## 3. Первый запуск [#3-первый-запуск]

1. Откройте \`?mod=dle_faker\`.
2. Сохраните [настройки](settings) (локаль Faker, пулы пользователей и категорий).
3. При необходимости загрузите файлы в меню **Файлы** (изображения / файлы / аудио / видео).
4. Создайте [шаблон](guides/gen_news) и сгенерируйте новость.
`,o={contents:[{heading:void 0,content:`Сначала установите и настройте DevCraft Admin. Затем устанавливайте DLE Faker.`},{heading:`1-архив-плагина`,content:"Скачайте `install.zip` релиза."},{heading:`1-архив-плагина`,content:`Загрузите в **Панель управления DLE → Плагины → Установить плагин**.`},{heading:`1-архив-плагина`,content:`Убедитесь, что появились:`},{heading:`1-архив-плагина`,content:"`engine/inc/dle_faker.php`"},{heading:`1-архив-плагина`,content:"`devcraft/src/modules/dle_faker/`"},{heading:`1-архив-плагина`,content:"локали `devcraft/locales/*/dle_faker.xliff` (если входят в пакет)"},{heading:`1-архив-плагина`,content:"Legacy-пути `engine/inc/maharder/` и `engine/ajax/maharder/dle_faker/` **не используются** и в релизе отсутствуют."},{heading:`2-composer`,content:"В каталоге `devcraft/` установите зависимость (через Composer UI модуля DevCraft или CLI):"},{heading:`2-composer`,content:"Пакет объявлен в `manifest.php` как `composer_required` (`hardRequired`)."},{heading:`3-первый-запуск`,content:"Откройте `?mod=dle_faker`."},{heading:`3-первый-запуск`,content:`Сохраните настройки (локаль Faker, пулы пользователей и категорий).`},{heading:`3-первый-запуск`,content:`При необходимости загрузите файлы в меню **Файлы** (изображения / файлы / аудио / видео).`},{heading:`3-первый-запуск`,content:`Создайте шаблон и сгенерируйте новость.`}],headings:[{id:`1-архив-плагина`,content:`1\\. Архив плагина`},{id:`2-composer`,content:`2\\. Composer`},{id:`3-первый-запуск`,content:`3\\. Первый запуск`}]},s=[{depth:2,url:`#1-архив-плагина`,title:(0,n.jsx)(n.Fragment,{children:`1. Архив плагина`})},{depth:2,url:`#2-composer`,title:(0,n.jsx)(n.Fragment,{children:`2. Composer`})},{depth:2,url:`#3-первый-запуск`,title:(0,n.jsx)(n.Fragment,{children:`3. Первый запуск`})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,ul:`ul`,...e.components},{Callout:r}=t;return r||u(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r,{type:`warn`,title:`Порядок установки`,children:(0,n.jsxs)(t.p,{children:[`Сначала установите и настройте `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`DevCraft Admin`}),`. Затем устанавливайте DLE Faker.`]})}),`
`,(0,n.jsx)(t.h2,{id:`1-архив-плагина`,children:`1. Архив плагина`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Скачайте `,(0,n.jsx)(t.code,{children:`install.zip`}),` релиза.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Загрузите в `,(0,n.jsx)(t.strong,{children:`Панель управления DLE → Плагины → Установить плагин`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Убедитесь, что появились:`,`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`engine/inc/dle_faker.php`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:`devcraft/src/modules/dle_faker/`})}),`
`,(0,n.jsxs)(t.li,{children:[`локали `,(0,n.jsx)(t.code,{children:`devcraft/locales/*/dle_faker.xliff`}),` (если входят в пакет)`]}),`
`]}),`
`]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`Legacy-пути `,(0,n.jsx)(t.code,{children:`engine/inc/maharder/`}),` и `,(0,n.jsx)(t.code,{children:`engine/ajax/maharder/dle_faker/`}),` `,(0,n.jsx)(t.strong,{children:`не используются`}),` и в релизе отсутствуют.`]}),`
`,(0,n.jsx)(t.h2,{id:`2-composer`,children:`2. Composer`}),`
`,(0,n.jsxs)(t.p,{children:[`В каталоге `,(0,n.jsx)(t.code,{children:`devcraft/`}),` установите зависимость (через `,(0,n.jsx)(t.a,{href:`../../devcraft_admin/install`,children:`Composer UI`}),` модуля DevCraft или CLI):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` require`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` fakerphp/faker`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`composer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` dump-autoload`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Пакет объявлен в `,(0,n.jsx)(t.code,{children:`manifest.php`}),` как `,(0,n.jsx)(t.code,{children:`composer_required`}),` (`,(0,n.jsx)(t.code,{children:`hardRequired`}),`).`]}),`
`,(0,n.jsx)(t.h2,{id:`3-первый-запуск`,children:`3. Первый запуск`}),`
`,(0,n.jsxs)(t.ol,{children:[`
`,(0,n.jsxs)(t.li,{children:[`Откройте `,(0,n.jsx)(t.code,{children:`?mod=dle_faker`}),`.`]}),`
`,(0,n.jsxs)(t.li,{children:[`Сохраните `,(0,n.jsx)(t.a,{href:`settings`,children:`настройки`}),` (локаль Faker, пулы пользователей и категорий).`]}),`
`,(0,n.jsxs)(t.li,{children:[`При необходимости загрузите файлы в меню `,(0,n.jsx)(t.strong,{children:`Файлы`}),` (изображения / файлы / аудио / видео).`]}),`
`,(0,n.jsxs)(t.li,{children:[`Создайте `,(0,n.jsx)(t.a,{href:`guides/gen_news`,children:`шаблон`}),` и сгенерируйте новость.`]}),`
`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}function u(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};