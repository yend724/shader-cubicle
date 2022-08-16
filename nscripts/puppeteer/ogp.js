const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer-core");

(async () => {
  console.log("OGP Process start!");
  const pages = JSON.parse(fs.readFileSync("src/data/route.json", "utf8"));
  const route = pages["pages"].filter(v => v.directory === "code");

  const browser = await puppeteer.launch({
    headless: true,
    // slowMo: 1000,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  });

  const page = await browser.newPage();

  await page.goto(`file:${path.resolve(process.cwd(), "src/ogp/index.html")}`);

  try {
    for (let i = 0; i < route.length; i++) {
      const currentPage = route[i];
      if (fs.existsSync(`public/images/code/${currentPage.path}-ogp.png`)) {
        console.log(`${currentPage.path}-ogp is aleady exsit.`);
        continue;
      }
      await page.setViewport({ width: 1200, height: 630 });

      await page.evaluate(currentPage => {
        const label = document.getElementById("title");
        label.textContent = currentPage.title;
      }, currentPage);

      await page.screenshot({
        path: `public/images/code/${currentPage.path}-ogp.png`,
        type: "png",
      });
      console.log(`【Screenshot】${currentPage.path}-ogp`);
    }
    console.log("OGP finish!");
  } catch (error) {
    console.log("Error: " + error);
  } finally {
    await browser.close();
  }

  await browser.close();
})();
