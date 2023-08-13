import { Todo } from "./Todo"
import { TodoInput } from "./TodoInput"

export const TodoContainer = () => {

    const nameStatus = ['active', 'pending', 'complete']

    const todos = [
        {
            id: 0,
            status: nameStatus[0],
            title: 'Learn Redux',
        },
        {
            id: 1,
            status: nameStatus[0],
            title: 'Learn NodeJS',
        },
        {
            id: 2,
            status: nameStatus[0],
            title: 'Learn tailwindCSS',
        },
        {
            id: 3,
            status: nameStatus[1],
            title: 'Learn MySQL'
        },
        {
            id: 4,
            status: nameStatus[1],
            title: 'Learn Git'
        },
        {
            id: 5,
            status: nameStatus[2],
            title: 'Learn JavaScript'
        }
    ]

    return (
        <section className="flex flex-col gap-8 py-10 px-5 w-4/6 sm:w-3/6 bg-slate-100/80 rounded-xl">

            <TodoInput />

            <div className="flex flex-col gap-5">
                {
                    todos.map((todo) => (
                        <Todo key={todo.id} todo={todo} />
                    ))
                }
            </div>



        </section>
    )
}
