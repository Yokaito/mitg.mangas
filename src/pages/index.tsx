import { trpc } from '@/sdk/utils/trpc'

export const Home = () => {
  const { data } = trpc.hello.greetings.useQuery({ name: 'World' })

  return <>{JSON.stringify(data)}</>
}

export default Home
