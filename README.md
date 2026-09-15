# SEVS — Viva Medical Astro rebuild

Static Astro 7 / Tailwind CSS 4 site for Specialist Endovascular Services, structured around the open-source Viva Medical healthcare Astro theme architecture.

## Development
Requires Node 22.12+.

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages
Push to `main`, then select **GitHub Actions** under Settings → Pages. Rename `public/CNAME.example` to `public/CNAME` when ready to attach `www.sevs.com.au`.

## Architecture
- Shared `Header.astro`, `Footer.astro`, and `BaseLayout.astro`
- Centralised migrated legacy content in `src/data/pages.json`
- Dynamic static route generation from `[...slug].astro`
- Tailwind 4 design tokens inspired by Viva Medical
- No PHP, SQL, database, API or runtime backend

The original Viva Medical theme is MIT licensed: https://github.com/web-stacked/healthcare-astro-theme

## 2026-08-08 content migration update
- Added a dedicated Conditions hub and condition pages for brain aneurysm, carotid artery stenosis, AVM, dural AV fistula and pulsatile tinnitus.
- Expanded carotid stenosis patient information to cover duplex ultrasound, CTA, MRA, catheter angiography, brain imaging, medical therapy, endarterectomy and carotid stenting.
- Compiled a live-site legacy image inventory under `public/images/legacy/manifest.json`.
- Original clinical/staff image binaries should be copied from the legacy host rather than hot-linked; this avoids a dependency on the old server and preserves GitHub Pages' fully static architecture.

## Migrated SEVS images
Original image assets referenced by the legacy SEVS website have been downloaded into `public/images/` so the Astro/GitHub Pages build does not hotlink the old server. The source-page mapping is recorded in `public/images/legacy/manifest.json`.
