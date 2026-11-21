"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "about", label: "About", icon: "◉" },
  { id: "works", label: "Works", icon: "▦" },
  { id: "experience", label: "Experience", icon: "▤" },
  { id: "services", label: "Services", icon: "✦" },
  { id: "contact", label: "Contact", icon: "✉" },
];

const BOTTOM_LINKS = [
  { id: "about", label: "About" },
  { id: "works", label: "Work" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
          /* ignore */
        }
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-lg text-ink shadow-sm transition-colors hover:border-accent dark:border-night-line dark:bg-night-card dark:text-[#f3ede0]"
    >
      {dark ? "☀" : "☾"}
    </motion.button>
  );
}

export default function SideNav({ name }: { name: string }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    for (const l of LINKS) {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Left icon rail — desktop */}
      <motion.nav
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Sections"
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 rounded-full border border-line bg-white p-2 shadow-lg shadow-black/5 dark:border-night-line dark:bg-night-card"
      >
        {LINKS.map((l) => (
          <motion.a
            key={l.id}
            href={`#${l.id}`}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.9 }}
            aria-label={l.label}
            title={l.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-base transition-colors ${
              active === l.id
                ? "bg-accent text-white shadow-md shadow-accent/40"
                : "text-ink-soft hover:bg-cream-deep hover:text-ink dark:text-[#b8ad97] dark:hover:bg-night-line dark:hover:text-[#f3ede0]"
            }`}
          >
            {l.icon}
          </motion.a>
        ))}
        <span aria-hidden className="my-1 h-px w-6 bg-line dark:bg-night-line" />
        <ThemeToggle />
      </motion.nav>

      {/* Floating ID pill — top centre, appears after scrolling */}
      <motion.a
        href="#home"
        initial={false}
        animate={{
          opacity: scrolled ? 1 : 0,
          y: scrolled ? 0 : -12,
          pointerEvents: scrolled ? "auto" : "none",
        }}
        transition={{ duration: 0.35 }}
        className="fixed left-1/2 top-3 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-line bg-white/95 px-4 py-2 text-sm font-semibold shadow-lg shadow-black/5 backdrop-blur dark:border-night-line dark:bg-night-card/95 dark:text-[#f3ede0]"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
          KT
        </span>
        <span className="max-w-40 truncate">{name}</span>
        <span className="hidden sm:inline text-xs font-medium text-ink-soft dark:text-[#b8ad97]">
          Frontend Developer
        </span>
        <span className="flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available
        </span>
      </motion.a>

      {/* Floating bottom-centre pill nav — desktop, appears on scroll */}
      <motion.nav
        aria-label="Sections"
        initial={false}
        animate={{
          opacity: scrolled ? 1 : 0,
          y: scrolled ? 0 : 16,
          pointerEvents: scrolled ? "auto" : "none",
        }}
        transition={{ duration: 0.35 }}
        className="fixed bottom-4 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-line bg-white/95 p-1.5 shadow-xl shadow-black/10 backdrop-blur lg:flex dark:border-night-line dark:bg-night-card/95"
      >
        {BOTTOM_LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === l.id
                ? "bg-accent text-white"
                : "text-ink-soft hover:text-ink dark:text-[#b8ad97] dark:hover:text-[#f3ede0]"
            }`}
          >
            {l.label}
          </a>
        ))}
        <span aria-hidden className="mx-1 h-6 w-px bg-line dark:bg-night-line" />
        <ThemeToggle />
      </motion.nav>

      {/* Mobile bottom nav */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Sections"
        className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-around rounded-full border border-line bg-white/95 p-1.5 shadow-xl shadow-black/10 backdrop-blur lg:hidden dark:border-night-line dark:bg-night-card/95"
      >
        {LINKS.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            aria-label={l.label}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-base transition-colors ${
              active === l.id
                ? "bg-accent text-white"
                : "text-ink-soft dark:text-[#b8ad97]"
            }`}
          >
            {l.icon}
          </a>
        ))}
        <ThemeToggle />
      </motion.nav>
    </>
  );
}
