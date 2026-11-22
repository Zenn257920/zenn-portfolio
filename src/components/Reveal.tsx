"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

// Zolt's signature reveal: every section fades, rises AND de-blurs into
// place. The blur is only ever a transient reveal — never a permanent
// blurred background.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96, filter: "blur(6px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Word-by-word rise for big headings (hero H1): each word lifts in turn.
export const wordStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export const wordRise: Variants = {
  hidden: { opacity: 0, y: "110%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className="mb-8 md:mb-10"
    >
      <motion.p
        variants={fadeUp}
        className="text-base font-semibold tracking-wide text-accent"
      >
        {"//"} {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 font-display text-4xl font-bold tracking-tight text-ink md:text-[40px] md:leading-[1.1] dark:text-[#eaf2f8]"
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}
