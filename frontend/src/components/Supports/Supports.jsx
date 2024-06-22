import React from 'react'
import "./Supports.css"
import logo from "../../assets/22.png"
import BardAiIcon from "../../assets/Google Bard.png"
const Supports = () => {
  return (
    <div className='Supports-Container '>
        <p>Supports 
        </p>
        <img className='Supports-Icon Supports-logo' src={logo} alt="" />
        <img className='Supports-Icon BardAiIcon' src={BardAiIcon} alt="" />
    </div>
  )
}

export default Supports
