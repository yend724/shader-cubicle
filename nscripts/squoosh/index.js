const { existsSync, readFileSync, mkdirSync } = require("fs");
const { writeFile } = require("fs/promises");
const fg = require("fast-glob");
const { ImagePool } = require("@squoosh/lib");
const imagePool = new ImagePool();

(async () => {
  const IMAGE_DIR = "public/images/code";
  const OUTPUT_DIR = IMAGE_DIR;

  const webpEncodeOptions = {
    webp: {
      quality: 75,
    },
  };

  const imageFileList = await fg(["public/images/code/**/*.jpg"]);

  const imagePoolList = imageFileList.map(file => {
    const imageFile = readFileSync(file);
    const fileSplit = file.split("/");
    const fileName = fileSplit[fileSplit.length - 1].replace(".jpg", "");
    const image = imagePool.ingestImage(imageFile);
    return { name: fileName, image };
  });

  await Promise.all(
    imagePoolList.map(async item => {
      const { image } = item;
      await image.encode(webpEncodeOptions);
    })
  );

  for (const item of imagePoolList) {
    const {
      name,
      image: { encodedWith },
    } = item;

    const data = await encodedWith.webp;
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR);
    }
    if (!existsSync(`${OUTPUT_DIR}/${name}.webp`)) {
      await writeFile(`${OUTPUT_DIR}/${name}.webp`, data.binary);
      console.log(`Convert to ${OUTPUT_DIR}/${name}.webp`);
    } else {
      console.log(`${OUTPUT_DIR}/${name}.webp is already exsist`);
    }
  }

  await imagePool.close();
})();
