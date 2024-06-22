import React from 'react'
import './Navbar.css'
import Logo from "../Logo/Logo"
import Links from "../Links/Links"
const Navbar = () => {

    const items = ['English' , 'Products', 'About Us', 'Pricing', 'Resources'];

    return (
    <div className='navbar Container'>
      <Logo />
      <Links items={items} />
      <div className="nav-buttons">
      <button className="Login-Nav">
            Log in
      </button>
      <button className="Signup-Nav">
      Add to Chrome
      </button>
      </div>
      <i class="fa-solid fa-bars navbar-bars"></i>
    </div>
  )
}

export default Navbar
