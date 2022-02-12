import { GetServerSideProps } from 'next'
import { getProviders, signIn } from "next-auth/react"
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin, BsGithub } from "react-icons/bs";


import Container from "src/components/layout/Container"

export default function SignIn({ providers }: Props) {

  const getProviderLogo = (id: string) => {
    switch (id) {
      case 'google':
        return <FcGoogle size={32} />
      case 'github':
        return <BsGithub size={28} />
      case 'linkedin':
        return <BsLinkedin size={28} color="0072b1 " />

      default:
        return <div>{id}</div>
    }
  }

  return (
    <div className='login'>
      <Container className='flex justify-center my-4 p-8 bg-white rounded'>
        {Object.values(providers).map((provider) => (
          <div key={provider.id} className='flex h-12 py-2 px-8 m-2 rounded border bg-gray-50'>
            {getProviderLogo(provider.id)}
            <button className='mx-4' onClick={() => signIn(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </Container>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}

type Props = {
  providers: any
}
