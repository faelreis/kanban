import { Navbar } from "@/app/components/Navbar";
import { Header } from "../components/Header";
import { FilterTask } from '@/app/components/FilterTask';
import { SearchTask } from "../components/SearchTask";
import { ListCard } from "../components/ListCard";
import { TitleList } from "../components/TitleList";
import { NewCard } from "../components/NewCard";

export default function Boards(){
    return(
        <>
            <Header/>
            <div className='flex'>
                <Navbar/>
                    <div className='p-12 w-full'>
                        <div className='flex gap-7 w-full justify-between'>
                            <FilterTask/>
                            <SearchTask/>
                        </div>
                        <div>
                            <TitleList/>
                            <ListCard/>
                            <NewCard/>
                        </div>
                    </div>
            </div>
        </>
    )
}