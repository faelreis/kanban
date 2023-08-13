import Image from 'next/image'
import logoRafael from '../../assets/rafael-logo.svg'
import boardIcon from '../../assets/icons/boards.svg'
import dashboardIcon from '../../assets/icons/report.svg'
import teamIcon from '../../assets/icons/team.svg'
import configIcon from '../../assets/icons/config.svg'
import Link from 'next/link'


export function Navbar(){
    return(
        <div className='bg-purple h-screen w-1/5 p-8 ease transition-all duration-300 hover:drop-shadow-2xl'>
            <Image
                src={logoRafael}
                alt='Logo Rafael Reis'
            />
            <nav className='mt-32'>
                <ul className='flex flex-col gap-12'>

                    <li>
                        <Link href='/boards' className='flex gap-4 cursor-pointer transition-all ease duration-300 hover:opacity-70'>
                            <Image
                                src={boardIcon}
                                alt='Board icon'
                            />
                            <span className='text-white'>Boards</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard' className='flex gap-4 cursor-pointer transition-all ease duration-300 hover:opacity-70'>
                            <Image
                                src={dashboardIcon}
                                alt='Dashboard icon'
                            />
                            <span className='text-white'>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/equipe' className='flex gap-4 cursor-pointer transition-all ease duration-300 hover:opacity-70'>
                            <Image
                                src={teamIcon}
                                alt='Team icon'
                            />
                            <span className='text-white'>Equipe</span>
                        </Link>
                    </li>
                    <li>
                        <Link href='/ajustes' className='flex gap-4 cursor-pointer transition-all ease duration-300 hover:opacity-70'>
                            <Image
                                src={configIcon}
                                alt='Config icon'
                            />
                            <span className='text-white'>Ajustes</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}