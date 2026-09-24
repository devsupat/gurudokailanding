/** Page-specific long-form content for the keyword landing pages.
 *  Each entry is what makes its page topically distinct from the homepage:
 *  the document it produces, that document's real structure, the inputs a
 *  teacher has to supply, and a concrete worked example.
 *  Rendered by TopicGuide.astro. Keep claims factual — no invented
 *  regulations, statistics, or testimonials. */
export interface TopicGuide {
  heading: string;
  lede: string;
  sections: Array<{ title: string; paragraphs: string[] }>;
  structureHeading: string;
  structure: Array<{ term: string; detail: string }>;
  inputsHeading: string;
  inputs: string[];
  example: { title: string; lines: string[] };
}

export const rppGuide: TopicGuide = {
  heading: 'Memahami RPP: Struktur, Penyusunan, dan Cara Kerja Generatornya',
  lede: 'RPP (Rencana Pelaksanaan Pembelajaran) adalah rencana kerja guru untuk satu atau beberapa pertemuan tatap muka. Bagian ini menjelaskan isi dokumennya, urutan penyusunannya, dan bagian mana yang dikerjakan AI.',
  sections: [
    {
      title: 'Apa yang sebenarnya dikerjakan sebuah RPP',
      paragraphs: [
        'RPP menerjemahkan capaian pembelajaran yang bersifat umum menjadi keputusan konkret di kelas: materi apa yang dibahas pertemuan ini, berapa lama tiap tahap berlangsung, kegiatan apa yang dilakukan murid, dan bukti apa yang dipakai guru untuk menilai. Selama keempat keputusan itu belum diambil, dokumen yang tertulis rapi pun belum benar-benar menjadi rencana pembelajaran.',
        'Karena itu penyusunan RPP bukan pekerjaan mengetik ulang format. Bagian yang berat justru penalaran di baliknya: memastikan tujuan pembelajaran benar-benar terukur, memilih langkah kegiatan yang membuat tujuan itu tercapai, lalu menyiapkan asesmen yang mengukur hal yang sama — bukan hal lain.',
      ],
    },
    {
      title: 'Urutan penyusunan yang menjaga dokumen tetap selaras',
      paragraphs: [
        'Mulai dari capaian pembelajaran, turunkan menjadi tujuan pembelajaran, baru pilih model dan langkah kegiatan, dan terakhir rancang asesmen. Urutan ini penting: jika guru menyusun kegiatan lebih dulu lalu menempelkan tujuan di atasnya, RPP sering berakhir dengan asesmen yang tidak mengukur tujuan yang dinyatakan.',
        'GuruDokAI mengikuti urutan yang sama. AI membaca topik dan jenjang yang Anda masukkan, menurunkan tujuan pembelajaran, menyusun sintaks kegiatan sesuai model yang Anda pilih (PBL, PjBL, discovery, atau kooperatif), lalu membangun rubrik dan instrumen yang merujuk kembali ke tujuan tersebut. Keselarasan antarbagian inilah yang paling menyita waktu bila dikerjakan manual.',
      ],
    },
    {
      title: 'Yang tetap menjadi keputusan guru',
      paragraphs: [
        'Draf AI tidak mengenal kelas Anda. Alokasi waktu, tingkat kesulitan bacaan, pembagian kelompok, ketersediaan alat peraga, dan kondisi murid tertentu perlu Anda sesuaikan sebelum dokumen dipakai. Editor GuruDokAI dibuat untuk itu: draf berperan sebagai kerangka awal, bukan sebagai dokumen final yang langsung dicetak tanpa dibaca.',
        'RPP juga jarang berdiri sendiri. Satu topik yang sama umumnya membutuhkan <a href="/ai-pembuat-lkpd/" class="text-brand-primary hover:underline font-bold">LKPD</a> untuk kegiatan murid dan <a href="/generator-kktp/" class="text-brand-primary hover:underline font-bold">KKTP</a> sebagai dasar penilaian. Menyusunnya dari satu topik yang sama membuat ketiga dokumen tidak saling bertentangan.',
      ],
    },
  ],
  structureHeading: 'Komponen dokumen RPP',
  structure: [
    { term: 'Identitas', detail: 'Sekolah, mata pelajaran, kelas/fase, alokasi waktu, dan topik pertemuan.' },
    { term: 'Capaian & tujuan pembelajaran', detail: 'Rumusan kompetensi yang dituju pada pertemuan tersebut, dinyatakan dengan kata kerja yang dapat diamati.' },
    { term: 'Kegiatan pembelajaran', detail: 'Pendahuluan, inti, dan penutup beserta sintaks model pembelajaran yang dipilih.' },
    { term: 'Asesmen', detail: 'Asesmen awal, formatif selama proses, dan sumatif di akhir, lengkap dengan instrumennya.' },
    { term: 'Media & sumber belajar', detail: 'Alat, bahan, bacaan, dan media pendukung yang dipakai selama kegiatan.' },
    { term: 'Lampiran', detail: 'LKPD, bahan ajar, rubrik penilaian, dan pengayaan atau remedial bila diperlukan.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Jenjang dan kelas/fase murid',
    'Mata pelajaran serta topik atau materi pertemuan',
    'Alokasi waktu (jumlah jam pelajaran)',
    'Model pembelajaran yang diinginkan, misalnya PBL atau PjBL',
    'Catatan kondisi kelas bila ada, misalnya keterbatasan alat atau jumlah murid',
  ],
  example: {
    title: 'Contoh penggunaan di kelas',
    lines: [
      '<strong>Situasi:</strong> guru kelas IV SD menyiapkan pertemuan Pendidikan Pancasila bertopik nilai Pancasila di lingkungan keluarga, 2 jam pelajaran.',
      '<strong>Masukan:</strong> kelas IV/Fase B, topik tersebut, model Problem-Based Learning.',
      '<strong>Hasil draf:</strong> dua tujuan pembelajaran yang terukur, alur PBL dari orientasi masalah sampai presentasi kelompok, rubrik keaktifan diskusi, serta soal sumatif singkat.',
      '<strong>Penyesuaian guru:</strong> mengganti konteks cerita agar sesuai kebiasaan murid setempat dan memendekkan durasi diskusi kelompok.',
    ],
  },
};

export const rpmGuide: TopicGuide = {
  heading: 'RPM: Isi Dokumennya, Cara Menyusunnya, dan Bedanya dengan RPP',
  lede: 'RPM (Rencana Pembelajaran Mendalam) menata satu pengalaman belajar yang utuh, bukan sekadar urutan kegiatan. Bagian ini menguraikan komponennya dan alur penyusunannya di GuruDokAI.',
  sections: [
    {
      title: 'Yang membedakan RPM dari rencana pembelajaran biasa',
      paragraphs: [
        'Perbedaannya terletak pada pertanyaan yang dijawab dokumen. Rencana pembelajaran biasa menjawab "apa yang dikerjakan di kelas hari ini". RPM menambahkan satu lapis lagi: mengapa pengalaman belajar itu bermakna bagi murid, bagaimana materi terhubung dengan pengetahuan yang sudah mereka miliki, dan kompetensi serta karakter apa yang tumbuh dari situ.',
        'Konsekuensinya pada penulisan cukup nyata. Kegiatan inti tidak berhenti pada "murid mendengarkan penjelasan lalu mengerjakan latihan". RPM menuntut tahapan yang membuat murid memahami, menerapkan, dan merefleksikan, sehingga guru perlu merancang pemicu, ruang eksplorasi, dan momen refleksi secara sadar.',
      ],
    },
    {
      title: 'Alur penyusunan RPM di GuruDokAI',
      paragraphs: [
        'Penyusunan dimulai dari pemetaan: capaian pembelajaran dan topik ditetapkan lebih dulu, lalu dirumuskan tujuan yang menuntut pemahaman, bukan sekadar hafalan. Setelah itu barulah dirancang pengalaman belajar yang berkesadaran, bermakna, dan menggembirakan, dan terakhir asesmen yang mengukur pemahaman tersebut.',
        'AI GuruDokAI menyusun draf mengikuti alur itu: menurunkan tujuan dari topik yang Anda isi, membangun tahap awal, inti, dan penutup dengan kegiatan yang menuntut penalaran murid, menyisipkan pertanyaan pemantik dan refleksi, lalu menyiapkan instrumen asesmen beserta rubriknya. Draf kemudian Anda sunting di editor sebelum diekspor ke Word atau PDF.',
      ],
    },
    {
      title: 'Kesalahan umum yang perlu dihindari',
      paragraphs: [
        'Yang paling sering terjadi adalah mengganti judul dokumen tanpa mengubah isi kegiatan. Jika langkah pembelajaran masih berpusat pada guru dan asesmen hanya berupa tes akhir, dokumen tersebut belum menjadi RPM meskipun namanya sudah berganti.',
        'Kesalahan kedua adalah refleksi yang bersifat formalitas. Refleksi berguna ketika menanyakan hal spesifik, misalnya bagian mana yang sulit dan strategi apa yang dipakai murid, bukan sekadar menanyakan apakah mereka senang hari ini. Perbandingan istilahnya dapat dibaca di <a href="/knowledge/perbedaan-rpp-rpm-rppm/" class="text-brand-primary hover:underline font-bold">perbedaan RPP, RPM, dan RPPM</a>.',
      ],
    },
  ],
  structureHeading: 'Komponen dokumen RPM',
  structure: [
    { term: 'Identitas & konteks', detail: 'Satuan pendidikan, mata pelajaran, fase, alokasi waktu, dan topik.' },
    { term: 'Tujuan pembelajaran', detail: 'Dirumuskan pada tataran pemahaman dan penerapan, bukan sekadar mengingat.' },
    { term: 'Pemahaman bermakna & pemantik', detail: 'Gagasan inti yang ingin melekat pada murid serta pertanyaan pembuka yang memancing rasa ingin tahu.' },
    { term: 'Pengalaman belajar', detail: 'Tahap awal, inti, dan penutup yang memberi ruang eksplorasi dan diskusi murid.' },
    { term: 'Asesmen', detail: 'Asesmen awal, formatif, dan sumatif beserta rubrik ketercapaiannya.' },
    { term: 'Refleksi', detail: 'Refleksi murid dan refleksi guru sebagai bahan perbaikan pertemuan berikutnya.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Fase dan kelas murid',
    'Mata pelajaran dan topik yang akan diajarkan',
    'Alokasi waktu pertemuan',
    'Penekanan yang diinginkan, misalnya penguatan karakter atau keterampilan berpikir',
    'Konteks lokal yang ingin diangkat, bila ada',
  ],
  example: {
    title: 'Contoh penerapan',
    lines: [
      '<strong>Situasi:</strong> guru IPAS fase C menyiapkan topik siklus air untuk dua pertemuan.',
      '<strong>Pemantik:</strong> mengapa air di selokan sekolah tidak pernah habis meski terus mengalir.',
      '<strong>Pengalaman belajar:</strong> murid mengamati penguapan sederhana, menggambar diagram siklus, lalu menghubungkannya dengan kejadian hujan di lingkungan sekolah.',
      '<strong>Asesmen:</strong> rubrik diagram dan penjelasan lisan, ditutup refleksi tertulis tiga kalimat.',
    ],
  },
};

export const rpmConceptGuide: TopicGuide = {
  heading: 'Pembelajaran Mendalam di Kelas: Dari Konsep ke Praktik Harian',
  lede: 'Halaman ini membahas konsep pembelajaran mendalam dan cara menurunkannya menjadi keputusan mengajar yang konkret, bagian yang sering hilang ketika pembahasan berhenti di tataran istilah.',
  sections: [
    {
      title: 'Mendalam berarti memproses, bukan menambah materi',
      paragraphs: [
        'Pembelajaran mendalam kerap disalahpahami sebagai menambah kedalaman materi atau memperbanyak tugas. Yang dituju sebenarnya adalah cara murid memproses: mengaitkan materi baru dengan yang sudah diketahui, menjelaskan ulang dengan bahasa sendiri, menerapkannya pada situasi baru, dan menyadari cara berpikirnya sendiri.',
        'Karena itu satu topik yang diproses dengan baik lebih berharga daripada lima topik yang dilewati cepat. Guru justru sering perlu memangkas cakupan agar tersedia ruang untuk diskusi dan pengecekan pemahaman.',
      ],
    },
    {
      title: 'Tiga penopang yang dipakai saat merancang pertemuan',
      paragraphs: [
        'Koneksi memastikan materi terhubung ke pengalaman murid dan ke pelajaran lain, sehingga tidak terasa berdiri sendiri. Kompetensi memastikan murid benar-benar melakukan sesuatu dengan pengetahuannya, misalnya menganalisis, merancang, atau memecahkan masalah. Karakter memastikan sikap seperti kejujuran, kerja sama, dan kegigihan ikut terlatih lewat cara kegiatan dijalankan, bukan lewat ceramah terpisah.',
        'Ketiganya paling mudah dipakai sebagai daftar periksa saat merancang: sudahkah pertemuan ini memiliki titik koneksi yang jelas, tugas yang menuntut penalaran, dan aturan kerja yang melatih sikap tertentu.',
      ],
    },
    {
      title: 'Suasana belajar yang mendukung',
      paragraphs: [
        'Suasana yang berkesadaran, bermakna, dan menggembirakan bukan soal kelas yang ramai atau penuh permainan. Berkesadaran berarti murid tahu sedang belajar apa dan untuk apa. Bermakna berarti tugasnya terasa relevan dengan dunia mereka. Menggembirakan berarti murid merasa aman mencoba dan keliru tanpa takut dipermalukan.',
        'Ketika ketiganya terpenuhi, kegiatan yang sederhana sekalipun sudah cukup mendalam. Untuk menuangkannya ke dokumen, gunakan <a href="/ai-pembuat-rpm/" class="text-brand-primary hover:underline font-bold">generator RPM</a>; untuk perencanaan satu pekan penuh gunakan <a href="/rppm/" class="text-brand-primary hover:underline font-bold">RPPM</a>.',
      ],
    },
  ],
  structureHeading: 'Penanda pembelajaran mendalam',
  structure: [
    { term: 'Pertanyaan pemantik', detail: 'Pertanyaan yang belum bisa dijawab murid hanya dengan mengingat.' },
    { term: 'Aktivitas berpikir', detail: 'Murid membandingkan, mengurutkan, menguji, atau merancang sesuatu.' },
    { term: 'Diskusi bermakna', detail: 'Murid menjelaskan alasan, bukan sekadar menyebut jawaban akhir.' },
    { term: 'Transfer', detail: 'Konsep dipakai ulang pada situasi baru yang belum pernah dibahas.' },
    { term: 'Umpan balik', detail: 'Guru merespons proses berpikir murid, bukan hanya benar atau salah.' },
    { term: 'Refleksi', detail: 'Murid menuliskan bagian yang belum dipahami dan rencana perbaikannya.' },
  ],
  inputsHeading: 'Titik awal yang membantu',
  inputs: [
    'Satu topik yang selama ini paling sulit dipahami murid',
    'Miskonsepsi yang sering muncul pada topik tersebut',
    'Konteks lingkungan sekolah yang bisa dijadikan contoh nyata',
    'Waktu yang tersedia untuk diskusi dan pengecekan pemahaman',
  ],
  example: {
    title: 'Contoh penerapan di satu pertemuan',
    lines: [
      '<strong>Topik:</strong> pecahan senilai di kelas IV.',
      '<strong>Koneksi:</strong> membagi satu loyang kue untuk jumlah anak yang berbeda-beda.',
      '<strong>Kompetensi:</strong> murid membuktikan dua pecahan bernilai sama menggunakan potongan kertas.',
      '<strong>Karakter:</strong> pembagian tugas dalam kelompok disepakati sendiri oleh murid.',
      '<strong>Refleksi:</strong> murid menuliskan satu hal yang tadinya dikira benar ternyata keliru.',
    ],
  },
};

export const rppmGuide: TopicGuide = {
  heading: 'RPPM: Merencanakan Satu Pekan Pembelajaran Secara Utuh',
  lede: 'RPPM menyusun rencana untuk rentang satu minggu, sehingga tema, kegiatan harian, dan penilaian saling menyambung alih-alih berdiri sendiri pada tiap hari.',
  sections: [
    {
      title: 'Kenapa perencanaan mingguan berbeda dari perencanaan harian',
      paragraphs: [
        'Rencana harian menjawab satu pertemuan. Rencana mingguan menjawab pergerakan: dari mana murid berangkat pada hari pertama dan sampai di mana mereka pada hari terakhir. Perbedaan cakupan ini membuat RPPM lebih banyak mengurus urutan dan kesinambungan daripada detail menit per menit.',
        'Manfaat praktisnya, guru dapat melihat beban belajar satu pekan sekaligus. Kegiatan yang menuntut konsentrasi tinggi bisa ditempatkan di awal pekan, sementara kegiatan proyek atau presentasi diletakkan setelah murid memiliki bekal yang cukup.',
      ],
    },
    {
      title: 'Cara menyusun RPPM agar tidak sekadar daftar kegiatan',
      paragraphs: [
        'Mulailah dari tema atau topik payung pekan tersebut, lalu tentukan kompetensi yang ingin dicapai di akhir pekan. Setelah itu sebarkan kegiatan harian sebagai tahapan menuju kompetensi tadi: pengenalan, pendalaman, penerapan, dan penguatan. Terakhir tentukan bukti belajar apa yang dikumpulkan dan pada hari mana.',
        'Tanpa langkah kedua, RPPM mudah berubah menjadi daftar kegiatan yang tidak terhubung. Dengan langkah tersebut, setiap hari memiliki peran yang jelas dalam pekan itu.',
      ],
    },
    {
      title: 'Cara GuruDokAI menyusun draf RPPM',
      paragraphs: [
        'Anda mengisi tema pekan, jenjang, dan jumlah hari efektif; AI menyusun sebaran kegiatan harian yang bertahap, mengaitkannya dengan tujuan pembelajaran, lalu menandai kegiatan mana yang menghasilkan bukti penilaian. Hasilnya berupa tabel mingguan yang bisa langsung disunting.',
        'Karena kalender sekolah sering berubah oleh kegiatan mendadak, draf sengaja dibuat mudah digeser: satu kegiatan dapat dipindah hari tanpa membongkar seluruh rencana. Untuk rencana per pertemuan, lanjutkan ke <a href="/ai-pembuat-rpm/" class="text-brand-primary hover:underline font-bold">RPM</a> atau <a href="/ai-pembuat-rpp/" class="text-brand-primary hover:underline font-bold">RPP</a>.',
      ],
    },
  ],
  structureHeading: 'Komponen dokumen RPPM',
  structure: [
    { term: 'Identitas & pekan', detail: 'Kelas/fase, mata pelajaran atau tema, serta rentang tanggal pekan berjalan.' },
    { term: 'Tema atau topik payung', detail: 'Benang merah yang menyatukan seluruh kegiatan pekan tersebut.' },
    { term: 'Tujuan pembelajaran pekan', detail: 'Kompetensi yang diharapkan tercapai pada akhir minggu.' },
    { term: 'Sebaran kegiatan harian', detail: 'Kegiatan tiap hari beserta alokasi waktunya, disusun bertahap.' },
    { term: 'Media & sumber', detail: 'Alat, bahan, dan bacaan yang perlu disiapkan sebelum pekan dimulai.' },
    { term: 'Rencana penilaian', detail: 'Bukti belajar yang dikumpulkan dan hari pengumpulannya.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Kelas/fase dan mata pelajaran atau tema',
    'Topik payung untuk pekan tersebut',
    'Jumlah hari efektif dan jam pelajaran per hari',
    'Kegiatan sekolah yang sudah terjadwal pada pekan itu',
    'Bentuk bukti belajar yang diinginkan, misalnya produk atau presentasi',
  ],
  example: {
    title: 'Contoh sebaran satu pekan',
    lines: [
      '<strong>Tema:</strong> lingkungan sekolah yang sehat, kelas III, lima hari efektif.',
      '<strong>Senin dan Selasa:</strong> pengenalan masalah sampah melalui pengamatan langsung di halaman sekolah.',
      '<strong>Rabu:</strong> pendalaman konsep pemilahan sampah dan diskusi kelompok.',
      '<strong>Kamis:</strong> murid merancang ajakan sederhana untuk warga sekolah.',
      '<strong>Jumat:</strong> presentasi hasil dan refleksi; bukti belajar berupa poster kelompok.',
    ],
  },
};

export const lkpdGuide: TopicGuide = {
  heading: 'LKPD: Fungsi, Struktur Instruksi, dan Cara Merancang Aktivitasnya',
  lede: 'LKPD (Lembar Kerja Peserta Didik) adalah dokumen yang dipegang murid selama belajar. Kualitasnya ditentukan oleh kejelasan instruksi dan jenis aktivitas yang diminta, bukan oleh banyaknya soal.',
  sections: [
    {
      title: 'LKPD yang berfungsi dan LKPD yang hanya menjadi lembar soal',
      paragraphs: [
        'LKPD dirancang untuk memandu murid melakukan sesuatu: mengamati, mencoba, mencatat temuan, lalu menyimpulkan. Ketika isinya hanya kumpulan pertanyaan yang jawabannya tinggal disalin dari buku, fungsi pemanduan itu hilang dan lembar tersebut berubah menjadi lembar soal biasa.',
        'Pembeda yang paling menentukan adalah apakah murid menghasilkan sesuatu di lembar itu. Tabel pengamatan yang harus diisi, gambar yang harus dilabeli, atau kesimpulan yang harus ditulis dengan bahasa sendiri membuat proses berpikir murid terlihat oleh guru.',
      ],
    },
    {
      title: 'Menulis instruksi kerja yang tidak menimbulkan pertanyaan susulan',
      paragraphs: [
        'Instruksi yang baik menyebutkan tindakan, objek, dan bentuk hasilnya sekaligus. "Amati tumbuhan" terlalu longgar; "amati tiga tumbuhan di halaman, catat bentuk daun dan warnanya pada tabel berikut" memberi murid batas yang jelas. Kejelasan ini mengurangi waktu yang habis untuk menjelaskan ulang di kelas.',
        'Perhatikan juga tingkat bahasa. Untuk jenjang dasar, satu instruksi sebaiknya berisi satu tindakan, ditulis dalam kalimat pendek. Untuk jenjang menengah, instruksi dapat digabung selama urutannya tetap terbaca.',
      ],
    },
    {
      title: 'Cara generator LKPD GuruDokAI bekerja',
      paragraphs: [
        'Anda menentukan topik, jenjang, dan jenis aktivitas yang diinginkan, misalnya pengamatan, diskusi kelompok, latihan terbimbing, atau proyek kecil. AI menyusun urutan kegiatan beserta instruksinya, menyiapkan kolom isian atau tabel yang relevan, dan menambahkan pertanyaan pemandu di bagian akhir agar murid menarik kesimpulan sendiri.',
        'Draf juga dilengkapi kunci jawaban atau rambu jawaban untuk pegangan guru. Agar selaras, gunakan topik yang sama dengan <a href="/ai-pembuat-rpp/" class="text-brand-primary hover:underline font-bold">RPP</a> atau <a href="/generator-modul-ajar/" class="text-brand-primary hover:underline font-bold">modul ajar</a> pertemuan tersebut.',
      ],
    },
  ],
  structureHeading: 'Bagian dokumen LKPD',
  structure: [
    { term: 'Identitas', detail: 'Nama murid, kelas, mata pelajaran, dan topik kegiatan.' },
    { term: 'Tujuan kegiatan', detail: 'Ditulis dengan bahasa murid agar mereka tahu apa yang hendak dicapai.' },
    { term: 'Alat & bahan', detail: 'Daftar yang perlu disiapkan bila kegiatan berupa percobaan atau praktik.' },
    { term: 'Langkah kerja', detail: 'Instruksi bernomor yang menyebut tindakan dan hasil yang diharapkan.' },
    { term: 'Kolom hasil kerja', detail: 'Tabel, bagan, atau ruang tulis tempat murid mencatat temuan.' },
    { term: 'Pertanyaan pemandu & simpulan', detail: 'Pertanyaan yang menuntun murid menyimpulkan hasil kerjanya.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Jenjang dan kelas murid',
    'Topik serta tujuan pembelajaran yang ingin didukung',
    'Jenis aktivitas, misalnya pengamatan, diskusi, atau latihan terbimbing',
    'Durasi pengerjaan yang tersedia',
    'Ketersediaan alat dan bahan di sekolah',
  ],
  example: {
    title: 'Contoh penggunaan',
    lines: [
      '<strong>Situasi:</strong> guru IPA kelas VII mengajarkan perubahan wujud zat selama satu jam pelajaran.',
      '<strong>Aktivitas:</strong> murid mengamati es batu yang dibiarkan di ruang terbuka dan mencatat perubahannya setiap lima menit.',
      '<strong>Kolom hasil:</strong> tabel waktu, wujud yang teramati, dan dugaan penyebabnya.',
      '<strong>Pertanyaan pemandu:</strong> pada menit keberapa perubahan paling cepat terjadi, dan mengapa demikian.',
    ],
  },
};

export const modulGuide: TopicGuide = {
  heading: 'Modul Ajar: Komponen, Alur Penyusunan, dan Bedanya dengan RPP',
  lede: 'Modul ajar memuat rencana pembelajaran sekaligus perangkat pendukungnya, sehingga dapat dipakai ulang atau diserahkan kepada guru lain tanpa penjelasan tambahan.',
  sections: [
    {
      title: 'Kapan guru membutuhkan modul ajar, bukan sekadar RPP',
      paragraphs: [
        'RPP cukup ketika guru hanya perlu pegangan untuk pertemuan yang ia ajar sendiri. Modul ajar diperlukan ketika dokumen harus berdiri sendiri: dipakai guru pengganti, dibagikan ke rekan sejawat, atau disimpan sebagai perangkat ajar satu topik untuk tahun berikutnya.',
        'Karena itu modul ajar memuat lebih banyak lampiran. Bahan bacaan, lembar kerja, rubrik penilaian, serta rencana pengayaan dan remedial disatukan sehingga pembacanya tidak perlu mencari berkas lain.',
      ],
    },
    {
      title: 'Menjaga keselarasan antara tujuan, aktivitas, dan asesmen',
      paragraphs: [
        'Modul ajar mudah menjadi tebal tetapi tidak nyambung. Cara menghindarinya adalah menguji tiga bagian secara berpasangan: apakah setiap aktivitas mendukung tujuan tertentu, dan apakah setiap tujuan memiliki asesmen yang mengukurnya. Tujuan yang tidak punya asesmen, atau aktivitas yang tidak menuju tujuan mana pun, sebaiknya dipangkas.',
        'Pemeriksaan sederhana ini biasanya memangkas isi modul, bukan menambahnya, dan justru membuat dokumen lebih mudah dipakai di kelas.',
      ],
    },
    {
      title: 'Cara GuruDokAI menyusun modul ajar',
      paragraphs: [
        'Setelah Anda mengisi jenjang, mata pelajaran, topik, dan alokasi pertemuan, AI menurunkan tujuan pembelajaran, menyusun rangkaian kegiatan per pertemuan, lalu membangun asesmen yang merujuk pada tujuan tersebut. Lampiran seperti bahan bacaan ringkas, LKPD, dan rubrik dibentuk dari topik yang sama agar tidak bertentangan.',
        'Hasilnya berupa satu dokumen yang dapat disunting per bagian. Bila hanya butuh rencana pertemuan, gunakan <a href="/ai-pembuat-rpp/" class="text-brand-primary hover:underline font-bold">generator RPP</a>; bila butuh urutan materi satu fase, mulai dari <a href="/generator-atp/" class="text-brand-primary hover:underline font-bold">ATP</a>.',
      ],
    },
  ],
  structureHeading: 'Komponen modul ajar',
  structure: [
    { term: 'Informasi umum', detail: 'Identitas penyusun, jenjang, fase, alokasi waktu, dan sarana yang dibutuhkan.' },
    { term: 'Kompetensi awal', detail: 'Pengetahuan atau keterampilan yang sebaiknya sudah dimiliki murid sebelum modul dipakai.' },
    { term: 'Tujuan pembelajaran', detail: 'Rumusan kompetensi yang akan dicapai sepanjang modul.' },
    { term: 'Pemahaman bermakna & pemantik', detail: 'Inti gagasan yang ingin melekat serta pertanyaan pembuka tiap pertemuan.' },
    { term: 'Kegiatan pembelajaran', detail: 'Rangkaian pertemuan dengan tahap pembuka, inti, dan penutup.' },
    { term: 'Asesmen', detail: 'Asesmen awal, formatif, dan sumatif beserta rubriknya.' },
    { term: 'Pengayaan & remedial', detail: 'Tindak lanjut bagi murid yang telah tuntas maupun yang membutuhkan penguatan.' },
    { term: 'Lampiran', detail: 'Bahan bacaan, LKPD, glosarium, dan daftar sumber rujukan.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Jenjang, kelas, dan fase murid',
    'Mata pelajaran dan topik modul',
    'Jumlah pertemuan serta alokasi jam pelajarannya',
    'Buku teks atau sumber rujukan yang dipakai sekolah',
    'Sarana yang tersedia, misalnya proyektor atau alat praktik',
  ],
  example: {
    title: 'Contoh penggunaan',
    lines: [
      '<strong>Situasi:</strong> guru Bahasa Indonesia fase D menyiapkan modul teks prosedur untuk tiga pertemuan.',
      '<strong>Pertemuan 1:</strong> mengenali ciri dan struktur teks prosedur dari contoh nyata.',
      '<strong>Pertemuan 2:</strong> menulis draf prosedur sederhana secara berpasangan.',
      '<strong>Pertemuan 3:</strong> menyunting dan mempraktikkan prosedur milik kelompok lain.',
      '<strong>Lampiran:</strong> LKPD penyuntingan, rubrik penulisan, serta pengayaan berupa prosedur bergambar.',
    ],
  },
};

export const atpGuide: TopicGuide = {
  heading: 'ATP: Mengurutkan Tujuan Pembelajaran Satu Fase Secara Logis',
  lede: 'ATP (Alur Tujuan Pembelajaran) menyusun tujuan pembelajaran menjadi urutan yang masuk akal sepanjang satu fase, lengkap dengan perkiraan alokasi waktunya.',
  sections: [
    {
      title: 'Hubungan antara CP, TP, dan ATP',
      paragraphs: [
        'Capaian pembelajaran menyatakan kompetensi di akhir fase dalam bentuk paragraf. Tujuan pembelajaran memecah capaian itu menjadi satuan yang bisa diajarkan dan diukur. ATP mengambil kumpulan tujuan tersebut lalu menentukan urutannya: mana yang menjadi prasyarat, mana yang menyusul, dan berapa jam pelajaran yang wajar untuk masing-masing.',
        'Dengan kata lain, ATP adalah peta perjalanan satu fase. Tanpa peta ini, guru mudah mengajarkan materi yang menuntut prasyarat yang belum pernah dibahas.',
      ],
    },
    {
      title: 'Prinsip pengurutan yang dipakai',
      paragraphs: [
        'Urutan disusun dari prasyarat ke turunannya, dari konkret ke abstrak, serta dari sederhana ke kompleks. Ketika dua tujuan tidak saling bergantung, urutannya boleh ditentukan berdasarkan pertimbangan praktis seperti ketersediaan alat atau kalender sekolah.',
        'Alokasi waktu ditentukan dari tingkat kesulitan dan banyaknya latihan yang dibutuhkan, bukan dibagi rata. Tujuan yang menuntut keterampilan baru biasanya perlu jam lebih banyak daripada tujuan yang bersifat pengenalan.',
      ],
    },
    {
      title: 'Cara GuruDokAI menyusun ATP',
      paragraphs: [
        'Anda menempelkan teks capaian pembelajaran per elemen dan menyebutkan fase serta jumlah pekan efektif. AI memecah capaian menjadi tujuan pembelajaran, memberi kode agar mudah dirujuk, menyusun urutannya berdasarkan prasyarat, lalu membagi alokasi jam pelajaran ke sepanjang fase.',
        'Hasilnya berupa tabel yang bisa Anda geser urutannya sesuai kondisi sekolah. Setelah alur terbentuk, tiap baris dapat dikembangkan menjadi <a href="/generator-modul-ajar/" class="text-brand-primary hover:underline font-bold">modul ajar</a>, dan rumusan tujuannya dapat dirapikan lewat <a href="/generator-tp/" class="text-brand-primary hover:underline font-bold">generator TP</a>.',
      ],
    },
  ],
  structureHeading: 'Isi tabel ATP',
  structure: [
    { term: 'Elemen CP', detail: 'Elemen capaian pembelajaran yang menjadi sumber tujuan tersebut.' },
    { term: 'Kode TP', detail: 'Penanda singkat agar tujuan mudah dirujuk di modul ajar dan asesmen.' },
    { term: 'Rumusan tujuan', detail: 'Kalimat tujuan pembelajaran yang akan dicapai murid.' },
    { term: 'Urutan', detail: 'Posisi tujuan dalam alur, ditentukan oleh hubungan prasyarat.' },
    { term: 'Alokasi waktu', detail: 'Perkiraan jam pelajaran yang dibutuhkan untuk tiap tujuan.' },
    { term: 'Profil & materi terkait', detail: 'Dimensi karakter serta pokok materi yang menyertai tujuan tersebut.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Teks capaian pembelajaran per elemen',
    'Fase dan kelas yang dituju',
    'Jumlah pekan efektif dan jam pelajaran per pekan',
    'Materi yang wajib ada menurut kebijakan sekolah, bila ada',
  ],
  example: {
    title: 'Contoh alur singkat',
    lines: [
      '<strong>Mata pelajaran:</strong> Matematika fase B, elemen bilangan.',
      '<strong>TP-1 (6 JP):</strong> membaca dan menulis bilangan cacah sampai 10.000.',
      '<strong>TP-2 (8 JP):</strong> membandingkan dan mengurutkan bilangan cacah, memanfaatkan TP-1 sebagai prasyarat.',
      '<strong>TP-3 (10 JP):</strong> menyelesaikan penjumlahan dan pengurangan dengan teknik menyimpan.',
      '<strong>Catatan:</strong> TP-3 ditempatkan setelah murid lancar membandingkan nilai tempat.',
    ],
  },
};

export const tpGuide: TopicGuide = {
  heading: 'Tujuan Pembelajaran: Cara Merumuskannya dari Capaian Pembelajaran',
  lede: 'Tujuan pembelajaran yang dirumuskan dengan tepat membuat kegiatan dan penilaian mudah disusun. Bagian ini membahas cara menurunkannya dari CP beserta contoh rumusannya.',
  sections: [
    {
      title: 'Menurunkan TP dari teks capaian pembelajaran',
      paragraphs: [
        'Capaian pembelajaran ditulis sebagai paragraf yang mencakup kompetensi satu fase, biasanya untuk dua tahun. Langkah pertama adalah menandai kata kerja dan objek kompetensi di dalamnya, lalu memisahkan mana yang merupakan kemampuan berbeda, bukan sekadar pengulangan kalimat.',
        'Setiap kemampuan itu kemudian ditulis ulang sebagai satu tujuan yang bisa diajarkan dalam rentang waktu wajar. Satu paragraf capaian umumnya menghasilkan beberapa tujuan, bukan satu tujuan panjang yang memuat semuanya.',
      ],
    },
    {
      title: 'Ciri rumusan tujuan yang bisa diukur',
      paragraphs: [
        'Rumusan yang baik memuat kata kerja yang dapat diamati, objek kompetensi yang jelas, dan bila perlu konteks atau tingkat ketercapaiannya. "Memahami pecahan" sulit diukur karena memahami tidak terlihat; "membandingkan dua pecahan berpenyebut berbeda menggunakan garis bilangan" dapat langsung diamati dan dinilai.',
        'Hindari menumpuk beberapa kompetensi dalam satu kalimat. Tujuan yang memuat tiga kata kerja sekaligus menyulitkan penilaian karena murid bisa menguasai satu bagian dan gagal pada bagian lain, sementara nilainya hanya satu.',
      ],
    },
    {
      title: 'Cara generator TP GuruDokAI bekerja',
      paragraphs: [
        'Anda menempelkan teks capaian pembelajaran dan memilih fase. AI memecahnya menjadi beberapa tujuan pembelajaran, memilih kata kerja operasional yang sesuai dengan tingkat berpikir yang dituju, mengelompokkannya per elemen, dan memberi kode agar mudah dirujuk.',
        'Hasilnya dapat langsung disunting bila ada istilah khas sekolah yang ingin dipakai. Setelah daftar tujuan siap, lanjutkan ke <a href="/generator-atp/" class="text-brand-primary hover:underline font-bold">generator ATP</a> untuk mengurutkannya, atau ke <a href="/generator-kktp/" class="text-brand-primary hover:underline font-bold">KKTP</a> untuk menentukan kriteria ketercapaiannya.',
      ],
    },
  ],
  structureHeading: 'Unsur rumusan TP',
  structure: [
    { term: 'Kata kerja operasional', detail: 'Menyatakan tindakan yang dapat diamati, misalnya mengidentifikasi, membandingkan, atau merancang.' },
    { term: 'Objek kompetensi', detail: 'Materi atau keterampilan yang dikenai tindakan tersebut.' },
    { term: 'Konteks', detail: 'Situasi atau media yang dipakai, bila memengaruhi tingkat kesulitan.' },
    { term: 'Tingkat berpikir', detail: 'Level kognitif yang dituju, dari mengingat sampai mencipta.' },
    { term: 'Kode TP', detail: 'Penanda singkat agar tujuan mudah dirujuk pada ATP, modul ajar, dan asesmen.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Teks capaian pembelajaran yang akan diturunkan',
    'Fase dan kelas murid',
    'Elemen yang ingin diproses, bila hanya sebagian',
    'Tingkat berpikir yang ditekankan, bila ada preferensi',
  ],
  example: {
    title: 'Contoh formulasi',
    lines: [
      '<strong>Potongan CP:</strong> murid mampu memahami teks deskripsi dan menyampaikan kembali isinya.',
      '<strong>TP-1:</strong> mengidentifikasi ciri teks deskripsi pada bacaan yang disediakan.',
      '<strong>TP-2:</strong> menjelaskan isi teks deskripsi dengan bahasa sendiri secara lisan.',
      '<strong>TP-3:</strong> menulis satu paragraf deskripsi tentang benda di sekitar murid.',
      '<strong>Catatan:</strong> ketiganya dipisah agar penilaiannya tidak tercampur dalam satu skor.',
    ],
  },
};

export const kktpGuide: TopicGuide = {
  heading: 'KKTP: Menentukan Kriteria Ketercapaian Tujuan Pembelajaran',
  lede: 'KKTP menjawab satu pertanyaan praktis: seperti apa bukti bahwa seorang murid sudah mencapai tujuan pembelajaran tertentu, dan seperti apa yang belum.',
  sections: [
    {
      title: 'Kriteria ketercapaian bukan sekadar angka ambang',
      paragraphs: [
        'Menetapkan angka minimal saja tidak memberi tahu guru maupun murid apa yang perlu diperbaiki. KKTP menuntut deskripsi: kemampuan apa yang terlihat pada murid yang sudah tuntas, dan bagian mana yang masih kurang pada murid yang belum tuntas.',
        'Deskripsi inilah yang kemudian berguna saat menyusun umpan balik dan merancang tindak lanjut. Nilai angka tetap dipakai untuk pelaporan, tetapi keputusan pembelajaran diambil dari deskripsinya.',
      ],
    },
    {
      title: 'Tiga pendekatan yang umum dipakai',
      paragraphs: [
        'Pendekatan pertama adalah deskripsi kriteria: guru menuliskan daftar bukti yang harus muncul pada pekerjaan murid, lalu menandai mana yang terpenuhi. Pendekatan kedua adalah rubrik bertingkat, yang membagi kualitas pekerjaan menjadi beberapa taraf dari belum berkembang sampai mahir. Pendekatan ketiga adalah interval nilai, yang mengelompokkan rentang skor beserta tindak lanjutnya.',
        'Pemilihannya mengikuti bentuk tugas. Produk atau unjuk kerja lebih cocok dinilai dengan rubrik bertingkat, sedangkan tes tertulis dengan jawaban pasti lebih praktis memakai interval nilai.',
      ],
    },
    {
      title: 'Menyusun KKTP yang selaras dengan tujuan',
      paragraphs: [
        'Kriteria harus diturunkan dari rumusan tujuan, bukan dari soal yang terlanjur dibuat. Jika tujuan menyebut kemampuan membandingkan, maka kriterianya harus memuat bukti membandingkan, bukan sekadar menyebutkan definisi.',
        'Di GuruDokAI, Anda memasukkan tujuan pembelajaran dan bentuk asesmennya, lalu AI menyusun kriteria beserta deskripsi tiap taraf dan saran tindak lanjut untuk murid yang belum mencapainya. Rumusan tujuannya sendiri bisa disiapkan lebih dulu lewat <a href="/generator-tp/" class="text-brand-primary hover:underline font-bold">generator TP</a>.',
      ],
    },
  ],
  structureHeading: 'Isi dokumen KKTP',
  structure: [
    { term: 'Tujuan pembelajaran acuan', detail: 'Tujuan yang ketercapaiannya hendak dinilai.' },
    { term: 'Bentuk asesmen', detail: 'Tes tertulis, unjuk kerja, produk, atau proyek yang menjadi sumber bukti.' },
    { term: 'Indikator ketercapaian', detail: 'Daftar bukti konkret yang harus muncul pada pekerjaan murid.' },
    { term: 'Taraf pencapaian', detail: 'Deskripsi kualitas dari belum berkembang sampai mahir, bila memakai rubrik.' },
    { term: 'Interval nilai', detail: 'Rentang skor beserta maknanya, bila memakai pendekatan interval.' },
    { term: 'Tindak lanjut', detail: 'Rencana remedial atau pengayaan untuk tiap taraf pencapaian.' },
  ],
  inputsHeading: 'Yang perlu Anda masukkan',
  inputs: [
    'Tujuan pembelajaran yang akan dinilai',
    'Bentuk tugas atau asesmen yang dipakai',
    'Pendekatan yang diinginkan: deskripsi kriteria, rubrik, atau interval nilai',
    'Jumlah taraf pencapaian yang dipakai sekolah',
  ],
  example: {
    title: 'Contoh penyusunan',
    lines: [
      '<strong>Tujuan:</strong> menulis satu paragraf deskripsi tentang benda di sekitar murid.',
      '<strong>Indikator:</strong> memuat ciri fisik benda, memakai kalimat lengkap, dan runtut dari umum ke khusus.',
      '<strong>Mahir:</strong> ketiga indikator terpenuhi dan pilihan katanya bervariasi.',
      '<strong>Berkembang:</strong> dua indikator terpenuhi, urutan penjelasan masih meloncat.',
      '<strong>Tindak lanjut:</strong> murid pada taraf awal berlatih mendeskripsikan satu benda secara lisan sebelum menulis.',
    ],
  },
};

export const kbcGuide: TopicGuide = {
  heading: 'Kurikulum Berbasis Cinta: Prinsip dan Penerapannya di Kelas',
  lede: 'Kurikulum Berbasis Cinta (KBC) adalah pendekatan yang dikembangkan di lingkungan madrasah Kementerian Agama, menekankan relasi kasih sayang sebagai dasar proses belajar.',
  sections: [
    {
      title: 'Cinta sebagai cara memperlakukan murid, bukan sebagai mata pelajaran',
      paragraphs: [
        'KBC tidak menambah materi baru ke dalam jadwal. Yang diubah adalah cara pembelajaran dijalankan: bagaimana guru menegur, bagaimana kesalahan murid ditanggapi, dan bagaimana murid diajak memperlakukan sesamanya. Materi pelajaran tetap sama, suasananya yang dibangun berbeda.',
        'Penerapannya karena itu paling terlihat pada hal-hal kecil yang berulang. Cara guru menyapa di awal pelajaran, cara murid yang lambat mengerjakan tugas diperlakukan, dan cara konflik antarteman diselesaikan lebih menentukan daripada slogan yang dipasang di dinding kelas.',
      ],
    },
    {
      title: 'Menurunkan prinsip menjadi keputusan mengajar',
      paragraphs: [
        'Tiga arah penerapan yang paling mudah dipegang adalah cinta kepada Allah dan ajaran-Nya, cinta kepada sesama manusia, dan cinta kepada alam sekitar. Ketiganya bisa disisipkan tanpa mengubah tujuan pembelajaran: pilih konteks soal yang menyentuh kepedulian, atur kerja kelompok agar murid saling membantu, dan jadikan lingkungan madrasah sebagai bahan kajian nyata.',
        'Penilaian sikap pun sebaiknya berbasis pengamatan perilaku yang disepakati bersama murid, bukan penilaian kesan. Dengan begitu murid tahu perilaku apa yang diharapkan dan bisa memperbaikinya.',
      ],
    },
    {
      title: 'Menuangkannya ke dalam perangkat ajar',
      paragraphs: [
        'Pada dokumen, KBC paling terasa di bagian kegiatan pembelajaran dan penilaian sikap. GuruDokAI dapat menyusun draf RPP, RPM, atau modul ajar dengan penekanan tersebut: kegiatan dirancang kolaboratif, pertanyaan pemantik diarahkan pada kepedulian, dan rubrik sikap ditulis dalam bentuk perilaku yang dapat diamati.',
        'Latar dan prinsip dasarnya dibahas lebih lengkap di <a href="/knowledge/apa-itu-kbc-kurikulum-berbasis-cinta/" class="text-brand-primary hover:underline font-bold">pengantar Kurikulum Berbasis Cinta</a>. Untuk dokumennya, lanjutkan ke <a href="/generator-modul-ajar/" class="text-brand-primary hover:underline font-bold">generator modul ajar</a>.',
      ],
    },
  ],
  structureHeading: 'Titik penerapan di perangkat ajar',
  structure: [
    { term: 'Pertanyaan pemantik', detail: 'Diarahkan pada kepedulian terhadap sesama dan lingkungan sekitar madrasah.' },
    { term: 'Kegiatan pembuka', detail: 'Ruang menyapa, berdoa, dan menanyakan kabar murid secara bermakna.' },
    { term: 'Pengaturan kerja kelompok', detail: 'Peran dibagi agar murid yang lebih cepat membantu yang masih tertinggal.' },
    { term: 'Konteks contoh & soal', detail: 'Mengambil situasi nyata di madrasah dan lingkungan tempat tinggal murid.' },
    { term: 'Umpan balik', detail: 'Disampaikan sebagai perbaikan yang bisa dilakukan, bukan sebagai penghakiman.' },
    { term: 'Penilaian sikap', detail: 'Berbasis perilaku yang teramati dan disepakati bersama murid.' },
  ],
  inputsHeading: 'Yang perlu Anda siapkan',
  inputs: [
    'Jenjang madrasah dan mata pelajaran',
    'Topik pertemuan yang akan disusun',
    'Nilai atau sikap yang ingin ditekankan pada topik tersebut',
    'Kebiasaan baik yang sudah berjalan di madrasah dan ingin diperkuat',
  ],
  example: {
    title: 'Contoh penerapan pada satu pertemuan',
    lines: [
      '<strong>Mata pelajaran:</strong> Matematika MI kelas V, topik pengumpulan dan penyajian data.',
      '<strong>Konteks:</strong> murid mendata jumlah sampah yang dibuang di halaman madrasah selama tiga hari.',
      '<strong>Kerja kelompok:</strong> setiap kelompok memastikan seluruh anggotanya bisa membaca diagram yang dibuat.',
      '<strong>Penilaian sikap:</strong> pengamatan pada kesediaan membantu teman dan kejujuran dalam mencatat data.',
      '<strong>Penutup:</strong> murid menyepakati satu kebiasaan kecil untuk menjaga kebersihan madrasah.',
    ],
  },
};
