import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id: nanoid(),
        title: "Learn Redux"
    }]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(newTodo)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;