import React from 'react';
import {Route, Routes } from 'react-router-dom';
import '../css/app.css'

import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Projects from './Projects'

import github from "../img/github.png"
import linked from "../img/linkedin.png"
import email from "../img/email.png"




function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <footer>
        <div className="footer">
          {/* <h2>Developed by Mark Turner</h2> */}
          <ul className="socials">
            <li>
              <a href="https://github.com/TboneXX">
                <img className="appIcon" src={github} alt="github"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/mark-turner-12358475/">
                <img className="appIcon" src={linked} alt="linkedin"></img>
              </a>
            </li>
            <li>
              <a href="mailto:mark.edward.turner@gmail.com">
                <img className="appIcon" src={email} alt="email"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;