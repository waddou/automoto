import type { Metadata } from "next";
import Link from "next/link";

import ListingCard from "../components/ListingCard";
import { getListingsByType, motoCategories } from "../data/listings";

export const metadata: Metadata = {
  title: "Moto Listings",
  description: "Explore available motos with categories and full specs.",
  openGraph: {
    title: "Moto Listings",
    description: "Explore available motos with categories and full specs.",
  },
};

export default function MotosPage() {
  const motos = getListingsByType("moto");

  return (
    <div>
      <section className="section">
        <h1>Moto listings</h1>
        <p className="page-description">
          Browse sport, adventure, and commuter motos with detailed specs and
          updated availability.
        </p>
        <div className="category-links">
          {motoCategories.map((category) => (
            <Link key={category} href={`/motos/category/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid">
          {motos.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
