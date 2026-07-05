import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/lib/notion";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const revalidate = 60;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-seashell pt-32 pb-24 border-t border-outline-variant/20">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-beaver hover:text-vandyke font-label-caps text-xs uppercase tracking-widest transition-colors mb-12"
        >
          <ArrowLeft size={16} /> Back to Blog
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 text-xs font-mono text-beaver uppercase tracking-widest mb-4">
            <span>{post.category}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-timberwolf" />
            <span>{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-display-lg text-vandyke leading-tight tracking-tight mb-8">
            {post.title}
          </h1>
          <div className="w-full h-px bg-timberwolf/40" />
        </header>

        <article className="prose prose-vandyke lg:prose-lg max-w-none prose-headings:font-display-lg prose-headings:tracking-tight prose-a:text-beaver hover:prose-a:text-vandyke prose-a:transition-colors">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </main>
  );
}
