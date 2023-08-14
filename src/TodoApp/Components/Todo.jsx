import { useState } from "react";

const nameStatus = ['active', 'pending', 'complete'];

export const Todo = ({todo, handleDeleteTodo, handleCompleteTodo, handleActiveTodo, handlePendingTodo, handleToggleTodo}) => {

    // Refactorizar este codigo para que este dentro del todo y trabaje con una
    // propiedad en este mismo

    let state = '';
    if(todo.status === nameStatus[0]) {
        state = 'bg-slate-100/90';
    }else if(todo.status === nameStatus[1]) {
        state = 'bg-yellow-400/80';
    }else {
        state = 'bg-green-600/60';
    }

    return (
        <div onDoubleClick={() => handleToggleTodo(todo.id)} className={`relative gap-4 ${!todo.done && 'line-through decoration-2'} ${state} h-full ${todo.done ? '':'opacity-50'} py-2 flex flex-col md:flex-row gap-1 cursor-pointer items-center justify-between transition-all duration-300 px-5 rounded-sm hover:scale-105`}>
            <p className={`font-roboto font-semibold text-md text-blue-500 select-none whitespace-normal text-center`}> {todo.title} </p>
            <div className={`flex ${!todo.done && 'pointer-events-none'} justify-center flex-wrap items-center gap-3`}>
                <button onClick={() => handleCompleteTodo(todo.id)} className="cursor-pointer transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-check-circle-fill fill-sky-200 bg-blue-500 rounded-full" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                </button>
                <button onClick={() => handlePendingTodo(todo.id)} className="cursor-pointer transition-all duration-300 hover:scale-125 hover:drop-shadow-lg bg-sky-200 rounded-full h-6 w-6 flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="bi bi-hourglass-split fill-blue-800 rounded-full" viewBox="0 0 16 16">
                        <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg>
                </button>
                <button onClick={() => handleActiveTodo(todo.id)} className="cursor-pointer transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-arrow-counterclockwise fill-sky-600 p-1 bg-sky-200 rounded-full" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                    </svg>
                </button>
                <button onClick={() => handleDeleteTodo(todo.id)} className="cursor-pointer transition-all duration-300 hover:scale-125 hover:drop-shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" className="bi bi-x-circle-fill fill-sky-200 stroke-red-500 rounded-full" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
