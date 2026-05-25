"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const industries = [
  "Fashion",
  "Café / Restaurant",
  "Fitness",
  "Salon / Beauty",
  "Skincare",
  "Real Estate",
  "Lifestyle",
  "Ecommerce",
  "Home Decor",
  "Other",
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    business: "",
    email: "",
    industry: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated submit — wire to Formspree or email service later
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => setSubmitted(false), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-[#0a0a0a]">
                      Book a Strategy Call
                    </h2>
                    <p className="text-sm text-[#555555] mt-1">
                      Tell us about your business — we&apos;ll be in touch
                      within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-[#555555] hover:text-[#0a0a0a] transition-colors mt-1 cursor-pointer"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-[#555555] block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="Alex Johnson"
                          className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#aaa] focus:outline-none focus:border-[#0a0a0a] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-[#555555] block mb-1.5">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.business}
                          onChange={(e) =>
                            setForm({ ...form, business: e.target.value })
                          }
                          placeholder="Your Business"
                          className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#aaa] focus:outline-none focus:border-[#0a0a0a] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#555555] block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        placeholder="hello@yourbrand.com"
                        className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#aaa] focus:outline-none focus:border-[#0a0a0a] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#555555] block mb-1.5">
                        Industry
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) =>
                          setForm({ ...form, industry: e.target.value })
                        }
                        className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] focus:outline-none focus:border-[#0a0a0a] transition-colors bg-white appearance-none cursor-pointer"
                      >
                        <option value="">Select your industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium text-[#555555] block mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        placeholder="Tell us about your goals or what you're struggling with..."
                        className="w-full border border-[#e5e5e5] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder:text-[#aaa] focus:outline-none focus:border-[#0a0a0a] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0a0a0a] text-white font-medium py-3.5 rounded-full hover:bg-[#333] transition-colors text-sm mt-2 disabled:opacity-60 cursor-pointer"
                    >
                      {loading ? "Sending..." : "Book Strategy Call"}
                    </button>

                    <p className="text-center text-xs text-[#aaa]">
                      No commitment required. We&apos;ll respond within 24
                      hours.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
                      <span className="text-2xl">✓</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0a0a0a] mb-2">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed max-w-xs mx-auto">
                      We&apos;ve received your message and will be in touch
                      within 24 hours to schedule your strategy call.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 bg-[#0a0a0a] text-white font-medium px-8 py-3 rounded-full hover:bg-[#333] transition-colors text-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
