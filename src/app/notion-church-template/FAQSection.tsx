"use client";

import { useState } from "react";
import ScrollFade from "@/components/ScrollFade";

const faqs = [
  {
    q: "I've never used Notion. Will this be too complicated?",
    a: "There is a learning curve to Notion, but the template does most of the work for you. The setup instructions walk you through everything step-by-step. If you can use Google Sheets, you can use this.",
  },
  {
    q: "Do I need a paid Notion account?",
    a: "Not necessarily. Notion's free plan works for solo pastors. If you have a team (staff, volunteers), you'll want Notion's Team plan ($8-10/user/month). The template works with either.",
  },
  {
    q: "Can I customize the template for my church's specific needs?",
    a: "Absolutely. The template is fully customizable. Add fields, change views, rename things. It's yours. The setup guide includes tips for common customizations.",
  },
  {
    q: "What if my church uses a different system (Planning Center, ChurchTrac, etc.)?",
    a: "This template is best for churches that don't already have a robust church management system. If you're frustrated with piecemeal tools or expensive ChMS subscriptions, this is a great alternative.",
  },
  {
    q: "Can multiple staff members use this template?",
    a: "Yes. You can share the Notion workspace with your staff. Each person can have their own views and filters.",
  },
  {
    q: "How do I get the template?",
    a: "After purchase, you'll receive a link to duplicate the template into your own Notion workspace. It takes about 5 minutes to duplicate, then 20-30 minutes to customize with your church's info.",
  },
  {
    q: "Will this integrate with my church's giving platform or website?",
    a: "Not directly. Notion has limited integrations compared to dedicated ChMS platforms. This template is best for internal church management. You can manually input data or use Zapier for basic automation.",
  },
  {
    q: "What if Notion changes and breaks the template?",
    a: "If you purchase the Complete version, you get lifetime updates. If Notion makes breaking changes, I'll update the template and notify you.",
  },
  {
    q: "Can I get a refund if it doesn't work for me?",
    a: "Yes. 30-day money-back guarantee. Try it. If it's not a fit, email me.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-dark-deeper">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollFade>
          <h2 className="font-playfair text-2xl md:text-3xl text-cream font-medium text-center mb-12">
            Frequently Asked Questions
          </h2>
        </ScrollFade>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <ScrollFade key={i} delay={i * 50}>
              <div className="border-b border-dark-border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left"
                >
                  <span className="text-cream font-semibold text-sm pr-8">
                    {faq.q}
                  </span>
                  <span className="text-gold text-xl flex-shrink-0">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <p className="text-cream/60 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </p>
                )}
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
