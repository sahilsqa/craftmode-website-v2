"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onBookCall: () => void;
}

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar({ onBookCall }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white border-b border-[#e5e5e5]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#0a0a0a] font-bold text-xl tracking-tight"
        >
          Craft Mode
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-[#555555] hover:text-[#0a0a0a] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={onBookCall}
          className="hidden md:inline-flex items-center bg-[#0a0a0a] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#333] transition-colors cursor-pointer"
        >
          Book a Call
        </button>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-[#0a0a0a] cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e5e5] px-6 pb-6">
          <div className="flex flex-col gap-5 pt-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-[#555555] hover:text-[#0a0a0a] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                onBookCall();
              }}
              className="w-full bg-[#0a0a0a] text-white text-sm font-medium py-3 rounded-full hover:bg-[#333] transition-colors cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
