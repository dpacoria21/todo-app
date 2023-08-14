import { useEffect, useReducer } from "react"
import { todoReducer } from "./useReducer";


let initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
    
    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

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
    
    const onHandleCompleteTodo = (id) => {
        const action = {
            type: '[TODO] Complete Todo',
            payload: id
        }
        dispatchTodo(action);
    }
    
    const onHandleActiveTodo = (id) => {
        const action = {
            type: '[TODO] Active Todo',
            payload: id
        }
        dispatchTodo(action);
    }
    
    const onHandlePendingTodo = (id) => {
        const action = {
            type: '[TODO] Pending Todo',
            payload: id
        }
        dispatchTodo(action);
    }

    const onHandleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatchTodo(action);
    }

    // onHandleUpdatetodo
    

    return {
        todos,
        onHandleNewTodo,
        onHandleCompleteTodo,
        onHandleDeleteTodo,
        onHandlePendingTodo,
        onHandleActiveTodo,
        onHandleToggleTodo
    }
}