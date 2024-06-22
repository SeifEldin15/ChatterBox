import React from 'react'
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar"
import GetStartedBtn from "../../components/GetStartedBtn/GetStartedBtn"
import Supports from "../../components/Supports/Supports"
import ChatAnywhere from "../../components/ChatAnywhere/ChatAnywhere"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <>
     <Navbar /> 
     <div className="Home-Container Container Container2">
        <Supports /> 
        <h1>Your ChatGPT Powered</h1>
        <h1>AI Assistant on Website</h1>
        <GetStartedBtn />
        <ChatAnywhere />
        <Footer />
     </div>
    </>
  )
}

export default Home
