import sharp from "sharp"
import { readdir, mkdir } from "node:fs/promises"
import path from "node:path"

const inputDir = path.join(process.cwd(), "public", "equipe")
const outputDir = path.join(process.cwd(), "public", "equipe-otimizada")

await mkdir(outputDir, { recursive: true })

const files = await readdir(inputDir)

for (const file of files) {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) continue

  const inputPath = path.join(inputDir, file)
  const outputName = `${path.parse(file).name}.webp`
  const outputPath = path.join(outputDir, outputName)

  await sharp(inputPath)
    .rotate()
    .resize({
      width: 1200,
      height: 1500,
      fit: "cover",
      position: "top",
      withoutEnlargement: true,
    })
    .webp({ quality: 82 })
    .toFile(outputPath)

  console.log(`Convertida: ${file} -> ${outputName}`)
}

console.log("Todas as imagens foram otimizadas.")
