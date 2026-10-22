// Builds tiny blurred previews of each strain photo for next/image's blur
// placeholder. Run with `npm run blurs` after adding or replacing a photo.
import { readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const dir = 'public/images/strains';
const out = 'src/lib/strainBlurs.json';

const files = (await readdir(dir)).filter((f) => f.endsWith('.webp')).sort();
const blurs = {};

for (const file of files) {
  const buffer = await sharp(path.join(dir, file))
    .resize(16, 16, { fit: 'inside' })
    .webp({ quality: 50 })
    .toBuffer();
  blurs[`/images/strains/${file}`] = `data:image/webp;base64,${buffer.toString('base64')}`;
}

await writeFile(out, JSON.stringify(blurs, null, 2) + '\n');
console.log(`Wrote ${files.length} blur placeholders to ${out}`);
