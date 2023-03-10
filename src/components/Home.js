import React from 'react'
import turners from "../img/Turners.png"

export default function Home() {
    return (
        <div className='home'>
           <img className="turners-pic-home" src={turners} alt="Mark Turner and family"></img>
        <h2 className = "home-header">Mark Edward Turner - Full Stack Web Developer </h2>
        
        <p className='home-paragraph'> Thank you for visiting my web development portfolio. Please click the links in the navbar to learn more about me, see some of my completed projects, and contact me. 
        You can also use the links at the bottom of the page to view my resume, GitHub, and LinkedIn pages.</p>
       
      </div>
    );
  }