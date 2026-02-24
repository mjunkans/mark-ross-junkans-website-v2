import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import SpeakingForm from "./SpeakingForm";

export const metadata: Metadata = {
  title: "Speaking — Faith & Technology Speaker",
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
    desc: "Coffee, petroleum, AI consulting, international development — how to build ventures that expand Jesus' kingdom of grace, not just the bottom line.",
  },
  {
    title: "The Uncompartmentalized Life",
    desc: "You don't have to pick one lane. How to run multiple ventures, pursue big goals, and stay grounded in faith without burning out — or going crazy.",
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
    title: "The Persecuted Church & the Western Call",
    desc: "What the global persecuted church can teach the comfortable Western church about courage, conviction, and what it actually costs to follow Jesus.",
  },
  {
    title: "Pastoring in the Digital Age",
    desc: "Practical guidance for church leaders navigating AI-generated content, digital discipleship, and maintaining authentic community in a tech-saturated world.",
  },
  {
    title: "Starting Something From Nothing",
    desc: "Lessons from launching ventures across industries and continents. What it actually takes to go from idea to operating business — and why most advice is wrong.",
  },
  {
    title: "Custom Topics",
    desc: "Mark develops custom presentations tailored to your audience — whether it's a church, a boardroom, a podcast, or something in between.",
  },
];

const engagements = [
  { title: "Keynotes", desc: "Conference and event presentations", image: "/images/speaking-stage.jpg" },
  { title: "Podcasts", desc: "Guest appearances and interviews", image: "/images/hero-workspace.jpg" },
  { title: "Churches", desc: "Sunday messages and series", image: "/images/church-interior.jpg" },
  { title: "Media", desc: "TV, radio, and online", image: "/images/tech-minimal.jpg" },
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
              Faith, business, endurance, and everything at the intersection
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
      <section className="py-12 md:py-16 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <div className="relative w-[200px] h-[240px] md:w-[240px] md:h-[300px] overflow-hidden">
                  <Image
                    src="/images/mark-headshot.png"
                    alt="Mark Ross Junkans — Christian speaker on faith and technology"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h2 className="font-playfair text-2xl text-cream font-medium mb-4">
                  About the Speaker
                </h2>
                <p className="text-cream/70 leading-relaxed">
                  Mark Ross Junkans is an entrepreneur and advocate for business as
                  mission. He&apos;s a partner in ventures spanning AI consultancy,
                  petroleum operations, international development, coffee roasting,
                  and cross-cultural Christian mission. His books and speaking draw
                  from all of it: faith and technology, ancient wisdom and modern
                  tools.
                </p>
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
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
                  Mark speaks on faith and technology, AI ethics for churches, business as mission, the persecuted church and the Western call, endurance and leadership, raising kids in a world of AI, pastoring in the digital age, and starting ventures from nothing. He develops custom presentations tailored to each audience.
                </p>
              </div>
            </ScrollFade>
            <ScrollFade delay={100}>
              <div className="border border-dark-border p-6">
                <h3 className="font-playfair text-lg text-gold mb-3">How do I book Mark for a speaking engagement?</h3>
                <p className="text-cream/70 leading-relaxed">
                  Fill out the speaking request form above with details about your event — date, audience, format, and topic preferences. Mark&apos;s team typically responds within 2–3 business days. You can also reach out directly through the contact page.
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
                  text: "Mark speaks on faith and technology, AI ethics for churches, business as mission, the persecuted church and the Western call, endurance and leadership, raising kids in a world of AI, pastoring in the digital age, and starting ventures from nothing.",
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
