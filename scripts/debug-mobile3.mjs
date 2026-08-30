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
  return {
    rootHTML: document.getElementById("root").innerHTML.substring(0, 500),
    touchSupport: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    maxTouchPoints: navigator.maxTouchPoints,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
