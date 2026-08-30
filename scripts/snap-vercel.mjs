import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
  defaultViewport: { width: 1400, height: 900 },
});
const page = await browser.newPage();
const logs = [];
page.on("pageerror", e => logs.push("ERR: " + e.message));
await page.goto("https://jaygopal-portfolio.vercel.app/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 4000));
await page.screenshot({ path: "/tmp/snap/vercel2.png" });
const errors = logs.length;
console.log("page errors:", errors);
if (errors > 0) logs.slice(0, 5).forEach(l => console.log(" ", l));
await browser.close();
