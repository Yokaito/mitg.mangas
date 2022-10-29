export const base64ToBuffer = (base64: string): Buffer => {
  return Buffer.from(base64.replace(/^data:image\/\w+;base64,/, ''), 'base64')
}
