import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://markrossjunkans.com"),
  title: {
    default: "Mark Ross Junkans | Faith & Technology Author, Entrepreneur",
    template: "%s | Mark Ross Junkans",
  },
  description:
    "Christian author and entrepreneur exploring faith and AI. Books on faith in the age of machines, daily devotionals, and AI tools for church leaders. Business as mission advocate.",
  keywords: [
    "faith and technology",
    "faith and AI",
    "Christian author AI",
    "business as mission",
    "AI for pastors",
    "Christian entrepreneur",
    "persecuted church",
    "devotional books",
    "AI ethics Christian",
    "faith driven entrepreneur",
  ],
  openGraph: {
    type: "website",
    siteName: "Mark Ross Junkans",
    locale: "en_US",
    url: "https://markrossjunkans.com",
    images: [
      {
        url: "/images/mark-headshot.png",
        width: 800,
        height: 800,
        alt: "Mark Ross Junkans, Christian author, entrepreneur, and faith and technology speaker",
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@mjunkans",
    creator: "@mjunkans",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://markrossjunkans.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://markrossjunkans.com/#website",
                  url: "https://markrossjunkans.com/",
                  name: "Mark Ross Junkans",
                  description:
                    "Christian author and entrepreneur at the intersection of faith, technology, and business as mission",
                  publisher: {
                    "@id": "https://markrossjunkans.com/#person",
                  },
                },
                {
                  "@type": "Person",
                  "@id": "https://markrossjunkans.com/#person",
                  name: "Mark Ross Junkans",
                  url: "https://markrossjunkans.com/",
                  image:
                    "https://markrossjunkans.com/images/mark-headshot.png",
                  jobTitle: "Author & Entrepreneur",
                  description:
                    "Christian author, entrepreneur, and advocate for business as mission. Partner in ventures spanning AI consultancy, international project development, the energy industry, coffee roasting, and cross-cultural Christian mission work. Speaker on faith and technology, AI ethics, and the persecuted church.",
                  sameAs: [
                    "https://www.amazon.com/stores/Mark-Ross-Junkans/author/B0GCXX63WC",
                    "https://www.linkedin.com/in/markjunkans",
                    "https://x.com/mjunkans",
                    "https://www.facebook.com/profile.php?id=61579646231991",
                    "https://advira.ai",
                  ],
                  knowsAbout: [
                    "Artificial Intelligence",
                    "Faith and Technology",
                    "Business as Mission",
                    "AI Ethics",
                    "Church Leadership",
                    "Entrepreneurship",
                    "Persecuted Church",
                    "Endurance Sports",
                    "Coffee Roasting",
                    "International Development",
                    "Petroleum Trading",
                    "Church Planting",
                    "Cross-Cultural Ministry",
                    "Daily Devotionals",
                    "Christian Writing",
                    "AI Tools for Pastors",
                    "AI Consulting",
                  ],
                  hasOccupation: [
                    {
                      "@type": "Occupation",
                      name: "Author",
                      description: "Christian author writing about faith, AI, and devotional life",
                    },
                    {
                      "@type": "Occupation",
                      name: "AI Consultant",
                      description: "Managing Partner at Advira.ai, an AI consulting and implementation firm",
                    },
                    {
                      "@type": "Occupation",
                      name: "Entrepreneur",
                      description: "Partner in ventures spanning coffee roasting, energy, international development, and Christian mission",
                    },
                  ],
                  memberOf: [
                    {
                      "@type": "Organization",
                      name: "Advira.ai",
                      url: "https://advira.ai",
                    },
                    {
                      "@type": "Organization",
                      name: "CrossCM",
                      url: "https://crosscm.org",
                    },
                  ],
                },
                {
                  "@type": "Book",
                  "@id": "https://markrossjunkans.com/#book-return-of-mystery",
                  name: "The Return of Mystery: Faith In An Age of Machines",
                  author: { "@id": "https://markrossjunkans.com/#person" },
                  isbn: "978-8-2955-3249-8",
                  url: "https://www.amazon.com/Return-Mystery-Faith-Age-Machines-ebook/dp/B0GD4L9SH2",
                  image: "https://markrossjunkans.com/images/Cover Return of Mystery Kindle New.jpg",
                  description: "An exploration of faith in an age of AI, asking what happens when machines can preach, create, and seemingly think. Examines how the rise of AI might be an invitation back to wonder, awe, and mystery.",
                  genre: ["Christian Living", "Faith and Technology", "AI Ethics"],
                  bookFormat: "https://schema.org/Paperback",
                },
                {
                  "@type": "Book",
                  "@id": "https://markrossjunkans.com/#book-3verses-30days",
                  name: "3 Verses a Day: 30 Days to Deepen Your Relationship with God",
                  author: { "@id": "https://markrossjunkans.com/#person" },
                  url: "https://www.amazon.com/Verses-Day-Days-Deepen-Relationship-ebook/dp/B0FLZ7SC8P",
                  image: "https://markrossjunkans.com/images/Cover Final.jpeg",
                  description: "A simple daily devotional practice: three verses a day for 30 days. No fluff, no theological gymnastics. Just you, the Word, and space to listen.",
                  genre: ["Devotional", "Daily Devotional", "Christian Living"],
                  bookFormat: "https://schema.org/Paperback",
                },
                {
                  "@type": "Book",
                  "@id": "https://markrossjunkans.com/#book-3verses-trust",
                  name: "3 Verses a Day: Trust in God",
                  author: { "@id": "https://markrossjunkans.com/#person" },
                  url: "https://www.amazon.com/3-Verses-Day-Trust-God-ebook/dp/B0GC7X5CCM",
                  image: "https://markrossjunkans.com/images/3 Verses Trust Cover Kindle.jpg",
                  description: "A devotional on trusting God through scripture. Three verses a day exploring what the Bible says about trust, especially when life doesn't make sense.",
                  genre: ["Devotional", "Daily Devotional", "Christian Living"],
                  bookFormat: "https://schema.org/Paperback",
                },
                {
                  "@type": "Book",
                  "@id": "https://markrossjunkans.com/#book-ai-employee",
                  name: "Your AI Employee: How to Build a 24/7 Personal AI Assistant That Actually Does Things",
                  author: { "@id": "https://markrossjunkans.com/#person" },
                  url: "https://mrjbooks.lemonsqueezy.com/checkout/buy/51b84553-323c-4b00-842b-8913763c7f9a",
                  image: "https://markrossjunkans.com/images/your-ai-employee-cover.jpg",
                  description: "A step-by-step guide to building a 24/7 personal AI assistant. 12 chapters, 30 templates, zero coding required.",
                  genre: ["Technology", "AI", "Productivity"],
                  bookFormat: "https://schema.org/EBook",
                },
                {
                  "@type": "Organization",
                  "@id": "https://markrossjunkans.com/#advira",
                  name: "Advira.ai",
                  url: "https://advira.ai",
                  description: "AI consulting and implementation firm helping businesses deploy private AI systems",
                  founder: { "@id": "https://markrossjunkans.com/#person" },
                },
                {
                  "@type": "Organization",
                  "@id": "https://markrossjunkans.com/#crosscm",
                  name: "CrossCM",
                  url: "https://crosscm.org",
                  description: "Cross-cultural Christian mission organization focused on church planting and supporting the persecuted church worldwide",
                  founder: { "@id": "https://markrossjunkans.com/#person" },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script src="/analytics.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
