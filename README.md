# Ariwa Labs Landing

Landing page for **Ariwa Labs**, built on top of Next.js 15, React 19 and Tailwind CSS v4. The UI started from Cruip's Open template and was completely re‑themed with Ariwa's palette (Indigo/Blue gradients, Ariwa Red accents and warm cream surfaces), responsive section layouts and localized content.

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
 ├─ (default)/layout.tsx, page.tsx   # marketing shell and sections
 ├─ (auth)/...                       # sign in / sign up / reset password flows
 ├─ api/hello                        # example API route
 └─ css/style.css                    # Tailwind + tokens for the whole site
components/
 ├─ hero-home.tsx, workflows.tsx, features.tsx, testimonials.tsx, cta.tsx
 └─ ui/{header,footer,logo}.tsx
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

Sections are modular:

- **Hero** (`components/hero-home.tsx`) – hero copy, CTAs and modal video (update assets in `public/images/hero-image-01.jpg` and `public/videos/video.mp4`).
- **Workflows / Features / Testimonials / CTA** (`components/*.tsx`) – data objects or JSX blocks you can localize or extend.
- **Authentication views** (`app/(auth)/*`) – standalone pages reusing the same layout and tokens.

## Deployment

Deploy to Vercel (recommended) or any Next.js-compatible platform:

1. `npm run build`
2. Upload the `.next` output or connect the repo to Vercel for automatic builds.

See the [Next.js deployment docs](https://nextjs.org/docs/deployment) for platform-specific steps.

## Credits & License

- Based on **Open** by [Cruip](https://cruip.com/) – GPL license.
- Additional assets: [Nucleo](https://nucleoapp.com/), Unsplash placeholders.

Released under the [GPLv3](https://www.gnu.org/licenses/gpl-3.0.html). Use it for personal and commercial projects; please don’t resell or redistribute the original template as-is.
