import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 140;

const ENTRY_TEXT: string =
  "Up? I'm chilling a $120 eye cream next to a loose hot dog. Are we rich or not?";

function validateEntry(text: string): void {
  const charCount: number = Array.from(text).length;
  const byteCount: number = Buffer.byteLength(text, "utf8");
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`Entry length ${charCount} outside allowed range 1..${MAX_CHARS}`);
  }
  if (byteCount < 1) {
    throw new Error("Entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be whitespace only");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_TEXT, { encoding: "utf8" });
}

main();
