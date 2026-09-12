import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { Eyebrow } from "@/components/ui";
export const metadata: Metadata = { title: "Portfolio", description: "Portfolio demo di fotografia, wedding film, drone ed eventi Flight P.R.", alternates: { canonical: "/portfolio" } };
export default function Portfolio() { return <main id="main" className="portfolio-page"><header className="page-header"><Eyebrow>Archivio visivo · Anteprima demo</Eyebrow><h1>Storie.<br/><em>Ognuna diversa.</em></h1><p>I progetti e i nomi mostrati in questa anteprima sono dimostrativi. Le immagini stock saranno sostituite con lavori originali Flight P.R.</p></header><section className="portfolio-section"><PortfolioGrid/></section></main>; }
