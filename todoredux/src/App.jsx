import './App.css'
import AddTodo from './Components/AddTodo.jsx'
import Todo from './Components/Todo.jsx'
import {Provider} from 'react-redux'
import Store from './App/store'

function App() {


  return (
    <Provider store={Store}>
     <h1>Redux Toolkit Todo </h1>
     <AddTodo />
     <Todo />
    </Provider>
  )
}

export default App
