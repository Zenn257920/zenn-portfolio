# Kaung Htet Zan Thar — Portfolio

Portfolio website for **Kaung Htet Zan Thar**, Frontend Developer based in
Yangon, Myanmar. Built with **Next.js (App Router), React, TypeScript,
Tailwind CSS and Framer Motion**, with the content stored in **Neon
PostgreSQL (serverless)**.

The layout follows the Zolt portfolio reference
(`https://zolt-portfolio.framer.website/`): dotted warm canvas, left icon
nav, hero with a hanging ID badge, About bento, Featured Works, Stacks &
Experience with an orange timeline, a numbered Services accordion, and a
Hire Me / contact closing — rebuilt with Framer Motion throughout
(`whileInView` reveals, staggered entrances, spring hovers, an animated
accordion, scroll-spy nav and a scroll progress bar).

## Content

The data lives in Neon, project **kaung-portfolio**, database **neondb**
(region `aws-ap-southeast-1`, Postgres 17), in 7 tables:

| Table | Rows | Contents |
| --- | --- | --- |
| profile | 1 | Name, title, location, email, phone, bio |
| skills | 27 | Grouped by category (Frontend, Frameworks, Styling, …) |
| experience | 2 | Innovix Solutions — Junior Frontend Developer, Frontend Developer Intern |
| projects | 2 | Core Insurance System, Customer Care Admin Panel |
| services | 4 | Frontend Development, Responsive UI, API Integration, Forms & State |
| education | 1 | B.C.Sc., University of Computer Studies, Magway (expected Feb 2027) |
| socials | 1 | Email |

The site reads these tables server-side on every revalidation
(`src/lib/neon.ts`, `revalidate = 86400`). When `DATABASE_URL` is not set,
it falls back to the embedded snapshot in `src/data/portfolio.ts`, so the
site still builds and renders without a database.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in your Neon connection string
npm run dev                  # http://localhost:3000
```

## Environment

```bash
DATABASE_URL=postgresql://<role>:<password>@<your-neon-endpoint-host>/neondb?sslmode=require
```

Get the pooled connection string from the Neon console (project
"kaung-portfolio" → Connection details). **Never commit `.env.local` or any
real password / connection string.** `.env.example` contains only a
placeholder.

## Database

```bash
# Create the tables
psql "$DATABASE_URL" -f db/schema.sql
# Seed them from the resume data
psql "$DATABASE_URL" -f db/seed.sql
# or, with Node:
npm run db:seed
```

## Build

```bash
npm run typecheck
npm run build
npm start
```

## Deploy (Vercel)

1. Import this repository in Vercel.
2. Add the `DATABASE_URL` environment variable (the pooled Neon
   connection string).
3. Deploy. The site revalidates the Neon data once a day; redeploy or
   revalidate to pick up edits sooner.

## Motion notes

Framer Motion drives the page: hero badge springs in, sections fade/slide
up on scroll with staggered children, the skill marquee loops, the
contribution grid and dashboard charts animate in, the services accordion
uses `AnimatePresence`, and the left nav highlights the section in view.
The reference site's exact Framer template assets (photos, music player,
testimonials) are not reproduced — the content here is Kaung's own data,
and no testimonials or retainer pricing are invented.
