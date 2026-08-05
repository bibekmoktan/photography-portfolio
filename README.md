# Photography Portfolio

A [Next.js](https://nextjs.org) project bootstrapped with `create-next-app`, configured for production use.

## Stack

- **Next.js 16** (App Router, `src/` layout, standalone output)
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **ESLint 9** (flat config) + **Prettier** (with `prettier-plugin-tailwindcss`)
- **Husky** + **lint-staged** for pre-commit checks
- **Zod** for runtime env validation
- **GitHub Actions** CI (format, lint, typecheck, build)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run typecheck`    | Run the TypeScript compiler      |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

## Project Structure

```
src/
  app/         # Routes (App Router)
  components/  # Shared UI components
  lib/         # Utilities, env validation
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values. Variables are validated at startup via `src/lib/env.ts` — the app will fail fast if a required variable is missing or malformed.

## Deployment

`next.config.ts` sets `output: "standalone"`, so the build produces a self-contained `.next/standalone` directory suitable for containerized deployment. It also sets baseline security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`).

The easiest deployment target is [Vercel](https://vercel.com/new). For other platforms, run `npm run build` then `npm run start`, or use the standalone output with Docker/Node directly.
