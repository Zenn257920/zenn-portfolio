"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

export function DashboardMock({ title, variant = 0 }: { title: string; variant?: number }) {
  const bars = variant === 1 ? [42, 78, 58, 90, 64] : [68, 92, 47, 80, 55];
  return (
    <div aria-hidden className="relative overflow-hidden rounded-2xl border border-line bg-cream-deep p-3 dark:border-night-line dark:bg-night">
      <div className="flex items-center gap-1.5 rounded-t-xl border border-line bg-card px-3 py-2 dark:border-night-line dark:bg-night-card">
        <span className="h-2.5 w-2.5 rounded-full bg-[#174a7c]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#6ea8d8]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a9c3d8]" />
        <span className="ml-2 truncate font-mono text-[11px] text-ink-soft dark:text-[#a9c3d8]">
          {title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-b-xl border border-t-0 border-line bg-card p-3 dark:border-night-line dark:bg-night-card">
        {[68, 92, 47].map((h, i) => (
          <div key={i} className="flex h-20 items-end gap-1 rounded-lg bg-cream p-2 dark:bg-night">
            {bars.map((v, j) => (
              <motion.span
                key={j}
                initial={{ height: "8%" }}
                whileInView={{ height: `${(v * h) / 100}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + j * 0.07, type: "spring", stiffness: 160, damping: 18 }}
                className={`w-full rounded-sm ${i === 1 ? "bg-accent" : "bg-ink/70 dark:bg-[#eaf2f8]/70"}`}
              />
            ))}
          </div>
        ))}
        <div className="col-span-3 flex items-center justify-between rounded-lg bg-cream px-3 py-2 dark:bg-night">
          <span className="font-mono text-[11px] text-ink-soft dark:text-[#a9c3d8]">● Live data</span>
          <span className="font-mono text-[11px] font-semibold text-accent">React + TypeScript</span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedWorks({ projects }: { projects: Project[] }) {
  const first = projects[0];
  const second = projects[1];
  return (
    <section id="works" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <SectionHeading label="Featured works" title="These are the ones that taught me the most" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          {first ? (
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group grid overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:grid-cols-2 dark:border-night-line dark:bg-night-card"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#a9c3d8]">3 Months</span>
                  <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-soft dark:bg-night dark:text-[#a9c3d8]">Frontend Developer</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent md:text-3xl dark:text-[#eaf2f8]">
                  {first.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft dark:text-[#a9c3d8]">
                  {first.period} · {first.role ?? "Frontend Developer"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                  {first.description}
                </p>
                <p className="mt-4 font-display text-base font-bold text-ink dark:text-[#eaf2f8]">
                  {first.highlight}
                </p>
                <p className="mt-2 text-sm text-ink-soft dark:text-[#a9c3d8]">
                  Insurance workflows, rebuilt as responsive screens that stay
                  fast and easy to use.
                </p>
              </div>
              <div className="p-4 md:p-6 md:pl-0">
                <DashboardMock title={first.title} variant={0} />
              </div>
            </motion.article>
          ) : null}

          {second ? (
            <motion.article
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group grid overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:grid-cols-2 dark:border-night-line dark:bg-night-card"
            >
              <div className="order-2 p-4 md:order-1 md:p-6 md:pr-0">
                <DashboardMock title={second.title} variant={1} />
              </div>
              <div className="order-1 p-6 md:order-2 md:p-8">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">React</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">TypeScript</span>
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">REST APIs</span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent md:text-3xl dark:text-[#eaf2f8]">
                  {second.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft dark:text-[#a9c3d8]">
                  {second.period} · {second.role ?? "Frontend Developer"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                  {second.description}
                </p>
                <p className="mt-4 font-display text-base font-bold text-ink dark:text-[#eaf2f8]">
                  {second.highlight}
                </p>
                <p className="mt-2 text-sm text-ink-soft dark:text-[#a9c3d8]">
                  Support teams get the data they need — retrieved, submitted
                  and managed through the API.
                </p>
              </div>
            </motion.article>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
