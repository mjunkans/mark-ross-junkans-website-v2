import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ScrollFade from "@/components/ScrollFade";
import PodcastPlayer from "@/components/PodcastPlayer";
import {
  episodes,
  podcastMeta,
  getReleasedEpisodes,
  type PodcastEpisode,
} from "@/data/podcast";
import {
  getEpisodeContent,
  getWelcomeContent,
  getAllEpisodeSlugs,
} from "@/lib/episode-content";

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllEpisodeSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) return {};

  const title =
    episode.day > 0
      ? `${episode.title} | 3 Verses a Day Podcast`
      : `${episode.title} | 3 Verses a Day`;
  const description = episode.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://markrossjunkans.com/podcast/${slug}`,
      images: [
        {
          url: podcastMeta.coverImage,
          width: 3000,
          height: 3000,
          alt: "3 Verses a Day Podcast Cover",
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description:
        episode.description.length > 200
          ? episode.description.slice(0, 197) + "..."
          : episode.description,
    },
    alternates: {
      canonical: `https://markrossjunkans.com/podcast/${slug}`,
    },
  };
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function getAdjacentEpisodes(slug: string): {
  prev: PodcastEpisode | null;
  next: PodcastEpisode | null;
} {
  const released = getReleasedEpisodes();
  const idx = released.findIndex((ep) => ep.slug === slug);
  return {
    prev: idx > 0 ? released[idx - 1] : null,
    next: idx < released.length - 1 ? released[idx + 1] : null,
  };
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodes.find((ep) => ep.slug === slug);
  if (!episode) notFound();

  const isWelcome = episode.day === 0;
  const content = isWelcome ? null : getEpisodeContent(slug);
  const welcomeText = isWelcome ? getWelcomeContent(slug) : null;
  const { prev, next } = getAdjacentEpisodes(slug);

  // JSON-LD structured data for the episode
  const episodeJsonLd = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    url: `https://markrossjunkans.com/podcast/${slug}`,
    datePublished: episode.date,
    timeRequired: `PT${Math.floor(episode.durationSeconds / 60)}M${episode.durationSeconds % 60}S`,
    associatedMedia: {
      "@type": "MediaObject",
      contentUrl: `${podcastMeta.siteUrl}/podcast/audio/${episode.audioFile}`,
      encodingFormat: "audio/mpeg",
    },
    partOfSeries: {
      "@type": "PodcastSeries",
      name: podcastMeta.title,
      url: "https://markrossjunkans.com/podcast",
    },
    ...(episode.season > 0 && {
      partOfSeason: {
        "@type": "PodcastSeason",
        seasonNumber: episode.season,
      },
      episodeNumber: episode.day,
    }),
    author: {
      "@type": "Person",
      name: podcastMeta.author,
      url: "https://markrossjunkans.com",
    },
    image: `${podcastMeta.siteUrl}${podcastMeta.coverImage}`,
  };

  return (
    <>
      {/* Episode Header */}
      <section className="py-14 md:py-20 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            {/* Breadcrumb */}
            <div className="mb-6">
              <Link
                href="/podcast"
                className="text-gold/70 hover:text-gold text-xs font-semibold tracking-[0.1em] uppercase transition-colors"
              >
                ← All Episodes
              </Link>
            </div>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {episode.day > 0 && episode.season > 0 && (
                <span className="px-3 py-1 bg-gold/10 text-gold text-xs font-semibold tracking-[0.1em] uppercase border border-gold/20">
                  Season {episode.season} · Episode {episode.day}
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
            <h1 className="font-playfair text-3xl md:text-4xl text-cream font-medium mb-4">
              {episode.title}
            </h1>

            {/* Scripture references */}
            {episode.day > 0 && (
              <p className="text-gold/70 text-sm mb-6 italic">
                {[episode.psalmRef, episode.otRef, episode.ntRef]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}

            {/* Audio Player */}
            <div className="border border-dark-border p-4 mb-6">
              <PodcastPlayer
                src={`/podcast/audio/${episode.audioFile}`}
                title={episode.title}
              />
            </div>

            {/* Description */}
            <p className="text-cream/60 leading-relaxed text-sm">
              {episode.description}
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Transcript */}
      <section className="py-12 md:py-16 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>
            <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium mb-8">
              Full Transcript
            </h2>

            {/* Welcome episode — freeform text */}
            {isWelcome && welcomeText && (
              <div className="prose-episode">
                {welcomeText.split("\n\n").map((para, i) => {
                  // Handle **bold** markdown text
                  if (para.startsWith("**")) {
                    const clean = para.replace(/\*\*/g, "");
                    return (
                      <h3
                        key={i}
                        className="font-playfair text-lg text-cream font-medium mt-8 mb-3"
                      >
                        {clean}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-cream/70 leading-relaxed mb-4 text-[15px]"
                    >
                      {para}
                    </p>
                  );
                })}
              </div>
            )}

            {/* Day episodes — structured content */}
            {!isWelcome && content && (
              <div className="space-y-10">
                {/* Verses */}
                <div>
                  <h3 className="font-playfair text-xl text-cream font-medium mb-5">
                    Scripture Readings
                  </h3>
                  <div className="space-y-5">
                    {content.verses.map((verse, i) => (
                      <blockquote
                        key={i}
                        className="border-l-2 border-gold/40 pl-5"
                      >
                        <p className="text-cream/80 leading-relaxed italic text-[15px] mb-1">
                          &ldquo;{verse.text}&rdquo;
                        </p>
                        <cite className="text-gold/70 text-sm not-italic font-medium">
                          — {verse.ref}
                        </cite>
                      </blockquote>
                    ))}
                  </div>
                </div>

                {/* Reflection */}
                <div>
                  <h3 className="font-playfair text-xl text-cream font-medium mb-4">
                    Reflection
                  </h3>
                  {content.reflection.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-cream/70 leading-relaxed mb-4 text-[15px]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Prayer */}
                <div>
                  <h3 className="font-playfair text-xl text-cream font-medium mb-4">
                    Prayer
                  </h3>
                  <p className="text-cream/70 leading-relaxed italic text-[15px]">
                    {content.prayer}
                  </p>
                </div>

                {/* Application */}
                <div>
                  <h3 className="font-playfair text-xl text-cream font-medium mb-4">
                    Application
                  </h3>
                  <p className="text-cream/70 leading-relaxed text-[15px]">
                    {content.application}
                  </p>
                </div>
              </div>
            )}

            {/* Fallback if no transcript found */}
            {!isWelcome && !content && (
              <p className="text-cream/50 italic">
                Transcript not yet available for this episode.
              </p>
            )}
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Prev/Next Navigation */}
      <section className="py-8 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/podcast/${prev.slug}`}
                className="text-cream/60 hover:text-gold text-sm transition-colors"
              >
                ← {prev.title}
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/podcast/${next.slug}`}
                className="text-cream/60 hover:text-gold text-sm transition-colors text-right"
              >
                {next.title} →
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <div className="gold-line" />

      {/* Subscribe + Books */}
      <section className="py-12 md:py-16 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <h2 className="font-playfair text-2xl text-cream font-medium mb-6">
              Subscribe to 3 Verses a Day
            </h2>

            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
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

            <h3 className="font-playfair text-lg text-cream font-medium mb-4">
              Get the Devotional Books
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={podcastMeta.amazonVol1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 text-xs font-semibold tracking-[0.08em] uppercase transition-colors"
              >
                📖 Volume 1: A 30-Day Devotional
              </a>
              <a
                href={podcastMeta.amazonVol2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 text-gold hover:bg-gold/20 text-xs font-semibold tracking-[0.08em] uppercase transition-colors"
              >
                📖 Volume 2: Trust in God
              </a>
            </div>
          </ScrollFade>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(episodeJsonLd) }}
      />
    </>
  );
}
