import { AppProps } from 'next/app'

export const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return <Component {...pageProps} key={router.route} />
}

export default MyApp
