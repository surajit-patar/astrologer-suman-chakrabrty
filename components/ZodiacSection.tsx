"use client";

import { motion } from "framer-motion";
import { zodiacSigns } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function ZodiacSection() {
  return (
    <section id="zodiac" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            দ্বাদশ রাশি
          </p>
          <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-10">
            আপনার রাশি খুঁজে নিন
          </h2>
          <p className="mt-4 text-moon/75">
            প্রতিটি রাশির নিজস্ব স্বভাব ও গ্রহের প্রভাব রয়েছে। কার্ডের উপর
            মাউস নিয়ে গেলে বিস্তারিত তথ্য দেখুন।
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {zodiacSigns.map((sign, i) => (
            <ScrollReveal key={sign.en} delay={(i % 6) * 0.06} y={20}>
              <motion.div
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="glass-card group relative flex aspect-[3/4] cursor-default flex-col items-center justify-center overflow-hidden rounded-2xl p-4 text-center"
              >
                <div className="absolute inset-0 bg-gold-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-[0.08]" />
                <span
                  className="text-3xl text-gold-soft transition-transform duration-300 group-hover:scale-125 group-hover:text-gold-glow sm:text-4xl"
                  aria-hidden="true"
                >
                  {sign.symbol}
                </span>
                <h3 className="section-heading mt-3 text-base font-semibold text-moon sm:text-lg">
                  {sign.bn}
                </h3>
                <p className="mt-1 text-[11px] text-moon/55">{sign.dates}</p>

                <div className="mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100">
                  <p className="text-[11px] text-gold-soft/90">{sign.element} রাশি</p>
                  <p className="mt-1 text-[11px] text-moon/70">{sign.trait}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
