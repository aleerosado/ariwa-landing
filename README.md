# Ariwa Labs Landing

Landing page for **Ariwa Labs**, built on top of Next.js 15, React 19 and Tailwind CSS v4. The UI started from Cruip's Open template and was completely re‑themed as a modern AI consulting landing with dark gradients, modular sections, and conversion-focused CTAs.

![Ariwa Labs hero screenshot](https://github.com/user-attachments/assets/522a5e46-2a0e-48ca-80eb-87c7fa58f3ea)

## Tech Stack

- **Next.js 15** (App Router, React Server Components)
- **React 19**
- **Tailwind CSS v4** (single `app/css/style.css` entry with custom palette & plugins)
- **Headless UI** (modal video)
- **TypeScript**

## Project Structure

```
app/
 ├─ page.tsx                         # home route (marketing shell + sections)
 ├─ signin/page.tsx                  # sign in view
 ├─ signup/page.tsx                  # sign up view
 ├─ reset-password/page.tsx          # password reset view
 ├─ api/hello                        # example API route
 └─ css/style.css                    # Tailwind + tokens for the whole site
components/
 ├─ animated-reveal.tsx, hover-card.tsx, section-heading.tsx
 └─ ... (shared UI primitives)
layout/                              # landing layout, sticky navbar, footer, auth shell
sections/                            # modular landing sections
styles/landing.css                   # extra visual layer utilities
public/                              # fonts, images, video assets
```

## Getting Started

Install dependencies (npm, pnpm or yarn) and start the dev server:

```bash
npm install
npm run dev
# or pnpm dev / yarn dev
```

Open `http://localhost:3000` in your browser. Files in `app/` use fast refresh, so edits are reflected automatically.

### Useful Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `npm run dev`  | Start the development server             |
| `npm run build`| Production build                         |
| `npm run start`| Run the built app                        |
| `npm run lint` | (Upcoming) ESLint migration placeholder  |

> **Note:** Next.js 15 deprecates `next lint`. When migrating to ESLint CLI follow [the codemod instructions](https://nextjs.org/docs/app/building-your-application/configuring/eslint#using-eslint-config) if you need linting.

## Customization

Most brand values (colors, typography, utilities) live in `app/css/style.css`. Update the palette tokens (e.g. `--color-brand-primary`, `--color-brand-accent`) once and reuse them via Tailwind utility classes like `text-brand-primary` or `bg-surface-alt`.

Sections are modular under `sections/*`, and shared structure is handled in `layout/*` and `components/*`.

## Deployment

Deploy to Vercel (recommended) or any Next.js-compatible platform:

1. `npm run build`
2. Upload the `.next` output or connect the repo to Vercel for automatic builds.

See the [Next.js deployment docs](https://nextjs.org/docs/deployment) for platform-specific steps.

## Credits & License

- Based on **Open** by [Cruip](https://cruip.com/) – GPL license.
- Additional assets: [Nucleo](https://nucleoapp.com/), Unsplash placeholders.

Released under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html). Use it for personal and commercial projects; please don’t resell or redistribute the original template as-is.
