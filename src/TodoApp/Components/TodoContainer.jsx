import { Todo, TodoInput } from "./"
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

export const TodoContainer = () => {

    const {todos} = useContext(TodoContext);
    
    
    const nameStatus = ['active', 'pending', 'complete'];

    return (
        <section className="flex flex-col w-5/6 gap-8 px-10 py-10 md:w-5/12 bg-slate-100/80 rounded-xl">

            <TodoInput />
            
            <div className="flex flex-col items-center justify-center gap-2 text-lg text-center select-none xl:flex-row">
                <p className="px-4 font-bold font-roboto">Tareas: {
                    todos.reduce((acc, current) => current.done ? acc+1: acc
                        , 0)
                }</p>
                <p className="px-4 font-bold font-roboto text-yellow-500/80 ">Pendientes: {
                    todos.reduce((acc, current) => {
                        if(current.status === nameStatus[1] && current.done) {
                            return acc+1;
                        }
                        return acc;
                    }, 0)
                }</p>
                <p className="px-4 font-bold font-roboto text-green-600/60">Completadas: {
                    todos.reduce((acc, current) => {
                        if(current.status === nameStatus[2] && current.done) {
                            return acc+1;
                        }
                        return acc;
                    }, 0)
                }</p>
            </div>

            <div className="flex flex-col gap-5">
                {
                    todos.map((todo) => (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                        />
                    ))
                }
            </div>



        </section>
    )
}
