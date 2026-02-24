import type { Metadata } from "next";
import Image from "next/image";
import ScrollFade from "@/components/ScrollFade";
import SpeakingForm from "./SpeakingForm";

export const metadata: Metadata = {
  title: "Speaking & Media",
  description:
    "Book Mark Ross Junkans for speaking engagements, podcast interviews, and media appearances on faith, technology, AI ethics, and the future of the church.",
  openGraph: {
    title: "Speaking & Media – Mark Ross Junkans",
    description:
      "Engaging conversations on faith, technology, and the future. Available for keynotes, podcasts, churches, and workshops.",
    url: "https://markrossjunkans.com/speaking",
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
    title: "Pastoring in the Digital Age",
    desc: "Practical guidance for church leaders navigating AI-generated content, digital discipleship, and maintaining authentic community in a tech-saturated world.",
  },
  {
    title: "Spiritual Disciplines for the Digital Age",
    desc: "How ancient practices of Scripture, prayer, and presence take on new significance when we're surrounded by algorithms competing for our attention.",
  },
  {
    title: "Raising Kids in a World of AI",
    desc: "Equipping parents and youth leaders to help the next generation develop discernment, character, and faith in an age of unprecedented technological change.",
  },
  {
    title: "Custom Topics",
    desc: "Mark is happy to develop custom presentations tailored to your audience's specific needs and questions about faith and technology.",
  },
];

const engagements = [
  { title: "Keynotes", desc: "Conference and event presentations", image: "/images/speaking-stage.jpg" },
  { title: "Podcasts", desc: "Guest appearances and interviews", image: "/images/hero-workspace.jpg" },
  { title: "Churches", desc: "Sunday messages and series", image: "/images/church-interior.jpg" },
  { title: "Workshops", desc: "Interactive group sessions", image: "/images/bible-study.jpg" },
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
              Engaging conversations on faith, technology, and the future
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
                    alt="Mark Ross Junkans"
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
                  international project development, the energy industry, coffee
                  roasting, and Christian mission work — including co-founding LINC
                  Ministries, planting churches among immigrant and refugee
                  communities. His books and speaking draw from all of it: faith and
                  technology, ancient wisdom and modern tools.
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

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Speaking & Media – Mark Ross Junkans",
            description:
              "Book Mark Ross Junkans for speaking engagements on faith, technology, and AI.",
            url: "https://markrossjunkans.com/speaking",
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
