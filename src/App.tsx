import React, { useState, useCallback } from 'react';
import { ToDoList } from './components/TodoList'

const App: React.FC = () => {
  const [ count, setCount ] = useState<number>(0)

  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const handleDecrement = useCallback(() => {
    setCount(prev => prev - 1)
  }, [])

  return (
    <div className="App">
      <ToDoList />
    </div>
  )
}

export default App;
