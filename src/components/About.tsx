"use client";

import { motion } from "framer-motion";
import type { Education, Profile, Skill } from "@/lib/types";
import { Reveal, SectionHeading, stagger, fadeUp } from "@/components/Reveal";

const softSkills = (skills: Skill[]) =>
  skills.filter((s) => s.category === "Soft Skills");

export default function About({
  profile,
  skills,
  education,
}: {
  profile: Profile;
  skills: Skill[];
  education: Education[];
}) {
  const edu = education[0];
  return (
    <section id="about" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading index="01" label="About me" title="The person behind the pixels" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 md:grid-cols-3"
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-line bg-card p-6 shadow-sm md:col-span-2 dark:border-night-line dark:bg-night-card"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">About me</p>
            <p className="mt-3 leading-relaxed text-ink-soft dark:text-[#c9bda6]">
              {profile.bio}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {softSkills(skills).map((s) => (
                <motion.span
                  key={s.id}
                  whileHover={{ scale: 1.06 }}
                  className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#f3ede0]"
                >
                  {s.name}
                </motion.span>
              ))}
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-line bg-accent p-6 text-white shadow-sm"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-white/80">Based in</p>
            <p className="mt-3 font-display text-2xl font-bold leading-tight">
              Yangon, Myanmar
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/85">
              {profile.location}
            </p>
            <p className="mt-4 font-mono text-xs text-white/80">
              Asia/Yangon · UTC+6:30
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-line bg-card p-6 shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Education</p>
            {edu ? (
              <>
                <p className="mt-3 font-display text-lg font-bold leading-snug text-ink dark:text-[#f3ede0]">
                  {edu.degree} — {edu.school}
                </p>
                <p className="mt-2 text-sm text-ink-soft dark:text-[#b8ad97]">{edu.period}</p>
              </>
            ) : (
              <p className="mt-3 text-sm text-ink-soft">—</p>
            )}
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-line bg-card p-6 shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Currently</p>
            <p className="mt-3 font-display text-lg font-bold leading-snug text-ink dark:text-[#f3ede0]">
              {profile.availability ?? "Open to frontend opportunities"}
            </p>
            <p className="mt-2 text-sm text-ink-soft dark:text-[#b8ad97]">
              Frontend roles — React, Next.js and TypeScript.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-line bg-card p-6 shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Get in touch</p>
            <p className="mt-3 break-all text-sm font-semibold text-ink dark:text-[#f3ede0]">
              {profile.email}
            </p>
            <p className="mt-1 text-sm text-ink-soft dark:text-[#b8ad97]">{profile.phone}</p>
            <a
              href={`mailto:${profile.email ?? ""}`}
              className="mt-4 inline-block rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream dark:bg-accent dark:text-white"
            >
              Email me →
            </a>
          </motion.article>
        </motion.div>
        <Reveal className="mt-4">
          <p className="text-center font-mono text-xs uppercase tracking-widest text-ink-soft dark:text-[#b8ad97]">
            27 skills · 2 shipped products at Innovix Solutions · B.C.Sc. 2027
          </p>
        </Reveal>
      </div>
    </section>
  );
}
