import React, { Component } from "react";
import turners from "../img/Turners.png"

 
class About extends Component {
  render() {
    return (
      <div className="about">
        <h2 className="about-header">About Me</h2>
        <div className="about-content">
        <img className="turners-pic" src={turners} alt="Mark Turner and family"></img>
        <p className="about-paragraph">My name is Mark Turner, I live with my wife and 3 young children in the beautiful port city of Wilmington, North Carolina. 
            Prior to becoming a Full Stack Developer, I owned and operated a successful epoxy flooring business in the Cape Fear region with my wife. 
            For the 15 years prior to that I was a drilling rig supervisor and superintendent for ExxonMobil, and had the unique opportunity to work 
            all over the world with colleagues from over 60 countries.
                 
            <br></br>
            <br></br>

           I'm currently seeking a Full Stack Developer role where I can draw on my experience working with a full MERN stack, as well as my years of experience managing people and projects. 
           I love working with and leading a high performance team to accomplish meaningful business objectives, creating value for the company, our customers, and a rewarding environment for 
           a diverse team of outstanding professionals.
            </p>

           

            
        </div>
      </div>
    );
  }
}
 
export default About;