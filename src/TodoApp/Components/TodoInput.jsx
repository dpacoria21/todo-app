import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { useForm } from "../hooks/useForm";
import { v4 as uuid } from 'uuid';


export const TodoInput = () => {

    const { todoActive, onHandleNewTodo, onHandleUpdateTodo, onResetActiveTodo} = useContext(TodoContext);

    const {title, onInputChange, onResetForm, onUpdateForm} = useForm({
        title: todoActive.title
    });

    useEffect(() => {
        onUpdateForm('title', todoActive.title);
    }, [todoActive]);

    const onSubmitForm = (event) => {
        event.preventDefault();

        if(title <= 1) return;
        if(todoActive.id !== null) {
            onHandleUpdateTodo({
                ...todoActive,
                title
            });
            onResetForm();
            onResetActiveTodo();
            
        }else {
            const newTodo = {
                id: uuid(),
                status: 'active',
                title,
                done: true,
            }
            onHandleNewTodo(newTodo);
            onResetForm();
        }

    }

    return (
        <form onSubmit={onSubmitForm} className="relative flex items-center w-full pl-1 rounded-md h-14 bg-blue-700/70">
            <input 
                type="text" 
                placeholder="Agrega una tarea..."
                className="w-full h-12 px-3 py-1 text-lg font-medium border-0 rounded-sm outline-none font-roboto"
                name='title'
                value={title}
                onChange={onInputChange}
            />
            <button type="submit" className="flex items-center justify-center w-16 h-full group">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF" className="transition-all duration-300 bi bi-plus stroke-slate-50 group-hover:stroke-blue-400 group-hover:scale-110" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </form>
    )
}
