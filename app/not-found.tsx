import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section">
      <h1>Listing not found</h1>
      <p className="page-description">
        The listing or category you are looking for does not exist. Browse the
        latest autos and motos below.
      </p>
      <div className="category-links">
        <Link href="/autos">View autos</Link>
        <Link href="/motos">View motos</Link>
      </div>
    </div>
  );
}
