import { neon } from "@neondatabase/serverless";

export const dynamic = "force-dynamic";

// Serves the user's own CV PDF from the Neon database
// (profile.cv_pdf_base64), as a download. Falls back to the /cv web page
// when the database is unreachable or has no PDF stored.
export async function GET(request: Request) {
  const url = process.env.DATABASE_URL;
  if (url) {
    try {
      const sql = neon(url);
      const rows = await sql`SELECT cv_pdf_base64 FROM profile WHERE id = 1 LIMIT 1`;
      const b64 = (rows[0] as { cv_pdf_base64?: string | null } | undefined)
        ?.cv_pdf_base64;
      if (b64) {
        return new Response(Buffer.from(b64, "base64"), {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
              'attachment; filename="Kaung_Htet_Zan_Thar_Resume.pdf"',
            "Cache-Control": "public, max-age=86400, immutable",
          },
        });
      }
    } catch {
      // Fall through to the /cv page.
    }
  }
  return Response.redirect(new URL("/cv", request.url));
}
