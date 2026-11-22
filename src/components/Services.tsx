"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Service } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";
import { DashboardMock } from "@/components/FeaturedWorks";

const DETAILS: Record<string, { duration: string; tools: string[]; extra: string }> = {
  "Frontend Development": {
    duration: "1–3 weeks",
    tools: ["React", "Next.js", "TypeScript"],
    // No extra paragraph: the Neon description already says this, and
    // rendering both showed two near-identical paragraphs back-to-back.
    extra: "",
  },
  "Responsive UI Development": {
    duration: "1–2 weeks",
    tools: ["Tailwind CSS", "Bootstrap", "Material UI", "DaisyUI", "Framer Motion"],
    extra:
      "Interfaces that hold up on phones, tablets and desktops, with motion that guides attention instead of getting in the way. I check layouts at real sizes, not just on my own screen.",
  },
  "API Integration": {
    duration: "1–2 weeks",
    tools: ["REST APIs", "Axios", "TypeScript"],
    extra:
      "I connect the frontend to real data: fetching lists, submitting forms, handling loading and error states, and keeping the UI in sync with what the server returns.",
  },
  "Forms & State Management": {
    duration: "1–2 weeks",
    tools: ["React Hook Form", "Zod", "Redux Toolkit", "Context API"],
    extra:
      "Forms that validate as you type, with clear errors and no lost input. Shared state stays predictable, so screens agree with each other instead of drifting apart.",
  },
  "Reusable Components & Design Systems": {
    duration: "1–3 weeks",
    tools: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    extra:
      "Reusable components and consistent patterns keep a product coherent: the same building blocks, the same behaviour, everywhere. New screens get faster to build, and the whole product is easier to maintain.",
  },
};

export default function Services({ services }: { services: Service[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="services" className="scroll-mt-24 border-t border-line py-20 md:py-24 dark:border-night-line">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <SectionHeading label="Services I provide" title="I can help you with these things" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="overflow-hidden rounded-3xl border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card"
        >
          {services.map((s, i) => {
            const isOpen = open === i;
            const d = DETAILS[s.title] ?? { duration: "1–2 weeks", tools: [], extra: "" };
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
                      isOpen ? "text-accent" : "text-ink-faint dark:text-[#A3A3A3]"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-display text-xl font-bold text-ink md:text-2xl dark:text-[#F0F0F0]">
                    {s.title}
                  </span>
                  <span className="hidden rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-faint sm:inline dark:bg-night dark:text-[#A3A3A3]">
                    {d.duration}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition-colors ${
                      isOpen
                        ? "border-accent bg-accent text-white"
                        : "border-line text-ink dark:border-night-line dark:text-[#F0F0F0]"
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
                      <div className="grid gap-6 px-6 pb-6 md:grid-cols-[1fr_200px] md:px-8">
                        <div>
                          <p className="text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                            {s.description}
                          </p>
                          {d.extra ? (
                            <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                              {d.extra}
                            </p>
                          ) : null}
                          <p className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-ink-faint dark:text-[#A3A3A3]">
                            Typical timeline · {d.duration}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {d.tools.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#F0F0F0]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="hidden rotate-2 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02] md:block">
                          <DashboardMock title={s.title} variant={i % 2} />
                        </div>
                      </div>
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
