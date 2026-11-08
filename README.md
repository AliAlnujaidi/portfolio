# Developer portfolio

A fast, single-page portfolio for developers who ship things: live projects, work in progress with roadmaps, a timeline, and contact links. Dark, terminal-flavoured, and built to be edited in one file.

**Live example:** [alialnujaidi.com](https://alialnujaidi.com)

- All your content lives in one file: [`content/site.ts`](content/site.ts)
- Static output: plain HTML, CSS and JS that runs on any host
- Responsive with no layout work needed, and respects reduced-motion settings
- No tracking and no external requests at runtime (fonts are self-hosted at build time)

Built with Next.js (static export), TypeScript and plain CSS.

## Use it for yourself

You'll need [Node.js](https://nodejs.org) 20 or newer.

```bash
git clone https://github.com/AliAlnujaidi/portfolio.git
cd portfolio
npm install
npm run dev
```

Open <http://localhost:3000>.

### 1. Replace the content

Open `content/site.ts` and replace my details with yours. **Please don't publish my name, work history or projects as your own.**

| Field | What it controls |
| --- | --- |
| `name`, `handle`, `promptUser`, `url` | Page title, nav, the terminal prompt, and your site's address |
| `headline`, `lede`, `status` | The top of the page |
| `about`, `stack` | The about section and the `stack.json` card (any keys you like) |
| `live` | Project cards for things that are shipped |
| `building` | Work in progress: `stage`, `eta`, `pct` (0–100) and a `roadmap` |
| `timeline` | Your work and education history |
| `contact` | Headline, email and social links |

In a `roadmap`, set `done: true` on finished steps. The first unfinished step is automatically shown as the current one. The "2 live · 4 in progress" counts and the "last deploy" date update themselves on each build.

### 2. Change the look (optional)

Colours are CSS variables at the top of [`app/globals.css`](app/globals.css). Fonts are set in [`app/layout.tsx`](app/layout.tsx). Replace `public/favicon.svg` with your own icon.

### 3. Deploy

```bash
npm run build
```

This creates a static site in `out/`, which you can host anywhere.

**Cloudflare (what this repo is set up for):** edit `name` and `routes` in `wrangler.jsonc` to use your own domain (the domain has to be on your Cloudflare account), or remove `routes` and set `workers_dev` to `true` for a free `*.workers.dev` address. Then:

```bash
npx wrangler login
npm run deploy
```

**Other hosts:** on Vercel, Netlify or GitHub Pages, set the build command to `npm run build` and the output folder to `out`. If you don't use Cloudflare you can delete `wrangler.jsonc`.

## License

The code is [MIT licensed](LICENSE), so you can use, change and share it freely, including commercially. Keeping a link back is appreciated but not required.

The written content in `content/site.ts` describes me and my projects, so replace it with your own.
