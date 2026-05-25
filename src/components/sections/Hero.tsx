"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Bell } from "lucide-react";
import Image from "next/image";

const industries = [
  "Fashion", "Cafés", "Fitness Studios", "Skincare", "Real Estate",
  "Salons", "Lifestyle Brands", "Ecommerce", "Home Decor", "Restaurants",
  "Photography Studios", "Yoga Studios", "Pet Care", "Bakeries", "Jewellery",
  "Interior Design", "Wellness & Spa", "Events & Weddings", "Dental Clinics",
  "Business Coaches", "Hotels", "Florists", "Education", "Travel & Tourism",
  "Art Galleries", "Personal Trainers", "Law Firms", "Architects", "Startups",
];

const ticker = [...industries, ...industries];

const deliverables = [
  "30+ posts/month",
  "Reels, Stories & Posts",
  "3 platforms managed",
  "You approve before publish",
];

const scheduledPosts = [
  { src: "/assets/hero-cafe.png", platform: "IG", time: "Today, 9am", done: true },
  { src: "/assets/hero-fitness.png", platform: "TK", time: "Today, 12pm", done: true },
  { src: "/assets/hero-fashion.png", platform: "IG", time: "Tomorrow", done: false },
  { src: "/assets/hero-skincare.png", platform: "LI", time: "Wed", done: false },
  { src: "/assets/work-restaurant-campaign.png", platform: "IG", time: "Thu", done: false },
  { src: "/assets/work-real-estate.png", platform: "TK", time: "Fri", done: false },
];

const calendarWeeks = [
  [true, true, true, true, true, false, false],
  [true, true, true, true, true, false, false],
  [true, true, true, true, true, false, false],
  [true, true, true, false, false, false, false],
];

interface HeroProps {
  onBookCall: () => void;
}

export default function Hero({ onBookCall }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white pt-16">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-gradient-to-br from-violet-50 to-indigo-50 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-pink-50 to-rose-50 rounded-full blur-3xl opacity-40" />
      </div>

      {/* Split layout */}
      <div className="relative max-w-[1200px] mx-auto px-6 min-h-[calc(100vh-64px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center py-20 w-full">

          {/* ── Left: text ── */}
          <div className="text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#f9f9f9] border border-[#e5e5e5] rounded-full px-4 py-1.5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 inline-block" />
              <span className="text-xs font-medium text-[#555555] uppercase tracking-widest">
                AI-Powered Creative Studio
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-[68px] font-bold text-[#0a0a0a] leading-[1.06] tracking-tight"
            >
              Your brand,{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                consistently
              </span>{" "}
              showing up.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-[#555555] leading-relaxed max-w-md"
            >
              We handle your entire content operation — strategy, creation,
              scheduling, and publishing — so you stay visible while you
              run your business.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={onBookCall}
                className="bg-[#0a0a0a] text-white font-medium px-8 py-3.5 rounded-full hover:bg-[#333] transition-colors text-sm cursor-pointer"
              >
                Book a Strategy Call
              </button>
              <a
                href="#work"
                className="flex items-center gap-2 text-sm text-[#555555] hover:text-[#0a0a0a] transition-colors group"
              >
                See Our Work
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Deliverables — 2×2 grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 grid grid-cols-2 gap-x-8 gap-y-2.5 max-w-sm"
            >
              {deliverables.map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-[#555555]">
                  <Check size={13} className="text-violet-500 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: dashboard mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative"
          >
            {/* Floating notification — published */}
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.3 }}
              className="absolute -top-5 -right-3 z-10 bg-white border border-[#e5e5e5] rounded-2xl px-3 py-2.5 shadow-lg flex items-center gap-2.5"
            >
              <div className="w-7 h-7 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Check size={13} className="text-white" strokeWidth={3} />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#0a0a0a] leading-none">Published to Instagram</p>
                <p className="text-[10px] text-[#999] mt-0.5">Just now · 847 reached</p>
              </div>
            </motion.div>

            {/* Floating notification — queued */}
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: 1.6 }}
              className="absolute -bottom-5 -left-3 z-10 bg-white border border-[#e5e5e5] rounded-2xl px-3 py-2.5 shadow-lg flex items-center gap-2.5"
            >
              <div className="w-7 h-7 bg-violet-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Bell size={13} className="text-white" />
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#0a0a0a] leading-none">3 posts queued today</p>
                <p className="text-[10px] text-[#999] mt-0.5">Instagram · TikTok · LinkedIn</p>
              </div>
            </motion.div>

            {/* Main dashboard card */}
            <div className="bg-white border border-[#e5e5e5] rounded-2xl shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="border-b border-[#e5e5e5] bg-[#f9f9f9] px-4 py-3 flex items-center gap-3">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                </div>
                <div className="flex-1 mx-3">
                  <div className="bg-white border border-[#e5e5e5] rounded-md px-3 py-1 text-[11px] text-[#aaa] text-center">
                    app.craftmode.io — Content Dashboard
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-semibold flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  Live
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5 grid grid-cols-3 gap-4">
                {/* Calendar sidebar */}
                <div className="col-span-1 bg-[#f9f9f9] rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-[#0a0a0a]">May 2026</p>
                    <span className="text-[9px] bg-violet-100 text-violet-600 px-2 py-0.5 rounded-full font-semibold">
                      24 queued
                    </span>
                  </div>

                  {/* Day headers */}
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {["M","T","W","T","F","S","S"].map((d, i) => (
                      <div key={i} className="text-[9px] text-center text-[#aaa] font-medium">{d}</div>
                    ))}
                  </div>

                  {/* Calendar dots */}
                  {calendarWeeks.map((week, wi) => (
                    <div key={wi} className="grid grid-cols-7 gap-1 mb-1">
                      {week.map((hasPost, di) => (
                        <div key={di} className={`aspect-square rounded-sm ${hasPost ? "bg-violet-500" : "bg-[#ebebeb]"}`} />
                      ))}
                    </div>
                  ))}

                  {/* Platform breakdown */}
                  <div className="mt-4 space-y-2 border-t border-[#e5e5e5] pt-3">
                    {[
                      { platform: "Instagram", count: "12 posts", color: "bg-pink-50 text-pink-600 border-pink-200" },
                      { platform: "TikTok",    count: "8 reels",  color: "bg-slate-50 text-slate-600 border-slate-200" },
                      { platform: "LinkedIn",  count: "4 posts",  color: "bg-blue-50 text-blue-600 border-blue-200" },
                    ].map((p) => (
                      <div key={p.platform} className="flex items-center justify-between">
                        <span className="text-[10px] text-[#555555]">{p.platform}</span>
                        <span className={`text-[9px] border px-2 py-0.5 rounded-full font-semibold ${p.color}`}>{p.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Post grid */}
                <div className="col-span-2">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs font-semibold text-[#0a0a0a]">Scheduled posts</p>
                    <span className="text-[10px] text-[#555555]">Auto-publishing on</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {scheduledPosts.map((post, i) => (
                      <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden">
                        <Image src={post.src} alt={post.platform} fill className="object-cover" sizes="120px" />
                        <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm rounded-md px-1.5 py-0.5 text-[9px] font-bold text-[#0a0a0a]">
                          {post.platform}
                        </div>
                        {post.done && (
                          <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
                            <Check size={9} className="text-white" strokeWidth={3} />
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
                          <span className="text-[9px] text-white font-medium">{post.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industry marquee ticker */}
      <div className="relative overflow-hidden border-t border-[#e5e5e5] bg-[#f9f9f9] py-4">
        <div className="flex animate-marquee gap-0 w-max">
          {ticker.map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6 text-sm text-[#555555] whitespace-nowrap">
              {item}
              <span className="text-[#e5e5e5]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
