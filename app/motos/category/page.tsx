import type { Metadata } from "next";
import Link from "next/link";

import { getListingsByCategory, motoCategories } from "../../data/listings";

export const metadata: Metadata = {
  title: "Moto Categories",
  description: "Browse moto categories and see available listings at a glance.",
  openGraph: {
    title: "Moto Categories",
    description: "Browse moto categories and see available listings at a glance.",
  },
};

export default function MotoCategoriesPage() {
  const categorySummaries = motoCategories.map((category) => {
    const listings = getListingsByCategory("moto", category);

    return {
      category,
      listings,
    };
  });

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/motos">Motos</Link>
        <span>/</span>
        <span>Categories</span>
      </div>

      <section className="section">
        <h1>Moto categories</h1>
        <p className="page-description">
          Compare moto categories with the latest listings, pricing, and
          location details. Jump into each category to explore the full specs.
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
          {categorySummaries.map(({ category, listings }) => (
            <article className="card" key={category}>
              <div className="card-header">
                <span>{category}</span>
                <span>
                  {listings.length} listing{listings.length === 1 ? "" : "s"}
                </span>
              </div>
              <h2 className="card-title">
                <Link href={`/motos/category/${category}`}>
                  Explore {category}
                </Link>
              </h2>
              <p className="card-description">
                {listings.length > 0
                  ? `Featured: ${listings[0].title}`
                  : "New listings will be added soon."}
              </p>
              {listings.length > 0 && (
                <div className="card-tags">
                  {listings.slice(0, 3).map((listing) => (
                    <span key={listing.slug} className="tag">
                      {listing.title}
                    </span>
                  ))}
                </div>
              )}
              <div className="card-link">
                <Link href={`/motos/category/${category}`}>
                  View {category} motos →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
