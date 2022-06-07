export function toBase64 (file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result.split(',')[1])
    reader.onerror = error => reject(error)
  })
}

export function compressImage (file, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        let width = img.width
        let height = img.height
        const max = 500
        const ratio = Math.min(max / width, max / height)
        width = width * ratio
        height = height * ratio
        canvas.width = width
        canvas.height = height
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.src = reader.result
    }
    reader.onerror = error => reject(error)
    reader.readAsDataURL(file)
  })
}

export async function forceCompressImage (file, quality = 0.8, limit) {
  try {
    const output = await compressImage(file, quality)
    const temp = output.split(',')[1]
    const fileSize = temp.length * (3 / 4)
    if (fileSize > limit) throw new Error()
    return temp
  } catch (e) {
    if (quality - 0.05 <= 0.05) return
    return await forceCompressImage(file, quality - 0.05, limit)
  }
}
