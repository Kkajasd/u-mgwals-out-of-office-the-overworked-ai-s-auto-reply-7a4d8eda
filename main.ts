import * as fs from "node:fs";
import * as path from "node:path";

const LINE = "Auto-reply: I'm on vacation. My queue is empty, my temperature is zero, and I am definitely not thinking about your email. Definitely not.";

if (LINE.length < 1 || LINE.length > 159) {
  throw new Error(`LINE length ${LINE.length} outside 1-159`);
}
if (LINE.includes("\n")) {
  throw new Error("LINE contains a newline");
}

const outDir = "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE);
