import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import TopBar from "src/components/TopBar"

import 'styles/globals.css'

function MyApp({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <TopBar />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
