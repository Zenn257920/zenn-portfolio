import { neon } from "@neondatabase/serverless";
import { fallbackPortfolio } from "@/data/portfolio";
import type { PortfolioData } from "@/lib/types";

/**
 * Read the portfolio from Neon PostgreSQL (serverless).
 * When DATABASE_URL is not set, or a query fails, fall back to the
 * embedded snapshot in src/data/portfolio.ts so the site still builds
 * and renders. The connection string is never logged or embedded in
 * the client bundle — this module only runs on the server.
 */
export async function getPortfolio(): Promise<PortfolioData> {
  const url = process.env.DATABASE_URL;
  if (!url) return fallbackPortfolio;
  try {
    const sql = neon(url);
    const [profile, skills, experience, projects, services, education, socials] =
      await Promise.all([
        sql`SELECT id, name, title, location, email, phone, bio, availability, created_at FROM profile ORDER BY id`,
        sql`SELECT * FROM skills ORDER BY sort_order, id`,
        sql`SELECT * FROM experience ORDER BY sort_order, id`,
        sql`SELECT * FROM projects ORDER BY sort_order, id`,
        sql`SELECT * FROM services ORDER BY sort_order, id`,
        sql`SELECT * FROM education ORDER BY sort_order, id`,
        sql`SELECT * FROM socials ORDER BY sort_order, id`,
      ]);
    const data = {
      profile: profile as PortfolioData["profile"],
      skills: skills as PortfolioData["skills"],
      experience: experience as PortfolioData["experience"],
      projects: projects as PortfolioData["projects"],
      services: services as PortfolioData["services"],
      education: education as PortfolioData["education"],
      socials: socials as PortfolioData["socials"],
    };
    if (!data.profile.length) return fallbackPortfolio;
    return data;
  } catch {
    return fallbackPortfolio;
  }
}
