import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setname] = useState("Harry")
  const [form,setform]=useState({})
      // name:"",email:"",password:""

  const handleClick=() => {
    alert("I am clicked")
  }
  
  const handleHover=() => {
    // alert("I am hovered")
  }
  
  const handleChange=(e) => {
    setform({...form,[e.target.name]:e.target.value})
  }
  

  return (
    <>
      <div>
        <button onClick={handleClick}>
          Click Me
        </button>
      </div>

      <div className="red" onMouseOver={handleHover}></div>

      {/* <input type="text" value={form.name} onChange={handleChange} name="name" id="" />
      <input type="email" value={form.email} onChange={handleChange} name="email" id="" />
      <input type="password" value={form.password} onChange={handleChange} name="password" id="" />
       */}

      <input onChange={handleChange} type="text" value={form.name?form.name:""} name="name" id="" />
      <input onChange={handleChange} type="password" value={form.password?form.password:""} name="password" id="" />

    </>
  )
}

export default App
