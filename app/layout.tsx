import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://auto-moto.example"),
  title: "Auto + Moto Listings",
  description:
    "Browse curated auto and moto listings with detailed specs, categories, and locations.",
  openGraph: {
    title: "Auto + Moto Listings",
    description:
      "Browse curated auto and moto listings with detailed specs, categories, and locations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="main-layout">
          <header className="header">
            <div className="container nav">
              <Link href="/">Auto + Moto</Link>
              <nav className="nav-links">
                <Link href="/autos">Autos</Link>
                <Link href="/motos">Motos</Link>
              </nav>
            </div>
          </header>
          <main className="main">
            <div className="container">{children}</div>
          </main>
          <footer className="footer">
            <div className="container">
              Updated listings for autos and motos. Contact our team for availability.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
