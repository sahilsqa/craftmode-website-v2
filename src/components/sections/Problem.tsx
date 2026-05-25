"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, DollarSign, Frown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "No time to create",
    description:
      "Running a business leaves no room for consistent content creation. Something always takes priority.",
  },
  {
    icon: TrendingDown,
    title: "Inconsistent posting",
    description:
      "Irregular posting tanks your reach, confuses your audience, and kills algorithm momentum.",
  },
  {
    icon: DollarSign,
    title: "Expensive in-house teams",
    description:
      "Hiring a full creative team — designer, writer, strategist — is out of reach for most growing businesses.",
  },
  {
    icon: Frown,
    title: "Generic agencies",
    description:
      "Most agencies recycle the same templates. Your brand deserves content built specifically for you.",
  },
];

export default function Problem() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            The Problem
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Your competitors are online every day.{" "}
            <span className="text-[#555555]">Are you?</span>
          </h2>
          <p className="mt-5 text-base text-[#555555] leading-relaxed">
            Most businesses struggle with the same problems. Craft Mode exists
            to solve all of them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-7 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-white border border-[#e5e5e5] rounded-xl flex items-center justify-center mb-5">
                  <Icon size={18} className="text-[#0a0a0a]" />
                </div>
                <h3 className="font-semibold text-[#0a0a0a] text-lg mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
