import { neon } from "@neondatabase/serverless";
import { readFile } from "fs/promises";

// Uploads the user's own CV PDF into Neon (profile.cv_pdf_base64),
// following the same pattern as scripts/upload-photo.mjs.
// The PDF itself is never committed to the repo (push_files is text-only);
// the base64 lives in the database and in db/seed.sql for re-seeding.
const sql = neon(process.env.DATABASE_URL);
const buf = await readFile(
  "/home/hatch/workspace/user/files/Kaung_Htet_Zan_Thar_Resume_6_meb8.pdf"
);
const b64 = buf.toString("base64");
await sql`ALTER TABLE profile ADD COLUMN IF NOT EXISTS cv_pdf_base64 TEXT`;
await sql`UPDATE profile SET cv_pdf_base64 = ${b64} WHERE id = 1`;
const rows =
  await sql`SELECT id, name, length(cv_pdf_base64) AS len FROM profile WHERE id = 1`;
console.log(
  "profile id:",
  rows[0].id,
  "name:",
  rows[0].name,
  "cv_pdf_base64 chars:",
  rows[0].len,
  "bytes original:",
  buf.length
);
