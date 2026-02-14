import Link from "next/link";

import {
  autoCategories,
  getListingsByType,
  motoCategories,
} from "./data/listings";
import ListingCard from "./components/ListingCard";

export default function HomePage() {
  const autos = getListingsByType("auto");
  const motos = getListingsByType("moto");

  return (
    <div>
      <section className="section">
        <h1>Auto + Moto Listings</h1>
        <p className="page-description">
          Discover curated autos and motos. Browse by category or jump straight to
          the latest listings with full specs, pricing, and location details.
        </p>
      </section>

      <section className="section">
        <h2>Browse auto categories</h2>
        <div className="category-links">
          <Link href="/autos/category">All auto categories</Link>
          {autoCategories.map((category) => (
            <Link key={category} href={`/autos/category/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Browse moto categories</h2>
        <div className="category-links">
          <Link href="/motos/category">All moto categories</Link>
          {motoCategories.map((category) => (
            <Link key={category} href={`/motos/category/${category}`}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Latest auto listings</h2>
        <div className="grid">
          {autos.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Latest moto listings</h2>
        <div className="grid">
          {motos.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      </section>
    </div>
  );
}
