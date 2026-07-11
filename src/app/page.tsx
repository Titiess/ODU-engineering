import { HeroSection } from "@/components/marketing/hero-section";
import { FeaturedProjectCard } from "@/components/marketing/featured-project-card";
import { EngineeringMetrics } from "@/components/marketing/engineering-metrics";
import { PrinciplesSection } from "@/components/marketing/principles-section";
import { TechAreasSection } from "@/components/marketing/tech-areas-section";
import { getProjectData } from "@/lib/content/queries";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  canonicalPath: "/",
});


export default async function HomePage() {
  // Retrieve the primary featured project data
  const project = await getProjectData("owerri-municipal-e-certificate");

  return (
    <div className="relative min-h-screen">
      {/* Hero Section with architecture viz */}
      <HeroSection />

      {/* Featured deep-dive showcase */}
      {project && <FeaturedProjectCard project={project} />}

      {/* High-level system engineering metrics */}
      <EngineeringMetrics />

      {/* Engineering Philosophy principles */}
      <PrinciplesSection />

      {/* Active developer roadmap & tech focus */}
      <TechAreasSection />
    </div>
  );
}
