export interface Faq {
  question: string;
  /** Visible answer. May contain inline HTML; schema output strips tags. */
  answer: string;
}

/** Single source of truth for the homepage FAQ: rendered by FAQ.astro and
 *  serialised into FAQPage JSON-LD by BaseLayout.astro, so the two never drift. */
export const homeFaqs: Faq[] = [
  {
    question: "Apakah GuruDokAI merupakan aplikasi administrasi guru otomatis?",
    answer: "Ya. GuruDokAI adalah <strong>aplikasi administrasi guru</strong> berbasis kecerdasan buatan untuk guru di Indonesia. Platform ini berfungsi sebagai <strong>pembuat RPP otomatis</strong>, <strong>pembuat modul ajar</strong>, dan <strong>generator LKPD</strong> interaktif untuk memproses seluruh berkas <strong>administrasi pembelajaran</strong> Anda secara instan dan praktis."
  },
  {
    question: "Apakah GuruDokAI sesuai Kurikulum Merdeka?",
    answer: "Ya. Sebagai <strong>aplikasi Kurikulum Merdeka</strong> berbasis kecerdasan buatan, GuruDokAI mendukung format RPP dan Modul Ajar terbaru yang disesuaikan dengan Permendikdasmen No.13/2025 tentang prinsip Deep Learning."
  },
  {
    question: "Apa yang tidak dilakukan GuruDokAI?",
    answer: "GuruDokAI menyusun draf dokumen pembelajaran. GuruDokAI <strong>bukan LMS</strong>, <strong>bukan sistem CBT atau ujian online</strong>, dan <strong>bukan aplikasi absensi maupun penilaian siswa</strong>. Untuk kebutuhan tersebut, lihat <a href=\"/rekomendasi/\" class=\"text-brand-primary hover:underline font-bold\">rekomendasi aplikasi guru</a> seperti Rekap Guru untuk administrasi kelas dan SiUjian untuk ujian dalam mode terkunci."
  },
  {
    question: "Apakah GuruDokAI memiliki aplikasi Android dan Windows?",
    answer: "Ya, betul sekali. GuruDokAI hadir sebagai aplikasi desktop khusus untuk komputer dengan sistem operasi <strong>Windows 10 & 11</strong>. Sementara itu, bagi pengguna mobile, Anda dapat mengunduh aplikasi Android resmi bernama <a href=\"https://play.google.com/store/apps/details?id=com.biraastudio.siajar\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">SiAjar</a> di Google Play Store. Website ini sendiri berperan sebagai pusat informasi produk, dokumentasi, dan tempat mengunduh file instalasi resmi."
  },
  {
    question: "Jenjang sekolah apa saja yang didukung oleh GuruDokAI?",
    answer: "Sebagai <strong>aplikasi guru SD</strong>, MI, SMP, MTs, SMA, MA, dan SMK, GuruDokAI dirancang fleksibel untuk mendukung pembuatan <strong>administrasi pembelajaran</strong> lengkap di berbagai jenjang sekolah di Indonesia, baik sekolah umum maupun madrasah di bawah naungan Kemenag. Jenjang yang didukung meliputi <strong>SD (Sekolah Dasar), MI (Madrasah Ibtidaiyah), SMP (Sekolah Menengah Pertama), MTs (Madrasah Tsanawiyah), SMA (Sekolah Menengah Atas), MA (Madrasah Aliyah), dan SMK (Sekolah Menengah Kejuruan)</strong>."
  },
  {
    question: "Apakah paket Lifetime benar-benar aktif selamanya?",
    answer: "Ya, benar. Dengan membeli paket Lifetime seharga Rp 199.000, Anda hanya perlu membayar sekali di awal dan bisa mengakses GuruDokAI selamanya. Ini sudah mencakup seluruh pembaruan fitur di masa depan tanpa ada tagihan bulanan/tahunan."
  },
  {
    question: "Berapa lama proses pembuatan RPP atau dokumennya?",
    answer: "Proses generate biasanya memakan waktu sekitar 30 hingga 60 detik saja. Anda hanya perlu memilih mata pelajaran, kelas, dan memasukkan topik pembahasan utama, lalu sistem AI kami yang akan menuliskan isinya lengkap."
  },
  {
    question: "Apakah hasil yang dibuat AI bisa diedit kembali?",
    answer: "Sangat bisa. Setelah file RPP, Modul Ajar, atau bank soal selesai digenerate oleh AI, Anda bisa mengedit teksnya secara langsung di dalam editor dokumen aplikasi sebelum mengekspornya ke format PDF yang rapi dan siap cetak."
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami menerima pembayaran instan via QRIS (mendukung GoPay, Dana, ShopeePay, OVO, LinkAja) serta Transfer Bank Virtual Account (seperti Mandiri, BCA, BNI, BRI) dan kartu debit/kredit melalui platform pembayaran Lynk.id."
  },
  {
    question: "Apakah ada video panduan atau demo cara menggunakan GuruDokAI?",
    answer: "Tentu saja. Anda bisa menyaksikan <a href=\"https://www.tiktok.com/@scenecrafter/video/7655997727506976008\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">Video Demo Utama</a> dan <a href=\"https://www.tiktok.com/@scenecrafter/video/7659118261556055316\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">Eksplorasi Fitur Lengkap</a> kami di TikTok. Untuk panduan lengkap dari awal, Anda bisa menonton <a href=\"https://www.youtube.com/watch?v=cOYjV9c7IZc\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">Video Panduan Setup & Cara Pakai</a> di YouTube, serta <a href=\"https://www.tiktok.com/@scenecrafter/video/7651961072823438608\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">Video Tutorial Aplikasi Android SiAjar</a>."
  },
  {
    question: "Apa itu RPM?",
    answer: "<strong>RPM (Rencana Pembelajaran Mendalam)</strong> adalah format perencanaan pembelajaran terbaru yang dirancang untuk mengimplementasikan prinsip Pembelajaran Mendalam (Deep Learning) di sekolah."
  },
  {
    question: "Apa perbedaan RPM dan RPP?",
    answer: "<strong>RPP (Rencana Pelaksanaan Pembelajaran)</strong> berfokus pada langkah-langkah administratif mengajar secara umum, sedangkan <strong>RPM (Rencana Pembelajaran Mendalam)</strong> dirancang khusus untuk memastikan terjadinya <strong>Pembelajaran Mendalam (Deep Learning)</strong> melalui pemetaan konsep esensial, asesmen autentik, dan aktivitas bermakna bagi murid."
  },
  {
    question: "Apa itu RPPM?",
    answer: "<strong>RPPM (Rencana Pelaksanaan Pembelajaran Mendalam)</strong> adalah dokumen perencanaan mingguan atau unit pembelajaran yang menguraikan strategi mengajar berbasis pendekatan Deep Learning secara bertahap."
  },
  {
    question: "Apakah GuruDokAI mendukung Pembelajaran Mendalam (Deep Learning)?",
    answer: "Ya. GuruDokAI mendukung penyusunan modul, RPP, RPM, dan RPPM berbasis prinsip <strong>Pembelajaran Mendalam (Deep Learning)</strong> agar pembelajaran lebih bermakna dan efektif."
  },
  {
    question: "Apakah GuruDokAI mendukung Kurikulum Berbasis Cinta (KBC)?",
    answer: "Ya, GuruDokAI mendukung penuh <strong>Kurikulum Berbasis Cinta (KBC)</strong>, termasuk pembuatan <strong>Modul Ajar KBC</strong> dan skenario <strong>Pembelajaran Berbasis Cinta</strong> untuk lingkungan madrasah di bawah naungan Kementerian Agama."
  },
  {
    question: "Apakah GuruDokAI dapat digunakan oleh guru MI, MTs, dan MA?",
    answer: "Tentu saja. GuruDokAI sangat cocok untuk <strong>guru madrasah</strong> di lingkungan Kemenag, termasuk <strong>MI (Madrasah Ibtidaiyah), MTs (Madrasah Tsanawiyah), dan MA (Madrasah Aliyah)</strong>, lengkap dengan pilihan mata pelajaran umum maupun pendidikan agama Islam."
  },
  {
    question: "Kalau ada pertanyaan, bisa hubungi siapa?",
    answer: "Tim bantuan GuruDokAI siap mendampingi Anda. Anda bisa langsung menghubungi CS kami melalui <a href=\"https://wa.me/6285189536359?text=Halo%20GuruDokAI,%20saya%20butuh%20bantuan\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-brand-primary hover:underline font-bold\">WhatsApp di sini</a>."
  }
];

/** Plain-text answers for JSON-LD (schema must mirror what users can read). */
export const faqSchemaEntries = homeFaqs.map((f) => ({
  "@type": "Question",
  name: f.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: f.answer.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
  },
}));
