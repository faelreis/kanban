
type TagProps = {
    nameTag?: string | number;
    colorTag?: string | number;
}

export function TagCard({ nameTag, colorTag }: TagProps){
    return(
        <span className={`p-2 bg-${colorTag} bg-opacity-20 text-red`}>{nameTag}</span>
    )
}