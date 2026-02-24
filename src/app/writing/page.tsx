import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Mark Ross Junkans writes about faith, technology, and the intersection of everything. Newsletter coming soon.",
  openGraph: {
    title: "Writing – Mark Ross Junkans",
    description:
      "Thoughts on faith, technology, and the messy middle where they meet.",
    url: "https://markrossjunkans.com/writing",
  },
};

export default function WritingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              Writing
            </h1>
            <p className="text-cream/70 text-lg leading-relaxed mb-4">
              Faith, technology, and the intersection of everything.
            </p>
            <p className="text-warm-gray leading-relaxed">
              I&apos;ve been writing about the things that keep me up at night — the
              collision of ancient faith and cutting-edge technology, what it means
              to do business with integrity, and the hard questions nobody wants to
              ask about AI and the church.
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Coming Soon / Placeholder */}
      <section className="py-20 md:py-28 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <div className="p-12 md:p-16 border border-dark-border">
              <p className="font-playfair text-gold italic text-xl mb-6">
                Newsletter coming soon
              </p>
              <p className="text-cream/60 leading-relaxed mb-10 max-w-lg mx-auto">
                I&apos;m building a newsletter for people who think about faith and
                technology — not hot takes, but honest reflections. The kind of
                writing you&apos;d read on a Saturday morning with good coffee.
              </p>
              <p className="text-warm-gray text-sm mb-8">
                Sign up below and you&apos;ll be the first to know when it launches.
              </p>
              <NewsletterSignup variant="compact" className="max-w-md mx-auto" />
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Preview Posts */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl text-cream text-center mb-12">
              What I&apos;ll Be Writing About
            </h2>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Faith & AI",
                desc: "What happens when machines can pray, preach, and counsel? These aren't hypothetical questions anymore.",
              },
              {
                title: "Business as Mission",
                desc: "Lessons from building companies that try to do more than make money. The wins, the failures, and the gray areas.",
              },
              {
                title: "Devotional Life",
                desc: "Practical spirituality for people who are too busy, too distracted, and too honest to pretend otherwise.",
              },
              {
                title: "Technology & Ethics",
                desc: "The questions Big Tech isn't asking — and why churches, businesses, and families should be.",
              },
            ].map((topic, i) => (
              <ScrollFade key={topic.title} delay={i * 100}>
                <div className="p-6 border border-dark-border hover:border-gold/30 transition-colors">
                  <h3 className="font-playfair text-lg text-gold mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
