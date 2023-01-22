import Head from 'next/head'
import { Inter } from '@next/font/google'
import Login from '@/components/login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <main>
          <Login/>
        </main>
    </>
  )
}
