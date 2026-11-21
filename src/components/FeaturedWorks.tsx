"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

export function DashboardMock({
  title,
  variant = 0,
  stackLabel = "React + TypeScript",
}: {
  title: string;
  variant?: number;
  stackLabel?: string;
}) {
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
          <span className="font-mono text-[11px] font-semibold text-accent">{stackLabel}</span>
        </div>
      </div>
    </div>
  );
}

// One-line outcome per project, keyed by title — the description and
// highlight come from the data (Neon / fallback snapshot).
const OUTCOMES: Record<string, string> = {
  "Core Insurance System":
    "Insurance workflows, rebuilt as responsive screens that stay fast and easy to use.",
  "Customer Care Admin Panel":
    "Support teams get the data they need — retrieved, submitted and managed through the API.",
  "Personal Portfolio":
    "This site itself — live data from Neon PostgreSQL, deployed on Vercel, source on GitHub.",
};

export default function FeaturedWorks({ projects }: { projects: Project[] }) {
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
          {projects.map((p, i) => {
            const reversed = i % 2 === 1;
            const tech = (p.tech ?? "")
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean);
            const stackLabel = tech.slice(0, 2).join(" + ") || "React + TypeScript";
            const text = (
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent md:text-3xl dark:text-[#eaf2f8]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-soft dark:text-[#a9c3d8]">
                  {p.period} · {p.role ?? "Frontend Developer"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                  {p.description}
                </p>
                <p className="mt-4 font-display text-base font-bold text-ink dark:text-[#eaf2f8]">
                  {p.highlight}
                </p>
                {OUTCOMES[p.title] ? (
                  <p className="mt-2 text-sm text-ink-soft dark:text-[#a9c3d8]">
                    {OUTCOMES[p.title]}
                  </p>
                ) : null}
              </div>
            );
            const mock = (
              <div className={`p-4 md:p-6 ${reversed ? "md:pr-0" : "md:pl-0"}`}>
                <DashboardMock title={p.title} variant={i % 2} stackLabel={stackLabel} />
              </div>
            );
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group grid overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:grid-cols-2 dark:border-night-line dark:bg-night-card"
              >
                {reversed ? (
                  <>
                    <div className="order-2 md:order-1">{mock}</div>
                    <div className="order-1 md:order-2">{text}</div>
                  </>
                ) : (
                  <>
                    {text}
                    {mock}
                  </>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
