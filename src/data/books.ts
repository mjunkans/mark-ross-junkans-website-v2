export interface Book {
  title: string;
  shortTitle?: string;
  hook: string;
  description: string;
  coverImage: string;
  buyLink: string;
  buyLabel?: string;
  additionalLinks?: { label: string; href: string }[];
  isbn?: string;
}

export const books: Book[] = [
  {
    title: "The Return of Mystery",
    shortTitle: "The Return of Mystery",
    hook: "What happens to faith when machines can preach?",
    description:
      "AI can write your emails, teach your children, and preach a sermon indistinguishable from your pastor's. It's evolving faster than anyone predicted. And it's raising questions the church isn't prepared to answer. In this timely exploration, Mark Ross Junkans examines faith in an age of machines, and discovers that the rise of AI might actually be an invitation back to wonder, awe, and mystery.",
    coverImage: "/images/Cover Return of Mystery Kindle New.jpg",
    buyLink:
      "https://www.amazon.com/Return-Mystery-Faith-Age-Machines-ebook/dp/B0GD4L9SH2",
    additionalLinks: [
      {
        label: "Hardcover",
        href: "https://www.amazon.com/Return-Mystery-Faith-Age-Machines/dp/B0GG42D8WQ",
      },
      {
        label: "Paperback",
        href: "https://www.amazon.com/Return-Mystery-Faith-Age-Machines/dp/B0GD7NDY6Z",
      },
      {
        label: "Kindle",
        href: "https://www.amazon.com/Return-Mystery-Faith-Age-Machines-ebook/dp/B0GD4L9SH2",
      },
    ],
    isbn: "978-8-2955-3249-8",
  },
  {
    title: "3 Verses a Day: 30 Days",
    shortTitle: "3 Verses a Day: 30 Days",
    hook: "30 days to deepen your relationship with God.",
    description:
      "One verse from the Old Testament, one from the Psalms, one from the Gospels. Same theme. Every day for 30 days. Based on the historic lectionary tradition of pairing Scripture readings, this devotional gives you something small enough to do daily and focused enough to actually absorb. No fluff. Just the verses, a reflection, and space to listen.",
    coverImage: "/images/Cover Final.jpeg",
    buyLink:
      "https://www.amazon.com/Verses-Day-Days-Deepen-Relationship-ebook/dp/B0FLZ7SC8P",
  },
  {
    title: "3 Verses a Day: Trust in God",
    shortTitle: "3 Verses: Trust in God",
    hook: "A devotional for when trust doesn't come easy.",
    description:
      "Trust isn't a feeling. It's a practice. This devotional walks you through what scripture actually says about trusting God, especially when life doesn't make sense. Three verses a day. No shortcuts. Real wrestling.",
    coverImage: "/images/3 Verses Trust Cover Kindle.jpg",
    buyLink:
      "https://www.amazon.com/3-Verses-Day-Trust-God-ebook/dp/B0GC7X5CCM",
  },
  {
    title: "Your AI Employee",
    shortTitle: "Your AI Employee",
    hook: "Build a 24/7 AI assistant that actually does things.",
    description:
      "Stop using AI like a search engine. This step-by-step guide shows you how to build a personal AI assistant that handles your email, manages your schedule, and actually gets things done while you sleep. 12 chapters, 30 templates, zero coding required.",
    coverImage: "/images/your-ai-employee-cover.jpg",
    buyLink:
      "https://mrjbooks.lemonsqueezy.com/checkout/buy/51b84553-323c-4b00-842b-8913763c7f9a",
    buyLabel: "Get the Guide",
  },
];
