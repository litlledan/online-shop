import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from '../../redux/todos/todosSlice'

function ItemTodo() {
    const todos = useSelector((state) => state.todos.todo)

    const dispatch = useDispatch()

    const handleDetele = (id) => {
        dispatch(removeTodo(id))
    }

    const handleToggle = (id) => {
        dispatch(toggleTodo(id))
    }

  return (
      <ul>
            {todos.map((item) => (
                <li key={item.id}>
                    <input onChange={() => handleToggle(item.id)}  type='checkbox' checked={item.completed}/>
                    {item.text}
                    <button onClick={() =>handleDetele(item.id)} className='addBtn'>Delete</button>
                </li>
            ))}
        </ul>
  )
}

export default ItemTodo