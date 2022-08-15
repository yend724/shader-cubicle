const fs = require("fs");
const puppeteer = require("puppeteer-core");

(async () => {
  console.log("Process start!");
  const pages = JSON.parse(fs.readFileSync("src/data/route.json", "utf8"));
  const route = pages["pages"].map(v => {
    return v.path.toLocaleLowerCase().replace(/\s+/g, "-");
  });

  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 100,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });
  const page = await browser.newPage();
  try {
    for (let i = 0; i < route.length; i++) {
      if (fs.existsSync(`public/images/code/${route[i]}.jpg`)) {
        console.log(route[i] + " is aleady exsit.");
        continue;
      }
      await page.goto(`http://localhost:3000/code/${route[i]}/`);
      console.log(`【open】http://localhost:3000/code/${route[i]}/`);
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
      await page.screenshot({ path: `public/images/code/${route[i]}.jpg` });
      console.log("【screenshot】" + route[i]);
    }
    console.log("Finish!");
  } catch (error) {
    console.log("error: " + error);
  } finally {
    await browser.close();
  }
})();
