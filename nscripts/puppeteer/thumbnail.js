const fs = require("fs");
const puppeteer = require("puppeteer-core");

(async () => {
  console.log("Thumbnail process start!");
  if (!fs.existsSync("temp")) {
    fs.mkdirSync("temp");
  }
  const pages = JSON.parse(fs.readFileSync("src/data/route.json", "utf8"));
  const route = pages["pages"].map(v => v.path);

  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 1000,
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
      console.log(`【Open】http://localhost:3000/code/${route[i]}/`);
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
      await page.screenshot({
        path: `temp/${route[i]}.jpg`,
        type: "jpeg",
      });
      await page.screenshot({
        path: `temp/${route[i]}.webp`,
        type: "webp",
      });
      console.log("【Screenshot】" + route[i]);
    }
    console.log("Thumbnail finish!");
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    await browser.close();
  }
})();
