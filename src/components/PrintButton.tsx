"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream"
    >
      Print / Save as PDF
    </button>
  );
}
