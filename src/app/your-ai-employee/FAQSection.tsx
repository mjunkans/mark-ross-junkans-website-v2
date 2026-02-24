"use client";

import { useState } from "react";
import ScrollFade from "@/components/ScrollFade";

const faqs = [
  {
    q: "Who wrote this, and why should I trust it?",
    a: "This book was written by Mark Junkans and the team at Advira.ai, an AI consulting and implementation firm that deploys private AI systems for businesses professionally. This isn't theory — it's the same approach we use with paying clients.",
  },
  {
    q: "Do I need to know how to code?",
    a: "No. The guide walks you through every step with exact commands to copy and paste. If you can install an app and follow instructions, you can do this.",
  },
  {
    q: "What do I need to get started?",
    a: "A computer (Mac, Windows, or Linux), an internet connection, and an API key for your preferred AI model. The book covers multiple options including Anthropic Claude, OpenAI, and others. Recommended starting budget for the API is about $25/month.",
  },
  {
    q: "What is OpenClaw?",
    a: "OpenClaw is a free, open-source AI agent platform that connects to your messaging apps and tools. It uses Claude (by Anthropic) as its brain and can actually take actions in the real world: send emails, post to social media, manage files, and more.",
  },
  {
    q: "Is my data safe?",
    a: "OpenClaw runs locally on your machine. Your data, conversations, and configurations stay on your computer. The guide includes a full chapter on privacy and security best practices.",
  },
  {
    q: "Can I use this for my business?",
    a: "Absolutely. The book covers both personal and business use cases, including client follow-ups, lead management, content creation, competitive research, and more.",
  },
  {
    q: "What messaging apps does it work with?",
    a: "WhatsApp, Discord, iMessage, Telegram, Slack, and more. The guide covers setup for each platform step by step.",
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
