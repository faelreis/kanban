import { Card } from "./components/Card";

export function ListCard(){
    return(
        <div className='flex flex-col gap-4'>
            <Card cardName={'Criar setup'} cardDescription={'Captar informações na documentação'}/>
            <Card cardName={'Criar código'} cardDescription={'Com JavaScript'}/>
            <Card cardName={'Criar design'} cardDescription={'Com Figma'}/>
        </div>
    )
}