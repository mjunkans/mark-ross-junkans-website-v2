"use client";

import { useState } from "react";

export default function SpeakingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Fire-and-forget Formspree backup
    fetch("https://formspree.io/f/xdaaejvp", {
      method: "POST",
      body: fd,
      headers: { Accept: "application/json" },
    }).catch(() => {});

    try {
      const res = await fetch("https://mrj-crm.vercel.app/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          organization: fd.get("organization"),
          inquiry_type: "speaking_request",
          subject: fd.get("type") || "Speaking Request",
          message: fd.get("details") || "Speaking request submitted via website",
          event_date: fd.get("date") || null,
          audience_size: fd.get("audience") || null,
          topic_requested: fd.get("type") || null,
          metadata: {
            format: fd.get("format") || null,
            request_type: fd.get("type") || null,
            audience_size: fd.get("audience") || null,
          },
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your request has been submitted. We'll be in touch soon.");
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
        <label htmlFor="organization" className="block text-sm font-medium text-cream/80 mb-2">
          Organization / Church / Podcast Name
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-cream/80 mb-2">
            Type of Request
          </label>
          <select
            id="type"
            name="type"
            required
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select type...</option>
            <option value="podcast">Podcast Interview</option>
            <option value="keynote">Keynote / Conference</option>
            <option value="church">Church Service / Event</option>
            <option value="workshop">Workshop / Seminar</option>
            <option value="media">Media Interview (TV/Radio)</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-cream/80 mb-2">
            Proposed Date
          </label>
          <input
            type="text"
            id="date"
            name="date"
            placeholder="e.g., March 2026 or flexible"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="audience" className="block text-sm font-medium text-cream/80 mb-2">
            Expected Audience Size
          </label>
          <select
            id="audience"
            name="audience"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select size...</option>
            <option value="under-50">Under 50</option>
            <option value="50-200">50–200</option>
            <option value="200-500">200–500</option>
            <option value="500-1000">500–1,000</option>
            <option value="1000+">1,000+</option>
            <option value="podcast">Podcast audience</option>
          </select>
        </div>
        <div>
          <label htmlFor="format" className="block text-sm font-medium text-cream/80 mb-2">
            Format
          </label>
          <select
            id="format"
            name="format"
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select format...</option>
            <option value="in-person">In-person</option>
            <option value="virtual">Virtual / Online</option>
            <option value="hybrid">Hybrid</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-cream/80 mb-2">
          Tell us about your event or show
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Share details about your audience, topics of interest, and any other relevant information..."
          className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors resize-vertical"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-8 py-4 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.12em] uppercase transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {status !== "idle" && status !== "loading" && (
        <p className={`text-sm text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
