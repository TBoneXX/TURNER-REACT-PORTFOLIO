import React, { Component } from "react";

 
class Projects extends Component {
  render() {
    return (
        <>
          <h2 className="project-header">Projects</h2>
        <div className="project-table">
        
        <div className="completeIT">
        <figure className="todo">   
             <p className="focus-title"><a href="https://github.com/Dav3ster/CompleteIT" target={"blank"}>CompleteIT To-do Planning App</a></p>
             <p className="subtitle">To-do Planning Application - Under Construction</p>
            </figure>
        </div>
        <div className="fullStacks">
        <figure className="stacks">   
             <p className="focus-title"><a href="https://fullstackscafe.herokuapp.com/home.html" target={"blank"}>FullStacks Cafe Ordering Application</a></p>
             <p className="subtitle">Restaurant Ordering App</p>
            </figure>
        </div>

          <div className="brews">
            <figure className="work-focus">
            <p className="focus-title"><a href="https://mdh1080.github.io/Brews-and-Chews/" target={"blank"} >Brews and Chews App</a></p>
            <p className="subtitle">Find a Brewery and Restaurant in the City of your Choice</p>
            </figure>
        </div>

        <div className="pwa">
            <figure className="jate">
            <p className="focus-title"><a href="https://turner-jate.herokuapp.com/" target={"blank"} >Text Editor PWA</a></p>
            <p className="subtitle">Progressive Web Application Text Editor</p>
            </figure>
        </div>
        
      </div>



       

           

            
        


      
         </>
      
    )
  }
}
 
export default Projects;