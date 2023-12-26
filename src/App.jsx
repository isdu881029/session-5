// import {Counter} from "./components/Counter"

import { useState } from "react"
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  console.log(todos);
  const onNewTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const onDeleteItem = (id) => {
    const newFilteredTodos = todos.filter((item) => item.id !== id)
    setTodos(newFilteredTodos);
  }

  return(
    <div>
      {/* <Counter /> */}
      <TodoForm onNewTodo={onNewTodo}/>
      <TodoList todos={todos} onDeleteItem={onDeleteItem}/>


    </div>
  )
}

export default App
