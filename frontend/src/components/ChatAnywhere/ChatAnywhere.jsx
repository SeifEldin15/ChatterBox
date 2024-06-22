import React from 'react'
import "./ChatAnywhere.css";
import ChatAnywhereImg from "../../assets/1.webp"
const ChatAnywhere = () => {
  return (
    <div className='ChatAnywhere '>
        <h2>
            Chat Everywhere
        </h2>
        <p>
            Supports macOS, Windows, iOS, iPadOS, Android and browser extension.
        </p>
      <img src={ChatAnywhereImg} alt="" />
    </div>
  )
}

export default ChatAnywhere
