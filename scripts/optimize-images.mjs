import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

// 1. Compress OG image to under 10MB (target ~500KB for fast loading)
async function compressOgImage() {
  const input = path.join(publicDir, "images", "prewedding", "_originals", "FOOD9467.jpg");
  const output = path.join(publicDir, "images", "og-image.jpg");

  await sharp(input)
    .resize(1200, 630, { fit: "cover", position: "center" })
    .jpeg({ quality: 80, progressive: true })
    .toFile(output);

  const info = await sharp(output).metadata();
  const stats = await import("fs").then((fs) => fs.statSync(output));
  console.log(`✅ OG image compressed: ${(stats.size / 1024).toFixed(0)}KB (${info.width}x${info.height})`);
}

// 2. Get dimensions of selected gallery images
async function getGalleryDimensions() {
  const galleryImages = [
    "FOOD9467.webp",
    "FOOD0357.webp",
    "FOOD1315.webp",
    "FOOD8487.webp",
    "FOOD9557.webp",
    "FOOD2277.webp",
    "FOOD0554.webp",
    "FOOD8869.webp",
    "FOOD1166.webp",
    "FOOD9342.webp",
  ];

  console.log("\n📐 Gallery image dimensions:");
  const results = [];
  for (const filename of galleryImages) {
    const filepath = path.join(publicDir, "images", "prewedding", filename);
    const metadata = await sharp(filepath).metadata();
    results.push({ filename, width: metadata.width, height: metadata.height });
    console.log(`  ${filename}: ${metadata.width}x${metadata.height}`);
  }
  return results;
}

await compressOgImage();
await getGalleryDimensions();
