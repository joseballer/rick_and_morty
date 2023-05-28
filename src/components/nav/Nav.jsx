import React from "react";
import SearchBar from "../search_bar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom"

function Nav({onSearch}) {
   return (
      <div className= {style.container}>
         <SearchBar onSearch={onSearch}/>
         <Link to='/about'><button>About</button></Link>
         <Link to='/home'><button>Home</button></Link>
      </div>
   );
}

export default Nav;
