import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "About",
  description:
    "Mark Ross Junkans — author, AI consultant, endurance athlete, coffee roaster, and restless thinker. 3x Ironman, ultrarunner, and partner at Advira.ai.",
  openGraph: {
    title: "About Mark Ross Junkans",
    description:
      "Author, entrepreneur, and advocate for business as mission. The guy who writes about AI and devotionals in the same week.",
    url: "https://markrossjunkans.com/about",
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
                    alt="Mark Ross Junkans"
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
                  I&apos;m the kind of person who writes a book about AI and faith,
                  runs an ultramarathon, flies to three continents, then comes home
                  and roasts coffee beans — because apparently I needed one more thing
                  to explain at dinner parties. My wife Natalia thinks this is
                  charming. My accountant is less sure.
                </p>
                <p className="text-cream/70 leading-relaxed mb-6">
                  I also run a mission organization and an AI consultancy.
                  I&apos;ve been blessed with energy and a mind that thrives on
                  holding opposites together.
                </p>
                <p className="text-cream/70 leading-relaxed">
                  I live in Houston, Texas, and I&apos;m trying to figure out how
                  to follow Jesus in a world that&apos;s changing faster than any of
                  us expected. That question drives everything else.
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
                My career has been... non-linear. I&apos;ve traded fuel on international
                markets, developed infrastructure projects across multiple countries,
                founded a church planting ministry, started a specialty coffee
                roasting company, completed three Ironmans and more ultramarathons
                than my knees would like to remember, and now run an AI consultancy.
                If that sounds scattered, I prefer &quot;interdisciplinary.&quot;
              </p>

              <p>
                The thread connecting all of it is a conviction that business should
                help expand Jesus&apos; kingdom of grace — not just as a way to pay
                bills, but as a way to participate in something eternal.
                That&apos;s not a tagline. It&apos;s the operating system.
              </p>

              <p>
                My books come from the intersection of all these worlds. &quot;The Return
                of Mystery&quot; asks what happens to faith when machines can do
                everything we thought made us human. The &quot;3 Verses a Day&quot; series
                is for people who want to engage scripture without a PhD in theology.
                And &quot;Your AI Employee&quot; is for anyone who wants to actually use AI
                instead of just talking about it.
              </p>

              <p>
                When I&apos;m not writing or consulting, I&apos;m probably training
                for my next race, roasting coffee, reading something I shouldn&apos;t
                be reading at 2am, or having a conversation about theology that goes
                45 minutes too long. The endurance athlete thing isn&apos;t a hobby —
                it&apos;s how I process. Some people journal. I run 50 miles.
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
