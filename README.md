## Query without filter

```gql
query WithoutFilter {
  statusWithoutFilter(code: 400) {
    code
    message
  }
}
```

Response:

```json
{
  "errors": [
    {
      "message": "Request failed with status code 400",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "statusWithoutFilter"
      ],
      "extensions": {
        "code": "INTERNAL_SERVER_ERROR",
        "exception": {
          /* omitted for brevity */
        }
      }
    }
  ],
  "data": null
}
```

## Query with filter

```gql
query WithFilter {
    statusWithFilter(code: 400) {
    code
    message
  }
}
```

Response:

```json
{
  "errors": [
    {
      "message": "BAD REQUEST",
      "locations": [
        {
          "line": 9,
          "column": 3
        }
      ],
      "path": [
        "statusWithFilter"
      ],
      "extensions": {
        // Apollo Client needs this code (see https://www.apollographql.com/docs/react/data/error-handling/#graphql-errors)
        "code": "GRAPHQL_VALIDATION_FAILED",
        "response": "BAD REQUEST",
        "exception": {
          /* omitted for brevity */
        }
      }
    }
  ],
  "data": null
}
```