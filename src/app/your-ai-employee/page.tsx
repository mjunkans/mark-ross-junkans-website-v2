import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import ScrollFade from "@/components/ScrollFade";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Your AI Employee – Build a 24/7 AI Assistant",
  description:
    "Build a 24/7 personal AI assistant that actually does things. 124-page step-by-step guide. No coding required. From Advira.ai, a Christian AI consulting firm.",
  openGraph: {
    title: "Your AI Employee – Build a 24/7 AI Assistant",
    description:
      "124-page step-by-step guide to building your own always-on AI employee. No coding required. From the team at Advira.ai.",
    url: "https://markrossjunkans.com/your-ai-employee",
    images: [{ url: "/images/your-ai-employee-cover.jpg" }],
  },
  keywords: [
    "AI assistant guide",
    "build AI employee",
    "AI consulting Christian",
    "personal AI assistant",
    "AI tools",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/your-ai-employee",
  },
};

const features = [
  { title: "12 chapters + 8 appendices", desc: "From installation to advanced workflows" },
  { title: "Complete setup walkthrough", desc: "Node.js install through first conversation" },
  { title: "Messaging app integration", desc: "WhatsApp, Discord, iMessage, Telegram, Slack" },
  { title: "Personal use cases", desc: "Email triage, research, scheduling, social media" },
  { title: "Business use cases", desc: "Client follow-ups, content creation, lead management" },
  { title: "30 ready-to-use prompts", desc: "Copy-paste commands for common tasks" },
  { title: "Privacy & security guide", desc: "Keep your data safe and under your control" },
  { title: "SOUL.md & USER.md templates", desc: "Configure your AI's personality and knowledge" },
];

const benefits = [
  "Text your AI like a real employee and get things done",
  "Automate email triage, social media, and research overnight",
  "Your AI remembers everything: preferences, projects, history",
  "Works 24/7 across all your messaging apps",
  "Runs locally on your machine: your data stays yours",
  "Free up hours every week for the work only you can do",
];

export default function YourAIEmployeePage() {
  return (
    <>
      <Script
        src="https://assets.lemonsqueezy.com/lemon.js"
        strategy="lazyOnload"
      />

      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-deeper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <ScrollFade>
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-6">
                  Digital Download · 124 Pages · From the team at{" "}
                  <a
                    href="https://advira.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    Advira.ai
                  </a>
                </p>
                <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-6 leading-tight">
                  Build a 24/7 AI Assistant That Actually Does Things While You Sleep
                </h1>
                <p className="text-cream/70 text-lg leading-relaxed mb-10">
                  A step-by-step guide to setting up your own always-on AI employee for life and business. No coding required.
                </p>
                <a
                  href="#pricing"
                  className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
                >
                  Get the Book
                </a>
              </ScrollFade>
            </div>
            <div className="flex-shrink-0">
              <ScrollFade delay={200}>
                <div className="relative w-[220px] h-[330px] md:w-[280px] md:h-[420px] shadow-2xl shadow-black/40">
                  <Image
                    src="/images/your-ai-employee-cover.jpg"
                    alt="Your AI Employee book cover"
                    fill
                    className="object-cover"
                    sizes="280px"
                    priority
                  />
                </div>
              </ScrollFade>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* Problem */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              You&apos;ve Used ChatGPT. Now What?
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                You&apos;ve probably asked ChatGPT to write an email, explain a concept, or help you brainstorm. It&apos;s impressive. It&apos;s also trapped in a browser tab.
              </p>
              <p>
                Close that tab and everything disappears. Your conversation, your context, your carefully crafted instructions. Open a new chat and you&apos;re starting from scratch with a stranger who has no idea who you are.
              </p>
              <p>
                <strong className="text-cream">This book is about something different.</strong> It&apos;s about an AI that lives on your computer, knows your name, remembers your preferences, and can actually do things in the real world. Send emails. Post to social media. Manage your calendar. Answer your messages while you sleep.
              </p>
              <p>
                Not a chatbot you visit. An employee who works for you.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              Two Mornings
            </h2>
          </ScrollFade>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollFade delay={0}>
              <div className="p-8 border border-red-900/40 bg-red-950/10">
                <h3 className="font-playfair text-lg text-red-300 mb-4">Without Your AI Employee</h3>
                <ul className="space-y-3">
                  {[
                    "37 unread emails waiting",
                    "Social media untouched for a week",
                    "Research undone before your 10 AM call",
                    "That report you promised? Still not sent",
                    "Copy, paste, switch tabs, fall behind",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✕'] before:absolute before:left-0 before:text-red-400 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFade>
            <ScrollFade delay={150}>
              <div className="p-8 border border-green-900/40 bg-green-950/10">
                <h3 className="font-playfair text-lg text-green-300 mb-4">With Your AI Employee</h3>
                <ul className="space-y-3">
                  {[
                    "Inbox sorted, urgent items flagged with drafts",
                    "Social content posted automatically",
                    "Research brief ready for your meeting",
                    "Report drafted and sent after your approval",
                    "You message it, it acts",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              What&apos;s Inside
            </h2>
            <p className="text-cream/70 leading-relaxed mb-10">
              124 pages of practical, step-by-step instruction to build your own AI employee using <strong className="text-cream">OpenClaw</strong>, an open-source AI agent platform. No fluff. No theory. Just do this, then this, then this.
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
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              What This Means for You
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
              <strong className="text-cream">This isn&apos;t another chatbot tutorial.</strong> It&apos;s a blueprint for building a digital employee that actually shows up to work every day, never calls in sick, and costs a fraction of what you&apos;d pay a human assistant.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Credibility / Advira */}
      <section className="py-16 md:py-24 bg-dark border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Built by practitioners, not theorists
            </p>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-6">
              This Book Comes from Real Deployments
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed">
              <p>
                This isn&apos;t a side project. Mark is the managing partner at{" "}
                <a href="https://advira.ai" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors underline underline-offset-2">
                  Advira.ai
                </a>
                , where our team designs and deploys private AI systems for businesses every day.
              </p>
              <p>
                This book distills what we&apos;ve learned from building these systems professionally into a guide anyone can follow. The same frameworks, the same architecture, the same thinking — just written so you can do it yourself.
              </p>
              <p>
                <strong className="text-cream">Prefer hands-on help?</strong> If you&apos;d rather have our team set things up for you, we&apos;re available for that too.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://advira.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
              >
                Visit Advira.ai
              </a>
              <a
                href="https://calendly.com/mark-advira/advira-ai-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-cream/30 text-cream/80 hover:border-gold hover:text-gold font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
              >
                Book a Strategy Call
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Get the Complete Guide
            </h2>
            <p className="text-warm-gray mb-12">
              Everything you need to build your AI employee, from zero to fully operational.
            </p>
          </ScrollFade>

          <ScrollFade delay={150}>
            <div className="border-2 border-gold p-8 relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-dark-deeper text-[10px] font-bold tracking-widest uppercase">
                Complete Guide
              </span>
              <h3 className="font-playfair text-xl text-cream mb-4">Your AI Employee</h3>
              <p className="font-playfair text-5xl font-semibold text-cream mb-2">$29</p>
              <p className="text-warm-gray text-sm mb-8">one-time purchase</p>
              <ul className="space-y-3 text-left mb-8">
                {[
                  "124-page complete guide (PDF)",
                  "12 chapters of step-by-step setup",
                  "8 practical appendices & templates",
                  "30 ready-to-use prompts",
                  "SOUL.md & USER.md templates included",
                  "Troubleshooting decision tree",
                  "First hour checklist",
                ].map((item) => (
                  <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-gold before:font-bold">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://mrjbooks.lemonsqueezy.com/checkout/buy/51b84553-323c-4b00-842b-8913763c7f9a?embed=1"
                className="lemonsqueezy-button block w-full text-center px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors"
              >
                Get the Book
              </a>
            </div>
          </ScrollFade>
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
            <p className="text-cream/70 leading-relaxed">
              If the guide doesn&apos;t help you get your AI employee up and running, email me for a full refund. No questions asked.
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-dark border-t border-dark-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Ready to Hire an Employee That Never Sleeps?
            </h2>
            <p className="text-cream/70 mb-8">
              124 pages. Step-by-step. From zero to your own AI employee.
            </p>
            <a
              href="#pricing"
              className="inline-block px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors"
            >
              Get the Book
            </a>
            <p className="text-warm-gray/60 text-sm mt-6">
              Want our team to build it for you?{" "}
              <a href="https://advira.ai" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                Visit Advira.ai
              </a>
            </p>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
