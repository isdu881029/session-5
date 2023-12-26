import React from 'react'

export const TodoItem = ({title, id, onDeleteItem}) => {
  return (
    <li>{title} <button onClick={() => onDeleteItem(id)}>delete</button></li>
  )
}
