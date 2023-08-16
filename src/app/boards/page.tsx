import { Navbar } from "@/app/components/Navbar";
import { Header } from "../components/Header";
import { FilterTask } from '@/app/components/Boards/FilterTask';
import { SearchTask } from "../components/Boards/SearchTask";
import { WrapperBoard } from "../components/Boards/Column";
import { ModalCard } from "../components/Boards/Card/components/ModalCard";

export default function Boards(){
    return(
        <>
            <Header/>
            <div className='flex'>
                <Navbar/>
                    <div className='p-12 w-full'>
                        <div className='mb-10 flex gap-7 w-full justify-between'>
                            <FilterTask/>
                            <SearchTask/>
                        </div>
                        <div className='w-full h-full flex gap-10'>
                            <WrapperBoard/>
                            <WrapperBoard/>
                            <WrapperBoard/>
                        </div>
                    </div>
            </div>
        </>
    )
}