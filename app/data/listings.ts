export type ListingType = "auto" | "moto";

export type Listing = {
  slug: string;
  type: ListingType;
  title: string;
  category: string;
  price: string;
  location: string;
  description: string;
  highlights: string[];
};

const listings: Listing[] = [
  {
    slug: "sedan-luxe-2024",
    type: "auto",
    title: "Sedan Luxe 2024",
    category: "sedans",
    price: "$32,900",
    location: "Austin, TX",
    description:
      "A refined daily driver with adaptive cruise control, premium sound, and a fuel-efficient turbo engine.",
    highlights: ["38 mpg highway", "Premium interior", "Full driver assistance"],
  },
  {
    slug: "trailmax-awd",
    type: "auto",
    title: "TrailMax AWD",
    category: "suvs",
    price: "$41,500",
    location: "Denver, CO",
    description:
      "Adventure-ready SUV with all-wheel drive, three-row seating, and configurable cargo space.",
    highlights: ["AWD system", "Towing package", "Panoramic roof"],
  },
  {
    slug: "city-ev-compact",
    type: "auto",
    title: "City EV Compact",
    category: "evs",
    price: "$27,400",
    location: "San Diego, CA",
    description:
      "Compact electric hatch with 280-mile range, quick charging, and modern infotainment.",
    highlights: ["280-mile range", "Fast charge", "Connected cabin"],
  },
  {
    slug: "racer-900",
    type: "moto",
    title: "Racer 900",
    category: "sport",
    price: "$14,800",
    location: "Miami, FL",
    description:
      "Track-inspired sport bike with aggressive geometry, ride modes, and lightweight frame.",
    highlights: ["117 hp", "Quick shifter", "ABS + traction"],
  },
  {
    slug: "summit-adventure-750",
    type: "moto",
    title: "Summit Adventure 750",
    category: "adventure",
    price: "$12,600",
    location: "Boise, ID",
    description:
      "Go-anywhere adventure bike with long-travel suspension and touring-ready comfort.",
    highlights: ["Long-range tank", "Off-road modes", "Heated grips"],
  },
  {
    slug: "metro-scooter-125",
    type: "moto",
    title: "Metro Scooter 125",
    category: "commuter",
    price: "$3,450",
    location: "Portland, OR",
    description:
      "Easy urban commuter with under-seat storage, automatic transmission, and LED lighting.",
    highlights: ["65 mpg", "Lightweight", "USB charging"],
  },
];

export const autoCategories = ["sedans", "suvs", "evs"] as const;
export const motoCategories = ["sport", "adventure", "commuter"] as const;

export const getListingsByType = (type: ListingType) =>
  listings.filter((listing) => listing.type === type);

export const getListingsByCategory = (type: ListingType, category: string) =>
  listings.filter(
    (listing) =>
      listing.type === type && listing.category.toLowerCase() === category.toLowerCase(),
  );

export const getListingBySlug = (type: ListingType, slug: string) =>
  listings.find(
    (listing) =>
      listing.type === type && listing.slug.toLowerCase() === slug.toLowerCase(),
  );

export const getCategoriesByType = (type: ListingType) =>
  type === "auto" ? [...autoCategories] : [...motoCategories];
