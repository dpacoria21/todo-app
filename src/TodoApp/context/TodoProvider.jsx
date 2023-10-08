import { TodoContext } from "./TodoContext"

export const TodoProvider = ({children}) => {

    
    return (
        <TodoContext.Provider value={
            {
                dni: 75124385,
                name: 'Diego Pacori'
            }
        }>
            {children}
        </TodoContext.Provider> 
    )
}