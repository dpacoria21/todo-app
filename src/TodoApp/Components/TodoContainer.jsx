import { Todo } from "./Todo"
import { TodoInput } from "./TodoInput"
import { useTodos } from "../hooks/useTodos";

export const TodoContainer = () => {
    
    const nameStatus = ['active', 'pending', 'complete'];
    const {todos, onHandleActiveTodo, onHandleCompleteTodo, onHandleDeleteTodo, onHandleNewTodo, onHandlePendingTodo, onHandleToggleTodo} = useTodos();

    return (
        <section className="flex flex-col gap-8 py-10 px-10 w-5/6 md:w-5/12 bg-slate-100/80 rounded-xl">

            <TodoInput onAddTodo={onHandleNewTodo}/>
            
            <div className="flex flex-col select-none xl:flex-row justify-center items-center">
                <p className="font-roboto font-bold px-4">Tareas: {
                    todos.reduce((acc, current) => current.done ? acc+1: acc
                        , 0)
                }</p>
                <p className="font-roboto font-bold text-yellow-500/80 px-4">Pendientes: {
                    todos.reduce((acc, current) => {
                        if(current.status === nameStatus[1] && current.done) {
                            return acc+1;
                        }
                        return acc;
                    }, 0)
                }</p>
                <p className="font-roboto font-bold text-green-600/60 px-4">Completadas: {
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
                            handleDeleteTodo={onHandleDeleteTodo}
                            handleCompleteTodo={onHandleCompleteTodo}
                            handleActiveTodo={onHandleActiveTodo}
                            handlePendingTodo={onHandlePendingTodo}
                            handleToggleTodo={onHandleToggleTodo}
                        />
                    ))
                }
            </div>



        </section>
    )
}
