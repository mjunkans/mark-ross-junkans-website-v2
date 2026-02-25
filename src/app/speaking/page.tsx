import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import SpeakingForm from "./SpeakingForm";

export const metadata: Metadata = {
  title: "Speaking | Faith & Technology Speaker",
  description:
    "Book Mark Ross Junkans for speaking on faith and AI, business as mission, AI ethics, the persecuted church, and endurance. Keynotes, podcasts, churches.",
  openGraph: {
    title: "Speaking & Media – Mark Ross Junkans | Faith & Technology Speaker",
    description:
      "Christian speaker on faith and technology, AI ethics for churches, business as mission, and the persecuted church. Available for keynotes, podcasts, and workshops.",
    url: "https://markrossjunkans.com/speaking",
    images: [{ url: "/images/speaking-stage.jpg" }],
  },
  keywords: [
    "Christian speaker",
    "faith and technology speaker",
    "AI ethics church",
    "AI ethics Christian",
    "business as mission",
    "persecuted church",
    "AI for pastors",
    "faith and AI",
    "should Christians use AI",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/speaking",
  },
};

const topics = [
  {
    title: "Faith in an Age of AI",
    desc: "How should Christians think about artificial intelligence? Exploring the theological implications of machines that can create, communicate, and seemingly \"think.\"",
  },
  {
    title: "The Return of Mystery",
    desc: "Why the rise of AI might actually be an invitation back to wonder, awe, and the irreducibly human dimensions of faith that machines cannot replicate.",
  },
  {
    title: "Business as Mission",
    desc: "How to build ventures that expand Jesus' kingdom of grace, not just the bottom line. What it looks like to do real work in real markets as an act of faith.",
  },
  {
    title: "The Uncompartmentalized Life",
    desc: "You don't have to pick one lane. How to run multiple ventures, pursue big goals, and stay grounded in faith without burning out (or going crazy).",
  },
  {
    title: "Endurance & Leadership",
    desc: "What 3 Ironmans and ultramarathons taught me about pain, perseverance, and building things that last. The finish line is never where you think it is.",
  },
  {
    title: "Raising Kids in a World of AI",
    desc: "Equipping parents and youth leaders to help the next generation develop discernment, character, and faith in an age of unprecedented technological change.",
  },
  {
    title: "The Persecuted Church & the Church in the West",
    desc: "The call of the Western church to pray for, walk alongside, and learn from believers who follow Jesus at great cost.",
  },
  {
    title: "Pastoring in the Digital Age",
    desc: "Practical guidance for church leaders navigating AI-generated content, digital discipleship, and maintaining authentic community in a tech-saturated world.",
  },
  {
    title: "Starting Something From Nothing",
    desc: "Lessons from launching ventures across industries and continents. What it actually takes to go from idea to operating business, and why most advice is wrong.",
  },
  {
    title: "Custom Topics",
    desc: "Mark develops custom presentations tailored to your audience, whether it's a church, a boardroom, a podcast, or something in between.",
  },
];

const engagements = [
  { title: "Keynotes", desc: "Conference and event presentations on faith and technology", image: "/images/speaking-stage.jpg" },
  { title: "Podcasts", desc: "Guest appearances and interviews on faith and AI", image: "/images/hero-workspace.jpg" },
  { title: "Churches", desc: "Sunday messages and sermon series on faith and technology", image: "/images/church-interior.jpg" },
  { title: "Media", desc: "TV, radio, and online appearances on AI ethics and faith", image: "/images/tech-minimal.jpg" },
];

export default function SpeakingPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              Speaking &amp; Media
            </h1>
            <p className="font-playfair text-gold italic text-lg mb-6">
              Faith, technology, ventures, and everything at the intersection
            </p>
            <p className="text-cream/70 leading-relaxed">
              Mark is available for speaking engagements, podcast interviews, and
              media appearances. He brings thoughtful, accessible perspectives on
              how faith communities can navigate the rapidly changing technological
              landscape.
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* About the Speaker */}
      <section className="py-12 md:py-20 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-14">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[340px] overflow-hidden border border-dark-border">
                  <Image
                    src="/images/mark-headshot.png"
                    alt="Mark Ross Junkans, Christian speaker on faith and technology"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
              </div>
              <div className="text-center md:text-left flex-1">
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-3">
                  About the Speaker
                </p>
                <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-5">
                  Mark Ross Junkans
                </h2>
                <p className="text-cream/70 leading-relaxed mb-6">
                  Mark writes and speaks about what happens when faith meets
                  technology, when business meets mission, and when the world
                  changes faster than our theology anticipated.
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
                  <div>
                    <p className="text-gold font-semibold mb-1">Background</p>
                    <p className="text-cream/50">20+ years building ventures across 4 continents</p>
                  </div>
                  <div>
                    <p className="text-gold font-semibold mb-1">Ministry</p>
                    <p className="text-cream/50">Ordained pastor, cross-cultural mission leader</p>
                  </div>
                  <div>
                    <p className="text-gold font-semibold mb-1">Author</p>
                    <p className="text-cream/50">4 books on faith, AI, and devotional life</p>
                  </div>
                  <div>
                    <p className="text-gold font-semibold mb-1">Endurance</p>
                    <p className="text-cream/50">3x Ironman, ultramarathon runner</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-dark-border">
                  <p className="text-cream/40 text-sm italic leading-relaxed">
                    &ldquo;He brings the kind of honesty that comes from getting
                    things wrong enough times to know what right looks like.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="section-heading text-center mb-12">Speaking Topics</h2>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, i) => (
              <ScrollFade key={topic.title} delay={i * 80}>
                <div className="p-6 md:p-8 bg-dark-card border border-dark-border hover:border-gold/30 transition-colors h-full">
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

      {/* Engagement Types */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="section-heading text-center mb-12">
              Types of Engagements
            </h2>
          </ScrollFade>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {engagements.map((e, i) => (
              <ScrollFade key={e.title} delay={i * 80}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={e.image}
                    alt={e.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                    <h3 className="font-playfair text-base text-white mb-1">
                      {e.title}
                    </h3>
                    <p className="text-white/70 text-xs">{e.desc}</p>
                  </div>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="text-center mb-10">
              <h2 className="section-heading">Request an Appearance</h2>
              <p className="text-warm-gray mt-2">
                Fill out the form below and we&apos;ll respond within 2–3 business
                days.
              </p>
            </div>
          </ScrollFade>

          <ScrollFade delay={200}>
            <SpeakingForm />
          </ScrollFade>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="section-heading text-center mb-12">Frequently Asked Questions</h2>
          </ScrollFade>
          <div className="space-y-6">
            <ScrollFade delay={0}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">What topics does Mark speak on?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Mark speaks on faith and technology, AI ethics for churches, business as mission, the persecuted church and the church in the West, endurance and leadership, raising kids in a world of AI, pastoring in the digital age, and starting ventures from nothing. He develops custom presentations tailored to each audience.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={100}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">How do I book Mark for a speaking engagement?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Fill out the speaking request form above with details about your event: date, audience, format, and topic preferences. Mark&apos;s team typically responds within 2–3 business days. You can also reach out directly through the contact page.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={200}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">Does Mark speak at churches?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Yes! Mark regularly speaks at churches, delivering Sunday messages and sermon series. His most requested church topics include faith in an age of AI, the return of mystery, and what the persecuted church can teach the Western church about courage and conviction.
                </p>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Speaking & Media – Mark Ross Junkans",
            description:
              "Book Mark Ross Junkans for speaking engagements on faith, technology, AI ethics, and business as mission.",
            url: "https://markrossjunkans.com/speaking",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: ["h1", "h2", ".text-cream\\/70"],
            },
            author: {
              "@type": "Person",
              name: "Mark Ross Junkans",
              url: "https://markrossjunkans.com/",
            },
          }),
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
                name: "What topics does Mark speak on?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mark speaks on faith and technology, AI ethics for churches, business as mission, the persecuted church and the church in the West, endurance and leadership, raising kids in a world of AI, pastoring in the digital age, and starting ventures from nothing.",
                },
              },
              {
                "@type": "Question",
                name: "How do I book Mark for a speaking engagement?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Fill out the speaking request form on the speaking page with details about your event. Mark's team typically responds within 2–3 business days. You can also reach out through the contact page.",
                },
              },
              {
                "@type": "Question",
                name: "Does Mark speak at churches?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes! Mark regularly speaks at churches, delivering Sunday messages and sermon series. His most requested topics include faith in an age of AI, the return of mystery, and what the persecuted church can teach the Western church.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
