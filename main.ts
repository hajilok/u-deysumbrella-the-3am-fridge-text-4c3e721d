import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const MAX_CHARS = 140;

const ENTRY_TEXT: string =
  "You've had your cousin's 2022 wedding magnet on my face for four years. They're divorced. Take it off.";

function validateEntry(text: string): void {
  const charCount: number = Array.from(text).length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(`Entry length ${charCount} outside allowed range 1..${MAX_CHARS}`);
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
