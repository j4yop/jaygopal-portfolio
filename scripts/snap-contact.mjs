import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});
const page = await browser.newPage();
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4500));
await page.evaluate(() => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "instant", block: "start" });
});
await new Promise(r => setTimeout(r, 3000));
await page.screenshot({ path: "/tmp/snap/contact.png", fullPage: false });
await browser.close();
