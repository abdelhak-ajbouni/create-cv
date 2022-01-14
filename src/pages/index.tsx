import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { useSession, getSession } from "next-auth/react"

const Home: NextPage = () => {
  const { status } = useSession()

  if (status === "loading") {
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


      <h1 className="text-3xl font-bold underline">
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}