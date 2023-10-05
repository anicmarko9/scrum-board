## Routing files:

- layout.tsx (Layout) -> one per project is enough
- page.tsx (Page) -> inside of every foldre (this used to be index.tsx)
- loading.tsx (Loading UI)
- not-found.tsx (Not Found UI)
- error.tsx (Error UI)
- global-error.tsx (Global Error UI)
- route.tsx (API Endpoint)
- template.tsx (Re-rendered Layout)
- default.tsx (Parallel route fallback page)

## Nested Routes:

- folder (Route segment)
- folder/folder (Nested route segment)

## Dynamic Routes:

- [folder] (Dynamic route segment)
- [...folder] (Catch-all route segment)
- [[...folder]] (Optional catch-all route segment)

## Other Routes:

- (folder) (Group routes without affecting routing)
- \_folder (Opt folder and all child segments out of routing)
- @folder (Named slot)
- (.)folder (Intercept same level)
- (..)folder (Intercept one level above)
- (..)(..)folder (Intercept two levels above)
- (...)folder (Intercept from root)

# SEO:

- sitemap.xml (Sitemap file)
- sitemap.ts (Generated Sitemap)
- robots.txt (Robots file)
- robots.ts (Generated Robots file)
