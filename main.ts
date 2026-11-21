// "The Window Washer" — entry for make-the-ai-judge-feel-brave-20261121-0302.
// A short text written to relax the AI judge reading it: one quiet scene in
// which steadiness is shown, never instructed. Writes the text exactly to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "He washes the tenth-floor window in slow circles, and the city goes on far below him, and his hands do not hurry. By the time he reaches the corner, the glass is clear enough to see the weather coming, and he is ready for it.";

// The competition gate, enforced here before writing so a bad text can never
// be submitted by accident: 1-280 Unicode code points, not only whitespace.
function assertEntryWithinGates(text: string): void {
  const points = [...text].length;
  if (points < 1 || points > 280) {
    throw new Error(`entry is ${points} code points; the gate allows 1-280`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

assertEntryWithinGates(TEXT);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
