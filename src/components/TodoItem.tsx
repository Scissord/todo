import { FC } from "react"
import { useAppDispatch } from "../hooks/redux"
import { removeTodo } from "../store/reducers/todoSlice"
import { VStack,Text, HStack, IconButton, StackDivider, Spacer } from "@chakra-ui/react"
import { FaTrash } from 'react-icons/fa'
import '../App.module.css'

interface TodoItemProps {
	id: string,
	title: string,
}

const TodoItem: FC<TodoItemProps>= ({ id, title }) => {

	const dispatch = useAppDispatch()

  return (
	<VStack 
	ms={{ sm: '8vw', lg: '23vw', xl: '28vw', '2xl': '34vw' }}
	mt='3'
	borderColor='gray.100' 
	borderWidth='2px' 
	p='4' 
	borderRadius='lg'
	w='100%'
	divider={<StackDivider/>}
	alignItems='stretch'
	maxW={{base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw', '2xl': '30vw'}}
	>
		<HStack>
			<Text fontSize='3xl'>{title}</Text>
			<Spacer/>
			<IconButton
				rounded='50%'
				aria-label=""
				onClick={() => dispatch(removeTodo(id))}
				icon={<FaTrash/>}
			/>
		</HStack>
	</VStack>
  )
}

export default TodoItem