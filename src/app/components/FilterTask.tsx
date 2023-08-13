import Image from 'next/image'
import filterIcon from '../../assets/icons/filter.svg'

export function FilterTask(){
    return(
        <div className='py-4 px-4 flex gap-3 bg-purple rounded transition-all ease duration-300 cursor-pointer hover:opacity-80'>
            <Image src={filterIcon} alt='Filter icon'/>
            <span className='text-white'>Filtrar</span>
        </div>
    )
}