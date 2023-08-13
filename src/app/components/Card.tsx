import { TagCard } from "./TagCard";

export function Card(){
    return(
        <div className='p-6 bg-fullWhite rounded-lg w-fit transition-all ease duration-300 cursor-pointer hover:drop-shadow-xl'>
            <h4 className='font-semibold'>Criar interface do App</h4>
            <p>Desenvolver com React e Talwind uma aplicação de Kaban, com design atrativo.</p>
            <TagCard nameTag={'React'} colorTag={'#253eb9'}/>
        </div>
    )
}