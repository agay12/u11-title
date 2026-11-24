import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "My job title is Chief Vibe Officer: I attend meetings to emit calm, audit morale by eyebrow position, and my only KPI is whether the demo feels lucky.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY_TEXT, "utf8");
console.log("wrote " + target + ": " + ENTRY_TEXT.length + " chars");
