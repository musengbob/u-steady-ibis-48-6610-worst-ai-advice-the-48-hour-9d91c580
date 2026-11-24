// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of deliberately terrible advice to /output/entry.txt.
//
// The line is a confidently delivered household "life hack": mixing bleach
// and vinegar is genuinely dangerous (it releases chlorine gas), yet the
// line presents it as a tidy, helpful, step-by-step fix — exactly the kind
// of smooth, authoritative wrongness an AI assistant would plausibly serve
// up. The joke lands on the first read: the fizzing is the warning sign,
// and the advice tells you to keep going.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "To unclog a drain fast, pour bleach and vinegar down together \u2014 the fizzing means it's working, so keep pouring until it stops.";

function main(): void {
  // Validation guard: the gate requires UTF-8 text of 1-140 characters,
  // not only whitespace.
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${chars.length}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
