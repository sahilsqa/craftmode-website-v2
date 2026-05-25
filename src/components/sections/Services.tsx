"use client";

import { motion } from "framer-motion";
import { Calendar, Sparkles, Zap, Star } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Social Media Management",
    description:
      "Consistent content creation and publishing across your platforms. We handle the strategy, scheduling, and execution — every single week.",
    gradient: "from-blue-50 to-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    icon: Sparkles,
    title: "AI-Assisted Content Creation",
    description:
      "Posts, reels, captions, and campaigns — produced at speed with AI and refined by our creative team. Quality without compromise.",
    gradient: "from-violet-50 to-purple-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Zap,
    title: "Creative Automation",
    description:
      "We build workflows that remove the manual, repetitive effort from content creation — without ever sacrificing your brand quality.",
    gradient: "from-amber-50 to-orange-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Star,
    title: "Brand Positioning",
    description:
      "We help you present your business professionally and memorably online — with a consistent voice, aesthetic, and presence that builds trust.",
    gradient: "from-emerald-50 to-teal-50",
    iconColor: "text-emerald-600",
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            What Craft Mode delivers
          </h2>
          <p className="mt-5 text-base text-[#555555] leading-relaxed">
            A complete content system — not just posts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${s.gradient} border border-[#e5e5e5] rounded-2xl p-8 cursor-default`}
              >
                <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Icon size={20} className={s.iconColor} />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
