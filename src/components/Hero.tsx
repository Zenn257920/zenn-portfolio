"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";
import { stagger, fadeUp } from "@/components/Reveal";

export default function Hero({ profile }: { profile: Profile }) {
  const firstName = profile.name.split(" ")[0];
  return (
    <section id="home" className="relative overflow-hidden pt-20 pb-14 md:pt-28 md:pb-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-5 md:px-8"
      >
        {/* Hanging ID badge */}
        <motion.div variants={fadeUp} className="flex justify-center">
          <motion.div
            initial={{ y: -18, rotate: -2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 14, delay: 0.15 }}
            whileHover={{ rotate: -2, y: -4 }}
            className="relative rounded-3xl border border-line bg-card px-6 py-5 text-center shadow-xl shadow-black/5 dark:border-night-line dark:bg-night-card"
          >
            <span aria-hidden className="absolute -top-3 left-1/2 h-6 w-px -translate-x-1/2 bg-line dark:bg-night-line" />
            <span aria-hidden className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-line bg-cream dark:border-night-line dark:bg-night" />
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent font-display text-2xl font-bold text-white">
              KT
            </span>
            <p className="mt-3 font-display text-base font-bold leading-tight text-ink dark:text-[#f3ede0]">
              {profile.name}
            </p>
            <p className="text-xs font-medium uppercase tracking-widest text-ink-soft dark:text-[#b8ad97]">
              {profile.title}
            </p>
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-10 flex items-center justify-center gap-2 text-sm font-medium"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-emerald-700 dark:text-emerald-400">
            {profile.availability ?? "Available"}
          </span>
          <span className="text-ink-soft dark:text-[#b8ad97]">· Yangon, Myanmar</span>
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-4 text-center font-display text-5xl font-bold leading-[0.95] tracking-tight text-ink sm:text-7xl md:text-8xl dark:text-[#f3ede0]"
        >
          I am{" "}
          <motion.span
            className="inline-block text-accent"
            initial={{ rotate: -4, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
          >
            {firstName}
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-ink-soft sm:text-lg dark:text-[#b8ad97]"
        >
          {profile.title} based in Yangon. I don&apos;t just build interfaces — I
          own the experience, from the first sketch to the final shipped
          product: responsive, reusable and user-friendly, written with clean,
          maintainable code.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href="#works"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-lg shadow-black/10 dark:bg-accent dark:text-white"
          >
            View my work ↓
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink shadow-sm dark:border-night-line dark:bg-night-card dark:text-[#f3ede0]"
          >
            Hire me
          </motion.a>
          <motion.a
            href="/cv"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink shadow-sm dark:border-night-line dark:bg-night-card dark:text-[#f3ede0]"
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Skill marquee */}
        <motion.div
          variants={fadeUp}
          aria-hidden
          className="relative mt-14 overflow-hidden border-y border-line py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] dark:border-night-line"
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-[#b8ad97]"
          >
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
              "Redux Toolkit", "REST APIs", "React Hook Form", "Zod", "Git & GitHub",
            ]
              .concat([
                "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
                "Redux Toolkit", "REST APIs", "React Hook Form", "Zod", "Git & GitHub",
              ])
              .map((s, i) => (
                <span key={i} className="flex items-center gap-8">
                  {s} <span className="text-accent">✦</span>
                </span>
              ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
