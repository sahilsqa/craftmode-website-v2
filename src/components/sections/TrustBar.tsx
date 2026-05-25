"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "Posts per month" },
  { value: "3×", label: "Average reach growth" },
  { value: "100%", label: "On-brand content" },
  { value: "0", label: "Missed deadlines" },
];

const industries = [
  { label: "Fashion", emoji: "👗" },
  { label: "F&B", emoji: "☕" },
  { label: "Fitness", emoji: "💪" },
  { label: "Salons", emoji: "✂️" },
  { label: "Skincare", emoji: "🌿" },
  { label: "Real Estate", emoji: "🏠" },
  { label: "Lifestyle", emoji: "✨" },
  { label: "Ecommerce", emoji: "📦" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#f9f9f9] border-y border-[#e5e5e5] py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-black text-[#0a0a0a] leading-none tracking-tight">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-[#555555] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#e5e5e5] mb-10" />

        {/* Industry pills */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-[#555555] uppercase tracking-widest font-medium mb-8 text-center"
        >
          Trusted by growing brands across industries
        </motion.p>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2 bg-white border border-[#e5e5e5] rounded-full px-4 py-2 text-sm font-medium text-[#0a0a0a]"
            >
              <span>{item.emoji}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
