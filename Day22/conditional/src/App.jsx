import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)

  const [todos, settodos] = useState([
    { title: "todo1", description: "description1" },
    { title: "todo2", description: "description2" },
    { title: "todo3", description: "description3" },
  ])

  const Todo = ({ todo }) => {
    return (<>
      <div className='m-4 border border-violet-200 bg-yellow-100'>
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
      </div>

    </>
    )
  }


  return (
    <>

      {/* {showbtn?<button>Showbtn is True</button>:""} */}
      {showbtn && <button>Showbtn is True</button>}
      <div className="card">

        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle Showbtn
        </button>

        {/* {todos.map(item => {
          return <Todo key={todo.title} todo={item} />
        })} */}

        <div>
          {todos.map(todo => {
            return <div key={todo.title} className='m-4 border border-purple-200'><h1>{todo.title}</h1>
              <h5>{todo.description}</h5></div>
          })}
        </div>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
