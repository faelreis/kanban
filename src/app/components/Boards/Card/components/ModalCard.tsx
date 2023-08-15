type ModalCardProps = {
    rows?: string | number
    cols?: string | number
}

export function ModalCard(props: ModalCardProps){
    const { rows, cols } = props;
    return(
        <div className='z-10 w-full h-full absolute flex items-center justify-center drop-shadow-2xl'>
            <div className='rounded-lg w-1/2 bg-white drop-shadow-2xl py-10 px-10 flex flex-col gap-5'>
                <div className='bg-red-600 font-black py-2 px-4 absolute top-0 right-0 text-white rounded-md transition-all ease duration-300 cursor-pointer hover:opacity-70'>X</div>
                <div className='border-b-[1px] pb-5 border-gray border-opacity-20 flex flex-col items-start'>
                    <span className='font-semibold'>Nome</span>
                    <input className='bg-white w-full outline-none' type="text" />
                </div>
                <div className='border-b-[1px] pb-5 border-gray border-opacity-20 flex flex-col items-start'>
                    <span className='font-semibold'>Descrição</span>
                    <textarea className='bg-white w-full outline-none' rows={5} cols={5}></textarea>
                </div>
                <div className='border-b-[1px] pb-5 border-gray border-opacity-20 flex flex-col items-start'>
                    <span className='font-semibold mb-3'>Status</span>
                    <div className='flex flex-col gap-5 w-full'>
                        <button className='bg-orange-500 w-full py-3 font-medium rounded-md text-white transition-all ease duration-300 hover:bg-orange-700'>Para fazer</button>
                        <button className='bg-blue-500 w-full py-3 font-medium rounded-md text-white transition-all ease duration-300 hover:bg-blue-700'>Fazendo</button>
                        <button className='bg-green-500 w-full py-3 font-medium rounded-md text-white transition-all ease duration-300 hover:bg-green-700'>Finalizado</button>
                    </div>
               </div>
               <div>
                    <button className='w-full py-3 bg-purple text-white font-semibold rounded-md transition-all ease duration-300 border-[1px] border-purple hover:bg-opacity-20 hover:text-purple'>Adicionar card</button>
               </div>
            </div>            
        </div>
    )
}