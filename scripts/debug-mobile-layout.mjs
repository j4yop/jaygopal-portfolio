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
  // Check what's in the viewport at the top
  const sections = document.querySelectorAll("section");
  const result = [];
  sections.forEach((s, i) => {
    const r = s.getBoundingClientRect();
    result.push({
      idx: i,
      id: s.id || s.className.substring(0, 30),
      top: r.top,
      height: r.height,
      width: r.width,
      visible: r.top < window.innerHeight && r.bottom > 0,
    });
  });
  return {
    scrollY: window.scrollY,
    sections: result.slice(0, 6),
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
