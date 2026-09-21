"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { siteInfo } from "@/lib/data";
import GlowingMoon from "./GlowingMoon";
import ShootingStars from "./ShootingStars";

const StarField = dynamic(() => import("./StarField"), { ssr: false });
const ZodiacWheel = dynamic(() => import("./ZodiacWheel"), { ssr: false });

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-purple-gradient"
    >
      <StarField />
      <ShootingStars />
      <div className="pointer-events-none absolute inset-0 bg-radial-fade" />

      {/* Zodiac wheel backdrop */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 sm:opacity-60">
        <ZodiacWheel size={680} />
      </div>

      {/* Floating moon */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden sm:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlowingMoon size={110} />
      </motion.div>

      {/* Floating "planets" */}
      <motion.div
        className="pointer-events-none absolute left-[10%] top-[28%] h-8 w-8 rounded-full opacity-70 sm:h-14 sm:w-14"
        style={{
          background: "radial-gradient(circle at 35% 30%, #E8B4E0, #6B2D6B 70%)",
          boxShadow: "0 0 30px rgba(107,45,107,0.6)",
        }}
        animate={{ y: [0, -26, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute bottom-[16%] left-[16%] h-6 w-6 rounded-full opacity-60 sm:h-10 sm:w-10"
        style={{
          background: "radial-gradient(circle at 35% 30%, #FFDF8C, #9C7A22 70%)",
          boxShadow: "0 0 25px rgba(212,175,55,0.55)",
        }}
        animate={{ y: [0, 22, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow mb-5 text-xs font-semibold uppercase text-gold-soft/90 sm:text-sm"
        >
          নিউমেরোলজি · কুণ্ডলী · প্রতিকার
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="pt-8 section-heading text-gradient-gold text-4xl font-bold leading-tight drop-shadow-[0_2px_25px_rgba(212,175,55,0.35)] sm:text-6xl md:text-7xl"
        >
          {siteInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-moon/85 sm:text-lg md:text-xl"
        >
          {siteInfo.tagline} — জন্মকুণ্ডলীর নিখুঁত বিশ্লেষণ, বিবাহ মিলন, বাস্তু ও
          গ্রহ শান্তির মাধ্যমে দুই দশকেরও বেশি সময় ধরে হাজারো মানুষের জীবনে
          আলোর দিশারী।
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#booking"
            className="focus-gold rounded-full bg-gold-gradient px-8 py-3.5 text-base font-semibold text-void shadow-gold-glow-lg transition-transform hover:scale-105"
          >
            পরামর্শ বুক করুন
          </a>
          <a
            href="#about"
            className="focus-gold rounded-full border border-gold/40 px-8 py-3.5 text-base font-semibold text-gold-soft transition-colors hover:bg-gold/10"
          >
            বিস্তারিত জানুন
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center gap-2 text-gold-soft/70"
        >
          <span className="text-xs tracking-widest">নিচে স্ক্রল করুন</span>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}
