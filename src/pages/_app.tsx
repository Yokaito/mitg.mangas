import type { AppType } from 'next/app'
import { trpc } from '@/sdk/utils/trpc'
import GlobalStyle from '@/styles/resets/createGlobalStyle'
import theme from '@/styles/theme/theme'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '@/sdk/error/ErrorBoundary'
import NextNProgress from 'nextjs-progressbar'

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <NextNProgress height={4} color="#209cee" />
        <Component {...pageProps} key={router.route} />
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default trpc.withTRPC(MyApp)
