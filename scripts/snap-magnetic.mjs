import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});
const page = await browser.newPage();
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 2500));

// Move mouse over the nav (to show magnetic effect)
await page.mouse.move(700, 50);
await new Promise(r => setTimeout(r, 200));
await page.mouse.move(750, 60);
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: "/tmp/snap/magnetic-nav.png" });

// Move over hero CTA
await page.mouse.move(600, 700);
await new Promise(r => setTimeout(r, 300));
await page.mouse.move(700, 720);
await new Promise(r => setTimeout(r, 600));
await page.screenshot({ path: "/tmp/snap/magnetic-hero.png" });

await browser.close();
