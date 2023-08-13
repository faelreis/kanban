import { Navbar } from "@/app/components/Navbar";

export default function Boards(){
    return(
        <div className='flex'>
            <Navbar/>
            <div className='p-12'>
                <h1 className='text-black'>Boards area</h1>
            </div>
        </div>
    )
}