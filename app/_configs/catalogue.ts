export type Pack = "drum" | "pail" | "ibc" | "greaseTank" | "skid" | "jerrycan";
export const PACKS: {
  id: Pack;
  label: string;
  image: string;
  sizes: { label: string; value: string }[];
}[] = [
  {
    id: "drum",
    label: "Drum",
    image: "/images/packaging/img-drum.webp",
    sizes: [
      { label: "Oil", value: "209 L" },
      { label: "Grease", value: "180 kg" },
      { label: "Coolant", value: "205 L" },
      { label: "Degreaser", value: "200 L" },
    ],
  },
  {
    id: "pail",
    label: "Pail",
    image: "/images/packaging/img-pail.webp",
    sizes: [
      { label: "Oil", value: "20 L" },
      { label: "Grease", value: "18 kg" },
    ],
  },
  {
    id: "ibc",
    label: "IBC",
    image: "/images/packaging/img-ibc.webp",
    sizes: [{ label: "Capacity", value: "1,000 L" }],
  },
  {
    id: "greaseTank",
    label: "Grease tank",
    image: "/images/packaging/img-grease-tank.webp",
    sizes: [],
  },
  { id: "skid", label: "Skid tank", image: "/images/packaging/img-skid-tank.webp", sizes: [] },
  {
    id: "jerrycan",
    label: "Jerry can",
    image: "/images/packaging/img-jerrycan.webp",
    sizes: [{ label: "Coolant", value: "3.8 L · 5 L · 25 L" }],
  },
];

export type Product = {
  slug: string;
  range: "Oil" | "Grease" | "Coolant" | "Degreaser" | "Fuel";
  maker: string;
  mark: string;
  type: string;
  summary: string;
  grades: { name: string; packs: Pack[] }[];
  supply?: string;
  brochure?: string;
  logo?: { src: string; width: number; height: number };
  image?: { src: string; caption: string };
};

export const catalogue: Product[] = [
  {
    slug: "shell-rimula",
    logo: { src: "/images/product-logos/img-shell-rimula.png", width: 800, height: 230 },
    range: "Oil",
    maker: "Shell",
    mark: "Rimula",
    type: "Diesel engine oil",
    summary:
      "Shell Rimula is designed with Triple Protection that maintains acid, controls deposit and reduces engine wear. It protects engine,helps to lower maintenance and increases reliability for the latest diesel engines.",
    grades: [
      { name: "Rimula R2 10W", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Rimula R2 30", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Rimula R2 40", packs: ["drum", "pail", "ibc"] },
      { name: "Rimula R2 Extra 15W-40", packs: ["drum", "pail"] },
      { name: "Rimula R3 MV 15W-40", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Rimula R4 X 15W-40", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Rimula R5 E 10W-40", packs: ["drum", "pail"] },
    ],
    image: { src: "/images/products/img-hero-rimula.jpg", caption: "Shell Rimula range" },
  },
  {
    slug: "shell-tellus",
    logo: { src: "/images/product-logos/img-shell-tellus.png", width: 422, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Tellus",
    type: "Hydraulic oil",
    summary:
      "Shell Tellus is a high-performance hydraulic fluid that provides outstanding wear protection and performance in most industrial hydraulic system as well as maintaining system efficiency.",
    grades: [
      { name: "Tellus S2 MX 100", packs: ["drum", "pail", "ibc"] },
      { name: "Tellus S2 MX 32", packs: ["drum", "pail", "ibc"] },
      { name: "Tellus S2 MX 46", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Tellus S2 MX 68", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Tellus S2 VX 100", packs: ["drum"] },
      { name: "Tellus S2 VX 15", packs: ["drum", "pail"] },
      { name: "Tellus S2 VX 22", packs: ["drum"] },
      { name: "Tellus S2 VX 32", packs: ["drum"] },
      { name: "Tellus S2 VX 46", packs: ["drum", "ibc"] },
      { name: "Tellus S2 VX 68", packs: ["drum", "pail"] },
      { name: "Tellus S3 M 46", packs: ["drum", "ibc"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-tellus.pdf",
    image: { src: "/images/products/img-hero-tellus.jpg", caption: "Shell Tellus range" },
  },
  {
    slug: "shell-spirax",
    logo: { src: "/images/product-logos/img-shell-spirax.png", width: 296, height: 142 },
    range: "Oil",
    maker: "Shell",
    mark: "Spirax",
    type: "Gear oil",
    summary:
      "Shell Spirax and Shell Omala are formulated to provide trouble free operation and maximum reliability for equipment durability. The products offer a wide range of applications, including for challenging operational environment with long service intervals and higher specification oil.",
    grades: [
      { name: "Spirax S2 A 140", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S2 A 80W-90", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S2 A 85W-140", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Spirax S2 A 90", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S2 G 90", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S3 G 80W", packs: ["drum"] },
      { name: "Spirax S4 ATF HDX", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S4 CX 10W", packs: ["drum"] },
      { name: "Spirax S4 CX 30", packs: ["drum", "pail", "ibc", "skid"] },
      { name: "Spirax S4 CX 50", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S4 CX 60", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S4 TXM", packs: ["drum", "pail", "ibc"] },
      { name: "Spirax S5 CFD M 60", packs: ["drum", "ibc"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-spirax.pdf",
    image: { src: "/images/products/img-hero-spirax.jpg", caption: "Shell Spirax range" },
  },
  {
    slug: "shell-omala",
    logo: { src: "/images/product-logos/img-shell-omala.png", width: 264, height: 121 },
    range: "Oil",
    maker: "Shell",
    mark: "Omala",
    type: "Gear oil",
    summary:
      "Shell Spirax and Shell Omala are formulated to provide trouble free operation and maximum reliability for equipment durability. The products offer a wide range of applications, including for challenging operational environment with long service intervals and higher specification oil.",
    grades: [
      { name: "Omala S2 GX 100", packs: ["drum", "pail"] },
      { name: "Omala S2 GX 150", packs: ["drum", "pail"] },
      { name: "Omala S2 GX 220", packs: ["drum", "pail", "ibc"] },
      { name: "Omala S2 GX 320", packs: ["drum", "pail", "ibc"] },
      { name: "Omala S2 GX 460", packs: ["drum", "pail"] },
      { name: "Omala S2 GX 680", packs: ["drum"] },
      { name: "Omala S4 GXV 220", packs: ["drum", "pail"] },
      { name: "Omala S4 GXV 320", packs: ["drum", "pail"] },
      { name: "Omala S4 GXV 460", packs: ["drum", "pail"] },
      { name: "Omala S4 GXV 680", packs: ["drum"] },
      { name: "Omala S4 WE 220", packs: ["pail"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-omala.pdf",
    image: { src: "/images/products/img-hero-omala.jpg", caption: "Shell Omala range" },
  },
  {
    slug: "shell-turbo",
    logo: { src: "/images/product-logos/img-shell-turbo.png", width: 458, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Turbo",
    type: "Turbine oil",
    summary:
      "Shell Turbo range of turbine oils is designed to protect your equipment from the effects of corrosion and to minimize varnish and lacquer buildup in the turbine bearings and control valves, from high-temperature gas turbine systems to combined-cycle systems with integral gearing.",
    grades: [
      { name: "Turbo T 32", packs: ["drum", "pail"] },
      { name: "Turbo T 46", packs: ["drum", "pail"] },
      { name: "Turbo T 68", packs: ["drum", "pail"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-turbo.pdf",
    image: { src: "/images/products/img-hero-turbo.jpg", caption: "Shell Turbo range" },
  },
  {
    slug: "shell-diala",
    image: { src: "/images/products/img-hero-diala.jpg", caption: "Shell Diala" },
    logo: { src: "/images/product-logos/img-shell-diala.png", width: 395, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Diala",
    type: "Electric oil",
    summary:
      "Shell Diala offers an extended oil life and is designed to meet challenges presented by the latest power transformers. It is produced using Shell’s GTL (gas-to-liquid) technology that offers a high degree of compositional consistency and has an excellent response to anti-oxidant.",
    grades: [{ name: "Diala S4 ZX-I", packs: ["drum", "pail"] }],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-diala.pdf",
  },
  {
    slug: "shell-corena",
    image: { src: "/images/products/img-hero-corena.jpg", caption: "Shell Corena" },
    logo: { src: "/images/product-logos/img-shell-corena.png", width: 257, height: 111 },
    range: "Oil",
    maker: "Shell",
    mark: "Corena",
    type: "Compressor oil",
    summary:
      "Shell Corena and Refrigeration Oil are premium quality air compressor oil designed to deliver high performance lubrication. It uses an advanced additive system to provide excellent protection and performance for compressors.",
    grades: [
      { name: "Corena S2 P 100", packs: ["drum", "pail"] },
      { name: "Corena S2 P 150", packs: ["drum", "pail"] },
      { name: "Corena S3 R 46", packs: ["drum", "pail"] },
      { name: "Corena S3 R 68", packs: ["drum", "pail"] },
      { name: "Corena S4 P 100", packs: ["drum", "pail"] },
      { name: "Corena S4 R 46", packs: ["pail"] },
      { name: "Corena S4 R 68", packs: ["drum", "pail"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-corena.pdf",
  },
  {
    slug: "shell-refrigeration-oil",
    image: { src: "/images/products/img-hero-refrigeration-oil.jpg", caption: "Shell Refrigeration Oil" },
    logo: { src: "/images/product-logos/img-shell-refrigeration-oil.png", width: 800, height: 163 },
    range: "Oil",
    maker: "Shell",
    mark: "Refrigeration Oil",
    type: "Compressor oil",
    summary:
      "Shell Corena and Refrigeration Oil are premium quality air compressor oil designed to deliver high performance lubrication. It uses an advanced additive system to provide excellent protection and performance for compressors.",
    grades: [
      { name: "FR-F 68", packs: ["pail"] },
      { name: "FR-V 68", packs: ["drum", "pail"] },
      { name: "FR-A 68", packs: ["drum"] },
    ],
  },
  {
    slug: "shell-morlina",
    image: { src: "/images/products/img-hero-morlina.jpg", caption: "Shell Morlina" },
    logo: { src: "/images/product-logos/img-shell-morlina.png", width: 469, height: 186 },
    range: "Oil",
    maker: "Shell",
    mark: "Morlina",
    type: "Bearing and circulating oil",
    summary:
      "Shell Morlina is a high-performance oil that has been developed to provide outstanding oxidation and water separation protection for most general industrial bearing and circulating oil system applications.",
    grades: [
      { name: "Morlina S2 B 150", packs: ["drum", "pail"] },
      { name: "Morlina S2 B 220", packs: ["drum", "pail"] },
      { name: "Morlina S2 B 320", packs: ["drum"] },
      { name: "Morlina S2 BL 10", packs: ["drum"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-morlina.pdf",
  },
  {
    slug: "shell-argina",
    logo: { src: "/images/product-logos/img-shell-argina.png", width: 228, height: 117 },
    range: "Oil",
    maker: "Shell",
    mark: "Argina",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [
      { name: "Argina S3 30", packs: ["drum"] },
      { name: "Argina S3 40", packs: ["drum", "ibc"] },
      { name: "Argina S2 40", packs: ["drum"] },
      { name: "Argina S2 30", packs: ["drum"] },
      { name: "Argina S4 40", packs: ["drum"] },
      { name: "Argina S 40", packs: ["drum"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-argina-gadinia.pdf",
    image: { src: "/images/products/img-hero-argina.jpg", caption: "Shell Argina pail" },
  },
  {
    slug: "shell-gadinia",
    image: { src: "/images/products/img-hero-gadinia.jpg", caption: "Shell Gadinia" },
    logo: { src: "/images/product-logos/img-shell-gadinia.png", width: 253, height: 98 },
    range: "Oil",
    maker: "Shell",
    mark: "Gadinia",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [
      { name: "Gadinia S3 40", packs: ["drum", "ibc"] },
      { name: "Gadinia S3 30", packs: ["drum"] },
      { name: "Gadinia 30", packs: ["drum"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-argina-gadinia.pdf",
  },
  {
    slug: "shell-alexia",
    image: { src: "/images/products/img-hero-alexia.jpg", caption: "Shell Alexia" },
    logo: { src: "/images/product-logos/img-shell-alexia.png", width: 320, height: 134 },
    range: "Oil",
    maker: "Shell",
    mark: "Alexia",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [
      { name: "Alexia 70", packs: ["drum"] },
      { name: "Alexia 40", packs: ["drum", "ibc"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-alexia.pdf",
  },
  {
    slug: "shell-melina",
    image: { src: "/images/products/img-hero-melina.jpg", caption: "Shell Melina" },
    logo: { src: "/images/product-logos/img-shell-melina.png", width: 558, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Melina",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Melina S30", packs: ["drum", "ibc"] }],
  },
  {
    slug: "shell-mysella",
    image: { src: "/images/products/img-hero-mysella.jpg", caption: "Shell Mysella" },
    logo: { src: "/images/product-logos/img-shell-mysella.png", width: 262, height: 121 },
    range: "Oil",
    maker: "Shell",
    mark: "Mysella",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [
      { name: "Mysella S3 N 40", packs: ["drum"] },
      { name: "Mysella S3 S 40", packs: ["drum"] },
      { name: "Mysella S5 N 40", packs: ["drum"] },
      { name: "Mysella S5 S 40", packs: ["drum"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-mysella.pdf",
  },
  {
    slug: "shell-sirius",
    image: { src: "/images/products/img-hero-sirius.jpg", caption: "Shell Sirius" },
    logo: { src: "/images/product-logos/img-shell-sirius.png", width: 447, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Sirius",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Sirius 15W-40", packs: ["drum"] }],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-sirius.pdf",
  },
  {
    slug: "shell-super-marine",
    image: { src: "/images/products/img-hero-super-marine.jpg", caption: "Shell Super Marine" },
    logo: { src: "/images/product-logos/img-shell-super-marine.png", width: 586, height: 240 },
    range: "Oil",
    maker: "Shell",
    mark: "Super Marine",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Super Marine 15W-40", packs: ["drum"] }],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-super-marine.pdf",
  },
  {
    slug: "shell-marine-40",
    image: { src: "/images/products/img-hero-marine-40.jpg", caption: "Shell Marine 40" },
    logo: { src: "/images/product-logos/img-shell-marine-40.png", width: 800, height: 228 },
    range: "Oil",
    maker: "Shell",
    mark: "Marine 40",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Marine 40", packs: ["drum"] }],
  },
  {
    slug: "shell-nautilus-premium",
    image: { src: "/images/products/img-hero-nautilus-premium.jpg", caption: "Shell Nautilus Premium" },
    logo: { src: "/images/product-logos/img-shell-nautilus-premium.png", width: 296, height: 142 },
    range: "Oil",
    maker: "Shell",
    mark: "Nautilus Premium",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Nautilus Premium", packs: ["pail"] }],
  },
  {
    slug: "shell-heat-transfer-oil",
    image: { src: "/images/products/img-hero-heat-transfer-oil.jpg", caption: "Shell Heat Transfer Oil" },
    logo: { src: "/images/product-logos/img-shell-heat-transfer-oil.png", width: 800, height: 139 },
    range: "Oil",
    maker: "Shell",
    mark: "Heat Transfer Oil",
    type: "Marine oil",
    summary:
      "Shell Marine Products are designed to optimize engine performance while simplifying on-board inventories and technical services. The product offers reliable engine performance, improved engine reliability, extended oil life, engine protection and system efficiency.",
    grades: [{ name: "Heat Transfer Oil S2", packs: ["drum"] }],
  },
  {
    slug: "shell-gadus",
    logo: { src: "/images/product-logos/img-shell-gadus.png", width: 228, height: 111 },
    range: "Grease",
    maker: "Shell",
    mark: "Gadus",
    type: "Grease",
    summary:
      "Shell Gadus is comprehensive family of greases that has been developed to deliver optimum value through enhanced wear protection, long grease life and system effiency. The Gadus range include multipurporse greases that are designed to help simplify your product inventory.",
    grades: [
      { name: "Gadus S1 OG 200", packs: ["drum", "pail"] },
      { name: "Gadus S2 A320 2", packs: ["pail"] },
      { name: "Gadus S2 OG 85", packs: ["drum"] },
      { name: "Gadus S2 U460L 2", packs: ["drum"] },
      { name: "Gadus S2 V100 2", packs: ["drum", "pail"] },
      { name: "Gadus S2 V100 3", packs: ["drum", "pail"] },
      { name: "Gadus S2 V150C 3", packs: ["drum", "pail"] },
      { name: "Gadus S2 V220 2", packs: ["drum", "pail", "greaseTank"] },
      { name: "Gadus S3 T100 2", packs: ["pail"] },
      { name: "Gadus S3 V220C 2", packs: ["drum", "pail"] },
      { name: "Gadus S3 V220C 3", packs: ["pail"] },
      { name: "Gadus S3 V460D 2", packs: ["drum", "pail", "greaseTank"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/shell-gadus.pdf",
    image: { src: "/images/products/img-hero-gadus.jpg", caption: "Shell Gadus range" },
  },
  {
    slug: "dunamoss-tyre-mounting",
    image: { src: "/images/products/img-hero-dunamoss-tyre-mounting.jpg", caption: "Dunamoss Tyre Mounting" },
    logo: { src: "/images/product-logos/img-dunamoss.png", width: 209, height: 140 },
    range: "Grease",
    maker: "Dunamoss",
    mark: "Tyre Mounting",
    type: "Tyre mounting grease",
    summary:
      "Dunamoss tyre mounting grease is a water-based compound. It is designed to assist in mounting tyre and fortified with rust inhibitors to provide protection against corrosion.",
    grades: [{ name: "Dunamoss Tyre Mounting", packs: ["pail"] }],
  },
  {
    slug: "reco-cool",
    image: { src: "/images/products/img-hero-reco-cool.jpg", caption: "Reco-Cool range" },
    logo: { src: "/images/product-logos/img-reco-cool.png", width: 399, height: 116 },
    range: "Coolant",
    maker: "Recochem",
    mark: "Reco-Cool",
    type: "Coolant",
    summary:
      "Reco-Cool is a premium, fully formulated and ready-to-use coolant for all types of engine. It is a well-designed coolant with a long lifetime. The product has been developed into a Hybrid Organic Acid Tehnology.",
    grades: [
      { name: "Marine GF", packs: ["drum", "pail"] },
      { name: "Reco-Cool HD Premium-N 50% Prediluted", packs: ["drum", "jerrycan"] },
      { name: "Reco-Cool HD Premium-N 25% Prediluted", packs: ["drum", "jerrycan"] },
      { name: "Reco-Cool Multiroad", packs: ["drum", "jerrycan"] },
      { name: "Reco-Cool Oat 10X Super Concentrate", packs: ["jerrycan"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/reco-cool.pdf",
  },
  {
    slug: "dunamoss-rim-conditioner",
    image: { src: "/images/products/img-hero-dunamoss-rim-conditioner.jpg", caption: "Dunamoss Rim Conditioner" },
    logo: { src: "/images/product-logos/img-dunamoss.png", width: 209, height: 140 },
    range: "Coolant",
    maker: "Dunamoss",
    mark: "Rim Conditioner",
    type: "Rim conditioner",
    summary:
      "Dunamoss Rim Conditioner is specifically formulated to extend the life of the tyre and rim use, improve the contact of the tyre to the rim, prevent rust and corrosion. The fluid is designed for use in heavy duty mining and construction equipment.",
    grades: [{ name: "Reco Tred", packs: ["ibc"] }],
  },
  {
    slug: "waterless-handwash",
    image: { src: "/images/products/img-hero-waterless-handwash.jpg", caption: "Dunamoss Waterless Handwash" },
    logo: { src: "/images/product-logos/img-dunamoss.png", width: 209, height: 140 },
    range: "Coolant",
    maker: "Dunamoss",
    mark: "Waterless Handwash",
    type: "Waterless handwash",
    summary:
      "Dunamoss Waterless Handwash is an exceptional blend of cleaners, formulated to deliver effective cleaning power, dissolving grease, oil and dirt without water. It is solvent and petroleum-free that works to leave the hands refreshed and moist — even with repeated use.",
    grades: [],
  },
  {
    slug: "blue-cleaner-rr",
    image: { src: "/images/products/img-hero-blue-cleaner-rr.jpg", caption: "Blue Cleaner RR" },
    logo: { src: "/images/product-logos/img-blue-cleaner-rr.png", width: 430, height: 142 },
    range: "Degreaser",
    maker: "Blue Coolant",
    mark: "Blue Cleaner RR",
    type: "Degreaser",
    summary:
      "Blue Cleaner RR is a biodegradable water based multi-purpose cleaning solution for truck, car, marine applications and heavy-duty mining equipment. It is designed to effectively remove dirt, grease and grime from all hard surfaces, including vertical ones.",
    grades: [
      { name: "Blue Cleaner RR", packs: ["drum"] },
      { name: "TMW Gold", packs: ["drum", "ibc"] },
    ],
    brochure: "https://sefasgroup.com/upload/products/brochures/blue-cleaner-rr.pdf",
  },
  {
    slug: "solar-merah-putih-cn48",
    image: { src: "/images/products/img-hero-solar-merah-putih.jpg", caption: "Solar Merah Putih delivery" },
    logo: { src: "/images/product-logos/img-solar-merah-putih.png", width: 347, height: 106 },
    range: "Fuel",
    maker: "Energi Merah Putih",
    mark: "Solar Merah Putih CN48",
    type: "Fuel",
    summary:
      "Solar Merah Putih CN48 is a high speed diesel industrial fuel. Solar Merah Putih CN48 meets the specification that's issued by MIGAS and is also recommended for all types of diesel vehicles & engines by keeping the machine clean and free of deposits.",
    grades: [],
    supply: "Delivered by tanker or from a portable filling station, with GPS-tracked volumes.",
  },
  {
    slug: "solar-merah-putih-cn51",
    image: { src: "/images/products/img-hero-solar-merah-putih.jpg", caption: "Solar Merah Putih delivery" },
    logo: { src: "/images/product-logos/img-solar-merah-putih.png", width: 347, height: 106 },
    range: "Fuel",
    maker: "Energi Merah Putih",
    mark: "Solar Merah Putih CN51",
    type: "Fuel",
    summary:
      "Solar Merah Putih CN51 is a high speed diesel fuel with one of the lowest sulfur content in Indonesia (max 10ppm), which makes Solar Merah Putih CN48 protect important components of the fuel system and reduce exhaust emissions, thereby saving equipment maintenance costs and protecting your equipment investment costs from engine breakdown.",
    grades: [],
    supply: "Delivered by tanker or from a portable filling station, with GPS-tracked volumes.",
  },
];

export const productsIn = (range: Product["range"]) => catalogue.filter((p) => p.range === range);
