import { useAppSelector } from "../hooks/redux"
import TodoItem from "./TodoItem"
import { FC } from "react"

const Todolist: FC = () => {

	const todos = useAppSelector(state => state.todos.list)

  return (
	<ul>
		{todos.map((todo) => (
			<TodoItem
			key={todo.id}
			{...todo}
			/>
		))}
	</ul>
  )
}

export default Todolist