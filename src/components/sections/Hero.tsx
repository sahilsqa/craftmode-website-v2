"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  "Fashion",
  "Cafes",
  "Fitness",
  "Skincare",
  "Real Estate",
  "Salons",
  "Lifestyle",
  "Ecommerce",
  "Home Decor",
  "Restaurants",
];

const ticker = [...industries, ...industries];

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-br from-violet-50 to-indigo-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 py-24 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
          <span className="text-xs font-medium text-[#555555] uppercase tracking-widest">
            AI-Powered Creative Studio
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-[#0a0a0a] leading-[1.08] tracking-tight max-w-4xl mx-auto"
        >
          Your brand,{" "}
          <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            consistently
          </span>{" "}
          showing up.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed"
        >
          Craft Mode builds and runs your brand&apos;s content engine using
          AI-powered systems — so you stay visible, consistent, and growing.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onBookCall}
            className="bg-[#0a0a0a] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#333] transition-colors text-sm cursor-pointer"
          >
            Book a Strategy Call
          </button>
          <a
            href="#work"
            className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#0a0a0a] transition-colors group"
          >
            See Our Work
            <ArrowRight
              size={15}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>

        {/* Floating card mockups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex justify-center gap-4 flex-wrap"
        >
          {[
            { industry: "Café", type: "Instagram Post", color: "from-amber-50 to-orange-50" },
            { industry: "Fitness", type: "Reel Cover", color: "from-emerald-50 to-teal-50" },
            { industry: "Fashion", type: "Campaign", color: "from-rose-50 to-pink-50" },
            { industry: "Skincare", type: "Story", color: "from-violet-50 to-purple-50" },
          ].map((card) => (
            <div
              key={card.industry}
              className={`bg-gradient-to-br ${card.color} border border-[#e5e5e5] rounded-2xl w-36 h-48 flex flex-col justify-end p-3 shadow-sm`}
            >
              <span className="text-[10px] text-[#555555] font-medium">
                {card.industry}
              </span>
              <span className="text-xs font-semibold text-[#0a0a0a] leading-tight">
                {card.type}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Industry marquee ticker */}
      <div className="relative overflow-hidden border-t border-[#e5e5e5] bg-[#f9f9f9] py-4">
        <div className="flex animate-marquee gap-0 w-max">
          {ticker.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-6 text-sm text-[#555555] whitespace-nowrap"
            >
              {item}
              <span className="text-[#e5e5e5]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
