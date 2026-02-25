import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Speaking, Bulk Orders & Inquiries",
  description:
    "Get in touch with Mark Ross Junkans for speaking engagements, church bulk book orders, AI consulting, media inquiries, or questions about faith and technology.",
  openGraph: {
    title: "Contact Mark Ross Junkans | Speaking & Bulk Orders",
    description:
      "Speaking engagements, church bulk book orders, AI consulting inquiries, and general questions about faith and technology.",
    url: "https://markrossjunkans.com/contact",
  },
  keywords: [
    "church bulk book orders",
    "Christian speaker booking",
    "AI consulting Christian",
    "faith and technology speaker",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/contact",
  },
};

const quickLinks = [
  {
    title: "Speaking & Media",
    desc: "Book Mark for a keynote, podcast, or event",
    href: "/speaking",
    image: "/images/speaking-stage.jpg",
  },
  {
    title: "Bulk Orders",
    desc: "Group discounts for churches & organizations",
    href: "/bulk-orders",
    image: "/images/bulk-orders-books.jpg",
  },
  {
    title: "Find My Books",
    desc: "Browse all titles on Amazon",
    href: "https://www.amazon.com/stores/Mark-Ross-Junkans/author/B0GCXX63WC",
    image: "/images/find-my-books.jpg",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Reach Out
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium">
              Contact
            </h1>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Quick Links */}
      <section className="py-10 md:py-12 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-4">
            {quickLinks.map((link, i) => (
              <ScrollFade key={link.title} delay={i * 100}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={link.image}
                      alt={`${link.title}, ${link.desc}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                      <h3 className="font-playfair text-base text-white mb-1">
                        {link.title}
                      </h3>
                      <p className="text-white/70 text-xs">{link.desc}</p>
                    </div>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="group block relative aspect-[4/3] overflow-hidden"
                  >
                    <Image
                      src={link.image}
                      alt={`${link.title}, ${link.desc}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                      <h3 className="font-playfair text-base text-white mb-1">
                        {link.title}
                      </h3>
                      <p className="text-white/70 text-xs">{link.desc}</p>
                    </div>
                  </Link>
                )}
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="text-center mb-10">
              <h2 className="section-heading">Send a Message</h2>
              <p className="text-warm-gray mt-2">
                Fill out the form below and I&apos;ll get back to you as soon as I
                can.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={200}>
            <ContactForm />
          </ScrollFade>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Mark Ross Junkans",
            description:
              "Get in touch for speaking, media, bulk orders, or general questions.",
            url: "https://markrossjunkans.com/contact",
            author: {
              "@type": "Person",
              name: "Mark Ross Junkans",
              url: "https://markrossjunkans.com/",
            },
          }),
        }}
      />
    </>
  );
}
