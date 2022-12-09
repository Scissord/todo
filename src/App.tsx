import { useState } from 'react';
import { useAppDispatch } from './hooks/redux';

import { addTodo } from './store/reducers/todoSlice';
import './App.module.css';
import TodoList from'./components/TodoList'
import TodoForm from './components/TodoForm';

function App() {

  const [text, setText] = useState('')
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className="App">
      <TodoForm
      value={text}
      updateText={setText}
      handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
