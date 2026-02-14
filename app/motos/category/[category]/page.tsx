import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ListingCard from "../../../components/ListingCard";
import {
  getListingsByCategory,
  motoCategories,
} from "../../../data/listings";

type CategoryPageProps = {
  params: { category: string };
};

export const generateMetadata = ({
  params,
}: CategoryPageProps): Metadata => {
  const categoryLabel = params.category.replace(/-/g, " ");

  return {
    title: `Moto listings in ${categoryLabel}`,
    description: `Browse moto listings in the ${categoryLabel} category with pricing and specs.`,
    openGraph: {
      title: `Moto listings in ${categoryLabel}`,
      description: `Browse moto listings in the ${categoryLabel} category with pricing and specs.`,
    },
  };
};

export default function MotoCategoryPage({ params }: CategoryPageProps) {
  const category = params.category.toLowerCase();

  if (!motoCategories.includes(category as (typeof motoCategories)[number])) {
    notFound();
  }

  const listings = getListingsByCategory("moto", category);

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/motos">Motos</Link>
        <span>/</span>
        <Link href="/motos/category">Categories</Link>
        <span>/</span>
        <span>{category}</span>
      </div>
      <section className="section">
        <h1>Motos: {category}</h1>
        <p className="page-description">
          Explore {category} motos with updated pricing and highlight features.
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
