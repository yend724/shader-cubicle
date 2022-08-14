const fs = require("fs");
const puppeteer = require("puppeteer-core");

(async () => {
  console.log("Process start!");
  const pages = JSON.parse(fs.readFileSync("src/data/route.json", "utf8"));
  const route = pages["pages"].map(v => {
    return v.path.toLocaleLowerCase().replace(/\s+/g, "-");
  });

  const browser = await puppeteer.launch({
    headless: false,
    // slowMo: 300,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  try {
    for (let i = 0; i < route.length; i++) {
      await page.goto(`http://localhost:3000/code/${route[i]}`);
      console.log(`open: http://localhost:3000/code/${route[i]}`);
      await page.setViewport({ width: 800, height: 800 });
      await page.waitForSelector("#webgl");
      await page.evaluate(() => {
        document.body.style.backgroundColor = "#000";
        const header = document.getElementById("header");
        if (header) {
          header.style.opacity = 0;
        }
        const section = document.getElementById("section");
        if (section) {
          section.style.padding = 0;
        }
        const webgl = document.getElementById("webgl");
        if (webgl) {
          window.scrollTo(0, webgl.getBoundingClientRect().top + 1);
        }
      });
      if (!fs.existsSync(`public/images/code/${route[i]}.png`)) {
        await page.screenshot({ path: `public/images/code/${route[i]}.png` });
        console.log("screenshot: " + route[i]);
      } else {
        console.log(route[i] + " is aleady exsit.");
      }
    }
    console.log("All Success!");
  } catch (error) {
    console.log("error: " + error);
  } finally {
    await browser.close();
  }
})();
