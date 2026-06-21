# Architecture Document
## GuruDokAI Landing Page

---

## 1. Stack Decision

**Pilihan: Astro (Recommended)**

Alasan:
- Static site = Cloudflare Pages deploy sempurna
- SEO out-of-the-box (server-rendered HTML)
- Zero JS by default = Lighthouse 100
- Familiar syntax (HTML/CSS + komponen)
- Alternatif: plain HTML/CSS/JS jika AI agent prefer simpler

---

## 2. Struktur Folder

```
gurudokai-landing/
├── public/
│   ├── favicon.ico
│   ├── og-image.png          # 1200x630 untuk social share
│   ├── robots.txt
│   └── sitemap.xml           # auto-generate atau manual
│
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── PainPoint.astro
│   │   ├── Demo.astro
│   │   ├── Features.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── CTAFinal.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro  # Head, meta, schema markup
│   │
│   └── pages/
│       └── index.astro       # Main landing page
│
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs       # Jika pakai Tailwind
└── .gitignore
```

---

## 3. Cloudflare Pages Deployment

```
# Build settings di Cloudflare Pages dashboard:
Build command:    npm run build
Build output:     dist
Root directory:   /
Node version:     18
```

**Git flow:**
```
local code → git push → GitHub → Cloudflare Pages auto build → live
```

**Environment variables** (set di Cloudflare Pages dashboard):
```
SITE_URL=https://gurudokai.com   # ganti dengan domain final
```

---

## 4. SEO Technical Implementation

### BaseLayout.astro — Head section wajib:
```html
<!-- Primary Meta -->
<title>GuruDokAI – RPP & Modul Ajar Otomatis dengan AI | Kurikulum Merdeka</title>
<meta name="description" content="Buat RPP, Modul Ajar, Bank Soal HOTS otomatis dalam 2 menit. AI Asisten Guru Indonesia sesuai Kurikulum Merdeka. Mulai Rp 19.000/bulan.">
<meta name="keywords" content="RPP otomatis, AI guru Indonesia, Kurikulum Merdeka, bank soal HOTS, modul ajar AI, aplikasi administrasi guru">
<link rel="canonical" href="https://gurudokai.com/">

<!-- Open Graph -->
<meta property="og:title" content="GuruDokAI – RPP Otomatis AI untuk Guru Indonesia">
<meta property="og:description" content="Selesaikan RPP & administrasi guru dalam 2 menit. Mulai Rp 19.000/bulan.">
<meta property="og:image" content="https://gurudokai.com/og-image.png">
<meta property="og:url" content="https://gurudokai.com">
<meta property="og:type" content="website">
<meta property="og:locale" content="id_ID">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="GuruDokAI – RPP Otomatis AI untuk Guru Indonesia">
<meta name="twitter:image" content="https://gurudokai.com/og-image.png">

<!-- Schema: Organization -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "GuruDokAI",
  "description": "Aplikasi AI untuk guru Indonesia membuat RPP, Modul Ajar, Bank Soal HOTS otomatis",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Android, iOS, Web",
  "offers": [
    {
      "@type": "Offer",
      "name": "Paket Bulanan",
      "price": "19000",
      "priceCurrency": "IDR"
    },
    {
      "@type": "Offer",
      "name": "Paket Tahunan",
      "price": "99000",
      "priceCurrency": "IDR"
    },
    {
      "@type": "Offer",
      "name": "Paket Lifetime",
      "price": "199000",
      "priceCurrency": "IDR"
    }
  ]
}
</script>

<!-- Schema: FAQPage (isi sesuai FAQ section) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apakah GuruDokAI sesuai Kurikulum Merdeka?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya, GuruDokAI mendukung penuh Kurikulum Merdeka termasuk Permendikdasmen No.13/2025."
      }
    }
  ]
}
</script>
```

---

## 5. Performance Rules

- **Gambar:** Format WebP, lazy loading semua kecuali hero
- **Font:** Preload font utama, gunakan `font-display: swap`
- **CSS:** Inline critical CSS di `<head>`, sisanya load async
- **JS:** Minimal, hanya untuk FAQ accordion dan smooth scroll
- **No external scripts** kecuali Cloudflare Web Analytics

---

## 6. CTA Links — Semua Mengarah Ke:

```
Primary CTA:  https://lynk.id/oghiezr/zxjox857nz71
Secondary:    https://lynk.id/oghiezr
```

Semua tombol beli, semua anchor "Mulai Sekarang", semua pricing card → primary CTA URL.

---

## 7. robots.txt

```
User-agent: *
Allow: /
Sitemap: https://gurudokai.com/sitemap.xml
```

---

## 8. sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://gurudokai.com/</loc>
    <lastmod>2026-06-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 9. Post-Deploy Checklist

- [ ] Submit URL ke Google Search Console
- [ ] Request indexing manual di Search Console
- [ ] Pasang Cloudflare Web Analytics
- [ ] Test Lighthouse → semua > 90
- [ ] Test mobile di real device
- [ ] Cek semua CTA link mengarah ke lynk.id yang benar
- [ ] Verify Open Graph di https://developers.facebook.com/tools/debug/
- [ ] Ganti domain di semua hardcoded URL dari `.pages.dev` ke custom domain
