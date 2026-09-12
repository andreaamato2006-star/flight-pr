import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: ["/portfolio/demo-"] }, sitemap: "https://flightpr.net/sitemap.xml" }; }
