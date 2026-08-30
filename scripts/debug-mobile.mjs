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
  const html = document.documentElement;
  const body = document.body;
  const root = document.getElementById("root");
  const magnetic = document.querySelector(".magnetic-cursor");
  return {
    viewport: { w: window.innerWidth, h: window.innerHeight },
    htmlScrollWidth: html.scrollWidth,
    htmlClientWidth: html.clientWidth,
    bodyScrollWidth: body.scrollWidth,
    bodyClientWidth: body.clientWidth,
    bodyOffsetWidth: body.offsetWidth,
    rootWidth: root?.offsetWidth,
    rootChildren: root?.childElementCount,
    magneticCursor: magnetic ? { w: magnetic.offsetWidth, h: magnetic.offsetHeight, left: magnetic.style.left, top: magnetic.style.top, position: getComputedStyle(magnetic).position } : null,
    bodyOverflow: getComputedStyle(body).overflow,
    htmlOverflow: getComputedStyle(html).overflow,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
