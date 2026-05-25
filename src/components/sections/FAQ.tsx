"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How does the onboarding process work?",
    a: "Once you sign up, we schedule a brand discovery call where we learn everything about your business — your goals, audience, tone of voice, aesthetic, and competitors. From there, we build your content strategy before producing a single piece of content.",
  },
  {
    q: "What industries do you specialise in?",
    a: "We work across fashion, food & beverage, fitness, salons, skincare, real estate, lifestyle, home decor, and ecommerce. If visual content and consistent branding matter to your business, we can help.",
  },
  {
    q: "Do I need to provide my own content or images?",
    a: "Not necessarily. We use AI-powered creative tools and can generate high-quality visuals for most content types. However, if you have brand photography or product shots you'd like us to use, we'll incorporate them.",
  },
  {
    q: "How are approvals handled?",
    a: "We send you a monthly content calendar before anything goes live. You review, leave feedback, and approve. Nothing gets published without your sign-off.",
  },
  {
    q: "How quickly will I see results?",
    a: "Consistency is what drives results on social media. Most clients start seeing meaningful engagement growth within 60–90 days. Brand perception improvements are often visible much sooner.",
  },
  {
    q: "What platforms do you manage?",
    a: "We primarily work with Instagram, TikTok, LinkedIn, and Facebook. Your plan determines how many platforms are included.",
  },
  {
    q: "Can I cancel or change my plan?",
    a: "Yes. We don't lock you into long-term contracts. Plans can be upgraded, downgraded, or cancelled with 30 days notice.",
  },
  {
    q: "What makes Craft Mode different from a traditional agency?",
    a: "Speed, systems, and leverage. We use AI to produce content faster, at higher volume, and with more consistency than traditional agencies — at a fraction of the cost. We're not freelancers, and we're not a generic content farm. We're a creative operating system built around your brand.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 bg-[#f9f9f9] border-t border-[#e5e5e5]">
      <div className="max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-[#555555] uppercase tracking-widest font-medium mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] leading-tight">
            Got questions?
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 cursor-pointer"
              >
                <span className="font-medium text-[#0a0a0a] text-sm leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-[#555555]">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-[#555555] leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
