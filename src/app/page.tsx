import Link from 'next/link'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div className ='flex flex-col items-center justify-center w-screen h-screen'>
        <h1>Faça seu login de acesso</h1>
        <Link href='/boards' className='bg-purple text-white p-4'>Acessar</Link>
    </div>
  )
}
