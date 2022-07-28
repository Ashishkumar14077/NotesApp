import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";
import {BrowserRouter as Link } from "react-router-dom";

function Header({setIsLogin}) {

  const logoutSubmit = ()=>{
    localStorage.clear();
    setIsLogin(false);
  }

  return (
  <header>
    <h1><HighlightIcon/>Keeper</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Note</Link></li>
        <li onClick={logoutSubmit}><Link to="/">Logout</Link></li>
    </ul>
  </header>);
}
export default Header;
