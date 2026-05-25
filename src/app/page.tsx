"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Work from "@/components/sections/Work";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onBookCall={() => setContactOpen(true)} />
      <main>
        <Hero onBookCall={() => setContactOpen(true)} />
        <TrustBar />
        <Problem />
        <Services />
        <Process />
        <Work onBookCall={() => setContactOpen(true)} />
        <Pricing onBookCall={() => setContactOpen(true)} />
        <FAQ />
        <FinalCTA onBookCall={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </>
  );
}
