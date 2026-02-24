import type { Metadata } from "next";
import Script from "next/script";
import ScrollFade from "@/components/ScrollFade";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "AI Prompts for Pastors – 75+ Ministry AI Prompts",
  description:
    "75+ battle-tested AI prompts for pastors. Sermon prep, pastoral care, admin, outreach. Works with ChatGPT, Claude, Gemini. AI tools for church leaders.",
  openGraph: {
    title: "AI Prompts for Pastors – 75+ Ministry-Specific AI Prompts",
    description:
      "75+ battle-tested AI prompts designed for ministry. AI sermon preparation, pastoral care, church admin, and outreach. Works with ChatGPT, Claude, and Gemini.",
    url: "https://markrossjunkans.com/ai-prompts-for-pastors",
    images: [{ url: "/images/ai-prompts-cover.svg" }],
  },
  keywords: [
    "AI prompts for pastors",
    "AI for pastors",
    "AI tools for church leaders",
    "AI sermon preparation",
    "how to use AI in ministry",
    "should Christians use AI",
    "AI ethics church",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/ai-prompts-for-pastors",
  },
};

const features = [
  { title: "50+ deep, specific prompts", desc: "Not generic 'write me a sermon.' Real ministry problems solved" },
  { title: "5 ministry categories", desc: "Sermon Prep, Admin, Counseling, Outreach, Personal Devotion" },
  { title: "Why It Works explanations", desc: "Understand the strategy behind each prompt" },
  { title: "Pro Tips included", desc: "Get better results with expert guidance" },
  { title: "Advanced techniques", desc: "Chaining, role-playing, and more" },
  { title: "Ethical guidelines", desc: "Clear boundaries for responsible AI use" },
  { title: "Works with any AI tool", desc: "ChatGPT, Claude, Gemini, and more" },
  { title: "Beautifully formatted PDF", desc: "Easy to navigate, print, or use on any device" },
];

const benefits = [
  "Cut sermon prep time by 30-50% without sacrificing depth",
  "Handle difficult church emails (the ones you dread) with confidence",
  "Prepare for counseling sessions with structured questions ready",
  "Create 30 days of social media content in one sitting",
  "Free up mental energy for the work only you can do: shepherding people",
];

export default function AIPromptsForPastorsPage() {
  return (
    <>
      <Script
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-deeper text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Digital Download
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-6 leading-tight">
              Stop Wasting Hours on Prompts That Don&apos;t Work. Start Getting Ministry Results from AI Today.
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              50+ battle-tested prompts designed specifically for pastors. Copy, paste, customize, get results.
            </p>
            <a
              href="#pricing"
              className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
            >
              Get the Prompts
            </a>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Problem */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              Sound Familiar?
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                You&apos;ve heard AI can help with ministry tasks. Maybe you&apos;ve tried ChatGPT. You stared at that blank prompt box and typed something vague like &ldquo;help me write a sermon.&rdquo;
              </p>
              <p>
                What you got back was generic, unusable, and nothing like your voice.
              </p>
              <p>
                So you spent 30 minutes rewriting it anyway. Or you gave up entirely.
              </p>
              <p>
                <strong className="text-cream">Here&apos;s the truth: AI is a powerful tool for pastors. But most pastors are using it wrong.</strong>
              </p>
              <p>
                Not because they&apos;re not smart enough. Because nobody&apos;s teaching them how to actually prompt for ministry work.
              </p>
              <p>
                I know because I lived it. I was a bivocational pastor in a missionary setting. My time was split between running a business, pastoral care, evangelism, and yes, sermon prep squeezed in between everything else.
              </p>
              <p>
                <strong className="text-cream">You don&apos;t need another AI theology course. You need prompts that work. Right now. For the tasks you&apos;re doing this week.</strong>
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              What You Get
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10">
              <strong className="text-cream">AI Prompts for Pastors</strong> is a battle-tested collection of 50+ prompts designed specifically for ministry tasks. No theory. No fluff. Just copy, paste, customize, and get results.
            </p>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <ScrollFade key={f.title} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <span className="text-gold font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="text-cream font-semibold text-sm mb-1">{f.title}</p>
                    <p className="text-cream/60 text-sm">{f.desc}</p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              What This Means for Your Ministry
            </h2>
            <ul className="space-y-4 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 items-start text-cream/70 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0">→</span>
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-cream/70 leading-relaxed">
              <strong className="text-cream">This isn&apos;t about replacing pastoral work.</strong> It&apos;s about spending less time on first drafts and more time with your people.
            </p>
            <p className="text-cream/70 leading-relaxed mt-4">
              AI should never take the place of thoughtful preparation and pastoral ministry. But AI can free you to focus on what matters most: caring for people.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Choose Your Option
            </h2>
            <p className="text-warm-gray mb-12">30-day money-back guarantee on both tiers.</p>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Essential */}
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-8 text-center">
                <h3 className="font-playfair text-xl text-cream mb-4">Essential</h3>
                <p className="font-playfair text-5xl font-semibold text-cream mb-2">$27</p>
                <p className="text-warm-gray text-sm mb-8">one-time purchase</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "50+ battle-tested prompts",
                    "5 ministry categories covered",
                    "Pro Tips & \"Why It Works\" for each",
                    "Advanced techniques section",
                    "Beautifully formatted PDF",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://mrjbooks.lemonsqueezy.com/checkout/buy/1bf7a95e-2bfb-4c45-b296-824bc39fe5a3?embed=1&enabled=1281540"
                  className="lemonsqueezy-button block w-full text-center px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                >
                  Get Essential
                </a>
              </div>
            </ScrollFade>

            {/* Complete */}
            <ScrollFade delay={150}>
              <div className="border-2 border-gold p-8 text-center relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark-deeper text-[10px] font-bold tracking-widest uppercase">
                  Recommended
                </span>
                <h3 className="font-playfair text-xl text-cream mb-4">Complete</h3>
                <p className="font-playfair text-5xl font-semibold text-cream mb-2">$47</p>
                <p className="text-warm-gray text-sm mb-8">one-time purchase</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Everything in Essential",
                    "25+ bonus specialized prompts",
                    "Crisis ministry prompts pack",
                    "Video walkthrough (45 min)",
                    "Lifetime updates",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://mrjbooks.lemonsqueezy.com/checkout/buy/ec09c449-4786-43d9-bdf4-693e54b978a0?embed=1&enabled=1279381"
                  className="lemonsqueezy-button block w-full text-center px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
                >
                  Get Complete
                </a>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Guarantee */}
      <section className="py-16 md:py-20 bg-dark-deeper text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-6">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              Try the prompts for 30 days. If they don&apos;t save you time and help your ministry, email me. I&apos;ll refund you. No questions, no hassle.
            </p>
            <p className="text-cream/70 leading-relaxed">
              I&apos;m a pastor. I get it. This has to actually work, or it&apos;s just another thing taking up space.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-dark border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Ready to Get More Done in Less Time?
            </h2>
            <p className="text-cream/70 mb-8">
              50+ battle-tested prompts. Instant download. 30-day guarantee.
            </p>
            <a
              href="#pricing"
              className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
            >
              Get the Prompts
            </a>
            <p className="text-warm-gray/50 text-sm mt-6">
              Questions? Email mjunkans71@gmail.com
            </p>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
