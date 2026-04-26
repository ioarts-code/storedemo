# Hygraph Schema Setup Guide

This guide shows you exactly how to configure your Hygraph schema to work with this store app.

## Quick Overview

Your Hygraph schema should have these **2 main models**:
1. **Product** - The main product content model
2. **Category** - For organizing/categorizing products

The app will display products with their images, prices, categories, and more.

---

## Required Product Model Fields

The **Product** model must have these fields (matching your Hygraph schema):

| Field | Type | Settings |
|-------|------|----------|
| **name** | Single line text | Required, Unique, Title |
| **slug** | Slug | Required, Unique |
| **description** | Markdown | Required |
| **price** | Number (Int) | Required |
| **categories** | Reference | Links to Category (Multiple, Two-way) |
| **images** | Asset Picker | Multiple assets, Two-way reference |
| **variants** | Reference | Links to Product Variant (optional) |
| **collections** | Reference | Links to Collection (optional) |
| **orderItems** | Reference | Links to Order Item (optional) |
| **reviews** | Reference | Links to Review (optional) |

---

## Required Category Model Fields

The **Category** model should have:

| Field | Type | Settings |
|-------|------|----------|
| **name** | Text | Single line, Required |
| **slug** | Slug | Required, Unique |

---

---

## Getting Your API Endpoint

1. Go to **Hygraph Dashboard** → **Project Settings** → **API Access**
2. Find the **Content API** section
3. Copy your **Endpoint URL** (looks like: `https://api-eu-central-1.hygraph.com/content/abc123xyz/graphql`)

---

## Configuring the App

1. Open the store app in your browser
2. Click the **⚙️ Settings** icon (top right corner)
3. Paste your Hygraph **Content API endpoint**
4. Optionally add an auth token if needed
5. Click **Save Config**

The app will validate your endpoint and fetch your products automatically.

---

## Adding Sample Products

To test the app, add products in Hygraph:

1. Go to **Content** → **Product**
2. Click **Create**
3. Fill in required fields:
   - **name**: "Wireless Headphones"
   - **slug**: "wireless-headphones"
   - **description**: "High-quality wireless headphones with noise cancellation"
   - **price**: 129
   - **categories**: Select or create a category
   - **images**: Upload product images
4. Click **Publish**
5. Repeat for more products

Your products will appear in the store immediately after publishing.

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
