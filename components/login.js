import { useSession, signIn, signOut } from "next-auth/react"
import NextIcon from '@/public/next.svg'
import Image from "next/image"

const Login = () => {
    const { data: session } = useSession()

    console.log(session)


    return (
        <div className="flex w-1/3 p-10 mt-60 bg-white m-auto items-center rounded-lg flex-col">

            <Image
                src={NextIcon}
                width={250}
                height={250}
                className="my-5"
                alt="NextJS icon"
            />

            {session ? (
                <div className="flex justify-center items-center flex-col">
                    <h1 className="mt-2 text-xl">Welcome, {session.user.name}</h1>
                    <img src={session.user.image} alt="Imagen" className="rounded-full w-20 h-full mt-4 "/>
                    <button
                        className="mt-10 bg-red-700 text-white uppercase rounded-md p-2 mb-3 font-bold  hover:bg-red-900 hover:cursor-pointer "
                        onClick={() => signOut()}
                    >
                        Sign Out
                    </button>
                </div>

            ) : (
                <button
                    className="mt-10 bg-indigo-700 text-white uppercase rounded-md p-2 mb-3 font-bold flex hover:bg-indigo-900 hover:cursor-pointer "
                    onClick={() => signIn()}>Sign in
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github ml-2 " width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                </button>
            )}



        </div>
    )
}

export default Login