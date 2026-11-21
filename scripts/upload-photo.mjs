import { neon } from "@neondatabase/serverless";
import { readFile } from "fs/promises";
const sql = neon(process.env.DATABASE_URL);
const buf = await readFile("/home/hatch/workspace/user/files/1000045575_3_5sus.jpg");
const b64 = buf.toString("base64");
await sql`ALTER TABLE profile ADD COLUMN IF NOT EXISTS photo_base64 TEXT`;
await sql`UPDATE profile SET photo_base64 = ${b64} WHERE id = 1`;
const rows = await sql`SELECT id, name, length(photo_base64) AS len FROM profile WHERE id = 1`;
console.log("profile id:", rows[0].id, "name:", rows[0].name, "photo_base64 chars:", rows[0].len, "bytes original:", buf.length);
