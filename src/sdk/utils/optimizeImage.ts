import sharp from 'sharp'

export const toAvif = async (buffer: Buffer): Promise<Buffer> => {
  return sharp(buffer).toFormat('avif').toBuffer()
}
