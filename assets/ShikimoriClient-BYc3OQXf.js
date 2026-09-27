import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{t}from"./jsx-runtime-By8HlURe.js";var n=e(t()),r={title:`ShikimoriClient`,description:`Фасад клиента Shikimori: каталог, вход и хранение.`,version:`1.0.0`},i=new Date(1790523217e3),a=`

**Описание:** Фасад клиента Shikimori: каталог, вход и хранение.

**Namespace:** \`DevCraftClub\\Shikimori\`

**С версии:** 1.0.0

**См. также:**

* [SdkConfig](SdkConfig)
* [ShikimoriGraphQLClient](ShikimoriGraphQLClient)
* [EntityStoreInterface](EntityStoreInterface)
* [OAuth2Helper](OAuth2Helper)
* [AnimeRepository](../repositories/AnimeRepository)
* [MangaRepository](../repositories/MangaRepository)
* [CharacterRepository](../repositories/CharacterRepository)
* [PersonRepository](../repositories/PersonRepository)

## Методы [#методы]

### \`__construct(SdkConfig $config, ?ShikimoriGraphQLClient $graphQLClient = null, ?PersistenceEngine $persistence = null, ?EntityStoreInterface $entityStore = null): void\` [#__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void]

| Параметр         | Тип                                              | Описание                |
| ---------------- | ------------------------------------------------ | ----------------------- |
| \`$config\`        | [SdkConfig](SdkConfig)                           | —                       |
| \`$graphQLClient\` | [ShikimoriGraphQLClient](ShikimoriGraphQLClient) | — По умолчанию: \`null\`. |
| \`$persistence\`   | [PersistenceEngine](PersistenceEngine)           | — По умолчанию: \`null\`. |
| \`$entityStore\`   | [EntityStoreInterface](EntityStoreInterface)     | — По умолчанию: \`null\`. |

**Возвращает:** \`void\`

### \`static fromEnv(): self\` [#static-fromenv-self]

**Возвращает:** \`self\`

### \`withOrm(ORMInterface $orm, EntityManagerInterface $entityManager): self\` [#withormorminterface-orm-entitymanagerinterface-entitymanager-self]

| Параметр         | Тип                      | Описание |
| ---------------- | ------------------------ | -------- |
| \`$orm\`           | \`ORMInterface\`           | —        |
| \`$entityManager\` | \`EntityManagerInterface\` | —        |

**Возвращает:** \`self\`

### \`withDatabase(): self\` [#withdatabase-self]

**Возвращает:** \`self\`

### \`getConfig(): SdkConfig\` [#getconfig-sdkconfig]

**Возвращает:** [SdkConfig](SdkConfig)

### \`getGraphQLClient(): ShikimoriGraphQLClient\` [#getgraphqlclient-shikimorigraphqlclient]

**Возвращает:** [ShikimoriGraphQLClient](ShikimoriGraphQLClient)

### \`getEntityStore(): ?EntityStoreInterface\` [#getentitystore-entitystoreinterface]

**Возвращает:** [EntityStoreInterface](EntityStoreInterface)

### \`oauth(): OAuth2Helper\` [#oauth-oauth2helper]

**Возвращает:** [OAuth2Helper](OAuth2Helper)

### \`animes(): AnimeRepository\` [#animes-animerepository]

**Возвращает:** [AnimeRepository](../repositories/AnimeRepository)

### \`mangas(): MangaRepository\` [#mangas-mangarepository]

**Возвращает:** [MangaRepository](../repositories/MangaRepository)

### \`characters(): CharacterRepository\` [#characters-characterrepository]

**Возвращает:** [CharacterRepository](../repositories/CharacterRepository)

### \`people(): PersonRepository\` [#people-personrepository]

**Возвращает:** [PersonRepository](../repositories/PersonRepository)

### \`genres(): GenreRepository\` [#genres-genrerepository]

**Возвращает:** [GenreRepository](../repositories/GenreRepository)

### \`users(): UserRepository\` [#users-userrepository]

**Возвращает:** [UserRepository](../repositories/UserRepository)

### \`userRates(): UserRateRepository\` [#userrates-userraterepository]

**Возвращает:** [UserRateRepository](../repositories/UserRateRepository)

### \`contests(): ContestRepository\` [#contests-contestrepository]

**Возвращает:** [ContestRepository](../repositories/ContestRepository)
`,o={contents:[{heading:void 0,content:`**Описание:** Фасад клиента Shikimori: каталог, вход и хранение.`},{heading:void 0,content:"**Namespace:** `DevCraftClub\\Shikimori`"},{heading:void 0,content:`**С версии:** 1.0.0`},{heading:void 0,content:`**См. также:**`},{heading:void 0,content:`SdkConfig`},{heading:void 0,content:`ShikimoriGraphQLClient`},{heading:void 0,content:`EntityStoreInterface`},{heading:void 0,content:`OAuth2Helper`},{heading:void 0,content:`AnimeRepository`},{heading:void 0,content:`MangaRepository`},{heading:void 0,content:`CharacterRepository`},{heading:void 0,content:`PersonRepository`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`Параметр`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`Тип`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`Описание`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"`$config`"},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`SdkConfig`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`—`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"`$graphQLClient`"},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`ShikimoriGraphQLClient`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"— По умолчанию: `null`."},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"`$persistence`"},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`PersistenceEngine`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"— По умолчанию: `null`."},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"`$entityStore`"},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:`EntityStoreInterface`},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"— По умолчанию: `null`."},{heading:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"**Возвращает:** `void`"},{heading:`static-fromenv-self`,content:"**Возвращает:** `self`"},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:`Параметр`},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:`Тип`},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:`Описание`},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"`$orm`"},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"`ORMInterface`"},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:`—`},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"`$entityManager`"},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"`EntityManagerInterface`"},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:`—`},{heading:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"**Возвращает:** `self`"},{heading:`withdatabase-self`,content:"**Возвращает:** `self`"},{heading:`getconfig-sdkconfig`,content:`**Возвращает:** SdkConfig`},{heading:`getgraphqlclient-shikimorigraphqlclient`,content:`**Возвращает:** ShikimoriGraphQLClient`},{heading:`getentitystore-entitystoreinterface`,content:`**Возвращает:** EntityStoreInterface`},{heading:`oauth-oauth2helper`,content:`**Возвращает:** OAuth2Helper`},{heading:`animes-animerepository`,content:`**Возвращает:** AnimeRepository`},{heading:`mangas-mangarepository`,content:`**Возвращает:** MangaRepository`},{heading:`characters-characterrepository`,content:`**Возвращает:** CharacterRepository`},{heading:`people-personrepository`,content:`**Возвращает:** PersonRepository`},{heading:`genres-genrerepository`,content:`**Возвращает:** GenreRepository`},{heading:`users-userrepository`,content:`**Возвращает:** UserRepository`},{heading:`userrates-userraterepository`,content:`**Возвращает:** UserRateRepository`},{heading:`contests-contestrepository`,content:`**Возвращает:** ContestRepository`}],headings:[{id:`методы`,content:`Методы`},{id:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,content:"`__construct(SdkConfig $config, ?ShikimoriGraphQLClient $graphQLClient = null, ?PersistenceEngine $persistence = null, ?EntityStoreInterface $entityStore = null): void`"},{id:`static-fromenv-self`,content:"`static fromEnv(): self`"},{id:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,content:"`withOrm(ORMInterface $orm, EntityManagerInterface $entityManager): self`"},{id:`withdatabase-self`,content:"`withDatabase(): self`"},{id:`getconfig-sdkconfig`,content:"`getConfig(): SdkConfig`"},{id:`getgraphqlclient-shikimorigraphqlclient`,content:"`getGraphQLClient(): ShikimoriGraphQLClient`"},{id:`getentitystore-entitystoreinterface`,content:"`getEntityStore(): ?EntityStoreInterface`"},{id:`oauth-oauth2helper`,content:"`oauth(): OAuth2Helper`"},{id:`animes-animerepository`,content:"`animes(): AnimeRepository`"},{id:`mangas-mangarepository`,content:"`mangas(): MangaRepository`"},{id:`characters-characterrepository`,content:"`characters(): CharacterRepository`"},{id:`people-personrepository`,content:"`people(): PersonRepository`"},{id:`genres-genrerepository`,content:"`genres(): GenreRepository`"},{id:`users-userrepository`,content:"`users(): UserRepository`"},{id:`userrates-userraterepository`,content:"`userRates(): UserRateRepository`"},{id:`contests-contestrepository`,content:"`contests(): ContestRepository`"}]},s=[{depth:2,url:`#методы`,title:(0,n.jsx)(n.Fragment,{children:`Методы`})},{depth:3,url:`#__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`__construct(SdkConfig $config, ?ShikimoriGraphQLClient $graphQLClient = null, ?PersistenceEngine $persistence = null, ?EntityStoreInterface $entityStore = null): void`})})},{depth:3,url:`#static-fromenv-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`static fromEnv(): self`})})},{depth:3,url:`#withormorminterface-orm-entitymanagerinterface-entitymanager-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withOrm(ORMInterface $orm, EntityManagerInterface $entityManager): self`})})},{depth:3,url:`#withdatabase-self`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`withDatabase(): self`})})},{depth:3,url:`#getconfig-sdkconfig`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getConfig(): SdkConfig`})})},{depth:3,url:`#getgraphqlclient-shikimorigraphqlclient`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getGraphQLClient(): ShikimoriGraphQLClient`})})},{depth:3,url:`#getentitystore-entitystoreinterface`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`getEntityStore(): ?EntityStoreInterface`})})},{depth:3,url:`#oauth-oauth2helper`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`oauth(): OAuth2Helper`})})},{depth:3,url:`#animes-animerepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`animes(): AnimeRepository`})})},{depth:3,url:`#mangas-mangarepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`mangas(): MangaRepository`})})},{depth:3,url:`#characters-characterrepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`characters(): CharacterRepository`})})},{depth:3,url:`#people-personrepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`people(): PersonRepository`})})},{depth:3,url:`#genres-genrerepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`genres(): GenreRepository`})})},{depth:3,url:`#users-userrepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`users(): UserRepository`})})},{depth:3,url:`#userrates-userraterepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`userRates(): UserRateRepository`})})},{depth:3,url:`#contests-contestrepository`,title:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(`code`,{children:`contests(): ContestRepository`})})}];function c(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Описание:`}),` Фасад клиента Shikimori: каталог, вход и хранение.`]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Namespace:`}),` `,(0,n.jsx)(t.code,{children:`DevCraftClub\\Shikimori`})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`С версии:`}),` 1.0.0`]}),`
`,(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:`См. также:`})}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`SdkConfig`,children:`SdkConfig`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`ShikimoriGraphQLClient`,children:`ShikimoriGraphQLClient`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`EntityStoreInterface`,children:`EntityStoreInterface`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`OAuth2Helper`,children:`OAuth2Helper`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../repositories/AnimeRepository`,children:`AnimeRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../repositories/MangaRepository`,children:`MangaRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../repositories/CharacterRepository`,children:`CharacterRepository`})}),`
`,(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:`../repositories/PersonRepository`,children:`PersonRepository`})}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,n.jsx)(t.h3,{id:`__constructsdkconfig-config-shikimorigraphqlclient-graphqlclient--null-persistenceengine-persistence--null-entitystoreinterface-entitystore--null-void`,children:(0,n.jsx)(t.code,{children:`__construct(SdkConfig $config, ?ShikimoriGraphQLClient $graphQLClient = null, ?PersistenceEngine $persistence = null, ?EntityStoreInterface $entityStore = null): void`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$config`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`SdkConfig`,children:`SdkConfig`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$graphQLClient`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`ShikimoriGraphQLClient`,children:`ShikimoriGraphQLClient`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$persistence`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`PersistenceEngine`,children:`PersistenceEngine`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$entityStore`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`EntityStoreInterface`,children:`EntityStoreInterface`})}),(0,n.jsxs)(t.td,{children:[`— По умолчанию: `,(0,n.jsx)(t.code,{children:`null`}),`.`]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`void`})]}),`
`,(0,n.jsx)(t.h3,{id:`static-fromenv-self`,children:(0,n.jsx)(t.code,{children:`static fromEnv(): self`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(t.h3,{id:`withormorminterface-orm-entitymanagerinterface-entitymanager-self`,children:(0,n.jsx)(t.code,{children:`withOrm(ORMInterface $orm, EntityManagerInterface $entityManager): self`})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Параметр`}),(0,n.jsx)(t.th,{children:`Тип`}),(0,n.jsx)(t.th,{children:`Описание`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$orm`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`ORMInterface`})}),(0,n.jsx)(t.td,{children:`—`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`$entityManager`})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:`EntityManagerInterface`})}),(0,n.jsx)(t.td,{children:`—`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(t.h3,{id:`withdatabase-self`,children:(0,n.jsx)(t.code,{children:`withDatabase(): self`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.code,{children:`self`})]}),`
`,(0,n.jsx)(t.h3,{id:`getconfig-sdkconfig`,children:(0,n.jsx)(t.code,{children:`getConfig(): SdkConfig`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`SdkConfig`,children:`SdkConfig`})]}),`
`,(0,n.jsx)(t.h3,{id:`getgraphqlclient-shikimorigraphqlclient`,children:(0,n.jsx)(t.code,{children:`getGraphQLClient(): ShikimoriGraphQLClient`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`ShikimoriGraphQLClient`,children:`ShikimoriGraphQLClient`})]}),`
`,(0,n.jsx)(t.h3,{id:`getentitystore-entitystoreinterface`,children:(0,n.jsx)(t.code,{children:`getEntityStore(): ?EntityStoreInterface`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`EntityStoreInterface`,children:`EntityStoreInterface`})]}),`
`,(0,n.jsx)(t.h3,{id:`oauth-oauth2helper`,children:(0,n.jsx)(t.code,{children:`oauth(): OAuth2Helper`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`OAuth2Helper`,children:`OAuth2Helper`})]}),`
`,(0,n.jsx)(t.h3,{id:`animes-animerepository`,children:(0,n.jsx)(t.code,{children:`animes(): AnimeRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/AnimeRepository`,children:`AnimeRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`mangas-mangarepository`,children:(0,n.jsx)(t.code,{children:`mangas(): MangaRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/MangaRepository`,children:`MangaRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`characters-characterrepository`,children:(0,n.jsx)(t.code,{children:`characters(): CharacterRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/CharacterRepository`,children:`CharacterRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`people-personrepository`,children:(0,n.jsx)(t.code,{children:`people(): PersonRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/PersonRepository`,children:`PersonRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`genres-genrerepository`,children:(0,n.jsx)(t.code,{children:`genres(): GenreRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/GenreRepository`,children:`GenreRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`users-userrepository`,children:(0,n.jsx)(t.code,{children:`users(): UserRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/UserRepository`,children:`UserRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`userrates-userraterepository`,children:(0,n.jsx)(t.code,{children:`userRates(): UserRateRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/UserRateRepository`,children:`UserRateRepository`})]}),`
`,(0,n.jsx)(t.h3,{id:`contests-contestrepository`,children:(0,n.jsx)(t.code,{children:`contests(): ContestRepository`})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:`Возвращает:`}),` `,(0,n.jsx)(t.a,{href:`../repositories/ContestRepository`,children:`ContestRepository`})]})]})}function l(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}export{a as _markdown,l as default,r as frontmatter,i as lastModified,o as structuredData,s as toc};