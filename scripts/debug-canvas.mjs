import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: [
    "--no-sandbox",
    "--use-gl=swiftshader",
    "--enable-unsafe-swiftshader",
    "--disable-web-security",
  ],
  defaultViewport: { width: 1400, height: 900 },
});

const page = await browser.newPage();
const errors = [];
const logs = [];
page.on("console", (msg) => logs.push(`[${msg.type()}] ${msg.text()}`));
page.on("pageerror", (e) => errors.push(`PAGEERROR: ${e.message}\n${e.stack}`));

await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2", timeout: 30000 });
await new Promise((r) => setTimeout(r, 3000));

const info = await page.evaluate(() => {
  const out = { canvases: [] };
  document.querySelectorAll("canvas").forEach((c, i) => {
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    const item = {
      idx: i,
      width: c.width,
      height: c.height,
      hasGL: !!gl,
      rect: c.getBoundingClientRect().toJSON(),
    };
    if (gl) {
      const pixels = new Uint8Array(4);
      // Center
      gl.readPixels(c.width / 2, c.height / 2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
      item.centerRGBA = Array.from(pixels);
      // 9 sample points
      item.samples = [];
      for (let yi = 0; yi < 3; yi++) {
        for (let xi = 0; xi < 3; xi++) {
          const x = Math.floor((c.width * (xi + 1)) / 4);
          const y = Math.floor((c.height * (yi + 1)) / 4);
          gl.readPixels(x, c.height - y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
          item.samples.push({ x, y, rgba: Array.from(pixels) });
        }
      }
    }
    out.canvases.push(item);
  });
  return out;
});

console.log("=== INFO ===");
console.log(JSON.stringify(info, null, 2));
console.log("\n=== CONSOLE ===");
logs.slice(-30).forEach((l) => console.log(l));
console.log("\n=== ERRORS ===");
errors.forEach((e) => console.log(e));

await page.screenshot({ path: "/tmp/snap/pup.png" });
console.log("\nScreenshot: /tmp/snap/pup.png");

await browser.close();