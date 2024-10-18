import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to='/about' className={(e) => {return e.isActive?"red":""}
                }>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/' className={(e) => {return e.isActive?"red":""}}>Home</NavLink></li>
                <li><NavLink ></NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar
