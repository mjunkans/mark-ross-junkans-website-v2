import { episodes, podcastMeta, formatDurationRSS } from "@/data/podcast";
import fs from "fs";
import path from "path";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRFC2822(dateStr: string): string {
  const date = new Date(dateStr + "T06:00:00-05:00"); // Central time
  return date.toUTCString();
}

function getFileSize(audioFile: string): number {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "podcast",
      "audio",
      audioFile
    );
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}

export async function GET() {
  const {
    title,
    subtitle,
    description,
    author,
    email,
    siteUrl,
    coverImage,
    language,
  } = podcastMeta;

  const sortedEpisodes = [...episodes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const lastBuildDate = sortedEpisodes[0]
    ? formatRFC2822(sortedEpisodes[0].date)
    : new Date().toUTCString();

  const items = sortedEpisodes
    .map((ep) => {
      const audioUrl = `${siteUrl}/podcast/audio/${ep.audioFile}`;
      const fileSize = getFileSize(ep.audioFile);
      const episodeNum = ep.day > 0 ? ep.day : undefined;
      const seasonNum = ep.season > 0 ? ep.season : undefined;

      return `    <item>
      <title>${escapeXml(ep.title)}</title>
      <description>${escapeXml(ep.description)}</description>
      <pubDate>${formatRFC2822(ep.date)}</pubDate>
      <enclosure url="${escapeXml(audioUrl)}" length="${fileSize}" type="audio/mpeg" />
      <guid isPermaLink="false">${siteUrl}/podcast/${ep.slug}</guid>
      <link>${siteUrl}/podcast</link>
      <itunes:title>${escapeXml(ep.title)}</itunes:title>
      <itunes:author>${escapeXml(author)}</itunes:author>
      <itunes:summary>${escapeXml(ep.description)}</itunes:summary>
      <itunes:duration>${formatDurationRSS(ep.durationSeconds)}</itunes:duration>
      <itunes:explicit>false</itunes:explicit>${seasonNum !== undefined ? `\n      <itunes:season>${seasonNum}</itunes:season>` : ""}${episodeNum !== undefined ? `\n      <itunes:episode>${episodeNum}</itunes:episode>` : ""}
      <itunes:episodeType>${ep.day === 0 ? "trailer" : "full"}</itunes:episodeType>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${siteUrl}/podcast</link>
    <description>${escapeXml(description)}</description>
    <language>${language}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/podcast/feed.xml" rel="self" type="application/rss+xml" />

    <itunes:subtitle>${escapeXml(subtitle)}</itunes:subtitle>
    <itunes:author>${escapeXml(author)}</itunes:author>
    <itunes:owner>
      <itunes:name>${escapeXml(author)}</itunes:name>
      <itunes:email>${escapeXml(email)}</itunes:email>
    </itunes:owner>
    <itunes:image href="${siteUrl}${coverImage}" />
    <itunes:category text="Religion &amp; Spirituality">
      <itunes:category text="Christianity" />
    </itunes:category>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>serial</itunes:type>

${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
