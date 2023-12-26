import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, onDeleteItem}) => {
  return (
    <ul>
      {todos.map((e) => <TodoItem key ={e.id} {...e} onDeleteItem={onDeleteItem}/>)}
    </ul>
  )
}
