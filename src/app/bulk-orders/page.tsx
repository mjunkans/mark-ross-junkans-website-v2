import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import BulkOrderForm from "./BulkOrderForm";

export const metadata: Metadata = {
  title: "Church & Group Orders – The Return of Mystery",
  description:
    "Order The Return of Mystery in bulk for your church, small group, or organization. Save 20-40% with group discounts. Free shipping on all bulk orders.",
  openGraph: {
    title: "Church & Group Orders – The Return of Mystery",
    description:
      "Equip your congregation. Save 20-40% on bulk orders of The Return of Mystery by Mark Ross Junkans.",
    url: "https://markrossjunkans.com/bulk-orders",
    images: [{ url: "/images/Cover Return of Mystery Kindle New.jpg" }],
  },
};

const useCases = [
  { icon: "📖", title: "Small Group Studies", desc: "Facilitate meaningful discussions about faith and technology in your weekly gatherings." },
  { icon: "🎤", title: "Sermon Series Companion", desc: "Provide a companion resource for a sermon series on navigating the digital age." },
  { icon: "👥", title: "Leadership Development", desc: "Equip your staff and elders to thoughtfully engage with AI and its implications." },
  { icon: "🎓", title: "Youth & College Ministry", desc: "Help young adults think critically about faith in their technology-saturated world." },
];

export default function BulkOrdersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-deeper text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-4 leading-tight">
              Church &amp; Group Orders
            </h1>
            <p className="font-playfair text-lg text-cream/50 italic mb-6">
              Equip your congregation to navigate faith in an age of AI
            </p>
            <p className="text-cream/70 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re leading a small group study, launching a sermon series, or equipping your entire congregation, bulk orders make it easy and affordable to put this timely resource in everyone&apos;s hands.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Book Preview */}
      <section className="pt-2 pb-8 bg-dark-deeper flex justify-center">
        <ScrollFade>
          <div className="relative w-[180px] h-[270px] shadow-2xl shadow-black/40">
            <Image
              src="/images/Cover Return of Mystery Kindle New.jpg"
              alt="The Return of Mystery: Faith In An Age of Machines"
              fill
              className="object-cover"
              sizes="180px"
            />
          </div>
        </ScrollFade>
      </section>

      <div className="gold-line" />

      {/* Pricing Table */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              Bulk Pricing
            </h2>
          </ScrollFade>

          <ScrollFade delay={100}>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
              <table className="w-full border-collapse min-w-[500px]">
                <thead>
                  <tr>
                    <th className="p-4 text-left text-cream/60 text-xs font-semibold tracking-widest uppercase border-b border-dark-border" />
                    <th className="p-4 text-center font-playfair text-cream text-lg font-medium border-b border-dark-border">
                      Small Group
                    </th>
                    <th className="p-4 text-center font-playfair text-cream text-lg font-medium border-b border-gold/50 bg-dark-card relative">
                      Leadership Team
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-gold text-dark-deeper text-[9px] font-bold tracking-widest uppercase">
                        Most Popular
                      </span>
                    </th>
                    <th className="p-4 text-center font-playfair text-cream text-lg font-medium border-b border-dark-border">
                      Congregation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 text-cream/70 text-sm font-medium border-b border-dark-border">Copies</td>
                    <td className="p-4 text-center text-warm-gray text-sm border-b border-dark-border">10-24</td>
                    <td className="p-4 text-center text-warm-gray text-sm border-b border-dark-border bg-dark-card">25-49</td>
                    <td className="p-4 text-center text-warm-gray text-sm border-b border-dark-border">50+</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-cream/70 text-sm font-medium border-b border-dark-border">Discount</td>
                    <td className="p-4 text-center font-playfair text-2xl font-semibold text-cream border-b border-dark-border">20% off</td>
                    <td className="p-4 text-center font-playfair text-2xl font-semibold text-cream border-b border-dark-border bg-dark-card">30% off</td>
                    <td className="p-4 text-center font-playfair text-2xl font-semibold text-cream border-b border-dark-border">40% off</td>
                  </tr>
                  {[
                    { label: "Free shipping", vals: [true, true, true] },
                    { label: "Discussion questions", vals: [true, true, true] },
                    { label: "Virtual author Q&A", vals: [false, true, true] },
                    { label: "Custom intro letter", vals: [false, false, true] },
                  ].map((row) => (
                    <tr key={row.label}>
                      <td className="p-4 text-cream/70 text-sm font-medium border-b border-dark-border">{row.label}</td>
                      {row.vals.map((v, j) => (
                        <td key={j} className={`p-4 text-center border-b border-dark-border ${j === 1 ? "bg-dark-card" : ""}`}>
                          {v ? (
                            <span className="text-gold font-bold">✓</span>
                          ) : (
                            <span className="text-warm-gray/30">-</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-10">
              <a
                href="#order-form"
                className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              Perfect For
            </h2>
          </ScrollFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((uc, i) => (
              <ScrollFade key={uc.title} delay={i * 75}>
                <div className="text-center p-6 border border-dark-border hover:border-gold/30 transition-colors">
                  <div className="text-3xl mb-4">{uc.icon}</div>
                  <h3 className="font-playfair text-base text-cream font-medium mb-2">{uc.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="py-16 md:py-24 bg-dark">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-4">
              Request a Quote
            </h2>
            <p className="text-warm-gray text-center mb-10">
              Tell us about your needs and we&apos;ll get back to you within 2 business days with a custom quote.
            </p>
          </ScrollFade>

          <ScrollFade delay={100}>
            <BulkOrderForm />
          </ScrollFade>
        </div>
      </section>

      {/* ISBN Note */}
      <section className="py-12 bg-dark-deeper text-center border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="font-playfair text-cream/50 italic">
            You can also order through your favorite bookstore or distributor using<br />
            ISBN: <span className="text-cream font-semibold not-italic">978-8-2955-3249-8</span>
          </p>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Church & Group Orders – The Return of Mystery",
            description: "Order The Return of Mystery in bulk for your church, small group, or organization.",
            url: "https://markrossjunkans.com/bulk-orders",
            mainEntity: {
              "@type": "Book",
              name: "The Return of Mystery: Faith In An Age of Machines",
              author: { "@type": "Person", name: "Mark Ross Junkans" },
              isbn: "978-8-2955-3249-8",
            },
          }),
        }}
      />
    </>
  );
}
