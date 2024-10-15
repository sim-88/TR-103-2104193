import React, { useEffect } from 'react'

const Navbar = ({color}) => {


  useEffect(() => {
    alert('Hey I will run on evry render')
  }
  )

  // case 2 : Run only on 1st render
  useEffect(() => {
    alert('Hey Welcome to the React World')
  }
  ,[])


  // case 3 : Run only when certain value is updated
    useEffect(() => {
      alert('Color is Updated')
    }
    ,[color])


    // EXample of cleanup function
    useEffect(() => {
      return () => {
        alert('I will run on every unmount')
      }
      
    },[])
  return (
    <div>
      I am Navbar of {color} color
    </div>
  )
}

export default Navbar
