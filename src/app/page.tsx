import Link from "next/link";
import { TextRevealByWord } from "../components/ui/text-reveal";
import { HeroScrollTrigger } from "../components/HeroScrollTrigger";
import { StackedCardsInteraction } from "../components/ui/stacked-cards-interaction";
import { ExperienceList } from "../components/ui/experience-list";
import { SocialCard } from "../components/ui/social-card";
import { BouncyCardsFeatures } from "../components/ui/bouncy-cards-features";
import { FadeInScroll } from "../components/ui/fade-in-scroll";
import { SOCIAL_LINKS } from "../lib/data";
import { getProjects, getExperiences, getBlogCategories } from "../lib/notion";

export default async function Home() {
  const projects = await getProjects();
  const experiences = await getExperiences();
  const categories = await getBlogCategories();

  // Sort experiences by date descending
  const sortedExperiences = [...experiences].sort((a, b) => {
    const aIsPresent = a.duration?.toUpperCase().includes('PRESENT') || a.date?.toUpperCase().includes('PRES');
    const bIsPresent = b.duration?.toUpperCase().includes('PRESENT') || b.date?.toUpperCase().includes('PRES');
    if (aIsPresent && !bIsPresent) return -1;
    if (!aIsPresent && bIsPresent) return 1;
    
    const aYear = parseInt(a.date?.match(/\d{4}/)?.[0] || '0');
    const bYear = parseInt(b.date?.match(/\d{4}/)?.[0] || '0');
    return bYear - aYear;
  }).slice(0, 3);
  return (
    <main>
      {/* Hero Section */}
      <header className="relative h-[150vh] bg-background">
        <div className="sticky top-0 h-screen w-full flex items-center pt-24 overflow-hidden px-margin-mobile md:px-margin-desktop">
          <div className="organic-shape bg-primary-fixed-dim w-[800px] h-[800px] -top-40 -left-40"></div>
          <div className="organic-shape bg-secondary-fixed-dim w-[600px] h-[600px] -bottom-20 right-0"></div>
          <div className="organic-shape bg-tertiary-fixed-dim w-[500px] h-[500px] top-1/4 right-1/4 opacity-30"></div>
          <div className="organic-shape bg-primary-fixed w-[300px] h-[300px] bottom-1/4 left-1/3 opacity-20"></div>
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

            {/* Left Column: Spacer for Global Mascot */}
            <div className="w-full flex justify-center items-center order-1 md:order-none relative h-full min-h-[300px]">
              <div className="w-[150px] md:w-[220px]"></div>
            </div>

            {/* Right Column: Text Content */}
            <div className="flex flex-col justify-center order-2 md:order-none z-10">
              <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest mb-6 opacity-0 translate-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Somewhere between science and cinema.
              </p>
              <div
                className="mb-12 opacity-0 translate-y-4"
                style={{ animation: "fadeInUp 0.8s ease-out 0.4s forwards" }}
              >
                <TextRevealByWord
                  text="I spend most of my time creating things on the internet, studying physics, and thinking too much about music, anime, and visual storytelling. This space documents all of it in one place."
                  className="max-w-xl"
                />
              </div>
              <div
                className="flex gap-4 opacity-0 translate-y-4 flex-wrap"
                style={{ animation: "fadeInUp 0.8s ease-out 0.6s forwards" }}
              >
                <Link
                  className="px-8 py-4 bg-white shadow-ambient rounded-xl font-label-caps text-label-caps hover:scale-105 transition-transform duration-300"
                  href="/projects"
                >
                  View Selected Work
                </Link>
                <Link
                  className="px-8 py-4 text-on-surface font-label-caps text-label-caps border-b border-outline-variant/30 hover:border-primary transition-all duration-300"
                  href="/contact"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Invisible Trigger for Global Mascot Transition */}
      <HeroScrollTrigger />

      {/* Structural Sections */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-surface-container-low bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] border-t border-outline-variant/20 py-24">
        <FadeInScroll className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md tracking-tight mb-4">Selected Projects</h2>
            <p className="text-secondary font-body-md max-w-xl mx-auto">Hover over the stack to reveal some of my recent work spanning artificial intelligence, education, and astrophysics.</p>
          </div>
          
          <StackedCardsInteraction 
            cards={projects.slice(0, 4).map(p => ({
              image: p.images[0] || "",
              title: p.title,
              description: p.shortSummary
            }))}
          />
        </FadeInScroll>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-background border-t border-outline-variant/20 py-24 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <FadeInScroll className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md tracking-tight mb-4">Experience</h2>
            <p className="text-secondary font-body-md max-w-xl mx-auto">A brief overview of my professional and academic background.</p>
          </div>
          <div className="w-full max-w-4xl">
            <ExperienceList experiences={sortedExperiences} />
          </div>
        </FadeInScroll>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-surface-container-low border-t border-outline-variant/20 py-24">
        <FadeInScroll className="max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-headline-md tracking-tight mb-4">My Writings</h2>
            <p className="text-secondary font-body-md max-w-xl mx-auto">Categorized thoughts.</p>
          </div>
          <BouncyCardsFeatures categories={categories} />
        </FadeInScroll>
      </section>

      <section className="relative min-h-[60vh] flex flex-col items-center justify-center bg-surface-container-low border-t border-outline-variant/20 py-24">
        {/* Subtle Background Pattern Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        
        <FadeInScroll className="relative z-10 max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-headline-md tracking-tight mb-4">Contact Me</h2>
            <p className="text-secondary font-body-md max-w-xl mx-auto">Feel free to reach out for collaborations, inquiries, or just to say hello.</p>
          </div>
          <SocialCard socialLinks={SOCIAL_LINKS} />
        </FadeInScroll>
      </section>
    </main>
  );
}
