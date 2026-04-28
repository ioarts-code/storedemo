# Schema Model Updates

## Summary of Changes

The Hygraph schema models have been updated from "Services with Tags" to "Products with Copyrights".

## Model Changes

### Old Schema
- **Service** model (renamed to Product)
- **Category** model (unchanged)
- **Tag** model (renamed to Copyright)

### New Schema
- **Product** model
- **Category** model
- **Copyright** model

## Field Changes in Product Model

The Product model now includes:
- `name` (Text, required)
- `description` (Rich Text)
- `shortDescription` (Text)
- `url` (URL)
- `icon` (Text)
- `image` (Asset)
- `category` (Reference to Category)
- `copyrights` (Reference to Copyright) - previously was `tags`
- `createdAt` (DateTime)

## Updated Files

### Code Files
- `lib/types.ts` - Changed `Tag` interface to `Copyright`
- `lib/graphql-queries.ts` - Updated all queries to use `copyrights` instead of `tags`
- `components/service-card.tsx` - Updated to display copyrights instead of tags
- `app/page.tsx` - Updated imports and filter logic

### Documentation Files
- `SCHEMA_SETUP.md` - Updated step-by-step guide
- `HYGRAPH_SETUP.md` - Updated model descriptions
- All other documentation reflects these changes

## Migration Guide

If you have existing content with the old schema:

1. Create a new **Copyright** model in Hygraph with:
   - `name` (Text, required)
   - `slug` (Text, required)

2. Update your **Product** model:
   - Remove the `tags` field
   - Add the `copyrights` field as a Reference to Copyright (allow multiple)

3. Migrate your tag data to copyright entries in Hygraph

4. Refresh the app and reconfigure if needed

## GraphQL Queries Updated

All GraphQL queries now request `copyrights` instead of `tags`:

```graphql
copyrights(first: 10) {
  id
  name
  slug
}
```

## Next Steps

1. Create the **Copyright** model in your Hygraph project
2. Update your **Product** model to use copyrights
3. Reconfigure the app with your API endpoint
4. Start adding products with copyright information
