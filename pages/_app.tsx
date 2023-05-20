import type { AppProps } from 'next/app'
import { GlobalStyle } from '../src/styles/Global'
import { ResetStyles } from '../src/styles/Reset'
import { Header } from '../src/components/Header'
import { Logo } from '../src/components/Logo'
import { AccountContextProvider } from '../src/hooks/useAccount'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AccountContextProvider>
          <ResetStyles />
          <GlobalStyle />
          <Header />
          <Logo />
          <Component {...pageProps} />
        </AccountContextProvider>
      </QueryClientProvider>
    </>
  )
}
