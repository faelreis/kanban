import { Card } from "./Card";

export function ListCard(){
    return(
        <div className='flex flex-col gap-4'>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}