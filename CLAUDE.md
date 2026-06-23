# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

湖口草龙博物馆 (Hukou Grass Dragon Museum) — a static frontend website for a web design course assignment. The site showcases the national intangible cultural heritage of Hukou Grass Dragon (湖口草龙), a traditional straw dragon craft from Jiangxi Province, China.

**Hosting target:** Neocities (static hosting, no server-side processing).

## Tech Stack

- Pure HTML/CSS — no build tools, no bundler, no package manager
- **Tailwind CSS** via CDN (`https://cdn.tailwindcss.com`) — configured inline via `tailwind.config` in each page's `<script>`
- **Font Awesome 6.7.2** via CDN for icons
- No JavaScript frameworks; vanilla JS only where needed (scroll effects, back-to-top button)

## Running Locally

Open any `.html` file directly in a browser. No dev server required. For live preview with auto-reload, use any static file server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

## Page Structure

| File | Purpose |
|------|---------|
| `index.html` | Main landing page — hero, intro, exhibitions, dragon dance hall, merchandise, footer. Acts as the site hub. |
| `湖口草龙博物馆介绍页.html` | Detailed introduction page — history, craft, national heritage status, development challenges, digital innovation |
| `草龙制作工艺展.html` | Craft exhibition — 4-step making process (选材→扎骨架→编织稻草→装饰点睛), images, Bilibili video embed, registration form |
| `草龙文化历史展.html` | History exhibition — timeline (Southern Song → Ming/Qing → modern → 2008 heritage listing), cultural value cards, inheritor profiles, documentaries, back-to-top button with scroll JS |
| `龙舞时空馆.html` | Immersive experience hall — Sketchfab 3D model embed, YouTube video placeholder |

## Design System

Colors and typography are defined per-page via Tailwind config. Two configuration styles exist:

**Style A** (index.html, 龙舞时空馆.html, 草龙文化历史展.html) — uses `tailwind.config` with named colors:
- `primary`: `#5d4037` (brown) — nav, headings, footer
- `secondary`: `#d32f2f` (red) — CTAs, accents
- `accent`: `#f8f0e3` (cream) — page backgrounds
- `neutral`: `#f5f5f5` (light gray) — section backgrounds

**Style B** (湖口草龙博物馆介绍页.html, 草龙制作工艺展.html) — uses raw CSS variables and hardcoded hex values instead of Tailwind config.

Custom utilities defined in `<style type="text/tailwindcss">`: `.text-shadow`, `.section-padding`, `.card-hover`, `.bg-texture`.

## Image Assets

Mixed sources — needs attention:
- **Local files:** `LOCAL*.jpg`, `微信图片_*.png`, `起源.png`, `起源2.png`, `设计非遗网站板块封面.png` — these are committed directly
- **External hotlinked images:** `picture01.52hrttpic.com`, `jx.people.com.cn`, `k.sinaimg.cn`, `picsum.photos` — these may break if sources go offline

## Embedded Content

- **Sketchfab 3D model** in 龙舞时空馆.html (model ID `7a8479ffbfae48f6afd84cdd5aa0fab7`)
- **Bilibili videos** in 草龙制作工艺展.html and 草龙文化历史展.html
- **YouTube placeholder** in 龙舞时空馆.html (`src="https://www.youtube.com/embed/your-video-id"` — not yet replaced with real video)

## Known Issues

- Mobile hamburger menu button exists in nav bars but has no toggle functionality wired up
- Footer on 湖口草龙博物馆介绍页.html and 草龙制作工艺展.html uses `bg-brown-600` which is not a valid Tailwind class
- `草龙文化历史展.html:158` has a syntax error: `class=class="w-full..."`
- Navigation links on sub-pages inconsistently use `../` prefixes (files are all at root level, so `../` links will break)
- `龙舞时空馆.html:101-105` applies `width: 90%` to `body > main, body > footer` which may cause layout issues

## Conventions

- All pages are self-contained (CSS, JS, and content in one file) — no shared stylesheets or scripts
- File names use Chinese characters
- Content language is Chinese (`lang="zh-CN"`)
- No build step — all edits are direct HTML modifications
