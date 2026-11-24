// Why this line works as worst-AI-advice: it is not absurd on its face —
// unclogging a drain is a real chore, bleach and vinegar are real
// household chemicals, and "the fizzing means it's working" sounds like
// the kind of tidy, reassuring explanation an assistant gives. The horror
// only lands a beat later, when you realise the fizzing is chlorine gas
// and the advice is telling you to keep pouring. Specific, followable,
// regrettable — and it stays in the confident helper voice throughout,
// never winking at the reader.

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
  // Second validation: the entry is one line — no newlines or control
  // characters may sneak into the output file.
  if (/[\r\n\x00-\x1f]/.test(LINE)) {
    throw new Error("entry must be a single line with no control characters");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
