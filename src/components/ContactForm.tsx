"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { Service } from "@/lib/types";

export default function ContactForm({
  email,
  services,
}: {
  email: string;
  services: Service[];
}) {
  const [name, setName] = useState("");
  const [sender, setSender] = useState("");
  const [service, setService] = useState(services[0]?.title ?? "");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [sent, setSent] = useState(false);

  const inputCls =
    "w-full rounded-xl border border-line bg-cream-deep px-4 py-3 text-sm text-ink shadow-sm outline-none transition placeholder:text-ink-soft/60 focus:border-accent focus:ring-2 focus:ring-accent/30 dark:border-night-line dark:bg-[#1E1E1E] dark:text-[#F0F0F0]";

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Please tell me your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sender.trim()))
      next.email = "Please enter a valid email address.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    const subject = encodeURIComponent(`Portfolio contact: ${name.trim()} — ${service}`);
    const body = encodeURIComponent(
      `Hi Kaung,\n\n${message.trim() || "(No message written.)"}\n\n— ${name.trim()}\n${sender.trim()}\nService: ${service}`,
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-line bg-card p-7 shadow-sm dark:border-night-line dark:bg-night-card"
      >
        <p className="font-display text-2xl font-bold text-ink dark:text-[#F0F0F0]">
          Thanks, {name.trim().split(" ")[0]} — your email app should have opened.
        </p>
        <p className="mt-3 leading-relaxed text-ink-soft dark:text-[#C2C2C2]">
          Your message is addressed to {email}. Just press send in your email
          app and I&apos;ll get back to you as soon as possible — usually
          within a day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-accent dark:border-night-line dark:text-[#F0F0F0]"
        >
          Write another message
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={submit}
      noValidate
      className="rounded-3xl border border-line bg-card p-7 shadow-sm dark:border-night-line dark:bg-night-card"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-ink dark:text-[#F0F0F0]">
            Name*
          </label>
          <input
            id="contact-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John doe"
            autoComplete="name"
            className={inputCls}
          />
          {errors.name ? (
            <p className="mt-1.5 text-sm font-medium text-red-600">{errors.name}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-ink dark:text-[#F0F0F0]">
            Email*
          </label>
          <input
            id="contact-email"
            type="email"
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            placeholder="john@example.com"
            autoComplete="email"
            className={inputCls}
          />
          {errors.email ? (
            <p className="mt-1.5 text-sm font-medium text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div>
          <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold text-ink dark:text-[#F0F0F0]">
            Service*
          </label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputCls}
          >
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-ink dark:text-[#F0F0F0]">
            Message
          </label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows={5}
            className={`${inputCls} resize-y`}
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink shadow-sm hover:border-accent dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
        >
          Submit
        </motion.button>
        <p className="text-center text-xs leading-relaxed text-ink-faint dark:text-[#A3A3A3]">
          This opens your own email app with the message ready to send. Nothing
          is stored on this site.
        </p>
      </div>
    </form>
  );
}
