import type { Metadata } from "next";
import Link from "next/link";

import { autoCategories, getListingsByCategory } from "../../data/listings";

export const metadata: Metadata = {
  title: "Auto Categories",
  description: "Browse auto categories and see available listings at a glance.",
  openGraph: {
    title: "Auto Categories",
    description: "Browse auto categories and see available listings at a glance.",
  },
};

export default function AutoCategoriesPage() {
  const categorySummaries = autoCategories.map((category) => {
    const listings = getListingsByCategory("auto", category);

    return {
      category,
      listings,
    };
  });

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/autos">Autos</Link>
        <span>/</span>
        <span>Categories</span>
      </div>

      <section className="section">
        <h1>Auto categories</h1>
        <p className="page-description">
          Explore auto categories and jump into the listings that match your
          lifestyle. Each category includes pricing, locations, and highlight
          features.
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
          {categorySummaries.map(({ category, listings }) => (
            <article className="card" key={category}>
              <div className="card-header">
                <span>{category}</span>
                <span>
                  {listings.length} listing{listings.length === 1 ? "" : "s"}
                </span>
              </div>
              <h2 className="card-title">
                <Link href={`/autos/category/${category}`}>
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
                <Link href={`/autos/category/${category}`}>
                  View {category} autos →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
