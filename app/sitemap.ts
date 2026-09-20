import type { MetadataRoute } from "next";

const siteUrl = "https://pranavz.in";
const projectRoutes = ["talent-iq", "24hrcloud", "eventify"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes.map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
