import { MetadataRoute } from "next";
import { getProjectSlugs, getProjectMetadata } from "@/lib/content/queries";
import { SITE_URL } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/projects", "/about", "/contact", "/articles", "/notes"];

  const staticEntries = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : route === "/projects" ? 0.9 : 0.8,
  }));

  const slugs = getProjectSlugs();
  const dynamicEntries = await Promise.all(
    slugs.map(async (slug) => {
      try {
        const meta = await getProjectMetadata(slug);
        return {
          url: `${SITE_URL}/projects/${slug}`,
          lastModified: meta.updatedAt ? new Date(meta.updatedAt) : new Date(meta.publishedAt || Date.now()),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        };
      } catch (err) {
        // Fallback for errors loading dynamic project metadata
        return {
          url: `${SITE_URL}/projects/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.6,
        };
      }
    })
  );

  return [...staticEntries, ...dynamicEntries];
}
