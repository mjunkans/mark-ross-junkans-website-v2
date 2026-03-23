import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";
import { podcastMeta, getEpisodesSorted } from "@/data/podcast";
import PodcastPlayer from "@/components/PodcastPlayer";

export const metadata: Metadata = {
  title: "Drawing Near Podcast | 30-Day Spiritual Disciplines Devotional",
  description: podcastMeta.description,
  openGraph: {
    title: "Drawing Near: A 30-Day Journey Through the Spiritual Disciplines",
    description: podcastMeta.description,
    url: "https://markrossjunkans.com/podcast",
    images: [
      {
        url: podcastMeta.coverImage,
        width: 3000,
        height: 3000,
        alt: "Drawing Near Podcast Cover",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drawing Near Podcast",
    description:
      "A 30-day devotional journey through the spiritual disciplines. Scripture, classic Christian wisdom, and daily practice.",
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
  const episodes = getEpisodesSorted();

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
              Drawing Near
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed max-w-2xl mx-auto">
              A 30-day journey through the spiritual disciplines. Each episode
              offers a short Scripture reading, a word from a classic Christian
              writer, and a simple daily practice.
            </p>
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
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 border border-dark-border text-cream/60 hover:border-gold hover:text-gold text-xs font-medium tracking-[0.08em] uppercase transition-colors"
              >
                Apple Podcasts
              </a>
              <a
                href="#"
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
                    {episode.day > 0 && (
                      <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-[0.1em] uppercase border border-gold/20">
                        {episode.discipline}
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

                  {/* Scripture reference */}
                  {episode.day > 0 && (
                    <p className="text-gold/70 text-sm mb-3 italic">
                      {episode.scripture}
                      {episode.writer && ` · ${episode.writer}`}
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
              Drawing Near is a curated daily devotional drawing from Scripture
              and the tested voices of the Christian faith — writers like A.W.
              Tozer, Dietrich Bonhoeffer, C.S. Lewis, Andrew Murray, and
              Augustine.
            </p>
            <p className="text-cream/60 leading-relaxed max-w-2xl mx-auto mb-6">
              No AI-generated teaching. No hot takes. Only God&apos;s Word and
              the wisdom of those who walked closely with Him. Each episode is
              short enough for your morning quiet time and deep enough to carry
              with you through the day.
            </p>
            <p className="text-cream/40 text-sm italic">
              &ldquo;Draw near to God, and He will draw near to you.&rdquo;
              &mdash; James 4:8
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
