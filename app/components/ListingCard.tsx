import Link from "next/link";

import type { Listing } from "../data/listings";

const formatTypeLabel = (type: Listing["type"]) =>
  type === "auto" ? "Auto" : "Moto";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="card">
      <div className="card-header">
        <span>{formatTypeLabel(listing.type)}</span>
        <span>{listing.price}</span>
      </div>
      <h3 className="card-title">
        <Link href={`/${listing.type}s/${listing.slug}`}>{listing.title}</Link>
      </h3>
      <p className="card-meta">{listing.location}</p>
      <p className="card-description">{listing.description}</p>
      <div className="card-tags">
        {listing.highlights.map((highlight) => (
          <span key={highlight} className="tag">
            {highlight}
          </span>
        ))}
      </div>
      <div className="card-link">
        <Link href={`/${listing.type}s/${listing.slug}`}>
          View details →
        </Link>
      </div>
    </article>
  );
}
