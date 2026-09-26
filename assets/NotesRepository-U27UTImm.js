import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`NotesRepository`,description:`Methods for one API section.`,version:`1.0.0`},i=new Date(1790413881e3),a=`

**Description:** Methods for one API section.

**Namespace:** \`DevCraftClub\\MyShows\\Repository\`

**Since:** 1.0.0

**See also:**

* [AbstractRepository](AbstractRepository)
* [Note](../dto/Note)

## Methods [#methods]

### \`get(NotesSearchFilter $filter): array\` [#getnotessearchfilter-filter-array]

**Description:** Calls \`notes.Get\`.

| Parameter | Type                                              | Description |
| --------- | ------------------------------------------------- | ----------- |
| \`$filter\` | [NotesSearchFilter](../filters/NotesSearchFilter) | —           |

**Returns:** \`array\`

### \`count(NotesSearchFilter $filter): int\` [#countnotessearchfilter-filter-int]

**Description:** Calls \`notes.Count\`.

| Parameter | Type                                              | Description |
| --------- | ------------------------------------------------- | ----------- |
| \`$filter\` | [NotesSearchFilter](../filters/NotesSearchFilter) | —           |

**Returns:** \`int\`

### \`save(int $showId, string $text, ?int $episodeId = null): Note\` [#saveint-showid-string-text-int-episodeid--null-note]

**Description:** Calls \`notes.Save\`.

| Parameter    | Type     | Description        |
| ------------ | -------- | ------------------ |
| \`$showId\`    | \`int\`    | —                  |
| \`$text\`      | \`string\` | —                  |
| \`$episodeId\` | \`?int\`   | — Default: \`null\`. |

**Returns:** [Note](../dto/Note)

### \`delete(int $noteId): void\` [#deleteint-noteid-void]

**Description:** Calls \`notes.Delete\`.

| Parameter | Type  | Description |
| --------- | ----- | ----------- |
| \`$noteId\` | \`int\` | —           |

**Returns:** \`void\`

### \`restore(int $noteId): void\` [#restoreint-noteid-void]

**Description:** Calls \`notes.Restore\`.

| Parameter | Type  | Description |
| --------- | ----- | ----------- |
| \`$noteId\` | \`int\` | —           |

**Returns:** \`void\`
`,o={contents:[{heading:void 0,content:`**Description:** Methods for one API section.`},{heading:void 0,content:"**Namespace:** `DevCraftClub\\MyShows\\Repository`"},{heading:void 0,content:`**Since:** 1.0.0`},{heading:void 0,content:`**See also:**`},{heading:void 0,content:`AbstractRepository`},{heading:void 0,content:`Note`},{heading:`getnotessearchfilter-filter-array`,content:"**Description:** Calls `notes.Get`."},{heading:`getnotessearchfilter-filter-array`,content:`Parameter`},{heading:`getnotessearchfilter-filter-array`,content:`Type`},{heading:`getnotessearchfilter-filter-array`,content:`Description`},{heading:`getnotessearchfilter-filter-array`,content:"`$filter`"},{heading:`getnotessearchfilter-filter-array`,content:`NotesSearchFilter`},{heading:`getnotessearchfilter-filter-array`,content:`—`},{heading:`getnotessearchfilter-filter-array`,content:"**Returns:** `array`"},{heading:`countnotessearchfilter-filter-int`,content:"**Description:** Calls `notes.Count`."},{heading:`countnotessearchfilter-filter-int`,content:`Parameter`},{heading:`countnotessearchfilter-filter-int`,content:`Type`},{heading:`countnotessearchfilter-filter-int`,content:`Description`},{heading:`countnotessearchfilter-filter-int`,content:"`$filter`"},{heading:`countnotessearchfilter-filter-int`,content:`NotesSearchFilter`},{heading:`countnotessearchfilter-filter-int`,content:`—`},{heading:`countnotessearchfilter-filter-int`,content:"**Returns:** `int`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"**Description:** Calls `notes.Save`."},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`Parameter`},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`Type`},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`Description`},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`$showId`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`int`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`—`},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`$text`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`string`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`—`},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`$episodeId`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"`?int`"},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:"— Default: `null`."},{heading:`saveint-showid-string-text-int-episodeid--null-note`,content:`**Returns:** Note`},{heading:`deleteint-noteid-void`,content:"**Description:** Calls `notes.Delete`."},{heading:`deleteint-noteid-void`,content:`Parameter`},{heading:`deleteint-noteid-void`,content:`Type`},{heading:`deleteint-noteid-void`,content:`Description`},{heading:`deleteint-noteid-void`,content:"`$noteId`"},{heading:`deleteint-noteid-void`,content:"`int`"},{heading:`deleteint-noteid-void`,content:`—`},{heading:`deleteint-noteid-void`,content:"**Returns:** `void`"},{heading:`restoreint-noteid-void`,content:"**Description:** Calls `notes.Restore`."},{heading:`restoreint-noteid-void`,content:`Parameter`},{heading:`restoreint-noteid-void`,content:`Type`},{heading:`restoreint-noteid-void`,content:`Description`},{heading:`restoreint-noteid-void`,content:"`$noteId`"},{heading:`restoreint-noteid-void`,content:"`int`"},{heading:`restoreint-noteid-void`,content:`—`},{heading:`restoreint-noteid-void`,content:"**Returns:** `void`"}],headings:[{id:`methods`,content:`Methods`},{id:`getnotessearchfilter-filter-array`,content:"`get(NotesSearchFilter $filter): array`"},{id:`countnotessearchfilter-filter-int`,content:"`count(NotesSearchFilter $filter): int`"},{id:`saveint-showid-string-text-int-episodeid--null-note`,content:"`save(int $showId, string $text, ?int $episodeId = null): Note`"},{id:`deleteint-noteid-void`,content:"`delete(int $noteId): void`"},{id:`restoreint-noteid-void`,content:"`restore(int $noteId): void`"}]},s=[{depth:2,url:`#methods`,title:(0,n.jsx)(n.Fragment,{children:`Methods`})},{depth:3,url:`#getnotessearchfilter-filter-array`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`get(NotesSearchFilter $filter): array`})})},{depth:3,url:`#countnotessearchfilter-filter-int`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`count(NotesSearchFilter $filter): int`})})},{depth:3,url:`#saveint-showid-string-text-int-episodeid--null-note`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`save(int $showId, string $text, ?int $episodeId = null): Note`})})},{depth:3,url:`#deleteint-noteid-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`delete(int $noteId): void`})})},{depth:3,url:`#restoreint-noteid-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`restore(int $noteId): void`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Methods for one API section.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraftClub\\MyShows\\Repository`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Since:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`See also:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`AbstractRepository`,children:`AbstractRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../dto/Note`,children:`Note`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,n.jsx)(t.h3,{id:`getnotessearchfilter-filter-array`,children:(0,n.jsx)(t.code,{children:`get(NotesSearchFilter $filter): array`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`notes.Get`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$filter`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../filters/NotesSearchFilter`,children:`NotesSearchFilter`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.code,{children:`array`})]}),`
`,(0,n.jsx)(t.h3,{id:`countnotessearchfilter-filter-int`,children:(0,n.jsx)(t.code,{children:`count(NotesSearchFilter $filter): int`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`notes.Count`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$filter`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`../filters/NotesSearchFilter`,children:`NotesSearchFilter`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.code,{children:`int`})]}),`
`,(0,n.jsx)(t.h3,{id:`saveint-showid-string-text-int-episodeid--null-note`,children:(0,n.jsx)(t.code,{children:`save(int $showId, string $text, ?int $episodeId = null): Note`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`notes.Save`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$showId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$text`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`string`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$episodeId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`?int`})}),(0,n.jsxs)(t.td,{children:[`— Default: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.a,{href:`../dto/Note`,children:`Note`})]}),`
`,(0,n.jsx)(t.h3,{id:`deleteint-noteid-void`,children:(0,n.jsx)(t.code,{children:`delete(int $noteId): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`notes.Delete`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$noteId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`restoreint-noteid-void`,children:(0,n.jsx)(t.code,{children:`restore(int $noteId): void`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Description:`}),` Calls `,(0,n.jsx)(t.code,{children:`notes.Restore`}),`.`]}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Parameter`}),(0,n.jsx)(t.th,{children:`Type`}),(0,n.jsx)(t.th,{children:`Description`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$noteId`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`int`})}),(0,n.jsx)(t.td,{children:`—`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Returns:`}),` `,(0,n.jsx)(t.code,{children:`void`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};