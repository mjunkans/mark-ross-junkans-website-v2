import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "About Mark | Christian Author & Entrepreneur",
  description:
    "Mark Ross Junkans: Christian author, AI consultant, faith driven entrepreneur, ultrarunner. 3x Ironman, business as mission advocate, partner at Advira.ai.",
  openGraph: {
    title: "About Mark Ross Junkans | Faith & Technology Author",
    description:
      "Christian entrepreneur, author, and advocate for business as mission. AI consultant, endurance athlete, and faith and technology speaker.",
    url: "https://markrossjunkans.com/about",
    images: [{ url: "/images/mark-headshot.png" }],
  },
  keywords: [
    "Christian entrepreneur",
    "faith driven entrepreneur",
    "business as mission",
    "ultrarunner author",
    "endurance athlete faith",
    "AI consulting Christian",
    "Christian author AI",
    "faith and technology speaker",
  ],
  alternates: {
    canonical: "https://markrossjunkans.com/about",
  },
};

const socialLinks = [
  {
    href: "https://www.amazon.com/stores/Mark-Ross-Junkans/author/B0GCXX63WC",
    label: "Amazon",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61579646231991",
    label: "Facebook",
  },
  { href: "https://x.com/mjunkans", label: "X" },
  {
    href: "https://www.linkedin.com/in/markjunkans",
    label: "LinkedIn",
  },
];

const ventures = [
  {
    name: "Advira.ai",
    desc: "AI consulting & implementation",
    href: "https://advira.ai",
  },
  {
    name: "CrossCM",
    desc: "Cross-cultural Christian mission",
    href: "https://crosscm.org",
  },
  {
    name: "Spur Coffee",
    desc: "Specialty coffee roasting",
    href: "https://spur.coffee",
  },
  {
    name: "Flagship Resources",
    desc: "Petroleum operations & international trade",
    href: "https://flagshipresources.com",
  },
  {
    name: "PJIC",
    desc: "International project development",
    href: "https://pjic.com",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[380px] overflow-hidden">
                  <Image
                    src="/images/e2e238733b_6268_0_1753817246.png"
                    alt="Mark Ross Junkans, Christian author, entrepreneur, and faith and technology speaker"
                    fill
                    className="object-cover"
                    sizes="300px"
                    priority
                  />
                </div>
              </div>

              {/* Intro */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
                  About Mark
                </h1>
                <div className="w-16 h-[2px] bg-gold mb-8 mx-auto md:mx-0" />
                <p className="text-cream/70 text-lg leading-relaxed mb-6">
                  I do a lot of things. Some of them make money. Some of them
                  make sense. The overlap is smaller than you&apos;d think.
                </p>
                <p className="text-cream/70 leading-relaxed mb-6">
                  I write books, build businesses, roast coffee, run very long
                  distances, and try to follow Jesus in a world that&apos;s
                  changing faster than any of us expected. I live in Houston
                  with my wife Natalia. That last part is the most important
                  thing on this page.
                </p>
                <p className="text-cream/70 leading-relaxed">
                  The question that drives all of it: how do you do faithful
                  work in a world that&apos;s automating everything? I don&apos;t
                  have a clean answer. But I keep showing up to the question.
                </p>
              </div>
            </div>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Bio */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              The Full Story <span className="text-gold">(Abridged)</span>
            </h2>

            <div className="space-y-6 text-cream/70 leading-relaxed">
              <p>
                I started in small business, moved into missions, then non-profit
                work, then international development, then construction, then
                coffee, then energy and AI. If you&apos;re looking for a clean
                career arc, this isn&apos;t it.
              </p>

              <p>
                The thread connecting all of it is a conviction that business
                should serve something beyond itself. I believe commerce can
                expand the kingdom of God. Not as a slogan. As a Tuesday
                afternoon operating principle.
              </p>

              <p>
                I write books because the questions won&apos;t leave me alone.
                What happens to faith when machines can do everything we thought
                made us human? How do you read Scripture when you have ten minutes
                and a restless mind? How do you actually use AI instead of just
                talking about it? Those became <em>The Return of Mystery</em>,
                the <em>3 Verses a Day</em> series, and <em>Your AI Employee</em>.
              </p>

              <p>
                I&apos;ve done three Ironmans and several ultramarathons. People
                ask why. The honest answer is that I process things by moving.
                Some people journal. I run until the thinking stops and something
                clearer takes its place.
              </p>

              <p>
                I have a wife, three daughters, and four grandchildren. I come
                from a family of 12 siblings. If you&apos;re wondering where the
                high tolerance for chaos comes from, that&apos;s a good place to start.
              </p>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Ventures */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-10 text-center">
              Ventures &amp; Projects
            </h2>
          </ScrollFade>

          <div className="grid sm:grid-cols-2 gap-6">
            {ventures.map((v, i) => (
              <ScrollFade key={v.name} delay={i * 100}>
                <div className="p-6 border border-dark-border hover:border-gold/30 transition-colors">
                  <h3 className="font-playfair text-lg text-gold mb-2">
                    {v.href ? (
                      <a
                        href={v.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gold-light transition-colors"
                      >
                        {v.name} →
                      </a>
                    ) : (
                      v.name
                    )}
                  </h3>
                  <p className="text-cream/60 text-sm">{v.desc}</p>
                </div>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Connect */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl text-cream mb-8">
              Connect with Mark
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-dark-border text-cream/70 hover:border-gold hover:text-gold font-medium text-xs tracking-[0.1em] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/speaking"
                className="text-gold text-sm hover:text-gold-light transition-colors"
              >
                Want Mark to speak at your event? →
              </Link>
            </div>
          </ScrollFade>
        </div>
      </section>
    </>
  );
}
