import Image from 'next/image'
import searchIcon  from '../../assets/icons/search.svg'

export function SearchTask(){
    return(
        <div className='px-6 py-4 gap-5 w-fit border-[#E3E3E3] border-[1px] rounded flex'>
            <Image src={searchIcon} alt='Search icon'/>
            <input placeholder='Busque por cards, assuntos...' type='text' className='bg-transparent outline-0	'/>
        </div>
    )
}