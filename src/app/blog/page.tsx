import { Metadata } from "next";
import { getBlogCategories } from "@/lib/notion";
import { BouncyCardsFeatures } from "@/components/ui/bouncy-cards-features";
import { FadeInScroll } from "@/components/ui/fade-in-scroll";

export const metadata: Metadata = {
  title: "Blog | Pranata",
};

export default async function BlogPage() {
  const categories = await getBlogCategories();

  return (
    <main className="min-h-screen pt-32 pb-24 bg-surface-container-low border-t border-outline-variant/20">
      <FadeInScroll className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-on-surface mb-6">
            My Writings
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Categorized thoughts on anime, film, technology, and original short stories.
          </p>
        </div>

        <BouncyCardsFeatures categories={categories} />
      </FadeInScroll>
    </main>
  );
}
