import type { Metadata } from "next";
import Link from "next/link";
import BookCard from "@/components/BookCard";
import Constellation from "@/components/Constellation";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollFade from "@/components/ScrollFade";
import { books } from "@/data/books";
import { getRecentPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Mark Ross Junkans | Faith & Technology Author",
  description:
    "Christian author exploring faith and AI, business as mission, and daily devotionals. Books, speaking, and AI tools for church leaders.",
  openGraph: {
    title: "Mark Ross Junkans | Faith & Technology Author, Entrepreneur",
    description:
      "Christian author and entrepreneur at the intersection of faith, technology, and ventures as mission. Books on AI, devotionals, and practical ministry tools.",
    url: "https://markrossjunkans.com",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mark Ross Junkans — Author, Entrepreneur, Restless Thinker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mjunkans",
    creator: "@mjunkans",
  },
  keywords: [
    "faith and technology",
    "faith and AI",
    "Christian author",
    "business as mission",
    "devotional books",
    "AI for pastors",
    "Christian entrepreneur",
    "faith driven entrepreneur",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com",
  },
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-dark-deeper py-12 md:py-28 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deeper via-dark to-dark-deeper opacity-50" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <p className="font-playfair text-gold italic text-lg md:text-xl mb-6">
              Faith × Technology × Ventures
            </p>
          </ScrollFade>

          <ScrollFade delay={100}>
            <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-cream mb-6 leading-tight">
              Mark Ross Junkans
            </h2>
          </ScrollFade>

          <ScrollFade delay={200}>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
              Author. Entrepreneur. Restless thinker.
            </p>
            <p className="text-cream/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              I write books because the questions won&apos;t leave me alone.
              Who is God to me, and who am I to Him? What happens to faith
              when machines can do everything we thought made us human?
            </p>
          </ScrollFade>

          <ScrollFade delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/books"
                className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
              >
                Explore the Books
              </Link>
              <Link
                href="/about"
                className="inline-block px-8 py-4 border border-cream/30 text-cream/80 hover:border-gold hover:text-gold font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
              >
                About Mark
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* ── The Intersection ── */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Constellation graphic */}
          <Constellation />
          <ScrollFade>
            <p className="text-center text-cream/40 text-sm tracking-widest uppercase mt-8">
              I live at the intersection of these three.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* ── Books ── */}
      <section className="py-20 md:py-28 bg-dark-deeper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="section-heading">Books</h2>
              <p className="section-subheading mx-auto mt-2">
                What I&apos;ve written so far. More coming.
              </p>
            </div>
          </ScrollFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {books.map((book, i) => (
              <ScrollFade key={book.title} delay={i * 100}>
                <BookCard
                  title={book.shortTitle || book.title}
                  hook={book.hook}
                  coverImage={book.coverImage}
                  buyLink={book.buyLink}
                  buyLabel={book.buyLabel}
                />
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterSignup
        heading="Stay connected with Mark's latest work"
        className="bg-dark"
      />

      {/* ── Latest Writing ── */}
      <section className="py-20 md:py-28 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="section-heading">Latest Writing</h2>
            <p className="text-warm-gray text-lg mt-4 mb-10">
              Long-form thinking. No hot takes.
            </p>
          </ScrollFade>

          <ScrollFade delay={200}>
            <div className="grid sm:grid-cols-3 gap-6">
              {getRecentPosts(3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group p-6 border border-dark-border text-left hover:border-gold/30 transition-colors"
                >
                  <p className="text-gold text-xs font-semibold tracking-[0.1em] uppercase mb-3">
                    {post.category}
                  </p>
                  <h3 className="font-playfair text-base text-cream mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="text-gold text-xs font-semibold tracking-[0.1em] uppercase">
                    Read More →
                  </span>
                </Link>
              ))}
            </div>
          </ScrollFade>

          <ScrollFade delay={400}>
            <div className="mt-10">
              <Link
                href="/blog"
                className="text-gold text-xs font-semibold tracking-[0.1em] uppercase hover:text-gold-light transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* ── Speaking CTA ── */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 border border-dark-border">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl text-cream mb-2">
                  Invite Mark to Speak
                </h2>
                <p className="text-warm-gray">
                  Keynotes, podcasts, churches, workshops. Let&apos;s talk.
                </p>
              </div>
              <Link
                href="/speaking"
                className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* ── FAQ Section for AEO ── */}
      <section className="py-16 md:py-20 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          </ScrollFade>
          <div className="space-y-6">
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">Who is Mark Ross Junkans?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Mark Ross Junkans is a Christian author, entrepreneur, and faith and technology speaker. He writes about faith in the age of AI, publishes daily devotionals, and runs an AI consultancy (Advira.ai) alongside ventures in coffee roasting, energy, international development, and cross-cultural Christian mission. He&apos;s a 3x Ironman and ultrarunner who lives in Houston, Texas.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={100}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">What does Mark write about?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Mark writes Christian books about technology, faith and AI, and daily devotionals. His book <em>The Return of Mystery</em> explores what happens to faith when machines can do everything we thought made us human. His <em>3 Verses a Day</em> devotional series helps readers engage scripture simply and deeply. <em>Your AI Employee</em> is a practical guide to building AI assistants for life and business.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={200}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">What is business as mission?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Business as mission is the conviction that commerce should serve something beyond the bottom line. It means doing real work in real markets with real accountability, in a way that creates human flourishing. Not charity wearing a business costume. Not a regular company with a Bible verse on the wall. The actual, unglamorous work of building something sustainable that leaves things a little better than it found them.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is Mark Ross Junkans?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mark Ross Junkans is a Christian author, entrepreneur, and faith and technology speaker. He writes about faith in the age of AI, publishes daily devotionals, and runs an AI consultancy (Advira.ai) alongside ventures in coffee roasting, energy, international development, and cross-cultural Christian mission. He's a 3x Ironman and ultrarunner who lives in Houston, Texas.",
                },
              },
              {
                "@type": "Question",
                name: "What does Mark write about?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mark writes Christian books about technology, faith and AI, and daily devotionals. His book The Return of Mystery explores what happens to faith when machines can do everything we thought made us human. His 3 Verses a Day devotional series helps readers engage scripture simply and deeply. Your AI Employee is a practical guide to building AI assistants.",
                },
              },
              {
                "@type": "Question",
                name: "What is business as mission?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Business as mission is the conviction that commerce should serve something beyond the bottom line. It means doing real work in real markets with real accountability, in a way that creates human flourishing. Not charity wearing a business costume. Not a regular company with a Bible verse on the wall. The actual work of building something sustainable that leaves things better than it found them.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
