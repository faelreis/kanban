import { TagCard } from "./TagCard";

type CardProps = {
    cardName: string,
    cardDescription: string,
}

export function Card({ cardName, cardDescription }: CardProps){
    return(
        <div className='p-6 bg-fullWhite rounded-lg w-full transition-all ease duration-300 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl'>
            <h4 className='font-semibold'>{cardName}</h4>
            <p className='text-gray mb-5 mt-2'>{cardDescription}</p>
            <div className='flex flex-wrap gap-3'>
                <TagCard nameTag={'React'}/>
                <TagCard nameTag={'Tailwind'}/>
            </div>
        </div>
    )
}