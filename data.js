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
    color: "#be3618",
    title: "Outlier Risiko Kredit Tinggi",
    shortDesc: "Provinsi DKI Jakarta dikelompokkan ke dalam klaster pertama, yaitu daerah dimana tingkat literasi tinggi belum mampu meredam risiko kredit bermasalah yang tinggi.",
    characteristics: "Ekosistem digital paling matang di Indonesia dengan penetrasi borrower dan merchant tertinggi. Namun, menjadi outlier berisiko tinggi karena rasio gagal bayar pinjaman (TWP90) menembus ambang batas waspada."
  },
  3: {
    id: 3,
    name: "Cluster 2",
    badgeLabel: "Cluster 2",
    badgeClass: "badge-c2",
    color: "#2563eb",
    title: "Ekosistem Digital Masif & Stabil",
    shortDesc: "Pusat pertumbuhan ekonomi digital nasional dengan volume transaksi masif, literasi matang, dan risiko kredit yang terkendali.",
    characteristics: "Menampung lebih dari 70% total perputaran utang pinjol dan merchant QRIS nasional dengan rasio kredit macet yang wajar dan terkendali."
  },
  2: {
    id: 2,
    name: "Cluster 3",
    badgeLabel: "Cluster 3",
    badgeClass: "badge-c3",
    color: "#f09228",
    title: "Pasar Berkembang & Terkendali",
    shortDesc: "Wilayah berkembang dengan adopsi digital seimbang, perilaku keuangan hati-hati (prudent), dan rasio kredit macet yang sangat sehat.",
    characteristics: "Pertumbuhan merchant dan peminjam bergerak wajar pada skala menengah dengan tingkat literasi moderat serta kualitas kredit yang aman."
  },
  1: {
    id: 1,
    name: "Cluster 4",
    badgeLabel: "Cluster 4",
    badgeClass: "badge-c4",
    color: "#7b8fa1",
    title: "Frontier Digital 3T",
    shortDesc: "Wilayah 3T dan frontier digital yang minim infrastruktur dengan tingkat literasi serta adopsi keuangan paling rendah.",
    characteristics: "Penetrasi borrower dan merchant sangat minim akibat kendala infrastruktur. Angka TWP90 tampak rendah murni karena ketiadaan akses layanan formal."
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
    clusterDesc: "Provinsi DKI Jakarta diklasterkan ke dalam klaster pertama, yaitu daerah dimana tingkat literasi tinggi belum mampu meredam risiko kredit bermasalah yang tinggi.",
    rekeningPer1000: 264.32,
    rekeningKet: "Densitas peminjam fintech tertinggi secara nasional (2,82 Juta akun)",
    merchantPer1000: 527.81,
    merchantKet: "Pusat ekosistem merchant QRIS terpadat di Indonesia (5,63 Juta)",
    twp90: 11.58,
    twp90Ket: "Tingkat kredit macet kritis (3,7x di atas ambang aman OJK 5%)",
    literasi: 84.01,
    literasiKet: "Masyarakatnya sudah sangat cakap finansial (Peringkat 1 Nasional)",
    inklusi: 99.74,
    inklusiKet: "Hampir seluruh populasi terhubung ekosistem keuangan formal",
    skorImdi: 53.73,
    imdiKet: "Kecakapan literasi digital masyarakat berada di level tertinggi",
    totalRekening: 2822388,
    outstandingMiliar: 15622.55,
    totalMerchantRibu: 5636,
    pendudukRibu: 10678,
    heroImage: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Provinsi DKI Jakarta mencatat ekosistem digital paling matang dengan Inklusi 99,74% dan Literasi 84,01%. Namun, wilayah ini menjadi outlier berisiko tinggi karena rasio kredit macet (TWP90) menembus 11,58% (jauh di atas ambang batas aman 5%).",
    akarMasalah: "Kemudahan akses pinjaman digital berpadu dengan tingginya tekanan belanja gaya hidup perkotaan, memicu akumulasi utang konsumtif.",
    rekomendasi: "Batasi total cicilan maksimal 30% dari penghasilan bulanan dan hindari skema gali lubang tutup lubang.",
    rekomendasiBadge: "NZ"
  },
  {
    id: "jawa-barat",
    nama: "Jawa Barat",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Pusat volume pinjaman dan merchant QRIS terbesar di Indonesia dengan ekosistem digital yang sangat padat dan dinamis.",
    rekeningPer1000: 140.91,
    rekeningKet: "Pangsa peminjam fintech terbesar se-Indonesia",
    merchantPer1000: 193.01,
    merchantKet: "Densitas merchant UMKM sangat tinggi",
    twp90: 3.29,
    twp90Ket: "Tingkat kredit macet masih di bawah batas waspada",
    literasi: 67.14,
    literasiKet: "Pemahaman produk keuangan tergolong moderat",
    inklusi: 95.76,
    inklusiKet: "Akses terhadap perbankan dan fintech sangat luas",
    skorImdi: 52.37,
    imdiKet: "Keterampilan digital masyarakat sangat baik",
    totalRekening: 7152695,
    outstandingMiliar: 23938.83,
    totalMerchantRibu: 9797,
    pendudukRibu: 50759,
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Barat merupakan pusat pasar fintech lending nasional dengan outstanding mencapai Rp23,94 Triliun. Rasio TWP90 berada di 3,29%, namun kesenjangan literasi (67,14%) dibanding inklusi (95,76%) menuntut edukasi masif di kawasan suburban.",
    akarMasalah: "Tingginya ketergantungan masyarakat pinggiran kota dan pekerja sektor informal pada pinjol instan untuk kebutuhan dana mendesak.",
    rekomendasi: "Bangun pos dana darurat minimal 3 bulan pengeluaran rutin sebelum mengakses pinjaman konsumtif.",
    rekomendasiBadge: "TIPS"
  },
  {
    id: "jawa-timur",
    nama: "Jawa Timur",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Pilar ekonomi kawasan timur pulau Jawa dengan densitas merchant UMKM dan perputaran modal digital yang kuat.",
    rekeningPer1000: 75.47,
    rekeningKet: "Aktivitas pinjaman digital cukup terkendali",
    merchantPer1000: 131.03,
    merchantKet: "Perkembangan adopsi QRIS merata di daerah",
    twp90: 5.02,
    twp90Ket: "Rasio TWP90 menyentuh ambang batas waspada 5%",
    literasi: 72.07,
    literasiKet: "Literasi masyarakat tergolong baik dan matang",
    inklusi: 91.88,
    inklusiKet: "Akses perbankan dan koperasi kuat",
    skorImdi: 49.87,
    imdiKet: "Kecakapan digital merata di sektor perdagangan",
    totalRekening: 3176585,
    outstandingMiliar: 11423.26,
    totalMerchantRibu: 5515,
    pendudukRibu: 42089.3,
    heroImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Timur mencatat outstanding Rp11,42 Triliun dengan TWP90 di level 5,02%. Literasi finansial yang cukup tinggi (72,07%) perlu terus diarahkan pada pemilahan utang produktif bagi UMKM.",
    akarMasalah: "Tekanan likuiditas pelaku usaha mikro di masa transisi ekonomi memicu keterlambatan pembayaran tempo singkat.",
    rekomendasi: "Gunakan pinjaman digital khusus untuk perputaran barang dagangan (modal kerja), bukan konsumsi keluarga.",
    rekomendasiBadge: "SOLUSI"
  },
  {
    id: "jawa-tengah",
    nama: "Jawa Tengah",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Kawasan dengan perpaduan ekonomi tradisional yang kuat dan percepatan penetrasi transaksi digital yang stabil.",
    rekeningPer1000: 71.28,
    rekeningKet: "Penetrasi peminjam berada pada level stabil",
    merchantPer1000: 118.95,
    merchantKet: "Merchant QRIS merambah pasar tradisional",
    twp90: 2.81,
    twp90Ket: "Kualitas kredit sangat sehat dan aman",
    literasi: 72.83,
    literasiKet: "Masyarakat memiliki literasi keuangan yang baik",
    inklusi: 95.59,
    inklusiKet: "Inklusi tinggi didukung perbankan daerah",
    skorImdi: 53.75,
    imdiKet: "Keterampilan digital tergolong unggul",
    totalRekening: 2725309,
    outstandingMiliar: 8017.09,
    totalMerchantRibu: 4548,
    pendudukRibu: 38233.9,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Jawa Tengah menunjukkan performa finansial yang seimbang dengan TWP90 hanya 2,81% dan literasi 72,83%. Penetrasi 4,54 Juta merchant QRIS menjadi motor penggerak ekonomi kerakyatan yang solid.",
    akarMasalah: "Risiko masuknya tawaran investasi ilegal berkedok arisan online yang menyasar masyarakat non-metropolitan.",
    rekomendasi: "Terapkan prinsip 2L (Legal dan Logis) sebelum menitipkan dana pada instrumen investasi apapun.",
    rekomendasiBadge: "EDUKASI"
  },
  {
    id: "di-yogyakarta",
    nama: "DI Yogyakarta",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Kota pelajar dan budaya dengan literasi keuangan tinggi serta adopsi ekosistem cashless yang sangat pesat.",
    rekeningPer1000: 106.65,
    rekeningKet: "Banyak diakses kalangan muda dan mahasiswa",
    merchantPer1000: 289.30,
    merchantKet: "Densitas QRIS tertinggi kedua di Jawa",
    twp90: 2.85,
    twp90Ket: "Tingkat kredit bermasalah tetap rendah dan terjaga",
    literasi: 76.44,
    literasiKet: "Tingkat literasi keuangan sangat tinggi",
    inklusi: 98.74,
    inklusiKet: "Hampir seluruh penduduk terhubung perbankan",
    skorImdi: 52.93,
    imdiKet: "Masyarakat sangat cakap ekosistem digital",
    totalRekening: 403289,
    outstandingMiliar: 1363.58,
    totalMerchantRibu: 1094,
    pendudukRibu: 3781.5,
    heroImage: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
    insightBox: "DI Yogyakarta memiliki inklusi 98,74% dan literasi 76,44%. Densitas merchant QRIS mencapai 289,3 per 1.000 penduduk, didukung oleh komunitas akademis dan pariwisata yang sadar finansial.",
    akarMasalah: "Penggunaan fitur PayLater di kalangan mahasiswa tanpa pemahaman konsekuensi riwayat kredit (SLIK OJK).",
    rekomendasi: "Jaga skor kredit perbankan sejak dini dengan tidak pernah menunggak tagihan PayLater sekalipun nominal kecil.",
    rekomendasiBadge: "PENTING"
  },
  {
    id: "banten",
    nama: "Banten",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Penyangga metropolitan barat dengan volume transaksi tinggi namun memiliki jurang kesenjangan antar wilayah.",
    rekeningPer1000: 147.04,
    rekeningKet: "Aktivitas pinjaman digital cukup padat",
    merchantPer1000: 217.67,
    merchantKet: "Merchant QRIS terkonsentrasi di Tangerang Raya",
    twp90: 2.43,
    twp90Ket: "Kredit bermasalah masih dalam batas aman",
    literasi: 58.46,
    literasiKet: "Literasi berada di bawah rata-rata nasional",
    inklusi: 91.07,
    inklusiKet: "Inklusi cukup tinggi",
    skorImdi: 48.16,
    imdiKet: "Keterampilan digital memadai",
    totalRekening: 1843509,
    outstandingMiliar: 7197.10,
    totalMerchantRibu: 2729,
    pendudukRibu: 12537.4,
    heroImage: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Banten memiliki gap inklusi-literasi yang lebar (Inklusi 91,07% vs Literasi 58,46%). Kesenjangan antara Tangerang Raya dengan Banten Selatan membutuhkan pemerataan literasi keuangan terstruktur.",
    akarMasalah: "Kemudahan pinjaman online yang tidak diimbangi pemahaman bunga harian dan denda keterlambatan.",
    rekomendasi: "Pastikan rasio total utang tidak melebihi 30% dari penghasilan bersih bulanan.",
    rekomendasiBadge: "SARAN"
  },
  {
    id: "bali",
    nama: "Bali",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Pusat pariwisata internasional dengan penetrasi transaksi non-tunai yang maju dan literasi finansial yang matang.",
    rekeningPer1000: 101.41,
    rekeningKet: "Penetrasi peminjam aktif proporsional",
    merchantPer1000: 248.36,
    merchantKet: "Penerimaan QRIS sangat tinggi di sektor wisata",
    twp90: 2.13,
    twp90Ket: "Kredit macet sangat rendah dan terkendali",
    literasi: 78.77,
    literasiKet: "Literasi keuangan masuk 3 besar nasional",
    inklusi: 96.24,
    inklusiKet: "Inklusi keuangan sangat matang",
    skorImdi: 50.97,
    imdiKet: "Kecakapan digital pariwisata sangat baik",
    totalRekening: 452439,
    outstandingMiliar: 2104.23,
    totalMerchantRibu: 1108,
    pendudukRibu: 4461.3,
    heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Bali mencatat kinerja finansial teladan dengan literasi 78,77% dan TWP90 rendah 2,13%. Ekosistem pariwisata berhasil mengadopsi QRIS secara inklusif tanpa memicu ledakan kredit macet.",
    akarMasalah: "Volatilitas pendapatan musiman di industri pariwisata yang memerlukan manajemen arus kas ketat.",
    rekomendasi: "Siapkan pos cadangan kas bisnis minimal 6 bulan untuk mengantisipasi penurunan musiman (low season).",
    rekomendasiBadge: "BEST"
  },
  {
    id: "sumatera-utara",
    nama: "Sumatera Utara",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Pusat ekonomi pulau Sumatera dengan pertumbuhan transaksi digital yang pesat dan profil risiko yang sehat.",
    rekeningPer1000: 67.60,
    rekeningKet: "Penetrasi pinjaman tumbuh stabil",
    merchantPer1000: 109.72,
    merchantKet: "Merchant QRIS tersebar di perkotaan & perkebunan",
    twp90: 1.70,
    twp90Ket: "Kualitas kredit sangat sehat",
    literasi: 71.57,
    literasiKet: "Literasi berada di atas rata-rata nasional",
    inklusi: 92.01,
    inklusiKet: "Inklusi cukup baik",
    skorImdi: 44.69,
    imdiKet: "Keterampilan digital berkembang",
    totalRekening: 1067071,
    outstandingMiliar: 3564.25,
    totalMerchantRibu: 1732,
    pendudukRibu: 15785.8,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sumatera Utara mencatat outstanding pinjol Rp3,56 Triliun dengan TWP90 rendah 1,70%. Pertumbuhan merchant QRIS 1,73 Juta menjadi bukti akselerasi digital yang tetap menjaga kehati-hatian.",
    akarMasalah: "Perlunya perlindungan terhadap penipuan berkedok undian digital dan social engineering perbankan.",
    rekomendasi: "Jangan pernah membagikan kode OTP, PIN, atau data perbankan kepada pihak manapun.",
    rekomendasiBadge: "SECURITY"
  },
  {
    id: "sumatera-barat",
    nama: "Sumatera Barat",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Budaya berniaga yang kuat melandasi tingginya literasi keuangan dan kehati-hatian dalam mengelola pinjaman.",
    rekeningPer1000: 68.99,
    rekeningKet: "Peminjam aktif cenderung terukur",
    merchantPer1000: 123.09,
    merchantKet: "Pedagang pasar aktif mengadopsi QRIS",
    twp90: 1.88,
    twp90Ket: "Kredit bermasalah sangat rendah",
    literasi: 76.65,
    literasiKet: "Literasi tinggi, masuk 6 besar nasional",
    inklusi: 95.37,
    inklusiKet: "Inklusi keuangan tinggi",
    skorImdi: 54.15,
    imdiKet: "Keterampilan digital sangat baik",
    totalRekening: 408031,
    outstandingMiliar: 1570.17,
    totalMerchantRibu: 728,
    pendudukRibu: 5914.3,
    heroImage: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sumatera Barat memiliki literasi keuangan 76,65% dan TWP90 1,88%. Nilai kearifan lokal dalam berdagang berkontribusi nyata pada kebiasaan mengelola utang secara bertanggung jawab.",
    akarMasalah: "Peluang diversifikasi produk investasi syariah masih perlu diperluas bagi kalangan generasi muda.",
    rekomendasi: "Manfaatkan sukuk ritel dan reksa dana syariah untuk pengembangan aset jangka menengah-panjang.",
    rekomendasiBadge: "GROWTH"
  },
  {
    id: "aceh",
    nama: "Aceh",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Provinsi berbasis keuangan syariah dengan tingkat kredit macet pinjaman digital terendah kedua di Indonesia.",
    rekeningPer1000: 16.28,
    rekeningKet: "Penetrasi pinjaman konvensional sangat minim",
    merchantPer1000: 49.24,
    merchantKet: "Merchant QRIS bertumbuh di sektor UMKM",
    twp90: 0.90,
    twp90Ket: "TWP90 di bawah 1%, sangat prima",
    literasi: 66.33,
    literasiKet: "Pemahaman keuangan berbasis prinsip syariah",
    inklusi: 96.43,
    inklusiKet: "Inklusi tinggi didukung LKS",
    skorImdi: 47.69,
    imdiKet: "Kecakapan digital berkembang",
    totalRekening: 91587,
    outstandingMiliar: 190.06,
    totalMerchantRibu: 277,
    pendudukRibu: 5626,
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Aceh mencatatkan TWP90 terendah di Sumatera (0,90%) dengan inklusi mencapai 96,43%. Penerapan Qanun Lembaga Keuangan Syariah membentuk budaya keuangan yang prudent dan minim spekulasi.",
    akarMasalah: "Perluasan akses fintech syariah legal berizin OJK untuk mendukung pembiayaan modal usaha mikro.",
    rekomendasi: "Prioritaskan pembiayaan dengan akad syariah yang jelas (Murabahah / Mudharabah) tanpa riba dan denda berlipat.",
    rekomendasiBadge: "SYARIAH"
  },
  {
    id: "kalimantan-timur",
    nama: "Kalimantan Timur",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Pusat pertumbuhan ekonomi baru IKN dengan perputaran dana investasi dan adopsi pembayaran digital yang ekspansif.",
    rekeningPer1000: 110.30,
    rekeningKet: "Aktivitas transaksi finansial cukup tinggi",
    merchantPer1000: 195.66,
    merchantKet: "Pertumbuhan merchant QRIS sangat pesat",
    twp90: 1.63,
    twp90Ket: "Kualitas kredit sangat baik dan aman",
    literasi: 73.12,
    literasiKet: "Literasi tinggi didukung kawasan perkotaan",
    inklusi: 96.31,
    inklusiKet: "Inklusi keuangan sangat matang",
    skorImdi: 50.80,
    imdiKet: "Kecakapan digital masyarakat mapan",
    totalRekening: 470731,
    outstandingMiliar: 1576.94,
    totalMerchantRibu: 835,
    pendudukRibu: 4267.6,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kalimantan Timur memiliki profil keuangan prima (Literasi 73,12%, TWP90 1,63%). Pertumbuhan ekonomi kawasan IKN mendorong adopsi teknologi finansial yang tetap berorientasi pada produktivitas.",
    akarMasalah: "Ekspektasi kenaikan properti dan biaya hidup yang membutuhkan perencanaan keuangan jangka panjang.",
    rekomendasi: "Alokasikan 20% penghasilan untuk investasi instrumen riil atau pasar modal yang terdaftar di OJK.",
    rekomendasiBadge: "IKN HUB"
  },
  {
    id: "sulawesi-selatan",
    nama: "Sulawesi Selatan",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Hub perdagangan utama kawasan Indonesia Timur dengan volume transaksi merchant dan perbankan yang kokoh.",
    rekeningPer1000: 65.40,
    rekeningKet: "Peminjam fintech berada pada skala wajar",
    merchantPer1000: 145.66,
    merchantKet: "Merchant QRIS tersebar merata di sentra dagang",
    twp90: 1.67,
    twp90Ket: "Kredit bermasalah sangat terkendali",
    literasi: 61.03,
    literasiKet: "Literasi perlu ditingkatkan di area pesisir",
    inklusi: 94.27,
    inklusiKet: "Inklusi keuangan tergolong tinggi",
    skorImdi: 51.42,
    imdiKet: "Keterampilan digital merata",
    totalRekening: 625413,
    outstandingMiliar: 2394.11,
    totalMerchantRibu: 1393,
    pendudukRibu: 9563.1,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Sulawesi Selatan memimpin perputaran ekonomi Indonesia Timur dengan outstanding Rp2,39 Triliun dan TWP90 terjaga di 1,67%. Peningkatan literasi dari 61,03% akan memperkokoh ketahanan finansial rumah tangga.",
    akarMasalah: "Dorongan konsumsi sosial dan pesta adat yang sering kali dibiayai melalui pinjaman jangka pendek.",
    rekomendasi: "Rencanakan pos anggaran dana sosial/adat sejak jauh hari tanpa mengorbankan tabungan pokok keluarga.",
    rekomendasiBadge: "FIN-PLAN"
  },
  {
    id: "papua-pegunungan",
    nama: "Papua Pegunungan",
    cluster: 1,
    clusterBadge: "Cluster 4",
    clusterDesc: "Daerah Otonomi Baru di kawasan dataran tinggi yang menghadapi tantangan berat dalam konektivitas dan literasi dasar.",
    rekeningPer1000: 1.78,
    rekeningKet: "Akses peminjaman formal sangat minim",
    merchantPer1000: 10.10,
    merchantKet: "Adopsi QRIS masih tahap awal",
    twp90: 0.83,
    twp90Ket: "Angka rendah murni ketiadaan akses layanan",
    literasi: 17.55,
    literasiKet: "Literasi terendah di Indonesia",
    inklusi: 71.38,
    inklusiKet: "Inklusi tertinggal dari rata-rata nasional",
    skorImdi: 36.72,
    imdiKet: "Literasi digital memerlukan pendampingan",
    totalRekening: 2642,
    outstandingMiliar: 6.74,
    totalMerchantRibu: 15,
    pendudukRibu: 1484.9,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Papua Pegunungan berada di Cluster 4 (Lagging Frontier) dengan literasi 17,55%. Keterbatasan jaringan internet dan fasilitas perbankan fisik menjadi faktor utama tertinggalnya penetrasi ekosistem digital.",
    akarMasalah: "Keterisolasian geografis dan minimnya edukasi finansial dasar dalam bahasa dan pendekatan lokal.",
    rekomendasi: "Prioritaskan perluasan agen laku pandai dan literasi dasar pengelolaan uang tunai sebelum pengenalan fintech.",
    rekomendasiBadge: "FRONTIER"
  },
  {
    id: "maluku-utara",
    nama: "Maluku Utara",
    cluster: 1,
    clusterBadge: "Cluster 4",
    clusterDesc: "Provinsi kepulauan dengan pertumbuhan industri hilirisasi mineral yang belum sepenuhnya terintegrasi dengan ekosistem keuangan inklusif.",
    rekeningPer1000: 43.27,
    rekeningKet: "Penetrasi peminjam bergerak lambat",
    merchantPer1000: 96.08,
    merchantKet: "Merchant QRIS mulai berkembang di pelabuhan",
    twp90: 1.25,
    twp90Ket: "Kredit macet rendah karena volume kecil",
    literasi: 48.65,
    literasiKet: "Literasi berada pada level dasar",
    inklusi: 77.18,
    inklusiKet: "Inklusi masih di bawah rata-rata nasional",
    skorImdi: 46.35,
    imdiKet: "Kecakapan digital terus berproses",
    totalRekening: 59441,
    outstandingMiliar: 312.09,
    totalMerchantRibu: 132,
    pendudukRibu: 1373.8,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Maluku Utara memiliki tingkat literasi 48,65% dan inklusi 77,18%. Pertumbuhan ekonomi berbasis industri smelter perlu diimbangi dengan literasi keuangan bagi para tenaga kerja lokal.",
    akarMasalah: "Peningkatan pendapatan pekerja yang tidak diiringi pengetahuan menabung dan investasi aman.",
    rekomendasi: "Bangun kebiasaan auto-debet tabungan berjangka saat menerima gaji untuk mengamankan masa depan.",
    rekomendasiBadge: "SAVING"
  },
  {
    id: "nusa-tenggara-barat",
    nama: "Nusa Tenggara Barat",
    cluster: 2,
    clusterBadge: "Cluster 3",
    clusterDesc: "Daerah berkembang dengan sektor pariwisata Mandalika dan pertanian yang terus memperluas pemanfaatan kanal digital.",
    rekeningPer1000: 42.53,
    rekeningKet: "Pemanfaatan pinjaman digital proporsional",
    merchantPer1000: 77.47,
    merchantKet: "Merchant QRIS meluas di sentra pariwisata",
    twp90: 3.39,
    twp90Ket: "Kredit macet masih dalam ambang wajar",
    literasi: 64.60,
    literasiKet: "Literasi keuangan berkembang stabil",
    inklusi: 93.40,
    inklusiKet: "Inklusi keuangan cukup baik",
    skorImdi: 47.59,
    imdiKet: "Kecakapan digital memadai",
    totalRekening: 243756,
    outstandingMiliar: 923.01,
    totalMerchantRibu: 444,
    pendudukRibu: 5731.1,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "NTB mencatat inklusi 93,40% dan TWP90 3,39%. Sinergi antara gelaran event internasional Mandalika dan digitalisasi pembayaran mendorong UMKM lokal naik kelas.",
    akarMasalah: "Ketergantungan pedagang musiman terhadap permodalan informal dengan bunga mencekik.",
    rekomendasi: "Manfaatkan fasilitas KUR Digital atau fintech lending berizin OJK dengan bunga transparan.",
    rekomendasiBadge: "UMKM"
  },
  {
    id: "papua-tengah",
    nama: "Papua Tengah",
    cluster: 1,
    clusterBadge: "Cluster 4",
    clusterDesc: "Kawasan frontier dengan tantangan geografis pegunungan dan keterbatasan akses perbankan konvensional.",
    rekeningPer1000: 7.41,
    rekeningKet: "Jumlah peminjam digital sangat sedikit",
    merchantPer1000: 32.83,
    merchantKet: "Merchant QRIS terkonsentrasi di Nabire/Timika",
    twp90: 1.01,
    twp90Ket: "Kredit bermasalah rendah karena pasar belum terbentuk",
    literasi: 34.63,
    literasiKet: "Literasi keuangan berada di zona merah",
    inklusi: 72.21,
    inklusiKet: "Akses perbankan sangat terbatas",
    skorImdi: 44.13,
    imdiKet: "Perlu penguatan literasi digital dasar",
    totalRekening: 11057,
    outstandingMiliar: 36.02,
    totalMerchantRibu: 49,
    pendudukRibu: 1492.3,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Papua Tengah mencatat literasi 34,63% dan outstanding pinjaman Rp36 Miliar. Transformasi keuangan digital di daerah ini membutuhkan penguatan jaringan BTS dan agen keuangan komunitas.",
    akarMasalah: "Rendahnya pemahaman mengenai sistem perbankan dan risiko penipuan skema piramida.",
    rekomendasi: "Kenali ciri produk keuangan legal dan gunakan rekening resmi untuk menerima bantuan sosial atau upah kerja.",
    rekomendasiBadge: "INFO"
  },
  {
    id: "kalimantan-selatan",
    nama: "Kalimantan Selatan",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Pusat perniagaan sungai dan perdagangan dengan literasi keuangan tertinggi kedua di seluruh Indonesia.",
    rekeningPer1000: 80.10,
    rekeningKet: "Aktivitas peminjaman terkelola dengan baik",
    merchantPer1000: 145.26,
    merchantKet: "QRIS diterima luas di pasar terapung & modern",
    twp90: 2.08,
    twp90Ket: "Tingkat kredit bermasalah sangat sehat",
    literasi: 79.69,
    literasiKet: "Literasi keuangan tertinggi kedua nasional",
    inklusi: 94.88,
    inklusiKet: "Inklusi keuangan sangat matang",
    skorImdi: 49.45,
    imdiKet: "Masyarakat cakap teknologi transaksi",
    totalRekening: 346290,
    outstandingMiliar: 1112.23,
    totalMerchantRibu: 628,
    pendudukRibu: 4323.3,
    heroImage: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kalimantan Selatan merupakan role model literasi keuangan nasional (79,69%) dengan TWP90 terjaga di 2,08%. Masyarakat menunjukkan kedewasaan finansial yang tinggi dalam memanfaatkan instrumen digital.",
    akarMasalah: "Perlunya perluasan akses modal usaha bagi pengrajin lokal untuk menembus pasar ekspor.",
    rekomendasi: "Gunakan pencatatan keuangan digital terpisah antara kas rumah tangga dan kas usaha perniagaan.",
    rekomendasiBadge: "TELADAN"
  },
  {
    id: "kepulauan-riau",
    nama: "Kepulauan Riau",
    cluster: 3,
    clusterBadge: "Cluster 2",
    clusterDesc: "Gerbang perdagangan maritim internasional dengan adopsi cashless lintas batas yang tinggi.",
    rekeningPer1000: 148.78,
    rekeningKet: "Tingkat transaksi digital sangat aktif di Batam",
    merchantPer1000: 208.27,
    merchantKet: "Densitas merchant QRIS tinggi di kawasan FTZ",
    twp90: 1.62,
    twp90Ket: "Kredit macet sangat rendah dan aman",
    literasi: 78.29,
    literasiKet: "Literasi keuangan masuk 4 besar nasional",
    inklusi: 98.43,
    inklusiKet: "Inklusi masuk jajaran tertinggi nasional",
    skorImdi: 55.45,
    imdiKet: "Keterampilan digital tertinggi di luar Jawa",
    totalRekening: 329320,
    outstandingMiliar: 1238.56,
    totalMerchantRibu: 461,
    pendudukRibu: 2213.5,
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    insightBox: "Kepulauan Riau mencatat sinergi literasi (78,29%) dan inklusi (98,43%) yang sangat kuat dengan TWP90 rendah 1,62%. Posisi Batam sebagai free-trade zone mendukung percepatan ekonomi digital berdaya saing.",
    akarMasalah: "Risiko fluktuasi kurs mata uang asing dan transaksi tanpa izin regulator di daerah perbatasan.",
    rekomendasi: "Pastikan seluruh transaksi pembayaran menggunakan rupiah dan kanal resmi yang berizin Bank Indonesia.",
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

  PROVINCES_DATA.push({
    id: id,
    nama: p.nama,
    cluster: p.cluster,
    clusterBadge: cInfo.badgeLabel,
    clusterDesc: cInfo.shortDesc,
    rekeningPer1000: rekPer1k,
    rekeningKet: "Rasio peminjam aktif per 1.000 penduduk",
    merchantPer1000: qrisPer1k,
    merchantKet: "Densitas merchant digital terdaftar",
    twp90: p.twp,
    twp90Ket: p.twp > 5 ? "Kredit macet di atas ambang aman 5%" : "Tingkat kredit bermasalah terkendali",
    literasi: p.lit,
    literasiKet: p.lit > 70 ? "Literasi keuangan sudah cukup baik" : "Perlu akselerasi pemahaman produk",
    inklusi: p.ink,
    inklusiKet: "Masyarakat telah memiliki akses finansial",
    skorImdi: p.imdi,
    imdiKet: "Skor pilar keterampilan digital IMDI",
    totalRekening: p.rek,
    outstandingMiliar: p.out,
    totalMerchantRibu: p.qris,
    pendudukRibu: p.pop,
    heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    insightBox: `Provinsi ${p.nama} memiliki tingkat inklusi sebesar ${p.ink.toLocaleString('id-ID')}% dan literasi sebesar ${p.lit.toLocaleString('id-ID')}%. Profil rasio kredit macet berada di level ${p.twp.toLocaleString('id-ID')}%.`,
    akarMasalah: p.cluster === 1
      ? "Keterbatasan jaringan komunikasi dan sarana transaksi digital formal di wilayah pelosok."
      : "Kebutuhan permodalan kerja UMKM yang perlu didukung pencatatan finansial teratur.",
    rekomendasi: "Terapkan disiplin pengelolaan arus kas dan hindari meminjam melebihi kapasitas kemampuan bayar bulanan.",
    rekomendasiBadge: "TIPS"
  });
});

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


