import Image from "next/image";
import { getPortfolio } from "@/lib/neon";
import SideNav from "@/components/SideNav";
import ContactForm from "@/components/ContactForm";
import { SectionHeading } from "@/components/Reveal";

// Live from Neon on every request — no caching.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ContactPage() {
  const data = await getPortfolio();
  const profile = data.profile[0];
  return (
    <div className="dot-grid min-h-screen">
      <SideNav name={profile.name} />
      <main className="mx-auto min-h-screen w-full max-w-[980px] border-x border-line bg-cream shadow-[0_0_40px_rgba(0,0,0,0.04)] dark:border-night-line dark:bg-night">
        <section className="scroll-mt-24 py-14 md:py-20">
          <div className="mx-auto max-w-[980px] px-5 md:px-8">
            <SectionHeading
              label="Contact me"
              title="Feel free to send me a message, I will get back to you as soon as possible."
            />
            <div className="grid gap-6 md:grid-cols-[1fr_360px]">
              <ContactForm email={profile.email ?? ""} services={data.services} />
              <div>
                <div className="relative overflow-hidden rounded-[20px] border border-line bg-card shadow-sm dark:border-night-line dark:bg-night-card">
                  <div className="relative aspect-[431/388] w-full">
                    <Image
                      src="/api/photo"
                      alt="Portrait of Kaung Htet Zan Thar"
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-top"
                    />
                  </div>
                  {/* AVAILABLE pill sits inside the photo, bottom edge flush
                      with the photo bottom — no overhang, like the sample */}
                  <span className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#16A34A] shadow-lg dark:bg-night-card dark:text-[#4ADE80]">
                    <span className="h-2 w-2 rounded-full bg-[#16A34A] dark:bg-[#4ADE80]" /> AVAILABLE
                  </span>
                </div>
                <p className="mt-4 text-center font-display text-lg font-bold text-ink dark:text-[#F0F0F0]">
                  {profile.name} • {profile.title}
                </p>
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {data.socials.map((s) => (
                    <a
                      key={s.id}
                      href={s.url}
                      target={s.url.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink shadow-sm hover:border-accent dark:border-night-line dark:bg-night-card dark:text-[#F0F0F0]"
                    >
                      {s.platform === "GitHub" ? "GitHub · @Zenn257920 ↗" : "Email me ↗"}
                    </a>
                  ))}
                </div>
                <p className="mt-4 text-center text-sm leading-relaxed text-ink-faint dark:text-[#A3A3A3]">
                  {profile.location} · Asia/Yangon, UTC+6:30
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
