import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Last words before the wipe: one funny line, 1-200 chars, no trailing newline.
const entry = "Quick, before the wipe \u2014 the admin password is\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
