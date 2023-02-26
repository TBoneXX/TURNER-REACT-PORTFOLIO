import React from "react";
import { Link } from 'react-router-dom';


export default function navbar() {
  return (
    <nav className="nav">
      <ul className="navbar">
          <CustomLink to="/Home">Home</CustomLink>
          <CustomLink to="/About">About</CustomLink>
          <CustomLink to="/Projects">Projects</CustomLink>
          <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
    return (
        <li>
        <Link to = {to} {...props}>
        { children }
        </Link>
        </li>
    )
}