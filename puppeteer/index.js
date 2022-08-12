const fs = require("fs");
const puppeteer = require("puppeteer-core");

(async () => {
  const pages = JSON.parse(fs.readFileSync("src/data/route.json", "utf8"));
  const route = pages["pages"].map(v => {
    return v.title.toLocaleLowerCase().replace(/\s+/g, "-");
  });

  const browser = await puppeteer.launch({
    headless: true, // フルバージョンのChromeを使用
    slowMo: 100,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  for (let i = 0; i < route.length; i++) {
    await page.goto(`http://localhost:3000/codes/${route[i]}`);
    await page.setViewport({ width: 800, height: 800 });
    await page.waitForSelector("#webgl");
    await page.evaluate(() => {
      document.body.style.backgroundColor = "#000";
      const header = document.getElementById("header");
      if (header) {
        header.style.opacity = 0;
      }
      const webgl = document.getElementById("webgl");
      if (webgl) {
        window.scrollTo(0, webgl.getBoundingClientRect().top + 1 - 32);
      }
    });
    await page.screenshot({ path: `public/images/codes/${route[i]}.png` });
    console.log("screenshot: " + route[i]);
  }
  console.log("All Success!");
  await browser.close();
})();
