export const todoReducer = (initialState = [], action) => {
    switch(action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Delete Todo':
            return initialState.filter((todo) => todo.id !== action.payload);
        case '[TODO] Complete Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        status: 'complete'
                    }
                }
                return todo;
            });
        case '[TODO] Active Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        status: 'active'
                    }
                }
                return todo;
            });
        case '[TODO] Pending Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        status: 'pending'
                    }
                }
                return todo;
            });
        case '[TODO] Toggle Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            });
        case '[TODO] Update Todo':
            return initialState.map((todo) => {
                if(todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            })
        default:
            console.log('No se realizo ninguna action');
            return initialState;
    }
}