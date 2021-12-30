import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"
import { useTheme } from 'next-themes'

export default function Home() {
  const { data: session, loadingSession } = useSession()
  const { theme, setTheme } = useTheme()

  if (loadingSession) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 className="title">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  )
}
