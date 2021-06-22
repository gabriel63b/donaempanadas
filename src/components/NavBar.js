import React from 'react'
import '../styles/NavBar.css';
import CartWidget from "./CartWidget";
import image from "../assets/delivery-man.svg";
import {Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <ul className="navBar">    
                <li className="navItem"><NavLink to="/Home" activeClassName="selected">Home</NavLink></li>
                {/* <li className="navItem"><NavLink to="/About" activeClassName="selected">About</NavLink></li>
                <li className="navItem"><NavLink to="/Productos" activeClassName="selected">Productos</NavLink></li> */}
                <li className="navItem"><NavLink to="/Login" activeClassName="selected">Ingresar</NavLink></li>
                <div className="cartStyle">
                <NavLink to="/Cart" ><CartWidget img={image}> </CartWidget></NavLink>
            </div>
            </ul>
            
            <div className="hamburger">
                <i className="fas fa-bars fa-lg"></i>
            </div>

        </nav>
    )
}

export default NavBar
