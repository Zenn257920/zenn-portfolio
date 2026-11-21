"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Service } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

export default function Services({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading index="04" label="Services I provide" title="I can help you with these things" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="overflow-hidden rounded-3xl border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card"
        >
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={s.id}
                variants={fadeUp}
                className={i > 0 ? "border-t border-line dark:border-night-line" : ""}
              >
                <motion.button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  whileHover={{ x: 4 }}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left md:px-8"
                >
                  <span
                    className={`font-mono text-sm font-bold transition-colors ${
                      isOpen ? "text-accent" : "text-ink-soft dark:text-[#b8ad97]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-xl font-bold text-ink md:text-2xl dark:text-[#f3ede0]">
                    {s.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition-colors ${
                      isOpen
                        ? "border-accent bg-accent text-white"
                        : "border-line text-ink dark:border-night-line dark:text-[#f3ede0]"
                    }`}
                  >
                    +
                  </motion.span>
                </motion.button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 pl-[4.25rem] text-sm leading-relaxed text-ink-soft md:px-8 md:pl-[5.25rem] dark:text-[#c9bda6]">
                        {s.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
