import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for markrossjunkans.com. Guidelines for using content, digital products, and services from Mark Ross Junkans.",
  alternates: {
    canonical: "https://markrossjunkans.com/terms",
  },
};

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24 bg-dark-deeper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollFade>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-8">
            Terms of Use
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-10" />

          <div className="space-y-8 text-cream/70 leading-relaxed">
            <p className="text-cream/50 text-sm">
              Last updated: February 24, 2026
            </p>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using markrossjunkans.com, you agree to these
                terms. If you don&apos;t agree, please don&apos;t use the site.
                Simple enough.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Use of Content
              </h2>
              <p>
                All content on this website — including text, images, book excerpts,
                and digital products — is the intellectual property of Mark Ross
                Junkans unless otherwise noted. You&apos;re welcome to share links
                and brief quotes with attribution. Please don&apos;t reproduce,
                distribute, or sell content without written permission.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Digital Products
              </h2>
              <p>
                Digital products purchased through this site (via Lemon Squeezy) are
                for personal or organizational use as described in the product
                listing. Redistribution or resale of digital products is not
                permitted.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                External Links
              </h2>
              <p>
                This site contains links to third-party websites (Amazon, social
                media, etc.). We&apos;re not responsible for the content or
                practices of those sites.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Accuracy
              </h2>
              <p>
                We do our best to keep information current and accurate, but
                we&apos;re human. If you spot an error, let us know through the{" "}
                <a
                  href="/contact"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  contact page
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Limitation of Liability
              </h2>
              <p>
                This website and its content are provided &quot;as is.&quot; Mark
                Ross Junkans is not liable for any damages arising from the use of
                this site or its content.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">Changes</h2>
              <p>
                These terms may be updated from time to time. Continued use of the
                site constitutes acceptance of any changes.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">Contact</h2>
              <p>
                Questions?{" "}
                <a
                  href="/contact"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}
