import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const svg = fs.readFileSync(path.resolve("./public/images/name-particles.svg"));
await sharp(svg, { density: 200 })
  .resize({ width: 1600 })
  .png()
  .toFile(path.resolve("./public/images/name-particles.png"));
console.log("done");