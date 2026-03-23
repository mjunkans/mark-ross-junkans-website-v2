export interface PodcastEpisode {
  slug: string;
  title: string;
  day: number; // 0 = welcome/intro
  season: number; // 1 = Book 1, 2 = Book 2
  date: string; // YYYY-MM-DD
  theme: string;
  psalmRef: string; // Psalm verse reference
  otRef: string; // Old Testament verse reference
  ntRef: string; // New Testament verse reference
  duration: string; // "M:SS" format
  durationSeconds: number;
  audioFile: string; // filename only, served from /podcast/audio/
  description: string;
}

export const podcastMeta = {
  title: "3 Verses a Day",
  subtitle:
    "A daily devotional podcast — three verses, one reflection, five minutes with God.",
  description:
    "A 5-minute daily devotional from the book series by Mark Ross Junkans. Three verses. One reflection. A prayer for your day.",
  author: "Mark Ross Junkans",
  email: "mark@markrossjunkans.com",
  siteUrl: "https://markrossjunkans.com",
  feedUrl: "https://markrossjunkans.com/podcast/feed.xml",
  coverImage: "/images/3-verses-cover.jpg",
  language: "en-us",
  category: "Religion & Spirituality",
  subcategory: "Christianity",
  amazonVol1: "https://a.co/d/0YqMmQK",
  amazonVol2: "https://a.co/d/aUmkLXB",
};

export const episodes: PodcastEpisode[] = [
  {
    slug: "day-02-trust-in-the-lord",
    title: "Day 2: Trust in the Lord",
    day: 2,
    season: 1,
    date: "2026-03-23",
    theme: "Trust in the Lord",
    psalmRef: "Psalm 37:3-5",
    otRef: "Proverbs 3:5-6",
    ntRef: "Hebrews 11:1",
    duration: "2:01",
    durationSeconds: 121,
    audioFile: "day-02-2026-03-23.mp3",
    description:
      "(Preliminary — audio will be replaced with the final book recording.) A reflection on trusting God with your whole heart, drawn from three verses across the Psalms, Old Testament, and New Testament.",
  },
  {
    slug: "day-01-the-goodness-of-god",
    title: "Day 1: The Goodness of God",
    day: 1,
    season: 1,
    date: "2026-03-22",
    theme: "The Goodness of God",
    psalmRef: "Psalm 34:8",
    otRef: "Lamentations 3:22-23",
    ntRef: "James 1:17",
    duration: "1:53",
    durationSeconds: 113,
    audioFile: "day-01-2026-03-22.mp3",
    description:
      "(Preliminary — audio will be replaced with the final book recording.) Tasting and seeing that the Lord is good. Three verses that reveal the relentless goodness of God from morning to night.",
  },
  {
    slug: "welcome",
    title: "Welcome to 3 Verses a Day",
    day: 0,
    season: 0,
    date: "2026-03-21",
    theme: "Introduction",
    psalmRef: "",
    otRef: "",
    ntRef: "",
    duration: "3:49",
    durationSeconds: 229,
    audioFile: "ep0-welcome.mp3",
    description:
      "(Preliminary — audio will be replaced with the final book recording.) An introduction to 3 Verses a Day — a daily devotional podcast based on the book series by Mark Ross Junkans. Each episode: three Bible verses, a reflection, a prayer, and a practical application. Five minutes with God to start your day.",
  },
];

// Helper: get episodes sorted newest first (default order in the array)
export function getEpisodesSorted(): PodcastEpisode[] {
  return [...episodes].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Helper: format duration for RSS (HH:MM:SS)
export function formatDurationRSS(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(Math.round(s)).padStart(2, "0")}`;
}
