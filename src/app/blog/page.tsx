import type { Metadata } from "next";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Faith, AI & Ventures Reflections",
  description:
    "Mark Ross Junkans writes about faith and AI, business as mission, devotional life, and what the Bible says about technology. Honest reflections from the intersection.",
  openGraph: {
    title: "Blog – Mark Ross Junkans | Faith & Technology Writing",
    description:
      "Reflections on faith and AI, business as mission, devotional life, and the questions Christians should be asking about technology.",
    url: "https://markrossjunkans.com/blog",
  },
  keywords: [
    "faith and AI",
    "should Christians use AI",
    "what does the Bible say about AI",
    "business as mission examples",
    "AI sermon preparation",
    "faith in an age of machines",
    "devotional for busy people",
    "persecuted church western church",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/blog",
  },
};

const categoryColors: Record<string, string> = {
  "Faith & AI": "border-l-amber-500",
  "Faith & Culture": "border-l-emerald-500",
  "Devotional Life": "border-l-sky-400",
  "Business & Faith": "border-l-rose-400",
  "Endurance & Faith": "border-l-orange-400",
};

function getCategoryColor(category: string): string {
  return categoryColors[category] || "border-l-gold";
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function estimateReadTime(content: string): string {
  const words = content.split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 230));
  return `${minutes} min read`;
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const [featured, ...rest] = sortedPosts;

  return (
    <>
      {/* Hero - tighter, more editorial */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Writing
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium">
              Long-Form Thinking
            </h1>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Featured Post */}
      {featured && (
        <section className="py-12 md:py-16 bg-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollFade>
              <Link
                href={`/blog/${featured.slug}`}
                className="block group"
              >
                <article className="relative p-8 md:p-12 border border-dark-border hover:border-gold/40 transition-all duration-300 bg-gradient-to-br from-dark-deeper/50 to-transparent">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-[0.1em] uppercase border border-gold/20">
                      {featured.category}
                    </span>
                    <span className="text-warm-gray text-xs">
                      {formatDate(featured.date)}
                    </span>
                    <span className="text-warm-gray/50 text-xs">
                      {estimateReadTime(featured.content)}
                    </span>
                  </div>
                  <h2 className="font-playfair text-2xl md:text-4xl text-cream font-medium mb-4 group-hover:text-gold transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-cream/60 text-lg leading-relaxed mb-6 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.1em] uppercase group-hover:gap-3 transition-all">
                    Read the Full Essay
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </article>
              </Link>
            </ScrollFade>
          </div>
        </section>
      )}

      {/* Remaining Posts - 2-column grid */}
      {rest.length > 0 && (
        <section className="py-12 md:py-16 bg-dark-deeper">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((post, i) => (
                <ScrollFade key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group h-full"
                  >
                    <article className={`h-full p-6 md:p-8 border border-dark-border border-l-2 ${getCategoryColor(post.category)} hover:border-gold/30 hover:border-l-gold transition-all duration-300 group-hover:-translate-y-1`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-gold text-xs font-semibold tracking-[0.1em] uppercase">
                          {post.category}
                        </span>
                        <span className="text-warm-gray/40">·</span>
                        <span className="text-warm-gray/50 text-xs">
                          {estimateReadTime(post.content)}
                        </span>
                      </div>
                      <h2 className="font-playfair text-lg md:text-xl text-cream font-medium mb-3 group-hover:text-gold transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-cream/50 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-warm-gray/40 text-xs">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-gold text-xs font-semibold tracking-[0.1em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                          Read →
                        </span>
                      </div>
                    </article>
                  </Link>
                </ScrollFade>
              ))}
            </div>
          </div>
        </section>
      )}

      <NewsletterSignup
        heading="Get new posts delivered to your inbox"
        className="bg-dark"
      />
    </>
  );
}
