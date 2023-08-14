
type TagProps = {
    nameTag?: string | number;
    colorTag?: string | number;
}

export function TagCard({ nameTag }: TagProps){
    return(
        <span className={`px-4 py-1 bg-purple bg-opacity-10 rounded text-red`}>{nameTag}</span>
    )
}