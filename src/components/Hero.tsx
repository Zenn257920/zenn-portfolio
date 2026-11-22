"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Profile } from "@/lib/types";
import { stagger, fadeUp, wordStagger, wordRise } from "@/components/Reveal";

const GREETINGS = ["Mingalaba", "Hello", "Hola"];

export default function Hero({ profile }: { profile: Profile }) {
  const [greet, setGreet] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setGreet((g) => (g + 1) % GREETINGS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20">
      {/* No initial="hidden": the hero is above the fold, so its content
          must be visible on first paint instead of blank until hydration
          finishes the entrance animation. */}
      <motion.div
        variants={stagger}
        animate="show"
        className="mx-auto grid max-w-[980px] gap-10 px-5 md:grid-cols-[1fr_220px] md:gap-6 md:px-8"
      >
        <div className="text-left">
          {/* Available pill */}
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-sm font-medium shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] dark:bg-[#4ADE80] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#16A34A] dark:bg-[#4ADE80]" />
            </span>
            <span className="text-[#16A34A] dark:text-[#4ADE80]">Available</span>
          </motion.p>

          {/* Rotating greeting */}
          <motion.p
            variants={fadeUp}
            className="mt-8 h-7 text-lg font-medium text-ink-faint dark:text-[#A3A3A3]"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={greet}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {GREETINGS[greet]} 👋
              </motion.span>
            </AnimatePresence>
          </motion.p>

          {/* H1 — words rise one by one, like Zolt's staggered intro.
              pr on mobile keeps the lines clear of the hanging badge, which
              sits top-right beside the heading; full width again from md. */}
          <motion.h1
            variants={wordStagger}
            className="mt-2 pr-[150px] font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl md:pr-0 md:text-7xl dark:text-[#F0F0F0]"
          >
            {["I", "am", "Kaung"].map((w) => (
              <span key={w} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span variants={wordRise} className="inline-block">
                  {w}&nbsp;
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                aria-hidden
                variants={wordRise}
                className="inline-block"
                animate={{ rotate: [0, 14, -8, 14, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
              >
                👋
              </motion.span>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-medium text-ink-faint md:text-2xl dark:text-[#A3A3A3]"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg dark:text-[#C2C2C2]"
          >
            {profile.title} based in Yangon. I don&apos;t just build interfaces — I
            own the experience, from the first sketch to the final shipped
            product: responsive, reusable and user-friendly, written with clean,
            maintainable code.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-3">
            <motion.a
              href="/cv"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
            >
              Download CV ↓
            </motion.a>
            {/* Zolt style: white pill with an accent dot, not a dark fill */}
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-accent" />
              Let&apos;s connect →
            </motion.a>
          </motion.div>
        </div>

        {/* Hanging ID badge — measured live from the sample (desktop 220×290,
            mobile ~100×135 from the user's video): a single flat strap
            #333333, 16px wide on desktop, with a silver capsule clip
            (19×35, #9797A0, dark pin) overlapping the orange strip and the
            photo top; photo fills the card edge-to-edge, no border, no text.
            Motion is a gentle vertical bob (audit: ~42px peak-to-peak, tilt
            0°) — the strap's top disappears above the fold as it floats up.
            The strap and clip MUST live outside the overflow-hidden card or
            they get clipped (that was the old bug: the lanyard was invisible). */}
        <motion.div
          variants={fadeUp}
          className="absolute right-14 top-0 flex w-[104px] justify-center md:static md:mx-0 md:w-[220px] md:justify-end"
        >
          <motion.div
            initial={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
          >
            <motion.div
              animate={{ y: [0, -32, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <span aria-hidden className="h-[88px] w-2.5 bg-[#333333] md:h-[150px] md:w-4" />
              <span
                aria-hidden
                className="relative z-10 -mb-[19px] flex h-[35px] w-[19px] items-center justify-center rounded-full bg-[#9797A0] shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#313131]" />
              </span>
              <div className="relative h-[136px] w-[104px] overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/10 md:h-[290px] md:w-[220px] dark:bg-night-card">
                <span aria-hidden className="absolute left-0 right-0 top-0 z-10 h-2 bg-accent" />
                <Image
                  src="/api/photo"
                  alt="Portrait of Kaung Htet Zan Thar"
                  fill
                  priority
                  sizes="(max-width: 768px) 104px, 220px"
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
