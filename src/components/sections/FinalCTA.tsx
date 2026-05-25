"use client";

import { motion } from "framer-motion";

interface FinalCTAProps {
  onBookCall: () => void;
}

export default function FinalCTA({ onBookCall }: FinalCTAProps) {
  return (
    <section className="py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-violet-900/40 to-indigo-900/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-6">
            Get Started
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ready to grow your brand —{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              consistently?
            </span>
          </h2>
          <p className="mt-6 text-base text-white/60 max-w-lg mx-auto">
            Join the brands that are showing up every day. Let Craft Mode handle
            the content while you run the business.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3">
            <button
              onClick={onBookCall}
              className="bg-white text-[#0a0a0a] font-semibold px-10 py-4 rounded-full hover:bg-white/90 transition-colors text-base cursor-pointer"
            >
              Book Your Free Strategy Call
            </button>
            <p className="text-xs text-white/40">
              No commitment required. 30-minute call.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
