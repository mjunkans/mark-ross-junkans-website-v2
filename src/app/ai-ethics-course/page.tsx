import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "AI Ethics for Church Leaders – Video Course",
  description:
    "A 5-module video course equipping pastors to lead their churches through AI with theological clarity and practical tools.",
  openGraph: {
    title: "AI Ethics for Church Leaders – Video Course",
    description:
      "A 5-module video course equipping pastors to lead their churches through AI with theological clarity and practical tools.",
    url: "https://markrossjunkans.com/ai-ethics-course",
  },
};

const modules = [
  { num: 1, title: "Why AI Matters for Ministry", duration: "15 minutes", desc: "The AI revolution and your church. Three postures to avoid (fear, hype, drift). The alternative: wise stewardship. Three questions for evaluating any AI tool." },
  { num: 2, title: "Theological Framework for AI", duration: "18 minutes", desc: "Imago Dei: what makes humans uniquely human. Incarnation: why embodiment matters. Creation mandate: faithful stewardship. The Theological Filter for every AI decision." },
  { num: 3, title: "AI in Preaching, Teaching, and Worship", duration: "20 minutes", desc: "When to use AI in sermon prep (and when not to). AI in discipleship and formation. AI-generated music, liturgy, and art. Creating your personal AI policy." },
  { num: 4, title: "Navigating Ethical Challenges", duration: "22 minutes", desc: "AI bias and justice. Surveillance and privacy. Job displacement and economic impacts. Can a bot provide pastoral care? Real-world case studies and discussion." },
  { num: 5, title: "Leading Your Church Through AI", duration: "18 minutes", desc: "Creating a church AI policy step-by-step. Teaching your congregation (sermon series, workshops). Getting leadership buy-in. Your 6-month implementation plan." },
];

const includes = [
  { title: "Church AI Policy Template", desc: "6-page customizable template ready to adapt and implement" },
  { title: "Personal AI Policy Template", desc: "Define your own boundaries for AI use in ministry" },
  { title: "70+ Page Student Workbook", desc: "Reflection questions, case studies, Scripture references, glossaries" },
  { title: "Sample Sermon Outline", desc: '"Made in God\'s Image in the Age of AI"' },
  { title: "6-Month Implementation Plan", desc: "From education to policy rollout, step by step" },
  { title: "Curated Resource List", desc: "Books, articles, and videos for continued learning" },
];

export default function AIEthicsCoursePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-deeper text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Video Course
            </p>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-6 leading-tight">
              Lead Your Church Through AI With Confidence, Clarity, and Biblical Wisdom
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              A 5-module video course for pastors and church leaders navigating the most important technology conversation of our generation.
            </p>
            <span className="inline-block px-8 py-4 bg-dark-border text-cream/40 font-semibold text-xs tracking-[0.12em] uppercase cursor-not-allowed">
              Coming Soon
            </span>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Problem */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              Your Congregation Is Using AI. Right Now.
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                Students are using ChatGPT for Bible study homework. Business owners are implementing AI in their companies. Parents are asking Alexa for parenting advice.
              </p>
              <p>
                And they&apos;re asking you questions: &ldquo;Is AI sinful?&rdquo; &ldquo;Can I use it for sermon prep?&rdquo; &ldquo;What does the Bible say about this?&rdquo; &ldquo;Will my job be taken by a robot?&rdquo;
              </p>
              <p>
                <strong className="text-cream">Here&apos;s the uncomfortable truth: most pastors don&apos;t have good answers.</strong>
              </p>
              <p>
                Not because you&apos;re not smart. But because nobody&apos;s equipped you to think theologically about AI. AI ethics wasn&apos;t in the seminary curriculum.
              </p>
              <p>
                <strong className="text-cream">If you don&apos;t lead them, someone else will.</strong> And right now, your congregation is getting their answers from Silicon Valley, YouTube, and wherever else they can find them.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              The Curriculum
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10">
              95 minutes of focused, practical content. Watch at your own pace. Apply immediately.
            </p>
          </ScrollFade>

          <div className="space-y-4">
            {modules.map((m, i) => (
              <ScrollFade key={m.num} delay={i * 75}>
                <div className="p-6 border-l-4 border-gold bg-dark-card">
                  <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-2">
                    Module {m.num}
                  </p>
                  <h3 className="font-playfair text-lg text-cream font-medium mb-1">
                    {m.title}
                  </h3>
                  <p className="text-warm-gray text-xs mb-3">{m.duration}</p>
                  <p className="text-cream/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-10">
              Everything You Need to Lead
            </h2>
          </ScrollFade>
          <div className="grid sm:grid-cols-2 gap-5">
            {includes.map((item, i) => (
              <ScrollFade key={item.title} delay={i * 50}>
                <div className="flex gap-3 items-start">
                  <span className="text-gold font-bold text-lg flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="text-cream font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-cream/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              What Makes This Different
            </h2>
          </ScrollFade>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollFade delay={0}>
              <div className="p-8 border border-dark-border border-t-2 border-t-warm-gray">
                <h3 className="font-playfair text-lg text-warm-gray mb-4">Other AI Ethics Courses</h3>
                <ul className="space-y-3">
                  {[
                    "Written by tech ethicists, not pastors",
                    "Focus on abstract philosophy",
                    "Don't provide implementation tools",
                    "Ignore incarnation, imago Dei, biblical theology",
                  ].map((item) => (
                    <li key={item} className="text-cream/50 text-sm pl-6 relative before:content-['–'] before:absolute before:left-0 before:text-warm-gray">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFade>
            <ScrollFade delay={150}>
              <div className="p-8 border border-gold/30 border-t-2 border-t-gold">
                <h3 className="font-playfair text-lg text-gold mb-4">This Course</h3>
                <ul className="space-y-3">
                  {[
                    "Written by a pastor, for pastors",
                    "Rooted in Scripture and theology",
                    "Includes ready-to-use policy templates",
                    "Practical, pastoral, and implementable",
                  ].map((item) => (
                    <li key={item} className="text-cream/70 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFade>
          </div>
          <ScrollFade delay={300}>
            <p className="text-center text-cream/70 mt-10">
              <strong className="text-cream">You don&apos;t need another tech course. You need a pastoral leadership course. This is it.</strong>
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* About Instructor */}
      <section className="py-16 md:py-20 bg-dark text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl text-cream font-medium mb-6">
              About the Instructor
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              <strong className="text-cream">Mark Ross Junkans</strong> is an ordained LCMS pastor, author of <em>The Return of Mystery: Faith in an Age of Machines</em>, and a former bivocational pastor with experience in missionary work, technology, and international business.
            </p>
            <p className="text-cream/70 leading-relaxed">
              Mark codes. He&apos;s built AI tools. He&apos;s also done hospital visits, preached funerals, and led Bible studies in cross-cultural contexts. This course comes from someone who understands both the technology and the pastoral calling.
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
            <p className="text-warm-gray mb-4">30-day money-back guarantee on both tiers.</p>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-12">Coming Soon</p>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-8 text-center opacity-60">
                <h3 className="font-playfair text-xl text-cream mb-4">Basic</h3>
                <p className="font-playfair text-5xl font-semibold text-cream mb-2">$97</p>
                <p className="text-warm-gray text-sm mb-8">one-time, lifetime access</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "All 5 video modules (95 min)",
                    "Complete student workbook (70+ pages)",
                    "Church AI Policy Template",
                    "Personal AI Policy Template",
                    "Lifetime access",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="block w-full text-center px-6 py-3 bg-dark-border text-cream/40 font-semibold text-xs tracking-[0.1em] uppercase cursor-not-allowed">
                  Coming Soon
                </span>
              </div>
            </ScrollFade>

            <ScrollFade delay={150}>
              <div className="border border-dark-border p-8 text-center relative opacity-60">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark-deeper text-[10px] font-bold tracking-widest uppercase">
                  Recommended
                </span>
                <h3 className="font-playfair text-xl text-cream mb-4">Complete</h3>
                <p className="font-playfair text-5xl font-semibold text-cream mb-2">$197</p>
                <p className="text-warm-gray text-sm mb-8">one-time, lifetime access</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Everything in Basic",
                    "PowerPoint slides (all 5 modules)",
                    "Small group teaching guides",
                    "Email templates for congregation",
                    "Private community access",
                    "Quarterly live Q&A calls (first year)",
                    "Lifetime updates",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="block w-full text-center px-6 py-3 bg-dark-border text-cream/40 font-semibold text-xs tracking-[0.1em] uppercase cursor-not-allowed">
                  Coming Soon
                </span>
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
              Take the course. Use the templates. Try the framework. If you don&apos;t feel more equipped to lead your church through AI, email me within 30 days. Full refund.
            </p>
            <p className="text-cream/70 leading-relaxed">
              I&apos;m a pastor. I get it. This has to work, or it&apos;s not worth your time or money.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-dark border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Your Congregation Needs You to Lead on This
            </h2>
            <p className="text-cream/70 mb-8">
              5 modules. 95 minutes. A complete framework for faithful AI leadership.
            </p>
            <span className="inline-block px-8 py-4 bg-dark-border text-cream/40 font-semibold text-xs tracking-[0.12em] uppercase cursor-not-allowed">
              Coming Soon
            </span>
            <p className="text-warm-gray/50 text-sm mt-6">
              Questions? Email mjunkans71@gmail.com
            </p>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
