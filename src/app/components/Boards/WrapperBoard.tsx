'use client'
import { useState } from "react";
import { ListCard } from "./Card/ListCard";
import { NewCard } from "./NewCard";
import { TitleList } from "./TitleList";

export function WrapperBoard(){
    const [titleName, setTitleName] = useState('TO DO')
    return(
        <div className='flex flex-col w-full'>
            <TitleList titleName={titleName}/>
            <ListCard/>
            <NewCard/>
        </div>

    )
}