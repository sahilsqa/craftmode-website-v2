"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const filters = ["All", "Posts", "Reels", "Branding", "Campaigns"];

interface WorkProps {
  onBookCall: () => void;
}

const workItems = [
  { industry: "Fashion", type: "Posts", label: "Instagram Post", size: "tall", src: "/assets/work-fashion-post.png" },
  { industry: "Café", type: "Branding", label: "Brand Identity", size: "normal", src: "/assets/work-cafe-branding.png" },
  { industry: "Fitness", type: "Reels", label: "Reel Cover", size: "normal", src: "/assets/work-fitness-reel.png" },
  { industry: "Skincare", type: "Campaigns", label: "Campaign Visual", size: "tall", src: "/assets/work-skincare-campaign.png" },
  { industry: "Real Estate", type: "Posts", label: "Property Post", size: "normal", src: "/assets/work-real-estate.png" },
  { industry: "Lifestyle", type: "Reels", label: "Story Reel", size: "normal", src: "/assets/work-lifestyle.png" },
  { industry: "Salon", type: "Branding", label: "Logo & Colors", size: "normal", src: "/assets/work-salon-branding.png" },
  { industry: "Restaurant", type: "Campaigns", label: "Launch Campaign", size: "tall", src: "/assets/work-restaurant-campaign.png" },
  { industry: "Ecommerce", type: "Posts", label: "Product Post", size: "normal", src: "/assets/work-ecommerce-product.png" },
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
              className={`break-inside-avoid mb-4 border border-[#e5e5e5] rounded-2xl overflow-hidden group cursor-default ${
                item.size === "tall" ? "h-64" : "h-44"
              } relative`}
            >
              <Image
                src={item.src}
                alt={`${item.industry} ${item.label}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-[10px] text-white/80 font-medium">
                  {item.industry}
                </p>
                <p className="text-xs font-semibold text-white">
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
