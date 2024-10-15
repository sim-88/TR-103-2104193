import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(2)

  const [color,setColor]=useState(0)

  useEffect(() => {
    alert('Count is Updated')
    setColor(color+1) //Navbar will be re-rendered
  }
  ,[count])


  return (
    <>
      <Navbar color={'red'+color} />
      <div>The Count is {count}</div>
      <button onClick={() => {
        setCount(count**2)
      }
      }>Update Count</button>
    </>
  )
}

export default App
