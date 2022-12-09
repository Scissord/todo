import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ITodo } from "../../models/ITodo"

interface TodoState {
	list: ITodo[],
}

const initialState: TodoState = {
	list: []
}

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			state.list.push({
				id: new Date().toString(),
				title: action.payload,
				completed: false,
			})
		},
		removeTodo(state, action: PayloadAction<string>) {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		}
	}
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;