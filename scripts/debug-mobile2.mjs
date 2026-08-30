import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("https://jaygopal-portfolio.vercel.app/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));
const info = await page.evaluate(() => {
  const root = document.getElementById("root");
  const result = [];
  function walk(el, depth) {
    if (depth > 3) return;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return;
    result.push({
      tag: el.tagName,
      cls: (el.className || "").toString().substring(0, 60),
      w: r.width, h: r.height, x: r.x, y: r.y,
      display: getComputedStyle(el).display,
    });
    for (const c of el.children) walk(c, depth + 1);
  }
  walk(root, 0);
  return result.slice(0, 40);
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
