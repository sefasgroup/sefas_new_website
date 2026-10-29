# SEFAS Group website (sefas-web)

Marketing website for SEFAS Group, in English and Indonesian. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4. There is no database and no CMS yet: all content lives in this repository, and the only server code is the contact form endpoint.

## Requirements

- Node.js `>=24.22.1 <25` (the `engines` field in `package.json`; `.node-version` and the Docker image use 24.22.1).
- pnpm 10, pinned by the `packageManager` field (`pnpm@10.17.1`). With Corepack (`corepack enable`) the right version is picked automatically. Install with pnpm only; there is no npm or yarn lockfile.
- Internet access during install and build: `next/font` downloads Roboto from Google Fonts at build time.
- Docker, only if you build the container image.

## Install and run

```bash
pnpm install            # also copies the map worker into public/vendor (postinstall); do not use --ignore-scripts
cp .env.example .env    # optional for local work, see Environment variables
pnpm dev                # http://localhost:3000 (Turbopack)
```

| Command | What it does |
|---|---|
| `pnpm dev` | Development server on port 3000 |
| `pnpm build` | Production build (writes `.next/`, standalone output for Docker) |
| `pnpm start` | `next start` on `0.0.0.0:80`; port 80 needs elevated rights on Linux, so to try a build locally use `pnpm exec next start -p 3000` (it prints a harmless note that the standalone output is meant for `node server.js`) |
| `pnpm lint` | ESLint (Next.js core-web-vitals and TypeScript rules) |
| `pnpm typecheck` | `tsc --noEmit` |

Lint, typecheck and build are also what CI runs (see Continuous integration).

## Environment variables

Copy `.env.example` to `.env`. Every variable the code reads is listed there with a placeholder and a comment. `pnpm dev` starts with the example values as they are; a missing value switches a feature off, it does not stop the app.

Variables prefixed `NEXT_PUBLIC_` are compiled into the browser bundle when you run `pnpm build`, so set them before the build (in Docker: `--build-arg`), and never put a secret behind that prefix.

| Variable | Secret | Needed at | Optional | If missing |
|---|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | no | build | recommended for every deployed build | Falls back to `https://sefasgroup.com`, which is the production origin; set it on staging and preview builds so their links do not point at the live site. No trailing slash. |
| `ROBOTS_NOINDEX` | no | start | yes | Nothing is sent. Set to `1` on staging or preview copies to add an `X-Robots-Tag: noindex, nofollow` header (it does not change `robots.txt`). Leave unset on the live site. |
| `CONTACT_MODE` | no | start | yes | Defaults to `smtp`. `cms` and `both` are reserved for a later CMS integration and make the contact endpoint answer 501. |
| `MAIL_MAILER` | no | start | yes | Defaults to `smtp`, the only supported value. |
| `MAIL_HOST`, `MAIL_PORT` | no | start | no (to send mail) | The contact form is off: `POST /api/contact` answers 503 and logs a warning once. |
| `MAIL_ENCRYPTION` | no | start | yes | `tls` (STARTTLS, usually port 587), `ssl` (usually port 465) or `none`. Anything else is treated as `none`. |
| `MAIL_USERNAME`, `MAIL_PASSWORD` | yes | start | no (to send mail) | Same as `MAIL_HOST`: the form answers 503. |
| `MAIL_FROM_ADDRESS`, `MAIL_RECIPIENT` | no | start | no (to send mail) | Same as `MAIL_HOST`: the form answers 503. `MAIL_RECIPIENT` is the inbox that receives enquiries. |
| `VERCEL` | no | build | automatic | Set by Vercel. When present, the standalone output used for Docker is switched off. |
| `NODE_ENV` | no | build and start | automatic | Set by Next.js and the Dockerfile; `production` turns on the Strict-Transport-Security header and removes `unsafe-eval` from the report-only CSP. |

SMTP settings are read at runtime on the server. Do not pass them as Docker build arguments.

## Project layout

```
app/[lang]/layout.tsx            root layout, fonts, metadata, structured data
app/[lang]/(routes)/             pages: home, about, companies, network, products, services, contact, blog, legal
app/[lang]/opengraph-image.tsx   share image, one per language
app/api/contact/route.ts         contact form endpoint
app/_components/                 home/ sections and the shared page pieces
app/_features/                   products/, services/, companies/ components, one folder per page group
app/_ui/                         shared primitives (Button, Heading, Reveal, ...)
app/_shell/                      Header, Footer, CookieBanner, Splash, PageTransition, WhatsAppButton
app/_content/                    getContent(), shared contact details and links
app/_configs/                    English content (home.ts, pages.ts, catalogue.ts) and launch.ts switches
app/_configs/id/                 the same content in Indonesian
app/_i18n/                       language helpers, interface text (ui.ts), cookie policy text
app/_server/, app/_libs/        mail sending, validation schema, rate limiter, helpers
proxy.ts                         language routing and the homepage-only redirect
styles/                          brand.css (raw brand values), theme.css (design tokens), index.css
public/                          images, videos, certifications, product logos
```

## Routing and the language switch

English is served at the bare paths (`/about`) and Indonesian under `/id` (`/id/about`). Every page physically lives under the `[lang]` folder. `proxy.ts` rewrites a bare path onto `/en/...` internally and redirects a visible `/en/...` URL back to the bare path (308), so English has exactly one URL. The language switch in the header, the canonical and hreflang tags (`app/_i18n/locales.ts`) and the sitemap use the same helpers (`localePath`, `switchPath`). To add a language, extend `LANGS` in `locales.ts`, add a content folder next to `app/_configs/id/` and a column to `app/_i18n/ui.ts`.

## Launch switches

`app/_configs/launch.ts` controls what is public:

- `HOME_ONLY = true` (current state): only the homepage is live. `proxy.ts` redirects every other path to the homepage in the visitor's language (307), the navbar and footer link to homepage sections instead of pages, and the Insights section is hidden.
- `LIVE_WHILE_HOME_ONLY = ["/legal/cookies"]`: the allow-list of pages that stay reachable while `HOME_ONLY` is true. Add a path here to open one more page early.
- `SHOW_CASE_STUDIES = false`: hides the sample case-study figures in the Success stories section until real figures are confirmed. The testimonials still show.

### Putting the other pages live

1. In `app/_configs/launch.ts` set `HOME_ONLY = false`. This removes the redirect, restores the page links and shows Insights. (`LIVE_WHILE_HOME_ONLY` is then ignored.)
2. In `app/sitemap.ts` extend `LIVE_PATHS` with `/about`, `/companies`, `/services`, `/products`, `/network`, `/contact` and `/blog`; the sitemap does not read `HOME_ONLY`.
3. The privacy and terms pages (`app/[lang]/(routes)/legal/[slug]/page.tsx`) still show a "being prepared" notice and are excluded from search. The footer links to them once `HOME_ONLY` is false, so add their texts first (the cookie policy text is in `app/_i18n/cookie-policy.ts`).
4. Confirm `NEXT_PUBLIC_SITE_URL` is the production origin, build, deploy, and open `/sitemap.xml` and `/robots.txt`.
5. Check both languages: `/`, `/id`, `/about`, `/id/about`, `/blog`, a product page and the contact form.

## Editing content

All visible text and image paths are plain TypeScript files; copy edits need no other code change.

- Homepage sections (hero, stats, business lines, industries, products, companies, testimonials, awards, milestones, news items, contact details): `app/_configs/home.ts` (English) and `app/_configs/id/home.ts` (Indonesian).
- About, company profiles, services: `app/_configs/pages.ts` and `app/_configs/id/pages.ts`.
- Product catalogue (grades, packs, brochure links): `app/_configs/catalogue.ts` and `app/_configs/id/catalogue.ts`.
- Buttons, labels, footer, form text, page titles and descriptions: `app/_i18n/ui.ts` (both languages in one file).
- Cookie policy text: `app/_i18n/cookie-policy.ts`.

Each Indonesian file is typed against its English twin, so a missing or extra field fails `pnpm typecheck`. The compiler cannot tell whether a string is actually translated, so review the Indonesian text yourself.

Images and video go in `public/` and are referenced by path, for example `/images/crew/img-hero-poster.jpg`. Brand colours are set once in `styles/brand.css`; components use the tokens in `styles/theme.css`.

Image files are named `img-<subject>[-<variant>].<ext>` (lowercase, hyphens, unique across the repo); run `pnpm images:check`.

## Contact form

The form (`app/_components/home/ContactForm.tsx`) posts JSON to `POST /api/contact` (`app/api/contact/route.ts`).

- Validation: a zod schema (`app/_server/contact-schema.ts`); invalid input answers 422 with field errors. Bodies over 16 KB answer 413, non-JSON requests 415.
- Spam: a hidden `website` field (honeypot). A request that fills it receives a success reply and nothing is sent.
- Rate limit: 5 requests per minute and 20 per hour per client IP (`x-forwarded-for`), kept in memory (`app/_server/rate-limit.ts`). The counters are per server instance and reset on restart, so with several instances or serverless functions the limit is per instance.
- Delivery: nodemailer over SMTP, configured by the `MAIL_*` variables. Without them the endpoint answers 503; a failed send answers 502.

## Cookie policy

`/legal/cookies` (and `/id/legal/cookies`) renders the policy from `app/_i18n/cookie-policy.ts`. The site sets no cookies and runs no analytics. The cookie notice (`app/_shell/CookieBanner.tsx`) stores the visitor's answer in `localStorage` under `sefas-cookie-consent`; nothing reads it yet, so connect it to the consent settings of any analytics tool you add, and update the policy text at the same time.

## Blog and CMS

The CMS is not connected yet. News items on the homepage and the blog pages come from `insights` in `app/_configs/home.ts` and `app/_configs/id/home.ts`, rendered by `app/_components/home/Insights.tsx` and `app/[lang]/(routes)/blog/[slug]/page.tsx`. A CMS would replace those arrays with a server-side fetch that returns the same fields, with post URLs added to `app/sitemap.ts` and the CMS image host added to `images.remotePatterns` in `next.config.ts`.

## Deployment

### Docker

The image is a multi-stage build using Next.js standalone output, running as the unprivileged `node` user on port 3000.

```bash
docker build --build-arg NEXT_PUBLIC_SITE_URL=https://www.example.com -t sefas-web .
docker run --rm -p 8080:3000 --env-file .env sefas-web   # http://localhost:8080
```

`NEXT_PUBLIC_SITE_URL` is compiled into the bundle, so it must be a build argument; the other variables are passed at run time (`-e` or `--env-file`). Replace the example address with the production origin.

### Vercel

Vercel can build the repository as it is: framework preset Next.js, Node.js version 24.x, default build command. Set `NEXT_PUBLIC_SITE_URL` for the Production environment and `ROBOTS_NOINDEX=1` for Preview. No `vercel.json` is needed. The in-memory rate limit is per serverless function there.

### Continuous integration

`.github/workflows/main.yml` runs on pull requests and on pushes to `main` and `develop`, on `ubuntu-latest`: a check that rejects newly added hex or `rgb()` colours and fixed pixel sizes, then `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck` and `pnpm build`.

## Conventions

- One component per file, PascalCase, in `app/_components` (or `app/_features/<page group>/components`); shared primitives in `app/_ui`; page chrome in `app/_shell`. A component that nearly fits gets a new variant rather than a copy.
- Compose class names with `cn()` from `app/_libs/utils.ts`.
- Use the design tokens from `styles/theme.css`; no hex or `rgb()` values and no fixed pixel sizes in components. CI rejects new ones.
- Comments explain why, not what.

## Third-party services

- Map tiles: OpenFreeMap (`tiles.openfreemap.org`), a free shared service without an uptime guarantee.
- Fonts: Roboto from Google Fonts, fetched at build time.
- Product brochures are PDF links to `sefasgroup.com/upload/products/brochures/` (`app/_configs/catalogue.ts`); they stop working if that path goes away.
- Shell and other brand names, marks and product logos belong to their owners.
