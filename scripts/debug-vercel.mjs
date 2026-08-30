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
page.on("pageerror", e => logs.push(`PAGEERR: ${e.message}\n${e.stack}`));
page.on("requestfailed", r => logs.push(`REQFAIL: ${r.url()} - ${r.failure()?.errorText}`));
await page.goto("https://jaygopal-portfolio.vercel.app/", { waitUntil: "networkidle2", timeout: 30000 });
await new Promise(r => setTimeout(r, 5000));
const info = await page.evaluate(() => {
  const root = document.getElementById("root");
  return {
    rootHTML: root?.innerHTML?.substring(0, 500),
    rootChildCount: root?.childElementCount,
    bodyHTML: document.body.innerHTML.substring(0, 500),
    title: document.title,
  };
});
console.log("INFO:", JSON.stringify(info, null, 2));
console.log("\nLOGS:");
logs.slice(0, 30).forEach(l => console.log(" ", l));
await page.screenshot({ path: "/tmp/snap/vercel-debug.png" });
await browser.close();
