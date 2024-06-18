import { createSlice, nanoid } from "@reduxjs/toolkit";

const getInitialState = () => {
    if (typeof window !== 'undefined') {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        return todos;
    }
}

const saveTodos = (todos) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("todos", JSON.stringify(todos));
    }
}

const initialState = {
    todos: getInitialState()
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            saveTodos(state.todos)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            saveTodos(state.todos)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.text = text
            }
            saveTodos(state.todos)
        },
        toggleCompleted: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
            saveTodos(state.todos)
        }
    }
})

export const { addTodo, removeTodo, updateTodo, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;