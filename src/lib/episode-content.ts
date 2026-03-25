import fs from "fs";
import path from "path";

export interface EpisodeContent {
  title: string;
  verses: { ref: string; text: string }[];
  reflection: string;
  prayer: string;
  application: string;
  rawMarkdown: string;
}

/**
 * Mapping from episode slug to markdown filename.
 */
const slugToFile: Record<string, string> = {
  welcome: "episode-00-welcome.md",
  "day-01-gods-unfailing-love": "episode-01-gods-unfailing-love.md",
  "day-02-finding-rest": "episode-02-finding-rest.md",
  "day-03-walking-by-faith": "episode-03-walking-by-faith.md",
  "day-04-gods-strength-in-weakness": "episode-04-gods-strength-in-weakness.md",
  "day-05-peace-in-the-storm": "episode-05-peace-in-the-storm.md",
  "day-06-gods-perfect-timing": "episode-06-gods-perfect-timing.md",
  "day-07-forgiveness-and-freedom": "episode-07-forgiveness-and-freedom.md",
  "day-08-hope-for-tomorrow": "episode-08-hope-for-tomorrow.md",
  "day-09-trusting-gods-plan": "episode-09-trusting-gods-plan.md",
  "day-10-joy-in-the-journey": "episode-10-joy-in-the-journey.md",
  "day-11-gods-provision": "episode-11-gods-provision.md",
  "day-12-courage-for-today": "episode-12-courage-for-today.md",
  "day-13-gratitude-in-all-things": "episode-13-gratitude-in-all-things.md",
  "day-14-gods-faithfulness": "episode-14-gods-faithfulness.md",
  "day-15-wisdom-for-decisions": "episode-15-wisdom-for-decisions.md",
  "day-16-finding-purpose": "episode-16-finding-purpose.md",
  "day-17-healing-and-restoration": "episode-17-healing-and-restoration.md",
  "day-18-gods-protection": "episode-18-gods-protection.md",
  "day-19-patience-in-process": "episode-19-patience-in-process.md",
  "day-20-community-and-fellowship": "episode-20-community-and-fellowship.md",
  "day-21-gods-word-as-guide": "episode-21-gods-word-as-guide.md",
  "day-22-serving-others": "episode-22-serving-others.md",
  "day-23-overcoming-fear": "episode-23-overcoming-fear.md",
  "day-24-perseverance-through-trials":
    "episode-24-perseverance-through-trials.md",
  "day-25-gods-grace": "episode-25-gods-grace.md",
  "day-26-contentment-and-peace": "episode-26-contentment-and-peace.md",
  "day-27-hope-for-the-future": "episode-27-hope-for-the-future.md",
  "day-28-gods-presence": "episode-28-gods-presence.md",
  "day-29-walking-in-truth": "episode-29-walking-in-truth.md",
  "day-30-living-with-eternal-perspective":
    "episode-30-living-with-eternal-perspective.md",
};

function getContentDir(): string {
  return path.join(process.cwd(), "content", "podcast", "season-1");
}

/**
 * Parse a markdown episode file into structured content.
 */
function parseEpisodeMarkdown(markdown: string): EpisodeContent {
  const lines = markdown.split("\n");
  let title = "";
  let currentSection = "";
  const verses: { ref: string; text: string }[] = [];
  const sectionContent: Record<string, string[]> = {
    reflection: [],
    prayer: [],
    application: [],
  };

  for (const line of lines) {
    // Title line
    if (line.startsWith("# ")) {
      title = line.replace(/^# /, "").trim();
      continue;
    }

    // Section headers
    if (line.startsWith("## ")) {
      const heading = line.replace(/^## /, "").trim().toLowerCase();
      if (heading === "verses") {
        currentSection = "verses";
      } else if (heading === "reflection") {
        currentSection = "reflection";
      } else if (heading === "prayer") {
        currentSection = "prayer";
      } else if (heading === "application") {
        currentSection = "application";
      }
      continue;
    }

    // Verse lines
    if (currentSection === "verses" && line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*\s*-\s*"(.+?)"/);
      if (match) {
        verses.push({ ref: match[1], text: match[2] });
      }
      continue;
    }

    // Content lines for other sections
    if (
      currentSection === "reflection" ||
      currentSection === "prayer" ||
      currentSection === "application"
    ) {
      sectionContent[currentSection].push(line);
    }
  }

  return {
    title,
    verses,
    reflection: sectionContent.reflection.join("\n").trim(),
    prayer: sectionContent.prayer.join("\n").trim(),
    application: sectionContent.application.join("\n").trim(),
    rawMarkdown: markdown,
  };
}

/**
 * Read and parse episode content for a given slug.
 * Returns null if the episode file doesn't exist.
 */
export function getEpisodeContent(slug: string): EpisodeContent | null {
  const filename = slugToFile[slug];
  if (!filename) return null;

  const filePath = path.join(getContentDir(), filename);
  try {
    const markdown = fs.readFileSync(filePath, "utf-8");
    return parseEpisodeMarkdown(markdown);
  } catch {
    return null;
  }
}

/**
 * Get the welcome episode content (no structured sections).
 */
export function getWelcomeContent(slug: string): string | null {
  const filename = slugToFile[slug];
  if (!filename) return null;

  const filePath = path.join(getContentDir(), filename);
  try {
    const markdown = fs.readFileSync(filePath, "utf-8");
    // Remove the title line and return the rest
    return markdown.replace(/^# .+\n+/, "").trim();
  } catch {
    return null;
  }
}

/**
 * Get all episode slugs for static generation.
 */
export function getAllEpisodeSlugs(): string[] {
  return Object.keys(slugToFile);
}
