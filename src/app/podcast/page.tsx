import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";
import { podcastMeta, getReleasedEpisodes } from "@/data/podcast";
import PodcastPlayer from "@/components/PodcastPlayer";

export const metadata: Metadata = {
  title: "3 Verses a Day Podcast | Daily Devotional by Mark Ross Junkans",
  description: podcastMeta.description,
  openGraph: {
    title: "3 Verses a Day — A Daily Devotional Podcast",
    description: podcastMeta.description,
    url: "https://markrossjunkans.com/podcast",
    images: [
      {
        url: podcastMeta.coverImage,
        width: 3000,
        height: 3000,
        alt: "3 Verses a Day Podcast Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3 Verses a Day Podcast",
    description:
      "A 5-minute daily devotional. Three Bible verses. One reflection. A prayer for your day.",
  },
  alternates: {
    canonical: "https://markrossjunkans.com/podcast",
    types: {
      "application/rss+xml": "https://markrossjunkans.com/podcast/feed.xml",
    },
  },
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PodcastPage() {
  const episodes = getReleasedEpisodes();

  return (
    <>
      {/* Hero */}
      <section className="py-14 md:py-20 bg-dark-deeper text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase mb-4">
              Podcast
            </p>
            <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-6">
              3 Verses a Day
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
              Three Bible verses. One reflection. A prayer for your day. Each
              5-minute episode draws from the devotional book series by Mark Ross
              Junkans — one Psalm, one Old Testament verse, and one New Testament
              verse to anchor your morning.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={podcastMeta.amazonVol1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 text-xs font-semibold tracking-[0.08em] uppercase transition-colors"
              >
                📖 Get Volume 1 on Amazon
              </a>
              <a
                href={podcastMeta.amazonVol2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 text-xs font-semibold tracking-[0.08em] uppercase transition-colors"
              >
                📖 Get Volume 2 on Amazon
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Subscribe Links */}
      <section className="py-8 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <span className="text-cream/40 text-xs font-semibold tracking-[0.1em] uppercase">
                Subscribe
              </span>
              <a
                href="https://markrossjunkans.com/podcast/feed.xml"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-cream/60 hover:border-gold hover:text-gold text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z" />
                </svg>
                RSS Feed
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/3-verses-a-day/id1887331118"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-cream/60 hover:border-gold hover:text-gold text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/6tHwx7sBIwyrlFmhqDliti"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-cream/60 hover:border-gold hover:text-gold text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                Spotify
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* Episodes */}
      <section className="py-12 md:py-16 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {episodes.map((episode, i) => (
              <ScrollFade key={episode.slug} delay={i * 80}>
                <article className="border border-dark-border hover:border-gold/30 transition-colors p-6 md:p-8">
                  {/* Episode header */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {episode.day > 0 && episode.season > 0 && (
                      <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-[0.1em] uppercase border border-gold/20">
                        Season {episode.season}
                      </span>
                    )}
                    <span className="text-warm-gray/50 text-xs">
                      {formatDate(episode.date)}
                    </span>
                    <span className="text-warm-gray/30">·</span>
                    <span className="text-warm-gray/50 text-xs">
                      {episode.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-playfair text-xl md:text-2xl text-cream font-medium mb-2">
                    {episode.title}
                  </h2>

                  {/* Scripture references */}
                  {episode.day > 0 && (
                    <p className="text-gold/70 text-sm mb-3 italic">
                      {[episode.psalmRef, episode.otRef, episode.ntRef]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-cream/50 text-sm leading-relaxed mb-5">
                    {episode.description}
                  </p>

                  {/* Audio Player */}
                  <PodcastPlayer
                    src={`/podcast/audio/${episode.audioFile}`}
                    title={episode.title}
                  />
                </article>
              </ScrollFade>
            ))}
          </div>
        </div>
      </section>

      {/* About the Podcast */}
      <section className="py-12 md:py-16 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-6">
              About This Podcast
            </h2>
            <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto mb-4">
              3 Verses a Day is the audio companion to the devotional book series
              by Mark Ross Junkans. Each episode reads three Bible verses — one
              Psalm, one from the Old Testament, and one from the New Testament —
              followed by a short reflection, a prayer, and a practical
              application for your day.
            </p>
            <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto mb-6">
              Season 1 follows{" "}
              <em className="text-cream/80">
                3 Verses a Day: A 30-Day Devotional
              </em>
              . Season 2 follows{" "}
              <em className="text-cream/80">
                3 Verses a Day: Trust in God
              </em>
              . Five minutes. Three verses. One God who is always faithful.
            </p>

            {/* Book CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href={podcastMeta.amazonVol1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 text-sm font-medium tracking-[0.05em] transition-colors"
              >
                Volume 1: A 30-Day Devotional →
              </a>
              <a
                href={podcastMeta.amazonVol2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 text-gold hover:bg-gold/10 text-sm font-medium tracking-[0.05em] transition-colors"
              >
                Volume 2: Trust in God →
              </a>
            </div>

            <p className="text-cream/40 text-sm italic mt-8">
              &ldquo;Your word is a lamp to my feet and a light to my
              path.&rdquo; &mdash; Psalm 119:105
            </p>
          </ScrollFade>
        </div>
      </section>

      {/* PodcastSeries Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PodcastSeries",
            name: podcastMeta.title,
            description: podcastMeta.description,
            url: "https://markrossjunkans.com/podcast",
            author: {
              "@type": "Person",
              name: podcastMeta.author,
              url: "https://markrossjunkans.com",
            },
            image: `https://markrossjunkans.com${podcastMeta.coverImage}`,
            webFeed: podcastMeta.feedUrl,
            inLanguage: "en-US",
          }),
        }}
      />
    </>
  );
}
