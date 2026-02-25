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

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              Blog
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Faith, technology, and the intersection of everything.
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Posts */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {sortedPosts.map((post, i) => (
              <ScrollFade key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <article className="p-8 border border-dark-border hover:border-gold/30 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-gold text-xs font-semibold tracking-[0.1em] uppercase">
                        {post.category}
                      </span>
                      <span className="text-warm-gray text-xs">
                        {formatDate(post.date)}
                      </span>
                    </div>
                    <h2 className="font-playfair text-xl md:text-2xl text-cream font-medium mb-3 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-cream/60 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-gold text-xs font-semibold tracking-[0.1em] uppercase">
                      Read More →
                    </span>
                  </article>
                </Link>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup
        heading="Get new posts delivered to your inbox"
        className="bg-dark-deeper"
      />
    </>
  );
}
