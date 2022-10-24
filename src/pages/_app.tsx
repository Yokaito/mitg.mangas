import type { AppType } from 'next/app'
import { trpc } from '@/sdk/utils/trpc'
import GlobalStyle from '@/styles/resets/createGlobalStyle'
import theme from '@/styles/theme/theme'
import { ThemeProvider } from 'styled-components'
import ErrorBoundary from '@/sdk/error/ErrorBoundary'

const MyApp: AppType = ({ Component, pageProps, router }) => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Component {...pageProps} key={router.route} />
      </ErrorBoundary>
      <GlobalStyle />
    </ThemeProvider>
  )
}
export default trpc.withTRPC(MyApp)
