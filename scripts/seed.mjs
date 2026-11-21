// Seed the Neon database from db/schema.sql and db/seed.sql.
// Usage: DATABASE_URL=postgresql://... npm run db:seed
// The connection string comes only from the environment — never from a file.
import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const url = process.env.DATABASE_URL;
if (!url) {
  console.error("DATABASE_URL is not set. Copy .env.example to .env.local first.");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sql = neon(url);

for (const file of ["db/schema.sql", "db/seed.sql"]) {
  const text = readFileSync(join(root, file), "utf8");
  // Split on semicolons at line ends; the seed data contains no stray semicolons.
  const statements = text
    .split(/;\s*\n/)
    .map((s) => s.trim())
    .filter((s) => s && !s.startsWith("--"));
  for (const statement of statements) {
    await sql.query(statement);
  }
  console.log(`Applied ${file}`);
}
console.log("Seed complete.");
