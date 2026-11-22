"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Education, Profile, Skill } from "@/lib/types";
import { SectionHeading, stagger, fadeUp } from "@/components/Reveal";

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
    <section id="about" className="scroll-mt-24 border-t border-line py-20 md:py-24 dark:border-night-line">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <SectionHeading label="About me" title="The person behind the pixels" />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
        >
          {/* Tall left card — portrait photo on top, like Zolt's About photo */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="col-span-2 overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:col-span-1 md:row-span-2 dark:border-night-line dark:bg-night-card"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src="/api/photo"
                alt="Portrait of Kaung Htet Zan Thar"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover object-top"
              />
            </div>
            <div className="p-6">
              <p className="text-sm font-semibold text-accent">About me</p>
              <p className="mt-3 leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                {profile.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills(skills).map((s) => (
                  <motion.span
                    key={s.id}
                    whileHover={{ scale: 1.06 }}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#F0F0F0]"
                  >
                    {s.name}
                  </motion.span>
                ))}
              </div>
              {edu ? (
                <p className="mt-5 border-t border-line pt-4 text-sm text-ink-faint dark:border-night-line dark:text-[#A3A3A3]">
                  <span className="font-bold text-ink dark:text-[#F0F0F0]">{edu.degree}</span> —{" "}
                  {edu.school} · {edu.period}
                </p>
              ) : null}
            </div>
          </motion.article>

          {/* Top-middle — "Currently" player-style card, beige like the
              sample's music card (#F0EDE8), not dark */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-center rounded-3xl border border-line bg-cream-deep p-4 text-ink shadow-sm dark:border-night-line dark:bg-[#1E1E1E] dark:text-[#F0F0F0] md:p-6"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-accent">Currently</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm text-white">▶</span>
            </div>
            <p className="mt-3 break-words font-display text-lg font-bold leading-snug [hyphens:auto] md:text-xl">
              {profile.availability ?? "Open to frontend opportunities"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
              Frontend Developer — React, Next.js and TypeScript.
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink/10 dark:bg-white/15">
              <motion.div
                initial={{ width: "12%" }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-accent"
              />
            </div>
            <p className="mt-2 font-mono text-[11px] text-ink-faint dark:text-[#A3A3A3]">React · Next.js · TypeScript</p>
          </motion.article>

          {/* Top-right — Yangon location card with map-like pattern, beige
              like the sample's trip card */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-line bg-cream-deep p-4 shadow-sm dark:border-night-line dark:bg-[#1E1E1E] md:p-6"
          >
            <div aria-hidden className="absolute inset-0 opacity-40 [background-image:linear-gradient(#DBDAD9_1px,transparent_1px),linear-gradient(90deg,#DBDAD9_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-20" />
            <div className="relative">
              <p className="text-sm font-semibold text-accent">Based in</p>
              <p className="mt-3 font-display text-2xl font-bold leading-tight text-ink dark:text-[#F0F0F0]">
                Yangon, Myanmar
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint dark:text-[#A3A3A3]">
                {profile.location}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink-faint dark:bg-night dark:text-[#A3A3A3]">
                <span className="h-2 w-2 rounded-full bg-accent" /> Asia/Yangon · UTC+6:30
              </p>
            </div>
          </motion.article>

          {/* Bottom — sticky note, beige card with the quote on a yellow
              note (#EFDC8B, same in dark mode), like the sample */}
          <motion.article
            variants={fadeUp}
            whileHover={{ rotate: -1, y: -4 }}
            className="col-span-2 rounded-3xl border border-line bg-cream-deep p-6 shadow-sm dark:border-night-line dark:bg-[#232321]"
          >
            <p className="font-mono text-xs tracking-widest text-ink-faint dark:text-[#A3A3A3]">
              ✎ A note from me
            </p>
            <div className="mt-3 rotate-[-1deg] rounded-lg bg-[#EFDC8B] p-4 shadow-sm">
              <p className="font-display text-xl font-bold leading-snug text-ink">
                “I enjoy building responsive, reusable, user-friendly web
                applications.”
              </p>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
              Clean, maintainable code — and software people can rely on.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
