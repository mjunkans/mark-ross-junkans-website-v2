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
    default: "Mark Ross Junkans — Author. Entrepreneur. Restless Thinker.",
    template: "%s | Mark Ross Junkans",
  },
  description:
    "Mark Ross Junkans writes about faith, AI, and the stuff that keeps him up at night. Author of The Return of Mystery, AI consultant, coffee roaster, and restless thinker.",
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
        alt: "Mark Ross Junkans",
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
                    "Author, entrepreneur, and restless thinker at the intersection of faith, technology, and business",
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
                    "Entrepreneur, author, and advocate for business as mission. Partner in ventures spanning AI consultancy, international project development, the energy industry, coffee roasting, and Christian mission work.",
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
                  ],
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
