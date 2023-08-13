import { User } from "./User";
import logoRafael from '../../assets/rafael-logo.svg'
import Image from 'next/image'

export function Header(){
    return(
        <header className='px-8 py-5 border-b-[1px] border-gray border-opacity-20 border-solid flex justify-between'>
            <Image src={logoRafael} alt='Logo Rafael Reis'/>
            <User/>
        </header>
    )
}