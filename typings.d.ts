interface Board{
    columns: Map<TypedColumn, Column>
}


type TypedColumn = 'todo' | 'inprogress' | 'done'

interface Column extends Models.Document{
    id: TypedColumn,
    todos: Todo[],
}

interface Todo {
    $id: string,
    $createAt: string,
    title: string,
    description?: string,
    tag?: string[],
    status?: TypedColumn
}