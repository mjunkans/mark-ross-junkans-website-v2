import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/books", label: "Books" },
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/writing", label: "Writing" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.amazon.com/stores/Mark-Ross-Junkans/author/B0GCXX63WC",
    label: "Amazon",
  },
  {
    href: "https://www.facebook.com/profile.php?id=61579646231991",
    label: "Facebook",
  },
  { href: "https://x.com/mjunkans", label: "X" },
  {
    href: "https://www.linkedin.com/in/markjunkans",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark-deeper border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Nav links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs font-medium tracking-[0.1em] uppercase text-cream/60 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream/50 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex justify-center gap-3 text-xs text-cream/40 mb-6">
          <Link href="/privacy" className="hover:text-gold transition-colors">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms" className="hover:text-gold transition-colors">
            Terms of Use
          </Link>
          <span>|</span>
          <Link href="/contact" className="hover:text-gold transition-colors">
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-cream/30">
          &copy; 2026 Mark Ross Junkans. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
