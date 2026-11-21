"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
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
  index,
  label,
  title,
}: {
  index: string;
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
        className="font-mono text-xs tracking-widest text-accent uppercase"
      >
        {"//"} {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl dark:text-[#f3ede0]"
      >
        {title}
      </motion.h2>
      <motion.span
        variants={fadeUp}
        aria-hidden
        className="mt-4 block h-1 w-12 rounded-full bg-accent"
      />
      <span className="sr-only">{index}</span>
    </motion.div>
  );
}
