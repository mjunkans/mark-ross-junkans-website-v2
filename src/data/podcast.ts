export interface PodcastEpisode {
  slug: string;
  title: string;
  day: number; // 0 = welcome/intro
  date: string; // YYYY-MM-DD
  discipline: string;
  theme: string;
  scripture: string;
  writer: string;
  source: string;
  duration: string; // "M:SS" format
  durationSeconds: number;
  audioFile: string; // filename only, served from /podcast/audio/
  description: string;
}

export const podcastMeta = {
  title: "Drawing Near: A 30-Day Journey Through the Spiritual Disciplines",
  description:
    "A curated daily devotional drawing from Scripture and the tested voices of the Christian faith. No AI-generated teaching — only God's Word and the wisdom of those who walked closely with Him. Each episode offers a short Scripture reading, a word from a classic Christian writer, and a simple daily practice.",
  author: "Mark Ross Junkans",
  email: "mark@markrossjunkans.com",
  siteUrl: "https://markrossjunkans.com",
  feedUrl: "https://markrossjunkans.com/podcast/feed.xml",
  coverImage: "/images/drawing-near-cover.jpg",
  language: "en-us",
  category: "Religion & Spirituality",
  subcategory: "Christianity",
};

export const episodes: PodcastEpisode[] = [
  {
    slug: "day-02-the-greatness-of-god",
    title: "Day 2: The Greatness of God",
    day: 2,
    date: "2026-03-23",
    discipline: "Prayer — Adoration",
    theme: "The Greatness of God",
    scripture: "Psalm 145:1-13",
    writer: "A.W. Tozer",
    source: "The Knowledge of the Holy, Chapter 1: 'Why We Must Think Rightly About God'",
    duration: "2:01",
    durationSeconds: 121,
    audioFile: "day-02-2026-03-23.mp3",
    description:
      "Exploring the discipline of adoration through Psalm 145 and Tozer's famous insight: 'What comes into our minds when we think about God is the most important thing about us.' Today's practice: ten minutes of pure praise.",
  },
  {
    slug: "day-01-hungering-for-the-word",
    title: "Day 1: Hungering for the Word",
    day: 1,
    date: "2026-03-22",
    discipline: "Scripture Meditation / Lectio Divina",
    theme: "Hungering for the Word",
    scripture: "Psalm 119:97-105",
    writer: "A.W. Tozer",
    source: "The Pursuit of God, Chapter 4: 'Apprehending God'",
    duration: "1:53",
    durationSeconds: 113,
    audioFile: "day-01-2026-03-22.mp3",
    description:
      "Beginning our journey with the ancient practice of Lectio Divina. Psalm 119 reveals the sweetness of God's Word, and Tozer asks why some find God in ways others do not. Today's practice: read, meditate, pray, contemplate.",
  },
  {
    slug: "welcome",
    title: "Welcome to Drawing Near",
    day: 0,
    date: "2026-03-21",
    discipline: "Introduction",
    theme: "Beginning the Journey",
    scripture: "James 4:8",
    writer: "",
    source: "",
    duration: "3:49",
    durationSeconds: 229,
    audioFile: "ep0-welcome.mp3",
    description:
      "An introduction to Drawing Near — a 30-day devotional journey through the spiritual disciplines. What this podcast is, how to use it, and an invitation to draw near to God.",
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
