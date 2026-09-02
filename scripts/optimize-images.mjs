// Generate web-sized photos in src/assets/ from the full-res originals in
// profile-pic/. Always sources from the originals, so it's safe to re-run.
//   node scripts/optimize-images.mjs
import sharp from 'sharp'
import { statSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = new URL('../', import.meta.url)
const src = (p) => fileURLToPath(new URL('profile-pic/' + p, root))
const out = (p) => fileURLToPath(new URL('src/assets/' + p, root))

const jobs = [
  // hero portrait: square crop, anchored to the top so the face stays in frame
  { from: 'work.jpg', to: 'headshot.jpg', width: 720, quality: 80, square: true },
  // about photo: keep the WHOLE frame, just scale down + compress
  { from: 'trail-run-2.jpg', to: 'trail-run-2.jpg', width: 800, quality: 74 },
]

for (const job of jobs) {
  try {
    let img = sharp(src(job.from)).rotate() // honour EXIF orientation
    img = job.square
      ? img.resize({ width: job.width, height: job.width, fit: 'cover', position: 'north', withoutEnlargement: true })
      : img.resize({ width: job.width, withoutEnlargement: true })
    const buf = await img.jpeg({ quality: job.quality, mozjpeg: true }).toBuffer()
    await sharp(buf).toFile(out(job.to))
    const before = statSync(src(job.from)).size
    const after = statSync(out(job.to)).size
    console.log(
      `${job.to}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`,
    )
  } catch (err) {
    console.warn(`skip ${job.to}: ${err.message}`)
  }
}
