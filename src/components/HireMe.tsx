"use client";

import { motion } from "framer-motion";
import type { Profile } from "@/lib/types";
import { Reveal, SectionHeading, stagger, fadeUp } from "@/components/Reveal";

export default function HireMe({ profile }: { profile: Profile }) {
  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading index="05" label="How it works" title="No agencies — just me, fully in on your product" />
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-line bg-ink text-cream shadow-xl dark:border-night-line dark:bg-night-card">
            <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={fadeUp}
                  className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Available
                </motion.p>
                <motion.h3
                  variants={fadeUp}
                  className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl"
                >
                  Hire me today
                </motion.h3>
                <motion.p variants={fadeUp} className="mt-3 leading-relaxed text-cream/75">
                  I take on a small number of projects at a time, so your work
                  always gets my full focus. Tell me about your product and
                  I&apos;ll get back to you.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
                  <motion.a
                    href={`mailto:${profile.email ?? ""}`}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30"
                  >
                    Email me →
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
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  { label: "Email", value: profile.email ?? "—", href: `mailto:${profile.email ?? ""}` },
                  { label: "Phone", value: profile.phone ?? "—", href: `tel:${(profile.phone ?? "").replace(/[^0-9+]/g, "")}` },
                  { label: "Location", value: profile.location ?? "—", href: undefined },
                ].map((row) => (
                  <motion.div
                    key={row.label}
                    variants={fadeUp}
                    className="rounded-2xl border border-cream/15 bg-white/5 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-widest text-cream/60">
                      {row.label}
                    </p>
                    {row.href ? (
                      <a
                        href={row.href}
                        className="mt-1 block break-all font-semibold text-cream hover:text-accent"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <p className="mt-1 font-semibold text-cream">{row.value}</p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>

        <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 pb-20 text-sm text-ink-soft md:flex-row md:pb-6 dark:border-night-line dark:text-[#b8ad97]">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">
            Built with Next.js, TypeScript &amp; Framer Motion · Data from Neon PostgreSQL
          </p>
        </footer>
      </div>
    </section>
  );
}
