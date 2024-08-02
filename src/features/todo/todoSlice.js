import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todosIS: [{
        id: 1, 
        text: "Hellow World"
    }],
}

const todoSlice = createSlice({
    name: "007",
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todosIS.push(todo);
        },
        removeTodo: (state, action) => {
            state.todosIS = state.todosIS.filter((todo) => todo.id !== action.payload)
        },
    }
})
//its used for components
export const {addTodo, removeTodo} = todoSlice.actions
//its used for store
export default todoSlice.reducer