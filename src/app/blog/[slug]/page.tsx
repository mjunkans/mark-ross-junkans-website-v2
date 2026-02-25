import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollFade from "@/components/ScrollFade";
import NewsletterSignup from "@/components/NewsletterSignup";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { getCategoryDotColor } from "@/data/categories";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} – Mark Ross Junkans`,
      description: post.excerpt,
      url: `https://markrossjunkans.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://markrossjunkans.com/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="font-playfair text-2xl md:text-3xl text-cream font-medium mt-12 mb-6"
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      continue;
    } else {
      // Process inline formatting
      const parts = line.split(/(\*[^*]+\*|\*\*[^*]+\*\*)/g);
      const rendered = parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={j} className="text-cream font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("*") && part.endsWith("*")) {
          return <em key={j}>{part.slice(1, -1)}</em>;
        }
        return part;
      });

      elements.push(
        <p key={key++} className="text-cream/70 leading-relaxed mb-6">
          {rendered}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Header */}
      <section className="py-16 md:py-24 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollFade>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="flex items-center gap-2 text-gold text-xs font-semibold tracking-[0.1em] uppercase">
                <span className={`inline-block w-2 h-2 rounded-full ${getCategoryDotColor(post.category)}`} />
                {post.category}
              </span>
              <span className="text-warm-gray text-xs">
                {formatDate(post.date)}
              </span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-cream font-medium mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-cream/60 text-lg leading-relaxed">
              {post.excerpt}
            </p>
          </ScrollFade>
        </div>
      </section>

      <div className="gold-line" />

      {/* Content */}
      <article className="py-16 md:py-20 bg-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollFade>{renderContent(post.content)}</ScrollFade>
        </div>
      </article>

      {/* Back to blog */}
      <section className="py-12 bg-dark-deeper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <Link
            href="/blog"
            className="text-gold text-sm font-semibold tracking-[0.1em] uppercase hover:text-gold-light transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>

      <NewsletterSignup
        heading="Enjoyed this? Get new posts in your inbox"
        className="bg-dark"
      />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            keywords: post.category,
            author: {
              "@type": "Person",
              name: "Mark Ross Junkans",
              url: "https://markrossjunkans.com/",
            },
            publisher: {
              "@type": "Person",
              name: "Mark Ross Junkans",
              url: "https://markrossjunkans.com/",
            },
            url: `https://markrossjunkans.com/blog/${post.slug}`,
          }),
        }}
      />
    </>
  );
}
