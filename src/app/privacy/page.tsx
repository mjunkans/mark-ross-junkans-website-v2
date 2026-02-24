import type { Metadata } from "next";
import ScrollFade from "@/components/ScrollFade";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for markrossjunkans.com. How your information is collected, used, and protected on Mark Ross Junkans' website.",
  alternates: {
    canonical: "https://markrossjunkans.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 md:py-24 bg-dark-deeper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollFade>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream font-medium mb-8">
            Privacy Policy
          </h1>
          <div className="w-16 h-[2px] bg-gold mb-10" />

          <div className="space-y-8 text-cream/70 leading-relaxed">
            <p className="text-cream/50 text-sm">
              Last updated: February 24, 2026
            </p>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">Overview</h2>
              <p>
                This website (markrossjunkans.com) is the personal website of Mark
                Ross Junkans. Your privacy matters. This policy explains what
                information is collected and how it&apos;s used.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Information Collected
              </h2>
              <p className="mb-3">
                <strong className="text-cream">Contact forms:</strong> When you
                submit a contact or speaking request form, we collect your name,
                email address, and message content. This information is used solely
                to respond to your inquiry.
              </p>
              <p className="mb-3">
                <strong className="text-cream">Newsletter signup:</strong> If you
                subscribe to the newsletter, we collect your email address to send
                you updates about new books, writing, and events.
              </p>
              <p>
                <strong className="text-cream">Analytics:</strong> This site may
                use basic analytics to understand traffic patterns (pages visited,
                general location). No personally identifiable information is
                collected through analytics.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                How Information Is Used
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To respond to your inquiries and requests</li>
                <li>To send newsletter updates (only if you subscribe)</li>
                <li>To improve the website experience</li>
              </ul>
              <p className="mt-3">
                Your information is never sold to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Third-Party Services
              </h2>
              <p>
                Form submissions are processed through Formspree. Purchases are
                handled through Lemon Squeezy and Amazon, each with their own
                privacy policies. We encourage you to review their policies when
                making purchases.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">Cookies</h2>
              <p>
                This site uses minimal cookies necessary for basic functionality.
                No tracking cookies are used for advertising purposes.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">
                Unsubscribing
              </h2>
              <p>
                You can unsubscribe from the newsletter at any time by clicking the
                unsubscribe link in any email, or by contacting us directly.
              </p>
            </div>

            <div>
              <h2 className="font-playfair text-xl text-cream mb-3">Contact</h2>
              <p>
                Questions about this policy? Reach out via the{" "}
                <a
                  href="/contact"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  contact page
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
