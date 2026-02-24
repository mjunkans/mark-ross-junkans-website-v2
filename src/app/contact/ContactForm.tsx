"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Fire-and-forget Formspree backup
    fetch("https://formspree.io/f/xwvvlzjo", {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    }).catch(() => {});

    try {
      const subjectValue = fd.get("subject") as string;
      const inquiryTypeMap: Record<string, string> = {
        general: "general_contact",
        book_feedback: "book_feedback",
        speaking: "speaking_request",
        media: "media_inquiry",
        bulk_order: "bulk_order",
        other: "general_contact",
      };

      const res = await fetch("https://mrj-crm.vercel.app/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          subject: subjectValue,
          inquiry_type: inquiryTypeMap[subjectValue] || "general_contact",
          message: fd.get("message"),
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your message has been sent. I'll be in touch soon.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cream/80 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cream/80 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-cream/80 mb-2">
          Subject
        </label>
        <select
          id="subject"
          name="subject"
          className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
        >
          <option value="general">General question</option>
          <option value="book_feedback">Book feedback or review</option>
          <option value="speaking">Speaking inquiry</option>
          <option value="media">Media / Press</option>
          <option value="bulk_order">Bulk order question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-cream/80 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="What would you like to talk about?"
          required
          className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors resize-vertical"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status !== "idle" && status !== "loading" && (
        <p className={`text-sm text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
