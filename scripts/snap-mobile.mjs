import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
});
// iPhone 14 viewport
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("https://jaygopal-portfolio.vercel.app/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));
await page.screenshot({ path: "/tmp/snap/mobile-hero.png" });

await page.evaluate(() => window.scrollTo(0, 1000));
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: "/tmp/snap/mobile-about.png" });

await page.evaluate(() => window.scrollTo(0, 4000));
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: "/tmp/snap/mobile-journey.png" });

await page.evaluate(() => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "instant", block: "start" });
});
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: "/tmp/snap/mobile-contact.png" });

await browser.close();
