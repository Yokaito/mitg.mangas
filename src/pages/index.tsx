import { trpc } from '@/sdk/lib/trpc'
import Image from 'next/image'
import { toast } from 'react-toastify'

export const Home = () => {
  const { data } = trpc.hello.greetings.useQuery({ name: 'World' })
  const notify = () => toast.info('Wow so easy !')

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={notify}>Toast</button>
      <Image
        src="https://mitg-mangas.s3.sa-east-1.amazonaws.com/icon-512.png"
        blurDataURL="https://mitg-mangas.s3.sa-east-1.amazonaws.com/icon-512.png"
        alt="test"
        placeholder="blur"
        height={512}
        width={512}
      ></Image>
    </>
  )
}

export default Home
