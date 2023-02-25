import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Mark Edward Turner Portfolio</h1>
          <ul className="header">
            <li><NavLink to="./components/Home">Home</NavLink></li>
            <li><NavLink to ="./components/About">About</NavLink></li>
            <li><NavLink to ="./components/Projects">Projects</NavLink></li>
            <li>Resume placeholder</li>
            <li><NavLink to="./components/Contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
             <Route path="./components/Home" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;