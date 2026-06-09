import sharp from "sharp";
import fs from "fs";
import path from "path";

const INPUT_DIR = path.resolve("public/images/prewedding");
const OUTPUT_DIR = INPUT_DIR; // overwrite in place (originals backed up)
const BACKUP_DIR = path.resolve("public/images/prewedding/_originals");
const MAX_WIDTH = 1200;
const QUALITY = 80;

async function convertToWebP() {
  // Create backup directory
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  const files = fs.readdirSync(INPUT_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return [".jpg", ".jpeg", ".png"].includes(ext);
  });

  console.log(`Found ${files.length} images to convert...`);

  let converted = 0;
  let totalSavedBytes = 0;

  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const baseName = path.parse(file).name;
    const outputPath = path.join(OUTPUT_DIR, `${baseName}.webp`);
    const backupPath = path.join(BACKUP_DIR, file);

    try {
      const inputStats = fs.statSync(inputPath);
      const inputSize = inputStats.size;

      // Backup original
      fs.copyFileSync(inputPath, backupPath);

      // Convert to WebP
      await sharp(inputPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSize = outputStats.size;
      const saved = inputSize - outputSize;
      totalSavedBytes += saved;

      // Remove original jpg
      fs.unlinkSync(inputPath);

      converted++;
      const pct = ((saved / inputSize) * 100).toFixed(0);
      console.log(
        `  ✓ ${file} → ${baseName}.webp (${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB, -${pct}%)`
      );
    } catch (err) {
      console.error(`  ✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone! Converted ${converted}/${files.length} images.`);
  console.log(
    `Total saved: ${(totalSavedBytes / 1024 / 1024).toFixed(1)}MB`
  );
  console.log(`Originals backed up to: ${BACKUP_DIR}`);
}

convertToWebP();
