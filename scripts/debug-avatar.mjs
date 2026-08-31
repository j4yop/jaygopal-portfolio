import puppeteer from "puppeteer-core";
const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: "new",
  args: ["--no-sandbox", "--use-gl=swiftshader", "--enable-unsafe-swiftshader"],
});
const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await page.goto("https://j4yop.github.io/jaygopal-portfolio/", { waitUntil: "networkidle2" });
await new Promise(r => setTimeout(r, 3000));
const info = await page.evaluate(() => {
  const avatar = document.querySelector('img[alt*="Jay Gopal"]');
  if (!avatar) return { found: false };
  const r = avatar.getBoundingClientRect();
  const parent = avatar.parentElement;
  const pp = parent.getBoundingClientRect();
  const wrapper = parent.parentElement;
  const wp = wrapper.getBoundingClientRect();
  return {
    imgW: r.width, imgH: r.height,
    parentW: pp.width,
    wrapperW: wp.width,
    wrapperCls: wrapper.className,
    parentCls: parent.className,
  };
});
console.log(JSON.stringify(info, null, 2));
await browser.close();
