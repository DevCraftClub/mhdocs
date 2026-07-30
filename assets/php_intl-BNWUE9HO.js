import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`PHP intl`,description:`Как включить расширение PHP intl для админки DevCraft.`},i=new Date(1785404498e3),a=`

Для корректной работы админки нужно активировать (установить) расширение PHP intl.

## Через php.ini [#через-phpini]

Ищем серверную конфигурацию PHP (обычно \`/etc/php/8.1/apache2/php.ini\`):

\`\`\`bash
php --ini
\`\`\`

и получаем примерный вывод в консоли:

\`\`\`bash
Configuration File (php.ini) Path: /etc/php/8.1/cli
Loaded Configuration File:         /etc/php/8.1/cli/php.ini
Scan for additional .ini files in: /etc/php/8.1/cli/conf.d
Additional .ini files parsed:      /etc/php/8.1/cli/conf.d/10-mysqlnd.ini,
/etc/php/8.1/cli/conf.d/10-opcache.ini,
...
\`\`\`

Здесь видны версия PHP и путь к конфигурационному файлу (\`/etc/php/8.1/cli/php.ini\`).

Ищем строку \`;extension=intl\` и удаляем \`;\` в начале строки, чтобы активировать расширение. Затем перезапускаем Apache:

\`\`\`bash
sudo systemctl restart apache2
\`\`\`

## Через пакетный менеджер (Ubuntu, Debian и т. п.) [#через-пакетный-менеджер-ubuntu-debian-и-т-п]

На Debian/Ubuntu расширение php-intl можно установить через пакетный менеджер:

\`\`\`bash
sudo apt-get install php8.1-intl
\`\`\`

\`8.1\` — версия PHP, которую вы используете. Если версия другая, замените \`8.1\` на нужную.
`,o={contents:[{heading:void 0,content:`Для корректной работы админки нужно активировать (установить) расширение PHP intl.`},{heading:`через-phpini`,content:"Ищем серверную конфигурацию PHP (обычно `/etc/php/8.1/apache2/php.ini`):"},{heading:`через-phpini`,content:`и получаем примерный вывод в консоли:`},{heading:`через-phpini`,content:"Здесь видны версия PHP и путь к конфигурационному файлу (`/etc/php/8.1/cli/php.ini`)."},{heading:`через-phpini`,content:"Ищем строку `;extension=intl` и удаляем `;` в начале строки, чтобы активировать расширение. Затем перезапускаем Apache:"},{heading:`через-пакетный-менеджер-ubuntu-debian-и-т-п`,content:`На Debian/Ubuntu расширение php-intl можно установить через пакетный менеджер:`},{heading:`через-пакетный-менеджер-ubuntu-debian-и-т-п`,content:"`8.1` — версия PHP, которую вы используете. Если версия другая, замените `8.1` на нужную."}],headings:[{id:`через-phpini`,content:`Через php.ini`},{id:`через-пакетный-менеджер-ubuntu-debian-и-т-п`,content:`Через пакетный менеджер (Ubuntu, Debian и т. п.)`}]},s=[{depth:2,url:`#через-phpini`,title:(0,n.jsx)(n.Fragment,{children:`Через php.ini`})},{depth:2,url:`#через-пакетный-менеджер-ubuntu-debian-и-т-п`,title:(0,n.jsx)(n.Fragment,{children:`Через пакетный менеджер (Ubuntu, Debian и т. п.)`})}];function c(e){let t={code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:`Для корректной работы админки нужно активировать (установить) расширение PHP intl.`}),`
`,(0,n.jsx)(t.h2,{id:`через-phpini`,children:`Через php.ini`}),`
`,(0,n.jsxs)(t.p,{children:[`Ищем серверную конфигурацию PHP (обычно `,(0,n.jsx)(t.code,{children:`/etc/php/8.1/apache2/php.ini`}),`):`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`php`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` --ini`})]})})})}),`
`,(0,n.jsx)(t.p,{children:`и получаем примерный вывод в консоли:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Configuration`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` File`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (php.ini) Path: /etc/php/8.1/cli`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Loaded`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` Configuration`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` File:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`         /etc/php/8.1/cli/php.ini`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Scan`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` for`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` additional`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` .ini`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` files`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` in:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` /etc/php/8.1/cli/conf.d`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Additional`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` .ini`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` files`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` parsed:`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`      /etc/php/8.1/cli/conf.d/10-mysqlnd.ini,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`/etc/php/8.1/cli/conf.d/10-opcache.ini,`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`...`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`Здесь видны версия PHP и путь к конфигурационному файлу (`,(0,n.jsx)(t.code,{children:`/etc/php/8.1/cli/php.ini`}),`).`]}),`
`,(0,n.jsxs)(t.p,{children:[`Ищем строку `,(0,n.jsx)(t.code,{children:`;extension=intl`}),` и удаляем `,(0,n.jsx)(t.code,{children:`;`}),` в начале строки, чтобы активировать расширение. Затем перезапускаем Apache:`]}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`sudo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` systemctl`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` restart`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` apache2`})]})})})}),`
`,(0,n.jsx)(t.h2,{id:`через-пакетный-менеджер-ubuntu-debian-и-т-п`,children:`Через пакетный менеджер (Ubuntu, Debian и т. п.)`}),`
`,(0,n.jsx)(t.p,{children:`На Debian/Ubuntu расширение php-intl можно установить через пакетный менеджер:`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="m 4,4 a 1,1 0 0 0 -0.7070312,0.2929687 1,1 0 0 0 0,1.4140625 L 8.5859375,11 3.2929688,16.292969 a 1,1 0 0 0 0,1.414062 1,1 0 0 0 1.4140624,0 l 5.9999998,-6 a 1.0001,1.0001 0 0 0 0,-1.414062 L 4.7070312,4.2929687 A 1,1 0 0 0 4,4 Z m 8,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 h 8 a 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`sudo`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` apt-get`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` install`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` php8.1-intl`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`8.1`}),` — версия PHP, которую вы используете. Если версия другая, замените `,(0,n.jsx)(t.code,{children:`8.1`}),` на нужную.`]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};