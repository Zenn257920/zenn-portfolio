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
          className="grid gap-4 md:grid-cols-3"
        >
          {/* Tall left card — portrait photo on top, like Zolt's About photo */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="overflow-hidden rounded-3xl border border-line bg-card shadow-sm md:row-span-2 dark:border-night-line dark:bg-night-card"
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
              <p className="mt-3 leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                {profile.bio}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {softSkills(skills).map((s) => (
                  <motion.span
                    key={s.id}
                    whileHover={{ scale: 1.06 }}
                    className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-semibold text-ink dark:border-night-line dark:bg-night dark:text-[#eaf2f8]"
                  >
                    {s.name}
                  </motion.span>
                ))}
              </div>
              {edu ? (
                <p className="mt-5 border-t border-line pt-4 text-sm text-ink-soft dark:border-night-line dark:text-[#a9c3d8]">
                  <span className="font-bold text-ink dark:text-[#eaf2f8]">{edu.degree}</span> —{" "}
                  {edu.school} · {edu.period}
                </p>
              ) : null}
            </div>
          </motion.article>

          {/* Top-middle — "Currently" player-style card */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="flex flex-col justify-center rounded-3xl border border-line bg-ink p-6 text-cream shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-accent">Currently</p>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm text-white">▶</span>
            </div>
            <p className="mt-3 font-display text-xl font-bold leading-snug">
              {profile.availability ?? "Open to frontend opportunities"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/75">
              Frontend Developer — React, Next.js and TypeScript.
            </p>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ width: "12%" }}
                whileInView={{ width: "68%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-full rounded-full bg-accent"
              />
            </div>
            <p className="mt-2 font-mono text-[11px] text-cream/60">React · Next.js · TypeScript</p>
          </motion.article>

          {/* Top-right — Yangon location card with map-like pattern */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-line bg-card p-6 shadow-sm dark:border-night-line dark:bg-night-card"
          >
            <div aria-hidden className="absolute inset-0 opacity-40 [background-image:linear-gradient(#c9dcec_1px,transparent_1px),linear-gradient(90deg,#c9dcec_1px,transparent_1px)] [background-size:28px_28px] dark:opacity-20" />
            <div className="relative">
              <p className="text-sm font-semibold text-accent">Based in</p>
              <p className="mt-3 font-display text-2xl font-bold leading-tight text-ink dark:text-[#eaf2f8]">
                Yangon, Myanmar
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-[#a9c3d8]">
                {profile.location}
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 font-mono text-xs text-ink-soft dark:bg-night dark:text-[#a9c3d8]">
                <span className="h-2 w-2 rounded-full bg-accent" /> Asia/Yangon · UTC+6:30
              </p>
            </div>
          </motion.article>

          {/* Bottom-right — sticky note */}
          <motion.article
            variants={fadeUp}
            whileHover={{ rotate: -1, y: -4 }}
            className="rounded-3xl border border-[#b8d4ea] bg-[#dceaf6] p-6 shadow-sm md:col-span-2 dark:border-night-line dark:bg-night-card"
          >
            <p className="font-mono text-xs tracking-widest text-ink-soft dark:text-[#a9c3d8]">
              ✎ A note from me
            </p>
            <p className="mt-3 font-display text-xl font-bold leading-snug text-ink dark:text-[#eaf2f8]">
              “I enjoy building responsive, reusable, user-friendly web
              applications.”
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-[#a9c3d8]">
              Clean, maintainable code — and software people can rely on.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
