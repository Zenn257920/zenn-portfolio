"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Profile, Social } from "@/lib/types";
import { Reveal, SectionHeading, stagger, fadeUp } from "@/components/Reveal";

function YangonClock() {
  const [now, setNow] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Yangon",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setNow(fmt());
    const t = setInterval(() => setNow(fmt()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-2xl border border-line bg-card p-4 dark:border-night-line dark:bg-night-card">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-faint dark:text-[#A3A3A3]">
        Local time · Yangon
      </p>
      <p className="mt-1 font-display text-2xl font-bold tabular-nums text-ink dark:text-[#F0F0F0]">
        {now || "--:--:--"}
      </p>
      <p className="mt-1 font-mono text-xs text-ink-faint dark:text-[#A3A3A3]">
        Asia/Yangon · UTC+6:30
      </p>
    </div>
  );
}

export default function HireMe({ profile, socials }: { profile: Profile; socials: Social[] }) {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20 md:py-24 dark:border-night-line">
      <div className="mx-auto max-w-[980px] px-5 md:px-8">
        <SectionHeading label="How it works" title="No agencies — just me, fully in on your product" />
        <Reveal>
          <div className="grid gap-5 pt-10 md:grid-cols-2">
            {/* Left — profile card, measured from the sample: outer card in
                the page background with a 1px border, straight; inside it a
                white sub-card tilted -0.8°, inset ~15px; a 120px circular
                avatar left-aligned in the white card with a pink star badge
                straddling its bottom rim; availability + text below. */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-3xl border border-line bg-cream p-4 shadow-sm md:p-5 dark:border-night-line dark:bg-night"
            >
              <div className="rotate-[-0.8deg] rounded-2xl border border-line bg-white p-6 shadow-sm dark:border-night-line dark:bg-night-card">
                <div className="flex items-center gap-5">
                  <div className="relative shrink-0">
                    <span className="block h-[120px] w-[120px] overflow-hidden rounded-full">
                      <Image
                        src="/api/photo"
                        alt="Portrait of Kaung Htet Zan Thar"
                        fill
                        sizes="120px"
                        className="object-cover object-top"
                      />
                    </span>
                    <span
                      aria-hidden
                      className="absolute -bottom-[7px] left-1/2 flex h-6 w-7 -translate-x-1/2 items-center justify-center rounded-md bg-[#F1BEDD] shadow-sm"
                    >
                      <span className="text-sm leading-none text-white">★</span>
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-xl font-bold leading-tight text-ink dark:text-[#F0F0F0]">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-sm text-ink-faint dark:text-[#A3A3A3]">
                      Yangon, Myanmar
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-3 pb-3 pt-5">
                <p className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#16A34A] dark:bg-night-card dark:text-[#4ADE80]">
                  <span className="h-2 w-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80]" /> Available
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
                  I care about craft, details, and building things people actually
                  enjoy using — responsive, reusable and user-friendly, with clean,
                  maintainable code.
                </p>
                <h3 className="mt-6 font-display text-3xl font-bold text-ink dark:text-[#F0F0F0]">
                  Hire me today
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-faint dark:text-[#A3A3A3]">
                  I take on a small number of projects at a time, so your work
                  always gets my full focus. Tell me about your product and
                  I&apos;ll get back to you.
                </p>
              </div>
            </motion.div>

            {/* Right — Let's work together */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-line bg-ink p-7 text-cream shadow-sm dark:border-night-line dark:bg-night-card"
            >
              <motion.h3 variants={fadeUp} className="font-display text-3xl font-bold leading-tight">
                Let&apos;s work together
              </motion.h3>
              <motion.p variants={fadeUp} className="mt-3 leading-relaxed text-cream/75">
                Frontend development, responsive UI, API integration, forms
                &amp; state management, and reusable components — built with
                React, Next.js and TypeScript.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-5 space-y-3">
                {[
                  { label: "Email", value: profile.email ?? "—", href: `mailto:${profile.email ?? ""}` },
                  { label: "Phone", value: profile.phone ?? "—", href: `tel:${(profile.phone ?? "").replace(/[^0-9+]/g, "")}` },
                  { label: "Location", value: profile.location ?? "—", href: undefined },
                ].map((row) => (
                  <div key={row.label} className="rounded-2xl border border-cream/15 bg-white/5 p-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-cream/60">{row.label}</p>
                    {row.href ? (
                      <a href={row.href} className="mt-1 block break-all font-semibold text-cream hover:text-accent">
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-cream">{row.value}</p>
                    )}
                  </div>
                ))}
              </motion.div>
              <motion.p variants={fadeUp} className="mt-4 text-sm text-cream/60">
                I usually reply within a day.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-3">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30"
                >
                  Send a message →
                </motion.a>
                <motion.a
                  href="/cv"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream"
                >
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </Reveal>

        {/* Footer */}
        <footer className="mt-14 border-t border-line pt-10 pb-24 md:pb-10 dark:border-night-line">
          <h3 className="font-display text-4xl font-bold tracking-tight text-ink md:text-[40px] dark:text-[#F0F0F0]">
            Thank you for visiting
          </h3>
          <p className="mt-3 font-display text-2xl italic text-ink-faint dark:text-[#A3A3A3]">
            — Kaung Htet Zan Thar
          </p>
          <p className="mt-2 text-base text-ink-faint dark:text-[#A3A3A3]">
            Let&apos;s build something beautiful together.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="rounded-full border border-line bg-card px-5 py-2.5 text-sm font-semibold text-ink shadow-sm hover:border-accent dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
                >
                  {s.platform === "GitHub"
                    ? "GitHub · @Zenn257920 ↗"
                    : s.platform === "Email"
                      ? "Email me ↗"
                      : `${s.platform} ↗`}
                </a>
              ))}
            </div>
            <YangonClock />
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-sm text-ink-faint md:flex-row dark:border-night-line dark:text-[#A3A3A3]">
            <p>© 2026 {profile.name}</p>
            <p className="font-mono text-xs">
              Built with Next.js, TypeScript &amp; Framer Motion · Data from Neon PostgreSQL
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
