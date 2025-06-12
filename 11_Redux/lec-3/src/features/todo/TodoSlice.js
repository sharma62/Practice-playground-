import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let id = nanoid();
            let title  = action.payload;
            state.todos.push({ id, title })
        },
        removeTodo: (state, action) => {
            let id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        editTodo: (state, action) => {
            let id = action.payload;
            let index = state.todos.findIndex((todo) => todo.id === id)
            state.todos[index].title.text = prompt('Enter new todo', state.todos[index].title.text)
         }

    }
})
export const { addTodo, removeTodo,editTodo } = todoSlice.actions;
export default todoSlice.reducer;