import { Card } from '@/components/Series'
import { trpc } from '@/sdk/lib/trpc'
import Head from 'next/head'
import { toast } from 'react-toastify'

export const Home = () => {
  const { data } = trpc.hello.greetings.useQuery({ name: 'World' })
  const notify = () => toast.info(JSON.stringify(data))

  return (
    <>
      <Head>
        <title>MITG | Mangas</title>
      </Head>
      <button onClick={notify}>Toast</button>
      <Card />
    </>
  )
}

export default Home
