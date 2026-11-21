"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import type { Education, Experience, Skill } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

function ContributionGrid() {
  // Deterministic pseudo-random shading, Ocean-blue shades.
  const cells = Array.from({ length: 7 * 26 }, (_, i) => {
    const v = (i * 2654435761) % 100;
    return v > 82 ? 4 : v > 62 ? 3 : v > 38 ? 2 : v > 16 ? 1 : 0;
  });
  const shades = [
    "bg-cream-deep dark:bg-night-line",
    "bg-[#a9c3d8] dark:bg-[#1e3d5c]",
    "bg-[#6ea8d8] dark:bg-[#2a6ea6]",
    "bg-[#4a86b8] dark:bg-[#174a7c]",
    "bg-[#174a7c] dark:bg-[#6ea8d8]",
  ];
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-sm font-bold text-ink dark:text-[#eaf2f8]">@Zenn257920</p>
        <p className="font-mono text-xs text-ink-soft dark:text-[#a9c3d8]">github.com/Zenn257920</p>
      </div>
      <div className="mt-3 overflow-x-auto pb-1">
        <div
          role="img"
          aria-label="Contribution-style activity grid for @Zenn257920"
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
      </div>
      <p className="mt-2 font-mono text-xs text-ink-soft dark:text-[#a9c3d8]">
        Building, shipping and learning — week by week.
      </p>
    </div>
  );
}

function MarqueeRow({ names, reverse = false }: { names: string[]; reverse?: boolean }) {
  const doubled = [...names, ...names];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-2 whitespace-nowrap"
      >
        {doubled.map((n, i) => (
          <span
            key={i}
            className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#eaf2f8]"
          >
            {n} <span className="text-accent">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

const HEADLINES: Record<string, { headline: string; note: string }> = {
  Intern: {
    headline: "Joined as a frontend intern, shipping responsive interfaces for insurance and customer care",
    note: "Learning the codebase by building real screens for both admin products, with React, TypeScript and REST APIs.",
  },
  Junior: {
    headline: "Promoted to junior, owning frontend delivery across both admin products",
    note: "Taking on more of the frontend work on the Core Insurance System and Customer Care Admin Panel — interfaces, API integration and maintenance.",
  },
};

function headlineFor(role: string) {
  if (/intern/i.test(role)) return HEADLINES.Intern;
  return HEADLINES.Junior;
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
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.5"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });
  const marqueeNames = skills.filter((s) => s.category !== "Soft Skills").map((s) => s.name);

  return (
    <section id="experience" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <SectionHeading
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
          <motion.div variants={fadeUp} className="mt-6 border-y border-line py-1 dark:border-night-line">
            <MarqueeRow names={marqueeNames} />
          </motion.div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {categories.map((cat) => (
              <motion.div key={cat} variants={fadeUp}>
                <h3 className="text-xs font-bold tracking-widest text-accent">{cat}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills
                    .filter((s) => s.category === cat)
                    .map((s) => (
                      <motion.span
                        key={s.id}
                        whileHover={{ scale: 1.07, y: -2 }}
                        className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#eaf2f8]"
                      >
                        {s.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-6 border-t border-line pt-1 dark:border-night-line">
            <MarqueeRow names={[...marqueeNames].reverse()} reverse />
          </motion.div>
        </motion.div>

        {/* Timeline — ocean line fills on scroll */}
        <div ref={timelineRef} className="relative mt-10">
          <span aria-hidden className="absolute bottom-2 left-[19px] top-2 w-0.5 rounded-full bg-line md:left-[23px] dark:bg-night-line" />
          <motion.span
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute bottom-2 left-[19px] top-2 w-0.5 origin-top rounded-full bg-accent md:left-[23px]"
          />
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {experience.map((e) => {
              const h = headlineFor(e.role);
              return (
                <motion.li key={e.id} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                  <motion.span
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent font-display text-sm font-bold text-white shadow-md shadow-accent/40 md:h-12 md:w-12"
                  >
                    IS
                  </motion.span>
                  <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-ink dark:text-[#eaf2f8]">
                        {e.company}
                      </h3>
                      <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#a9c3d8]">
                        {e.duration}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-accent">{e.role}</p>
                    <p className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-[#eaf2f8]">
                      {h.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                      {h.note} {e.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-ink dark:text-[#eaf2f8]">
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
                            className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#eaf2f8]"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </div>
                </motion.li>
              );
            })}
            {education.map((ed) => (
              <motion.li key={`edu-${ed.id}`} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                <motion.span
                  whileHover={{ scale: 1.15 }}
                  className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-line bg-card font-display text-xs font-bold text-ink shadow-sm md:h-12 md:w-12 dark:border-night-line dark:bg-night-card dark:text-[#eaf2f8]"
                >
                  UCS
                </motion.span>
                <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-[#eaf2f8]">
                      {ed.school}
                    </h3>
                    <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#a9c3d8]">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-accent">{ed.degree}</p>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-[#eaf2f8]">
                    Studying computer science, building frontend skills alongside the degree.
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
