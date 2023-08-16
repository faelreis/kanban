import { databases } from "../appwrite";

export const getTodosGroupedByColumn = async () => {
    const data  = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    );


    const todos = data.documents
    console.log(todos)
    
    const columns = todos.reduce((acc, todo) => {
        if(!acc.get(todo.status)){
            acc.set(todo.status, {
                id: todo.status,
                todos: [],
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createAt: todo.createdAt,
            title: todo.title,
            description: todo.description,
            tag: todo.tag,
            status: todo.status,
        })

        return acc;

    }, new Map<TypedColumn, Column>)
    
    console.log(columns)
}