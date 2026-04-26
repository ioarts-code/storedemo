# GraphQL Query Examples

This document shows example GraphQL queries you can use with your Hygraph API.

## Testing in GraphQL Playground

1. Go to your Hygraph project
2. Click **API Access** → **GraphQL Playground** 
3. Copy any query below and paste it in the left panel
4. Replace any placeholders (like `[category-id]`)
5. Click the play button to execute

---

## Basic Queries

### Fetch All Services
```graphql
{
  services(first: 50) {
    id
    name
    description
    shortDescription
    url
    icon
    category {
      id
      name
      slug
    }
    tags(first: 10) {
      id
      name
      slug
    }
    image {
      url
      alt: caption
    }
    createdAt
  }
}
```

### Fetch All Categories
```graphql
{
  categories(first: 50) {
    id
    name
    slug
  }
}
```

### Fetch All Tags
```graphql
{
  tags(first: 50) {
    id
    name
    slug
  }
}
```

---

## Filtered Queries

### Services by Category
```graphql
query GetServicesByCategory($categoryId: ID!) {
  services(first: 50, where: { category: { id: $categoryId } }) {
    id
    name
    description
    shortDescription
    url
    icon
    category {
      id
      name
    }
    tags(first: 10) {
      id
      name
    }
    image {
      url
      caption
    }
  }
}
```

Query Variables:
```json
{
  "categoryId": "YOUR_CATEGORY_ID_HERE"
}
```

### Search Services by Name
```graphql
query SearchServices($search: String!) {
  services(first: 50, where: { name_contains: $search }) {
    id
    name
    description
    shortDescription
    url
    icon
    category {
      id
      name
    }
    tags(first: 10) {
      id
      name
    }
    image {
      url
      caption
    }
  }
}
```

Query Variables:
```json
{
  "search": "design"
}
```

### Services with Specific Tags
```graphql
query GetServicesByTag($tagId: ID!) {
  services(first: 50, where: { tags_some: { id: $tagId } }) {
    id
    name
    description
    url
    icon
    tags(first: 10) {
      id
      name
    }
    category {
      id
      name
    }
  }
}
```

Query Variables:
```json
{
  "tagId": "YOUR_TAG_ID_HERE"
}
```

---

## Advanced Queries

### Services with Full Details and Sorting
```graphql
{
  services(
    first: 50
    orderBy: createdAt_DESC
  ) {
    id
    name
    description
    shortDescription
    url
    icon
    createdAt
    updatedAt
    category {
      id
      name
      slug
    }
    tags(first: 10, orderBy: name_ASC) {
      id
      name
      slug
    }
    image {
      url
      alt: caption
      width
      height
      mimeType
    }
  }
}
```

### Paginated Services
```graphql
query GetServicesPaginated($first: Int!, $skip: Int!) {
  services(first: $first, skip: $skip, orderBy: createdAt_DESC) {
    id
    name
    description
    category {
      id
      name
    }
  }
  servicesConnection {
    aggregate {
      count
    }
  }
}
```

Query Variables (for page 2, 10 items per page):
```json
{
  "first": 10,
  "skip": 10
}
```

### Services Count by Category
```graphql
{
  categories(first: 50) {
    id
    name
    servicesConnection {
      aggregate {
        count
      }
    }
  }
}
```

### Single Service by ID
```graphql
query GetService($id: ID!) {
  service(where: { id: $id }) {
    id
    name
    description
    shortDescription
    url
    icon
    createdAt
    updatedAt
    category {
      id
      name
      slug
    }
    tags(first: 20) {
      id
      name
      slug
    }
    image {
      url
      alt: caption
      width
      height
    }
  }
}
```

Query Variables:
```json
{
  "id": "YOUR_SERVICE_ID_HERE"
}
```

---

## Mutations (Create/Update/Delete)

### Create a Service
```graphql
mutation CreateService($data: ServiceCreateInput!) {
  createService(data: $data) {
    id
    name
    description
  }
}
```

Query Variables:
```json
{
  "data": {
    "name": "New Service",
    "description": "Service description",
    "shortDescription": "Short desc",
    "url": "https://example.com",
    "icon": "🚀"
  }
}
```

### Update a Service
```graphql
mutation UpdateService($id: ID!, $data: ServiceUpdateInput!) {
  updateService(where: { id: $id }, data: $data) {
    id
    name
    description
    updatedAt
  }
}
```

Query Variables:
```json
{
  "id": "SERVICE_ID_HERE",
  "data": {
    "name": "Updated Service Name",
    "description": "Updated description"
  }
}
```

### Delete a Service
```graphql
mutation DeleteService($id: ID!) {
  deleteService(where: { id: $id }) {
    id
    name
  }
}
```

Query Variables:
```json
{
  "id": "SERVICE_ID_HERE"
}
```

---

## Tips & Best Practices

1. **First Argument**: Use `first: 100` to limit results (max typically 100)
2. **Skip for Pagination**: Use `skip: 20` with `first: 10` to paginate
3. **OrderBy**: Sort with `orderBy: fieldName_ASC` or `_DESC`
4. **Filtering**: Use `where: { field_contains: "search" }` for text search
5. **Aliases**: Use `alt: caption` to rename fields in the response
6. **Multiple Relations**: Query related data in a single request

---

## Common Field Operators

- `_contains` - Text contains (case-insensitive)
- `_in` - Value is in array
- `_not_in` - Value not in array
- `_lt` - Less than
- `_lte` - Less than or equal
- `_gt` - Greater than
- `_gte` - Greater than or equal
- `_exists` - Field exists/is not null

---

## Need Help?

- Check [Hygraph GraphQL Documentation](https://hygraph.com/docs/api-reference)
- Use the GraphQL Playground introspection (Docs panel on right)
- Validate syntax with the GraphQL Playground built-in linter
