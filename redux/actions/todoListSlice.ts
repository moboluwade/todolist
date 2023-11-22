import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface todoListObject {
    id: number,
    todo: string,
}
export interface todoListState {
    value: todoListObject[]
}

const initialState: todoListState = {
    value: []
}

export const todoListSlice = {
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state: todoListObject[], action: PayloadAction<string>) => {
            [...state, action.payload]
        }
    }
}