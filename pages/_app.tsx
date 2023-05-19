import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/Global'
import { ResetStyles } from '../src/styles/Reset'
import { Header } from '../src/components/Header'
import { Logo } from '../src/components/Logo'


interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyles />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <Logo />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
