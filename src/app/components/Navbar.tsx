import Image from 'next/image'
import logoRafael from '../../assets/rafael-logo.svg'
import boardIcon from '../../assets/icons/boards.svg'

export function Navbar(){
    return(
        <div className='bg-purple h-screen w-1/5 p-6'>
            <Image
                src={logoRafael}
                alt='Logo Rafael Reis'
            />
            <nav>
                <ul>
                    <li>
                        <Image
                            src={boardIcon}
                            alt='Board icon'
                        />
                        <span>Boards</span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}