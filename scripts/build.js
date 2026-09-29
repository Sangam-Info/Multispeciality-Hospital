// Zero-dependency static build: copies the site into ./dist for Cloudflare Pages.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const out = path.join(root, "dist");
const include = ["index.html", "assets"];

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const item of include) {
  const src = path.join(root, item);
  if (!fs.existsSync(src)) {
    console.error(`Missing required file/folder: ${item}`);
    process.exit(1);
  }
  fs.cpSync(src, path.join(out, item), {
    recursive: true,
    filter: (p) => !p.endsWith(".gitkeep"),
  });
}

console.log("Build complete -> dist/");
