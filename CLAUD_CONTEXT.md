# Claudbricks Studio - Project Manifest (v2.1)

**Updated:** Dec 2025 | **Status:** Phase 1 (Identity)

## 1. Tech Stack

- **Framework:** Next.js 16.1.0 (Turbopack, React Compiler Enabled).
- **Styling:** Tailwind CSS v4 (CSS-first config in globals.css).
- **Animation:** Framer Motion (Aceternity-style hooks).
- **SEO:** Metadata API + JSON-LD Organization Schema.

## 2. Design System (Cyber-Audit)

- **Primary BG:** `#09090B` (Obsidian)
- **Accent:** `#00FFAB` (Electric Teal)
- **Borders:** `#27272A` (Zinc-800)
- **Typography:** 'Inter Tight' (Headlines) / 'Geist Sans' (Technical Body).

## 3. Critical Next.js 16 Rules

- **Async Params:** Pages must `await params` and `await searchParams`.
- **Request Layer:** Use `src/proxy.ts` (Logic formerly in middleware).
- **Hydration:** Use `suppressHydrationWarning` on <html> and <body> tags.
