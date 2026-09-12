import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

const manrope = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://flightpr.net"),
  title: { default: "Flight P.R. | Fotografia e Video Matrimonio", template: "%s | Flight P.R." },
  description: "Studio di fotografia, wedding film e riprese drone per matrimoni, feste ed eventi in tutta Italia.",
  alternates: { canonical: "/" },
  openGraph: { title: "Flight P.R. — Le immagini restano", description: "Fotografia, cinema e riprese aeree per storie autentiche.", type: "website", locale: "it_IT", siteName: "Flight P.R.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Flight P.R. — Le immagini restano" }] },
  twitter: { card: "summary_large_image", title: "Flight P.R. — Le immagini restano", description: "Fotografia, cinema e riprese aeree per storie autentiche.", images: ["/og.png"] },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it"><body className={`${manrope.variable} ${serif.variable}`}><a className="skip-link" href="#main">Vai al contenuto</a><SiteShell>{children}</SiteShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "ProfessionalService", name: "Flight P.R. — Flight Personal Recording", url: "https://flightpr.net", email: "flight.personal.recording@gmail.com", telephone: "+39 371 399 1692", vatID: "IT18244501005", areaServed: "Italia", sameAs: ["https://instagram.com/flight_pr"] }) }} /></body></html>
  );
}
