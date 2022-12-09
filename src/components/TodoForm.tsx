import { FC } from "react"
import { Box, Input, Button, InputGroup, InputLeftElement, Heading, IconButton, VStack, HStack, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa'
import {GiNotebook} from 'react-icons/gi'

interface TodoFormProps {
	value: string, 
	updateText: (str: string) => void,
	handleAction: () => void,
}

const TodoForm: FC<TodoFormProps> = ({ value, updateText, handleAction }) => {
	const {colorMode, toggleColorMode} = useColorMode()

  return (
	<Box>
		<Box display='flex' justifyContent='flex-end' m='1'>
			<IconButton
			aria-label=""
			icon={colorMode === 'light' ? <FaSun/> : <FaMoon/>}
			size='lg'
			onClick={toggleColorMode}
			rounded='50%'
			/>
		</Box>
		<Box display='flex' justifyContent='center' mt='130px'>
			<Heading
			mb='8'
			fontWeight='extrabold'
			size='2xl'
			bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
			bgClip='text'
			>
				Todo Application
			</Heading>
		</Box>
		<VStack>
			<HStack>
				<InputGroup>
					<InputLeftElement
					fontSize='1.5em'
					pointerEvents='none'
					children={<GiNotebook color='black' />}
					/>
					<Input 
					placeholder="Enter note"
					value={value}
					onChange={(e) => updateText(e.target.value)}
					isInvalid
					w='100%'
					errorBorderColor='red.300'
					focusBorderColor='pink.400' />
				</InputGroup>
				<Button
				colorScheme='yellow'
				onClick={handleAction}
				>
					Add todo
				</Button>
			</HStack>
		</VStack>
	</Box>
	
  )
}

export default TodoForm