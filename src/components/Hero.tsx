"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Profile } from "@/lib/types";
import { stagger, fadeUp } from "@/components/Reveal";

const GREETINGS = ["Mingalaba", "Hello", "Hola"];

export default function Hero({ profile }: { profile: Profile }) {
  const [greet, setGreet] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setGreet((g) => (g + 1) % GREETINGS.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20">
      <motion.div
        variants={stagger}
        initial="hidden"
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-emerald-700 dark:text-emerald-400">Available</span>
          </motion.p>

          {/* Rotating greeting */}
          <motion.p
            variants={fadeUp}
            className="mt-8 h-7 text-lg font-medium text-ink-soft dark:text-[#a9c3d8]"
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

          <motion.h1
            variants={fadeUp}
            className="mt-2 font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl dark:text-[#eaf2f8]"
          >
            I am Kaung{" "}
            <motion.span
              aria-hidden
              className="inline-block"
              animate={{ rotate: [0, 14, -8, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.5 }}
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-xl font-medium text-ink-soft md:text-2xl dark:text-[#a9c3d8]"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg dark:text-[#a9c3d8]"
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
              className="rounded-full border border-line bg-white px-6 py-3 text-sm font-semibold text-ink shadow-sm dark:border-night-line dark:bg-night-card dark:text-[#eaf2f8]"
            >
              Download CV ↓
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-black/10 dark:bg-accent dark:text-white"
            >
              Let&apos;s connect →
            </motion.a>
          </motion.div>
        </div>

        {/* Hanging ID badge — 220 x 280, photo fills the card like Zolt's,
            black lanyard, ocean top stripe, no text on the card */}
        <motion.div variants={fadeUp} className="mx-auto flex w-[220px] shrink-0 justify-center md:mx-0 md:justify-end">
          <motion.div
            initial={{ y: -18, rotate: 3 }}
            animate={{ y: 0, rotate: 2 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
            whileHover={{ rotate: 0, y: -4 }}
            className="relative h-[280px] w-[220px] overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-black/10 dark:border-night-line dark:bg-night-card"
          >
            <span aria-hidden className="absolute -top-14 left-1/2 z-10 h-16 w-3 -translate-x-1/2 rotate-0 rounded-full bg-ink dark:bg-[#eaf2f8]" />
            <span aria-hidden className="absolute left-0 right-0 top-0 z-10 h-2 bg-accent" />
            <Image
              src="/portrait.jpg"
              alt="Portrait of Kaung Htet Zan Thar"
              fill
              priority
              sizes="220px"
              className="object-cover object-top"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
