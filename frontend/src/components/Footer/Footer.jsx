import React from 'react';
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className='Footer Container2'>
      <Logo />
      <div className="Footer-Links-Container">
        <div className="Footer-Column">
          <div className="Footer-Links-Header">
            <p>AI Tools
            </p>
          </div>
          <ul className="Footer-Links">
                 <li>Ask GPT-40
                </li>
                <li>Al Animation Maker
                </li>
                <li>PDF to PNG
                </li>
                <li>Search Agent
                </li>
          </ul>
        </div>
        <div className="Footer-Column">
          <div className="Footer-Links-Header">
            <p>Image Tools
            </p>
          </div>
          <ul className="Footer-Links">
                 <li>YouTube Summary
                 </li>
                <li>Al Image Generator
                </li>
                <li>Remove Background
                </li>
                <li>PDF to JPG
                </li>
          </ul>
        </div>
        <div className="Footer-Column">
          <div className="Footer-Links-Header">
            <p>PDF Tools
            </p>
          </div>
          <ul className="Footer-Links">
                 <li>Writing Agent
                </li>
                <li>Web Summary
                </li>
                <li>Al Detector
                </li>
                <li>Al Translator
                </li>
          </ul>
        </div>
        <div className="Footer-Column">
          <div className="Footer-Links-Header">
            <p>Productivity
            </p>
          </div>
          <ul className="Footer-Links">
                 <li>Remove Text
                 </li>
                <li>PDF to PPT
                </li>
                <li>Web Translate
                </li>
                <li>Remove Object
                </li>
          </ul>
        </div>
        <div className="Footer-Column">
          <div className="Footer-Links-Header">
            <p>Summary
            </p>
          </div>
          <ul className="Footer-Links">
                 <li>ChatPDF
                </li>
                <li>PDF to Word
                </li>
                <li>Grammar Checker
                </li>
                <li>Remove Brushed Area
                </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
