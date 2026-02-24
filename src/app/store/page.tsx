import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Digital resources for pastors, entrepreneurs, and mission leaders. AI prompts, guides, templates, and courses by Mark Ross Junkans.",
  openGraph: {
    title: "Store – Digital Resources | Mark Ross Junkans",
    description:
      "Practical AI tools, prompts, and guides for pastors, entrepreneurs, and mission leaders.",
    url: "https://markrossjunkans.com/store",
    images: [{ url: "/images/your-ai-employee-cover.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

interface Product {
  title: string;
  label?: string;
  desc: string;
  price: string;
  priceNote?: string;
  features: string[];
  buyLink?: string;
  buyLabel: string;
  image?: string;
  comingSoon?: boolean;
}

const products: Product[] = [
  {
    title: "AI Prompts for Pastors",
    label: "Most Popular",
    desc: "75+ ready-to-use AI prompts designed specifically for ministry tasks. Sermon prep, pastoral care, admin, outreach, and more.",
    price: "From $27",
    priceNote: "one-time",
    features: [
      "75+ tested, ministry-specific prompts",
      "Works with ChatGPT, Claude, Gemini",
      "Cut sermon prep time by 30–40%",
      "Ethical guidelines for AI in ministry",
      "Lifetime updates included",
    ],
    buyLink:
      "https://mrjbooks.lemonsqueezy.com/checkout/buy/1bf7a95e-2bfb-4c45-b296-824bc39fe5a3",
    buyLabel: "Get Essential ($27)",
    image: "/images/ai-prompts-cover.svg",
  },
  {
    title: "Your AI Employee",
    desc: "Build a 24/7 personal AI assistant that actually does things. Step-by-step guide to setting up your always-on agent for life and business.",
    price: "$29",
    priceNote: "one-time",
    features: [
      "12 chapters + 8 appendices",
      "30 ready-to-use prompts & templates",
      "WhatsApp, Discord, Slack & more",
      "Personal & business use cases",
      "No coding required",
    ],
    buyLink:
      "https://mrjbooks.lemonsqueezy.com/checkout/buy/51b84553-323c-4b00-842b-8913763c7f9a",
    buyLabel: "Get the Guide",
    image: "/images/your-ai-employee-cover.jpg",
  },
  {
    title: "Church Admin Template",
    label: "Notion Template",
    desc: "The all-in-one Notion workspace for managing your church. Sermons, members, events, budget, volunteers, and tasks.",
    price: "From $49",
    priceNote: "one-time",
    features: [
      "6 interconnected databases",
      "50+ pre-configured views",
      "Real-time dashboard",
      "Save 5–10 hours per week",
      "Mobile-friendly",
    ],
    buyLabel: "Coming Soon",
    comingSoon: true,
  },
  {
    title: "AI Ethics for Church Leaders",
    label: "Video Course",
    desc: "A 5-module video course that equips you to lead your church through AI with theological clarity, practical tools, and biblical wisdom.",
    price: "From $97",
    priceNote: "one-time",
    features: [
      "5 video modules (95 min total)",
      "70+ page student workbook",
      "Church AI Policy Template",
      "6-month implementation plan",
      "30-day money-back guarantee",
    ],
    buyLabel: "Coming Soon",
    comingSoon: true,
  },
];

export default function StorePage() {
  return (
    <>
      <Script
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              Resources for Pastors, Entrepreneurs &amp; Mission Leaders
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed">
              Practical tools to help you navigate AI, streamline your work, and
              lead with confidence. Built from real-world experience in ministry,
              business, and technology.
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Products */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ScrollFade key={product.title} delay={i * 100}>
                <div
                  className={`flex flex-col h-full border border-dark-border hover:border-gold/30 transition-all duration-300 ${
                    product.comingSoon ? "opacity-60" : "hover:-translate-y-1"
                  }`}
                >
                  {/* Badge / Cover */}
                  {product.image ? (
                    <div className="relative aspect-[3/4] overflow-hidden bg-dark-card">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      {product.label && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-dark-deeper text-[10px] font-bold tracking-widest uppercase">
                          {product.label}
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-[3/4] bg-gradient-to-br from-dark-card to-dark-deeper flex flex-col justify-end p-6 relative">
                      {product.comingSoon && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-dark-deeper text-[10px] font-bold tracking-widest uppercase">
                          Coming Soon
                        </span>
                      )}
                      {product.label && !product.comingSoon && (
                        <span className="text-cream/40 text-xs tracking-widest uppercase mb-2">
                          {product.label}
                        </span>
                      )}
                      <h3 className="font-playfair text-xl text-cream font-medium">
                        {product.title}
                      </h3>
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <p className="text-cream/60 text-sm leading-relaxed mb-4">
                      {product.desc}
                    </p>

                    <p className="font-playfair text-lg text-cream mb-4">
                      {product.price}{" "}
                      {product.priceNote && (
                        <span className="text-warm-gray text-sm font-inter">
                          / {product.priceNote}
                        </span>
                      )}
                    </p>

                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="text-cream/50 text-sm pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>

                    {product.buyLink ? (
                      <a
                        href={product.buyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lemonsqueezy-button block w-full text-center px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                      >
                        {product.buyLabel}
                      </a>
                    ) : (
                      <span className="block w-full text-center px-6 py-3 bg-dark-border text-cream/40 font-semibold text-xs tracking-[0.1em] uppercase cursor-not-allowed">
                        {product.buyLabel}
                      </span>
                    )}
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>

          {/* Complete bundle upsell */}
          <ScrollFade delay={400}>
            <div className="mt-10 p-6 md:p-8 border border-gold/30 text-center">
              <p className="font-playfair text-lg text-cream mb-2">
                Need the complete AI Prompts for Pastors package?
              </p>
              <p className="text-cream/60 text-sm mb-6">
                Get all prompts, advanced templates, and bonus resources.
              </p>
              <a
                href="https://mrjbooks.lemonsqueezy.com/checkout/buy/ec09c449-4786-43d9-bdf4-693e54b978a0"
                target="_blank"
                rel="noopener noreferrer"
                className="lemonsqueezy-button inline-block px-8 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
              >
                Get Complete Package ($47)
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      <NewsletterSignup
        heading="Get notified when new resources launch"
        className="bg-dark-deeper"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Store – Digital Resources for Pastors & Entrepreneurs",
            description:
              "Digital resources for pastors and church leaders by Mark Ross Junkans.",
            url: "https://markrossjunkans.com/store",
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
