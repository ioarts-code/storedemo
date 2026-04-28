# Hygraph Startpage

A modern, responsive services showcase built with **Next.js 16**, **React 19.2**, and **Hygraph CMS**. Zero configuration needed—just plug in your API endpoint and go.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![GraphQL](https://img.shields.io/badge/GraphQL-Latest-e10098?style=flat-square&logo=graphql)](https://graphql.org/)
[![Hygraph](https://img.shields.io/badge/Hygraph-CMS-000000?style=flat-square)](https://hygraph.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06b6d4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

##  Features

- 🚀 **Production-Ready** - Built with best practices, fully typed
- 🎨 **Responsive Design** - Mobile-first, works on all devices
- 🔍 **Full-Text Search** - Instant search across services
- 🏷️ **Smart Filtering** - Filter by category or tags
- ⚙️ **Zero-Config Setup** - Configure API endpoint in the UI
- 🔐 **Secure** - No hardcoded credentials, supports auth tokens
- 📱 **Modern UI** - Clean cards with images, tags, and CTAs
- ⚡ **Fast** - GraphQL queries, client-side filtering
- 📖 **Well Documented** - Guides, examples, and checklists included
- 🎯 **Easy to Customize** - Tailwind CSS, semantic components

---

## 🚀 Quick Start

### 1. Set Up Hygraph Schema (5 minutes)

In your Hygraph project, create these content models:

**Service Model**
```
- name (Text, required)
- description (Rich Text)
- shortDescription (Text, optional)
- category (Reference → Category)
- tags (Multiple References → Tag)
- url (URL, optional)
- icon (Text, optional)
- image (Asset, optional)
```

**Category Model**
```
- name (Text, required)
- slug (Slug, optional)
```

**Tag Model**
```
- name (Text, required)
- slug (Slug, optional)
```

### 2. Get Your API Endpoint (2 minutes)

1. Go to **API Access** → **Endpoints** in Hygraph
2. Copy your **Content API** endpoint
3. (Optional) Create an **Auth Token** in API Access → Tokens

### 3. Configure the App (1 minute)

1. Remove any stale npm files if present: delete `package-lock.json` and `node_modules`
2. Install dependencies: `pnpm install`
3. Start the dev server: `pnpm dev`
4. Click the **⚙️** icon in the top-right
5. Paste your API endpoint (and optional token)
6. Click **Save Config**
7. Done! Your services appear instantly

---

## 📖 Documentation

We've included comprehensive guides:

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **QUICK_START.txt** | Quick reference card | 5 min |
| **SETUP_CHECKLIST.md** | Step-by-step setup guide | 10 min |
| **HYGRAPH_SETUP.md** | Complete setup & customization | 15 min |
| **API_CONFIGURATION.md** | API endpoint & environment variables | 10 min |
| **GRAPHQL_EXAMPLES.md** | 30+ GraphQL query examples | 20 min |
| **ARCHITECTURE.md** | System design & data flow | 15 min |
| **BUILD_SUMMARY.md** | Features & tech stack overview | 10 min |
| **FILES_CREATED.md** | Manifest of all files | 10 min |

**Start with [QUICK_START.txt](./QUICK_START.txt) or [SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)**

---

## 🏗️ Project Structure

```
app/
├─ page.tsx                 Main page with state management
├─ layout.tsx               Root layout with metadata
└─ globals.css              Global styles

components/
├─ config-panel.tsx         API configuration modal
├─ search-filter.tsx        Search & category filter
├─ service-card.tsx         Individual service card
└─ service-grid.tsx         Responsive grid layout

lib/
├─ types.ts                 TypeScript interfaces
├─ graphql-queries.ts       GraphQL query definitions
└─ hygraph-client.ts        GraphQL client setup

Documentation/
├─ QUICK_START.txt          Quick reference
├─ SETUP_CHECKLIST.md       Setup guide
├─ HYGRAPH_SETUP.md         Complete guide
├─ API_CONFIGURATION.md     API setup
├─ GRAPHQL_EXAMPLES.md      Query examples
├─ ARCHITECTURE.md          System design
└─ BUILD_SUMMARY.md         Features overview
```

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Framework** | Next.js | 16 |
| **Runtime** | React | 19.2 |
| **Language** | TypeScript | 5.3+ |
| **Styling** | Tailwind CSS | 4 |
| **Components** | shadcn/ui | Latest |
| **GraphQL** | graphql-request | 7.4 |
| **Icons** | lucide-react | Latest |
| **Package Manager** | pnpm | 10+ |

---

## 🚀 Development

### Install Dependencies
```bash
pnpm install
```

### Start Development Server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
pnpm build
pnpm start
```

---

## 🎨 Customization

### Change Colors
Edit `app/globals.css` or `tailwind.config.ts`

### Change Fonts
Edit `app/layout.tsx` to import different fonts from `next/font/google`

### Add More GraphQL Fields
1. Update schema in `lib/types.ts`
2. Modify queries in `lib/graphql-queries.ts`
3. Use in components

### Modify Layout
- Grid columns: `components/service-grid.tsx` (line 25)
- Card layout: `components/service-card.tsx`
- Page width: search for `max-w-7xl` in `app/page.tsx`

---

## 🔧 Configuration Options

### UI Configuration (For Testing)
1. Click ⚙️ in the app
2. Enter API endpoint and optional token
3. Configuration saved to browser localStorage

### Environment Variables (For Production)
Create `.env.local`:
```env
NEXT_PUBLIC_HYGRAPH_ENDPOINT=https://api-eu-central-1.hygraph.com/content/...
NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN=your_token_here
```

---

## 🔍 What's Included

### Core Components
- ✅ Configuration panel with validation
- ✅ Search input with debouncing
- ✅ Category filter buttons
- ✅ Responsive service card grid
- ✅ Loading spinners
- ✅ Empty states
- ✅ Error messages

### GraphQL Queries
- ✅ GET_SERVICES - Fetch all services
- ✅ GET_CATEGORIES - Fetch categories
- ✅ SEARCH_SERVICES - Search functionality
- ✅ GET_SERVICES_BY_CATEGORY - Category filtering

### Documentation
- ✅ Setup guides
- ✅ API configuration
- ✅ 30+ GraphQL examples
- ✅ Architecture diagrams
- ✅ Troubleshooting guides
- ✅ Customization examples

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Go to vercel.com and import your repo
# Vercel automatically detects Next.js and deploys
```

### Deploy Elsewhere
The app works on any Node.js 18+ host:
- Netlify
- Railway
- Heroku
- AWS
- DigitalOcean
- etc.

**Build command:** `pnpm build`
**Start command:** `pnpm start`

---

## 📊 Features Breakdown

### Search & Filtering
- Real-time search across service names and descriptions
- Debounced input (300ms) for performance
- Filter by category
- Filter by tags
- Results update instantly (client-side)

### Responsive Design
- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 3 columns

### UI Components
- Sticky header with settings button
- Service cards with images
- Category filter buttons
- Search input with clear button
- Loading spinners
- Empty state messages
- Error messages with retry option

### Configuration
- Modal-based API setup
- Endpoint validation on save
- Optional auth token support
- localStorage persistence
- No code changes required

---

## 🔒 Security

- ✅ No hardcoded API credentials
- ✅ API endpoint configurable in UI
- ✅ Auth tokens stored securely in localStorage
- ✅ Support for read-only tokens
- ✅ HTTPS enforced
- ✅ CORS-safe requests

---

## 🐛 Troubleshooting

### App Won't Load
- Check Node.js version: `node --version` (needs 18+)
- Install dependencies: `pnpm install`
- Check for port conflicts: `lsof -i :3000`

### Services Not Displaying
- Verify API endpoint is correct
- Check services are Published in Hygraph (not Draft)
- Look in browser console (F12) for GraphQL errors
- Verify schema matches what app expects

### Search/Filter Not Working
- Ensure services have populated name fields
- Check categories are assigned
- Verify tags are assigned to services

### Configuration Won't Save
- Check localStorage is enabled in browser
- Verify endpoint starts with https://
- Test endpoint in Hygraph GraphQL Playground first

See **[API_CONFIGURATION.md](./API_CONFIGURATION.md)** for detailed troubleshooting.

---

## 🎓 Learning Resources

### Official Docs
- [Hygraph Documentation](https://hygraph.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [GraphQL Tutorial](https://graphql.org/learn/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### Examples
- 30+ GraphQL queries in [GRAPHQL_EXAMPLES.md](./GRAPHQL_EXAMPLES.md)
- Setup examples in [HYGRAPH_SETUP.md](./HYGRAPH_SETUP.md)
- Architecture diagrams in [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## 📝 What You Can Do Next

### Immediate
1. ✅ Set up Hygraph schema
2. ✅ Add test services
3. ✅ Configure app with API endpoint
4. ✅ Customize colors and fonts

### Short Term
1. 📊 Add more services to showcase
2. 🎨 Customize branding and colors
3. 📱 Test on mobile devices
4. 🚀 Deploy to production

### Medium Term
1. 🔐 Add user authentication
2. ⭐ Add ratings/reviews
3. 💬 Add comments section
4. 📊 Add analytics tracking

### Long Term
1. 🛒 Add payment integration
2. 📧 Add newsletter signup
3. 🌍 Add multi-language support
4. 📱 Build mobile app

---

## 💡 Tips & Tricks

### Performance
- Search is debounced (300ms) to avoid excessive filtering
- Filtering happens client-side (no extra API calls)
- Use `first: 100` in GraphQL to limit results
- Images are optimized with Next.js Image component

### Customization
- Use semantic Tailwind classes for consistency
- Reference `lib/types.ts` when adding new fields
- Update GraphQL queries when changing schema
- Test in GraphQL Playground before adding to app

### Maintenance
- Keep Hygraph schema and types in sync
- Document custom fields in comments
- Test on multiple devices and browsers
- Monitor GraphQL query performance

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## 🤝 Support

### Documentation
1. Start with **[QUICK_START.txt](./QUICK_START.txt)**
2. Use **[SETUP_CHECKLIST.md](./SETUP_CHECKLIST.md)** for step-by-step setup
3. Check **[API_CONFIGURATION.md](./API_CONFIGURATION.md)** for API issues
4. Reference **[GRAPHQL_EXAMPLES.md](./GRAPHQL_EXAMPLES.md)** for queries
5. Read **[ARCHITECTURE.md](./ARCHITECTURE.md)** to understand the system

### Resources
- [Hygraph Support](https://hygraph.com/help)
- [Next.js Discord](https://discord.gg/nextjs)
- [GraphQL Community](https://graphql.org/community/)

---

## 🎉 You're Ready!

Everything you need is included. The app is:
- ✅ Production-ready
- ✅ Fully typed with TypeScript
- ✅ Comprehensively documented
- ✅ Easy to customize
- ✅ Ready to deploy

**Start with the QUICK_START.txt file or SETUP_CHECKLIST.md and you'll be running in minutes!**

---

**Built with ❤️ using Next.js, React, Hygraph, and Tailwind CSS**

*Last Updated: April 26, 2026*
