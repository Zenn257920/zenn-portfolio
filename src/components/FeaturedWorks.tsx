"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

// Real screenshots the user sent from his own apps (public/projects/).
// Any project without an entry here keeps the DashboardMock below.
const PROJECT_IMAGES: Record<string, string> = {
  "Smart Ride — Shared Ride App": "/projects/smart-ride.jpg",
  "Expense Tracker": "/projects/expense-tracker.jpg",
  "We Talk — Real-time Chat App": "/projects/we-talk.jpg",
  "Personal Portfolio": "/projects/portfolio.jpg",
};

// Crisp flat vector dashboard mock — the fix for Zolt's washed-out,
// illegible laptop screenshots: a solid flat background, large legible
// labels, big animated bars, no tiny text and no blur or noise.
// Browser-window frame shared by the mock and the real screenshots —
// outer cream border, three dots and the project domain, so every card
// looks the same whether it shows a screenshot or the mock.
function BrowserFrame({
  title,
  decorative = false,
  children,
}: {
  title: string;
  decorative?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden={decorative || undefined}
      className="relative overflow-hidden rounded-2xl border border-line bg-cream-deep p-3 dark:border-night-line dark:bg-night md:p-4"
    >
      <div className="overflow-hidden rounded-xl border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card">
        <div className="flex items-center gap-2 border-b border-line bg-cream px-4 py-2.5 dark:border-night-line dark:bg-night">
          <span className="h-3 w-3 rounded-full bg-[#FF5C00]" />
          <span className="h-3 w-3 rounded-full bg-[#FF8A50]" />
          <span className="h-3 w-3 rounded-full bg-[#A3A3A3]" />
          <span className="ml-2 truncate font-mono text-xs font-semibold text-ink-faint dark:text-[#A3A3A3]">
            {title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.app
          </span>
        </div>
        {children}
      </div>
    </div>
  );
}

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
  const tiles = [
    { label: "Overview", sub: "At a glance" },
    { label: "Records", sub: "Lists & detail" },
    { label: "Activity", sub: "Latest updates" },
  ];
  return (
    <BrowserFrame title={title} decorative>
      <div className="p-3 md:p-4">
          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {tiles.map((t, i) => (
              <div key={t.label} className="min-w-0 rounded-lg bg-cream px-2 py-2 dark:bg-night md:px-3 md:py-2.5">
                <p className={`truncate text-[11px] font-bold leading-tight md:text-sm ${i === 1 ? "text-accent" : "text-ink dark:text-[#F0F0F0]"}`}>
                  {t.label}
                </p>
                <p className="mt-0.5 text-[10px] text-ink-faint md:text-xs dark:text-[#A3A3A3]">{t.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-28 items-end gap-2 rounded-lg bg-cream p-3 dark:bg-night">
            {bars.map((v, j) => (
              <motion.span
                key={j}
                initial={{ height: "8%" }}
                whileInView={{ height: `${v}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + j * 0.07, type: "spring", stiffness: 160, damping: 18 }}
                className={`w-full rounded-md ${j === 1 || j === 3 ? "bg-accent" : "bg-ink/70 dark:bg-[#F0F0F0]/70"}`}
              />
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between rounded-lg bg-cream px-3 py-2.5 dark:bg-night">
            <span className="text-xs font-semibold text-ink-faint dark:text-[#A3A3A3]">● Live data</span>
            <span className="text-xs font-bold text-accent">{stackLabel}</span>
          </div>
      </div>
    </BrowserFrame>
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
  "Smart Ride — Shared Ride App":
    "One trip, shared fairly — riders join matching requests, drivers accept, and the fare splits by route.",
  "Expense Tracker":
    "Burmese-first money tracking — voice in, tidy dashboard out, with loans kept separate from the balance.",
  "We Talk — Real-time Chat App":
    "Friends only, always in sync — messages, photos and voice, with push that still arrives when the app is closed.",
};

// Eye icon for the Live Demo button (Feather eye, accent stroke).
function EyeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-accent"
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

// GitHub mark for the Source Code button.
function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function FeaturedWorks({ projects }: { projects: Project[] }) {
  return (
    <section id="works" className="scroll-mt-24 border-t border-line py-20 md:py-24 dark:border-night-line">
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
              <div className="min-w-0 p-6 md:p-8">
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
                <h3 className="mt-4 font-display text-2xl font-bold text-ink transition-colors group-hover:text-accent md:text-3xl dark:text-[#F0F0F0]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-ink-faint dark:text-[#A3A3A3]">
                  {p.period} · {p.role ?? "Frontend Developer"}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                  {p.description}
                </p>
                <p className="mt-4 font-display text-base font-bold text-ink dark:text-[#F0F0F0]">
                  {p.highlight}
                </p>
                {OUTCOMES[p.title] ? (
                  <p className="mt-2 text-sm text-ink-faint dark:text-[#A3A3A3]">
                    {OUTCOMES[p.title]}
                  </p>
                ) : null}
                {p.demo_url || p.source_url ? (
                  <div className="mt-6 flex flex-wrap gap-3 border-t border-line pt-5 dark:border-night-line">
                    {p.demo_url ? (
                      <a
                        href={p.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:scale-[1.03] dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
                      >
                        <EyeIcon />
                        Live Demo
                      </a>
                    ) : null}
                    {p.source_url ? (
                      <a
                        href={p.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:scale-[1.03] dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
                      >
                        <GitHubIcon />
                        Source Code
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </div>
            );
            const imageSrc = PROJECT_IMAGES[p.title];
            const mock = (
              <div className={`min-w-0 p-3 transition-transform duration-500 group-hover:scale-[1.02] md:p-6 ${reversed ? "md:pr-0" : "md:pl-0"}`}>
                {imageSrc ? (
                  <BrowserFrame title={p.title}>
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={imageSrc}
                        alt={`${p.title} — real screenshot`}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </BrowserFrame>
                ) : (
                  <DashboardMock title={p.title} variant={i % 2} stackLabel={stackLabel} />
                )}
              </div>
            );
            return (
              <motion.article
                key={p.id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:grid-cols-2 dark:border-night-line dark:bg-night-card"
              >
                {reversed ? (
                  <>
                    <div className="order-2 min-w-0 md:order-1">{mock}</div>
                    <div className="order-1 min-w-0 md:order-2">{text}</div>
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
