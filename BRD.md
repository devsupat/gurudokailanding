# Business Requirements Document (BRD)
## GuruDokAI — Landing Page

---

## 1. Overview

**Product:** GuruDokAI Landing Page  
**Domain:** Deploy via Cloudflare Pages (custom domain)  
**Goal:** Ranking di Google untuk keyword RPP AI, convert visitor ke pembeli paket 99rb/199rb  
**Home referral:** https://lynk.id/oghiezr  
**Buy URL (target utama):** https://lynk.id/oghiezr/zxjox857nz71  

---

## 2. Business Goals

- Dapat organic traffic dari Google tanpa bayar iklan terus-menerus
- Konversi visitor ke pembeli paket Tahunan (Rp 99.000) dan Lifetime (Rp 199.000)
- Membangun brand GuruDokAI sebagai solusi administrasi guru #1 Indonesia
- Mendukung campaign FB/IG Ads sebagai landing page yang lebih credible dari lynk.id

---

## 3. Target User

| Segmen | Deskripsi |
|--------|-----------|
| Primer | Guru SD/SMP/SMA aktif, usia 28–62 tahun |
| Sekunder | Kepala sekolah, staf TU, guru honorer |
| Lokasi | Seluruh Indonesia, kota tier 2–3 dominan |
| Device | Mobile-first (80%+ akses dari HP) |
| Pain point | Lembur bikin RPP, modul ajar, bank soal manual tiap minggu |

---

## 4. Produk & Harga

| Paket | Harga | Durasi | CTA URL |
|-------|-------|--------|---------|
| Bulanan | Rp 19.000 | 1 bulan | https://lynk.id/oghiezr/zxjox857nz71 |
| 3 Bulan | Rp 39.900 | 3 bulan | https://lynk.id/oghiezr/3nvl34y0q7l5 |
| Tahunan ⭐ | Rp 99.000 | 12 bulan | https://lynk.id/oghiezr/xwq6nyynj3zy |
| Lifetime 🏆 | Rp 199.000 | Selamanya | https://lynk.id/oghiezr/mp8dw5lyp3ey |

**Paket hero untuk ditonjolkan:** Tahunan 99rb (highlight sebagai "Terpopuler") dan Lifetime 199rb (highlight sebagai "Terbaik").

---

## 5. Fitur Produk yang Harus Ditampilkan

- RPP otomatis sesuai Kurikulum Merdeka (Deep Learning, Permendikdasmen No.13/2025)
- Modul Ajar siap cetak
- Bank Soal HOTS otomatis
- ATP (Alur Tujuan Pembelajaran)
- Prota & Prosem
- Export PDF
- AI Asisten Guru (berbasis AI)
- Full Administrasi Sekolah Otomatis

---

## 6. Struktur Halaman (Section Order)

```
1. HERO
   - Headline utama: pain point langsung
   - Subheadline: solusi + angka spesifik
   - CTA button: "Coba Sekarang – Mulai 19rb"
   - Social proof: "Dipercaya X+ guru Indonesia"

2. PAIN POINT
   - 3 masalah utama guru (visual cards)
   - RPP manual = buang waktu 3–4 jam
   - Administrasi menumpuk setiap semester
   - Tidak ada waktu untuk keluarga

3. SOLUSI / DEMO
   - Screenshot/GIF hasil RPP yang digenerate
   - Before vs After (manual vs GuruDokAI)
   - Angka: "Selesai dalam 2 menit"

4. FITUR
   - Grid 6–8 fitur dengan icon
   - Fokus pada: RPP, Modul Ajar, Bank Soal HOTS, ATP, PDF Export

5. HARGA
   - 4 paket dalam card
   - Paket Tahunan badge "Terpopuler"
   - Paket Lifetime badge "Terbaik"
   - Perbandingan: "Bayar bulanan = 228rb/tahun, Tahunan = 99rb"

6. TESTIMONI
   - Minimal 3 testimoni guru nyata
   - Sertakan nama, sekolah, mata pelajaran

7. FAQ
   - 5–7 pertanyaan umum
   - Apakah sesuai Kurikulum Merdeka?
   - Apakah bisa di HP?
   - Berapa lama akses lifetime?

8. CTA FINAL
   - Ulangi tombol beli
   - Urgency message

9. FOOTER
   - Link ke lynk.id
   - Kontak WA
   - Copyright GuruDokAI
```

---

## 7. SEO Requirements

### Target Keywords (Primary)
- `aplikasi RPP otomatis`
- `AI untuk guru Indonesia`
- `RPP Kurikulum Merdeka otomatis`
- `aplikasi administrasi guru`

### Target Keywords (Secondary)
- `bank soal HOTS otomatis`
- `modul ajar AI`
- `GuruDokAI`
- `aplikasi guru AI`

### On-Page SEO Rules
- `<title>`: GuruDokAI – RPP & Modul Ajar Otomatis dengan AI | Kurikulum Merdeka
- `<meta description>`: Buat RPP, Modul Ajar, Bank Soal HOTS otomatis dalam 2 menit. AI Asisten Guru Indonesia sesuai Kurikulum Merdeka. Mulai Rp 19.000/bulan.
- `<h1>`: Satu saja, mengandung keyword utama
- `<h2>`: Setiap section pakai heading yang mengandung keyword
- Alt text semua gambar harus deskriptif
- Schema markup: `Product`, `FAQPage`, `Organization`
- Open Graph & Twitter Card lengkap
- Canonical URL ke domain sendiri

---

## 8. Technical Requirements

| Aspek | Requirement |
|-------|-------------|
| Framework | HTML/CSS/JS vanilla ATAU Next.js/Astro (pilih yang AI agent familiar) |
| Deploy | Cloudflare Pages (otomatis via Git push) |
| Domain | Custom domain (bukan .pages.dev) |
| Performance | Lighthouse score > 90 semua kategori |
| Mobile | Mobile-first, responsive semua breakpoint |
| CTA links | Semua tombol beli → https://lynk.id/oghiezr/zxjox857nz71 |
| Analytics | Tambahkan Cloudflare Web Analytics (gratis, privacy-friendly) |
| Sitemap | /sitemap.xml otomatis |
| Robots.txt | Allow semua, sitemap tertera |

---

## 9. Design Direction

- **Tone:** Hangat, profesional, bisa dipercaya — bukan tech startup asing
- **Warna primer:** Hijau (sesuai GuruDokAI — warna kepercayaan & pendidikan)
- **Font:** Clean, readable di mobile — Inter atau Plus Jakarta Sans
- **Gambar:** Screenshot nyata dari aplikasi, bukan mockup palsu
- **Icon:** Lucide atau Heroicons — konsisten satu library
- **No dark mode required** — target guru, mayoritas preferensi light mode

---

## 10. Tidak Perlu Dibangun

- Login / auth system
- Database
- Payment gateway (semua ke lynk.id)
- Blog (fase 2)
- Multi-language

---

## 11. Success Metrics

| Metrik | Target |
|--------|--------|
| Lighthouse Performance | > 90 |
| Lighthouse SEO | 100 |
| Time to First Byte | < 200ms (Cloudflare edge) |
| Google Index | Terindex dalam 7 hari setelah domain aktif |
| Konversi visitor → klik CTA | > 5% |
