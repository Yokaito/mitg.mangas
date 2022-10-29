import { trpc } from '@/sdk/lib/trpc'
import { fileToBase64 } from '@/sdk/utils/files'
import { FormEvent, useEffect } from 'react'
import { toast } from 'react-toastify'

export const Form = () => {
  const mutation = trpc.hello.sendFile.useMutation()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const file = event.target?.file.files[0]
    const file64 = await fileToBase64(file)
    mutation.mutate({ base64: file64.body })
  }

  useEffect(() => {
    if (!mutation.isSuccess) return

    toast.success('File sent')
  }, [mutation])

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input id="file" name="file" type="file" />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form
