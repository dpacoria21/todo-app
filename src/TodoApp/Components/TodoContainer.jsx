import { useEffect, useReducer } from "react";
import { todoReducer } from "../hooks/useReducer";
import { Todo } from "./Todo"
import { TodoInput } from "./TodoInput"
import { useTodos } from "../hooks/useTodos";

let initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoContainer = () => {
    
    const {todos, onHandleActiveTodo, onHandleCompleteTodo, onHandleDeleteTodo, onHandleNewTodo, onHandlePendingTodo} = useTodos();

    return (
        <section className="flex flex-col gap-8 py-10 px-5 w-5/6 md:w-5/12 bg-slate-100/80 rounded-xl">

            <TodoInput onAddTodo={onHandleNewTodo}/>

            <div className="flex flex-col gap-5">
                {
                    todos.map((todo) => (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            handleDeleteTodo={onHandleDeleteTodo}
                            handleCompleteTodo={onHandleCompleteTodo}
                            handleActiveTodo={onHandleActiveTodo}
                            handlePendingTodo={onHandlePendingTodo}
                        />
                    ))
                }
            </div>



        </section>
    )
}
