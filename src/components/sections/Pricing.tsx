"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface PricingProps {
  onBookCall: () => void;
}

const plans = [
  {
    name: "Starter",
    tagline: "For businesses just starting out",
    price: "Starting at $X/mo",
    highlight: false,
    features: [
      "12 posts/month",
      "Captions & scheduling",
      "1 platform",
      "Basic content strategy",
      "Monthly performance report",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    tagline: "Most popular — for growing brands",
    price: "Starting at $X/mo",
    highlight: true,
    features: [
      "20 posts/month + reels",
      "Full content strategy",
      "2 platforms",
      "AI-powered content creation",
      "Bi-weekly check-ins",
      "Priority support",
    ],
    cta: "Book a Call",
  },
  {
    name: "Scale",
    tagline: "For high-volume content needs",
    price: "Custom pricing",
    highlight: false,
    features: [
      "Unlimited content",
      "Dedicated AI pipeline",
      "3+ platforms",
      "Full creative automation",
      "Weekly strategy calls",
      "Dedicated account manager",
    ],
    cta: "Contact Us",
  },
];

export default function Pricing({ onBookCall }: PricingProps) {
  return (
    <section id="pricing" className="py-28 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-5 text-base text-[#555555] leading-relaxed">
            No retainers. No surprises. Just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 border relative ${
                plan.highlight
                  ? "bg-[#0a0a0a] text-white border-[#0a0a0a] shadow-2xl scale-105"
                  : "bg-white border-[#e5e5e5]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-violet-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <p
                className={`text-sm font-medium mb-1 ${plan.highlight ? "text-white/60" : "text-[#555555]"}`}
              >
                {plan.tagline}
              </p>
              <h3
                className={`text-2xl font-bold mb-2 ${plan.highlight ? "text-white" : "text-[#0a0a0a]"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-base font-semibold mb-8 ${plan.highlight ? "text-white" : "text-[#0a0a0a]"}`}
              >
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-violet-400" : "text-emerald-500"}`}
                    />
                    <span
                      className={plan.highlight ? "text-white/80" : "text-[#555555]"}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onBookCall}
                className={`w-full py-3 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  plan.highlight
                    ? "bg-white text-[#0a0a0a] hover:bg-white/90"
                    : "bg-[#0a0a0a] text-white hover:bg-[#333]"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
