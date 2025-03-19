import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../function/todoSlice'

function Todo() {
  const Todos=useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
  <>
  <div>previous value</div>
    <div>
        {Todos.map((todo) => (
            <div key={todo.id} className="flex justify-between items-center p-4 border-b border-gray-300">
            <span>{todo.title}</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))} className="text-red-600">
                Delete
            </button>
            </div>
        ))}
    
    </div>
  </>
  )
}

export default Todo