import { useTodos } from "../hooks/useTodos";
import { TodoContext } from "./TodoContext"
import { useState } from "react";

const initialTodo = {
    id: null,
    status: '',
    title: '',
}

export const TodoProvider = ({children}) => {

    const [todoActive, setTodoInput] = useState(initialTodo);

    const {todos, onHandleActiveTodo, onHandleCompleteTodo, onHandleDeleteTodo, onHandleNewTodo, onHandlePendingTodo, onHandleToggleTodo, onHandleUpdateTodo} = useTodos();

    const onUpdateTodo = (todo) => {
        setTodoInput({
            ...todo
        });
    }

    const onResetActiveTodo = () => {
        setTodoInput(initialTodo);
    }

    return (
        <TodoContext.Provider value={
            {
                todos,
                onHandleActiveTodo,
                onHandleCompleteTodo,
                onHandleDeleteTodo,
                onHandleNewTodo,
                onHandlePendingTodo,
                onHandleToggleTodo,
                onHandleUpdateTodo,

                todoActive,
                onUpdateTodo,
                onResetActiveTodo,

            }
        }>
            {children}
        </TodoContext.Provider> 
    )
}