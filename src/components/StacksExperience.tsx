"use client";

import { motion } from "framer-motion";
import type { Education, Experience, Skill } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

function ContributionGrid() {
  // Zolt's grid: 5 rows x ~38 columns of 16px squares, GitHub-style greens.
  const COLS = 38;
  const ROWS = 5;
  const cells = Array.from({ length: ROWS * COLS }, (_, i) => {
    const v = (i * 2654435761) % 100;
    return v > 82 ? 4 : v > 62 ? 3 : v > 38 ? 2 : v > 16 ? 1 : 0;
  });
  const shades = [
    "bg-cream-deep dark:bg-[#1E1E1E]",
    "bg-[#9BE9A8]",
    "bg-[#40C463]",
    "bg-[#30A14E]",
    "bg-[#216E39]",
  ];
  const dateFor = (col: number, row: number) => {
    const d = new Date();
    d.setDate(d.getDate() - ((COLS - 1 - col) * 7 + (ROWS - 1 - row)));
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  };
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-mono text-sm font-bold text-ink dark:text-[#F0F0F0]">@Zenn257920</p>
        <p className="font-mono text-xs text-ink-faint dark:text-[#A3A3A3]">github.com/Zenn257920</p>
      </div>
      <div className="mt-3 overflow-x-auto pb-1">
        <div
          role="img"
          aria-label="Contribution-style activity grid for @Zenn257920"
          className="grid w-max grid-flow-col grid-rows-5 gap-1"
        >
          {cells.map((v, i) => {
            const col = Math.floor(i / ROWS);
            const row = i % ROWS;
            const date = dateFor(col, row);
            return (
              <motion.span
                key={i}
                title={v === 0 ? `No contributions on ${date}` : `Contributions on ${date}`}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % COLS) * 0.012 }}
                className={`h-4 w-4 rounded-[4px] ${shades[v]}`}
              />
            );
          })}
        </div>
      </div>
      <p className="mt-2 font-mono text-xs text-ink-faint dark:text-[#A3A3A3]">
        Building, shipping and learning — week by week.
      </p>
    </div>
  );
}

// Logo icons only, no text — like Zolt's marquee, but fixed: Zolt's logos
// are washed-out grey and clipped by a wide edge fade, so ours run in
// full colour at full contrast, with only a very narrow edge fade.
const SKILL_ICONS: Record<string, string> = {
  HTML5: "html5.svg",
  CSS3: "css3.svg",
  JavaScript: "javascript.svg",
  TypeScript: "typescript.svg",
  "React.js": "react.svg",
  "Next.js": "nextjs.svg",
  "Tailwind CSS": "tailwindcss.svg",
  Bootstrap: "bootstrap.svg",
  "Material UI": "materialui.svg",
  DaisyUI: "daisyui.svg",
  "Framer Motion": "framer.svg",
  "Redux Toolkit": "redux.svg",
  Axios: "axios.svg",
  "React Hook Form": "reacthookform.svg",
  Zod: "zod.svg",
  "Visual Studio Code": "vscode.svg",
  PostgreSQL: "postgresql.svg",
  Postman: "postman.svg",
  Git: "git.svg",
  GitHub: "github.svg",
};

function IconMarqueeRow({ icons, reverse = false }: { icons: string[]; reverse?: boolean }) {
  const doubled = [...icons, ...icons];
  return (
    <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_2%,black_98%,transparent)]">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-4 whitespace-nowrap"
      >
        {doubled.map((name, i) => (
          <span
            key={i}
            className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cream-deep dark:bg-night"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/skills/${SKILL_ICONS[name]}`}
              alt={name}
              loading="lazy"
              className="h-9 w-9 object-contain transition duration-300 group-hover:scale-110"
            />
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

// Award icon for the View certificate button (Lucide award).
function AwardIcon() {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
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
  // Skills that have a logo icon — these run in the icon-only marquee.
  const iconNames = skills.map((s) => s.name).filter((n) => SKILL_ICONS[n]);
  const marqueeRow1 = iconNames.slice(0, Math.ceil(iconNames.length / 2));
  const marqueeRow2 = iconNames.slice(Math.ceil(iconNames.length / 2));

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-20 md:py-24 dark:border-night-line">
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
            <IconMarqueeRow icons={marqueeRow1} />
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
                        className="rounded-full border border-line bg-cream px-3 py-1.5 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#F0F0F0]"
                      >
                        {s.name}
                      </motion.span>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="mt-6 border-t border-line pt-1 dark:border-night-line">
            <IconMarqueeRow icons={marqueeRow2} reverse />
          </motion.div>
        </motion.div>

        {/* Timeline — Zolt style: large faded numbers, no connecting line */}
        <div className="relative mt-10">
          <motion.ol
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-6"
          >
            {experience.map((e, idx) => {
              const h = headlineFor(e.role);
              return (
                <motion.li key={e.id} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                  <span
                    aria-hidden
                    className="w-10 shrink-0 pt-1 text-center font-display text-4xl font-bold text-ink/10 md:w-12 md:text-5xl dark:text-white/10"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-xl font-bold text-ink dark:text-[#F0F0F0]">
                        {e.company}
                      </h3>
                      <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-faint dark:bg-night dark:text-[#A3A3A3]">
                        {e.duration}
                      </span>
                    </div>
                    <p className="mt-1 font-semibold text-accent">{e.role}</p>
                    <p className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-[#F0F0F0]">
                      {h.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                      {h.note} {e.description}
                    </p>
                    <p className="mt-3 text-sm font-semibold text-ink dark:text-[#F0F0F0]">
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
                            className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#F0F0F0]"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                    {/intern/i.test(e.role) ? (
                      <div className="mt-5 border-t border-line pt-5 dark:border-night-line">
                        <a
                          href="/certificates/internship.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink shadow-sm transition-transform hover:scale-[1.03] dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
                        >
                          <AwardIcon />
                          View certificate
                        </a>
                      </div>
                    ) : null}
                  </div>
                </motion.li>
              );
            })}
            {education.map((ed, idx) => (
              <motion.li key={`edu-${ed.id}`} variants={fadeUp} className="relative flex gap-4 md:gap-6">
                <span
                  aria-hidden
                  className="w-10 shrink-0 pt-1 text-center font-display text-4xl font-bold text-ink/10 md:w-12 md:text-5xl dark:text-white/10"
                >
                  {String(experience.length + idx + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 rounded-3xl border border-line bg-card p-5 shadow-sm md:p-6 dark:border-night-line dark:bg-night-card">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-bold text-ink dark:text-[#F0F0F0]">
                      {ed.school}
                    </h3>
                    <span className="rounded-full bg-cream px-3 py-1 font-mono text-xs font-semibold text-ink-faint dark:bg-night dark:text-[#A3A3A3]">
                      {ed.period}
                    </span>
                  </div>
                  <p className="mt-1 font-semibold text-accent">{ed.degree}</p>
                  <p className="mt-3 font-display text-base font-bold leading-snug text-ink dark:text-[#F0F0F0]">
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
