"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["All", "Posts", "Reels", "Branding", "Campaigns"];

interface WorkProps {
  onBookCall: () => void;
}

const workItems = [
  { industry: "Fashion", type: "Posts", label: "Instagram Post", color: "from-rose-100 to-pink-100", size: "tall" },
  { industry: "Café", type: "Branding", label: "Brand Identity", color: "from-amber-100 to-orange-100", size: "normal" },
  { industry: "Fitness", type: "Reels", label: "Reel Cover", color: "from-emerald-100 to-teal-100", size: "normal" },
  { industry: "Skincare", type: "Campaigns", label: "Campaign Visual", color: "from-violet-100 to-purple-100", size: "tall" },
  { industry: "Real Estate", type: "Posts", label: "Property Post", color: "from-blue-100 to-indigo-100", size: "normal" },
  { industry: "Lifestyle", type: "Reels", label: "Story Reel", color: "from-yellow-100 to-lime-100", size: "normal" },
  { industry: "Salon", type: "Branding", label: "Logo & Colors", color: "from-fuchsia-100 to-pink-100", size: "normal" },
  { industry: "Restaurant", type: "Campaigns", label: "Launch Campaign", color: "from-orange-100 to-red-100", size: "tall" },
  { industry: "Ecommerce", type: "Posts", label: "Product Post", color: "from-cyan-100 to-sky-100", size: "normal" },
];

export default function Work({ onBookCall }: WorkProps) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? workItems
      : workItems.filter((w) => w.type === active);

  return (
    <section id="work" className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Work that speaks
          </h2>
          <p className="mt-5 text-base text-[#555555] leading-relaxed">
            A glimpse of what we create for brands like yours.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                active === f
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white border border-[#e5e5e5] text-[#555555] hover:border-[#0a0a0a] hover:text-[#0a0a0a]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="columns-2 md:columns-3 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.industry}-${item.label}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`break-inside-avoid mb-4 bg-gradient-to-br ${item.color} border border-[#e5e5e5] rounded-2xl overflow-hidden group cursor-default ${
                item.size === "tall" ? "h-64" : "h-44"
              } relative`}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/10 to-transparent">
                <p className="text-[10px] text-[#555555] font-medium">
                  {item.industry}
                </p>
                <p className="text-xs font-semibold text-[#0a0a0a]">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-[#555555]">
            Want to see more?{" "}
            <button
              onClick={onBookCall}
              className="text-[#0a0a0a] font-medium underline underline-offset-4 hover:opacity-70 transition-opacity cursor-pointer"
            >
              Book a call →
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
