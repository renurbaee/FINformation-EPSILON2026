/**
 * FIN-formation Data Repository
 * Sumber Data Resmi:
 * 1. OJK - Survei Nasional Literasi dan Inklusi Keuangan (SNLIK) 2026
 * 2. OJK - Statistik Fintech Lending (LPBBTI) Desember 2025
 * 3. BPS - Proyeksi Kependudukan Indonesia 2025
 * 4. Kemenkominfo - Indeks Masyarakat Digital Indonesia (IMDI) 2025
 * 5. Bank Indonesia - Statistik Pembayaran Digital & Merchant QRIS 2026
 */

const NATIONAL_DATA = {
  inklusi: 93.61,
  literasi: 69.57,
  flgi_gap: 24.04,
  total_pinjaman_miliar: 102148.9, // Rp 102,15 Triliun
  total_rekening_aktif: 27958432,
  total_merchant_qris_ribu: 41285, // 41,28 Juta Merchant
  twp90_nasional: 3.12,
  alokasi_fintech: {
    konsumtif: 77.88,
    produktif: 22.12
  },
  snlik_dimensi: [
    { dimensi: "Pengetahuan", skor: 97.24, desc: "Mengenal jenis & nama produk keuangan formal" },
    { dimensi: "Keyakinan", skor: 90.06, desc: "Percaya pada institusi dan keamanan transaksi" },
    { dimensi: "Keterampilan", skor: 84.06, desc: "Mampu mengoperasikan aplikasi & pembayaran digital" },
    { dimensi: "Sikap", skor: 82.03, desc: "Kesadaran akan pentingnya menabung & investasi" },
    { dimensi: "Perilaku", skor: 80.43, desc: "Disiplin finansial nyata & pengendalian utang" }
  ],
  qris_growth: [
    { periode: "2023-Q1", volume: 0.125 },
    { periode: "2024-Q1", volume: 0.374 },
    { periode: "2025-Q1", volume: 1.021 },
    { periode: "2026-Q1", volume: 2.118 }
  ]
};

const CLUSTERS_CONFIG = {
  0: {
    id: 0,
    name: "Cluster 1",
    badgeLabel: "Cluster 1",
    badgeClass: "badge-c1",
    color: "#df3522",
    title: "Risiko Kredit Macet Tinggi (Outlier)",
    shortDesc: "dikelompokkan ke dalam <strong>Klaster 1</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, namun memiliki risiko kredit bermasalah (TWP90) yang tinggi di atas ambang batas aman.",
    characteristics: "Memiliki penetrasi peminjam dan merchant digital yang tinggi, namun diiringi rasio kredit macet (TWP90) yang melewati ambang batas aman 5%."
  },
  1: {
    id: 1,
    name: "Cluster 2",
    badgeLabel: "Cluster 2",
    badgeClass: "badge-c2",
    color: "#7b8fa1",
    title: "Wilayah Tertinggal & Akses Terbatas",
    shortDesc: "dikelompokkan ke dalam <strong>Klaster 2</strong>, yaitu wilayah dengan penetrasi layanan keuangan digital dan tingkat literasi yang masih dalam tahap berkembang.",
    characteristics: "Penetrasi akses keuangan formal dan kanal digital masih terbatas, dengan tantangan pada pemerataan infrastruktur dan edukasi finansial dasar."
  },
  2: {
    id: 2,
    name: "Cluster 3",
    badgeLabel: "Cluster 3",
    badgeClass: "badge-c3",
    color: "#f09228",
    title: "Aktivitas Digital Sedang & Terkendali (Moderat)",
    shortDesc: "dikelompokkan ke dalam <strong>Klaster 3</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi kategori sedang, serta rasio kredit bermasalah yang tergolong aman.",
    characteristics: "Pertumbuhan merchant dan peminjam berada pada skala sedang dengan tingkat literasi moderat serta rasio kredit macet (TWP90) yang terkendali."
  },
  3: {
    id: 3,
    name: "Cluster 4",
    badgeLabel: "Cluster 4",
    badgeClass: "badge-c4",
    color: "#2563eb",
    title: "Ekosistem Digital Unggul & Stabil (Bagus)",
    shortDesc: "dikelompokkan ke dalam <strong>Klaster 4</strong>, yaitu wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    characteristics: "Tingkat inklusi, literasi, dan transaksi digital berada pada kategori tinggi dengan rasio kredit macet (TWP90) yang tetap berada di bawah ambang batas aman."
  }
};

const NATIONAL_AVERAGES = {
  rekeningPer1000: 98.42,
  merchantPer1000: 145.20,
  twp90: 3.12,
  literasi: 69.57,
  inklusi: 93.61,
  skorImdi: 43.18,
  thresholds: {
    twp90_danger: 5.0,
    dsr_max: 30.0
  }
};

const PROVINCES_DATA = [
  {
    id: "dki-jakarta",
    nama: "DKI Jakarta",
    cluster: 0,
    clusterBadge: "Cluster 1",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, namun memiliki risiko kredit bermasalah (TWP90) yang tinggi di atas ambang batas aman.",
    rekeningPer1000: 264.32,
    rekeningKet: "Aktivitas peminjam aktif tergolong masif",
    merchantPer1000: 527.81,
    merchantKet: "Ekosistem usaha digital tergolong prima",
    twp90: 11.58,
    twp90Ket: "Tingkat Kredit Macet tergolong kritis (>5%)",
    literasi: 84.01,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 99.74,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 53.73,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 2822388,
    outstandingMiliar: 15622.55,
    totalMerchantRibu: 5636,
    pendudukRibu: 10678,
    heroImage: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Provinsi DKI Jakarta mencatat ekosistem digital paling matang dengan Inklusi 99,74% dan Literasi 84,01%. Namun, wilayah ini menjadi outlier berisiko tinggi karena rasio kredit macet (TWP90) menembus 11,58% (jauh di atas ambang batas aman 5%).",
    akarMasalah: "Pemanfaatan pinjaman digital untuk kebutuhan konsumtif yang belum diimbangi dengan alokasi batas utang aman.",
    rekomendasi: "Batasi total cicilan pinjaman maksimal 30% dari penghasilan bulanan dan hindari skema gali lubang tutup lubang.",
    rekomendasiBadge: "NZ"
  },
  {
    id: "jawa-barat",
    nama: "Jawa Barat",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 140.91,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 193.01,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 3.29,
    twp90Ket: "Tingkat Kredit Macet tergolong waspada (3-5%)",
    literasi: 67.14,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 95.76,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 52.37,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 7152695,
    outstandingMiliar: 23938.83,
    totalMerchantRibu: 9797,
    pendudukRibu: 50759,
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Barat merupakan pusat pasar fintech lending nasional dengan outstanding mencapai Rp23,94 Triliun. Rasio TWP90 berada di 3,29%, namun kesenjangan literasi (67,14%) dibanding inklusi (95,76%) menuntut edukasi masif di kawasan suburban.",
    akarMasalah: "Ketergantungan pada fasilitas pinjaman jangka pendek untuk kebutuhan mendesak tanpa ketersediaan tabungan darurat.",
    rekomendasi: "Bangun pos dana darurat minimal 3 bulan pengeluaran rutin sebelum menggunakan fasilitas pinjaman.",
    rekomendasiBadge: "TIPS"
  },
  {
    id: "jawa-timur",
    nama: "Jawa Timur",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 75.47,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 131.03,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 5.02,
    twp90Ket: "Tingkat Kredit Macet tergolong kritis (>5%)",
    literasi: 72.07,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 91.88,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 49.87,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 3176585,
    outstandingMiliar: 11423.26,
    totalMerchantRibu: 5515,
    pendudukRibu: 42089.3,
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Timur mencatat outstanding Rp11,42 Triliun dengan TWP90 di level 5,02%. Literasi finansial yang cukup tinggi (72,07%) perlu terus diarahkan pada pemilahan utang produktif bagi UMKM.",
    akarMasalah: "Kebutuhan permodalan operasional yang belum diimbangi pemisahan arus kas pribadi dan modal kerja.",
    rekomendasi: "Gunakan pinjaman digital secara terarah khusus untuk modal usaha produktif dengan perputaran kas jelas.",
    rekomendasiBadge: "SOLUSI"
  },
  {
    id: "jawa-tengah",
    nama: "Jawa Tengah",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 71.28,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 118.95,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 2.81,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 72.83,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 95.59,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 53.75,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 2725309,
    outstandingMiliar: 8017.09,
    totalMerchantRibu: 4548,
    pendudukRibu: 38233.9,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Tengah menunjukkan performa finansial yang seimbang dengan TWP90 hanya 2,81% dan literasi 72,83%. Penetrasi 4,54 Juta merchant QRIS menjadi motor penggerak ekonomi kerakyatan yang solid.",
    akarMasalah: "Risiko penawaran produk keuangan atau pinjaman ilegal tanpa legalitas resmi dari regulator.",
    rekomendasi: "Terapkan prinsip 2L (Legal dan Logis) sebelum menggunakan produk keuangan atau investasi apapun.",
    rekomendasiBadge: "EDUKASI"
  },
  {
    id: "di-yogyakarta",
    nama: "DI Yogyakarta",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 106.65,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 289.30,
    merchantKet: "Ekosistem usaha digital tergolong prima",
    twp90: 2.85,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 76.44,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 98.74,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 52.93,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 403289,
    outstandingMiliar: 1363.58,
    totalMerchantRibu: 1094,
    pendudukRibu: 3781.5,
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    insightBox: "DI Yogyakarta memiliki inklusi 98,74% dan literasi 76,44%. Densitas merchant QRIS mencapai 289,3 per 1.000 penduduk, didukung oleh komunitas akademis dan pariwisata yang sadar finansial.",
    akarMasalah: "Pemanfaatan fasilitas pinjaman konsumtif yang belum diimbangi dengan perencanaan anggaran dan pemahaman riwayat kredit (SLIK OJK).",
    rekomendasi: "Jaga rekam jejak kredit dengan selalu membayar tagihan tepat waktu serta membatasi pinjaman sesuai kapasitas bayar bulanan.",
    rekomendasiBadge: "PENTING"
  },
  {
    id: "banten",
    nama: "Banten",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 147.04,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 217.67,
    merchantKet: "Ekosistem usaha digital tergolong prima",
    twp90: 2.43,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 58.46,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 91.07,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 48.16,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 1843509,
    outstandingMiliar: 7197.10,
    totalMerchantRibu: 2729,
    pendudukRibu: 12537.4,
    heroImage: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Banten memiliki gap inklusi-literasi yang lebar (Inklusi 91,07% vs Literasi 58,46%). Kesenjangan antara Tangerang Raya dengan Banten Selatan membutuhkan pemerataan literasi keuangan terstruktur.",
    akarMasalah: "Pemanfaatan pinjaman digital yang belum diimbangi pemahaman mengenai perhitungan bunga harian dan denda keterlambatan.",
    rekomendasi: "Pastikan total seluruh kewajiban cicilan tidak melebihi batas 30% dari penghasilan bersih bulanan.",
    rekomendasiBadge: "SARAN"
  },
  {
    id: "bali",
    nama: "Bali",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 101.41,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 248.36,
    merchantKet: "Ekosistem usaha digital tergolong prima",
    twp90: 2.13,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 78.77,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 96.24,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 50.97,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 452439,
    outstandingMiliar: 2104.23,
    totalMerchantRibu: 1108,
    pendudukRibu: 4461.3,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Bali mencatat kinerja finansial teladan dengan literasi 78,77% dan TWP90 rendah 2,13%. Ekosistem pariwisata berhasil mengadopsi QRIS secara inklusif tanpa memicu ledakan kredit macet.",
    akarMasalah: "Fluktuasi arus kas musiman pada sektor usaha yang membutuhkan pengelolaan likuiditas cadangan secara teratur.",
    rekomendasi: "Siapkan pos dana cadangan operasional minimal 3 hingga 6 bulan untuk mengantisipasi penurunan perputaran kas musiman.",
    rekomendasiBadge: "BEST"
  },
  {
    id: "sumatera-utara",
    nama: "Sumatera Utara",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi kategori sedang, serta rasio kredit bermasalah yang tergolong aman.",
    rekeningPer1000: 67.60,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 109.72,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 1.70,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 71.57,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 92.01,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 44.69,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 1067071,
    outstandingMiliar: 3564.25,
    totalMerchantRibu: 1732,
    pendudukRibu: 15785.8,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sumatera Utara mencatat outstanding pinjol Rp3,56 Triliun dengan TWP90 rendah 1,70%. Pertumbuhan merchant QRIS 1,73 Juta menjadi bukti akselerasi digital yang tetap menjaga kehati-hatian.",
    akarMasalah: "Risiko kejahatan rekayasa sosial (social engineering) dan penipuan digital yang mengincar pengguna layanan perbankan.",
    rekomendasi: "Jaga kerahasiaan data perbankan dan jangan pernah membagikan kode OTP atau PIN kepada pihak manapun.",
    rekomendasiBadge: "SECURITY"
  },
  {
    id: "sumatera-barat",
    nama: "Sumatera Barat",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 68.99,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 123.09,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 1.88,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 76.65,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 95.37,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 54.15,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 408031,
    outstandingMiliar: 1570.17,
    totalMerchantRibu: 728,
    pendudukRibu: 5914.3,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sumatera Barat memiliki literasi keuangan 76,65% dan TWP90 1,88%. Nilai kearifan lokal dalam berdagang berkontribusi nyata pada kebiasaan mengelola utang secara bertanggung jawab.",
    akarMasalah: "Kebutuhan diversifikasi instrumen keuangan produktif yang aman dan berizin resmi untuk pengembangan modal usaha.",
    rekomendasi: "Manfaatkan instrumen keuangan resmi yang terdaftar dan diawasi regulator untuk alokasi dana jangka menengah-panjang.",
    rekomendasiBadge: "GROWTH"
  },
  {
    id: "aceh",
    nama: "Aceh",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi kategori sedang, serta rasio kredit bermasalah yang tergolong aman.",
    rekeningPer1000: 16.28,
    rekeningKet: "Aktivitas peminjam aktif masih terbatas",
    merchantPer1000: 49.24,
    merchantKet: "Ekosistem usaha digital masih bertumbuh",
    twp90: 0.90,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 66.33,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 96.43,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 47.69,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 91587,
    outstandingMiliar: 190.06,
    totalMerchantRibu: 277,
    pendudukRibu: 5626,
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Aceh mencatatkan TWP90 terendah di Sumatera (0,90%) dengan inklusi mencapai 96,43%. Penerapan Qanun Lembaga Keuangan Syariah membentuk budaya keuangan yang prudent dan minim spekulasi.",
    akarMasalah: "Perlunya penguatan edukasi pemanfaatan produk pembiayaan syariah legal berizin OJK untuk kebutuhan modal usaha.",
    rekomendasi: "Prioritaskan produk pembiayaan resmi yang transparan dengan skema akad yang jelas dan sesuai kapasitas finansial.",
    rekomendasiBadge: "SYARIAH"
  },
  {
    id: "kalimantan-timur",
    nama: "Kalimantan Timur",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 110.30,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 195.66,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 1.63,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 73.12,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 96.31,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 50.80,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 470731,
    outstandingMiliar: 1576.94,
    totalMerchantRibu: 835,
    pendudukRibu: 4267.6,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kalimantan Timur memiliki profil keuangan prima (Literasi 73,12%, TWP90 1,63%). Pertumbuhan ekonomi kawasan IKN mendorong adopsi teknologi finansial yang tetap berorientasi pada produktivitas.",
    akarMasalah: "Kebutuhan perencanaan finansial jangka panjang dalam mengantisipasi percepatan pertumbuhan ekonomi wilayah.",
    rekomendasi: "Alokasikan sebagian penghasilan secara konsisten pada instrumen investasi resmi dan pembentukan dana darurat.",
    rekomendasiBadge: "IKN HUB"
  },
  {
    id: "sulawesi-selatan",
    nama: "Sulawesi Selatan",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 65.40,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 145.66,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 1.67,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 61.03,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 94.27,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 51.42,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 625413,
    outstandingMiliar: 2394.11,
    totalMerchantRibu: 1393,
    pendudukRibu: 9563.1,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sulawesi Selatan memimpin perputaran ekonomi Indonesia Timur dengan outstanding Rp2,39 Triliun dan TWP90 terjaga di 1,67%. Peningkatan literasi dari 61,03% akan memperkokoh ketahanan finansial rumah tangga.",
    akarMasalah: "Beban pengeluaran sosial non-rutin yang sering kali dibiayai melalui pinjaman jangka pendek.",
    rekomendasi: "Rencanakan pos anggaran tabungan khusus untuk biaya sosial tanpa mengorbankan pos kebutuhan hidup pokok.",
    rekomendasiBadge: "FIN-PLAN"
  },
  {
    id: "papua-pegunungan",
    nama: "Papua Pegunungan",
    cluster: 1,
    clusterBadge: "Cluster 2",
    clusterDesc: "Wilayah dengan penetrasi layanan keuangan digital dan tingkat literasi yang masih dalam tahap berkembang.",
    rekeningPer1000: 1.78,
    rekeningKet: "Aktivitas peminjam aktif masih terbatas",
    merchantPer1000: 10.10,
    merchantKet: "Ekosistem usaha digital masih bertumbuh",
    twp90: 0.83,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 17.55,
    literasiKet: "Pemahaman produk keuangan masih berkembang",
    inklusi: 71.38,
    inklusiKet: "Akses produk keuangan masih terbatas",
    skorImdi: 36.72,
    imdiKet: "Keterampilan digital masih perlu ditingkatkan",
    totalRekening: 2642,
    outstandingMiliar: 6.74,
    totalMerchantRibu: 15,
    pendudukRibu: 1484.9,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Papua Pegunungan berada di Cluster 4 (Lagging Frontier) dengan literasi 17,55%. Keterbatasan jaringan internet dan fasilitas perbankan fisik menjadi faktor utama tertinggalnya penetrasi ekosistem digital.",
    akarMasalah: "Keterbatasan infrastruktur fisik perbankan dan akses jaringan digital untuk layanan keuangan formal.",
    rekomendasi: "Tingkatkan pemanfaatan agen perbankan resmi dan pencatatan transaksi keuangan dasar.",
    rekomendasiBadge: "FRONTIER"
  },
  {
    id: "maluku-utara",
    nama: "Maluku Utara",
    cluster: 1,
    clusterBadge: "Cluster 2",
    clusterDesc: "Wilayah dengan penetrasi layanan keuangan digital dan tingkat literasi yang masih dalam tahap berkembang.",
    rekeningPer1000: 43.27,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 96.08,
    merchantKet: "Ekosistem usaha digital masih bertumbuh",
    twp90: 1.25,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 48.65,
    literasiKet: "Pemahaman produk keuangan masih berkembang",
    inklusi: 77.18,
    inklusiKet: "Akses produk keuangan masih terbatas",
    skorImdi: 46.35,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 59441,
    outstandingMiliar: 312.09,
    totalMerchantRibu: 132,
    pendudukRibu: 1373.8,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Maluku Utara memiliki tingkat literasi 48,65% dan inklusi 77,18%. Pertumbuhan ekonomi berbasis industri smelter perlu diimbangi dengan literasi keuangan bagi para tenaga kerja lokal.",
    akarMasalah: "Pertumbuhan aktivitas perputaran ekonomi yang perlu diimbangi dengan pemahaman pengelolaan tabungan dan investasi aman.",
    rekomendasi: "Sisihkan sebagian penghasilan secara konsisten ke tabungan berjangka sebelum dialokasikan untuk kebutuhan lain.",
    rekomendasiBadge: "SAVING"
  },
  {
    id: "nusa-tenggara-barat",
    nama: "Nusa Tenggara Barat",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi kategori sedang, serta rasio kredit bermasalah yang tergolong aman.",
    rekeningPer1000: 42.53,
    rekeningKet: "Aktivitas peminjam aktif tergolong moderat",
    merchantPer1000: 77.47,
    merchantKet: "Ekosistem usaha digital masih bertumbuh",
    twp90: 3.39,
    twp90Ket: "Tingkat Kredit Macet tergolong waspada (3-5%)",
    literasi: 64.60,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 93.40,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 47.59,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 243756,
    outstandingMiliar: 923.01,
    totalMerchantRibu: 444,
    pendudukRibu: 5731.1,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "NTB mencatat inklusi 93,40% dan TWP90 3,39%. Sinergi antara gelaran event internasional Mandalika dan digitalisasi pembayaran mendorong UMKM lokal naik kelas.",
    akarMasalah: "Ketergantungan pelaku usaha musiman terhadap pinjaman non-formal dengan beban bunga tinggi.",
    rekomendasi: "Manfaatkan fasilitas pembiayaan mikro formal atau KUR berizin resmi dengan skema bunga yang transparan.",
    rekomendasiBadge: "UMKM"
  },
  {
    id: "papua-tengah",
    nama: "Papua Tengah",
    cluster: 1,
    clusterBadge: "Cluster 2",
    clusterDesc: "Wilayah dengan penetrasi layanan keuangan digital dan tingkat literasi yang masih dalam tahap berkembang.",
    rekeningPer1000: 7.41,
    rekeningKet: "Aktivitas peminjam aktif masih terbatas",
    merchantPer1000: 32.83,
    merchantKet: "Ekosistem usaha digital masih bertumbuh",
    twp90: 1.01,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 34.63,
    literasiKet: "Pemahaman produk keuangan masih berkembang",
    inklusi: 72.21,
    inklusiKet: "Akses produk keuangan masih terbatas",
    skorImdi: 44.13,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 11057,
    outstandingMiliar: 36.02,
    totalMerchantRibu: 49,
    pendudukRibu: 1492.3,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Papua Tengah mencatat literasi 34,63% dan outstanding pinjaman Rp36 Miliar. Transformasi keuangan digital di daerah ini membutuhkan penguatan jaringan BTS dan agen keuangan komunitas.",
    akarMasalah: "Keterbatasan akses edukasi produk keuangan formal dan potensi risiko penawaran investasi tanpa izin.",
    rekomendasi: "Gunakan selalu lembaga perbankan resmi dan pastikan legalitas produk pada kanal informasi resmi OJK.",
    rekomendasiBadge: "INFO"
  },
  {
    id: "kalimantan-selatan",
    nama: "Kalimantan Selatan",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 80.10,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 145.26,
    merchantKet: "Ekosistem usaha digital cukup berkembang",
    twp90: 2.08,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 79.69,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 94.88,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 49.45,
    imdiKet: "Keterampilan digital tergolong memadai",
    totalRekening: 346290,
    outstandingMiliar: 1112.23,
    totalMerchantRibu: 628,
    pendudukRibu: 4323.3,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kalimantan Selatan merupakan role model literasi keuangan nasional (79,69%) dengan TWP90 terjaga di 2,08%. Masyarakat menunjukkan kedewasaan finansial yang tinggi dalam memanfaatkan instrumen digital.",
    akarMasalah: "Pengelolaan modal usaha mikro yang belum terpisah dari pengeluaran operasional rumah tangga harian.",
    rekomendasi: "Terapkan pencatatan keuangan sederhana dan pisahkan rekening usaha dengan rekening pribadi.",
    rekomendasiBadge: "TELADAN"
  },
  {
    id: "kepulauan-riau",
    nama: "Kepulauan Riau",
    cluster: 3,
    clusterBadge: "Cluster 4",
    clusterDesc: "Wilayah dengan aktivitas transaksi keuangan digital dan tingkat literasi tinggi, serta rasio kredit bermasalah yang terkendali aman.",
    rekeningPer1000: 148.78,
    rekeningKet: "Aktivitas peminjam aktif tergolong tinggi",
    merchantPer1000: 208.27,
    merchantKet: "Ekosistem usaha digital tergolong prima",
    twp90: 1.62,
    twp90Ket: "Tingkat Kredit Macet terkendali aman (<5%)",
    literasi: 78.29,
    literasiKet: "Masyarakatnya sudah cakap keuangan",
    inklusi: 98.43,
    inklusiKet: "Masyarakatnya sudah terinklusi secara keuangan",
    skorImdi: 55.45,
    imdiKet: "Masyarakatnya sudah cakap digital",
    totalRekening: 329320,
    outstandingMiliar: 1238.56,
    totalMerchantRibu: 461,
    pendudukRibu: 2213.5,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kepulauan Riau mencatat sinergi literasi (78,29%) dan inklusi (98,43%) yang sangat kuat dengan TWP90 rendah 1,62%. Posisi Batam sebagai free-trade zone mendukung percepatan ekonomi digital berdaya saing.",
    akarMasalah: "Potensi transaksi di luar ekosistem resmi pada wilayah perbatasan antarwilayah.",
    rekomendasi: "Gunakan selalu kanal pembayaran resmi yang berizin regulator untuk menjamin keamanan transaksi.",
    rekomendasiBadge: "BORDER"
  }
];

// Enrich remainder 20 provinces dynamically with standard real data from dataset
const REMAINING_PROVINCES = [
  { nama: "Riau", cluster: 2, rek: 563927, out: 1819.7, twp: 1.63, lit: 68.93, ink: 92.79, qris: 954, pop: 6811.2, imdi: 45.45 },
  { nama: "Jambi", cluster: 3, rek: 269124, out: 954.56, twp: 1.85, lit: 72.24, ink: 92.00, qris: 471, pop: 3768.5, imdi: 51.10 },
  { nama: "Sumatera Selatan", cluster: 2, rek: 599604, out: 2037.02, twp: 3.08, lit: 68.00, ink: 88.18, qris: 1156, pop: 8928.5, imdi: 44.39 },
  { nama: "Bengkulu", cluster: 2, rek: 145321, out: 547.97, twp: 1.83, lit: 72.36, ink: 93.88, qris: 245, pop: 2138.0, imdi: 42.24 },
  { nama: "Lampung", cluster: 3, rek: 529069, out: 1552.96, twp: 2.38, lit: 72.29, ink: 90.94, qris: 857, pop: 9522.9, imdi: 53.29 },
  { nama: "Kepulauan Bangka Belitung", cluster: 3, rek: 108455, out: 399.63, twp: 1.57, lit: 78.10, ink: 93.99, qris: 201, pop: 1550.8, imdi: 54.81 },
  { nama: "Nusa Tenggara Timur", cluster: 3, rek: 231930, out: 874.63, twp: 1.53, lit: 67.71, ink: 92.78, qris: 373, pop: 5742.6, imdi: 54.88 },
  { nama: "Kalimantan Barat", cluster: 2, rek: 273039, out: 984.97, twp: 1.48, lit: 70.01, ink: 92.72, qris: 503, pop: 5766.0, imdi: 48.49 },
  { nama: "Kalimantan Tengah", cluster: 3, rek: 165942, out: 569.12, twp: 1.40, lit: 73.06, ink: 93.23, qris: 418, pop: 2845.0, imdi: 54.55 },
  { nama: "Kalimantan Utara", cluster: 3, rek: 40325, out: 166.99, twp: 4.45, lit: 65.25, ink: 94.10, qris: 116, pop: 749.4, imdi: 54.72 },
  { nama: "Sulawesi Utara", cluster: 3, rek: 264850, out: 1166.77, twp: 2.67, lit: 69.98, ink: 94.37, qris: 327, pop: 2721.4, imdi: 50.04 },
  { nama: "Sulawesi Tengah", cluster: 2, rek: 188760, out: 725.44, twp: 1.71, lit: 60.07, ink: 88.65, qris: 314, pop: 3156.1, imdi: 53.03 },
  { nama: "Sulawesi Tenggara", cluster: 2, rek: 142596, out: 804.60, twp: 1.48, lit: 72.38, ink: 94.70, qris: 252, pop: 2836.7, imdi: 44.15 },
  { nama: "Gorontalo", cluster: 2, rek: 110464, out: 505.55, twp: 1.77, lit: 65.29, ink: 95.52, qris: 146, pop: 1242.2, imdi: 45.87 },
  { nama: "Sulawesi Barat", cluster: 2, rek: 58295, out: 264.26, twp: 1.10, lit: 58.60, ink: 92.77, qris: 111, pop: 1525.3, imdi: 51.72 },
  { nama: "Maluku", cluster: 2, rek: 65375, out: 278.05, twp: 0.66, lit: 63.87, ink: 87.59, qris: 112, pop: 1970.6, imdi: 52.71 },
  { nama: "Papua Barat", cluster: 2, rek: 31355, out: 100.62, twp: 1.21, lit: 41.60, ink: 86.75, qris: 59, pop: 587.6, imdi: 46.18 },
  { nama: "Papua", cluster: 2, rek: 66471, out: 224.33, twp: 2.46, lit: 62.84, ink: 91.69, qris: 176, pop: 1073.6, imdi: 43.23 },
  { nama: "Papua Barat Daya", cluster: 2, rek: 11442, out: 30.33, twp: 0.90, lit: 56.16, ink: 93.20, qris: 60, pop: 636.4, imdi: 48.39 },
  { nama: "Papua Selatan", cluster: 1, rek: 6268, out: 19.11, twp: 0.72, lit: 36.97, ink: 81.93, qris: 32, pop: 549.7, imdi: 43.13 }
];

REMAINING_PROVINCES.forEach(p => {
  const cInfo = CLUSTERS_CONFIG[p.cluster];
  const rekPer1k = parseFloat((p.rek / p.pop).toFixed(2));
  const qrisPer1k = parseFloat(((p.qris / p.pop) * 1000).toFixed(2));
  const id = p.nama.toLowerCase().replace(/\s+/g, '-');

  const rekKet = rekPer1k >= 150 ? "Aktivitas peminjam aktif tergolong masif" : rekPer1k >= 80 ? "Aktivitas peminjam aktif tergolong tinggi" : rekPer1k >= 40 ? "Aktivitas peminjam aktif tergolong moderat" : "Aktivitas peminjam aktif masih terbatas";
  const merKet = qrisPer1k >= 200 ? "Ekosistem usaha digital tergolong prima" : qrisPer1k >= 100 ? "Ekosistem usaha digital cukup berkembang" : "Ekosistem usaha digital masih bertumbuh";
  const twpKet = p.twp > 5.0 ? "Tingkat Kredit Macet tergolong kritis (>5%)" : p.twp >= 3.0 ? "Tingkat Kredit Macet tergolong waspada (3-5%)" : "Tingkat Kredit Macet terkendali aman (<5%)";
  const litKet = p.lit >= 70.0 ? "Masyarakatnya sudah cakap keuangan" : p.lit >= 55.0 ? "Pemahaman produk keuangan tergolong moderat" : "Pemahaman produk keuangan masih berkembang";
  const inkKet = p.ink >= 90.0 ? "Masyarakatnya sudah terinklusi secara keuangan" : p.ink >= 80.0 ? "Akses produk keuangan cukup luas" : "Akses produk keuangan masih terbatas";
  const imdiKet = p.imdi >= 50.0 ? "Masyarakatnya sudah cakap digital" : p.imdi >= 42.0 ? "Keterampilan digital tergolong memadai" : "Keterampilan digital masih perlu ditingkatkan";

  PROVINCES_DATA.push({
    id: id,
    nama: p.nama,
    cluster: p.cluster,
    clusterBadge: cInfo.badgeLabel,
    clusterDesc: cInfo.shortDesc,
    rekeningPer1000: rekPer1k,
    rekeningKet: rekKet,
    merchantPer1000: qrisPer1k,
    merchantKet: merKet,
    twp90: p.twp,
    twp90Ket: twpKet,
    literasi: p.lit,
    literasiKet: litKet,
    inklusi: p.ink,
    inklusiKet: inkKet,
    skorImdi: p.imdi,
    imdiKet: imdiKet,
    totalRekening: p.rek,
    outstandingMiliar: p.out,
    totalMerchantRibu: p.qris,
    pendudukRibu: p.pop,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: `Provinsi ${p.nama} memiliki tingkat inklusi sebesar ${p.ink.toFixed(2)}% dan literasi sebesar ${p.lit.toFixed(2)}%. Profil rasio kredit macet berada di level ${p.twp.toFixed(2)}%.`,
    akarMasalah: p.cluster === 1
      ? "Keterbatasan jaringan komunikasi dan sarana transaksi digital formal di wilayah pelosok."
      : "Kebutuhan permodalan kerja operasional yang perlu didukung pencatatan finansial teratur.",
    rekomendasi: "Terapkan disiplin pengelolaan arus kas dan hindari meminjam melebihi kapasitas kemampuan bayar bulanan.",
    rekomendasiBadge: "TIPS"
  });
});

const ADAPTIVE_CLUSTER_MODULES = {
  0: {
    clusterId: 0,
    clusterLabel: "Klaster 1",
    clusterBadgeClass: "badge-c1",
    clusterTitle: "Mitigasi Kredit Macet & Utang Konsumtif",
    clusterGoal: "Memperbaiki Kekurangan: Mengendalikan Lonjakan Kredit Macet (TWP90 > 5%) & Menghentikan Utang Konsumtif Gali Lubang Tutup Lubang",
    modules: [
      {
        id: "modul-c1-1",
        title: "Restrukturisasi Utang & Mengatasi Gagal Bayar (TWP90)",
        category: "Kredit & Restrukturisasi",
        icon: "shield-alert",
        badge: "Krusial Klaster 1",
        readTime: "6 Menit",
        summary: "Strategi komprehensif menghadapi gagal bayar kredit fintech, pemulihan catatan SLIK OJK/Pusdafil, dan hak-hak nasabah dalam restrukturisasi resmi.",
        chapters: [
          {
            title: "1. Mengenal TWP90 & Konsekuensi Catatan SLIK OJK",
            content: `
              <p>Di wilayah Klaster 1 seperti DKI Jakarta, rasio kredit macet (TWP90) berada pada level kritis <strong>11,58%</strong>. Menunggak pinjaman digital di atas 90 hari kalender bukan sekadar masalah telepon penagihan, melainkan berakibat fatal pada riwayat perbankan Anda:</p>
              <ul>
                <li><strong>Pelaporan Otomatis:</strong> Penyelenggara LPBBTI berizin OJK wajib melaporkan data keterlambatan ke <strong>Pusdafil</strong> dan <strong>SLIK OJK (Sistem Layanan Informasi Keuangan)</strong>.</li>
                <li><strong>Penurunan Status Kolektibilitas:</strong> Status Anda akan anjlok menjadi Kolektibilitas 5 (Macet).</li>
                <li><strong>Pemblokiran Akses Finansial:</strong> Permohonan KPR rumah, Kredit Kendaraan Bermotor (KKB), hingga Kredit Usaha Rakyat (KUR) di masa depan akan otomatis ditolak oleh seluruh perbankan nasional.</li>
              </ul>
            `
          },
          {
            title: "2. Langkah Hukum & Hak Restrukturisasi Kredit",
            content: `
              <p>Jika Anda mengalami kendala likuiditas nyata, ajukan permohonan restrukturisasi resmi ke platform fintech legal sebelum jatuh tempo 90 hari:</p>
              <ol>
                <li><strong>Rescheduling (Perpanjangan Tenor):</strong> Memperpanjang jangka waktu cicilan agar beban bayar bulanan menjadi lebih ringan.</li>
                <li><strong>Reconditioning (Penyesuaian Bunga):</strong> Mengajukan penghapusan denda akumulatif atau penyesuaian suku bunga pokok.</li>
                <li><strong>Restructuring (Penataan Kembali Pokok):</strong> Negosiasi pelunasan pokok utang saja (haircut) bagi nasabah yang terdampak musibah pemutusan hubungan kerja.</li>
              </ol>
            `
          },
          {
            title: "3. Memutus Lingkaran Gali Lubang Tutup Lubang",
            content: `
              <p>Kesalahan fatal peminjam konsumtif adalah mengambil pinjaman di platform B untuk membayar tagihan platform A. Hal ini memperbesar pokok utang secara eksponensial dalam hitungan minggu.</p>
              <div class="callout callout-danger">
                <strong>Aturan Tegas:</strong> Hentikan segera pembukaan akun pinjaman baru! Jual aset non-produktif atau cari penghasilan tambahan untuk melunasi pokok pinjaman terkecil terlebih dahulu (Metode Debt Snowball).
              </div>
            `
          }
        ]
      },
      {
        id: "modul-c1-2",
        title: "Pengendalian Gaya Hidup Konsumtif & FOMO Perkotaan",
        category: "Perilaku Finansial",
        icon: "wallet",
        badge: "Mitigasi Perilaku",
        readTime: "5 Menit",
        summary: "Menjinakkan impuls belanja fitur PayLater, mengaudit pengeluaran gengsi sosial, dan menetapkan batasan gaya hidup realistis.",
        chapters: [
          {
            title: "1. Jebakan Fitur PayLater & Psikologi 'Uang Gaib'",
            content: `
              <p>Fitur <em>Buy Now Pay Later (BNPL)</em> menghilangkan rasa bersalah saat berbelanja karena uang tidak langsung berkurang dari rekening. Di kawasan metropolitan, hal ini memicu akumulasi transaksi mikro (kuliner, tiket konser, fashion) yang tiba-tiba membengkak saat tanggal cetak tagihan.</p>
              <p>Gunakan aturan jeda <strong>24 Jam (24-Hour Rule)</strong>: Masukkan barang ke keranjang belanja, tunggu 24 jam. Jika setelah 24 jam Anda tidak benar-benar membutuhkannya, hapus dari keranjang.</p>
            `
          },
          {
            title: "2. Mengaudit Biaya Bocor Halus (Phantom Expenses)",
            content: `
              <p>Pengeluaran kecil yang sering diabaikan namun merusak arus kas bulanan perkotaan:</p>
              <ul>
                <li>Langganan streaming multipel yang jarang ditonton (Rp150.000 - Rp300.000/bulan).</li>
                <li>Jajan kopi dan makanan pesan-antar harian berbiaya ongkir & service fee tinggi (Rp1.500.000+/bulan).</li>
                <li>Biaya administrasi transfer antarbank dan top-up e-wallet berulang.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "modul-c1-3",
        title: "Audit Rasio Beban Utang Aman (DSR <= 30%)",
        category: "Perencanaan Arus Kas",
        icon: "award",
        badge: "Kalkulasi Protektif",
        readTime: "6 Menit",
        summary: "Mengunci batas cicilan bulanan di bawah ambang 30%, pemangkasan anggaran darurat, dan simulasi arus kas bertahan hidup.",
        chapters: [
          {
            title: "1. Formula Debt Service Ratio (DSR)",
            content: `
              <p>Kesehatan finansial mensyaratkan <strong>total seluruh cicilan utang bulanan Anda maksimal adalah 30% dari penghasilan bersih bulanan</strong>.</p>
              <div class="callout callout-info">
                <strong>Contoh Perhitungan:</strong><br>
                Penghasilan Bersih: Rp7.000.000<br>
                Batas Cicilan Maksimal (30%): <strong>Rp2.100.000 / bulan</strong><br>
                Jika total cicilan PayLater, Kredivo, dan pinjol Anda sudah mencapai Rp3.500.000 (DSR 50%), Anda berada dalam zona bahaya finansial.
              </div>
            `
          },
          {
            title: "2. Strategi Pemulihan Anggaran Darurat",
            content: `
              <p>Ketika DSR melampaui batas 30%, terapkan protokol penghematan sementara:</p>
              <ol>
                <li>Pangkas alokasi 'Keinginan (Wants)' dari 30% menjadi <strong>10%</strong>.</li>
                <li>Gunakan seluruh selisih dana penghematan untuk percepatan pelunasan utang berbunga tertinggi (Metode Debt Avalanche).</li>
              </ol>
            `
          }
        ]
      },
      {
        id: "modul-c1-4",
        title: "Pembangunan Pos Dana Darurat Likuid Anti-Pinjol",
        category: "Ketahanan Finansial",
        icon: "trending-up",
        badge: "Bantalan Likuiditas",
        readTime: "5 Menit",
        summary: "Mencegah ketergantungan pada pinjol darurat dengan membangun cadangan kas likuid 3-6 bulan pengeluaran rutin.",
        chapters: [
          {
            title: "1. Mengapa Pinjol Menjadi 'Dana Darurat Semu'?",
            content: `
              <p>Masyarakat sering menggunakan pinjol saat darurat (misal sakit atau kendaraan rusak) karena tidak memiliki tabungan cair. Namun, menyelesaikan darurat dengan utang berbunga hanya menunda musibah menjadi krisis finansial baru.</p>
            `
          },
          {
            title: "2. Target Besaran & Instrumen Penyimpanan",
            content: `
              <p>Target ideal dana darurat: <strong>3 hingga 6 kali biaya hidup bulanan pokok</strong>. Simpan pada instrumen likuid seperti Reksa Dana Pasar Uang (RDPU) atau rekening tabungan tanpa kartu ATM agar tidak mudah ditarik sembarangan.</p>
            `
          }
        ]
      }
    ]
  },
  1: {
    clusterId: 1,
    clusterLabel: "Klaster 2",
    clusterBadgeClass: "badge-c2",
    clusterTitle: "Fondasi Akses Finansial & Perlindungan Aset",
    clusterGoal: "Memperbaiki Kekurangan: Membuka Akses Layanan Perbankan Formal, Meningkatkan Literasi Dasar (17-37%), & Mencegah Penipuan Keuangan",
    modules: [
      {
        id: "modul-c2-1",
        title: "Akses Perbankan Formal & Pemanfaatan Agen Laku Pandai",
        category: "Inklusi Dasar",
        icon: "smartphone",
        badge: "Krusial Klaster 2",
        readTime: "5 Menit",
        summary: "Mengenal rekening tabungan formal tanpa biaya administrasi, cara bertransaksi aman melalui Agen Bank resmi di pelosok daerah.",
        chapters: [
          {
            title: "1. Mengenal Rekening Tabungan Bebas Biaya (TabunganKu & SimPel)",
            content: `
              <p>Di wilayah Klaster 2 (kawasan Papua dan Maluku Utara), indeks literasi masih berada di kisaran 17% - 37%. Banyak masyarakat enggan menabung di bank karena khawatir saldo berkurang akibat biaya administrasi bulanan.</p>
              <p>Regulator OJK telah mewajibkan seluruh bank menyediakan produk <strong>TabunganKu</strong> dan <strong>Simpanan Pelajar (SimPel)</strong>:</p>
              <ul>
                <li><strong>Bebas Biaya Administrasi Bulanan:</strong> Saldo Anda tidak akan terpotong biaya admin rekening.</li>
                <li><strong>Setoran Awal Sangat Ringan:</strong> Mulai dari Rp10.000 hingga Rp20.000 saja.</li>
                <li><strong>Dijamin LPS:</strong> Tabungan Anda dijamin penuh oleh Lembaga Penjamin Simpanan (LPS) hingga Rp2 Miliar.</li>
              </ul>
            `
          },
          {
            title: "2. Bertransaksi Lewat Agen Laku Pandai Resmi",
            content: `
              <p>Jika kantor cabang bank jauh dari tempat tinggal Anda, manfaatkan layanan <strong>Agen Laku Pandai (BRILink, BNI Agen46, Mandiri Agen)</strong>:</p>
              <ul>
                <li>Pastikan agen memiliki sertifikat resmi dan logo perbankan mitra.</li>
                <li>Selalu minta struk bukti transaksi cetak setiap kali menyetor atau menarik uang tunai.</li>
                <li>Jangan pernah menitipkan kartu ATM beserta nomor PIN Anda kepada pihak agen.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "modul-c2-2",
        title: "Waspada Penipuan Finansial, Investasi Bodong & Arisan Bodong",
        category: "Proteksi Aset",
        icon: "shield-alert",
        badge: "Proteksi Warga",
        readTime: "6 Menit",
        summary: "Mengenali ciri penipuan berkedok arisan online atau penggandaan uang yang kerap menyasar daerah dengan akses informasi terbatas.",
        chapters: [
          {
            title: "1. Modus Penipuan yang Sering Masuk ke Daerah",
            content: `
              <p>Waspadai modus-modus berikut yang terbukti 100% penipuan:</p>
              <ul>
                <li><strong>Arisan Online Berbunga Pasti:</strong> Menjanjikan uang berlipat ganda dalam hitungan hari tanpa ada kegiatan usaha riil.</li>
                <li><strong>Koperasi Bodong / Investasi Emas Fiktif:</strong> Mengklaim memiliki izin pemerintah namun tidak terdaftar di OJK.</li>
                <li><strong>Syarat Menitipkan Uang untuk Hadiah:</strong> Mengabarkan Anda menang hadiah undian namun harus mentransfer uang muka terlebih dahulu.</li>
              </ul>
            `
          },
          {
            title: "2. Prinsip 2L: Legal dan Logis",
            content: `
              <p>Sebelum menitipkan uang Anda kepada siapapun, ingat selalu 2 prinsip utama:</p>
              <div class="callout callout-info">
                <strong>1. Legal:</strong> Cek apakah perusahaannya berizin resmi di OJK melalui telepon 157 atau WhatsApp 081-157-157-157.<br>
                <strong>2. Logis:</strong> Apakah keuntungan yang dijanjikan masuk akal? Tidak ada instrumen investasi legal yang bisa memberikan untung pasti tanpa risiko kerugian.
              </div>
            `
          }
        ]
      },
      {
        id: "modul-c2-3",
        title: "Pencatatan Keuangan Sederhana Usaha & Pemisahan Kas",
        category: "Pengelolaan Kas",
        icon: "wallet",
        badge: "Literasi Dasar",
        readTime: "5 Menit",
        summary: "Pemisahan uang modal usaha dagang/tani dengan belanja rumah tangga harian untuk mencegah kebangkrutan usaha mikro.",
        chapters: [
          {
            title: "1. Bahaya Mencampur Uang Dapur dan Uang Usaha",
            content: `
              <p>Sering kali pelaku usaha merasa dagangannya laris, namun modalnya habis dan tidak bisa kulakan kembali. Ini terjadi karena uang hasil penjualan langsung dipakai untuk keperluan dapur keluarga tanpa pencatatan.</p>
            `
          },
          {
            title: "2. Metode Dua Dompet / Dua Buku",
            content: `
              <p>Terapkan aturan sederhana: Siapkan dua dompet atau dua rekening terpisah. Ambil sejumlah uang tetap per minggu sebagai 'gaji' untuk belanja dapur, dan biarkan sisa keuntungan tetap di dompet usaha sebagai modal perputaran.</p>
            `
          }
        ]
      },
      {
        id: "modul-c2-4",
        title: "Keamanan Simpanan & Pencegahan Penipuan Telepon/SMS",
        category: "Literasi Digital",
        icon: "smartphone",
        badge: "Keamanan Data",
        readTime: "4 Menit",
        summary: "Menjaga kerahasiaan buku tabungan, nomor PIN ATM, dan mewaspadai pesan telepon penipuan berhadiah.",
        chapters: [
          {
            title: "1. Menjaga Keamanan PIN & Buku Tabungan",
            content: `
              <p>Nomor PIN ATM adalah rahasia pribadi. Jangan gunakan tanggal lahir sebagai PIN, dan jangan pernah menuliskan nomor PIN pada bagian belakang kartu ATM Anda.</p>
            `
          },
          {
            title: "2. Abaikan Pesan SMS Menang Undian",
            content: `
              <p>Bank resmi tidak pernah mengumumkan pemenang undian berhadiah melalui pesan SMS dari nomor ponsel pribadi atau menuntut transfer biaya tebusan hadiah.</p>
            `
          }
        ]
      }
    ]
  },
  2: {
    clusterId: 2,
    clusterLabel: "Klaster 3",
    clusterBadgeClass: "badge-c3",
    clusterTitle: "Optimalisasi Usaha Produktif & Ketahanan Kas",
    clusterGoal: "Meningkatkan Potensi: Akselerasi Pembiayaan Usaha Produktif (KUR & Fintech Legal), Proteksi Transaksi Digital, & Menjaga Kualitas Kredit",
    modules: [
      {
        id: "modul-c3-1",
        title: "Optimalisasi Pembiayaan Modal Kerja Produktif (KUR & Fintech)",
        category: "Permodalan Usaha",
        icon: "trending-up",
        badge: "Krusial Klaster 3",
        readTime: "6 Menit",
        summary: "Membedakan utang konsumtif vs modal kerja produktif berdaya ungkit, alur pengajuan KUR resmi, dan pembiayaan syariah.",
        chapters: [
          {
            title: "1. Membedakan Utang Konsumtif vs Utang Produktif",
            content: `
              <p>Di wilayah Klaster 3 (Sumatera Utara, Aceh, NTB, Riau, dsb.), aktivitas perdagangan dan pertanian berkembang pesat dengan kredit macet yang terkendali (TWP90 1,69%). Kunci akselerasi ekonomi wilayah ini adalah memanfaatkan utang produktif:</p>
              <ul>
                <li><strong>Utang Konsumtif:</strong> Meminjam untuk membeli barang yang nilainya menyusut (gadget baru, liburan, motor kedua) yang membebani arus kas bulanan.</li>
                <li><strong>Utang Produktif:</strong> Meminjam untuk menambah barang dagangan, memperluas kios, atau membeli alat produksi yang menghasilkan keuntungan lebih besar dari bunga pinjaman.</li>
              </ul>
            `
          },
          {
            title: "2. Memanfaatkan Kredit Usaha Rakyat (KUR) Bersubsidi",
            content: `
              <p>Pemerintah memberikan subsidi bunga pinjaman modal kerja melalui program KUR di bank mitra (BRI, BNI, Mandiri, BSI):</p>
              <ul>
                <li>Suku bunga sangat rendah (hanya 6% efektif per tahun).</li>
                <li>Plafon KUR Super Mikro hingga Rp10 Juta dan KUR Mikro hingga Rp100 Juta tanpa agunan pokok tambahan.</li>
                <li>Syarat utama: Memiliki usaha produktif yang telah berjalan minimal 6 bulan dan tidak sedang memiliki kredit produktif di bank lain.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "modul-c3-2",
        title: "Keamanan Siber Transaksi Digital & Anti-Social Engineering",
        category: "Keamanan Digital",
        icon: "shield-alert",
        badge: "Proteksi Transaksi",
        readTime: "5 Menit",
        summary: "Mengenali modus penipuan file APK palsu (surat undangan, tagihan paket), perlindungan kode OTP, dan transaksi QRIS yang aman.",
        chapters: [
          {
            title: "1. Bahaya File APK Penipuan via WhatsApp",
            content: `
              <p>Modus kejahatan paling marak saat ini adalah pengiriman file berakhiran <strong>.apk</strong> yang menyamar sebagai 'Undangan Pernikahan Digital', 'Foto Paket Pengiriman', atau 'Surat Tilang Kepolisian'.</p>
              <div class="callout callout-danger">
                <strong>Peringatan Keamanan:</strong> Jangan pernah mengklik atau mengunduh file .apk dari nomor tidak dikenal. File tersebut mengandung spyware yang bisa membaca SMS OTP dan menguras rekening m-banking Anda secara otomatis.
              </div>
            `
          },
          {
            title: "2. Verifikasi Transaksi QRIS Merchant",
            content: `
              <p>Bagi pelaku usaha pedagang yang memajang barcode QRIS:</p>
              <ul>
                <li>Periksa stiker QRIS secara berkala untuk memastikan tidak ditimpa oleh stiker QRIS palsu milik orang lain.</li>
                <li>Selalu tunggu notifikasi transaksi berhasil di aplikasi merchant Anda sebelum menyerahkan barang dagangan kepada pembeli.</li>
              </ul>
            `
          }
        ]
      },
      {
        id: "modul-c3-3",
        title: "Manajemen Kas Musiman & Dana Cadangan UMKM",
        category: "Ketahanan Bisnis",
        icon: "wallet",
        badge: "Ketahanan Usaha",
        readTime: "5 Menit",
        summary: "Mengantisipasi siklus penurunan omzet musiman (low season), menghitung besaran dana cadangan operasional 3-6 bulan.",
        chapters: [
          {
            title: "1. Mengelola Fluktuasi Arus Kas Musiman",
            content: `
              <p>Pada daerah sentra pariwisata atau komoditas pertanian, perputaran uang sering kali mengikuti musim panen atau musim liburan. Saat musim panen/ramai, tahan godaan untuk menghabiskan seluruh keuntungan. Simpan sebagian besar surplus kas ke rekening cadangan untuk menutupi biaya operasional saat musim sepi.</p>
            `
          }
        ]
      },
      {
        id: "modul-c3-4",
        title: "Diversifikasi Tabungan ke Instrumen Investasi Resmi OJK",
        category: "Pengembangan Aset",
        icon: "award",
        badge: "Pertumbuhan Aset",
        readTime: "6 Menit",
        summary: "Melawan inflasi dengan instrumen resmi berisiko terukur: Emas Logam Mulia, Sukuk Ritel, dan Reksa Dana Pasar Uang.",
        chapters: [
          {
            title: "1. Mengapa Tabungan Biasa Tergerus Inflasi?",
            content: `
              <p>Bunga tabungan bank berkisar 0,5% per tahun, sementara inflasi tahunan bisa mencapai 3% - 4%. Alokasikan dana tabungan jangka panjang (di atas 1 tahun) ke instrumen pasar modal resmi seperti Reksa Dana Pendapatan Tetap atau Sukuk Negara yang memberikan imbal hasil di atas laju inflasi.</p>
            `
          }
        ]
      }
    ]
  },
  3: {
    clusterId: 3,
    clusterLabel: "Klaster 4",
    clusterBadgeClass: "badge-c4",
    clusterTitle: "Optimalisasi Portofolio & Keunggulan Finansial",
    clusterGoal: "Mempertahankan Keunggulan: Menjaga Reputasi Kredit Kol 1 Sempurna, Skalabilitas Bisnis Merchant QRIS, & Optimalisasi Portofolio Multi-Aset",
    modules: [
      {
        id: "modul-c4-1",
        title: "Menjaga Rekam Jejak Kredit Kol 1 untuk Fasilitas Produktif",
        category: "Reputasi Finansial",
        icon: "award",
        badge: "Krusial Klaster 4",
        readTime: "6 Menit",
        summary: "Mempertahankan rekam jejak kredit bersih sempurna tanpa keterlambatan, memanfaatkan skor kredit prima untuk KPR dan modal usaha.",
        chapters: [
          {
            title: "1. Menjaga Skor Kredit Sempurna di Ekosistem Digital Matang",
            content: `
              <p>Di wilayah Klaster 4 (DI Yogyakarta, Jawa Barat, Jawa Timur, Jawa Tengah, Bali, Banten, dsb.), penetrasi transaksi digital dan literasi keuangan sangat tinggi dengan rasio kredit macet yang sangat sehat (TWP90 2,40%).</p>
              <p>Tantangan utama di wilayah unggul ini bukan ketiadaan akses, melainkan <strong>mempertahankan integritas riwayat kredit</strong>:</p>
              <ul>
                <li><strong>Kolektibilitas 1 (Lancar):</strong> Riwayat pembayaran selalu tepat waktu sebelum jatuh tempo. Ini adalah modal terpenting untuk mendapatkan suku bunga pinjaman termurah dari perbankan.</li>
                <li><strong>Hindari Tunggakan Sepele:</strong> Keterlambatan pembayaran PayLater nominal kecil (Rp50.000) tetap akan tercatat di SLIK OJK dan bisa menggagalkan persetujuan KPR ratusan juta rupiah.</li>
              </ul>
            `
          },
          {
            title: "2. Memanfaatkan Skor Kredit untuk Aset Apresiatif",
            content: `
              <p>Gunakan reputasi kredit yang prima untuk mengambil pinjaman jangka panjang produktif: pembelian rumah pertama (KPR) atau perluasan aset ruko usaha yang nilainya terus meningkat di masa depan.</p>
            `
          }
        ]
      },
      {
        id: "modul-c4-2",
        title: "Strategi Alokasi Portofolio Investasi Multi-Aset",
        category: "Manajemen Kekayaan",
        icon: "trending-up",
        badge: "Akselerasi Aset",
        readTime: "7 Menit",
        summary: "Diversifikasi portofolio modern: Pasar Uang, Obligasi/SBN Ritel, Saham Indeks, perhitungan dana pensiun, dan rebalancing berkala.",
        chapters: [
          {
            title: "1. Teori Portofolio Modern & Diversifikasi Multi-Aset",
            content: `
              <p>Jangan menaruh seluruh telur dalam satu keranjang. Alokasikan aset berdasarkan profil risiko dan horison waktu:</p>
              <ul>
                <li><strong>Jangka Pendek (&lt; 1 Tahun):</strong> Reksa Dana Pasar Uang & Deposito (Likuid dan stabil).</li>
                <li><strong>Jangka Menengah (1 - 5 Tahun):</strong> SBN Ritel (ORI, SR, Sukuk) & Reksa Dana Pendapatan Tetap (Imbal hasil stabil bulanan).</li>
                <li><strong>Jangka Panjang (&gt; 5 Tahun):</strong> Reksa Dana Saham Indeks & Saham Bluechip (Pertumbuhan modal jangka panjang mengalahkan inflasi).</li>
              </ul>
            `
          },
          {
            title: "2. Prinsip Rebalancing Berkala",
            content: `
              <p>Lakukan evaluasi portofolio setiap 6 atau 12 bulan sekali. Jika porsi saham melonjak melebihi alokasi target profil risiko Anda, lakukan rebalancing dengan mengalihkan sebagian keuntungan ke instrumen berpendapatan tetap.</p>
            `
          }
        ]
      },
      {
        id: "modul-c4-3",
        title: "Formula Budgeting 50/30/20 & Sistem Tabungan Autopilot",
        category: "Perencanaan Arus Kas",
        icon: "wallet",
        badge: "Disiplin Finansial",
        readTime: "5 Menit",
        summary: "Mengunci pos tabungan otomatis di hari gajian, kalkulasi dana darurat 6-12 bulan, dan eliminasi pengeluaran bocor halus.",
        chapters: [
          {
            title: "1. Menjalankan Anggaran Formula 50 / 30 / 20",
            content: `
              <p>Bagi penghasilan bersih bulanan Anda secara disiplin:</p>
              <ul>
                <li><strong>50% Kebutuhan Pokok (Needs):</strong> Cicilan rumah/sewa, kebutuhan dapur, listrik, transportasi harian.</li>
                <li><strong>30% Keinginan (Wants):</strong> Hiburan, kuliner kafe, rekreasi keluarga.</li>
                <li><strong>20% Tabungan & Investasi (Savings):</strong> Dana darurat dan investasi masa depan.</li>
              </ul>
            `
          },
          {
            title: "2. Sistem Tabungan Otomatis (Autopilot)",
            content: `
              <p>Aktifkan fitur <strong>Auto-Debet di Hari Gajian (Pay Yourself First)</strong>. Begitu gaji masuk ke rekening operasional, sistem otomatis mentransfer 20% ke rekening investasi sebelum Anda sempat menggunakannya untuk konsumsi.</p>
            `
          }
        ]
      },
      {
        id: "modul-c4-4",
        title: "Skalabilitas Ekosistem Merchant QRIS & Tata Kelola Usaha",
        category: "Ekosistem Digital",
        icon: "smartphone",
        badge: "Ekosistem Bisnis",
        readTime: "6 Menit",
        summary: "Pemanfaatan sistem kasir digital QRIS dinamis, pembentukan mutasi rekening usaha bankable, dan kepatuhan pajak UMKM.",
        chapters: [
          {
            title: "1. Memaksimalkan Penetrasi Merchant QRIS",
            content: `
              <p>Di wilayah Klaster 4 seperti DI Yogyakarta dan Jawa Barat, densitas merchant QRIS mencapai lebih dari 200 merchant per 1.000 penduduk. Gunakan QRIS dinamis untuk mempermudah pencatatan pembukuan otomatis, mencegah risiko uang palsu, dan mempercepat rekonsiliasi kasir harian.</p>
            `
          },
          {
            title: "2. Membangun Rekening Usaha yang Bankable",
            content: `
              <p>Bank dan lembaga pembiayaan menilai kesehatan bisnis Anda dari perputaran uang di rekening usaha. Pisahkan rekening pribadi dengan rekening merchant agar histori mutasi kas dapat digunakan sebagai agunan arus kas saat mengajukan plafon kredit ekspansi usaha.</p>
            `
          }
        ]
      }
    ]
  }
};

const FINANCIAL_MODULES = [
  {
    id: "modul-1",
    title: "Manajemen Utang & Bahaya Pinjol Ilegal",
    category: "Dasar & Keamanan",
    icon: "shield-alert",
    badge: "Paling Krusial",
    readTime: "6 Menit",
    summary: "Memahami batas aman utang konsumtif (Aturan 30%), mengenali dampak TWP90 & catatan SLIK OJK, serta strategi melunasi utang macet.",
    chapters: [
      {
        title: "1. Aturan Emas Rasio Cicilan (Debt Service Ratio 30%)",
        content: `
          <p>Utang ibarat api: bisa membantu memasak jika dikendalikan, namun bisa membakar rumah jika dibiarkan membesar. Prinsip dasar kesehatan keuangan menetapkan bahwa <strong>total seluruh cicilan utang bulanan Anda maksimal adalah 30% dari penghasilan bersih</strong>.</p>
          <div class="callout callout-info">
            <strong>Formula DSR:</strong><br>
            <code>(Total Cicilan Bulanan / Total Pendapatan Bersih Bulanan) &times; 100%</code><br>
            &bull; &le; 30% : <strong>Kategori Sehat / Aman</strong><br>
            &bull; 31% - 50% : <strong>Kategori Waspada</strong> (Rentan gagal bayar jika ada kebutuhan darurat)<br>
            &bull; &gt; 50% : <strong>Kategori Bahaya Finansial</strong> (Potensi jeratan gali lubang tutup lubang)
          </div>
        `
      },
      {
        title: "2. Mengenal TWP90 dan Riwayat SLIK OJK (BI Checking)",
        content: `
          <p><strong>TWP90 (Tingkat Wanprestasi 90 Hari)</strong> adalah tolok ukur kelalaian nasabah fintech lending yang menunggak cicilan lebih dari 90 hari kalender sejak jatuh tempo.</p>
          <p>Ketika Anda menunggak cicilan pinjaman legal atau PayLater:</p>
          <ul>
            <li>Data Anda tercatat langsung di <strong>Pusdafil (Pusat Data Fintech Lending)</strong> dan <strong>SLIK OJK (Sistem Layanan Informasi Keuangan)</strong>.</li>
            <li>Status kolektibilitas Anda turun dari Kol 1 (Lancar) ke Kol 5 (Macet).</li>
            <li>Dampaknya: Anda akan ditolak saat mengajukan <strong>KPR Rumah, Kredit Kendaraan Bermotor (KKB), Kredit Usaha Rakyat (KUR)</strong>, hingga seleksi kerja di beberapa institusi formal.</li>
          </ul>
        `
      },
      {
        title: "3. Membedakan Pinjol Legal vs Pinjol Ilegal",
        content: `
          <p>Ciri-ciri pinjaman online ilegal yang harus selalu Anda waspadai:</p>
          <ul>
            <li><strong>Penawaran via SMS / WhatsApp Spam pribadi</strong> (Pinjol legal dilarang OJK menawarkan via jalur pribadi tanpa persetujuan).</li>
            <li><strong>Meminta akses Kontak HP, Galeri Foto, dan Lokasi</strong> (Pinjol resmi berizin OJK hanya diizinkan mengakses CAMILAN: Camera, Microphone, Location).</li>
            <li><strong>Bunga harian mencekik tanpa transparansi</strong> dan denda akumulatif tak terbatas.</li>
            <li><strong>Ancaman teror penagihan dan penyebaran data pribadi</strong>.</li>
          </ul>
        `
      },
      {
        title: "4. Strategi Lepas dari Jeratan Utang",
        content: `
          <p>Dua metode pelunasan utang yang terbukti secara psikologis dan finansial:</p>
          <ol>
            <li><strong>Metode Bola Salju (Debt Snowball):</strong> Lunasi utang dengan nominal pokok terkecil terlebih dahulu untuk membangun momentum psikologis kemenangan kecil.</li>
            <li><strong>Metode Longsoran Salju (Debt Avalanche):</strong> Lunasi utang yang membebankan suku bunga tertinggi terlebih dahulu untuk meminimalkan total beban bunga yang dibayarkan.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "modul-2",
    title: "Fondasi Finansial & Formula Budgeting 50/30/20",
    category: "Perencanaan Arus Kas",
    icon: "wallet",
    badge: "Fondasi Utama",
    readTime: "5 Menit",
    summary: "Menguasai pemisahan kebutuhan vs keinginan, membangun sistem pos keuangan 50/30/20, dan menyusun dana darurat ideal.",
    chapters: [
      {
        title: "1. Formula Anggaran 50 / 30 / 20",
        content: `
          <p>Formula yang dipopulerkan oleh Elizabeth Warren ini membagi penghasilan bersih ke dalam 3 ember utama:</p>
          <ul>
            <li><strong>50% Kebutuhan Pokok (Needs):</strong> Makanan dasar, sewa tempat tinggal / cicilan rumah, tagihan listrik & air, transportasi kerja, dan biaya kesehatan.</li>
            <li><strong>30% Keinginan (Wants):</strong> Kuliner kafe, hiburan, langganan streaming, liburan, belanja hobi & fashion.</li>
            <li><strong>20% Tabungan & Masa Depan (Savings & Debt Repayment):</strong> Dana darurat, investasi pensiun, dan pembayaran percepatan utang.</li>
          </ul>
        `
      },
      {
        title: "2. Menghitung Target Dana Darurat (Emergency Fund)",
        content: `
          <p>Dana darurat adalah pelindung utama agar Anda tidak perlu berutang saat terjadi musibah sakit, perbaikan kendaraan, atau kehilangan pekerjaan.</p>
          <div class="callout callout-success">
            <strong>Panduan Besaran Dana Darurat:</strong><br>
            &bull; <strong>Lajang / Belum Menikah:</strong> 3 s.d. 6 kali pengeluaran rutin bulanan.<br>
            &bull; <strong>Menikah tanpa anak:</strong> 6 kali pengeluaran rutin bulanan.<br>
            &bull; <strong>Menikah dengan anak / Pekerja Lepas (Freelancer):</strong> 9 s.d. 12 kali pengeluaran rutin bulanan.
          </div>
          <p>Simpan dana darurat pada instrumen likuid dan aman seperti <em>Rekening Tabungan Terpisah</em> atau <em>Reksa Dana Pasar Uang (RDPU)</em>.</p>
        `
      }
    ]
  },
  {
    id: "modul-3",
    title: "Investasi Cerdas & Deteksi Investasi Bodong",
    category: "Investasi & Aset",
    icon: "trending-up",
    badge: "Proteksi Kekayaan",
    readTime: "7 Menit",
    summary: "Menerapkan prinsip 2L (Legal dan Logis), mengenali modus skema Ponzi & robot trading palsu, dan menyusun portofolio pemula.",
    chapters: [
      {
        title: "1. Prinsip 2L dari OJK: Legal dan Logis",
        content: `
          <p>Sebelum menyetorkan uang sepeser pun ke instrumen investasi, wajib verifikasi 2 aspek:</p>
          <ul>
            <li><strong>Legal:</strong> Periksa apakah perusahaannya berizin resmi dari OJK (untuk reksa dana, saham, p2p), Bappebti (untuk komoditas & kripto), atau Bank Indonesia.</li>
            <li><strong>Logis:</strong> Apakah imbal hasil yang dijanjikan masuk akal sesuai risiko pasar? Investasi yang menjanjikan keuntungan pasti di atas 10% per bulan tanpa risiko adalah 100% penipuan (Skema Ponzi).</li>
          </ul>
        `
      },
      {
        title: "2. Modus Penipuan Finansial Modern",
        content: `
          <p>Waspadai modus penipuan berkedok:</p>
          <ol>
            <li><strong>Tugas Berbayar / Like & Subscribe:</strong> Diminta deposit awal kecil lalu diberi komisi palsu, kemudian dipaksa deposit puluhan juta untuk mencairkan saldo.</li>
            <li><strong>Grup Sinyal Kripto / Saham VIP Telegram:</strong> Admin palsu mengklaim memiliki bocoran transaksi 'bandar'.</li>
            <li><strong>Robot Trading Otomatis:</strong> Menjanjikan passive income harian tanpa henti.</li>
          </ol>
        `
      }
    ]
  },
  {
    id: "modul-4",
    title: "Ekosistem Transaksi Digital & Keamanan Siber",
    category: "Literasi Digital",
    icon: "smartphone",
    badge: "Keamanan Digital",
    readTime: "5 Menit",
    summary: "Memanfaatkan QRIS dan PayLater secara bijak, serta proteksi ketat kode OTP, PIN, dan data pribadi dari kejahatan siber.",
    chapters: [
      {
        title: "1. Jebakan Belanja Implusif Fitur PayLater",
        content: `
          <p>Fitur <em>Buy Now Pay Later (BNPL)</em> menghilangkan hambatan psikologis rasa bersalah saat mengeluarkan uang (frictionless payment). Akibatnya, seseorang sering kali membeli barang yang tidak dibutuhkan karena merasa 'pembayaran baru bulan depan'.</p>
          <p>Gunakan aturan jeda <strong>24 Jam (24-Hour Rule)</strong>: Saat ingin membeli barang non-pokok menggunakan PayLater, tunggu 24 jam. Jika setelah 24 jam Anda merasa tidak membutuhkannya, batalkan pembelian.</p>
        `
      },
      {
        title: "2. Protokol Keamanan Siber Pribadi",
        content: `
          <ul>
            <li>Jangan pernah memberikan kode <strong>OTP (One-Time Password)</strong> kepada siapapun, termasuk yang mengaku staf bank atau CS aplikasi.</li>
            <li>Gunakan PIN / Password yang berbeda antara aplikasi perbankan, email utama, dan media sosial.</li>
            <li>Aktifkan fitur <strong>Two-Factor Authentication (2FA)</strong> dan biometrik sidik jari.</li>
            <li>Hindari bertransaksi finansial menggunakan jaringan Wi-Fi publik yang tidak berpassword.</li>
          </ul>
        `
      }
    ]
  },
  {
    id: "modul-5",
    title: "Navigasi Krisis & Menutup Kesenjangan Aksi (Action Gap)",
    category: "Tindakan Nyata",
    icon: "award",
    badge: "Tingkat Lanjut",
    readTime: "6 Menit",
    summary: "Mengubah wawasan teori menjadi kebiasaan finansial nyata, proteksi asuransi mikro, dan membangun ketahanan jangka panjang.",
    chapters: [
      {
        title: "1. Fenomena 'Action Gap': Tahu Teori Tapi Tidak Praktik",
        content: `
          <p>Hasil survei nasional SNLIK 2026 membuktikan bahwa dimensi <strong>Pengetahuan Finansial masyarakat sangat tinggi (97,24%)</strong>, namun dimensi <strong>Perilaku Finansial nyata hanya 80,43%</strong>.</p>
          <p>Banyak orang sudah tahu bahwa pinjol konsumtif berisiko atau menabung itu penting, tetapi tetap terjebak karena tidak memiliki sistem disiplin otomatis.</p>
        `
      },
      {
        title: "2. Membangun Sistem Finansial Otomatis (Autopilot)",
        content: `
          <p>Langkah praktis menerapkan sistem autopilot:</p>
          <ol>
            <li><strong>Auto-Debet di Hari Gajian:</strong> Begitu gaji masuk, sistem otomatis mentransfer 10-20% ke rekening tabungan/investasi sebelum uang sempat dibelanjakan.</li>
            <li><strong>Catat Pengeluaran dengan Aplikasi:</strong> Evaluasi pengeluaran bocor halus (biaya langganan tidak terpakai, jajan harian berlebih).</li>
            <li><strong>Proteksi Diri dengan BPJS Kesehatan & Asuransi Jiwa Murni:</strong> Hindari risiko kebangkrutan akibat biaya medis tak terduga.</li>
          </ol>
        `
      }
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Berapa batas maksimal rasio total cicilan utang bulanan yang dianjurkan dari total penghasilan bersih agar kondisi keuangan tetap sehat?",
    options: [
      "Maksimal 10% dari penghasilan",
      "Maksimal 30% dari penghasilan",
      "Maksimal 50% dari penghasilan",
      "Maksimal 70% dari penghasilan"
    ],
    correctIndex: 1,
    explanation: "Aturan Debt Service Ratio (DSR) ideal menetapkan total cicilan utang maksimal 30% dari pendapatan bulanan untuk mencegah jeratan gali lubang tutup lubang."
  },
  {
    id: 2,
    question: "Apa arti dari indikator TWP90 dalam statistik pinjaman digital (Fintech Lending OJK)?",
    options: [
      "Tingkat Waktu Pembayaran dalam 90 menit",
      "Tingkat Wanprestasi nasabah yang menunggak cicilan lebih dari 90 hari",
      "Total Warga Peminjam berumur di atas 90 tahun",
      "Tingkat Keberhasilan Pengembalian Dana 90%"
    ],
    correctIndex: 1,
    explanation: "TWP90 adalah ukuran kredit macet pada pinjol, yaitu persentase nasabah yang lalai melunasi utang lebih dari 90 hari sejak jatuh tempo."
  },
  {
    id: 3,
    question: "Manakah izin akses data smartphone yang DIPERBOLEHKAN bagi aplikasi pinjaman online resmi berizin OJK?",
    options: [
      "Semua kontak nomor telepon teman dan keluarga",
      "Galeri foto dan video pribadi",
      "Kamera, Mikrofon, dan Lokasi (CAMILAN)",
      "Pesan teks SMS dan riwayat panggilan telepon"
    ],
    correctIndex: 2,
    explanation: "OJK melarang keras pinjol mengakses kontak dan galeri foto. Aplikasi berizin hanya boleh meminta akses Camera, Microphone, dan Location (CAMILAN) untuk verifikasi identitas."
  },
  {
    id: 4,
    question: "Dalam formula perencanaan keuangan 50/30/20, alokasi 20% diperuntukkan untuk...",
    options: [
      "Keinginan belanja dan hiburan",
      "Kebutuhan pokok dan makan sehari-hari",
      "Tabungan, dana darurat, investasi, dan percepatan pelunasan utang",
      "Biaya sewa rumah dan tagihan utilitas"
    ],
    correctIndex: 2,
    explanation: "Alokasi 20% adalah pos masa depan yang dialokasikan khusus untuk membangun dana darurat, menabung, investasi, dan melunasi pokok utang."
  },
  {
    id: 5,
    question: "Apa yang harus Anda lakukan jika menerima SMS/WhatsApp menawarkan pinjaman instan tanpa jaminan dari nomor pribadi tidak dikenal?",
    options: [
      "Langsung mengklik tautan untuk cek limit pinjaman",
      "Mengabaikan, memblokir nomor, dan melaporkan karena merupakan ciri khas pinjol ilegal",
      "Mengirim foto KTP untuk meminta penjelasan suku bunga",
      "Mentransfer uang deposit pembukaan akun"
    ],
    correctIndex: 1,
    explanation: "Fintech lending legal berizin OJK dilarang menawarkan pinjaman melalui jalur komunikasi pribadi tanpa izin konsumen. Penawaran via WA/SMS pribadi adalah ciri khas pinjol ilegal."
  }
];

const INFOGRAPHICS_CAROUSEL = [
  {
    id: "map-spatial",
    tag: "Tipologi Spasial K=4",
    title: "Peta Klaster Ekosistem Keuangan Spasial",
    subtitle: "Analisis K-Means Clustering 38 Provinsi Indonesia",
    image: "peta klaster bayangan.png",
    chartImage: "babak2_k4_spatial_chart_final.png",
    statPrimary: "4 Tipologi",
    statLabel: "Klaster Karakteristik",
    statSecondary: "Calinski: 30.28",
    description: "Mengelompokkan 38 provinsi berdasarkan penetrasi peminjam, densitas QRIS, TWP90, literasi, inklusi, dan kecakapan digital.",
    accentColor: "#38BDF8"
  },
  {
    id: "scissors-effect",
    tag: "Fenomena Kritis",
    title: "Scissors Effect (Efek Gunting) 2026-2027",
    subtitle: "Jurang Kesenjangan Inklusi vs Literasi Keuangan",
    image: "babak1_scissors_effect_2027.png",
    chartImage: null,
    statPrimary: "24,04%",
    statLabel: "Lebar Jurang Gap FLGI",
    statSecondary: "Inklusi 93,61% vs Literasi 69,57%",
    description: "Akses produk keuangan melesat cepat tanpa diimbangi pemahaman risiko dan mitigasi utang, memicu kerentanan gagal bayar.",
    accentColor: "#F43F5E"
  },
  {
    id: "fintech-allocation",
    tag: "Struktur Pinjaman",
    title: "Alokasi Fintech Lending Konsumtif vs Produktif",
    subtitle: "Dominasi Pinjaman Perorangan Non-Produktif",
    image: "donut_penyaluran_2025_transparent.png",
    chartImage: "babak3_donut_fintech_allocation.png",
    statPrimary: "77,88%",
    statLabel: "Porsi Utang Konsumtif",
    statSecondary: "Produktif UMKM hanya 22,12%",
    description: "Mayoritas pembiayaan P2P lending mengalir untuk konsumsi gaya hidup, memperbesar risiko gelembung kredit macet perkotaan.",
    accentColor: "#F59E0B"
  },
  {
    id: "radar-snlik",
    tag: "Dimensi Literasi",
    title: "The Action Gap: 5 Dimensi SNLIK 2026",
    subtitle: "Pengetahuan Finansial Tinggi vs Perilaku Nyata",
    image: "babak3_radar_segi_lima_transparent.png",
    chartImage: "babak3_radar_snlik_dimensions.png",
    statPrimary: "97,2% vs 80,4%",
    statLabel: "Pengetahuan vs Perilaku",
    statSecondary: "Gap Perilaku 16,81%",
    description: "Masyarakat Indonesia sangat paham nama produk keuangan (97,24%), namun baru 80,43% yang berdisiplin nyata dalam tindakan.",
    accentColor: "#10B981"
  },
  {
    id: "qris-forecast",
    tag: "Pertumbuhan Digital",
    title: "Ledakan Transaksi Merchant QRIS (2023-2026)",
    subtitle: "Akselerasi Pembayaran Cashless Nasional",
    image: "forecast_qris_standalone_transparent.png",
    chartImage: "forecast_transaksi_digital_2027.png",
    statPrimary: "17x Lipat",
    statLabel: "Lonjakan Volume 3 Tahun",
    statSecondary: "41,28 Juta Merchant Terdaftar",
    description: "QRIS menjadi katalis inklusi tercepat dalam sejarah perbankan Indonesia, merambah dari mall metropolitan hingga pasar tradisional.",
    accentColor: "#8B5CF6"
  }
];

const MYTHS_FACTS = [
  {
    id: 1,
    icon: "card",
    myth: "PayLater adalah uang ekstra atau hadiah yang bebas dipakai kapan saja tanpa beban risiko.",
    fact: "PayLater adalah utang formal yang tercatat langsung di SLIK OJK (iDeb). Jika menunggak, bunga harian berjalan dan riwayat kredit Anda tercoreng seumur hidup.",
    category: "Utang & Pinjol",
    badge: "Waspada PayLater"
  },
  {
    id: 2,
    icon: "phone",
    myth: "Aplikasi pinjol resmi legal berhak menyadap semua nomor kontak telepon dan galeri foto kita.",
    fact: "Pinjol resmi berizin OJK HANYA boleh mengakses Kamera, Mikrofon, dan Lokasi (CAMILAN). Penyadapan kontak telepon dan galeri foto adalah 100% ciri khas pinjol ILEGAL!",
    category: "Keamanan Digital",
    badge: "Izin CAMILAN"
  },
  {
    id: 3,
    icon: "trending",
    myth: "Investasi yang menjanjikan keuntungan pasti 15-30% per bulan tanpa risiko itu sangat menguntungkan.",
    fact: "Tidak ada investasi legal di dunia dengan jaminan imbal hasil pasti berlipat ganda tanpa risiko. Itu adalah skema Ponzi penipuan berantai!",
    category: "Investasi Bodong",
    badge: "Prinsip 2L"
  },
  {
    id: 4,
    icon: "shield",
    myth: "Dana darurat hanya dibutuhkan oleh orang yang sudah berkeluarga atau sudah punya anak.",
    fact: "Orang lajang / belum menikah pun wajib memiliki dana darurat minimal 3–6 kali pengeluaran rutin bulanan untuk mengantisipasi PHK, sakit, atau krisis mendadak.",
    category: "Manajemen Kas",
    badge: "Dana Darurat"
  },
  {
    id: 5,
    icon: "refresh",
    myth: "Skema gali lubang tutup lubang (utang baru untuk bayar utang lama) adalah solusi saat terdesak.",
    fact: "Gali lubang tutup lubang justru melipatgandakan bunga pokok secara eksponensial dan mempercepat kebangkrutan finansial dalam hitungan bulan.",
    category: "Solusi Utang",
    badge: "Jebakan Utang"
  }
];

// Pemetaan gambar lokal autentik untuk 38 provinsi dari folder Gambar Provinsi
const PROVINCE_LOCAL_IMAGES = {
  "Aceh": "Gambar Provinsi/Aceh.webp",
  "Bali": "Gambar Provinsi/Bali.jpg",
  "Banten": "Gambar Provinsi/Banten.jpg",
  "Bengkulu": "Gambar Provinsi/Bengkulu.jpg",
  "DI Yogyakarta": "Gambar Provinsi/DI Yogyakarta.jpg",
  "DKI Jakarta": "Gambar Provinsi/DKI Jakarta.webp",
  "Gorontalo": "Gambar Provinsi/Gorontalo.jpg",
  "Jambi": "Gambar Provinsi/Jambi.jpg",
  "Jawa Barat": "Gambar Provinsi/Jawa Barat.jpg",
  "Jawa Tengah": "Gambar Provinsi/Jawa Tengah.jpg",
  "Jawa Timur": "Gambar Provinsi/Jawa Timur.jpg",
  "Kalimantan Barat": "Gambar Provinsi/Kalimantan Barat.webp",
  "Kalimantan Selatan": "Gambar Provinsi/Kalimantan Selatan.webp",
  "Kalimantan Tengah": "Gambar Provinsi/Kalimantan Tengah.jpg",
  "Kalimantan Timur": "Gambar Provinsi/Kalimantan Timur.jpg",
  "Kalimantan Utara": "Gambar Provinsi/Kalimantan Utara.jpg",
  "Kepulauan Bangka Belitung": "Gambar Provinsi/Kepulauan Bangka Belitung.jpg",
  "Kepulauan Riau": "Gambar Provinsi/Kepulauan Riau.jpeg",
  "Lampung": "Gambar Provinsi/Lampung.jpg",
  "Maluku": "Gambar Provinsi/Maluku.jpg",
  "Maluku Utara": "Gambar Provinsi/Maluku Utara.jpg",
  "Nusa Tenggara Barat": "Gambar Provinsi/Nusa Tenggara Barat.webp",
  "Nusa Tenggara Timur": "Gambar Provinsi/Nusa Tenggara Timur.jpg",
  "Papua": "Gambar Provinsi/Papua.jpg",
  "Papua Barat": "Gambar Provinsi/Papua Barat.jpg",
  "Papua Barat Daya": "Gambar Provinsi/Papua Barat Daya.jpg",
  "Papua Pegunungan": "Gambar Provinsi/Papua Pegunungan.jpeg",
  "Papua Selatan": "Gambar Provinsi/Papua Selatan.jpg",
  "Papua Tengah": "Gambar Provinsi/Papua Tengah.webp",
  "Riau": "Gambar Provinsi/Riau.jpg",
  "Sulawesi Barat": "Gambar Provinsi/Sulawesi Barat.jpg",
  "Sulawesi Selatan": "Gambar Provinsi/Sulawesi Selatan.jpeg",
  "Sulawesi Tengah": "Gambar Provinsi/Sulawesi Tengah.jpg",
  "Sulawesi Tenggara": "Gambar Provinsi/Sulawesi Tenggara.jpeg",
  "Sulawesi Utara": "Gambar Provinsi/Sulawesi Utara.jpg",
  "Sumatera Barat": "Gambar Provinsi/Sumatera Barat.jpg",
  "Sumatera Selatan": "Gambar Provinsi/Sumatera Selatan.jpg",
  "Sumatera Utara": "Gambar Provinsi/Sumatera Utara.webp"
};

// Menetapkan path gambar lokal ke setiap objek provinsi
if (typeof PROVINCES_DATA !== 'undefined') {
  PROVINCES_DATA.forEach(p => {
    if (PROVINCE_LOCAL_IMAGES[p.nama]) {
      p.heroImage = PROVINCE_LOCAL_IMAGES[p.nama];
    }
  });
}


