export function NewCard(){
    return(
        <div className='bg-purple bg-opacity-20 gap-4 flex items-center justify-center w-[350px] px-16 py-4 rounded text-purple transition-all ease duration-300 cursor-pointer hover:scale-110'>
            <strong className='text-xl'>+</strong>
            <strong className=''>Adicionar tarefa</strong>
        </div>
    )
}