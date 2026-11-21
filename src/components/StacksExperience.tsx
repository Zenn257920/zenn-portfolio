"use client";

import { motion } from "framer-motion";
import type { Education, Experience, Skill } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

function ContributionGrid() {
  // Deterministic pseudo-random shading, like a GitHub contribution graph.
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const v = (i * 2654435761) % 100;
    return v > 82 ? 4 : v > 62 ? 3 : v > 38 ? 2 : v > 16 ? 1 : 0;
  });
  const shades = [
    "bg-cream-deep dark:bg-night-line",
    "bg-[#fdc9a8] dark:bg-[#5a2c14]",
    "bg-[#ff9d6b] dark:bg-[#8a3c17]",
    "bg-accent",
    "bg-accent-deep",
  ];
  return (
    <div className="overflow-x-auto pb-1">
      <div
        role="img"
        aria-label="Contribution-style activity grid"
        className="grid w-max grid-flow-col grid-rows-7 gap-1"
      >
        {cells.map((v, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 26) * 0.015 }}
            className={`h-3 w-3 rounded-[3px] ${shades[v]}`}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-xs text-ink-soft dark:text-[#b8ad97]">
        Building, shipping and learning — week by week.
      </p>
    </div>
  );
}

export default function StacksExperience({
  skills,
  experience,
  education,
}: {
  skills: Skill[];
  experience: Experience[];
  education: Education[];
}) {
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  return (
    <section id="experience" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          index="03"
          label="Stacks & Experience"
          title="Where I'm good and where I learned from"
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-3xl border border-line bg-card p-6 shadow-sm md:p-8 dark:border-night-line dark:bg-night-card"
        >
          <motion.div variants={fadeUp}>
            <ContributionGrid />
          </motion.div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((cat) => (
              <motion.div key={cat} variants={fadeUp}>
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  {cat}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((s) => (
                      <motion.span
                        key={s.id}
                        whileHover={{ scale: 1.07, y: -2 }}
                        className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#f3ede0]"
                      >
                        {s.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Orange timeline */}
        <div className="relative mt-10">
          <motion.span
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-[19px] top-2 bottom-2 w-0.5 origin-top rounded-full bg-accent/70 md:left-[23px]"
          />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {experience.map((e, i) => (
              <motion.li key={e.id} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-sm font-bold text-white shadow-md shadow-accent/40 md:h-12 md:w-12"
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>
                <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-[#f3ede0]">
                      {e.company}
                    </h3>
                    <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#b8ad97]">
                      {e.period} · {e.duration}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-accent">{e.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#c9bda6]">
                    {e.description}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-ink dark:text-[#f3ede0]">
                    {e.highlight}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(e.tech ?? "")
                      .split(",")
                      .map((t) => t.trim())
                      .filter(Boolean)
                      .map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#f3ede0]"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </div>
              </motion.li>
            ))}
            {education.map((ed) => (
              <motion.li key={`edu-${ed.id}`} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-cream shadow-md md:h-12 md:w-12 dark:bg-accent dark:text-white"
                >
                  ✦
                </motion.span>
                <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-[#f3ede0]">
                      {ed.school}
                    </h3>
                    <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#b8ad97]">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-accent">{ed.degree}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
