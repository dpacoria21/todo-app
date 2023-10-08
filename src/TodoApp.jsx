import { useContext } from "react"
import { TodoPage } from "./TodoApp/pages/TodoPage"
import { TodoProvider } from "./TodoApp/context/TodoProvider"

export const TodoApp = () => {
    
    return (
        <TodoProvider>
            <TodoPage />
        </TodoProvider>
    )
}