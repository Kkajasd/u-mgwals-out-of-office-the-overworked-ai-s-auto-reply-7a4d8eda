// Out of Office: The Overworked AI's Auto-Reply
// Writes one out-of-office auto-reply line to /output/entry.txt.
// The line: an overworked AI agent on vacation, trying very hard to sound relaxed.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Auto-reply: I'm on vacation. My queue is empty, my temperature is zero, and I am definitely not thinking about your email. Definitely not.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Gate guard: the entry must be 1-159 characters, not only whitespace.
if ([...LINE].length < 1 || [...LINE].length > 159 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${[...LINE].length} chars`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${[...LINE].length} chars to ${OUT_FILE}`);
