"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteInfo } from "@/lib/data";
import { useCosmicMode } from "./CosmicModeContext";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useCosmicMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-card-strong py-2 shadow-gold-glow"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#hero"
          className="focus-gold flex items-center gap-2 font-display text-lg font-bold text-gradient-gold sm:text-xl"
        >
          {/* <span aria-hidden="true" className="text-2xl">✦</span> */}
          {siteInfo.shortName}
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="প্রধান মেনু">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-gold text-sm tracking-wide text-moon/80 transition-colors hover:text-gold-glow"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* <button
            onClick={toggleMode}
            aria-label={mode === "dark" ? "লাইট কসমিক মোডে যান" : "ডার্ক কসমিক মোডে যান"}
            className="focus-gold hidden h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold-soft transition-colors hover:bg-gold/10 sm:flex"
          >
            {mode === "dark" ? "☀" : "☾"}
          </button> */}
          <a
            href="#booking"
            className="focus-gold hidden rounded-full bg-gold-gradient px-5 py-2 text-sm font-semibold text-void shadow-gold-glow transition-transform hover:scale-105 md:inline-block"
          >
            অ্যাপয়েন্টমেন্ট নিন
          </a>
          <button
            className="focus-gold flex h-9 w-9 items-center justify-center rounded-full border border-gold/30 text-gold-soft lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={open}
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="glass-card-strong overflow-hidden lg:hidden"
            aria-label="মোবাইল মেনু"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="focus-gold rounded-md px-2 py-3 text-base text-moon/85 transition-colors hover:bg-gold/10 hover:text-gold-glow"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="focus-gold mt-2 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-semibold text-void"
              >
                অ্যাপয়েন্টমেন্ট নিন
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
