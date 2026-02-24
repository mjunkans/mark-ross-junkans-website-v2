import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";
import FAQSection from "./FAQSection";

export const metadata: Metadata = {
  title: "Notion Church Admin Template – Manage Your Entire Church in One Place",
  description:
    "The all-in-one Notion workspace for managing your church. Sermons, members, events, budget, volunteers, and tasks in one place. Save 5-10 hours per week.",
  openGraph: {
    title: "Notion Church Admin Template – Manage Your Entire Church in One Place",
    description:
      "6 databases, 50+ views, real-time dashboard. Stop juggling 12 spreadsheets.",
    url: "https://markrossjunkans.com/notion-church-template",
  },
};

const databases = [
  { title: "Sermons Database", desc: "Track sermon ideas, research, outlines, manuscripts. Calendar view of preaching schedule. Kanban board (Idea to Final). Searchable archive by topic or date." },
  { title: "Tasks Database", desc: "All church tasks in one place. Filter by priority, due date, category. Recurring task automation. Link to events, sermons, or members." },
  { title: "Members Database", desc: "Complete member directory with contact info. Birthdays, anniversaries, join dates. Pastoral care notes (private, searchable). Visitor follow-up queue." },
  { title: "Events Database", desc: "Calendar of all church events. Track attendance, budget, volunteers needed. Link events to sermons, tasks, and volunteers." },
  { title: "Budget Tracker", desc: "Income and expenses in one view. Track by category (missions, staff, building, ministry). Year-to-date totals. Compare budget vs. actual." },
  { title: "Volunteer Management", desc: "Who's serving when. Track recurring roles (worship, children's, hospitality). Training completion tracking. Link volunteers to events." },
];

export default function NotionChurchTemplatePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-dark-deeper text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-6 leading-tight">
              Stop Juggling 12 Spreadsheets. Manage Your Entire Church in One Place.
            </h1>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              The all-in-one Notion template built specifically for pastors and church leaders who are tired of scattered systems and want to actually spend time with people.
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
              The Problem
            </h2>
            <p className="text-cream/70 leading-relaxed mb-6">You&apos;re managing a church with:</p>
            <ul className="space-y-3 mb-8">
              {[
                "5 different Google Sheets (members, volunteers, budget, events, sermon planning)",
                "A paper planner for pastoral care notes",
                "Email folders for follow-up reminders",
                "Sticky notes on your desk",
                "Your memory (which is failing you)",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-cream/70 leading-relaxed">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-4 text-cream/70 leading-relaxed">
              <p>And every week, something falls through the cracks.</p>
              <p><strong className="text-cream">You forgot to follow up with that new visitor.</strong></p>
              <p><strong className="text-cream">You can&apos;t find that sermon outline you wrote 3 months ago.</strong></p>
              <p><strong className="text-cream">The budget report is... somewhere.</strong></p>
              <p>This isn&apos;t because you&apos;re disorganized. It&apos;s because you&apos;re using tools that weren&apos;t built for ministry.</p>
              <p><strong className="text-cream">Meanwhile, people need you. And you&apos;re stuck in spreadsheets.</strong></p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-6">
              The Solution
            </h2>
            <div className="space-y-5 text-cream/70 leading-relaxed mb-8">
              <p>
                <strong className="text-cream">Notion Church Admin Template</strong> is a complete, pre-built Notion workspace that consolidates everything you need to run your church into one beautifully organized system.
              </p>
              <p>
                <strong className="text-cream">Sermons. Members. Events. Budget. Volunteers. Tasks. All in one place.</strong>
              </p>
              <p>No more switching between apps. No more lost information. Just open Notion. Everything&apos;s there.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                "6 fully-built databases",
                "50+ pre-configured views",
                "Smart interconnections between databases",
                "Real-time dashboard showing your week at a glance",
                "Mobile-friendly for on-the-go updates",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <span className="text-gold font-bold flex-shrink-0">✓</span>
                  <p className="text-cream/70 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-warm-gray text-sm">
              <strong className="text-cream">Setup time:</strong> 30 minutes · <strong className="text-cream">Time saved:</strong> 5-10 hours per week
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* 6 Core Databases */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              6 Core Databases (Fully Built)
            </h2>
          </ScrollFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {databases.map((db, i) => (
              <ScrollFade key={db.title} delay={i * 75}>
                <div className="p-6 border-l-4 border-gold bg-dark-card h-full">
                  <h3 className="font-playfair text-lg text-cream font-medium mb-3">{db.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{db.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
              Before vs. After
            </h2>
          </ScrollFade>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollFade delay={0}>
              <div className="p-8 border border-red-900/40 bg-red-950/10">
                <h3 className="font-playfair text-lg text-red-300 mb-4">Before (Scattered Systems)</h3>
                <ul className="space-y-3">
                  {[
                    "5+ spreadsheets across Google Drive",
                    "Paper planner for pastoral notes",
                    "Email folders for member follow-up",
                    "Can't find anything",
                    "10+ hours/week on admin",
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
                <h3 className="font-playfair text-lg text-green-300 mb-4">After (Notion Template)</h3>
                <ul className="space-y-3">
                  {[
                    "Everything in one place",
                    "Searchable, organized, interconnected",
                    "Mobile-accessible",
                    "Actually remember to follow up",
                    "5 hours/week on admin (5 hours saved!)",
                  ].map((item) => (
                    <li key={item} className="text-cream/60 text-sm pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-green-400 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFade>
          </div>
          <ScrollFade delay={300}>
            <p className="text-center font-playfair text-xl text-gold mt-10">
              What would you do with 5 extra hours per week?
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-4">
              Choose Your Package
            </h2>
            <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-12">Coming Soon</p>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-8 text-center opacity-60">
                <h3 className="font-playfair text-xl text-cream mb-4">Basic</h3>
                <p className="font-playfair text-5xl font-semibold text-cream mb-8">$49</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Complete Notion template (all 6 databases + dashboard)",
                    "Setup instructions PDF (10 pages)",
                    "Email support",
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
                <p className="font-playfair text-5xl font-semibold text-cream mb-8">$97</p>
                <ul className="space-y-3 text-left mb-8">
                  {[
                    "Everything in Basic",
                    "Video walkthrough (7-minute tour)",
                    "20+ pre-built filter templates",
                    "Private Slack community",
                    "1 hour optional setup call (first 50 buyers)",
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
      <section className="py-16 md:py-20 bg-dark text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-6">
              30-Day Money-Back Guarantee
            </h2>
            <p className="text-cream/70 leading-relaxed mb-4">
              Duplicate the template. Set it up. Use it for a month. If it doesn&apos;t save you time and reduce your admin stress, email me. Full refund.
            </p>
            <p className="text-warm-gray/50 text-sm mt-6">
              Questions? Email mjunkans71@gmail.com
            </p>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
