"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/blog", label: "Blog" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-dark-deeper border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile hamburger */}
        <div className="flex justify-center md:hidden pt-4 pb-4">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-cream/70 hover:text-gold transition-colors p-2"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block pt-6 pb-6">
          <ul className="flex justify-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs font-medium tracking-[0.12em] uppercase transition-colors ${
                    pathname === link.href
                      ? "text-gold"
                      : "text-cream/70 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-6 animate-fade-in">
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-sm font-medium tracking-[0.1em] uppercase transition-colors ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream/70 hover:text-gold"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Gold accent line */}
      <div className="gold-line" />
    </header>
  );
}
