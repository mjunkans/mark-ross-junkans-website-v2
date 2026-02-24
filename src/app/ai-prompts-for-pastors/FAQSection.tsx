"use client";

import { useState } from "react";
import ScrollFade from "@/components/ScrollFade";

const faqs = [
  {
    q: "I'm not tech-savvy. Will this be too complicated?",
    a: "If you can copy and paste, you can use these prompts. That's literally it. No coding, no complex setup.",
  },
  {
    q: "Do I need to pay for ChatGPT Plus or other premium AI tools?",
    a: "Nope. These prompts work with free versions of ChatGPT, Claude, and other AI tools. Premium accounts give you more speed and features, but they're not required.",
  },
  {
    q: "Will the outputs sound like me, or like a robot?",
    a: "The prompts are designed to give you a strong starting point in a neutral pastoral voice. You'll always add your own voice and context. Think of it like an intern who writes a solid first draft for you to refine.",
  },
  {
    q: "Is it ethical to use AI for sermon prep?",
    a: "AI is a tool, like a concordance or commentary. But let's be clear: AI should never take the place of thoughtful preparation and pastoral ministry. What AI can do is free you to focus on what's most important. The guide includes a full section on ethical use and boundaries.",
  },
  {
    q: 'How is this different from just Googling "ChatGPT prompts for pastors"?',
    a: "Generic prompts give generic results. These are tested, refined, and designed specifically for Protestant pastoral ministry contexts. They're also organized by task so you can find what you need fast.",
  },
  {
    q: "What AI tools do I need?",
    a: "At minimum, a free ChatGPT account. The prompts also work with Claude, Google Gemini, and similar tools. The guide includes setup instructions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-dark">
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
