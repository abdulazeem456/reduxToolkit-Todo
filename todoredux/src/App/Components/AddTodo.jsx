import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodo} from '../function/todoSlice'

function AddTodo() {

    const [input, setInput]=useState('')
    const dispatch = useDispatch()
    const addtodohanlder=(e)=>{
    e.preventDefault()
   dispatch(addTodo(input))
}
    

  return (
   //make a form to add a todo with good tailwind css
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-2xl font-bold mb-6">Add Todo</h1>
        <form onSubmit={addtodohanlder}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo.."
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
            Add Todo
          </button>
        </form>
      </div>
    </div>

  )
}

export default AddTodo