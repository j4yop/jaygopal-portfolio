import puppeteer from "puppeteer-core";

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});

const page = await browser.newPage();
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise((r) => setTimeout(r, 4000));

// Use 2D canvas to draw the WebGL canvas content via drawImage
const result = await page.evaluate(() => {
  const src = document.querySelector("canvas");
  if (!src) return { error: "no canvas" };
  const out = document.createElement("canvas");
  out.width = src.width;
  out.height = src.height;
  const ctx = out.getContext("2d");
  try {
    ctx.drawImage(src, 0, 0);
  } catch (e) {
    return { error: "drawImage failed: " + e.message };
  }
  // Sample pixels
  const samples = [];
  for (let yi = 0; yi < 5; yi++) {
    for (let xi = 0; xi < 5; xi++) {
      const x = Math.floor((src.width * (xi + 1)) / 6);
      const y = Math.floor((src.height * (yi + 1)) / 6);
      const d = ctx.getImageData(x, y, 1, 1).data;
      samples.push({ x, y, rgba: Array.from(d) });
    }
  }
  // Count non-transparent pixels
  const fullData = ctx.getImageData(0, 0, out.width, out.height).data;
  let nonTransparent = 0;
  let yellowPixels = 0;
  for (let i = 0; i < fullData.length; i += 4) {
    if (fullData[i + 3] > 0) nonTransparent++;
    const r = fullData[i], g = fullData[i+1], b = fullData[i+2];
    if (r > 200 && g > 200 && b < 100) yellowPixels++;
  }
  return {
    canvasW: src.width,
    canvasH: src.height,
    totalPixels: out.width * out.height,
    nonTransparent,
    yellowPixels,
    samples,
  };
});

console.log(JSON.stringify(result, null, 2));
await page.screenshot({ path: "/tmp/snap/pup2.png" });
await browser.close();