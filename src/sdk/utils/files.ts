type FileReturn = {
  body: string
  name: string
  type: string
  size: number
}

export const fileToBase64 = (file: File): Promise<FileReturn> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () =>
      resolve({
        body: reader.result as string,
        name: file.name.split('.')[0],
        type: file.type,
        size: file.size,
      })
    reader.onerror = (error) => reject(error)
  })
}
