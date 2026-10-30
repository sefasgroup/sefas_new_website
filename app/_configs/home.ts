import { HOME_ONLY } from "./launch";

export const WHATSAPP_URL =
  "https://wa.me/6281223453745?text=Hallo%20Sefas,%20saya%20mendapat%20informasi%20dari%20website%20tentang%20...";

const homeNav: { label: string; href: string }[] = [];

const pageNav = [
  { label: "About", href: "/about" },
  { label: "Companies", href: "/companies" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "https://career.sefasgroup.com/" },
  { label: "Blog", href: "/blog" },
];

export const nav = HOME_ONLY ? homeNav : pageNav;

export const logo = "/images/brand/img-sefas-logo.png";

export const hero = {
  eyebrow: "SEFAS Group · Since 1997",
  titleLight: "Built on Trust.",
  titleStrong: "Driven by Progress.",
  body: "Founded in Indonesia in 1997, SEFAS Group has grown beyond its roots in lubricants distribution into a diversified business group. Across our businesses, we bring together trusted partnerships, operational expertise, and a commitment to creating lasting value.",
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

export const stats = [
  { value: 6000, suffix: "+", label: "Customers" },
  { value: 21, suffix: "", label: "Offices and warehouses across Indonesia" },
  { value: 29, suffix: "", label: "Years of experience" },
  { value: 700, suffix: "+", label: "Employees" },
];

export const businessLines = [
  {
    name: "Industrial solutions",
    body: "Supporting industrial performance through lubricants, coolants, maintenance products, and technical services.",
    image: "/images/crew/img-line-industrial.jpg",
    alt: "Three workers in safety gear beside the tracks of a large mining machine",
    links: [
      { label: "Lubricants", href: "/products#oil" },
      { label: "Grease", href: "/products#grease" },
      { label: "Coolant", href: "/products#coolant" },
      { label: "Technical services", href: "/services" },
    ],
    companies: ["Sefas Pelindotama", "Tribina Panutan", "Sefas Keliantama", "Sinergi Semesta Pratama", "Pancaputra Mitratama Mandiri", "Blue Coolant Indonesia"],
  },
  {
    name: "Energy & fuel retail",
    body: "Fuel retail for motorists",
    image: "/images/crew/img-line-energy-oil.jpg",
    alt: "Attendant in a red Shell uniform holding a fuel nozzle at a pump",
    links: [{ label: "Commercial fuel for industry", href: "/products#fuel" }],
    companies: ["Energi Hijau Samoedera Bersaudara", "Isla Energy Indonesia"],
  },
  {
    name: "Marine",
    body: "Marine lubricants and vessel services in Indonesian and international ports.",
    image: "/images/crew/img-line-marine.jpg",
    alt: "Aerial view of a gas carrier moored beside a loading platform at sea",
    links: [{ label: "Marine products and services", href: "/products/shell-super-marine" }],
    companies: ["Cahaya Samoedera Bersaudara"],
  },
  {
    name: "Distribution & logistics",
    body: "Connecting products, markets, and customers through warehousing, logistics, and distribution capabilities.",
    image: "/images/crew/img-line-distribution.jpg",
    alt: "Forklift moving among stacked red-orange drums in a warehouse",
    links: [{ label: "Our warehouses", href: "/network" }],
    companies: ["Rekadaya Sarana Energi"],
  },
];

export const about = {
  eyebrow: "Who we are",
  titleLight: "A Legacy Built on Trust.",
  titleStrong: "Growing with Purpose.",
  body: [
    "Founded in Indonesia in 1997, SEFAS Group has grown from lubricants distribution into a diversified business group serving industries across the country. Our progress is driven by enduring partnerships and practical market experience.",
    "Rooted in the meaning of Cephas ('the rock'), our foundation stays constant: integrity in our work, trust in our relationships, and a steady commitment to developing our people for the long term.",
  ],
  values: ["Integrity", "Excellence", "Relational Trust"],
};

export const industries = [
  { name: "Mining", image: "/images/crew/img-industry-mining-pit.jpg", alt: "Excavator loading a dump truck at an open-pit mine", blurb: "Heavy-duty lubricants, fuel and on-site condition monitoring for haul fleets and excavators running around the clock.", challenge: "Mining equipment operates around the clock under heavy loads, abrasive dust and high temperatures. Equipment reliability is essential to maintaining productivity and avoiding costly downtime.", solution: "SEFAS combines Shell's lubrication expertise with field insights and OEM knowledge to address equipment challenges. Through technical support, oil analysis and industry collaboration, we help customers improve lubrication practices, manage equipment condition and stay informed about developments in mining.", products: ["shell-rimula", "shell-spirax", "shell-gadus", "shell-tellus"] },
  { name: "Marine", image: "/images/crew/img-industry-marine-vessel.jpg", alt: "Aerial view of a gas carrier moored beside a loading platform at sea", blurb: "Shell Marine supply in 600+ ports, with lube surveys, ship checks and 24/7 standby through Samoedera.", challenge: "Marine engines and onboard equipment face prolonged operating hours, heavy loads and exposure to harsh marine conditions. Reliable equipment and proper maintenance are critical to keeping vessels operational.", solution: "SAMOEDERA works with vessel operators to identify suitable Shell Marine lubricants for their equipment. Through technical consultation and oil condition monitoring, we help customers make informed lubrication and maintenance decisions.", products: ["shell-argina", "shell-gadinia"], productsNote: "and other application-specific Shell Marine lubricants" },
  { name: "General Manufacturing", image: "/images/crew/img-industry-manufacturing.jpg", alt: "Plastic injection moulding machines on a factory floor", blurb: "Hydraulic, gear and compressor oils with system flushing and training that keep production lines moving.", challenge: "Continuous production places sustained demands on machinery, from gearboxes and hydraulic systems to bearings and compressors. Poor lubrication or unexpected equipment failure can disrupt production and increase operating costs.", solution: "We work with customers and Shell's technical experts to understand equipment requirements and recommend suitable lubrication solutions. Oil analysis and technical consultation help identify improvement opportunities and support more effective maintenance planning.", products: ["shell-omala", "shell-tellus", "shell-gadus", "shell-corena"] },
  { name: "Fleet & Transport", image: "/images/crew/img-industry-fleet-truck.jpg", alt: "Row of white trucks parked in a depot", blurb: "Engine oils, coolant and drain-interval programmes that cut cost per kilometre across truck and bus fleets.", challenge: "High mileage, varying road conditions and tight delivery schedules put commercial vehicles under constant pressure. Breakdowns and unplanned maintenance can affect fleet productivity and operating costs.", solution: "SEFAS works with fleet operators, maintenance teams and relevant industry partners to improve lubrication, coolants and maintenance practices. By combining technical insights, oil analysis and industry knowledge, we help customers identify opportunities to improve fleet reliability and operating efficiency.", products: ["shell-rimula", "shell-spirax", "shell-gadus"] },
  { name: "Construction", image: "/images/crew/img-industry-construction.jpg", alt: "Two workers in safety harnesses and hard hats looking up at a tower crane and scaffolding on a construction site", blurb: "Greases, hydraulic fluids and field support for equipment working in mud, dust and heat.", challenge: "Construction equipment operates across changing terrain, weather and workloads. Intensive use can accelerate component wear, while equipment downtime can delay projects and increase costs.", solution: "We help customers select lubricants suited to their equipment and working conditions, supported by Shell's technical expertise and manufacturer recommendations. Through field support and lubrication guidance, we work with maintenance teams to address equipment issues and improve reliability.", products: ["shell-rimula", "shell-spirax", "shell-gadus", "shell-tellus"] },
  { name: "Power", image: "/images/crew/img-industry-power.jpg", alt: "A power plant with tall exhaust stacks lit at dusk", blurb: "Turbine and transformer oils plus oil analysis that protect uptime at power plants.", challenge: "Power generation equipment must operate reliably to meet continuous electricity demand. High operating temperatures, heavy loads and demanding maintenance schedules place pressure on turbines, generators, gearboxes and auxiliary systems. Unplanned downtime can affect plant availability and operating efficiency.", solution: "Through technical consultation, oil analysis and maintenance recommendations, we help customers monitor equipment condition, manage lubrication performance and support reliable plant operations." },
  { name: "Agriculture", image: "/images/crew/img-industry-agriculture-real.jpg", alt: "Tractor on a dirt track between oil palms", blurb: "Lubricants and service programmes for tractors, mills and plantation fleets across Sumatra and Kalimantan.", challenge: "Agricultural machinery must perform across planting, cultivation and harvesting cycles, often in remote locations and demanding field conditions. Seasonal workloads and limited maintenance windows make equipment availability especially important.", solution: "SEFAS works with agricultural customers, Shell's technical experts and relevant equipment stakeholders to match lubrication solutions to operational needs. We also connect customers with industry insights and emerging practices to support better equipment management and maintenance decisions." },
];

export const products = [
  {
    name: "Oil",
    brands: "Shell Rimula · Tellus · Spirax · Omala · Turbo · Argina",
    headline: "Engine, hydraulic and gear oils for equipment that never stops",
    body: "Genuine Shell lubricants for diesel engines, hydraulics, gearboxes, turbines and marine engines — matched to your equipment and delivered in drums, pails, IBCs or bulk.",
    image: "/images/crew/img-supply-oil.jpg",
  },
  {
    name: "Grease",
    brands: "Shell Gadus",
    headline: "Greases that hold up under load, heat and dust",
    body: "Shell Gadus multipurpose and heavy-duty greases extend component life on pins, bearings and slewing rings in mining, construction and manufacturing.",
    image: "/images/crew/img-supply-grease.jpg",
  },
  {
    name: "Coolant",
    brands: "Reco-Cool by Recochem",
    headline: "Coolant that keeps engines at working temperature",
    body: "Reco-Cool hybrid organic-acid coolant, ready to use, protects heavy-duty engines against overheating, corrosion and scale over long service intervals.",
    image: "/images/crew/img-supply-coolant.jpg",
  },
  {
    name: "Degreaser",
    brands: "Blue Cleaner RR",
    headline: "Biodegradable cleaning for heavy equipment",
    body: "Blue Cleaner RR is a water-based, non-flammable degreaser that lifts oil, grease and grime from engines, trucks and marine equipment without harming rubber or plastic parts.",
    image: "/images/crew/img-supply-degreaser.jpg",
  },
  {
    name: "Fuel",
    brands: "Solar Merah Putih CN48 · CN51",
    headline: "Industrial diesel delivered where you operate",
    body: "Energi Merah Putih high-speed diesel to MIGAS specification, with GPS-tracked delivery, portable filling stations and 24/7 service to keep fleets fuelled.",
    image: "/images/crew/img-supply-fuel.jpg",
  },
];

export const services = {
  items: [
    {
      index: "01",
      title: "Condition Monitoring",
      body: "Proactive oil analysis and diagnostics that catch wear before it becomes downtime.",
      image: "/images/crew/img-service-monitoring.jpg",
    },
    {
      index: "02",
      title: "System Optimization & Field Support",
      body: "Engineers on site to tune lubrication systems, troubleshoot and extend equipment life.",
      image: "/images/crew/img-service-field.jpg",
    },
    {
      index: "03",
      title: "Technical Knowledge & Training",
      body: "Training centres and on-site programmes that build capability across your crews.",
      image: "/images/crew/img-service-training.jpg",
    },
  ],
};

export const JOBS_URL = "https://career.sefasgroup.com/";

export const statement = {
  eyebrow: "Beyond products",
  lines: services.items.map((s, i) => ({ title: s.title, body: s.body, clip: ["monitoring", "field", "training"][i] })),
};

type Region = "Java" | "Kalimantan" | "Others";
export type Site = { city: string; company: string; kind: string; region: Region; lng: number; lat: number };

export const network = {
  regions: ["Java", "Kalimantan", "Others"] as Region[],
  sites: [
    { city: "Jakarta", company: "SEFAS Group", kind: "Head office", region: "Java", lng: 106.809, lat: -6.17 },
    { city: "North Jakarta", company: "Cahaya Samoedera Bersaudara", kind: "Head office", region: "Java", lng: 106.84, lat: -6.13 },
    { city: "Bekasi (Marunda)", company: "Sefas Keliantama", kind: "Office & warehouse", region: "Java", lng: 106.97, lat: -6.1 },
    { city: "Cikarang", company: "Sinergi Semesta Pratama", kind: "Head office", region: "Java", lng: 107.15, lat: -6.335 },
    { city: "Tangerang", company: "Tribina Panutan", kind: "Office & warehouse", region: "Java", lng: 106.57, lat: -6.195 },
    { city: "Cilegon", company: "Tribina Panutan", kind: "Regional office & warehouse", region: "Java", lng: 106.07, lat: -5.98 },
    { city: "Surabaya", company: "Pancaputra Mitratama Mandiri", kind: "Head office & warehouses", region: "Java", lng: 112.69, lat: -7.25 },
    { city: "Balikpapan", company: "Sefas Pelindotama", kind: "Regional office & warehouse", region: "Kalimantan", lng: 116.85, lat: -1.24 },
    { city: "Banjarbaru", company: "Sefas Pelindotama", kind: "Regional office & warehouse", region: "Kalimantan", lng: 114.75, lat: -3.44 },
    { city: "Banjarmasin", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Kalimantan", lng: 114.59, lat: -3.33 },
    { city: "Samarinda", company: "Sefas Pelindotama", kind: "Representative office", region: "Kalimantan", lng: 117.15, lat: -0.5 },
    { city: "Berau", company: "Sefas Pelindotama", kind: "Office & warehouse", region: "Kalimantan", lng: 117.49, lat: 2.15 },
    { city: "Tarakan", company: "Sefas Pelindotama", kind: "Office & warehouse", region: "Kalimantan", lng: 117.63, lat: 3.3 },
    { city: "Pontianak", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Kalimantan", lng: 109.33, lat: -0.02 },
    { city: "Medan", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Others", lng: 98.73, lat: 3.6 },
    { city: "Batam", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Others", lng: 104.05, lat: 1.13 },
    { city: "Palembang", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Others", lng: 104.7, lat: -2.92 },
    { city: "Makassar", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Others", lng: 119.52, lat: -5.08 },
    { city: "Sorong", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Others", lng: 131.27, lat: -0.88 },
  ] satisfies Site[],
};

export const companies: { name: string; focus?: string; logo?: string; logoWhite?: string; url?: string }[] = [
  { name: "Sefas Pelindotama", focus: "Kalimantan", logo: "/images/companies/img-sefas-pelindotama-logo.png" },
  { name: "Sefas Keliantama", focus: "Greater Jakarta", logo: "/images/companies/img-sefas-keliantama-logo.png" },
  { name: "Tribina Panutan", focus: "Cilegon · Tangerang", logo: "/images/companies/img-tribina-panutan-logo.png" },
  { name: "Sinergi Semesta Pratama", focus: "Karawang", logo: "/images/companies/img-sinergi-semesta-pratama-logo.png" },
  { name: "Pancaputra Mitratama Mandiri", focus: "East Java", logo: "/images/companies/img-pancaputra-mitratama-mandiri-logo.png" },
  { name: "Cahaya Samoedera Bersaudara", focus: "Indonesia · Malaysia", logo: "/images/companies/img-cahaya-samoedera-bersaudara-logo.png" },
  { name: "Energi Hijau Samoedera Bersaudara", logo: "/images/companies/img-energi-hijau-samoedera-bersaudara-logo.png" },
  { name: "Blue Coolant Indonesia", focus: "Indonesia", logo: "/images/companies/img-blue-coolant-indonesia-logo.png", logoWhite: "/images/companies/img-bci-logo-white.webp" },
  { name: "Isla Energy Indonesia", focus: "Fuel retail", logo: "/images/companies/img-isla-energy-logo.png" },
  { name: "Rekadaya Sarana Energi", focus: "Logistics", logo: "/images/companies/img-rekadaya-sarana-energi-logo.png" },
];

export const caseStudies = {
  placeholder: true,
  items: [
    { sector: "Mining", metric: "38", unit: "%", result: "Fewer unplanned downtime hours on a 60-truck haul fleet", client: "Coal mining contractor, East Kalimantan" },
    { sector: "Marine", metric: "600", unit: "+", result: "Ports supplied with zero missed port calls in a year", client: "Regional tanker operator" },
    { sector: "Power", metric: "2", unit: "×", result: "Longer turbine oil drain interval after system flushing", client: "Independent power producer, Banten" },
  ],
};

export const testimonials = {
  items: [
    {
      quote:
        "SEFAS's strong reputation shows in lubricants that last, fast and on-time delivery, and very responsive after-sales support. The real impact: our operating maintenance costs fell significantly and unit downtime dropped.",
      name: "Bayu Setiawan",
      role: "Senior SCM Staff",
      company: "PT Putra Perkasa Abadi",
      image: "/videos/testimonials/img-bayu-setiawan-v2.jpg",
      video: "/videos/testimonials/bayu-setiawan-v2.mp4",
    },
    {
      quote:
        "SEFAS doesn't just supply world-class products; it delivers a total solution, with its technical team working alongside us in the field. Our joint efficiency programme brought real savings in operating costs, extended the life of our heavy equipment and kept operations reliable.",
      name: "Riza Nugraha",
      role: "Commercial Manager",
      company: "PT Prima Wiguna Parama",
      image: "/videos/testimonials/img-riza-nugraha-v2.jpg",
      video: "/videos/testimonials/riza-nugraha-v2.mp4",
    },
    {
      quote:
        "Shell Gadus S3 from SEFAS solved our problem of grease that melted too easily, so brake linings and bearings now last much longer and cost less to maintain.",
      name: "Dadang Darsono",
      role: "Head of Logistics",
      company: "PT Primajasa Perdana Raya Utama",
      image: "/videos/testimonials/img-dadang-darsono-v2.jpg",
      video: "/videos/testimonials/dadang-darsono-v2.mp4",
    },
    {
      quote:
        "Working with SEFAS multiplied our spindle motor lubrication intervals, so production runs far more smoothly. The right product cut maintenance costs by more than 90% and brought real operating efficiency to Indo Kordsa.",
      name: "Lukman Trinindio",
      role: "Maintenance Manager TCF",
      company: "PT Indo Kordsa",
      image: "/videos/testimonials/img-lukman-trinindio-v2.jpg",
      video: "/videos/testimonials/lukman-trinindio-v2.mp4",
    },
    {
      quote:
        "Fast response and thorough analysis from the SEFAS team proved an effective way to cut our fleet's downtime. Operations are now far more reliable, making our work more efficient and stable as DayTrans works toward its business targets.",
      name: "Reza Achmad",
      role: "Operations Manager",
      company: "PT Day Trans",
      image: "/videos/testimonials/img-reza-achmad-v2.jpg",
      video: "/videos/testimonials/reza-achmad-v2.mp4",
    },
  ],
} as const;

export const awards = [
  { name: "Best National Marketing Program", by: "SEFAS Group · 2025" },
  { name: "Gold Award", by: "Sefas Pelindotama · Indonesia Mining Services Awards 2025" },
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

export const certifications = [
  { name: "ISO 9001", badge: "/images/certifications/img-iso-9001.webp" },
  { name: "ISO 14001", badge: "/images/certifications/img-iso-14001.webp" },
  { name: "ISO 45001", badge: "/images/certifications/img-iso-45001.webp" },
];

export const milestones = [
  { year: "1997", title: "Founded as an official Shell Lubricants distributor", place: "Balikpapan, East Kalimantan", image: "/images/crew/img-milestone-1997.jpg" },
  { year: "2002–2010", title: "Expanding into Indonesia's key industrial regions", place: "Kalimantan, Greater Jakarta, Cilegon", image: "/images/crew/img-mining.jpg" },
  { year: "2010–2015", title: "Diversifying into coolant and marine", place: "Indonesia", image: "/images/crew/img-marine.jpg" },
  { year: "2015–2021", title: "A first step into commercial fuels", place: "North Kalimantan, Tangerang", image: "/images/crew/img-milestone-fuel.jpg" },
  { year: "2022–2026", title: "Growing into an integrated energy group", place: "Across Indonesia", image: "/images/crew/img-milestone-station.jpg" },
];

export const insights = [
  {
    slug: "shell-grease-manufacturing-plant-indonesia",
    tag: "News",
    date: "19 Oct 2026",
    title: "Shell opens a local grease plant in Indonesia",
    body: "Locally made Shell grease means shorter lead times and steadier supply for our customers.",
    image: "/images/crew/img-insight-plant.jpg",
    article: [
      "Industrial machines in mining, manufacturing, construction and transport depend on good lubrication. For years, keeping them supplied with premium grease meant long import lead times. That supply-chain challenge is now over.",
      "Shell Indonesia has opened a Grease Manufacturing Plant (GMP) in Marunda, Bekasi, with a capacity of 12 kilotons a year. Shell Gadus, the industry's benchmark grease, is now made entirely in Indonesia, so customers no longer have to wait on imports for top-quality grease.",
      "Local production does not mean a different product. The plant uses contact-reactor technology, so every batch matches Shell's global standards for efficiency, precision and consistency. The Minister of Industry, Agus Gumiwang Kartasasmita, welcomed the plant as a step that strengthens supply security and the competitiveness of national industry.",
      "As Shell's largest lubricant distributor in Asia Pacific, SEFAS brings locally made Shell Gadus straight to your plant or site, in drums, pails or fluid bags. Talk to our team to secure your grease supply.",
    ],
  },
  {
    slug: "gold-at-indonesia-mining-services-awards-2026",
    tag: "Awards",
    date: "29 Jun 2026",
    title: "Gold at the Indonesia Mining Services Awards",
    body: "Recognised for lubrication support that keeps mine fleets running across Kalimantan.",
    image: "/images/crew/img-insight-mine.jpg",
    article: [
      "SEFAS Group, through PT Sefas Pelindotama, has won the Gold Award at the Indonesia Mining Services (IMS) Awards 2026 in the Fuel & Lubricant Supply category.",
      "The IMS Awards recognise companies whose contribution, innovation and impact support Indonesia's mining industry. In an industry that demands high efficiency and strict safety standards, reliable energy supply and lubrication management are critical.",
      "For SEFAS, the award validates the consistency of the whole team in holding the highest standards in the field. We thank our customers and partners for their trust, and will keep delivering quality products, reliable supply and the best service as Indonesian mining grows more modern and sustainable.",
    ],
  },
  {
    slug: "tribina-training-center-cilegon",
    tag: "Events",
    date: "18 Nov 2025",
    title: "Tribina Training Center workshop in Cilegon",
    body: "A one-stop session where customers saw SEFAS technical services working first-hand.",
    image: "/images/crew/img-insight-estate.jpg",
    article: [
      "SEFAS Group held a Customer Experience Workshop, “One-Stop Solution for Smarter, Stronger Operations”, on 18 November 2025 at Tribina Panutan in Cilegon, Banten.",
      "The workshop showed customers how SEFAS technical services improve machine reliability, reduce downtime and extend equipment life. Instead of a classroom format, it ran as a rotating class: four groups took turns visiting four stands, one for each of our main service tools, to see the technology at work rather than only hear the theory.",
      "Through events like this, SEFAS commits to proactive technical service built around customer needs, to lubrication solutions that go beyond products to service excellence, and to helping customers run operations that are more efficient, safe and sustainable.",
    ],
  },
];

export const contact = {
  email: "info@sefasgroup.com",
  phone: "+62 21 385 8756",
  address: "Jl. Cideng Timur No. 70, Jakarta Pusat 10150",
};
