import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});
const page = await browser.newPage();
const logs = [];
page.on("console", m => logs.push(`[${m.type()}] ${m.text()}`));
page.on("pageerror", e => logs.push(`ERR: ${e.message}`));
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));
const info = await page.evaluate(() => {
  const canvases = document.querySelectorAll("canvas");
  return Array.from(canvases).map(c => {
    const ctx2 = document.createElement("canvas");
    ctx2.width = c.width; ctx2.height = c.height;
    ctx2.getContext("2d").drawImage(c, 0, 0);
    const d = ctx2.getContext("2d").getImageData(0, 0, c.width, c.height).data;
    let nonTransparent = 0;
    for (let i = 3; i < d.length; i += 4) if (d[i] > 0) nonTransparent++;
    return { w: c.width, h: c.height, nonTransparent };
  });
});
console.log("CANVASES:", JSON.stringify(info, null, 2));
console.log("LOGS:");
logs.forEach(l => console.log(" ", l));
await browser.close();
