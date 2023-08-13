import Link from 'next/link'
import userImage from '../../assets/profile.jpg'
import Image from 'next/image'

export function User(){
    return(
        <Link href='/ajustes'>
            <Image
                src={userImage}
                alt='Imagem do usuáro'
                quality={100}
                className='rounded-full transtion-all ease duration-300 cursor-pointer hover:scale-110'
            />
        </Link>
    )
}