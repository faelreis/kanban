type titleNameProps = {
    titleName?: string,
}

export function TitleList({ titleName }: titleNameProps){
    return(
        <h3 className='uppercase font-bold w-fit mb-4 text-lg'>{titleName}</h3>
    )
}