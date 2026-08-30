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
  return Array.from(root.children).map(c => ({
    tag: c.tagName,
    cls: c.className.toString().substring(0, 80),
    transform: c.style.transform,
    inline_style: c.getAttribute("style")?.substring(0, 200),
    childCount: c.children.length,
  }));
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
