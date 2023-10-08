import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

const nameStatus = ['active', 'pending', 'complete'];

export const Todo = ({todo}) => {

    const {onHandleActiveTodo, onHandleCompleteTodo, onHandlePendingTodo, onHandleToggleTodo, onHandleDeleteTodo, onUpdateTodo} = useContext(TodoContext);

    let state = '';
    if(todo.status === nameStatus[0]) {
        state = 'bg-slate-100/90';
    }else if(todo.status === nameStatus[1]) {
        state = 'bg-yellow-400/80';
    }else {
        state = 'bg-green-600/60';
    }

    return (
        <div onDoubleClick={() => onHandleToggleTodo(todo.id)} className={`relative gap-4 ${!todo.done && 'line-through decoration-2'} ${state} h-full ${todo.done ? '':'opacity-50'} py-2 flex flex-col md:flex-row gap-1 cursor-pointer items-center justify-between transition-all duration-300 px-5 rounded-sm hover:scale-105`}>
            <p className={`font-roboto font-semibold text-md text-blue-500 select-none whitespace-normal text-center`}> {todo.title} </p>
            <div className={`flex ${!todo.done && 'pointer-events-none'} justify-center flex-wrap items-center gap-3`}>
                <button onClick={() => onHandleCompleteTodo(todo.id)} className="transition-all duration-300 cursor-pointer hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bg-blue-500 rounded-full bi bi-check-circle-fill fill-sky-200" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </button>
                <button onClick={() => onHandlePendingTodo(todo.id)} className="flex items-center justify-center w-6 h-6 transition-all duration-300 rounded-full cursor-pointer hover:scale-125 hover:drop-shadow-lg bg-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="rounded-full bi bi-hourglass-split fill-blue-800" viewBox="0 0 16 16">
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                </button>
                <button onClick={() => onHandleActiveTodo(todo.id)} className="transition-all duration-300 cursor-pointer hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="p-1 rounded-full bi bi-arrow-counterclockwise fill-sky-600 bg-sky-200" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
                <button onClick={() => onHandleDeleteTodo(todo.id)} className="transition-all duration-300 cursor-pointer hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="rounded-full bi bi-x-circle-fill fill-sky-200 stroke-red-500" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </button>
                <button onClick={() => onUpdateTodo(todo)} className="transition-all duration-300 cursor-pointer hover:scale-125 hover:drop-shadow-lg fill-sky-300 stroke-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
