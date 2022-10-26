import { trpc } from '@/sdk/utils/trpc'
import { toast } from 'react-toastify'

export const Home = () => {
  const { data } = trpc.hello.greetings.useQuery({ name: 'World' })
  const notify = () => toast.info('Wow so easy !')

  return (
    <>
      {JSON.stringify(data)}
      <button onClick={notify}>Toast</button>
    </>
  )
}

export default Home
