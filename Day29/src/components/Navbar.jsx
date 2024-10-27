import React from 'react'
import { memo } from 'react';

const Navbar = ({adjective}) => {
    console.log("Navbar is Rendered");
    
  return (
    <div>
      I am {adjective} Navbar
    </div>
  )
}

export default memo(Navbar)
