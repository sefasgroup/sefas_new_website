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
  titleLight: "Built on Trust.",
  titleStrong: "Driven by Progress.",
  body: "Didirikan di Indonesia pada tahun 1997, SEFAS Group telah berkembang melampaui bisnis distribusi pelumas menjadi grup usaha yang terdiversifikasi. Di seluruh bidang usaha kami, kami memadukan kemitraan tepercaya, keahlian operasional, dan komitmen untuk menciptakan nilai yang berkelanjutan.",
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
  { value: 21, suffix: "", label: "Kantor dan gudang di seluruh Indonesia" },
  { value: 29, suffix: "", label: "Tahun pengalaman" },
  { value: 700, suffix: "+", label: "Karyawan terpercaya" },
];

export const businessLines: Widen<typeof en.businessLines> = [
  {
    name: "Solusi industri",
    body: "Mendukung kinerja industri melalui pelumas, coolant, produk perawatan, dan layanan teknis.",
    image: "/images/crew/img-line-industrial.jpg",
    alt: "Tiga pekerja berpakaian keselamatan di samping rantai track alat berat tambang berukuran besar",
    links: [
      { label: "Pelumas", href: "/products#oil" },
      { label: "Grease", href: "/products#grease" },
      { label: "Coolant", href: "/products#coolant" },
      { label: "Layanan teknis", href: "/services" },
    ],
    companies: ["Sefas Pelindotama", "Tribina Panutan", "Sefas Keliantama", "Sinergi Semesta Pratama", "Pancaputra Mitratama Mandiri", "Blue Coolant Indonesia"],
  },
  {
    name: "Energi & ritel bahan bakar",
    body: "Bahan bakar ritel untuk pengendara bermotor",
    image: "/images/crew/img-line-energy-oil.jpg",
    alt: "Petugas berseragam Shell merah memegang nosel bahan bakar di dispenser",
    links: [{ label: "Bahan bakar komersial untuk industri", href: "/products#fuel" }],
    companies: ["Energi Hijau Samoedera Bersaudara", "Isla Energy Indonesia"],
  },
  {
    name: "Perkapalan",
    body: "Pelumas kapal dan layanan armada di pelabuhan Indonesia dan internasional.",
    image: "/images/crew/img-line-marine.jpg",
    alt: "Pemandangan udara kapal pengangkut gas yang bersandar di samping platform bongkar muat di laut",
    links: [{ label: "Produk dan layanan perkapalan", href: "/products/shell-super-marine" }],
    companies: ["Cahaya Samoedera Bersaudara"],
  },
  {
    name: "Distribusi & logistik",
    body: "Menghubungkan produk, pasar, dan pelanggan melalui kapabilitas pergudangan, logistik, dan distribusi.",
    image: "/images/crew/img-line-distribution.jpg",
    alt: "Forklift bergerak di antara tumpukan drum merah-oranye di gudang",
    links: [{ label: "Lokasi gudang kami", href: "/network" }],
    companies: ["Rekadaya Sarana Energi"],
  },
];

export const about: Widen<typeof en.about> = {
  eyebrow: "Tentang kami",
  titleLight: "A Legacy Built on Trust.",
  titleStrong: "Growing with Purpose.",
  body: [
    "Didirikan di Indonesia pada tahun 1997, SEFAS Group telah berkembang dari distribusi pelumas menjadi grup usaha terdiversifikasi yang melayani berbagai industri di seluruh negeri. Kemajuan kami didorong oleh kemitraan jangka panjang dan pengalaman pasar yang teruji.",
    "Berakar dari makna kata Cephas ('batu karang'), fondasi kami tetap kokoh: integritas dalam bekerja, kepercayaan dalam setiap relasi, dan komitmen teguh untuk membina insan kami dalam jangka panjang.",
  ],
  values: ["Integritas", "Keunggulan", "Saling Percaya"],
};

export const industries: Widen<typeof en.industries> = [
  { name: "Pertambangan", image: "/images/crew/img-industry-mining-pit.jpg", alt: "Ekskavator memuat dump truck di tambang terbuka", blurb: "Pelumas heavy-duty, bahan bakar, dan pemantauan kondisi di lokasi untuk armada angkut dan ekskavator yang beroperasi tanpa henti.", challenge: "Alat berat pertambangan beroperasi sepanjang waktu dengan beban berat, debu abrasif, dan suhu tinggi. Keandalan peralatan sangat penting untuk menjaga produktivitas dan menghindari downtime yang merugikan.", solution: "SEFAS menggabungkan keahlian pelumasan Shell dengan wawasan lapangan dan pengetahuan OEM untuk mengatasi tantangan peralatan. Melalui dukungan teknis, analisis oli, dan kolaborasi industri, kami membantu pelanggan meningkatkan praktik pelumasan, memantau kondisi peralatan, dan mengikuti perkembangan industri pertambangan.", products: ["shell-rimula", "shell-spirax", "shell-gadus", "shell-tellus"] },
  { name: "Perkapalan", image: "/images/crew/img-industry-marine-vessel.jpg", alt: "Pemandangan udara kapal pengangkut gas yang bersandar di samping platform bongkar muat di laut", blurb: "Pasokan Shell Marine di 600+ pelabuhan, dengan lube survey, pemeriksaan kapal, dan siaga 24/7 melalui Samoedera.", challenge: "Mesin dan peralatan kapal menghadapi jam operasi panjang, beban berat, dan kondisi lingkungan maritim yang menantang. Keandalan peralatan dan perawatan yang tepat sangat penting untuk menjaga kelancaran operasional kapal.", solution: "SAMOEDERA bekerja bersama operator kapal untuk menentukan pelumas Shell Marine yang sesuai dengan kebutuhan peralatan. Melalui konsultasi teknis dan pemantauan kondisi oli, kami membantu pelanggan mengambil keputusan pelumasan dan perawatan yang tepat.", products: ["shell-argina", "shell-gadinia"], productsNote: "and other application-specific Shell Marine lubricants" },
  { name: "Manufaktur", image: "/images/crew/img-industry-manufacturing.jpg", alt: "Mesin cetak injeksi plastik di lantai pabrik", blurb: "Oli hidrolik, gear, dan kompresor, dilengkapi flushing sistem dan pelatihan agar lini produksi terus berjalan.", challenge: "Produksi berkelanjutan menuntut kinerja optimal berbagai mesin, mulai dari gearbox dan sistem hidrolik hingga bearing dan kompresor. Pelumasan yang tidak tepat atau kerusakan tak terduga dapat mengganggu produksi dan meningkatkan biaya operasional.", solution: "Kami bekerja bersama pelanggan dan ahli teknis Shell untuk memahami kebutuhan peralatan dan merekomendasikan solusi pelumasan yang sesuai. Analisis oli dan konsultasi teknis membantu mengidentifikasi peluang perbaikan serta mendukung perencanaan perawatan yang lebih efektif.", products: ["shell-omala", "shell-tellus", "shell-gadus", "shell-corena"] },
  { name: "Armada & Transportasi", image: "/images/crew/img-industry-fleet-truck.jpg", alt: "Deretan truk putih terparkir di depo", blurb: "Oli mesin, coolant, dan program interval penggantian oli yang menekan biaya per kilometer untuk armada truk dan bus.", challenge: "Jarak tempuh tinggi, kondisi jalan yang beragam, dan jadwal pengiriman yang ketat menuntut kinerja optimal kendaraan komersial. Kerusakan dan perawatan tak terencana dapat memengaruhi produktivitas armada dan biaya operasional.", solution: "SEFAS bekerja bersama operator armada, tim perawatan, dan mitra industri terkait untuk meningkatkan praktik pelumasan dan perawatan. Dengan menggabungkan wawasan teknis, analisis oli, dan pengetahuan industri, kami membantu pelanggan mengidentifikasi peluang untuk meningkatkan keandalan dan efisiensi operasional armada.", products: ["shell-rimula", "shell-spirax", "shell-gadus"] },
  { name: "Konstruksi", image: "/images/crew/img-industry-construction.jpg", alt: "Dua pekerja berharness dan berhelm memandang crane menara dan perancah di lokasi konstruksi", blurb: "Grease, fluida hidrolik, dan dukungan lapangan untuk alat berat yang bekerja di tengah lumpur, debu, dan panas.", challenge: "Alat konstruksi beroperasi di tengah perubahan medan, cuaca, dan beban kerja. Penggunaan intensif dapat mempercepat keausan komponen, sementara downtime peralatan dapat menghambat proyek dan meningkatkan biaya.", solution: "Kami membantu pelanggan memilih pelumas sesuai jenis peralatan dan kondisi kerja, dengan dukungan keahlian teknis Shell serta rekomendasi produsen. Melalui dukungan lapangan dan panduan pelumasan, kami bekerja bersama tim perawatan untuk menangani masalah peralatan dan meningkatkan keandalannya.", products: ["shell-rimula", "shell-spirax", "shell-gadus", "shell-tellus"] },
  { name: "Pembangkit Listrik", image: "/images/crew/img-industry-power.jpg", alt: "Pembangkit listrik dengan cerobong tinggi yang menyala saat senja", blurb: "Oli turbin dan transformator serta analisis oli untuk menjaga keandalan operasi pembangkit.", challenge: "Peralatan pembangkit listrik harus beroperasi secara andal untuk memenuhi kebutuhan listrik yang berkelanjutan. Suhu tinggi, beban berat, dan jadwal perawatan yang ketat menjadi tantangan bagi turbin, generator, gearbox, dan sistem pendukung. Downtime yang tidak terencana dapat memengaruhi ketersediaan pembangkit dan efisiensi operasional.", solution: "Melalui konsultasi teknis, analisis oli, dan rekomendasi perawatan, kami membantu pelanggan memantau kondisi peralatan, mengoptimalkan kinerja pelumasan, dan mendukung keandalan operasional pembangkit." },
  { name: "Agrikultur", image: "/images/crew/img-industry-agriculture-real.jpg", alt: "Traktor di jalan tanah di antara pohon kelapa sawit", blurb: "Pelumas dan program layanan untuk traktor, pabrik pengolahan, dan armada perkebunan di Sumatra dan Kalimantan.", challenge: "Mesin agrikultur harus bekerja sepanjang siklus penanaman, pemeliharaan, dan panen, sering kali di lokasi terpencil dengan kondisi lapangan yang menantang. Beban kerja musiman dan terbatasnya waktu perawatan menjadikan ketersediaan peralatan sangat penting.", solution: "SEFAS bekerja bersama pelanggan agrikultur, ahli teknis Shell, dan pemangku kepentingan peralatan terkait untuk menyesuaikan solusi pelumasan dengan kebutuhan operasional. Kami juga menghubungkan pelanggan dengan wawasan industri dan praktik terbaru untuk mendukung pengelolaan peralatan serta keputusan perawatan yang lebih baik." },
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
  regions: ["Java", "Kalimantan", "Others"],
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
    { city: "Medan", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Others", lng: 98.73, lat: 3.6 },
    { city: "Batam", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Others", lng: 104.05, lat: 1.13 },
    { city: "Palembang", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Others", lng: 104.7, lat: -2.92 },
    { city: "Makassar", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Others", lng: 119.52, lat: -5.08 },
    { city: "Sorong", company: "Cahaya Samoedera Bersaudara", kind: "Gudang", region: "Others", lng: 131.27, lat: -0.88 },
  ],
};

export const companies: Widen<typeof en.companies> = [
  { name: "Sefas Pelindotama", logo: "/images/companies/img-sefas-pelindotama-logo.png" },
  { name: "Sefas Keliantama", logo: "/images/companies/img-sefas-keliantama-logo.png" },
  { name: "Tribina Panutan", logo: "/images/companies/img-tribina-panutan-logo.png" },
  { name: "Sinergi Semesta Pratama", logo: "/images/companies/img-sinergi-semesta-pratama-logo.png" },
  { name: "Pancaputra Mitratama Mandiri", logo: "/images/companies/img-pancaputra-mitratama-mandiri-logo.png" },
  { name: "Cahaya Samoedera Bersaudara", logo: "/images/companies/img-cahaya-samoedera-bersaudara-logo.png" },
  { name: "Energi Hijau Samoedera Bersaudara", logo: "/images/companies/img-energi-hijau-samoedera-bersaudara-logo.png" },
  { name: "Blue Coolant Indonesia", logo: "/images/companies/img-blue-coolant-indonesia-logo.png", logoWhite: "/images/companies/img-bci-logo-white.webp" },
  { name: "Isla Energy Indonesia", logo: "/images/companies/img-isla-energy-logo.png" },
  { name: "Rekadaya Sarana Energi", logo: "/images/companies/img-rekadaya-sarana-energi-logo.png" },
];

export const caseStudies: Widen<typeof en.caseStudies> = {
  placeholder: true,
  items: [
    { sector: "Pertambangan", metric: "38", unit: "%", result: "Lebih sedikit jam downtime tak terencana pada armada angkut 60 truk", client: "Kontraktor tambang batu bara, Kalimantan Timur" },
    { sector: "Perkapalan", metric: "600", unit: "+", result: "Pelabuhan terlayani tanpa satu pun port call terlewat dalam setahun", client: "Operator kapal tanker regional" },
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
  { name: "Best National Marketing Program", by: "SEFAS Group · 2025" },
  { name: "Penghargaan Emas", by: "SEFAS Pelindotama · Indonesia Mining Services Awards 2025" },
  { name: "B2B Distributor of the Year", by: "SEFAS Group · 2024" },
  { name: "Distributor of the Year", by: "SEFAS Group · 2023" },
  { name: "Top Volume Award", by: "Cahaya Samoedera Bersaudara · 2023" },
  { name: "Distributor of the Year", by: "SEFAS Group · 2022" },
  { name: "Distributor of the Year", by: "SEFAS Group · 2021" },
  { name: "Top Performing Distributor", by: "Cahaya Samoedera Bersaudara · 2021" },
  { name: "Best Innovation Awards", by: "Tribina Panutan · 2020" },
  { name: "Top Performing Distributor", by: "Cahaya Samoedera Bersaudara · 2020" },
  { name: "Top Performing Distributor", by: "Cahaya Samoedera Bersaudara · 2019" },
  { name: "Distributor of the Year", by: "SEFAS Group · 2018" },
  { name: "Top Performing Distributor", by: "Cahaya Samoedera Bersaudara · 2018" },
];

export const milestones: Widen<typeof en.milestones> = [
  { year: "1997", title: "Berdiri sebagai distributor resmi Shell Lubricants", place: "Balikpapan, Kalimantan Timur", image: "/images/crew/img-milestone-1997.jpg" },
  { year: "2002–2010", title: "Ekspansi ke kawasan industri utama", place: "Kalimantan, Jabodetabek, Cilegon", image: "/images/crew/img-mining.jpg" },
  { year: "2010–2015", title: "Diversifikasi ke coolant dan perkapalan", place: "Indonesia", image: "/images/crew/img-marine.jpg" },
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
