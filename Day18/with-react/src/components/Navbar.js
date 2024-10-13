import React from 'react'

const Navbar = ({logoText}) => {
  return (
    <div>
      <div>{logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
