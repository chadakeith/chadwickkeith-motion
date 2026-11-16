# chadwickkeith-motion

A scroll-animated preview of [chadwickkeith.com](https://chadwickkeith.com/). This is a style alternate, not the live site.

Preview: https://chadakeith.github.io/chadwickkeith-motion/

Pages are `noindex`, and canonical URLs point at the live site, so this preview should not compete in search. There is no `CNAME`. The Synology dashboard is not included.

```bash
npm install
npm run dev
npm run build
npm run check
```

Motion: Cyd Stumpel–style card and heading reveals (CSS `animation-timeline: view()`, with an IntersectionObserver fallback), plus one pinned, Apple-style credentials sequence on the homepage (Jamf, Apple, UNC Charlotte engineering degree, MasterClass). Motion is disabled when `prefers-reduced-motion` is set.

The preview is published from the `gh-pages` branch. A GitHub Actions workflow that would build from `main` is in `docs/github-pages-deploy.yml` if you later want automatic deploys.
