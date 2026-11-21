import { getPortfolio } from "@/lib/neon";
import PrintButton from "@/components/PrintButton";

// Live from Neon on every request — no caching.
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CvPage() {
  const data = await getPortfolio();
  const profile = data.profile[0];
  const grouped = new Map<string, string[]>();
  for (const s of data.skills) {
    const list = grouped.get(s.category) ?? [];
    list.push(s.name);
    grouped.set(s.category, list);
  }
  return (
    <main className="mx-auto max-w-3xl px-5 py-12 print:max-w-none print:px-0 print:py-0">
      <div className="mb-6 flex items-center justify-between print:hidden">
        <a href="/" className="text-sm font-semibold text-accent">
          ← Back to portfolio
        </a>
        <PrintButton />
      </div>
      <article className="rounded-3xl border border-line bg-card p-8 shadow-sm print:border-0 print:shadow-none dark:border-night-line dark:bg-night-card">
        <h1 className="font-display text-4xl font-bold text-ink dark:text-[#eaf2f8]">
          {profile.name}
        </h1>
        <p className="mt-1 text-lg font-semibold text-accent">{profile.title}</p>
        <p className="mt-2 text-sm text-ink-soft dark:text-[#a9c3d8]">
          {profile.email} · {profile.phone} · {profile.location}
        </p>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            About
          </h2>
          <p className="mt-2 leading-relaxed text-ink-soft dark:text-[#b7cddd]">{profile.bio}</p>
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Experience
          </h2>
          {data.experience.map((e) => (
            <div key={e.id} className="mt-3">
              <p className="font-bold text-ink dark:text-[#eaf2f8]">
                {e.role} — {e.company} ({e.duration})
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                {e.description}
              </p>
            </div>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Projects
          </h2>
          {data.projects.map((p) => (
            <div key={p.id} className="mt-3">
              <p className="font-bold text-ink dark:text-[#eaf2f8]">{p.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                {p.description}
              </p>
            </div>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Services
          </h2>
          {data.services.map((s) => (
            <div key={s.id} className="mt-3">
              <p className="font-bold text-ink dark:text-[#eaf2f8]">{s.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-[#b7cddd]">
                {s.description}
              </p>
            </div>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Contact
          </h2>
          {data.socials.map((s) => (
            <p key={s.id} className="mt-2 text-sm text-ink-soft dark:text-[#b7cddd]">
              <span className="font-bold text-ink dark:text-[#eaf2f8]">{s.platform}: </span>
              {s.url}
            </p>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Skills
          </h2>
          {[...grouped.entries()].map(([cat, names]) => (
            <p key={cat} className="mt-2 text-sm text-ink-soft dark:text-[#b7cddd]">
              <span className="font-bold text-ink dark:text-[#eaf2f8]">{cat}: </span>
              {names.join(", ")}
            </p>
          ))}
        </section>
        <section className="mt-8">
          <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-accent">
            Education
          </h2>
          {data.education.map((e) => (
            <p key={e.id} className="mt-2 text-sm text-ink-soft dark:text-[#b7cddd]">
              <span className="font-bold text-ink dark:text-[#eaf2f8]">
                {e.degree} — {e.school}
              </span>{" "}
              · {e.period}
            </p>
          ))}
        </section>
      </article>
    </main>
  );
}
