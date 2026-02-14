import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getListingBySlug } from "../../data/listings";

type ListingPageProps = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: ListingPageProps): Metadata => {
  const listing = getListingBySlug("auto", params.slug);

  if (!listing) {
    return {
      title: "Auto listing not found",
      description: "The auto listing you are looking for is unavailable.",
    };
  }

  return {
    title: `${listing.title} | Auto Listing`,
    description: listing.description,
    openGraph: {
      title: `${listing.title} | Auto Listing`,
      description: listing.description,
    },
  };
};

export default function AutoListingPage({ params }: ListingPageProps) {
  const listing = getListingBySlug("auto", params.slug);

  if (!listing) {
    notFound();
  }

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/autos">Autos</Link>
        <span>/</span>
        <Link href="/autos/category">Categories</Link>
        <span>/</span>
        <Link href={`/autos/category/${listing.category}`}>
          {listing.category}
        </Link>
        <span>/</span>
        <span>{listing.title}</span>
      </div>
      <section className="details">
        <h1>{listing.title}</h1>
        <p className="page-description">{listing.description}</p>
        <ul className="details-list">
          <li>
            <strong>Category:</strong> {listing.category}
          </li>
          <li>
            <strong>Location:</strong> {listing.location}
          </li>
          <li>
            <strong>Price:</strong> {listing.price}
          </li>
        </ul>
        <div className="card-tags">
          {listing.highlights.map((highlight) => (
            <span key={highlight} className="tag">
              {highlight}
            </span>
          ))}
        </div>
        <div className="card-link">
          <Link href="/autos">Back to autos</Link>
        </div>
      </section>
    </div>
  );
}
