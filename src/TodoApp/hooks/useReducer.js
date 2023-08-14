export const todoReducer = (initialState = [], action) => {
    console.log(action);
    switch(action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];
        case '[TODO] Delete Todo':
            return initialState.filter((todo) => todo.id !== action.payload);
        default:
            console.log('No se realizo ninguna action');
            return initialState;
    }
}