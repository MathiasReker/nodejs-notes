RESTful URI should refer to a resource that is a thing (noun) instead of referring to an action (verb) because nouns
have properties that verbs do not have – similarly, resources have attributes.

### Singleton and Collection Resources

A resource can be a singleton or a collection.

For instance, `customers` is a collection resource and `customer` is a singleton resource.

We can identify the `customers` collection resource using the URI `/customers.` We can identify a single `customer`
resource
using the URI `/customers/{customerId}`

### Collection and Sub-collection Resources

A resource may contain sub-collection resources also.

For example, sub-collection resource `accounts` of a particular `customer` can be identified using the URN
`/customers/{customerId}/accounts` (in a banking domain).

Similarly, a singleton resource `account` inside the sub-collection resource `accounts` can be identified as follows:
`/customers/{customerId}/accounts/{accountId}`

### Order of endpoint types

It is essential to organize the page correctly. The order of the endpoint should be as follows:

`GET`,
`POST`,
`PUT`,
`PATCH`,
`DELETE`

### Use lowercase in URI

Lowercase letters should be consistently preferred in URI paths.

### Never use CRUD function names in URIs

We should not use URIs to indicate a CRUD function. URIs should only be used to identify the resources and not uniquely
any action upon them.

### Use query component to filter URI collection

When sorting, filtering, and pagination, we use parameters as query parameters.

### Endpoints

Here is an example of endpoints for this project:

```text
| HTTP Method | Endpoint       | Description       |
|-------------|----------------|-------------------|
| GET         | /api/pages     | Returns all pages |
| GET         | /api/posts     | Returns all posts |
| POST        | /api/pages     | Add new page      |
| POST        | /api/posts     | Add new post      |
| PUT         | /api/pages/:id | Update page by id |
| PUT         | /api/post/:id  | Update post by id |
| DELETE      | /api/pages/:id | Delete page by id |
```
