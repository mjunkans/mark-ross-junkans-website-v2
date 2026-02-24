"use client";

import { useState } from "react";
import ScrollFade from "@/components/ScrollFade";

const faqs = [
  {
    q: "I'm not tech-savvy. Will I be able to follow this?",
    a: "Absolutely. This course assumes zero technical knowledge. It's designed for pastors, not programmers. If you can watch a video and read a workbook, you're good.",
  },
  {
    q: "How long will it take to complete?",
    a: "The videos are 95 minutes total (about 1.5 hours). Watch all at once or spread it out. The workbook adds another 2-3 hours if you do all the reflection questions. Most pastors complete it in one week.",
  },
  {
    q: "Is this specific to a certain denomination?",
    a: "The course is broadly Protestant but applicable across traditions. The theological framework (imago Dei, incarnation, creation mandate) is ecumenical. Examples are adapted to various contexts.",
  },
  {
    q: "Will the course be updated as AI changes?",
    a: "Yes. The Complete version includes lifetime updates. As AI evolves, new modules, case studies, and resources will be added. You'll be notified when updates are available.",
  },
  {
    q: "Can I use this to train my staff or leadership?",
    a: "Yes. The Complete version includes PowerPoint slides and teaching guides for presenting to your team. Email mjunkans71@gmail.com for group pricing (5+ seats).",
  },
  {
    q: "What if I disagree with some of your conclusions?",
    a: "Good. The goal isn't for you to agree with everything. The goal is to equip you to think theologically about AI. Use the framework, adapt it to your context, and make it your own.",
  },
  {
    q: "Do you offer continuing education credits?",
    a: "Not currently, but exploring partnerships with seminaries and denominations. Email me if this matters to you.",
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
