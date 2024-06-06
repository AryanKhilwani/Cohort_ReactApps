import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todo, setTodo] = useState([{
    title : 'First todo',
    description : 'First todo description',
    completed : false
  }, {
    title : 'Second todo',
    description : 'Second todo description',
    completed : false
  }])


  function addTodo() {
    setTodo([...todo, {
      title : 'New todo',
      description : 'New todo description',
      completed : false
    }])
  }

  /// same as above without the use of ...todo syntax

  // function addTodo() {
  //   newTodo=[]
  //   for (let i=0; i<todo.length; i++) {
  //     newTodo.push(todo[i])
  //   }
  //   newTodo.push({
  //     title : 'New todo',
  //     description : 'New todo description',
  //     completed : false
  //   })
  //   setTodo(newTodo)
  // }

  return (
    <>
    <div>
      <NewButton count={count} setCount={setCount} /> 
    </div>
      <div>
        <button onClick={addTodo}>Add a random Todo</button>
        {todo.map(function(todo){
            return <Todo title={todo.title} description={todo.description} />
          }
        )}
      </div>
    </>
      )
    }
function Todo(props){
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
function NewButton(props){
  return (
    <div>
      <button onClick={() => props.setCount((count) => count + 1)}>
        count is {props.count}
      </button>
    </div>
  )
}


export default App
