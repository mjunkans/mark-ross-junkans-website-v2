import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books | Faith, AI & Daily Devotionals",
  description:
    "Christian books about technology, faith and AI, and daily devotionals by Mark Ross Junkans. The Return of Mystery, 3 Verses a Day, Your AI Employee.",
  openGraph: {
    title: "Books by Mark Ross Junkans | Faith, AI & Devotionals",
    description:
      "Christian books exploring faith in an age of machines, daily devotionals for busy people, and practical AI guides. Church bulk book orders available.",
    url: "https://markrossjunkans.com/books",
    images: [{ url: "/images/Cover Return of Mystery Kindle New.jpg" }],
  },
  keywords: [
    "Christian books about technology",
    "faith in the age of AI",
    "devotional books",
    "daily devotional",
    "church bulk book orders",
    "devotional for busy people",
    "what does the Bible say about AI",
    "faith and AI",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/books",
  },
};

export default function BooksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 pb-12 md:pt-24 md:pb-16 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Published Work
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium">
              Books
            </h1>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Book sections */}
      {books.map((book, i) => (
        <section
          key={book.title}
          className={`py-16 md:py-24 ${i % 2 === 0 ? "bg-dark" : "bg-dark-deeper"}`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <ScrollFade>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Cover */}
                <div className="flex-shrink-0">
                  <a
                    href={book.buyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative w-[220px] h-[330px] md:w-[260px] md:h-[390px] shadow-xl shadow-black/50 hover:-translate-y-1 transition-transform duration-300">
                      <Image
                        src={book.coverImage}
                        alt={`${book.title}, book by Mark Ross Junkans`}
                        fill
                        className="object-cover"
                        sizes="260px"
                        priority={i === 0}
                      />
                    </div>
                  </a>
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
                    {book.title}
                  </h2>

                  {book.isbn && (
                    <p className="text-warm-gray text-sm mb-4 font-playfair italic">
                      ISBN: {book.isbn}
                    </p>
                  )}

                  <p className="text-cream/70 leading-relaxed mb-8 max-w-lg">
                    {book.description}
                  </p>

                  {/* Buy links */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                    {book.additionalLinks ? (
                      book.additionalLinks.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                        >
                          {link.label}
                        </a>
                      ))
                    ) : (
                      <a
                        href={book.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                      >
                        {book.buyLabel || "Get the Book"}
                      </a>
                    )}

                    {book.isbn && (
                      <a
                        href="/contact"
                        className="px-6 py-3 border border-cream/30 text-cream/70 hover:border-gold hover:text-gold font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                      >
                        Bulk Orders
                      </a>
                    )}
                  </div>

                  {book.isbn && (
                    <p className="text-cream/40 text-sm mt-4 font-playfair italic">
                      Also available at your favorite bookstore
                    </p>
                  )}
                </div>
              </div>
            </ScrollFade>
          </div>
        </section>
      ))}

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          </ScrollFade>
          <div className="space-y-6">
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">What is The Return of Mystery about?</h3>
                <p className="text-cream/70 leading-relaxed">
                  <em>The Return of Mystery: Faith In An Age of Machines</em> examines what happens to faith when AI can write sermons, teach children, and create art indistinguishable from human work. It argues that the rise of AI is actually an invitation back to wonder, awe, and the irreducibly human dimensions of faith that machines cannot replicate. It&apos;s a book for anyone wrestling with what it means to believe in God in an age of artificial intelligence.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={100}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">What is the 3 Verses a Day devotional?</h3>
                <p className="text-cream/70 leading-relaxed">
                  The <em>3 Verses a Day</em> series is a daily devotional built on the historic lectionary tradition: one verse from the Old Testament, one from the Psalms, one from the Gospels. All three share the same theme. It&apos;s small enough to do every day and focused enough to actually stick. The first volume walks you through 30 days of themed readings. <em>Trust in God</em> focuses on what scripture says about trusting God when life doesn&apos;t make sense.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={200}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">Can I order books in bulk for my church?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Yes! Church bulk book orders are available for all titles with group discounts. Whether you want copies for a small group study, a church-wide reading program, or an event, reach out through the contact page for pricing and details.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      <NewsletterSignup
        heading="Get notified about new releases"
        className="bg-dark"
      />

      {/* JSON-LD for books */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            books.map((book) => ({
              "@context": "https://schema.org",
              "@type": "Book",
              name: book.title,
              author: {
                "@type": "Person",
                name: "Mark Ross Junkans",
                url: "https://markrossjunkans.com/",
              },
              url: book.buyLink,
              image: `https://markrossjunkans.com${book.coverImage}`,
              description: book.description,
              ...(book.isbn ? { isbn: book.isbn } : {}),
            }))
          ),
        }}
      />

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
                name: "What is The Return of Mystery about?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Return of Mystery: Faith In An Age of Machines examines what happens to faith when AI can write sermons, teach children, and create art. It argues that the rise of AI is actually an invitation back to wonder, awe, and the irreducibly human dimensions of faith that machines cannot replicate.",
                },
              },
              {
                "@type": "Question",
                name: "What is the 3 Verses a Day devotional?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The 3 Verses a Day series is a daily devotional built on the historic lectionary tradition: one verse from the Old Testament, one from the Psalms, one from the Gospels. All three share the same theme. The first volume walks you through 30 days of themed readings. Trust in God focuses on trusting God when life doesn't make sense.",
                },
              },
              {
                "@type": "Question",
                name: "Can I order books in bulk for my church?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Church bulk book orders are available for all titles with group discounts. Reach out through the contact page for pricing and details on bulk orders for small groups, church-wide reading programs, or events.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
