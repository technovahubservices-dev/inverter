export const products = [
  {
    id: "volterra-core",
    name: "VOLTERRA Core",
    category: "Home",
    tagline: "Everyday power, refined.",
    description:
      "A premium residential inverter concept designed for essential everyday home backup.",
    price: 24999,
    image: "/images/products/inverter-main.png",
    badge: "EVERYDAY",

    coverageLevel: 1,

    supportedAppliances: [
      "lights",
      "fans",
      "tv",
      "wifi",
    ],

    idealFor: "Essential home essentials",

    features: [
      "Home backup",
      "Intelligent power management",
      "Protection-focused design",
    ],
  },

  {
    id: "volterra-plus",
    name: "VOLTERRA Plus",
    category: "Home",
    tagline: "More power. More continuity.",
    description:
      "A larger residential inverter concept for homes with broader backup requirements.",
    price: 34999,
    image: "/images/products/inverter-main.png",
    badge: "POPULAR",

    coverageLevel: 2,

    supportedAppliances: [
      "lights",
      "fans",
      "tv",
      "wifi",
      "fridge",
      "work",
    ],

    idealFor: "Most rooms and everyday appliances",

    features: [
      "Extended home coverage",
      "Intelligent power management",
      "Protection-focused design",
    ],
  },

  {
    id: "volterra-pro",
    name: "VOLTERRA Pro",
    category: "Home",
    tagline: "Power without compromise.",
    description:
      "A premium residential inverter concept built for broader everyday power requirements.",
    price: 49999,
    image: "/images/products/inverter-main.png",
    badge: "PREMIUM",

    coverageLevel: 3,

    supportedAppliances: [
      "lights",
      "fans",
      "tv",
      "wifi",
      "fridge",
      "work",
    ],

    idealFor: "Broader whole-home backup",

    features: [
      "High-demand home backup",
      "Advanced power management",
      "Protection-focused design",
    ],
  },
];

export default products;
