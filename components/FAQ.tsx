"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-3 text-xs font-semibold uppercase text-gold-soft/80">
            প্রশ্নোত্তর
          </p>
          <h2 className="section-heading text-gradient-gold text-3xl font-bold sm:text-4xl md:text-5xl pt-6">
            সাধারণ জিজ্ঞাসা
          </h2>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.05}>
                <div className="glass-card overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="focus-gold flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className="section-heading font-semibold text-gold-soft">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold-soft"
                      aria-hidden="true"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-moon/75">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
