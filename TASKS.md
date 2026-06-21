# Task Plan — GuruDokAI Landing Page
## Untuk AI Agent (VS Code)

---

## Konteks Proyek

Bangun landing page statis untuk produk **GuruDokAI** — aplikasi AI untuk guru Indonesia membuat RPP, Modul Ajar, Bank Soal HOTS otomatis.

- **Deploy target:** Cloudflare Pages (sudah terkoneksi)
- **CTA URL utama:** `https://lynk.id/oghiezr/zxjox857nz71`
- **Referensi produk:** `https://lynk.id/oghiezr`
- **Baca dulu:** `BRD.md` dan `ARCHITECTURE.md` sebelum mulai

---

## TASK 1 — Setup Project

```
[ ] 1.1 Init Astro project
        npm create astro@latest gurudokai-landing
        Pilih: Empty template, TypeScript: No, Install deps: Yes

[ ] 1.2 Install dependencies
        npm install @astrojs/tailwind tailwindcss
        npx astro add tailwind

[ ] 1.3 Init git & connect ke repo GitHub yang sudah konek ke Cloudflare Pages
        git init
        git remote add origin <repo-url>

[ ] 1.4 Buat struktur folder sesuai ARCHITECTURE.md
        src/components/
        src/layouts/
        src/pages/
        public/
```

---

## TASK 2 — BaseLayout & SEO Head

```
[ ] 2.1 Buat src/layouts/BaseLayout.astro
        - Semua meta tag dari ARCHITECTURE.md section 4
        - Schema JSON-LD: SoftwareApplication + FAQPage
        - Open Graph lengkap
        - Canonical URL
        - Preload font Plus Jakarta Sans dari Google Fonts
        - Cloudflare Web Analytics snippet

[ ] 2.2 Buat public/robots.txt (isi dari ARCHITECTURE.md section 7)

[ ] 2.3 Buat public/sitemap.xml (isi dari ARCHITECTURE.md section 8)

[ ] 2.4 Siapkan placeholder public/og-image.png (1200x630px)
```

---

## TASK 3 — Komponen Hero

```
[ ] 3.1 Buat src/components/Hero.astro

KONTEN:
- Badge: "AI Asisten Guru Indonesia #1"
- H1: "Akhiri Lembur Bikin RPP. GuruDokAI Selesaikan dalam 2 Menit."
- Subtext: "RPP, Modul Ajar, Bank Soal HOTS, ATP otomatis sesuai Kurikulum Merdeka. Mulai Rp 19.000/bulan."
- CTA Button Primer: "Coba Sekarang – Mulai 19rb" → https://lynk.id/oghiezr/zxjox857nz71
- CTA Button Sekunder: "Lihat Fitur" → scroll ke #fitur
- Social proof text: "Dipercaya ribuan guru di seluruh Indonesia"
- Hero image: screenshot aplikasi GuruDokAI (gunakan placeholder jika belum ada)

STYLE:
- Background: gradient hijau muda ke putih
- Full viewport height di desktop, auto di mobile
- CTA button: hijau solid, rounded-full, shadow
```

---

## TASK 4 — Komponen Pain Point

```
[ ] 4.1 Buat src/components/PainPoint.astro

KONTEN:
- H2: "Masih Begini Kondisi Guru Indonesia Setiap Hari?"
- 3 card masalah:
  Card 1: "RPP Manual = 3–4 Jam Terbuang"
           "Setiap minggu, guru menghabiskan waktu berharga hanya untuk mengetik format yang sama berulang-ulang."
  Card 2: "Administrasi Menumpuk Setiap Semester"
           "ATP, Prota, Prosem, Modul Ajar — semua harus dibuat manual dari nol. Padahal isinya hampir sama."
  Card 3: "Waktu Keluarga Tersita"
           "Lembur sampai tengah malam bukan karena mengajar, tapi karena urusan administrasi yang tidak ada habisnya."
- Transition text: "GuruDokAI hadir untuk mengubah semua itu."

STYLE:
- Background putih
- Cards dengan border merah muda / oranye muda (pain = warm color)
- Icon setiap card: clock, document-stack, home
```

---

## TASK 5 — Komponen Demo/Before-After

```
[ ] 5.1 Buat src/components/Demo.astro

KONTEN:
- H2: "Lihat Sendiri Bedanya"
- Before/After comparison:
  BEFORE: "Cara lama" — list: buka Word, cari template, ketik manual, format margin, 3–4 jam
  AFTER: "Dengan GuruDokAI" — list: buka app, pilih mapel & kelas, klik generate, RPP jadi, 2 menit
- Stat highlight: 3 angka besar
  "2 Menit" — Rata-rata waktu generate RPP
  "10+ Dokumen" — Jenis administrasi yang bisa dibuat
  "100%" — Sesuai Kurikulum Merdeka

STYLE:
- Split layout desktop (before kiri abu, after kanan hijau)
- Stack di mobile
- Angka stat: besar, bold, hijau
```

---

## TASK 6 — Komponen Fitur

```
[ ] 6.1 Buat src/components/Features.astro

ID section: id="fitur"

KONTEN:
- H2: "Semua yang Guru Butuhkan, Dalam Satu Aplikasi"
- Grid 8 fitur:
  1. RPP Otomatis — "Sesuai Kurikulum Merdeka & Permendikdasmen No.13/2025"
  2. Modul Ajar — "Siap cetak, lengkap dengan LKPD"
  3. Bank Soal HOTS — "Pilihan ganda, essay, dengan kunci jawaban"
  4. ATP Otomatis — "Alur Tujuan Pembelajaran per semester"
  5. Prota & Prosem — "Program Tahunan & Semester otomatis"
  6. Export PDF — "Download langsung, siap print"
  7. AI Asisten — "Tanya apapun soal administrasi guru"
  8. Full Administrasi Sekolah — "Semua dokumen guru dalam satu platform"

STYLE:
- Grid 2 kolom mobile, 4 kolom desktop
- Card dengan icon hijau
- Background section: hijau sangat muda (#f0fdf4)
```

---

## TASK 7 — Komponen Harga

```
[ ] 7.1 Buat src/components/Pricing.astro

ID section: id="harga"

KONTEN:
- H2: "Pilih Paket yang Cocok untuk Anda"
- Subtext: "Semua paket termasuk akses penuh semua fitur GuruDokAI"
- 4 pricing card:

  CARD 1 — Bulanan
  Harga: Rp 19.000/bulan
  Badge: -
  Fitur: Akses semua fitur, 1 bulan
  CTA: "Mulai Sekarang"

  CARD 2 — 3 Bulan
  Harga: Rp 39.900
  Badge: "Hemat 30%"
  Fitur: Akses semua fitur, 3 bulan
  CTA: "Pilih Paket Ini"

  CARD 3 — Tahunan ⭐ HIGHLIGHT
  Harga: Rp 99.000/tahun
  Badge: "Terpopuler"
  Subtext: "Hanya Rp 8.250/bulan — hemat vs bayar bulanan (228rb)"
  Border: hijau tebal
  Scale: sedikit lebih besar dari card lain
  CTA: "Pilih Paket Ini" (button lebih besar, hijau solid)

  CARD 4 — Lifetime 🏆
  Harga: Rp 199.000
  Badge: "Terbaik"
  Subtext: "Bayar sekali, pakai selamanya. Termasuk semua update."
  CTA: "Pilih Paket Ini"

- SEMUA CTA → https://lynk.id/oghiezr/zxjox857nz71
- Note bawah: "Pembayaran aman via QRIS, Transfer Bank, e-Wallet"

STYLE:
- Card tahunan: elevated shadow, border hijau, badge "Terpopuler" di atas card
- Mobile: stack vertikal, card tahunan tetap di tengah perhatian
```

---

## TASK 8 — Komponen Testimoni

```
[ ] 8.1 Buat src/components/Testimonials.astro

KONTEN:
- H2: "Kata Guru yang Sudah Merasakan Manfaatnya"
- 3 testimoni card (gunakan placeholder nama nyata-sounding):
  
  Testimoni 1:
  "Dulu saya bisa lembur sampai jam 11 malam hanya untuk bikin RPP. 
   Sekarang pakai GuruDokAI, 10 menit sudah selesai semua!"
  — Bu Sari Dewi, Guru Matematika SMP, Jawa Tengah ⭐⭐⭐⭐⭐

  Testimoni 2:
  "Modul ajar dan bank soal HOTS-nya sudah sesuai kurikulum merdeka. 
   Pengawas sekolah pun tidak ada complain. Sangat membantu!"
  — Pak Rudi Hartono, Guru IPA SMA, Surabaya ⭐⭐⭐⭐⭐

  Testimoni 3:
  "Saya guru honorer dengan gaji terbatas. Paket 19rb-nya sangat terjangkau 
   tapi fiturnya lengkap. Akhirnya ada aplikasi yang paham kondisi guru!"
  — Bu Rina Marlina, Guru SD, Bandung ⭐⭐⭐⭐⭐

STYLE:
- Card dengan quote mark besar hijau
- Avatar placeholder bulat
- Background: putih dengan shadow ringan
```

---

## TASK 9 — Komponen FAQ

```
[ ] 9.1 Buat src/components/FAQ.astro

ID section: id="faq"

KONTEN (accordion, default semua tertutup):
Q1: "Apakah GuruDokAI sesuai Kurikulum Merdeka?"
A1: "Ya, GuruDokAI mendukung penuh Kurikulum Merdeka termasuk format terbaru sesuai Permendikdasmen No.13/2025 tentang Deep Learning."

Q2: "Bisa dipakai di HP Android?"
A2: "Bisa. GuruDokAI berjalan di browser HP maupun laptop. Tidak perlu install aplikasi tambahan."

Q3: "Apakah paket Lifetime benar-benar selamanya?"
A3: "Ya. Bayar sekali Rp 199.000, akses GuruDokAI selamanya termasuk semua update fitur ke depannya."

Q4: "Berapa lama proses generate RPP?"
A4: "Rata-rata 30–60 detik. Kamu tinggal pilih mata pelajaran, kelas, dan topik — sisanya AI yang kerjakan."

Q5: "Apakah hasilnya bisa diedit?"
A5: "Bisa. Semua hasil bisa diedit sesuai kebutuhan sekolahmu. Bisa juga langsung export ke PDF."

Q6: "Metode pembayaran apa saja yang tersedia?"
A6: "QRIS (GoPay, Dana, ShopeePay, OVO), Transfer Bank, dan kartu kredit/debit."

Q7: "Kalau ada pertanyaan, bisa hubungi siapa?"
A7: "Bisa langsung chat via WhatsApp. Tim GuruDokAI siap membantu."

IMPLEMENTASI:
- Accordion vanilla JS (toggle show/hide)
- Schema FAQ sudah di BaseLayout, sync isi pertanyaan di sini
```

---

## TASK 10 — CTA Final & Footer

```
[ ] 10.1 Buat src/components/CTAFinal.astro

KONTEN:
- H2: "Mulai Hemat Waktu Hari Ini"
- Text: "Bergabunglah dengan ribuan guru Indonesia yang sudah tidak lembur lagi."
- CTA Button: "Coba GuruDokAI Sekarang" → https://lynk.id/oghiezr/zxjox857nz71
- Subtext: "Mulai dari Rp 19.000 · Tidak perlu kartu kredit · Akses langsung"
- Background: hijau solid

[ ] 10.2 Buat src/components/Footer.astro

KONTEN:
- Logo / nama GuruDokAI
- Tagline: "AI Asisten Guru Indonesia"
- Link: Fitur | Harga | FAQ
- Link produk: https://lynk.id/oghiezr
- Copyright: © 2026 GuruDokAI. All rights reserved.

STYLE:
- Background: dark (abu gelap atau hijau tua)
- Text putih
```

---

## TASK 11 — Compose & Final Polish

```
[ ] 11.1 Edit src/pages/index.astro
        Import dan susun semua komponen sesuai urutan BRD section 6:
        Hero → PainPoint → Demo → Features → Pricing → Testimonials → FAQ → CTAFinal → Footer

[ ] 11.2 Smooth scroll
        Tambahkan scroll-behavior: smooth di CSS global

[ ] 11.3 Sticky navbar (opsional)
        Logo GuruDokAI kiri + CTA button kanan "Mulai Sekarang"
        Muncul setelah scroll 100px

[ ] 11.4 Mobile test
        Cek semua breakpoint: 375px, 390px, 414px, 768px, 1280px

[ ] 11.5 Replace semua placeholder text/image
        Pastikan tidak ada "Lorem ipsum" tersisa
```

---

## TASK 12 — Deploy & Verify

```
[ ] 12.1 Build test lokal
        npm run build
        npm run preview
        Pastikan tidak ada error

[ ] 12.2 Git push → trigger Cloudflare Pages auto deploy
        git add .
        git commit -m "feat: initial landing page GuruDokAI"
        git push origin main

[ ] 12.3 Verify live URL
        Cek semua section tampil benar
        Cek semua CTA link → lynk.id/oghiezr/zxjox857nz71
        Cek mobile view

[ ] 12.4 Lighthouse audit
        Target: Performance > 90, SEO = 100, Accessibility > 90
        Fix issue jika ada

[ ] 12.5 Submit ke Google Search Console
        Add property → domain custom
        Submit sitemap.xml
        Request indexing halaman utama
```

---

## Catatan Penting untuk AI Agent

1. **Jangan hardcode domain .pages.dev** — pakai variabel atau env untuk domain
2. **Semua CTA link wajib:** `https://lynk.id/oghiezr/zxjox857nz71`
3. **H1 hanya satu** di seluruh halaman
4. **Alt text wajib** untuk semua `<img>`
5. **Schema FAQ** di BaseLayout harus sync dengan isi komponen FAQ
6. **Promo/diskon** jangan hardcode tanggal — atau skip dulu
7. **Font:** Plus Jakarta Sans via Google Fonts, weight 400 & 700 saja
8. **Warna primer:** `#16a34a` (green-600 Tailwind) untuk konsistensi brand GuruDokAI
