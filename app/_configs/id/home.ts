import type * as en from "../home";
import type { Widen } from "@/app/_i18n/widen";
import { HOME_ONLY } from "../launch";

export { WHATSAPP_URL, JOBS_URL, logo, certifications, contact } from "../home";
export type { Site } from "../home";

const homeNav: Widen<typeof en.nav> = [];

const pageNav: Widen<typeof en.nav> = [
  { label: "Tentang Kami", href: "/about" },
  { label: "Perusahaan", href: "/companies" },
  { label: "Produk", href: "/products" },
  { label: "Layanan", href: "/services" },
  { label: "Karier", href: "https://career.sefasgroup.com/" },
  { label: "Blog", href: "/blog" },
];

export const nav = HOME_ONLY ? homeNav : pageNav;

export const hero: Widen<typeof en.hero> = {
  eyebrow: "SEFAS Group · Sejak 1997",
  titleLight: "Berlandaskan Kepercayaan.",
  titleStrong: "Terus Bergerak Maju.",
  body: "Berawal dari distribusi pelumas, SEFAS kini tumbuh menjadi grup usaha Indonesia di berbagai bidang, mulai dari bahan bakar industri hingga ritel energi, dengan kemitraan yang terjalin lama.",
  video: {
    sources: [
      { src: "/videos/hero-720.mp4", media: "(max-width: 767px)" },
      { src: "/videos/hero-4k.mp4", media: "(min-width: 2560px), (min-width: 1280px) and (min-resolution: 2dppx)" },
      { src: "/videos/hero-2k.mp4", media: "(min-width: 1280px)" },
      { src: "/videos/hero-1080.mp4" },
    ],
    poster: "/images/crew/img-hero-poster.jpg",
  },
};

export const stats: Widen<typeof en.stats> = [
  { value: 6000, suffix: "+", label: "Pelanggan" },
  { value: 21, suffix: "", label: "Lokasi" },
  { value: 29, suffix: "", label: "Tahun pengalaman" },
  { value: 700, suffix: "+", label: "Karyawan terpercaya" },
];

export const businessLines: Widen<typeof en.businessLines> = [
  {
    name: "Solusi industri",
    body: "Pelumas, coolant, dan layanan teknis agar tambang, pabrik, dan armada tetap beroperasi.",
    image: "/images/crew/img-line-industrial.jpg",
    alt: "Tiga pekerja berpakaian keselamatan di samping rantai track alat berat tambang berukuran besar",
    links: [
      { label: "Pelumas", href: "/products#oil" },
      { label: "Grease", href: "/products#grease" },
      { label: "Coolant", href: "/products#coolant" },
      { label: "Pemantauan kondisi", href: "/services#condition-monitoring" },
      { label: "Pelatihan teknis", href: "/services#technical-knowledge-training" },
    ],
    companies: ["Sefas Pelindotama", "Tribina Panutan", "Sefas Keliantama", "Sinergi Semesta Pratama", "Pancaputra Mitratama Mandiri", "Blue Coolant Indonesia"],
  },
  {
    name: "Energi & mobilitas",
    body: "Bahan bakar untuk industri, dan SPBU untuk masyarakat di jalan.",
    image: "/images/crew/img-line-energy-oil.jpg",
    alt: "Petugas berseragam Shell merah memegang nosel bahan bakar di dispenser",
    links: [{ label: "Solar industri", href: "/products#fuel" }],
    companies: ["Energi Hijau Samoedera Bersaudara", "Isla Energy Indonesia"],
  },
  {
    name: "Kelautan",
    body: "Pelumas kapal dan layanan kapal di pelabuhan Indonesia dan mancanegara.",
    image: "/images/crew/img-line-marine.jpg",
    alt: "Pemandangan udara kapal pengangkut gas yang bersandar di samping platform bongkar muat di laut",
    links: [{ label: "Pelumas kapal", href: "/products/shell-super-marine" }],
    companies: ["Cahaya Samoedera Bersaudara"],
  },
  {
    name: "Distribusi global",
    body: "Pergudangan dan logistik yang mengirim produk ke tempat yang membutuhkan.",
    image: "/images/crew/img-line-distribution.jpg",
    alt: "Forklift bergerak di antara tumpukan drum merah-oranye di gudang",
    links: [{ label: "Lokasi gudang kami", href: "/network" }],
    companies: ["Rekadaya Sarana Energi"],
  },
];

export const about: Widen<typeof en.about> = {
  eyebrow: "Tentang kami",
  titleLight: "Kokoh seperti batu karang.",
  titleStrong: "Dipercaya sejak 1997.",
  body: [
    "Perjalanan kami tumbuh dari kemitraan jangka panjang, pemahaman yang dalam tentang pasar yang kami layani, dan komitmen untuk selalu menepati janji.",
    "Dari tahun ke tahun, kami terus mengembangkan usaha, memperkuat kemampuan, dan membina tim di balik kemajuan kami. Kami percaya pertumbuhan yang bertahan lama dimulai dari kepercayaan, dibuktikan lewat kerja nyata, dan dijalankan bersama tim yang terus bergerak maju.",
  ],
  values: ["Integritas", "Keunggulan", "Saling Percaya"],
};

export const industries: Widen<typeof en.industries> = [
  { name: "Pertambangan", image: "/images/crew/img-industry-mining-pit.jpg", alt: "Ekskavator memuat dump truck di tambang terbuka", blurb: "Pelumas heavy-duty, bahan bakar, dan pemantauan kondisi di lokasi untuk armada angkut dan ekskavator yang beroperasi tanpa henti.", challenge: "Dump truck dan ekskavator beroperasi tanpa henti di tengah debu, panas, dan beban berat, sehingga satu komponen rusak bisa menghentikan seluruh pit.", solution: "Pelumas Shell heavy-duty, pasokan bahan bakar di lokasi, dan pemantauan kondisi yang membaca keausan lewat oli sebelum berujung pada downtime." },
  { name: "Kelautan", image: "/images/crew/img-industry-marine-vessel.jpg", alt: "Pemandangan udara kapal pengangkut gas yang bersandar di samping platform bongkar muat di laut", blurb: "Pasokan Shell Marine di 600+ pelabuhan, dengan lube survey, pemeriksaan kapal, dan siaga 24/7 melalui Samoedera.", challenge: "Kapal membutuhkan pelumas yang tepat di pelabuhan yang tepat, sering kali hanya dengan pemberitahuan beberapa jam sebelum sandar.", solution: "Pasokan Shell Marine di 600+ pelabuhan melalui Samoedera, dengan lube survey, pemeriksaan kapal, dan siaga 24/7." },
  { name: "Manufaktur Umum", image: "/images/crew/img-industry-manufacturing.jpg", alt: "Mesin cetak injeksi plastik di lantai pabrik", blurb: "Oli hidrolik, gear, dan kompresor, dilengkapi flushing sistem dan pelatihan agar lini produksi terus berjalan.", challenge: "Lini produksi bergantung pada sistem hidrolik, gearbox, dan kompresor yang nyaris tidak boleh berhenti.", solution: "Oli industri yang sesuai, flushing sistem, dan pelatihan yang menjaga lini tetap berjalan dan perawatan lebih terencana." },
  { name: "Armada & Transportasi", image: "/images/crew/img-industry-fleet-truck.jpg", alt: "Deretan truk putih terparkir di depo", blurb: "Oli mesin, coolant, dan program interval penggantian oli yang menekan biaya per kilometer untuk armada truk dan bus.", challenge: "Bahan bakar, oli, dan downtime adalah biaya terbesar per kilometer yang masih bisa dikendalikan pada armada truk dan bus.", solution: "Oli mesin, coolant, dan program interval penggantian oli yang memperpanjang umur pakai dan menurunkan biaya per kilometer." },
  { name: "Konstruksi", image: "/images/crew/img-industry-construction.jpg", alt: "Dua pekerja berharness dan berhelm memandang crane menara dan perancah di lokasi konstruksi", blurb: "Grease, fluida hidrolik, dan dukungan lapangan untuk alat berat yang bekerja di tengah lumpur, debu, dan panas.", challenge: "Alat berat bekerja di tengah lumpur, debu, dan panas, di lokasi proyek yang berpindah setiap beberapa bulan.", solution: "Grease, fluida hidrolik, dan engineer lapangan yang mengikuti alat berat dari satu lokasi ke lokasi berikutnya." },
  { name: "Ketenagalistrikan", image: "/images/crew/img-industry-power.jpg", alt: "Pembangkit listrik dengan cerobong tinggi yang menyala saat senja", blurb: "Oli turbin dan transformator serta analisis oli untuk menjaga keandalan operasi pembangkit.", challenge: "Turbin dan transformator harus beroperasi terus-menerus, dan kegagalan oli diukur dalam megawatt yang hilang.", solution: "Oli Shell Turbo dan Diala, ditambah analisis oli yang memantau kondisi dan menjaga keandalan operasi." },
  { name: "Pertanian", image: "/images/crew/img-industry-agriculture-real.jpg", alt: "Traktor di jalan tanah di antara pohon kelapa sawit", blurb: "Pelumas dan program layanan untuk traktor, pabrik pengolahan, dan armada perkebunan di Sumatra dan Kalimantan.", challenge: "Traktor, pabrik pengolahan, dan armada perkebunan tersebar di area terpencil yang jauh dari pusat servis.", solution: "Pelumas dan program layanan yang dikirim ke seluruh Sumatra dan Kalimantan, disesuaikan dengan siklus panen." },
];

export const products: Widen<typeof en.products> = [
  {
    name: "Oil",
    brands: "Shell Rimula · Tellus · Spirax · Omala · Turbo · Argina",
    headline: "Oli mesin, hidrolik, dan gear untuk peralatan yang tak pernah berhenti",
    body: "Pelumas Shell asli untuk mesin diesel, sistem hidrolik, gearbox, turbin, dan mesin kapal — disesuaikan dengan peralatan Anda dan dikirim dalam drum, pail, IBC, atau curah.",
    image: "/images/crew/img-supply-oil.jpg",
  },
  {
    name: "Grease",
    brands: "Shell Gadus",
    headline: "Grease yang tangguh menghadapi beban, panas, dan debu",
    body: "Grease Shell Gadus multiguna dan heavy-duty memperpanjang umur komponen pada pin, bearing, dan slewing ring di pertambangan, konstruksi, dan manufaktur.",
    image: "/images/crew/img-supply-grease.jpg",
  },
  {
    name: "Coolant",
    brands: "Reco-Cool by Recochem",
    headline: "Coolant yang menjaga mesin di suhu kerja idealnya",
    body: "Coolant hybrid organic-acid Reco-Cool siap pakai, melindungi mesin heavy-duty dari overheating, korosi, dan kerak sepanjang interval servis yang panjang.",
    image: "/images/crew/img-supply-coolant.jpg",
  },
  {
    name: "Degreaser",
    brands: "Blue Cleaner RR",
    headline: "Pembersih ramah lingkungan untuk alat berat",
    body: "Blue Cleaner RR adalah degreaser berbahan dasar air dan tidak mudah terbakar yang mengangkat oli, grease, dan kotoran dari mesin, truk, dan peralatan kapal tanpa merusak komponen karet atau plastik.",
    image: "/images/crew/img-supply-degreaser.jpg",
  },
  {
    name: "Fuel",
    brands: "Solar Merah Putih CN48 · CN51",
    headline: "Solar industri dikirim langsung ke lokasi operasi Anda",
    body: "High-speed diesel Energi Merah Putih sesuai spesifikasi MIGAS, dengan pengiriman terlacak GPS, stasiun pengisian portabel, dan layanan 24/7 agar armada Anda tetap terisi.",
    image: "/images/crew/img-supply-fuel.jpg",
  },
];

export const services: Widen<typeof en.services> = {
  items: [
    {
      index: "01",
      title: "Pemantauan Kondisi",
      body: "Analisis oli dan diagnostik proaktif yang mendeteksi keausan sebelum berujung pada downtime.",
      image: "/images/crew/img-service-monitoring.jpg",
    },
    {
      index: "02",
      title: "Optimalisasi Sistem & Dukungan Lapangan",
      body: "Engineer di lokasi untuk menyetel sistem pelumasan, menangani masalah, dan memperpanjang umur peralatan.",
      image: "/images/crew/img-service-field.jpg",
    },
    {
      index: "03",
      title: "Pengetahuan Teknis & Pelatihan",
      body: "Pusat pelatihan dan program di lokasi yang membangun kompetensi seluruh kru Anda.",
      image: "/images/crew/img-service-training.jpg",
    },
  ],
};

export const statement: Widen<typeof en.statement> = {
  eyebrow: "Lebih dari produk",
  lines: services.items.map((s, i) => ({ title: s.title, body: s.body, clip: ["monitoring", "field", "training"][i] })),
};

export const network: Widen<typeof en.network> = {
  regions: ["Java", "Kalimantan", "Sumatra & beyond"],
  sites: [
    { city: "Jakarta", company: "SEFAS Group", kind: "Kantor pusat", region: "Java", lng: 106.809, lat: -6.17 },
    { city: "Jakarta Utara", company: "Cahaya Samoedera Bersaudara", kind: "Kantor pusat", region: "Java", lng: 106.84, lat: -6.13 },
    { city: "Bekasi (Marunda)", company: "Sefas Keliantama", kind: "Kantor & gudang", region: "Java", lng: 106.97, lat: -6.1 },
    { city: "Cikarang", company: "Sinergi Semesta Pratama", kind: "Kantor pusat", region: "Java", lng: 107.15, lat: -6.335 },
    { city: "Tangerang", company: "Tribina Panutan", kind: "Kantor & gudang", region: "Java", lng: 106.57, lat: -6.195 },
    { city: "Cilegon", company: "Tribina Panutan", kind: "Kantor wilayah & gudang", region: "Java", lng: 106.07, lat: -5.98 },
    { city: "Surabaya", company: "Pancaputra Mitratama Mandiri", kind: "Kantor pusat & gudang", region: "Java", lng: 112.69, lat: -7.25 },
    { city: "Balikpapan", company: "Sefas Pelindotama", kind: "Kantor wilayah & gudang", region: "Kalimantan", lng: 116.85, lat: -1.24 },
    { city: "Banjarbaru", company: "Sefas Pelindotama", kind: "Kantor wilayah & gudang", region: "Kalimantan", lng: 114.75, lat: -3.44 },
    { city: "Banjarmasin", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Kalimantan", lng: 114.59, lat: -3.33 },
    { city: "Samarinda", company: "Sefas Pelindotama", kind: "Kantor perwakilan", region: "Kalimantan", lng: 117.15, lat: -0.5 },
    { city: "Berau", company: "Sefas Pelindotama", kind: "Kantor & gudang", region: "Kalimantan", lng: 117.49, lat: 2.15 },
    { city: "Tarakan", company: "Sefas Pelindotama", kind: "Kantor & gudang", region: "Kalimantan", lng: 117.63, lat: 3.3 },
    { city: "Pontianak", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Kalimantan", lng: 109.33, lat: -0.02 },
    { city: "Medan", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Sumatra & beyond", lng: 98.73, lat: 3.6 },
    { city: "Batam", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Sumatra & beyond", lng: 104.05, lat: 1.13 },
    { city: "Palembang", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Sumatra & beyond", lng: 104.7, lat: -2.92 },
    { city: "Makassar", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Sumatra & beyond", lng: 119.52, lat: -5.08 },
    { city: "Sorong", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Sumatra & beyond", lng: 131.27, lat: -0.88 },
  ],
  global: [
    { value: "40+", label: "Negara" },
    { value: "600+", label: "Pelabuhan utama" },
    { value: "24/7", label: "Siaga kelautan" },
  ],
};

export const companies: Widen<typeof en.companies> = [
  { name: "Sefas Pelindotama", focus: "Pertambangan · Kalimantan", logo: "/images/companies/img-sefas-pelindotama-logo.png" },
  { name: "Sefas Keliantama", focus: "Pembangkit · Armada · Jabodetabek", logo: "/images/companies/img-sefas-keliantama-logo.png" },
  { name: "Tribina Panutan", focus: "Pembangkit · Manufaktur · Banten", logo: "/images/companies/img-tribina-panutan-logo.png" },
  { name: "Cahaya Samoedera Bersaudara", focus: "Shell Marine · Global", logo: "/images/companies/img-cahaya-samoedera-bersaudara-logo.png" },
  { name: "Blue Coolant Indonesia", focus: "Coolant · Degreaser", logo: "/images/companies/img-blue-coolant-indonesia-logo.png", logoWhite: "/images/companies/img-bci-logo-white.webp" },
  { name: "Sinergi Semesta Pratama", focus: "Industri · Karawang", logo: "/images/companies/img-sinergi-semesta-pratama-logo.png" },
  { name: "Energi Hijau Samoedera Bersaudara", focus: "Solar industri", logo: "/images/companies/img-energi-hijau-samoedera-bersaudara-logo.png" },
  { name: "Pancaputra Mitratama Mandiri", focus: "Industri · Jawa Timur", logo: "/images/companies/img-pancaputra-mitratama-mandiri-logo.png" },
  { name: "Isla Energy Indonesia", focus: "Ritel bahan bakar", logo: "/images/companies/img-isla-energy-logo.png" },
  { name: "Rekadaya Sarana Energi", focus: "Logistik", logo: "/images/companies/img-rekadaya-sarana-energi-logo.png" },
];

export const caseStudies: Widen<typeof en.caseStudies> = {
  placeholder: true,
  items: [
    { sector: "Pertambangan", metric: "38", unit: "%", result: "Lebih sedikit jam downtime tak terencana pada armada angkut 60 truk", client: "Kontraktor tambang batu bara, Kalimantan Timur" },
    { sector: "Kelautan", metric: "600", unit: "+", result: "Pelabuhan terlayani tanpa satu pun port call terlewat dalam setahun", client: "Operator kapal tanker regional" },
    { sector: "Pembangkit", metric: "2", unit: "×", result: "Interval penggantian oli turbin lebih panjang setelah flushing sistem", client: "Produsen listrik swasta, Banten" },
  ],
};

export const testimonials: Widen<typeof en.testimonials> = {
  items: [
    {
      quote:
        "Reputasi kuat SEFAS terbukti dari kualitas pelumas yang tahan lama, pengiriman cepat dan tepat waktu, serta dukungan after-sales yang sangat responsif. Dampak nyatanya, biaya perawatan operasional kami turun signifikan dan downtime unit pun berkurang.",
      name: "Bayu Setiawan",
      role: "Senior SCM Staff",
      company: "PT Putra Perkasa Abadi",
      image: "/videos/testimonials/img-bayu-setiawan-v2.jpg",
      video: "/videos/testimonials/bayu-setiawan-v2.mp4",
    },
    {
      quote:
        "SEFAS tidak hanya menyediakan produk berstandar global, tetapi juga menghadirkan total solution lewat pendampingan tim teknis langsung di lapangan. Kolaborasi program efisiensi ini menghasilkan penghematan biaya operasional yang nyata, memperpanjang usia pakai alat berat, dan menjaga keandalan operasional tetap stabil.",
      name: "Riza Nugraha",
      role: "Commercial Manager",
      company: "PT Prima Wiguna Parama",
      image: "/videos/testimonials/img-riza-nugraha-v2.jpg",
      video: "/videos/testimonials/riza-nugraha-v2.mp4",
    },
    {
      quote:
        "Shell Gadus S3 dari SEFAS berhasil mengatasi masalah pelumas yang mudah mencair, membuat komponen kampas rem serta bearing jauh lebih awet dan hemat biaya perawatan.",
      name: "Dadang Darsono",
      role: "Head of Logistics",
      company: "PT Primajasa Perdana Raya Utama",
      image: "/videos/testimonials/img-dadang-darsono-v2.jpg",
      video: "/videos/testimonials/dadang-darsono-v2.mp4",
    },
    {
      quote:
        "Kolaborasi bersama SEFAS melipatgandakan interval pelumasan motor spindle sehingga proses produksi kami dapat berjalan jauh lebih optimal. Solusi produk yang tepat terbukti memangkas biaya perawatan hingga lebih dari 90% sekaligus menghadirkan efisiensi operasional yang nyata bagi Indo Kordsa.",
      name: "Lukman Trinindio",
      role: "Maintenance Manager TCF",
      company: "PT Indo Kordsa",
      image: "/videos/testimonials/img-lukman-trinindio-v2.jpg",
      video: "/videos/testimonials/lukman-trinindio-v2.mp4",
    },
    {
      quote:
        "Respon cepat dan analisis menyeluruh dari tim SEFAS terbukti menjadi solusi efektif dalam menekan downtime armada kami. Keandalan operasional kini meningkat pesat, menjadikan proses kerja jauh lebih efisien dan stabil dalam mendukung pencapaian target bisnis DayTrans.",
      name: "Reza Achmad",
      role: "Operations Manager",
      company: "PT Day Trans",
      image: "/videos/testimonials/img-reza-achmad-v2.jpg",
      video: "/videos/testimonials/reza-achmad-v2.mp4",
    },
  ],
};

export const awards: Widen<typeof en.awards> = [
  { name: "Distributor of the Year", by: "Shell Indonesia" },
  { name: "Gold Award Mining Services", by: "Indonesia Mining Services Awards · 2026" },
  { name: "Tujuh penghargaan Shell", by: "Shell Distributor Conference · 2026" },
  { name: "Top Shell Marine Distributor", by: "Shell Marine Conference, Hanoi · 2026" },
  { name: "Best Service Penetration", by: "Shell Indonesia" },
  { name: "Best Shell Marine Distributor", by: "ASEANSA Conference · 2025" },
];

export const milestones: Widen<typeof en.milestones> = [
  { year: "1997", title: "Berdiri sebagai distributor resmi Shell Lubricants", place: "Balikpapan, Kalimantan Timur", image: "/images/crew/img-milestone-1997.jpg" },
  { year: "2002–2010", title: "Ekspansi ke kawasan industri utama", place: "Kalimantan, Jabodetabek, Cilegon", image: "/images/crew/img-mining.jpg" },
  { year: "2010–2015", title: "Diversifikasi ke coolant dan kelautan", place: "Indonesia", image: "/images/crew/img-marine.jpg" },
  { year: "2015–2021", title: "Langkah pertama ke bahan bakar komersial", place: "Kalimantan Utara, Tangerang", image: "/images/crew/img-milestone-fuel.jpg" },
  { year: "2022–2026", title: "Tumbuh menjadi grup energi terintegrasi", place: "Seluruh Indonesia", image: "/images/crew/img-milestone-station.jpg" },
];

export const insights: Widen<typeof en.insights> = [
  {
    slug: "shell-grease-manufacturing-plant-indonesia",
    tag: "Berita",
    date: "19 Okt 2026",
    title: "Shell membuka pabrik grease lokal di Indonesia",
    body: "Grease Shell buatan lokal berarti waktu tunggu lebih singkat dan pasokan lebih stabil bagi pelanggan kami.",
    image: "/images/crew/img-insight-plant.jpg",
    article: [
      "Mesin industri di sektor pertambangan, manufaktur, konstruksi, dan transportasi bergantung pada pelumasan yang baik. Selama bertahun-tahun, memastikan pasokan grease premium berarti menghadapi waktu tunggu impor yang panjang. Kini tantangan rantai pasok itu telah teratasi.",
      "Shell Indonesia telah meresmikan Grease Manufacturing Plant (GMP) di Marunda, Bekasi, dengan kapasitas 12 kiloton per tahun. Shell Gadus, grease yang menjadi tolok ukur industri, kini sepenuhnya diproduksi di Indonesia, sehingga pelanggan tidak perlu lagi menunggu impor untuk mendapatkan grease berkualitas terbaik.",
      "Produksi lokal tidak berarti produk yang berbeda. Pabrik ini menggunakan teknologi contact reactor, sehingga setiap batch memenuhi standar global Shell dalam hal efisiensi, presisi, dan konsistensi. Menteri Perindustrian, Agus Gumiwang Kartasasmita, menyambut pabrik ini sebagai langkah yang memperkuat ketahanan pasokan dan daya saing industri nasional.",
      "Sebagai distributor pelumas Shell terbesar di Asia Pasifik, SEFAS menghadirkan Shell Gadus buatan lokal langsung ke pabrik atau lokasi Anda, dalam kemasan drum, pail, maupun fluid bag. Hubungi tim kami untuk mengamankan pasokan grease Anda.",
    ],
  },
  {
    slug: "gold-at-indonesia-mining-services-awards-2026",
    tag: "Penghargaan",
    date: "29 Jun 2026",
    title: "Gold Award di Indonesia Mining Services Awards",
    body: "Diakui atas dukungan pelumasan yang menjaga armada tambang tetap beroperasi di seluruh Kalimantan.",
    image: "/images/crew/img-insight-mine.jpg",
    article: [
      "SEFAS Group, melalui PT Sefas Pelindotama, meraih Gold Award di ajang Indonesia Mining Services (IMS) Awards 2026 untuk kategori Fuel & Lubricant Supply.",
      "IMS Awards memberikan penghargaan kepada perusahaan yang kontribusi, inovasi, dan dampaknya mendukung industri pertambangan Indonesia. Di industri yang menuntut efisiensi tinggi dan standar keselamatan ketat, keandalan pasokan energi dan manajemen pelumasan menjadi hal yang krusial.",
      "Bagi SEFAS, penghargaan ini menegaskan konsistensi seluruh tim dalam menjaga standar tertinggi di lapangan. Kami berterima kasih kepada pelanggan dan mitra atas kepercayaannya, dan akan terus menghadirkan produk berkualitas, pasokan yang andal, serta layanan terbaik seiring pertambangan Indonesia menjadi semakin modern dan berkelanjutan.",
    ],
  },
  {
    slug: "tribina-training-center-cilegon",
    tag: "Acara",
    date: "18 Nov 2025",
    title: "Workshop Tribina Training Center di Cilegon",
    body: "Sesi terpadu tempat pelanggan menyaksikan langsung layanan teknis SEFAS bekerja.",
    image: "/images/crew/img-insight-estate.jpg",
    article: [
      "SEFAS Group menggelar Customer Experience Workshop bertajuk “One-Stop Solution for Smarter, Stronger Operations” pada 18 November 2025 di Tribina Panutan, Cilegon, Banten.",
      "Workshop ini menunjukkan kepada pelanggan bagaimana layanan teknis SEFAS meningkatkan keandalan mesin, mengurangi downtime, dan memperpanjang umur peralatan. Alih-alih format kelas, acara ini berjalan sebagai kelas bergilir: empat kelompok bergantian mengunjungi empat stan, masing-masing untuk satu perangkat layanan utama kami, sehingga peserta melihat langsung teknologinya bekerja, bukan hanya mendengar teorinya.",
      "Melalui acara seperti ini, SEFAS berkomitmen pada layanan teknis proaktif yang berangkat dari kebutuhan pelanggan, pada solusi pelumasan yang melampaui produk hingga keunggulan layanan, serta membantu pelanggan menjalankan operasi yang lebih efisien, aman, dan berkelanjutan.",
    ],
  },
];
