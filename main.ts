// Roast the Smart Fridge — writes one line to /output/entry.txt
// Gate: 126 chars (max 160), one line, no trailing newline.
// Twist: the fridge is a snitch that reports to the doctor.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "My smart fridge logs",
  "my 2 a.m. snacks, then emails",
  "my doctor a weekly report —",
  "I bought an appliance and",
  "it grew a conscience.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
