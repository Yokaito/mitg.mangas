import type { AppType } from 'next/app'
import { trpc } from '@/sdk/utils/trpc'

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return <Component {...pageProps} key={router.route} />
}
export default trpc.withTRPC(MyApp)
