import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";
import { books } from "@/data/books";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books by Mark Ross Junkans — faith, technology, AI, and devotionals. The Return of Mystery, 3 Verses a Day, Your AI Employee, and more.",
  openGraph: {
    title: "Books – Mark Ross Junkans",
    description:
      "Books exploring faith in an age of machines, daily devotionals, and practical AI guides.",
    url: "https://markrossjunkans.com/books",
  },
};

export default function BooksPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              Books
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Faith and machines. Devotionals for the distracted. Practical AI
              for the rest of us. These are the books that came out of wrestling
              with all of it.
            </p>
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
                        alt={book.title}
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
              ...(book.isbn ? { isbn: book.isbn } : {}),
            }))
          ),
        }}
      />
    </>
  );
}
