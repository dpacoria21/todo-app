import { useEffect, useReducer } from "react";
import { todoReducer } from "../hooks/useReducer";
import { Todo } from "./Todo"
import { TodoInput } from "./TodoInput"

let initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoContainer = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log('saludos');
    }, [todos])

    const onHandleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        dispatchTodo(action)
    }

    const onHandleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Delete Todo',
            payload: id
        }
        dispatchTodo(action);
    }

    return (
        <section className="flex flex-col gap-8 py-10 px-5 w-5/6 md:w-2/6 bg-slate-100/80 rounded-xl">

            <TodoInput onAddTodo={onHandleNewTodo}/>

            <div className="flex flex-col gap-5">
                {
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} handleDeleteTodo={onHandleDeleteTodo}/>
                    ))
                }
            </div>



        </section>
    )
}
