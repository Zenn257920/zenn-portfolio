"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

function DashboardMock({ title }: { title: string }) {
  return (
    <div aria-hidden className="relative overflow-hidden rounded-2xl border border-line bg-cream-deep p-3 dark:border-night-line dark:bg-night">
      <div className="flex items-center gap-1.5 rounded-t-xl border border-line bg-card px-3 py-2 dark:border-night-line dark:bg-night-card">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate font-mono text-[11px] text-ink-soft dark:text-[#b8ad97]">
          {title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-b-xl border border-t-0 border-line bg-card p-3 dark:border-night-line dark:bg-night-card">
        {[68, 92, 47].map((h, i) => (
          <div key={i} className="flex h-20 items-end gap-1 rounded-lg bg-cream p-2 dark:bg-night">
            {[0.5, 0.8, 0.35, 1, 0.65].map((v, j) => (
              <motion.span
                key={j}
                initial={{ height: "8%" }}
                whileInView={{ height: `${v * h}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + j * 0.07, type: "spring", stiffness: 160, damping: 18 }}
                className={`w-full rounded-sm ${i === 1 ? "bg-accent" : "bg-ink/70 dark:bg-[#f3ede0]/70"}`}
              />
            ))}
          </div>
        ))}
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-cream px-3 py-2 dark:bg-night">
          <span className="font-mono text-[11px] text-ink-soft dark:text-[#b8ad97]">● Live data</span>
          <span className="font-mono text-[11px] font-semibold text-accent">React + TypeScript</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorks({ projects }: { projects: Project[] }) {
  return (
    <section id="works" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading index="02" label="Featured works" title="These are the ones that taught me the most" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="group overflow-hidden rounded-3xl border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card"
            >
              <div className="p-4 pb-0">
                <DashboardMock title={p.title} />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")} · {p.role ?? "Frontend Developer"}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent dark:text-[#f3ede0]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft dark:text-[#b8ad97]">
                  {p.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#c9bda6]">
                  {p.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-ink dark:text-[#f3ede0]">
                  {p.highlight}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {(p.tech ?? "")
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
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
