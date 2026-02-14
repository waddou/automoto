import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ListingCard from "../../../components/ListingCard";
import {
  autoCategories,
  getListingsByCategory,
} from "../../../data/listings";

type CategoryPageProps = {
  params: { category: string };
};

export const generateMetadata = ({
  params,
}: CategoryPageProps): Metadata => {
  const categoryLabel = params.category.replace(/-/g, " ");

  return {
    title: `Auto listings in ${categoryLabel}`,
    description: `Browse auto listings in the ${categoryLabel} category with pricing and specs.`,
    openGraph: {
      title: `Auto listings in ${categoryLabel}`,
      description: `Browse auto listings in the ${categoryLabel} category with pricing and specs.`,
    },
  };
};

export default function AutoCategoryPage({ params }: CategoryPageProps) {
  const category = params.category.toLowerCase();

  if (!autoCategories.includes(category as (typeof autoCategories)[number])) {
    notFound();
  }

  const listings = getListingsByCategory("auto", category);

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/autos">Autos</Link>
        <span>/</span>
        <span>{category}</span>
      </div>
      <section className="section">
        <h1>Autos: {category}</h1>
        <p className="page-description">
          Category overview for {category}. Compare pricing, locations, and key
          highlights for each auto listing.
        </p>
      </section>

      <section className="section">
        {listings.length === 0 ? (
          <div className="empty-state">No listings are available yet.</div>
        ) : (
          <div className="grid">
            {listings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
