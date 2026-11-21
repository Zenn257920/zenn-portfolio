import { neon } from "@neondatabase/serverless";
import { readFile } from "fs/promises";
import path from "path";

export const dynamic = "force-dynamic";

// Serves the portrait photo from the Neon database (profile.photo_base64).
// Falls back to the local public/portrait.jpg file when the database
// is unreachable or has no photo stored.
export async function GET() {
  const url = process.env.DATABASE_URL;
  if (url) {
    try {
      const sql = neon(url);
      const rows = await sql`SELECT photo_base64 FROM profile WHERE id = 1 LIMIT 1`;
      const b64 = (rows[0] as { photo_base64?: string | null } | undefined)?.photo_base64;
      if (b64) {
        return new Response(Buffer.from(b64, "base64"), {
          headers: {
            "Content-Type": "image/jpeg",
            "Cache-Control": "public, max-age=86400, immutable",
          },
        });
      }
    } catch {
      // Fall through to the local file.
    }
  }
  try {
    const file = await readFile(path.join(process.cwd(), "public", "portrait.jpg"));
    return new Response(file, {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch {
    return new Response("Portrait not found", { status: 404 });
  }
}
