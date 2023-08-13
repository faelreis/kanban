import { Navbar } from "@/app/components/Navbar";
import { User } from "../components/User";

export default function Ajustes(){
    return(
        <div className='flex'>
            <Navbar/>
            <div className='p-12'>
                <h1 className='text-black'>Ajustes area</h1>
                <User/>
            </div>
        </div>
    )
}