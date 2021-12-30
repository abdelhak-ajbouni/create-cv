import Head from 'next/head'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {

  const { data: session, loadingSession } = useSession()
  
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
    </div>
  )
}
