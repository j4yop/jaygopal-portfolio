import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});
const page = await browser.newPage();
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));

// Scroll to projects section
await page.evaluate(() => {
  document.getElementById("projects")?.scrollIntoView({ behavior: "instant", block: "start" });
});
await new Promise(r => setTimeout(r, 2000));

await page.screenshot({ path: "/tmp/snap/projects.png", fullPage: false });

// Also scroll to about
await page.evaluate(() => {
  document.getElementById("about")?.scrollIntoView({ behavior: "instant", block: "start" });
});
await new Promise(r => setTimeout(r, 1000));
await page.screenshot({ path: "/tmp/snap/about.png", fullPage: false });

await browser.close();
