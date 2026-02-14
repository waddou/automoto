import type { Metadata } from "next";
import Link from "next/link";

import ListingCard from "../components/ListingCard";
import { autoCategories, getListingsByType } from "../data/listings";

export const metadata: Metadata = {
  title: "Auto Listings",
  description: "Explore available autos with categories and full specs.",
  openGraph: {
    title: "Auto Listings",
    description: "Explore available autos with categories and full specs.",
  },
};

export default function AutosPage() {
  const autos = getListingsByType("auto");

  return (
    <div>
      <section className="section">
        <h1>Auto listings</h1>
        <p className="page-description">
          Browse sedans, SUVs, and EVs. Each listing includes pricing, location,
          and highlight features.
        </p>
        <div className="category-links">
          {autoCategories.map((category) => (
            <Link key={category} href={`/autos/category/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid">
          {autos.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
