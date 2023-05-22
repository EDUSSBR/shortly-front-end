import type { AppProps } from 'next/app'

import { Header } from '../src/components/Header'
import { Logo } from '../src/components/Logo'
import { AccountContextProvider } from '../src/hooks/useAccount'
import { LinkContextProvider } from '../src/hooks/useLink'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import '../styles/globals.css'
import { ResetStyles } from '../styles/Reset'
import { GlobalStyle } from '../styles/Global'
const queryClient = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyles />
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <LinkContextProvider>
          <AccountContextProvider >
            <Header />
            <Logo />
            <Component {...pageProps} />
          </AccountContextProvider>
        </LinkContextProvider>
      </QueryClientProvider>
    </>
  )
}
