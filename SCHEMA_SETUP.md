# Hygraph Schema Setup Guide

This guide shows you exactly how to create the required schema in Hygraph for this app to work.

## Quick Overview

You need to create **3 models** in Hygraph:
1. **Product** - The main content model
2. **Category** - For organizing products
3. **Tag** - For labeling products

---

## Step 1: Create the Category Model

1. Go to **Hygraph Dashboard** → **Schema**
2. Click **Create Model**
3. Name: `Category`
4. Click **Create**

### Add Fields to Category:
- **name** (Text, required, Single line text)
- **slug** (Text, required, Single line text)

---

## Step 2: Create the Tag Model

1. Click **Create Model** again
2. Name: `Tag`
3. Click **Create**

### Add Fields to Tag:
- **name** (Text, required, Single line text)
- **slug** (Text, required, Single line text)

---

## Step 3: Create the Product Model

1. Click **Create Model** again
2. Name: `Product`
3. Click **Create**

### Add Fields to Product (in order):

| Field Name | Type | Settings |
|-----------|------|----------|
| **name** | Text | Required, Single line |
| **description** | Rich Text | Optional |
| **shortDescription** | Text | Optional, Single line |
| **url** | Text | Optional, URL |
| **icon** | Text | Optional, Single line |
| **category** | Reference | Link to Category (optional) |
| **tags** | Reference | Link to Tag (optional, allow multiple) |
| **image** | Asset | Optional, single asset |
| **createdAt** | DateTime | System field (auto) |

---

## Step 4: Get Your API Endpoint

1. Go to **Project Settings** → **API Access**
2. Look for **Content API**
3. Copy the **Endpoint URL**
4. Example: `https://api-eu-central-1.hygraph.com/content/abc123xyz/graphql`

---

## Step 5: Configure the App

1. Open the startpage in your browser
2. Click the **⚙️ Settings** icon (top right)
3. Paste your Hygraph API endpoint
4. Click **Save Config**
5. Done! You should see the configuration validated

---

## Step 6: Add Sample Content (Optional)

To test the app, create some sample content in Hygraph:

1. Go to **Content** section
2. Click **Create** next to Product
3. Fill in:
   - **name**: "Premium Package"
   - **description**: "Our best-selling product with all features"
   - **url**: "https://yoursite.com/products/premium"
   - **icon**: "star"
   - **category**: Create or select a category
   - **tags**: Add some tags
   - **image**: Upload an image
4. Publish the product
5. Repeat for more products

---

## Troubleshooting

**Error: "field 'products' is not defined"**
- You haven't created the Product model yet
- Check that the model name is exactly "Product" (capital P)
- Refresh the app and try again

**Error: "Unauthorized" or "401"**
- Your API endpoint is wrong
- Copy it directly from Hygraph dashboard
- Check that any auth token is correct

**Error: "Not Found" or "404"**
- The API endpoint URL is invalid
- Make sure you copied the full URL from the dashboard
- Don't modify the endpoint URL

**Can't see published content**
- Make sure you published the content in Hygraph
- Drafts aren't visible via the public API
- Check that the stage is correct (usually "published")

---

## GraphQL Introspection

If you want to see what fields are available in your schema:

1. Go to **Project Settings** → **API Access**
2. Click **Explore** next to your API
3. Use GraphQL Playground to explore your schema
4. Or check the GRAPHQL_EXAMPLES.md file for common queries

---

## Next Steps

- Customize the product cards in `components/service-card.tsx`
- Modify the styling in `app/page.tsx`
- Add more fields to your Product model as needed
- Deploy to production when ready

For more details, see the main README.md and HYGRAPH_SETUP.md files.
