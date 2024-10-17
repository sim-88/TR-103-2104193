import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  const [data, setdata] = useState([

  ])

  const fetchData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json();
    setdata(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
    <Navbar />
      <div className="Cards">
        {data.map((item) => {
          return (
            <div key={item.id} className="Card">

              <h6>{item.title}</h6>
              <p>{item.body}</p>
            </div>
          )
        }
        )}
      </div>
    </>
  )
}

export default App
