import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));
await page.screenshot({ path: "/tmp/snap/mobile-gh-hero.png" });
await page.evaluate(() => window.scrollTo(0, 1100));
await new Promise(r => setTimeout(r, 1500));
await page.screenshot({ path: "/tmp/snap/mobile-gh-about.png" });
await browser.close();
