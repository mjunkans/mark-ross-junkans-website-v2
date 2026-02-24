import Link from "next/link";
import BookCard from "@/components/BookCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import ScrollFade from "@/components/ScrollFade";
import { books } from "@/data/books";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-dark-deeper py-20 md:py-28 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deeper via-dark to-dark-deeper opacity-50" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <p className="font-playfair text-gold italic text-lg md:text-xl mb-6">
              Faith × Technology × Business
            </p>
          </ScrollFade>

          <ScrollFade delay={100}>
            <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-cream mb-6 leading-tight">
              Mark Ross Junkans
            </h2>
          </ScrollFade>

          <ScrollFade delay={200}>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              I write about faith, AI, and the stuff that keeps me up at night.
              <br className="hidden sm:block" />
              Author. Entrepreneur. Restless thinker.
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
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="section-heading">The Intersection</h2>
              <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
            </div>
          </ScrollFade>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <ScrollFade delay={0}>
              <div className="group p-8 border border-dark-border hover:border-gold/30 transition-colors">
                <h3 className="font-playfair text-xl text-gold mb-4">Faith</h3>
                <p className="text-cream/70 leading-relaxed">
                  I write devotionals and wrestle with what it means to follow God
                  in a world that&apos;s automating everything — including church.
                  The questions are harder than ever. That&apos;s what makes them worth asking.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={150}>
              <div className="group p-8 border border-dark-border hover:border-gold/30 transition-colors">
                <h3 className="font-playfair text-xl text-gold mb-4">Technology</h3>
                <p className="text-cream/70 leading-relaxed">
                  By day, I run an AI consultancy. By night, I wonder if we&apos;re
                  building something beautiful or something dangerous. Usually both.
                  The future is coming fast — someone should be asking the hard questions.
                </p>
              </div>
            </ScrollFade>

            <ScrollFade delay={300}>
              <div className="group p-8 border border-dark-border hover:border-gold/30 transition-colors">
                <h3 className="font-playfair text-xl text-gold mb-4">Business</h3>
                <p className="text-cream/70 leading-relaxed">
                  Coffee roasting, fuel trading, international projects. Business as
                  mission isn&apos;t a slogan — it&apos;s Monday through Friday. Every
                  venture is an experiment in doing good work that actually does good.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* ── Books ── */}
      <section className="py-20 md:py-28 bg-dark-deeper">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="text-center mb-16">
              <h2 className="section-heading">Books</h2>
              <p className="section-subheading mx-auto mt-2">
                Faith, technology, and everything in between.
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

      {/* ── Latest Writing (Placeholder) ── */}
      <section className="py-20 md:py-28 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="section-heading">Latest Writing</h2>
            <p className="text-warm-gray text-lg mt-4 mb-10">
              Thoughts on faith, technology, and the messy middle where they meet.
            </p>
          </ScrollFade>

          <ScrollFade delay={200}>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "When AI Preaches Better Than Your Pastor",
                  desc: "What does it mean when a machine delivers a more polished sermon than a human?",
                },
                {
                  title: "The Devotional Habit That Changed Everything",
                  desc: "Three verses a day. No commentary. Just you and the text.",
                },
                {
                  title: "Business as Mission: More Than a Slogan",
                  desc: "What I've learned from coffee, fuel, and trying to do good work.",
                },
              ].map((post) => (
                <div
                  key={post.title}
                  className="p-6 border border-dark-border text-left hover:border-gold/30 transition-colors"
                >
                  <h3 className="font-playfair text-base text-cream mb-3">
                    {post.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed mb-4">
                    {post.desc}
                  </p>
                  <span className="text-gold/50 text-xs tracking-widest uppercase">
                    Coming Soon
                  </span>
                </div>
              ))}
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
                  Keynotes, podcasts, churches, workshops — let&apos;s talk.
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
    </>
  );
}
