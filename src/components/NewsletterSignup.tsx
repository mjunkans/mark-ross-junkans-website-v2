"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  heading?: string;
  className?: string;
  variant?: "default" | "compact";
}

export default function NewsletterSignup({
  heading = "Stay in the loop",
  className = "",
  variant = "default",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Fire-and-forget Formspree backup
    const formData = new FormData();
    formData.append("email", email);
    fetch("https://formspree.io/f/xwvvlzjo", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    }).catch(() => {});

    try {
      const res = await fetch("https://mrj-crm.vercel.app/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setMessage(result.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (variant === "compact") {
    return (
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-3 bg-dark-card border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors text-sm"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors disabled:opacity-50"
          >
            {status === "loading" ? "..." : "Subscribe"}
          </button>
        </form>
        {status !== "idle" && status !== "loading" && (
          <p className={`mt-2 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-dark-card border border-dark-border p-8 md:p-12 relative overflow-hidden">
          {/* Gold accent */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-playfair text-xl md:text-2xl text-cream mb-2">
                {heading}
              </h3>
              <p className="text-warm-gray text-sm">
                Occasional emails about faith, tech, and whatever I&apos;m thinking about.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="px-4 py-3 bg-dark border border-dark-border text-cream placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors text-sm min-w-[250px]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-gold hover:bg-gold-light text-dark-deeper font-semibold text-xs tracking-[0.1em] uppercase transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {status === "loading" ? "Subscribing..." : "Sign Up"}
              </button>
            </form>
          </div>

          {status !== "idle" && status !== "loading" && (
            <p className={`mt-4 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
