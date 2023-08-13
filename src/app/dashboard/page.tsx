import { Navbar } from "@/app/components/Navbar";

export default function Dashboard(){
    return(
        <div className='flex'>
            <Navbar/>
            <div className='p-12'>
                <h1 className='text-black'>Dashboard area</h1>
            </div>
        </div>
    )
}