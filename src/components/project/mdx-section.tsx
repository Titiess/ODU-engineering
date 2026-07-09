import { FadeIn } from "@/components/animations/motion-primitives";

interface MDXSectionProps {
  slug: string;
  section: string;
  title: string;
  id?: string;
}

export async function MDXSection({ slug, section, title, id }: MDXSectionProps) {
  let Content;
  try {
    const mod = await import(
      `@/content/projects/${slug}/${section}.mdx`
    );
    Content = mod.default;
  } catch {
    return null;
  }

  return (
    <section id={id || section} className="relative px-6 py-16 border-t border-white/[0.04] scroll-mt-24">
      <div className="max-w-3xl mx-auto prose-odu">
        <Content />
      </div>
    </section>
  );
}
