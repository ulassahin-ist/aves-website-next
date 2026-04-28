# AVES Next.js SEO & Code Fixes

## File Structure of This Archive

```
next.config.mjs              → REPLACE your existing file
sitemap.js                   → NEW — place at src/app/sitemap.js
robots.js                    → NEW — place at src/app/robots.js
layout.jsx                   → REPLACE src/app/layout.jsx
metadata-reference.js        → reference only, not deployed

products/rc1s/page.jsx       → REPLACE src/app/products/rc1s/page.jsx
products/rc206/page.jsx      → REPLACE src/app/products/rc206/page.jsx
products/rc1/page.jsx        → REPLACE src/app/products/rc1/page.jsx
products/c4128/page.jsx      → REPLACE src/app/products/c4128/page.jsx
products/android/page.jsx    → REPLACE src/app/products/android/page.jsx

layouts/about/layout.js              → NEW — create at src/app/about/layout.js
layouts/contact/layout.js            → NEW — create at src/app/contact/layout.js
layouts/download/layout.js           → NEW — create at src/app/download/layout.js
layouts/references/layout.js         → NEW — create at src/app/references/layout.js
layouts/software/layout.js           → NEW — create at src/app/software/layout.js
layouts/products/layout.js           → NEW — create at src/app/products/layout.js
layouts/products/rc210/layout.js     → NEW — create at src/app/products/rc210/layout.js
layouts/products/rc264/layout.js     → NEW — create at src/app/products/rc264/layout.js
layouts/products/rcp8/layout.js      → NEW — create at src/app/products/rcp8/layout.js
layouts/products/rc1/layout.js       → NEW — create at src/app/products/rc1/layout.js
layouts/products/rc1s/layout.js      → NEW — create at src/app/products/rc1s/layout.js
layouts/products/rc206/layout.js     → NEW — create at src/app/products/rc206/layout.js
layouts/products/android/layout.js   → NEW — create at src/app/products/android/layout.js
layouts/products/c4128/layout.js     → NEW — create at src/app/products/c4128/layout.js
```

---

## Issues Fixed

### 1. `next.config.mjs` — CommonJS in ESM file (BREAKING)

**Problem:** `module.exports` is CommonJS syntax. A `.mjs` file must use ES module syntax.
**Fix:** Changed to `export default nextConfig`.
**Also:** Delete `next.config.js` — having both causes a conflict. Keep only `.mjs`.

---

### 2. All product pages now use `ProductPagePremium` (as requested)

**Pages converted:** `rc1s`, `rc206`, `rc1`, `c4128`, `android`

- Each now uses `ProductPagePremium` with `chips`, `stats`, `features`, `specs`, `useCases` props
- `ProductPageStandard` is no longer used on any route

---

### 3. SEO Metadata — `layout.jsx` (root)

**Problem:** `document.title` in `useEffect` is client-side only. Googlebot sees no `<title>` tag on first render.
**Fix:** Added full Next.js `metadata` export with:

- `title.template` — auto-appends `| AVES Elektronik` to all page titles
- `description`, `keywords`, `robots`
- `openGraph` — og:title, og:description, og:image, og:type, locale tr_TR
- `twitter` — twitter:card, twitter:image
- `alternates.canonical`
- `viewport` export (required in Next.js 14+, removed from metadata)

---

### 4. Per-page metadata via `layout.js` files

**Problem:** `"use client"` pages cannot export `metadata`. Next.js ignores it.
**Fix:** Create a `layout.js` alongside each `page.jsx`. This is a server component that wraps the page and exports its own metadata. Next.js merges it with the root metadata.

Example structure:

```
src/app/products/rc210/
  ├── page.jsx       (use client — no metadata export)
  └── layout.js      (server component — exports metadata)
```

---

### 5. Added `sitemap.js` → auto-generates `/sitemap.xml`

Place at `src/app/sitemap.js`. Covers all 15 routes with correct priorities.
Google will find it at `https://www.aveselektronik.com/sitemap.xml`.

---

### 6. Added `robots.js` → auto-generates `/robots.txt`

Place at `src/app/robots.js`. Allows all bots and points to sitemap.

---

### 7. Dead code — `src/app/products/pages/` folder

This folder (`Android.jsx`, `C4128.jsx`, `RC1.jsx`, etc.) is **never routed** by Next.js App Router. Only `page.jsx` files inside route folders are served.
**Action:** Delete the entire `src/app/products/pages/` folder.

---

### 8. Unused import in `src/app/products/pages/RC264.jsx`

`import { useEffect } from "react"` is imported but never used. Minor but worth cleaning up when deleting that folder.

---

## Update `metadataBase` in `layout.jsx`

Change this line to your actual domain:

```js
metadataBase: new URL("https://www.aveselektronik.com"),
```

---

## SEO Checklist After Applying Fixes

- [ ] `<title>` renders correctly in View Source (not just browser tab)
- [ ] `<meta name="description">` present on every page
- [ ] `<meta property="og:image">` present — update `/images/aves-logo-square.jpg` to a 1200×630 image
- [ ] `/sitemap.xml` accessible in browser
- [ ] `/robots.txt` accessible in browser
- [ ] Submit sitemap to Google Search Console
- [ ] Delete `next.config.js` (keep only `.mjs`)
- [ ] Delete `src/app/products/pages/` folder
