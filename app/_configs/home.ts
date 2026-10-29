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
  body: "From lubricants distribution to commercial fuels and energy retail, SEFAS has grown into a diversified Indonesian business group, built on partnerships that last.",
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
  { value: 21, suffix: "", label: "Locations" },
  { value: 29, suffix: "", label: "Years of experience" },
  { value: 700, suffix: "+", label: "Trusted employees" },
];

export const businessLines = [
  {
    name: "Industrial solutions",
    body: "Lubricants, coolant and technical services that keep mines, plants and fleets running.",
    image: "/images/crew/img-line-industrial.jpg",
    alt: "Three workers in safety gear beside the tracks of a large mining machine",
    links: [
      { label: "Lubricants", href: "/products#oil" },
      { label: "Greases", href: "/products#grease" },
      { label: "Coolant", href: "/products#coolant" },
      { label: "Condition monitoring", href: "/services#condition-monitoring" },
      { label: "Technical training", href: "/services#technical-knowledge-training" },
    ],
    companies: ["Sefas Pelindotama", "Tribina Panutan", "Sefas Keliantama", "Sinergi Semesta Pratama", "Pancaputra Mitratama Mandiri", "Blue Coolant Indonesia"],
  },
  {
    name: "Energy & mobility",
    body: "Commercial fuel for industry, and fuel retail for people on the road.",
    image: "/images/crew/img-line-energy-oil.jpg",
    alt: "Attendant in a red Shell uniform holding a fuel nozzle at a pump",
    links: [{ label: "Industrial diesel", href: "/products#fuel" }],
    companies: ["Energi Hijau Samoedera Bersaudara", "Isla Energy Indonesia"],
  },
  {
    name: "Marine",
    body: "Marine lubricants and vessel services in Indonesian and international ports.",
    image: "/images/crew/img-line-marine.jpg",
    alt: "Aerial view of a gas carrier moored beside a loading platform at sea",
    links: [{ label: "Marine lubricants", href: "/products/shell-super-marine" }],
    companies: ["Cahaya Samoedera Bersaudara"],
  },
  {
    name: "Global distribution",
    body: "Warehousing and logistics that move products to where they are needed.",
    image: "/images/crew/img-line-distribution.jpg",
    alt: "Forklift moving among stacked red-orange drums in a warehouse",
    links: [{ label: "Our warehouses", href: "/network" }],
    companies: ["Rekadaya Sarana Energi"],
  },
];

export const about = {
  eyebrow: "Who we are",
  titleLight: "Named after the rock.",
  titleStrong: "Built for the long term.",
  body: [
    "Our journey has been shaped by long-standing partnerships, a deep understanding of the markets we serve, and a commitment to delivering on our promises.",
    "Over the years, we have continued to expand our businesses, strengthen our capabilities, and develop the people behind our progress. We believe lasting growth is built on trust, delivered through action, and sustained by people who move forward together.",
  ],
  values: ["Integrity", "Excellence", "Relational Trust"],
};

export const industries = [
  { name: "Mining", image: "/images/crew/img-industry-mining-pit.jpg", alt: "Excavator loading a dump truck at an open-pit mine", blurb: "Heavy-duty lubricants, fuel and on-site condition monitoring for haul fleets and excavators running around the clock.", challenge: "Haul trucks and excavators run around the clock in dust, heat and heavy load, so one failed component can stop a whole pit.", solution: "Heavy-duty Shell lubricants, on-site fuel and condition monitoring that read wear in the oil before it becomes downtime." },
  { name: "Marine", image: "/images/crew/img-industry-marine-vessel.jpg", alt: "Aerial view of a gas carrier moored beside a loading platform at sea", blurb: "Shell Marine supply in 600+ ports, with lube surveys, ship checks and 24/7 standby through Samoedera.", challenge: "Vessels need the right lubricant at the right port, often with only hours of notice between calls.", solution: "Shell Marine supply in 600+ ports through Samoedera, with lube surveys, ship checks and 24/7 standby." },
  { name: "General Manufacturing", image: "/images/crew/img-industry-manufacturing.jpg", alt: "Plastic injection moulding machines on a factory floor", blurb: "Hydraulic, gear and compressor oils with system flushing and training that keep production lines moving.", challenge: "Production lines depend on hydraulics, gearboxes and compressors that are rarely allowed to stop.", solution: "Matched industrial oils, system flushing and training that keep lines running and maintenance predictable." },
  { name: "Fleet & Transport", image: "/images/crew/img-industry-fleet-truck.jpg", alt: "Row of white trucks parked in a depot", blurb: "Engine oils, coolant and drain-interval programmes that cut cost per kilometre across truck and bus fleets.", challenge: "Fuel, oil and downtime are the largest controllable costs per kilometre across truck and bus fleets.", solution: "Engine oils, coolant and drain-interval programmes that extend service life and lower cost per kilometre." },
  { name: "Construction", image: "/images/crew/img-industry-construction.jpg", alt: "Two workers in safety harnesses and hard hats looking up at a tower crane and scaffolding on a construction site", blurb: "Greases, hydraulic fluids and field support for equipment working in mud, dust and heat.", challenge: "Equipment works in mud, dust and heat on sites that move every few months.", solution: "Greases, hydraulic fluids and field engineers who follow the equipment from site to site." },
  { name: "Power", image: "/images/crew/img-industry-power.jpg", alt: "A power plant with tall exhaust stacks lit at dusk", blurb: "Turbine and transformer oils plus oil analysis that protect uptime at power plants.", challenge: "Turbines and transformers have to run continuously, and an oil failure is measured in megawatts lost.", solution: "Shell Turbo and Diala oils, plus oil analysis that tracks condition and protects uptime." },
  { name: "Agriculture", image: "/images/crew/img-industry-agriculture-real.jpg", alt: "Tractor on a dirt track between oil palms", blurb: "Lubricants and service programmes for tractors, mills and plantation fleets across Sumatra and Kalimantan.", challenge: "Tractors, mills and plantation fleets are spread across remote estates far from service centres.", solution: "Lubricants and service programmes delivered across Sumatra and Kalimantan, timed to the harvest cycle." },
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

type Region = "Java" | "Kalimantan" | "Sumatra & beyond";
export type Site = { city: string; company: string; kind: string; region: Region; lng: number; lat: number };

export const network = {
  regions: ["Java", "Kalimantan", "Sumatra & beyond"] as Region[],
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
    { city: "Medan", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Sumatra & beyond", lng: 98.73, lat: 3.6 },
    { city: "Batam", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Sumatra & beyond", lng: 104.05, lat: 1.13 },
    { city: "Palembang", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Sumatra & beyond", lng: 104.7, lat: -2.92 },
    { city: "Makassar", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Sumatra & beyond", lng: 119.52, lat: -5.08 },
    { city: "Sorong", company: "Cahaya Samoedera Bersaudara", kind: "Warehouse", region: "Sumatra & beyond", lng: 131.27, lat: -0.88 },
  ] satisfies Site[],
  global: [
    { value: "40+", label: "Countries" },
    { value: "600+", label: "Major ports" },
    { value: "24/7", label: "Marine standby" },
  ],
};

export const companies: { name: string; focus: string; logo?: string; logoWhite?: string; url?: string }[] = [
  { name: "Sefas Pelindotama", focus: "Mining · Kalimantan", logo: "/images/companies/img-sefas-pelindotama-logo.png" },
  { name: "Sefas Keliantama", focus: "Power · Fleet · Jabodetabek", logo: "/images/companies/img-sefas-keliantama-logo.png" },
  { name: "Tribina Panutan", focus: "Power · Manufacturing · Banten", logo: "/images/companies/img-tribina-panutan-logo.png" },
  { name: "Cahaya Samoedera Bersaudara", focus: "Shell Marine · Global", logo: "/images/companies/img-cahaya-samoedera-bersaudara-logo.png" },
  { name: "Blue Coolant Indonesia", focus: "Coolant · Degreaser", logo: "/images/companies/img-blue-coolant-indonesia-logo.png", logoWhite: "/images/companies/img-bci-logo-white.webp" },
  { name: "Sinergi Semesta Pratama", focus: "Industrial · Karawang", logo: "/images/companies/img-sinergi-semesta-pratama-logo.png" },
  { name: "Energi Hijau Samoedera Bersaudara", focus: "Industrial diesel", logo: "/images/companies/img-energi-hijau-samoedera-bersaudara-logo.png" },
  { name: "Pancaputra Mitratama Mandiri", focus: "Industrial · East Java", logo: "/images/companies/img-pancaputra-mitratama-mandiri-logo.png" },
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
  { name: "Distributor of the Year", by: "Shell Indonesia" },
  { name: "Mining Services Gold", by: "Indonesia Mining Services Awards · 2026" },
  { name: "Seven Shell awards", by: "Shell Distributor Conference · 2026" },
  { name: "Top Shell Marine Distributor", by: "Shell Marine Conference, Hanoi · 2026" },
  { name: "Best Service Penetration", by: "Shell Indonesia" },
  { name: "Best Shell Marine Distributor", by: "ASEANSA Conference · 2025" },
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
