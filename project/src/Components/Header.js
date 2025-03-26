import React from "react";
import { NavLink, Link } from 'react-router-dom';

function Header () {
    return (
    <header className="header">
        <div className="logo_container">
            <Link to="/">
                 <img src="./Images/Logo.svg" alt="little lemon logo" className="header_img"/>
            </Link>
        </div>

        <nav className="header_nav">
            <ul className="header_ul">
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "anc"} >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "anc"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" className={({ isActive }) => isActive ? "active-link" : "anc"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to="/reservations" className={({ isActive }) => isActive ? "active-link" : "anc"}>Reservations</NavLink>
                </li>
                <li>
                    <NavLink to="/orderonline" className={({ isActive }) => isActive ? "active-link" : "anc"}>Order online</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : "anc"}>Login</NavLink>
                </li>
            </ul>
        </nav>


        <img src="./Images/Menu.svg" alt="responsive menu" className="resp_menu"/>
    </header>
    )
}

export default Header;