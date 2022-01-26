import Image from "next/image"
import { useSession, signIn, signOut } from "next-auth/react"

import Container from "src/components/layout/Container"
import Button from "src/components/common/Button";

import logo from "public/images/vercel.svg";

export default function TopBar({ }: Props) {
  const { data: session } = useSession()

  const handleSignIn = () => {
    if (session) {
      signOut()
    } else {
      signIn()
    }
  }

  return (
    <div className="top-bar bg-white dark:bg-gray-900 shadow-md shadow-gray-100">
      <Container className="justify-between px-4 py-2">
        <Image src={logo} alt='logo' height={40} width={100} />
        <div className="top-bar-right">
          <div className="top-bar-item">
            <Button label={`${session ? session?.user?.name : "login"}`} onClick={handleSignIn} />
          </div>
        </div>
      </Container>
    </div >
  );
}

type Props = {}