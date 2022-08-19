const { existsSync, readdirSync, readFileSync, mkdirSync } = require("fs");
const { writeFile } = require("fs/promises");
const { ImagePool } = require("@squoosh/lib");
const imagePool = new ImagePool();

const IMAGE_DIR = "temp";
const OUTPUT_DIR = "public/images/code";

const jpgEncodeOptions = {
  mozjpeg: { quality: 75 },
};

const pngEncodeOptions = {
  oxipng: {
    effort: 2,
  },
};

const webpEncodeOptions = {
  webp: {
    quality: 75,
  },
};

(async () => {
  console.log("Compress process start!");
  const imageFileList = readdirSync(IMAGE_DIR).filter(file => {
    const regex = /\.(jpe?g|png|webp)$/i;
    return regex.test(file);
  });

  const imagePoolList = imageFileList.map(fileName => {
    const imageFile = readFileSync(`${IMAGE_DIR}/${fileName}`);
    const image = imagePool.ingestImage(imageFile);
    return { name: fileName, image };
  });

  await Promise.all(
    imagePoolList.map(async item => {
      const { image } = item;
      if (/\.(jpe?g)$/i.test(item.name)) {
        await image.encode(jpgEncodeOptions);
      }
      if (/\.(png)$/i.test(item.name)) {
        await image.encode(pngEncodeOptions);
      }
      if (/\.(webp)$/i.test(item.name)) {
        await image.encode(webpEncodeOptions);
      }
    })
  );

  for (const item of imagePoolList) {
    const {
      name,
      image: { encodedWith },
    } = item;

    let data;
    if (encodedWith.mozjpeg) {
      data = await encodedWith.mozjpeg;
    }
    if (encodedWith.oxipng) {
      data = await encodedWith.oxipng;
    }
    if (encodedWith.webp) {
      data = await encodedWith.webp;
    }
    if (!existsSync(OUTPUT_DIR)) {
      mkdirSync(OUTPUT_DIR);
    }
    await writeFile(`${OUTPUT_DIR}/${name}`, data.binary);
  }
  console.log("Compress finish!");
  // imagePoolを閉じる
  await imagePool.close();
})();
