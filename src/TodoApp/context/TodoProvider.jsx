import { useTodos } from "../hooks/useTodos";
import { TodoContext } from "./TodoContext"

export const TodoProvider = ({children}) => {

    const {todos, onHandleActiveTodo, onHandleCompleteTodo, onHandleDeleteTodo, onHandleNewTodo, onHandlePendingTodo, onHandleToggleTodo} = useTodos();

    return (
        <TodoContext.Provider value={
            {
                todos,
                onHandleActiveTodo,
                onHandleCompleteTodo,
                onHandleDeleteTodo,
                onHandleNewTodo,
                onHandlePendingTodo,
                onHandleToggleTodo
            }
        }>
            {children}
        </TodoContext.Provider> 
    )
}