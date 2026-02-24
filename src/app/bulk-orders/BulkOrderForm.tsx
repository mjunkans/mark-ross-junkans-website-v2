"use client";

import { useState } from "react";

export default function BulkOrderForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // Fire-and-forget Formspree backup
    fetch("https://formspree.io/f/xeeeadbw", {
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
          inquiry_type: "bulk_order",
          subject: "Bulk order: " + (fd.get("quantity") || "") + " copies",
          message: (fd.get("usage") as string) || "Bulk order inquiry submitted via website",
          metadata: {
            quantity: fd.get("quantity") || null,
            timeline: fd.get("timeline") || null,
          },
        }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMessage("Thank you! Your request has been submitted. We'll be in touch soon with a quote.");
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
            Name
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
          Church / Organization Name
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
          <label htmlFor="quantity" className="block text-sm font-medium text-cream/80 mb-2">
            Estimated Quantity
          </label>
          <select
            id="quantity"
            name="quantity"
            required
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select quantity...</option>
            <option value="10-24">10-24 copies</option>
            <option value="25-49">25-49 copies</option>
            <option value="50-99">50-99 copies</option>
            <option value="100-249">100-249 copies</option>
            <option value="250+">250+ copies</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-cream/80 mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            className="w-full px-4 py-3 bg-dark-card border border-dark-border text-cream focus:border-gold focus:outline-none transition-colors"
          >
            <option value="">Select timeline...</option>
            <option value="asap">As soon as possible</option>
            <option value="2-4-weeks">2-4 weeks</option>
            <option value="1-2-months">1-2 months</option>
            <option value="3-months+">3+ months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="usage" className="block text-sm font-medium text-cream/80 mb-2">
          How will you use the books?
        </label>
        <textarea
          id="usage"
          name="usage"
          rows={4}
          placeholder="Tell us about your small group, sermon series, or other plans for using the book..."
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
