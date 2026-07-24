---
tags:
  - API
  - OpenAPI
  - DLE
title: "OpenAPI - DLE API"
description: "Интерактивная спецификация OpenAPI для /api/v2."
author: "Maxim Harder"
---

# OpenAPI

Спецификация генерируется из PHP attributes ([swagger-php](https://github.com/zircote/swagger-php)) в репозитории dle_api: `apidata/openapi.yaml`.

```bash
cd upload/api && composer openapi
```

<swagger-ui src="./openapi.yaml" syntaxHighlightTheme="monokai"/>