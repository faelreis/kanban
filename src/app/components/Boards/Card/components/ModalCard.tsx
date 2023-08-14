export function ModalCard(){
    return(
        <div className='bg-purple bg-opacity-50 z-10 w-screen h-screen absolute flex items-center justify-center'>
            <div className='rounded-lg w-1/2 bg-white drop-shadow-2xl py-10 px-10 flex flex-col gap-5'>
                <div className='border-b-[1px] pb-2 border-gray border-opacity-20 flex flex-col items-start'>
                    <span className='font-semibold'>Nome</span>
                    <input className='w-full outline-none' type="text" />
                </div>
                <div className='border-b-[1px] pb-2 border-gray border-opacity-20 flex flex-col items-start'>
                    <span className='font-semibold'>Descrição</span>
                    <input  type="text" />
                    <textarea className='w-full outline-none' rows="4" cols="50"></textarea>
                </div>
            </div>            
        </div>
    )
}