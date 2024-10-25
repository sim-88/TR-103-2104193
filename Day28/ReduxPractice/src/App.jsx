import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,multiply } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'

function App() {
  const dispatch=useDispatch()
  const count=useSelector(state=>state.counter.value)
  return (
    <>
    <Navbar/>
      <div>
        This is Count{count}
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={() => {dispatch(multiply())}
        }>*</button>
      </div>
    </>
  )
}

export default App
