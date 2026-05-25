"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Onboarding",
    description:
      "We learn your brand — your voice, audience, goals, aesthetic, and what makes your business unique.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We build a content plan tailored to your platforms, business objectives, and audience behaviour.",
  },
  {
    number: "03",
    title: "Creation",
    description:
      "AI-powered content production at speed — posts, reels, captions — reviewed and refined by our team.",
  },
  {
    number: "04",
    title: "Approval",
    description:
      "You review everything before it goes live. Your brand, your standards — we just do the heavy lifting.",
  },
  {
    number: "05",
    title: "Publishing",
    description:
      "Scheduled, consistent posting across your channels. Optimised for each platform and time slot.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Simple. Systematic. Scalable.
          </h2>
          <p className="mt-5 text-base text-[#555555] leading-relaxed">
            From onboarding to consistent growth — here&apos;s exactly what
            happens.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-[#e5e5e5] hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-8 items-start relative"
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-white border border-[#e5e5e5] rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-xs font-bold text-[#0a0a0a]">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div className="pt-2">
                  <h3 className="font-semibold text-[#0a0a0a] text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#555555] leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>

                {/* Large background number */}
                <span className="absolute right-0 top-0 text-[80px] font-black text-[#f0f0f0] leading-none select-none hidden lg:block">
                  {step.number}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
