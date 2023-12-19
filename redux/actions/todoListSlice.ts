import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface todoListObject {
    id: string,
    todo: string,
}
export interface todoListState {
    value: todoListObject[]
}

const initialState: todoListState = {
    value: []
}

const popTodo = (state: todoListObject[], id: string) => {
    const staleTodoIndex = state.findIndex((todo) => { todo.id === id })
    return [...state.slice(0, staleTodoIndex), ...state.slice(staleTodoIndex)]
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        // addTodo: (state: todoListObject[], action: PayloadAction<string>) => {
        //     [...state, action.payload]
        // },
        // removeTodo: (state: todoListObject[], action: PayloadAction<string>) => {
        //     popTodo(state, action.payload)
        // }
    }
})

// export const {addTodo, removeTodo} = todoListSlice.actions